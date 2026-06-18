import type { Metadata } from "next";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Adatvédelem | ${siteConfig.name}`,
  description: "ViaNexis adatvédelmi tájékoztató — draft státusz, szakértői felülvizsgálat szükséges.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl">
        <LegalStatusBadge className="mb-6" />
        <h1 className="text-3xl font-bold text-navy">Adatvédelmi tájékoztató</h1>
        <p className="mt-4 text-text/70 leading-relaxed">
          Ez az adatvédelmi tájékoztató draft státuszban van. A végleges szöveg
          adatvédelmi szakértői felülvizsgálat után kerül publikálásra.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text/70">
          <section>
            <h2 className="text-lg font-semibold text-navy">Adatkezelő (draft)</h2>
            <p className="mt-2">
              ViaNexis — {siteConfig.domain.replace("https://", "")}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Kezelt adatok (draft)</h2>
            <p className="mt-2">
              A weboldalon és a pilot hozzáférés igénylés során megadott
              kapcsolattartási adatok (cégnév, név, e-mail, telefonszám stb.)
              kizárólag a kapcsolatfelvétel és a pilot hozzáférés értékelése
              céljából kerülnek kezelésre.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Adatkezelés célja (draft)</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Kapcsolatfelvétel és érdeklődés kezelése</li>
              <li>Pilot hozzáférés értékelése</li>
              <li>Platform bemutatása és céges együttműködés előkészítése</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Érintetti jogok (draft)</h2>
            <p className="mt-2">
              Az érintettek a GDPR szerinti jogokkal élhetnek. A végleges
              tájékoztató részletesen ismerteti az adatkezelés jogalapját,
              megőrzési idejét és az érintetti jogok gyakorlásának módját.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
