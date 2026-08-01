import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ResponsibleUseDocument } from "@/components/site/ResponsibleUseDocument";
import { legalConfig } from "@/config/legal";
import { resolveLocale } from "@/lib/i18n";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { responsibleUseDocEn } from "@/lib/i18n/driver-app-legal/content/responsible-use-sections-en";
import { responsibleUseDocHu } from "@/lib/i18n/driver-app-legal/content/responsible-use-sections-hu";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const PATH = "/disclaimers";

const PAGE_TITLE = {
  hu: "Felelős használat és fontos korlátozások – ViaNexis",
  en: "Responsible Use and Important Limitations – ViaNexis",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const contentLocale = locale === "hu" ? "hu" : "en";
  const doc =
    contentLocale === "hu" ? responsibleUseDocHu : responsibleUseDocEn;
  const meta = buildDriverAppLegalMetadata(
    contentLocale,
    PATH,
    PAGE_TITLE[contentLocale],
    doc.metaDescription,
  );
  const canonical =
    contentLocale === "hu"
      ? `${legalConfig.websiteUrl.value!}/hu/disclaimers`
      : `${legalConfig.websiteUrl.value!}/en/disclaimers`;
  return {
    ...meta,
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        hu: `${legalConfig.websiteUrl.value!}/hu/disclaimers`,
        en: `${legalConfig.websiteUrl.value!}/en/disclaimers`,
      },
    },
  };
}

export default async function DisclaimersPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "hu" && locale !== "en") {
    permanentRedirect("/en/disclaimers");
  }

  return (
    <ResponsibleUseDocument
      contentLocale={locale}
      switchPath={PATH}
      showBackToHub
    />
  );
}
