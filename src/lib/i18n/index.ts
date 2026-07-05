import { defaultLocale, isLocale } from "./locales";
import { getContent } from "./get-content";
import type { Locale } from "./types";

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value;
  return defaultLocale;
}

export { getContent };
export type { ResolvedSiteContent } from "./get-content";
export * from "./locales";
export * from "./paths";
export * from "./types";
export * from "./translation-status";
export * from "./language-registry";
