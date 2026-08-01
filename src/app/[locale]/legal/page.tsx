import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { LegalCenterDocument } from "@/components/site/LegalCenterDocument";
import { legalConfig } from "@/config/legal";
import { resolveLocale } from "@/lib/i18n";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { getLegalCenterCopy } from "@/lib/i18n/legal-center/content";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const PATH = "/legal";

const PAGE_META_TITLE = {
  hu: "Jogi információk és dokumentumközpont | ViaNexis",
  en: "Legal Information and Document Center | ViaNexis",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const contentLocale = locale === "hu" ? "hu" : "en";
  const copy = getLegalCenterCopy(contentLocale);
  const meta = buildDriverAppLegalMetadata(
    contentLocale,
    PATH,
    PAGE_META_TITLE[contentLocale],
    copy.metaDescription,
  );
  const canonical =
    contentLocale === "hu"
      ? legalConfig.legalCenterUrlHu.value!
      : legalConfig.legalCenterUrlEn.value!;

  return {
    ...meta,
    title: PAGE_META_TITLE[contentLocale],
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        hu: legalConfig.legalCenterUrlHu.value!,
        en: legalConfig.legalCenterUrlEn.value!,
      },
    },
    openGraph: {
      ...meta.openGraph,
      title: PAGE_META_TITLE[contentLocale],
      url: canonical,
    },
  };
}

export default async function LegalPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "hu" && locale !== "en") {
    permanentRedirect("/en/legal");
  }

  return <LegalCenterDocument contentLocale={locale} />;
}
