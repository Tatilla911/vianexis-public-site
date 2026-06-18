import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Kapcsolat | ${siteConfig.name}`,
  description: `Lépjen kapcsolatba a ViaNexis csapattal: ${siteConfig.contactEmail}`,
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Kapcsolat"
        subtitle="Kérdése van a ViaNexis platformról, pilot hozzáférésről vagy céges bevezetésről?"
        primaryCta={{ href: "/pilot", label: "Pilot hozzáférés igénylése" }}
      />

      <Section>
        <div className="max-w-xl space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-navy">E-mail</h2>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-2 inline-block text-vianexis-blue hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Weboldal</h2>
            <p className="mt-2 text-text/70">{siteConfig.domain}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy">Pilot hozzáférés</h2>
            <p className="mt-2 text-text/70 leading-relaxed">
              Céges hozzáférés igényléséhez töltse ki a pilot űrlapot. Az
              aktiválás nem automatikus.
            </p>
            <Link
              href="/pilot"
              className="mt-3 inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
            >
              Pilot űrlap →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
