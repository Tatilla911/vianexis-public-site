import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingHu: VisualMarketingContent = {
  skipToContent: "Ugrás a tartalomra",
  brandVisuals: {
    routeLabel: "Aktív útvonal",
    routeId: "VN-2407-A18",
    statusLabel: "Élő",
    networkOverline: "ViaNexis Network",
    networkTitle: "Nem csak a fuvar útvonala kapcsolódik össze.",
    networkSubtitle: "A megállók, dokumentumok, aláírások, üzenetek és döntések ugyanahhoz a fuvarfolyamathoz kapcsolódnak — időrendben, jogosultságokkal és visszakereshető eseményekkel.",
    workflowEvents: [
      "Indulás",
      "Átvétel",
      "Dokumentum",
      "Aláírás",
      "Várakozás",
      "Leadás",
      "Lezárt csomag"
    ],
  },
  pillars: {
    title: "Három pillér — egy kontrollált rendszer",
    subtitle: "Sofőrbarát mobilfolyamat, céges operatív kontroll és auditálható döntési nyomvonal.",
    items: [
      {
        title: "Sofőrbarát alkalmazás",
        description: "Fuvarok, megállók, dokumentumok, aláírások és események egy offline-képes mobilfelületen.",
      },
      {
        title: "Céges kontroll",
        description: "Irányítói áttekintés, jogosultságok, figyelmeztetések és dokumentumkövetés a céges portálon.",
      },
      {
        title: "Auditálható működés",
        description: "Események, aláírások és döntések visszakereshető naplóval — túlzó biztonsági ígéret nélkül.",
      }
    ],
  },
  process: {
    title: "Fő fuvarfolyamat",
    subtitle: "A létrehozástól a lezárt csomagig — strukturált, jogosultsághoz kötött lépésekkel.",
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
      }
    ],
  },
  homeModules: {
    title: "Termékfelületek",
    subtitle: "Minden felület ugyanarra a fuvar- és dokumentummodellre épül. A részletek a termékoldalakon.",
    detailsLink: "Részletek",
    items: [
      {
        title: "Sofőr alkalmazás",
        description: "Fuvarok, megállók, dokumentumok és aláírások egy offline-képes mobilfolyamatban. A sofőr tudja, mi a következő teendő.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Céges portál",
        description: "Operatív áttekintés: aktív fuvarok, hiányzó dokumentumok, figyelmeztetések és jogosultságok egy helyen.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumentumok és aláírások",
        description: "Fuvarhoz kötött iratok, aláírási állapotok és exportálható lezárt fuvarcsomag.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Üzenetek és értesítések",
        description: "Fuvarhoz kötött kommunikáció. Az értesítési funkciók a pilotprogram részeként aktiválhatók.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit és jogosultságok",
        description: "Szerepköralapú hozzáférés, visszakereshető események és kontrollált support-hozzáférés.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline működés",
        description: "A sofőr gyenge hálózaton is folytathatja a munkát; a változások szinkronkor kerülnek véglegesítésre.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumentumok és aláírások",
    subtitle: "A dokumentum a fuvarhoz kapcsolódik, aláírható, ellenőrizhető, majd lezárt csomagba kerül.",
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
        description: "Exportálható dokumentumokkal és eseményekkel — auditálható összefoglaló.",
      }
    ],
    statuses: [
      "Feltöltve",
      "Hiányzik",
      "Aláírásra vár",
      "Aláírva",
      "Ellenőrzés alatt"
    ],
    detailsLink: "Dokumentumok részletesen",
  },
  offline: {
    title: "Offline működés és szinkron",
    subtitle: "A munka nem áll meg gyenge hálózaton sem — a véglegesítés szinkron után történik.",
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
      }
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
      "Nem vészhelyzeti vagy SOS szolgáltatás."
    ],
    detailsLink: "Részletes felelős használat",
  },
  pilotCta: {
    title: "Kontrollált pilot hozzáférés",
    subtitle: "A ViaNexis jelenleg kiválasztott fuvarozó cégekkel és sofőrökkel végzett pilotprogramon keresztül érhető el. A hozzáférés egyedi egyeztetés és jóváhagyás után aktiválható.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktív fuvar",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Következő megálló",
        value: "Átvétel · Budapest (demo)",
        status: "Úton",
      },
      {
        label: "Dokumentum",
        value: "CMR — aláírásra vár",
        status: "Teendő",
      },
      {
        label: "Szinkron",
        value: "1 változás várakozik",
        status: "Offline",
      }
    ],
    phoneCaption: "Termékbemutató — anonimizált demo adatok.",
    browserTitle: "Operatív irányítás",
    browserSubtitle: "Demo flotta · diszpécser nézet",
    browserColumns: [
      "Fuvar",
      "Megálló",
      "Dokumentum",
      "Állapot"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR hiányzik",
        "Figyelmeztetés"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD aláírva",
        "Úton"
      ],
      [
        "VN-2407-C11",
        "Wien (demo)",
        "Ellenőrzés",
        "Lezárás előtt"
      ]
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
    heroSubtitle: "Idő- és hatókör-korlátozott hozzáférés a fuvarbizonyítékokhoz — nem minősített eFTI platform.",
    foundationBadge: "Technikai felkészültség",
    notCertifiedBadge: "Nem minősített eFTI",
    foundationTitle: "Mit jelent a felkészültség?",
    foundationSubtitle: "Strukturált adatok és kontrollált megosztás — tanúsítvány vagy engedély nélkül.",
    extraDisclaimer: "A ViaNexis nem ígér hatósági elfogadást minden országban. A jogi és hatósági megfelelés az ügyfél felelőssége.",
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
      }
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
      }
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
      }
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
      }
    ],
  },
  ui: {
    language: "Nyelv",
    draftSuffix: " · piszkozat",
    breadcrumb: "Morzsamenü",
    primaryNav: "Fő navigáció",
    importantNotice: "Fontos tudnivaló",
  },
};
