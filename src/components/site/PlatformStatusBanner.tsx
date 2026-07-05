import { platformStatus } from "@/lib/public-content";
import { cn } from "@/lib/utils";

type PlatformStatusBannerProps = {
  className?: string;
};

export function PlatformStatusBanner({ className }: PlatformStatusBannerProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gold/30 bg-gold/5 p-6",
        className,
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-navy">
        {platformStatus.title}
      </p>
      <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-text/80">
        {platformStatus.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text/60">{platformStatus.disclaimer}</p>
    </div>
  );
}
