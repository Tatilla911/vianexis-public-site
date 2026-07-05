import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { LocaleHtml } from "@/components/site/LocaleHtml";
import { getContent, locales, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

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
  const content = getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `${siteConfig.domain}${localePath(locale)}`,
      languages: {
        hu: `${siteConfig.domain}/hu`,
        en: `${siteConfig.domain}/en`,
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `${siteConfig.domain}${localePath(locale)}`,
      siteName: siteConfig.name,
      locale: content.meta.ogLocale,
      alternateLocale: [content.meta.ogAlternateLocale],
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();

  return (
    <>
      <LocaleHtml locale={raw as Locale} />
      <Header locale={raw as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={raw as Locale} />
    </>
  );
}
