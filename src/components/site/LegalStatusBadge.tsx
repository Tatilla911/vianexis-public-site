import { cn } from "@/lib/utils";

type LegalStatusBadgeProps = {
  label?: string;
  className?: string;
};

export function LegalStatusBadge({ label, className }: LegalStatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-gold-core/40 bg-gold-core/10 px-3 py-1.5 text-meta font-medium text-gold-light",
        className,
      )}
    >
      {label ?? "DRAFT — jogi/adatvédelmi szakértői felülvizsgálat szükséges."}
    </div>
  );
}
