export type VisualMarketingContent = {
  skipToContent: string;
  brandVisuals: {
    routeLabel: string;
    routeId: string;
    statusLabel: string;
    networkOverline: string;
    networkTitle: string;
    networkSubtitle: string;
    workflowEvents: string[];
  };
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
  homeModules: {
    title: string;
    subtitle: string;
    detailsLink: string;
    items: {
      title: string;
      description: string;
      href: string;
      icon: "truck" | "portal" | "doc" | "message" | "audit" | "offline";
    }[];
  };
  documentsFlow: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    statuses: string[];
    detailsLink: string;
  };
  offline: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
    detailsLink: string;
  };
  responsibleUse: {
    title: string;
    subtitle: string;
    items: string[];
    detailsLink: string;
  };
  pilotCta: {
    title: string;
    subtitle: string;
  };
  preview: {
    tripId: string;
    phoneTitle: string;
    phoneSubtitle: string;
    phoneRows: { label: string; value: string; status?: string }[];
    phoneCaption: string;
    browserTitle: string;
    browserSubtitle: string;
    browserColumns: string[];
    browserRows: string[][];
    browserCaption: string;
    driver: {
      navHome: string;
      navTrips: string;
      navDocs: string;
      navMore: string;
      tripStatus: string;
      nextStopLabel: string;
      nextStopValue: string;
      documentLabel: string;
      documentValue: string;
      documentAction: string;
      syncLabel: string;
      syncValue: string;
    };
    portal: {
      roleLabel: string;
      alertLabel: string;
      alertValue: string;
      auditLabel: string;
      auditValue: string;
    };
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
    {
      title: string;
      description: string;
      status: "available" | "pilot" | "development";
    }[]
  >;
};

export const visualMarketingHu: VisualMarketingContent = {
  skipToContent: "Ugrás a tartalomra",
  brandVisuals: {
    routeLabel: "Aktív útvonal",
    routeId: "VN-2407-A18",
    statusLabel: "Élő",
    networkOverline: "ViaNexis Network",
    networkTitle: "Nem csak a fuvar útvonala kapcsolódik össze.",
    networkSubtitle:
      "A megállók, dokumentumok, aláírások, üzenetek és döntések ugyanahhoz a fuvarfolyamathoz kapcsolódnak — időrendben, jogosultságokkal és visszakereshető eseményekkel.",
    workflowEvents: [
      "Indulás",
      "Átvétel",
      "Dokumentum",
      "Aláírás",
      "Várakozás",
      "Leadás",
      "Lezárt csomag",
    ],
  },
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
          "Irányítói áttekintés, jogosultságok, figyelmeztetések és dokumentumkövetés a céges portálon.",
      },
      {
        title: "Auditálható működés",
        description:
          "Események, aláírások és döntések visszakereshető naplóval — túlzó biztonsági ígéret nélkül.",
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
        description: "Átvételi és leadási megállók, feladatok és dokumentumkövetelmények.",
      },
      {
        title: "Sofőr elfogadása",
        description: "Hozzárendelés, elfogadás és kontrollált munkamenet-indítás.",
      },
      {
        title: "Megállók és feladatok",
        description: "Több megálló, teendők, események és károk rögzítése.",
      },
      {
        title: "Dokumentumok és aláírások",
        description: "Feltöltés, aláírás, ellenőrzés — majd lezárt fuvarcsomag.",
      },
    ],
  },
  homeModules: {
    title: "Termékfelületek",
    subtitle:
      "Minden felület ugyanarra a fuvar- és dokumentummodellre épül. A részletek a termékoldalakon.",
    detailsLink: "Részletek",
    items: [
      {
        title: "Sofőr alkalmazás",
        description:
          "Fuvarok, megállók, dokumentumok és aláírások egy offline-képes mobilfolyamatban. A sofőr tudja, mi a következő teendő.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Céges portál",
        description:
          "Operatív áttekintés: aktív fuvarok, hiányzó dokumentumok, figyelmeztetések és jogosultságok egy helyen.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumentumok és aláírások",
        description:
          "Fuvarhoz kötött iratok, aláírási állapotok és exportálható lezárt fuvarcsomag.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Üzenetek és értesítések",
        description:
          "Fuvarhoz kötött kommunikáció. Az értesítési funkciók a pilotprogram részeként aktiválhatók.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit és jogosultságok",
        description:
          "Szerepköralapú hozzáférés, visszakereshető események és kontrollált support-hozzáférés.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline működés",
        description:
          "A sofőr gyenge hálózaton is folytathatja a munkát; a változások szinkronkor kerülnek véglegesítésre.",
        href: "/driver-app",
        icon: "offline",
      },
    ],
  },
  documentsFlow: {
    title: "Dokumentumok és aláírások",
    subtitle:
      "A dokumentum a fuvarhoz kapcsolódik, aláírható, ellenőrizhető, majd lezárt csomagba kerül.",
    steps: [
      {
        title: "Feltöltés vagy létrehozás",
        description: "CMR, szállítólevél, fénykép vagy digitális sablon.",
      },
      {
        title: "Kapcsolás",
        description: "Fuvar, sofőr vagy jármű kontextusához rendelődik.",
      },
      {
        title: "Aláírás és ellenőrzés",
        description: "Állapotkövetés: aláírásra vár → aláírva → ellenőrzés.",
      },
      {
        title: "Lezárt fuvarcsomag",
        description:
          "Exportálható dokumentumokkal és eseményekkel — auditálható összefoglaló.",
      },
    ],
    statuses: [
      "Feltöltve",
      "Hiányzik",
      "Aláírásra vár",
      "Aláírva",
      "Ellenőrzés alatt",
    ],
    detailsLink: "Dokumentumok részletesen",
  },
  offline: {
    title: "Offline működés és szinkron",
    subtitle:
      "A munka nem áll meg gyenge hálózaton sem — a véglegesítés szinkron után történik.",
    cards: [
      {
        title: "Helyi mentés",
        description: "A sofőr változásai biztonságosan tárolódnak a készüléken.",
      },
      {
        title: "Átlátható szinkron",
        description: "A függő változtatások láthatók, amíg a kapcsolat helyreáll.",
      },
      {
        title: "Konfliktusjelzés",
        description: "Eltérő források esetén nem csendes felülírás — naplózott konfliktus.",
      },
    ],
    detailsLink: "Sofőr alkalmazás",
  },
  responsibleUse: {
    title: "Felelős használat",
    subtitle: "Rövid, fontos korlátok — a részletek a jogi oldalakon.",
    items: [
      "A ViaNexis nem minősített eFTI platform, és nem ígér automatikus hatósági elfogadást.",
      "Az OCR, AI és fordítás segédeszköz — emberi ellenőrzés szükséges.",
      "A rendszer nem nyújt jogi tanácsot.",
      "Nem vészhelyzeti vagy SOS szolgáltatás.",
    ],
    detailsLink: "Részletes felelős használat",
  },
  pilotCta: {
    title: "Kontrollált pilot hozzáférés",
    subtitle:
      "A ViaNexis jelenleg kiválasztott fuvarozó cégekkel és sofőrökkel végzett pilotprogramon keresztül érhető el. A hozzáférés egyedi egyeztetés és jóváhagyás után aktiválható.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktív fuvar",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      { label: "Következő megálló", value: "Átvétel · Budapest (demo)", status: "Úton" },
      { label: "Dokumentum", value: "CMR — aláírásra vár", status: "Teendő" },
      { label: "Szinkron", value: "1 változás várakozik", status: "Offline" },
    ],
    phoneCaption: "Termékbemutató — anonimizált demo adatok.",
    browserTitle: "Operatív irányítás",
    browserSubtitle: "Demo flotta · diszpécser nézet",
    browserColumns: ["Fuvar", "Megálló", "Dokumentum", "Állapot"],
    browserRows: [
      ["VN-2407-A18", "Budapest (demo)", "CMR hiányzik", "Figyelmeztetés"],
      ["VN-2407-B03", "Győr (demo)", "POD aláírva", "Úton"],
      ["VN-2407-C11", "Wien (demo)", "Ellenőrzés", "Lezárás előtt"],
    ],
    browserCaption: "Céges portál bemutató — nem éles ügyféladat.",
    driver: {
      navHome: "Kezdőlap",
      navTrips: "Fuvarok",
      navDocs: "Iratok",
      navMore: "Több",
      tripStatus: "Fuvar folyamatban",
      nextStopLabel: "Következő megálló",
      nextStopValue: "Átvétel · Budapest (demo)",
      documentLabel: "Dokumentum",
      documentValue: "CMR digitális",
      documentAction: "Aláírás szükséges",
      syncLabel: "Kapcsolat",
      syncValue: "Offline · 1 függő",
    },
    portal: {
      roleLabel: "Szerepkör: Diszpécser",
      alertLabel: "Figyelmeztetés",
      alertValue: "VN-2407-A18 · CMR aláírásra vár",
      auditLabel: "Utolsó audit esemény",
      auditValue: "Dokumentum állapot változott · sofőr app",
    },
  },
  statusLabels: {
    available: "Elérhető",
    pilot: "Pilot",
    development: "Fejlesztés alatt",
  },
  productPage: {
    highlightsTitle: "Kiemelt képességek",
    capabilitiesTitle: "Mit nyújt ez a felület",
    statusesTitle: "Állapotjelölések",
  },
  authority: {
    heroSubtitle:
      "Idő- és hatókör-korlátozott hozzáférés a fuvarbizonyítékokhoz — nem minősített eFTI platform.",
    foundationBadge: "Technikai felkészültség",
    notCertifiedBadge: "Nem minősített eFTI",
    foundationTitle: "Mit jelent a felkészültség?",
    foundationSubtitle:
      "Strukturált adatok és kontrollált megosztás — tanúsítvány vagy engedély nélkül.",
    extraDisclaimer:
      "A ViaNexis nem ígér hatósági elfogadást minden országban. A jogi és hatósági megfelelés az ügyfél felelőssége.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Fuvarlista és megállók",
        description: "Aktív fuvarok, következő teendők és megállófeladatok.",
        status: "available",
      },
      {
        title: "Dokumentumok és aláírás",
        description: "Feltöltés, CMR teendők és aláírás rögzítése.",
        status: "available",
      },
      {
        title: "Offline munka",
        description: "Helyi mentés és látható függő szinkron.",
        status: "available",
      },
      {
        title: "Üzenetek",
        description: "Fuvarhoz kötött kommunikáció a sofőr számára.",
        status: "pilot",
      },
    ],
    "company-admin": [
      {
        title: "Aktív fuvarlista",
        description: "Operatív áttekintés megállókkal és állapotokkal.",
        status: "available",
      },
      {
        title: "Dokumentumhiány jelzése",
        description: "Hiányzó vagy aláírásra váró iratok azonnal látszanak.",
        status: "available",
      },
      {
        title: "Jogosultságok",
        description: "Szerepköralapú hozzáférés a céges adatokhoz.",
        status: "available",
      },
      {
        title: "Audit események",
        description: "Visszakereshető döntési és dokumentumnyomvonal.",
        status: "pilot",
      },
    ],
    "cmr-documents": [
      {
        title: "Feltöltés és kapcsolás",
        description: "Dokumentum fuvarhoz, sofőrhöz vagy járműhöz.",
        status: "available",
      },
      {
        title: "Aláírási folyamat",
        description: "Aláírásra vár → aláírva → ellenőrzés.",
        status: "pilot",
      },
      {
        title: "Lezárt fuvarcsomag",
        description: "Exportálható dokumentumokkal és eseményekkel.",
        status: "pilot",
      },
      {
        title: "Sablonkezelés",
        description: "Központi dokumentumsablonok — fokozatos bevezetés.",
        status: "development",
      },
    ],
    "audit-support": [
      {
        title: "Szerepköralapú hozzáférés",
        description: "Felhasználói és céges hatókör elválasztása.",
        status: "available",
      },
      {
        title: "Auditnapló",
        description: "Műveletek és döntések visszakereshetően.",
        status: "available",
      },
      {
        title: "Munkamenet és eszköz",
        description: "Kontrollált session- és eszközkezelés.",
        status: "pilot",
      },
      {
        title: "Support hozzáférés",
        description: "Időkorlátozott, naplózott támogatási belépés.",
        status: "pilot",
      },
    ],
  },
};

export const visualMarketingEn: VisualMarketingContent = {
  skipToContent: "Skip to content",
  brandVisuals: {
    routeLabel: "Active route",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "It is not only the route that connects.",
    networkSubtitle:
      "Stops, documents, signatures, messages, and decisions belong to the same trip flow — in time order, with permissions and a searchable event trail.",
    workflowEvents: [
      "Departure",
      "Pickup",
      "Document",
      "Signature",
      "Waiting",
      "Delivery",
      "Closed package",
    ],
  },
  pillars: {
    title: "Three pillars — one controlled system",
    subtitle:
      "A driver-friendly mobile flow, company operational control, and an auditable decision trail.",
    items: [
      {
        title: "Driver-friendly app",
        description:
          "Trips, stops, documents, signatures, and events in an offline-capable mobile UI.",
      },
      {
        title: "Company control",
        description:
          "Dispatcher overview, permissions, alerts, and document tracking in the company portal.",
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
        description: "Pickup and delivery stops, tasks, and document requirements.",
      },
      {
        title: "Driver acceptance",
        description: "Assignment, acceptance, and a controlled session start.",
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
  homeModules: {
    title: "Product surfaces",
    subtitle:
      "Every surface shares the same trip and document model. Details live on the product pages.",
    detailsLink: "Details",
    items: [
      {
        title: "Driver app",
        description:
          "Trips, stops, documents, and signatures in an offline-capable mobile flow. Drivers always see the next required action.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Company portal",
        description:
          "Operational overview: active trips, missing documents, alerts, and permissions in one place.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documents & signatures",
        description:
          "Trip-linked paperwork, signature states, and an exportable closed trip package.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Messaging & alerts",
        description:
          "Trip-linked communication. Notification features can be activated as part of the pilot program.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit & permissions",
        description:
          "Role-based access, searchable events, and controlled support access.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline operation",
        description:
          "Drivers can keep working on weak networks; changes finalize when sync completes.",
        href: "/driver-app",
        icon: "offline",
      },
    ],
  },
  documentsFlow: {
    title: "Documents & signatures",
    subtitle:
      "Documents link to the trip, can be signed and reviewed, then closed into an exportable package.",
    steps: [
      {
        title: "Upload or create",
        description: "CMR, delivery note, photo, or digital template.",
      },
      {
        title: "Linking",
        description: "Assigned to trip, driver, or vehicle context.",
      },
      {
        title: "Sign and review",
        description: "Status flow: awaiting signature → signed → under review.",
      },
      {
        title: "Closed trip package",
        description:
          "Exportable documents and events — an auditable summary.",
      },
    ],
    statuses: [
      "Uploaded",
      "Missing",
      "Awaiting signature",
      "Signed",
      "Under review",
    ],
    detailsLink: "Documents in detail",
  },
  offline: {
    title: "Offline operation & sync",
    subtitle:
      "Work continues on weak networks — finalization happens after sync.",
    cards: [
      {
        title: "Local save",
        description: "Driver changes are stored safely on the device.",
      },
      {
        title: "Visible sync",
        description: "Pending changes stay visible until connectivity returns.",
      },
      {
        title: "Conflict signalling",
        description: "Conflicting sources are logged — never silently overwritten.",
      },
    ],
    detailsLink: "Driver app",
  },
  responsibleUse: {
    title: "Responsible use",
    subtitle: "Short, important limits — details live on the legal pages.",
    items: [
      "ViaNexis is not a certified eFTI platform and does not promise automatic authority acceptance.",
      "OCR, AI, and translation are assistive — human review is required.",
      "The system does not provide legal advice.",
      "It is not an emergency or SOS service.",
    ],
    detailsLink: "Full responsible-use notices",
  },
  pilotCta: {
    title: "Controlled pilot access",
    subtitle:
      "ViaNexis is currently available through a pilot program with selected carriers and drivers. Access is activated after individual discussion and approval.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Active trip",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      { label: "Next stop", value: "Pickup · Budapest (demo)", status: "En route" },
      { label: "Document", value: "CMR — awaiting signature", status: "Action" },
      { label: "Sync", value: "1 change pending", status: "Offline" },
    ],
    phoneCaption: "Product demo — anonymized sample data.",
    browserTitle: "Operations control",
    browserSubtitle: "Demo fleet · dispatcher view",
    browserColumns: ["Trip", "Stop", "Document", "Status"],
    browserRows: [
      ["VN-2407-A18", "Budapest (demo)", "CMR missing", "Alert"],
      ["VN-2407-B03", "Győr (demo)", "POD signed", "En route"],
      ["VN-2407-C11", "Vienna (demo)", "Under review", "Pre-close"],
    ],
    browserCaption: "Company portal demo — not live customer data.",
    driver: {
      navHome: "Home",
      navTrips: "Trips",
      navDocs: "Docs",
      navMore: "More",
      tripStatus: "Trip in progress",
      nextStopLabel: "Next stop",
      nextStopValue: "Pickup · Budapest (demo)",
      documentLabel: "Document",
      documentValue: "Digital CMR",
      documentAction: "Signature required",
      syncLabel: "Connection",
      syncValue: "Offline · 1 pending",
    },
    portal: {
      roleLabel: "Role: Dispatcher",
      alertLabel: "Alert",
      alertValue: "VN-2407-A18 · CMR awaiting signature",
      auditLabel: "Latest audit event",
      auditValue: "Document status changed · driver app",
    },
  },
  statusLabels: {
    available: "Available",
    pilot: "Pilot",
    development: "In development",
  },
  productPage: {
    highlightsTitle: "Key capabilities",
    capabilitiesTitle: "What this surface provides",
    statusesTitle: "Status labels",
  },
  authority: {
    heroSubtitle:
      "Time- and scope-limited access to trip evidence — not a certified eFTI platform.",
    foundationBadge: "Technical readiness",
    notCertifiedBadge: "Not certified eFTI",
    foundationTitle: "What readiness means",
    foundationSubtitle:
      "Structured data and controlled sharing — without a certificate or permit claim.",
    extraDisclaimer:
      "ViaNexis does not promise authority acceptance in every country. Legal and regulatory compliance remains the customer’s responsibility.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Trip list and stops",
        description: "Active trips, next actions, and stop tasks.",
        status: "available",
      },
      {
        title: "Documents and signature",
        description: "Uploads, CMR tasks, and signature capture.",
        status: "available",
      },
      {
        title: "Offline work",
        description: "Local save with visible pending sync.",
        status: "available",
      },
      {
        title: "Messaging",
        description: "Trip-linked communication for drivers.",
        status: "pilot",
      },
    ],
    "company-admin": [
      {
        title: "Active trip list",
        description: "Operational overview with stops and statuses.",
        status: "available",
      },
      {
        title: "Missing-document alerts",
        description: "Missing or unsigned documents are immediately visible.",
        status: "available",
      },
      {
        title: "Permissions",
        description: "Role-based access to company data.",
        status: "available",
      },
      {
        title: "Audit events",
        description: "Searchable decision and document trail.",
        status: "pilot",
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
        title: "Closed trip package",
        description: "Exportable documents and events.",
        status: "pilot",
      },
      {
        title: "Template management",
        description: "Central document templates — gradual rollout.",
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
        description: "Controlled session and device management.",
        status: "pilot",
      },
      {
        title: "Support access",
        description: "Time-limited, logged support entry.",
        status: "pilot",
      },
    ],
  },
};

export function resolveVisualMarketing(locale: string): VisualMarketingContent {
  if (locale === "hu") return visualMarketingHu;
  return visualMarketingEn;
}
