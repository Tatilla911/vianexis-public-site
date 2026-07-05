import {
  listLanguagesForPublicSite,
  VIANEXIS_LANGUAGE_REGISTRY,
  type LanguageCode,
} from "./language-registry";
import type { Locale } from "./types";

export const locales: Locale[] = listLanguagesForPublicSite().map(
  (entry) => entry.code as Locale,
);

export const defaultLocale: Locale = "hu";

export const localeNames = Object.fromEntries(
  VIANEXIS_LANGUAGE_REGISTRY.map((entry) => [entry.code, entry.nativeName]),
) as Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
