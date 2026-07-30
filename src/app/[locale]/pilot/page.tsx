import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { CompanyApplicationForm } from "@/components/site/ApplicationForms";
import { Hero } from "@/components/site/Hero";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

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
        subtitle={content.applicationForms.company.subtitle}
        primaryCta={{
          href: "#company-apply",
          label: content.nav.requestAccess,
        }}
        secondaryCta={{
          href: "#pilot-form",
          label: content.nav.contact,
        }}
      />
      <Section>
        <DisclaimerBox title={content.moduleLabels.important}>
          <p>{content.home.contact.consentNote}</p>
          <p className="mt-3 text-body text-neutral-grey">
            {content.home.contact.body}{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-semibold text-cyan-glow hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="mt-3 text-body-sm text-neutral-grey">
            <Link
              href={localePath(locale, "/apply/company")}
              className="font-semibold text-cyan-glow hover:underline"
            >
              {content.applicationForms.company.title}
            </Link>
          </p>
        </DisclaimerBox>
      </Section>
      <Section variant="muted" id="company-apply" title={content.nav.requestAccess}>
        <div className="mx-auto max-w-2xl">
          <CompanyApplicationForm locale={locale} />
        </div>
      </Section>
      <Section title={content.nav.contact}>
        <div className="mx-auto max-w-2xl">
          <ContactLeadForm id="pilot-form" locale={locale} />
        </div>
      </Section>
    </>
  );
}
