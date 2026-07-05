import { contentEn } from "./content/en";
import { contentHu } from "./content/hu";
import { isLocale } from "./locales";
import type { Locale, SiteContent } from "./types";

const contentByLocale: Record<Locale, SiteContent> = {
  hu: contentHu,
  en: contentEn,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value;
  return "hu";
}

export * from "./locales";
export * from "./paths";
export * from "./types";
