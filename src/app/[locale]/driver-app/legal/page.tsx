import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalMeta,
} from "@/components/site/DriverAppLegalChrome";
import { Section } from "@/components/site/Section";
import { getDriverAppLegal } from "@/lib/i18n/driver-app-legal";
import { buildDriverAppLegalMetadata } from "@/lib/i18n/driver-app-legal/metadata";
import { resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

const PATH = "/driver-app/legal";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { legal } = getDriverAppLegal(locale);
  return buildDriverAppLegalMetadata(
    locale,
    PATH,
    legal.hub.title,
    legal.hub.metaDescription,
  );
}

export default async function DriverAppLegalHubPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal, contentLocale, isOfficialLocale } = getDriverAppLegal(locale);
  if (!isOfficialLocale) {
    redirect(`/en${PATH}`);
  }

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full">
        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={PATH}
          hint={legal.chrome.languageSwitchHint}
        />
        <h1 className="text-page-title">{legal.hub.title}</h1>
        <DriverAppLegalMeta
          versionLabel={legal.hub.versionLabel}
          effectiveLabel={legal.hub.effectiveLabel}
          lastUpdatedLabel={legal.hub.lastUpdatedLabel}
        />
        <p className="text-lead mt-5 text-neutral-grey">{legal.hub.intro}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {legal.hub.cards.map((card) => (
            <li key={card.hrefSuffix}>
              <Link
                href={localePath(contentLocale, `/driver-app${card.hrefSuffix}`)}
                className="block rounded-lg border border-navy-700 bg-navy-900/50 p-5 transition-colors hover:border-cyan-glow"
              >
                <h2 className="text-card-title text-white">{card.title}</h2>
                <p className="text-body mt-2 text-neutral-grey">{card.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <DriverAppLegalContacts
          title={legal.hub.contactsTitle}
          contacts={legal.hub.contacts}
        />
      </div>
    </Section>
  );
}
