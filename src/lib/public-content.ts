export const heroContent = {
  title: "ViaNexis — digitális fuvarbizonyíték és sofőrplatform",
  subtitle:
    "Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben.",
  primaryCta: { href: "/contact", label: "Kapcsolatfelvétel" },
  secondaryCta: {
    href: "/pilot",
    label: "Belső tesztelés előkészítés alatt",
  },
} as const;

export const platformStatus = {
  title: "Aktuális állapot",
  items: [
    "Google Play belső tesztelés előkészítés alatt — nem nyilvános store letöltés.",
    "A sofőr app release readiness és Samsung UAT folyamatban.",
    "Platform integráció: backend E2E zöld, admin app céges exchange beállítások alap, production push és partneri integrációk fokozatosan.",
  ],
  disclaimer:
    "A ViaNexis nem állítja, hogy a rendszer éles, tanúsított vagy minden országban hivatalosan elfogadott platform.",
} as const;

export type PlatformModule = {
  id: string;
  title: string;
  goal: string;
  appFoundation: string;
  backendDependency?: string;
  disclaimer?: string;
};

export const platformModules: PlatformModule[] = [
  {
    id: "driver-app",
    title: "Sofőr app",
    goal: "A sofőr fuvarhoz kötött feladatokat, dokumentumokat és eseményeket egy mobil felületen kezelje — online és offline is.",
    appFoundation:
      "Fuvarlista és részletek, dokumentumfeltöltés, aláírás-capture, checklist, incidensrögzítés, offline mentés és szinkron, PIN-védett munkamenet.",
    backendDependency:
      "Éles API, tenant scope, fuvar- és dokumentum-szinkron, céges beállítások feloldása.",
  },
  {
    id: "company-admin",
    title: "Céges irányítás / Admin",
    goal: "A fuvarozó cég fuvarokat, felhasználókat, jogosultságokat és munkafolyamatokat egy portálon irányítson.",
    appFoundation:
      "Sofőr oldali adatok és műveletek a céges szabályoknak megfelelően jelennek meg.",
    backendDependency:
      "Webes céges portál, platform admin app (regisztrációk, support, billing, céges exchange flag-ek), szerepkörök, fuvarkezelés, dokumentumkövetelmények.",
  },
  {
    id: "cmr-documents",
    title: "Digitális CMR és dokumentumok",
    goal: "Fuvarhoz kötött dokumentumok — CMR, szállítólevél, számla, jármű- és sofőriratok — strukturáltan kezelhetők legyenek.",
    appFoundation:
      "Dokumentumfeltöltés, scan/fénykép, fuvarhoz rendelés, követelmény-alapú teendők, primary document koncepció.",
    backendDependency:
      "Dokumentum tárolás, metaadat, aláírási szabályok, hatósági megosztás scope-korlátozással.",
    disclaimer:
      "A digitális dokumentum nem jelent automatikus jogi bizonyító erőt. Az elfogadás országonként és ügyfelenként eltérhet.",
  },
  {
    id: "completed-package",
    title: "Lezárt fuvar csomag",
    goal: "A teljesített fuvar bizonyítékai — dokumentumok, események, aláírások — összefoglalhatók exportálható csomagban.",
    appFoundation:
      "Fuvar lezárása, helyi adatok és szinkronizált események alapja a csomag összeállításához.",
    backendDependency:
      "Completed trip package generálás, PDF export, audit export. Egyes szekciók (pl. raklap/göngyöleg PDF) még dependency állapotban.",
    disclaimer:
      "A csomag támogatja a dokumentálást; nem helyettesíti a cég jogi értékelését vagy hatósági eljárását.",
  },
  {
    id: "messaging-notifications",
    title: "Üzenetek és értesítések",
    goal: "Fuvarhoz kötött kommunikáció és fontos események jelzése a sofőr számára — diszpécser és cég felé is visszakövethetően.",
    appFoundation:
      "Üzenetlista, fuvarhoz kötött thread, app-oldali értesítési foundation (permission flow, payload modell, tap routing, PIN utáni deep link). Használható: új üzenet, fuvarmódosítás, dokumentum teendő, sync probléma.",
    backendDependency:
      "Production push (FCM/APNs), device token regisztráció, szerveroldali küldés és audit — külön dependency, még nem éles.",
    disclaimer:
      "Az értesítésből a célképernyő megnyitható PIN után. A lockscreen szöveg alapból privacy-safe. Production push nem állítja, hogy minden esemény azonnal megérkezik.",
  },
  {
    id: "pallet-packaging",
    title: "Raklapcsere és göngyölegcsere",
    goal: "Raklap- és göngyölegcserék stop szinten rögzíthetők mennyiséggel, hiánnyal, sérüléssel és vitával — audit és bizonyítékcsomag irányba.",
    appFoundation:
      "Külön raklapcsere és göngyöleg modul a fuvar részletein. Cégesen kapcsolható. A cég előre megadhatja a cseretárgyakat; a sofőr egyedi göngyöleget is felvehet, ha engedélyezett. Offline mentés és későbbi szinkron.",
    backendDependency:
      "Exchange settings API kész; admin app céges kapcsolók alap; rekord szinkron; completed package PDF szekció — utóbbi dependency, nem teljesen kész.",
    disclaimer:
      "A PDF evidence szekció a lezárt fuvar csomagban még nem minden esetben teljes. A rögzítés támogatja a vitás helyzet dokumentálását, de nem dönt vitában.",
  },
  {
    id: "adr-border",
    title: "ADR és határ / vám segédletek",
    goal: "A sofőr és diszpécser gyors segédinformációt kapjon ADR és határ/vám kontextusban — hivatalos forrás ellenőrzése mellett.",
    appFoundation:
      "ADR tájékoztató, UN szám keresés, alagút kód segédlet, határ/vám metaadat és dokumentum-hivatkozások fuvarhoz kötve.",
    backendDependency:
      "ADR adatbázis frissítés, országspecifikus szabály metaadat, határ checkpoint adatok.",
    disclaimer:
      "ADR és alagút adatok segédinformációk. A hivatalos forrás, táblázás és aktuális helyi szabály mindig ellenőrizendő. Az app nem helyettesíti a jogszabályt, oktatást, vállalati ADR felelőst vagy hatósági döntést.",
  },
  {
    id: "truck-map",
    title: "Tehergépkocsi térkép alap",
    goal: "Flotta és fuvar áttekintés térképen — operatív orientáció, nem hivatalos navigáció helyett.",
    appFoundation:
      "Térkép alapú áttekintés, fuvar és jármű kontextus megjelenítése.",
    backendDependency:
      "Telematika provider integráció, routing provider stratégia, élő pozíció — fokozatos bekötés.",
    disclaimer:
      "A térkép és útvonal nem garantálja a jogszabályi korlátozások, súlykorlátok vagy engedélyek betartását.",
  },
  {
    id: "multilingual",
    title: "Többnyelvű működés",
    goal: "Többnyelvű csapatok egy platformon dolgozhassanak — felület, üzenetek és dokumentum-metaadat támogatással.",
    appFoundation:
      "Sofőr app többnyelvű felület (több tucat locale alap), eredeti üzenet megőrzése, fordítás segítségként.",
    backendDependency:
      "Portál és public site locale bővítés, fordítási review workflow, verified vs draft locale jelölés.",
    disclaimer:
      "A gépi vagy AI fordítás segédeszköz; emberi ellenőrzés szükséges. Az eredeti dokumentum és üzenet marad elsődleges.",
  },
  {
    id: "audit-support",
    title: "Audit és support hozzáférés",
    goal: "Ki mit mikor tett — visszakereshető napló; kontrollált support hozzáférés hibaelhárításhoz.",
    appFoundation:
      "Eseményrögzítés fuvar és dokumentum műveleteknél; support session auditálható módon.",
    backendDependency:
      "Audit export, support access policy, enterprise jogosultság-mátrix, napló megőrzési szabályok.",
    disclaimer:
      "Az auditnapló támogatja az ellenőrizhetőséget; nem minősül automatikus jogi bizonyítéknak.",
  },
];

export const adrDisclaimer = {
  title: "ADR — felelős használat",
  body: "Az ADR és alagút adatok segédinformációk. A hivatalos forrás, táblázás és aktuális helyi szabály mindig ellenőrizendő. A ViaNexis nem helyettesíti a jogszabályt, ADR oktatást, vállalati veszélyes áru felelőst vagy hatósági döntést. Az app nem hoz ADR döntést hivatalos forrás helyett.",
} as const;

export const aiOcrDisclaimer = {
  title: "AI, OCR és fordítás",
  body: "Az AI összesítés, OCR és automatikus fordítás segédeszköz. Emberi ellenőrzés szükséges. Az eredeti dokumentum és üzenet marad elsődleges. Az automatikus értelmezés nem jogi tanács és nem minősített fordítás.",
} as const;

export const eftiDisclaimer = {
  title: "eFTI és hatósági megosztás",
  body: "A ViaNexis nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban. Az eFTI-ready foundation technikai felkészültséget jelent a jövőbeli integrációkhoz — nem tanúsítványt vagy engedélyt.",
} as const;
