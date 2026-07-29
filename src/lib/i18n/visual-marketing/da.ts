import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingDa: VisualMarketingContent = {
  skipToContent: "Gå til indhold",
  brandVisuals: {
    routeLabel: "Aktiv rute",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis netværk",
    networkTitle: "Det er ikke kun ruten, der forbinder.",
    networkSubtitle: "Stop, dokumenter, signaturer, beskeder og beslutninger hører til det samme turflow - i tidsrækkefølge med tilladelser og et søgbart hændelsesspor.",
    workflowEvents: [
      "Afgang",
      "Afhentning",
      "Dokument",
      "Signatur",
      "Venter",
      "Levering",
      "Lukket pakke"
    ],
  },
  pillars: {
    title: "Three pillars — one controlled system",
    subtitle: "Et førervenligt mobilflow, virksomhedens operationelle kontrol og et revisionsbart beslutningsspor.",
    items: [
      {
        title: "Drivervenlig app",
        description: "Ture, stop, dokumenter, signaturer og begivenheder i en offline-kompatibel mobil brugergrænseflade.",
      },
      {
        title: "Virksomhedskontrol",
        description: "Dispatcher-oversigt, tilladelser, advarsler og dokumentsporing i virksomhedsportalen.",
      },
      {
        title: "Reviderbare operationer",
        description: "Begivenheder, signaturer og beslutninger med en søgbar log - uden overdrevne sikkerhedskrav.",
      }
    ],
  },
  process: {
    title: "Core trip workflow",
    subtitle: "Fra oprettelse til en lukket pakke - strukturerede trin med tilladelsesbevidst adgang.",
    steps: [
      {
        title: "Opret rejse",
        description: "Afhentnings- og leveringsstop, opgaver og dokumentkrav.",
      },
      {
        title: "Chauffør accept",
        description: "Tildeling, accept og en kontrolleret session starter.",
      },
      {
        title: "Stop og opgaver",
        description: "Flere stop, opgaver, hændelser og skaderegistreringer.",
      },
      {
        title: "Dokumenter og underskrifter",
        description: "Upload, underskriv, anmeld — så en lukket rejsepakke.",
      }
    ],
  },
  homeModules: {
    title: "Produktets overflader",
    subtitle: "Hver overflade deler den samme rejse- og dokumentmodel. Detaljer live på produktsiderne.",
    detailsLink: "Detaljer",
    items: [
      {
        title: "Driver app",
        description: "Ture, stop, dokumenter og signaturer i et offline-kompatibelt mobilflow. Chauffører ser altid den næste nødvendige handling.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Virksomhedsportal",
        description: "Driftsoversigt: aktive ture, manglende dokumenter, advarsler og tilladelser på ét sted.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenter og underskrifter",
        description: "Trip-linked papirarbejde, signaturtilstande og en eksporterbar lukket rejsepakke.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Beskeder og advarsler",
        description: "Trip-linked kommunikation. Notifikationsfunktioner kan aktiveres som en del af pilotprogrammet.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revision og tilladelser",
        description: "Rollebaseret adgang, søgbare begivenheder og kontrolleret supportadgang.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline drift",
        description: "Chauffører kan fortsætte med at arbejde på svage netværk; ændringer afsluttes, når synkroniseringen er fuldført.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenter og underskrifter",
    subtitle: "Dokumenter linker til rejsen, kan underskrives og gennemgås og lukkes derefter i en eksporterbar pakke.",
    steps: [
      {
        title: "Upload eller opret",
        description: "CMR, følgeseddel, foto eller digital skabelon.",
      },
      {
        title: "Sammenkædning",
        description: "Tildelt til rejse-, chauffør- eller køretøjskontekst.",
      },
      {
        title: "Underskriv og anmeld",
        description: "Statusflow: afventer underskrift → underskrevet → under revision.",
      },
      {
        title: "Lukket rejsepakke",
        description: "Eksporterbare dokumenter og hændelser - et revideret resumé.",
      }
    ],
    statuses: [
      "Uploadet",
      "Manglende",
      "Afventer underskrift",
      "Underskrevet",
      "Under revision"
    ],
    detailsLink: "Dokumenter i detaljer",
  },
  offline: {
    title: "Offline drift og synkronisering",
    subtitle: "Arbejdet fortsætter på svage netværk - færdiggørelsen sker efter synkronisering.",
    cards: [
      {
        title: "Lokal gemme",
        description: "Driverændringer gemmes sikkert på enheden.",
      },
      {
        title: "Synlig synkronisering",
        description: "Afventende ændringer forbliver synlige, indtil forbindelsen vender tilbage.",
      },
      {
        title: "Konfliktsignalering",
        description: "Modstridende kilder logges - aldrig overskrives lydløst.",
      }
    ],
    detailsLink: "Driver app",
  },
  responsibleUse: {
    title: "Ansvarlig brug",
    subtitle: "Korte, vigtige grænser — detaljerne findes på de juridiske sider.",
    items: [
      "ViaNexis er ikke en certificeret eFTI-platform og lover ikke automatisk autorisationsaccept.",
      "OCR, AI og oversættelse er hjælpsomme - menneskelig gennemgang er påkrævet.",
      "Systemet yder ikke juridisk rådgivning.",
      "Det er ikke en nød- eller SOS-tjeneste."
    ],
    detailsLink: "Fuldstændige meddelelser om ansvarlig brug",
  },
  pilotCta: {
    title: "Kontrolleret pilotadgang",
    subtitle: "ViaNexis er i øjeblikket tilgængelig gennem et pilotprogram med udvalgte transportører og chauffører. Adgang aktiveres efter individuel diskussion og godkendelse.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktiv tur",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Næste stop",
        value: "Afhentning · Budapest (demo)",
        status: "På vej",
      },
      {
        label: "Dokument",
        value: "CMR — afventer underskrift",
        status: "Handling",
      },
      {
        label: "Synkroniser",
        value: "1 ændring afventer",
        status: "Offline",
      }
    ],
    phoneCaption: "Produktdemo — anonymiserede eksempeldata.",
    browserTitle: "Driftskontrol",
    browserSubtitle: "Demo flåde · dispatcher visning",
    browserColumns: [
      "Rejse",
      "Stop",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR mangler",
        "Alert"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD underskrevet",
        "På vej"
      ],
      [
        "VN-2407-C11",
        "Wien (demo)",
        "Under revision",
        "Forluk"
      ]
    ],
    browserCaption: "Firmaportaldemo — ikke live kundedata.",
    driver: {
      navHome: "Hjem",
      navTrips: "Rejser",
      navDocs: "Dokumenter",
      navMore: "Mere",
      tripStatus: "Tur i gang",
      nextStopLabel: "Næste stop",
      nextStopValue: "Afhentning · Budapest (demo)",
      documentLabel: "Dokument",
      documentValue: "Digital CMR",
      documentAction: "Underskrift påkrævet",
      syncLabel: "Forbindelse",
      syncValue: "Offline · 1 afventer",
    },
    portal: {
      roleLabel: "Rolle: Disponent",
      alertLabel: "Alert",
      alertValue: "VN-2407-A18 · CMR afventer underskrift",
      auditLabel: "Seneste revisionsbegivenhed",
      auditValue: "Dokumentstatus ændret · driverapp",
    },
  },
  statusLabels: {
    available: "Tilgængelig",
    pilot: "Pilot",
    development: "I udvikling",
  },
  productPage: {
    highlightsTitle: "Nøglefunktioner",
    capabilitiesTitle: "Hvad denne overflade giver",
    statusesTitle: "Statusetiketter",
  },
  authority: {
    heroSubtitle: "Tids- og omfangsbegrænset adgang til rejsebevis – ikke en certificeret eFTI-platform.",
    foundationBadge: "Teknisk beredskab",
    notCertifiedBadge: "Ikke certificeret eFTI",
    foundationTitle: "Hvad betyder parathed",
    foundationSubtitle: "Strukturerede data og kontrolleret deling - uden krav om certifikat eller tilladelse.",
    extraDisclaimer: "ViaNexis lover ikke myndighedsaccept i alle lande. Overholdelse af lov og lovgivning forbliver kundens ansvar.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Turliste og stop",
        description: "Aktive ture, næste handlinger og stopopgaver.",
        status: "available",
      },
      {
        title: "Dokumenter og underskrift",
        description: "Uploads, CMR-opgaver og signaturoptagelse.",
        status: "available",
      },
      {
        title: "Offline arbejde",
        description: "Lokal gem med synlig afventende synkronisering.",
        status: "available",
      },
      {
        title: "Beskeder",
        description: "Trip-linked kommunikation for chauffører.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktiv rejseliste",
        description: "Driftsoversigt med stop og status.",
        status: "available",
      },
      {
        title: "Advarsler om manglende dokumenter",
        description: "Manglende eller usignerede dokumenter er umiddelbart synlige.",
        status: "available",
      },
      {
        title: "Tilladelser",
        description: "Rollebaseret adgang til virksomhedsdata.",
        status: "available",
      },
      {
        title: "Revisionsbegivenheder",
        description: "Søgbar beslutning og dokumentspor.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Upload og link",
        description: "Dokumenter knyttet til tur, chauffør eller køretøj.",
        status: "available",
      },
      {
        title: "Signatur arbejdsgang",
        description: "Afventer underskrift → underskrevet → anmeldelse.",
        status: "pilot",
      },
      {
        title: "Lukket rejsepakke",
        description: "Eksporterbare dokumenter og begivenheder.",
        status: "pilot",
      },
      {
        title: "Skabelonhåndtering",
        description: "Centrale dokumentskabeloner — gradvis udrulning.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rollebaseret adgang",
        description: "Bruger- og virksomhedsbestemt adskillelse.",
        status: "available",
      },
      {
        title: "Revisionslog",
        description: "Handlinger og beslutninger forbliver søgbare.",
        status: "available",
      },
      {
        title: "Session og enhed",
        description: "Styret session og enhedsstyring.",
        status: "pilot",
      },
      {
        title: "Supportadgang",
        description: "Tidsbegrænset, logget supportadgang.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Sprog",
    draftSuffix: "· udkast",
    breadcrumb: "Brødkrumme",
    primaryNav: "Primær",
    importantNotice: "Vigtig meddelelse",
  },
};
