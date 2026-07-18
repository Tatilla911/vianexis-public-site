import { cn } from "@/lib/utils";

type PortalPreview = {
  roleLabel: string;
  alertLabel: string;
  alertValue: string;
  auditLabel: string;
  auditValue: string;
};

type CompanyPortalMockupProps = {
  title: string;
  subtitle?: string;
  tripId: string;
  columns: string[];
  rows: string[][];
  portal: PortalPreview;
  caption?: string;
  className?: string;
};

export function CompanyPortalMockup({
  title,
  subtitle,
  tripId,
  columns,
  rows,
  portal,
  caption,
  className,
}: CompanyPortalMockupProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className="mockup-hover-depth overflow-hidden rounded-md border border-navy-700 bg-navy-900 shadow-lg"
        aria-hidden="true"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-navy-700 bg-navy-800 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 truncate rounded-md bg-navy-1000 px-3 py-1 text-[11px] text-neutral-grey">
            portal.vianexis.eu
          </div>
        </div>

        <div className="bg-navy-1000 p-4">
          {/* Header row */}
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-overline text-cyan-accent">Company Portal</p>
              <p className="text-sm font-semibold text-white">{title}</p>
              {subtitle ? (
                <p className="text-caption text-neutral-grey">{subtitle}</p>
              ) : null}
            </div>
            <span className="rounded-full border border-gold-core/40 bg-gold-core/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-core">
              {portal.roleLabel}
            </span>
          </div>

          {/* Active trip table */}
          <div className="overflow-hidden rounded-md border border-navy-700 bg-navy-900">
            {columns.length > 0 ? (
              <div className="hidden grid-cols-4 gap-2 border-b border-navy-700 bg-navy-800 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-navy-600 sm:grid">
                {columns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </div>
            ) : null}
            <div className="divide-y divide-navy-700">
              {rows.map((row, idx) => {
                const isActiveTrip = row[0] === tripId;
                return (
                  <div
                    key={`${row[0]}-${idx}`}
                    className={cn(
                      "grid gap-1 border-l-2 px-3 py-2.5 text-[11px] text-white sm:grid-cols-4 sm:gap-2",
                      isActiveTrip
                        ? "border-l-gold-core bg-gold-core/[0.05]"
                        : "border-l-transparent",
                    )}
                  >
                    {row.map((cell, cellIdx) => (
                      <span
                        key={`${cell}-${cellIdx}`}
                        className={cn(
                          cellIdx === 0 && "font-semibold text-gold-core",
                          cellIdx > 0 && "text-neutral-grey",
                        )}
                      >
                        {cell}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Alert + audit panels */}
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-md border border-warning/35 bg-warning/[0.06] p-3">
              <p className="text-[11px] uppercase tracking-wide text-gold-light">
                {portal.alertLabel}
              </p>
              <p className="mt-1 text-[11px] font-medium text-white">
                {portal.alertValue}
              </p>
            </div>
            <div className="rounded-md border border-cyan-glow/30 bg-cyan-glow/[0.06] p-3">
              <p className="text-[11px] uppercase tracking-wide text-cyan-glow">
                {portal.auditLabel}
              </p>
              <p className="mt-1 text-[11px] font-medium text-white">
                {portal.auditValue}
              </p>
            </div>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-caption text-neutral-grey">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
