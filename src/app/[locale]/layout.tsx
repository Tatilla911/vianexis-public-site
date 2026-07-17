import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { LocaleHtml } from "@/components/site/LocaleHtml";
import { TranslationReviewBanner } from "@/components/site/TranslationReviewBanner";
import { getContent, locales, resolveLocale } from "@/lib/i18n";
import { buildLocaleMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/types";
import { resolveVisualMarketing } from "@/lib/i18n/visual-marketing";

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
  const visual = resolveVisualMarketing(raw);

  return (
    <>
      <LocaleHtml locale={raw as Locale} />
      <a href="#main-content" className="skip-link">
        {visual.skipToContent}
      </a>
      {content.translationUnderReviewNotice ? (
        <div className="border-b border-amber-100 bg-amber-50/80">
          <div className="container-site py-2">
            <TranslationReviewBanner notice={content.translationUnderReviewNotice} />
          </div>
        </div>
      ) : null}
      <Header locale={raw as Locale} />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={raw as Locale} />
    </>
  );
}
