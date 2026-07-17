import { Button } from "@/components/site/Button";
import { Section } from "@/components/site/Section";
import { NetworkMap } from "@/components/site/visuals/NetworkMap";
import { TruckIcon } from "@/components/site/visuals/TruckIcon";
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
      <div className="relative overflow-hidden rounded-lg border border-navy-600">
        <NetworkMap variant="background" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-1000 via-navy-1000/90 to-navy-1000/55" />
        <div className="relative px-6 py-16 sm:px-10 md:py-20 lg:px-12">
          <div className="mb-4 flex items-center gap-2">
            <TruckIcon size={24} tone="gold" />
            <p className="text-overline text-gold-core">ViaNexis Network</p>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-h1 text-gradient-gold">{title}</h2>
            {subtitle ? (
              <p className="text-subtitle mt-3 text-neutral-grey">{subtitle}</p>
            ) : null}
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
        </div>
      </div>
    </Section>
  );
}
