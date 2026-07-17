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

/** Europe-facing hub overlay (stays readable while land drifts underneath). */
const HUBS: Hub[] = [
  { x: 220, y: 208, tone: "gold", r: 6.5 },
  { x: 198, y: 168, tone: "cyan", r: 4 },
  { x: 178, y: 150, tone: "cyan", r: 4 },
  { x: 248, y: 158, tone: "cyan", r: 4 },
  { x: 268, y: 198, tone: "gold", r: 4 },
  { x: 188, y: 198, tone: "cyan", r: 3.5 },
  { x: 214, y: 252, tone: "gold", r: 3.5 },
  { x: 148, y: 218, tone: "cyan", r: 3.5 },
  { x: 298, y: 230, tone: "gold", r: 3.5 },
];

const COMPACT_HUB_COUNT = 5;

const ARCS = [
  "M220 208 C210 184, 204 172, 198 168",
  "M220 208 C200 172, 186 156, 178 150",
  "M220 208 C232 180, 242 166, 248 158",
  "M220 208 C240 204, 256 200, 268 198",
  "M148 218 C172 212, 196 210, 220 208",
  "M220 208 C250 214, 276 222, 298 230",
];

const COMPACT_ARC_COUNT = 2;

/**
 * One world panel (440 wide). Two copies scroll for a seamless yaw loop.
 * Decorative silhouettes — not a cartographic projection.
 */
function WorldPanel() {
  return (
    <g
      fill="#00BFFF"
      fillOpacity="0.18"
      stroke="#D4AF37"
      strokeOpacity="0.45"
      strokeWidth="1"
    >
      {/* Greenland */}
      <path d="M168 72 C184 60, 204 66, 208 84 C206 100, 190 108, 176 100 C164 106, 156 92, 160 80 C162 74, 164 72, 168 72 Z" />
      {/* North America */}
      <path d="M42 120 C68 92, 108 84, 138 100 C160 112, 170 134, 162 156 C180 162, 188 184, 172 200 C156 216, 128 220, 108 206 C82 220, 54 206, 50 178 C34 164, 28 138, 42 120 Z" />
      {/* South America */}
      <path d="M118 230 C134 220, 150 234, 152 256 C154 284, 140 316, 124 336 C110 352, 98 338, 104 316 C94 294, 100 268, 112 248 C114 236, 114 232, 118 230 Z" />
      {/* Europe */}
      <path d="M198 118 C218 100, 244 96, 266 108 C282 116, 290 104, 306 110 C322 118, 328 136, 316 150 C330 160, 324 178, 308 184 C316 200, 298 212, 280 204 C272 218, 252 220, 240 206 C222 214, 204 202, 206 182 C190 176, 182 158, 192 142 C180 136, 182 122, 198 118 Z" />
      {/* Africa */}
      <path d="M228 198 C252 188, 276 198, 286 220 C298 248, 292 280, 274 306 C260 326, 240 334, 226 322 C210 338, 188 326, 190 300 C180 274, 190 244, 206 222 C212 208, 218 200, 228 198 Z" />
      {/* Asia */}
      <path d="M318 108 C352 90, 396 88, 428 110 C452 126, 468 154, 456 182 C476 192, 482 218, 464 234 C444 254, 408 256, 388 236 C370 250, 344 244, 336 222 C318 226, 300 210, 306 188 C292 176, 290 148, 304 128 C300 116, 306 110, 318 108 Z" />
      {/* Australia */}
      <path d="M378 286 C402 274, 430 282, 438 302 C444 322, 428 338, 404 334 C384 342, 366 324, 372 304 C372 294, 374 288, 378 286 Z" />
    </g>
  );
}

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
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.34" />
            <stop offset="52%" stopColor="#0047AB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="0.96" />
          </radialGradient>
          <radialGradient id="ngShade" cx="32%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="42%" stopColor="#00BFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="0.58" />
          </radialGradient>
          <linearGradient id="ngArcGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="ngArcCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.55" />
          </linearGradient>
          <clipPath id="ngSphereClip">
            <circle cx="220" cy="220" r="168" />
          </clipPath>
        </defs>

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

        <g clipPath="url(#ngSphereClip)">
          {/* Drifting continents = faux Earth yaw (SVG units, seamless loop) */}
          <g>
            {animated ? (
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-440 0"
                dur={isCompact ? "64s" : "56s"}
                repeatCount="indefinite"
              />
            ) : null}
            <g transform="translate(0 40)">
              <WorldPanel />
            </g>
            <g transform="translate(440 40)">
              <WorldPanel />
            </g>
            {[40, 110, 180, 250, 320, 390, 480, 550, 620, 690, 760, 830].map(
              (x) => (
                <ellipse
                  key={x}
                  cx={x}
                  cy="220"
                  rx="26"
                  ry="168"
                  stroke="#00BFFF"
                  strokeOpacity="0.14"
                  strokeWidth="1"
                />
              ),
            )}
          </g>

          {/* Fixed latitudes */}
          <ellipse
            cx="220"
            cy="220"
            rx="168"
            ry="52"
            stroke="#00BFFF"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <ellipse
            cx="220"
            cy="220"
            rx="168"
            ry="100"
            stroke="#00BFFF"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <line
            x1="52"
            y1="220"
            x2="388"
            y2="220"
            stroke="#00BFFF"
            strokeOpacity="0.24"
            strokeWidth="1"
          />

          <circle cx="220" cy="220" r="168" fill="url(#ngShade)" />
        </g>

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
