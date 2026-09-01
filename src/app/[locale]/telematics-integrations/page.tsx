import Link from "next/link";
import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import {
  resolveTelematicsIntegrationsContent,
  TELEMATICS_PROVIDER_EXAMPLES,
} from "@/lib/i18n/telematics-integrations";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const copy = resolveTelematicsIntegrationsContent(locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
}

function statusLabel(
  copy: ReturnType<typeof resolveTelematicsIntegrationsContent>,
  status: (typeof TELEMATICS_PROVIDER_EXAMPLES)[number]["status"],
): string {
  if (status === "planned") return copy.statusPlanned;
  if (status === "discovery_required") return copy.statusDiscovery;
  return copy.statusSupported;
}

export default async function TelematicsIntegrationsPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const site = getContent(locale);
  const copy = resolveTelematicsIntegrationsContent(locale);

  return (
    <>
      <Hero
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        primaryCta={{
          href: localePath(locale, "/company-assessment"),
          label: copy.ctaAssessment,
        }}
        secondaryCta={{
          href: localePath(locale, "/contact"),
          label: copy.ctaContact,
        }}
      />

      <Section title={copy.whyTitle} subtitle={copy.whyBody}>
        <></>
      </Section>

      <Section title={copy.usesTitle}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-section-title">{copy.usesCurrentTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-neutral-grey">
              {copy.usesCurrent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-section-title">{copy.usesPlannedTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-neutral-grey">
              {copy.usesPlanned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={copy.existingTitle} subtitle={copy.existingBody}>
        <></>
      </Section>
      <Section title={copy.noProviderTitle} subtitle={copy.noProviderBody}>
        <></>
      </Section>

      <Section title={copy.providersTitle} subtitle={copy.providersIntro}>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {TELEMATICS_PROVIDER_EXAMPLES.map((provider) => (
            <li
              key={provider.name}
              className="rounded-md border border-navy-700 bg-navy-900/40 px-4 py-3 text-body text-brand-ink"
            >
              <span className="font-semibold">{provider.name}</span>
              <span className="mt-1 block text-body-sm text-neutral-grey">
                {statusLabel(copy, provider.status)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-body-sm text-neutral-grey">{copy.providersNote}</p>
      </Section>

      <Section title={copy.pricingTitle}>
        <p className="text-body font-semibold text-brand-ink">{copy.pricingBase}</p>
        <p className="mt-4 text-body text-neutral-grey">{copy.pricingBandsIntro}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-body text-neutral-grey">
          {copy.pricingBands.map((band) => (
            <li key={band}>{band}</li>
          ))}
        </ul>
        <p className="mt-4 text-body text-neutral-grey">{copy.pricingProviderNote}</p>
        <p className="mt-2 text-body text-neutral-grey">{copy.pricingNewProvider}</p>
        <DisclaimerBox title={site.moduleLabels.important} className="mt-6">
          <p>{copy.pricingClarification}</p>
        </DisclaimerBox>
      </Section>

      <Section title={copy.securityTitle} subtitle={copy.securityBody}>
        <></>
      </Section>

      <Section title={copy.partnerTitle} subtitle={copy.partnerBody}>
        <Link
          href={localePath(locale, "/contact")}
          className="text-nav inline-flex font-semibold text-cyan-glow hover:underline"
        >
          {copy.partnerCta}
        </Link>
      </Section>

      <Section variant="dark" title={copy.ctaTitle}>
        <div className="flex flex-wrap gap-4">
          <Link
            href={localePath(locale, "/company-assessment")}
            className="rounded-md bg-gold-core px-5 py-3 text-nav font-semibold text-navy-950"
          >
            {copy.ctaAssessment}
          </Link>
          <Link
            href={localePath(locale, "/contact")}
            className="rounded-md border border-cyan-glow px-5 py-3 text-nav font-semibold text-cyan-glow"
          >
            {copy.ctaContact}
          </Link>
        </div>
      </Section>
    </>
  );
}
