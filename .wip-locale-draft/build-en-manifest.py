#!/usr/bin/env python3
"""Build EN manifest JSON from existing hu/en TS content without network."""

from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "scripts/en-manifest.json"


def main() -> None:
    snippet = r"""
import { contentEn } from '../src/lib/i18n/content/en.ts';
import { legalEn } from '../src/lib/i18n/content/legal/en.ts';
const payload = { marketing: contentEn, legal: legalEn };
console.log(JSON.stringify(payload));
"""
    tmp = ROOT / "scripts/.export-temp.mts"
    tmp.write_text(snippet, encoding="utf-8")
    try:
        proc = subprocess.run(
            ["npx", "--yes", "tsx", str(tmp)],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
    finally:
        if tmp.exists():
            tmp.unlink()
    OUT.write_text(proc.stdout, encoding="utf-8")
    data = json.loads(proc.stdout)
    print(f"Wrote {OUT} ({len(json.dumps(data))} bytes)")


if __name__ == "__main__":
    main()
