"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NetworkGlobeProps = {
  className?: string;
  compact?: boolean;
};

type Hub = {
  x: number;
  y: number;
  tone: "gold" | "cyan";
  r: number;
};

/** Europe-weighted hubs plus two long-haul anchors for the wider network feel. */
const HUBS: Hub[] = [
  { x: 220, y: 220, tone: "gold", r: 6.5 }, // home hub (Budapest-ish)
  { x: 191, y: 150, tone: "cyan", r: 4 }, // Vienna-ish
  { x: 168, y: 112, tone: "cyan", r: 4 }, // Berlin-ish
  { x: 236, y: 100, tone: "cyan", r: 4 }, // Warsaw-ish
  { x: 273, y: 168, tone: "gold", r: 4 }, // Bucharest-ish
  { x: 146, y: 176, tone: "cyan", r: 3.5 }, // Prague-ish
  { x: 197, y: 268, tone: "gold", r: 3.5 }, // Milan-ish
  { x: 92, y: 214, tone: "cyan", r: 3.5 }, // Western anchor
  { x: 349, y: 232, tone: "gold", r: 3.5 }, // Eastern anchor
];

const COMPACT_HUB_COUNT = 5;

const ARCS = [
  "M220 220 C205 178, 195 160, 191 150",
  "M220 220 C200 150, 178 125, 168 112",
  "M220 220 C226 168, 232 130, 236 100",
  "M220 220 C245 195, 262 180, 273 168",
  "M92 214 C130 205, 175 212, 220 220",
  "M220 220 C270 224, 315 228, 349 232",
];

const COMPACT_ARC_COUNT = 2;

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
  const hubs = isCompact ? HUBS.slice(0, COMPACT_HUB_COUNT) : HUBS;
  const arcs = isCompact ? ARCS.slice(0, COMPACT_ARC_COUNT) : ARCS;

  return (
    <div
      className={cn(
        "relative aspect-square w-full",
        isCompact ? "max-w-[300px]" : "max-w-[460px]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-[10%] rounded-full bg-cyan-glow/10 blur-2xl",
          animated && "animate-pulse-glow",
        )}
      />
      <div className="absolute inset-[22%] rounded-full bg-gold-core/10 blur-xl" />

      <svg
        viewBox="0 0 440 440"
        className="relative h-full w-full drop-shadow-[0_0_44px_rgb(0_191_255_/_0.32)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="ngCore" cx="46%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.38" />
            <stop offset="52%" stopColor="#0047AB" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="0.94" />
          </radialGradient>
          <linearGradient id="ngArcGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="ngArcCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Sphere base + depth rings */}
        <circle cx="220" cy="220" r="168" fill="url(#ngCore)" />
        <circle cx="220" cy="220" r="168" stroke="#00BFFF" strokeOpacity="0.55" strokeWidth="1.5" />
        <circle
          cx="220"
          cy="220"
          r="168"
          stroke="#D4AF37"
          strokeOpacity="0.22"
          strokeWidth="6"
          strokeDasharray="2 15"
        />

        {/* Longitude wireframe (vertical great circles) */}
        <ellipse cx="220" cy="220" rx="168" ry="168" stroke="#00BFFF" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="220" cy="220" rx="122" ry="168" stroke="#00BFFF" strokeOpacity="0.24" strokeWidth="1" />
        <ellipse cx="220" cy="220" rx="62" ry="168" stroke="#00BFFF" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="220" y1="52" x2="220" y2="388" stroke="#00BFFF" strokeOpacity="0.28" strokeWidth="1" />

        {/* Latitude wireframe (horizontal circles) */}
        <ellipse cx="220" cy="220" rx="168" ry="54" stroke="#00BFFF" strokeOpacity="0.32" strokeWidth="1" />
        <ellipse cx="220" cy="220" rx="168" ry="106" stroke="#00BFFF" strokeOpacity="0.24" strokeWidth="1" />
        <line x1="52" y1="220" x2="388" y2="220" stroke="#00BFFF" strokeOpacity="0.3" strokeWidth="1" />

        {/* Abstract Europe-ish landmass hint, purely decorative */}
        <path
          d="M150 122 C168 104, 198 98, 222 108 C244 116, 250 100, 272 106 C292 112, 300 132, 288 148 C300 158, 296 176, 278 182 C284 198, 268 210, 250 204 C244 218, 224 220, 212 208 C192 214, 172 202, 172 182 C154 178, 144 160, 152 144 C142 138, 140 126, 150 122 Z"
          fill="#00BFFF"
          fillOpacity="0.05"
          stroke="#D4AF37"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Network arcs */}
        {arcs.map((d, i) => (
          <path
            key={d}
            d={d}
            stroke={i % 2 === 0 ? "url(#ngArcGold)" : "url(#ngArcCyan)"}
            strokeWidth={i === 0 ? 1.75 : 1.25}
            strokeLinecap="round"
            strokeDasharray={i % 2 === 0 ? "6 8" : "4 7"}
            className={animated ? "animate-route-dash" : undefined}
          />
        ))}

        {/* Hub nodes */}
        {hubs.map((hub, i) => {
          const color = hub.tone === "gold" ? "#D4AF37" : "#00BFFF";
          return (
            <g key={`${hub.x}-${hub.y}`}>
              <circle
                cx={hub.x}
                cy={hub.y}
                r={hub.r * 2.4}
                stroke={color}
                strokeOpacity="0.3"
                strokeWidth="1"
                className={animated ? "animate-pulse-glow" : undefined}
                style={animated ? { animationDelay: `${i * 0.35}s` } : undefined}
              />
              <circle cx={hub.x} cy={hub.y} r={hub.r} fill={color} />
            </g>
          );
        })}

        {/* Outer orbit ring */}
        {!isCompact ? (
          <g className={animated ? "animate-orbit" : undefined}>
            <ellipse
              cx="220"
              cy="220"
              rx="198"
              ry="70"
              stroke="#D4AF37"
              strokeOpacity="0.32"
              strokeWidth="1"
              transform="rotate(-16 220 220)"
            />
            <circle cx="405" cy="192" r="4" fill="#D4AF37" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
