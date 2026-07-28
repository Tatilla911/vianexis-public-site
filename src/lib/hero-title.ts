/** Character length above which hero titles use the condensed display scale. */
export const HERO_TITLE_LONG_CHAR_THRESHOLD = 28;

/** Single token length (split on whitespace / slash) that forces condensed scale. */
export const HERO_TITLE_LONG_TOKEN_THRESHOLD = 18;

const ZWSP = "\u200B";

/**
 * Detect titles that need condensed typography so they stay inside the
 * hero copy column (e.g. DE/FI/LV compound module names).
 */
export function isHeroTitleLong(title: string): boolean {
  const normalized = title.trim();
  if (!normalized) return false;
  if (normalized.length > HERO_TITLE_LONG_CHAR_THRESHOLD) return true;
  const tokens = normalized.split(/[\s/]+/).filter(Boolean);
  return tokens.some((token) => token.length > HERO_TITLE_LONG_TOKEN_THRESHOLD);
}

/**
 * Insert orthography-friendly wrap opportunities after existing
 * compound separators (`/` and `-`) using zero-width space.
 * Dictionary hyphenation is handled by CSS `hyphens: auto` + document lang.
 */
export function formatHeroTitleForWrap(title: string): string {
  return title.replace(/([-/])(?!\u200B)/g, `$1${ZWSP}`);
}
