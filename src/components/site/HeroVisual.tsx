import { NetworkGlobe } from "@/components/site/visuals/NetworkGlobe";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

/** Hero globe — network earth without route-card overlay. */
export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-xl", className)}>
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-cyan-glow/15 blur-3xl animate-pulse-glow" />
      <div className="relative">
        <NetworkGlobe className="mx-auto" />
      </div>
    </div>
  );
}
