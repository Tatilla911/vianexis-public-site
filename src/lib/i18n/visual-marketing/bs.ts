import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingBs: VisualMarketingContent = {
  skipToContent: "Preskoči na sadržaj",
  brandVisuals: {
    routeLabel: "Aktivna ruta",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "Ne spaja samo ruta.",
    networkSubtitle: "Stajanja, dokumenti, potpisi, poruke i odluke pripadaju istom toku putovanja - u vremenskom redosledu, sa dozvolama i tragom događaja koji se može pretraživati.",
    workflowEvents: [
      "Odlazak",
      "Preuzimanje",
      "Dokument",
      "Potpis",
      "Čekam",
      "Dostava",
      "Zatvoreni paket"
    ],
  },
  pillars: {
    title: "Tri stuba - jedan kontrolisani sistem",
    subtitle: "Mobilni protok prilagođen vozaču, operativna kontrola kompanije i trag odluka koji se može revidirati.",
    items: [
      {
        title: "Aplikacija prilagođena vozaču",
        description: "Putovanja, zaustavljanja, dokumenti, potpisi i događaji u mobilnom korisničkom sučelju s mogućnošću van mreže.",
      },
      {
        title: "Kontrola kompanije",
        description: "Pregled dispečera, dozvole, upozorenja i praćenje dokumenata na portalu kompanije.",
      },
      {
        title: "Revizijske operacije",
        description: "Događaji, potpisi i odluke s dnevnikom koji se može pretraživati ​​— bez pretjeranih sigurnosnih tvrdnji.",
      }
    ],
  },
  process: {
    title: "Osnovni tok rada putovanja",
    subtitle: "Od kreiranja do zatvorenog paketa — strukturirani koraci sa pristupom koji ima dozvolu.",
    steps: [
      {
        title: "Kreirajte putovanje",
        description: "Zaustavljanje preuzimanja i isporuke, zadaci i zahtjevi za dokumentima.",
      },
      {
        title: "Prihvatanje vozača",
        description: "Dodjela, prihvatanje i početak kontrolirane sesije.",
      },
      {
        title: "Zaustavi i zadaci",
        description: "Višestruki zapisi zaustavljanja, zadataka, događaja i šteta.",
      },
      {
        title: "Dokumenti i potpisi",
        description: "Otpremite, potpišite, pregledajte — onda zatvoreni paket putovanja.",
      }
    ],
  },
  homeModules: {
    title: "Površine proizvoda",
    subtitle: "Svaka površina dijeli isti model putovanja i dokumenta. Detalji uživo na stranicama proizvoda.",
    detailsLink: "Detalji",
    items: [
      {
        title: "Aplikacija za vozače",
        description: "Putovanja, zaustavljanja, dokumenti i potpisi u mobilnom toku koji je sposoban van mreže. Vozači uvijek vide sljedeću potrebnu radnju.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal kompanije",
        description: "Operativni pregled: aktivna putovanja, nedostajući dokumenti, upozorenja i dozvole na jednom mjestu.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenti i potpisi",
        description: "Dokumentacija vezana za putovanje, potpisi i zatvoreni paket za putovanje koji se može izvesti.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Poruke i upozorenja",
        description: "Komunikacija vezana za putovanje. Funkcije obavještenja mogu se aktivirati kao dio pilot programa.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revizija i dozvole",
        description: "Pristup zasnovan na ulogama, pretraživi događaji i kontrolirani pristup podršci.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline rad",
        description: "Vozači mogu nastaviti raditi na slabim mrežama; promjene se finaliziraju kada se sinhronizacija završi.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenti i potpisi",
    subtitle: "Dokumenti se povezuju sa putovanjem, mogu se potpisati i pregledati, a zatim zatvoriti u paket za izvoz.",
    steps: [
      {
        title: "Otpremite ili kreirajte",
        description: "CMR, otpremnica, fotografija ili digitalni predložak.",
      },
      {
        title: "Povezivanje",
        description: "Dodijeljen kontekstu putovanja, vozača ili vozila.",
      },
      {
        title: "Potpišite i pregledajte",
        description: "Tok statusa: čeka se potpis → potpisano → u pregledu.",
      },
      {
        title: "Zatvoreni paket putovanja",
        description: "Izvozni dokumenti i događaji — sažetak koji se može revidirati.",
      }
    ],
    statuses: [
      "Otpremljeno",
      "Nedostaje",
      "Čeka se potpis",
      "Potpisano",
      "Pod pregledom"
    ],
    detailsLink: "Dokumenti detaljno",
  },
  offline: {
    title: "Offline rad i sinhronizacija",
    subtitle: "Rad se nastavlja na slabim mrežama — finalizacija se dešava nakon sinhronizacije.",
    cards: [
      {
        title: "Lokalno spremanje",
        description: "Promjene drajvera su sigurno pohranjene na uređaju.",
      },
      {
        title: "Vidljiva sinhronizacija",
        description: "Promjene na čekanju ostaju vidljive dok se ne vrati veza.",
      },
      {
        title: "Signalizacija sukoba",
        description: "Konfliktni izvori se evidentiraju - nikada se tiho ne prepisuju.",
      }
    ],
    detailsLink: "Aplikacija za vozače",
  },
  responsibleUse: {
    title: "Odgovorno korištenje",
    subtitle: "Kratka, važna ograničenja — detalji uživo na pravnim stranicama.",
    items: [
      "ViaNexis nije certificirana eFTI platforma i ne obećava automatsko prihvatanje ovlaštenja.",
      "OCR, AI i prijevod su pomoćni - potreban je ljudski pregled.",
      "Sistem ne pruža pravne savjete.",
      "To nije hitna ili SOS služba."
    ],
    detailsLink: "Obavještenja o potpuno odgovornom korištenju",
  },
  pilotCta: {
    title: "Kontrolisani pristup pilotu",
    subtitle: "ViaNexis je trenutno dostupan kroz pilot program sa odabranim operaterima i vozačima. Pristup se aktivira nakon individualne rasprave i odobrenja.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktivno putovanje",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Sledeća stanica",
        value: "Preuzimanje · Budimpešta (demo)",
        status: "Na putu",
      },
      {
        label: "Dokument",
        value: "CMR — čeka se potpis",
        status: "Akcija",
      },
      {
        label: "Sync",
        value: "1 promjena na čekanju",
        status: "Offline",
      }
    ],
    phoneCaption: "Demo proizvoda — anonimni uzorci podataka.",
    browserTitle: "Kontrola operacija",
    browserSubtitle: "Demo flota · dispečerski prikaz",
    browserColumns: [
      "Putovanje",
      "Stani",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budimpešta (demo)",
        "CMR nedostaje",
        "Alert"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD potpisan",
        "Na putu"
      ],
      [
        "VN-2407-C11",
        "Beč (demo)",
        "Pod pregledom",
        "Pre-close"
      ]
    ],
    browserCaption: "Demo portala kompanije — ne živi podaci o kupcima.",
    driver: {
      navHome: "Dom",
      navTrips: "Putovanja",
      navDocs: "Docs",
      navMore: "Više",
      tripStatus: "Putovanje u toku",
      nextStopLabel: "Sledeća stanica",
      nextStopValue: "Preuzimanje · Budimpešta (demo)",
      documentLabel: "Dokument",
      documentValue: "Digital CMR",
      documentAction: "Potpis je obavezan",
      syncLabel: "Veza",
      syncValue: "Van mreže · 1 na čekanju",
    },
    portal: {
      roleLabel: "Uloga: dispečer",
      alertLabel: "Alert",
      alertValue: "VN-2407-A18 · CMR čeka potpis",
      auditLabel: "Najnoviji događaj revizije",
      auditValue: "Status dokumenta je promijenjen · aplikacija vozača",
    },
  },
  statusLabels: {
    available: "Dostupan",
    pilot: "Pilot",
    development: "U razvoju",
  },
  productPage: {
    highlightsTitle: "Ključne mogućnosti",
    capabilitiesTitle: "Šta ova površina pruža",
    statusesTitle: "Statusne oznake",
  },
  authority: {
    heroSubtitle: "Vremenski i ograničen pristup dokazima o putovanju - nije certificirana eFTI platforma.",
    foundationBadge: "Tehnička spremnost",
    notCertifiedBadge: "Nije certificiran eFTI",
    foundationTitle: "Šta znači spremnost",
    foundationSubtitle: "Strukturirani podaci i kontrolirano dijeljenje — bez zahtjeva za certifikat ili dozvolu.",
    extraDisclaimer: "ViaNexis ne obećava prihvatanje vlasti u svakoj zemlji. Usklađenost sa zakonima i propisima ostaje odgovornost korisnika.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista putovanja i stajanja",
        description: "Aktivna putovanja, sljedeće radnje i zadaci zaustavljanja.",
        status: "available",
      },
      {
        title: "Dokumenti i potpis",
        description: "Otpremanja, CMR zadaci i hvatanje potpisa.",
        status: "available",
      },
      {
        title: "Offline rad",
        description: "Lokalno spremanje s vidljivom sinhronizacijom na čekanju.",
        status: "available",
      },
      {
        title: "Razmjena poruka",
        description: "Komunikacija vezana za putovanje za vozače.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktivna lista putovanja",
        description: "Pregled rada sa stajalištima i statusima.",
        status: "available",
      },
      {
        title: "Upozorenja o nedostatku dokumenta",
        description: "Dokumenti koji nedostaju ili nisu potpisani su odmah vidljivi.",
        status: "available",
      },
      {
        title: "Dozvole",
        description: "Pristup podacima kompanije zasnovan na ulozi.",
        status: "available",
      },
      {
        title: "Događaji revizije",
        description: "Trag odluka i dokumenata koji se može pretraživati.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Upload i povezivanje",
        description: "Dokumenti povezani sa putovanjem, vozačem ili vozilom.",
        status: "available",
      },
      {
        title: "Signature workflow",
        description: "Čeka se potpis → potpisan → pregled.",
        status: "pilot",
      },
      {
        title: "Zatvoreni paket putovanja",
        description: "Izvozni dokumenti i događaji.",
        status: "pilot",
      },
      {
        title: "Upravljanje šablonima",
        description: "Centralni šabloni dokumenata — postepeno uvođenje.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Pristup zasnovan na ulogama",
        description: "Odvajanje korisnika i kompanije.",
        status: "available",
      },
      {
        title: "Dnevnik revizije",
        description: "Radnje i odluke ostaju pretražive.",
        status: "available",
      },
      {
        title: "Sesija i uređaj",
        description: "Kontrolirana sesija i upravljanje uređajem.",
        status: "pilot",
      },
      {
        title: "Pristup podršci",
        description: "Vremenski ograničen, evidentiran unos podrške.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Jezik",
    draftSuffix: "· nacrt",
    breadcrumb: "Breadcrumb",
    primaryNav: "Primarno",
    importantNotice: "Važna obavijest",
  },
};
