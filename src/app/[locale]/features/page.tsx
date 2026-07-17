import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FeaturesPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);

  return (
    <>
      <Hero
        title={content.home.modules.title}
        subtitle={content.home.modules.subtitle}
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
      <Section variant="muted">
        <PlatformStatusBanner content={content.platformStatus} />
      </Section>
      <Section title={content.home.modules.title}>
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
      <Section variant="dark" title={content.home.disclaimersSection.title}>
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
    </>
  );
}
