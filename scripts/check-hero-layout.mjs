#!/usr/bin/env node
/**
 * Regression checks for hero title / split layout (globe preserved, no overlap).
 *
 * Usage: node scripts/check-hero-layout.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const CONTENT = join(ROOT, "src/lib/i18n/content");
const ZWSP = "\u200B";

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

function formatHeroTitleForWrap(title) {
  return title.replace(/([-/])(?!\u200B)/g, `$1${ZWSP}`);
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

function extractHomeHeroTitle(source) {
  const match = source.match(/hero:\s*\{[\s\S]*?title:\s*"([^"]+)"/);
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

const wrapCases = [
  {
    title: "Unternehmens-/Administratorkontrolle",
    expectIncludes: [`-${ZWSP}`, `/${ZWSP}`],
  },
  {
    title: "Yrityksen/järjestelmänvalvojan hallinta",
    expectIncludes: [`/${ZWSP}`],
  },
  {
    title: "Company / Admin control",
    expectIncludes: [`/${ZWSP}`],
  },
];

for (const { title, expectIncludes } of wrapCases) {
  const out = formatHeroTitleForWrap(title);
  const ok = expectIncludes.every((s) => out.includes(s));
  if (!ok) fail(`formatHeroTitleForWrap(${JSON.stringify(title)}) missing ZWSP breaks`);
  else pass(`formatHeroTitleForWrap ok for ${JSON.stringify(title)}`);
  if (out.includes("\n") || /[^\S\u200B]{2,}/.test(out.replace(/\s/g, " "))) {
    // no-op; keep simple
  }
}

// --- Hero.tsx / HeroVisual structure ---
const heroSrc = read(join(ROOT, "src/components/site/Hero.tsx"));
const visualSrc = read(join(ROOT, "src/components/site/HeroVisual.tsx"));
const requiredSnippets = [
  ["hero-split", "hero-split class"],
  ["hero-split--with-aside", "aside variant"],
  ["hero-copy", "copy column"],
  ["hero-visual", "visual column"],
  ["hero-title", "title class"],
  ["hero-title--long", "long title class"],
  ["isHeroTitleLong", "long-title helper"],
  ["formatHeroTitleForWrap", "orthographic wrap helper"],
  ['data-hero-title-long', "long title data attribute"],
  ['data-hero-visual', "visual data attribute"],
];

for (const [needle, label] of requiredSnippets) {
  if (!heroSrc.includes(needle)) fail(`Hero.tsx missing ${label} (${needle})`);
  else pass(`Hero.tsx has ${label}`);
}

if (!visualSrc.includes("NetworkGlobe") || !visualSrc.includes("max-w-xl")) {
  fail("HeroVisual must restore NetworkGlobe with max-w-xl");
} else {
  pass("HeroVisual restores full globe composition (max-w-xl)");
}

if (!visualSrc.includes("-inset-6")) {
  fail("HeroVisual must restore original -inset-6 glow");
} else {
  pass("HeroVisual restores original glow inset");
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
  ["hyphens: auto", "hyphens auto"],
  ["overflow-wrap: normal", "no anywhere wrap"],
  [".hero-title--long", "long title scale"],
  ["@media (min-width: 1024px)", "desktop two-column breakpoint"],
];

for (const [needle, label] of cssNeedles) {
  if (!css.includes(needle)) fail(`globals.css missing ${label}`);
  else pass(`globals.css has ${label}`);
}

if (css.includes("overflow-wrap: anywhere")) {
  fail("globals.css must not use overflow-wrap: anywhere (breaks orthography)");
} else {
  pass("globals.css avoids overflow-wrap: anywhere");
}

if (/hero-visual[\s\S]{0,200}overflow-x:\s*clip/.test(css)) {
  fail("hero-visual must not clip the globe with overflow-x: clip");
} else {
  pass("hero-visual does not clip globe");
}

// --- locale titles ---
const focusLocales = ["de", "fi", "lv", "en", "hu", "ar", "fr", "pl", "nl", "cs", "sk", "ro", "bg", "el"];
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
  const home = extractHomeHeroTitle(source);
  if (!title) {
    fail(`${locale}: company-admin title not found`);
    continue;
  }
  pass(`${locale}: company-admin title present (${title.length} chars)`);
  if (home) pass(`${locale}: home hero title present (${home.length} chars)`);
  if (["de", "fi", "lv"].includes(locale) && !isHeroTitleLong(title)) {
    fail(`${locale}: expected long-title classification for "${title}"`);
  }
  if (["en", "hu"].includes(locale) && isHeroTitleLong(title)) {
    fail(`${locale}: unexpected long-title for short title "${title}"`);
  }
  const wrapped = formatHeroTitleForWrap(title);
  if (/[/-]/.test(title) && !wrapped.includes(ZWSP)) {
    fail(`${locale}: expected ZWSP wrap opportunity in "${title}"`);
  }
}

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
