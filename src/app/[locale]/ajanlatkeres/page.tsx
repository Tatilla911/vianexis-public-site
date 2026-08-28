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
  if (locale !== "hu") return {};
  const copy = getQuoteUiCopy("hu");
  return {
    title: `${copy.pageTitle} | ViaNexis`,
    description: copy.introBody.slice(0, 160),
    alternates: {
      canonical: quotePathForLocale("hu"),
      languages: {
        hu: quotePathForLocale("hu"),
        en: quotePathForLocale("en"),
      },
    },
  };
}

/** HU preferred slug `/hu/ajanlatkeres`. */
export default async function AjanlatkeresPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  if (locale !== "hu") {
    redirect(quotePathForLocale("en"));
  }
  const content = getContent(locale);
  const copy = getQuoteUiCopy("hu");

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
