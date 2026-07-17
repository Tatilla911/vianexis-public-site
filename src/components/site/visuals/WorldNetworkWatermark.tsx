import Image from "next/image";
import { cn } from "@/lib/utils";

type WorldNetworkWatermarkProps = {
  className?: string;
  /** background = full-bleed CTA/footer; panel = contained */
  variant?: "background" | "panel";
};

/**
 * Official world-network map (continents + route arcs) as watermark / panel.
 */
export function WorldNetworkWatermark({
  className,
  variant = "background",
}: WorldNetworkWatermarkProps) {
  return (
    <div
      className={cn(
        "pointer-events-none overflow-hidden",
        variant === "background" && "absolute inset-0",
        variant === "panel" && "relative aspect-[2/1] w-full rounded-lg",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/brand/world-network-map.png"
        alt=""
        fill
        sizes="100vw"
        className={cn(
          "object-cover object-[center_38%]",
          variant === "background" && "scale-110 opacity-80",
          variant === "panel" && "opacity-95",
        )}
        priority={variant === "panel"}
      />
      {variant === "background" ? (
        <div className="absolute inset-0 bg-gradient-to-t from-navy-1000 via-navy-1000/45 to-navy-1000/70" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-navy-1000/50 via-transparent to-navy-1000/20" />
      )}
    </div>
  );
}
