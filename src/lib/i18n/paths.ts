import { locales } from "./locales";
import type { Locale } from "./types";

export function localePath(locale: Locale, path = "/"): string {
  if (path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1) || "/";
    }
  }
  return pathname;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const slug = stripLocalePrefix(pathname);
  return localePath(locale, slug);
}
