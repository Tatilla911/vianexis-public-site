import type { SiteContent } from "../types";
import { legalHu } from "./legal/hu";

export const contentHu: SiteContent = {
  meta: {
    title: "ViaNexis Driver és céges fuvarirányítás",
    description:
      "Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben. Belső tesztelés előkészítés alatt.",
    ogLocale: "hu_HU",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Funkciók",
    driverApp: "Sofőr app",
    companyPortal: "Céges portál",
    documents: "Dokumentumok",
    authorityEfti: "Hatóság / eFTI",
    security: "Biztonság",
    pilot: "Pilot hozzáférés",
    contact: "Kapcsolat",
    requestAccess: "Hozzáférés igénylése",
    menuOpen: "Menü megnyitása",
  },
  footer: {
    tagline:
      "Digitális fuvarbizonyíték és sofőrplatform fuvarozó cégeknek. eFTI-ready foundation — nem minősített eFTI platform.",
    product: "Termék",
    legal: "Jogi",
    legalNotice: "Jogi információk",
    privacy: "Adatvédelem",
    terms: "Felhasználási feltételek",
    disclaimers: "Felelős használat",
    dataContact: "Adatkezelési kapcsolat",
    copyright:
      "A platform nem minősített eFTI platform, nem ígér hatósági elfogadást, automatikus jogi bizonyító erőt, hibátlan OCR/AI/fordítást vagy vészhelyzeti/SOS szolgáltatást. Nincs nyilvános Play Store letöltés.",
  },
  hero: {
    title: "ViaNexis — digitális fuvarbizonyíték és sofőrplatform",
    subtitle:
      "Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben.",
    primaryCta: "Kapcsolatfelvétel",
    secondaryCta: "Belső tesztelés előkészítés alatt",
    stats: [
      { label: "Sofőr app", value: "Fuvar + offline" },
      { label: "Dokumentum", value: "CMR + audit" },
      { label: "Üzenet", value: "Többnyelvű" },
      { label: "Állapot", value: "Belső teszt prep" },
    ],
  },
  platformStatus: {
    title: "Aktuális állapot",
    items: [
      "Google Play belső tesztelés előkészítés alatt — nem nyilvános store letöltés.",
      "A sofőr app release readiness és Samsung UAT folyamatban.",
      "Production backend, push értesítések és partneri integrációk fokozatosan kerülnek bekötésre.",
    ],
    disclaimer:
      "A ViaNexis nem állítja, hogy a rendszer éles, tanúsított vagy minden országban hivatalosan elfogadott platform.",
  },
  moduleLabels: {
    goal: "Cél",
    appFoundation: "App-side foundation",
    backendDependency: "Backend / admin dependency",
    important: "Fontos",
  },
  platformModules: [
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
        "Webes céges portál, platform admin app, szerepkörök, fuvarkezelés, dokumentumkövetelmények, céges exchange beállítások.",
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
      goal: "A teljesített fuvar bizonyítékai összefoglalhatók exportálható csomagban.",
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
      goal: "Fuvarhoz kötött kommunikáció és fontos események jelzése a sofőr számára.",
      appFoundation:
        "Üzenetlista, fuvarhoz kötött thread, app-oldali értesítési foundation. Használható: új üzenet, fuvarmódosítás, dokumentum teendő, sync probléma.",
      backendDependency:
        "Production push (FCM/APNs), device token regisztráció, szerveroldali küldés — külön dependency, még nem éles.",
      disclaimer:
        "Értesítésből célképernyő PIN után. Production push nem állítja, hogy minden esemény azonnal megérkezik.",
    },
    {
      id: "pallet-packaging",
      title: "Raklapcsere és göngyölegcsere",
      goal: "Raklap- és göngyölegcserék stop szinten rögzíthetők mennyiséggel, hiánnyal, sérüléssel és vitával.",
      appFoundation:
        "Külön raklapcsere és göngyöleg modul. Cégesen kapcsolható. Cég előre megadhatja a cseretárgyakat; sofőr egyedi göngyöleget is felvehet, ha engedélyezett. Offline mentés és szinkron.",
      backendDependency:
        "Exchange settings API, rekord szinkron, portál admin UI, completed package PDF szekció — utóbbi dependency.",
      disclaimer:
        "A PDF evidence szekció még nem minden esetben teljes. A rögzítés támogatja a vitás helyzet dokumentálását, de nem dönt vitában.",
    },
    {
      id: "adr-border",
      title: "ADR és határ / vám segédletek",
      goal: "Gyors segédinformáció ADR és határ/vám kontextusban — hivatalos forrás ellenőrzése mellett.",
      appFoundation:
        "ADR tájékoztató, UN szám keresés, alagút kód segédlet, határ/vám metaadat fuvarhoz kötve.",
      backendDependency:
        "ADR adatbázis frissítés, országspecifikus szabály metaadat, határ checkpoint adatok.",
      disclaimer:
        "ADR és alagút adatok segédinformációk. Az app nem helyettesíti a jogszabályt, oktatást, vállalati ADR felelőst vagy hatósági döntést.",
    },
    {
      id: "truck-map",
      title: "Tehergépkocsi térkép alap",
      goal: "Flotta és fuvar áttekintés térképen — operatív orientáció.",
      appFoundation: "Térkép alapú áttekintés, fuvar és jármű kontextus megjelenítése.",
      backendDependency:
        "Telematika provider integráció, routing provider, élő pozíció — fokozatos bekötés.",
      disclaimer:
        "A térkép nem garantálja a jogszabályi korlátozások vagy engedélyek betartását.",
    },
    {
      id: "multilingual",
      title: "Többnyelvű működés",
      goal: "Többnyelvű csapatok egy platformon dolgozhassanak.",
      appFoundation:
        "Sofőr app többnyelvű felület, eredeti üzenet megőrzése, fordítás segítségként.",
      backendDependency:
        "Portál és public site locale bővítés, fordítási review workflow.",
      disclaimer:
        "A gépi vagy AI fordítás segédeszköz; emberi ellenőrzés szükséges. Az eredeti dokumentum marad elsődleges.",
    },
    {
      id: "audit-support",
      title: "Audit és support hozzáférés",
      goal: "Visszakereshető napló; kontrollált support hozzáférés hibaelhárításhoz.",
      appFoundation:
        "Eseményrögzítés fuvar és dokumentum műveleteknél; support session auditálható módon.",
      backendDependency:
        "Audit export, support access policy, enterprise jogosultság-mátrix.",
      disclaimer:
        "Az auditnapló nem minősül automatikus jogi bizonyítéknak.",
    },
  ],
  disclaimers: {
    adr: {
      title: "ADR — felelős használat",
      body: "Az ADR és alagút adatok segédinformációk. A hivatalos forrás, táblázás és aktuális helyi szabály mindig ellenőrizendő. A ViaNexis nem helyettesíti a jogszabályt, ADR oktatást, vállalati veszélyes áru felelőst vagy hatósági döntést.",
    },
    aiOcr: {
      title: "AI, OCR és fordítás",
      body: "Az AI összesítés, OCR és automatikus fordítás segédeszköz. Emberi ellenőrzés szükséges. Az eredeti dokumentum és üzenet marad elsődleges. Nem jogi tanács és nem minősített fordítás.",
    },
    efti: {
      title: "eFTI és hatósági megosztás",
      body: "A ViaNexis nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban. Az eFTI-ready foundation technikai felkészültség — nem tanúsítvány vagy engedély.",
    },
  },
  home: {
    problem: {
      title: "A mindennapi logisztikai kihívások",
      subtitle:
        "Amikor a dokumentumok, aláírások és események nem egy helyen vannak, a bizonyíthatóság sérül.",
      cards: [
        {
          title: "Szétszórt dokumentumok",
          description:
            "Fuvarokhoz tartozó iratok e-mailben, chatben, papíron — nehezen összekapcsolható az eseményekkel.",
        },
        {
          title: "Elveszett aláírások",
          description:
            "Hiányzó vagy későn érkező aláírások késleltetik a lezárást és növelik a vitás helyzetek kockázatát.",
        },
        {
          title: "Nehezen bizonyítható események",
          description:
            "Átvétel, leadás, raklapcsere, incidens — strukturált napló nélkül nehéz visszakeresni, mi történt.",
        },
        {
          title: "Többnyelvű csapat",
          description:
            "Üzenetek félreértése napi szinten — az eredeti szöveg megőrzése és ellenőrzött fordítás szükséges.",
        },
      ],
    },
    modules: {
      title: "Platformmodulok",
      subtitle:
        "Cél, app-side foundation, backend/admin dependency — jogilag óvatos megfogalmazással.",
    },
    pallet: {
      title: "Raklapcsere és göngyölegcsere",
      subtitle: "Külön modulok, cégesen kapcsolhatók — offline mentéssel és audit irányba.",
    },
    notifications: {
      title: "Üzenetek és értesítések",
      subtitle: "App-oldali foundation kész — production push külön backend dependency.",
      cards: [
        {
          title: "Értesítési eseménytípusok",
          description: "Új üzenet, fuvarmódosítás, dokumentum teendő, sync probléma.",
        },
        {
          title: "Tap routing és PIN",
          description: "Értesítésből célképernyő; PIN után deep link.",
        },
        {
          title: "Privacy-safe lockscreen",
          description: "Alapból nem jelenik meg teljes dokumentum- vagy üzenettartalom.",
        },
      ],
      backendDepTitle: "Backend dependency",
      backendDepBody:
        "Production push (FCM/APNs), device token regisztráció és szerveroldali küldés még nem éles — külön bekötés szükséges.",
    },
    disclaimersSection: { title: "Felelős használat — fontos tudnivalók" },
    security: {
      title: "Védelem és kontroll",
      subtitle: "A cég és a sofőr védelme strukturált dokumentációs háttérrel.",
      cards: [
        {
          title: "Cég védelme",
          description: "Követelmény-alapú dokumentáció, auditálható események és kontrollált hozzáférés.",
        },
        {
          title: "Sofőr védelme",
          description: "Strukturált folyamat vitás helyzetek dokumentálásához.",
        },
        {
          title: "Dokumentációs háttér",
          description: "Fuvarhoz kötött iratok és események egy rendszerben.",
        },
        {
          title: "Auditálható események",
          description: "Ki, mit, mikor tett — naplózva és visszakereshetően.",
        },
      ],
      notPromiseTitle: "Nem ígéret",
      notPromiseBody:
        "A ViaNexis nem ígér automatikus jogi bizonyító erőt. A jogi értékelés az adott kontextustól függ.",
    },
    contact: {
      title: "Kapcsolat és belső tesztelés",
      subtitle:
        "Kontrollált hozzáférés — nem automatikus regisztráció, nincs nyilvános Play letöltés.",
      body: "A sofőr app Google Play belső tesztelés előkészítés alatt áll. Release readiness és Samsung UAT folyamatban. Az aktiválás nem automatikus.",
      consentNote:
        "A rendszer dokumentumokat, sofőrfolyamatokat, céges adatokat és jogosultságokat kezel — minden hozzáférés egyedi értékelésen megy keresztül.",
      contactLink: "Kapcsolatfelvétel →",
    },
  },
  contactForm: {
    title: "Kapcsolatfelvétel",
    subtitle: "Érdeklődés a ViaNexis platformról — nem automatikus regisztráció.",
    name: "Név *",
    company: "Cég *",
    email: "E-mail *",
    phone: "Telefon",
    message: "Üzenet *",
    interestType: "Érdeklődés típusa *",
    interestPlaceholder: "Válasszon...",
    interestOptions: [
      { value: "driver-app", label: "Sofőr app" },
      { value: "company-admin", label: "Céges / Admin platform" },
      { value: "documents", label: "Dokumentumkezelés" },
      { value: "pallet-packaging", label: "Raklap / göngyöleg" },
      { value: "adr-customs", label: "ADR / vám segédlet" },
      { value: "other", label: "Egyéb" },
    ],
    consent:
      "Elfogadom, hogy a ViaNexis a megadott adatokat kizárólag a kapcsolatfelvétel céljából kezelje. *",
    submit: "Üzenet küldése",
    submitMailto: "E-mail küldése",
    intakeDisabled:
      "Az online lead beküldés előkészítés alatt. Használja az e-mail kapcsolatot, vagy próbálja később.",
    successTitle: "Üzenet rögzítve",
    successBody:
      "Köszönjük az érdeklődést. Csapatunk felveszi Önnel a kapcsolatot. A hozzáférés aktiválása nem automatikus.",
    newSubmission: "Új üzenet",
    errors: {
      name: "A név megadása kötelező.",
      company: "A cég megadása kötelező.",
      email: "Az e-mail megadása kötelező.",
      emailInvalid: "Érvényes e-mail címet adjon meg.",
      message: "Az üzenet megadása kötelező.",
      interest: "Válasszon érdeklődési típust.",
      consent: "Az adatkezelés elfogadása kötelező.",
      submitFailed: "Az üzenet küldése sikertelen. Próbálja e-mailben.",
    },
  },
  legal: legalHu,
};
