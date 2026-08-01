import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { TermsOfUseDocument } from "@/components/site/TermsOfUseDocument";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/terms";

const PAGE_TITLE = {
  hu: "Felhasználási feltételek – ViaNexis",
  en: "Terms of Use – ViaNexis",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  const title = isOfficialLocale
    ? PAGE_TITLE[contentLocale]
    : PAGE_TITLE.en;
  return buildDriverAppLegalMetadata(
    locale,
    PATH,
    title,
    legal.terms.metaDescription,
  );
}

export default async function DriverAppTermsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) redirect(`/en${PATH}`);

  return (
    <TermsOfUseDocument
      contentLocale={contentLocale}
      switchPath={PATH}
      titleOverride={PAGE_TITLE[contentLocale]}
      showBackToHub
    />
  );
}
