import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-md border border-border bg-white p-6 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none",
        className,
      )}
    >
      {icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-cyan-accent/10 text-cyan-accent">
          {icon}
        </div>
      ) : (
        <div
          className="mb-4 h-1 w-8 rounded-full bg-gold-core"
          aria-hidden="true"
        />
      )}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="text-body mt-2 text-text-muted">{description}</p>
    </article>
  );
}
