import type { LegalContent } from "../legal-types";

export const legalEn: LegalContent = {
  versionBadge:
    "Testing release – features and data-processing activities may vary according to the distributed app version.",
  privacy: {
    title: "Privacy notice",
    intro:
      "This notice is an overview of how personal data is processed in connection with the ViaNexis public website, the ViaNexis Driver app, and related trip workflows. The full detailed Driver app privacy policy is available at /privacy. This text is a clear, user-facing site-and-app overview.",
    lastUpdated: "2026-07-31",
    controller: {
      title: "Data controller",
      body: "Turul Atilla, sole proprietor and operator of the ViaNexis brand. Registered address: 5093 Vezseny, Földvári utca 22., Hungary. Tax number: 79264161-1-36. EU VAT number: HU79264161. Sole proprietor registration number: 61994454. Privacy contact: privacy@vianexis.eu",
    },
    scope: {
      title: "Scope",
      body: "This notice covers the ViaNexis Driver mobile app, related driver and trip workflows, and the web contact and access-request forms. The company admin and dispatcher portal are subject to separate contractual and privacy terms. The detailed Driver app privacy policy is available at /privacy.",
    },
    dataCategories: {
      title: "Data we process",
      items: [
        "Account and contact data: name, email, phone, company, role, country.",
        "Approximate country/region derived from network edge metadata solely to choose language and localised content (not nationality determination). You can override the language manually at any time.",
        "Driver profile data: identifiers, role, language settings, permissions.",
        "Trip data: trip IDs, status, stops, timestamps, metadata.",
        "Documents: CMR, delivery notes, invoices, photos, scans, digital signatures.",
        "Messages and notifications: trip-linked communication and alert events.",
        "Location: only with user permission and while in use (when-in-use), if the feature is active in the distributed app version.",
        "Device and session metadata: device type, OS version, app version, session identifiers.",
        "Diagnostics and logs: technical logs and error reports — if enabled.",
        "Pallet and packaging exchange data: type, quantity, shortage, damage, notes.",
        "ADR / customs helper usage data: searches, views — not official decisions.",
        "Notification permission; device notification token only if operational push is active in the distributed app version.",
      ],
    },
    purposes: {
      title: "Purposes of processing",
      items: [
        "Selecting language and localised content based on approximate country/region (overridable by the user).",
        "Managing trip workflows and documenting performance.",
        "Document management, signatures, and evidence package assembly.",
        "Trip-linked communication and operational notifications.",
        "Security, audit, and traceability.",
        "Controlled support access in an auditable manner.",
        "Preventing and documenting legal and business disputes.",
        "Improving app operation and troubleshooting.",
        "Controlled access, pilot, and service evaluation.",
      ],
    },
    sharing: {
      title: "Data sharing",
      items: [
        "Employer / transport company and authorised admin/dispatcher users — per tenant scope.",
        "Driver's own trip and document data per company rules.",
        "Authorised platform support only with audited, limited, justified access.",
        "Authorities or partners only per legal basis, contract, or company decision.",
        "AI/OCR/translation provider only when actually used in the distributed app version — with human review.",
        "We do not sell personal data. No marketing push notifications.",
      ],
    },
    rights: {
      title: "Your rights",
      items: [
        "Access to your data — directly via ViaNexis at privacy@vianexis.eu, and/or via company admin or a support channel.",
        "Rectification of inaccurate data.",
        "Erasure where legally possible and company processes allow.",
        "Objection or restriction where legally justified.",
        "Data portability where applicable law provides it.",
        "Complaint to a supervisory authority (in Hungary: the National Authority for Data Protection and Freedom of Information — NAIH).",
        "Contact: privacy@vianexis.eu",
      ],
    },
    notifications: {
      title: "Notifications",
      body: "The app uses operational notifications — not marketing push. Lockscreen text is privacy-cautious by default. Push may be used for operational alerts when enabled in the distributed app version. Device notification tokens are processed only if push is active. Notification permission is the user's choice.",
    },
    location: {
      title: "Location",
      body: "Location is processed only with user permission and while in use (when-in-use), if the feature is active in the distributed app version — for map, own position, and trip evidence purposes. Per current documented intent, there is no background tracking. You may revoke location permission in your device settings at any time; after revocation, location-dependent features may work in a limited way or not at all. Location does not guarantee route compliance or legal compliance.",
    },
    importantNotices: {
      title: "Important notices",
      items: [
        "AI, OCR, and automatic translation are assistive tools — human review required.",
        "ADR information is a helper — does not replace official sources or legislation.",
        "ViaNexis is not a certified eFTI platform. Technical preparedness is not certification.",
        "Not an emergency or SOS service.",
        "Digital documents do not automatically carry legal probative force.",
        "Features and data-processing activities may vary according to the distributed app version.",
      ],
    },
    dataContact: {
      title: "Privacy contact",
      body: "Privacy questions and rights requests: privacy@vianexis.eu. Full Driver app privacy policy: /privacy.",
    },
    playUrl: "Stable public privacy URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Terms of use",
    intro:
      "These terms apply to use of the ViaNexis platform and the ViaNexis Driver app. The service may also be available under controlled access, pilot, or invitation. Detailed Driver app terms are available on the related legal pages.",
    sections: [
      {
        title: "Nature of the service",
        body: "ViaNexis provides digital transport evidence and a driver operations platform for transport companies. The platform offers technical preparedness for eFTI-oriented workflows — this is not certification, and ViaNexis is not a certified eFTI platform. It does not promise authority acceptance in every country.",
      },
      {
        title: "Access and account",
        body: "Access may be controlled — via pilot, invitation, or company contract. The account operates under the employer / transport company's permissions. Account deletion information and request: https://vianexis.eu/en/driver-app/account-deletion.",
      },
      {
        title: "User responsibility",
        body: "Driver and company are responsible for trip, document, ADR, and customs compliance checks. The app supports documentation — it does not replace legal advice, ADR experts, or authorities.",
      },
      {
        title: "Acceptable use",
        body: "The service may be used only for lawful, trip-related business purposes. Unauthorised access, interference with the system, misuse of others' data, and misuse of notification features for marketing or other non-operational purposes are prohibited.",
      },
      {
        title: "Intellectual property",
        body: "The ViaNexis brand, software, documentation, and related materials are owned by the operator or authorised licensors. Use does not transfer ownership.",
      },
      {
        title: "Availability",
        body: "Features and uptime may vary depending on the distributed app version and the contractual framework. A specific service-level commitment (SLA) applies only under contract.",
      },
      {
        title: "Limitation of liability",
        body: "Within the limits of mandatory applicable law, ViaNexis does not promise automatic legal probative force, flawless OCR/AI/translation, emergency services, or authority acceptance in every country. The service is an assistive tool for documentation and operational work.",
      },
      {
        title: "Changes",
        body: "We may update these terms where justified. Material changes will be communicated via the website or the app where appropriate.",
      },
      {
        title: "Contact",
        body: "General contact: info@vianexis.eu. Privacy: privacy@vianexis.eu. Legal: legal@vianexis.eu.",
      },
    ],
  },
  legalNotice: {
    title: "Legal notice",
    intro:
      "This page describes the ViaNexis platform operator, the nature of the service, and related legal notices. It does not replace full contractual terms or the detailed Driver app privacy policy.",
    sections: [
      {
        title: "Operator",
        body: "Turul Atilla, sole proprietor and operator of the ViaNexis brand. Registered address: 5093 Vezseny, Földvári utca 22., Hungary. Tax number: 79264161-1-36. EU VAT number: HU79264161. Sole proprietor registration number: 61994454.",
      },
      {
        title: "Nature of the platform",
        body: "Digital transport evidence, document management, messaging, notifications, and company control in one system. Technical preparedness for eFTI-oriented workflows — not certification; ViaNexis is not a certified eFTI platform.",
      },
      {
        title: "Access",
        body: "The service may be available under controlled access and pilot arrangements. Features may vary according to the distributed app version.",
      },
      {
        title: "Limitation of liability",
        body: "Within the limits of mandatory applicable law, we do not promise authority acceptance in every country, automatic legal probative force, flawless AI/OCR/translation, or emergency services.",
      },
      {
        title: "Contact",
        body: "General: info@vianexis.eu. Privacy: privacy@vianexis.eu. Legal: legal@vianexis.eu.",
      },
    ],
    relatedDocs: "Related documents",
  },
  disclaimersPage: {
    title: "Responsible use — disclaimers",
    intro:
      "The texts below describe important limits of platform use. They do not replace legal advice. Limitations apply within the framework of mandatory applicable law.",
    items: [
      {
        id: "adr",
        title: "ADR — responsible use",
        body: "ADR and tunnel data are helper information. Official sources, tables, and current local rules must always be verified. ViaNexis does not replace legislation, ADR training, the company's dangerous-goods officer, or authority decisions. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & translation",
        body: "Assistive tools — human review required. The original document and message remain primary. Not legal advice and not certified translation. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "notifications",
        title: "Notifications",
        body: "Operational notifications — not marketing push. Lockscreen text is privacy-cautious by default. Push may be used for operational alerts when enabled in the distributed app version; device notification tokens are processed only if push is active. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "truck-map",
        title: "Truck map / community data",
        body: "Map and route are for operational orientation — they do not guarantee legal restrictions, permits, or community data accuracy. Not a substitute for official navigation. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "pallet",
        title: "Pallet / packaging exchange evidence",
        body: "Recording supports dispute documentation. It does not decide disputes and does not replace the company's or the parties' own assessment. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "legal-validity",
        title: "Legal validity / documents and signatures",
        body: "Digital documents and signatures do not automatically carry legal probative force. Acceptance varies by country and customer. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "efti",
        title: "eFTI & authority sharing",
        body: "ViaNexis is not a certified eFTI platform. It does not promise authority acceptance in every country. Technical preparedness is not certification. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "emergency",
        title: "Emergency",
        body: "ViaNexis is not an emergency, SOS, or authority service. In an emergency, always call the local emergency number (112 within the European Union). Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "navigation",
        title: "Navigation",
        body: "Map, route, or position shown in the app is operational assistance — not official navigation or a traffic-authority guide. The driver remains responsible for complying with traffic rules and local regulations. Limitations apply within the framework of mandatory applicable law.",
      },
      {
        id: "human-review",
        title: "Human review",
        body: "Automated suggestions, OCR results, translations, and status indicators require human review. The user and the company remain responsible for final decisions. Limitations apply within the framework of mandatory applicable law.",
      },
    ],
  },
};
