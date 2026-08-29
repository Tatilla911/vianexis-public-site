#!/usr/bin/env python3
"""Generate complete Company Assessment labels for all 35 public-site locales.

Reads golden HU/EN from .wip-locale-draft/assessment-golden.json
(produced by scripts/export-company-assessment-golden.mjs).

HU + EN are never machine-overwritten.
Other locales: EN → deep_translator with retries + MyMemory fallback.
India Driver-App-only languages are excluded (public-site = 35).
"""

from __future__ import annotations

import json
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GOLDEN_PATH = ROOT / ".wip-locale-draft/assessment-golden.json"
CACHE_PATH = ROOT / ".wip-locale-draft/assessment-mt-cache.json"
OUT = ROOT / "src/lib/i18n/company-assessment-labels.generated.ts"

LOCALES = [
    "hu", "en", "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv",
    "lt", "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]
DRAFT = [c for c in LOCALES if c not in ("hu", "en")]
GT_TARGET = {"nb": "no"}
# MyMemory wants regional codes for some languages
MM_TARGET = {
    "nb": "no-NO",
    "sr": "sr-Latn",
    "zh": "zh-CN",
}
PROTECT = [
    "ViaNexis", "TMS", "ERP", "API", "ADR", "SSO", "OCR", "AI",
    "CMR", "eFTI", "GPS", "SLA", "VAT", "EU",
]
SHELL_KEYS = [
    "title", "subtitle", "continueTitle", "save", "saving", "saved", "next",
    "back", "submit", "submitting", "submittedTitle", "submittedBody",
    "summaryTitle", "summaryEmpty", "invalidLink", "expiredLink", "loading",
    "stepCompany", "stepSize", "stepOperations", "stepModules",
    "stepIntegrations", "stepRollout", "stepSummary", "yes", "no",
]


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace("\n", "\\n")
        .replace("\r", "")
    )


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save_cache(cache: dict) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def protect(text: str) -> tuple[str, dict[str, str]]:
    protected = text
    placeholders: dict[str, str] = {}
    for i, token in enumerate(PROTECT):
        if token in protected:
            ph = f"__P{i}__"
            placeholders[ph] = token
            protected = protected.replace(token, ph)
    return protected, placeholders


def unprotect(text: str, placeholders: dict[str, str]) -> str:
    cleaned = text
    for ph, token in placeholders.items():
        cleaned = cleaned.replace(ph, token)
        cleaned = cleaned.replace(ph.lower(), token).replace(ph.upper(), token)
    return cleaned.replace("Vianexis", "ViaNexis").replace("vianexis", "ViaNexis")


def translate_once(text: str, locale: str) -> str | None:
    from deep_translator import GoogleTranslator, MyMemoryTranslator

    protected, placeholders = protect(text)
    gt = GT_TARGET.get(locale, locale)
    try:
        out = GoogleTranslator(source="en", target=gt).translate(protected)
        if out and out.strip() and out.strip() != protected:
            return unprotect(out.strip(), placeholders)
        if out and out.strip():
            return unprotect(out.strip(), placeholders)
    except Exception:
        pass

    mm = MM_TARGET.get(locale, locale)
    # MyMemory often wants xx-XX; fall back to bare code
    for target in (mm if "-" in mm else f"{mm}-{mm.upper()}", mm, gt):
        try:
            out = MyMemoryTranslator(source="en-GB", target=target).translate(protected)
            if out and out.strip():
                return unprotect(out.strip(), placeholders)
        except Exception:
            continue
    return None


def translate(text: str, locale: str, cache: dict) -> str:
    key = f"{locale}|{text}"
    cached = cache.get(key)
    # Keep successful translations; retry EN leftovers
    if isinstance(cached, str) and cached.strip() and cached != text:
        return cached

    for attempt in range(2):
        out = translate_once(text, locale)
        if out and out != text:
            cache[key] = out
            return out
        if out:
            # identical to source — try other provider on next loop
            pass
        time.sleep(0.25 * (attempt + 1))

    # Accept identical output from last attempt as better than hanging
    # ONLY when the target language naturally shares the English spelling
    # (handled by curated seeds). Prefer leaving unresolved over silent EN
    # leftovers so fix-company-assessment-unresolved.py can catch them.
    out = translate_once(text, locale)
    if out and out != text:
        cache[key] = out
        return out

    print(f"  MT unresolved {locale}: {text[:70]!r}", flush=True)
    cache[key] = text
    return text


def emit_map(name: str, mapping: dict[str, str], indent: int = 4) -> list[str]:
    pad = " " * indent
    lines = [f"{pad}{name}: {{"]
    for k, v in mapping.items():
        lines.append(f"{pad}  {k}: '{escape_ts(v)}',")
    lines.append(f"{pad}}},")
    return lines


def main() -> int:
    if not GOLDEN_PATH.exists():
        raise SystemExit(
            f"Missing {GOLDEN_PATH}. Run: npx tsx scripts/export-company-assessment-golden.mjs"
        )

    golden = load_json(GOLDEN_PATH)
    en = golden["en"]
    hu = golden["hu"]
    cache = load_json(CACHE_PATH) if CACHE_PATH.exists() else {}

    packs = {"en": en, "hu": hu}

    for locale in DRAFT:
        print(f"locale {locale}...", flush=True)
        shell = {k: translate(en[k], locale, cache) for k in SHELL_KEYS}
        fields = {
            k: translate(v, locale, cache) for k, v in en["fields"].items()
        }
        helpers = {
            k: translate(v, locale, cache) for k, v in en["helpers"].items()
        }
        modules = {
            k: translate(v, locale, cache) for k, v in en["modules"].items()
        }
        packs[locale] = {
            **shell,
            "fields": fields,
            "helpers": helpers,
            "modules": modules,
        }
        save_cache(cache)
        time.sleep(0.15)

    lines = [
        "/**",
        " * Company Assessment labels — generated for all 35 public-site locales.",
        " * HU/EN golden (approved). Other locales: machine draft from EN.",
        " * Regenerate: npx tsx scripts/export-company-assessment-golden.mjs &&",
        " *   python3 scripts/generate-company-assessment-labels.py",
        " * India Driver-App-only languages are excluded.",
        " */",
        "import type { Locale } from './types';",
        "import type { CompanyAssessmentLabels } from './company-assessment-labels';",
        "",
        "export const companyAssessmentLabelsGenerated: Record<",
        "  Locale,",
        "  CompanyAssessmentLabels",
        "> = {",
    ]

    for locale in LOCALES:
        pack = packs[locale]
        lines.append(f"  {locale}: {{")
        for k in SHELL_KEYS:
            lines.append(f"    {k}: '{escape_ts(pack[k])}',")
        lines.extend(emit_map("fields", pack["fields"]))
        lines.extend(emit_map("helpers", pack["helpers"]))
        lines.extend(emit_map("modules", pack["modules"]))
        lines.append("  },")

    lines.append("};")
    lines.append("")
    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"wrote {OUT}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
