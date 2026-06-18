import type { Metadata } from "next";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Céges portál | ${siteConfig.name}`,
  description:
    "ViaNexis céges portál: fuvarok, dokumentumkövetelmények, aláírási szabályok, jogosultságok és auditnapló.",
};

export default function CompanyPortalPage() {
  return (
    <>
      <Hero
        title="Céges portál"
        subtitle="Fuvarozó cégek irányítási felülete: fuvarok, követelmények, jogosultságok és audit — rugalmasan konfigurálható."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section title="Portál funkciók">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Fuvarok" description="Fuvarok létrehozása, követése, státuszok és események kezelése." />
          <FeatureCard title="Dokumentumkövetelmények" description="Fuvar-, jármű- és sofőr-szintű kötelező dokumentumok meghatározása." />
          <FeatureCard title="Aláírási szabályok" description="Ki, mikor és milyen dokumentumon írhat alá — szabályozott folyamat." />
          <FeatureCard title="Jogosultságok" description="Szerepkör-alapú hozzáférés: admin, diszpécser, support és egyéni szerepek." />
          <FeatureCard title="Auditnapló" description="Események visszakereshető naplója — ki, mit, mikor tett." />
          <FeatureCard title="Rugalmas beállítások" description="Nyelv, munkafolyamatok, duty routing és support hozzáférés." />
        </div>
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
