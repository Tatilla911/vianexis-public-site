import { resolveLanguageWithFallback } from "./language-registry";

/** Canonical HU/EN resolver for bilingual source strings (35-locale public flow). */
export function resolveBilingualText(
  locale: string,
  hu: string,
  en: string,
): string {
  return resolveLanguageWithFallback(locale).code === "hu" ? hu : en;
}

export function resolveDateTimeLocale(locale: string): string {
  const code = resolveLanguageWithFallback(locale).code;
  if (code === "hu") return "hu-HU";
  if (code === "en") return "en-GB";
  return code;
}
