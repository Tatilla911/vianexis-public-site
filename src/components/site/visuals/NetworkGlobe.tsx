"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NetworkGlobeProps = {
  className?: string;
  compact?: boolean;
};

/**
 * Hero / network globe — official ViaNexis holographic Earth asset.
 */
export function NetworkGlobe({ className, compact = false }: NetworkGlobeProps) {
  const [viewportCompact, setViewportCompact] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const compactQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncCompact = () => setViewportCompact(compactQuery.matches);
    const syncMotion = () => setReducedMotion(motionQuery.matches);

    syncCompact();
    syncMotion();

    compactQuery.addEventListener("change", syncCompact);
    motionQuery.addEventListener("change", syncMotion);
    return () => {
      compactQuery.removeEventListener("change", syncCompact);
      motionQuery.removeEventListener("change", syncMotion);
    };
  }, []);

  const isCompact = compact || viewportCompact;
  const animated = !reducedMotion;

  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        isCompact ? "max-w-[320px]" : "max-w-[520px]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-[8%] rounded-full bg-cyan-glow/20 blur-3xl",
          animated && "animate-pulse-glow",
        )}
      />
      <div className="pointer-events-none absolute inset-[28%] rounded-full bg-gold-core/10 blur-2xl" />

      <div className="relative aspect-[1024/682] w-full">
        <Image
          src="/brand/network-globe.png"
          alt=""
          fill
          sizes={
            isCompact
              ? "(max-width: 768px) 320px, 360px"
              : "(max-width: 1024px) 420px, 520px"
          }
          className={cn(
            "object-contain drop-shadow-[0_0_48px_rgb(0_191_255_/_0.35)]",
            animated && "animate-globe-drift",
          )}
          priority
        />
      </div>
    </div>
  );
}
