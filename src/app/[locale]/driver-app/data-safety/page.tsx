import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalMeta,
  DriverAppLegalSection,
  DriverAppLegalToc,
} from "@/components/site/DriverAppLegalChrome";
import { DriverAppLegalPrintButton } from "@/components/site/DriverAppLegalPrintButton";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import {
  LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV,
  LEGAL_SHOW_TESTING_RELEASE_BANNER,
  legalConfig,
  legalCounselReviewNotice,
  legalTestingReleaseBanner,
} from "@/config/legal";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/data-safety";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal } = getDriverAppLegal(locale);
  return buildDriverAppLegalMetadata(
    locale,
    PATH,
    legal.dataSafety.title,
    legal.dataSafety.metaDescription,
  );
}

export default async function DriverAppDataSafetyPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) redirect(`/en${PATH}`);
  const doc = legal.dataSafety;
  const deletionUrl =
    contentLocale === "hu"
      ? legalConfig.accountDeletionUrlHu.value!
      : legalConfig.accountDeletionUrlEn.value!;
  const privacyUrl =
    contentLocale === "hu"
      ? legalConfig.privacyUrlHu.value!
      : legalConfig.privacyUrlEn.value!;
  const termsUrl =
    contentLocale === "hu"
      ? legalConfig.termsUrlHu.value!
      : legalConfig.termsUrlEn.value!;
  const disclaimersUrl =
    contentLocale === "hu"
      ? legalConfig.disclaimersUrlHu.value!
      : legalConfig.disclaimersUrlEn.value!;
  const pageUrl =
    contentLocale === "hu"
      ? legalConfig.dataSafetyUrlHu.value!
      : legalConfig.dataSafetyUrlEn.value!;
  const showCounsel =
    LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV &&
    process.env.NODE_ENV !== "production";

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap items-center gap-4 print:hidden">
          <Link
            href={localePath(contentLocale, "/driver-app/legal")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {legal.chrome.backToHub}
          </Link>
          <DriverAppLegalPrintButton label={legal.chrome.print} />
        </div>

        {LEGAL_SHOW_TESTING_RELEASE_BANNER ? (
          <LegalStatusBadge
            label={legalTestingReleaseBanner[contentLocale]}
            className="mb-4 mt-4"
          />
        ) : null}
        {showCounsel ? (
          <p className="text-meta mb-4 text-text-tertiary print:hidden">
            {legalCounselReviewNotice[contentLocale]}
          </p>
        ) : null}

        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={PATH}
          hint={legal.chrome.languageSwitchHint}
        />
        <h1 className="text-page-title">{doc.title}</h1>
        <DriverAppLegalMeta
          versionLabel={doc.versionLabel}
          effectiveLabel={doc.effectiveLabel}
          lastUpdatedLabel={doc.lastUpdatedLabel}
        />
        <dl className="mt-4 hidden space-y-1 text-body text-neutral-grey print:block">
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Oldal URL: " : "Page URL: "}
            </dt>
            <dd className="inline break-all">{pageUrl}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Adatvédelmi tájékoztató URL: "
                : "Privacy URL: "}
            </dt>
            <dd className="inline break-all">{privacyUrl}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Felhasználási feltételek URL: "
                : "Terms URL: "}
            </dt>
            <dd className="inline break-all">{termsUrl}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Felelős használat URL: "
                : "Responsible Use URL: "}
            </dt>
            <dd className="inline break-all">{disclaimersUrl}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Fióktörlési URL: "
                : "Account deletion URL: "}
            </dt>
            <dd className="inline break-all">{deletionUrl}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Nyomtatás dátuma: " : "Print date: "}
            </dt>
            <dd className="inline">{new Date().toISOString().slice(0, 10)}</dd>
          </div>
        </dl>
        <p className="text-lead mt-5">{doc.intro}</p>
        <p className="text-body mt-4 text-text-tertiary">{doc.disclaimer}</p>

        <div className="mt-8">
          <DriverAppLegalToc
            label={legal.chrome.tableOfContents}
            sections={doc.sections}
          />
        </div>

        <div className="mt-8 max-w-full overflow-x-auto">
          <table className="driver-app-data-safety-table w-full min-w-0 border-collapse text-left text-sm sm:min-w-[40rem]">
            <thead>
              <tr className="border-b border-navy-700 text-text-tertiary">
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.category}</th>
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.collected}</th>
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.requirement}</th>
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.origin}</th>
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.purpose}</th>
                <th className="px-2 py-2 font-medium">{doc.tableHeaders.sharing}</th>
              </tr>
            </thead>
            <tbody>
              {doc.rows.map((row) => (
                <tr key={row.category} className="border-b border-navy-800 align-top">
                  <td className="px-2 py-3 text-brand-ink">{row.category}</td>
                  <td className="px-2 py-3 text-neutral-grey">{row.collected}</td>
                  <td className="px-2 py-3 text-neutral-grey">{row.requirement}</td>
                  <td className="px-2 py-3 text-neutral-grey">{row.origin}</td>
                  <td className="px-2 py-3 text-neutral-grey">{row.purpose}</td>
                  <td className="px-2 py-3 text-neutral-grey">{row.sharing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <DriverAppLegalSection key={section.id} section={section} />
          ))}
        </div>
        <DriverAppLegalContacts title={doc.contactsTitle} contacts={doc.contacts} />
      </div>
    </Section>
  );
}
