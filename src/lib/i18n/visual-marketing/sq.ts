import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingSq: VisualMarketingContent = {
  skipToContent: "Kalo te përmbajtja",
  brandVisuals: {
    routeLabel: "Rrugë aktive",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Rrjeti ViaNexis",
    networkTitle: "Nuk është vetëm rruga që lidh.",
    networkSubtitle: "Ndalesat, dokumentet, nënshkrimet, mesazhet dhe vendimet i përkasin të njëjtit fluks udhëtimi — sipas rendit kohor, me leje dhe një gjurmë ngjarjesh të kërkueshme.",
    workflowEvents: [
      "Nisja",
      "Marrje",
      "Dokumenti",
      "Nënshkrimi",
      "Në pritje",
      "Dorëzimi",
      "Paketa e mbyllur"
    ],
  },
  pillars: {
    title: "Tre shtylla - një sistem i kontrolluar",
    subtitle: "Një rrjedhë celulare miqësore për shoferin, kontroll operacional i kompanisë dhe një gjurmë vendimesh të auditueshme.",
    items: [
      {
        title: "Aplikacion i përshtatshëm për shoferin",
        description: "Udhëtime, ndalesa, dokumente, nënshkrime dhe ngjarje në një ndërfaqe celulare të aftë për jashtë linje.",
      },
      {
        title: "Kontrolli i kompanisë",
        description: "Pasqyra e dispeçerit, lejet, sinjalizimet dhe gjurmimi i dokumenteve në portalin e kompanisë.",
      },
      {
        title: "Operacionet e auditueshme",
        description: "Ngjarjet, nënshkrimet dhe vendimet me një regjistër të kërkueshëm - pa pretendime të ekzagjeruara sigurie.",
      }
    ],
  },
  process: {
    title: "Rrjedha kryesore e punës së udhëtimit",
    subtitle: "Nga krijimi në një paketë të mbyllur - hapa të strukturuar me akses të vetëdijshëm për lejet.",
    steps: [
      {
        title: "Krijo udhëtim",
        description: "Ndalesat e marrjes dhe dorëzimit, detyrat dhe kërkesat për dokumente.",
      },
      {
        title: "Pranimi i shoferit",
        description: "Caktimi, pranimi dhe fillimi i një seance të kontrolluar.",
      },
      {
        title: "Ndalesa dhe detyra",
        description: "Ndalesa të shumta, detyra, ngjarje dhe regjistrime dëmtimi.",
      },
      {
        title: "Dokumentet dhe nënshkrimet",
        description: "Ngarkoni, nënshkruani, rishikoni - më pas një paketë udhëtimi të mbyllur.",
      }
    ],
  },
  homeModules: {
    title: "Sipërfaqet e produktit",
    subtitle: "Çdo sipërfaqe ndan të njëjtin model udhëtimi dhe dokumenti. Detajet jetojnë në faqet e produktit.",
    detailsLink: "Detajet",
    items: [
      {
        title: "Aplikacioni i shoferit",
        description: "Udhëtime, ndalesa, dokumente dhe nënshkrime në një rrjedhë celulare të aftë për jashtë linje. Drejtuesit gjithmonë shohin veprimin tjetër të kërkuar.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portali i kompanisë",
        description: "Pasqyrë operacionale: udhëtime aktive, dokumente që mungojnë, sinjalizime dhe leje në një vend.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumentet dhe nënshkrimet",
        description: "Dokumentet e lidhura me udhëtimin, gjendjet e nënshkrimit dhe një paketë udhëtimi e mbyllur e eksportueshme.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Mesazhe dhe sinjalizime",
        description: "Komunikimi i lidhur me udhëtimin. Karakteristikat e njoftimit mund të aktivizohen si pjesë e programit pilot.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Auditimi dhe lejet",
        description: "Akses i bazuar në role, ngjarje të kërkueshme dhe akses i kontrolluar në mbështetje.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operacioni jashtë linje",
        description: "Drejtuesit mund të vazhdojnë të punojnë në rrjete të dobëta; ndryshimet finalizohen kur sinkronizimi përfundon.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumentet dhe nënshkrimet",
    subtitle: "Dokumentet lidhen me udhëtimin, mund të nënshkruhen dhe rishikohen, më pas të mbyllen në një paketë të eksportueshme.",
    steps: [
      {
        title: "Ngarkoni ose krijoni",
        description: "CMR, shënimi i dorëzimit, foto ose shabllon dixhital.",
      },
      {
        title: "Lidhja",
        description: "Caktuar për kontekstin e udhëtimit, shoferit ose automjetit.",
      },
      {
        title: "Nënshkruani dhe rishikoni",
        description: "Rrjedha e statusit: në pritje të nënshkrimit → nënshkruar → në shqyrtim.",
      },
      {
        title: "Paketa e mbyllur e udhëtimit",
        description: "Dokumentet dhe ngjarjet e eksportueshme - një përmbledhje e auditueshme.",
      }
    ],
    statuses: [
      "Ngarkuar",
      "Mungon",
      "Në pritje të nënshkrimit",
      "Nënshkruar",
      "Në shqyrtim"
    ],
    detailsLink: "Dokumentet në detaje",
  },
  offline: {
    title: "Funksionimi dhe sinkronizimi jashtë linje",
    subtitle: "Puna vazhdon në rrjetet e dobëta - finalizimi ndodh pas sinkronizimit.",
    cards: [
      {
        title: "Ruajtja lokale",
        description: "Ndryshimet e drejtuesit ruhen në mënyrë të sigurt në pajisje.",
      },
      {
        title: "Sinkronizimi i dukshëm",
        description: "Ndryshimet në pritje mbeten të dukshme derisa të kthehet lidhja.",
      },
      {
        title: "Sinjalizim konflikti",
        description: "Burimet kontradiktore regjistrohen - kurrë nuk mbishkruhen në heshtje.",
      }
    ],
    detailsLink: "Aplikacioni i shoferit",
  },
  responsibleUse: {
    title: "Përdorimi i përgjegjshëm",
    subtitle: "Kufij të shkurtër, të rëndësishëm — detajet drejtpërdrejt në faqet ligjore.",
    items: [
      "ViaNexis nuk është një platformë e certifikuar eFTI dhe nuk premton pranim automatik të autoritetit.",
      "OCR, AI dhe përkthimi janë ndihmës - kërkohet rishikimi njerëzor.",
      "Sistemi nuk ofron këshilla ligjore.",
      "Nuk është shërbim urgjence apo SOS."
    ],
    detailsLink: "Njoftimet e përdorimit të plotë të përgjegjshëm",
  },
  pilotCta: {
    title: "Akses i kontrolluar i pilotit",
    subtitle: "ViaNexis aktualisht është në dispozicion përmes një programi pilot me operatorë dhe drejtues të zgjedhur. Qasja aktivizohet pas diskutimit dhe miratimit individual.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Udhëtim aktiv",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Ndalesa tjetër",
        value: "Marrëdhënie · Budapest (demo)",
        status: "Gjatë rrugës",
      },
      {
        label: "Dokumenti",
        value: "CMR - në pritje të nënshkrimit",
        status: "Veprimi",
      },
      {
        label: "Sinkronizimi",
        value: "1 ndryshim në pritje",
        status: "Jashtë linje",
      }
    ],
    phoneCaption: "Demontimi i produktit - të dhëna të mostrës anonime.",
    browserTitle: "Kontrolli i operacioneve",
    browserSubtitle: "Flota demonstruese · pamje dispeçer",
    browserColumns: [
      "Udhëtim",
      "Ndalo",
      "Dokumenti",
      "Statusi"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "mungon CMR",
        "Alarmi"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD nënshkruar",
        "Gjatë rrugës"
      ],
      [
        "VN-2407-C11",
        "Vjenë (demo)",
        "Në shqyrtim",
        "Para-mbyll"
      ]
    ],
    browserCaption: "Demoja e portalit të kompanisë - jo të dhëna të drejtpërdrejta të klientit.",
    driver: {
      navHome: "Shtëpi",
      navTrips: "Udhëtime",
      navDocs: "Dokumentet",
      navMore: "Më shumë",
      tripStatus: "Udhëtimi në vazhdim",
      nextStopLabel: "Ndalesa tjetër",
      nextStopValue: "Marrëdhënie · Budapest (demo)",
      documentLabel: "Dokumenti",
      documentValue: "CMR dixhitale",
      documentAction: "Kërkohet nënshkrimi",
      syncLabel: "Lidhja",
      syncValue: "Jashtë linje · 1 në pritje",
    },
    portal: {
      roleLabel: "Roli: Dispeçer",
      alertLabel: "Alarmi",
      alertValue: "VN-2407-A18 · CMR në pritje të nënshkrimit",
      auditLabel: "Ngjarja e fundit e auditimit",
      auditValue: "Statusi i dokumentit ndryshoi · aplikacioni i shoferit",
    },
  },
  statusLabels: {
    available: "Në dispozicion",
    pilot: "Pilot",
    development: "Në zhvillim",
  },
  productPage: {
    highlightsTitle: "Aftësitë kryesore",
    capabilitiesTitle: "Çfarë ofron kjo sipërfaqe",
    statusesTitle: "Etiketat e statusit",
  },
  authority: {
    heroSubtitle: "Akses i kufizuar në kohë dhe fushëveprimi në dëshmitë e udhëtimit - jo një platformë e certifikuar eFTI.",
    foundationBadge: "Gatishmëria teknike",
    notCertifiedBadge: "eFTI e pa certifikuar",
    foundationTitle: "Çfarë do të thotë gatishmëri",
    foundationSubtitle: "Të dhëna të strukturuara dhe shkëmbim i kontrolluar — pa pretendim për certifikatë ose leje.",
    extraDisclaimer: "ViaNexis nuk premton pranim të autoritetit në çdo vend. Pajtueshmëria ligjore dhe rregullatore mbetet përgjegjësi e klientit.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista e udhëtimeve dhe ndalesat",
        description: "Udhëtimet aktive, veprimet e radhës dhe detyrat e ndalimit.",
        status: "available",
      },
      {
        title: "Dokumentet dhe nënshkrimi",
        description: "Ngarkimet, detyrat CMR dhe kapja e nënshkrimit.",
        status: "available",
      },
      {
        title: "Punë jashtë linje",
        description: "Ruajtje lokale me sinkronizim të dukshëm në pritje.",
        status: "available",
      },
      {
        title: "Mesazhimi",
        description: "Komunikimi i lidhur me udhëtimin për shoferët.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista aktive e udhëtimeve",
        description: "Pasqyrë operacionale me ndalesa dhe statuse.",
        status: "available",
      },
      {
        title: "Sinjalizime për dokumente që mungojnë",
        description: "Dokumentet e munguara ose të panënshkruara shihen menjëherë.",
        status: "available",
      },
      {
        title: "Lejet",
        description: "Akses i bazuar në role në të dhënat e kompanisë.",
        status: "available",
      },
      {
        title: "Ngjarjet e auditimit",
        description: "Gjurmët e vendimeve dhe dokumenteve të kërkueshme.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Ngarkoni dhe lidhni",
        description: "Dokumentet që lidhen me udhëtimin, shoferin ose automjetin.",
        status: "available",
      },
      {
        title: "Rrjedha e punës e nënshkrimit",
        description: "Në pritje të nënshkrimit → nënshkruar → rishikim.",
        status: "pilot",
      },
      {
        title: "Paketa e mbyllur e udhëtimit",
        description: "Dokumentet dhe ngjarjet e eksportueshme.",
        status: "pilot",
      },
      {
        title: "Menaxhimi i shablloneve",
        description: "Modelet qendrore të dokumenteve - hapje graduale.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Akses i bazuar në role",
        description: "Ndarja e përdoruesit dhe e kompanisë.",
        status: "available",
      },
      {
        title: "Regjistri i auditimit",
        description: "Veprimet dhe vendimet mbeten të kërkueshme.",
        status: "available",
      },
      {
        title: "Sesioni dhe pajisja",
        description: "Sesioni i kontrolluar dhe menaxhimi i pajisjes.",
        status: "pilot",
      },
      {
        title: "Mbështetja e aksesit",
        description: "Hyrja e mbështetjes me kohë të kufizuar, e regjistruar.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Gjuha",
    draftSuffix: "· draft",
    breadcrumb: "Thërrim buke",
    primaryNav: "fillore",
    importantNotice: "Njoftim i rëndësishëm",
  },
};
