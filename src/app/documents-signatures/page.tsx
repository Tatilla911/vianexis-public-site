import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Dokumentumok és aláírások | ${siteConfig.name}`,
  description:
    "CMR, szállítólevél, számla, jármű- és sofőriratok — strukturált dokumentumkezelés és aláírás-capture a ViaNexis platformon.",
};

const documentTypes = [
  "CMR",
  "Szkennelt dokumentumok",
  "Szállítólevél (delivery note)",
  "Számla (invoice)",
  "Jármű- és pótkocsi iratok",
  "Sofőriratok",
];

export default function DocumentsSignaturesPage() {
  return (
    <>
      <Hero
        title="Dokumentumok és aláírások"
        subtitle="Fuvarhoz kötött, követelmény-alapú dokumentumkezelés és szabályozott aláírás-capture."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section title="Támogatott dokumentumtípusok">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentTypes.map((doc) => (
            <FeatureCard
              key={doc}
              title={doc}
              description="Fuvarhoz rendelve, státusz-követéssel és követelmény-alapú ellenőrzéssel."
            />
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Aláírások">
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="Signature capture"
            description="Digitális aláírás rögzítése mobil eszközről — fuvar eseményeihez kötve."
          />
          <FeatureCard
            title="Required signatures"
            description="Kötelező aláírások meghatározása fuvar- vagy dokumentum-szinten."
          />
          <FeatureCard
            title="Primary document"
            description="Elsődleges dokumentum kijelölése, amely összefoglalja a fuvar dokumentációs állapotát."
          />
          <FeatureCard
            title="Auditálható események"
            description="Minden aláírási esemény naplózva — visszakereshetően, időbélyeggel."
          />
        </div>
      </Section>

      <Section title="Felelős megfogalmazás">
        <DisclaimerBox>
          <p>
            A ViaNexis nem garantál hibátlan OCR-t, AI-feldolgozást vagy
            fordítást. Az aláírások és dokumentumok nem jelentenek automatikus
            jogi bizonyító erőt — a jogi értékelés az adott kontextustól függ.
          </p>
        </DisclaimerBox>
      </Section>
    </>
  );
}
