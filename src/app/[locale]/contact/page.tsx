import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ContactLeadForm } from "@/components/site/ContactLeadForm";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const content = getContent(locale);

  return (
    <>
      <Hero
        title={content.contactForm.title}
        subtitle={content.contactForm.subtitle}
        primaryCta={{
          href: localePath(locale, "/pilot"),
          label: content.nav.pilot,
        }}
      />
      <Section variant="muted">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <p className="leading-relaxed text-neutral-grey">
              {content.home.contact.body}
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-lg font-semibold text-cyan-accent hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            <DisclaimerBox>
              <p>{content.home.contact.consentNote}</p>
            </DisclaimerBox>
            <Link
              href={localePath(locale, "/privacy")}
              className="text-sm font-semibold text-gold-core hover:underline"
            >
              {content.footer.privacy}
            </Link>
          </div>
          <div className="lg:col-span-3">
            <ContactLeadForm locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
