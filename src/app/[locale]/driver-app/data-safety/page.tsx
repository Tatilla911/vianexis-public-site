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
import { Section } from "@/components/site/Section";
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
        <p className="text-lead mt-5">{doc.intro}</p>
        <p className="text-body mt-4 text-text-tertiary">{doc.disclaimer}</p>

        <div className="mt-8 overflow-x-auto">
          <table className="driver-app-data-safety-table w-full min-w-[40rem] border-collapse text-left text-sm">
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
