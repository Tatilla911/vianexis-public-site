import Link from "next/link";
import type { Metadata } from "next";
import { LegalDocumentSection } from "@/components/site/LegalDocumentSection";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { buildLegalPageMetadata } from "@/lib/i18n/metadata";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal } = getContent(locale);
  return buildLegalPageMetadata(locale, "/privacy", legal.privacy.title);
}

export default async function PrivacyPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  const { legal, lastUpdatedLabel } = content;
  const privacy = legal.privacy;

  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge label={legal.versionBadge} className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">{privacy.title}</h1>
        <p className="mt-4 text-sm text-text/50">
          {lastUpdatedLabel} {privacy.lastUpdated}
        </p>
        <p className="mt-4 leading-relaxed text-text/70">{privacy.intro}</p>

        <div className="mt-8 space-y-6 text-sm">
          <LegalDocumentSection section={privacy.controller} />
          <LegalDocumentSection section={privacy.scope} />
          <LegalDocumentSection section={privacy.dataCategories} />
          <LegalDocumentSection section={privacy.purposes} />
          <LegalDocumentSection section={privacy.sharing} />
          <LegalDocumentSection section={privacy.rights} />
          <LegalDocumentSection section={privacy.notifications} />
          <LegalDocumentSection section={privacy.location} />
          <LegalDocumentSection section={privacy.importantNotices} />
          <LegalDocumentSection section={privacy.dataContact} />
          <section>
            <h2 className="text-lg font-semibold text-navy">Play Console</h2>
            <p className="mt-2 leading-relaxed text-text/70">{privacy.playUrl}</p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href={localePath(locale, "/legal")}
            className="text-vianexis-blue hover:underline"
          >
            {legal.legalNotice.title}
          </Link>
          <Link
            href={localePath(locale, "/disclaimers")}
            className="text-vianexis-blue hover:underline"
          >
            {legal.disclaimersPage.title}
          </Link>
        </div>
      </div>
    </Section>
  );
}
