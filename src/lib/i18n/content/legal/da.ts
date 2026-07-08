import type { LegalContent } from "../legal-types";

export const legalDa: LegalContent = {
  versionBadge: "Intern testversion — juridisk ekspertgennemgang i gang",
  privacy: {
    title: "Bekendtgørelse om beskyttelse af personlige oplysninger — intern testversion",
    intro: "Denne meddelelse gælder under den interne test- og forberedelsesfase af ViaNexis Driver-appen og den tilhørende platform. Tjenesten er ikke en offentlig download fra Play Butik – forberedelse af intern test i Google Play er i gang. Den endelige omfattende privatlivspolitik vil blive offentliggjort efter juridisk gennemgang.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Dataansvarlig",
      body: "ViaNexis — vianexis.eu. Kontakt til beskyttelse af personlige oplysninger: info@vianexis.eu",
    },
    scope: {
      title: "Omfang",
      body: "Denne meddelelse dækker ViaNexis Driver-mobilappen, relaterede driver- og turarbejdsgange og webkontaktformularen. Virksomhedens admin- og afsenderportal er underlagt særskilte kontraktmæssige vilkår og fortrolighedsvilkår.",
    },
    dataCategories: {
      title: "Data vi behandler",
      items: [
        "Konto- og kontaktdata: navn, e-mail, telefon, virksomhed, rolle, land.",
        "Førerprofildata: identifikatorer, rolle, sprogindstillinger, tilladelser.",
        "Turdata: tur-id'er, status, stop, tidsstempler, metadata.",
        "Dokumenter: CMR, følgesedler, fakturaer, fotos, scanninger, digitale signaturer.",
        "Beskeder og meddelelser: trip-linked kommunikation og alarmbegivenheder.",
        "Placering: kun med brugertilladelse og under brug (når den er i brug), hvis funktionen er aktiv.",
        "Enheds- og sessionsmetadata: enhedstype, OS-version, appversion, sessionsidentifikatorer.",
        "Diagnostik og logfiler: tekniske logfiler og fejlrapporter — hvis aktiveret.",
        "Palle og emballage udveksler data: type, mængde, mangel, skader, noter.",
        "ADR / brugsdata for toldhjælper: søgninger, visninger — ikke officielle beslutninger.",
        "Notifikationstilladelse og fremtidig push-token: produktions-push (FCM) er en separat backend-afhængighed."
      ],
    },
    purposes: {
      title: "Formål med forarbejdning",
      items: [
        "Håndtering af tur-arbejdsgange og dokumentation af ydeevne.",
        "Dokumenthåndtering, underskrifter og samling af bevispakke.",
        "Trip-linked kommunikation og driftsmeddelelser.",
        "Sikkerhed, revision og sporbarhed.",
        "Kontrolleret supportadgang på en kontrollerbar måde.",
        "Forebyggelse og dokumentation af juridiske og forretningsmæssige tvister.",
        "Forbedring af appdrift og fejlfinding.",
        "Intern test, pilot og adgangsevaluering."
      ],
    },
    sharing: {
      title: "Datadeling",
      items: [
        "Arbejdsgiver/transportvirksomhed og autoriserede admin/dispatcher-brugere — pr. lejers omfang.",
        "Chaufførens egne rejse- og dokumentdata i henhold til virksomhedens regler.",
        "Kun autoriseret platformssupport med revideret, begrænset, berettiget adgang.",
        "Myndigheder eller partnere kun i henhold til juridisk grundlag, kontrakt eller virksomhedsbeslutning.",
        "AI/OCR/oversættelsesudbyder kun via backend-styret fremtidig integration, hvis det anvendes - med menneskelig gennemgang.",
        "Vi sælger ikke personlige data. Intet markedsføringstryk."
      ],
    },
    rights: {
      title: "Dine rettigheder",
      items: [
        "Adgang til dine data - via virksomhedens admin eller supportkanal.",
        "Rettelse af unøjagtige data.",
        "Sletning, hvor det er juridisk muligt og virksomhedens processer tillader det.",
        "Indsigelse eller begrænsning, hvor det er juridisk begrundet.",
        "Dataportabilitet, hvor gældende lovgivning giver det.",
        "Klage til en tilsynsmyndighed.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Meddelelser",
      body: "Appen bruger operationelle meddelelser - ikke marketing-push. Tekst på låseskærm er som standard privatsikker. Produktions-push (FCM/APNs) og enhedstokenhåndtering er backend-afhængigheder - kan være delvist eller ikke live under intern test. Notifikationstilladelse er brugerens valg.",
    },
    location: {
      title: "Beliggenhed",
      body: "Placering behandles kun med brugertilladelse og under brug (når den er i brug), hvis funktionen er aktiv - til kort, egen position og rejsebevisformål. Ingen baggrundssporing i den aktuelle tilstand. Placering garanterer ikke ruteoverholdelse eller lovoverholdelse.",
    },
    importantNotices: {
      title: "Vigtige meddelelser",
      items: [
        "AI, OCR og automatisk oversættelse er hjælpeværktøjer - menneskelig gennemgang påkrævet.",
        "ADR information er en hjælper — erstatter ikke officielle kilder eller lovgivning.",
        "ViaNexis er ikke en certificeret eFTI platform.",
        "Ikke en nødsituation eller SOS tjeneste.",
        "Digitale dokumenter har ikke automatisk juridisk beviskraft.",
        "Tjenesten er i intern test/forberedelse - ikke et offentligt live-produktionssystem."
      ],
    },
    dataContact: {
      title: "Privacy contact",
      body: "Spørgsmål om beskyttelse af personlige oplysninger: info@vianexis.eu. Den endelige controllerkontakt vil fremgå af den offentliggjorte meddelelse.",
    },
    playUrl: "Stable Play Console privatlivs-URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Vilkår for brug — intern testversion",
    intro: "Disse vilkår gælder under ViaNexis platformens interne test- og pilotfase. Tjenesten er ikke et offentligt Play Butik-produkt – forberedelse af intern test i Google Play er i gang. Endelige vilkår vil blive offentliggjort efter juridisk gennemgang.",
    sections: [
      {
        title: "Tjenestens art",
        body: "ViaNexis leverer digital transportbevis og en chaufførdriftsplatform til transportvirksomheder. eFTI-klar fundament — ikke en certificeret eFTI platform. Lover ikke myndighedsaccept i alle lande.",
      },
      {
        title: "Intern test",
        body: "Adgangen kontrolleres - via pilot- eller intern testinvitation. Ikke automatisk offentlig registrering. Backend, push-meddelelser og nogle integrationer forbindes gradvist.",
      },
      {
        title: "Brugeransvar",
        body: "Chauffør og firma er ansvarlige for rejse, dokumenter, ADR og toldoverholdelse. Appen understøtter dokumentation — erstatter ikke juridisk rådgivning, ADR-eksperter eller myndigheder.",
      },
      {
        title: "Tilgængelighed",
        body: "Under intern test kan oppetid og funktioner variere. Specifik SLA gælder kun under kontrakt.",
      },
      {
        title: "Ansvarsbegrænsning",
        body: "ViaNexis lover ikke automatisk juridisk beviskraft, fejlfri OCR/AI/oversættelse, nødtjenester eller produktions-push-beredskab, hvis det stadig er en backend-afhængighed.",
      }
    ],
  },
  legalNotice: {
    title: "Juridisk meddelelse — intern testversion",
    intro: "Denne side beskriver ViaNexis platformens interne test og forberedelsesstatus. Det erstatter ikke fuld juridisk dokumentation eller kontraktmæssige vilkår.",
    sections: [
      {
        title: "Platformens art",
        body: "Digital transportbevis, dokumenthåndtering, meddelelser, notifikationer og virksomhedskontrol i ét system. eFTI-klar fundament — ikke en certificeret eFTI platform.",
      },
      {
        title: "Intern teststatus",
        body: "Forberedelse til intern test i Google Play er i gang. Samsung UAT og udgivelsesberedskab i gang. Vi påstår ikke, at appen er offentlig tilgængelig i Play Butik.",
      },
      {
        title: "Ansvarsbegrænsning",
        body: "Vi lover ikke myndighedsaccept, automatisk juridisk beviskraft, fejlfri AI/OCR/oversættelse, nødtjenester eller fuld produktions-push-beredskab.",
      },
      {
        title: "Kontakte",
        body: "Juridiske spørgsmål og privatlivsspørgsmål: info@vianexis.eu",
      }
    ],
    relatedDocs: "Relaterede dokumenter",
  },
  disclaimersPage: {
    title: "Ansvarlig brug — ansvarsfraskrivelser",
    intro: "Teksterne nedenfor beskriver vigtige grænser for platformbrug. Intern testversion — erstatter ikke juridisk rådgivning.",
    items: [
      {
        id: "adr",
        title: "ADR — ansvarlig brug",
        body: "ADR og tunneldata er hjælpeoplysninger. Officielle kilder, tabeller og aktuelle lokale regler skal altid verificeres. ViaNexis erstatter ikke lovgivning, ADR uddannelse, virksomhedens DG officer eller myndighedsbeslutninger.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & oversættelse",
        body: "Hjælpeværktøjer — menneskelig gennemgang påkrævet. Originalt dokument og meddelelse forbliver primære. Ikke juridisk rådgivning og ikke certificeret oversættelse.",
      },
      {
        id: "meddelelser",
        title: "Notifikationer og push",
        body: "Operationelle meddelelser - ikke marketing push. Privatsikker låseskærm som standard. Produktions-push (FCM/APNs) er en backend-afhængighed - er muligvis ikke live under intern test.",
      },
      {
        id: "truck-map",
        title: "Lastbilkort / samfundsdata",
        body: "Kort og rute til operationel orientering – garanterer ikke juridiske begrænsninger, tilladelser eller fællesskabsdatanøjagtighed. Ikke en erstatning for officiel navigation.",
      },
      {
        id: "palle",
        title: "Palle / emballage udveksle beviser",
        body: "Optagelse understøtter tvistdokumentation. PDF bevissektionen i den gennemførte rejsepakke er ikke helt klar i alle tilfælde. Afgør ikke tvister.",
      },
      {
        id: "legal-validity",
        title: "Juridisk gyldighed / dokumenter",
        body: "Digitale dokumenter og underskrifter har ikke automatisk juridisk beviskraft. Accepten varierer efter land og kunde.",
      },
      {
        id: "efti",
        title: "eFTI og deling af autoriteter",
        body: "ViaNexis er ikke en certificeret eFTI platform. Lover ikke myndighedsaccept i alle lande. eFTI-klar fundament er teknisk beredskab - ikke et certifikat.",
      }
    ],
  },
};
