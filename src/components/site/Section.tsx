import { SectionHeader } from "@/components/site/SectionHeader";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
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
    default: "bg-light-bg text-text",
    dark: "bg-navy-1000 text-white",
    muted: "bg-white text-text",
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
            dark={variant === "dark"}
          />
        )}
        {children}
      </div>
    </section>
  );
}
