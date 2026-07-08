#!/usr/bin/env node
/**
 * ViaNexis public site locale validation gate.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const I18N = join(ROOT, "src/lib/i18n");
const CONTENT = join(I18N, "content");
const LEGAL = join(CONTENT, "legal");
const SRC = join(ROOT, "src");

let failures = 0;

function fail(message) {
  console.error(`FAIL: ${message}`);
  failures += 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

function read(path) {
  return readFileSync(path, "utf8");
}

function normalizeForComparison(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .trim()
    .toLowerCase();
}

function walkTsFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walkTsFiles(full, acc);
    } else if (/\.(ts|tsx|js|jsx|mjs)$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

const registryText = read(join(I18N, "language-registry.ts"));
const registryCodes = [
  ...registryText.matchAll(/code:\s*"([a-z]{2})"/g),
].map((m) => m[1]);

if (registryCodes.length !== 35) {
  fail(`language registry count ${registryCodes.length}, expected 35`);
} else {
  pass("language registry has 35 locales");
}

for (const code of registryCodes) {
  const marketing = join(CONTENT, `${code}.ts`);
  const legal = join(LEGAL, `${code}.ts`);
  try {
    read(marketing);
    read(legal);
    pass(`content files present for ${code}`);
  } catch {
    fail(`missing marketing or legal content for ${code}`);
  }
}

try {
  read(join(I18N, "content-registry.ts"));
  pass("content-registry.ts present");
} catch {
  fail("missing content-registry.ts");
}

const getContentText = read(join(I18N, "get-content.ts"));
if (!getContentText.includes("contentByLocale")) {
  fail("get-content.ts does not use contentByLocale");
} else {
  pass("get-content.ts resolves native locale content");
}

if (getContentText.includes('contentFallbackLocale: "en"')) {
  fail("get-content.ts still allows EN fallback locale");
} else {
  pass("get-content.ts disables EN content fallback");
}

if (!getContentText.includes("Missing native public-site content for locale")) {
  fail("get-content.ts does not fail hard on missing locale content");
} else {
  pass("get-content.ts fails fast when native locale content is missing");
}

const layoutText = read(join(SRC, "app/[locale]/layout.tsx"));
if (!layoutText.includes("generateStaticParams")) {
  fail("locale layout missing generateStaticParams");
} else {
  pass("locale layout defines generateStaticParams");
}

const authorityPage = read(join(SRC, "app/[locale]/authority-efti/page.tsx"));
if (!authorityPage.includes("content.authorityEfti.cards")) {
  fail("authority-efti page not using localized cards");
} else {
  pass("authority-efti page uses localized cards");
}

const allContent = walkTsFiles(join(CONTENT)).map(read).join("\n");
if (/__[A-Za-zÀ-ÿŠŽČĆĐЁА-Яа-я]+_\d+__/.test(allContent)) {
  fail("found leaked protect tokens in locale content");
} else {
  pass("no leaked protect tokens in locale content");
}

if (/\n  legal: \{[\s\S]*\n  legal: legal/m.test(allContent)) {
  fail("found duplicate inline legal blocks in marketing content");
} else {
  pass("no duplicate inline legal blocks");
}

const allSource = walkTsFiles(SRC).map(read).join("\n");
if (allSource.includes("TODO_TRANSLATE")) {
  fail("found TODO_TRANSLATE placeholder in src");
} else {
  pass("no TODO_TRANSLATE placeholders");
}

if (/translation missing/i.test(allSource)) {
  fail('found "translation missing" marker in src');
} else {
  pass('no "translation missing" markers');
}

if (/google\.translate|googtrans|translate\.google/i.test(allSource)) {
  fail("found Google Translate widget reference in src");
} else {
  pass("no Google Translate widget in src");
}

const enMarketing = read(join(CONTENT, "en.ts"));
const huMarkers = [
  "kamionos",
  "beállítás",
  "adatkezelés",
  "sofőr",
  "fuvar",
  "jogszabály",
];
const allowedSharedTokens = new Set([
  "vianexis",
  "cmr",
  "adr",
  "api",
  "pdf",
  "qr",
  "efti",
  "http",
  "https",
  "@",
]);

for (const code of registryCodes) {
  const marketingPath = join(CONTENT, `${code}.ts`);
  const legalPath = join(LEGAL, `${code}.ts`);
  const marketingText = read(marketingPath);
  const legalText = read(legalPath);

  if (code !== "en") {
    if (/contentEn\b/.test(marketingText) || /legalEn\b/.test(legalText)) {
      fail(`${code} content imports EN fallback symbols`);
    }

    const enLike =
      normalizeForComparison(marketingText) === normalizeForComparison(enMarketing);
    if (enLike) {
      fail(`${code} marketing content is effectively identical to EN`);
    }
  }

  if (code !== "hu") {
    const lower = normalizeForComparison(marketingText);
    for (const marker of huMarkers) {
      if (lower.includes(marker)) {
        fail(`${code} marketing contains HU leakage marker: ${marker}`);
        break;
      }
    }
  }

  const combined = `${marketingText}\n${legalText}`;
  if (
    /\b(certified|officially certified|accredited|licensed)\s+efti\b/i.test(combined) &&
    !/\bnot\s+(a\s+)?certified\s+efti\b/i.test(combined) &&
    !/\bnem\s+certifik[aá]lt\s+efti\b/i.test(combined) &&
    !/\bnem\s+hivatalosan\s+tan[uú]s[ií]tott\s+efti\b/i.test(combined) &&
    !/\bnie\s+certificat[ăa]\s+efti\b/i.test(combined) &&
    !/\bnon\s+[èe]\s+una\s+piattaforma\s+efti\s+certificata\b/i.test(combined) &&
    !/\bmhux\b[\s\S]{0,40}\bċċertifikata\s+efti\b/i.test(combined)
  ) {
    fail(`${code} contains certified eFTI claim`);
  }

  if (
    /\b(available on|now on|download on|get it on|live on)\s+google play\b/i.test(combined) ||
    /\bgoogle play\s+now available\b/i.test(combined) ||
    /\bpublic play store\b[\s\S]{0,30}\bavailable\b/i.test(combined)
  ) {
    fail(`${code} contains false Play Store availability claim`);
  }

  if (
    /translation under review/i.test(combined) &&
    code !== "en" &&
    !allowedSharedTokens.has("translation under review")
  ) {
    fail(`${code} contains English review notice text`);
  }
}

const translationStatus = read(join(I18N, "translation-status.ts"));
for (const code of registryCodes) {
  if (code === "hu" || code === "en") continue;
  if (!new RegExp(`\\b${code}:\\s*"`, "m").test(translationStatus)) {
    fail(`translation-status missing localized review notice for ${code}`);
  }
}
pass("translation-status has localized review notices for draft locales");

if (failures > 0) {
  console.error(`\nLocale validation failed with ${failures} error(s).`);
  process.exit(1);
}

console.log("\nAll locale validation checks passed.");
