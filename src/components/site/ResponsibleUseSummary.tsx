import Link from "next/link";
import { cn } from "@/lib/utils";

type ResponsibleUseSummaryProps = {
  title: string;
  subtitle?: string;
  items: string[];
  detailsHref?: string;
  detailsLabel?: string;
  className?: string;
};

/** Compact, gold-bordered responsible-use notice — a summary of DisclaimerBox content. */
export function ResponsibleUseSummary({
  title,
  subtitle,
  items,
  detailsHref,
  detailsLabel,
  className,
}: ResponsibleUseSummaryProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-gold-core/30 bg-gold-core/[0.06] p-5 md:p-6",
        className,
      )}
    >
      <p className="text-overline text-gold-core">{title}</p>
      {subtitle ? (
        <p className="mt-2 text-sm leading-relaxed text-neutral-grey">
          {subtitle}
        </p>
      ) : null}
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-grey">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-core/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {detailsHref && detailsLabel ? (
        <Link
          href={detailsHref}
          className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-core hover:underline"
        >
          {detailsLabel}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
