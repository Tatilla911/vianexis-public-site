import Link from "next/link";
import { BrowserMockup } from "@/components/site/BrowserMockup";
import { CTASection } from "@/components/site/CTASection";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { PhoneMockup } from "@/components/site/PhoneMockup";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Section } from "@/components/site/Section";
import { StatusBadge, type StatusTone } from "@/components/site/StatusBadge";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";

type ModuleSubpageProps = {
  locale: Locale;
  moduleId: string;
  extraDisclaimer?: { title: string; body: string };
};

export function ModuleSubpage({
  locale,
  moduleId,
  extraDisclaimer,
}: ModuleSubpageProps) {
  const content = getContent(locale);
  const visual = resolveVisualMarketing(locale);
  const platformModule = content.platformModules.find((m) => m.id === moduleId);

  if (!platformModule) return null;

  const capabilities =
    visual.moduleCapabilities[moduleId] ??
    visual.moduleCapabilities["audit-support"] ??
    [];

  const statusLabel = (status: "available" | "pilot" | "development") =>
    visual.statusLabels[status];

  const showPhone = moduleId === "driver-app";
  const showBrowser =
    moduleId === "company-admin" || moduleId === "audit-support";
  const showDocFlow = moduleId === "cmr-documents";

  return (
    <>
      <Hero
        title={platformModule.title}
        subtitle={platformModule.goal}
        primaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.nav.requestAccess,
        }}
        secondaryCta={{
          href: localePath(locale, "/features"),
          label: content.hero.secondaryCta,
        }}
      />

      <Section
        eyebrow={visual.productPage.statusesTitle}
        title={visual.productPage.highlightsTitle}
        subtitle={visual.productPage.capabilitiesTitle}
      >
        <div className="mb-6 flex flex-wrap gap-2">
          <StatusBadge label={visual.statusLabels.available} tone="available" />
          <StatusBadge label={visual.statusLabels.pilot} tone="pilot" />
          <StatusBadge
            label={visual.statusLabels.development}
            tone="development"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="panel-glass rounded-md p-5">
              <div className="mb-3">
                <StatusBadge
                  label={statusLabel(item.status)}
                  tone={item.status as StatusTone}
                />
              </div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-grey">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {(showPhone || showBrowser) && (
        <Section variant="muted" title={platformModule.title}>
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {showPhone ? (
              <PhoneMockup
                title={visual.preview.phoneTitle}
                subtitle={visual.preview.phoneSubtitle}
                rows={visual.preview.phoneRows}
                caption={visual.preview.phoneCaption}
              />
            ) : null}
            {showBrowser ? (
              <BrowserMockup
                title={visual.preview.browserTitle}
                subtitle={visual.preview.browserSubtitle}
                columns={visual.preview.browserColumns}
                rows={visual.preview.browserRows}
                caption={visual.preview.browserCaption}
              />
            ) : null}
            <div className="space-y-4">
              <ModuleCard
                module={platformModule}
                labels={content.moduleLabels}
              />
              <Link
                href={localePath(locale, "/security-audit")}
                className="inline-flex text-sm font-semibold text-cyan-accent hover:underline"
              >
                {content.nav.security} →
              </Link>
            </div>
          </div>
        </Section>
      )}

      {showDocFlow ? (
        <Section
          variant="muted"
          title={visual.documentsFlow.title}
          subtitle={visual.documentsFlow.subtitle}
        >
          <ProcessTimeline steps={visual.documentsFlow.steps} />
          <div className="mt-8 flex flex-wrap gap-2">
            {visual.documentsFlow.statuses.map((status) => (
              <StatusBadge key={status} label={status} />
            ))}
          </div>
        </Section>
      ) : null}

      {!showPhone && !showBrowser ? (
        <Section>
          <ModuleCard module={platformModule} labels={content.moduleLabels} />
        </Section>
      ) : null}

      {moduleId === "audit-support" ? (
        <Section
          variant="dark"
          title={content.home.security.title}
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
              <p>{content.home.security.notPromiseBody}</p>
            </DisclaimerBox>
          </div>
        </Section>
      ) : null}

      {extraDisclaimer ? (
        <Section variant="muted">
          <DisclaimerBox title={extraDisclaimer.title}>
            <p>{extraDisclaimer.body}</p>
          </DisclaimerBox>
        </Section>
      ) : null}

      {platformModule.disclaimer ? (
        <Section variant="muted">
          <DisclaimerBox title={content.moduleLabels.important}>
            <p>{platformModule.disclaimer}</p>
          </DisclaimerBox>
        </Section>
      ) : null}

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
