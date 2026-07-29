import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingLv: VisualMarketingContent = {
  skipToContent: "Pāriet uz saturu",
  brandVisuals: {
    routeLabel: "Aktīvs maršruts",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis tīkls",
    networkTitle: "Tas nav tikai maršruts, kas savieno.",
    networkSubtitle: "Pieturas, dokumenti, paraksti, ziņojumi un lēmumi pieder vienai un tai pašai brauciena plūsmai — laika secībā, ar atļaujām un meklējamu notikumu celiņu.",
    workflowEvents: [
      "Izbraukšana",
      "Pikaps",
      "Dokuments",
      "Paraksts",
      "Gaida",
      "Piegāde",
      "Slēgts iepakojums"
    ],
  },
  pillars: {
    title: "Trīs pīlāri — viena kontrolēta sistēma",
    subtitle: "Vadītājiem draudzīga mobilā plūsma, uzņēmuma darbības kontrole un auditējama lēmumu izsekojamība.",
    items: [
      {
        title: "Autovadītājam draudzīga lietotne",
        description: "Braucieni, pieturas, dokumenti, paraksti un notikumi bezsaistes mobilajā lietotāja interfeisā.",
      },
      {
        title: "Uzņēmuma kontrole",
        description: "Dispečeru pārskats, atļaujas, brīdinājumi un dokumentu izsekošana uzņēmuma portālā.",
      },
      {
        title: "Auditējamās operācijas",
        description: "Notikumi, paraksti un lēmumi ar meklējamu žurnālu — bez pārspīlētiem drošības apgalvojumiem.",
      }
    ],
  },
  process: {
    title: "Galvenā brauciena darbplūsma",
    subtitle: "No izveides līdz slēgtai pakotnei — strukturētas darbības ar atļauju apzinātu piekļuvi.",
    steps: [
      {
        title: "Izveidot ceļojumu",
        description: "Saņemšanas un piegādes pieturas, uzdevumi un dokumentu prasības.",
      },
      {
        title: "Vadītāja pieņemšana",
        description: "Piešķiršana, pieņemšana un kontrolētas sesijas sākums.",
      },
      {
        title: "Pieturas un uzdevumi",
        description: "Vairāki apstāšanās, uzdevumi, notikumi un bojājumu ieraksti.",
      },
      {
        title: "Dokumenti un paraksti",
        description: "Augšupielādējiet, parakstiet, pārskatiet — pēc tam slēgta ceļojuma pakete.",
      }
    ],
  },
  homeModules: {
    title: "Produktu virsmas",
    subtitle: "Katrai virsmai ir vienāds ceļojuma un dokumenta modelis. Sīkāka informācija atrodama produktu lapās.",
    detailsLink: "Sīkāka informācija",
    items: [
      {
        title: "Vadītāja lietotne",
        description: "Braucieni, pieturas, dokumenti un paraksti mobilajā plūsmā bezsaistē. Autovadītāji vienmēr redz nākamo nepieciešamo darbību.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Uzņēmuma portāls",
        description: "Darbības pārskats: aktīvi braucieni, trūkstošie dokumenti, brīdinājumi un atļaujas vienuviet.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenti un paraksti",
        description: "Ar ceļojumu saistīti dokumenti, paraksta statusi un eksportējama slēgta ceļojuma pakotne.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Ziņapmaiņa un brīdinājumi",
        description: "Ar ceļojumu saistīta komunikācija. Paziņojumu funkcijas var aktivizēt kā daļu no izmēģinājuma programmas.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audits un atļaujas",
        description: "Uz lomu balstīta piekļuve, meklējami notikumi un kontrolēta atbalsta piekļuve.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Bezsaistes darbība",
        description: "Draiveri var turpināt strādāt vājos tīklos; izmaiņas tiek pabeigtas, kad sinhronizācija ir pabeigta.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenti un paraksti",
    subtitle: "Dokumenti ir saistīti ar ceļojumu, tos var parakstīt un pārskatīt, pēc tam noslēgt eksportējamā iepakojumā.",
    steps: [
      {
        title: "Augšupielādējiet vai izveidojiet",
        description: "CMR, pavadzīme, fotoattēls vai digitālā veidne.",
      },
      {
        title: "Saistīšana",
        description: "Piešķirts braucienam, vadītājam vai transportlīdzekļa kontekstam.",
      },
      {
        title: "Parakstiet un pārskatiet",
        description: "Statusa plūsma: gaida parakstu → parakstīts → tiek pārskatīts.",
      },
      {
        title: "Slēgta ceļojuma pakete",
        description: "Eksportējami dokumenti un notikumi — auditējams kopsavilkums.",
      }
    ],
    statuses: [
      "Augšupielādēts",
      "Trūkst",
      "Gaida parakstu",
      "Parakstīts",
      "Notiek pārskatīšana"
    ],
    detailsLink: "Detalizēti dokumenti",
  },
  offline: {
    title: "Bezsaistes darbība un sinhronizācija",
    subtitle: "Darbs turpinās vājos tīklos — pabeigšana notiek pēc sinhronizācijas.",
    cards: [
      {
        title: "Vietējā saglabāšana",
        description: "Draiveri izmaiņas tiek droši saglabātas ierīcē.",
      },
      {
        title: "Redzama sinhronizācija",
        description: "Neapstiprinātās izmaiņas ir redzamas līdz savienojuma atjaunošanai.",
      },
      {
        title: "Konfliktu signalizācija",
        description: "Konfliktējošie avoti tiek reģistrēti — nekad netiek klusi pārrakstīti.",
      }
    ],
    detailsLink: "Vadītāja lietotne",
  },
  responsibleUse: {
    title: "Atbildīga lietošana",
    subtitle: "Īsi, svarīgi ierobežojumi — informācija ir pieejama juridiskajās lapās.",
    items: [
      "ViaNexis nav sertificēta eFTI platforma un nesola automātisku pilnvaru pieņemšanu.",
      "OCR, AI un tulkošana ir palīglīdzekļi — nepieciešama cilvēka pārbaude.",
      "Sistēma nesniedz juridiskas konsultācijas.",
      "Tas nav ārkārtas vai SOS pakalpojums."
    ],
    detailsLink: "Pilnīgi atbildīgas lietošanas paziņojumi",
  },
  pilotCta: {
    title: "Kontrolēta pilota piekļuve",
    subtitle: "ViaNexis pašlaik ir pieejams, izmantojot izmēģinājuma programmu ar atlasītiem pārvadātājiem un draiveriem. Piekļuve tiek aktivizēta pēc individuālas apspriešanas un apstiprināšanas.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktīvs brauciens",
    phoneSubtitle: "Demonstrācija · VN-2407-A18",
    phoneRows: [
      {
        label: "Nākamā pietura",
        value: "Saņemšana · Budapešta (demonstrācija)",
        status: "Ceļā",
      },
      {
        label: "Dokuments",
        value: "CMR — gaida parakstu",
        status: "Darbība",
      },
      {
        label: "Sinhronizēt",
        value: "Gaida 1 izmaiņu",
        status: "Bezsaistē",
      }
    ],
    phoneCaption: "Produkta demonstrācija — anonimizēti datu paraugi.",
    browserTitle: "Operāciju kontrole",
    browserSubtitle: "Demo flote · dispečera skats",
    browserColumns: [
      "Ceļojums",
      "Stop",
      "Dokuments",
      "Statuss"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapešta (demonstrācija)",
        "Trūkst CMR",
        "Brīdinājums"
      ],
      [
        "VN-2407-B03",
        "Ģēra (demonstrācija)",
        "POD parakstīts",
        "Ceļā"
      ],
      [
        "VN-2407-C11",
        "Vīne (demonstrācija)",
        "Notiek pārskatīšana",
        "Iepriekš aizvērt"
      ]
    ],
    browserCaption: "Uzņēmuma portāla demonstrācija — nevis tiešraides klientu dati.",
    driver: {
      navHome: "Sākums",
      navTrips: "Ceļojumi",
      navDocs: "Dokumenti",
      navMore: "Vairāk",
      tripStatus: "Brauciens notiek",
      nextStopLabel: "Nākamā pietura",
      nextStopValue: "Saņemšana · Budapešta (demonstrācija)",
      documentLabel: "Dokuments",
      documentValue: "Digitālā CMR",
      documentAction: "Nepieciešams paraksts",
      syncLabel: "Savienojums",
      syncValue: "Bezsaistē · 1 gaida",
    },
    portal: {
      roleLabel: "Loma: Dispečers",
      alertLabel: "Brīdinājums",
      alertValue: "VN-2407-A18 · CMR gaida parakstu",
      auditLabel: "Jaunākais audita pasākums",
      auditValue: "Dokumenta statuss mainīts · draivera lietotne",
    },
  },
  statusLabels: {
    available: "Pieejams",
    pilot: "Pilots",
    development: "Attīstībā",
  },
  productPage: {
    highlightsTitle: "Galvenās iespējas",
    capabilitiesTitle: "Ko šī virsma sniedz",
    statusesTitle: "Statusa etiķetes",
  },
  authority: {
    heroSubtitle: "Laika un apjoma ierobežota piekļuve ceļojuma pierādījumiem — nevis sertificēta eFTI platforma.",
    foundationBadge: "Tehniskā gatavība",
    notCertifiedBadge: "Nav sertificēts eFTI",
    foundationTitle: "Ko nozīmē gatavība",
    foundationSubtitle: "Strukturēti dati un kontrolēta koplietošana — bez sertifikāta vai atļaujas pieprasījuma.",
    extraDisclaimer: "ViaNexis nesola autoritātes pieņemšanu visās valstīs. Atbilstība tiesību aktiem un normatīvajiem aktiem joprojām ir klienta atbildība.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Braucienu saraksts un pieturas",
        description: "Aktīvie braucieni, nākamās darbības un apstāšanās uzdevumi.",
        status: "available",
      },
      {
        title: "Dokumenti un paraksts",
        description: "Augšupielādes, CMR uzdevumi un parakstu uztveršana.",
        status: "available",
      },
      {
        title: "Darbs bezsaistē",
        description: "Vietējā saglabāšana ar redzamu gaidošo sinhronizāciju.",
        status: "available",
      },
      {
        title: "Ziņapmaiņa",
        description: "Ar braucienu saistīta komunikācija autovadītājiem.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktīvo ceļojumu saraksts",
        description: "Darbības pārskats ar pieturām un statusiem.",
        status: "available",
      },
      {
        title: "Brīdinājumi par trūkstošiem dokumentiem",
        description: "Trūkstošie vai neparakstītie dokumenti ir uzreiz redzami.",
        status: "available",
      },
      {
        title: "Atļaujas",
        description: "Uz lomu balstīta piekļuve uzņēmuma datiem.",
        status: "available",
      },
      {
        title: "Revīzijas pasākumi",
        description: "Meklējama lēmumu un dokumentu pēda.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Augšupielādēšana un saistīšana",
        description: "Dokumenti, kas saistīti ar braucienu, vadītāju vai transportlīdzekli.",
        status: "available",
      },
      {
        title: "Paraksta darbplūsma",
        description: "Gaida parakstu → parakstīts → pārskatīt.",
        status: "pilot",
      },
      {
        title: "Slēgta ceļojuma pakete",
        description: "Eksportējami dokumenti un pasākumi.",
        status: "pilot",
      },
      {
        title: "Veidņu pārvaldība",
        description: "Centrālās dokumentu veidnes — pakāpeniska izlaišana.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Uz lomu balstīta piekļuve",
        description: "Lietotāju un uzņēmumu atdalīšana.",
        status: "available",
      },
      {
        title: "Audita žurnāls",
        description: "Darbības un lēmumi joprojām ir meklējami.",
        status: "available",
      },
      {
        title: "Sesija un ierīce",
        description: "Kontrolēta sesija un ierīču pārvaldība.",
        status: "pilot",
      },
      {
        title: "Atbalsta piekļuve",
        description: "Uz laiku ierobežots, reģistrēts atbalsta ieraksts.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Valoda",
    draftSuffix: "· melnraksts",
    breadcrumb: "rīvmaize",
    primaryNav: "Primārais",
    importantNotice: "Svarīgs paziņojums",
  },
};
