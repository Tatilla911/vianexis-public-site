import type { SiteContent } from "../types";
import { legalHu } from "./legal/hu";

export const contentHu: SiteContent = {
  meta: {
    title: "ViaNexis Driver és céges fuvarirányítás",
    description:
      "Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek és többnyelvű fuvarfolyamat egy kontrollált rendszerben. Hozzáférés jelenleg pilotprogramon keresztül.",
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
      "Digitális fuvarbizonyíték és sofőrplatform fuvarozó cégeknek. Nem minősített eFTI platform.",
    product: "Termék",
    legal: "Jogi",
    legalNotice: "Jogi információk",
    privacy: "Adatvédelem",
    terms: "Felhasználási feltételek",
    disclaimers: "Felelős használat",
    dataContact: "Adatkezelési kapcsolat",
    copyright:
      "A ViaNexis nem minősített eFTI platform. OCR/AI/fordítás emberi ellenőrzést igényel. Nem jogi tanács és nem vészhelyzeti szolgáltatás.",
  },
  hero: {
    title: "Kontrollált fuvarfolyamat. Rendezett dokumentumok. Auditálható döntések.",
    subtitle:
      "Minden fontos fuvaradat, dokumentum, üzenet, aláírás és esemény egy helyen — jogosultságokkal, naplózással és szabályozott hozzáféréssel.",
    primaryCta: "Hozzáférés igénylése",
    secondaryCta: "Funkciók megtekintése",
    stats: [
      { label: "Sofőr app", value: "Fuvar + offline" },
      { label: "Dokumentum", value: "CMR + aláírás" },
      { label: "Portál", value: "Operatív kontroll" },
      { label: "Hozzáférés", value: "Kontrollált pilot" },
    ],
  },
  platformStatus: {
    title: "Kontrollált pilot hozzáférés",
    items: [
      "A ViaNexis jelenleg kiválasztott fuvarozó cégekkel és sofőrökkel végzett pilotprogramon keresztül érhető el.",
      "A hozzáférés egyedi egyeztetés és jóváhagyás után aktiválható.",
      "A nyilvános alkalmazásbolt-letöltés nem elérhető.",
    ],
    disclaimer:
      "A ViaNexis nem állítja, hogy a rendszer minden országban hivatalosan elfogadott vagy tanúsított platform.",
  },
  moduleLabels: {
    goal: "Mit nyújt",
    appFoundation: "Főbb képességek",
    backendDependency: "Kapcsolódó szolgáltatások",
    important: "Fontos",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Sofőr app",
      goal: "A sofőr fuvarhoz kötött feladatokat, dokumentumokat és eseményeket egy mobil felületen kezelje — online és offline is.",
      appFoundation:
        "Fuvarlista, megállók, dokumentumfeltöltés, aláírás, ellenőrzőlisták, incidensrögzítés, offline mentés és PIN-védett munkamenet.",
      backendDependency:
        "Céges szabályok, fuvar- és dokumentumszinkron, jogosultságok.",
    },
    {
      id: "company-admin",
      title: "Céges irányítás / Admin",
      goal: "A fuvarozó cég fuvarokat, felhasználókat, jogosultságokat és munkafolyamatokat egy portálon irányítson.",
      appFoundation:
        "Sofőr oldali adatok és műveletek a céges szabályoknak megfelelően jelennek meg.",
      backendDependency:
        "Webes céges portál, szerepkörök, fuvarkezelés és dokumentumkövetelmények.",
    },
    {
      id: "cmr-documents",
      title: "Digitális CMR és dokumentumok",
      goal: "Fuvarhoz kötött dokumentumok — CMR, szállítólevél, számla, jármű- és sofőriratok — strukturáltan kezelhetők legyenek.",
      appFoundation:
        "Dokumentumfeltöltés, fénykép, fuvarhoz rendelés és követelmény-alapú teendők.",
      backendDependency:
        "Dokumentumtárolás, metaadat, aláírási szabályok és korlátozott megosztás.",
      disclaimer:
        "A digitális dokumentum nem jelent automatikus jogi bizonyító erőt. Az elfogadás országonként és ügyfelenként eltérhet.",
    },
    {
      id: "completed-package",
      title: "Lezárt fuvarcsomag",
      goal: "A teljesített fuvar bizonyítékai összefoglalhatók exportálható csomagban.",
      appFoundation:
        "Fuvar lezárása, helyi adatok és szinkronizált események alapja a csomag összeállításához.",
      backendDependency:
        "Lezárt fuvarcsomag exportálható dokumentumokkal és eseményekkel.",
      disclaimer:
        "A csomag támogatja a dokumentálást; nem helyettesíti a cég jogi értékelését vagy hatósági eljárását.",
    },
    {
      id: "messaging-notifications",
      title: "Üzenetek és értesítések",
      goal: "Fuvarhoz kötött kommunikáció és fontos események jelzése a sofőr számára.",
      appFoundation:
        "Üzenetlista, fuvarhoz kötött beszélgetés, értesítések új üzenetről, fuvarmódosításról és dokumentumteendőről.",
      backendDependency:
        "Az értesítési funkciók a pilotprogram részeként aktiválhatók.",
      disclaimer:
        "Az értesítés nem garantálja, hogy minden esemény azonnal megérkezik.",
    },
    {
      id: "pallet-packaging",
      title: "Raklapcsere és göngyölegcsere",
      goal: "Raklap- és göngyölegcserék stop szinten rögzíthetők mennyiséggel, hiánnyal, sérüléssel és vitával.",
      appFoundation:
        "Külön modulok, cégesen kapcsolhatók. Offline mentés és szinkron támogatott.",
      backendDependency:
        "Céges cserebeállítások és portáloldali áttekintés.",
      disclaimer:
        "A rögzítés támogatja a vitás helyzet dokumentálását, de nem dönt vitában.",
    },
    {
      id: "adr-border",
      title: "ADR és határ / vám segédletek",
      goal: "Gyors segédinformáció ADR és határ/vám kontextusban — hivatalos forrás ellenőrzése mellett.",
      appFoundation:
        "ADR tájékoztató, UN szám keresés, alagút kód segédlet, határ/vám metaadat fuvarhoz kötve.",
      backendDependency:
        "ADR adatfrissítés és országspecifikus segédinformáció.",
      disclaimer:
        "ADR és alagút adatok segédinformációk. Az app nem helyettesíti a jogszabályt, oktatást, vállalati ADR felelőst vagy hatósági döntést.",
    },
    {
      id: "truck-map",
      title: "Tehergépkocsi térkép",
      goal: "Flotta és fuvar áttekintés térképen — operatív orientáció.",
      appFoundation: "Térkép alapú áttekintés, fuvar és jármű kontextus megjelenítése.",
      backendDependency:
        "Térkép- és pozíciószolgáltatások fokozatosan kapcsolhatók.",
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
        "Portál és nyilvános oldal nyelvi támogatása.",
      disclaimer:
        "A gépi vagy AI fordítás segédeszköz; emberi ellenőrzés szükséges. Az eredeti dokumentum marad elsődleges.",
    },
    {
      id: "audit-support",
      title: "Audit és support hozzáférés",
      goal: "Visszakereshető napló; kontrollált support hozzáférés hibaelhárításhoz.",
      appFoundation:
        "Eseményrögzítés fuvar- és dokumentumműveleteknél; támogatási belépés naplózva.",
      backendDependency:
        "Audit export és támogatási hozzáférési szabályok.",
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
      body: "A ViaNexis nem minősített eFTI platform, és nem ígér hatósági elfogadást minden országban. A technikai felkészültség nem tanúsítvány vagy engedély.",
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
      title: "Funkciók és modulok",
      subtitle:
        "Részletes képességek a sofőr alkalmazástól a dokumentumokig és auditig.",
    },
    pallet: {
      title: "Raklapcsere és göngyölegcsere",
      subtitle: "Megálló szintű rögzítés mennyiséggel, hiánnyal és vitajelzéssel.",
    },
    notifications: {
      title: "Üzenetek és értesítések",
      subtitle: "Fuvarhoz kötött kommunikáció. Az értesítések a pilotprogram részeként aktiválhatók.",
      cards: [
        {
          title: "Értesítési események",
          description: "Új üzenet, fuvarmódosítás, dokumentumteendő.",
        },
        {
          title: "Biztonságos megnyitás",
          description: "Értesítésből a célképernyő PIN után nyílik meg.",
        },
        {
          title: "Zárolási képernyő",
          description: "Alapból nem jelenik meg teljes dokumentum- vagy üzenettartalom.",
        },
      ],
      backendDepTitle: "Értesítések",
      backendDepBody:
        "Az értesítési funkciók a pilotprogram részeként aktiválhatók.",
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
      title: "Kapcsolat",
      subtitle:
        "Kontrollált hozzáférés — egyedi egyeztetés után, nem automatikus regisztráció.",
      body: "A hozzáférés jelenleg kontrollált pilotprogramon keresztül érhető el. Az aktiválás egyedi értékelés után történik.",
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
  applicationForms: {
    common: {
      privacy: "Elfogadom az adatvédelmi tájékoztatót és hozzájárulok az adatkezeléshez. *",
      submit: "Jelentkezés beküldése",
      intakeDisabled: "Az online jelentkezés előkészítés alatt áll. Írj a support@vianexis.eu címre, vagy próbáld később.",
      successTitle: "Jelentkezés fogadva",
      successBody: "Köszönjük. Jelentkezésed felülvizsgálat alatt van. A hozzáférés jóváhagyásig nem automatikus.",
      newSubmission: "Új jelentkezés",
      errors: { required: "A mező kitöltése kötelező.", email: "Az e-mail megadása kötelező.", emailInvalid: "Érvényes e-mail címet adj meg.", password: "A jelszó legalább 8 karakter legyen.", privacy: "Az adatvédelmi hozzájárulás kötelező.", submitFailed: "A jelentkezést nem sikerült elküldeni. Próbáld később." },
    },
    company: { title: "Cég jelentkezés", subtitle: "ViaNexis céges platform hozzáférés igénylése.", companyName: "Cég neve *", country: "Ország *", vatNumber: "Adószám / VAT", contactName: "Kapcsolattartó neve *", contactEmail: "Kapcsolattartó e-mail *", contactPhone: "Telefon *", fleetSize: "Flotta mérete", moduleInterests: "Érdeklődő modulok", moduleOptions: [{ value: "driver_app", label: "Sofőr app" },{ value: "dispatch_portal", label: "Diszpécser portál" },{ value: "documents", label: "Dokumentumkezelés" },{ value: "fleet_workshop", label: "Flotta / műhely" },{ value: "pallet_packaging", label: "Raklap / göngyöleg" },{ value: "external_shipper_receiver", label: "Külső feladó / címzett" }], notes: "Megjegyzés" },
    driver: { title: "Sofőr jelentkezés", subtitle: "Önjelentkezés — bejelentkezés jóváhagyás után lehetséges.", fullName: "Teljes név *", email: "E-mail *", password: "Jelszó *", phone: "Telefon", country: "Ország", companyNameHint: "Cég neve (opcionális)", companyCode: "Meghívó / cégkód (opcionális)", licenseNotes: "Jogosítvány / ADR / GKI (opcionális)" },
    partner: { title: "Partner érdeklődés", subtitle: "Feladó, címzett, raktár vagy vámügynök partner jelentkezés.", companyName: "Cég neve *", role: "Szerep *", roleOptions: [{ value: "shipper", label: "Feladó" },{ value: "receiver", label: "Címzett" },{ value: "warehouse", label: "Raktár" },{ value: "customs_broker", label: "Vámügynök" },{ value: "other_partner", label: "Egyéb partner" }], contactName: "Kapcsolattartó *", email: "E-mail *", phone: "Telefon", notes: "Megjegyzés" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Hatósági ellenőrzési csomag",
        description:
          "Fuvarhoz tartozó dokumentumok és események csomagolt, scope-korlátozott megosztása.",
      },
      {
        title: "Scope / time limited access",
        description: "QR-alapú, korlátozott hozzáférés — nem nyilvános.",
      },
      {
        title: "Audit",
        description: "Hozzáférések és megosztások naplózása.",
      },
      {
        title: "eFTI-ready foundation",
        description: "Technikai alap jövőbeli integrációkhoz — nem minősítés.",
      },
    ],
  },
  legal: legalHu,
};
