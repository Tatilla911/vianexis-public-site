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
    <div
      className={cn(
        "relative mx-auto w-full max-w-full min-w-0 sm:max-w-lg xl:max-w-xl",
        className,
      )}
    >
      {/* Glow stays inside the visual column — do not bleed into hero copy. */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-cyan-glow/15 blur-3xl animate-pulse-glow" />
      <div className="relative min-w-0">
        <NetworkGlobe className="mx-auto max-w-full" />

        <div className="absolute bottom-2 start-0 end-0 mx-auto w-[min(100%,280px)] panel-glass rounded-lg border border-cyan-glow/30 p-3 shadow-[0_0_32px_rgb(0_191_255_/_0.2)] sm:bottom-3 sm:start-auto sm:end-2 sm:mx-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cyan-glow/15">
                <TruckIcon size={20} tone="cyan" />
              </span>
              <div className="min-w-0">
                <p className="text-overline text-cyan-glow">{routeLabel}</p>
                <p className="text-code mt-0.5 truncate font-semibold text-gold-core">
                  {routeId}
                </p>
              </div>
            </div>
            <span className="text-overline shrink-0 rounded-full border border-success/40 bg-success/15 px-2 py-0.5 text-success">
              {statusLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
