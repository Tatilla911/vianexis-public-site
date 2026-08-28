import type { Locale } from "@/lib/i18n/types";
import { localePath } from "@/lib/i18n/paths";

/** Canonical localized quote-request path. */
export function quotePathForLocale(locale: Locale): string {
  return locale === "hu"
    ? localePath("hu", "/ajanlatkeres")
    : localePath("en", "/request-a-quote");
}

export function isQuotePathSlug(slug: string): boolean {
  return slug === "/ajanlatkeres" || slug === "/request-a-quote";
}
