import { cn } from "@/lib/utils";

type PlatformStatus = {
  title: string;
  items: string[];
  disclaimer: string;
};

type PlatformStatusBannerProps = {
  content: PlatformStatus;
  className?: string;
};

export function PlatformStatusBanner({
  content,
  className,
}: PlatformStatusBannerProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-cyan-accent/25 bg-cyan-accent/[0.06] p-6",
        className,
      )}
    >
      <p className="text-overline text-cyan-accent">{content.title}</p>
      <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-neutral-grey">
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-neutral-grey/80">{content.disclaimer}</p>
    </div>
  );
}
