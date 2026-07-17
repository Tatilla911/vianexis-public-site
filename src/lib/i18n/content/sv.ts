import type { SiteContent } from "../types";
import { legalSv } from "./legal/sv";

export const contentSv: SiteContent = {
  meta: {
    title: "ViaNexis Förar- och företagstransporter",
    description: "Förarapp, företagskontroll, dokumenthantering, meddelanden, aviseringar och flerspråkiga arbetsflöden för resor i ett system. Förberedelser för intern testning pågår.",
    ogLocale: "sv_SE",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Drag",
    driverApp: "App för drivrutiner",
    companyPortal: "Företagsportal",
    documents: "Dokument",
    authorityEfti: "Auktoritet / eFTI",
    security: "Säkerhet",
    pilot: "Pilottillgång",
    contact: "Kontakta",
    requestAccess: "Begär åtkomst",
    menuOpen: "Öppna menyn",
  },
  footer: {
    tagline: "Digital transportbevis och förardriftsplattform för transportföretag. eFTI-färdig foundation — inte en certifierad eFTI-plattform.",
    product: "Produkt",
    legal: "Rättslig",
    legalNotice: "Rättsligt meddelande",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    disclaimers: "Ansvarsfull användning",
    dataContact: "Dataskyddskontakt",
    copyright: "Inte en certifierad eFTI-plattform. Utlovar inte myndighetsgodkännande, automatisk juridisk beviskraft, felfria OCR/AI/översättning eller nödtjänster/SOS. Ingen offentlig nedladdning av Play Butik.",
  },
  hero: {
    title: "ViaNexis — plattform för digital transportbevis och förardrift",
    subtitle: "Förarapp, företagskontroll, dokumenthantering, meddelanden, aviseringar och flerspråkiga arbetsflöden för resor i ett system.",
    primaryCta: "Kontakta oss",
    secondaryCta: "Förberedelser för intern testning pågår",
    stats: [
      {
        label: "App för drivrutiner",
        value: "Resa + offline",
      },
      {
        label: "Dokument",
        value: "CMR + revision",
      },
      {
        label: "Meddelanden",
        value: "Flerspråkig",
      },
      {
        label: "Status",
        value: "Intern testförberedelse",
      }
    ],
  },
    platformStatus: {
    title: "Controlled pilot access",
    items: [
      "ViaNexis is currently available through a pilot program with selected carriers and drivers.",
      "Access is activated after individual discussion and approval.",
      "No public app-store download.",
    ],
    disclaimer:
      "ViaNexis does not claim the system is officially accepted or certified in every country.",
  },

  moduleLabels: {
    goal: "Mål",
    appFoundation: "Key capabilities",
    backendDependency: "Backend / admin beroende",
    important: "Viktig",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "App för drivrutiner",
      goal: "Låt förare hantera triplänkade uppgifter, dokument och händelser på mobilen – online och offline.",
      appFoundation: "Reselista och detaljer, dokumentuppladdning, signaturfångst, checklistor, incidentloggning, offline spara och synkronisera, PIN-skyddad session.",
      backendDependency: "Live API, hyresgäst omfattning, resa och dokument synkronisering, företagsinställningar upplösning.",
    },
    {
      id: "company-admin",
      title: "Företag / Admin kontroll",
      goal: "Låt transportföretag hantera resor, användare, behörigheter och arbetsflöden från en portal.",
      appFoundation: "Data och åtgärder på förarsidan återspeglar företagets regler.",
      backendDependency: "Webbföretagsportal, plattformsadmin-app, roller, resehantering, dokumentkrav, inställningar för företagsutbyte.",
    },
    {
      id: "cmr-documents",
      title: "Digitala CMR och dokument",
      goal: "Triplänkade dokument — CMR, följesedel, faktura, fordons- och förarpapper — hanteras på ett strukturerat sätt.",
      appFoundation: "Dokumentuppladdning, skanning/foto, reseuppdrag, kravbaserade uppgifter, primärt dokumentkoncept.",
      backendDependency: "Dokumentlagring, metadata, signaturregler, behörighetsdelning med omfattningsbegränsningar.",
      disclaimer: "Digitala dokument har inte automatiskt rättslig beviskraft. Acceptansen varierar beroende på land och kund.",
    },
    {
      id: "completed-package",
      title: "Färdigt resepaket",
      goal: "Sammanfatta bevis på genomförd resa i ett exportbart paket.",
      appFoundation: "Resans stängning, lokal data och synkroniserade händelser som grund för paketmontering.",
      backendDependency: "Genomförd resepaketgenerering, PDF export, revisionsexport. Vissa sektioner (t.ex. pall/förpackning PDF) förblir beroenden.",
      disclaimer: "Paketet stöder dokumentation; den ersätter inte företagets juridiska bedömning eller myndighetsförfarande.",
    },
    {
      id: "messaging-notifications",
      title: "Meddelanden och aviseringar",
      goal: "Triplänkad kommunikation och varningar för viktiga förarhändelser.",
      appFoundation: "Meddelandelista, triplänkade trådar, aviseringsstiftelse på appsidan. Användbar för: nytt meddelande, reseändring, dokumentuppgift, synkroniseringsproblem.",
      backendDependency: "Produktions-push (FCM/APNs), registrering av enhetstoken, utsändning på serversidan - separat beroende, inte live än.",
      disclaimer: "Målskärmen öppnas efter PIN. Produktionspress hävdar inte att varje evenemang kommer omedelbart.",
    },
    {
      id: "pallet-packaging",
      title: "Pall & förpackningsbyte",
      goal: "Registrera pall- och förpackningsbyten per stopp med kvantiteter, brist, skador och tvist.",
      appFoundation: "Separata pall- och förpackningsmoduler. Företagsväxlingsbar. Företaget kan förinställa objekt; föraren kan lägga till anpassad förpackning om det tillåts. Spara och synkronisera offline.",
      backendDependency: "Utbytesinställningar API, postsynkronisering, portaladministratörsgränssnitt, färdigt paket PDF avsnitt — det senare är ett beroende.",
      disclaimer: "PDF bevissektionen är inte helt klar i alla fall. Inspelning stöder tvistdokumentation men avgör inte tvister.",
    },
    {
      id: "adr-border",
      title: "ADR / gränsstöd",
      goal: "Snabbhjälparinformation för ADR och gräns-/tullsammanhang — tillsammans med verifiering av officiella källor.",
      appFoundation: "ADR information, UN-nummersökning, tunnelkodhjälp, gräns/tullmetadata kopplade till resor.",
      backendDependency: "ADR databasuppdateringar, landsspecifik regelmetadata, gränskontrollpunktsdata.",
      disclaimer: "ADR och tunneldata är hjälpinformation. Appen ersätter inte lagstiftning, utbildning, företagets GD-tjänsteman eller myndighetsbeslut.",
    },
    {
      id: "truck-map",
      title: "Lastbil kartstiftelse",
      goal: "Fleet and trip overview on map — operational orientation.",
      appFoundation: "Kartbaserad översikt, resa och fordonskontextvisning.",
      backendDependency: "Integrering av telematikleverantör, routingleverantör, liveposition — gradvis integration.",
      disclaimer: "Kartan garanterar inte efterlevnad av lagliga begränsningar eller tillstånd.",
    },
    {
      id: "flerspråkig",
      title: "Flerspråkig drift",
      goal: "Flerspråkiga team på en plattform.",
      appFoundation: "Drivrutinapp flerspråkigt gränssnitt, lagring av originalmeddelande, översättning som hjälp.",
      backendDependency: "Utvidgning av portal och offentlig webbplats, arbetsflöde för översättningsgranskning.",
      disclaimer: "Maskin- eller AI-översättning är till hjälp; mänsklig granskning krävs. Originaldokumentet förblir primärt.",
    },
    {
      id: "audit-support",
      title: "Tillgång till revision och support",
      goal: "Spårbar stock; kontrollerad supportåtkomst för felsökning.",
      appFoundation: "Händelseloggning för resa och dokumentåtgärder; auditerbara supportsessioner.",
      backendDependency: "Revisionsexport, supportåtkomstpolicy, företagsbehörighetsmatris.",
      disclaimer: "Revisionsloggen är inte automatiskt juridiskt bevis.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — ansvarsfull användning",
      body: "ADR och tunneldata är hjälpinformation. Officiella källor, tabeller och aktuella lokala regler måste alltid verifieras. ViaNexis ersätter inte lagstiftning, ADR utbildning, företagets farliga varor eller myndighetsbeslut.",
    },
    aiOcr: {
      title: "AI, OCR & översättning",
      body: "AI sammanfattning, OCR och automatisk översättning är hjälpmedel. Mänsklig granskning krävs. Originaldokumentet och meddelandet förblir primära. Inte juridisk rådgivning och inte bestyrkt översättning.",
    },
    efti: {
      title: "eFTI och behörighetsdelning",
      body: "ViaNexis är inte en certifierad eFTI-plattform. Det lovar inte auktoritetsacceptans i alla länder. eFTI-färdig grund innebär teknisk beredskap — inte ett certifikat eller licens.",
    },
  },
  home: {
    problem: {
      title: "Vardagens logistikutmaningar",
      subtitle: "När dokument, signaturer och händelser sprids blir spårbarheten och bevisen lidande.",
      cards: [
        {
          title: "Utspridda dokument",
          description: "Resepapper i e-post, chatt eller papper - svårt att länka till faktiska händelser.",
        },
        {
          title: "Signaturer saknas",
          description: "Sena eller saknade underskrifter försenar stängningen och ökar risken för tvist.",
        },
        {
          title: "Svårbevisade händelser",
          description: "Upphämtning, leverans, pallbyte, incident — utan strukturerade loggar, svårt att spåra.",
        },
        {
          title: "Flerspråkiga team",
          description: "Dagliga meddelandemissförstånd – originaltextbevarande och granskad översättning krävs.",
        }
      ],
    },
    modules: {
      title: "Plattformsmoduler",
      subtitle: "Mål, grund på appsidan, backend/admin-beroende — med juridiskt säker formulering.",
    },
    pallet: {
      title: "Pall & förpackningsbyte",
      subtitle: "Separata moduler, växlingsbara från företaget – spara offline för revision.",
    },
    notifications: {
      title: "Meddelanden och aviseringar",
      subtitle: "produktionspush är ett separat backend-beroende.",
      cards: [
        {
          title: "Aviseringshändelsetyper",
          description: "Nytt meddelande, reseändring, dokumentuppgift, synkproblem.",
        },
        {
          title: "Tryck routing & PIN",
          description: "Öppna målskärmen från meddelandet; djuplänk efter PIN.",
        },
        {
          title: "Sekretesssäker låsskärm",
          description: "Fullständigt dokument- eller meddelandeinnehåll visas inte på låsskärmen som standard.",
        }
      ],
      backendDepTitle: "Backend-beroende",
      backendDepBody: "Produktions-push (FCM/APNs), registrering av enhetstoken och sändning på serversidan är inte live ännu – separat integration krävs.",
    },
    disclaimersSection: {
      title: "Ansvarsfull användning — viktiga meddelanden",
    },
    security: {
      title: "Skydd och kontroll",
      subtitle: "Företags- och förarskydd med strukturerad dokumentation.",
      cards: [
        {
          title: "Företagsskydd",
          description: "Kravbaserad dokumentation, granskningsbara händelser, kontrollerad åtkomst.",
        },
        {
          title: "Förarens skydd",
          description: "Strukturerad process för att dokumentera händelser i tvister.",
        },
        {
          title: "Dokumentationsryggraden",
          description: "Triplänkade tidningar och evenemang i ett system.",
        },
        {
          title: "Reviderbara händelser",
          description: "Vem gjorde vad när — loggad och sökbar.",
        }
      ],
      notPromiseTitle: "Inte ett löfte",
      notPromiseBody: "ViaNexis lovar inte automatisk juridisk beviskraft. Rättslig bedömning beror på sammanhang.",
    },
    contact: {
      title: "Kontakt och intern testning",
      subtitle: "Kontrollerad åtkomst — inte automatisk registrering, ingen offentlig nedladdning av Play.",
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
      consentNote: "Systemet hanterar dokument, förararbetsflöden, företagsdata och behörigheter – varje åtkomst granskas individuellt.",
      contactLink: "Kontakta oss →",
    },
  },
  contactForm: {
    title: "Kontakta oss",
    subtitle: "Intresse för plattformen ViaNexis — inte automatisk registrering.",
    name: "Namn *",
    company: "Företag *",
    email: "E-post *",
    phone: "Telefon",
    message: "Meddelande *",
    interestType: "Intressetyp *",
    interestPlaceholder: "Välja...",
    interestOptions: [
      {
        value: "driver-app",
        label: "App för drivrutiner",
      },
      {
        value: "company-admin",
        label: "Företag/administratörsplattform",
      },
      {
        value: "dokument",
        label: "Dokumenthantering",
      },
      {
        value: "pallet-packaging",
        label: "Pall/förpackning",
      },
      {
        value: "adr-customs",
        label: "ADR / tullstöd",
      },
      {
        value: "andra",
        label: "Andra",
      }
    ],
    consent: "Jag samtycker till att ViaNexis behandlar den tillhandahållna informationen enbart i kontaktsyfte. *",
    submit: "Skicka meddelande",
    submitMailto: "Skicka e-post",
    intakeDisabled: "Inlämning av leads online förbereds. Använd e-postkontakt eller försök igen senare.",
    successTitle: "Meddelande mottaget",
    successBody: "Tack för ditt intresse. Vårt team kommer att kontakta dig. Åtkomstaktivering är inte automatisk.",
    newSubmission: "Nytt meddelande",
    errors: {
      name: "Namn krävs.",
      company: "Företag krävs.",
      email: "E-post krävs.",
      emailInvalid: "Ange en giltig e-postadress.",
      message: "Meddelande krävs.",
      interest: "Välj en intressetyp.",
      consent: "Samtycke krävs.",
      submitFailed: "Meddelandet kunde inte skickas. Testa att mejla istället.",
    },
  },
  applicationForms: {
    common: {
      privacy: "I accept the privacy policy and consent to data processing. *",
      submit: "Submit application",
      intakeDisabled: "Online applications are being prepared. Contact support@vianexis.eu or try again later.",
      successTitle: "Application received",
      successBody: "Thank you. Your application is in review. Access is not automatic until approved.",
      newSubmission: "New application",
      errors: { required: "This field is required.", email: "Email is required.", emailInvalid: "Enter a valid email address.", password: "Password must be at least 8 characters.", privacy: "Privacy acceptance is required.", submitFailed: "Application could not be sent. Try again later." },
    },
    company: { title: "Company application", subtitle: "Apply for ViaNexis company platform access.", companyName: "Company name *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Contact name *", contactEmail: "Contact email *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "Modules of interest", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Dispatch portal" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Fleet / workshop" },{ value: "pallet_packaging", label: "Pallet / packaging" },{ value: "external_shipper_receiver", label: "External shipper / receiver" }], notes: "Notes" },
    driver: { title: "Driver application", subtitle: "Self-registration — pending approval before login.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Company name (optional)", companyCode: "Invite / company code (optional)", licenseNotes: "License / ADR / GKI notes (optional)" },
    partner: { title: "Partner interest", subtitle: "Shipper, receiver, warehouse or customs partner inquiry.", companyName: "Company name *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Customs broker" },{ value: "other_partner", label: "Other partner" }], contactName: "Contact name *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Myndighetsinspektionspaket",
        description: "Triplänkade dokument och händelser i ett delat paket med begränsad omfattning.",
      },
      {
        title: "Omfattning / tidsbegränsad tillgång",
        description: "QR-baserad begränsad åtkomst — inte offentlig.",
      },
      {
        title: "Granska",
        description: "Loggade åtkomst- och delningshändelser.",
      },
      {
        title: "eFTI-färdig foundation",
        description: "Teknisk bas för framtida integration — inte certifiering.",
      }
    ],
  },
  legal: legalSv,
};
