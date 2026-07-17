import type { SiteContent } from "../types";
import { legalDa } from "./legal/da";

export const contentDa: SiteContent = {
  meta: {
    title: "ViaNexis Chauffør- og firmatransport",
    description: "Driver-app, virksomhedskontrol, dokumenthåndtering, meddelelser, notifikationer og flersprogede tur-arbejdsgange i ét system. Intern testforberedelse i gang.",
    ogLocale: "da_DK",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Funktioner",
    driverApp: "Driver app",
    companyPortal: "Virksomhedsportal",
    documents: "Dokumenter",
    authorityEfti: "Myndighed / eFTI",
    security: "Sikkerhed",
    pilot: "Pilot adgang",
    contact: "Kontakte",
    requestAccess: "Anmod om adgang",
    menuOpen: "Åbn menuen",
  },
  footer: {
    tagline: "Digital transportbevis og chaufførdriftsplatform for transportvirksomheder. eFTI-klar fundament — ikke en certificeret eFTI platform.",
    product: "Produkt",
    legal: "Legal",
    legalNotice: "Juridisk meddelelse",
    privacy: "Privatlivspolitik",
    terms: "Vilkår for brug",
    disclaimers: "Ansvarlig brug",
    dataContact: "Databeskyttelseskontakt",
    copyright: "Ikke en certificeret eFTI platform. Lover ikke myndighedsaccept, automatisk juridisk beviskraft, fejlfri OCR/AI/oversættelse eller nød-/SOS-tjenester. Ingen offentlig download af Play Butik.",
  },
  hero: {
    title: "ViaNexis — digital transportbevis- og chaufførdriftsplatform",
    subtitle: "Driver-app, virksomhedskontrol, dokumenthåndtering, meddelelser, notifikationer og flersprogede tur-arbejdsgange i ét system.",
    primaryCta: "Kontakt os",
    secondaryCta: "Intern testforberedelse i gang",
    stats: [
      {
        label: "Driver app",
        value: "Tur + offline",
      },
      {
        label: "Dokumenter",
        value: "CMR + revision",
      },
      {
        label: "Beskeder",
        value: "Flersproget",
      },
      {
        label: "Status",
        value: "Intern testforberedelse",
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
    backendDependency: "Backend / admin afhængighed",
    important: "Vigtig",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Driver app",
      goal: "Lad chauffører håndtere trip-linkede opgaver, dokumenter og begivenheder på mobilen - online og offline.",
      appFoundation: "Tripliste og detaljer, dokumentupload, signaturregistrering, tjeklister, hændelseslogning, offline lagring og synkronisering, PIN-beskyttet session.",
      backendDependency: "Live API, lejeromfang, rejse- og dokumentsynkronisering, opløsning af firmaindstillinger.",
    },
    {
      id: "company-admin",
      title: "Firma / Admin kontrol",
      goal: "Lad transportvirksomheder administrere ture, brugere, tilladelser og arbejdsgange fra én portal.",
      appFoundation: "Data og handlinger på førersiden afspejler virksomhedens regler.",
      backendDependency: "Webvirksomhedsportal, platform admin app, roller, rejsestyring, dokumentkrav, virksomhedsudvekslingsindstillinger.",
    },
    {
      id: "cmr-documents",
      title: "Digital CMR & dokumenter",
      goal: "Trip-linkede dokumenter — CMR, følgeseddel, faktura, køretøjs- og chaufførpapirer — administreret på en struktureret måde.",
      appFoundation: "Dokumentupload, scan/foto, turopgave, kravbaserede opgaver, primært dokumentkoncept.",
      backendDependency: "Dokumentlagring, metadata, signaturregler, myndighedsdeling med omfangsgrænser.",
      disclaimer: "Digitale dokumenter har ikke automatisk juridisk beviskraft. Accepten varierer efter land og kunde.",
    },
    {
      id: "completed-package",
      title: "Gennemført rejsepakke",
      goal: "Opsummer gennemført rejsebevis i en eksporterbar pakke.",
      appFoundation: "Turens lukning, lokale data og synkroniserede hændelser som grundlag for pakkesamling.",
      backendDependency: "Færdiggjort rejsepakkegenerering, PDF eksport, revisionseksport. Nogle sektioner (f.eks. palle/emballage PDF) forbliver afhængige.",
      disclaimer: "Pakken understøtter dokumentation; den erstatter ikke virksomhedens juridiske vurdering eller myndighedsbehandling.",
    },
    {
      id: "messaging-notifications",
      title: "Beskeder og notifikationer",
      goal: "Trip-linked kommunikation og advarsler for vigtige chaufførbegivenheder.",
      appFoundation: "Meddelelsesliste, trip-linkede tråde, meddelelsesgrundlag på appsiden. Anvendes til: ny besked, turændring, dokumentopgave, synkroniseringsproblem.",
      backendDependency: "Produktions-push (FCM/APNs), registrering af enhedstoken, afsendelse på serversiden - separat afhængighed, ikke live endnu.",
      disclaimer: "Målskærmen åbnes efter PIN. Produktions-push hævder ikke, at hver begivenhed ankommer med det samme.",
    },
    {
      id: "pallet-packaging",
      title: "Udveksling af paller og emballage",
      goal: "Registrer palle- og emballageudvekslinger pr. stop med mængder, mangel, skader og tvist.",
      appFoundation: "Separate palle- og emballagemoduler. Firmaskiftbar. Virksomheden kan forudindstille elementer; driveren kan tilføje tilpasset emballage, hvis det er tilladt. Offline gem og synkroniser.",
      backendDependency: "Udvekslingsindstillinger API, registreringssynkronisering, portaladministrationsgrænseflade, afsluttet pakke PDF sektion — sidstnævnte er en afhængighed.",
      disclaimer: "PDF bevissektionen er ikke helt klar i alle tilfælde. Optagelse understøtter tvistdokumentation, men afgør ikke tvister.",
    },
    {
      id: "adr-border",
      title: "ADR / grænsestøtte",
      goal: "Hurtig hjælpeinformation til ADR og grænse-/toldkontekst — sammen med verifikation af officielle kilder.",
      appFoundation: "ADR information, UN-nummersøgning, tunnelkodehjælper, grænse-/toldmetadata knyttet til ture.",
      backendDependency: "ADR databaseopdateringer, landespecifikke regelmetadata, data om grænsekontrolpunkter.",
      disclaimer: "ADR og tunneldata er hjælpeoplysninger. Appen erstatter ikke lovgivning, uddannelse, virksomhedens DG-officer eller myndighedsbeslutninger.",
    },
    {
      id: "truck-map",
      title: "Lastbil kort fundament",
      goal: "Flåde- og turoversigt på kort — operationel orientering.",
      appFoundation: "Kortbaseret oversigt, tur og køretøjskontekstvisning.",
      backendDependency: "Telematikudbyderintegration, routingudbyder, liveposition — gradvis integration.",
      disclaimer: "Kortet garanterer ikke overholdelse af lovmæssige restriktioner eller tilladelser.",
    },
    {
      id: "flersproget",
      title: "Flersproget drift",
      goal: "Flersprogede teams på én platform.",
      appFoundation: "Driver app flersproget brugergrænseflade, opbevaring af originale beskeder, oversættelse som hjælp.",
      backendDependency: "Udvidelse af portaler og offentlige websteder, workflow for oversættelsesgennemgang.",
      disclaimer: "Maskin- eller AI-oversættelse er en hjælp; menneskelig gennemgang er påkrævet. Det originale dokument forbliver primært.",
    },
    {
      id: "audit-support",
      title: "Adgang til revision og support",
      goal: "Sporbar log; kontrolleret supportadgang til fejlfinding.",
      appFoundation: "Hændelseslogning for rejse- og dokumenthandlinger; auditable supportsessioner.",
      backendDependency: "Revisionseksport, supportadgangspolitik, virksomhedstilladelsesmatrix.",
      disclaimer: "Revisionsloggen er ikke automatisk juridisk bevis.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — ansvarlig brug",
      body: "ADR og tunneldata er hjælpeoplysninger. Officielle kilder, tabeller og aktuelle lokale regler skal altid verificeres. ViaNexis erstatter ikke lovgivning, ADR uddannelse, virksomhedens farligt gods officer eller myndighedsbeslutninger.",
    },
    aiOcr: {
      title: "AI, OCR & oversættelse",
      body: "AI opsummering, OCR og automatisk oversættelse er hjælpeværktøjer. Menneskelig gennemgang er påkrævet. Det originale dokument og meddelelsen forbliver primære. Ikke juridisk rådgivning og ikke certificeret oversættelse.",
    },
    efti: {
      title: "eFTI og deling af autoriteter",
      body: "ViaNexis er ikke en certificeret eFTI platform. Det lover ikke myndighedsaccept i alle lande. eFTI-klar fundament betyder teknisk beredskab - ikke et certifikat eller en licens.",
    },
  },
  home: {
    problem: {
      title: "Hverdagens logistiske udfordringer",
      subtitle: "Når dokumenter, underskrifter og begivenheder er spredt, lider sporbarhed og bevis.",
      cards: [
        {
          title: "Spredte dokumenter",
          description: "Rejsepapirer i e-mail, chat eller papir - svære at linke til faktiske begivenheder.",
        },
        {
          title: "Manglende underskrifter",
          description: "Forsinkede eller manglende underskrifter forsinker lukningen og øger tvistrisikoen.",
        },
        {
          title: "Svært at bevise begivenheder",
          description: "Afhentning, levering, palleudveksling, hændelse — uden strukturerede logfiler, svært at spore.",
        },
        {
          title: "Flersprogede hold",
          description: "Daglige meddelelsesmisforståelser — opbevaring af original tekst og gennemgået oversættelse påkrævet.",
        }
      ],
    },
    modules: {
      title: "Platform moduler",
      subtitle: "Mål, app-side-fundament, backend/admin-afhængighed - med juridisk sikker formulering.",
    },
    pallet: {
      title: "Udveksling af paller og emballage",
      subtitle: "Separate moduler, der kan skiftes fra firmaet - offline gem til revision.",
    },
    notifications: {
      title: "Beskeder og notifikationer",
      subtitle: "App-side fundament klar - produktions-push er en separat backend-afhængighed.",
      cards: [
        {
          title: "Underretningshændelsestyper",
          description: "Ny besked, turændring, dokumentopgave, synkroniseringsproblem.",
        },
        {
          title: "Tryk på routing og PIN",
          description: "Åbn målskærmen fra meddelelsen; dybt link efter PIN.",
        },
        {
          title: "Privatsikker låseskærm",
          description: "Fuldt dokument- eller beskedindhold vises ikke som standard på låseskærmen.",
        }
      ],
      backendDepTitle: "Backend-afhængighed",
      backendDepBody: "Produktions-push (FCM/APNs), registrering af enhedstoken og afsendelse på serversiden er ikke live endnu - separat integration påkrævet.",
    },
    disclaimersSection: {
      title: "Ansvarlig brug — vigtige meddelelser",
    },
    security: {
      title: "Beskyttelse og kontrol",
      subtitle: "Virksomheds- og førerbeskyttelse med struktureret dokumentation.",
      cards: [
        {
          title: "Virksomhedsbeskyttelse",
          description: "Kravbaseret dokumentation, reviderbare hændelser, kontrolleret adgang.",
        },
        {
          title: "Driver beskyttelse",
          description: "Struktureret proces til dokumentation af hændelser i tvister.",
        },
        {
          title: "Dokumentations rygrad",
          description: "Trip-linkede papirer og begivenheder i ét system.",
        },
        {
          title: "Reviderbare begivenheder",
          description: "Hvem gjorde hvad hvornår - logget og søgbar.",
        }
      ],
      notPromiseTitle: "Ikke et løfte",
      notPromiseBody: "ViaNexis lover ikke automatisk juridisk beviskraft. Juridisk vurdering afhænger af kontekst.",
    },
    contact: {
      title: "Kontakt og intern test",
      subtitle: "Kontrolleret adgang — ikke automatisk registrering, ingen offentlig Play-download.",
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
      consentNote: "Systemet håndterer dokumenter, driverarbejdsgange, virksomhedsdata og tilladelser - hver adgang gennemgås individuelt.",
      contactLink: "Kontakt os →",
    },
  },
  contactForm: {
    title: "Kontakt os",
    subtitle: "Interesse for ViaNexis platformen — ikke automatisk registrering.",
    name: "Navn *",
    company: "Virksomhed *",
    email: "e-mail *",
    phone: "Telefon",
    message: "Besked *",
    interestType: "Interessetype *",
    interestPlaceholder: "Vælge...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Driver app",
      },
      {
        value: "company-admin",
        label: "Firma / Admin platform",
      },
      {
        value: "dokumenter",
        label: "Dokumenthåndtering",
      },
      {
        value: "pallet-packaging",
        label: "Palle / emballage",
      },
      {
        value: "adr-customs",
        label: "ADR / toldsupport",
      },
      {
        value: "andre",
        label: "Andre",
      }
    ],
    consent: "Jeg accepterer, at ViaNexis behandler de angivne data udelukkende til kontaktformål. *",
    submit: "Send besked",
    submitMailto: "Send e-mail",
    intakeDisabled: "Online indsendelse af leads er ved at blive udarbejdet. Brug e-mail-kontakt eller prøv igen senere.",
    successTitle: "Besked modtaget",
    successBody: "Tak for din interesse. Vores team vil kontakte dig. Adgangsaktivering er ikke automatisk.",
    newSubmission: "Ny besked",
    errors: {
      name: "Navn er påkrævet.",
      company: "Firma er påkrævet.",
      email: "E-mail er påkrævet.",
      emailInvalid: "Indtast en gyldig e-mailadresse.",
      message: "Besked er påkrævet.",
      interest: "Vælg en interessetype.",
      consent: "Samtykke er påkrævet.",
      submitFailed: "Beskeden kunne ikke sendes. Prøv e-mail i stedet.",
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
        title: "Myndighedsinspektionspakke",
        description: "Trip-linkede dokumenter og begivenheder i en omfangsbegrænset delt pakke.",
      },
      {
        title: "Omfang / tidsbegrænset adgang",
        description: "QR-baseret begrænset adgang — ikke offentlig.",
      },
      {
        title: "Revidere",
        description: "Logget adgang og deling af begivenheder.",
      },
      {
        title: "eFTI-klar foundation",
        description: "Teknisk grundlag for fremtidig integration — ikke certificering.",
      }
    ],
  },
  legal: legalDa,
};
