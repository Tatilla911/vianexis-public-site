import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Hatóság / eFTI | ${siteConfig.name}`,
  description:
    "Authority inspection package, scope-korlátozott hozzáférés, audit és eFTI-ready foundation — nem minősített eFTI platform.",
};

export default function AuthorityEftiPage() {
  return (
    <>
      <Hero
        title="Hatóság / eFTI"
        subtitle="Ellenőrzési csomag, auditálható hozzáférés és eFTI-ready foundation — felelős, pontos megfogalmazással."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section title="Authority inspection package">
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="Csomagolt ellenőrzési hozzáférés"
            description="A fuvarhoz tartozó releváns dokumentumok és események egy ellenőrzési csomagban — QR-en keresztül megosztva."
          />
          <FeatureCard
            title="Scope / time limited access"
            description="Korlátozott hatókör és időtartam — nem nyilvános, nem korlátlan hozzáférés."
          />
          <FeatureCard
            title="Audit"
            description="Minden megosztás és hozzáférés naplózva — ki, mikor, mit adott át vagy tekintett meg."
          />
          <FeatureCard
            title="eFTI-ready foundation"
            description="Technikai alap a jövőbeli eFTI-kompatibilis folyamatok integrálásához."
          />
        </div>
      </Section>

      <Section variant="muted" title="Mit jelent az eFTI-ready foundation?">
        <div className="max-w-3xl space-y-4 text-text/70 leading-relaxed">
          <p>
            Az eFTI-ready foundation azt jelenti, hogy a ViaNexis architektúrája
            felkészült arra, hogy a jövőben eFTI-kompatibilis adatcsere- és
            dokumentumfolyamatok integrálhatók legyenek a platformba.
          </p>
          <DisclaimerBox title="Nem minősített eFTI platform">
            <ul className="list-inside list-disc space-y-2">
              <li>A ViaNexis <strong>nem minősített eFTI platform</strong>.</li>
              <li>Nem ígér hatósági elfogadást vagy engedélyt.</li>
              <li>Az eFTI-ready foundation nem egyenértékű minősítéssel.</li>
              <li>A konkrét eFTI-megfelelőség külön értékelés és integráció tárgya.</li>
            </ul>
          </DisclaimerBox>
        </div>
      </Section>
    </>
  );
}
