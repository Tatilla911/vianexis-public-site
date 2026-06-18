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
    <div
      className={cn(
        "relative rounded-xl border border-deep-blue/10 bg-white p-6 shadow-sm",
        className,
      )}
    >
      <span className="mb-3 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-deep-blue">
        {step}
      </span>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text/70">{description}</p>
    </div>
  );
}
