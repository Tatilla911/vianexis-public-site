import type { Locale } from "@/lib/i18n/types";
import { resolveLanguageWithFallback } from "@/lib/i18n/language-registry";
import { localePath } from "@/lib/i18n/paths";

/** Canonical localized quote-request path. */
export function quotePathForLocale(locale: Locale): string {
  const code = resolveLanguageWithFallback(locale).code;
  return code === "hu"
    ? localePath(locale, "/ajanlatkeres")
    : localePath(locale, "/request-a-quote");
}

export function isQuotePathSlug(slug: string): boolean {
  return slug === "/ajanlatkeres" || slug === "/request-a-quote";
}
