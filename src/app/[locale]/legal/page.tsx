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
  return buildLegalPageMetadata(locale, "/legal", legal.legalNotice.title);
}

export default async function LegalPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  const { legal } = content;

  return (
    <Section className="pt-12">
      <div className="prose-legal mx-auto w-full">
        <LegalStatusBadge label={legal.versionBadge} className="mb-6" />
        <h1 className="text-page-title text-white">{legal.legalNotice.title}</h1>
        <p className="text-lead mt-5 text-neutral-grey">
          {legal.legalNotice.intro}
        </p>

        <div className="mt-10 space-y-8">
          {legal.legalNotice.sections.map((section) => (
            <LegalDocumentSection key={section.title} section={section} />
          ))}
          <section>
            <h2 className="text-card-title text-white">
              {legal.legalNotice.relatedDocs}
            </h2>
            <ul className="text-body mt-3 list-inside list-disc space-y-2 text-neutral-grey">
              <li>
                <Link
                  href={localePath(locale, "/privacy")}
                  className="text-cyan-glow hover:underline"
                >
                  {content.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/terms")}
                  className="text-cyan-glow hover:underline"
                >
                  {content.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={localePath(locale, "/disclaimers")}
                  className="text-cyan-glow hover:underline"
                >
                  {content.footer.disclaimers}
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Section>
  );
}
