import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalMeta,
  DriverAppLegalSection,
} from "@/components/site/DriverAppLegalChrome";
import { DriverAppLegalPrintButton } from "@/components/site/DriverAppLegalPrintButton";
import { PrivacyRequestForm } from "@/components/site/PrivacyRequestForm";
import { Section } from "@/components/site/Section";
import {
  legalConfig,
  legalControllerLabel,
} from "@/config/legal";
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
  const controller = legalControllerLabel[contentLocale];
  const privacyEmail = legalConfig.privacyEmail.value!;
  const deletionUrl =
    contentLocale === "hu"
      ? legalConfig.accountDeletionUrlHu.value!
      : legalConfig.accountDeletionUrlEn.value!;
  const printDate = new Date().toISOString().slice(0, 10);

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 print:hidden">
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
          <DriverAppLegalPrintButton label={legal.chrome.print} />
        </div>
        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={PATH}
          hint={legal.chrome.languageSwitchHint}
        />
        <h1 className="text-page-title">{doc.title}</h1>
        <DriverAppLegalMeta
          versionLabel={legal.privacy.versionLabel}
          effectiveLabel={legal.privacy.effectiveLabel}
          lastUpdatedLabel={legal.privacy.lastUpdatedLabel}
        />

        <dl className="mt-6 space-y-2 text-body text-neutral-grey">
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Érintett alkalmazás: " : "Application: "}
            </dt>
            <dd className="inline text-brand-ink">
              {legalConfig.driverAppName.value}
            </dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">{controller.heading}: </dt>
            <dd className="inline text-brand-ink">{controller.line}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Adatvédelmi kapcsolat: "
                : "Privacy contact: "}
            </dt>
            <dd className="inline">
              <a
                className="text-cyan-glow hover:underline"
                href={`mailto:${privacyEmail}`}
              >
                {privacyEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Fiók és kapcsolódó adatok törlésének kérése: "
                : "Request deletion of your account and associated data: "}
            </dt>
            <dd className="inline">
              <a
                className="text-cyan-glow break-all underline hover:no-underline"
                href={deletionUrl}
              >
                {deletionUrl}
              </a>
            </dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Oldal URL: " : "Page URL: "}
            </dt>
            <dd className="inline break-all">{deletionUrl}</dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Nyomtatás dátuma: " : "Print date: "}
            </dt>
            <dd className="inline">{printDate}</dd>
          </div>
        </dl>

        <p className="text-lead mt-5">{doc.intro}</p>

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
