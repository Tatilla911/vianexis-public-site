import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-overline mb-3",
            dark ? "text-cyan-glow" : "text-deep-blue",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      {dark ? <div className="accent-beam mb-4" aria-hidden="true" /> : null}
      <h2
        className={cn(
          "text-section-title text-balance",
          dark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-lead mt-4 text-pretty",
            dark ? "text-neutral-grey" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
