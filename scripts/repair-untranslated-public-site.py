#!/usr/bin/env python3
"""Repair untranslated public-site strings across all draft locales.

1) Replace EN-identical marketing/legal strings in content/*.ts and legal/*.ts
2) Generate visual-marketing locale modules for all 35 languages
3) Cache MT results under .wip-locale-draft/mt-cache.json
"""

from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / ".wip-locale-draft"))

CONTENT = ROOT / "src/lib/i18n/content"
LEGAL = CONTENT / "legal"
VISUAL = ROOT / "src/lib/i18n/visual-marketing.ts"
OUT_DIR = ROOT / "src/lib/i18n/visual-marketing"
CACHE_PATH = ROOT / ".wip-locale-draft/mt-cache.json"
MANIFEST_PATH = ROOT / ".wip-locale-draft/visual-en.json"

DRAFT = [
    "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv", "lt",
    "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]

PROTECTED_EXACT = {
    "ViaNexis", "CMR", "ADR", "eFTI", "API", "PDF", "QR", "FCM", "APNs",
    "EPAL", "CHEP", "GMR", "PBN", "OCR", "AI", "SOS", "PIN", "EUR",
    "VN-2407-A18", "Live",
}

OG_SKIP_PREFIXES = ("http://", "https://", "mailto:")

GT_TARGET = {
    "nb": "no",
    "zh": "zh-CN",
}


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
    )


def extract_strings(text: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(r'"((?:\\.|[^"\\])*)"', text):
        raw = m.group(1)
        s = (
            raw.replace("\\\\", "\\")
            .replace('\\"', '"')
            .replace("\\n", "\n")
            .replace("\\t", "\t")
        )
        out.append(s)
    return out


def is_technical(s: str) -> bool:
    if s in PROTECTED_EXACT:
        return True
    if any(s.startswith(p) for p in OG_SKIP_PREFIXES):
        return True
    if "@" in s and " " not in s:
        return True
    if re.fullmatch(r"[a-z0-9_./:-]+", s) and " " not in s:
        return True
    if re.fullmatch(r"[A-Z0-9_./:-]{2,}", s) and " " not in s and len(s) <= 12:
        return True
    return False


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
    key = f"{locale}|{text}"
    if key in cache:
        return cache[key]
    target = GT_TARGET.get(locale, locale)
    try:
        translator = translator_factory(target)
        out = translator.translate(text)
        cleaned = (out or text).strip() or text
    except Exception as exc:
        print(f"  MT fail {locale}: {exc!r} :: {text[:60]!r}", flush=True)
        cleaned = text
    # restore placeholders
    for token in re.findall(r"\{[a-zA-Z0-9_]+\}", text):
        if token not in cleaned:
            # best-effort: keep original if placeholders broken
            cleaned = text
            break
    for brand in PROTECTED_EXACT:
        # ensure brand spelling preserved when present in source
        if brand in text and brand not in cleaned and brand.lower() in cleaned.lower():
            cleaned = re.sub(re.escape(brand), brand, cleaned, flags=re.I)
    cache[key] = cleaned
    return cleaned


def replace_string_literals(text: str, mapping: dict[str, str]) -> str:
    def repl(m: re.Match) -> str:
        raw = m.group(1)
        s = (
            raw.replace("\\\\", "\\")
            .replace('\\"', '"')
            .replace("\\n", "\n")
            .replace("\\t", "\t")
        )
        if s in mapping and mapping[s] != s:
            return f'"{escape_ts(mapping[s])}"'
        return m.group(0)

    return re.sub(r'"((?:\\.|[^"\\])*)"', repl, text)


def repair_content_files(cache: dict, translator_factory) -> None:
    en_m = {
        s
        for s in extract_strings((CONTENT / "en.ts").read_text(encoding="utf-8"))
        if len(s) > 12 and not is_technical(s)
    }
    en_l = {
        s
        for s in extract_strings((LEGAL / "en.ts").read_text(encoding="utf-8"))
        if len(s) > 12 and not is_technical(s)
    }

    for locale in DRAFT:
        for kind, path, en_set in (
            ("marketing", CONTENT / f"{locale}.ts", en_m),
            ("legal", LEGAL / f"{locale}.ts", en_l),
        ):
            text = path.read_text(encoding="utf-8")
            present = [
                s
                for s in extract_strings(text)
                if s in en_set and not is_technical(s)
            ]
            unique = sorted(set(present), key=len, reverse=True)
            if not unique:
                print(f"{locale}/{kind}: clean", flush=True)
                continue
            print(f"{locale}/{kind}: translating {len(unique)} EN leftovers...", flush=True)
            mapping: dict[str, str] = {}
            for i, src in enumerate(unique, 1):
                mapping[src] = translate(src, locale, cache, translator_factory)
                if i % 10 == 0:
                    save_cache(cache)
                    time.sleep(0.15)
                else:
                    time.sleep(0.08)
            new_text = replace_string_literals(text, mapping)
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
            save_cache(cache)
            print(f"{locale}/{kind}: done", flush=True)


def parse_visual_en_object() -> dict:
    """Parse visualMarketingEn via node for faithful structure."""
    script = r"""
const fs = require('fs');
const vm = require('vm');
const path = process.argv[1];
const src = fs.readFileSync(path, 'utf8');
const start = src.indexOf('export const visualMarketingEn');
const end = src.indexOf('export function resolveVisualMarketing');
let block = src.slice(start, end);
block = block.replace(/^export const visualMarketingEn:\s*VisualMarketingContent\s*=\s*/, 'module.exports = ');
block = block.replace(/;\s*$/, '');
const sandbox = { module: { exports: {} }, exports: {} };
vm.runInNewContext(block, sandbox, { timeout: 5000 });
process.stdout.write(JSON.stringify(sandbox.module.exports, null, 2));
"""
    import subprocess

    result = subprocess.run(
        ["node", "-e", script, str(VISUAL)],
        cwd=str(ROOT),
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit(f"Failed to parse visual EN:\n{result.stderr}")
    data = json.loads(result.stdout)
    MANIFEST_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return data


def walk_strings(obj, path="$"):
    if isinstance(obj, str):
        yield path, obj
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            yield from walk_strings(item, f"{path}[{i}]")
    elif isinstance(obj, dict):
        for k, v in obj.items():
            yield from walk_strings(v, f"{path}.{k}")


def set_path(obj, path: str, value: str) -> None:
    # path like $.a.b-c[0].d — support hyphenated object keys
    tokens = re.findall(r"\.([A-Za-z0-9_-]+)|\[(\d+)\]", path)
    cur = obj
    parsed = []
    for name, idx in tokens:
        parsed.append(int(idx) if idx != "" else name)
    for i, key in enumerate(parsed[:-1]):
        cur = cur[key]
    cur[parsed[-1]] = value


def symbol_name(locale: str) -> str:
    if locale == "nb":
        return "visualMarketingNb"
    return "visualMarketing" + locale[:1].upper() + locale[1:]


def to_ts_literal(obj, indent: int = 0) -> str:
    pad = "  " * indent
    if isinstance(obj, str):
        return f'"{escape_ts(obj)}"'
    if isinstance(obj, bool):
        return "true" if obj else "false"
    if isinstance(obj, list):
        if not obj:
            return "[]"
        items = ",\n".join(f"{pad}  {to_ts_literal(item, indent + 1)}" for item in obj)
        return f"[\n{items}\n{pad}]"
    if isinstance(obj, dict):
        lines = []
        for k, v in obj.items():
            key = k if re.fullmatch(r"[A-Za-z_][A-Za-z0-9_]*", k) else f'"{escape_ts(k)}"'
            lines.append(f"{pad}  {key}: {to_ts_literal(v, indent + 1)},")
        return "{\n" + "\n".join(lines) + f"\n{pad}}}"
    raise TypeError(type(obj))


UI_CHROME_EN = {
    "language": "Language",
    "draftSuffix": " · draft",
    "breadcrumb": "Breadcrumb",
    "primaryNav": "Primary",
    "importantNotice": "Important notice",
}


def generate_visual_locales(cache: dict, translator_factory, en_obj: dict) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Enrich EN object with ui chrome (also used as translation source)
    en_obj = json.loads(json.dumps(en_obj))  # deep copy
    en_obj["ui"] = dict(UI_CHROME_EN)

    # Parse HU from TS similarly — keep existing HU for visual body, add ui
    hu_ui = {
        "language": "Nyelv",
        "draftSuffix": " · piszkozat",
        "breadcrumb": "Morzsamenü",
        "primaryNav": "Fő navigáció",
        "importantNotice": "Fontos tudnivaló",
    }

    leaves = [(p, s) for p, s in walk_strings(en_obj) if not is_technical(s)]
    unique_en = sorted({s for _, s in leaves}, key=len, reverse=True)
    print(f"visual: {len(unique_en)} unique EN strings × {len(DRAFT)} locales", flush=True)

    # Write EN module
    (OUT_DIR / "en.ts").write_text(
        'import type { VisualMarketingContent } from "../visual-marketing";\n\n'
        f"export const visualMarketingEn: VisualMarketingContent = {to_ts_literal(en_obj)};\n",
        encoding="utf-8",
    )

    # Build HU from existing export by reading visualMarketingHu via node
    script = r"""
const fs = require('fs');
const vm = require('vm');
const path = process.argv[1];
const src = fs.readFileSync(path, 'utf8');
const start = src.indexOf('export const visualMarketingHu');
const end = src.indexOf('export const visualMarketingEn');
let block = src.slice(start, end);
block = block.replace(/^export const visualMarketingHu:\s*VisualMarketingContent\s*=\s*/, 'module.exports = ');
block = block.replace(/;\s*$/, '');
const sandbox = { module: { exports: {} }, exports: {} };
vm.runInNewContext(block, sandbox, { timeout: 5000 });
process.stdout.write(JSON.stringify(sandbox.module.exports));
"""
    import subprocess

    hu_raw = subprocess.run(
        ["node", "-e", script, str(VISUAL)],
        cwd=str(ROOT),
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    hu_obj = json.loads(hu_raw)
    hu_obj["ui"] = hu_ui
    (OUT_DIR / "hu.ts").write_text(
        'import type { VisualMarketingContent } from "../visual-marketing";\n\n'
        f"export const visualMarketingHu: VisualMarketingContent = {to_ts_literal(hu_obj)};\n",
        encoding="utf-8",
    )

    for locale in DRAFT:
        print(f"visual/{locale}: translating...", flush=True)
        mapping: dict[str, str] = {}
        for i, src in enumerate(unique_en, 1):
            mapping[src] = translate(src, locale, cache, translator_factory)
            if i % 20 == 0:
                save_cache(cache)
                print(f"  {locale}: {i}/{len(unique_en)}", flush=True)
                time.sleep(0.12)
            else:
                time.sleep(0.05)
        save_cache(cache)
        obj = json.loads(json.dumps(en_obj))
        for path, src in leaves:
            if is_technical(src):
                continue
            set_path(obj, path, mapping[src])
        sym = symbol_name(locale)
        (OUT_DIR / f"{locale}.ts").write_text(
            'import type { VisualMarketingContent } from "../visual-marketing";\n\n'
            f"export const {sym}: VisualMarketingContent = {to_ts_literal(obj)};\n",
            encoding="utf-8",
        )
        print(f"visual/{locale}: written", flush=True)
        time.sleep(0.15)

    # registry
    lines = [
        'import type { VisualMarketingContent } from "../visual-marketing";',
        'import { visualMarketingHu } from "./hu";',
        'import { visualMarketingEn } from "./en";',
    ]
    for locale in DRAFT:
        sym = symbol_name(locale)
        lines.append(f'import {{ {sym} }} from "./{locale}";')
    lines.append("")
    lines.append(
        "export const visualMarketingByLocale: Record<string, VisualMarketingContent> = {"
    )
    lines.append("  hu: visualMarketingHu,")
    lines.append("  en: visualMarketingEn,")
    for locale in DRAFT:
        lines.append(f"  {locale}: {symbol_name(locale)},")
    lines.append("};")
    lines.append("")
    (OUT_DIR / "registry.ts").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    try:
        from deep_translator import GoogleTranslator
    except Exception as exc:
        raise SystemExit(f"deep_translator required: {exc}") from exc

    def translator_factory(target: str):
        return GoogleTranslator(source="en", target=target)

    cache = load_cache()
    mode = sys.argv[1] if len(sys.argv) > 1 else "all"

    if mode in ("all", "content"):
        repair_content_files(cache, translator_factory)

    if mode in ("all", "visual"):
        en_obj = parse_visual_en_object()
        generate_visual_locales(cache, translator_factory, en_obj)

    save_cache(cache)
    print("DONE", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
