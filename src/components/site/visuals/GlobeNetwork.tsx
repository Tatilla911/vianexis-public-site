import { cn } from "@/lib/utils";

type GlobeNetworkProps = {
  className?: string;
  compact?: boolean;
};

/** Futuristic network globe — Figma hero motif (SVG, no external assets) */
export function GlobeNetwork({ className, compact = false }: GlobeNetworkProps) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full",
        compact ? "max-w-[280px]" : "max-w-[440px]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full bg-cyan-glow/10 blur-2xl animate-pulse-glow" />
      <div className="absolute inset-[18%] rounded-full bg-gold-core/10 blur-xl" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full drop-shadow-[0_0_40px_rgb(0_191_255_/_0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="globeCore" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#0047AB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0A111A" stopOpacity="0.9" />
          </radialGradient>
          <linearGradient id="orbitGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="148" fill="url(#globeCore)" />
        <circle
          cx="200"
          cy="200"
          r="148"
          stroke="#00BFFF"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="148"
          stroke="#D4AF37"
          strokeOpacity="0.25"
          strokeWidth="6"
          strokeDasharray="2 14"
        />

        {/* Latitude / longitude wireframe */}
        <ellipse
          cx="200"
          cy="200"
          rx="148"
          ry="48"
          stroke="#00BFFF"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="148"
          ry="95"
          stroke="#00BFFF"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="55"
          ry="148"
          stroke="#00BFFF"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="110"
          ry="148"
          stroke="#00BFFF"
          strokeOpacity="0.22"
          strokeWidth="1"
        />
        <line
          x1="52"
          y1="200"
          x2="348"
          y2="200"
          stroke="#00BFFF"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="52"
          x2="200"
          y2="348"
          stroke="#00BFFF"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* Network arcs */}
        <path
          d="M90 150 C140 90, 260 90, 310 150"
          stroke="url(#orbitGold)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="animate-route-dash"
        />
        <path
          d="M80 230 C150 290, 250 290, 320 220"
          stroke="#00BFFF"
          strokeWidth="1.25"
          strokeOpacity="0.7"
          strokeDasharray="4 7"
          className="animate-route-dash"
        />
        <path
          d="M120 110 C180 180, 220 240, 290 280"
          stroke="#D4AF37"
          strokeWidth="1.25"
          strokeOpacity="0.65"
        />

        {/* Nodes */}
        {[
          [118, 132],
          [200, 86],
          [278, 128],
          [312, 200],
          [268, 268],
          [152, 278],
          [96, 208],
          [200, 200],
        ].map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r={i === 7 ? 5 : 3.5}
              fill={i % 3 === 0 ? "#D4AF37" : "#00BFFF"}
            />
            <circle
              cx={x}
              cy={y}
              r={i === 7 ? 12 : 9}
              stroke={i % 3 === 0 ? "#D4AF37" : "#00BFFF"}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Outer orbit ring */}
        <g className="animate-orbit">
          <ellipse
            cx="200"
            cy="200"
            rx="175"
            ry="62"
            stroke="#D4AF37"
            strokeOpacity="0.35"
            strokeWidth="1"
            transform="rotate(-18 200 200)"
          />
          <circle cx="365" cy="175" r="4" fill="#D4AF37" />
        </g>
      </svg>
    </div>
  );
}
