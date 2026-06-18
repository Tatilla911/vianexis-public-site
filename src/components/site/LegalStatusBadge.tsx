import { cn } from "@/lib/utils";

type LegalStatusBadgeProps = {
  className?: string;
};

export function LegalStatusBadge({ className }: LegalStatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-sm font-medium text-navy",
        className,
      )}
    >
      DRAFT — jogi/adatvédelmi szakértői felülvizsgálat szükséges.
    </div>
  );
}
