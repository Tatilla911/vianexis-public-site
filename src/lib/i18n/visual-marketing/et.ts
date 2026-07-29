import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingEt: VisualMarketingContent = {
  skipToContent: "Mine sisu juurde",
  brandVisuals: {
    routeLabel: "Aktiivne marsruut",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "See ei ole ainult marsruut, mis ühendab.",
    networkSubtitle: "Peatused, dokumendid, allkirjad, sõnumid ja otsused kuuluvad samasse reisivoogu – ajalises järjekorras, lubade ja otsitava sündmustejäljega.",
    workflowEvents: [
      "Lahkumine",
      "Pickup",
      "Dokument",
      "Allkiri",
      "Ootab",
      "Kohaletoimetamine",
      "Suletud pakend"
    ],
  },
  pillars: {
    title: "Kolm sammast – üks juhitav süsteem",
    subtitle: "Juhisõbralik mobiilne voog, ettevõtte töökontroll ja auditeeritav otsustusjälg.",
    items: [
      {
        title: "Juhisõbralik rakendus",
        description: "Reisid, peatused, dokumendid, allkirjad ja sündmused võrguühenduseta mobiilses kasutajaliideses.",
      },
      {
        title: "Ettevõtte kontroll",
        description: "Dispetšeri ülevaade, load, hoiatused ja dokumentide jälgimine ettevõtteportaalis.",
      },
      {
        title: "Auditeeritavad toimingud",
        description: "Sündmused, allkirjad ja otsused otsitava logiga – ilma liialdatud turvaväideteta.",
      }
    ],
  },
  process: {
    title: "Põhireisi töövoog",
    subtitle: "Alates loomisest kuni suletud paketini – struktureeritud sammud koos lubadeadliku juurdepääsuga.",
    steps: [
      {
        title: "Loo reis",
        description: "Ülevõtmise ja tarnimise peatused, ülesanded ja dokumendinõuded.",
      },
      {
        title: "Juhi vastuvõtmine",
        description: "Määramine, vastuvõtmine ja kontrollitud seansi algus.",
      },
      {
        title: "Peatused ja ülesanded",
        description: "Mitu peatust, ülesandeid, sündmusi ja kahjustusi.",
      },
      {
        title: "Dokumendid ja allkirjad",
        description: "Laadi üles, allkirjasta, vaata üle – siis suletud reisipakett.",
      }
    ],
  },
  homeModules: {
    title: "Toote pinnad",
    subtitle: "Igal pinnal on sama reisi- ja dokumendimudel. Üksikasjad on saadaval tootelehtedel.",
    detailsLink: "Üksikasjad",
    items: [
      {
        title: "Draiveri rakendus",
        description: "Reisid, peatused, dokumendid ja allkirjad võrguühenduseta mobiilivoos. Juhid näevad alati järgmist nõutavat toimingut.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Ettevõtte portaal",
        description: "Tööülevaade: aktiivsed reisid, puuduvad dokumendid, hoiatused ja load ühes kohas.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumendid ja allkirjad",
        description: "Reisiga seotud paberimajandus, allkirjad ja eksporditav suletud reisipakett.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Sõnumid ja hoiatused",
        description: "Reisiga seotud suhtlus. Pilootprogrammi osana saab aktiveerida teavitusfunktsioone.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit ja load",
        description: "Role-based access, searchable events, and controlled support access.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline operation",
        description: "Draiverid saavad jätkata tööd nõrkades võrkudes; muudatused lõpetatakse sünkroonimise lõppedes.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumendid ja allkirjad",
    subtitle: "Dokumendid lingivad reisile, neid saab allkirjastada ja üle vaadata ning seejärel eksporditavaks pakendiks sulgeda.",
    steps: [
      {
        title: "Laadige üles või looge",
        description: "CMR, saateleht, foto või digitaalne mall.",
      },
      {
        title: "Linkimine",
        description: "Määratud reisi, juhi või sõiduki konteksti.",
      },
      {
        title: "Allkiri ja vaata üle",
        description: "Oleku voog: allkirja ootamine → allkirjastatud → ülevaatamisel.",
      },
      {
        title: "Suletud reisipakett",
        description: "Eksporditavad dokumendid ja sündmused — auditeeritav kokkuvõte.",
      }
    ],
    statuses: [
      "Üles laaditud",
      "Puudub",
      "Allkirja ootamine",
      "Allkirjastatud",
      "Ülevaatamisel"
    ],
    detailsLink: "Dokumendid üksikasjalikult",
  },
  offline: {
    title: "Võrguühenduseta toimimine ja sünkroonimine",
    subtitle: "Töö nõrkade võrkude puhul jätkub – lõpetamine toimub pärast sünkroonimist.",
    cards: [
      {
        title: "Kohalik salvestamine",
        description: "Draiveri muudatused salvestatakse turvaliselt seadmesse.",
      },
      {
        title: "Nähtav sünkroonimine",
        description: "Ootel muudatused jäävad nähtavaks, kuni ühenduvus taastub.",
      },
      {
        title: "Konflikti signaalimine",
        description: "Vastuolulised allikad logitakse – neid ei kirjutata kunagi vaikselt üle.",
      }
    ],
    detailsLink: "Draiveri rakendus",
  },
  responsibleUse: {
    title: "Vastutustundlik kasutamine",
    subtitle: "Lühikesed ja olulised piirangud – üksikasjad on saadaval juriidilistel lehtedel.",
    items: [
      "ViaNexis ei ole sertifitseeritud eFTI platvorm ega luba automaatset volituste aktsepteerimist.",
      "OCR, AI ja tõlge on abiks – inimese ülevaatus on vajalik.",
      "Süsteem ei anna juriidilist nõu.",
      "See ei ole hädaabi- ega SOS-teenus."
    ],
    detailsLink: "Täielikud vastutustundliku kasutamise teatised",
  },
  pilotCta: {
    title: "Kontrollitud piloodi juurdepääs",
    subtitle: "ViaNexis on praegu saadaval pilootprogrammi kaudu valitud operaatorite ja draiveritega. Juurdepääs aktiveeritakse pärast individuaalset arutelu ja heakskiitu.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktiivne reis",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Järgmine peatus",
        value: "Vastuvõtt · Budapest (demo)",
        status: "Teel",
      },
      {
        label: "Dokument",
        value: "CMR — ootab allkirja",
        status: "Tegevus",
      },
      {
        label: "Sünkroonimine",
        value: "1 muudatus on ootel",
        status: "Võrguühenduseta",
      }
    ],
    phoneCaption: "Toote demo — anonüümsed näidisandmed.",
    browserTitle: "Toimingute juhtimine",
    browserSubtitle: "Demopark · dispetšeri vaade",
    browserColumns: [
      "Reis",
      "Peatus",
      "Dokument",
      "Olek"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR puudub",
        "Hoiatus"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD allkirjastatud",
        "Teel"
      ],
      [
        "VN-2407-C11",
        "Viin (demo)",
        "Ülevaatamisel",
        "Eelsulgemine"
      ]
    ],
    browserCaption: "Ettevõtteportaali demo — mitte reaalajas kliendiandmed.",
    driver: {
      navHome: "Kodu",
      navTrips: "Reisid",
      navDocs: "Dokumendid",
      navMore: "Rohkem",
      tripStatus: "Reis on pooleli",
      nextStopLabel: "Järgmine peatus",
      nextStopValue: "Vastuvõtt · Budapest (demo)",
      documentLabel: "Dokument",
      documentValue: "Digitaalne CMR",
      documentAction: "Vajalik allkiri",
      syncLabel: "Ühendus",
      syncValue: "Võrguühenduseta · 1 ootel",
    },
    portal: {
      roleLabel: "Roll: dispetšer",
      alertLabel: "Hoiatus",
      alertValue: "VN-2407-A18 · CMR ootab allkirja",
      auditLabel: "Viimane auditi sündmus",
      auditValue: "Dokumendi olek muudetud · draiverirakendus",
    },
  },
  statusLabels: {
    available: "Saadaval",
    pilot: "Piloot",
    development: "Arenduses",
  },
  productPage: {
    highlightsTitle: "Peamised võimalused",
    capabilitiesTitle: "Mida see pind annab",
    statusesTitle: "Olekusildid",
  },
  authority: {
    heroSubtitle: "Ajaliselt ja ulatuselt piiratud juurdepääs reisi tõenditele – mitte sertifitseeritud eFTI platvorm.",
    foundationBadge: "Tehniline valmisolek",
    notCertifiedBadge: "Pole sertifitseeritud eFTI",
    foundationTitle: "Mida tähendab valmisolek",
    foundationSubtitle: "Struktureeritud andmed ja kontrollitud jagamine – ilma sertifikaadi või loanõudeta.",
    extraDisclaimer: "ViaNexis ei luba volituste aktsepteerimist igas riigis. Õigusaktide ja eeskirjade järgimise eest vastutab klient.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Reiside nimekiri ja peatused",
        description: "Aktiivsed reisid, järgmised toimingud ja peatamisülesanded.",
        status: "available",
      },
      {
        title: "Dokumendid ja allkiri",
        description: "Üleslaadimised, CMR-ülesanded ja allkirjade püüdmine.",
        status: "available",
      },
      {
        title: "Võrguühenduseta töö",
        description: "Kohalik salvestamine nähtava ootel sünkroonimisega.",
        status: "available",
      },
      {
        title: "Sõnumid",
        description: "Reisipõhine suhtlus autojuhtidele.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktiivsete reiside nimekiri",
        description: "Tööülevaade peatuste ja olekutega.",
        status: "available",
      },
      {
        title: "Hoiatused puuduvate dokumentide kohta",
        description: "Puuduvad või allkirjastamata dokumendid on kohe näha.",
        status: "available",
      },
      {
        title: "load",
        description: "Rollipõhine juurdepääs ettevõtte andmetele.",
        status: "available",
      },
      {
        title: "Auditeerimisüritused",
        description: "Otsitav otsustus- ja dokumendijälg.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Üleslaadimine ja linkimine",
        description: "Reisi, juhi või sõidukiga seotud dokumendid.",
        status: "available",
      },
      {
        title: "Allkirja töövoog",
        description: "Allkirja ootamine → allkirjastatud → ülevaatus.",
        status: "pilot",
      },
      {
        title: "Suletud reisipakett",
        description: "Eksporditavad dokumendid ja sündmused.",
        status: "pilot",
      },
      {
        title: "Mallide haldamine",
        description: "Kesksed dokumendimallid – järkjärguline levitamine.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rollipõhine juurdepääs",
        description: "Kasutaja- ja ettevõttepõhine eraldamine.",
        status: "available",
      },
      {
        title: "Auditi logi",
        description: "Tegevused ja otsused jäävad otsitavaks.",
        status: "available",
      },
      {
        title: "Seanss ja seade",
        description: "Kontrollitud seansi ja seadmehaldus.",
        status: "pilot",
      },
      {
        title: "Toe juurdepääs",
        description: "Ajaliselt piiratud, logitud tugikirje.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Keel",
    draftSuffix: "· mustand",
    breadcrumb: "Leivapuru",
    primaryNav: "Esmane",
    importantNotice: "Tähtis teade",
  },
};
