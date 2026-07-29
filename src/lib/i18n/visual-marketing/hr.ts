import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingHr: VisualMarketingContent = {
  skipToContent: "Preskoči na sadržaj",
  brandVisuals: {
    routeLabel: "Aktivna ruta",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis mreža",
    networkTitle: "Nije samo ruta ono što povezuje.",
    networkSubtitle: "Zaustavljanja, dokumenti, potpisi, poruke i odluke pripadaju istom tijeku putovanja — vremenskim redoslijedom, s dopuštenjima i pretraživim tragom događaja.",
    workflowEvents: [
      "Odlazak",
      "Kurva",
      "Dokument",
      "Potpis",
      "Čekanje",
      "Dostava",
      "Zatvoreno pakiranje"
    ],
  },
  pillars: {
    title: "Tri stupa — jedan kontrolirani sustav",
    subtitle: "Mobilni tijek prilagođen vozaču, operativna kontrola tvrtke i evidencija odluka.",
    items: [
      {
        title: "Aplikacija prilagođena vozaču",
        description: "Putovanja, zaustavljanja, dokumenti, potpisi i događaji u mobilnom sučelju koje podržava izvanmrežni rad.",
      },
      {
        title: "Kontrola poduzeća",
        description: "Dispečerski pregled, dopuštenja, upozorenja i praćenje dokumenata na portalu tvrtke.",
      },
      {
        title: "Revizijske operacije",
        description: "Događaji, potpisi i odluke s dnevnikom koji se može pretraživati ​​— bez pretjeranih sigurnosnih zahtjeva.",
      }
    ],
  },
  process: {
    title: "Osnovni radni tijek putovanja",
    subtitle: "Od stvaranja do zatvorenog paketa — strukturirani koraci s pristupom koji je svjestan dopuštenja.",
    steps: [
      {
        title: "Kreiraj putovanje",
        description: "Zaustavljanja preuzimanja i dostave, zadaci i zahtjevi za dokumentima.",
      },
      {
        title: "Prihvaćanje vozača",
        description: "Dodjela, prihvaćanje i početak kontrolirane sesije.",
      },
      {
        title: "Zaustavljanja i zadaci",
        description: "Više zaustavljanja, zadataka, događaja i zapisa o šteti.",
      },
      {
        title: "Dokumenti i potpisi",
        description: "Prenesi, potpiši, pregledaj — zatim zatvoren paket putovanja.",
      }
    ],
  },
  homeModules: {
    title: "Površine proizvoda",
    subtitle: "Svaka površina dijeli isto putovanje i model dokumenta. Detalji su dostupni na stranicama proizvoda.",
    detailsLink: "pojedinosti",
    items: [
      {
        title: "Aplikacija za vozača",
        description: "Putovanja, zaustavljanja, dokumenti i potpisi u izvanmrežnom mobilnom tijeku. Vozači uvijek vide sljedeću potrebnu radnju.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal tvrtke",
        description: "Operativni pregled: aktivna putovanja, dokumenti koji nedostaju, upozorenja i dopuštenja na jednom mjestu.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenti i potpisi",
        description: "Papirologija povezana s putovanjem, države potpisa i paket zatvorenog putovanja za izvoz.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Slanje poruka i upozorenja",
        description: "Komunikacija povezana s putovanjem. Značajke obavijesti mogu se aktivirati kao dio pilot programa.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revizija i dopuštenja",
        description: "Pristup temeljen na ulogama, pretraživi događaji i kontrolirani pristup podršci.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Izvanmrežni rad",
        description: "Upravljački programi mogu nastaviti raditi na slabim mrežama; promjene se finaliziraju kada sinkronizacija završi.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenti i potpisi",
    subtitle: "Dokumenti povezuju s putovanjem, mogu se potpisati i pregledati, zatim zatvoriti u paket za izvoz.",
    steps: [
      {
        title: "Učitaj ili stvori",
        description: "CMR, otpremnica, fotografija ili digitalni predložak.",
      },
      {
        title: "Povezivanje",
        description: "Dodjeljuje se kontekstu putovanja, vozača ili vozila.",
      },
      {
        title: "Potpišite i pregledajte",
        description: "Tijek statusa: čeka se potpis → potpisano → u pregledu.",
      },
      {
        title: "Zatvoreni paket putovanja",
        description: "Dokumenti i događaji koji se mogu izvesti — pregledni sažetak.",
      }
    ],
    statuses: [
      "Učitano",
      "Nedostaje",
      "Čeka se potpis",
      "Potpisano",
      "U pregledu"
    ],
    detailsLink: "Dokumenti detaljno",
  },
  offline: {
    title: "Izvanmrežni rad i sinkronizacija",
    subtitle: "Rad se nastavlja na slabim mrežama — finalizacija se događa nakon sinkronizacije.",
    cards: [
      {
        title: "Lokalno spremanje",
        description: "Promjene upravljačkog programa sigurno su pohranjene na uređaju.",
      },
      {
        title: "Vidljiva sinkronizacija",
        description: "Promjene na čekanju ostaju vidljive dok se ne uspostavi veza.",
      },
      {
        title: "Signalizacija sukoba",
        description: "Sukobljeni izvori se bilježe - nikada se tiho ne prepisuju.",
      }
    ],
    detailsLink: "Aplikacija za vozača",
  },
  responsibleUse: {
    title: "Odgovorno korištenje",
    subtitle: "Kratka, važna ograničenja — detalji su dostupni na pravnim stranicama.",
    items: [
      "ViaNexis nije certificirana eFTI platforma i ne obećava automatsko prihvaćanje autoriteta.",
      "OCR, AI i prijevod su pomoćni — potreban je ljudski pregled.",
      "Sustav ne pruža pravne savjete.",
      "To nije hitna ili SOS služba."
    ],
    detailsLink: "Potpune obavijesti o odgovornom korištenju",
  },
  pilotCta: {
    title: "Kontrolirani pristup pilota",
    subtitle: "ViaNexis je trenutno dostupan kroz pilot program s odabranim prijevoznicima i vozačima. Pristup se aktivira nakon individualnog razgovora i odobrenja.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktivno putovanje",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Sljedeća stanica",
        value: "Preuzimanje · Budimpešta (demo)",
        status: "Na putu",
      },
      {
        label: "Dokument",
        value: "CMR — čeka potpis",
        status: "Akcijski",
      },
      {
        label: "Sinkronizacija",
        value: "1 promjena na čekanju",
        status: "Izvan mreže",
      }
    ],
    phoneCaption: "Demo proizvoda — anonimizirani ogledni podaci.",
    browserTitle: "Kontrola operacija",
    browserSubtitle: "Demo flota · prikaz dispečera",
    browserColumns: [
      "Putovanje",
      "Stop",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budimpešta (demo)",
        "Nedostaje CMR",
        "uzbuna"
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
        "U pregledu",
        "Prethodno zatvoriti"
      ]
    ],
    browserCaption: "Demonstracija portala tvrtke — ne podaci o klijentima uživo.",
    driver: {
      navHome: "Dom",
      navTrips: "izleti",
      navDocs: "dokumenti",
      navMore: "Više",
      tripStatus: "Putovanje u tijeku",
      nextStopLabel: "Sljedeća stanica",
      nextStopValue: "Preuzimanje · Budimpešta (demo)",
      documentLabel: "Dokument",
      documentValue: "Digitalni CMR",
      documentAction: "Potreban potpis",
      syncLabel: "Veza",
      syncValue: "Izvan mreže · 1 na čekanju",
    },
    portal: {
      roleLabel: "Uloga: Dispečer",
      alertLabel: "uzbuna",
      alertValue: "VN-2407-A18 · CMR čeka potpis",
      auditLabel: "Najnoviji revizijski događaj",
      auditValue: "Status dokumenta promijenjen · aplikacija vozača",
    },
  },
  statusLabels: {
    available: "na raspolaganju",
    pilot: "Pilot",
    development: "U razvoju",
  },
  productPage: {
    highlightsTitle: "Ključne mogućnosti",
    capabilitiesTitle: "Što ova površina pruža",
    statusesTitle: "Oznake stanja",
  },
  authority: {
    heroSubtitle: "Vremenski i opsegom ograničen pristup dokazima putovanja — nije certificirana eFTI platforma.",
    foundationBadge: "Tehnička spremnost",
    notCertifiedBadge: "Nije certificiran eFTI",
    foundationTitle: "Što znači spremnost",
    foundationSubtitle: "Strukturirani podaci i kontrolirano dijeljenje — bez zahtjeva za certifikatom ili dozvolom.",
    extraDisclaimer: "ViaNexis ne obećava prihvaćanje vlasti u svakoj zemlji. Usklađenost s pravnim i regulatornim propisima ostaje odgovornost korisnika.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Popis putovanja i zaustavljanja",
        description: "Aktivna putovanja, sljedeće radnje i zadaci zaustavljanja.",
        status: "available",
      },
      {
        title: "Dokumenti i potpis",
        description: "Prijenos, CMR zadaci i snimanje potpisa.",
        status: "available",
      },
      {
        title: "Izvanmrežni rad",
        description: "Lokalno spremanje s vidljivom sinkronizacijom na čekanju.",
        status: "available",
      },
      {
        title: "Slanje poruka",
        description: "Komunikacija povezana s putovanjem za vozače.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktivni popis putovanja",
        description: "Pregled rada sa stajalištima i statusima.",
        status: "available",
      },
      {
        title: "Upozorenja o nestalim dokumentima",
        description: "Dokumenti koji nedostaju ili su nepotpisani odmah su vidljivi.",
        status: "available",
      },
      {
        title: "Dozvole",
        description: "Pristup podacima tvrtke temeljen na ulogama.",
        status: "available",
      },
      {
        title: "Revizijski događaji",
        description: "Pretraživa odluka i trag dokumenata.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Prijenos i povezivanje",
        description: "Dokumenti povezani s putovanjem, vozačem ili vozilom.",
        status: "available",
      },
      {
        title: "Tijek rada potpisa",
        description: "Čeka se potpis → potpisano → pregled.",
        status: "pilot",
      },
      {
        title: "Zatvoreni paket putovanja",
        description: "Dokumenti i događaji koji se mogu izvoziti.",
        status: "pilot",
      },
      {
        title: "Upravljanje predlošcima",
        description: "Središnji predlošci dokumenata — postupno uvođenje.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Pristup temeljen na ulogama",
        description: "Odvajanje korisnika i poduzeća.",
        status: "available",
      },
      {
        title: "Dnevnik revizije",
        description: "Radnje i odluke ostaju pretraživi.",
        status: "available",
      },
      {
        title: "Sesija i uređaj",
        description: "Kontrolirana sesija i upravljanje uređajem.",
        status: "pilot",
      },
      {
        title: "Pristup podršci",
        description: "Vremenski ograničen, zabilježen unos podrške.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Jezik",
    draftSuffix: "· nacrt",
    breadcrumb: "Breadcrumb",
    primaryNav: "Primarni",
    importantNotice: "Važna obavijest",
  },
};
