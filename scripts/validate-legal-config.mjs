#!/usr/bin/env node
/**
 * Validates central legal config presence (text-level) for publish readiness.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "src/config/legal.ts"), "utf8");
const productionMode = process.argv.includes("--production");

const required = [
  "legalEntityName",
  "privacyEmail",
  "legalEmail",
  "websiteUrl",
  "privacyPolicyEffectiveDate",
  "privacyUrlHu",
  "privacyUrlEn",
  "accountDeletionUrlHu",
  "accountDeletionUrlEn",
];

const missing = [];
for (const key of required) {
  if (!source.includes(`${key}:`)) missing.push(key);
}

assert.equal(missing.length, 0, `Missing legal config keys: ${missing.join(", ")}`);
assert.match(source, /privacy@vianexis\.eu/);
assert.match(source, /Turul Atilla/);
assert.match(source, /requires_owner_input|requires_audit/);

const gapCount = (source.match(/requires_owner_input|requires_audit/g) || [])
  .length;

console.log("validate-legal-config: required keys present");
console.log(`Open gap markers in config: ${gapCount}`);
console.log(`Testing banner flag present: ${source.includes("LEGAL_SHOW_TESTING_RELEASE_BANNER")}`);

if (productionMode && gapCount === 0) {
  console.log("No gap markers — unusual; confirm audits are truly complete.");
}

console.log("validate-legal-config: OK");
