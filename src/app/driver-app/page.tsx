import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Sofőr app | ${siteConfig.name}`,
  description:
    "ViaNexis sofőr app: fuvarinformáció, dokumentumfeltöltés, aláírás, hatósági QR, offline szinkron és incidensjelentés.",
};

export default function DriverAppPage() {
  return (
    <>
      <Hero
        title="Sofőr app"
        subtitle="A sofőr számára tervezett mobil folyamat: fuvar, dokumentum, aláírás és esemény — strukturáltan, fuvarhoz kötve."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
      />

      <Section title="Mit kap a sofőr?">
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard title="Fuvar és feladatok" description="Fuvaradatok, státuszok és teendők egy mobil felületen." />
          <FeatureCard title="Dokumentumfeltöltés" description="Fénykép, scan vagy fájl — a fuvar dokumentációs követelményei szerint." />
          <FeatureCard title="Aláírás rögzítése" description="Digitális aláírás-capture átvételhez, leadáshoz vagy egyéb eseményhez." />
          <FeatureCard title="Hatósági QR" description="Ellenőrzési csomag megosztása korlátozott, auditált hozzáféréssel." />
          <FeatureCard title="Offline szinkron" description="Alapvető működés kapcsolat nélkül, szinkron amikor újra elérhető a hálózat." />
          <FeatureCard title="Incidensjelentés" description="Strukturált eseményrögzítés — nem vészhelyzeti vagy SOS szolgáltatás." />
        </div>
      </Section>

      <Section variant="muted" title="Korlátok és felelős megfogalmazás">
        <DisclaimerBox>
          <ul className="list-inside list-disc space-y-2">
            <li>Nem garantál hibátlan OCR-t, AI-feldolgozást vagy fordítást.</li>
            <li>Nem nyújt vészhelyzeti vagy SOS szolgáltatást.</li>
            <li>Az aláírások és dokumentumok nem jelentenek automatikus jogi bizonyító erőt.</li>
            <li>A hatósági QR hozzáférés scope- és időkorlátozott — nem nyilvános megosztás.</li>
          </ul>
        </DisclaimerBox>
      </Section>
    </>
  );
}
