import type { Metadata } from "next";
import { getContent, locales } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { shouldNoindexLegalPage } from "@/lib/i18n/translation-status";
import { siteConfig } from "@/lib/site-config";

export function buildLocaleAlternates(path = "/"): Metadata["alternates"] {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteConfig.domain}${localePath(locale, path)}`]),
    ),
  };
}

export function buildLocaleMetadata(
  locale: Locale,
  path = "/",
): Pick<Metadata, "title" | "description" | "alternates" | "openGraph" | "robots"> {
  const content = getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${siteConfig.domain}${localePath(locale, path)}`,
      ...buildLocaleAlternates(path),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `${siteConfig.domain}${localePath(locale, path)}`,
      siteName: siteConfig.name,
      locale: content.meta.ogLocale,
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => getContent(code).meta.ogLocale),
      type: "website",
    },
  };
}

export function buildLegalPageMetadata(
  locale: Locale,
  path: string,
  title: string,
): Metadata {
  const base = buildLocaleMetadata(locale, path);
  const noindex = shouldNoindexLegalPage(locale);

  return {
    ...base,
    title,
    openGraph: {
      ...base.openGraph,
      title,
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}
