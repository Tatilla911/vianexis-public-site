#!/usr/bin/env python3
"""Generate full public site locale content files from EN manifest."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scripts/en-manifest.json"
CONTENT_DIR = ROOT / "src/lib/i18n/content"
LEGAL_DIR = CONTENT_DIR / "legal"

OFFICIAL_DRAFT = (
    "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv", "lt",
    "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
)

PROTECTED = {
    "ViaNexis", "CMR", "ADR", "eFTI", "API", "PDF", "QR", "FCM", "APNs",
    "EPAL", "CHEP", "GMR", "PBN", "OCR", "AI", "SOS", "PIN", "EUR",
}

OG_LOCALE = {
    "de": "de_DE", "ro": "ro_RO", "sk": "sk_SK", "pl": "pl_PL", "cs": "cs_CZ",
    "bg": "bg_BG", "hr": "hr_HR", "sr": "sr_SR", "sl": "sl_SI", "et": "et_EE",
    "lv": "lv_LV", "lt": "lt_LT", "fi": "fi_FI", "sv": "sv_SE", "da": "da_DK",
    "nb": "nb_NO", "nl": "nl_NL", "fr": "fr_FR", "es": "es_ES", "pt": "pt_PT",
    "it": "it_IT", "el": "el_GR", "tr": "tr_TR", "uk": "uk_UA", "ru": "ru_RU",
    "sq": "sq_AL", "mk": "mk_MK", "bs": "bs_BA", "be": "be_BY", "ga": "ga_IE",
    "mt": "mt_MT", "is": "is_IS", "ar": "ar_SA",
}

REVIEW_NOTICE = {
    "de": "Diese Übersetzung wird überprüft.",
    "fr": "Cette traduction est en cours de révision.",
    "es": "Esta traducción está en revisión.",
    "it": "Questa traduzione è in revisione.",
    "pl": "To tłumaczenie jest w trakcie weryfikacji.",
    "ro": "Această traducere este în curs de verificare.",
}


def symbol_prefix(locale: str, kind: str) -> str:
    if locale == "nb":
        return f"{kind}Nb"
    return kind + locale[:1].upper() + locale[1:]


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
    )


def to_ts_literal(obj, indent: int = 0) -> str:
    pad = "  " * indent
    if isinstance(obj, str):
        return f'"{escape_ts(obj)}"'
    if isinstance(obj, bool):
        return "true" if obj else "false"
    if isinstance(obj, (int, float)):
        return str(obj)
    if obj is None:
        return "null"
    if isinstance(obj, list):
        if not obj:
            return "[]"
        items = ",\n".join(f"{pad}  {to_ts_literal(item, indent + 1)}" for item in obj)
        return f"[\n{items}\n{pad}]"
    if isinstance(obj, dict):
        if not obj:
            return "{}"
        lines = []
        for key, value in obj.items():
            lines.append(f"{pad}  {key}: {to_ts_literal(value, indent + 1)},")
        return "{\n" + "\n".join(lines) + f"\n{pad}}}"
    raise TypeError(type(obj))


def protect_terms(text: str) -> tuple[str, dict[str, str]]:
    tokens: dict[str, str] = {}
    out = text
    for i, term in enumerate(sorted(PROTECTED, key=len, reverse=True)):
        if term in out:
            token = f"__PROTECT_{i}__"
            tokens[token] = term
            out = out.replace(term, token)
    return out, tokens


def restore_terms(text: str, tokens: dict[str, str]) -> str:
    out = text
    for token, term in tokens.items():
        out = out.replace(token, term)
    return out


def translate_text(text: str, locale: str) -> str:
    from deep_translator import GoogleTranslator

    protected, tokens = protect_terms(text)
    if not protected.strip():
        return text
    try:
        translated = GoogleTranslator(source="en", target=locale).translate(protected)
    except Exception:
        return text
    return restore_terms(translated or text, tokens)


def walk_translate(node, locale: str, cache: dict[str, str]):
    if isinstance(node, str):
        if node in cache:
            return cache[node]
        if re.fullmatch(r"[a-z0-9-]+", node) and "-" in node:
            return node
        translated = translate_text(node, locale)
        cache[node] = translated
        return translated
    if isinstance(node, list):
        return [walk_translate(item, locale, cache) for item in node]
    if isinstance(node, dict):
        return {key: walk_translate(value, locale, cache) for key, value in node.items()}
    return node


def write_marketing(locale: str, data: dict) -> None:
    content_name = symbol_prefix(locale, "content")
    legal_name = symbol_prefix(locale, "legal")
    lines = [
        'import type { SiteContent } from "../types";',
        f'import {{ {legal_name} }} from "./legal/{locale}";',
        "",
        f"export const {content_name}: SiteContent = {{",
    ]
    for key, value in data.items():
        lines.append(f"  {key}: {to_ts_literal(value, 1)},")
    lines.append(f"  legal: {legal_name},")
    lines.append("};")
    lines.append("")
    (CONTENT_DIR / f"{locale}.ts").write_text("\n".join(lines), encoding="utf-8")


def write_legal(locale: str, data: dict) -> None:
    legal_name = symbol_prefix(locale, "legal")
    notice = REVIEW_NOTICE.get(locale)
    if notice and "versionBadge" in data:
        data = dict(data)
        data["versionBadge"] = f"{data['versionBadge']} · {notice}"
    lines = [
        'import type { LegalContent } from "../legal-types";',
        "",
        f"export const {legal_name}: LegalContent = {to_ts_literal(data, 0)};",
        "",
    ]
    (LEGAL_DIR / f"{locale}.ts").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    locales = sys.argv[1:] if len(sys.argv) > 1 else list(OFFICIAL_DRAFT)
    if not MANIFEST.exists():
        raise SystemExit("Run: npx tsx scripts/export-en-manifest.mts")

    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    marketing_en = manifest["marketing"]
    legal_en = manifest["legal"]

    for locale in locales:
        print(f"=== {locale} ===", flush=True)
        cache: dict[str, str] = {}
        marketing = walk_translate(marketing_en, locale, cache)
        marketing["meta"]["ogLocale"] = OG_LOCALE.get(locale, f"{locale}_{locale.upper()}")
        marketing["meta"]["ogAlternateLocale"] = "en_US"
        legal = walk_translate(legal_en, locale, cache)
        write_legal(locale, legal)
        write_marketing(locale, marketing)
        print(f"wrote {locale}", flush=True)

    print("done")


if __name__ == "__main__":
    main()
