import { BrandWordmark } from "@/components/site/BrandLogo";
import { Section } from "@/components/site/Section";
import { resolveBrandStory } from "@/lib/i18n/brand-story";
import type { Locale } from "@/lib/i18n/types";

type BrandStorySectionProps = {
  locale: Locale;
};

export function BrandStorySection({ locale }: BrandStorySectionProps) {
  const story = resolveBrandStory(locale);
  const origins = [
    { value: story.originYears, label: story.originYearsLabel },
    { value: story.originCompanies, label: story.originCompaniesLabel },
    { value: story.originBusinesses, label: story.originBusinessesLabel },
    {
      value: story.originConversations,
      label: story.originConversationsLabel,
    },
  ];

  return (
    <Section
      id="origin"
      variant="dark"
      className="section-reveal"
      eyebrow={story.overline}
      title={story.tagline}
    >
      <div className="mb-8">
        <BrandWordmark size="sm" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {origins.map((item) => (
          <div
            key={item.label}
            className="panel-glass rounded-md px-4 py-5"
          >
            <p className="font-semibold text-gold-core text-[clamp(1.35rem,2.4vw,1.85rem)] leading-tight text-pretty">
              {item.value}
            </p>
            <p className="text-overline mt-2 text-neutral-grey">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="text-lead mt-10 max-w-3xl whitespace-pre-line text-pretty text-neutral-grey">
        {story.message}
      </p>
    </Section>
  );
}
