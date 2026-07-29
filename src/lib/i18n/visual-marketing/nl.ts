import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingNl: VisualMarketingContent = {
  skipToContent: "Ga naar de inhoud",
  brandVisuals: {
    routeLabel: "Actief traject",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Via Nexis-netwerk",
    networkTitle: "Het is niet alleen de route die verbindt.",
    networkSubtitle: "Stops, documenten, handtekeningen, berichten en beslissingen behoren tot dezelfde ritstroom – in tijdsvolgorde, met machtigingen en een doorzoekbaar gebeurtenissentraject.",
    workflowEvents: [
      "Vertrek",
      "Ophalen",
      "Document",
      "Handtekening",
      "Wachten",
      "Levering",
      "Gesloten pakket"
    ],
  },
  pillars: {
    title: "Drie pijlers – één gecontroleerd systeem",
    subtitle: "Een chauffeursvriendelijke mobiele stroom, operationele controle van het bedrijf en een controleerbaar beslissingstraject.",
    items: [
      {
        title: "Bestuurdervriendelijke app",
        description: "Reizen, stops, documenten, handtekeningen en evenementen in een offline mobiele gebruikersinterface.",
      },
      {
        title: "Bedrijf controle",
        description: "Overzicht van de verzender, machtigingen, waarschuwingen en documenttracking in het bedrijfsportaal.",
      },
      {
        title: "Controleerbare bewerkingen",
        description: "Gebeurtenissen, handtekeningen en beslissingen met een doorzoekbaar logboek – zonder overdreven beveiligingsclaims.",
      }
    ],
  },
  process: {
    title: "Werkstroom van de kernreis",
    subtitle: "Van creatie tot een gesloten pakket: gestructureerde stappen met toestemmingsbewuste toegang.",
    steps: [
      {
        title: "Reis maken",
        description: "Ophaal- en bezorgstops, taken en documentvereisten.",
      },
      {
        title: "Acceptatie van de bestuurder",
        description: "Opdracht, acceptatie en een gecontroleerde sessiestart.",
      },
      {
        title: "Stops en taken",
        description: "Meerdere stops, taken, gebeurtenissen en schaderegistraties.",
      },
      {
        title: "Documenten en handtekeningen",
        description: "Uploaden, ondertekenen, beoordelen – en vervolgens een gesloten reispakket.",
      }
    ],
  },
  homeModules: {
    title: "Productoppervlakken",
    subtitle: "Elk oppervlak deelt hetzelfde reis- en documentmodel. Details staan ​​live op de productpagina's.",
    detailsLink: "Details",
    items: [
      {
        title: "Bestuurdersapp",
        description: "Ritten, stops, documenten en handtekeningen in een offline mobiele stroom. Chauffeurs zien altijd de volgende vereiste actie.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Bedrijfsportaal",
        description: "Operationeel overzicht: actieve ritten, ontbrekende documenten, waarschuwingen en machtigingen op één plek.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documenten & handtekeningen",
        description: "Aan de reis gekoppeld papierwerk, handtekeningstaten en een exporteerbaar gesloten reispakket.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Berichten en waarschuwingen",
        description: "Reisgerelateerde communicatie. Meldingsfuncties kunnen worden geactiveerd als onderdeel van het pilotprogramma.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Controle en machtigingen",
        description: "Op rollen gebaseerde toegang, doorzoekbare gebeurtenissen en gecontroleerde ondersteuningstoegang.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline-werking",
        description: "Chauffeurs kunnen blijven werken op zwakke netwerken; wijzigingen worden definitief zodra de synchronisatie is voltooid.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documenten & handtekeningen",
    subtitle: "Documenten zijn gekoppeld aan de reis, kunnen worden ondertekend en beoordeeld en vervolgens worden samengevoegd tot een exporteerbaar pakket.",
    steps: [
      {
        title: "Uploaden of creëren",
        description: "CMR, pakbon, foto of digitaal sjabloon.",
      },
      {
        title: "Koppelen",
        description: "Toegewezen aan rit-, bestuurder- of voertuigcontext.",
      },
      {
        title: "Onderteken en bekijk",
        description: "Statusstroom: in afwachting van handtekening → ondertekend → wordt beoordeeld.",
      },
      {
        title: "Gesloten reisarrangement",
        description: "Exporteerbare documenten en gebeurtenissen: een controleerbare samenvatting.",
      }
    ],
    statuses: [
      "Geüpload",
      "Ontbreekt",
      "In afwachting van handtekening",
      "Ondertekend",
      "Wordt beoordeeld"
    ],
    detailsLink: "Documenten in detail",
  },
  offline: {
    title: "Offline bediening en synchronisatie",
    subtitle: "Er wordt verder gewerkt aan zwakke netwerken; de voltooiing vindt plaats na synchronisatie.",
    cards: [
      {
        title: "Lokaal opslaan",
        description: "Chauffeurswijzigingen worden veilig op het apparaat opgeslagen.",
      },
      {
        title: "Zichtbare synchronisatie",
        description: "In behandeling zijnde wijzigingen blijven zichtbaar totdat de verbinding terugkeert.",
      },
      {
        title: "Conflictsignalering",
        description: "Conflicterende bronnen worden geregistreerd en nooit stilzwijgend overschreven.",
      }
    ],
    detailsLink: "Bestuurdersapp",
  },
  responsibleUse: {
    title: "Verantwoord gebruik",
    subtitle: "Korte, belangrijke limieten: details staan ​​op de juridische pagina's.",
    items: [
      "ViaNexis is geen gecertificeerd eFTI-platform en belooft geen automatische acceptatie van bevoegdheden.",
      "OCR, AI en vertaling zijn behulpzaam: menselijke beoordeling is vereist.",
      "Het systeem biedt geen juridisch advies.",
      "Het is geen nood- of SOS-dienst."
    ],
    detailsLink: "Volledige mededelingen over verantwoord gebruik",
  },
  pilotCta: {
    title: "Gecontroleerde toegang voor piloten",
    subtitle: "ViaNexis is momenteel beschikbaar via een pilotprogramma met geselecteerde vervoerders en chauffeurs. Toegang wordt geactiveerd na individuele bespreking en goedkeuring.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Actieve reis",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Volgende halte",
        value: "Ophalen · Boedapest (demo)",
        status: "Onderweg",
      },
      {
        label: "Document",
        value: "CMR — in afwachting van handtekening",
        status: "Actie",
      },
      {
        label: "Synchroniseren",
        value: "1 wijziging in behandeling",
        status: "Offline",
      }
    ],
    phoneCaption: "Productdemo — geanonimiseerde voorbeeldgegevens.",
    browserTitle: "Operationele controle",
    browserSubtitle: "Demovloot · dispatcherweergave",
    browserColumns: [
      "Reis",
      "Stop",
      "Document",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Boedapest (demo)",
        "CMR ontbreekt",
        "Waarschuw"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD ondertekend",
        "Onderweg"
      ],
      [
        "VN-2407-C11",
        "Wenen (demo)",
        "Wordt beoordeeld",
        "Voorsluiten"
      ]
    ],
    browserCaption: "Bedrijfsportaldemo — geen live klantgegevens.",
    driver: {
      navHome: "Thuis",
      navTrips: "Reizen",
      navDocs: "Documenten",
      navMore: "Meer",
      tripStatus: "Reis bezig",
      nextStopLabel: "Volgende halte",
      nextStopValue: "Ophalen · Boedapest (demo)",
      documentLabel: "Document",
      documentValue: "Digitale CMR",
      documentAction: "Handtekening vereist",
      syncLabel: "Verbinding",
      syncValue: "Offline · 1 in behandeling",
    },
    portal: {
      roleLabel: "Rol: Dispatcher",
      alertLabel: "Waarschuw",
      alertValue: "VN-2407-A18 · CMR wacht op ondertekening",
      auditLabel: "Laatste auditgebeurtenis",
      auditValue: "Documentstatus gewijzigd · chauffeursapp",
    },
  },
  statusLabels: {
    available: "Beschikbaar",
    pilot: "Piloot",
    development: "In ontwikkeling",
  },
  productPage: {
    highlightsTitle: "Belangrijkste mogelijkheden",
    capabilitiesTitle: "Wat dit oppervlak biedt",
    statusesTitle: "Statuslabels",
  },
  authority: {
    heroSubtitle: "In tijd en omvang beperkte toegang tot reisbewijs – geen gecertificeerd eFTI-platform.",
    foundationBadge: "Technische paraatheid",
    notCertifiedBadge: "Niet gecertificeerd eFTI",
    foundationTitle: "Wat bereidheid betekent",
    foundationSubtitle: "Gestructureerde data en gecontroleerd delen – zonder certificaat of vergunningclaim.",
    extraDisclaimer: "ViaNexis belooft niet in elk land autoriteitsacceptatie. Naleving van wet- en regelgeving blijft de verantwoordelijkheid van de klant.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Triplijst en haltes",
        description: "Actieve trips, volgende acties en stoptaken.",
        status: "available",
      },
      {
        title: "Documenten en handtekening",
        description: "Uploads, CMR-taken en vastleggen van handtekeningen.",
        status: "available",
      },
      {
        title: "Offline werken",
        description: "Lokaal opslaan met zichtbare synchronisatie in behandeling.",
        status: "available",
      },
      {
        title: "Berichten",
        description: "Ritgerelateerde communicatie voor chauffeurs.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Actieve reislijst",
        description: "Operationeel overzicht met stops en statussen.",
        status: "available",
      },
      {
        title: "Waarschuwingen voor ontbrekende documenten",
        description: "Ontbrekende of niet-ondertekende documenten zijn direct zichtbaar.",
        status: "available",
      },
      {
        title: "Machtigingen",
        description: "Rolgebaseerde toegang tot bedrijfsgegevens.",
        status: "available",
      },
      {
        title: "Auditgebeurtenissen",
        description: "Doorzoekbaar besluit- en documenttraject.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Uploaden en koppelen",
        description: "Documenten gekoppeld aan rit, bestuurder of voertuig.",
        status: "available",
      },
      {
        title: "Handtekeningworkflow",
        description: "In afwachting van handtekening → ondertekend → beoordeling.",
        status: "pilot",
      },
      {
        title: "Gesloten reisarrangement",
        description: "Exporteerbare documenten en gebeurtenissen.",
        status: "pilot",
      },
      {
        title: "Sjabloonbeheer",
        description: "Centrale documentsjablonen – geleidelijke uitrol.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Op rollen gebaseerde toegang",
        description: "Scheiding op gebruikers- en bedrijfsniveau.",
        status: "available",
      },
      {
        title: "Auditlogboek",
        description: "Acties en beslissingen blijven doorzoekbaar.",
        status: "available",
      },
      {
        title: "Sessie en apparaat",
        description: "Gecontroleerd sessie- en apparaatbeheer.",
        status: "pilot",
      },
      {
        title: "Ondersteuning toegang",
        description: "Tijdelijke, geregistreerde ondersteuningsinvoer.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Taal",
    draftSuffix: "· voorlopige versie",
    breadcrumb: "Broodkruimel",
    primaryNav: "Primair",
    importantNotice: "Belangrijke mededeling",
  },
};
