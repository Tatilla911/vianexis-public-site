import Link from "next/link";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  locale: Locale;
  className?: string;
};

export function Breadcrumb({ items, locale, className }: BreadcrumbProps) {
  const label = resolveVisualMarketing(locale).ui.breadcrumb;

  return (
    <nav aria-label={label} className={cn("text-meta", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-neutral-grey">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="focus-ring rounded text-cyan-accent hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(last && "font-medium text-white")}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
