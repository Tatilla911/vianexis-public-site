"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
  LOCALE_SOURCE_COOKIE_NAME,
} from "@/lib/i18n/country-locale-policy";
import { localeNames, locales } from "@/lib/i18n/locales";
import { switchLocalePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { toPublicTranslationStatus } from "@/lib/i18n/translation-status";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  className?: string;
};

function persistManualLocale(locale: Locale) {
  const secure = typeof window !== "undefined" && window.location.protocol === "https:";
  const base = `path=/; max-age=${LOCALE_COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${
    secure ? "; Secure" : ""
  }`;
  document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(locale)}; ${base}`;
  document.cookie = `${LOCALE_SOURCE_COOKIE_NAME}=manual_cookie; ${base}`;
}

export function LanguageSwitcher({
  currentLocale,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const ui = resolveVisualMarketing(currentLocale).ui;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <label htmlFor="locale-select" className="sr-only">
        {ui.language}
      </label>
      <select
        id="locale-select"
        value={currentLocale}
        onChange={(event) => {
          const next = event.target.value as Locale;
          persistManualLocale(next);
          router.push(switchLocalePath(pathname, next));
        }}
        className="form-control rounded-md border border-navy-600 bg-navy-800 px-2.5 py-2 font-semibold text-white"
        aria-label={ui.language}
      >
        {locales.map((locale) => {
          const status = toPublicTranslationStatus(locale);
          const suffix = status === "reviewed" ? "" : ui.draftSuffix;
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
