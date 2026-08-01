import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PrivacyPolicyDocument } from "@/components/site/PrivacyPolicyDocument";
import { legalConfig } from "@/config/legal";
import { resolveLocale } from "@/lib/i18n";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/privacy";

const PLAY_TITLE = {
  hu: "Adatvédelmi tájékoztató – ViaNexis Driver",
  en: "Privacy Policy – ViaNexis Driver",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  const title = isOfficialLocale
    ? PLAY_TITLE[contentLocale]
    : legal.privacy.title;
  // Canonical for driver-app path points to Play-stable /privacy URL.
  const meta = buildDriverAppLegalMetadata(
    locale,
    PATH,
    title,
    legal.privacy.metaDescription,
  );
  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      canonical:
        contentLocale === "hu"
          ? legalConfig.privacyUrlHu.value!
          : legalConfig.privacyUrlEn.value!,
      languages: {
        hu: legalConfig.privacyUrlHu.value!,
        en: legalConfig.privacyUrlEn.value!,
      },
    },
    robots: isOfficialLocale
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function DriverAppPrivacyPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) redirect(`/en${PATH}`);

  return (
    <PrivacyPolicyDocument
      contentLocale={contentLocale}
      switchPath={PATH}
      titleOverride={PLAY_TITLE[contentLocale]}
      showBackToHub
    />
  );
}
