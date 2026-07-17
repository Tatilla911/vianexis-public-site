import Image from "next/image";
import { cn } from "@/lib/utils";

type NetworkMapProps = {
  className?: string;
  variant?: "panel" | "background";
};

/**
 * Digital freight network map — official ViaNexis continents + route arcs asset.
 */
export function NetworkMap({
  className,
  variant = "panel",
}: NetworkMapProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-1000",
        variant === "panel" && "aspect-[2/1] w-full rounded-lg",
        variant === "background" && "absolute inset-0",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/brand/world-network-map.png"
        alt=""
        fill
        sizes={
          variant === "background"
            ? "100vw"
            : "(max-width: 1024px) 100vw, 640px"
        }
        className={cn(
          "object-cover object-[center_36%]",
          variant === "background" && "scale-105 opacity-70",
        )}
        priority={variant === "panel"}
      />
      {variant === "background" ? (
        <div className="absolute inset-0 bg-navy-1000/35" />
      ) : null}
    </div>
  );
}
