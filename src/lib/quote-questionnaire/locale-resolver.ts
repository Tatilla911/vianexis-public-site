import {
  resolveBilingualText as resolvePublicBilingualText,
  resolveDateTimeLocale as resolvePublicDateTimeLocale,
} from "../i18n/bilingual-resolver";
import {
  resolveLanguageWithFallback,
  type LanguageCode,
} from "../i18n/language-registry";

/** All 35 public-site locales participate in the quote/application flow. */
export type QuoteLocale = LanguageCode;

export function resolveQuoteLocale(locale: string): QuoteLocale {
  return resolveLanguageWithFallback(locale).code as QuoteLocale;
}

export const resolveBilingualText = resolvePublicBilingualText;
export const resolveDateTimeLocale = resolvePublicDateTimeLocale;
