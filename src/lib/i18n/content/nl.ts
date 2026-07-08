import type { SiteContent } from "../types";
import { legalNl } from "./legal/nl";

export const contentNl: SiteContent = {
  meta: {
    title: "ViaNexis Chauffeurs- en bedrijfstransportactiviteiten",
    description: "Chauffeursapp, bedrijfscontrole, documentbeheer, berichtenuitwisseling, meldingen en meertalige ritworkflows in één systeem. Interne testvoorbereiding in uitvoering.",
    ogLocale: "nl_NL",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Functies",
    driverApp: "Bestuurdersapp",
    companyPortal: "Bedrijfsportaal",
    documents: "Documenten",
    authorityEfti: "Autoriteit / eFTI",
    security: "Beveiliging",
    pilot: "Toegang voor piloten",
    contact: "Contact",
    requestAccess: "Toegang aanvragen",
    menuOpen: "Menu openen",
  },
  footer: {
    tagline: "Digitaal platform voor transportbewijs en chauffeursactiviteiten voor transportbedrijven. eFTI-ready basis — geen gecertificeerd eFTI platform.",
    product: "Product",
    legal: "Legaal",
    legalNotice: "Juridische mededeling",
    privacy: "Privacybeleid",
    terms: "Gebruiksvoorwaarden",
    disclaimers: "Verantwoord gebruik",
    dataContact: "Contactpersoon voor gegevensbescherming",
    copyright: "Geen gecertificeerd eFTI platform. Belooft geen aanvaarding door autoriteiten, automatische juridische bewijskracht, onberispelijke OCR/AI/vertaling of nooddiensten/SOS. Geen openbare Play Store-download.",
  },
  hero: {
    title: "ViaNexis — platform voor digitaal transportbewijs en chauffeursactiviteiten",
    subtitle: "Chauffeursapp, bedrijfscontrole, documentbeheer, berichtenuitwisseling, meldingen en meertalige ritworkflows in één systeem.",
    primaryCta: "Neem contact met ons op",
    secondaryCta: "Interne testvoorbereiding in uitvoering",
    stats: [
      {
        label: "Bestuurdersapp",
        value: "Reis + offline",
      },
      {
        label: "Documenten",
        value: "CMR + controle",
      },
      {
        label: "Berichten",
        value: "Meertalig",
      },
      {
        label: "Status",
        value: "Interne testvoorbereiding",
      }
    ],
  },
  platformStatus: {
    title: "Huidige status",
    items: [
      "Er wordt een interne testvoorbereiding voor Google Play uitgevoerd, geen download in de openbare winkel.",
      "Vrijgave van stuurprogramma-app gereed en Samsung UAT bezig.",
      "Productiebackend, pushmeldingen en partnerintegraties worden geleidelijk met elkaar verbonden."
    ],
    disclaimer: "ViaNexis beweert niet dat het systeem in elk land live, gecertificeerd of officieel geaccepteerd is.",
  },
  moduleLabels: {
    goal: "Doel",
    appFoundation: "Stichting aan de app-zijde",
    backendDependency: "Backend-/beheerdersafhankelijkheid",
    important: "Belangrijk",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Bestuurdersapp",
      goal: "Laat chauffeurs ritgerelateerde taken, documenten en gebeurtenissen op mobiel afhandelen – online en offline.",
      appFoundation: "Ritlijst en details, documentupload, handtekening vastleggen, checklists, incidentregistratie, offline opslaan en synchroniseren, PIN-beveiligde sessie.",
      backendDependency: "Live API, huurderbereik, reis- en documentsynchronisatie, resolutie van bedrijfsinstellingen.",
    },
    {
      id: "company-admin",
      title: "Bedrijf/Admin controle",
      goal: "Laat transportbedrijven ritten, gebruikers, machtigingen en workflows vanuit één portal beheren.",
      appFoundation: "Gegevens en acties aan de bestuurderszijde weerspiegelen de bedrijfsregels.",
      backendDependency: "Webbedrijfsportal, platformbeheerapp, rollen, reisbeheer, documentvereisten, bedrijfsuitwisselingsinstellingen.",
    },
    {
      id: "cmr-documents",
      title: "Digitale CMR & documenten",
      goal: "Ritgerelateerde documenten – CMR, pakbon, factuur, voertuig- en chauffeurspapieren – worden op een gestructureerde manier beheerd.",
      appFoundation: "Documentupload, scan/foto, ritopdracht, op vereisten gebaseerde taken, primair documentconcept.",
      backendDependency: "Documentopslag, metadata, handtekeningregels, delen van bevoegdheden met reikwijdtelimieten.",
      disclaimer: "Digitale documenten hebben niet automatisch juridische bewijskracht. Acceptatie verschilt per land en klant.",
    },
    {
      id: "completed-package",
      title: "Compleet reispakket",
      goal: "Vat het bewijs van een voltooide reis samen in een exporteerbaar pakket.",
      appFoundation: "Ritafsluiting, lokale gegevens en gesynchroniseerde gebeurtenissen als basis voor het samenstellen van pakketten.",
      backendDependency: "Voltooide generatie van reispakketten, PDF export, auditexport. Sommige secties (bijvoorbeeld pallet/verpakking PDF) blijven afhankelijk.",
      disclaimer: "Het pakket ondersteunt documentatie; het vervangt niet de juridische beoordeling of autoriteitsprocedures van het bedrijf.",
    },
    {
      id: "messaging-notifications",
      title: "Berichten en meldingen",
      goal: "Ritgerelateerde communicatie en waarschuwingen voor belangrijke bestuurdersgebeurtenissen.",
      appFoundation: "Berichtenlijst, trip-gekoppelde threads, basis voor meldingen aan de app-zijde. Bruikbaar voor: nieuw bericht, reiswijziging, documenttaak, synchronisatieprobleem.",
      backendDependency: "Productiepush (FCM/APNs), apparaattokenregistratie, verzending aan de serverzijde - afzonderlijke afhankelijkheid, nog niet live.",
      disclaimer: "Doelscherm wordt geopend na PIN. Productiepush beweert niet dat elke gebeurtenis onmiddellijk plaatsvindt.",
    },
    {
      id: "pallet-packaging",
      title: "Pallet- en verpakkingsruil",
      goal: "Registreer pallet- en verpakkingsuitwisselingen per stop met hoeveelheden, tekorten, schade en geschillen.",
      appFoundation: "Aparte pallet- en verpakkingsmodules. Bedrijf-schakelbaar. Bedrijf kan items vooraf instellen; De chauffeur kan, indien toegestaan, een aangepaste verpakking toevoegen. Offline opslaan en synchroniseren.",
      backendDependency: "Exchange-instellingen API, recordsynchronisatie, gebruikersinterface van de portalbeheerder, voltooide pakket PDF sectie - dit laatste is een afhankelijkheid.",
      disclaimer: "PDF bewijssectie is niet in alle gevallen volledig gereed. Opname ondersteunt geschillendocumentatie, maar beslist niet over geschillen.",
    },
    {
      id: "adr-border",
      title: "ADR / grensondersteuning",
      goal: "Snelle hulpinformatie voor ADR en grens-/douanecontext — naast verificatie van officiële bronnen.",
      appFoundation: "ADR informatie, zoeken naar UN-nummer, helper voor tunnelcodes, grens-/douane-metagegevens gekoppeld aan reizen.",
      backendDependency: "ADR database-updates, landspecifieke regelmetagegevens, grenscontrolepuntgegevens.",
      disclaimer: "ADR en tunnelgegevens zijn helperinformatie. De app vervangt geen wetgeving, training, de DG-functionaris van het bedrijf of beslissingen van autoriteiten.",
    },
    {
      id: "truck-map",
      title: "Stichting vrachtwagenkaart",
      goal: "Vloot- en reisoverzicht op kaart — operationele oriëntatie.",
      appFoundation: "Kaartgebaseerd overzicht, rit- en voertuigcontextweergave.",
      backendDependency: "Integratie van telematicaproviders, routeringsprovider, livepositie: geleidelijke integratie.",
      disclaimer: "De kaart garandeert niet de naleving van wettelijke beperkingen of vergunningen.",
    },
    {
      id: "meertalig",
      title: "Meertalige bediening",
      goal: "Meertalige teams op één platform.",
      appFoundation: "Meertalige gebruikersinterface van de stuurprogramma-app, behoud van originele berichten, vertaling als hulp.",
      backendDependency: "Uitbreiding van de portal- en openbare site-locale, workflow voor vertalingsbeoordeling.",
      disclaimer: "Machinevertaling of AIvertaling is behulpzaam; menselijke beoordeling is vereist. Het originele document blijft primair.",
    },
    {
      id: "audit-support",
      title: "Toegang tot audits en ondersteuning",
      goal: "Traceerbaar logboek; gecontroleerde ondersteuningstoegang voor het oplossen van problemen.",
      appFoundation: "Event logging for trip and document actions; auditable support sessions.",
      backendDependency: "Auditexport, ondersteuningsbeleid, toestemmingsmatrix voor ondernemingen.",
      disclaimer: "Het auditlogboek is geen automatisch juridisch bewijs.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — verantwoord gebruik",
      body: "ADR en tunnelgegevens zijn helperinformatie. Officiële bronnen, tabellen en huidige lokale regels moeten altijd worden geverifieerd. ViaNexis vervangt geen wetgeving, ADR training, de functionaris voor gevaarlijke goederen van het bedrijf of besluiten van autoriteiten.",
    },
    aiOcr: {
      title: "AI, OCR en vertaling",
      body: "AI samenvatting, OCR en automatische vertaling zijn hulpmiddelen. Menselijke beoordeling is vereist. Het originele document en bericht blijven primair. Geen juridisch advies en geen beëdigde vertaling.",
    },
    efti: {
      title: "eFTI en delen van bevoegdheden",
      body: "ViaNexis is geen gecertificeerd eFTI platform. Het belooft niet dat autoriteit in elk land geaccepteerd zal worden. Een eFTI-ready basis betekent technische paraatheid – geen certificaat of licentie.",
    },
  },
  home: {
    problem: {
      title: "Dagelijkse logistieke uitdagingen",
      subtitle: "Wanneer documenten, handtekeningen en gebeurtenissen verspreid liggen, wordt de traceerbaarheid en het bewijsmateriaal aangetast.",
      cards: [
        {
          title: "Verspreide documenten",
          description: "Trippapieren in e-mail, chat of op papier: moeilijk te koppelen aan feitelijke gebeurtenissen.",
        },
        {
          title: "Ontbrekende handtekeningen",
          description: "Late of ontbrekende handtekeningen vertragen de sluiting en vergroten het risico op geschillen.",
        },
        {
          title: "Moeilijk te bewijzen gebeurtenissen",
          description: "Ophalen, bezorgen, palletruil, incident – ​​zonder gestructureerde logboeken, moeilijk te traceren.",
        },
        {
          title: "Meertalige teams",
          description: "Dagelijkse misverstanden over berichten: behoud van de originele tekst en gereviewde vertaling zijn vereist.",
        }
      ],
    },
    modules: {
      title: "Platformmodules",
      subtitle: "Doel, basis aan de app-zijde, backend/admin-afhankelijkheid – met juridisch veilige bewoordingen.",
    },
    pallet: {
      title: "Pallet- en verpakkingsruil",
      subtitle: "Afzonderlijke modules, bedrijfs-inschakelbaar – offline opslaan voor audit.",
    },
    notifications: {
      title: "Berichten en meldingen",
      subtitle: "Klaar voor de basis van de app: productiepush is een afzonderlijke backend-afhankelijkheid.",
      cards: [
        {
          title: "Typen meldingsgebeurtenissen",
          description: "Nieuw bericht, reiswijziging, documenttaak, synchronisatieprobleem.",
        },
        {
          title: "Taprouting & PIN",
          description: "Doelscherm openen vanuit melding; deeplink na PIN.",
        },
        {
          title: "Privacyveilig vergrendelscherm",
          description: "Volledige document- of berichtinhoud wordt standaard niet weergegeven op het vergrendelscherm.",
        }
      ],
      backendDepTitle: "Backend-afhankelijkheid",
      backendDepBody: "Productiepush (FCM/APNs), apparaattokenregistratie en verzending aan de serverzijde zijn nog niet live - afzonderlijke integratie vereist.",
    },
    disclaimersSection: {
      title: "Verantwoord gebruik — belangrijke mededelingen",
    },
    security: {
      title: "Bescherming en controle",
      subtitle: "Bedrijfs- en chauffeursbescherming met gestructureerde documentatie.",
      cards: [
        {
          title: "Bedrijfsbescherming",
          description: "Op vereisten gebaseerde documentatie, controleerbare gebeurtenissen, gecontroleerde toegang.",
        },
        {
          title: "Bescherming van de bestuurder",
          description: "Gestructureerd proces voor het documenteren van gebeurtenissen in geschillen.",
        },
        {
          title: "Documentatie ruggengraat",
          description: "Trip-gekoppelde papieren en evenementen in één systeem.",
        },
        {
          title: "Controleerbare gebeurtenissen",
          description: "Wie deed wat wanneer – ingelogd en doorzoekbaar.",
        }
      ],
      notPromiseTitle: "Geen belofte",
      notPromiseBody: "ViaNexis belooft geen automatische juridische bewijskracht. Juridische beoordeling is afhankelijk van de context.",
    },
    contact: {
      title: "Contact- en interne testen",
      subtitle: "Gecontroleerde toegang – geen automatische registratie, geen openbare Play-download.",
      body: "De driver-app bevindt zich in de interne testvoorbereiding van Google Play. Gereed voor release en Samsung UAT bezig. Activering gebeurt niet automatisch.",
      consentNote: "Het systeem verwerkt documenten, chauffeursworkflows, bedrijfsgegevens en machtigingen; elke toegang wordt individueel beoordeeld.",
      contactLink: "Neem contact met ons op →",
    },
  },
  contactForm: {
    title: "Neem contact met ons op",
    subtitle: "Interesse in het ViaNexis platform — geen automatische registratie.",
    name: "Naam *",
    company: "Bedrijf *",
    email: "E-mail *",
    phone: "Telefoon",
    message: "Bericht *",
    interestType: "Type interesse *",
    interestPlaceholder: "Selecteer...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Bestuurdersapp",
      },
      {
        value: "company-admin",
        label: "Bedrijfs- / beheerdersplatform",
      },
      {
        value: "documenten",
        label: "Documentbeheer",
      },
      {
        value: "pallet-packaging",
        label: "Pallet/verpakking",
      },
      {
        value: "adr-customs",
        label: "ADR / douaneondersteuning",
      },
      {
        value: "ander",
        label: "Ander",
      }
    ],
    consent: "Ik ga ermee akkoord dat ViaNexis de verstrekte gegevens uitsluitend voor contactdoeleinden verwerkt. *",
    submit: "Bericht verzenden",
    submitMailto: "E-mail verzenden",
    intakeDisabled: "Online leadinzending wordt voorbereid. Gebruik e-mailcontact of probeer het later opnieuw.",
    successTitle: "Bericht ontvangen",
    successBody: "Bedankt voor uw interesse. Ons team zal contact met u opnemen. Toegangsactivering gebeurt niet automatisch.",
    newSubmission: "Nieuw bericht",
    errors: {
      name: "Naam is vereist.",
      company: "Bedrijf is vereist.",
      email: "E-mail is vereist.",
      emailInvalid: "Voer een geldig e-mailadres in.",
      message: "Bericht is vereist.",
      interest: "Selecteer een rentetype.",
      consent: "Toestemming is vereist.",
      submitFailed: "Bericht kon niet worden verzonden. Probeer in plaats daarvan e-mail.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Inspectiepakket van de autoriteit",
        description: "Aan reis gekoppelde documenten en evenementen in een gedeeld pakket met beperkte reikwijdte.",
      },
      {
        title: "Omvang/tijd beperkte toegang",
        description: "Op QR gebaseerde beperkte toegang — niet openbaar.",
      },
      {
        title: "Controle",
        description: "Gelogde toegang en het delen van evenementen.",
      },
      {
        title: "eFTI-ready foundation",
        description: "Technische basis voor toekomstige integratie – geen certificering.",
      }
    ],
  },
  legal: legalNl,
};
