import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingSk: VisualMarketingContent = {
  skipToContent: "Preskočiť na obsah",
  brandVisuals: {
    routeLabel: "Aktívna trasa",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Sieť ViaNexis",
    networkTitle: "Nie je to len trasa, ktorá spája.",
    networkSubtitle: "Zastávky, dokumenty, podpisy, správy a rozhodnutia patria do rovnakého toku cesty – v časovom poradí, s povoleniami a prehľadateľnou stopou udalosti.",
    workflowEvents: [
      "Odchod",
      "Vyzdvihnutie",
      "Dokument",
      "Podpis",
      "Čakanie",
      "Doručenie",
      "Uzavretý balík"
    ],
  },
  pillars: {
    title: "Tri piliere — jeden riadený systém",
    subtitle: "Mobilný tok prívetivý pre vodiča, prevádzková kontrola spoločnosti a kontrolovateľný záznam rozhodnutí.",
    items: [
      {
        title: "Aplikácia vhodná pre vodiča",
        description: "Cesty, zastávky, dokumenty, podpisy a udalosti v mobilnom používateľskom rozhraní schopnom offline.",
      },
      {
        title: "Kontrola spoločnosti",
        description: "Prehľad dispečera, povolenia, upozornenia a sledovanie dokumentov na firemnom portáli.",
      },
      {
        title: "Auditovateľné operácie",
        description: "Udalosti, podpisy a rozhodnutia s prehľadateľným protokolom – bez prehnaných bezpečnostných nárokov.",
      }
    ],
  },
  process: {
    title: "Základný pracovný postup cesty",
    subtitle: "Od vytvorenia po uzavretý balík – štruktúrované kroky s prístupom so zreteľom na povolenia.",
    steps: [
      {
        title: "Vytvorte výlet",
        description: "Zastávky na vyzdvihnutie a doručenie, úlohy a požiadavky na dokumenty.",
      },
      {
        title: "Prijatie vodiča",
        description: "Začiatok pridelenia, prijatia a riadenej relácie.",
      },
      {
        title: "Zastávky a úlohy",
        description: "Viacnásobné zastavenia, úlohy, udalosti a záznamy o škodách.",
      },
      {
        title: "Dokumenty a podpisy",
        description: "Nahrajte, podpíšte, skontrolujte – potom uzavretý balík zájazdu.",
      }
    ],
  },
  homeModules: {
    title: "Povrchy produktu",
    subtitle: "Každý povrch zdieľa rovnaký model cesty a dokumentu. Podrobnosti nájdete na produktových stránkach.",
    detailsLink: "Podrobnosti",
    items: [
      {
        title: "Aplikácia vodiča",
        description: "Cesty, zastávky, dokumenty a podpisy v mobilnom toku schopnom offline. Vodiči vždy vidia ďalšiu požadovanú akciu.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Firemný portál",
        description: "Prevádzkový prehľad: aktívne jazdy, chýbajúce dokumenty, upozornenia a povolenia na jednom mieste.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenty a podpisy",
        description: "Papierovanie spojené s výletom, stavy podpisov a exportovateľný uzavretý balík výletov.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Správy a upozornenia",
        description: "Komunikácia spojená s výletom. Funkcie upozornení je možné aktivovať v rámci pilotného programu.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit a povolenia",
        description: "Prístup na základe rolí, udalosti s možnosťou vyhľadávania a kontrolovaný prístup k podpore.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline prevádzka",
        description: "Ovládače môžu pokračovať v práci na slabých sieťach; zmeny sa dokončia po dokončení synchronizácie.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenty a podpisy",
    subtitle: "Dokumenty sa viažu na cestu, možno ich podpísať a skontrolovať a potom uzavrieť do exportovateľného balíka.",
    steps: [
      {
        title: "Nahrajte alebo vytvorte",
        description: "CMR, dodací list, fotografia alebo digitálna šablóna.",
      },
      {
        title: "Prepojenie",
        description: "Priradené ku kontextu cesty, vodiča alebo vozidla.",
      },
      {
        title: "Podpíšte a skontrolujte",
        description: "Tok stavu: čaká sa na podpis → podpísané → prebieha kontrola.",
      },
      {
        title: "Uzavretý balík zájazdov",
        description: "Exportovateľné dokumenty a udalosti – auditovateľný súhrn.",
      }
    ],
    statuses: [
      "Nahrané",
      "Chýba",
      "Čaká sa na podpis",
      "Podpísané",
      "Prebieha kontrola"
    ],
    detailsLink: "Dokumenty podrobne",
  },
  offline: {
    title: "Offline prevádzka a synchronizácia",
    subtitle: "Práca pokračuje na slabých sieťach – finalizácia prebieha po synchronizácii.",
    cards: [
      {
        title: "Miestne uloženie",
        description: "Zmeny ovládača sú bezpečne uložené v zariadení.",
      },
      {
        title: "Viditeľná synchronizácia",
        description: "Nespracované zmeny zostanú viditeľné, kým sa pripojenie neobnoví.",
      },
      {
        title: "Signalizácia konfliktov",
        description: "Konfliktné zdroje sa zaznamenávajú – nikdy sa neprepisujú ticho.",
      }
    ],
    detailsLink: "Aplikácia vodiča",
  },
  responsibleUse: {
    title: "Zodpovedné používanie",
    subtitle: "Krátke, dôležité limity — podrobnosti sú zverejnené na právnych stránkach.",
    items: [
      "ViaNexis nie je certifikovaná platforma eFTI a nesľubuje automatické akceptovanie autorít.",
      "OCR, AI a preklad sú nápomocné – vyžaduje sa kontrola človekom.",
      "Systém neposkytuje právne poradenstvo.",
      "Nie je to núdzová ani SOS služba."
    ],
    detailsLink: "Úplné upozornenia o zodpovednom používaní",
  },
  pilotCta: {
    title: "Riadený pilotný prístup",
    subtitle: "ViaNexis je momentálne dostupný prostredníctvom pilotného programu s vybranými dopravcami a vodičmi. Prístup sa aktivuje po individuálnej diskusii a schválení.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktívny výlet",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Ďalšia zastávka",
        value: "Vyzdvihnutie · Budapešť (ukážka)",
        status: "Na ceste",
      },
      {
        label: "Dokument",
        value: "CMR — čaká na podpis",
        status: "Akcia",
      },
      {
        label: "Synchronizovať",
        value: "1 čakajúca zmena",
        status: "Offline",
      }
    ],
    phoneCaption: "Ukážka produktu — anonymizované vzorové údaje.",
    browserTitle: "Riadenie prevádzky",
    browserSubtitle: "Demo vozový park · pohľad dispečera",
    browserColumns: [
      "Výlet",
      "Stop",
      "Dokument",
      "Stav"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapešť (ukážka)",
        "CMR chýba",
        "Upozornenie"
      ],
      [
        "VN-2407-B03",
        "Győr (ukážka)",
        "POD podpísané",
        "Na ceste"
      ],
      [
        "VN-2407-C11",
        "Viedeň (demo)",
        "Prebieha kontrola",
        "Vopred zatvoriť"
      ]
    ],
    browserCaption: "Ukážka firemného portálu – nie živé údaje o zákazníkoch.",
    driver: {
      navHome: "Domov",
      navTrips: "Výlety",
      navDocs: "Docs",
      navMore: "Viac",
      tripStatus: "Výlet prebieha",
      nextStopLabel: "Ďalšia zastávka",
      nextStopValue: "Vyzdvihnutie · Budapešť (ukážka)",
      documentLabel: "Dokument",
      documentValue: "Digitálny CMR",
      documentAction: "Vyžaduje sa podpis",
      syncLabel: "Pripojenie",
      syncValue: "Offline · 1 čaká na spracovanie",
    },
    portal: {
      roleLabel: "Úloha: Dispečer",
      alertLabel: "Upozornenie",
      alertValue: "VN-2407-A18 · CMR čaká na podpis",
      auditLabel: "Najnovšia udalosť auditu",
      auditValue: "Stav dokumentu zmenený · aplikácia ovládača",
    },
  },
  statusLabels: {
    available: "K dispozícii",
    pilot: "Pilot",
    development: "Vo vývoji",
  },
  productPage: {
    highlightsTitle: "Kľúčové schopnosti",
    capabilitiesTitle: "Čo tento povrch poskytuje",
    statusesTitle: "Stavové štítky",
  },
  authority: {
    heroSubtitle: "Časovo a rozsahovo obmedzený prístup k dôkazom o ceste – nejde o certifikovanú platformu eFTI.",
    foundationBadge: "Technická pripravenosť",
    notCertifiedBadge: "Nie je certifikovaný eFTI",
    foundationTitle: "Čo znamená pripravenosť",
    foundationSubtitle: "Štruktúrované údaje a kontrolované zdieľanie – bez nároku na certifikát alebo povolenie.",
    extraDisclaimer: "ViaNexis nesľubuje akceptovanie autorít v každej krajine. Dodržiavanie právnych a regulačných predpisov zostáva zodpovednosťou zákazníka.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Zoznam výletov a zastávok",
        description: "Aktívne výlety, ďalšie akcie a úlohy zastavenia.",
        status: "available",
      },
      {
        title: "Dokumenty a podpis",
        description: "Nahrávanie, úlohy CMR a zachytávanie podpisov.",
        status: "available",
      },
      {
        title: "Práca offline",
        description: "Miestne uloženie s viditeľnou čakajúcou synchronizáciou.",
        status: "available",
      },
      {
        title: "Správy",
        description: "Komunikácia pre vodičov spojená s výletom.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktívny zoznam výletov",
        description: "Operational overview with stops and statuses.",
        status: "available",
      },
      {
        title: "Upozornenia na chýbajúce dokumenty",
        description: "Chýbajúce alebo nepodpísané dokumenty sú okamžite viditeľné.",
        status: "available",
      },
      {
        title: "Povolenia",
        description: "Prístup k firemným údajom na základe rolí.",
        status: "available",
      },
      {
        title: "Audit udalostí",
        description: "Prehľadateľná stopa rozhodnutí a dokumentov.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Nahrať a prepojiť",
        description: "Dokumenty spojené s cestou, vodičom alebo vozidlom.",
        status: "available",
      },
      {
        title: "Pracovný postup podpisu",
        description: "Čaká sa na podpis → podpísané → kontrola.",
        status: "pilot",
      },
      {
        title: "Uzavretý balík zájazdov",
        description: "Exportovateľné dokumenty a udalosti.",
        status: "pilot",
      },
      {
        title: "Správa šablón",
        description: "Centrálne šablóny dokumentov — postupné zavádzanie.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Prístup na základe rolí",
        description: "Oddelenie na používateľa a spoločnosť.",
        status: "available",
      },
      {
        title: "Protokol auditu",
        description: "Akcie a rozhodnutia zostávajú vyhľadateľné.",
        status: "available",
      },
      {
        title: "Relácia a zariadenie",
        description: "Riadená správa relácie a zariadenia.",
        status: "pilot",
      },
      {
        title: "Podporný prístup",
        description: "Časovo obmedzený, prihlásený záznam podpory.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Jazyk",
    draftSuffix: "· návrh",
    breadcrumb: "strúhanka",
    primaryNav: "Primárne",
    importantNotice: "Dôležité upozornenie",
  },
};
