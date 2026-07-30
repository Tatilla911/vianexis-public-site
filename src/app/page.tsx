import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import {
  LOCALE_COOKIE_NAME,
  resolveAnonymousLocale,
} from "@/lib/i18n/country-locale-policy";
import { normalizeCountryCode } from "@/lib/i18n/country-locale-policy";

/**
 * Root `/` — middleware usually redirects first.
 * This is a safe server-side fallback when middleware is bypassed.
 */
export default async function RootPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const country =
    normalizeCountryCode(headerStore.get("x-vianexis-test-country")) ??
    normalizeCountryCode(headerStore.get("x-vercel-ip-country")) ??
    normalizeCountryCode(headerStore.get("cf-ipcountry"));

  const { locale } = resolveAnonymousLocale({
    manualCookieLocale: cookieStore.get(LOCALE_COOKIE_NAME)?.value,
    countryCode: country,
    acceptLanguage: headerStore.get("accept-language"),
  });

  redirect(`/${locale}`);
}
