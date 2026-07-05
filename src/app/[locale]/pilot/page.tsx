import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PilotPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);

  return (
    <>
      <Hero
        title={content.nav.pilot}
        subtitle={content.home.contact.subtitle}
        primaryCta={{
          href: "#pilot-form",
          label: content.contactForm.submit,
        }}
      />
      <Section>
        <DisclaimerBox>
          <p>{content.home.contact.consentNote}</p>
        </DisclaimerBox>
      </Section>
      <Section variant="muted" title={content.nav.requestAccess}>
        <div className="mx-auto max-w-2xl">
          <ContactLeadForm id="pilot-form" locale={locale} />
        </div>
      </Section>
    </>
  );
}
