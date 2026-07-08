import type { SiteContent } from "../types";
import { legalNb } from "./legal/nb";

export const contentNb: SiteContent = {
  meta: {
    title: "ViaNexis Driver and company transport operations",
    description: "Driver app, company control, document management, messaging, notifications, and multilingual trip workflows in one system. Internal testing preparation in progress.",
    ogLocale: "nb_NO",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Features",
    driverApp: "Driver app",
    companyPortal: "Company portal",
    documents: "Documents",
    authorityEfti: "Authority / eFTI",
    security: "Security",
    pilot: "Pilot access",
    contact: "Contact",
    requestAccess: "Request access",
    menuOpen: "Open menu",
  },
  footer: {
    tagline: "Digital transport evidence and driver operations platform for transport companies. eFTI-ready foundation — not a certified eFTI platform.",
    product: "Product",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    terms: "Terms of use",
    disclaimers: "Responsible use",
    dataContact: "Data protection contact",
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
        value: "Trip + offline",
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
        value: "Internal test prep",
      }
    ],
  },
  platformStatus: {
    title: "Current status",
    items: [
      "Google Play internal testing preparation in progress — not a public store download.",
      "Driver app release readiness and Samsung UAT in progress.",
      "Production backend, push notifications, and partner integrations are being connected gradually."
    ],
    disclaimer: "ViaNexis does not claim the system is live, certified, or officially accepted in every country.",
  },
  moduleLabels: {
    goal: "Goal",
    appFoundation: "App-side foundation",
    backendDependency: "Backend / admin dependency",
    important: "Important",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Driver app",
      goal: "Let drivers handle trip-linked tasks, documents, and events on mobile — online and offline.",
      appFoundation: "Trip list and details, document upload, signature capture, checklists, incident logging, offline save and sync, PIN-protected session.",
      backendDependency: "Live API, tenant scope, trip and document sync, company settings resolution.",
    },
    {
      id: "company-admin",
      title: "Company / Admin control",
      goal: "Let transport companies manage trips, users, permissions, and workflows from one portal.",
      appFoundation: "Driver-side data and actions reflect company rules.",
      backendDependency: "Web company portal, platform admin app, roles, trip management, document requirements, company exchange settings.",
    },
    {
      id: "cmr-documents",
      title: "Digital CMR & documents",
      goal: "Trip-linked documents — CMR, delivery note, invoice, vehicle and driver papers — managed in a structured way.",
      appFoundation: "Document upload, scan/photo, trip assignment, requirement-based tasks, primary document concept.",
      backendDependency: "Document storage, metadata, signature rules, authority sharing with scope limits.",
      disclaimer: "Digital documents do not automatically carry legal probative force. Acceptance varies by country and customer.",
    },
    {
      id: "completed-package",
      title: "Completed trip package",
      goal: "Summarise completed-trip evidence in an exportable package.",
      appFoundation: "Trip closure, local data, and synced events as the basis for package assembly.",
      backendDependency: "Completed trip package generation, PDF export, audit export. Some sections (e.g. pallet/packaging PDF) remain dependencies.",
      disclaimer: "The package supports documentation; it does not replace the company's legal assessment or authority proceedings.",
    },
    {
      id: "messaging-notifications",
      title: "Messaging & notifications",
      goal: "Trip-linked communication and alerts for important driver events.",
      appFoundation: "Message list, trip-linked threads, app-side notification foundation. Usable for: new message, trip change, document task, sync issue.",
      backendDependency: "Production push (FCM/APNs), device token registration, server-side dispatch — separate dependency, not live yet.",
      disclaimer: "Target screen opens after PIN. Production push does not claim every event arrives instantly.",
    },
    {
      id: "pallet-packaging",
      title: "Pallet & packaging exchange",
      goal: "Record pallet and packaging exchanges per stop with quantities, shortage, damage, and dispute.",
      appFoundation: "Separate pallet and packaging modules. Company-toggleable. Company can preset items; driver can add custom packaging if allowed. Offline save and sync.",
      backendDependency: "Exchange settings API, record sync, portal admin UI, completed package PDF section — latter is a dependency.",
      disclaimer: "PDF evidence section is not fully ready in all cases. Recording supports dispute documentation but does not decide disputes.",
    },
    {
      id: "adr-border",
      title: "ADR / border support",
      goal: "Quick helper information for ADR and border/customs context — alongside verification of official sources.",
      appFoundation: "ADR information, UN number search, tunnel code helper, border/customs metadata linked to trips.",
      backendDependency: "ADR database updates, country-specific rule metadata, border checkpoint data.",
      disclaimer: "ADR and tunnel data are helper information. The app does not replace legislation, training, the company's DG officer, or authority decisions.",
    },
    {
      id: "truck-map",
      title: "Truck map foundation",
      goal: "Fleet and trip overview on map — operational orientation.",
      appFoundation: "Map-based overview, trip and vehicle context display.",
      backendDependency: "Telematics provider integration, routing provider, live position — gradual integration.",
      disclaimer: "The map does not guarantee compliance with legal restrictions or permits.",
    },
    {
      id: "multilingual",
      title: "Multilingual operation",
      goal: "Multilingual teams on one platform.",
      appFoundation: "Driver app multilingual UI, original message retention, translation as assistance.",
      backendDependency: "Portal and public site locale expansion, translation review workflow.",
      disclaimer: "Machine or AI translation is assistive; human review is required. The original document remains primary.",
    },
    {
      id: "audit-support",
      title: "Audit & support access",
      goal: "Traceable log; controlled support access for troubleshooting.",
      appFoundation: "Event logging for trip and document actions; auditable support sessions.",
      backendDependency: "Audit export, support access policy, enterprise permission matrix.",
      disclaimer: "The audit log is not automatic legal proof.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — responsible use",
      body: "ADR and tunnel data are helper information. Official sources, tables, and current local rules must always be verified. ViaNexis does not replace legislation, ADR training, the company's dangerous-goods officer, or authority decisions.",
    },
    aiOcr: {
      title: "AI, OCR & translation",
      body: "AI summarisation, OCR, and automatic translation are assistive tools. Human review is required. The original document and message remain primary. Not legal advice and not certified translation.",
    },
    efti: {
      title: "eFTI & authority sharing",
      body: "ViaNexis is not a certified eFTI platform. It does not promise authority acceptance in every country. eFTI-ready foundation means technical preparedness — not a certificate or licence.",
    },
  },
  home: {
    problem: {
      title: "Everyday logistics challenges",
      subtitle: "When documents, signatures, and events are scattered, traceability and proof suffer.",
      cards: [
        {
          title: "Scattered documents",
          description: "Trip papers in email, chat, or paper — hard to link to actual events.",
        },
        {
          title: "Missing signatures",
          description: "Late or missing signatures delay closure and increase dispute risk.",
        },
        {
          title: "Hard-to-prove events",
          description: "Pickup, delivery, pallet exchange, incident — without structured logs, hard to trace.",
        },
        {
          title: "Multilingual teams",
          description: "Daily message misunderstandings — original text retention and reviewed translation required.",
        }
      ],
    },
    modules: {
      title: "Platform modules",
      subtitle: "Goal, app-side foundation, backend/admin dependency — with legal-safe wording.",
    },
    pallet: {
      title: "Pallet & packaging exchange",
      subtitle: "Separate modules, company-toggleable — offline save toward audit.",
    },
    notifications: {
      title: "Messaging & notifications",
      subtitle: "App-side foundation ready — production push is a separate backend dependency.",
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
      backendDepBody: "Production push (FCM/APNs), device token registration, and server-side dispatch are not live yet — separate integration required.",
    },
    disclaimersSection: {
      title: "Responsible use — important notices",
    },
    security: {
      title: "Protection and control",
      subtitle: "Company and driver protection with structured documentation.",
      cards: [
        {
          title: "Company protection",
          description: "Requirement-based documentation, auditable events, controlled access.",
        },
        {
          title: "Driver protection",
          description: "Structured process for documenting events in disputes.",
        },
        {
          title: "Documentation backbone",
          description: "Trip-linked papers and events in one system.",
        },
        {
          title: "Auditable events",
          description: "Who did what when — logged and searchable.",
        }
      ],
      notPromiseTitle: "Not a promise",
      notPromiseBody: "ViaNexis does not promise automatic legal probative force. Legal assessment depends on context.",
    },
    contact: {
      title: "Contact and internal testing",
      subtitle: "Controlled access — not automatic registration, no public Play download.",
      body: "The driver app is in Google Play internal testing preparation. Release readiness and Samsung UAT in progress. Activation is not automatic.",
      consentNote: "The system handles documents, driver workflows, company data, and permissions — every access is individually reviewed.",
      contactLink: "Contact us →",
    },
  },
  contactForm: {
    title: "Contact us",
    subtitle: "Interest in the ViaNexis platform — not automatic registration.",
    name: "Name *",
    company: "Company *",
    email: "Email *",
    phone: "Phone",
    message: "Message *",
    interestType: "Interest type *",
    interestPlaceholder: "Select...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Driver app",
      },
      {
        value: "company-admin",
        label: "Company / Admin platform",
      },
      {
        value: "documents",
        label: "Document management",
      },
      {
        value: "pallet-packaging",
        label: "Pallet / packaging",
      },
      {
        value: "adr-customs",
        label: "ADR / customs support",
      },
      {
        value: "other",
        label: "Other",
      }
    ],
    consent: "I agree that ViaNexis processes the provided data solely for contact purposes. *",
    submit: "Send message",
    submitMailto: "Send email",
    intakeDisabled: "Online lead submission is being prepared. Use email contact or try again later.",
    successTitle: "Message received",
    successBody: "Thank you for your interest. Our team will contact you. Access activation is not automatic.",
    newSubmission: "New message",
    errors: {
      name: "Name is required.",
      company: "Company is required.",
      email: "Email is required.",
      emailInvalid: "Enter a valid email address.",
      message: "Message is required.",
      interest: "Select an interest type.",
      consent: "Consent is required.",
      submitFailed: "Message could not be sent. Try email instead.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Authority inspection package",
        description: "Trip-linked documents and events in a scope-limited shared package.",
      },
      {
        title: "Scope / time limited access",
        description: "QR-based limited access — not public.",
      },
      {
        title: "Audit",
        description: "Logged access and sharing events.",
      },
      {
        title: "eFTI-ready foundation",
        description: "Technical base for future integration — not certification.",
      }
    ],
  },
  legal: legalNb,
};
