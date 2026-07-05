"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales } from "@/lib/i18n/locales";
import { switchLocalePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  className?: string;
};

export function LanguageSwitcher({
  currentLocale,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn("flex items-center gap-1 rounded-lg border border-deep-blue/10 p-1", className)}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={switchLocalePath(pathname, locale)}
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            locale === currentLocale
              ? "bg-navy text-white"
              : "text-text/70 hover:bg-light-bg hover:text-navy",
          )}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}
