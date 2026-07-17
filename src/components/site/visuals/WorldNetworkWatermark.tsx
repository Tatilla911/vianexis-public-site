"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type WorldNetworkWatermarkProps = {
  className?: string;
  /** background = full-bleed CTA/footer; panel = contained */
  variant?: "background" | "panel";
};

/**
 * Figma bottom motif: watermark continents linked by cyan/gold route arcs.
 * Decorative only — aria-hidden.
 */
export function WorldNetworkWatermark({
  className,
  variant = "background",
}: WorldNetworkWatermarkProps) {
  const uid = useId().replace(/:/g, "");
  const nightId = `wnNight-${uid}`;
  const arcId = `wnArc-${uid}`;
  const glowId = `wnGlow-${uid}`;

  return (
    <div
      className={cn(
        "pointer-events-none overflow-hidden",
        variant === "background" && "absolute inset-0",
        variant === "panel" && "relative aspect-[21/9] w-full rounded-lg",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 520"
        className={cn(
          "h-full w-full",
          variant === "background" && "scale-[1.08]",
        )}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={nightId} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#142233" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="1" />
          </radialGradient>
          <linearGradient id={arcId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
            <stop offset="30%" stopColor="#00BFFF" stopOpacity="1" />
            <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.2" />
          </linearGradient>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1200" height="520" fill={`url(#${nightId})`} />

        {Array.from({ length: 56 }).map((_, i) => {
          const x = 40 + ((i * 97) % 1120);
          const y = 60 + ((i * 53) % 400);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 5 === 0 ? 1.5 : 0.85}
              fill={i % 3 === 0 ? "#D4AF37" : "#00BFFF"}
              fillOpacity={0.22 + (i % 4) * 0.06}
            />
          );
        })}

        {/* Continent watermarks — visible outline + soft gold fill */}
        <g
          fill="#D4AF37"
          fillOpacity="0.18"
          stroke="#00BFFF"
          strokeOpacity="0.45"
          strokeWidth="1.4"
        >
          <path d="M110 140 C160 95, 230 90, 280 120 C320 145, 335 185, 310 220 C345 235, 350 280, 310 305 C270 335, 210 340, 170 305 C120 325, 80 290, 85 240 C70 205, 75 165, 110 140 Z" />
          <path d="M250 320 C280 305, 305 330, 308 365 C312 415, 285 465, 255 490 C230 510, 210 485, 220 450 C205 415, 215 370, 235 345 C238 330, 242 322, 250 320 Z" />
          <path d="M520 145 C555 120, 600 115, 635 135 C660 150, 670 130, 695 140 C720 155, 725 185, 700 205 C725 220, 715 250, 685 255 C700 280, 665 300, 635 285 C620 305, 585 305, 565 280 C535 290, 505 270, 510 240 C485 230, 475 195, 495 170 C480 160, 490 145, 520 145 Z" />
          <path d="M575 270 C620 250, 665 270, 680 310 C700 360, 685 420, 650 460 C620 490, 575 500, 550 470 C520 500, 480 475, 485 430 C470 385, 490 330, 520 300 C530 280, 550 270, 575 270 Z" />
          <path d="M720 130 C790 100, 880 100, 950 140 C1000 170, 1030 215, 1005 260 C1045 275, 1055 320, 1015 345 C970 380, 900 380, 860 345 C825 370, 775 360, 760 320 C725 330, 690 300, 705 260 C680 240, 675 190, 700 160 C700 145, 700 132, 720 130 Z" />
          <path d="M920 390 C970 370, 1030 385, 1045 420 C1055 450, 1020 475, 975 468 C940 480, 905 450, 915 420 C915 405, 916 395, 920 390 Z" />
        </g>

        <g
          stroke={`url(#${arcId})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          filter={`url(#${glowId})`}
          className="animate-route-dash"
          strokeDasharray="10 14"
        >
          <path d="M210 200 C320 120, 450 110, 580 180" />
          <path d="M280 280 C400 250, 500 270, 600 320" />
          <path d="M620 200 C720 160, 820 170, 920 220" />
          <path d="M640 300 C760 280, 860 320, 960 400" />
          <path d="M180 250 C300 340, 480 380, 700 340" />
          <path d="M300 180 C480 80, 720 90, 980 180" />
        </g>

        {[
          [190, 195],
          [260, 250],
          [580, 185],
          [620, 310],
          [780, 200],
          [940, 250],
          [980, 420],
          [300, 360],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r={i < 3 ? 5.5 : 4}
              fill={i % 2 === 0 ? "#00BFFF" : "#D4AF37"}
              fillOpacity="1"
            />
            <circle
              cx={x}
              cy={y}
              r={i < 3 ? 16 : 12}
              stroke={i % 2 === 0 ? "#00BFFF" : "#D4AF37"}
              strokeOpacity="0.4"
              strokeWidth="1.1"
            />
          </g>
        ))}
      </svg>

      {/* Soft vignette — keep continents readable (Figma watermark style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-1000/75 via-navy-1000/25 to-navy-1000/55" />
    </div>
  );
}
