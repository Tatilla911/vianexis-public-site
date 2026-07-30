import {
  DETECTED_COUNTRY_COOKIE_NAME,
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
  LOCALE_SOURCE_COOKIE_NAME,
  normalizeAppLocale,
  normalizeCountryCode,
  resolveAnonymousLocale,
  type LocaleResolutionSource,
  type SupportedAppLocale,
} from "@/lib/i18n/country-locale-policy";
import { isLocale } from "@/lib/i18n/locales";
import type { Locale } from "@/lib/i18n/types";
import type { NextRequest } from "next/server";

export function readManualLocaleCookie(
  request: NextRequest,
): SupportedAppLocale | null {
  return normalizeAppLocale(request.cookies.get(LOCALE_COOKIE_NAME)?.value);
}

export function detectCountryFromRequest(request: NextRequest): string | null {
  // Explicit test / staging override (never trust for security decisions).
  const testHeader =
    request.headers.get("x-vianexis-test-country") ??
    request.headers.get("x-test-country");
  const fromTest = normalizeCountryCode(testHeader);
  if (fromTest) return fromTest;

  const vercelCountry =
    request.headers.get("x-vercel-ip-country") ??
    // Next.js / Vercel geo on request (when available)
    (request as NextRequest & { geo?: { country?: string } }).geo?.country;
  const fromVercel = normalizeCountryCode(vercelCountry);
  if (fromVercel) return fromVercel;

  const proxyCountry =
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country-code") ??
    request.headers.get("x-geo-country");
  return normalizeCountryCode(proxyCountry);
}

export function resolveRequestLocale(request: NextRequest): {
  locale: SupportedAppLocale;
  source: LocaleResolutionSource;
  countryCode: string | null;
} {
  const countryCode = detectCountryFromRequest(request);
  const resolved = resolveAnonymousLocale({
    manualCookieLocale: readManualLocaleCookie(request),
    countryCode,
    acceptLanguage: request.headers.get("accept-language"),
  });
  return { ...resolved, countryCode };
}

export function localeCookieOptions(secure: boolean) {
  return {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax" as const,
    secure,
    httpOnly: false,
  };
}

export function applyLocaleMetaCookies(
  response: { cookies: { set: (name: string, value: string, options: object) => void } },
  input: {
    locale: SupportedAppLocale;
    source: LocaleResolutionSource;
    countryCode: string | null;
    secure: boolean;
    /** Only set preference cookie when the user explicitly chose a language. */
    persistManualPreference?: boolean;
  },
) {
  const opts = localeCookieOptions(input.secure);
  if (input.persistManualPreference) {
    response.cookies.set(LOCALE_COOKIE_NAME, input.locale, opts);
  }
  if (input.countryCode) {
    response.cookies.set(DETECTED_COUNTRY_COOKIE_NAME, input.countryCode, opts);
  }
  response.cookies.set(LOCALE_SOURCE_COOKIE_NAME, input.source, opts);
}

export function pathLocale(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment || !isLocale(segment)) return null;
  return segment;
}
