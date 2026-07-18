import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  index?: number;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
  index,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "panel-glass panel-glass-hover group rounded-md p-6 motion-reduce:transform-none",
        className,
      )}
    >
      {typeof index === "number" ? (
        <span className="mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-md bg-gold-core/15 px-2 text-code font-bold text-gold-core">
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-accent/10 text-cyan-accent">
          {icon}
        </div>
      ) : (
        <div className="accent-beam mb-4" aria-hidden="true" />
      )}
      <h3 className="text-card-title text-white">{title}</h3>
      <p className="text-body mt-2 text-neutral-grey">{description}</p>
    </article>
  );
}
