import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { PartnerApplicationForm } from "@/components/site/ApplicationForms";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ApplyPartnerPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  return (
    <>
      <Hero
        title={content.applicationForms.partner.title}
        subtitle={content.applicationForms.partner.subtitle}
        primaryCta={{
          href: localePath(locale, "/contact"),
          label: content.nav.contact,
        }}
      />
      <Section>
        <DisclaimerBox>
          <p>{content.home.contact.consentNote}</p>
        </DisclaimerBox>
        <div className="mt-6">
          <PartnerApplicationForm locale={locale} />
        </div>
      </Section>
    </>
  );
}
