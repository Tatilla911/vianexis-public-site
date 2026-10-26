import type { MetadataRoute } from "next";
import { documentationPathForLocale } from "@/lib/documentation/copy";
import { locales } from "@/lib/i18n/locales";
import { quotePathForLocale } from "@/lib/quote-questionnaire/paths";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/types";

const publicPaths = [
  "",
  "/features",
  "/contact",
  "/privacy",
  "/terms",
  "/legal",
  "/disclaimers",
  "/privacy-request",
  "/pilot",
  "/apply/company",
  "/apply/driver",
  "/apply/partner",
  "/driver-app",
  "/driver-app/legal",
  "/driver-app/privacy",
  "/driver-app/terms",
  "/driver-app/data-safety",
  "/driver-app/account-deletion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  const pages = locales.flatMap((locale) =>
    publicPaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date("2026-07-31"),
      changeFrequency: "weekly" as const,
      priority:
        path === ""
          ? 1
          : path === "/privacy" || path === "/driver-app/account-deletion"
            ? 0.9
            : 0.7,
    })),
  );

  const documentation = locales.map((locale) => ({
    url: `${base}${documentationPathForLocale(locale)}`,
    lastModified: new Date("2026-08-10"),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const quote = (["hu", "en"] as Locale[]).map((locale) => ({
    url: `${base}${quotePathForLocale(locale)}`,
    lastModified: new Date("2026-08-28"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...documentation, ...quote, ...["/hu/kamionstop", "/en/truck-restrictions"].map(path => ({url: `${base}${path}`, changeFrequency: "daily" as const, priority: 0.8}))];
}
