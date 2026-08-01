import type { Metadata } from "next";
import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
  getDriverAppLegal,
  type DriverAppLegalOfficialLocale,
} from "@/lib/i18n/driver-app-legal";
import { localePath } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site-config";

const OFFICIAL: DriverAppLegalOfficialLocale[] = ["hu", "en"];

export function buildDriverAppLegalMetadata(
  locale: string,
  path: string,
  title: string,
  description: string,
): Metadata {
  const { contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  const canonicalLocale = isOfficialLocale ? contentLocale : "en";
  const canonicalPath = localePath(canonicalLocale, path);

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.domain}${canonicalPath}`,
      languages: Object.fromEntries(
        OFFICIAL.map((code) => [
          code,
          `${siteConfig.domain}${localePath(code, path)}`,
        ]),
      ),
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}${canonicalPath}`,
      siteName: siteConfig.name,
      locale: contentLocale === "hu" ? "hu_HU" : "en_US",
      alternateLocale: contentLocale === "hu" ? ["en_US"] : ["hu_HU"],
      type: "website",
    },
    robots: isOfficialLocale
      ? { index: true, follow: true }
      : { index: false, follow: true },
    other: {
      "driver-app-legal-version": DRIVER_APP_LEGAL_VERSION,
      "driver-app-legal-effective": DRIVER_APP_LEGAL_EFFECTIVE_DATE,
      "driver-app-legal-updated": DRIVER_APP_LEGAL_LAST_UPDATED,
    },
  };
}
