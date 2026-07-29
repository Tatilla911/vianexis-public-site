import type { SiteContent } from "../types";
import { legalNb } from "./legal/nb";

export const contentNb: SiteContent = {
  meta: {
    title: "ViaNexis Sjåfør og firmatransport",
    description: "Driver app, company control, document management, messaging, notifications, and multilingual trip workflows in one system. Internal testing preparation in progress.",
    ogLocale: "nb_NO",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Features",
    driverApp: "Driver app",
    companyPortal: "Bedriftsportal",
    documents: "Documents",
    authorityEfti: "Myndighet / eFTI",
    security: "Security",
    pilot: "Pilot access",
    contact: "Contact",
    requestAccess: "Be om tilgang",
    menuOpen: "Open menu",
  },
  footer: {
    tagline: "Digital transport evidence and driver operations platform for transport companies. eFTI-ready foundation — not a certified eFTI platform.",
    product: "Product",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Personvernerklæring",
    terms: "Terms of use",
    disclaimers: "Ansvarlig bruk",
    dataContact: "Databeskyttelseskontakt",
    copyright: "Not a certified eFTI platform. Does not promise authority acceptance, automatic legal probative force, flawless OCR/AI/translation, or emergency/SOS services. No public Play Store download.",
  },
  hero: {
    title: "ViaNexis — digital transport evidence and driver operations platform",
    subtitle: "Driver app, company control, document management, messaging, notifications, and multilingual trip workflows in one system.",
    primaryCta: "Contact us",
    secondaryCta: "Internal testing preparation in progress",
    stats: [
      {
        label: "Driver app",
        value: "Tur + offline",
      },
      {
        label: "Documents",
        value: "CMR + audit",
      },
      {
        label: "Messaging",
        value: "Multilingual",
      },
      {
        label: "Status",
        value: "Kontrollert pilot",
      }
    ],
  },
    platformStatus: {
    title: "Kontrollert pilottilgang",
    items: [
      "ViaNexis er for tiden tilgjengelig gjennom et pilotprogram med utvalgte transportører og sjåfører.",
      "Tilgang aktiveres etter individuell diskusjon og godkjenning.",
      "Ingen offentlig app-butikknedlasting.",
    ],
    disclaimer:
      "ViaNexis hevder ikke at systemet er offisielt akseptert eller sertifisert i alle land.",
  },

  moduleLabels: {
    goal: "Goal",
    appFoundation: "Nøkkelegenskaper",
    backendDependency: "Relaterte tjenester",
    important: "Important",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Driver app",
      goal: "La sjåførene håndtere triplenkede oppgaver, dokumenter og hendelser på mobil – online og offline.",
      appFoundation: "Turliste og detaljer, dokumentopplasting, signaturfangst, sjekklister, hendelseslogging, offline lagring og synkronisering, PIN-beskyttet økt.",
      backendDependency: "Live API, tenant scope, trip and document sync, company settings resolution.",
    },
    {
      id: "company-admin",
      title: "Bedrift / Admin kontroll",
      goal: "La transportselskaper administrere reiser, brukere, tillatelser og arbeidsflyter fra én portal.",
      appFoundation: "Data og handlinger på førersiden gjenspeiler selskapets regler.",
      backendDependency: "Web company portal, platform admin app, roles, trip management, document requirements, company exchange settings.",
    },
    {
      id: "cmr-documents",
      title: "Digital CMR og dokumenter",
      goal: "Trip-lenkede dokumenter – CMR, følgeseddel, faktura, kjøretøy og sjåførpapirer – administrert på en strukturert måte.",
      appFoundation: "Dokumentopplasting, skanning/foto, turoppdrag, kravbaserte oppgaver, primært dokumentkonsept.",
      backendDependency: "Document storage, metadata, signature rules, authority sharing with scope limits.",
      disclaimer: "Digitale dokumenter har ikke automatisk rettslig beviskraft. Aksept varierer etter land og kunde.",
    },
    {
      id: "completed-package",
      title: "Gjennomført reisepakke",
      goal: "Oppsummer bevis for fullført tur i en eksporterbar pakke.",
      appFoundation: "Turstenging, lokale data og synkroniserte hendelser som grunnlag for pakkemontering.",
      backendDependency: "Fullført turpakkegenerering, PDF-eksport, revisjonseksport. Noen seksjoner (f.eks. pall/emballasje PDF) forblir avhengige.",
      disclaimer: "Pakken støtter dokumentasjon; den erstatter ikke selskapets juridiske vurdering eller myndighetsbehandling.",
    },
    {
      id: "messaging-notifications",
      title: "Meldinger og varsler",
      goal: "Turkoblet kommunikasjon og varsler for viktige sjåførhendelser.",
      appFoundation: "Meldingsliste, triplenkede tråder, varslingsgrunnlag på appsiden. Brukbar for: ny melding, reiseendring, dokumentoppgave, synkroniseringsproblem.",
      backendDependency: "Varslingsfunksjoner kan aktiveres som en del av pilotprogrammet.",
      disclaimer: "Target screen opens after PIN. Notifications do not claim every event arrives instantly.",
    },
    {
      id: "pallet-packaging",
      title: "Bytte av paller og emballasje",
      goal: "Registrer palle- og emballasjebytte per stopp med mengder, mangel, skader og tvist.",
      appFoundation: "Separate palle- og emballasjemoduler. Selskapsskiftbar. Selskapet kan forhåndsinnstille elementer; sjåføren kan legge til tilpasset emballasje hvis tillatt. Lagre og synkronisere uten nett.",
      backendDependency: "Exchange settings API, record sync, portal admin UI, completed package PDF section — latter is a dependency.",
      disclaimer: "PDF-bevisdelen er ikke helt klar i alle saker. Opptak støtter tvistedokumentasjon, men avgjør ikke tvister.",
    },
    {
      id: "adr-border",
      title: "ADR / grensestøtte",
      goal: "Rask hjelperinformasjon for ADR og grense-/tollkontekst – sammen med verifisering av offisielle kilder.",
      appFoundation: "ADR-informasjon, FN-nummersøk, tunnelkodehjelper, grense-/tollmetadata knyttet til reiser.",
      backendDependency: "ADR-databaseoppdateringer, landsspesifikke regelmetadata, grensesjekkpunktdata.",
      disclaimer: "ADR og tunneldata er hjelpeinformasjon. Appen erstatter ikke lovgivning, opplæring, selskapets DG-offiser eller myndighetsvedtak.",
    },
    {
      id: "truck-map",
      title: "Lastebilkartfundament",
      goal: "Flåte- og turoversikt på kart — operativ orientering.",
      appFoundation: "Kartbasert oversikt, tur- og kjøretøykontekstvisning.",
      backendDependency: "Telematikkleverandørintegrasjon, rutingleverandør, live-posisjon — gradvis integrasjon.",
      disclaimer: "Kartet garanterer ikke overholdelse av lovbegrensninger eller tillatelser.",
    },
    {
      id: "multilingual",
      title: "Flerspråklig drift",
      goal: "Flerspråklige team på én plattform.",
      appFoundation: "Driver-app flerspråklig brukergrensesnitt, oppbevaring av originale meldinger, oversettelse som assistanse.",
      backendDependency: "Portal and public site locale expansion, translation review workflow.",
      disclaimer: "Maskin- eller AI-oversettelse er nyttig; menneskelig vurdering er nødvendig. Originaldokumentet forblir primært.",
    },
    {
      id: "audit-support",
      title: "Tilgang til revisjon og støtte",
      goal: "Sporbar logg; kontrollert støttetilgang for feilsøking.",
      appFoundation: "Hendelseslogging for reise- og dokumenthandlinger; reviderbare støtteøkter.",
      backendDependency: "Audit export, support access policy, enterprise permission matrix.",
      disclaimer: "Revisjonsloggen er ikke automatisk juridisk bevis.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — ansvarlig bruk",
      body: "ADR og tunneldata er hjelpeinformasjon. Offisielle kilder, tabeller og gjeldende lokale regler må alltid verifiseres. ViaNexis erstatter ikke lovgivning, ADR-opplæring, selskapets ansvarlige for farlig gods eller myndighetsvedtak.",
    },
    aiOcr: {
      title: "AI, OCR og oversettelse",
      body: "AI-oppsummering, OCR og automatisk oversettelse er hjelpeverktøy. Menneskelig vurdering er nødvendig. Det originale dokumentet og meldingen forblir primære. Ikke juridisk rådgivning og ikke sertifisert oversettelse.",
    },
    efti: {
      title: "eFTI og myndighetsdeling",
      body: "ViaNexis er ikke en sertifisert eFTI-plattform. Det lover ikke autoritetsgodkjenning i alle land. eFTI-klar fundament betyr teknisk beredskap — ikke et sertifikat eller lisens.",
    },
  },
  home: {
    problem: {
      title: "Hverdagens logistikkutfordringer",
      subtitle: "Når dokumenter, signaturer og hendelser er spredt, lider sporbarhet og bevis.",
      cards: [
        {
          title: "Spredte dokumenter",
          description: "Reisepapirer i e-post, chat eller papir – vanskelig å koble til faktiske hendelser.",
        },
        {
          title: "Mangler signaturer",
          description: "Sene eller manglende signaturer forsinker stengingen og øker risikoen for tvister.",
        },
        {
          title: "Vanskelig å bevise hendelser",
          description: "Henting, levering, pallebytte, hendelse — uten strukturerte logger, vanskelig å spore.",
        },
        {
          title: "Flerspråklige team",
          description: "Daglige meldingsmisforståelser – oppbevaring av original tekst og gjennomgått oversettelse kreves.",
        }
      ],
    },
    modules: {
      title: "Platform modules",
      subtitle: "Detaljerte funksjoner fra sjåførappen til dokumenter og revisjon.",
    },
    pallet: {
      title: "Bytte av paller og emballasje",
      subtitle: "Separate modules, company-toggleable — offline save toward audit.",
    },
    notifications: {
      title: "Meldinger og varsler",
      subtitle: "notifications can be activated as part of the pilot program.",
      cards: [
        {
          title: "Notification event types",
          description: "New message, trip change, document task, sync issue.",
        },
        {
          title: "Tap routing & PIN",
          description: "Open target screen from notification; deep link after PIN.",
        },
        {
          title: "Privacy-safe lockscreen",
          description: "Full document or message content not shown on lockscreen by default.",
        }
      ],
      backendDepTitle: "Backend dependency",
      backendDepBody: "Varslingsfunksjoner kan aktiveres som en del av pilotprogrammet.",
    },
    disclaimersSection: {
      title: "Responsible use — important notices",
    },
    security: {
      title: "Beskyttelse og kontroll",
      subtitle: "Bedrifts- og sjåførbeskyttelse med strukturert dokumentasjon.",
      cards: [
        {
          title: "Bedriftsbeskyttelse",
          description: "Kravbasert dokumentasjon, reviderbare hendelser, kontrollert tilgang.",
        },
        {
          title: "Sjåførbeskyttelse",
          description: "Strukturert prosess for å dokumentere hendelser i tvister.",
        },
        {
          title: "Dokumentasjons ryggrad",
          description: "Trip-lenkede papirer og hendelser i ett system.",
        },
        {
          title: "Reviderbare hendelser",
          description: "Hvem gjorde hva når — logget og søkbar.",
        }
      ],
      notPromiseTitle: "Ikke et løfte",
      notPromiseBody: "ViaNexis lover ikke automatisk juridisk beviskraft. Juridisk vurdering avhenger av kontekst.",
    },
    contact: {
      title: "Contact and internal testing",
      subtitle: "Controlled access — not automatic registration, no public Play download.",
      body: "Tilgang er for tiden tilgjengelig gjennom et kontrollert pilotprogram. Aktivering følger en individuell gjennomgang.",
      consentNote: "Systemet håndterer dokumenter, sjåførarbeidsflyter, firmadata og tillatelser – hver tilgang vurderes individuelt.",
      contactLink: "Contact us →",
    },
  },
  contactForm: {
    title: "Contact us",
    subtitle: "Interesse for ViaNexis-plattformen — ikke automatisk registrering.",
    name: "Name *",
    company: "Company *",
    email: "Email *",
    phone: "Phone",
    message: "Message *",
    interestType: "Interessetype *",
    interestPlaceholder: "Select...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Driver app",
      },
      {
        value: "company-admin",
        label: "Bedrift / Admin plattform",
      },
      {
        value: "documents",
        label: "Dokumenthåndtering",
      },
      {
        value: "pallet-packaging",
        label: "Pall / emballasje",
      },
      {
        value: "adr-customs",
        label: "ADR / tollstøtte",
      },
      {
        value: "other",
        label: "Other",
      }
    ],
    consent: "Jeg godtar at ViaNexis behandler de oppgitte dataene utelukkende for kontaktformål. *",
    submit: "Send message",
    submitMailto: "Send email",
    intakeDisabled: "Online lead innsending er under utarbeidelse. Bruk e-postkontakt eller prøv igjen senere.",
    successTitle: "Melding mottatt",
    successBody: "Takk for interessen. Teamet vårt vil kontakte deg. Tilgangsaktivering er ikke automatisk.",
    newSubmission: "New message",
    errors: {
      name: "Navn er påkrevd.",
      company: "Selskap er påkrevd.",
      email: "E-post er påkrevd.",
      emailInvalid: "Skriv inn en gyldig e-postadresse.",
      message: "Melding er påkrevd.",
      interest: "Velg en interessetype.",
      consent: "Det kreves samtykke.",
      submitFailed: "Meldingen kunne ikke sendes. Prøv e-post i stedet.",
    },
  },
  applicationForms: {
    common: {
      privacy: "Jeg godtar personvernreglene og samtykker til databehandling. *",
      submit: "Send inn søknad",
      submitting: "Submitting…",
      intakeDisabled: "Online søknader er under utarbeidelse. Kontakt support@vianexis.eu eller prøv igjen senere.",
      successTitle: "Søknad mottatt",
      successBody: "Takk. Søknaden din er under vurdering. Tilgang gis ikke før en ViaNexis-administrator godkjenner den.",
      newSubmission: "Ny søknad",
      referenceLabel: "Søknadsreferanse",
      submittedAtLabel: "Submitted at",
      statusLabel: "Status",
      statusUnderReview: "Under review",
      nextStep: "Vi vil kontakte deg etter gjennomgang. Ta vare på søknadsreferansen for støtte.",
      captchaHint: "Fullfør sikkerhetskontrollen før du sender inn.",
      supportContact: "Trenger du hjelp? Kontakt {email}.",
      errors: {
        required: "Dette feltet er obligatorisk.",
        email: "E-post er påkrevd.",
        emailInvalid: "Skriv inn en gyldig e-postadresse.",
        password: "Passordet må være på minst 8 tegn.",
        privacy: "Personverngodkjenning kreves.",
        submitFailed: "Søknaden kunne ikke sendes. Prøv igjen senere.",
        duplicate: "En søknad for dette selskapet eller e-posten er allerede i gang.",
        duplicateWithRef: "En søknad for dette selskapet eller e-posten er allerede under behandling (referanse: {reference}).",
        captchaRequired: "Fullfør sikkerhetskontrollen for å fortsette.",
        captchaInvalid: "Sikkerhetssjekken har utløpt eller mislyktes. Prøv igjen.",
        spam: "Innsending blokkert.",
        network: "Nettverksfeil. Sjekk tilkoblingen og prøv igjen.",
      },
    },
    company: { title: "Bedriftssøknad", subtitle: "Søk om tilgang til ViaNexis bedriftsplattform.", companyName: "Firmanavn *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Kontaktnavn *", contactEmail: "Kontakt e-post *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "Moduler av interesse", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Utsendelsesportal" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Flåte / verksted" },{ value: "pallet_packaging", label: "Pall / emballasje" },{ value: "external_shipper_receiver", label: "Ekstern avsender/mottaker" }], notes: "Notes" },
    driver: { title: "Driverapplikasjon", subtitle: "Selvregistrering – venter på godkjenning før pålogging.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Firmanavn (valgfritt)", companyCode: "Invitasjons-/bedriftskode (valgfritt)", licenseNotes: "Lisens / ADR / GKI notater (valgfritt)" },
    partner: { title: "Partnerinteresse", subtitle: "Avsender, mottaker, lager eller tollpartnerforespørsel.", companyName: "Firmanavn *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Tollmegler" },{ value: "other_partner", label: "Annen partner" }], contactName: "Kontaktnavn *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Myndighetens inspeksjonspakke",
        description: "Triplenkede dokumenter og hendelser i en delt pakke med begrenset omfang.",
      },
      {
        title: "Omfang / tidsbegrenset tilgang",
        description: "QR-basert begrenset tilgang – ikke offentlig.",
      },
      {
        title: "Audit",
        description: "Logget tilgang og deling av hendelser.",
      },
      {
        title: "eFTI-klar fundament",
        description: "Teknisk grunnlag for fremtidig integrasjon — ikke sertifisering.",
      }
    ],
  },
  legal: legalNb,
};
