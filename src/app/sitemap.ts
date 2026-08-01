import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";
import { siteConfig } from "@/lib/site-config";

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

  return locales.flatMap((locale) =>
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
}
