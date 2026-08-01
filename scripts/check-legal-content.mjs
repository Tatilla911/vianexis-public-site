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
assert.match(privacyDoc, /accountDeletionUrlHu|deletionUrl/);
assert.match(privacyDoc, /legalControllerLabel/);
assert.match(privacyDoc, /https:\/\/vianexis\.eu\/hu\/driver-app\/privacy/);
assert.match(privacyDoc, /href=\{deletionUrl\}/);
assert.match(footer, /privacy-request/);
assert.match(footer, /driver-app\/account-deletion/);
assert.match(footer, /deleteAccount/);

assert.match(
  huDriver,
  /Ha a megadott adatokhoz ViaNexis Driver-fiók tartozik, a kérelmet rögzítettük\. A szükséges ellenőrzést követően/,
);
assert.match(
  enDriver,
  /If the submitted details correspond to a ViaNexis Driver account, the request has been recorded\. We will provide further information after the required verification\./,
);

assert.equal(huDriver.includes("kézzel írt"), false, "HU must not say kézzel írt");
assert.equal(enDriver.includes("hand-authored"), false, "EN legal chrome must not say hand-authored");
assert.equal(huDriver.includes("Adatvédelmi tisztviselői postafiók"), false);
assert.equal(enDriver.includes("Data protection mailbox"), false);
assert.match(huDriver, /Adatvédelmi kapcsolattartás/);
assert.match(enDriver, /Privacy contact/);
assert.equal(huDriver.includes("Szándékosan nem adunk meg konkrét"), false);
assert.equal(enDriver.includes("deliberately do not state a single, fixed retention"), false);
assert.equal(huDriver.includes("haladéktalanul töröljük"), false);
assert.match(huDriver, /nem kér folyamatos háttér-helyhozzáférést/);
assert.match(enDriver, /does not request continuous background location access/);
assert.match(huDriver, /https:\/\/vianexis\.eu\/hu\/driver-app\/account-deletion/);
assert.match(enDriver, /https:\/\/vianexis\.eu\/en\/driver-app\/account-deletion/);
assert.match(privacyDoc, /https:\/\/vianexis\.eu\/(?:hu|en)\/driver-app\/account-deletion|deletionUrl/);
assert.match(privacyDoc, /break-all/);
assert.equal(huDriver.includes("GDPR 28. cikke szerinti adatfeldolgozói szerződést kötünk"), false);
assert.equal(enDriver.includes("We enter into a data processing agreement under GDPR Article 28 with each"), false);
assert.match(legalConfig, /Tesztelési kiadás\. Ez a tájékoztató a jelenleg terjesztett ViaNexis Driver/);
assert.match(legalConfig, /Testing release\. This policy describes the actual data-processing/);

assert.match(legalConfig, /privacyEmail/);
assert.match(legalConfig, /Turul Atilla/);
assert.match(read("src/lib/i18n/driver-app-legal/operator.ts"), /OPERATOR_LEGAL_NAME_HU/);
assert.match(read("src/config/legal.ts"), /egyéni vállalkozó/);
assert.match(enDriver, /sole proprietor registered in Hungary|OPERATOR_STATEMENT_EN/);
assert.match(huDriver, /OPERATOR_STATEMENT_HU/);
assert.match(huLegal, /Turul Atilla egyéni vállalkozó/);
assert.match(enLegal, /sole proprietor and operator of the ViaNexis brand|Turul Atilla/);

const processorsAudit = read("docs/legal-processors-audit.md");
assert.match(processorsAudit, /active/);
assert.match(processorsAudit, /requiresDecision/);
assert.match(processorsAudit, /FCM/);

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
