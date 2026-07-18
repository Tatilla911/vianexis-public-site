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
      <div className="prose-legal mx-auto w-full">
        <LegalStatusBadge label={legal.versionBadge} className="mb-6" />
        <h1 className="text-page-title text-white">{privacy.title}</h1>
        <p className="text-meta mt-4 text-text-tertiary">
          {lastUpdatedLabel} {privacy.lastUpdated}
        </p>
        <p className="text-lead mt-5 text-neutral-grey">{privacy.intro}</p>

        <div className="mt-10 space-y-8">
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
            <h2 className="text-card-title text-white">Play Console</h2>
            <p className="text-body mt-3 text-neutral-grey">{privacy.playUrl}</p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={localePath(locale, "/legal")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {legal.legalNotice.title}
          </Link>
          <Link
            href={localePath(locale, "/disclaimers")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {legal.disclaimersPage.title}
          </Link>
        </div>
      </div>
    </Section>
  );
}
