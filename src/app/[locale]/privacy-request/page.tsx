import Link from "next/link";
import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { PrivacyRequestForm } from "@/components/site/PrivacyRequestForm";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalSection,
} from "@/components/site/DriverAppLegalChrome";
import { Section } from "@/components/site/Section";
import { legalConfig } from "@/config/legal";
import { resolveLocale } from "@/lib/i18n";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/privacy-request";

const COPY = {
  hu: {
    title: "Adatvédelmi megkeresés",
    description:
      "Adatvédelmi kérelem benyújtása a ViaNexishez: hozzáférés, helyesbítés, törlés, korlátozás és egyéb megkeresések.",
    intro:
      "Ezen az űrlapon adatvédelmi kérelmet nyújthat be közvetlenül a ViaNexis felé. Ne adjon meg jelszót vagy PIN-kódot. A válasz nem erősíti meg automatikusan, hogy a megadott adatokhoz tartozik-e fiók.",
    emailHint: "Elsődleges adatvédelmi kapcsolat:",
  },
  en: {
    title: "Privacy request",
    description:
      "Submit a privacy request to ViaNexis: access, rectification, deletion, restriction, and other privacy matters.",
    intro:
      "Use this form to submit a privacy request directly to ViaNexis. Do not enter a password or PIN. The response does not automatically confirm whether an account exists for the details you submit.",
    emailHint: "Primary privacy contact:",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const contentLocale = locale === "hu" ? "hu" : "en";
  const copy = COPY[contentLocale];
  return buildDriverAppLegalMetadata(
    contentLocale,
    PATH,
    copy.title,
    copy.description,
  );
}

export default async function PrivacyRequestPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "hu" && locale !== "en") {
    permanentRedirect("/en/privacy-request");
  }
  const contentLocale = locale;
  const { legal } = getDriverAppLegal(contentLocale);
  const copy = COPY[contentLocale];
  const privacyEmail = legalConfig.privacyEmail.value!;

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full max-w-3xl">
        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={PATH}
          hint={legal.chrome.languageSwitchHint}
        />
        <h1 className="text-page-title">{copy.title}</h1>
        <p className="text-lead mt-5">{copy.intro}</p>
        <p className="text-body mt-4 text-neutral-grey">
          {copy.emailHint}{" "}
          <a className="text-cyan-glow hover:underline" href={`mailto:${privacyEmail}`}>
            {privacyEmail}
          </a>
        </p>
        <p className="text-body mt-3 text-neutral-grey">
          <Link
            href={localePath(contentLocale, "/driver-app/account-deletion")}
            className="text-cyan-glow hover:underline"
          >
            {legal.nav.accountDeletion}
          </Link>
          {" · "}
          <Link
            href={localePath(contentLocale, "/privacy")}
            className="text-cyan-glow hover:underline"
          >
            {legal.nav.privacy}
          </Link>
        </p>

        <div className="mt-8 space-y-8">
          {legal.accountDeletion.explanationSections
            .filter((s) => s.id === "identity-verification")
            .map((section) => (
              <DriverAppLegalSection key={section.id} section={section} />
            ))}
        </div>

        <div className="mt-10 print:hidden">
          <PrivacyRequestForm
            locale={locale}
            content={legal.accountDeletion}
          />
        </div>

        <DriverAppLegalContacts
          title={legal.accountDeletion.contactsTitle}
          contacts={legal.accountDeletion.contacts}
        />
      </div>
    </Section>
  );
}
