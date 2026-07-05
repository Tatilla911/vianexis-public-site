import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DisclaimersPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);

  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge label={content.legal.draftBadge} className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">
          {content.legal.disclaimersPage.title}
        </h1>
        <p className="mt-4 text-text/70 leading-relaxed">
          {content.legal.disclaimersPage.intro}
        </p>
        <div className="mt-8 grid gap-4">
          <DisclaimerBox title={content.disclaimers.adr.title}>
            <p>{content.disclaimers.adr.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={content.disclaimers.aiOcr.title}>
            <p>{content.disclaimers.aiOcr.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={content.disclaimers.efti.title}>
            <p>{content.disclaimers.efti.body}</p>
          </DisclaimerBox>
        </div>
      </div>
    </Section>
  );
}
