import { SectionHeader } from "@/components/site/SectionHeader";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  /** default/muted/dark = Figma dark system; light = rare light escape hatch */
  variant?: "default" | "muted" | "dark" | "light";
};

export function Section({
  id,
  title,
  subtitle,
  eyebrow,
  children,
  className,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-navy-1000 text-white",
    muted: "bg-navy-900 text-white",
    dark: "bg-navy-950 text-white hero-grid-bg",
    light: "bg-light-bg text-text",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-20 lg:py-24", variants[variant], className)}
    >
      <div className="container-site">
        {(title || subtitle || eyebrow) && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title ?? ""}
            subtitle={subtitle}
            dark={variant !== "light"}
          />
        )}
        {children}
      </div>
    </section>
  );
}
