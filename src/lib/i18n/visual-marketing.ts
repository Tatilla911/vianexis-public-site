export type VisualMarketingContent = {
  skipToContent: string;
  pillars: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  surfaces: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; href: string }[];
  };
  documentsFlow: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    statuses: string[];
  };
  offline: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  pilotCta: {
    title: string;
    subtitle: string;
  };
  preview: {
    phoneTitle: string;
    phoneSubtitle: string;
    phoneRows: { label: string; value: string; status?: string }[];
    phoneCaption: string;
    browserTitle: string;
    browserSubtitle: string;
    browserColumns: string[];
    browserRows: string[][];
    browserCaption: string;
  };
  statusLabels: {
    available: string;
    pilot: string;
    development: string;
  };
  productPage: {
    highlightsTitle: string;
    capabilitiesTitle: string;
    statusesTitle: string;
  };
  authority: {
    heroSubtitle: string;
    foundationBadge: string;
    notCertifiedBadge: string;
    foundationTitle: string;
    foundationSubtitle: string;
    extraDisclaimer: string;
  };
  moduleCapabilities: Record<
    string,
    { title: string; description: string; status: "available" | "pilot" | "development" }[]
  >;
};

export const visualMarketingHu: VisualMarketingContent = {
  skipToContent: "Ugrás a tartalomra",
  pillars: {
    title: "Három pillér — egy kontrollált rendszer",
    subtitle:
      "Sofőrbarát mobilfolyamat, céges operatív kontroll és auditálható döntési nyomvonal.",
    items: [
      {
        title: "Sofőrbarát alkalmazás",
        description:
          "Fuvarok, megállók, dokumentumok, aláírások és események egy offline-képes mobilfelületen.",
      },
      {
        title: "Céges kontroll",
        description:
          "Irányítói áttekintés, jogosultságok, figyelmeztetések és dokumentumkövetés a Company Portalban.",
      },
      {
        title: "Auditálható működés",
        description:
          "Események, aláírások és döntések visszakereshető naplóval — nem túlzó biztonsági ígérettel.",
      },
    ],
  },
  process: {
    title: "Fő fuvarfolyamat",
    subtitle:
      "A létrehozástól a lezárt csomagig — strukturált, jogosultsághoz kötött lépésekkel.",
    steps: [
      {
        title: "Fuvar létrehozása",
        description: "Pickup/delivery megállók, feladatok és dokumentumkövetelmények.",
      },
      {
        title: "Sofőr elfogadása",
        description: "Hozzárendelés, elfogadás és munkamenet-indítás kontrolláltan.",
      },
      {
        title: "Megállók és feladatok",
        description: "Több stop, teendők, események és károk rögzítése.",
      },
      {
        title: "Dokumentumok és aláírások",
        description: "Feltöltés, aláírás, ellenőrzés — majd lezárt fuvarcsomag.",
      },
    ],
  },
  surfaces: {
    title: "Termékfelületek",
    subtitle: "Minden felület ugyanarra a fuvar- és dokumentumadat-modellre épül.",
    items: [
      {
        title: "Driver App",
        description: "Mobil sofőrfolyamat: fuvarok, CMR, aláírás, offline queue.",
        href: "/driver-app",
      },
      {
        title: "Company Portal",
        description: "Operációs irányítás: fuvarkezelés, figyelmeztetések, audit.",
        href: "/company-portal",
      },
      {
        title: "Platform Admin",
        description: "Platformszintű üzemeltetés és tenant-kontroll.",
        href: "/features",
      },
      {
        title: "Hatósági / külső hozzáférés",
        description: "Idő- és scope-korlátozott csomag — eFTI-ready foundation.",
        href: "/authority-efti",
      },
    ],
  },
  documentsFlow: {
    title: "Dokumentumok és aláírások",
    subtitle:
      "A dokumentum a fuvarhoz, sofőrhöz vagy járműhöz kapcsolódik, és auditálható marad.",
    steps: [
      {
        title: "Létrejön vagy feltöltik",
        description: "CMR, szállítólevél, scan vagy digitális sablon.",
      },
      {
        title: "Kapcsolódik",
        description: "Fuvar, sofőr, jármű vagy cég kontextusához rendelődik.",
      },
      {
        title: "Aláírás és ellenőrzés",
        description: "Aláírásra vár → aláírva → ellenőrzés alatt.",
      },
      {
        title: "Lezárt csomag",
        description: "Exportálható, visszakereshető bizonyítékcsomag.",
      },
    ],
    statuses: [
      "Feltöltve",
      "Hiányzik",
      "Aláírásra vár",
      "Aláírva",
      "Ellenőrzés alatt",
      "Rontott",
      "Lejáró",
      "Hatósági",
      "Belső",
    ],
  },
  offline: {
    title: "Offline működés és szinkron",
    subtitle:
      "A sofőr offline is dolgozhat; a finalizálás backend-visszaigazolás után válik véglegessé.",
    cards: [
      {
        title: "Helyi változásnapló",
        description: "Mezőszintű változtatások biztonságos helyi tárolása.",
      },
      {
        title: "Konfliktusjelzés",
        description: "Eltérő források esetén nem csendes felülírás — auditált konfliktus.",
      },
      {
        title: "Stabil sablon-snapshot",
        description: "A fuvar közben a sablonverzió nem változik meg csendben.",
      },
    ],
  },
  pilotCta: {
    title: "Készen áll a kontrollált pilot hozzáférésre?",
    subtitle:
      "Belső és partneri teszteléshez kérjen hozzáférést — nem nyilvános store letöltés.",
  },
  preview: {
    phoneTitle: "Aktív fuvar",
    phoneSubtitle: "Demo · HU-AT-001",
    phoneRows: [
      { label: "Megálló", value: "Budapest → Wien", status: "Úton" },
      { label: "Dokumentum", value: "CMR digitális", status: "Kitöltés" },
      { label: "Offline queue", value: "2 változás vár", status: "Sync" },
    ],
    phoneCaption: "Termékbemutató UI-kompozíció — anonimizált demo adatok.",
    browserTitle: "Operatív áttekintés",
    browserSubtitle: "Demo cég · irányítói nézet",
    browserColumns: ["Fuvar", "Sofőr", "Dokumentum", "Állapot"],
    browserRows: [
      ["HU-AT-001", "Sofőr A", "CMR", "Aláírásra vár"],
      ["DE-NL-014", "Sofőr B", "POD", "Aláírva"],
      ["IT-FR-008", "Sofőr C", "Scan", "Ellenőrzés"],
    ],
    browserCaption:
      "Company Portal bemutató kompozíció — nem éles staging adat.",
  },
  statusLabels: {
    available: "Elérhető",
    pilot: "Pilot",
    development: "Fejlesztés alatt",
  },
  productPage: {
    highlightsTitle: "Kiemelt képességek",
    capabilitiesTitle: "Mit mutat be ez a modul",
    statusesTitle: "Státuszjelölés",
  },
  authority: {
    heroSubtitle:
      "eFTI-ready foundation: strukturált, auditálható adatkezelés és idő-/scope-korlátozott hatósági hozzáférési csomag — nem eFTI-tanúsított platform.",
    foundationBadge: "eFTI-ready foundation",
    notCertifiedBadge: "Nem eFTI-tanúsított",
    foundationTitle: "Mit jelent az eFTI-ready foundation",
    foundationSubtitle:
      "Technikai felkészültség auditálható adatkezelésre — nem tanúsítvány vagy engedély.",
    extraDisclaimer:
      "A ViaNexis nem állítja, hogy a rendszer jelenleg eFTI-tanúsított, hatóságilag elfogadott minden országban, vagy automatikus jogi bizonyító erővel bír.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Profil és dokumentumok",
        description:
          "Sofőradatok és iratok kezelése a céges követelmények szerint.",
        status: "available",
      },
      {
        title: "Fuvarok és megállók",
        description: "Több megálló, feladatok és fuvarállapot egy nézetben.",
        status: "available",
      },
      {
        title: "CMR és feltöltés",
        description: "Digitális és scanelt dokumentumok fuvarhoz kötve.",
        status: "pilot",
      },
      {
        title: "Aláírások és események",
        description: "Aláírás-capture, károk és események naplózása.",
        status: "available",
      },
      {
        title: "Offline queue",
        description: "Offline kitöltés, szinkron és konfliktusjelzés.",
        status: "pilot",
      },
      {
        title: "Authority mode / Driver ID",
        description: "Hatósági és azonosító nézetek — fokozatos bekötés.",
        status: "development",
      },
    ],
    "company-admin": [
      {
        title: "Irányítói áttekintés",
        description: "Fuvarok, figyelmeztetések és dokumentumhiányok.",
        status: "available",
      },
      {
        title: "Fuvarbeadás és megállók",
        description: "Pickup/delivery, várakozás és parkoltatott munkák.",
        status: "available",
      },
      {
        title: "Dokumentum- és aláíráskövetés",
        description: "Státuszok, hiányok és ellenőrzési állapot.",
        status: "pilot",
      },
      {
        title: "Jogosultságok és beállítások",
        description: "Szerepkörök, céges szabályok, alvállalkozói hozzáférés.",
        status: "pilot",
      },
      {
        title: "Auditnapló és riportok",
        description: "Visszakereshető döntések és exportálható bizonyíték.",
        status: "pilot",
      },
      {
        title: "Külső partner hozzáférés",
        description: "Időkorlátos, scope-korlátozott partneri nézetek.",
        status: "development",
      },
    ],
    "cmr-documents": [
      {
        title: "Feltöltés és kapcsolás",
        description: "Dokumentum fuvarhoz, sofőrhöz vagy járműhöz.",
        status: "available",
      },
      {
        title: "Aláírási workflow",
        description: "Aláírásra vár → aláírva → ellenőrzés.",
        status: "pilot",
      },
      {
        title: "Lezárt csomag",
        description: "Exportálható, auditálható fuvarbizonyíték.",
        status: "pilot",
      },
      {
        title: "Sablonverziózás",
        description: "Központi sablonrendszer — fokozatos bevezetés.",
        status: "development",
      },
    ],
    "audit-support": [
      {
        title: "Szerepköralapú hozzáférés",
        description: "User- és company-scope elválasztás.",
        status: "available",
      },
      {
        title: "Auditnapló",
        description: "Műveletek és döntések visszakereshetően.",
        status: "available",
      },
      {
        title: "Session és device",
        description: "Munkamenet- és eszközkezelés támogatása.",
        status: "pilot",
      },
      {
        title: "Support access grant",
        description: "Időkorlátos, naplózott support hozzáférés.",
        status: "pilot",
      },
      {
        title: "Exportálható bizonyíték",
        description: "Dokumentált döntések és exportcsomagok.",
        status: "development",
      },
    ],
  },
};

export const visualMarketingEn: VisualMarketingContent = {
  skipToContent: "Skip to content",
  pillars: {
    title: "Three pillars — one controlled system",
    subtitle:
      "Driver-friendly mobile flow, company operational control, and an auditable decision trail.",
    items: [
      {
        title: "Driver-friendly app",
        description:
          "Trips, stops, documents, signatures, and events in an offline-capable mobile UI.",
      },
      {
        title: "Company control",
        description:
          "Dispatcher overview, permissions, alerts, and document tracking in the Company Portal.",
      },
      {
        title: "Auditable operations",
        description:
          "Events, signatures, and decisions with a searchable log — without exaggerated security claims.",
      },
    ],
  },
  process: {
    title: "Core trip workflow",
    subtitle:
      "From creation to a closed package — structured steps with permission-aware access.",
    steps: [
      {
        title: "Create trip",
        description: "Pickup/delivery stops, tasks, and document requirements.",
      },
      {
        title: "Driver acceptance",
        description: "Assignment, acceptance, and controlled session start.",
      },
      {
        title: "Stops and tasks",
        description: "Multiple stops, tasks, events, and damage records.",
      },
      {
        title: "Documents and signatures",
        description: "Upload, sign, review — then a closed trip package.",
      },
    ],
  },
  surfaces: {
    title: "Product surfaces",
    subtitle: "Every surface builds on the same trip and document data model.",
    items: [
      {
        title: "Driver App",
        description: "Mobile driver flow: trips, CMR, signatures, offline queue.",
        href: "/driver-app",
      },
      {
        title: "Company Portal",
        description: "Operations control: trip management, alerts, audit.",
        href: "/company-portal",
      },
      {
        title: "Platform Admin",
        description: "Platform-level operations and tenant control.",
        href: "/features",
      },
      {
        title: "Authority / external access",
        description: "Time- and scope-limited package — eFTI-ready foundation.",
        href: "/authority-efti",
      },
    ],
  },
  documentsFlow: {
    title: "Documents and signatures",
    subtitle:
      "Documents link to a trip, driver, or vehicle — and remain auditable.",
    steps: [
      {
        title: "Created or uploaded",
        description: "CMR, delivery note, scan, or digital template.",
      },
      {
        title: "Linked",
        description: "Assigned to trip, driver, vehicle, or company context.",
      },
      {
        title: "Sign and review",
        description: "Awaiting signature → signed → under review.",
      },
      {
        title: "Closed package",
        description: "Exportable, searchable evidence package.",
      },
    ],
    statuses: [
      "Uploaded",
      "Missing",
      "Awaiting signature",
      "Signed",
      "Under review",
      "Invalidated",
      "Expiring",
      "Authority",
      "Internal",
    ],
  },
  offline: {
    title: "Offline operation and sync",
    subtitle:
      "Drivers can work offline; finalization becomes permanent only after backend confirmation.",
    cards: [
      {
        title: "Local change log",
        description: "Field-level changes stored securely on device.",
      },
      {
        title: "Conflict signals",
        description: "No silent overwrite when sources diverge — audited conflict.",
      },
      {
        title: "Stable template snapshot",
        description: "Template version does not change silently mid-trip.",
      },
    ],
  },
  pilotCta: {
    title: "Ready for controlled pilot access?",
    subtitle:
      "Request access for internal and partner testing — not a public store download.",
  },
  preview: {
    phoneTitle: "Active trip",
    phoneSubtitle: "Demo · HU-AT-001",
    phoneRows: [
      { label: "Stop", value: "Budapest → Wien", status: "En route" },
      { label: "Document", value: "Digital CMR", status: "Filling" },
      { label: "Offline queue", value: "2 pending changes", status: "Sync" },
    ],
    phoneCaption: "Product demo UI composition — anonymized demo data.",
    browserTitle: "Operations overview",
    browserSubtitle: "Demo company · dispatcher view",
    browserColumns: ["Trip", "Driver", "Document", "Status"],
    browserRows: [
      ["HU-AT-001", "Driver A", "CMR", "Awaiting signature"],
      ["DE-NL-014", "Driver B", "POD", "Signed"],
      ["IT-FR-008", "Driver C", "Scan", "Under review"],
    ],
    browserCaption:
      "Company Portal demo composition — not live staging data.",
  },
  statusLabels: {
    available: "Available",
    pilot: "Pilot",
    development: "In development",
  },
  productPage: {
    highlightsTitle: "Key capabilities",
    capabilitiesTitle: "What this module shows",
    statusesTitle: "Status labels",
  },
  authority: {
    heroSubtitle:
      "eFTI-ready foundation: structured, auditable data handling and time-/scope-limited authority access packages — not an eFTI-certified platform.",
    foundationBadge: "eFTI-ready foundation",
    notCertifiedBadge: "Not eFTI-certified",
    foundationTitle: "What eFTI-ready foundation means",
    foundationSubtitle:
      "Technical readiness for auditable data handling — not a certificate or licence.",
    extraDisclaimer:
      "ViaNexis does not claim the system is currently eFTI-certified, accepted by authorities in every country, or automatically legally probative.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Profile and documents",
        description:
          "Driver profile and documents managed to company requirements.",
        status: "available",
      },
      {
        title: "Trips and stops",
        description: "Multiple stops, tasks, and trip status in one view.",
        status: "available",
      },
      {
        title: "CMR and upload",
        description: "Digital and scanned documents linked to the trip.",
        status: "pilot",
      },
      {
        title: "Signatures and events",
        description: "Signature capture with damage and event logging.",
        status: "available",
      },
      {
        title: "Offline queue",
        description: "Offline fill, sync, and conflict signalling.",
        status: "pilot",
      },
      {
        title: "Authority mode / Driver ID",
        description: "Authority and ID views — rolled out gradually.",
        status: "development",
      },
    ],
    "company-admin": [
      {
        title: "Dispatcher overview",
        description: "Trips, alerts, and missing documents.",
        status: "available",
      },
      {
        title: "Trip intake and stops",
        description: "Pickup/delivery, waiting, and parked jobs.",
        status: "available",
      },
      {
        title: "Document and signature tracking",
        description: "Statuses, gaps, and review state.",
        status: "pilot",
      },
      {
        title: "Permissions and settings",
        description: "Roles, company rules, subcontractor access.",
        status: "pilot",
      },
      {
        title: "Audit log and reports",
        description: "Searchable decisions and exportable evidence.",
        status: "pilot",
      },
      {
        title: "External partner access",
        description: "Time- and scope-limited partner views.",
        status: "development",
      },
    ],
    "cmr-documents": [
      {
        title: "Upload and linking",
        description: "Documents linked to trip, driver, or vehicle.",
        status: "available",
      },
      {
        title: "Signature workflow",
        description: "Awaiting signature → signed → review.",
        status: "pilot",
      },
      {
        title: "Closed package",
        description: "Exportable, auditable trip evidence.",
        status: "pilot",
      },
      {
        title: "Template versioning",
        description: "Central template system — gradual rollout.",
        status: "development",
      },
    ],
    "audit-support": [
      {
        title: "Role-based access",
        description: "User- and company-scoped separation.",
        status: "available",
      },
      {
        title: "Audit log",
        description: "Actions and decisions remain searchable.",
        status: "available",
      },
      {
        title: "Session and device",
        description: "Session and device management support.",
        status: "pilot",
      },
      {
        title: "Support access grant",
        description: "Time-limited, logged support access.",
        status: "pilot",
      },
      {
        title: "Exportable evidence",
        description: "Documented decisions and export packages.",
        status: "development",
      },
    ],
  },
};

export function resolveVisualMarketing(
  locale: string,
): VisualMarketingContent {
  return locale === "hu" ? visualMarketingHu : visualMarketingEn;
}
