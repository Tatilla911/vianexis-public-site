import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { LocaleHtml } from "@/components/site/LocaleHtml";
import { TranslationReviewBanner } from "@/components/site/TranslationReviewBanner";
import { getContent, locales, resolveLocale } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/types";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  return buildLocaleMetadata(locale);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();

  const content = getContent(raw as Locale);

  return (
    <>
      <LocaleHtml locale={raw as Locale} />
      {content.translationUnderReviewNotice ? (
        <div className="border-b border-amber-100 bg-amber-50/80">
          <div className="container mx-auto px-4 py-2">
            <TranslationReviewBanner notice={content.translationUnderReviewNotice} />
          </div>
        </div>
      ) : null}
      <Header locale={raw as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={raw as Locale} />
    </>
  );
}
