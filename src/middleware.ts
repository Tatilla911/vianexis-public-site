import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "@/lib/i18n/locales";
import {
  applyLocaleMetaCookies,
  pathLocale,
  resolveRequestLocale,
} from "@/lib/i18n/request-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const existingLocale = pathLocale(pathname);
  const resolved = resolveRequestLocale(request);
  const secure = request.nextUrl.protocol === "https:";

  // Locale-prefixed routes: never auto-redirect to another locale.
  if (existingLocale) {
    const response = NextResponse.next();
    applyLocaleMetaCookies(response, {
      locale: resolved.locale,
      source: resolved.source,
      countryCode: resolved.countryCode,
      secure,
      persistManualPreference: false,
    });
    return response;
  }

  const targetPath =
    pathname === "/" ? `/${resolved.locale}` : `/${resolved.locale}${pathname}`;
  const response = NextResponse.redirect(new URL(targetPath, request.url));
  applyLocaleMetaCookies(response, {
    locale: resolved.locale,
    source: resolved.source,
    countryCode: resolved.countryCode,
    secure,
    persistManualPreference: false,
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};

// Keep locales referenced so static analysis notices registry changes.
void locales;
