import type { LegalContent } from "../legal-types";

export const legalEn: LegalContent = {
  versionBadge:
    "Internal testing version — legal expert review in progress",
  privacy: {
    title: "Privacy notice — internal testing version",
    intro:
      "This notice applies during the internal testing and preparation phase of the ViaNexis Driver app and related platform. The service is not a public Play Store download — Google Play internal testing preparation is in progress. The final comprehensive privacy policy will be published after legal review.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Data controller",
      body: "ViaNexis — vianexis.eu. Privacy contact: info@vianexis.eu",
    },
    scope: {
      title: "Scope",
      body: "This notice covers the ViaNexis Driver mobile app, related driver and trip workflows, and the web contact form. The company admin and dispatcher portal are subject to separate contractual and privacy terms.",
    },
    dataCategories: {
      title: "Data we process",
      items: [
        "Account and contact data: name, email, phone, company, role, country.",
        "Driver profile data: identifiers, role, language settings, permissions.",
        "Trip data: trip IDs, status, stops, timestamps, metadata.",
        "Documents: CMR, delivery notes, invoices, photos, scans, digital signatures.",
        "Messages and notifications: trip-linked communication and alert events.",
        "Location: only with user permission and while in use (when-in-use), if the feature is active.",
        "Device and session metadata: device type, OS version, app version, session identifiers.",
        "Diagnostics and logs: technical logs and error reports — if enabled.",
        "Pallet and packaging exchange data: type, quantity, shortage, damage, notes.",
        "ADR / customs helper usage data: searches, views — not official decisions.",
        "Notification permission and future push token: production push (FCM) is a separate backend dependency.",
      ],
    },
    purposes: {
      title: "Purposes of processing",
      items: [
        "Managing trip workflows and documenting performance.",
        "Document management, signatures, and evidence package assembly.",
        "Trip-linked communication and operational notifications.",
        "Security, audit, and traceability.",
        "Controlled support access in an auditable manner.",
        "Preventing and documenting legal and business disputes.",
        "Improving app operation and troubleshooting.",
        "Internal testing, pilot, and access evaluation.",
      ],
    },
    sharing: {
      title: "Data sharing",
      items: [
        "Employer / transport company and authorised admin/dispatcher users — per tenant scope.",
        "Driver's own trip and document data per company rules.",
        "Authorised platform support only with audited, limited, justified access.",
        "Authorities or partners only per legal basis, contract, or company decision.",
        "AI/OCR/translation provider only via backend-controlled future integration, if applied — with human review.",
        "We do not sell personal data. No marketing push.",
      ],
    },
    rights: {
      title: "Your rights",
      items: [
        "Access to your data — via company admin or support channel.",
        "Rectification of inaccurate data.",
        "Erasure where legally possible and company processes allow.",
        "Objection or restriction where legally justified.",
        "Data portability where applicable law provides it.",
        "Complaint to a supervisory authority.",
        "Contact: info@vianexis.eu",
      ],
    },
    notifications: {
      title: "Notifications",
      body: "The app uses operational notifications — not marketing push. Lockscreen text is privacy-safe by default. Production push (FCM/APNs) and device token handling are backend dependencies — may be partial or not live during internal testing. Notification permission is the user's choice.",
    },
    location: {
      title: "Location",
      body: "Location is processed only with user permission and while in use (when-in-use), if the feature is active — for map, own position, and trip evidence purposes. No background tracking in the current state. Location does not guarantee route compliance or legal compliance.",
    },
    importantNotices: {
      title: "Important notices",
      items: [
        "AI, OCR, and automatic translation are assistive tools — human review required.",
        "ADR information is a helper — does not replace official sources or legislation.",
        "ViaNexis is not a certified eFTI platform.",
        "Not an emergency or SOS service.",
        "Digital documents do not automatically carry legal probative force.",
        "Service is in internal testing / preparation — not a public live production system.",
      ],
    },
    dataContact: {
      title: "Privacy contact",
      body: "Privacy questions: info@vianexis.eu. Final controller contact will appear in the published notice.",
    },
    playUrl: "Stable Play Console privacy URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Terms of use — internal testing version",
    intro:
      "These terms apply during the ViaNexis platform internal testing and pilot phase. The service is not a public Play Store product — Google Play internal testing preparation is in progress. Final terms will be published after legal review.",
    sections: [
      {
        title: "Nature of the service",
        body: "ViaNexis provides digital transport evidence and a driver operations platform for transport companies. eFTI-ready foundation — not a certified eFTI platform. Does not promise authority acceptance in every country.",
      },
      {
        title: "Internal testing",
        body: "Access is controlled — via pilot or internal testing invitation. Not automatic public registration. Backend, push notifications, and some integrations are connected gradually.",
      },
      {
        title: "User responsibility",
        body: "Driver and company are responsible for trip, document, ADR, and customs compliance. The app supports documentation — does not replace legal advice, ADR experts, or authorities.",
      },
      {
        title: "Availability",
        body: "During internal testing, uptime and features may vary. Specific SLA applies only under contract.",
      },
      {
        title: "Limitation of liability",
        body: "ViaNexis does not promise automatic legal probative force, flawless OCR/AI/translation, emergency services, or production push readiness if still a backend dependency.",
      },
    ],
  },
  legalNotice: {
    title: "Legal notice — internal testing version",
    intro:
      "This page describes the ViaNexis platform internal testing and preparation status. It does not replace full legal documentation or contractual terms.",
    sections: [
      {
        title: "Nature of the platform",
        body: "Digital transport evidence, document management, messaging, notifications, and company control in one system. eFTI-ready foundation — not a certified eFTI platform.",
      },
      {
        title: "Internal testing status",
        body: "Google Play internal testing preparation in progress. Samsung UAT and release readiness in progress. We do not claim the app is publicly available on the Play Store.",
      },
      {
        title: "Limitation of liability",
        body: "We do not promise authority acceptance, automatic legal probative force, flawless AI/OCR/translation, emergency services, or full production push readiness.",
      },
      {
        title: "Contact",
        body: "Legal and privacy questions: info@vianexis.eu",
      },
    ],
    relatedDocs: "Related documents",
  },
  disclaimersPage: {
    title: "Responsible use — disclaimers",
    intro:
      "The texts below describe important limits of platform use. Internal testing version — does not replace legal advice.",
    items: [
      {
        id: "adr",
        title: "ADR — responsible use",
        body: "ADR and tunnel data are helper information. Official sources, tables, and current local rules must always be verified. ViaNexis does not replace legislation, ADR training, the company's DG officer, or authority decisions.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & translation",
        body: "Assistive tools — human review required. Original document and message remain primary. Not legal advice and not certified translation.",
      },
      {
        id: "notifications",
        title: "Notifications & push",
        body: "Operational notifications — not marketing push. Privacy-safe lockscreen by default. Production push (FCM/APNs) is a backend dependency — may not be live during internal testing.",
      },
      {
        id: "truck-map",
        title: "Truck map / community data",
        body: "Map and route for operational orientation — does not guarantee legal restrictions, permits, or community data accuracy. Not a substitute for official navigation.",
      },
      {
        id: "pallet",
        title: "Pallet / packaging exchange evidence",
        body: "Recording supports dispute documentation. PDF evidence section in completed trip package is not fully ready in all cases. Does not decide disputes.",
      },
      {
        id: "legal-validity",
        title: "Legal validity / documents",
        body: "Digital documents and signatures do not automatically carry legal probative force. Acceptance varies by country and customer.",
      },
      {
        id: "efti",
        title: "eFTI & authority sharing",
        body: "ViaNexis is not a certified eFTI platform. Does not promise authority acceptance in every country. eFTI-ready foundation is technical preparedness — not a certificate.",
      },
    ],
  },
};
