import type { SiteContent } from "../types";
import { legalSq } from "./legal/sq";

export const contentSq: SiteContent = {
  meta: {
    title: "ViaNexis Operacionet e transportit të shoferit dhe kompanisë",
    description: "Aplikacioni i shoferit, kontrolli i kompanisë, menaxhimi i dokumenteve, mesazhet, njoftimet dhe flukset e punës të udhëtimit shumëgjuhësh në një sistem. Përgatitja e testimit të brendshëm në vazhdim e sipër.",
    ogLocale: "sq_AL",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Veçoritë",
    driverApp: "Aplikacioni i shoferit",
    companyPortal: "Portali i kompanisë",
    documents: "Dokumentet",
    authorityEfti: "Autoriteti / eFTI",
    security: "Siguria",
    pilot: "Qasje pilot",
    contact: "Kontaktoni",
    requestAccess: "Kërko qasje",
    menuOpen: "Hap menunë",
  },
  footer: {
    tagline: "Dëshmia dixhitale e transportit dhe platforma e operacioneve të shoferit për kompanitë e transportit. eFTI-fondacion gati — jo një platformë e certifikuar eFTI.",
    product: "Produkti",
    legal: "Ligjore",
    legalNotice: "Njoftim ligjor",
    privacy: "Politika e privatësisë",
    terms: "Kushtet e përdorimit",
    disclaimers: "Përdorimi i përgjegjshëm",
    dataContact: "Kontakt për mbrojtjen e të dhënave",
    copyright: "Jo një platformë e certifikuar eFTI. Nuk premton pranim nga autoriteti, forcë automatike provuese ligjore, shërbime të përsosura OCR/AI/përkthim, ose shërbime emergjente/SOS. Nuk ka shkarkim publik në Play Store.",
  },
  hero: {
    title: "ViaNexis — evidenca dixhitale të transportit dhe platforma e operimit të shoferit",
    subtitle: "Aplikacioni i shoferit, kontrolli i kompanisë, menaxhimi i dokumenteve, mesazhet, njoftimet dhe flukset e punës të udhëtimit shumëgjuhësh në një sistem.",
    primaryCta: "Na kontaktoni",
    secondaryCta: "Përgatitja e testimit të brendshëm në vazhdim e sipër",
    stats: [
      {
        label: "Aplikacioni i shoferit",
        value: "Udhëtim + jashtë linje",
      },
      {
        label: "Dokumentet",
        value: "CMR + audit",
      },
      {
        label: "Mesazhimi",
        value: "Shumëgjuhëshe",
      },
      {
        label: "Statusi",
        value: "Përgatitja e testit të brendshëm",
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
    goal: "Qëllimi",
    appFoundation: "Baza nga ana e aplikacionit",
    backendDependency: "Mbështetja/varësia nga administratori",
    important: "E rëndësishme",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikacioni i shoferit",
      goal: "Lërini drejtuesit të trajtojnë detyrat, dokumentet dhe ngjarjet e lidhura me udhëtimet në celular - në linjë dhe jashtë linje.",
      appFoundation: "Lista e udhëtimeve dhe detajet, ngarkimi i dokumenteve, kapja e nënshkrimeve, listat kontrolluese, regjistrimi i incidenteve, ruajtja dhe sinkronizimi jashtë linje, sesioni i mbrojtur PIN.",
      backendDependency: "Live API, fushëveprimi i qiramarrësit, sinkronizimi i udhëtimit dhe dokumenteve, zgjidhja e cilësimeve të kompanisë.",
    },
    {
      id: "company-admin",
      title: "Kontrolli i kompanisë / administratorit",
      goal: "Lërini kompanitë e transportit të menaxhojnë udhëtimet, përdoruesit, lejet dhe rrjedhat e punës nga një portal.",
      appFoundation: "Të dhënat dhe veprimet nga ana e shoferit pasqyrojnë rregullat e kompanisë.",
      backendDependency: "Portali i kompanisë në ueb, aplikacioni i administratorit të platformës, rolet, menaxhimi i udhëtimit, kërkesat e dokumenteve, cilësimet e shkëmbimit të kompanisë.",
    },
    {
      id: "cmr-documents",
      title: "Dixhitale CMR & dokumente",
      goal: "Dokumentet e lidhura me udhëtimin — CMR, fletë-dorëzimi, fatura, dokumentet e automjetit dhe shoferit — të menaxhuara në mënyrë të strukturuar.",
      appFoundation: "Ngarkimi i dokumentit, skanimi/foto, caktimi i udhëtimit, detyrat e bazuara në kërkesa, koncepti kryesor i dokumentit.",
      backendDependency: "Ruajtja e dokumenteve, meta të dhënat, rregullat e nënshkrimit, ndarja e autoritetit me kufijtë e fushëveprimit.",
      disclaimer: "Dokumentet dixhitale nuk kanë automatikisht fuqi provuese ligjore. Pranimi ndryshon sipas vendit dhe klientit.",
    },
    {
      id: "completed-package",
      title: "Paketa e përfunduar e udhëtimit",
      goal: "Përmblidhni dëshmitë e udhëtimit të përfunduar në një paketë të eksportueshme.",
      appFoundation: "Mbyllja e udhëtimit, të dhënat lokale dhe ngjarjet e sinkronizuara si bazë për montimin e paketës.",
      backendDependency: "Gjenerimi i kompletuar i paketës së udhëtimit, eksporti PDF, eksporti i auditimit. Disa seksione (p.sh. paleta/paketimi PDF) mbeten varësi.",
      disclaimer: "Paketa mbështet dokumentacionin; ai nuk zëvendëson vlerësimin ligjor të shoqërisë ose procedurat e autoritetit.",
    },
    {
      id: "messaging-notifications",
      title: "Mesazhe dhe njoftime",
      goal: "Komunikimi i lidhur me udhëtimin dhe sinjalizimet për ngjarje të rëndësishme të shoferit.",
      appFoundation: "Lista e mesazheve, temat e lidhura me udhëtimin, baza e njoftimeve nga ana e aplikacionit. Përdoret për: mesazh të ri, ndryshim udhëtimi, detyrë dokumenti, problem sinkronizimi.",
      backendDependency: "Pushtimi i prodhimit (FCM/APNs), regjistrimi i tokenit të pajisjes, dërgimi nga ana e serverit — varësi e veçantë, ende jo e drejtpërdrejtë.",
      disclaimer: "Ekrani i synuar hapet pas PIN. Pushtimi i prodhimit nuk pretendon se çdo ngjarje arrin menjëherë.",
    },
    {
      id: "pallet-packaging",
      title: "Shkëmbim paletash dhe paketimi",
      goal: "Regjistroni shkëmbimet e paletave dhe paketimeve për ndalesë me sasi, mungesë, dëmtim dhe mosmarrëveshje.",
      appFoundation: "Module të ndara të paletës dhe paketimit. Kompania e ndërrueshme. Kompania mund të paracaktojë artikujt; shoferi mund të shtojë paketim të personalizuar nëse lejohet. Ruajtja dhe sinkronizimi jashtë linje.",
      backendDependency: "Cilësimet e shkëmbimit API, sinkronizimi i regjistrimeve, UI i administratorit të portalit, seksioni i plotësuar i paketës PDF — kjo e fundit është një varësi.",
      disclaimer: "Seksioni i provave PDF nuk është plotësisht i gatshëm në të gjitha rastet. Regjistrimi mbështet dokumentacionin e mosmarrëveshjeve, por nuk vendos për mosmarrëveshjet.",
    },
    {
      id: "adr-border",
      title: "ADR / mbështetje kufitare",
      goal: "Informacion i shpejtë ndihmës për ADR dhe kontekstin kufitar/doganor — krahas verifikimit të burimeve zyrtare.",
      appFoundation: "Informacioni ADR, kërkimi i numrave të OKB-së, ndihmësi i kodit të tunelit, meta të dhënat kufitare/doganore të lidhura me udhëtimet.",
      backendDependency: "ADR përditësimet e bazës së të dhënave, meta të dhënat e rregullave specifike për vendin, të dhënat e pikave të kontrollit kufitar.",
      disclaimer: "ADR dhe të dhënat e tunelit janë informacion ndihmës. Aplikacioni nuk zëvendëson legjislacionin, trajnimin, zyrtarin e Drejtorisë së Përgjithshme të kompanisë ose vendimet e autoritetit.",
    },
    {
      id: "truck-map",
      title: "Themeli i hartës së kamionit",
      goal: "Pasqyrë e flotës dhe e udhëtimit në hartë — orientimi operacional.",
      appFoundation: "Pamje e përgjithshme e bazuar në hartë, udhëtimi dhe shfaqja e kontekstit të automjetit.",
      backendDependency: "Integrimi i ofruesit të telematikës, ofruesi i rrugëzimit, pozicioni i drejtpërdrejtë — integrimi gradual.",
      disclaimer: "Harta nuk garanton respektimin e kufizimeve ose lejeve ligjore.",
    },
    {
      id: "shumëgjuhëshe",
      title: "Operacioni shumëgjuhësh",
      goal: "Ekipet shumëgjuhëshe në një platformë.",
      appFoundation: "UI shumëgjuhëshe e aplikacionit të shoferit, mbajtja e mesazheve origjinale, përkthimi si ndihmë.",
      backendDependency: "Zgjerimi i vendndodhjes së portalit dhe faqes publike, rrjedha e punës për shqyrtimin e përkthimit.",
      disclaimer: "Përkthimi me makinë ose AI është ndihmës; kërkohet rishikimi njerëzor. Dokumenti origjinal mbetet primar.",
    },
    {
      id: "audit-support",
      title: "Qasje në auditim dhe mbështetje",
      goal: "regjistër i gjurmueshëm; akses i kontrolluar në mbështetje për zgjidhjen e problemeve.",
      appFoundation: "Regjistrimi i ngjarjeve për veprimet e udhëtimit dhe dokumenteve; seancat mbështetëse të auditueshme.",
      backendDependency: "Eksporti i auditimit, politika e aksesit në mbështetje, matrica e lejeve të ndërmarrjes.",
      disclaimer: "Regjistri i auditimit nuk është provë ligjore automatike.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — përdorim i përgjegjshëm",
      body: "ADR dhe të dhënat e tunelit janë informacion ndihmës. Burimet zyrtare, tabelat dhe rregullat aktuale lokale duhet gjithmonë të verifikohen. ViaNexis nuk zëvendëson legjislacionin, trajnimin ADR, zyrtarin e kompanisë për mallrat e rrezikshme ose vendimet e autoritetit.",
    },
    aiOcr: {
      title: "AI, OCR & përkthim",
      body: "Përmbledhja AI, OCR dhe përkthimi automatik janë mjete ndihmëse. Kërkohet rishikimi njerëzor. Dokumenti dhe mesazhi origjinal mbeten primare. Jo këshilla ligjore dhe përkthim jo i certifikuar.",
    },
    efti: {
      title: "eFTI dhe ndarjen e autoritetit",
      body: "ViaNexis nuk është një platformë e certifikuar eFTI. Nuk premton pranim të autoritetit në çdo vend. eFTI-fondacioni i gatshëm do të thotë gatishmëri teknike - jo një certifikatë apo licencë.",
    },
  },
  home: {
    problem: {
      title: "Sfidat e përditshme të logjistikës",
      subtitle: "Kur dokumentet, nënshkrimet dhe ngjarjet shpërndahen, gjurmueshmëria dhe prova vuajnë.",
      cards: [
        {
          title: "Dokumentet e shpërndara",
          description: "Dokumentet e udhëtimit në email, chat ose letër — vështirë për t'u lidhur me ngjarjet aktuale.",
        },
        {
          title: "Mungojnë nënshkrimet",
          description: "Nënshkrimet e vonuara ose të munguara vonojnë mbylljen dhe rrisin rrezikun e mosmarrëveshjeve.",
        },
        {
          title: "Ngjarje të vështira për t'u vërtetuar",
          description: "Marrja, dorëzimi, shkëmbimi i paletave, incidenti — pa shkrime të strukturuara, vështirë për t'u gjurmuar.",
        },
        {
          title: "Ekipet shumëgjuhëshe",
          description: "Keqkuptime ditore të mesazheve - kërkohet mbajtja e tekstit origjinal dhe përkthimi i rishikuar.",
        }
      ],
    },
    modules: {
      title: "Modulet e platformës",
      subtitle: "Qëllimi, themeli në anën e aplikacionit, varësia nga mbështetja/administratori — me formulim të sigurt nga ana ligjore.",
    },
    pallet: {
      title: "Shkëmbim paletash dhe paketimi",
      subtitle: "Module të veçanta, të ndërrueshme nga kompania — kurse jashtë linje drejt auditimit.",
    },
    notifications: {
      title: "Mesazhe dhe njoftime",
      subtitle: "Fondacioni i gatshëm nga ana e aplikacionit — shtytja e prodhimit është një varësi e veçantë nga prapavija.",
      cards: [
        {
          title: "Llojet e ngjarjeve të njoftimit",
          description: "Mesazh i ri, ndryshim udhëtimi, detyrë dokumenti, problem sinkronizimi.",
        },
        {
          title: "Trokit \"Rruga\" dhe PIN",
          description: "Hapni ekranin e synuar nga njoftimi; lidhje e thellë pas PIN.",
        },
        {
          title: "Ekrani i kyçjes i sigurt për privatësinë",
          description: "Përmbajtja e plotë e dokumentit ose mesazhit nuk shfaqet si parazgjedhje në ekranin e kyçjes.",
        }
      ],
      backendDepTitle: "Varësia nga prapavija",
      backendDepBody: "Pushtimi i prodhimit (FCM/APNs), regjistrimi i tokenit të pajisjes dhe dërgimi nga ana e serverit nuk janë ende të drejtpërdrejta — kërkohet një integrim i veçantë.",
    },
    disclaimersSection: {
      title: "Përdorimi i përgjegjshëm - njoftime të rëndësishme",
    },
    security: {
      title: "Mbrojtje dhe kontroll",
      subtitle: "Mbrojtja e kompanisë dhe shoferit me dokumentacion të strukturuar.",
      cards: [
        {
          title: "Mbrojtja e kompanisë",
          description: "Dokumentacioni i bazuar në kërkesat, ngjarjet e auditueshme, aksesi i kontrolluar.",
        },
        {
          title: "Mbrojtja e shoferit",
          description: "Procesi i strukturuar për dokumentimin e ngjarjeve në mosmarrëveshje.",
        },
        {
          title: "Shtylla e dokumentacionit",
          description: "Dokumentet dhe ngjarjet e lidhura me udhëtimin në një sistem.",
        },
        {
          title: "Ngjarjet e auditueshme",
          description: "Kush bëri çfarë kur - i regjistruar dhe i kërkueshëm.",
        }
      ],
      notPromiseTitle: "Jo një premtim",
      notPromiseBody: "ViaNexis nuk premton forcë automatike provuese ligjore. Vlerësimi ligjor varet nga konteksti.",
    },
    contact: {
      title: "Kontakti dhe testimi i brendshëm",
      subtitle: "Qasje e kontrolluar - jo regjistrim automatik, pa shkarkim publik i Play.",
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
      consentNote: "Sistemi trajton dokumentet, flukset e punës së drejtuesve, të dhënat e kompanisë dhe lejet - çdo akses shqyrtohet individualisht.",
      contactLink: "Na kontaktoni →",
    },
  },
  contactForm: {
    title: "Na kontaktoni",
    subtitle: "Interesi në platformën ViaNexis — jo regjistrim automatik.",
    name: "emri *",
    company: "Kompania *",
    email: "email *",
    phone: "Telefoni",
    message: "mesazh *",
    interestType: "Lloji i interesit *",
    interestPlaceholder: "Zgjidh...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikacioni i shoferit",
      },
      {
        value: "company-admin",
        label: "Platforma e kompanisë / administratorit",
      },
      {
        value: "dokumentet",
        label: "Menaxhimi i dokumenteve",
      },
      {
        value: "pallet-packaging",
        label: "Paletë / paketim",
      },
      {
        value: "adr-customs",
        label: "ADR / mbështetje doganore",
      },
      {
        value: "tjera",
        label: "Të tjera",
      }
    ],
    consent: "Jam dakord që ViaNexis përpunon të dhënat e dhëna vetëm për qëllime kontakti. *",
    submit: "Dërgo mesazh",
    submitMailto: "Dërgo email",
    intakeDisabled: "Dorëzimi i plumbit në internet është duke u përgatitur. Përdor kontaktin me email ose provo sërish më vonë.",
    successTitle: "Mesazhi u mor",
    successBody: "Faleminderit për interesimin tuaj. Ekipi ynë do t'ju kontaktojë. Aktivizimi i aksesit nuk është automatik.",
    newSubmission: "Mesazh i ri",
    errors: {
      name: "Kërkohet emri.",
      company: "Kërkohet kompani.",
      email: "Kërkohet email.",
      emailInvalid: "Fut një adresë të vlefshme emaili.",
      message: "Kërkohet mesazh.",
      interest: "Zgjidhni një lloj interesi.",
      consent: "Kërkohet pëlqimi.",
      submitFailed: "Mesazhi nuk mund të dërgohej. Provo email në vend.",
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
        title: "Paketa e inspektimit të autoritetit",
        description: "Dokumentet dhe ngjarjet e lidhura me udhëtimin në një paketë të përbashkët me shtrirje të kufizuar.",
      },
      {
        title: "Fushëveprimi / akses i kufizuar në kohë",
        description: "Qasje e kufizuar e bazuar në QR — jo publike.",
      },
      {
        title: "Auditimi",
        description: "Qasja e regjistruar dhe ndarja e ngjarjeve.",
      },
      {
        title: "eFTI-bazë e gatshme",
        description: "Baza teknike për integrimin e ardhshëm - jo certifikim.",
      }
    ],
  },
  legal: legalSq,
};
