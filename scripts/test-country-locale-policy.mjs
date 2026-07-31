import assert from 'node:assert/strict';

const SUPPORTED = [
  'hu', 'en', 'de', 'ro', 'sk', 'pl', 'cs', 'bg', 'hr', 'sr', 'sl', 'et', 'lv',
  'lt', 'fi', 'sv', 'da', 'nb', 'nl', 'fr', 'es', 'pt', 'it', 'el', 'tr', 'uk',
  'ru', 'sq', 'mk', 'bs', 'be', 'ga', 'mt', 'is', 'ar',
];

const COUNTRY_TO_LOCALE = {
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
  RO: 'ro',
  SK: 'sk',
  PL: 'pl',
  CZ: 'cs',
  FR: 'fr',
  ES: 'es',
  IT: 'it',
  NL: 'nl',
  SE: 'sv',
  PT: 'pt',
  TR: 'tr',
  UA: 'uk',
  SA: 'ar',
};

function normalizeCountryCode(value) {
  if (!value) return null;
  const code = String(value).trim().toUpperCase();
  return /^[A-Z]{2}$/.test(code) ? code : null;
}

function normalizeAppLocale(value) {
  if (!value) return null;
  const code = String(value).trim().toLowerCase().split(/[-_]/)[0];
  return SUPPORTED.includes(code) ? code : null;
}

function localeFromCountryCode(countryCode) {
  const code = normalizeCountryCode(countryCode);
  if (!code) return 'en';
  return COUNTRY_TO_LOCALE[code] ?? 'en';
}

function resolveAnonymousLocale({
  manualCookieLocale,
  countryCode,
  acceptLanguage,
} = {}) {
  const fromCookie = normalizeAppLocale(manualCookieLocale);
  if (fromCookie) return { locale: fromCookie, source: 'manual_cookie' };
  const country = normalizeCountryCode(countryCode);
  if (country) {
    return { locale: localeFromCountryCode(country), source: 'country' };
  }
  if (acceptLanguage) {
    for (const part of String(acceptLanguage).split(',')) {
      const tag = part.trim().split(';')[0]?.trim();
      const normalized = normalizeAppLocale(tag);
      if (normalized) return { locale: normalized, source: 'accept_language' };
    }
  }
  return { locale: 'en', source: 'default' };
}

assert.equal(localeFromCountryCode('HU'), 'hu');
assert.equal(localeFromCountryCode('CH'), 'de');
assert.equal(localeFromCountryCode('DE'), 'de');
assert.equal(localeFromCountryCode('AT'), 'de');
assert.equal(localeFromCountryCode('GB'), 'en');
assert.equal(localeFromCountryCode('PL'), 'pl');
assert.equal(localeFromCountryCode('RO'), 'ro');
assert.equal(localeFromCountryCode('FR'), 'fr');
assert.equal(localeFromCountryCode('ZZ'), 'en');
assert.equal(resolveAnonymousLocale({ countryCode: 'CH' }).locale, 'de');
assert.equal(resolveAnonymousLocale({ countryCode: 'PL' }).locale, 'pl');
assert.equal(
  resolveAnonymousLocale({ manualCookieLocale: 'fr', countryCode: 'CH' })
    .locale,
  'fr',
);
assert.equal(
  resolveAnonymousLocale({ acceptLanguage: 'pl-PL,pl;q=0.9' }).locale,
  'pl',
);
assert.equal(resolveAnonymousLocale({}).locale, 'en');
assert.equal(SUPPORTED.length, 35);

console.log('country-locale-policy: ok');
