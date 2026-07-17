import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  title: string;
  subtitle?: string;
  columns?: string[];
  rows?: string[][];
  className?: string;
  caption?: string;
};

export function BrowserMockup({
  title,
  subtitle,
  columns = [],
  rows = [],
  className,
  caption,
}: BrowserMockupProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className="overflow-hidden rounded-md border border-navy-700 bg-navy-900 shadow-lg"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 border-b border-navy-700 bg-navy-800 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 truncate rounded-md bg-navy-1000 px-3 py-1 text-[10px] text-neutral-grey">
            portal.vianexis.eu
          </div>
        </div>
        <div className="bg-navy-1000 p-4">
          <div className="mb-3">
            <p className="text-overline text-cyan-accent">Company Portal</p>
            <p className="text-sm font-semibold text-white">{title}</p>
            {subtitle ? (
              <p className="text-xs text-neutral-grey">{subtitle}</p>
            ) : null}
          </div>
          <div className="overflow-hidden rounded-md border border-navy-700 bg-navy-900">
            {columns.length > 0 ? (
              <div className="hidden grid-cols-4 gap-2 border-b border-navy-700 bg-navy-800 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-navy-600 sm:grid">
                {columns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </div>
            ) : null}
            <div className="divide-y divide-navy-700">
              {rows.map((row, idx) => (
                <div
                  key={`${row[0]}-${idx}`}
                  className="grid gap-1 px-3 py-2.5 text-xs text-white sm:grid-cols-4 sm:gap-2"
                >
                  {row.map((cell, cellIdx) => (
                    <span
                      key={`${cell}-${cellIdx}`}
                      className={cn(
                        cellIdx === 0 && "font-semibold text-gold-core",
                        cellIdx > 0 && "text-neutral-grey sm:text-neutral-grey",
                      )}
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs text-text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
