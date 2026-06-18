import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-deep-blue/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-vianexis-blue/10 text-vianexis-blue">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text/70">{description}</p>
    </div>
  );
}
