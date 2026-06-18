import type { Metadata } from "next";
import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Funkciók | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        title="Platformfunkciók"
        subtitle="Fuvar-, dokumentum- és ellenőrzési támogatás egy helyen — auditálható, strukturált, céges szinten konfigurálható."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
        secondaryCta={{ href: "/contact", label: "Kapcsolat" }}
      />

      <Section title="Alapmodulok">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Sofőr app" description="Mobil fuvarfolyamat, dokumentumok, aláírások, QR és offline szinkron." />
          <FeatureCard title="Céges portál" description="Fuvarok, követelmények, jogosultságok és audit egy webes felületen." />
          <FeatureCard title="Dokumentumkezelés" description="CMR, szállítólevél, számla és egyéb iratok fuvarhoz kötve." />
          <FeatureCard title="Aláírások" description="Digitális aláírás-capture, kötelező aláírási szabályok." />
          <FeatureCard title="Auditnapló" description="Eseményalapú naplózás — támogatja az ellenőrizhetőséget." />
          <FeatureCard title="Hatósági csomag" description="Scope- és időkorlátozott ellenőrzési hozzáférés QR-en keresztül." />
        </div>
      </Section>

      <Section variant="muted" title="eFTI-ready foundation">
        <DisclaimerBox>
          <p>
            A ViaNexis eFTI-ready foundation technikai felkészültséget jelent —
            <strong> nem minősített eFTI platform</strong>, és nem ígér hatósági
            elfogadást.
          </p>
        </DisclaimerBox>
      </Section>

      <Section title="További oldalak">
        <div className="flex flex-wrap gap-4">
          {[
            { href: "/driver-app", label: "Sofőr app" },
            { href: "/company-portal", label: "Céges portál" },
            { href: "/documents-signatures", label: "Dokumentumok" },
            { href: "/authority-efti", label: "Hatóság / eFTI" },
            { href: "/security-audit", label: "Biztonság és audit" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-deep-blue/10 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-vianexis-blue/30"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
