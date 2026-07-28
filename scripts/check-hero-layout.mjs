#!/usr/bin/env node
/**
 * Regression checks for hero title / split layout (P1 company-portal overlap).
 * No browser driver required — source + content invariants.
 *
 * Usage: node scripts/check-hero-layout.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const CONTENT = join(ROOT, "src/lib/i18n/content");

const HERO_TITLE_LONG_CHAR_THRESHOLD = 28;
const HERO_TITLE_LONG_TOKEN_THRESHOLD = 18;

let failures = 0;

function fail(message) {
  console.error(`FAIL: ${message}`);
  failures += 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

function isHeroTitleLong(title) {
  const normalized = title.trim();
  if (!normalized) return false;
  if (normalized.length > HERO_TITLE_LONG_CHAR_THRESHOLD) return true;
  const tokens = normalized.split(/[\s/]+/).filter(Boolean);
  return tokens.some((token) => token.length > HERO_TITLE_LONG_TOKEN_THRESHOLD);
}

function read(path) {
  return readFileSync(path, "utf8");
}

function extractCompanyAdminTitle(source) {
  const match = source.match(
    /id:\s*"company-admin",\s*title:\s*"([^"]+)"/,
  );
  return match?.[1] ?? null;
}

// --- helper unit checks ---
const helperCases = [
  { title: "Company / Admin control", expectLong: false },
  { title: "Céges irányítás / Admin", expectLong: false },
  { title: "Unternehmens-/Administratorkontrolle", expectLong: true },
  { title: "Yrityksen/järjestelmänvalvojan hallinta", expectLong: true },
  { title: "Uzņēmuma/Administratora kontrole", expectLong: true },
];

for (const { title, expectLong } of helperCases) {
  const got = isHeroTitleLong(title);
  if (got !== expectLong) {
    fail(`isHeroTitleLong(${JSON.stringify(title)}) → ${got}, expected ${expectLong}`);
  } else {
    pass(`isHeroTitleLong(${JSON.stringify(title)}) → ${got}`);
  }
}

// --- Hero.tsx structure ---
const heroSrc = read(join(ROOT, "src/components/site/Hero.tsx"));
const requiredSnippets = [
  ["hero-split", "hero-split class"],
  ["hero-split--with-aside", "aside variant"],
  ["hero-copy", "copy column"],
  ["hero-visual", "visual column"],
  ["hero-title", "title class"],
  ["hero-title--long", "long title class"],
  ["isHeroTitleLong", "long-title helper import"],
  ['data-hero-title-long', "long title data attribute"],
  ['data-hero-visual', "visual data attribute"],
];

for (const [needle, label] of requiredSnippets) {
  if (!heroSrc.includes(needle)) fail(`Hero.tsx missing ${label} (${needle})`);
  else pass(`Hero.tsx has ${label}`);
}

if (/whitespace-nowrap|white-space:\s*nowrap/.test(heroSrc)) {
  fail("Hero.tsx must not force nowrap on the title");
} else {
  pass("Hero.tsx does not force title nowrap");
}

// --- globals.css layout ---
const css = read(join(ROOT, "src/app/globals.css"));
const cssNeedles = [
  [".hero-split", "hero-split rule"],
  ["minmax(0, 1.05fr)", "copy fr track"],
  ["minmax(0, 0.95fr)", "visual fr track"],
  [".hero-copy", "hero-copy rule"],
  ["min-width: 0", "min-width 0"],
  ["overflow-wrap: anywhere", "overflow-wrap anywhere"],
  [".hero-title--long", "long title scale"],
  ["overflow-x: clip", "visual overflow clip"],
  ["@media (min-width: 900px)", "900px breakpoint"],
  ["@media (max-width: 899px)", "single-column mobile/tablet rule"],
];

for (const [needle, label] of cssNeedles) {
  if (!css.includes(needle)) fail(`globals.css missing ${label}`);
  else pass(`globals.css has ${label}`);
}

// --- locale company-admin titles renderable + long class expectation ---
const focusLocales = ["de", "fi", "lv", "en", "hu", "ar", "fr", "pl"];
for (const locale of focusLocales) {
  const file = join(CONTENT, `${locale}.ts`);
  let source;
  try {
    source = read(file);
  } catch {
    fail(`missing content file for ${locale}`);
    continue;
  }
  const title = extractCompanyAdminTitle(source);
  if (!title) {
    fail(`${locale}: company-admin title not found`);
    continue;
  }
  pass(`${locale}: company-admin title present (${title.length} chars)`);
  if (["de", "fi", "lv"].includes(locale) && !isHeroTitleLong(title)) {
    fail(`${locale}: expected long-title classification for "${title}"`);
  }
  if (["en", "hu"].includes(locale) && isHeroTitleLong(title)) {
    fail(`${locale}: unexpected long-title for short title "${title}"`);
  }
}

// Scan locale content modules only (skip helpers under content/)
for (const entry of readdirSync(CONTENT)) {
  if (!/^[a-z]{2}\.ts$/.test(entry)) continue;
  const title = extractCompanyAdminTitle(read(join(CONTENT, entry)));
  if (!title) fail(`${entry}: company-admin title missing`);
}

if (failures > 0) {
  console.error(`\nhero layout check failed (${failures})`);
  process.exit(1);
}

console.log("\nhero layout check OK");
