import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { QuoteQuestionnaireForm } from "@/components/site/QuoteQuestionnaireForm";
import { getContent, resolveLocale } from "@/lib/i18n";
import { getQuoteUiCopy } from "@/lib/quote-questionnaire";
import { quotePathForLocale } from "@/lib/quote-questionnaire/paths";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "en") return {};
  const copy = getQuoteUiCopy("en");
  return {
    title: `${copy.pageTitle} | ViaNexis`,
    description: copy.introBody.slice(0, 160),
    alternates: {
      canonical: quotePathForLocale("en"),
      languages: {
        hu: quotePathForLocale("hu"),
        en: quotePathForLocale("en"),
      },
    },
  };
}

/** EN preferred slug `/en/request-a-quote`. */
export default async function RequestAQuotePage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "en") {
    redirect(quotePathForLocale("hu"));
  }
  const content = getContent(locale);
  const copy = getQuoteUiCopy("en");

  return (
    <>
      <Hero
        title={copy.pageTitle}
        subtitle={copy.introTime}
        primaryCta={{
          href: "#quote-form",
          label: copy.continue,
        }}
        secondaryCta={{
          href: localePath(locale, "/contact"),
          label: content.nav.contact,
        }}
      />
      <Section id="quote-form" variant="muted">
        <QuoteQuestionnaireForm locale={locale} />
      </Section>
    </>
  );
}
