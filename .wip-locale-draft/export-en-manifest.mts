import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { contentEn } from "../src/lib/i18n/content/en.ts";
import { legalEn } from "../src/lib/i18n/content/legal/en.ts";

const out = join(import.meta.dirname, "en-manifest.json");
writeFileSync(
  out,
  JSON.stringify({ marketing: contentEn, legal: legalEn }, null, 2),
  "utf8",
);
console.log(`Wrote ${out}`);
