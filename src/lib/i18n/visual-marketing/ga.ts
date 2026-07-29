import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingGa: VisualMarketingContent = {
  skipToContent: "Léim ar ábhar",
  brandVisuals: {
    routeLabel: "Bealach gníomhach",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Líonra ViaNexis",
    networkTitle: "Ní hé amháin an bealach a nascann.",
    networkSubtitle: "Baineann stadanna, doiciméid, sínithe, teachtaireachtaí, agus cinntí leis an sreabhadh turas céanna — in ord ama, le ceadanna agus rian imeachta inchuardaithe.",
    workflowEvents: [
      "Imeacht",
      "Piocadh",
      "Doiciméad",
      "Síniú",
      "Ag fanacht",
      "Seachadadh",
      "Pacáiste dúnta"
    ],
  },
  pillars: {
    title: "Trí philéar - córas rialaithe amháin",
    subtitle: "Sreabhadh soghluaiste atá cairdiúil don tiománaí, rialú oibriúcháin cuideachta, agus rian cinnteoireachta in-iniúchta.",
    items: [
      {
        title: "App cairdiúil le tiománaí",
        description: "Turais, stadanna, doiciméid, sínithe, agus imeachtaí in Chomhéadain Shoghluaiste atá in ann as líne.",
      },
      {
        title: "Rialú cuideachta",
        description: "Forbhreathnú Seoltóra, ceadanna, foláirimh, agus rianú doiciméad i dtairseach na cuideachta.",
      },
      {
        title: "Oibríochtaí in-iniúchta",
        description: "Imeachtaí, sínithe, agus cinntí le loga inchuardaithe - gan éilimh slándála áibhéalacha.",
      }
    ],
  },
  process: {
    title: "Sreabhadh oibre turas lárnach",
    subtitle: "Ó chruthú go pacáiste dúnta - céimeanna struchtúrtha le rochtain feasach ar chead.",
    steps: [
      {
        title: "Cruthaigh turas",
        description: "Stopann piocadh agus seachadadh, tascanna, agus ceanglais doiciméad.",
      },
      {
        title: "Glacadh le tiománaí",
        description: "Tús le tasc, glacadh, agus seisiún rialaithe.",
      },
      {
        title: "Stadanna agus tascanna",
        description: "Stopanna iolracha, tascanna, imeachtaí, agus taifid damáiste.",
      },
      {
        title: "Doiciméid agus sínithe",
        description: "Uaslódáil, sínigh, léirmheas - ansin pacáiste turais dúnta.",
      }
    ],
  },
  homeModules: {
    title: "Dromchlaí táirgí",
    subtitle: "Roinneann gach dromchla an tsamhail turas agus doiciméad céanna. Tá sonraí beo ar na leathanaigh táirge.",
    detailsLink: "Sonraí",
    items: [
      {
        title: "App tiománaí",
        description: "Turais, stadanna, doiciméid, agus sínithe i sreabhadh soghluaiste atá in ann as líne. Feiceann tiománaithe an chéad ghníomh eile a theastaíonn i gcónaí.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Tairseach cuideachta",
        description: "Forbhreathnú oibríochta: turais ghníomhacha, doiciméid in easnamh, foláirimh, agus ceadanna in aon áit amháin.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Doiciméid & sínithe",
        description: "Páipéarachas turas-nasctha, stáit sínithe, agus pacáiste turas dúnta is féidir a onnmhairiú.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Teachtaireachtaí & foláirimh",
        description: "Cumarsáid turas-nasctha. Is féidir gnéithe fógra a ghníomhachtú mar chuid den chlár píolótach.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Iniúchadh & ceadanna",
        description: "Rochtain ról-bhunaithe, imeachtaí inchuardaithe, agus rochtain tacaíochta rialaithe.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Oibriú as líne",
        description: "Is féidir le tiománaithe leanúint ar aghaidh ag obair ar líonraí laga; tagann athruithe chun críche nuair a chuirtear an sioncronú i gcrích.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Doiciméid & sínithe",
    subtitle: "Nascann na doiciméid leis an turas, is féidir iad a shíniú agus a athbhreithniú, ansin iad a dhúnadh isteach i bpacáiste is féidir a onnmhairiú.",
    steps: [
      {
        title: "Uaslódáil nó cruthaigh",
        description: "CMR, nóta seachadta, grianghraf, nó teimpléad digiteach.",
      },
      {
        title: "Nascadh",
        description: "Sannta do chomhthéacs turais, tiománaí, nó feithicle.",
      },
      {
        title: "Sínigh agus athbhreithniú",
        description: "Sreabhadh stádais: ag fanacht le síniú → sínithe → faoi athbhreithniú.",
      },
      {
        title: "Pacáiste turas dúnta",
        description: "Doiciméid agus imeachtaí is féidir a onnmhairiú — achoimre in-iniúchta.",
      }
    ],
    statuses: [
      "uaslódáilte",
      "Ar iarraidh",
      "Ag feitheamh le síniú",
      "Sínithe",
      "Faoi athbhreithniú"
    ],
    detailsLink: "Doiciméid go mion",
  },
  offline: {
    title: "Oibriú & sioncronú as líne",
    subtitle: "Leanann obair ar aghaidh ar líonraí laga — tarlaíonn bailchríoch tar éis sioncronaithe.",
    cards: [
      {
        title: "Sábháil áitiúil",
        description: "Stóráiltear athruithe tiománaithe go sábháilte ar an ngléas.",
      },
      {
        title: "Sioncronú le feiceáil",
        description: "Fanann athruithe ar feitheamh le feiceáil go dtí go bhfilleann an nascacht.",
      },
      {
        title: "Comharthaí coinbhleachta",
        description: "Déantar foinsí contrártha a logáil - ní dhéantar iad a fhorscríobh go ciúin.",
      }
    ],
    detailsLink: "App tiománaí",
  },
  responsibleUse: {
    title: "Úsáid fhreagrach",
    subtitle: "Teorainneacha gearra tábhachtacha — tá sonraí beo ar na leathanaigh dlí.",
    items: [
      "Ní ardán eFTI deimhnithe é ViaNexis agus ní gheallann sé go nglacfar go huathoibríoch leis an údarás.",
      "Tá OCR, AI, agus aistriúcháin cuiditheach — tá athbhreithniú daonna de dhíth.",
      "Ní sholáthraíonn an córas comhairle dlí.",
      "Ní seirbhís éigeandála nó SOS é."
    ],
    detailsLink: "Fógraí freagracha iomlána",
  },
  pilotCta: {
    title: "Rochtain píolótach rialaithe",
    subtitle: "Tá ViaNexis ar fáil faoi láthair trí chlár píolótach le hiompróirí agus tiománaithe roghnaithe. Cuirtear rochtain i ngníomh tar éis plé aonair agus faomhadh.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Turas gníomhach",
    phoneSubtitle: "Taispeántas · VN-2407-A18",
    phoneRows: [
      {
        label: "An chéad stad eile",
        value: "Piocadh · Búdaipeist (taispeántas)",
        status: "Ar an mbealach",
      },
      {
        label: "Doiciméad",
        value: "CMR — ag fanacht le síniú",
        status: "Gníomh",
      },
      {
        label: "Sioncrónaigh",
        value: "1 athrú ar feitheamh",
        status: "As líne",
      }
    ],
    phoneCaption: "Taispeántas táirge — sonraí samplacha gan ainm.",
    browserTitle: "Rialú oibríochtaí",
    browserSubtitle: "Taispeántas cabhlach · amharc seolta",
    browserColumns: [
      "Turas",
      "Stop",
      "Doiciméad",
      "Stádas"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Búdaipeist (taispeántas)",
        "CMR in easnamh",
        "Airdeall"
      ],
      [
        "VN-2407-B03",
        "Győr (taispeántas)",
        "POD sínithe",
        "Ar an mbealach"
      ],
      [
        "VN-2407-C11",
        "Vín (taispeántas)",
        "Faoi athbhreithniú",
        "Réamh-dhúnadh"
      ]
    ],
    browserCaption: "Taispeántas tairseach cuideachta - ní sonraí custaiméara beo.",
    driver: {
      navHome: "Baile",
      navTrips: "Turais",
      navDocs: "Docs",
      navMore: "Tuilleadh",
      tripStatus: "Turas ar siúl",
      nextStopLabel: "An chéad stad eile",
      nextStopValue: "Piocadh · Búdaipeist (taispeántas)",
      documentLabel: "Doiciméad",
      documentValue: "CMR digiteach",
      documentAction: "Síniú ag teastáil",
      syncLabel: "Ceangal",
      syncValue: "As Líne · 1 ar feitheamh",
    },
    portal: {
      roleLabel: "Ról: Seoltóir",
      alertLabel: "Airdeall",
      alertValue: "VN-2407-A18 · CMR ag fanacht le síniú",
      auditLabel: "Imeacht iniúchta is déanaí",
      auditValue: "Athraíodh stádas an doiciméid · aip tiománaí",
    },
  },
  statusLabels: {
    available: "Ar fáil",
    pilot: "Píolótach",
    development: "I bhforbairt",
  },
  productPage: {
    highlightsTitle: "Cumais eochair",
    capabilitiesTitle: "Cad a sholáthraíonn an dromchla seo",
    statusesTitle: "Lipéid stádais",
  },
  authority: {
    heroSubtitle: "Rochtain teoranta ó thaobh ama agus raon feidhme ar fhianaise thurais — ní ardán eFTI deimhnithe é.",
    foundationBadge: "Ullmhacht theicniúil",
    notCertifiedBadge: "Gan eFTI deimhnithe",
    foundationTitle: "Cad a chiallaíonn ullmhacht",
    foundationSubtitle: "Sonraí struchtúrtha agus comhroinnt rialaithe — gan éileamh ar dheimhniú nó ar chead.",
    extraDisclaimer: "Ní gheallann ViaNexis go nglacfar leis an údarás i ngach tír. Tá an custaiméir freagrach i gcónaí as comhlíonadh dlíthiúil agus rialála.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Liosta turas agus stadanna",
        description: "Turais ghníomhacha, na chéad ghníomhartha eile, agus stop tascanna.",
        status: "available",
      },
      {
        title: "Doiciméid agus síniú",
        description: "Uaslódálacha, tascanna CMR, agus gabháil sínithe.",
        status: "available",
      },
      {
        title: "Obair as líne",
        description: "Sábháil áitiúil le sioncronú infheicthe ar feitheamh.",
        status: "available",
      },
      {
        title: "teachtaireachtaí",
        description: "Cumarsáid turas-nasctha le haghaidh tiománaithe.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Liosta turas gníomhach",
        description: "Forbhreathnú oibriúcháin le stadanna agus stádais.",
        status: "available",
      },
      {
        title: "Foláirimh doiciméad ar iarraidh",
        description: "Tá doiciméid atá ar iarraidh nó gan síniú le feiceáil láithreach.",
        status: "available",
      },
      {
        title: "Ceadanna",
        description: "Rochtain ról-bhunaithe ar shonraí cuideachta.",
        status: "available",
      },
      {
        title: "Imeachtaí iniúchta",
        description: "Cinneadh inchuardaithe agus rian doiciméad.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Uaslódáil agus nascadh",
        description: "Doiciméid a bhaineann le turas, tiománaí nó feithicil.",
        status: "available",
      },
      {
        title: "Sreabhadh oibre sínithe",
        description: "Ag feitheamh le síniú → sínithe → athbhreithniú.",
        status: "pilot",
      },
      {
        title: "Pacáiste turas dúnta",
        description: "Doiciméid agus imeachtaí is féidir a onnmhairiú.",
        status: "pilot",
      },
      {
        title: "Bainistíocht teimpléid",
        description: "Teimpléid doiciméad lárnach — rolladh amach de réir a chéile.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rochtain ról-bhunaithe",
        description: "Scaradh arna scóip ag úsáideoir agus ag cuideachta.",
        status: "available",
      },
      {
        title: "Loga iniúchta",
        description: "Tá gníomhartha agus cinntí fós inchuardaithe.",
        status: "available",
      },
      {
        title: "Seisiún agus gléas",
        description: "Seisiún rialaithe agus bainistíocht gléas.",
        status: "pilot",
      },
      {
        title: "Tacaíocht a thabhairt do rochtain",
        description: "Iontráil tacaíochta logáilte, teoranta ó thaobh ama.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Teanga",
    draftSuffix: "· dréacht",
    breadcrumb: "Briseadh arán",
    primaryNav: "Bunscoile",
    importantNotice: "Fógra tábhachtach",
  },
};
