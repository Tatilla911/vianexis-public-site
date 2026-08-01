import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalSection,
} from "@/components/site/DriverAppLegalChrome";
import { PrivacyRequestForm } from "@/components/site/PrivacyRequestForm";
import { Section } from "@/components/site/Section";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/account-deletion";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal } = getDriverAppLegal(locale);
  return buildDriverAppLegalMetadata(
    locale,
    PATH,
    legal.accountDeletion.title,
    legal.accountDeletion.metaDescription,
  );
}

export default async function DriverAppAccountDeletionPage({
  params,
}: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) redirect(`/en${PATH}`);
  const doc = legal.accountDeletion;

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap gap-4 print:hidden">
          <Link
            href={localePath(contentLocale, "/driver-app/legal")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {legal.chrome.backToHub}
          </Link>
          <Link
            href={localePath(contentLocale, "/driver-app/privacy")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {legal.nav.privacy}
          </Link>
        </div>
        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={PATH}
          hint={legal.chrome.languageSwitchHint}
        />
        <h1 className="text-page-title">{doc.title}</h1>
        <p className="text-lead mt-5 text-neutral-grey">{doc.intro}</p>

        <div className="mt-10 space-y-8">
          {doc.explanationSections.map((section) => (
            <DriverAppLegalSection key={section.id} section={section} />
          ))}
        </div>

        <div className="mt-10 print:hidden">
          <PrivacyRequestForm locale={locale} content={doc} />
        </div>

        <DriverAppLegalContacts title={doc.contactsTitle} contacts={doc.contacts} />
      </div>
    </Section>
  );
}
