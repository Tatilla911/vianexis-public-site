import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  title: string;
  subtitle?: string;
  rows?: { label: string; value: string; status?: string }[];
  className?: string;
  caption?: string;
};

export function PhoneMockup({
  title,
  subtitle,
  rows = [],
  className,
  caption,
}: PhoneMockupProps) {
  return (
    <figure className={cn("mx-auto w-full max-w-[260px]", className)}>
      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-navy-700 bg-navy-1000 shadow-lg"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/40" />
        <div className="bg-gradient-to-b from-navy-800 to-navy-1000 px-4 pb-4 pt-10">
          <p className="text-overline text-gold-core">
            ViaNexis Driver
          </p>
          <p className="mt-1 text-sm font-semibold text-white">{title}</p>
          {subtitle ? (
            <p className="mt-0.5 text-xs text-neutral-grey">{subtitle}</p>
          ) : null}
        </div>
        <div className="space-y-2 bg-light-bg p-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-lg border border-border bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-text-muted">
                    {row.label}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-navy">
                    {row.value}
                  </p>
                </div>
                {row.status ? (
                  <span className="rounded-full bg-cyan-accent/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-accent">
                    {row.status}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-neutral-grey">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
