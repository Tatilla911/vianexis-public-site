import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { buildLegalPageMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal } = getContent(locale);
  return buildLegalPageMetadata(locale, "/disclaimers", legal.disclaimersPage.title);
}

export default async function DisclaimersPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const { legal } = getContent(locale);

  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge label={legal.versionBadge} className="mb-6" />
        <h1 className="text-3xl font-bold text-white">
          {legal.disclaimersPage.title}
        </h1>
        <p className="mt-4 leading-relaxed text-neutral-grey">
          {legal.disclaimersPage.intro}
        </p>
        <div className="mt-8 grid gap-4">
          {legal.disclaimersPage.items.map((item) => (
            <DisclaimerBox key={item.id} title={item.title}>
              <p>{item.body}</p>
            </DisclaimerBox>
          ))}
        </div>
      </div>
    </Section>
  );
}
