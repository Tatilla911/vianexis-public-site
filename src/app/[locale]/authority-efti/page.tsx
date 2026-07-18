import { CTASection } from "@/components/site/CTASection";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatusBadge } from "@/components/site/StatusBadge";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";

type PageProps = { params: Promise<{ locale: string }> };

export default async function AuthorityEftiPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  const visual = resolveVisualMarketing(locale);
  const efti = content.disclaimers.efti;

  return (
    <>
      <Hero
        title={content.nav.authorityEfti}
        subtitle={visual.authority.heroSubtitle}
        primaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.nav.requestAccess,
        }}
        secondaryCta={{
          href: localePath(locale, "/security-audit"),
          label: content.nav.security,
        }}
        brandVisual={{
          routeLabel: visual.brandVisuals.routeLabel,
          routeId: visual.brandVisuals.routeId,
          statusLabel: visual.brandVisuals.statusLabel,
        }}
      />

      <Section>
        <div className="mb-6 flex flex-wrap gap-2">
          <StatusBadge
            label={visual.authority.foundationBadge}
            tone="pilot"
          />
          <StatusBadge
            label={visual.authority.notCertifiedBadge}
            tone="warning"
          />
        </div>
        <DisclaimerBox title={efti.title}>
          <p className="font-medium text-white">{efti.body}</p>
          <p className="text-body mt-3 text-neutral-grey">
            {visual.authority.extraDisclaimer}
          </p>
        </DisclaimerBox>
      </Section>

      <Section
        variant="muted"
        title={visual.authority.foundationTitle}
        subtitle={visual.authority.foundationSubtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {content.authorityEfti.cards.map((card, index) => (
            <FeatureCard
              key={card.title}
              index={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      <CTASection
        title={visual.pilotCta.title}
        subtitle={visual.pilotCta.subtitle}
        primaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.nav.requestAccess,
        }}
        secondaryCta={{
          href: localePath(locale, "/contact"),
          label: content.nav.contact,
        }}
      />
    </>
  );
}
