import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { Section } from "@/components/site/Section";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const content = getContent(locale);
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
        primaryCta={{
          href: localePath(locale, "/contact"),
          label: content.hero.primaryCta,
        }}
        secondaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.hero.secondaryCta,
        }}
        stats={content.hero.stats}
      />

      <Section>
        <PlatformStatusBanner content={content.platformStatus} />
      </Section>

      <Section
        id="problem"
        title={content.home.problem.title}
        subtitle={content.home.problem.subtitle}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.home.problem.cards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      <Section
        variant="muted"
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

      {palletModule && (
        <Section
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
      )}

      {messagingModule && (
        <Section
          variant="muted"
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
      )}

      <Section
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
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="mt-6">
          <DisclaimerBox title={content.home.security.notPromiseTitle}>
            <p className="text-white/80">
              {content.home.security.notPromiseBody}
            </p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section
        variant="muted"
        id="contact"
        title={content.home.contact.title}
        subtitle={content.home.contact.subtitle}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-text/70 leading-relaxed">
              {content.home.contact.body}
            </p>
            <DisclaimerBox className="mt-6">
              <p>{content.home.contact.consentNote}</p>
            </DisclaimerBox>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-lg font-semibold text-vianexis-blue hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <Link
              href={localePath(locale, "/contact")}
              className="mt-4 inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
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
