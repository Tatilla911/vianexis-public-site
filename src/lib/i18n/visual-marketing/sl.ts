import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingSl: VisualMarketingContent = {
  skipToContent: "Preskoči na vsebino",
  brandVisuals: {
    routeLabel: "Aktivna pot",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Omrežje ViaNexis",
    networkTitle: "Ne povezuje le pot.",
    networkSubtitle: "Postanki, dokumenti, podpisi, sporočila in odločitve pripadajo istemu toku potovanja – v časovnem vrstnem redu, z dovoljenji in sledjo dogodkov, po kateri je mogoče iskati.",
    workflowEvents: [
      "Odhod",
      "Prevzem",
      "Dokument",
      "Podpis",
      "Čakanje",
      "Dostava",
      "Zaprt paket"
    ],
  },
  pillars: {
    title: "Trije stebri — en nadzorovan sistem",
    subtitle: "Vozniku prijazen mobilni tok, operativni nadzor podjetja in sled odločitev, ki jo je mogoče revidirati.",
    items: [
      {
        title: "Vozniku prijazna aplikacija",
        description: "Potovanja, postanki, dokumenti, podpisi in dogodki v mobilnem uporabniškem vmesniku brez povezave.",
      },
      {
        title: "Nadzor podjetja",
        description: "Dispečerski pregled, dovoljenja, opozorila in sledenje dokumentom na portalu podjetja.",
      },
      {
        title: "Revizijske operacije",
        description: "Dogodki, podpisi in odločitve z dnevnikom, po katerem je mogoče iskati — brez pretiranih varnostnih trditev.",
      }
    ],
  },
  process: {
    title: "Osnovni potek potovanja",
    subtitle: "Od ustvarjanja do zaprtega paketa – strukturirani koraki z dostopom, ki upošteva dovoljenja.",
    steps: [
      {
        title: "Ustvari potovanje",
        description: "Postanki za prevzem in dostavo, opravila in zahteve glede dokumentov.",
      },
      {
        title: "Sprejemanje voznika",
        description: "Dodelitev, sprejem in začetek nadzorovane seje.",
      },
      {
        title: "Postanki in naloge",
        description: "Več zapisov o postankih, opravilih, dogodkih in poškodbah.",
      },
      {
        title: "Dokumenti in podpisi",
        description: "Naloži, podpiši, pregledaj — nato zaključen paket potovanja.",
      }
    ],
  },
  homeModules: {
    title: "Površine izdelkov",
    subtitle: "Vsaka površina ima isti model potovanja in dokumenta. Podrobnosti so na voljo na straneh izdelkov.",
    detailsLink: "Podrobnosti",
    items: [
      {
        title: "Aplikacija za voznika",
        description: "Potovanja, postanki, dokumenti in podpisi v mobilnem toku brez povezave. Vozniki vedno vidijo naslednje zahtevano dejanje.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal podjetja",
        description: "Pregled delovanja: aktivna potovanja, manjkajoči dokumenti, opozorila in dovoljenja na enem mestu.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenti in podpisi",
        description: "Papirologija, povezana s potovanjem, države podpisa in paket zaprtega potovanja, ki ga je mogoče izvoziti.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Sporočila in opozorila",
        description: "Komunikacija, povezana s potovanjem. Funkcije obveščanja je mogoče aktivirati kot del pilotnega programa.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Revizija in dovoljenja",
        description: "Dostop na podlagi vlog, dogodki po iskanju in nadzorovan dostop podpore.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Delovanje brez povezave",
        description: "Gonilniki lahko še naprej delajo na šibkih omrežjih; spremembe se zaključijo, ko se sinhronizacija zaključi.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenti in podpisi",
    subtitle: "Dokumenti so povezani s potovanjem, jih je mogoče podpisati in pregledati ter nato zapreti v paket za izvoz.",
    steps: [
      {
        title: "Naložite ali ustvarite",
        description: "CMR, dobavnica, fotografija ali digitalna predloga.",
      },
      {
        title: "Povezovanje",
        description: "Dodeljeno potovanju, vozniku ali kontekstu vozila.",
      },
      {
        title: "Podpiši in pregledaj",
        description: "Potek stanja: čakanje na podpis → podpisano → v pregledu.",
      },
      {
        title: "Zaprt paket potovanja",
        description: "Dokumenti in dogodki, ki jih je mogoče izvoziti – revizijski povzetek.",
      }
    ],
    statuses: [
      "Naloženo",
      "manjka",
      "Čakanje na podpis",
      "Podpisano",
      "V pregledu"
    ],
    detailsLink: "Dokumenti podrobno",
  },
  offline: {
    title: "Delovanje in sinhronizacija brez povezave",
    subtitle: "Delo se nadaljuje na šibkih omrežjih — dokončanje se zgodi po sinhronizaciji.",
    cards: [
      {
        title: "Lokalno shranjevanje",
        description: "Spremembe gonilnika so varno shranjene v napravi.",
      },
      {
        title: "Vidna sinhronizacija",
        description: "Čakajoče spremembe ostanejo vidne, dokler se ne vzpostavi povezljivost.",
      },
      {
        title: "Signalizacija konflikta",
        description: "Nasprotujoči viri se beležijo - nikoli tiho prepišejo.",
      }
    ],
    detailsLink: "Aplikacija za voznika",
  },
  responsibleUse: {
    title: "Odgovorna uporaba",
    subtitle: "Kratke, pomembne omejitve — podrobnosti so objavljene na pravnih straneh.",
    items: [
      "ViaNexis ni certificirana platforma eFTI in ne obljublja samodejnega sprejema avtoritete.",
      "OCR, AI in prevod so v pomoč – potreben je človeški pregled.",
      "Sistem ne nudi pravnih nasvetov.",
      "Ne gre za nujno pomoč ali SOS storitev."
    ],
    detailsLink: "Popolna obvestila o odgovorni uporabi",
  },
  pilotCta: {
    title: "Nadzorovan dostop pilota",
    subtitle: "ViaNexis je trenutno na voljo v pilotnem programu z izbranimi prevozniki in vozniki. Dostop se aktivira po individualnem pogovoru in odobritvi.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktivno potovanje",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Naslednja postaja",
        value: "Prevzem · Budimpešta (demo)",
        status: "Na poti",
      },
      {
        label: "Dokument",
        value: "CMR — čaka na podpis",
        status: "Akcija",
      },
      {
        label: "Sinhronizacija",
        value: "1 sprememba v teku",
        status: "Brez povezave",
      }
    ],
    phoneCaption: "Predstavitev izdelka — anonimizirani vzorčni podatki.",
    browserTitle: "Nadzor delovanja",
    browserSubtitle: "Demo vozni park · pogled dispečerja",
    browserColumns: [
      "Izlet",
      "Stop",
      "Dokument",
      "Stanje"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budimpešta (demo)",
        "CMR manjka",
        "Opozorilo"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD podpisan",
        "Na poti"
      ],
      [
        "VN-2407-C11",
        "Dunaj (demo)",
        "V pregledu",
        "Predhodno zapiranje"
      ]
    ],
    browserCaption: "Predstavitev portala podjetja — ne podatki o strankah v živo.",
    driver: {
      navHome: "domov",
      navTrips: "Izleti",
      navDocs: "dokumenti",
      navMore: "več",
      tripStatus: "Izlet v teku",
      nextStopLabel: "Naslednja postaja",
      nextStopValue: "Prevzem · Budimpešta (demo)",
      documentLabel: "Dokument",
      documentValue: "Digitalni CMR",
      documentAction: "Potreben je podpis",
      syncLabel: "Povezava",
      syncValue: "Brez povezave · 1 na čakanju",
    },
    portal: {
      roleLabel: "Vloga: dispečer",
      alertLabel: "Opozorilo",
      alertValue: "VN-2407-A18 · CMR čaka na podpis",
      auditLabel: "Zadnji revizijski dogodek",
      auditValue: "Stanje dokumenta spremenjeno · aplikacija gonilnika",
    },
  },
  statusLabels: {
    available: "Na voljo",
    pilot: "Pilot",
    development: "V razvoju",
  },
  productPage: {
    highlightsTitle: "Ključne zmogljivosti",
    capabilitiesTitle: "Kaj ponuja ta površina",
    statusesTitle: "Statusne oznake",
  },
  authority: {
    heroSubtitle: "Časovno in obsegom omejen dostop do dokazov o potovanjih – ni certificirana platforma eFTI.",
    foundationBadge: "Tehnična pripravljenost",
    notCertifiedBadge: "Ni certificiran eFTI",
    foundationTitle: "Kaj pomeni pripravljenost",
    foundationSubtitle: "Strukturirani podatki in nadzorovana skupna raba — brez zahtevka za potrdilo ali dovoljenje.",
    extraDisclaimer: "ViaNexis ne obljublja, da bo organ sprejet v vseh državah. Skladnost s pravnimi in predpisi ostaja odgovornost stranke.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Seznam izletov in postankov",
        description: "Aktivna potovanja, naslednja dejanja in zaustavitvena opravila.",
        status: "available",
      },
      {
        title: "Dokumenti in podpis",
        description: "Nalaganja, opravila CMR in zajem podpisa.",
        status: "available",
      },
      {
        title: "Delo brez povezave",
        description: "Lokalno shranjevanje z vidno čakajočo sinhronizacijo.",
        status: "available",
      },
      {
        title: "Sporočila",
        description: "Komunikacija za voznike, povezana s potovanjem.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Seznam aktivnih potovanj",
        description: "Pregled obratovanja s postanki in statusi.",
        status: "available",
      },
      {
        title: "Opozorila o manjkajočih dokumentih",
        description: "Manjkajoči ali nepodpisani dokumenti so takoj vidni.",
        status: "available",
      },
      {
        title: "Dovoljenja",
        description: "Dostop do podatkov podjetja na podlagi vlog.",
        status: "available",
      },
      {
        title: "Revizijski dogodki",
        description: "Iskalna odločitev in sled dokumentov.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Nalaganje in povezovanje",
        description: "Dokumenti, povezani s potovanjem, voznikom ali vozilom.",
        status: "available",
      },
      {
        title: "Potek dela podpisa",
        description: "Čaka na podpis → podpisano → pregled.",
        status: "pilot",
      },
      {
        title: "Zaprt paket potovanja",
        description: "Izvozni dokumenti in dogodki.",
        status: "pilot",
      },
      {
        title: "Upravljanje predlog",
        description: "Centralne predloge dokumentov — postopno uvajanje.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Dostop na podlagi vlog",
        description: "Ločitev na uporabnika in podjetja.",
        status: "available",
      },
      {
        title: "Revizijski dnevnik",
        description: "Dejanja in odločitve ostajajo na voljo za iskanje.",
        status: "available",
      },
      {
        title: "Seja in naprava",
        description: "Nadzorovana seja in upravljanje naprav.",
        status: "pilot",
      },
      {
        title: "Podporni dostop",
        description: "Časovno omejen, zabeležen vnos podpore.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Jezik",
    draftSuffix: "· osnutek",
    breadcrumb: "Drobtina",
    primaryNav: "Primarni",
    importantNotice: "Pomembno obvestilo",
  },
};
