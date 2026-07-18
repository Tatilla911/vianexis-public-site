import Link from "next/link";
import { ConnectedWorkflowVisual } from "@/components/site/ConnectedWorkflowVisual";
import { CTASection } from "@/components/site/CTASection";
import { FeatureCard } from "@/components/site/FeatureCard";
import { FeatureModuleCard } from "@/components/site/FeatureModuleCard";
import { Hero } from "@/components/site/Hero";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ResponsibleUseSummary } from "@/components/site/ResponsibleUseSummary";
import { Section } from "@/components/site/Section";
import { StatusBadge } from "@/components/site/StatusBadge";
import { NetworkGlobe } from "@/components/site/visuals/NetworkGlobe";
import { NetworkMap } from "@/components/site/visuals/NetworkMap";
import { TruckIcon } from "@/components/site/visuals/TruckIcon";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";
import { siteConfig } from "@/lib/site-config";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = getContent(locale);
  const visual = resolveVisualMarketing(locale);

  return (
    <>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        highlightWord={locale === "hu" ? "Auditálható" : "Auditable"}
        primaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.hero.primaryCta,
        }}
        secondaryCta={{
          href: localePath(locale, "/features"),
          label: content.hero.secondaryCta,
        }}
        stats={content.hero.stats}
        brandVisual={{
          routeLabel: visual.brandVisuals.routeLabel,
          routeId: visual.brandVisuals.routeId,
          statusLabel: visual.brandVisuals.statusLabel,
        }}
      />

      <Section
        variant="dark"
        id="network"
        className="section-reveal"
        eyebrow={visual.brandVisuals.networkOverline}
        title={visual.brandVisuals.networkTitle}
        subtitle={visual.brandVisuals.networkSubtitle}
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative order-2 overflow-hidden rounded-lg border border-navy-600 lg:order-1">
            <NetworkMap variant="panel" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-gold-core/30 bg-navy-1000/80 px-3 py-1.5 backdrop-blur">
              <TruckIcon size={16} tone="gold" />
              <span className="text-overline text-gold-core">
                {visual.brandVisuals.routeId}
              </span>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <NetworkGlobe className="mx-auto w-full max-w-[360px] sm:max-w-[420px]" />
          </div>
        </div>
        <ConnectedWorkflowVisual
          events={visual.brandVisuals.workflowEvents}
          className="mt-10"
        />
      </Section>

      <Section
        id="problem"
        className="section-reveal"
        eyebrow="ViaNexis"
        title={content.home.problem.title}
        subtitle={content.home.problem.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.home.problem.cards.map((card, index) => (
            <FeatureCard
              key={card.title}
              index={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      <Section
        variant="dark"
        id="pillars"
        className="section-reveal"
        eyebrow="Solution"
        title={visual.pillars.title}
        subtitle={visual.pillars.subtitle}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {visual.pillars.items.map((item, index) => (
            <FeatureCard
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section
        variant="muted"
        id="process"
        className="section-reveal"
        title={visual.process.title}
        subtitle={visual.process.subtitle}
      >
        <ProcessTimeline steps={visual.process.steps} />
      </Section>

      <Section
        id="surfaces"
        className="section-reveal"
        title={visual.homeModules.title}
        subtitle={visual.homeModules.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visual.homeModules.items.map((item) => (
            <FeatureModuleCard
              key={item.title}
              title={item.title}
              description={item.description}
              href={localePath(locale, item.href)}
              detailsLabel={visual.homeModules.detailsLink}
              icon={item.icon}
            />
          ))}
        </div>
      </Section>

      <Section
        variant="muted"
        id="documents-flow"
        className="section-reveal"
        title={visual.documentsFlow.title}
        subtitle={visual.documentsFlow.subtitle}
      >
        <ProcessTimeline steps={visual.documentsFlow.steps} />
        <div className="mt-8 flex flex-wrap gap-2">
          {visual.documentsFlow.statuses.map((status) => (
            <StatusBadge key={status} label={status} tone="neutral" />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href={localePath(locale, "/documents-signatures")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {visual.documentsFlow.detailsLink} →
          </Link>
        </div>
      </Section>

      <Section
        variant="dark"
        id="offline"
        className="section-reveal"
        title={visual.offline.title}
        subtitle={visual.offline.subtitle}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {visual.offline.cards.map((card, index) => (
            <FeatureCard
              key={card.title}
              index={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href={localePath(locale, "/driver-app")}
            className="text-nav text-gold-core hover:underline"
          >
            {visual.offline.detailsLink} →
          </Link>
        </div>
      </Section>

      <Section
        id="security"
        className="section-reveal"
        title={content.home.security.title}
        subtitle={content.home.security.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {content.home.security.cards.map((card) => (
            <article key={card.title} className="panel-glass rounded-md p-6">
              <h3 className="text-card-title text-white">{card.title}</h3>
              <p className="text-body mt-2 text-neutral-grey">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href={localePath(locale, "/security-audit")}
            className="text-nav text-cyan-glow hover:underline"
          >
            {content.nav.security} →
          </Link>
        </div>
      </Section>

      <Section variant="muted" id="responsible-use" className="section-reveal">
        <ResponsibleUseSummary
          title={visual.responsibleUse.title}
          subtitle={visual.responsibleUse.subtitle}
          items={visual.responsibleUse.items}
          detailsHref={localePath(locale, "/disclaimers")}
          detailsLabel={visual.responsibleUse.detailsLink}
        />
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

      <Section
        variant="muted"
        id="contact"
        className="section-reveal"
        title={content.home.contact.title}
        subtitle={content.home.contact.subtitle}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-neutral-grey">
              {content.home.contact.body}
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-body-lg font-semibold text-cyan-glow hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <Link
              href={localePath(locale, "/contact")}
              className="text-nav mt-4 inline-flex text-gold-core hover:underline"
            >
              {content.home.contact.contactLink}
            </Link>
          </div>
          <div className="lg:col-span-3">
            <ContactLeadForm locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
