import { Button } from "@/components/site/Button";
import { ProductPreview } from "@/components/site/ProductPreview";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  stats?: { label: string; value: string }[];
  highlightWord?: string;
  preview?: {
    phoneTitle: string;
    phoneSubtitle: string;
    phoneRows: { label: string; value: string; status?: string }[];
    phoneCaption: string;
    browserTitle: string;
    browserSubtitle: string;
    browserColumns: string[];
    browserRows: string[][];
    browserCaption: string;
  };
  className?: string;
};

function renderTitle(title: string, highlightWord?: string) {
  if (!highlightWord || !title.includes(highlightWord)) {
    return title;
  }
  const parts = title.split(highlightWord);
  return (
    <>
      {parts[0]}
      <span className="text-gradient-gold">{highlightWord}</span>
      {parts.slice(1).join(highlightWord)}
    </>
  );
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  highlightWord,
  preview,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-1000 text-white hero-grid-bg",
        className,
      )}
    >
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <div
          className={cn(
            "grid gap-12",
            preview &&
              "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center",
          )}
        >
          <div className="max-w-2xl">
            <p className="text-overline mb-4 text-cyan-accent">
              ViaNexis
            </p>
            <h1 className="text-display-md text-balance text-white">
              {renderTitle(title, highlightWord)}
            </h1>
            <p className="text-subtitle mt-5 text-pretty text-neutral-grey">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="onDark" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          {preview ? (
            <ProductPreview {...preview} className="min-w-0" />
          ) : null}
        </div>

        {(stats?.length ?? 0) > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats!.map((item) => (
              <div
                key={item.label}
                className="rounded-md border border-navy-700 bg-navy-900 p-4"
              >
                <p className="text-overline text-navy-600">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-gold-core">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
