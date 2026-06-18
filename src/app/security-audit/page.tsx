import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Biztonság és audit | ${siteConfig.name}`,
  description:
    "Cég- és sofőrvédelem, dokumentációs háttér, auditálható események — automatikus jogi bizonyító erő nélkül.",
};

export default function SecurityAuditPage() {
  return (
    <>
      <Hero
        title="Védelem és audit"
        subtitle="Strukturált dokumentációs háttér, auditálható események és kontrollált hozzáférés — a cég és a sofőr védelméért."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section title="Védelem és kontroll">
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="Cég védelme"
            description="Követelmény-alapú dokumentáció, szabályozott hozzáférés és auditálható események."
          />
          <FeatureCard
            title="Sofőr védelme"
            description="Strukturált folyamat, amely csökkenti a vitás helyzeteket és támogatja az események dokumentálását."
          />
          <FeatureCard
            title="Dokumentációs háttér"
            description="Fuvarhoz kötött iratok és események egy rendszerben — visszakereshetően."
          />
          <FeatureCard
            title="Auditálható események"
            description="Ki, mit, mikor tett — időbélyeggel naplózva, visszakereshetően."
          />
        </div>
      </Section>

      <Section variant="muted" title="Mit nem ígér a platform">
        <DisclaimerBox>
          <ul className="list-inside list-disc space-y-2">
            <li>Automatikus jogi bizonyító erőt.</li>
            <li>Hatósági elfogadást vagy engedélyt.</li>
            <li>Hibátlan OCR-t, AI-feldolgozást vagy fordítást.</li>
            <li>Vészhelyzeti vagy SOS szolgáltatást.</li>
          </ul>
          <p className="mt-4">
            A ViaNexis támogatja a dokumentálást és az ellenőrizhetőséget. A
            jogi értékelés mindig az adott kontextustól, jogi kerettől és
            hatósági elvárásoktól függ.
          </p>
        </DisclaimerBox>
      </Section>
    </>
  );
}
