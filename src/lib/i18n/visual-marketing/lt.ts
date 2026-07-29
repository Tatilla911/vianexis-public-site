import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingLt: VisualMarketingContent = {
  skipToContent: "Pereiti prie turinio",
  brandVisuals: {
    routeLabel: "Aktyvus maršrutas",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "„ViaNexis“ tinklas",
    networkTitle: "Sujungia ne tik maršrutas.",
    networkSubtitle: "Sustojimai, dokumentai, parašai, pranešimai ir sprendimai priklauso tam pačiam kelionės srautui – laiko tvarka, su leidimais ir ieškoma įvykių seka.",
    workflowEvents: [
      "Išvykimas",
      "Paėmimas",
      "dokumentas",
      "Parašas",
      "Laukia",
      "Pristatymas",
      "Uždara pakuotė"
    ],
  },
  pillars: {
    title: "Trys ramsčiai – viena valdoma sistema",
    subtitle: "Vairuotojui patogus mobilusis srautas, įmonės veiklos kontrolė ir audituojama sprendimų seka.",
    items: [
      {
        title: "Vairuotojui patogi programėlė",
        description: "Kelionės, sustojimai, dokumentai, parašai ir įvykiai mobiliojoje vartotojo sąsajoje, kurioje galima naudoti neprisijungus.",
      },
      {
        title: "Įmonės kontrolė",
        description: "Dispečerio apžvalga, leidimai, įspėjimai ir dokumentų sekimas įmonės portale.",
      },
      {
        title: "Audituojamos operacijos",
        description: "Įvykiai, parašai ir sprendimai su paieškos žurnalu – be perdėtų saugumo reikalavimų.",
      }
    ],
  },
  process: {
    title: "Pagrindinė kelionės darbo eiga",
    subtitle: "Nuo kūrimo iki uždaro paketo – struktūriniai žingsniai su prieiga, žinant leidimą.",
    steps: [
      {
        title: "Sukurti kelionę",
        description: "Paėmimo ir pristatymo stotelės, užduotys ir dokumentų reikalavimai.",
      },
      {
        title: "Vairuotojo priėmimas",
        description: "Priskyrimas, priėmimas ir kontroliuojamos sesijos pradžia.",
      },
      {
        title: "Stotelės ir užduotys",
        description: "Keli sustojimų, užduočių, įvykių ir žalos įrašai.",
      },
      {
        title: "Dokumentai ir parašai",
        description: "Įkelkite, pasirašykite, peržiūrėkite – tada uždarytas kelionės paketas.",
      }
    ],
  },
  homeModules: {
    title: "Gaminių paviršiai",
    subtitle: "Kiekvienas paviršius turi tą patį kelionės ir dokumento modelį. Išsami informacija pateikiama produktų puslapiuose.",
    detailsLink: "Detalės",
    items: [
      {
        title: "Vairuotojo programa",
        description: "Kelionės, sustojimai, dokumentai ir parašai mobiliajame sraute neprisijungus. Vairuotojai visada mato kitą reikalingą veiksmą.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Įmonės portalas",
        description: "Veiklos apžvalga: aktyvios kelionės, trūkstami dokumentai, įspėjimai ir leidimai vienoje vietoje.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumentai ir parašai",
        description: "Su kelione susiję dokumentai, parašo būsenos ir eksportuojamas uždaros kelionės paketas.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Pranešimai ir įspėjimai",
        description: "Su kelione susietas bendravimas. Pranešimų funkcijas galima suaktyvinti kaip bandomosios programos dalį.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Auditas ir leidimai",
        description: "Vaidmenimis pagrįsta prieiga, įvykiai, kuriuose galima ieškoti, ir kontroliuojama palaikymo prieiga.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Veikimas neprisijungus",
        description: "Tvarkyklės gali toliau dirbti silpnuose tinkluose; pakeitimai baigiami sinchronizuoti.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumentai ir parašai",
    subtitle: "Dokumentuose yra nuoroda į kelionę, juos galima pasirašyti ir peržiūrėti, tada sudėti į eksportuojamą paketą.",
    steps: [
      {
        title: "Įkelkite arba sukurkite",
        description: "CMR, važtaraštis, nuotrauka arba skaitmeninis šablonas.",
      },
      {
        title: "Susiejimas",
        description: "Priskirta kelionės, vairuotojo ar transporto priemonės kontekstui.",
      },
      {
        title: "Pasirašykite ir peržiūrėkite",
        description: "Būsenos eiga: laukiama parašo → pasirašyta → peržiūrima.",
      },
      {
        title: "Uždaras kelionės paketas",
        description: "Eksportuotini dokumentai ir įvykiai – audituojama santrauka.",
      }
    ],
    statuses: [
      "Įkelta",
      "Trūksta",
      "Laukiama parašo",
      "Pasirašė",
      "Peržiūrima"
    ],
    detailsLink: "Dokumentai išsamiai",
  },
  offline: {
    title: "Veikimas neprisijungus ir sinchronizavimas",
    subtitle: "Darbas tęsiamas silpnuose tinkluose – užbaigimas įvyksta po sinchronizavimo.",
    cards: [
      {
        title: "Vietinis išsaugojimas",
        description: "Tvarkyklės pakeitimai saugiai išsaugomi įrenginyje.",
      },
      {
        title: "Matomas sinchronizavimas",
        description: "Laukiantys pakeitimai bus matomi tol, kol atsiras ryšys.",
      },
      {
        title: "Konflikto signalizacija",
        description: "Prieštaringi šaltiniai registruojami – niekada tyliai neperrašomi.",
      }
    ],
    detailsLink: "Vairuotojo programa",
  },
  responsibleUse: {
    title: "Atsakingas naudojimas",
    subtitle: "Trumpi, svarbūs apribojimai – informacija skelbiama teisiniuose puslapiuose.",
    items: [
      "ViaNexis nėra sertifikuota eFTI platforma ir nežada automatinio įgaliojimų priėmimo.",
      "OCR, AI ir vertimas yra pagalbiniai – reikia atlikti žmogaus peržiūrą.",
      "Sistema neteikia teisinių konsultacijų.",
      "Tai nėra avarinė ar SOS paslauga."
    ],
    detailsLink: "Visi atsakingo naudojimo įspėjimai",
  },
  pilotCta: {
    title: "Kontroliuojama piloto prieiga",
    subtitle: "Šiuo metu „ViaNexis“ pasiekiama naudojant bandomąją programą su pasirinktais operatoriais ir vairuotojais. Prieiga suaktyvinama po individualaus aptarimo ir patvirtinimo.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktyvi kelionė",
    phoneSubtitle: "Demonstracija · VN-2407-A18",
    phoneRows: [
      {
        label: "Kita stotelė",
        value: "Paėmimas · Budapeštas (demonstracinė versija)",
        status: "Kelyje",
      },
      {
        label: "dokumentas",
        value: "CMR – laukiama parašo",
        status: "Veiksmas",
      },
      {
        label: "Sinchronizuoti",
        value: "Laukiama 1 pakeitimo",
        status: "Neprisijungus",
      }
    ],
    phoneCaption: "Produkto demonstracija – anoniminiai duomenų pavyzdžiai.",
    browserTitle: "Operacijų kontrolė",
    browserSubtitle: "Demonstracinis parkas · dispečerinis vaizdas",
    browserColumns: [
      "Kelionė",
      "Sustok",
      "dokumentas",
      "Būsena"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapeštas (demonstracinė versija)",
        "Trūksta CMR",
        "Įspėjimas"
      ],
      [
        "VN-2407-B03",
        "Győras (demonstracinė versija)",
        "POD pasirašyta",
        "Kelyje"
      ],
      [
        "VN-2407-C11",
        "Viena (demo versija)",
        "Peržiūrima",
        "Iš anksto uždaryti"
      ]
    ],
    browserCaption: "Įmonės portalo demonstracija – ne tiesioginiai klientų duomenys.",
    driver: {
      navHome: "Pradžia",
      navTrips: "Kelionės",
      navDocs: "Dokumentai",
      navMore: "Daugiau",
      tripStatus: "Vyksta kelionė",
      nextStopLabel: "Kita stotelė",
      nextStopValue: "Paėmimas · Budapeštas (demonstracinė versija)",
      documentLabel: "dokumentas",
      documentValue: "Skaitmeninis CMR",
      documentAction: "Reikalingas parašas",
      syncLabel: "Ryšys",
      syncValue: "Neprisijungus · 1 laukiama",
    },
    portal: {
      roleLabel: "Vaidmuo: dispečeris",
      alertLabel: "Įspėjimas",
      alertValue: "VN-2407-A18 · CMR laukia parašo",
      auditLabel: "Naujausias audito įvykis",
      auditValue: "Pakeista dokumento būsena · vairuotojo programa",
    },
  },
  statusLabels: {
    available: "Yra",
    pilot: "Pilotas",
    development: "Vystantis",
  },
  productPage: {
    highlightsTitle: "Pagrindinės galimybės",
    capabilitiesTitle: "Ką suteikia šis paviršius",
    statusesTitle: "Būsenos etiketės",
  },
  authority: {
    heroSubtitle: "Laiku ir apimtimi apribota prieiga prie kelionės įrodymų – ne sertifikuota eFTI platforma.",
    foundationBadge: "Techninis pasirengimas",
    notCertifiedBadge: "Nesertifikuotas eFTI",
    foundationTitle: "Ką reiškia pasiruošimas",
    foundationSubtitle: "Struktūrizuoti duomenys ir kontroliuojamas bendrinimas – be sertifikato ar leidimo reikalavimo.",
    extraDisclaimer: "„ViaNexis“ nežada valdžios pripažinimo kiekvienoje šalyje. Už teisės aktų ir reglamentų laikymąsi atsako klientas.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Kelionių sąrašas ir stotelės",
        description: "Aktyvios kelionės, kiti veiksmai ir sustabdymo užduotys.",
        status: "available",
      },
      {
        title: "Dokumentai ir parašas",
        description: "Įkėlimai, CMR užduotys ir parašų fiksavimas.",
        status: "available",
      },
      {
        title: "Darbas neprisijungus",
        description: "Vietinis išsaugojimas su matomu laukiančiu sinchronizavimu.",
        status: "available",
      },
      {
        title: "Susirašinėjimas žinutėmis",
        description: "Su kelione susietas vairuotojų bendravimas.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktyvių kelionių sąrašas",
        description: "Veiklos apžvalga su sustojimais ir būsenomis.",
        status: "available",
      },
      {
        title: "Įspėjimai apie trūkstamus dokumentus",
        description: "Trūkstami arba nepasirašyti dokumentai matomi iš karto.",
        status: "available",
      },
      {
        title: "Leidimai",
        description: "Vaidmenimis pagrįsta prieiga prie įmonės duomenų.",
        status: "available",
      },
      {
        title: "Audito renginiai",
        description: "Ieškoma sprendimų ir dokumentų seka.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Įkelti ir susieti",
        description: "Dokumentai, susiję su kelione, vairuotoju ar transporto priemone.",
        status: "available",
      },
      {
        title: "Parašo darbo eiga",
        description: "Laukiama parašo → pasirašyta → peržiūra.",
        status: "pilot",
      },
      {
        title: "Uždaras kelionės paketas",
        description: "Eksportuojami dokumentai ir renginiai.",
        status: "pilot",
      },
      {
        title: "Šablonų valdymas",
        description: "Centriniai dokumentų šablonai – laipsniškas išleidimas.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Vaidmenimis pagrįsta prieiga",
        description: "Vartotojo ir įmonės atskyrimas.",
        status: "available",
      },
      {
        title: "Audito žurnalas",
        description: "Veiksmai ir sprendimai lieka ieškomi.",
        status: "available",
      },
      {
        title: "Sesija ir įrenginys",
        description: "Valdomas seansas ir įrenginių valdymas.",
        status: "pilot",
      },
      {
        title: "Prieiga prie palaikymo",
        description: "Riboto laiko, užregistruotas palaikymo įrašas.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Kalba",
    draftSuffix: "· juodraštis",
    breadcrumb: "Duonos trupiniai",
    primaryNav: "Pirminis",
    importantNotice: "Svarbus pranešimas",
  },
};
