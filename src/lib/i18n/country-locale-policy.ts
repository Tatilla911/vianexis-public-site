/**
 * Central country → locale policy for ViaNexis public site, portal, and emails.
 * Keep in sync with backend `src/i18n/country-locale.policy.ts`.
 */

export type SupportedAppLocale = 'hu' | 'en' | 'de';

export type LocaleResolutionSource =
  | 'user_preference'
  | 'manual_cookie'
  | 'invite_token'
  | 'application'
  | 'country'
  | 'accept_language'
  | 'default';

/** ISO 3166-1 alpha-2 → UI/email locale. Unlisted countries resolve to `en`. */
export const COUNTRY_TO_LOCALE: Readonly<Record<string, SupportedAppLocale>> = {
  HU: 'hu',
  DE: 'de',
  AT: 'de',
  CH: 'de',
  LI: 'de',
  GB: 'en',
  IE: 'en',
  US: 'en',
  CA: 'en',
  AU: 'en',
  NZ: 'en',
};

export const DEFAULT_LOCALE: SupportedAppLocale = 'en';
export const SUPPORTED_APP_LOCALES: readonly SupportedAppLocale[] = [
  'hu',
  'en',
  'de',
];

export const LOCALE_COOKIE_NAME = 'vianexis_locale';
export const DETECTED_COUNTRY_COOKIE_NAME = 'vianexis_detected_country';
export const LOCALE_SOURCE_COOKIE_NAME = 'vianexis_locale_source';

/** Cookie max-age: 1 year */
export const LOCALE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function normalizeCountryCode(
  value: string | null | undefined,
): string | null {
  if (!value) return null;
  const code = value.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code)) return null;
  return code;
}

export function isSupportedAppLocale(
  value: string | null | undefined,
): value is SupportedAppLocale {
  if (!value) return false;
  const code = value.trim().toLowerCase().split(/[-_]/)[0];
  return (SUPPORTED_APP_LOCALES as readonly string[]).includes(code);
}

export function normalizeAppLocale(
  value: string | null | undefined,
): SupportedAppLocale | null {
  if (!value) return null;
  const code = value.trim().toLowerCase().split(/[-_]/)[0];
  if (isSupportedAppLocale(code)) return code;
  return null;
}

/** Map country → locale. Unknown / invalid → `en`. */
export function localeFromCountryCode(
  countryCode: string | null | undefined,
): SupportedAppLocale {
  const code = normalizeCountryCode(countryCode);
  if (!code) return DEFAULT_LOCALE;
  return COUNTRY_TO_LOCALE[code] ?? DEFAULT_LOCALE;
}

/**
 * Resolve locale for anonymous / pre-auth surfaces.
 * Priority: manual cookie → country → Accept-Language (optional) → en.
 */
export function resolveAnonymousLocale(input: {
  manualCookieLocale?: string | null;
  countryCode?: string | null;
  acceptLanguage?: string | null;
}): { locale: SupportedAppLocale; source: LocaleResolutionSource } {
  const fromCookie = normalizeAppLocale(input.manualCookieLocale);
  if (fromCookie) {
    return { locale: fromCookie, source: 'manual_cookie' };
  }

  const country = normalizeCountryCode(input.countryCode);
  if (country) {
    return {
      locale: localeFromCountryCode(country),
      source: 'country',
    };
  }

  const fromAccept = localeFromAcceptLanguage(input.acceptLanguage);
  if (fromAccept) {
    return { locale: fromAccept, source: 'accept_language' };
  }

  return { locale: DEFAULT_LOCALE, source: 'default' };
}

/** Optional helper between country and English fallback. */
export function localeFromAcceptLanguage(
  header: string | null | undefined,
): SupportedAppLocale | null {
  if (!header?.trim()) return null;
  const parts = header.split(',');
  for (const part of parts) {
    const tag = part.trim().split(';')[0]?.trim();
    const normalized = normalizeAppLocale(tag);
    if (normalized) return normalized;
  }
  return null;
}

/**
 * Approval / invite email locale chain:
 * application preferred → user preferred → company language → country fallback → en
 */
export function resolveInviteEmailLocale(input: {
  applicationPreferredLanguage?: string | null;
  userPreferredLanguage?: string | null;
  companyPreferredLanguage?: string | null;
  countryCode?: string | null;
}): SupportedAppLocale {
  return (
    normalizeAppLocale(input.applicationPreferredLanguage) ??
    normalizeAppLocale(input.userPreferredLanguage) ??
    normalizeAppLocale(input.companyPreferredLanguage) ??
    (input.countryCode
      ? localeFromCountryCode(input.countryCode)
      : null) ??
    DEFAULT_LOCALE
  );
}
