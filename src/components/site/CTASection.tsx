import { Button } from "@/components/site/Button";
import { Section } from "@/components/site/Section";
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
      className={cn("relative overflow-hidden hero-grid-bg", className)}
    >
      <div className="relative max-w-2xl">
        <p className="text-overline mb-3 text-gold-core">ViaNexis</p>
        <h2 className="text-h1 text-white">{title}</h2>
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
    </Section>
  );
}
