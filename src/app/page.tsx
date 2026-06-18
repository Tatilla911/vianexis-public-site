import Link from "next/link";
import { DisclaimerBox } from "@/components/site/DisclaimerBox";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Hero } from "@/components/site/Hero";
import { PilotAccessForm } from "@/components/site/PilotAccessForm";
import { Section } from "@/components/site/Section";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Kontrollált fuvarfolyamat. Rendezett dokumentumok. Auditálható döntések."
        subtitle="ViaNexis mint digitális fuvar-, dokumentum- és ellenőrzési támogatás."
        primaryCta={{ href: "/pilot", label: "Céges hozzáférés igénylése" }}
        secondaryCta={{ href: "/features", label: "Funkciók megtekintése" }}
      />

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
            description="Átvétel, leadás, incidens — anélkül, hogy strukturált auditnapló lenne, nehéz visszakeresni, mi történt."
          />
          <FeatureCard
            title="Hatósági ellenőrzési nehézségek"
            description="Ellenőrzéskor nehéz gyorsan, rendezett csomagban átadni a releváns dokumentumokat és eseményeket."
          />
        </div>
      </Section>

      <Section
        variant="muted"
        title="ViaNexis megoldás"
        subtitle="Egy platform, amely összekapcsolja a sofőr folyamatot, a céges irányítást és az auditálható dokumentációt."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Sofőr app"
            description="Fuvarinformáció, dokumentumfeltöltés, aláírás, hatósági QR és offline szinkron — a sofőr számára."
          />
          <FeatureCard
            title="Céges portál"
            description="Fuvarok, dokumentumkövetelmények, aláírási szabályok, jogosultságok és auditnapló egy helyen."
          />
          <FeatureCard
            title="Dokumentumkezelés"
            description="CMR, szállítólevél, számla, jármű- és sofőriratok — strukturált, fuvarhoz kötött kezelés."
          />
          <FeatureCard
            title="Audit és nyomon követés"
            description="Eseményalapú naplózás, amely támogatja az ellenőrizhetőséget — nem helyettesíti a jogi bizonyítást."
          />
          <FeatureCard
            title="Jogosultságok"
            description="Szerepkör-alapú hozzáférés, céges beállítások és rugalmas munkafolyamatok."
          />
          <FeatureCard
            title="eFTI-ready foundation"
            description="Felkészült alap a jövőbeli eFTI-kompatibilis folyamatokhoz — nem minősített eFTI platform."
          />
        </div>
      </Section>

      <Section
        id="driver-app"
        title="Sofőr app"
        subtitle="Mit kap a sofőr, és milyen korlátokkal dolgozik."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <FeatureCard
              title="Fuvarinformáció és feladatok"
              description="A sofőr a fuvarhoz tartozó adatokat és teendőket egy helyen látja."
            />
            <FeatureCard
              title="Dokumentumfeltöltés"
              description="Fénykép, scan vagy fájl — a fuvarhoz rendelve, követelmények szerint."
            />
            <FeatureCard
              title="Aláírás rögzítése"
              description="Digitális aláírás-capture a fuvar eseményeihez kötve."
            />
            <FeatureCard
              title="Hatósági QR"
              description="Ellenőrzési csomag megosztására szolgáló, idő- és scope-korlátozott hozzáférés."
            />
          </div>
          <div className="space-y-4">
            <FeatureCard
              title="Offline szinkron"
              description="Alapvető működés kapcsolat nélkül is, szinkronizálás amikor újra online."
            />
            <FeatureCard
              title="Incidensjelentés"
              description="Strukturált eseményrögzítés — nem vészhelyzeti vagy SOS szolgáltatás."
            />
            <DisclaimerBox title="Korlátok">
              <p>
                A sofőr app nem garantál hibátlan OCR-t, AI-feldolgozást vagy
                fordítást. Nem nyújt vészhelyzeti segítséget. Az aláírások és
                dokumentumok nem jelentenek automatikus jogi bizonyító erőt.
              </p>
            </DisclaimerBox>
            <Link
              href="/driver-app"
              className="inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
            >
              Részletek a sofőr appról →
            </Link>
          </div>
        </div>
      </Section>

      <Section
        variant="muted"
        id="company-portal"
        title="Céges portál"
        subtitle="Fuvarozó cégek számára: irányítás, követelmények és auditálhatóság."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Fuvarok" description="Fuvarok nyomon követése, státuszok és események." />
          <FeatureCard title="Dokumentumkövetelmények" description="Fuvarhoz, járműhöz vagy sofőrhöz kötött kötelező iratok." />
          <FeatureCard title="Aláírási szabályok" description="Ki, mikor és milyen dokumentumon írhat alá." />
          <FeatureCard title="Jogosultságok" description="Szerepkör-alapú hozzáférés diszpécser, admin és egyéb szerepekhez." />
          <FeatureCard title="Auditnapló" description="Események visszakereshető naplója — támogatja, de nem helyettesíti a jogi bizonyítást." />
          <FeatureCard title="Rugalmas beállítások" description="Céges munkafolyamatok, nyelv, duty routing és support hozzáférés." />
        </div>
        <Link
          href="/company-portal"
          className="mt-6 inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
        >
          Részletek a céges portálról →
        </Link>
      </Section>

      <Section
        id="documents"
        title="Dokumentumok és aláírások"
        subtitle="Strukturált kezelés a fuvar teljes dokumentációs láncához."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "CMR",
            "Szkennelt dokumentumok",
            "Szállítólevél",
            "Számla",
            "Jármű / pótkocsi iratok",
            "Sofőriratok",
            "Aláírás rögzítése",
            "Kötelező aláírások",
          ].map((item) => (
            <FeatureCard key={item} title={item} description="Fuvarhoz kötött, követelmény-alapú kezelés és nyomon követés." />
          ))}
        </div>
        <div className="mt-6">
          <FeatureCard
            title="Elsődleges dokumentum"
            description="Minden fuvarhoz meghatározható primary document, amely összefoglalja a fuvar dokumentációs állapotát."
            className="max-w-2xl"
          />
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
            description="Strukturált folyamat, amely csökkenti a vitás helyzeteket és támogatja az események dokumentálását."
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
        id="authority-efti"
        title="Hatóság / eFTI"
        subtitle="Ellenőrzési csomag és eFTI-ready foundation — felelős megfogalmazással."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            title="Authority inspection package"
            description="Hatósági ellenőrzéshez szükséges dokumentumok és események csomagolt, scope- és időkorlátozott megosztása."
          />
          <FeatureCard
            title="Scope / time limited access"
            description="QR-alapú, korlátozott hozzáférés — nem nyilvános, nem korlátlan."
          />
          <FeatureCard
            title="Audit"
            description="Hozzáférések és megosztások naplózása, visszakereshető eseményekkel."
          />
          <FeatureCard
            title="eFTI-ready foundation"
            description="Felkészült technikai alap a jövőbeli eFTI-kompatibilis folyamatok integrálásához."
          />
        </div>
        <DisclaimerBox className="mt-6" title="Fontos">
          <p>
            A ViaNexis <strong>nem minősített eFTI platform</strong>. Nem ígér
            hatósági elfogadást. Az eFTI-ready foundation azt jelenti, hogy a
            rendszer architektúrája felkészült a jövőbeli követelmények
            integrálására — ez nem egyenértékű minősítéssel vagy engedéllyel.
          </p>
        </DisclaimerBox>
        <Link
          href="/authority-efti"
          className="mt-4 inline-flex text-sm font-semibold text-vianexis-blue hover:underline"
        >
          Részletek a hatósági / eFTI funkciókról →
        </Link>
      </Section>

      <Section
        variant="muted"
        title="Beállítások és rugalmasság"
        subtitle="Minden cég más — a platform alkalmazkodik."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Szerepkörök és jogosultságok", desc: "Admin, diszpécser, sofőr és egyéni szerepek." },
            { title: "Dokumentumkövetelmények", desc: "Fuvar-, jármű- és sofőr-szintű kötelező iratok." },
            { title: "Aláírási szabályok", desc: "Ki írhat alá, milyen sorrendben, milyen dokumentumon." },
            { title: "Nyelv", desc: "Többnyelvű felület és dokumentumkezelés támogatása." },
            { title: "Céges munkafolyamatok", desc: "Fuvar- és duty routing testreszabása." },
            { title: "Support hozzáférés", desc: "Kontrollált támogatói hozzáférés auditálható módon." },
          ].map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.desc} />
          ))}
        </div>
      </Section>

      <Section
        id="pilot"
        title="Pilot hozzáférés"
        subtitle="Kontrollált céges hozzáférés-igénylés — nem automatikus éles regisztráció."
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-text/70 leading-relaxed">
              A ViaNexis pilot program célja, hogy kiválasztott fuvarozó cégek
              kontrollált körülmények között ismerhessék meg a platformot. Az
              igénylés után csapatunk felveszi Önnel a kapcsolatot — az
              aktiválás nem automatikus.
            </p>
            <DisclaimerBox className="mt-6">
              <p>
                A rendszer dokumentumokat, sofőrfolyamatokat, céges adatokat és
                jogosultságokat kezel. Ezért minden hozzáférés egyedi
                értékelésen megy keresztül.
              </p>
            </DisclaimerBox>
          </div>
          <div className="lg:col-span-3">
            <PilotAccessForm />
          </div>
        </div>
      </Section>

      <Section variant="muted" id="contact" title="Kapcsolat">
        <div className="max-w-xl">
          <p className="text-text/70 leading-relaxed">
            Kérdése van a ViaNexis platformról, pilot hozzáférésről vagy
            céges bevezetésről? Vegye fel velünk a kapcsolatot.
          </p>
          <p className="mt-4">
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
            Kapcsolati oldal →
          </Link>
        </div>
      </Section>
    </>
  );
}
