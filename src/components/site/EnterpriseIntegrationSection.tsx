import Link from "next/link";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Section } from "@/components/site/Section";
import { resolveEnterpriseIntegration } from "@/lib/i18n/enterprise-integration";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { quotePathForLocale } from "@/lib/quote-questionnaire/paths";

type EnterpriseIntegrationSectionProps = {
  locale: Locale;
};

export function EnterpriseIntegrationSection({
  locale,
}: EnterpriseIntegrationSectionProps) {
  const copy = resolveEnterpriseIntegration(locale);

  return (
    <Section
      variant="dark"
      id="integrations"
      className="section-reveal"
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.body}
    >
      <p className="text-body mx-auto max-w-3xl text-center text-neutral-grey">
        {copy.coexistence}
      </p>
      <p className="text-meta mx-auto mt-3 max-w-3xl text-center text-text-tertiary">
        {copy.capabilityNote}
      </p>

      <div
        className="mt-10 grid gap-4 lg:grid-cols-3"
        role="group"
        aria-label={copy.flowLayer}
      >
        <article className="panel-glass rounded-md p-5 text-center">
          <p className="text-overline text-gold-core">{copy.flowExternal}</p>
          <p className="text-meta mt-2 text-neutral-grey">
            {copy.flowExternalDetail}
          </p>
        </article>
        <article className="panel-glass rounded-md border border-cyan-accent/30 p-5 text-center">
          <p className="text-overline text-cyan-glow">{copy.flowLayer}</p>
          <p className="text-meta mt-2 text-neutral-grey">
            {copy.flowLayerDetail}
          </p>
        </article>
        <article className="panel-glass rounded-md p-5 text-center">
          <p className="text-overline text-gold-core">{copy.flowOperations}</p>
          <p className="text-meta mt-2 text-neutral-grey">
            {copy.flowOperationsDetail}
          </p>
        </article>
      </div>

      <h3 className="text-section-title mt-12 text-center">{copy.directionsTitle}</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {copy.directions.map((item, index) => (
          <FeatureCard
            key={item.title}
            index={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <h3 className="text-section-title mt-12 text-center">
        {copy.capabilitiesTitle}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.capabilities.map((item, index) => (
          <FeatureCard
            key={item.title}
            index={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <h3 className="text-section-title mt-12 text-center">{copy.examplesTitle}</h3>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {copy.examples.map((item, index) => (
          <FeatureCard
            key={item.title}
            index={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="panel-glass mt-10 rounded-md p-6">
        <p className="text-card-title">{copy.systemsLabel}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={copy.systemsLabel}>
          {copy.systems.map((system) => (
            <li
              key={system}
              className="rounded-md border border-navy-600 bg-navy-950/60 px-3 py-1.5 text-meta text-neutral-grey"
            >
              {system}
            </li>
          ))}
        </ul>
        <p className="text-body mt-6 text-neutral-grey">{copy.architectureNote}</p>
        <p className="text-body mt-3 text-neutral-grey">{copy.partnerApiNote}</p>
        <p className="text-body mt-3 text-neutral-grey">{copy.sandboxNote}</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={localePath(locale, "/contact")}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-gold-core px-5 py-2.5 text-button text-brand-ink-on-gold shadow-sm transition-colors hover:bg-gold-light focus-ring"
        >
          {copy.ctaPrimary}
        </Link>
        <Link
          href={quotePathForLocale(locale)}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-accent/40 bg-transparent px-5 py-2.5 text-button text-cyan-glow transition-colors hover:border-cyan-glow focus-ring"
        >
          {copy.ctaSecondary}
        </Link>
      </div>
    </Section>
  );
}
