import { cn } from "@/lib/utils";

type NetworkMapProps = {
  className?: string;
  variant?: "panel" | "background";
};

/** Digital logistics map with glowing routes — Figma CTA motif */
export function NetworkMap({
  className,
  variant = "panel",
}: NetworkMapProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        variant === "panel" && "aspect-[16/10] w-full rounded-lg",
        variant === "background" && "absolute inset-0",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 500"
        className={cn(
          "h-full w-full",
          variant === "background" && "scale-110 opacity-50",
        )}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mapTrailA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
            <stop offset="40%" stopColor="#00BFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="mapTrailB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="500" fill="#0A111A" />
        <rect width="800" height="500" fill="url(#mapGlow)" />

        {/* City grid */}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 48}
            y1="20"
            x2={40 + i * 48}
            y2="480"
            stroke="#264263"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="20"
            y1={30 + i * 48}
            x2="780"
            y2={30 + i * 48}
            stroke="#264263"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        ))}

        {/* Arterial routes */}
        <path
          d="M60 380 C180 360, 220 280, 320 250 C420 220, 480 180, 580 160 C650 148, 700 120, 760 90"
          stroke="url(#mapTrailA)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 12"
          className="animate-route-dash"
        />
        <path
          d="M40 120 C160 140, 210 200, 300 240 C390 280, 470 320, 560 340 C640 358, 700 390, 760 420"
          stroke="url(#mapTrailB)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 10"
          className="animate-route-dash"
        />
        <path
          d="M120 450 C200 390, 280 300, 400 260 C520 220, 600 200, 720 180"
          stroke="#D4AF37"
          strokeOpacity="0.55"
          strokeWidth="1.75"
          strokeDasharray="4 8"
        />

        {/* Hubs */}
        {[
          [160, 360],
          [320, 250],
          [480, 190],
          [620, 150],
          [280, 330],
          [540, 340],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r={i < 3 ? 7 : 5}
              fill={i % 2 === 0 ? "#00BFFF" : "#D4AF37"}
              fillOpacity="0.9"
            />
            <circle
              cx={x}
              cy={y}
              r={i < 3 ? 18 : 12}
              stroke={i % 2 === 0 ? "#00BFFF" : "#D4AF37"}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
