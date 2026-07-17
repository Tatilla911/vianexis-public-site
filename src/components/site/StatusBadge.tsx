import { cn } from "@/lib/utils";

export type StatusTone =
  | "available"
  | "pilot"
  | "development"
  | "neutral"
  | "warning"
  | "danger"
  | "success";

const tones: Record<StatusTone, string> = {
  available: "bg-success/15 text-success border-success/30",
  pilot: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/25",
  development: "bg-gold-core/15 text-gold-light border-gold-core/30",
  neutral: "bg-navy-800 text-neutral-grey border-navy-700",
  warning: "bg-warning/15 text-gold-light border-warning/30",
  danger: "bg-error/15 text-error border-error/30",
  success: "bg-success/15 text-success border-success/30",
};

const tonesOnLight: Record<StatusTone, string> = {
  available: "bg-success/10 text-success border-success/20",
  pilot: "bg-vianexis-blue/10 text-deep-blue border-vianexis-blue/25",
  development: "bg-gold-pale/60 text-gold-dark border-gold-core/30",
  neutral: "bg-surface-muted text-text-muted border-border",
  warning: "bg-warning/10 text-gold-dark border-warning/25",
  danger: "bg-error/10 text-error border-error/20",
  success: "bg-success/10 text-success border-success/20",
};

type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
  className?: string;
  onDark?: boolean;
};

export function StatusBadge({
  label,
  tone = "neutral",
  className,
  onDark = false,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-caption tracking-wide",
        onDark ? tones[tone] : tonesOnLight[tone],
        className,
      )}
    >
      {label}
    </span>
  );
}
