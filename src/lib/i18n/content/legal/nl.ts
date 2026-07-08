import type { LegalContent } from "../legal-types";

export const legalNl: LegalContent = {
  versionBadge: "Interne testversie – beoordeling door juridische experts wordt uitgevoerd",
  privacy: {
    title: "Privacyverklaring — interne testversie",
    intro: "Deze mededeling is van toepassing tijdens de interne test- en voorbereidingsfase van de ViaNexis Chauffeursapp en het gerelateerde platform. De service is geen openbare Play Store-download; de interne testvoorbereiding van Google Play is bezig. Het definitieve uitgebreide privacybeleid zal na juridische toetsing worden gepubliceerd.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Gegevensbeheerder",
      body: "ViaNexis — vianexis.eu. Privacycontact: info@vianexis.eu",
    },
    scope: {
      title: "Domein",
      body: "Deze kennisgeving heeft betrekking op de mobiele app ViaNexis Chauffeur, gerelateerde chauffeurs- en ritworkflows en het webcontactformulier. Op het bedrijfsbeheer- en dispatcherportaal zijn afzonderlijke contractuele en privacyvoorwaarden van toepassing.",
    },
    dataCategories: {
      title: "Gegevens die wij verwerken",
      items: [
        "Account- en contactgegevens: naam, e-mailadres, telefoon, bedrijf, rol, land.",
        "Gegevens van bestuurdersprofiel: ID's, rol, taalinstellingen, rechten.",
        "Ritgegevens: rit-ID's, status, stops, tijdstempels, metadata.",
        "Documenten: CMR, pakbonnen, facturen, foto's, scans, digitale handtekeningen.",
        "Berichten en meldingen: ritgerelateerde communicatie en waarschuwingsgebeurtenissen.",
        "Locatie: alleen met toestemming van de gebruiker en tijdens gebruik (wanneer in gebruik), als de functie actief is.",
        "Metagegevens van apparaat en sessie: apparaattype, besturingssysteemversie, app-versie, sessie-ID's.",
        "Diagnostiek en logboeken: technische logboeken en foutrapporten – indien ingeschakeld.",
        "Uitwisselingsgegevens pallets en verpakkingen: type, aantal, tekort, schade, aantekeningen.",
        "ADR / gebruiksgegevens van douanehelpers: zoekopdrachten, weergaven - geen officiële beslissingen.",
        "Meldingstoestemming en toekomstig pushtoken: productiepush (FCM) is een afzonderlijke backend-afhankelijkheid."
      ],
    },
    purposes: {
      title: "Doeleinden van de verwerking",
      items: [
        "Beheer van reisworkflows en documenteren van prestaties.",
        "Documentbeheer, handtekeningen en assemblage van bewijspakketten.",
        "Trip-linked communicatie en operationele meldingen.",
        "Beveiliging, audit en traceerbaarheid.",
        "Gecontroleerde ondersteuningstoegang op een controleerbare manier.",
        "Het voorkomen en documenteren van juridische en zakelijke geschillen.",
        "Verbetering van de werking van de app en probleemoplossing.",
        "Interne tests, pilots en toegangsevaluatie."
      ],
    },
    sharing: {
      title: "Gegevens delen",
      items: [
        "Werkgever/transportbedrijf en geautoriseerde admin/dispatcher-gebruikers — per huurderbereik.",
        "Eigen rit- en documentgegevens van de chauffeur volgens bedrijfsregels.",
        "Alleen geautoriseerde platformondersteuning met gecontroleerde, beperkte, gerechtvaardigde toegang.",
        "Alleen autoriteiten of partners per rechtsgrondslag, contract of bedrijfsbesluit.",
        "AI/OCR/vertaalprovider alleen via backend-gecontroleerde toekomstige integratie, indien toegepast – met menselijke beoordeling.",
        "Wij verkopen geen persoonlijke gegevens. Geen marketingpush."
      ],
    },
    rights: {
      title: "Jouw rechten",
      items: [
        "Toegang tot uw gegevens — via bedrijfsbeheer of ondersteuningskanaal.",
        "Rectificatie van onjuiste gegevens.",
        "Wissen waar juridisch mogelijk en bedrijfsprocessen dit toelaten.",
        "Bezwaar of beperking indien wettelijk gerechtvaardigd.",
        "Gegevensportabiliteit waar de toepasselijke wetgeving daarin voorziet.",
        "Klacht bij een toezichthoudende autoriteit.",
        "Contact: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Meldingen",
      body: "De app maakt gebruik van operationele meldingen en niet van marketingpush. Tekst op het vergrendelscherm is standaard privacyveilig. Productiepush (FCM/APNs) en de verwerking van apparaattokens zijn backend-afhankelijkheden; deze kunnen gedeeltelijk of niet live zijn tijdens interne tests. Toestemming voor meldingen is de keuze van de gebruiker.",
    },
    location: {
      title: "Locatie",
      body: "Locatie wordt alleen verwerkt met toestemming van de gebruiker en tijdens gebruik (wanneer in gebruik), als de functie actief is – voor kaart-, eigen positie- en reisbewijsdoeleinden. Geen achtergrondtracking in de huidige staat. Locatie garandeert geen naleving van de route of wettelijke naleving.",
    },
    importantNotices: {
      title: "Belangrijke mededelingen",
      items: [
        "AI, OCR en automatische vertaling zijn ondersteunende hulpmiddelen — menselijke beoordeling vereist.",
        "ADR informatie is een hulpmiddel — vervangt geen officiële bronnen of wetgeving.",
        "ViaNexis is geen gecertificeerd eFTI platform.",
        "Geen noodgeval of SOS service.",
        "Digitale documenten hebben niet automatisch juridische bewijskracht.",
        "Service bevindt zich in interne tests/voorbereiding - geen openbaar live-productiesysteem."
      ],
    },
    dataContact: {
      title: "Privacy-contact",
      body: "Privacyvragen: info@vianexis.eu. Het definitieve contact met de controller zal verschijnen in de gepubliceerde kennisgeving.",
    },
    playUrl: "Stabiele Play Console-privacy-URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Gebruiksvoorwaarden — interne testversie",
    intro: "Deze voorwaarden zijn van toepassing tijdens de interne test- en pilotfase van het ViaNexis platform. De service is geen openbaar Play Store-product. De interne testvoorbereiding van Google Play is bezig. De definitieve voorwaarden worden na juridische toetsing gepubliceerd.",
    sections: [
      {
        title: "Aard van de dienst",
        body: "ViaNexis biedt digitaal transportbewijs en een chauffeursplatform voor transportbedrijven. eFTI-ready basis — geen gecertificeerd eFTI platform. Belooft geen acceptatie van autoriteit in elk land.",
      },
      {
        title: "Intern testen",
        body: "De toegang wordt gecontroleerd – via een pilot of een interne testuitnodiging. Geen automatische openbare registratie. Backend, pushmeldingen en sommige integraties zijn geleidelijk met elkaar verbonden.",
      },
      {
        title: "Verantwoordelijkheid van de gebruiker",
        body: "Chauffeur en bedrijf zijn verantwoordelijk voor de rit, documenten, ADR en naleving van de douaneregels. De app ondersteunt documentatie — vervangt geen juridisch advies, ADR experts of autoriteiten.",
      },
      {
        title: "Beschikbaarheid",
        body: "Tijdens interne tests kunnen de uptime en functies variëren. Specifieke SLA's zijn alleen van toepassing op contractbasis.",
      },
      {
        title: "Beperking van aansprakelijkheid",
        body: "ViaNexis belooft geen automatische juridische bewijskracht, onberispelijke OCR/AI/vertaling, hulpdiensten of productie-push-gereedheid als er nog steeds een backend-afhankelijkheid is.",
      }
    ],
  },
  legalNotice: {
    title: "Juridische mededeling — interne testversie",
    intro: "Deze pagina beschrijft de interne test- en voorbereidingsstatus van het ViaNexis platform. Het vervangt niet de volledige juridische documentatie of contractuele voorwaarden.",
    sections: [
      {
        title: "Aard van het platform",
        body: "Digitaal transportbewijs, documentbeheer, berichtenuitwisseling, meldingen en bedrijfscontrole in één systeem. eFTI-ready basis — geen gecertificeerd eFTI platform.",
      },
      {
        title: "Interne teststatus",
        body: "Voorbereiding van interne tests voor Google Play wordt uitgevoerd. Samsung UAT en releasegereedheid in uitvoering. We beweren niet dat de app openbaar beschikbaar is in de Play Store.",
      },
      {
        title: "Beperking van aansprakelijkheid",
        body: "We beloven geen aanvaarding door autoriteiten, automatische juridische bewijskracht, vlekkeloze AI/OCR/vertaling, hulpdiensten of volledige productie-push-gereedheid.",
      },
      {
        title: "Contact",
        body: "Juridische en privacyvragen: info@vianexis.eu",
      }
    ],
    relatedDocs: "Gerelateerde documenten",
  },
  disclaimersPage: {
    title: "Verantwoord gebruik — disclaimers",
    intro: "De onderstaande teksten beschrijven belangrijke beperkingen van het platformgebruik. Interne testversie — vervangt geen juridisch advies.",
    items: [
      {
        id: "adr",
        title: "ADR — verantwoord gebruik",
        body: "ADR en tunnelgegevens zijn helperinformatie. Officiële bronnen, tabellen en huidige lokale regels moeten altijd worden geverifieerd. ViaNexis vervangt geen wetgeving, ADR training, de DG-functionaris van het bedrijf of beslissingen van autoriteiten.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR en vertaling",
        body: "Hulpmiddelen – menselijke beoordeling vereist. Het originele document en bericht blijven primair. Geen juridisch advies en geen beëdigde vertaling.",
      },
      {
        id: "meldingen",
        title: "Meldingen en pushen",
        body: "Operationele meldingen – geen marketingpush. Standaard privacyveilig vergrendelscherm. Productiepush (FCM/APNs) is een backend-afhankelijkheid en is mogelijk niet live tijdens interne tests.",
      },
      {
        id: "truck-map",
        title: "Vrachtwagenkaart / gemeenschapsgegevens",
        body: "Kaart en route voor operationele oriëntatie — garandeert geen wettelijke beperkingen, vergunningen of nauwkeurigheid van gemeenschapsgegevens. Geen vervanging voor officiële navigatie.",
      },
      {
        id: "pallet",
        title: "Pallet/verpakking wisselbewijs",
        body: "Opname ondersteunt geschildocumentatie. Het PDF bewijsgedeelte in het voltooide reispakket is niet in alle gevallen volledig gereed. Beslist geen geschillen.",
      },
      {
        id: "legal-validity",
        title: "Rechtsgeldigheid / documenten",
        body: "Digitale documenten en handtekeningen hebben niet automatisch juridische bewijskracht. Acceptatie verschilt per land en klant.",
      },
      {
        id: "efti",
        title: "eFTI en delen van bevoegdheden",
        body: "ViaNexis is geen gecertificeerd eFTI platform. Belooft geen acceptatie van autoriteit in elk land. De eFTI-ready basis is technische paraatheid – geen certificaat.",
      }
    ],
  },
};
