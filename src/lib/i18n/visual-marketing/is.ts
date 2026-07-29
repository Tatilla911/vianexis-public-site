import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingIs: VisualMarketingContent = {
  skipToContent: "Fara í efni",
  brandVisuals: {
    routeLabel: "Virk leið",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "Það er ekki aðeins leiðin sem tengist.",
    networkSubtitle: "Stöðvar, skjöl, undirskriftir, skilaboð og ákvarðanir tilheyra sama ferðaflæðinu - í tímaröð, með heimildum og viðburðarslóð sem hægt er að leita að.",
    workflowEvents: [
      "Brottför",
      "Afhending",
      "Skjal",
      "Undirskrift",
      "Bíður",
      "Afhending",
      "Lokaður pakki"
    ],
  },
  pillars: {
    title: "Þrjár stoðir - eitt stjórnað kerfi",
    subtitle: "Ökumannsvænt farsímaflæði, rekstrarstýring fyrirtækis og endurskoðanleg ákvörðunarslóð.",
    items: [
      {
        title: "Ökumannsvænt app",
        description: "Ferðir, viðkomustaðir, skjöl, undirskriftir og viðburðir í farsímaviðmóti sem er án nettengingar.",
      },
      {
        title: "Fyrirtækiseftirlit",
        description: "Yfirlit sendanda, heimildir, tilkynningar og skjalarakningu í fyrirtækjagáttinni.",
      },
      {
        title: "Endurskoðanleg starfsemi",
        description: "Atburðir, undirskriftir og ákvarðanir með leitanlegri annál – án ýktra öryggiskrafna.",
      }
    ],
  },
  process: {
    title: "Verkflæði kjarna ferða",
    subtitle: "Frá sköpun til lokaðs pakka — skipulögð skref með leyfis-meðvituðum aðgangi.",
    steps: [
      {
        title: "Búðu til ferð",
        description: "Afhendingarstopp, verkefni og kröfur um skjöl.",
      },
      {
        title: "Samþykki ökumanns",
        description: "Úthlutun, samþykki og stjórnað fundur hefst.",
      },
      {
        title: "Stöðvar og verkefni",
        description: "Mörg stopp, verkefni, atburðir og skemmdir.",
      },
      {
        title: "Skjöl og undirskriftir",
        description: "Hladdu upp, skrifaðu undir, skoðaðu — síðan lokaður ferðapakki.",
      }
    ],
  },
  homeModules: {
    title: "Yfirborð vöru",
    subtitle: "Sérhver flötur deilir sömu ferð og skjalalíkani. Upplýsingar í beinni á vörusíðum.",
    detailsLink: "Upplýsingar",
    items: [
      {
        title: "Bílstjóri app",
        description: "Ferðir, stopp, skjöl og undirskriftir í ótengdu farsímaflæði. Ökumenn sjá alltaf næstu nauðsynlega aðgerð.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Fyrirtækjagátt",
        description: "Rekstraryfirlit: virkar ferðir, skjöl sem vantar, tilkynningar og heimildir á einum stað.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Skjöl og undirskriftir",
        description: "Ferðatengd pappírsvinna, undirskriftarríki og útflutningshæfur lokaður ferðapakki.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Skilaboð og tilkynningar",
        description: "Ferðatengd samskipti. Hægt er að virkja tilkynningaeiginleika sem hluta af tilraunaáætluninni.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Endurskoðun og heimildir",
        description: "Hlutverkatengdur aðgangur, atburðir sem hægt er að leita að og stýrður aðgangur að stuðningi.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Ótengdur rekstur",
        description: "Ökumenn geta haldið áfram að vinna á veikum netum; breytingar klárast þegar samstillingu lýkur.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Skjöl og undirskriftir",
    subtitle: "Skjöl tengja við ferðina, hægt er að undirrita og skoða og loka síðan í útflutningspakka.",
    steps: [
      {
        title: "Hladdu upp eða búðu til",
        description: "CMR, fylgibréf, mynd eða stafrænt sniðmát.",
      },
      {
        title: "Tenging",
        description: "Úthlutað samhengi ferða, ökumanns eða ökutækis.",
      },
      {
        title: "Skrifaðu undir og skoðaðu",
        description: "Stöðuflæði: bíður undirskriftar → undirritaðs → í skoðun.",
      },
      {
        title: "Lokaður ferðapakki",
        description: "Útflutningsskjöl og atburðir — endurskoðanleg samantekt.",
      }
    ],
    statuses: [
      "Hlaðið upp",
      "Vantar",
      "Beðið eftir undirskrift",
      "Undirritaður",
      "Í skoðun"
    ],
    detailsLink: "Skjöl í smáatriðum",
  },
  offline: {
    title: "Notkun og samstilling án nettengingar",
    subtitle: "Vinna heldur áfram á veikum netum - frágangur á sér stað eftir samstillingu.",
    cards: [
      {
        title: "Staðbundin vistun",
        description: "Breytingar á ökumanni eru geymdar á öruggan hátt á tækinu.",
      },
      {
        title: "Sýnileg samstilling",
        description: "Breytingar í bið eru sýnilegar þar til tengingin kemur aftur.",
      },
      {
        title: "Átök merki",
        description: "Misvísandi heimildir eru skráðar - aldrei skrifað yfir í hljóði.",
      }
    ],
    detailsLink: "Bílstjóri app",
  },
  responsibleUse: {
    title: "Ábyrg notkun",
    subtitle: "Stuttar, mikilvægar takmarkanir — upplýsingar eru birtar á lagasíðunum.",
    items: [
      "ViaNexis er ekki vottaður eFTI vettvangur og lofar ekki sjálfvirkri samþykkt heimildar.",
      "OCR, gervigreind og þýðing eru hjálpartæki - mannleg endurskoðun er nauðsynleg.",
      "Kerfið veitir ekki lögfræðiráðgjöf.",
      "Það er ekki neyðar- eða SOS þjónusta."
    ],
    detailsLink: "Fullar tilkynningar um ábyrga notkun",
  },
  pilotCta: {
    title: "Stýrður aðgangur flugmanna",
    subtitle: "ViaNexis er nú fáanlegt í gegnum tilraunaáætlun með völdum flutningsaðilum og bílstjórum. Aðgangur er virkjaður eftir einstaka umræðu og samþykki.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Virk ferð",
    phoneSubtitle: "Kynning · VN-2407-A18",
    phoneRows: [
      {
        label: "Næsta stopp",
        value: "Afhending · Búdapest (sýnishorn)",
        status: "Á leiðinni",
      },
      {
        label: "Skjal",
        value: "CMR - bíður undirskriftar",
        status: "Aðgerð",
      },
      {
        label: "Samstilla",
        value: "1 breyting í bið",
        status: "Ótengdur",
      }
    ],
    phoneCaption: "Vörukynning — nafnlaus sýnishornsgögn.",
    browserTitle: "Rekstrarstýring",
    browserSubtitle: "Sýningarfloti · sjón sendanda",
    browserColumns: [
      "Ferð",
      "Hættu",
      "Skjal",
      "Staða"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Búdapest (sýnishorn)",
        "CMR vantar",
        "Viðvörun"
      ],
      [
        "VN-2407-B03",
        "Győr (sýnishorn)",
        "POD undirritaður",
        "Á leiðinni"
      ],
      [
        "VN-2407-C11",
        "Vín (demo)",
        "Í skoðun",
        "Forlokun"
      ]
    ],
    browserCaption: "Kynning á fyrirtækisgáttinni - ekki lifandi viðskiptavinagögn.",
    driver: {
      navHome: "Heim",
      navTrips: "Ferðir",
      navDocs: "Skjöl",
      navMore: "Meira",
      tripStatus: "Ferð í gangi",
      nextStopLabel: "Næsta stopp",
      nextStopValue: "Afhending · Búdapest (sýnishorn)",
      documentLabel: "Skjal",
      documentValue: "Stafræn CMR",
      documentAction: "Undirskrift krafist",
      syncLabel: "Tenging",
      syncValue: "Ótengdur · 1 í bið",
    },
    portal: {
      roleLabel: "Hlutverk: Sendandi",
      alertLabel: "Viðvörun",
      alertValue: "VN-2407-A18 · CMR bíður undirskriftar",
      auditLabel: "Nýjasti endurskoðunarviðburður",
      auditValue: "Staða skjala breytt · ökumannsforrit",
    },
  },
  statusLabels: {
    available: "Í boði",
    pilot: "Flugmaður",
    development: "Í þróun",
  },
  productPage: {
    highlightsTitle: "Lykilhæfileikar",
    capabilitiesTitle: "Það sem þetta yfirborð gefur",
    statusesTitle: "Stöðumerki",
  },
  authority: {
    heroSubtitle: "Tíma- og umfangstakmarkaður aðgangur að ferðasönnunargögnum - ekki vottaður eFTI vettvangur.",
    foundationBadge: "Tæknilegur viðbúnaður",
    notCertifiedBadge: "Ekki vottað eFTI",
    foundationTitle: "Hvað þýðir viðbúnaður",
    foundationSubtitle: "Skipulögð gögn og stýrð miðlun — án vottorðs eða leyfiskröfu.",
    extraDisclaimer: "ViaNexis lofar ekki samþykki valds í hverju landi. Fylgni laga og reglugerða er áfram á ábyrgð viðskiptavinarins.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Ferðalisti og viðkomustaðir",
        description: "Virkar ferðir, næstu aðgerðir og stöðvunarverkefni.",
        status: "available",
      },
      {
        title: "Skjöl og undirskrift",
        description: "Upphleðslur, CMR verkefni og undirskriftarfanga.",
        status: "available",
      },
      {
        title: "Vinna án nettengingar",
        description: "Staðbundin vistun með sýnilegri samstillingu í bið.",
        status: "available",
      },
      {
        title: "Skilaboð",
        description: "Ferðatengd samskipti fyrir ökumenn.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Virkur ferðalisti",
        description: "Rekstraryfirlit með stoppum og stöðu.",
        status: "available",
      },
      {
        title: "Viðvaranir um vantar skjöl",
        description: "Vantar eða óundirrituð skjöl eru strax sýnileg.",
        status: "available",
      },
      {
        title: "Heimildir",
        description: "Hlutverkamiðaður aðgangur að fyrirtækjagögnum.",
        status: "available",
      },
      {
        title: "Endurskoðunarviðburðir",
        description: "Leitanleg ákvörðun og skjalaslóð.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Hlaða upp og tengja",
        description: "Skjöl sem tengjast ferð, ökumanni eða farartæki.",
        status: "available",
      },
      {
        title: "Undirskrift vinnuflæði",
        description: "Bíður undirskrift → undirritaður → skoðun.",
        status: "pilot",
      },
      {
        title: "Lokaður ferðapakki",
        description: "Útflutningsskjöl og viðburðir.",
        status: "pilot",
      },
      {
        title: "Sniðmátsstjórnun",
        description: "Miðlæg skjalasniðmát - smám saman útfærsla.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Hlutverkamiðaður aðgangur",
        description: "Aðskilnaður notenda og fyrirtækis.",
        status: "available",
      },
      {
        title: "Endurskoðunarskrá",
        description: "Aðgerðir og ákvarðanir eru áfram leitanlegar.",
        status: "available",
      },
      {
        title: "Fundur og tæki",
        description: "Stýrð lotu- og tækjastjórnun.",
        status: "pilot",
      },
      {
        title: "Stuðningur aðgangur",
        description: "Tímatakmörkuð, skráð stuðningsfærsla.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Tungumál",
    draftSuffix: "· drög",
    breadcrumb: "Brauðmola",
    primaryNav: "Aðal",
    importantNotice: "Mikilvæg tilkynning",
  },
};
