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
  "/pilot",
  "/driver-app",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;

  return locales.flatMap((locale) =>
    publicPaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date("2026-07-05"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path === "/privacy" ? 0.9 : 0.7,
    })),
  );
}
