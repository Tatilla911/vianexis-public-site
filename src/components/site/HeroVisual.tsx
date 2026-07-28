import { NetworkGlobe } from "@/components/site/visuals/NetworkGlobe";
import { TruckIcon } from "@/components/site/visuals/TruckIcon";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  routeLabel: string;
  routeId: string;
  statusLabel: string;
  className?: string;
};

/** Figma hero composition: holographic globe + active truck route card */
export function HeroVisual({
  routeLabel,
  routeId,
  statusLabel,
  className,
}: HeroVisualProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-xl", className)}>
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-cyan-glow/15 blur-3xl animate-pulse-glow" />
      <div className="relative">
        <NetworkGlobe className="mx-auto" />

        <div className="absolute bottom-2 left-0 right-0 mx-auto w-[min(100%,280px)] panel-glass rounded-lg border border-cyan-glow/30 p-3 shadow-[0_0_32px_rgb(0_191_255_/_0.2)] sm:bottom-3 sm:left-auto sm:right-2 sm:mx-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-glow/15">
                <TruckIcon size={20} tone="cyan" />
              </span>
              <div>
                <p className="text-overline text-cyan-glow">{routeLabel}</p>
                <p className="text-code mt-0.5 font-semibold text-gold-core">
                  {routeId}
                </p>
              </div>
            </div>
            <span className="text-overline rounded-full border border-success/40 bg-success/15 px-2 py-0.5 text-success">
              {statusLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
