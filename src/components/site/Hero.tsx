import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy text-white",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#123B63_0%,_transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_transparent_40%,_#1E88E5_200%)] opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold">
            ViaNexis
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-vianexis-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vianexis-blue/90"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Dokumentum", value: "QR + audit" },
            { label: "Aláírás", value: "Szabályozott" },
            { label: "Hatóság", value: "Csomagolt hozzáférés" },
            { label: "eFTI", value: "Ready foundation" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-wide text-white/50">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
