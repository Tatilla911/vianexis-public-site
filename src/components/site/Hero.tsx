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
        "relative overflow-hidden bg-navy-950 text-white hero-grid-bg",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-core/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative py-20 sm:py-24 lg:py-28">
        <div
          className={cn(
            "grid gap-12",
            preview &&
              "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center",
          )}
        >
          <div className="max-w-2xl">
            <p className="text-overline mb-3 text-cyan-accent">ViaNexis</p>
            <div className="accent-beam mb-5" aria-hidden="true" />
            <h1 className="text-display-lg text-balance text-white">
              {renderTitle(title, highlightWord)}
            </h1>
            <p className="text-subtitle mt-6 max-w-xl text-pretty text-neutral-grey">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats!.map((item) => (
              <div
                key={item.label}
                className="panel-glass rounded-md p-4"
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
