import type { Metadata } from "next";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { Section } from "@/components/site/Section";
import { aiOcrDisclaimer, platformStatus } from "@/lib/public-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Céges portál | ${siteConfig.name}`,
  description:
    "ViaNexis céges portál és platform admin: fuvarok, dokumentumkövetelmények, jogosultságok — belső tesztelés előtt.",
};

export default function CompanyPortalPage() {
  return (
    <>
      <Hero
        title="Céges portál és platform admin"
        subtitle="Fuvarozó cégek irányítási felülete: webes portál, platform admin app (regisztrációk, support, billing, céges beállítások) — fokozatos integráció alatt, nem teljes éles production."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section>
        <PlatformStatusBanner />
      </Section>

      <Section title="Portál funkciók">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Fuvarok" description="Fuvarok létrehozása, követése, státuszok és események kezelése." />
          <FeatureCard title="Dokumentumkövetelmények" description="Fuvar-, jármű- és sofőr-szintű kötelező dokumentumok meghatározása." />
          <FeatureCard title="Aláírási szabályok" description="Ki, mikor és milyen dokumentumon írhat alá — szabályozott folyamat." />
          <FeatureCard title="Jogosultságok" description="Szerepkör-alapú hozzáférés: admin, diszpécser, support és egyéni szerepek." />
          <FeatureCard title="Auditnapló" description="Események visszakereshető naplója — ki, mit, mikor tett." />
          <FeatureCard title="Rugalmas beállítások" description="Nyelv, munkafolyamatok, duty routing, raklap/göngyöleg exchange flag-ek és support hozzáférés." />
        </div>
      </Section>

      <Section variant="muted" title="Mit nem ígér a portál">
        <p className="max-w-3xl text-text/70 leading-relaxed">
          {platformStatus.disclaimer} A portál és admin app nem helyettesíti a cég
          belső folyamatait vagy jogi értékelését. {aiOcrDisclaimer.body}
        </p>
      </Section>

      <Section variant="muted" title="Céges munkafolyamatok">
        <p className="max-w-3xl text-text/70 leading-relaxed">
          Minden fuvarozó cég más struktúrával dolgozik. A ViaNexis céges portál
          lehetővé teszi a dokumentumkövetelmények, aláírási szabályok és
          jogosultságok testreszabását — anélkül, hogy a sofőr oldali folyamat
          kaotikussá válna.
        </p>
      </Section>
    </>
  );
}
