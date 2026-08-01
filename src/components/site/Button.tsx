import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "onDark"
  | "gold"
  | "requestAccess";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  /* Gold fill + dark bronze metallic label for contrast */
  primary:
    "bg-gold-core text-brand-ink-on-gold hover:bg-gold-light shadow-sm",
  gold: "bg-gold-core text-brand-ink-on-gold hover:bg-gold-light shadow-sm",
  /* Highlighted access CTA — gold frame + soft glow */
  requestAccess:
    "btn-request-access border-2 border-gold-core bg-gold-core/15 text-brand-ink shadow-[0_0_0_1px_rgb(242_227_169_/_0.35),0_0_28px_rgb(212_175_55_/_0.35)] hover:border-gold-light hover:bg-gold-core/25 hover:shadow-[0_0_0_1px_rgb(242_227_169_/_0.55),0_0_40px_rgb(212_175_55_/_0.45)]",
  /* Dark chrome + champagne metallic label */
  secondary: "bg-navy-800 text-brand-ink hover:bg-navy-700 shadow-sm",
  ghost: "bg-transparent text-brand-title--on-light hover:bg-surface-muted",
  outline:
    "border border-border bg-white text-brand-title--on-light hover:border-cyan-accent/40 hover:bg-light-bg",
  onDark:
    "border border-navy-600 bg-transparent text-brand-ink hover:bg-navy-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-button min-h-10",
  md: "px-5 py-2.5 text-button min-h-11",
  lg: "px-6 py-3 text-button min-h-12",
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
