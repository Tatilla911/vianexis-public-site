import type { Metadata } from "next";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Felhasználási feltételek | ${siteConfig.name}`,
  description: "ViaNexis felhasználási feltételek — draft státusz, szakértői felülvizsgálat szükséges.",
};

export default function TermsPage() {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">Felhasználási feltételek</h1>
        <p className="mt-4 text-text/70 leading-relaxed">
          Ez a dokumentum draft státuszban van. A végleges ÁSZF jogi szakértői
          felülvizsgálat után kerül publikálásra.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text/70">
          <section>
            <h2 className="text-lg font-semibold text-navy">A szolgáltatás jellege (draft)</h2>
            <p className="mt-2">
              A ViaNexis digitális fuvar-, dokumentum- és ellenőrzési
              támogatást nyújt. A platform eFTI-ready foundation —
              nem minősített eFTI platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Pilot hozzáférés (draft)</h2>
            <p className="mt-2">
              A pilot vagy céges hozzáférés aktiválása nem automatikus. A
              ViaNexis csapata értékeli az igényléseket és egyedi döntést hoz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Felelősségkorlátozás (draft)</h2>
            <p className="mt-2">
              A ViaNexis nem ígér hatósági elfogadást, automatikus jogi
              bizonyító erőt, hibátlan OCR/AI/fordítást vagy vészhelyzeti/SOS
              szolgáltatást. A felhasználó felelős a platform használatával
              kapcsolatos jogi megfelelésért.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Kapcsolódó dokumentumok</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li><a href="/privacy" className="text-vianexis-blue hover:underline">Adatvédelmi tájékoztató</a></li>
              <li><a href="/legal" className="text-vianexis-blue hover:underline">Jogi információk</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Section>
  );
}
