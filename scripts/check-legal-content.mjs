#!/usr/bin/env node
/**
 * Static content checks for Play-facing legal pages (no server required).
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

const huPrivacyPage = read("src/app/[locale]/privacy/page.tsx");
const enLegal = read("src/lib/i18n/content/legal/en.ts");
const huLegal = read("src/lib/i18n/content/legal/hu.ts");
const huDriver = read("src/lib/i18n/driver-app-legal/content/hu.ts");
const enDriver = read("src/lib/i18n/driver-app-legal/content/en.ts");
const footer = read("src/components/site/Footer.tsx");
const privacyDoc = read("src/components/site/PrivacyPolicyDocument.tsx");
const legalConfig = read("src/config/legal.ts");

const forbidden = [
  "Play Console privacy URL",
  "végleges, teljes körű adatvédelmi szöveg később",
  "végleges tájékoztató később",
  "production push",
  "Production push",
  "backend dependency",
  "Backend dependency",
];

for (const phrase of forbidden) {
  assert.equal(
    huLegal.includes(phrase),
    false,
    `HU marketing legal must not contain: ${phrase}`,
  );
  assert.equal(
    enLegal.includes(phrase),
    false,
    `EN marketing legal must not contain: ${phrase}`,
  );
  assert.equal(
    huPrivacyPage.includes(phrase),
    false,
    `Privacy page must not contain: ${phrase}`,
  );
}

assert.match(huPrivacyPage, /Adatvédelmi tájékoztató – ViaNexis Driver/);
assert.match(huPrivacyPage, /Privacy Policy – ViaNexis Driver/);
assert.match(legalConfig, /Turul Atilla/);
assert.match(legalConfig, /privacy@vianexis\.eu/);
assert.match(privacyDoc, /driver-app\/account-deletion/);
assert.match(privacyDoc, /legalControllerLabel/);
assert.match(footer, /privacy-request/);
assert.match(footer, /driver-app\/account-deletion/);
assert.match(footer, /deleteAccount/);

assert.match(
  huDriver,
  /Ha a megadott adatokhoz ViaNexis Driver-fiók tartozik/,
);
assert.match(
  enDriver,
  /If the submitted details correspond to a ViaNexis Driver account/,
);

assert.match(legalConfig, /privacyEmail/);
assert.match(legalConfig, /Turul Atilla/);
assert.match(read("src/lib/i18n/driver-app-legal/operator.ts"), /OPERATOR_LEGAL_NAME_HU/);
assert.match(read("src/config/legal.ts"), /egyéni vállalkozó/);
assert.match(enDriver, /sole proprietor registered in Hungary|OPERATOR_STATEMENT_EN/);
assert.match(huDriver, /OPERATOR_STATEMENT_HU/);
assert.match(huLegal, /Turul Atilla egyéni vállalkozó/);
assert.match(enLegal, /sole proprietor and operator of the ViaNexis brand|Turul Atilla/);

// Section key parity HU/EN for privacy document only
function privacyIds(source) {
  const block = source.split("privacy: {")[1]?.split("terms: {")[0] ?? "";
  return [...block.matchAll(/\nid:\s*"([^"]+)"/g)].map((m) => m[1]);
}
assert.deepEqual(
  privacyIds(huDriver),
  privacyIds(enDriver),
  "HU/EN driver-app privacy section ids must match",
);

console.log("legal-content-checks: OK");
