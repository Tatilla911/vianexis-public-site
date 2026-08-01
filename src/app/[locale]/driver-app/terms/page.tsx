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
import { Section } from "@/components/site/Section";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/terms";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal } = getDriverAppLegal(locale);
  return buildDriverAppLegalMetadata(
    locale,
    PATH,
    legal.terms.title,
    legal.terms.metaDescription,
  );
}

export default async function DriverAppTermsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) redirect(`/en${PATH}`);
  const doc = legal.terms;

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full">
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
        <p className="text-lead mt-5 text-neutral-grey">{doc.intro}</p>
        <div className="mt-8">
          <DriverAppLegalToc label={doc.tocLabel} sections={doc.sections} />
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
