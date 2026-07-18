import { cn } from "@/lib/utils";

type ConnectedWorkflowVisualProps = {
  events: string[];
  className?: string;
};

/**
 * Horizontal (desktop) / wrapped (mobile) trip-event workflow.
 * The connecting line and node glows are decorative; event labels stay
 * visible and readable for all users.
 */
export function ConnectedWorkflowVisual({
  events,
  className,
}: ConnectedWorkflowVisualProps) {
  return (
    <div className={cn("panel-glass rounded-lg p-6 md:p-8", className)}>
      <div className="relative">
        <svg
          viewBox="0 0 1000 40"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 top-[19px] hidden h-[2px] w-[calc(100%-2.5rem)] sm:block"
        >
          <defs>
            <linearGradient id="workflowLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.18" />
              <stop offset="45%" stopColor="#00BFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="20"
            x2="1000"
            y2="20"
            stroke="url(#workflowLine)"
            strokeWidth="3"
            strokeDasharray="14 10"
            className="animate-route-dash"
          />
        </svg>

        <ol className="relative z-10 flex flex-wrap items-start justify-between gap-x-4 gap-y-7 sm:flex-nowrap sm:gap-x-2">
          {events.map((event, index) => {
            const isGold = index % 2 === 0;
            return (
              <li
                key={`${event}-${index}`}
                className="flex w-[calc(50%-0.5rem)] flex-col items-center gap-2.5 text-center sm:w-auto sm:flex-1 sm:px-1"
              >
                <span
                  aria-hidden="true"
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center"
                >
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full blur-[7px] animate-pulse-glow",
                      isGold ? "bg-gold-core/30" : "bg-cyan-glow/30",
                    )}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                  <span
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-full border bg-navy-900 text-code font-semibold",
                      isGold
                        ? "border-gold-core/50 text-gold-core"
                        : "border-cyan-glow/50 text-cyan-glow",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="text-body-sm font-medium text-neutral-grey">
                  {event}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
