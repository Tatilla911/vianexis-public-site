import { cn } from "@/lib/utils";

type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
  className?: string;
};

export function ProcessCard({
  step,
  title,
  description,
  className,
}: ProcessCardProps) {
  return (
    <div className={cn("panel-glass relative rounded-md p-6", className)}>
      <span className="mb-3 inline-block rounded-md bg-gold-core/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-gold-core">
        {step}
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-grey">
        {description}
      </p>
    </div>
  );
}
