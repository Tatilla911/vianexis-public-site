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
      <span className="text-overline mb-3 inline-block rounded-md bg-gold-core/15 px-3 py-1 text-gold-core">
        {step}
      </span>
      <h3 className="text-card-title text-white">{title}</h3>
      <p className="text-body mt-2 text-neutral-grey">{description}</p>
    </div>
  );
}
