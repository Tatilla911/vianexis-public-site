import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "onDark"
  | "gold";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  /* Figma primary: gold core + navy text */
  primary: "bg-gold-core text-navy-1000 hover:bg-gold-light shadow-sm",
  gold: "bg-gold-core text-navy-1000 hover:bg-gold-light shadow-sm",
  secondary: "bg-navy-800 text-white hover:bg-navy-700 shadow-sm",
  ghost: "bg-transparent text-navy hover:bg-surface-muted",
  outline:
    "border border-border bg-white text-navy hover:border-cyan-accent/40 hover:bg-light-bg",
  onDark:
    "border border-navy-600 bg-transparent text-white hover:bg-navy-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-[13px] font-semibold min-h-10",
  md: "px-5 py-2.5 text-[13px] font-semibold min-h-11",
  lg: "px-6 py-3 text-sm font-semibold min-h-12",
};

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md transition-colors focus-ring",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
