import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { Hero } from "@/components/site/Hero";
import { PilotAccessForm } from "@/components/site/PilotAccessForm";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Pilot hozzáférés | ${siteConfig.name}`,
  description:
    "Kontrollált céges hozzáférés-igénylés a ViaNexis platformhoz — nem automatikus éles regisztráció.",
};

export default function PilotPage() {
  return (
    <>
      <Hero
        title="Pilot hozzáférés"
        subtitle="Kontrollált céges hozzáférés-igénylés — a ViaNexis csapata értékeli és felveszi Önnel a kapcsolatot."
        primaryCta={{ href: "#pilot-form", label: "Űrlap kitöltése" }}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <DisclaimerBox>
            <p>
              A pilot vagy céges hozzáférés aktiválása <strong>nem automatikus</strong>.
              A rendszer dokumentumokat, sofőrfolyamatokat, céges adatokat és
              jogosultságokat kezel — ezért minden igénylés egyedi értékelésen
              megy keresztül.
            </p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section variant="muted" title="Hozzáférés igénylése">
        <div className="mx-auto max-w-2xl">
          <PilotAccessForm id="pilot-form" />
        </div>
      </Section>
    </>
  );
}
