import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { ModuleCard } from "@/components/site/ModuleCard";
import { PilotAccessForm } from "@/components/site/PilotAccessForm";
import { PlatformStatusBanner } from "@/components/site/PlatformStatusBanner";
import { Section } from "@/components/site/Section";
import {
  adrDisclaimer,
  aiOcrDisclaimer,
  eftiDisclaimer,
  heroContent,
  platformModules,
} from "@/lib/public-content";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const messagingModule = platformModules.find(
    (m) => m.id === "messaging-notifications",
  );
  const palletModule = platformModules.find((m) => m.id === "pallet-packaging");

  return (
    <>
      <Hero
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      <Section>
        <PlatformStatusBanner />
      </Section>

      <Section
        id="problem"
        title="A mindennapi logisztikai kihívások"
        subtitle="Amikor a dokumentumok, aláírások és események nem egy helyen vannak, a bizonyíthatóság és az ellenőrizhetőség sérül."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Szétszórt dokumentumok"
            description="Fuvarokhoz tartozó iratok e-mailben, chatben, papíron — nehezen összekapcsolható a tényleges eseményekkel."
          />
          <FeatureCard
            title="Elveszett aláírások"
            description="Hiányzó vagy későn érkező aláírások késleltetik a lezárást és növelik a vitás helyzetek kockázatát."
          />
          <FeatureCard
            title="Nehezen bizonyítható események"
            description="Átvétel, leadás, raklapcsere, incidens — strukturált napló nélkül nehéz visszakeresni, mi történt."
          />
          <FeatureCard
            title="Többnyelvű csapat"
            description="Üzenetek és utasítások félreértése napi szinten — az eredeti szöveg megőrzése és ellenőrzött fordítás szükséges."
          />
        </div>
      </Section>

      <Section
        variant="muted"
        id="modules"
        title="Platformmodulok"
        subtitle="Minden modulnál: cél, app-side foundation, backend/admin dependency — jogilag óvatos megfogalmazással."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {platformModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </Section>

      {palletModule && (
        <Section
          id="pallet-packaging"
          title="Raklapcsere és göngyölegcsere"
          subtitle="Külön modulok, cégesen kapcsolhatók — offline mentéssel és audit irányba."
        >
          <ModuleCard module={palletModule} className="max-w-3xl" />
        </Section>
      )}

      {messagingModule && (
        <Section
          variant="muted"
          id="notifications"
          title="Üzenetek és értesítések"
          subtitle="App-oldali foundation kész — production push külön backend dependency."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <ModuleCard module={messagingModule} />
            <div className="space-y-4">
              <FeatureCard
                title="Értesítési eseménytípusok"
                description="Új üzenet, fuvarmódosítás, dokumentum teendő, sync probléma — app-oldali foundation alapján."
              />
              <FeatureCard
                title="Tap routing és PIN"
                description="Értesítésből célképernyő megnyitható; PIN zárolás után deep link csak sikeres feloldás után."
              />
              <FeatureCard
                title="Privacy-safe lockscreen"
                description="Alapértelmezésben nem jelenik meg teljes dokumentum- vagy üzenettartalom a zárolási képernyőn."
              />
              <DisclaimerBox title="Backend dependency">
                <p>
                  Production push (FCM/APNs), device token regisztráció és
                  szerveroldali küldés még nem éles — külön bekötési folyamat
                  szükséges. A jelenlegi foundation helyi és hook-alapú
                  értesítésekre készült.
                </p>
              </DisclaimerBox>
            </div>
          </div>
        </Section>
      )}

      <Section id="disclaimers" title="Felelős használat — fontos tudnivalók">
        <div className="grid gap-4 lg:grid-cols-3">
          <DisclaimerBox title={adrDisclaimer.title}>
            <p>{adrDisclaimer.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={aiOcrDisclaimer.title}>
            <p>{aiOcrDisclaimer.body}</p>
          </DisclaimerBox>
          <DisclaimerBox title={eftiDisclaimer.title}>
            <p>{eftiDisclaimer.body}</p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section
        variant="dark"
        id="security"
        title="Védelem és kontroll"
        subtitle="A cég és a sofőr védelme strukturált dokumentációs háttérrel."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="Cég védelme"
            description="Követelmény-alapú dokumentáció, auditálható események és kontrollált hozzáférés."
          />
          <FeatureCard
            title="Sofőr védelme"
            description="Strukturált folyamat, amely támogatja az események dokumentálását vitás helyzetekben."
          />
          <FeatureCard
            title="Dokumentációs háttér"
            description="Fuvarhoz kötött iratok és események egy rendszerben — visszakereshetően."
          />
          <FeatureCard
            title="Auditálható események"
            description="Ki, mit, mikor tett — naplózva és visszakereshetően."
          />
        </div>
        <div className="mt-6">
          <DisclaimerBox title="Nem ígéret">
            <p className="text-white/80">
              A ViaNexis nem ígér automatikus jogi bizonyító erőt. A platform
              támogatja a dokumentálást és az ellenőrizhetőséget, de a jogi
              értékelés mindig az adott kontextustól és jogi kerettől függ.
            </p>
          </DisclaimerBox>
        </div>
      </Section>

      <Section
        variant="muted"
        id="pilot"
        title="Kapcsolat és belső tesztelés"
        subtitle="Kontrollált céges hozzáférés-igénylés — nem automatikus éles regisztráció, nincs nyilvános Play letöltés."
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-text/70 leading-relaxed">
              A ViaNexis sofőr app Google Play belső tesztelés előkészítés
              alatt áll. A release readiness és Samsung UAT folyamatban. Ha
              érdekli a platform vagy pilot hozzáférés, vegye fel velünk a
              kapcsolatot — az aktiválás nem automatikus.
            </p>
            <DisclaimerBox className="mt-6">
              <p>
                A rendszer dokumentumokat, sofőrfolyamatokat, céges adatokat és
                jogosultságokat kezel. Ezért minden hozzáférés egyedi
                értékelésen megy keresztül.
              </p>
            </DisclaimerBox>
            <p className="mt-6">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-lg font-semibold text-vianexis-blue hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
            >
              Kapcsolatfelvétel →
            </Link>
          </div>
          <div className="lg:col-span-3">
            <PilotAccessForm />
          </div>
        </div>
      </Section>
    </>
  );
}
