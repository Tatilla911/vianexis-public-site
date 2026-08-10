import type { Metadata } from "next";
import { DocumentationLibrary } from "@/components/site/DocumentationLibrary";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import {
  documentationPathForLocale,
  getDocumentationCopy,
} from "@/lib/documentation/copy";
import { getContent, resolveLocale } from "@/lib/i18n";
import { locales } from "@/lib/i18n/locales";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = resolveLocale((await params).locale) as Locale;
  const copy = getDocumentationCopy(locale);
  const canonicalPath =
    locale === "hu" ? "/dokumentacio" : "/documentation";

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `${siteConfig.domain}${localePath(locale, canonicalPath)}`,
      languages: Object.fromEntries(
        locales.map((code) => [
          code,
          `${siteConfig.domain}${documentationPathForLocale(code)}`,
        ]),
      ),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: `${siteConfig.domain}${localePath(locale, canonicalPath)}`,
      siteName: siteConfig.name,
      locale: getContent(locale).meta.ogLocale,
      type: "website",
    },
  };
}

export default async function DocumentationPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const copy = getDocumentationCopy(locale);
  const content = getContent(locale);

  return (
    <>
      <Hero
        title={copy.title}
        subtitle={copy.subtitle}
        primaryCta={{
          href: localePath(locale, "/apply/company"),
          label: content.nav.requestAccess,
        }}
        secondaryCta={{
          href: localePath(locale, "/contact"),
          label: content.nav.contact,
        }}
      />
      <Section variant="muted">
        <DocumentationLibrary locale={locale} />
      </Section>
    </>
  );
}
