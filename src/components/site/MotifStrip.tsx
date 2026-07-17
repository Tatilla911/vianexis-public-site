import { TruckIcon } from "@/components/site/visuals/TruckIcon";
import { cn } from "@/lib/utils";

type MotifStripProps = {
  title: string;
  subtitle: string;
  items: { label: string; size: 16 | 20 | 24 | 32 | 48 }[];
  className?: string;
};

/** Figma icon sizing strip — truck motif across scales */
export function MotifStrip({
  title,
  subtitle,
  items,
  className,
}: MotifStripProps) {
  return (
    <div className={cn("panel-glass rounded-lg p-6 md:p-8", className)}>
      <p className="text-overline text-cyan-glow">{title}</p>
      <p className="mt-2 max-w-2xl text-sm text-neutral-grey">{subtitle}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-3 rounded-md border border-navy-600 bg-navy-900/80 px-3 py-5"
          >
            <TruckIcon size={item.size} tone="gold" />
            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-neutral-grey">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
