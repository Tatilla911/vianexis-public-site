import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { TermsOfUseDocument } from "@/components/site/TermsOfUseDocument";
import { legalConfig } from "@/config/legal";
import { resolveLocale } from "@/lib/i18n";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const PATH = "/terms";

const PAGE_TITLE = {
  hu: "Felhasználási feltételek – ViaNexis",
  en: "Terms of Use – ViaNexis",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const contentLocale = locale === "hu" ? "hu" : "en";
  const { legal } = getDriverAppLegal(contentLocale);
  const title = PAGE_TITLE[contentLocale];
  const meta = buildDriverAppLegalMetadata(
    contentLocale,
    PATH,
    title,
    legal.terms.metaDescription,
  );
  return {
    ...meta,
    robots: { index: true, follow: true },
    alternates: {
      canonical:
        contentLocale === "hu"
          ? legalConfig.termsUrlHu.value!
          : legalConfig.termsUrlEn.value!,
      languages: {
        hu: legalConfig.termsUrlHu.value!,
        en: legalConfig.termsUrlEn.value!,
      },
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "hu" && locale !== "en") {
    permanentRedirect("/en/terms");
  }

  return (
    <TermsOfUseDocument
      contentLocale={locale}
      switchPath={PATH}
      titleOverride={PAGE_TITLE[locale]}
      showBackToHub
    />
  );
}
