import type { Locale } from "./types";

export function localePath(locale: Locale, path = "/"): string {
  if (path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/(hu|en)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] ?? "/";
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const slug = stripLocalePrefix(pathname);
  return localePath(locale, slug);
}
