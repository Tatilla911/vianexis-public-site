#!/usr/bin/env python3
"""Generate enterprise-integration labels for all 35 public-site locales.

HU + EN are never machine-overwritten.
Other locales: unique EN strings → deep_translator (cached).
"""

from __future__ import annotations

import json
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE_PATH = ROOT / ".wip-locale-draft/enterprise-integration-mt-cache.json"
GOLDEN_PATH = ROOT / ".wip-locale-draft/enterprise-integration-golden.json"
OUT = ROOT / "src/lib/i18n/enterprise-integration/catalog.generated.ts"

LOCALES = [
    "hu", "en", "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv",
    "lt", "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]
DRAFT = [c for c in LOCALES if c not in ("hu", "en")]
GT_TARGET = {"nb": "no"}
MM_TARGET = {"nb": "no-NO", "sr": "sr-Latn"}
PROTECT = [
    "ViaNexis", "Partner API", "TMS", "ERP", "API", "GPS", "CMR", "POD",
    "eCMR", "eFTI", "WMS", "webhook", "webhooks", "Telematics", "Tachograph",
    "Sandbox", "OCR", "SSO",
]
# Keep short product labels as-is (common across languages).
KEEP_AS_IS = {
    "TMS",
    "ERP",
    "Telematics",
    "Accounting",
    "eCMR / eFTI",
    "WMS / yard / gate",
    "Routing / toll / fuel",
    "Partner API / webhooks",
    "Tachograph / data providers",
}


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace("\n", "\\n")
        .replace("\r", "")
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
        if out and out.strip():
            return unprotect(out.strip(), placeholders)
    except Exception:
        pass

    mm = MM_TARGET.get(locale, locale)
    for target in (mm if "-" in str(mm) else f"{mm}-{str(mm).upper()}", mm, gt):
        try:
            out = MyMemoryTranslator(source="en-GB", target=target).translate(protected)
            if out and out.strip():
                return unprotect(out.strip(), placeholders)
        except Exception:
            continue
    return None


def collect_strings(node, acc: set[str]) -> None:
    if isinstance(node, str):
        acc.add(node)
    elif isinstance(node, list):
        for item in node:
            collect_strings(item, acc)
    elif isinstance(node, dict):
        for value in node.values():
            collect_strings(value, acc)


def map_strings(node, mapping: dict[str, str]):
    if isinstance(node, str):
        return mapping.get(node, node)
    if isinstance(node, list):
        return [map_strings(item, mapping) for item in node]
    if isinstance(node, dict):
        return {k: map_strings(v, mapping) for k, v in node.items()}
    return node


def emit_object(obj: dict, indent: int = 2) -> str:
    pad = " " * indent
    lines = ["{"]
    for key, value in obj.items():
        if isinstance(value, str):
            lines.append(f"{pad}{key}: '{escape_ts(value)}',")
        elif isinstance(value, list):
            if value and isinstance(value[0], dict):
                lines.append(f"{pad}{key}: [")
                for item in value:
                    lines.append(f"{pad}  {{")
                    for ik, iv in item.items():
                        lines.append(f"{pad}    {ik}: '{escape_ts(iv)}',")
                    lines.append(f"{pad}  }},")
                lines.append(f"{pad}],")
            else:
                lines.append(f"{pad}{key}: [")
                for item in value:
                    lines.append(f"{pad}  '{escape_ts(item)}',")
                lines.append(f"{pad}],")
        else:
            raise TypeError(f"Unsupported value for {key}")
    lines.append("}")
    return "\n".join(lines)


def translate_locale(locale: str, unique: list[str], cache: dict) -> dict[str, str]:
    mapping: dict[str, str] = {}
    for text in unique:
        if text in KEEP_AS_IS:
            mapping[text] = text
            continue
        key = f"{locale}|{text}"
        cached = cache.get(key)
        if isinstance(cached, str) and cached.strip() and cached != text:
            mapping[text] = cached
            continue
        # short retry loop
        out = None
        for _ in range(2):
            out = translate_once(text, locale)
            if out and out.strip() and out != text:
                break
            time.sleep(0.2)
        if not out or not out.strip():
            out = text
        cache[key] = out
        mapping[text] = out
        time.sleep(0.05)
    return mapping


def main() -> None:
    golden = json.loads(GOLDEN_PATH.read_text(encoding="utf-8"))
    cache: dict = {}
    if CACHE_PATH.exists():
        cache = json.loads(CACHE_PATH.read_text(encoding="utf-8"))

    unique: set[str] = set()
    collect_strings(golden["en"], unique)
    unique_list = sorted(unique, key=len)
    print(f"Unique EN strings: {len(unique_list)}")

    catalogs: dict[str, dict] = {
        "hu": golden["hu"],
        "en": golden["en"],
    }

    # Translate draft locales with modest parallelism.
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {
            pool.submit(translate_locale, locale, unique_list, cache): locale
            for locale in DRAFT
        }
        for fut in as_completed(futures):
            locale = futures[fut]
            mapping = fut.result()
            catalogs[locale] = map_strings(golden["en"], mapping)
            print(f"Done {locale}")
            CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
            CACHE_PATH.write_text(
                json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

    parts = [
        "/** Auto-generated by scripts/generate-enterprise-integration-labels.py */",
        'import type { EnterpriseIntegrationContent } from "./types";',
        'import type { LanguageCode } from "../language-registry";',
        "",
        "export const enterpriseIntegrationByLocale: Record<",
        "  LanguageCode,",
        "  EnterpriseIntegrationContent",
        "> = {",
    ]
    for locale in LOCALES:
        parts.append(f"  {locale}: {emit_object(catalogs[locale])},")
    parts.append("};")
    parts.append("")

    OUT.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUT} ({len(LOCALES)} locales)")


if __name__ == "__main__":
    main()
