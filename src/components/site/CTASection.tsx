import { Button } from "@/components/site/Button";
import { Section } from "@/components/site/Section";
import { TruckIcon } from "@/components/site/visuals/TruckIcon";
import { WorldNetworkWatermark } from "@/components/site/visuals/WorldNetworkWatermark";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <Section
      variant="dark"
      className={cn("relative overflow-hidden !py-0", className)}
    >
      <div className="relative min-h-[22rem] overflow-hidden border-y border-navy-600 sm:min-h-[26rem]">
        <WorldNetworkWatermark variant="background" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:px-10 md:py-20">
          <div className="mb-4 flex items-center justify-center gap-2">
            <TruckIcon size={24} tone="gold" />
            <p className="text-overline text-gold-core">ViaNexis Network</p>
          </div>
          <h2 className="text-h1 text-gradient-gold text-balance">{title}</h2>
          {subtitle ? (
            <p className="text-subtitle mt-3 max-w-2xl text-pretty text-neutral-grey">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
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
      </div>
    </Section>
  );
}
