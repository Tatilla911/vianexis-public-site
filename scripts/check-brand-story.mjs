#!/usr/bin/env node
/**
 * Official ViaNexis brand copy must stay exact — no rewritten slogans.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const source = readFileSync(
  join(ROOT, "src/lib/i18n/brand-story.ts"),
  "utf8",
);

const required = [
  "Born on the Road. Built Together.",
  "Az útról született. Együtt építjük.",
  "23 év. Több mint 40 vállalat. Több ezer cég. Több tízezer beszélgetés az úton.",
  "A ViaNexis nem egy irodában született ötlet.",
  "ViaNexis wasn't conceived behind a desk.",
  "with the people who move transport every day.",
];

let failed = 0;
for (const snippet of required) {
  if (!source.includes(snippet)) {
    console.error(`FAIL: missing official copy: ${JSON.stringify(snippet)}`);
    failed += 1;
  } else {
    console.log(`PASS: ${JSON.stringify(snippet)}`);
  }
}

if (failed > 0) {
  process.exit(1);
}
console.log("PASS: official ViaNexis brand copy is intact");
