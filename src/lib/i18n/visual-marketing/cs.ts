import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingCs: VisualMarketingContent = {
  skipToContent: "Přejít na obsah",
  brandVisuals: {
    routeLabel: "Aktivní trasa",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Síť ViaNexis",
    networkTitle: "Není to jen cesta, která spojuje.",
    networkSubtitle: "Zastávky, dokumenty, podpisy, zprávy a rozhodnutí patří do stejné cesty – v časovém pořadí, s oprávněními a prohledávatelnou stopou události.",
    workflowEvents: [
      "Odchod",
      "Vyzvednutí",
      "Dokument",
      "Podpis",
      "Čekání",
      "Dodání",
      "Uzavřený balíček"
    ],
  },
  pillars: {
    title: "Tři pilíře — jeden řízený systém",
    subtitle: "Mobilní tok přívětivý pro řidiče, provozní kontrola společnosti a auditovatelná rozhodovací stopa.",
    items: [
      {
        title: "Aplikace pro řidiče",
        description: "Výlety, zastávky, dokumenty, podpisy a události v mobilním uživatelském rozhraní s možností offline.",
      },
      {
        title: "Kontrola společnosti",
        description: "Přehled dispečerů, oprávnění, upozornění a sledování dokumentů na firemním portálu.",
      },
      {
        title: "Auditovatelné operace",
        description: "Události, podpisy a rozhodnutí s prohledávatelným protokolem – bez přehnaných nároků na zabezpečení.",
      }
    ],
  },
  process: {
    title: "Základní pracovní postup cesty",
    subtitle: "Od vytvoření k uzavřenému balíčku – strukturované kroky s přístupem s ohledem na oprávnění.",
    steps: [
      {
        title: "Vytvořit výlet",
        description: "Zastávky pro vyzvednutí a doručení, úkoly a požadavky na dokumenty.",
      },
      {
        title: "Přijetí řidiče",
        description: "Zahájení přiřazení, přijetí a řízené relace.",
      },
      {
        title: "Zastávky a úkoly",
        description: "Několik záznamů zastávek, úkolů, událostí a poškození.",
      },
      {
        title: "Dokumenty a podpisy",
        description: "Nahrajte, podepište, zkontrolujte – pak uzavřený balíček zájezdu.",
      }
    ],
  },
  homeModules: {
    title: "Povrchy produktu",
    subtitle: "Každý povrch sdílí stejný model cesty a dokumentu. Podrobnosti najdete na produktových stránkách.",
    detailsLink: "Podrobnosti",
    items: [
      {
        title: "Aplikace pro řidiče",
        description: "Cesty, zastávky, dokumenty a podpisy v mobilním toku s možností offline. Řidiči vždy vidí další požadovanou akci.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Firemní portál",
        description: "Provozní přehled: aktivní cesty, chybějící dokumenty, upozornění a oprávnění na jednom místě.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenty a podpisy",
        description: "Papírování spojené s výletem, stavy podpisu a exportovatelný uzavřený balíček výletu.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Zprávy a upozornění",
        description: "Komunikace vázaná na cestu. Funkce upozornění lze aktivovat v rámci pilotního programu.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit a oprávnění",
        description: "Přístup na základě rolí, prohledávatelné události a řízený přístup k podpoře.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline provoz",
        description: "Ovladače mohou pokračovat v práci na slabých sítích; změny se dokončí po dokončení synchronizace.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenty a podpisy",
    subtitle: "Dokumenty odkazují na cestu, lze je podepsat a zkontrolovat a poté uzavřít do exportovatelného balíčku.",
    steps: [
      {
        title: "Nahrajte nebo vytvořte",
        description: "CMR, dodací list, fotografie nebo digitální šablona.",
      },
      {
        title: "Propojení",
        description: "Přiřazeno kontextu cesty, řidiče nebo vozidla.",
      },
      {
        title: "Podepište a zkontrolujte",
        description: "Tok stavu: čeká na podpis → podepsáno → pod kontrolou.",
      },
      {
        title: "Uzavřený výletní balíček",
        description: "Exportovatelné dokumenty a události – auditovatelné shrnutí.",
      }
    ],
    statuses: [
      "Nahráno",
      "Chybějící",
      "Čekání na podpis",
      "Podepsaný",
      "Probíhá kontrola"
    ],
    detailsLink: "Dokumenty podrobně",
  },
  offline: {
    title: "Offline provoz a synchronizace",
    subtitle: "Práce pokračují na slabých sítích – dokončení proběhne po synchronizaci.",
    cards: [
      {
        title: "Místní uložení",
        description: "Změny ovladače jsou bezpečně uloženy v zařízení.",
      },
      {
        title: "Viditelná synchronizace",
        description: "Nevyřízené změny zůstanou viditelné, dokud se připojení neobnoví.",
      },
      {
        title: "Signalizace konfliktu",
        description: "Konfliktní zdroje jsou protokolovány – nikdy se tiše nepřepisují.",
      }
    ],
    detailsLink: "Aplikace pro řidiče",
  },
  responsibleUse: {
    title: "Odpovědné používání",
    subtitle: "Krátké, důležité limity – podrobnosti jsou zveřejněny na právních stránkách.",
    items: [
      "ViaNexis není certifikovaná platforma eFTI a neslibuje automatické přijetí autority.",
      "OCR, umělá inteligence a překlad jsou nápomocné – je vyžadována kontrola člověkem.",
      "Systém neposkytuje právní poradenství.",
      "Nejedná se o nouzovou ani SOS službu."
    ],
    detailsLink: "Úplná upozornění o zodpovědném používání",
  },
  pilotCta: {
    title: "Řízený pilotní přístup",
    subtitle: "ViaNexis je v současné době k dispozici prostřednictvím pilotního programu s vybranými dopravci a řidiči. Přístup je aktivován po individuálním projednání a schválení.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktivní výlet",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Další zastávka",
        value: "Vyzvednutí · Budapešť (demo)",
        status: "Na cestě",
      },
      {
        label: "Dokument",
        value: "CMR — čeká na podpis",
        status: "Akce",
      },
      {
        label: "Synchronizovat",
        value: "1 nevyřízená změna",
        status: "Offline",
      }
    ],
    phoneCaption: "Demo produktu — anonymizovaná ukázková data.",
    browserTitle: "Řízení provozu",
    browserSubtitle: "Demo vozový park · pohled dispečera",
    browserColumns: [
      "Výlet",
      "Zastávka",
      "Dokument",
      "Postavení"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapešť (demo)",
        "CMR chybí",
        "Upozornění"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD podepsáno",
        "Na cestě"
      ],
      [
        "VN-2407-C11",
        "Vídeň (demo)",
        "Probíhá kontrola",
        "Předem zavřít"
      ]
    ],
    browserCaption: "Ukázka firemního portálu – nikoli živá data zákazníků.",
    driver: {
      navHome: "Domov",
      navTrips: "Výlety",
      navDocs: "Docs",
      navMore: "Více",
      tripStatus: "Výlet probíhá",
      nextStopLabel: "Další zastávka",
      nextStopValue: "Vyzvednutí · Budapešť (demo)",
      documentLabel: "Dokument",
      documentValue: "Digitální CMR",
      documentAction: "Je vyžadován podpis",
      syncLabel: "Spojení",
      syncValue: "Offline · 1 čeká na vyřízení",
    },
    portal: {
      roleLabel: "Role: Dispečer",
      alertLabel: "Upozornění",
      alertValue: "VN-2407-A18 · CMR čeká na podpis",
      auditLabel: "Nejnovější událost auditu",
      auditValue: "Stav dokumentu změněn · aplikace ovladače",
    },
  },
  statusLabels: {
    available: "K dispozici",
    pilot: "Pilot",
    development: "Ve vývoji",
  },
  productPage: {
    highlightsTitle: "Klíčové schopnosti",
    capabilitiesTitle: "Co tento povrch poskytuje",
    statusesTitle: "Stavové štítky",
  },
  authority: {
    heroSubtitle: "Časově a rozsahově omezený přístup k důkazům o cestě – není to certifikovaná platforma eFTI.",
    foundationBadge: "Technická připravenost",
    notCertifiedBadge: "Není certifikováno eFTI",
    foundationTitle: "Co znamená připravenost",
    foundationSubtitle: "Strukturovaná data a řízené sdílení – bez nároku na certifikát nebo povolení.",
    extraDisclaimer: "ViaNexis neslibuje přijetí autority v každé zemi. Dodržování právních a regulačních předpisů zůstává odpovědností zákazníka.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Seznam výletů a zastávek",
        description: "Aktivní výlety, další akce a zastavovací úkoly.",
        status: "available",
      },
      {
        title: "Dokumenty a podpis",
        description: "Nahrávání, úlohy CMR a zachycení podpisu.",
        status: "available",
      },
      {
        title: "Práce offline",
        description: "Místní uložení s viditelnou nevyřízenou synchronizací.",
        status: "available",
      },
      {
        title: "Zasílání zpráv",
        description: "Komunikace pro řidiče spojená s jízdou.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Seznam aktivních výletů",
        description: "Provozní přehled se zastávkami a stavy.",
        status: "available",
      },
      {
        title: "Upozornění na chybějící dokumenty",
        description: "Chybějící nebo nepodepsané dokumenty jsou okamžitě viditelné.",
        status: "available",
      },
      {
        title: "Oprávnění",
        description: "Přístup k firemním datům na základě rolí.",
        status: "available",
      },
      {
        title: "Audit událostí",
        description: "Prohledávatelná stopa rozhodnutí a dokumentu.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Nahrát a propojit",
        description: "Dokumenty spojené s cestou, řidičem nebo vozidlem.",
        status: "available",
      },
      {
        title: "Pracovní postup podpisu",
        description: "Čeká na podpis → podepsáno → recenze.",
        status: "pilot",
      },
      {
        title: "Uzavřený výletní balíček",
        description: "Exportovatelné dokumenty a události.",
        status: "pilot",
      },
      {
        title: "Správa šablon",
        description: "Centrální šablony dokumentů — postupné zavádění.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Přístup na základě rolí",
        description: "Oddělení na úrovni uživatele a společnosti.",
        status: "available",
      },
      {
        title: "Protokol auditu",
        description: "Akce a rozhodnutí zůstávají dohledatelné.",
        status: "available",
      },
      {
        title: "Relace a zařízení",
        description: "Řízená relace a správa zařízení.",
        status: "pilot",
      },
      {
        title: "Podpora přístupu",
        description: "Časově omezený, přihlášený záznam podpory.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Jazyk",
    draftSuffix: "· návrh",
    breadcrumb: "Strouhanka",
    primaryNav: "Primární",
    importantNotice: "Důležité upozornění",
  },
};
