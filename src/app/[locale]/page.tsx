import { HomePage } from "@/components/site/HomePage";
import { resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params;
  return <HomePage locale={resolveLocale(raw) as Locale} />;
}
