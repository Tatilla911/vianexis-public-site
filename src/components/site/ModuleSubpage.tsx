import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { Section } from "@/components/site/Section";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

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
  const platformModule = content.platformModules.find((m) => m.id === moduleId);

  if (!platformModule) return null;

  return (
    <>
      <Hero
        title={platformModule.title}
        subtitle={platformModule.goal}
        primaryCta={{
          href: localePath(locale, "/contact"),
          label: content.hero.primaryCta,
        }}
        secondaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.hero.secondaryCta,
        }}
      />
      <Section>
        <ModuleCard module={platformModule} labels={content.moduleLabels} />
      </Section>
      {extraDisclaimer && (
        <Section variant="muted">
          <DisclaimerBox title={extraDisclaimer.title}>
            <p>{extraDisclaimer.body}</p>
          </DisclaimerBox>
        </Section>
      )}
    </>
  );
}
