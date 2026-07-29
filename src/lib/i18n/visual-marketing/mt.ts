import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingMt: VisualMarketingContent = {
  skipToContent: "Aqbeż għall-kontenut",
  brandVisuals: {
    routeLabel: "Rotta attiva",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Netwerk ViaNexis",
    networkTitle: "Mhux biss ir-rotta li tgħaqqad.",
    networkSubtitle: "Il-waqfiet, id-dokumenti, il-firem, il-messaġġi u d-deċiżjonijiet jappartjenu għall-istess fluss tal-vjaġġ — fl-ordni tal-ħin, b’permessi u traċċa tal-avveniment li tista’ titfittex.",
    workflowEvents: [
      "Tluq",
      "Pickup",
      "Dokument",
      "Firma",
      "Stennija",
      "Kunsinna",
      "Pakkett magħluq"
    ],
  },
  pillars: {
    title: "Tliet pilastri — sistema waħda kkontrollata",
    subtitle: "Fluss mobbli li jiffavorixxi s-sewwieq, kontroll operattiv tal-kumpanija, u traċċa ta 'deċiżjoni awditjabbli.",
    items: [
      {
        title: "App faċli għas-sewwieq",
        description: "Vjaġġi, waqfiet, dokumenti, firem, u avvenimenti f'UI mobbli offline kapaċi.",
      },
      {
        title: "Kontroll tal-kumpanija",
        description: "Ħarsa ġenerali tad-dispaċċ, permessi, twissijiet, u traċċar tad-dokumenti fil-portal tal-kumpanija.",
      },
      {
        title: "Operazzjonijiet verifikabbli",
        description: "Avvenimenti, firem, u deċiżjonijiet b'ġurnal li jista' jitfittex — mingħajr pretensjonijiet ta' sigurtà esaġerati.",
      }
    ],
  },
  process: {
    title: "Fluss tax-xogħol tal-vjaġġ ewlieni",
    subtitle: "Mill-ħolqien għal pakkett magħluq — passi strutturati b'aċċess konxju tal-permess.",
    steps: [
      {
        title: "Oħloq vjaġġ",
        description: "Waqfiet għall-ġbir u l-kunsinna, il-kompiti, u r-rekwiżiti tad-dokumenti.",
      },
      {
        title: "Aċċettazzjoni tas-sewwieq",
        description: "Assenjazzjoni, aċċettazzjoni, u jibdew sessjoni kkontrollata.",
      },
      {
        title: "Waqfiet u kompiti",
        description: "Waqfiet multipli, kompiti, avvenimenti, u rekords ta 'ħsara.",
      },
      {
        title: "Dokumenti u firem",
        description: "Ittella’, iffirma, irrevedi — imbagħad pakkett tal-vjaġġ magħluq.",
      }
    ],
  },
  homeModules: {
    title: "Uċuħ tal-prodott",
    subtitle: "Kull wiċċ jaqsam l-istess mudell ta 'vjaġġ u dokument. Dettalji ħajjin fuq il-paġni tal-prodott.",
    detailsLink: "Dettalji",
    items: [
      {
        title: "App tas-sewwieq",
        description: "Vjaġġi, waqfiet, dokumenti, u firem fi fluss mobbli offline kapaċi. Is-sewwieqa dejjem jaraw l-azzjoni meħtieġa li jmiss.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal tal-kumpanija",
        description: "Ħarsa ġenerali operattiva: vjaġġi attivi, dokumenti neqsin, twissijiet, u permessi f'post wieħed.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenti u firem",
        description: "Burokrazija marbuta mal-vjaġġ, stati tal-firma, u pakkett tal-vjaġġ magħluq esportabbli.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Messaġġi u twissijiet",
        description: "Komunikazzjoni marbuta mal-vjaġġ. Il-karatteristiċi tan-notifika jistgħu jiġu attivati ​​bħala parti mill-programm pilota.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Verifika u permessi",
        description: "Aċċess ibbażat fuq ir-rwol, avvenimenti li jistgħu jitfittxu, u aċċess ikkontrollat ​​għall-appoġġ.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operazzjoni offline",
        description: "Is-sewwieqa jistgħu jibqgħu jaħdmu fuq netwerks dgħajfa; il-bidliet jiffinalizzaw meta titlesta s-sinkronizzazzjoni.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenti u firem",
    subtitle: "Dokumenti jorbtu mal-vjaġġ, jistgħu jiġu ffirmati u riveduti, imbagħad magħluqa f'pakkett esportabbli.",
    steps: [
      {
        title: "Ittella jew toħloq",
        description: "CMR, nota tal-kunsinna, ritratt, jew mudell diġitali.",
      },
      {
        title: "Linking",
        description: "Assenjat għall-kuntest tal-vjaġġ, is-sewwieq jew il-vettura.",
      },
      {
        title: "Iffirma u tirrevedi",
        description: "Fluss tal-istatus: qed jistenna l-firma → iffirmat → taħt reviżjoni.",
      },
      {
        title: "Pakkett tal-vjaġġ magħluq",
        description: "Dokumenti u avvenimenti esportabbli — sommarju verifikabbli.",
      }
    ],
    statuses: [
      "Uploaded",
      "Nieqsa",
      "Tistenna l-firma",
      "Iffirmat",
      "Taħt reviżjoni"
    ],
    detailsLink: "Dokumenti fid-dettall",
  },
  offline: {
    title: "Operazzjoni offline u sinkronizzazzjoni",
    subtitle: "Ikompli x-xogħol fuq netwerks dgħajfa — il-finalizzazzjoni sseħħ wara s-sinkronizzazzjoni.",
    cards: [
      {
        title: "Ħlief lokali",
        description: "Il-bidliet fis-sewwieq huma maħżuna b'mod sigur fuq l-apparat.",
      },
      {
        title: "Sinkronizzazzjoni viżibbli",
        description: "Il-bidliet pendenti jibqgħu viżibbli sakemm terġa' lura l-konnettività.",
      },
      {
        title: "Sinjali ta' kunflitt",
        description: "Sorsi konfliġġenti huma illoggjati — qatt ma jinkitbu fuq is-skiet.",
      }
    ],
    detailsLink: "App tas-sewwieq",
  },
  responsibleUse: {
    title: "Użu responsabbli",
    subtitle: "Limiti qosra u importanti — dettalji ħajjin fuq il-paġni legali.",
    items: [
      "ViaNexis mhijiex pjattaforma eFTI ċċertifikata u ma twiegħedx aċċettazzjoni awtomatika mill-awtorità.",
      "L-OCR, l-AI, u t-traduzzjoni huma ta’ assistenza — hija meħtieġa reviżjoni umana.",
      "Is-sistema ma tipprovdix pariri legali.",
      "Mhuwiex servizz ta’ emerġenza jew SOS."
    ],
    detailsLink: "Avviżi sħaħ dwar l-użu responsabbli",
  },
  pilotCta: {
    title: "Aċċess ikkontrollat ​​tal-pilota",
    subtitle: "ViaNexis bħalissa huwa disponibbli permezz ta’ programm pilota ma’ trasportaturi u sewwieqa magħżula. L-aċċess jiġi attivat wara diskussjoni u approvazzjoni individwali.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Vjaġġ attiv",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Waqfa li jmiss",
        value: "Pickup · Budapest (demo)",
        status: "Fit-triq",
      },
      {
        label: "Dokument",
        value: "CMR — qed jistenna l-firma",
        status: "Azzjoni",
      },
      {
        label: "Sinkronizzazzjoni",
        value: "bidla 1 pendenti",
        status: "Offline",
      }
    ],
    phoneCaption: "Demo tal-prodott — kampjun ta' data anonimizzata.",
    browserTitle: "Kontroll tal-operazzjonijiet",
    browserSubtitle: "Flotta Demo · ħsieb tad-dispaċċ",
    browserColumns: [
      "Vjaġġ",
      "Waqqaf",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR nieqes",
        "Twissija"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD iffirmat",
        "Fit-triq"
      ],
      [
        "VN-2407-C11",
        "Vjenna (demo)",
        "Taħt reviżjoni",
        "Pre-għeluq"
      ]
    ],
    browserCaption: "Demo portal tal-kumpanija — mhux data diretta tal-klijenti.",
    driver: {
      navHome: "Dar",
      navTrips: "Vjaġġi",
      navDocs: "Doks",
      navMore: "Aktar",
      tripStatus: "Vjaġġ għaddej",
      nextStopLabel: "Waqfa li jmiss",
      nextStopValue: "Pickup · Budapest (demo)",
      documentLabel: "Dokument",
      documentValue: "CMR diġitali",
      documentAction: "Firma meħtieġa",
      syncLabel: "Konnessjoni",
      syncValue: "Offline · 1 pendenti",
    },
    portal: {
      roleLabel: "Rwol: Dispatcher",
      alertLabel: "Twissija",
      alertValue: "VN-2407-A18 · CMR qed jistenna l-firma",
      auditLabel: "L-aħħar avveniment tal-awditjar",
      auditValue: "L-istatus tad-dokument inbidel · app tas-sewwieq",
    },
  },
  statusLabels: {
    available: "Disponibbli",
    pilot: "Pilota",
    development: "Fl-iżvilupp",
  },
  productPage: {
    highlightsTitle: "Kapaċitajiet ewlenin",
    capabilitiesTitle: "Dak li jipprovdi dan il-wiċċ",
    statusesTitle: "Tikketti tal-istatus",
  },
  authority: {
    heroSubtitle: "Aċċess limitat fiż-żmien u l-ambitu għall-evidenza tal-vjaġġ — mhux pjattaforma ċċertifikata tal-eFTI.",
    foundationBadge: "Prontezza teknika",
    notCertifiedBadge: "Mhux iċċertifikat eFTI",
    foundationTitle: "Xi tfisser prontezza",
    foundationSubtitle: "Dejta strutturata u qsim ikkontrollat ​​— mingħajr pretensjoni ta' ċertifikat jew permess.",
    extraDisclaimer: "ViaNexis ma jwiegħedx aċċettazzjoni mill-awtorità f'kull pajjiż. Il-konformità legali u regolatorja tibqa’ r-responsabbiltà tal-klijent.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista tal-vjaġġi u waqfiet",
        description: "Vjaġġi attivi, azzjonijiet li jmiss, u kompiti ta 'waqfien.",
        status: "available",
      },
      {
        title: "Dokumenti u firma",
        description: "Uploads, kompiti CMR, u qbid tal-firma.",
        status: "available",
      },
      {
        title: "Xogħol offline",
        description: "Ħlief lokali b'sinkronizzazzjoni pendenti viżibbli.",
        status: "available",
      },
      {
        title: "Messaġġi",
        description: "Komunikazzjoni marbuta mal-vjaġġ għas-sewwieqa.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista tal-vjaġġi attiva",
        description: "Ħarsa ġenerali operattiva b'waqfiet u status.",
        status: "available",
      },
      {
        title: "Twissijiet ta' dokumenti nieqsa",
        description: "Dokumenti neqsin jew mhux iffirmati huma viżibbli immedjatament.",
        status: "available",
      },
      {
        title: "Permessi",
        description: "Aċċess ibbażat fuq ir-rwoli għad-dejta tal-kumpanija.",
        status: "available",
      },
      {
        title: "Avvenimenti tal-verifika",
        description: "Deċiżjoni li tista' titfittex u traċċa tad-dokument.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Upload u linking",
        description: "Dokumenti marbuta mal-vjaġġ, sewwieq, jew vettura.",
        status: "available",
      },
      {
        title: "Fluss tax-xogħol tal-firma",
        description: "Nistenna l-firma → iffirmat → reviżjoni.",
        status: "pilot",
      },
      {
        title: "Pakkett tal-vjaġġ magħluq",
        description: "Dokumenti u avvenimenti esportabbli.",
        status: "pilot",
      },
      {
        title: "Ġestjoni tal-mudelli",
        description: "Mudelli ta' dokumenti ċentrali — introduzzjoni gradwali.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Aċċess ibbażat fuq ir-rwol",
        description: "Separazzjoni fil-kamp ta' applikazzjoni tal-utent u l-kumpanija.",
        status: "available",
      },
      {
        title: "Log tal-verifika",
        description: "L-azzjonijiet u d-deċiżjonijiet jibqgħu jistgħu jiġu mfittxija.",
        status: "available",
      },
      {
        title: "Sessjoni u apparat",
        description: "Sessjoni kkontrollata u ġestjoni tal-apparat.",
        status: "pilot",
      },
      {
        title: "Aċċess ta 'appoġġ",
        description: "Dħul ta' appoġġ limitat fiż-żmien, illoggjat.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Lingwa",
    draftSuffix: "· abbozz",
    breadcrumb: "Frak tal-ħobż",
    primaryNav: "Primarja",
    importantNotice: "Avviż importanti",
  },
};
