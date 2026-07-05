import { ModuleSubpage } from "@/components/site/ModuleSubpage";
import { resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CompanyPortalPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  return <ModuleSubpage locale={locale} moduleId="company-admin" />;
}
