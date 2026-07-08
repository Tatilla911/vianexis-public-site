#!/usr/bin/env python3
"""Fix generated locale content: strip duplicate inline legal, restore protect tokens."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src/lib/i18n/content"
LEGAL = CONTENT / "legal"

PROTECTED = (
    "ViaNexis",
    "CMR",
    "ADR",
    "eFTI",
    "API",
    "PDF",
    "QR",
    "FCM",
    "APNs",
    "EPAL",
    "CHEP",
    "GMR",
    "PBN",
    "OCR",
    "AI",
    "SOS",
    "PIN",
    "EUR",
)
PROTECTED_ORDER = sorted(PROTECTED, key=lambda term: (-len(term), term))

TOKEN_RE = re.compile(r"__[A-Za-zÀ-ÿŠŽČĆĐЁА-Яа-я]+_(\d+)__")
INLINE_LEGAL_RE = re.compile(r"\n  legal: \{")


def protected_term(index: int) -> str | None:
    if 0 <= index < len(PROTECTED_ORDER):
        return PROTECTED_ORDER[index]
    return None


def restore_protect_tokens(text: str) -> str:
    def repl(match: re.Match[str]) -> str:
        term = protected_term(int(match.group(1)))
        return term if term is not None else match.group(0)

    return TOKEN_RE.sub(repl, text)


def find_matching_brace_end(text: str, open_brace: int) -> int:
    depth = 0
    for i in range(open_brace, len(text)):
        ch = text[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i + 1
    raise ValueError("unbalanced braces")


def remove_inline_duplicate_legal(text: str) -> str:
    if not re.search(r"\n  legal: legal[A-Za-z]+,", text):
        return text
    match = INLINE_LEGAL_RE.search(text)
    if not match:
        return text
    open_brace = text.index("{", match.start())
    end = find_matching_brace_end(text, open_brace)
    tail = text[end:].lstrip()
    if not (tail.startswith(",") and ("authorityEfti:" in tail or "legal: legal" in tail)):
        return text
    # Drop trailing comma after the removed block.
    remove_end = end
    if text[end : end + 1] == ",":
        remove_end += 1
    return text[: match.start()] + text[remove_end:]


def inject_authority_efti_if_missing(text: str, locale: str) -> str:
    if "authorityEfti:" in text:
        return text
    de_path = CONTENT / "de.ts"
    if not de_path.exists():
        return text
    de_text = de_path.read_text(encoding="utf-8")
    block_match = re.search(
        r"\n  authorityEfti: \{[\s\S]*?\n  \},\n(?=  legal:)",
        de_text,
    )
    if not block_match:
        return text
    block = block_match.group(0)
    if locale in {"hu", "en"}:
        return text
    return re.sub(
        r"\n(  legal: (?:legal[A-Za-z]+|\{))",
        lambda m: block + m.group(0),
        text,
        count=1,
    )


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = original
    updated = remove_inline_duplicate_legal(updated)
    updated = restore_protect_tokens(updated)
    if path.parent == CONTENT and path.name not in {"legal-types.ts", "hu.ts", "en.ts"}:
        locale = path.stem
        updated = inject_authority_efti_if_missing(updated, locale)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = 0
    for path in sorted(CONTENT.rglob("*.ts")):
        if path.name == "legal-types.ts":
            continue
        if process_file(path):
            print(f"fixed {path.relative_to(ROOT)}")
            changed += 1
    remaining = []
    for path in sorted(CONTENT.rglob("*.ts")):
        text = path.read_text(encoding="utf-8")
        if TOKEN_RE.search(text):
            remaining.append(str(path.relative_to(ROOT)))
        if path.parent == CONTENT and re.search(r"\n  legal: \{", text) and re.search(
            r"\n  legal: legal", text
        ):
            remaining.append(f"duplicate-legal:{path.relative_to(ROOT)}")
    print(f"changed {changed} files")
    if remaining:
        print("remaining issues:")
        for item in remaining:
            print(f"  - {item}")
        raise SystemExit(1)
    print("ok")


if __name__ == "__main__":
    main()
