/**
 * Export golden HU/EN company-assessment packs for the MT generator.
 * Run: node --experimental-strip-types scripts/export-company-assessment-golden.mjs
 *   or: npx --yes tsx scripts/export-company-assessment-golden.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COMPANY_ASSESSMENT_GOLDEN } from "../src/lib/i18n/company-assessment-labels.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, ".wip-locale-draft");
const outPath = join(outDir, "assessment-golden.json");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, JSON.stringify(COMPANY_ASSESSMENT_GOLDEN, null, 2) + "\n", "utf8");
console.log("wrote", outPath);
