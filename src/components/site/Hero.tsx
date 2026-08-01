import { BrandWordmark } from "@/components/site/BrandLogo";
import { Button } from "@/components/site/Button";
import { HeroVisual } from "@/components/site/HeroVisual";
import { ProductPreview } from "@/components/site/ProductPreview";
import { formatHeroTitleForWrap, isHeroTitleLong } from "@/lib/hero-title";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  stats?: { label: string; value: string }[];
  highlightWord?: string;
  brandVisual?: {
    routeLabel: string;
    routeId: string;
    statusLabel: string;
  };
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
  const wrapped = formatHeroTitleForWrap(title);
  if (!highlightWord || !wrapped.includes(highlightWord)) {
    return wrapped;
  }
  const parts = wrapped.split(highlightWord);
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
  brandVisual,
  preview,
  className,
}: HeroProps) {
  const showAside = Boolean(brandVisual || preview);
  const titleLong = isHeroTitleLong(title);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-1000 text-white hero-grid-bg",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-glow/20 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold-core/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative py-20 sm:py-24 lg:py-28">
        <div
          className={cn(
            "hero-split",
            showAside ? "hero-split--with-aside" : "hero-split--solo",
          )}
        >
          <div className="hero-copy">
            <div className="mb-3">
              <BrandWordmark size="lg" priority />
            </div>
            <div className="accent-beam mb-5" aria-hidden="true" />
              <h1
              className={cn(
                "hero-title",
                titleLong ? "hero-title--long" : "hero-title--default",
              )}
              data-hero-title-long={titleLong ? "true" : "false"}
            >
              {renderTitle(title, highlightWord)}
            </h1>
            <p className="text-lead mt-6 max-w-2xl text-pretty text-neutral-grey">
              {subtitle}
            </p>
            <div className="hero-cta mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

          {brandVisual ? (
            <div className="hero-visual" data-hero-visual="brand">
              <HeroVisual {...brandVisual} className="min-w-0" />
            </div>
          ) : preview ? (
            <div className="hero-visual" data-hero-visual="preview">
              <ProductPreview {...preview} className="min-w-0" />
            </div>
          ) : null}
        </div>

        {(stats?.length ?? 0) > 0 ? (
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats!.map((item) => (
              <div key={item.label} className="panel-glass rounded-md p-4">
                <p className="text-overline text-navy-600">{item.label}</p>
                <p className="text-meta mt-1 font-semibold text-gold-core">
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
