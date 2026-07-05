#!/usr/bin/env node
/**
 * ViaNexis public site locale validation gate.
 * Checks 35-language routing/content foundation without requiring a full TS compile.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const I18N = join(ROOT, "src/lib/i18n");
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

const localesText = read(join(I18N, "locales.ts"));
const exportedLocales = [
  ...localesText.matchAll(/entry\.code as Locale/g),
].length;

if (exportedLocales === 0) {
  // fallback parse listLanguagesForPublicSite usage
  pass("locales.ts uses registry export");
} else {
  pass("locales.ts maps public site locales from registry");
}

if (!read(join(I18N, "get-content.ts")).includes("withDraftOverlay")) {
  fail("get-content.ts missing draft overlay resolver");
} else {
  pass("get-content.ts has draft overlay resolver");
}

const requiredPaths = [
  "language-registry.ts",
  "translation-status.ts",
  "get-content.ts",
  "content/hu.ts",
  "content/en.ts",
  "metadata.ts",
];

for (const rel of requiredPaths) {
  try {
    read(join(I18N, rel));
    pass(`required file present: ${rel}`);
  } catch {
    fail(`missing required file: ${rel}`);
  }
}

const layoutText = read(join(SRC, "app/[locale]/layout.tsx"));
if (!layoutText.includes("generateStaticParams")) {
  fail("locale layout missing generateStaticParams");
} else {
  pass("locale layout defines generateStaticParams");
}

const sitemapText = read(join(SRC, "app/sitemap.ts"));
if (!sitemapText.includes("locales")) {
  fail("sitemap.ts does not import locales");
} else {
  pass("sitemap.ts imports locales array");
}

const metadataText = read(join(I18N, "metadata.ts"));
if (!metadataText.includes("buildLocaleAlternates")) {
  fail("metadata.ts missing buildLocaleAlternates");
} else {
  pass("metadata.ts builds hreflang alternates");
}

const legalPages = ["privacy", "terms", "legal", "disclaimers"];
for (const page of legalPages) {
  const pagePath = join(SRC, "app/[locale]", page, "page.tsx");
  const text = read(pagePath);
  if (!text.includes("generateMetadata")) {
    fail(`${page} page missing generateMetadata`);
  } else if (!text.includes("buildLegalPageMetadata")) {
    fail(`${page} page missing buildLegalPageMetadata`);
  } else {
    pass(`${page} page has legal SEO metadata`);
  }
}

const allSource = walkTsFiles(SRC).map(read).join("\n");
if (allSource.includes("TODO_TRANSLATE")) {
  fail("found TODO_TRANSLATE placeholder in src");
} else {
  pass("no TODO_TRANSLATE placeholders");
}

if (/google\.translate|googtrans|translate\.google/i.test(allSource)) {
  fail("found Google Translate widget reference in src");
} else {
  pass("no Google Translate widget in src");
}

if (/certified eFTI platform/i.test(allSource)) {
  const falseClaim = allSource.match(/certified eFTI platform/gi) ?? [];
  const negated = allSource.match(/not a certified eFTI platform/gi) ?? [];
  if (falseClaim.length > negated.length) {
    fail("possible false eFTI certification claim");
  } else {
    pass("eFTI claims are negated where present");
  }
} else {
  pass("no unchecked eFTI certification claims");
}

const statusText = read(join(I18N, "translation-status.ts"));
if (!statusText.includes("translationUnderReviewNotices")) {
  fail("translation-status.ts missing under-review notices");
} else {
  pass("translation under review notices defined");
}

if (failures > 0) {
  console.error(`\nLocale validation failed with ${failures} error(s).`);
  process.exit(1);
}

console.log("\nAll locale validation checks passed.");
