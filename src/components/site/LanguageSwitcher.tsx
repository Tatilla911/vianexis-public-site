"use client";

import { useRouter, usePathname } from "next/navigation";
import { localeNames, locales } from "@/lib/i18n/locales";
import { switchLocalePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { toPublicTranslationStatus } from "@/lib/i18n/translation-status";
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
  const router = useRouter();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <label htmlFor="locale-select" className="sr-only">
        Language
      </label>
      <select
        id="locale-select"
        value={currentLocale}
        onChange={(event) => {
          const next = event.target.value as Locale;
          router.push(switchLocalePath(pathname, next));
        }}
        className="rounded-lg border border-deep-blue/10 bg-white px-2 py-1.5 text-xs font-semibold text-navy"
        aria-label="Language"
      >
        {locales.map((locale) => {
          const status = toPublicTranslationStatus(locale);
          const suffix = status === "reviewed" ? "" : " · draft";
          return (
            <option key={locale} value={locale}>
              {localeNames[locale]} ({locale.toUpperCase()}){suffix}
            </option>
          );
        })}
      </select>
    </div>
  );
}
