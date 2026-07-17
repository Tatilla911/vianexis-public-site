import Link from "next/link";
import { CTASection } from "@/components/site/CTASection";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Section } from "@/components/site/Section";
import { StatusBadge } from "@/components/site/StatusBadge";
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
  const messagingModule = content.platformModules.find(
    (m) => m.id === "messaging-notifications",
  );
  const palletModule = content.platformModules.find(
    (m) => m.id === "pallet-packaging",
  );

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
        preview={visual.preview}
      />

      <Section variant="muted">
        <PlatformStatusBanner content={content.platformStatus} />
      </Section>

      <Section
        id="problem"
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
        title={visual.process.title}
        subtitle={visual.process.subtitle}
      >
        <ProcessTimeline steps={visual.process.steps} />
      </Section>

      <Section
        id="surfaces"
        title={visual.surfaces.title}
        subtitle={visual.surfaces.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {visual.surfaces.items.map((item) => (
            <Link
              key={item.title}
              href={localePath(locale, item.href)}
              className="focus-ring panel-glass panel-glass-hover group block rounded-md p-6 motion-reduce:transform-none"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-grey">
                {item.description}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-gold-core">
                →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        variant="muted"
        id="documents-flow"
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
            className="text-sm font-semibold text-cyan-accent hover:underline"
          >
            {content.nav.documents} →
          </Link>
        </div>
      </Section>

      <Section
        id="modules"
        title={content.home.modules.title}
        subtitle={content.home.modules.subtitle}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {content.platformModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              labels={content.moduleLabels}
            />
          ))}
        </div>
      </Section>

      {palletModule ? (
        <Section
          variant="muted"
          id="pallet-packaging"
          title={content.home.pallet.title}
          subtitle={content.home.pallet.subtitle}
        >
          <ModuleCard
            module={palletModule}
            labels={content.moduleLabels}
            className="max-w-3xl"
          />
        </Section>
      ) : null}

      {messagingModule ? (
        <Section
          id="notifications"
          title={content.home.notifications.title}
          subtitle={content.home.notifications.subtitle}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <ModuleCard
              module={messagingModule}
              labels={content.moduleLabels}
            />
            <div className="space-y-4">
              {content.home.notifications.cards.map((card) => (
                <FeatureCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                />
              ))}
              <DisclaimerBox title={content.home.notifications.backendDepTitle}>
                <p>{content.home.notifications.backendDepBody}</p>
              </DisclaimerBox>
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        variant="dark"
        id="offline"
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
      </Section>

      <Section
        variant="muted"
        id="disclaimers"
        title={content.home.disclaimersSection.title}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DisclaimerBox title={content.disclaimers.adr.title}>
            <p>{content.disclaimers.adr.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={content.disclaimers.aiOcr.title}>
            <p>{content.disclaimers.aiOcr.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={content.disclaimers.efti.title}>
            <p>{content.disclaimers.efti.body}</p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section
        variant="dark"
        id="security"
        title={content.home.security.title}
        subtitle={content.home.security.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {content.home.security.cards.map((card) => (
            <article key={card.title} className="panel-glass rounded-md p-6">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-grey">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <DisclaimerBox title={content.home.security.notPromiseTitle}>
            <p>{content.home.security.notPromiseBody}</p>
          </DisclaimerBox>
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

      <Section
        variant="muted"
        id="contact"
        title={content.home.contact.title}
        subtitle={content.home.contact.subtitle}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-neutral-grey">
              {content.home.contact.body}
            </p>
            <DisclaimerBox className="mt-6">
              <p>{content.home.contact.consentNote}</p>
            </DisclaimerBox>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-lg font-semibold text-cyan-accent hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <Link
              href={localePath(locale, "/contact")}
              className="mt-4 inline-flex text-sm font-semibold text-gold-core hover:underline"
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
