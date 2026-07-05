import { LegalDocumentSection } from "@/components/site/LegalDocumentSection";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal } = getContent(locale);

  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge label={legal.versionBadge} className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">{legal.terms.title}</h1>
        <p className="mt-4 leading-relaxed text-text/70">{legal.terms.intro}</p>
        <div className="mt-8 space-y-6 text-sm">
          {legal.terms.sections.map((section) => (
            <LegalDocumentSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </Section>
  );
}
