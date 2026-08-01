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
assert.match(processorsAudit, /active_production/);
assert.match(processorsAudit, /requiresDecision/);
assert.match(processorsAudit, /FCM/);
assert.match(processorsAudit, /not_used/);
assert.match(processorsAudit, /planned/);

const deletionOps = read("docs/account-deletion-operations.md");
assert.match(deletionOps, /identity_verification_required/);
assert.match(deletionOps, /no automatic wipe/i);

const retentionMatrix = read("docs/data-retention-matrix.md");
assert.match(retentionMatrix, /requiresOwnerDecision/);
assert.match(retentionMatrix, /currentValue: null|currentValue \|/);
assert.match(retentionMatrix, /account_deletion_request/);

const deletionPage = read(
  "src/app/[locale]/driver-app/account-deletion/page.tsx",
);
assert.match(deletionPage, /DriverAppLegalPrintButton/);
assert.match(deletionPage, /accountDeletionUrlHu|deletionUrl/);
assert.match(deletionPage, /privacy@vianexis\.eu|privacyEmail/);
assert.match(deletionPage, /printDate|Nyomtatás dátuma|Print date/);

assert.match(privacyDoc, /Fiók és kapcsolódó adatok törlésének kérése/);
assert.match(privacyDoc, /Request deletion of your account and associated data/);
assert.match(huDriver, /Fiók és kapcsolódó adatok törlésének kérése/);
assert.match(enDriver, /Request deletion of your account and associated data/);
assert.equal(huDriver.includes("account deletion külön"), false);
assert.equal(huDriver.includes("Play Console"), false);
assert.equal(enDriver.includes("Play Console"), false);
assert.match(huDriver, /bcrypt/);
assert.match(enDriver, /bcrypt/);
assert.match(huDriver, /OS-engedély önmagában nem azonos a GDPR-hozzájárulással/);
assert.match(enDriver, /not by itself GDPR consent/);

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

function deletionExplIds(source) {
  const block = source
    .split("accountDeletion: {")[1]
    ?.split("formTitle:")[0] ?? "";
  return [...block.matchAll(/\nid:\s*"([^"]+)"/g)].map((m) => m[1]);
}
assert.deepEqual(
  deletionExplIds(huDriver),
  deletionExplIds(enDriver),
  "HU/EN account-deletion explanation section ids must match",
);

// --- Terms of Use ---
const termsHu = read("src/lib/i18n/driver-app-legal/content/terms-sections-hu.ts");
const termsEn = read("src/lib/i18n/driver-app-legal/content/terms-sections-en.ts");
const termsDoc = read("src/components/site/TermsOfUseDocument.tsx");
const termsPage = read("src/app/[locale]/terms/page.tsx");
const driverTermsPage = read("src/app/[locale]/driver-app/terms/page.tsx");
const termsDecisions = read("docs/terms-legal-decisions.md");

assert.match(termsPage, /Felhasználási feltételek – ViaNexis/);
assert.match(termsPage, /Terms of Use – ViaNexis/);
assert.match(termsPage, /TermsOfUseDocument/);
assert.match(driverTermsPage, /TermsOfUseDocument/);
assert.match(huDriver, /Felhasználási feltételek – ViaNexis/);
assert.match(enDriver, /Terms of Use – ViaNexis/);
assert.match(termsDoc, /legal@vianexis\.eu|legalEmail/);
assert.match(termsDoc, /legalTermsTestingReleaseBanner/);
assert.match(termsDoc, /accountDeletionUrlHu|deletionUrl/);
assert.match(termsDoc, /termsUrlHu|termsUrl/);
assert.match(termsDoc, /printDate|Nyomtatás dátuma|Print date/);
assert.match(legalConfig, /legalTermsTestingReleaseBanner/);
assert.match(
  legalConfig,
  /Tesztelési kiadás\. Ezek a feltételek a jelenleg terjesztett ViaNexis platform/,
);
assert.match(
  legalConfig,
  /Testing release\. These terms apply to the currently distributed versions of the ViaNexis platform/,
);

assert.match(termsHu, /https:\/\/vianexis\.eu\/hu\/driver-app\/account-deletion/);
assert.match(termsEn, /https:\/\/vianexis\.eu\/en\/driver-app\/account-deletion/);
assert.match(termsHu, /Fiók és kapcsolódó adatok törlésének kérése/);
assert.match(termsEn, /Request deletion of your account and associated data/);
assert.equal(termsHu.includes("/driver-app/account-deletion"), true);
assert.equal(
  /[^/]\/driver-app\/account-deletion/.test(
    termsHu.replaceAll("https://vianexis.eu/hu/driver-app/account-deletion", ""),
  ),
  false,
  "HU Terms must not use relative deletion paths",
);
assert.equal(
  /[^/]\/driver-app\/account-deletion/.test(
    termsEn.replaceAll("https://vianexis.eu/en/driver-app/account-deletion", ""),
  ),
  false,
  "EN Terms must not use relative deletion paths",
);
assert.equal(termsHu.includes("kézzel írt"), false);
assert.equal(termsEn.includes("hand-authored"), false);
assert.equal(termsHu.includes("machine translated"), false);
assert.equal(termsEn.includes("machine translated"), false);
assert.equal(termsHu.includes("minősített eFTI platform"), true);
assert.match(termsHu, /nem minősített eFTI platform/);
assert.match(termsEn, /certified eFTI platform/);
assert.match(termsEn, /not a carrier/);
assert.match(termsHu, /nem garantálja, hogy a rögzített aláírás minden országban/);
assert.match(termsEn, /does not guarantee that a recorded signature qualifies as a qualified electronic signature/);
assert.equal(termsHu.includes("azonnali, automatikus teljes adattörlést"), true);
assert.match(termsHu, /nem indít azonnali, automatikus teljes adattörlést/);
assert.match(termsEn, /does not trigger immediate automatic full data deletion/);
assert.equal(/SLA\s*[:=]\s*\d|99\.9%|uptime\s*[:=]?\s*\d/i.test(termsHu + termsEn), false);
assert.equal(
  /EUR\s*\d{2,}|Ft\s*\d{3,}|\$\s*\d{2,}|felelősségi plafon\s*[:=]?\s*\d/i.test(
    termsHu + termsEn,
  ),
  false,
);
assert.match(termsHu, /Teljes közösségi hálózatot vagy közösségi helymegosztó szolgáltatást a jelen Feltételek nem állítanak aktívként/);
assert.match(termsEn, /do not treat a full community network or community location-sharing service as active/);

function termsIds(source) {
  return [...source.matchAll(/\n\s*id:\s*"([^"]+)"/g)].map((m) => m[1]);
}
const huTermsIds = termsIds(termsHu);
const enTermsIds = termsIds(termsEn);
assert.deepEqual(huTermsIds, enTermsIds, "HU/EN Terms section ids must match");
assert.equal(huTermsIds.length, 35, "Terms must have 35 chapters");
assert.equal(new Set(huTermsIds).size, huTermsIds.length, "Terms anchors must be unique");

assert.match(termsDecisions, /requiresOwnerDecision/);
assert.match(termsDecisions, /Terms acceptance/);
assert.match(termsDecisions, /productionBlocker/);

assert.match(termsDecisions, /Public Terms version/);
assert.match(termsDecisions, /`1\.0`/);
assert.match(termsDecisions, /hu-0\.1/);
assert.match(termsDecisions, /mismatch/i);
assert.match(termsDecisions, /must not[\s\S]*be treated as proven acceptance/i);

assert.equal(huLegal.includes("/driver-app/account-deletion") && !huLegal.includes("https://vianexis.eu/hu/driver-app/account-deletion"), false);
assert.equal(enLegal.includes("https://vianexis.eu/en/driver-app/account-deletion"), true);

// --- Cross-reference consistency (privacy ↔ terms) ---
const staleTermsNine = [
  "Felhasználási feltételek 9. szakasza",
  "Terms §9",
  "Terms section 9",
  "Section 9 of the Terms",
  "See Section 9 of the Terms",
];
for (const phrase of staleTermsNine) {
  assert.equal(
    huDriver.includes(phrase),
    false,
    `Stale Terms §9 reference must not remain: ${phrase}`,
  );
  assert.equal(
    enDriver.includes(phrase),
    false,
    `Stale Terms §9 reference must not remain: ${phrase}`,
  );
  assert.equal(termsHu.includes(phrase), false, `Terms HU stale: ${phrase}`);
  assert.equal(termsEn.includes(phrase), false, `Terms EN stale: ${phrase}`);
}

assert.match(
  huDriver,
  /Felhasználási feltételek 16\. szakasza[\s\S]*https:\/\/vianexis\.eu\/hu\/terms#electronic-signatures-and-evidence/,
);
assert.match(
  enDriver,
  /Section 16 of the Terms of Use[\s\S]*https:\/\/vianexis\.eu\/en\/terms#electronic-signatures-and-evidence/,
);
assert.ok(
  huTermsIds.includes("electronic-signatures-and-evidence"),
  "Terms must expose electronic-signatures-and-evidence anchor",
);

const privacyIdsHu = privacyIds(huDriver);
const privacyIdsEn = privacyIds(enDriver);
assert.deepEqual(privacyIdsHu, privacyIdsEn);

/** Absolute legal URLs with hash → target id must exist in the destination doc. */
function assertHashTargets(source, label) {
  const re =
    /https:\/\/vianexis\.eu\/(hu|en)\/(terms|privacy|driver-app\/privacy|driver-app\/account-deletion|driver-app\/terms)#([a-z0-9-]+)/g;
  let match;
  while ((match = re.exec(source)) !== null) {
    const [, locale, pathKind, hash] = match;
    let ids;
    if (pathKind === "terms" || pathKind === "driver-app/terms") {
      ids = locale === "hu" ? huTermsIds : enTermsIds;
    } else if (pathKind === "privacy" || pathKind === "driver-app/privacy") {
      ids = locale === "hu" ? privacyIdsHu : privacyIdsEn;
    } else if (pathKind === "driver-app/account-deletion") {
      ids = deletionExplIds(locale === "hu" ? huDriver : enDriver);
    } else {
      throw new Error(`Unhandled pathKind ${pathKind}`);
    }
    assert.ok(
      ids.includes(hash),
      `${label}: missing anchor #${hash} for /${locale}/${pathKind} (from ${match[0]})`,
    );
    if (label.startsWith("HU")) {
      assert.equal(locale, "hu", `${label}: locale must be hu for HU content URL`);
    }
    if (label.startsWith("EN")) {
      assert.equal(locale, "en", `${label}: locale must be en for EN content URL`);
    }
  }
}

assertHashTargets(huDriver, "HU driver-legal");
assertHashTargets(enDriver, "EN driver-legal");
assertHashTargets(termsHu, "HU terms");
assertHashTargets(termsEn, "EN terms");

// Printable long-form legal bodies must not leave bare relative deletion paths.
for (const [label, src] of [
  ["HU privacy+deletion content", huDriver],
  ["EN privacy+deletion content", enDriver],
  ["HU terms sections", termsHu],
  ["EN terms sections", termsEn],
]) {
  const stripped = src
    .replaceAll("https://vianexis.eu/hu/driver-app/account-deletion", "")
    .replaceAll("https://vianexis.eu/en/driver-app/account-deletion", "")
    .replaceAll('hrefSuffix: "/account-deletion"', "");
  assert.equal(
    /(?:^|[^/\w])\/driver-app\/account-deletion\b/.test(stripped),
    false,
    `${label}: bare relative /driver-app/account-deletion not allowed in printable legal text`,
  );
}

// --- Responsible Use / Disclaimers ---
const ruHu = read(
  "src/lib/i18n/driver-app-legal/content/responsible-use-sections-hu.ts",
);
const ruEn = read(
  "src/lib/i18n/driver-app-legal/content/responsible-use-sections-en.ts",
);
const ruDoc = read("src/components/site/ResponsibleUseDocument.tsx");
const ruPage = read("src/app/[locale]/disclaimers/page.tsx");
const ruDecisions = read("docs/responsible-use-legal-decisions.md");

assert.match(ruPage, /Felelős használat és fontos korlátozások – ViaNexis/);
assert.match(ruPage, /Responsible Use and Important Limitations – ViaNexis/);
assert.match(ruPage, /ResponsibleUseDocument/);
assert.match(ruHu, /Felelős használat és fontos korlátozások – ViaNexis/);
assert.match(ruEn, /Responsible Use and Important Limitations – ViaNexis/);
assert.match(ruDoc, /legalResponsibleUseTestingReleaseBanner/);
assert.match(ruDoc, /legal@vianexis\.eu|legalEmail/);
assert.match(ruDoc, /accountDeletionUrlHu|deletionUrl/);
assert.match(ruDoc, /privacyUrlHu|privacyUrl/);
assert.match(ruDoc, /termsUrlHu|termsUrl/);
assert.match(ruDoc, /printDate|Nyomtatás dátuma|Print date/);
assert.match(legalConfig, /legalResponsibleUseTestingReleaseBanner/);
assert.match(
  legalConfig,
  /Tesztelési kiadás\. Ez a dokumentum a jelenleg terjesztett ViaNexis platform/,
);
assert.match(
  legalConfig,
  /Testing release\. This document describes the responsible-use limitations/,
);

assert.match(ruHu, /https:\/\/vianexis\.eu\/hu\/privacy/);
assert.match(ruEn, /https:\/\/vianexis\.eu\/en\/privacy/);
assert.match(ruHu, /https:\/\/vianexis\.eu\/hu\/terms/);
assert.match(ruEn, /https:\/\/vianexis\.eu\/en\/terms/);
assert.match(ruHu, /https:\/\/vianexis\.eu\/hu\/driver-app\/account-deletion/);
assert.match(ruEn, /https:\/\/vianexis\.eu\/en\/driver-app\/account-deletion/);
assert.match(ruHu, /Turul Atilla|ViaNexis/);
assert.match(ruHu, /legal@vianexis\.eu/);
assert.match(ruEn, /legal@vianexis\.eu/);

assert.match(ruHu, /nem minősített eFTI platform/);
assert.match(ruEn, /not a certified eFTI platform/);
assert.equal(ruHu.includes("minősített eFTI platformként"), false);
assert.equal(/is a certified eFTI/i.test(ruEn), false);
assert.equal(ruHu.includes("hivatalos navigáció"), false);
assert.match(ruHu, /Nem minősített tehergépkocsi-navigáció|nem minősített tehergépkocsi-navigáció/i);
assert.match(ruEn, /not certified truck navigation/i);
assert.equal(/is certified truck navigation|is official navigation/i.test(ruEn), false);
assert.match(ruHu, /nem garantálja, hogy a rögzített aláírás/);
assert.match(ruEn, /does not guarantee that a recorded signature qualifies as a qualified electronic signature/);
assert.equal(/automatikus jogi bizonyító erőt garantál/i.test(ruHu), false);
assert.equal(/guarantees? (?:automatic )?(?:legal )?evidential (?:force|value)/i.test(ruEn), false);
assert.match(ruHu, /nem segélyhívó/);
assert.match(ruEn, /not an emergency hotline/);
assert.match(ruHu, /Teljes közösségi hálózatot vagy közösségi helymegosztó szolgáltatást ez a dokumentum nem állít aktívként/);
assert.match(ruEn, /does not treat a full community network or community location-sharing service as active/);

const mandatoryHu =
  "A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.";
const mandatoryHuAlt =
  "A korlátozások az alkalmazandó kötelező jogszabályok keretei között értendők.";
const mandatoryCloseHu =
  "A jelen korlátozások az alkalmazandó kötelező jogszabályok keretei között értendők.";
assert.equal(
  ruHu.split(mandatoryHu).length - 1,
  0,
  "Responsible Use HU must not repeat the old per-section mandatory closer",
);
assert.ok(
  (ruHu.split(mandatoryHuAlt).length - 1) +
    (ruHu.split(mandatoryCloseHu).length - 1) <=
    3,
  "Responsible Use HU mandatory-law phrase must appear sparingly (intro + final)",
);

function ruIds(source) {
  return [...source.matchAll(/\n\s*id:\s*"([^"]+)"/g)].map((m) => m[1]);
}
const huRuIds = ruIds(ruHu);
const enRuIds = ruIds(ruEn);
assert.deepEqual(huRuIds, enRuIds, "HU/EN Responsible Use section ids must match");
assert.equal(huRuIds.length, 27, "Responsible Use must have 27 chapters");
assert.equal(new Set(huRuIds).size, huRuIds.length, "Responsible Use anchors must be unique");

const expectedRuIds = [
  "purpose-and-scope",
  "general-principles",
  "shipment-data-and-user-input",
  "adr-and-dangerous-goods",
  "tunnel-route-and-traffic-restrictions",
  "customs-border-and-authority-info",
  "map-location-and-navigation",
  "ai-assistive-features",
  "ocr-and-document-recognition",
  "automatic-translation",
  "electronic-signatures",
  "digital-documents-and-evidence",
  "pallet-and-packaging-exchange",
  "photos-videos-and-incident-evidence",
  "messages-and-operational-communication",
  "push-and-other-notifications",
  "offline-use-and-synchronisation",
  "map-and-community-content",
  "efti-and-authority-sharing",
  "privacy-and-permissions",
  "support-and-controlled-access",
  "availability-and-external-providers",
  "emergency-and-sos",
  "human-review-and-final-decision",
  "reporting-issues",
  "contact",
  "final-provisions",
];
assert.deepEqual(huRuIds, expectedRuIds, "Responsible Use chapter ids/order");

assert.equal(ruHu.includes("privacy-safe"), false, "HU must not mix English privacy-safe");
assert.equal(ruHu.includes("TODO"), false);
assert.equal(ruEn.includes("TODO"), false);
assert.equal(ruHu.includes("kézzel írt"), false);
assert.equal(ruEn.includes("hand-authored"), false);

for (const [label, src] of [
  ["HU responsible-use", ruHu],
  ["EN responsible-use", ruEn],
]) {
  const stripped = src
    .replaceAll("https://vianexis.eu/hu/driver-app/account-deletion", "")
    .replaceAll("https://vianexis.eu/en/driver-app/account-deletion", "");
  assert.equal(
    /(?:^|[^/\w])\/driver-app\/account-deletion\b/.test(stripped),
    false,
    `${label}: bare relative deletion URL not allowed`,
  );
}

assertHashTargets(ruHu, "HU responsible-use");
assertHashTargets(ruEn, "EN responsible-use");

assert.match(ruDecisions, /requiresOwnerDecision/);
assert.match(ruDecisions, /productionBlocker/);
assert.match(ruDecisions, /community map|Community map/i);
assert.match(ruDecisions, /eFTI/);
assert.match(ruDecisions, /SOS/);

// --- Legal Center (/legal) ---
const legalCenterPage = read("src/app/[locale]/legal/page.tsx");
const legalCenterDoc = read("src/components/site/LegalCenterDocument.tsx");
const legalCenterContent = read("src/lib/i18n/legal-center/content.ts");
const legalCenterReadiness = read("docs/legal-center-readiness.md");

assert.match(legalCenterPage, /LegalCenterDocument/);
assert.match(legalCenterPage, /Jogi információk és dokumentumközpont \| ViaNexis/);
assert.match(legalCenterPage, /Legal Information and Document Center \| ViaNexis/);
assert.match(legalCenterPage, /legalCenterUrlHu|legalCenterUrl/);
assert.match(legalCenterDoc, /legalCenterTestingReleaseBanner/);
assert.match(legalCenterDoc, /Turul Atilla|provider\.line|legalControllerLabelForTerms/);
assert.match(legalCenterDoc, /legal@vianexis\.eu|legalEmail/);
assert.match(legalCenterDoc, /privacy@vianexis\.eu|privacyEmail/);
assert.match(legalCenterDoc, /accountDeletionUrlHu|deletionUrl/);
assert.match(legalCenterDoc, /disclaimersUrlHu|disclaimersUrl/);
assert.match(legalCenterDoc, /privacyRequestUrlHu|privacyRequestUrl/);
assert.match(legalCenterDoc, /printDateLabel|Nyomtatás dátuma|Print date/);
assert.match(legalConfig, /legalCenterTestingReleaseBanner/);
assert.match(
  legalConfig,
  /Tesztelési kiadás\. A dokumentumközpont a jelenleg terjesztett ViaNexis platform/,
);
assert.match(
  legalConfig,
  /Testing release\. This document center contains the legal documents/,
);
assert.match(legalConfig, /disclaimersUrlHu/);
assert.match(legalConfig, /dataSafetyUrlHu/);
assert.match(legalConfig, /driverAppLegalUrlHu/);
assert.match(legalConfig, /showPublicLegalReviewStatus/);
assert.match(legalConfig, /privacyUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/privacy`\)/);
assert.match(legalConfig, /privacyUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/privacy`\)/);
assert.match(legalConfig, /termsUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/terms`\)/);
assert.match(legalConfig, /termsUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/terms`\)/);
assert.match(legalConfig, /disclaimersUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/disclaimers`\)/);
assert.match(legalConfig, /disclaimersUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/disclaimers`\)/);
assert.match(
  legalConfig,
  /accountDeletionUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/driver-app\/account-deletion`\)/,
);
assert.match(
  legalConfig,
  /accountDeletionUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/driver-app\/account-deletion`\)/,
);
assert.match(
  legalConfig,
  /privacyRequestUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/privacy-request`\)/,
);
assert.match(
  legalConfig,
  /privacyRequestUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/privacy-request`\)/,
);
assert.match(
  legalConfig,
  /dataSafetyUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/driver-app\/data-safety`\)/,
);
assert.match(
  legalConfig,
  /dataSafetyUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/driver-app\/data-safety`\)/,
);
assert.match(legalConfig, /legalCenterUrlHu:\s*confirmed\(`\$\{DOMAIN\}\/hu\/legal`\)/);
assert.match(legalConfig, /legalCenterUrlEn:\s*confirmed\(`\$\{DOMAIN\}\/en\/legal`\)/);
assert.match(legalConfig, /const DOMAIN = "https:\/\/vianexis\.eu"/);

assert.match(legalCenterContent, /privacyUrlHu|privacyUrlEn/);
assert.match(legalCenterContent, /termsUrlHu|termsUrlEn/);
assert.match(legalCenterContent, /disclaimersUrlHu|disclaimersUrlEn/);
assert.match(legalCenterContent, /accountDeletionUrlHu|accountDeletionUrlEn/);
assert.match(legalCenterContent, /privacyRequestUrlHu|privacyRequestUrlEn/);
assert.match(legalCenterContent, /dataSafetyUrlHu|dataSafetyUrlEn/);
assert.match(legalCenterContent, /driverAppLegalUrlHu|driverAppLegalUrlEn/);
assert.match(legalCenterContent, /legalCenterUrlHu|legalCenterUrlEn/);
assert.match(legalCenterDoc, /absoluteUrl|deletionUrl|privacyRequestUrl/);

assert.equal(legalCenterDoc.includes("READY FOR LEGAL REVIEW"), false);
assert.equal(legalCenterDoc.includes("production blocker"), false);
assert.equal(legalCenterDoc.includes("requiresOwnerDecision"), false);
assert.equal(legalCenterDoc.includes("NOT READY"), false);
assert.equal(legalCenterContent.includes("READY FOR LEGAL REVIEW"), false);
assert.equal(legalCenterContent.includes("production blocker"), false);
assert.equal(/Google approved|Google tanúsította|Play jóváhagyta/i.test(legalCenterDoc + legalCenterContent), false);
assert.equal(
  /ViaNexis (önálló )?jogi személy|ViaNexis is a (separate )?legal entity/i.test(
    legalCenterContent,
  ) && !/nem szerepel|not presented as a separate legal entity/i.test(legalCenterContent),
  false,
);
assert.match(legalCenterContent, /Turul Atilla egyéni vállalkozó/);
assert.match(legalCenterContent, /sole proprietor/);

const huCardIds = [
  ...legalCenterContent
    .split("const copyHu")[1]
    .split("const copyEn")[0]
    .matchAll(/\n\s*id:\s*"([^"]+)"/g),
].map((m) => m[1]);
const enCardIds = [
  ...legalCenterContent
    .split("const copyEn")[1]
    .split("function absoluteUrl")[0]
    .matchAll(/\n\s*id:\s*"([^"]+)"/g),
].map((m) => m[1]);
assert.deepEqual(huCardIds, enCardIds, "HU/EN Legal Center card ids must match");
assert.ok(huCardIds.includes("privacy"));
assert.ok(huCardIds.includes("terms"));
assert.ok(huCardIds.includes("disclaimers"));
assert.ok(huCardIds.includes("account-deletion"));
assert.ok(huCardIds.includes("privacy-request"));
assert.ok(huCardIds.includes("data-safety"));
assert.ok(huCardIds.includes("driver-legal"));
assert.ok(huCardIds.includes("provider"));
assert.equal(huCardIds.length, 8, "Legal Center must list 8 document cards");

for (const [label, src] of [
  ["Legal Center content", legalCenterContent],
  ["Legal Center document", legalCenterDoc],
]) {
  const stripped = src
    .replaceAll("https://vianexis.eu/hu/driver-app/account-deletion", "")
    .replaceAll("https://vianexis.eu/en/driver-app/account-deletion", "")
    .replaceAll('hrefPath: "/driver-app/account-deletion"', "")
    .replaceAll('"/driver-app/account-deletion"', "");
  assert.equal(
    /(?:^|[^/\w])\/driver-app\/account-deletion\b/.test(stripped),
    false,
    `${label}: bare relative deletion URL not allowed in printable absolute context — absolute URLs must come from legalConfig`,
  );
}

assert.match(legalCenterReadiness, /requiresOwnerDecision/);
assert.match(legalCenterReadiness, /productionBlocker/);
assert.match(legalCenterReadiness, /Data Safety/);
assert.match(legalCenterReadiness, /Privacy contact/);

assert.match(footer, /\/legal/);
assert.match(footer, /privacy-request/);
assert.match(footer, /driver-app\/account-deletion/);

// --- Data Safety (public summary) ---
const dsHu = read(
  "src/lib/i18n/driver-app-legal/content/data-safety-sections-hu.ts",
);
const dsEn = read(
  "src/lib/i18n/driver-app-legal/content/data-safety-sections-en.ts",
);
const dsPage = read("src/app/[locale]/driver-app/data-safety/page.tsx");
const dsAudit = read("docs/driver-data-safety-audit.md");
const dsPlayDraft = read("docs/play-console-data-safety-draft.md");
const dsFlow = read("docs/driver-data-flow-matrix.md");

assert.match(dsPage, /DriverAppLegalToc/);
assert.match(dsPage, /accountDeletionUrlHu|deletionUrl/);
assert.match(dsPage, /disclaimersUrlHu|disclaimersUrl/);
assert.match(dsPage, /printDate|Nyomtatás dátuma|Print date/);
assert.match(dsHu, /https:\/\/vianexis\.eu\/hu\/driver-app\/account-deletion/);
assert.match(dsEn, /https:\/\/vianexis\.eu\/en\/driver-app\/account-deletion/);
assert.match(dsHu, /https:\/\/vianexis\.eu\/hu\/privacy/);
assert.match(dsEn, /https:\/\/vianexis\.eu\/en\/privacy/);
assert.match(dsHu, /https:\/\/vianexis\.eu\/hu\/terms/);
assert.match(dsEn, /https:\/\/vianexis\.eu\/en\/terms/);
assert.match(dsHu, /https:\/\/vianexis\.eu\/hu\/disclaimers/);
assert.match(dsEn, /https:\/\/vianexis\.eu\/en\/disclaimers/);
assert.match(dsHu, /Turul Atilla egyéni vállalkozó/);
assert.match(dsEn, /sole proprietor/);
assert.match(dsHu, /privacy@vianexis\.eu/);
assert.match(dsEn, /privacy@vianexis\.eu/);

assert.equal(/Google approved|Google jóváhagyta|Play jóváhagyta/i.test(dsHu + dsEn + dsPage), false);
assert.equal(/minden adat titkosítva|all data (is )?encrypted\b/i.test(dsHu + dsEn), false);
assert.equal(
  /(?:all|minden).{0,40}encrypted at rest|at-rest titkosítással lenne védve/i.test(dsHu + dsEn) &&
    !/Nem állítjuk, hogy minden|do not claim that every/i.test(dsHu + dsEn),
  false,
  "Must not claim blanket at-rest encryption",
);
assert.match(dsHu, /nem indít azonnali, automatikus teljes adattörlést/);
assert.match(dsEn, /does not trigger immediate automatic full data deletion/);
assert.match(dsHu, /Nem állítjuk, hogy „semmilyen adatot nem osztunk meg/);
assert.match(dsEn, /do not claim that “no data is shared/);
assert.match(dsHu, /Nem állítunk független biztonsági felülvizsgálatot/);
assert.match(dsEn, /do not claim an independent security review/);
assert.equal(/adatvédelmi tisztviselő|Data Protection Officer|\bDPO\b/i.test(dsHu + dsEn), false);
assert.match(dsHu, /önálló jogi személyként nem szerepel/);
assert.match(dsEn, /not presented as a separate legal entity/);
assert.match(dsHu, /ACCESS_BACKGROUND_LOCATION nincs deklarálva/);
assert.match(dsEn, /ACCESS_BACKGROUND_LOCATION is not declared/);

function dsIds(source) {
  return [...source.matchAll(/\n\s*id:\s*"([^"]+)"/g)].map((m) => m[1]);
}
const huDsIds = dsIds(dsHu);
const enDsIds = dsIds(dsEn);
assert.deepEqual(huDsIds, enDsIds, "HU/EN Data Safety section ids must match");
assert.equal(huDsIds.length, 23, "Data Safety must have 23 chapters");
assert.equal(new Set(huDsIds).size, huDsIds.length, "Data Safety anchors unique");

for (const [label, src] of [
  ["HU data-safety sections", dsHu],
  ["EN data-safety sections", dsEn],
]) {
  const stripped = src
    .replaceAll("https://vianexis.eu/hu/driver-app/account-deletion", "")
    .replaceAll("https://vianexis.eu/en/driver-app/account-deletion", "");
  assert.equal(
    /(?:^|[^/\w])\/driver-app\/account-deletion\b/.test(stripped),
    false,
    `${label}: bare relative deletion URL not allowed`,
  );
}

assertHashTargets(dsHu, "HU data-safety");
assertHashTargets(dsEn, "EN data-safety");

assert.match(dsAudit, /20c9050|feat\/map-foundation/);
assert.match(dsAudit, /requiresOwnerDecision|productionBlocker|ACCESS_BACKGROUND/);
assert.match(dsPlayDraft, /Independent security review/);
assert.match(dsPlayDraft, /Do not answer “No data shared” yet|Do not answer .No data shared. yet|no data shared/i);
assert.match(dsFlow, /MapLocationService|push token|OCR/);

assert.match(huDriver, /sections: dataSafetySectionsHu|dataSafetySectionsHu/);
assert.match(enDriver, /sections: dataSafetySectionsEn|dataSafetySectionsEn/);

console.log("legal-content-checks: OK");
console.log(`terms section parity: ${huTermsIds.length} ids matched`);
console.log(`responsible-use section parity: ${huRuIds.length} ids matched`);
console.log(`legal-center card parity: ${huCardIds.length} ids matched`);
console.log(`data-safety section parity: ${huDsIds.length} ids matched`);
console.log("cross-reference checks: OK");
