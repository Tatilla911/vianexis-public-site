import { cn } from "@/lib/utils";

type TruckIconProps = {
  size?: 16 | 20 | 24 | 32 | 48 | 64;
  className?: string;
  tone?: "cyan" | "gold" | "white";
  title?: string;
};

const tones = {
  cyan: "text-cyan-glow",
  gold: "text-gold-core",
  white: "text-white",
};

/** Linear side-view truck — Figma icon language */
export function TruckIcon({
  size = 24,
  className,
  tone = "cyan",
  title,
}: TruckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(tones[tone], className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M1.5 15.5V8.75A1.75 1.75 0 0 1 3.25 7h8.5A1.75 1.75 0 0 1 13.5 8.75V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 10.5h3.2c.4 0 .78.18 1.03.49l2.02 2.48c.2.24.3.55.3.86V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 15.5h19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="17.25" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="17.25" r="1.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.75 17.25h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
