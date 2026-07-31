#!/usr/bin/env python3
"""Fix public-site EN leftovers and generate companyExtraLabels for all 35 locales."""

from __future__ import annotations

import json
import re
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src/lib/i18n/content"
LEGAL = CONTENT / "legal"
CACHE_PATH = ROOT / ".wip-locale-draft/mt-cache.json"
OUT_LABELS = ROOT / "src/lib/i18n/company-extra-labels.ts"

LOCALES = [
    "hu", "en", "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv",
    "lt", "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]
DRAFT = [c for c in LOCALES if c not in ("hu", "en")]
GT_TARGET = {"nb": "no"}

EN_EXTRAS = {
    "city": "Headquarters / city",
    "driverCount": "Number of drivers",
    "terms": "I accept the terms of use. *",
    "termsError": "Accepting the terms of use is required.",
    "cityPrefix": "City",
    "driversPrefix": "Drivers",
}

HU_EXTRAS = {
    "city": "Székhely / város",
    "driverCount": "Sofőrök száma",
    "terms": "Elfogadom a felhasználási feltételeket. *",
    "termsError": "A felhasználási feltételek elfogadása kötelező.",
    "cityPrefix": "Város",
    "driversPrefix": "Sofőrök",
}

DE_EXTRAS = {
    "city": "Sitz / Stadt",
    "driverCount": "Anzahl der Fahrer",
    "terms": "Ich akzeptiere die Nutzungsbedingungen. *",
    "termsError": "Die Akzeptanz der Nutzungsbedingungen ist erforderlich.",
    "cityPrefix": "Stadt",
    "driversPrefix": "Fahrer",
}

# Exact EN phrases that must be replaced in draft locale files (path → list of EN strings).
KNOWN_LEFTOVERS = {
    "content/nb.ts": ["Responsible use — important notices"],
    "content/legal/nb.ts": [
        "Driver's own trip and document data per company rules.",
    ],
    "content/pt.ts": [
        "Thank you. Your application is under review. Access is not granted until a ViaNexis admin approves it.",
        "Online applications are being prepared. Contact support@vianexis.eu or try again later.",
    ],
    "content/ru.ts": [
        "Access is currently available through a controlled pilot program. Activation follows an individual review.",
    ],
    "content/legal/hu.ts": [
        "Access is currently available through a controlled pilot program. No public Play Store download.",
    ],
}

HU_OVERRIDE = {
    "Access is currently available through a controlled pilot program. No public Play Store download.": (
        "A hozzáférés jelenleg ellenőrzött pilot program keretében érhető el. Nincs nyilvános Play Áruház letöltés."
    ),
}


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
    )


def load_cache() -> dict:
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
    return {}


def save_cache(cache: dict) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def translate(text: str, locale: str, cache: dict, translator_factory) -> str:
    if locale == "en":
        return text
    if locale == "hu" and text in HU_OVERRIDE:
        return HU_OVERRIDE[text]
    key = f"{locale}|{text}"
    if key in cache:
        return cache[key]
    target = GT_TARGET.get(locale, locale)
    try:
        out = translator_factory(target).translate(text)
        cleaned = (out or text).strip() or text
    except Exception as exc:
        print(f"  MT fail {locale}: {exc!r} :: {text[:70]!r}", flush=True)
        cleaned = text
    if "ViaNexis" in text and "ViaNexis" not in cleaned:
        cleaned = cleaned.replace("Vianexis", "ViaNexis").replace("vianexis", "ViaNexis")
    cache[key] = cleaned
    return cleaned


def replace_exact(path: Path, mapping: dict[str, str]) -> bool:
    text = path.read_text(encoding="utf-8")
    new = text
    for src, dst in mapping.items():
        if src == dst:
            continue
        # Replace only double-quoted TS string literals matching src
        pattern = '"' + re.escape(src).replace(r"\ ", " ") + '"'
        # simpler: direct substring replace of quoted form
        quoted_src = f'"{escape_ts(src)}"'
        quoted_dst = f'"{escape_ts(dst)}"'
        if quoted_src in new:
            new = new.replace(quoted_src, quoted_dst)
        elif src in new:
            new = new.replace(src, dst)
    if new != text:
        path.write_text(new, encoding="utf-8")
        return True
    return False


def fix_leftovers(cache: dict, translator_factory) -> None:
    for rel, phrases in KNOWN_LEFTOVERS.items():
        path = ROOT / "src/lib/i18n" / rel if rel.startswith("content/") else ROOT / "src/lib/i18n" / rel
        # paths are like content/nb.ts relative to src/lib/i18n
        path = ROOT / "src/lib/i18n" / rel
        locale = path.stem if path.parent.name != "legal" else path.stem
        if path.parent.name == "legal":
            locale = path.stem
        # infer locale from filename
        locale = path.stem
        print(f"fix {rel} ({locale})...", flush=True)
        mapping = {
            p: translate(p, locale, cache, translator_factory) for p in phrases
        }
        changed = replace_exact(path, mapping)
        print(f"  {'updated' if changed else 'no change'}: {mapping}", flush=True)
        save_cache(cache)
        time.sleep(0.2)


def generate_extra_labels(cache: dict, translator_factory) -> None:
    labels: dict[str, dict[str, str]] = {
        "hu": HU_EXTRAS,
        "en": EN_EXTRAS,
        "de": DE_EXTRAS,
    }
    for locale in DRAFT:
        if locale == "de":
            continue
        print(f"extras/{locale}...", flush=True)
        row = {}
        for key, en in EN_EXTRAS.items():
            row[key] = translate(en, locale, cache, translator_factory)
            time.sleep(0.08)
        labels[locale] = row
        save_cache(cache)

    lines = [
        "/** Company application form extras — generated for all 35 locales. */",
        "import type { Locale } from './types';",
        "",
        "export type CompanyExtraLabels = {",
        "  city: string;",
        "  driverCount: string;",
        "  terms: string;",
        "  termsError: string;",
        "  cityPrefix: string;",
        "  driversPrefix: string;",
        "};",
        "",
        "export const companyExtraLabels: Record<Locale, CompanyExtraLabels> = {",
    ]
    for locale in LOCALES:
        row = labels[locale]
        lines.append(f"  {locale}: {{")
        for k, v in row.items():
            lines.append(f'    {k}: "{escape_ts(v)}",')
        lines.append("  },")
    lines.append("};")
    lines.append("")
    lines.append(
        "export function getCompanyExtraLabels(locale: Locale): CompanyExtraLabels {"
    )
    lines.append("  return companyExtraLabels[locale] ?? companyExtraLabels.en;")
    lines.append("}")
    lines.append("")
    OUT_LABELS.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"wrote {OUT_LABELS}", flush=True)


def main() -> int:
    from deep_translator import GoogleTranslator

    def translator_factory(target: str):
        return GoogleTranslator(source="en", target=target)

    cache = load_cache()
    fix_leftovers(cache, translator_factory)
    generate_extra_labels(cache, translator_factory)
    save_cache(cache)
    print("DONE", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
