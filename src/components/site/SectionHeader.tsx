import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
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
        typeof eyebrow === "string" ? (
          <p
            className={cn(
              "text-overline mb-3",
              dark ? "text-cyan-glow" : "text-deep-blue",
            )}
          >
            {eyebrow}
          </p>
        ) : (
          <div className="mb-3">{eyebrow}</div>
        )
      ) : null}
      {dark ? <div className="accent-beam mb-4" aria-hidden="true" /> : null}
      <h2
        className={cn(
          "text-section-title text-balance",
          !dark && "text-brand-title--on-light",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-lead mt-4 text-pretty",
            !dark && "text-brand-subtitle--on-light",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
