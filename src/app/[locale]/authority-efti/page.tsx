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

  const cards =
    locale === "hu"
      ? [
          {
            title: "Hatósági ellenőrzési csomag",
            description:
              "Fuvarhoz tartozó dokumentumok és események csomagolt, scope-korlátozott megosztása.",
          },
          {
            title: "Scope / time limited access",
            description: "QR-alapú, korlátozott hozzáférés — nem nyilvános.",
          },
          {
            title: "Audit",
            description: "Hozzáférések és megosztások naplózása.",
          },
          {
            title: "eFTI-ready foundation",
            description: "Technikai alap jövőbeli integrációkhoz — nem minősítés.",
          },
        ]
      : [
          {
            title: "Authority inspection package",
            description:
              "Trip-linked documents and events in a scope-limited shared package.",
          },
          {
            title: "Scope / time limited access",
            description: "QR-based limited access — not public.",
          },
          {
            title: "Audit",
            description: "Logged access and sharing events.",
          },
          {
            title: "eFTI-ready foundation",
            description: "Technical base for future integration — not certification.",
          },
        ];

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
          {cards.map((card) => (
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
