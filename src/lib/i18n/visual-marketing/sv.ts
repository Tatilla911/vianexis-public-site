import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingSv: VisualMarketingContent = {
  skipToContent: "Hoppa till innehållet",
  brandVisuals: {
    routeLabel: "Aktiv rutt",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis nätverk",
    networkTitle: "Det är inte bara rutten som ansluter.",
    networkSubtitle: "Stopp, dokument, signaturer, meddelanden och beslut tillhör samma reseflöde — i tidsordning, med behörigheter och ett sökbart händelsespår.",
    workflowEvents: [
      "Avresa",
      "Upphämtning",
      "Dokumentera",
      "Signatur",
      "Väntan",
      "Leverans",
      "Stängt paket"
    ],
  },
  pillars: {
    title: "Tre pelare — ett kontrollerat system",
    subtitle: "Ett förarvänligt mobilt flöde, företagets operativa kontroll och en revisionsbar beslutsväg.",
    items: [
      {
        title: "Driver-friendly app",
        description: "Resor, stopp, dokument, signaturer och händelser i ett mobilt användargränssnitt som kan offline.",
      },
      {
        title: "Företagskontroll",
        description: "Avsändaröversikt, behörigheter, varningar och dokumentspårning i företagsportalen.",
      },
      {
        title: "Reviderbar verksamhet",
        description: "Händelser, signaturer och beslut med en sökbar logg – utan överdrivna säkerhetsanspråk.",
      }
    ],
  },
  process: {
    title: "Core trip workflow",
    subtitle: "Från skapande till ett slutet paket — strukturerade steg med behörighetsmedveten åtkomst.",
    steps: [
      {
        title: "Skapa resa",
        description: "Upphämtnings- och leveransstopp, uppgifter och dokumentkrav.",
      },
      {
        title: "Godkännande av föraren",
        description: "Uppdrag, acceptans och en kontrollerad session startar.",
      },
      {
        title: "Stopp och uppgifter",
        description: "Flera stopp, uppgifter, händelser och skador.",
      },
      {
        title: "Dokument och underskrifter",
        description: "Ladda upp, signera, granska — sedan ett slutet resepaket.",
      }
    ],
  },
  homeModules: {
    title: "Produktytor",
    subtitle: "Varje yta delar samma resa och dokumentmodell. Detaljer live på produktsidorna.",
    detailsLink: "Detaljer",
    items: [
      {
        title: "App för drivrutiner",
        description: "Resor, stopp, dokument och signaturer i ett mobilflöde som kan offline. Förare ser alltid nästa nödvändiga åtgärd.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Företagsportal",
        description: "Driftöversikt: aktiva resor, saknade dokument, varningar och behörigheter på ett ställe.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokument och signaturer",
        description: "Triplänkat pappersarbete, signaturtillstånd och ett exportbart slutet respaket.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Meddelanden och varningar",
        description: "Triplänkad kommunikation. Aviseringsfunktioner kan aktiveras som en del av pilotprogrammet.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revision och behörigheter",
        description: "Rollbaserad åtkomst, sökbara händelser och kontrollerad supportåtkomst.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offlinedrift",
        description: "Förare kan fortsätta arbeta på svaga nätverk; ändringar slutförs när synkroniseringen är klar.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokument och signaturer",
    subtitle: "Dokument länkar till resan, kan undertecknas och granskas, försluts sedan till ett exportbart paket.",
    steps: [
      {
        title: "Ladda upp eller skapa",
        description: "CMR, följesedel, foto eller digital mall.",
      },
      {
        title: "Länkar",
        description: "Tilldelad resa, förare eller fordonskontext.",
      },
      {
        title: "Signera och granska",
        description: "Statusflöde: väntar på signatur → undertecknad → under granskning.",
      },
      {
        title: "Stängt resepaket",
        description: "Exporterbara dokument och händelser – en granskningsbar sammanfattning.",
      }
    ],
    statuses: [
      "Uppladdad",
      "Saknad",
      "Väntar på signatur",
      "Signerad",
      "Under granskning"
    ],
    detailsLink: "Dokument i detalj",
  },
  offline: {
    title: "Offlinedrift och synkronisering",
    subtitle: "Arbetet fortsätter med svaga nätverk – slutförandet sker efter synkronisering.",
    cards: [
      {
        title: "Lokal spara",
        description: "Drivrutinsändringar lagras säkert på enheten.",
      },
      {
        title: "Synlig synkronisering",
        description: "Väntande ändringar förblir synliga tills anslutningen återgår.",
      },
      {
        title: "Konfliktsignalering",
        description: "Motstridiga källor loggas – skrivs aldrig över tyst.",
      }
    ],
    detailsLink: "App för drivrutiner",
  },
  responsibleUse: {
    title: "Ansvarsfull användning",
    subtitle: "Korta, viktiga gränser — detaljer finns på de juridiska sidorna.",
    items: [
      "ViaNexis är inte en certifierad eFTI-plattform och lovar inte automatiskt godkännande av auktoriteter.",
      "OCR, AI och översättning är till hjälp – mänsklig granskning krävs.",
      "Systemet ger ingen juridisk rådgivning.",
      "Det är inte en nöd- eller SOS-tjänst."
    ],
    detailsLink: "Fullständiga meddelanden om ansvarsfull användning",
  },
  pilotCta: {
    title: "Kontrollerad pilotåtkomst",
    subtitle: "ViaNexis är för närvarande tillgängligt genom ett pilotprogram med utvalda operatörer och förare. Access aktiveras efter individuell diskussion och godkännande.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktiv resa",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Nästa stopp",
        value: "Upphämtning · Budapest (demo)",
        status: "På väg",
      },
      {
        label: "Dokumentera",
        value: "CMR — väntar på underskrift",
        status: "Handling",
      },
      {
        label: "Synkronisera",
        value: "1 ändring väntar",
        status: "Off-line",
      }
    ],
    phoneCaption: "Produktdemo — anonymiserad exempeldata.",
    browserTitle: "Driftskontroll",
    browserSubtitle: "Demoflotta · avsändarvy",
    browserColumns: [
      "Resa",
      "Stopp",
      "Dokumentera",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR saknas",
        "Varna"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD signerad",
        "På väg"
      ],
      [
        "VN-2407-C11",
        "Wien (demo)",
        "Under granskning",
        "Förstäng"
      ]
    ],
    browserCaption: "Företagsportaldemo — inte live kunddata.",
    driver: {
      navHome: "Hem",
      navTrips: "Resor",
      navDocs: "Dokument",
      navMore: "Mer",
      tripStatus: "Resan pågår",
      nextStopLabel: "Nästa stopp",
      nextStopValue: "Upphämtning · Budapest (demo)",
      documentLabel: "Dokumentera",
      documentValue: "Digital CMR",
      documentAction: "Underskrift krävs",
      syncLabel: "Förbindelse",
      syncValue: "Offline · 1 väntar",
    },
    portal: {
      roleLabel: "Roll: Dispatcher",
      alertLabel: "Varna",
      alertValue: "VN-2407-A18 · CMR väntar på signatur",
      auditLabel: "Senaste revisionsevenemanget",
      auditValue: "Dokumentstatus ändrad · förarapp",
    },
  },
  statusLabels: {
    available: "Tillgänglig",
    pilot: "Pilot",
    development: "Under utveckling",
  },
  productPage: {
    highlightsTitle: "Nyckelfunktioner",
    capabilitiesTitle: "Vad denna yta ger",
    statusesTitle: "Statusetiketter",
  },
  authority: {
    heroSubtitle: "Tids- och omfattningsbegränsad tillgång till resebevis – inte en certifierad eFTI-plattform.",
    foundationBadge: "Teknisk beredskap",
    notCertifiedBadge: "Ej certifierad eFTI",
    foundationTitle: "Vad beredskap innebär",
    foundationSubtitle: "Strukturerad data och kontrollerad delning — utan certifikat eller tillståndsanspråk.",
    extraDisclaimer: "ViaNexis lovar inte auktoritetsacceptans i alla länder. Efterlevnad av lagar och regler förblir kundens ansvar.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Reselista och hållplatser",
        description: "Aktiva resor, nästa åtgärder och stoppuppgifter.",
        status: "available",
      },
      {
        title: "Dokument och signatur",
        description: "Uppladdningar, CMR-uppgifter och signaturfångst.",
        status: "available",
      },
      {
        title: "Offlinearbete",
        description: "Lokal spara med synlig väntande synkronisering.",
        status: "available",
      },
      {
        title: "Meddelanden",
        description: "Triplänkad kommunikation för förare.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktiv reselista",
        description: "Driftöversikt med stopp och status.",
        status: "available",
      },
      {
        title: "Varningar om saknade dokument",
        description: "Saknade eller osignerade dokument är omedelbart synliga.",
        status: "available",
      },
      {
        title: "Behörigheter",
        description: "Rollbaserad åtkomst till företagsdata.",
        status: "available",
      },
      {
        title: "Revisionsevenemang",
        description: "Sökbar besluts- och dokumentspår.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Ladda upp och länka",
        description: "Dokument kopplade till resa, förare eller fordon.",
        status: "available",
      },
      {
        title: "Signatur arbetsflöde",
        description: "Väntar på underskrift → undertecknad → granskning.",
        status: "pilot",
      },
      {
        title: "Stängt resepaket",
        description: "Exporterbara dokument och händelser.",
        status: "pilot",
      },
      {
        title: "Mallhantering",
        description: "Centrala dokumentmallar — gradvis utrullning.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rollbaserad åtkomst",
        description: "Användar- och företagsavgränsad separation.",
        status: "available",
      },
      {
        title: "Revisionslogg",
        description: "Åtgärder och beslut förblir sökbara.",
        status: "available",
      },
      {
        title: "Session och enhet",
        description: "Kontrollerad session och enhetshantering.",
        status: "pilot",
      },
      {
        title: "Supportåtkomst",
        description: "Tidsbegränsat, loggat supportinträde.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Språk",
    draftSuffix: "· utkast",
    breadcrumb: "Brödsmula",
    primaryNav: "Primär",
    importantNotice: "Viktigt meddelande",
  },
};
