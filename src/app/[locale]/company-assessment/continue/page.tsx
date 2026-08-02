import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { CompanyAssessmentContinueWizard } from "@/components/site/CompanyAssessmentContinueWizard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { getCompanyAssessmentLabels } from "@/lib/i18n/company-assessment-labels";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string }>;
};

export default async function CompanyAssessmentContinuePage({
  params,
  searchParams,
}: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  const labels = getCompanyAssessmentLabels(locale);
  const token = (await searchParams).token?.trim() ?? "";

  return (
    <>
      <Hero
        title={labels.title}
        subtitle={labels.subtitle}
        primaryCta={{
          href: localePath(locale, "/contact"),
          label: content.nav.contact,
        }}
      />
      <Section>
        <DisclaimerBox title={content.moduleLabels.important}>
          <p>{content.home.contact.consentNote}</p>
        </DisclaimerBox>
        <div className="mt-6">
          {token ? (
            <CompanyAssessmentContinueWizard locale={locale} token={token} />
          ) : (
            <p className="text-danger">{labels.invalidLink}</p>
          )}
        </div>
      </Section>
    </>
  );
}
