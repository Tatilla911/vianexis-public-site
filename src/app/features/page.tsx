import type { Metadata } from "next";
import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { Section } from "@/components/site/Section";
import {
  adrDisclaimer,
  aiOcrDisclaimer,
  eftiDisclaimer,
  heroContent,
  platformModules,
} from "@/lib/public-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Funkciók | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        title="Platformmodulok"
        subtitle="Fuvarbizonyíték, dokumentumok, üzenetek, értesítések, raklap/göngyöleg, ADR segédlet és audit — modulonként, felelős megfogalmazással."
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      <Section>
        <PlatformStatusBanner />
      </Section>

      <Section title="Modulok">
        <div className="grid gap-6 lg:grid-cols-2">
          {platformModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Kötelező disclaimerek">
        <div className="grid gap-4 lg:grid-cols-3">
          <DisclaimerBox title={adrDisclaimer.title}>
            <p>{adrDisclaimer.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={aiOcrDisclaimer.title}>
            <p>{aiOcrDisclaimer.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={eftiDisclaimer.title}>
            <p>{eftiDisclaimer.body}</p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section title="További oldalak">
        <div className="flex flex-wrap gap-4">
          {[
            { href: "/driver-app", label: "Sofőr app" },
            { href: "/company-portal", label: "Céges portál" },
            { href: "/documents-signatures", label: "Dokumentumok" },
            { href: "/authority-efti", label: "Hatóság / eFTI" },
            { href: "/security-audit", label: "Biztonság és audit" },
            { href: "/contact", label: "Kapcsolat" },
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
