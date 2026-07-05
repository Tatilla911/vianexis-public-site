import type { Locale } from "./types";

export const locales: Locale[] = ["hu", "en"];
export const defaultLocale: Locale = "hu";

export const localeNames: Record<Locale, string> = {
  hu: "Magyar",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
