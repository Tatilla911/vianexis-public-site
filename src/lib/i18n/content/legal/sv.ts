import type { LegalContent } from "../legal-types";

export const legalSv: LegalContent = {
  versionBadge: "Intern testversion — juridisk expertgranskning pågår",
  privacy: {
    title: "Sekretessmeddelande – intern testversion",
    intro: "Detta meddelande gäller under den interna test- och förberedelsefasen av ViaNexis Driver-appen och relaterad plattform. Tjänsten är inte en offentlig nedladdning från Play Butik – förberedelser för interna tester på Google Play pågår. Den slutliga omfattande integritetspolicyn kommer att publiceras efter juridisk granskning.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "personuppgiftsansvarig",
      body: "ViaNexis — vianexis.eu. Sekretesskontakt: info@vianexis.eu",
    },
    scope: {
      title: "Omfattning",
      body: "Det här meddelandet täcker mobilappen ViaNexis Driver, relaterade arbetsflöden för förare och resa och webbkontaktformuläret. Företagets administratörs- och avsändarportal är föremål för separata avtals- och integritetsvillkor.",
    },
    dataCategories: {
      title: "Data vi behandlar",
      items: [
        "Konto- och kontaktdata: namn, e-post, telefon, företag, roll, land.",
        "Förarprofildata: identifierare, roll, språkinställningar, behörigheter.",
        "Resdata: rese-ID, status, stopp, tidsstämplar, metadata.",
        "Dokument: CMR, följesedlar, fakturor, foton, skanningar, digitala signaturer.",
        "Meddelanden och aviseringar: triplänkad kommunikation och varningshändelser.",
        "Plats: endast med användartillstånd och under användning (när den används), om funktionen är aktiv.",
        "Enhets- och sessionsmetadata: enhetstyp, OS-version, appversion, sessionsidentifierare.",
        "Diagnostik och loggar: tekniska loggar och felrapporter — om aktiverat.",
        "Pall och emballage utbyter data: typ, kvantitet, brist, skador, anteckningar.",
        "ADR / tullhjälparens användningsdata: sökningar, vyer — inte officiella beslut.",
        "Aviseringsbehörighet och framtida push-token: produktionspush (FCM) är ett separat backend-beroende."
      ],
    },
    purposes: {
      title: "Syften med bearbetningen",
      items: [
        "Hantera researbetsflöden och dokumentera prestanda.",
        "Dokumenthantering, underskrifter och montering av bevispaket.",
        "Triplänkad kommunikation och driftmeddelanden.",
        "Säkerhet, revision och spårbarhet.",
        "Kontrollerad supportåtkomst på ett kontrollerbart sätt.",
        "Förebygga och dokumentera juridiska och affärsmässiga tvister.",
        "Förbättra appens drift och felsökning.",
        "Intern testning, pilot och åtkomstutvärdering."
      ],
    },
    sharing: {
      title: "Datadelning",
      items: [
        "Arbetsgivare/transportföretag och auktoriserade administratör/samordnare användare — per hyresgäst omfattning.",
        "Förarens egen resa och dokumentdata enligt företagets regler.",
        "Auktoriserad plattformssupport endast med granskad, begränsad, motiverad åtkomst.",
        "Myndigheter eller partners endast enligt rättslig grund, kontrakt eller företagsbeslut.",
        "AI/OCR/översättningsleverantör endast via backend-kontrollerad framtida integration, om den tillämpas - med mänsklig granskning.",
        "Vi säljer inte personuppgifter. Ingen marknadsföring push."
      ],
    },
    rights: {
      title: "Dina rättigheter",
      items: [
        "Tillgång till din data - via företagsadministratör eller supportkanal.",
        "Rättelse av felaktiga uppgifter.",
        "Radering där det är juridiskt möjligt och företagets processer tillåter.",
        "Invändning eller begränsning där det är juridiskt motiverat.",
        "Dataportabilitet där tillämplig lag föreskriver det.",
        "Klagomål till en tillsynsmyndighet.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Aviseringar",
      body: "Appen använder operativa meddelanden – inte marknadsförings-push. Låsskärmstext är som standard integritetssäker. Produktions-push (FCM/APNs) och enhetstokenhantering är backend-beroenden — kan vara delvis eller inte live under intern testning. Aviseringsbehörighet är användarens val.",
    },
    location: {
      title: "Plats",
      body: "Plats bearbetas endast med användartillstånd och när den används (när den används), om funktionen är aktiv – för kart-, egen positions- och resebevis. Ingen bakgrundsspårning i det aktuella läget. Platsen garanterar inte ruttöverensstämmelse eller laglig efterlevnad.",
    },
    importantNotices: {
      title: "Viktiga meddelanden",
      items: [
        "AI, OCR och automatisk översättning är hjälpmedel – mänsklig granskning krävs.",
        "ADR information är en hjälpare — ersätter inte officiella källor eller lagstiftning.",
        "ViaNexis är inte en certifierad eFTI-plattform.",
        "Inte en nöd- eller SOS-tjänst.",
        "Digitala dokument har inte automatiskt rättslig beviskraft.",
        "Tjänsten är i intern testning/förberedelse – inte ett offentligt liveproduktionssystem."
      ],
    },
    dataContact: {
      title: "Sekretesskontakt",
      body: "Sekretessfrågor: info@vianexis.eu. Slutlig kontrollantkontakt kommer att visas i det publicerade meddelandet.",
    },
    playUrl: "Stable Play Console sekretess-URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Användarvillkor — intern testversion",
    intro: "Dessa villkor gäller under ViaNexis plattformens interna testning och pilotfas. Tjänsten är inte en offentlig produkt i Play Butik – förberedelser för interna tester på Google Play pågår. Slutgiltiga villkor kommer att publiceras efter juridisk granskning.",
    sections: [
      {
        title: "Tjänstens art",
        body: "ViaNexis tillhandahåller digitala transportbevis och en förardriftsplattform för transportföretag. eFTI-färdig foundation — inte en certifierad eFTI-plattform. Lovar inte auktoritetsacceptans i alla länder.",
      },
      {
        title: "Intern testning",
        body: "Åtkomsten kontrolleras – via pilot- eller intern testinbjudan. Inte automatisk offentlig registrering. Backend, push-meddelanden och vissa integrationer ansluts gradvis.",
      },
      {
        title: "Användaransvar",
        body: "Förare och företag ansvarar för resa, dokument, ADR och tullefterlevnad. Appen stöder dokumentation — ersätter inte juridisk rådgivning, ADR experter eller myndigheter.",
      },
      {
        title: "Tillgänglighet",
        body: "Under interna tester kan drifttiden och funktionerna variera. Specifik SLA gäller endast enligt kontrakt.",
      },
      {
        title: "Ansvarsbegränsning",
        body: "ViaNexis lovar inte automatisk laglig beviskraft, felfri OCR/AI/översättning, räddningstjänst eller produktionsberedskap om det fortfarande är ett backend-beroende.",
      }
    ],
  },
  legalNotice: {
    title: "Rättsligt meddelande – intern testversion",
    intro: "Den här sidan beskriver ViaNexis-plattformens interna testning och förberedelsestatus. Den ersätter inte fullständig juridisk dokumentation eller avtalsvillkor.",
    sections: [
      {
        title: "Plattformens karaktär",
        body: "Digital transportbevis, dokumenthantering, meddelandehantering, aviseringar och företagskontroll i ett system. eFTI-färdig foundation — inte en certifierad eFTI-plattform.",
      },
      {
        title: "Intern teststatus",
        body: "Förberedelser för interna tester på Google Play pågår. Samsung UAT och släppberedskap pågår. Vi hävdar inte att appen är allmänt tillgänglig i Play Butik.",
      },
      {
        title: "Ansvarsbegränsning",
        body: "Vi lovar inte myndighetsgodkännande, automatisk rättslig beviskraft, felfri AI/OCR/översättning, räddningstjänst eller full produktionsberedskap.",
      },
      {
        title: "Kontakta",
        body: "Juridiska frågor och integritetsfrågor: info@vianexis.eu",
      }
    ],
    relatedDocs: "Relaterade dokument",
  },
  disclaimersPage: {
    title: "Ansvarsfull användning — ansvarsfriskrivningar",
    intro: "Texterna nedan beskriver viktiga begränsningar för plattformsanvändning. Intern testversion — ersätter inte juridisk rådgivning.",
    items: [
      {
        id: "adr",
        title: "ADR — ansvarsfull användning",
        body: "ADR och tunneldata är hjälpinformation. Officiella källor, tabeller och aktuella lokala regler måste alltid verifieras. ViaNexis ersätter inte lagstiftning, ADR utbildning, företagets GD-tjänsteman eller myndighetsbeslut.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & översättning",
        body: "Assistive tools — human review required. Originaldokument och meddelande förblir primära. Inte juridisk rådgivning och inte bestyrkt översättning.",
      },
      {
        id: "meddelanden",
        title: "Aviseringar och push",
        body: "Operativa meddelanden — inte marknadsförings-push. Sekretesssäker låsskärm som standard. Produktions-push (FCM/APNs) är ett backend-beroende — kanske inte är live under intern testning.",
      },
      {
        id: "truck-map",
        title: "Lastbilskarta / samhällsdata",
        body: "Karta och rutt för operativ orientering – garanterar inte lagliga begränsningar, tillstånd eller gemenskapsdata noggrannhet. Inte en ersättning för officiell navigering.",
      },
      {
        id: "lastpall",
        title: "Pall / förpackning utbyte bevis",
        body: "Inspelning stöder tvistdokumentation. PDF bevissektion i färdigt resepaket är inte helt klart i alla fall. Avgör inte tvister.",
      },
      {
        id: "legal-validity",
        title: "Rättslig giltighet / dokument",
        body: "Digitala dokument och signaturer har inte automatiskt rättslig beviskraft. Acceptansen varierar beroende på land och kund.",
      },
      {
        id: "efti",
        title: "eFTI och behörighetsdelning",
        body: "ViaNexis är inte en certifierad eFTI-plattform. Lovar inte auktoritetsacceptans i alla länder. eFTI-färdig grund är teknisk beredskap — inte ett certifikat.",
      }
    ],
  },
};
