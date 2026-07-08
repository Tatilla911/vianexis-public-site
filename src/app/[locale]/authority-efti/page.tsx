import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

export default async function AuthorityEftiPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);
  const efti = content.disclaimers.efti;

  return (
    <>
      <Hero
        title={content.nav.authorityEfti}
        subtitle={efti.body}
        primaryCta={{
          href: localePath(locale, "/contact"),
          label: content.hero.primaryCta,
        }}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.authorityEfti.cards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <DisclaimerBox className="mt-6" title={efti.title}>
          <p>{efti.body}</p>
        </DisclaimerBox>
      </Section>
    </>
  );
}
