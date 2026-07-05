"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/types";

const RTL_LOCALES: Locale[] = ["ar"];

export function LocaleHtml({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
