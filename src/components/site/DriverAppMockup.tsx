import { cn } from "@/lib/utils";

type DriverPreview = {
  navHome: string;
  navTrips: string;
  navDocs: string;
  navMore: string;
  tripStatus: string;
  nextStopLabel: string;
  nextStopValue: string;
  documentLabel: string;
  documentValue: string;
  documentAction: string;
  syncLabel: string;
  syncValue: string;
};

type DriverAppMockupProps = {
  tripId: string;
  title: string;
  subtitle?: string;
  caption?: string;
  driver: DriverPreview;
  className?: string;
};

function NavGlyph({ id }: { id: "home" | "trips" | "docs" | "more" }) {
  const paths: Record<typeof id, React.ReactNode> = {
    home: (
      <path d="M4 12.5 12 5l8 7.5M6.5 10.5V19h11v-8.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
    trips: (
      <path
        d="M4 17.5V8.75A1.75 1.75 0 0 1 5.75 7h6.5A1.75 1.75 0 0 1 14 8.75v8.75M14 12h3.4c.35 0 .68.16.9.43l1.4 1.72c.2.24.3.53.3.84v2.51M4 17.5h16M7 19.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    docs: (
      <path
        d="M7 3.5h7l3 3v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Zm7 0V7h3.5M9 12h6M9 15.5h6M9 8.5h2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    more: (
      <path
        d="M5 12a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 5 12Zm7 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm7 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      {paths[id]}
    </svg>
  );
}

export function DriverAppMockup({
  tripId,
  title,
  subtitle,
  caption,
  driver,
  className,
}: DriverAppMockupProps) {
  const navItems: { id: "home" | "trips" | "docs" | "more"; label: string }[] = [
    { id: "home", label: driver.navHome },
    { id: "trips", label: driver.navTrips },
    { id: "docs", label: driver.navDocs },
    { id: "more", label: driver.navMore },
  ];

  return (
    <figure className={cn("mx-auto w-full max-w-[280px]", className)}>
      <div
        className="mockup-hover-depth relative overflow-hidden rounded-[1.85rem] border border-navy-600 bg-navy-1000 shadow-lg"
        aria-hidden="true"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/50" />

        {/* Status bar */}
        <div className="relative flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-medium text-neutral-grey">
          <span>9:41</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-[9px] uppercase tracking-wide text-success">
              {driver.tripStatus}
            </span>
          </span>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-b from-navy-800 to-navy-1000 px-4 pb-4 pt-1">
          <p className="text-overline text-gold-core">ViaNexis Driver</p>
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{title}</p>
              {subtitle ? (
                <p className="mt-0.5 truncate text-xs text-neutral-grey">{subtitle}</p>
              ) : null}
            </div>
            <span className="shrink-0 rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-glow">
              {tripId}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2.5 bg-navy-950 p-3.5">
          {/* Next stop */}
          <div className="rounded-lg border border-navy-600 bg-navy-900/80 p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-neutral-grey">
                  {driver.nextStopLabel}
                </p>
                <p className="mt-1 text-xs font-medium text-white">
                  {driver.nextStopValue}
                </p>
              </div>
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cyan-glow animate-pulse-glow" />
            </div>
          </div>

          {/* Document action */}
          <div className="rounded-lg border border-gold-core/40 bg-gold-core/[0.07] p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-gold-core">
                  {driver.documentLabel}
                </p>
                <p className="mt-1 text-xs font-medium text-white">
                  {driver.documentValue}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-gold-core px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-navy-1000">
                {driver.documentAction}
              </span>
            </div>
          </div>

          {/* Sync / offline */}
          <div className="flex items-center justify-between rounded-lg border border-navy-600 bg-navy-900/60 px-3 py-2.5">
            <span className="text-[10px] uppercase tracking-wide text-neutral-grey">
              {driver.syncLabel}
            </span>
            <span className="rounded-full bg-warning/15 px-2 py-0.5 text-[10px] font-semibold text-gold-light">
              {driver.syncValue}
            </span>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="grid grid-cols-4 border-t border-navy-700 bg-navy-900/90 px-1 py-2.5">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col items-center gap-1",
                index === 1 ? "text-cyan-glow" : "text-neutral-grey/70",
              )}
            >
              <NavGlyph id={item.id} />
              <span className="text-[8.5px] font-medium uppercase tracking-wide">
                {item.label}
              </span>
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
