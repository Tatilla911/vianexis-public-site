import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "muted";
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  variant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-light-bg text-text",
    dark: "bg-navy text-white",
    muted: "bg-white text-text",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 max-w-3xl">
            {title && (
              <h2
                className={cn(
                  "text-2xl font-bold tracking-tight sm:text-3xl",
                  variant === "dark" ? "text-white" : "text-navy",
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-3 text-base leading-relaxed sm:text-lg",
                  variant === "dark" ? "text-white/75" : "text-text/70",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
