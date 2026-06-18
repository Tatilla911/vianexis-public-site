import type { Metadata } from "next";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Jogi információk | ${siteConfig.name}`,
  description: "ViaNexis jogi információk — draft státusz, szakértői felülvizsgálat szükséges.",
};

export default function LegalPage() {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">Jogi információk</h1>
        <p className="mt-4 text-text/70 leading-relaxed">
          Ez az oldal draft státuszban van. A végleges jogi szövegek szakértői
          felülvizsgálat után kerülnek publikálásra.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text/70">
          <section>
            <h2 className="text-lg font-semibold text-navy">Platform jellege</h2>
            <p className="mt-2">
              A ViaNexis digitális fuvar-, dokumentum- és ellenőrzési
              támogatást nyújt fuvarozó cégeknek. A platform eFTI-ready
              foundation — <strong>nem minősített eFTI platform</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Felelősségkorlátozás (draft)</h2>
            <p className="mt-2">
              A ViaNexis nem ígér hatósági elfogadást, automatikus jogi
              bizonyító erőt, hibátlan OCR/AI/fordítást vagy vészhelyzeti/SOS
              szolgáltatást. A platform támogatja a dokumentálást és az
              ellenőrizhetőséget — a jogi értékelés az adott kontextustól függ.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Kapcsolódó dokumentumok</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li><a href="/privacy" className="text-vianexis-blue hover:underline">Adatvédelmi tájékoztató</a></li>
              <li><a href="/terms" className="text-vianexis-blue hover:underline">Felhasználási feltételek</a></li>
            </ul>
          </section>
        </div>
      </div>
    </Section>
  );
}
