import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { getContent, resolveLocale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import Link from "next/link";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PageProps) {
  const locale = resolveLocale((await params).locale) as Locale;
  const legal = getContent(locale).legal;

  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge label={legal.draftBadge} className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">{legal.privacy.title}</h1>
        <p className="mt-4 text-text/70 leading-relaxed">{legal.privacy.intro}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text/70">
          <section>
            <h2 className="text-lg font-semibold text-navy">
              {legal.privacy.controller}
            </h2>
            <p className="mt-2">ViaNexis — vianexis.eu</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-navy">{legal.privacy.data}</h2>
            <p className="mt-2">
              {locale === "hu"
                ? "Kapcsolatfelvételi adatok: név, cég, e-mail, telefon, üzenet."
                : "Contact data: name, company, email, phone, message."}
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-navy">
              {legal.privacy.purpose}
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              {legal.privacy.purposeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-navy">
              {legal.privacy.dataContactTitle}
            </h2>
            <p className="mt-2">{legal.privacy.dataContactBody}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-navy">Play Console URL</h2>
            <p className="mt-2">{legal.privacy.playUrlNote}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-navy">
              {legal.privacy.rights}
            </h2>
            <p className="mt-2">
              {locale === "hu"
                ? "Az érintettek a GDPR szerinti jogokkal élhetnek."
                : "Data subjects may exercise rights under applicable law."}
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href={localePath(locale, "/legal")}
            className="text-vianexis-blue hover:underline"
          >
            {legal.legalNotice.title}
          </Link>
          <Link
            href={localePath(locale, "/disclaimers")}
            className="text-vianexis-blue hover:underline"
          >
            {legal.disclaimersPage.title}
          </Link>
        </div>
      </div>
    </Section>
  );
}
