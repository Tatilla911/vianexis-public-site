import { cn } from "@/lib/utils";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  className?: string;
  variant?: "light" | "dark";
};

export function ProcessTimeline({
  steps,
  className,
  variant = "dark",
}: ProcessTimelineProps) {
  const dark = variant === "dark";

  return (
    <ol
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "relative rounded-md border p-5 panel-glass",
            dark
              ? "border-navy-700"
              : "border-border bg-white shadow-sm",
          )}
        >
          <span
            className={cn(
              "mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 font-mono text-sm font-bold",
              dark
                ? "bg-gold-core/15 text-gold-core"
                : "bg-navy text-gold-core",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "text-h3 text-base",
              dark ? "text-white" : "text-navy",
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "text-body mt-2",
              dark ? "text-neutral-grey" : "text-text-muted",
            )}
          >
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
