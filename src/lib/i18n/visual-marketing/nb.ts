import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingNb: VisualMarketingContent = {
  skipToContent: "Gå til innhold",
  brandVisuals: {
    routeLabel: "Aktiv rute",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "Det er ikke bare ruten som henger sammen.",
    networkSubtitle: "Stopp, dokumenter, signaturer, meldinger og beslutninger tilhører samme turflyt – i tidsrekkefølge, med tillatelser og en søkbar hendelsessti.",
    workflowEvents: [
      "Avgang",
      "Henting",
      "Dokument",
      "Signatur",
      "Venter",
      "Leveranse",
      "Lukket pakke"
    ],
  },
  pillars: {
    title: "Tre søyler - ett kontrollert system",
    subtitle: "En sjåførvennlig mobil flyt, selskapets operasjonelle kontroll og en reviderbar beslutningsspor.",
    items: [
      {
        title: "Drivervennlig app",
        description: "Turer, stopp, dokumenter, signaturer og hendelser i et mobilt brukergrensesnitt som kan brukes uten nett.",
      },
      {
        title: "Bedriftskontroll",
        description: "Avsenderoversikt, tillatelser, varsler og dokumentsporing i bedriftsportalen.",
      },
      {
        title: "Reviderbare operasjoner",
        description: "Hendelser, signaturer og beslutninger med en søkbar logg – uten overdrevne sikkerhetskrav.",
      }
    ],
  },
  process: {
    title: "Arbeidsflyt for kjernetur",
    subtitle: "Fra opprettelse til en lukket pakke – strukturerte trinn med tillatelsesbevisst tilgang.",
    steps: [
      {
        title: "Lag reise",
        description: "Henting og leveringsstopp, oppgaver og dokumentkrav.",
      },
      {
        title: "Sjåfør aksept",
        description: "Oppdrag, aksept og en kontrollert øktstart.",
      },
      {
        title: "Stopper og oppgaver",
        description: "Flere stopp, oppgaver, hendelser og skaderegistreringer.",
      },
      {
        title: "Dokumenter og signaturer",
        description: "Last opp, signer, anmeld — så en lukket turpakke.",
      }
    ],
  },
  homeModules: {
    title: "Produktoverflater",
    subtitle: "Hver overflate deler samme tur- og dokumentmodell. Detaljer live på produktsidene.",
    detailsLink: "Detaljer",
    items: [
      {
        title: "Driver app",
        description: "Turer, stopp, dokumenter og signaturer i en frakoblet mobil flyt. Sjåfører ser alltid neste nødvendige handling.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Bedriftsportal",
        description: "Driftsoversikt: aktive turer, manglende dokumenter, varsler og tillatelser på ett sted.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenter og signaturer",
        description: "Reisekoblet papirarbeid, signaturtilstander og en eksporterbar lukket turpakke.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Meldinger og varsler",
        description: "Trip-linked kommunikasjon. Varslingsfunksjoner kan aktiveres som en del av pilotprogrammet.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revisjon og tillatelser",
        description: "Rollebasert tilgang, søkbare hendelser og kontrollert støttetilgang.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline operasjon",
        description: "Drivere kan fortsette å jobbe på svake nettverk; endringer fullføres når synkroniseringen er fullført.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenter og signaturer",
    subtitle: "Dokumenter lenker til reisen, kan signeres og gjennomgås, og deretter lukkes inn i en eksporterbar pakke.",
    steps: [
      {
        title: "Last opp eller opprett",
        description: "CMR, følgeseddel, bilde eller digital mal.",
      },
      {
        title: "Koblinger",
        description: "Tilordnet tur-, sjåfør- eller kjøretøykontekst.",
      },
      {
        title: "Signer og gjennomgå",
        description: "Statusflyt: venter på signatur → signert → under vurdering.",
      },
      {
        title: "Lukket reisepakke",
        description: "Eksporterbare dokumenter og hendelser – et reviderbart sammendrag.",
      }
    ],
    statuses: [
      "Lastet opp",
      "Savnet",
      "Venter på signatur",
      "Signert",
      "Under vurdering"
    ],
    detailsLink: "Dokumenter i detalj",
  },
  offline: {
    title: "Offline drift og synkronisering",
    subtitle: "Arbeidet fortsetter med svake nettverk – ferdigstillelse skjer etter synkronisering.",
    cards: [
      {
        title: "Lokal lagring",
        description: "Driverendringer lagres trygt på enheten.",
      },
      {
        title: "Synlig synkronisering",
        description: "Ventende endringer forblir synlige til tilkoblingen kommer tilbake.",
      },
      {
        title: "Konfliktsignalering",
        description: "Motstridende kilder logges – aldri overskrives stille.",
      }
    ],
    detailsLink: "Driver app",
  },
  responsibleUse: {
    title: "Ansvarlig bruk",
    subtitle: "Korte, viktige grenser — detaljer vises på de juridiske sidene.",
    items: [
      "ViaNexis er ikke en sertifisert eFTI-plattform og lover ikke automatisk autoritetsgodkjenning.",
      "OCR, AI og oversettelse er til hjelp – menneskelig gjennomgang er nødvendig.",
      "Systemet gir ikke juridisk rådgivning.",
      "Det er ikke en nød- eller SOS-tjeneste."
    ],
    detailsLink: "Fullstendige merknader om ansvarlig bruk",
  },
  pilotCta: {
    title: "Kontrollert pilottilgang",
    subtitle: "ViaNexis er for tiden tilgjengelig gjennom et pilotprogram med utvalgte transportører og sjåfører. Tilgang aktiveres etter individuell diskusjon og godkjenning.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktiv tur",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Neste stopp",
        value: "Henting · Budapest (demo)",
        status: "På vei",
      },
      {
        label: "Dokument",
        value: "CMR — venter på signatur",
        status: "Handling",
      },
      {
        label: "Synkroniser",
        value: "1 endring venter",
        status: "Frakoblet",
      }
    ],
    phoneCaption: "Produktdemo — anonymiserte eksempeldata.",
    browserTitle: "Driftskontroll",
    browserSubtitle: "Demo-flåte · ekspeditørvisning",
    browserColumns: [
      "Tur",
      "Stoppe",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR mangler",
        "Varsle"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD signert",
        "På vei"
      ],
      [
        "VN-2407-C11",
        "Wien (demo)",
        "Under vurdering",
        "Pre-lukk"
      ]
    ],
    browserCaption: "Bedriftsportaldemo – ikke live kundedata.",
    driver: {
      navHome: "Hjem",
      navTrips: "Turer",
      navDocs: "Dokumenter",
      navMore: "Flere",
      tripStatus: "Tur pågår",
      nextStopLabel: "Neste stopp",
      nextStopValue: "Henting · Budapest (demo)",
      documentLabel: "Dokument",
      documentValue: "Digital CMR",
      documentAction: "Signatur kreves",
      syncLabel: "Forbindelse",
      syncValue: "Frakoblet · 1 venter",
    },
    portal: {
      roleLabel: "Rolle: Dispatcher",
      alertLabel: "Varsle",
      alertValue: "VN-2407-A18 · CMR venter på signatur",
      auditLabel: "Siste revisjonsarrangement",
      auditValue: "Dokumentstatus endret · driverapp",
    },
  },
  statusLabels: {
    available: "Tilgjengelig",
    pilot: "Pilot",
    development: "I utvikling",
  },
  productPage: {
    highlightsTitle: "Nøkkelegenskaper",
    capabilitiesTitle: "Hva denne overflaten gir",
    statusesTitle: "Statusetiketter",
  },
  authority: {
    heroSubtitle: "Tids- og omfangsbegrenset tilgang til reisebevis – ikke en sertifisert eFTI-plattform.",
    foundationBadge: "Teknisk beredskap",
    notCertifiedBadge: "Ikke sertifisert eFTI",
    foundationTitle: "Hva betyr beredskap",
    foundationSubtitle: "Strukturerte data og kontrollert deling – uten krav om sertifikat eller tillatelse.",
    extraDisclaimer: "ViaNexis lover ikke autoritetsgodkjenning i alle land. Overholdelse av lover og forskrifter forblir kundens ansvar.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Turliste og stopp",
        description: "Aktive turer, neste handlinger og stoppoppgaver.",
        status: "available",
      },
      {
        title: "Dokumenter og signatur",
        description: "Opplastinger, CMR-oppgaver og signaturfangst.",
        status: "available",
      },
      {
        title: "Offline arbeid",
        description: "Lokal lagring med synlig ventende synkronisering.",
        status: "available",
      },
      {
        title: "Meldinger",
        description: "Trip-linked kommunikasjon for sjåfører.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktiv turliste",
        description: "Driftsoversikt med stopp og statuser.",
        status: "available",
      },
      {
        title: "Varsler om manglende dokumenter",
        description: "Manglende eller usignerte dokumenter er umiddelbart synlige.",
        status: "available",
      },
      {
        title: "Tillatelser",
        description: "Rollebasert tilgang til bedriftsdata.",
        status: "available",
      },
      {
        title: "Revisjonshendelser",
        description: "Søkbar beslutning og dokumentspor.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Last opp og lenke",
        description: "Dokumenter knyttet til reise, sjåfør eller kjøretøy.",
        status: "available",
      },
      {
        title: "Signatur arbeidsflyt",
        description: "Venter på signatur → signert → anmeldelse.",
        status: "pilot",
      },
      {
        title: "Lukket reisepakke",
        description: "Eksporterbare dokumenter og hendelser.",
        status: "pilot",
      },
      {
        title: "Malbehandling",
        description: "Sentrale dokumentmaler — gradvis utrulling.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rollebasert tilgang",
        description: "Bruker- og bedriftsdekket skille.",
        status: "available",
      },
      {
        title: "Revisjonslogg",
        description: "Handlinger og beslutninger forblir søkbare.",
        status: "available",
      },
      {
        title: "Økt og enhet",
        description: "Kontrollert økt- og enhetsadministrasjon.",
        status: "pilot",
      },
      {
        title: "Støttetilgang",
        description: "Tidsbegrenset, logget støtteoppføring.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Språk",
    draftSuffix: "· utkast",
    breadcrumb: "Brødsmule",
    primaryNav: "Primær",
    importantNotice: "Viktig melding",
  },
};
