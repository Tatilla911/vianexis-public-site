"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

type NetworkGlobeProps = {
  className?: string;
  compact?: boolean;
};

type OrbitRing = {
  rx: number;
  ry: number;
  rotate: number;
};

type OrbitDot = OrbitRing & {
  dur: string;
  tone: "cyan" | "gold";
  size: number;
  begin: string;
};

const RINGS: OrbitRing[] = [
  { rx: 310, ry: 108, rotate: -18 },
  { rx: 280, ry: 92, rotate: 22 },
  { rx: 340, ry: 78, rotate: 8 },
  { rx: 255, ry: 118, rotate: -42 },
];

const DOTS: OrbitDot[] = [
  { ...RINGS[0], dur: "14s", tone: "cyan", size: 5, begin: "0s" },
  { ...RINGS[0], dur: "14s", tone: "gold", size: 3.5, begin: "-4.5s" },
  { ...RINGS[0], dur: "14s", tone: "cyan", size: 3, begin: "-9s" },
  { ...RINGS[1], dur: "18s", tone: "gold", size: 4.5, begin: "0s" },
  { ...RINGS[1], dur: "18s", tone: "cyan", size: 3, begin: "-6s" },
  { ...RINGS[1], dur: "18s", tone: "gold", size: 2.5, begin: "-12s" },
  { ...RINGS[2], dur: "22s", tone: "cyan", size: 3.5, begin: "-2s" },
  { ...RINGS[2], dur: "22s", tone: "gold", size: 2.5, begin: "-13s" },
  { ...RINGS[3], dur: "16s", tone: "cyan", size: 3, begin: "-1s" },
  { ...RINGS[3], dur: "16s", tone: "gold", size: 4, begin: "-8s" },
];

/**
 * Hero / network globe — official ViaNexis Earth asset with orbiting light points.
 */
export function NetworkGlobe({ className, compact = false }: NetworkGlobeProps) {
  const uid = useId().replace(/:/g, "");
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
  const cx = 512;
  const cy = 348;

  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        isCompact ? "max-w-[340px]" : "max-w-[560px]",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-[10%] rounded-full bg-cyan-glow/18 blur-3xl",
          animated && "animate-pulse-glow",
        )}
      />
      <div className="pointer-events-none absolute inset-[30%] rounded-full bg-gold-core/10 blur-2xl" />

      <div className="relative aspect-[1024/682] w-full">
        <Image
          src="/brand/network-globe.png"
          alt=""
          fill
          sizes={
            isCompact
              ? "(max-width: 768px) 340px, 380px"
              : "(max-width: 1024px) 460px, 560px"
          }
          className={cn(
            "object-contain drop-shadow-[0_0_52px_rgb(0_191_255_/_0.4)]",
            animated && "animate-globe-drift",
          )}
          priority
        />

        <svg
          viewBox="0 0 1024 682"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {RINGS.map((ring, i) => (
              <path
                key={`path-${i}`}
                id={`globe-orbit-${uid}-${i}`}
                d={ellipsePath(cx, cy, ring.rx, ring.ry)}
                transform={`rotate(${ring.rotate} ${cx} ${cy})`}
              />
            ))}
            <filter
              id={`globe-dot-glow-${uid}`}
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {RINGS.map((ring, i) => (
            <ellipse
              key={`ring-${i}`}
              cx={cx}
              cy={cy}
              rx={ring.rx}
              ry={ring.ry}
              transform={`rotate(${ring.rotate} ${cx} ${cy})`}
              stroke={i % 2 === 0 ? "#00BFFF" : "#D4AF37"}
              strokeOpacity={0.2}
              strokeWidth="1"
              strokeDasharray={i === 2 ? "3 10" : "2 8"}
            />
          ))}

          {(animated ? DOTS : DOTS.slice(0, 4)).map((dot, i) => {
            const ringIndex = RINGS.findIndex(
              (r) =>
                r.rx === dot.rx && r.ry === dot.ry && r.rotate === dot.rotate,
            );
            const pathId = `globe-orbit-${uid}-${ringIndex}`;
            const color = dot.tone === "gold" ? "#D4AF37" : "#00BFFF";

            if (!animated) {
              const pt = ellipsePoint(
                cx,
                cy,
                dot.rx,
                dot.ry,
                dot.rotate,
                (i / 4) * Math.PI * 2,
              );
              return (
                <circle
                  key={`static-${i}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={dot.size}
                  fill={color}
                  filter={`url(#globe-dot-glow-${uid})`}
                />
              );
            }

            return (
              <g key={`dot-${i}`} filter={`url(#globe-dot-glow-${uid})`}>
                <circle r={dot.size * 2.1} fill={color} fillOpacity="0.25">
                  <animateMotion
                    dur={dot.dur}
                    begin={dot.begin}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
                <circle r={dot.size} fill={color}>
                  <animateMotion
                    dur={dot.dur}
                    begin={dot.begin}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
                <circle
                  r={Math.max(1.1, dot.size * 0.32)}
                  fill="#FFFFFF"
                  fillOpacity="0.92"
                >
                  <animateMotion
                    dur={dot.dur}
                    begin={dot.begin}
                    repeatCount="indefinite"
                  >
                    <mpath href={`#${pathId}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function ellipsePath(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;
}

function ellipsePoint(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  rotateDeg: number,
  angle: number,
) {
  const x = rx * Math.cos(angle);
  const y = ry * Math.sin(angle);
  const rad = (rotateDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x: cx + x * cos - y * sin,
    y: cy + x * sin + y * cos,
  };
}
