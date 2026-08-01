import type { LegalSection } from "../types";
import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "../version";

const versionLabel = `Version: ${DRIVER_APP_LEGAL_VERSION}`;
const effectiveLabel = `Effective date: ${DRIVER_APP_LEGAL_EFFECTIVE_DATE}`;
const lastUpdatedLabel = `Last updated: ${DRIVER_APP_LEGAL_LAST_UPDATED}`;

export const responsibleUseSectionsEn: LegalSection[] = [
  {
    id: "purpose-and-scope",
    title: "1. Purpose and scope of this document",
    body: "This document summarises important responsible-use limitations and safety principles for the ViaNexis platform and the ViaNexis Driver application. Its purpose is to prevent a false sense of security, not to shift liability.\n\nThis document does not replace the Privacy notice, the Terms of Use, a separate company contract, legislation, an authority decision or expert advice. It does not limit liability that cannot be excluded under mandatory law.\n\nThese limitations are understood within the framework of applicable mandatory law.\n\nCovered services: ViaNexis platform, ViaNexis Driver, related company portal and backend services where applicable. Marketing notices on vianexis.eu stand separately.",
  },
  {
    id: "general-principles",
    title: "2. General responsible-use principles",
    body: "ViaNexis is an operational and documentation aid. Users and the carrier company must verify critical data. The original document, official instructions and legislation prevail. Automated output must not be treated automatically as fact. The system does not replace professional training or permits. Obvious errors must be reported. Using a feature does not excuse failure to follow local rules.",
  },
  {
    id: "shipment-data-and-user-input",
    title: "3. Shipment data and user input",
    body: "Accuracy of entered shipment data — address, weight, goods, stop, status, notes — is the responsibility of the entering user and the carrier company. ViaNexis does not become a party to the carriage contract. For critical discrepancies, the original order, official documents and regulatory rules prevail. Drivers must report reasonably detectable errors.",
  },
  {
    id: "adr-and-dangerous-goods",
    title: "4. ADR and dangerous goods",
    body: "ADR data and aids are informative. The current ADR edition, official tables, transport documents and competent authority rules always prevail.\n\nViaNexis is not an ADR safety adviser. It does not replace ADR training, a company dangerous-goods safety adviser or an authority decision. It does not guarantee packaging, marking, placarding, tunnel or quantity calculations without human review. For critical questions, check official sources and an expert. In an emergency, do not use the ADR module to request help. The ADR feature does not guarantee legal compliance.",
  },
  {
    id: "tunnel-route-and-traffic-restrictions",
    title: "5. Tunnel, route and traffic restrictions",
    body: "Tunnel categories and traffic restrictions may change. Temporary local restrictions, closures, weight, height, axle, environmental or time-based limits may differ. Drivers must watch road signs and authority instructions. In-app data does not override on-site signs. Suitability of a route must be checked by the carrier company and the driver.",
  },
  {
    id: "customs-border-and-authority-info",
    title: "6. Customs, border and authority information",
    body: "Official links or summaries may change. Customs procedures differ by country and goods type. ViaNexis is not a customs agent and does not issue binding customs or authority opinions. Authority decisions prevail. AI summaries — where available — do not replace the original official source. Incomplete documents cannot be made legally compliant automatically by the system.",
  },
  {
    id: "map-location-and-navigation",
    title: "7. Map, location and navigation",
    body: "Map and position displays are operational aids. They are not certified truck navigation. They do not guarantee consideration of truck size, weight, ADR, tolls or access restrictions. Location data may be inaccurate or delayed; GPS, network and device settings affect them. On-site road signs prevail.\n\nThe currently distributed build may process location in a when-in-use manner; we do not request continuous background tracking where the manifest continues to confirm that. Location data must not be used for covert employee monitoring. Revoking permission may limit features.",
  },
  {
    id: "ai-assistive-features",
    title: "8. AI-based assistive features",
    body: "AI output — where a feature is actually available — may be wrong, incomplete or outdated. It is not legal, customs, ADR, insurance or authority advice. It must not make a final decision automatically. Critical decisions require human review. The original document and official sources prevail. Users must report obvious errors. Only AI features that are actually enabled are treated as active.",
  },
  {
    id: "ocr-and-document-recognition",
    title: "9. OCR and document recognition",
    body: "OCR may misread numbers, names, plate numbers, dates, weights, UN numbers or signatures. Poor image quality increases error risk. Automatic field fills must be checked. The original image or document prevails. OCR output is not by itself a certified copy. Confirm critical data before saving. In the currently distributed release, OCR may be an on-device capability; we do not claim a cloud OCR vendor as active merely because a capability exists.",
  },
  {
    id: "automatic-translation",
    title: "10. Automatic translation and language assistance",
    body: "Automatic translation — where enabled in the relevant environment — may be inaccurate. Professional, ADR, customs and legal terms may be mistranslated. Keep the original message accessible. Critical instructions require human confirmation. It is not a certified translation. Do not act on ambiguous content based solely on automatic translation. This distributed release does not claim an active external translation vendor.",
  },
  {
    id: "electronic-signatures",
    title: "11. Electronic signatures",
    body: "The evidential value and legal effect of a recorded signature depend on the document type, capture circumstances and applicable law. ViaNexis does not guarantee that a recorded signature qualifies as a qualified electronic signature in every country or procedure, or that it is by itself fully conclusive evidence. Timestamp, location and audit trail may support evidence but do not guarantee legal effect. Report incorrect or unauthorised signatures. Invalidation does not automatically erase the audit trail.",
  },
  {
    id: "digital-documents-and-evidence",
    title: "12. Digital documents and evidence data",
    body: "A digital copy is not necessarily the original instrument. Export or PDF does not guarantee acceptance by authorities. Keeping the original may still be required by law or contract. Incorrect or invalid documents may be marked; invalidation does not automatically erase the audit trail.",
  },
  {
    id: "pallet-and-packaging-exchange",
    title: "13. Pallet and packaging exchange",
    body: "The system supports documenting pallet and packaging exchange. It does not automatically decide disputes between parties. Quantity, type, damage and shortages must be checked. Photos and signatures may support evidence. The company's own settlement rules may prevail. Input errors may create incorrect balances.",
  },
  {
    id: "photos-videos-and-incident-evidence",
    title: "14. Photos, videos and incident evidence",
    body: "Capture only content needed for the shipment. Respect other persons' rights and privacy. Do not record in a dangerous way while driving. Authority or site rules may restrict photography. A recording does not by itself prove damage or liability. Timestamp and location may be inaccurate. Uploading manipulated or misleading media is prohibited.",
  },
  {
    id: "messages-and-operational-communication",
    title: "15. Messages and operational communication",
    body: "In-app messages support operational communication. They may be delayed and do not replace company or official emergency procedures. Verify critical instructions. Spam, harassment or unlawful content is prohibited.",
  },
  {
    id: "push-and-other-notifications",
    title: "16. Push and other notifications",
    body: "Push, email or in-app notifications may be delayed or may fail. They are not an exclusive emergency channel. Lock-screen previews may be privacy-safe. Notification tokens may be processed only when push is active in the relevant build and environment. Users must also check critical tasks in the app. Spam, marketing or harassment is prohibited. Under the current product intent there is no marketing push.",
  },
  {
    id: "offline-use-and-synchronisation",
    title: "17. Offline use and synchronisation",
    body: "Some features may work temporarily offline. Data may remain local. Synchronisation may be delayed or fail. Multiple devices or concurrent edits may conflict. Verify that uploads succeeded. Uninstalling the app or device failure may cause local data loss. Offline data may not be up to date. Do not rely solely on offline state for urgent communication. Full offline operation is not guaranteed.",
  },
  {
    id: "map-and-community-content",
    title: "18. Map and community content",
    body: "In the currently distributed version, map features may be limited and may primarily serve as orientation or own-position aids. This document does not treat a full community network or community location-sharing service as active.\n\nIf a community feature is later activated, its rules — including nickname use, avoiding full names and plate numbers, location-sharing controls, prohibition of harassment and false safety data, media-upload rules, blocking/reporting, moderation, and the fact that community data accuracy is not guaranteed — will appear in an updated document before that release.",
  },
  {
    id: "efti-and-authority-sharing",
    title: "19. eFTI and authority sharing",
    body: "ViaNexis is not a certified eFTI platform. eFTI-ready or technical readiness is not certification and does not guarantee acceptance by authorities. Authority sharing may occur only with appropriate permissions, legal basis or company decision. QR or packaged access does not automatically make a document official. An authority may require another format or the original document.",
  },
  {
    id: "privacy-and-permissions",
    title: "20. Privacy and permissions",
    body: "Only necessary data may be processed. Unauthorised access to another user's documents is prohibited. On shared devices, sign-out and PIN/biometrics are recommended. Support access may occur only in a controlled and audited way. Forwarding screenshots or exports creates privacy risk.\n\nPrivacy details: https://vianexis.eu/en/privacy\nTerms of Use: https://vianexis.eu/en/terms\nRequest deletion of your account and associated data: https://vianexis.eu/en/driver-app/account-deletion",
  },
  {
    id: "support-and-controlled-access",
    title: "21. Support and controlled access",
    body: "Support and platform-administrative access may be limited, need-to-know and auditable. Support does not replace the carrier company's own internal procedures. Report suspected unauthorised access to security@vianexis.eu.",
  },
  {
    id: "availability-and-external-providers",
    title: "22. System availability and external providers",
    body: "The system is not guaranteed to be error-free. Maintenance or outages may occur. External-provider failures may limit features. Network and device issues may affect operation. Report data discrepancies or errors to support. A concrete SLA applies only under a separate contract. The app does not replace a company backup procedure.",
  },
  {
    id: "emergency-and-sos",
    title: "23. Emergency and SOS",
    body: "ViaNexis is not an emergency hotline, SOS centre, or authority or healthcare service. In an emergency, call the local emergency number. In the European Union, 112 is available; it is not a universal global number in every country. For dangerous-goods incidents, follow official emergency instructions. Do not wait for an app response in an urgent case. Any in-app company alert feature — if present — does not replace calling the emergency services.",
  },
  {
    id: "human-review-and-final-decision",
    title: "24. Human review and final decision",
    body: "Automatic suggestions, OCR results, translations, status indicators and map data require human review. Final decisions belong to the user and the carrier company. ViaNexis does not make legal, authority or professional decisions for you.",
  },
  {
    id: "reporting-issues",
    title: "25. Reporting errors and issues",
    body: "Technical issues: support@vianexis.eu. Security incidents: security@vianexis.eu. Privacy questions: privacy@vianexis.eu. Legal questions: legal@vianexis.eu.\n\nDo not send passwords, PINs, unnecessary ID photos, or unnecessary health or special-category data.",
  },
  {
    id: "contact",
    title: "26. Contact",
    body: "Contact:",
    items: [
      "General contact: info@vianexis.eu",
      "Legal enquiries: legal@vianexis.eu",
      "Privacy: privacy@vianexis.eu",
      "Support: support@vianexis.eu",
      "Security reports: security@vianexis.eu",
      "Website: https://vianexis.eu",
    ],
  },
  {
    id: "final-provisions",
    title: "27. Final provisions",
    body: "Related documents:\nPrivacy notice: https://vianexis.eu/en/privacy\nTerms of Use: https://vianexis.eu/en/terms\nRequest deletion of your account and associated data: https://vianexis.eu/en/driver-app/account-deletion\n\nThese limitations are understood within the framework of applicable mandatory law. Neither this document nor any other ViaNexis notice excludes or limits rights and liabilities that cannot be excluded under applicable law.\n\nThis document is officially available in Hungarian and English. The application interface may be available in additional languages, but this legal document does not currently have official translations in those languages.",
  },
];

export const responsibleUseDocEn = {
  title: "Responsible Use and Important Limitations – ViaNexis",
  metaDescription: "Responsible-use limitations for the ViaNexis platform and ViaNexis Driver: ADR, AI/OCR, maps, documents, notifications and emergencies.",
  intro: "This document summarises important use limitations and safety principles for the ViaNexis platform and ViaNexis Driver. Its purpose is to prevent a false sense of security, not to shift liability. It does not replace the Privacy notice, the Terms of Use, a company contract, legislation, an authority decision or expert advice. It does not limit liability that cannot be excluded under mandatory law.",
  versionLabel,
  effectiveLabel,
  lastUpdatedLabel,
  tocLabel: "Table of contents",
  sections: responsibleUseSectionsEn,
  contactsTitle: "Contact",
  contacts: [
    { label: "General contact", value: "info@vianexis.eu" },
    { label: "Legal", value: "legal@vianexis.eu" },
    { label: "Privacy", value: "privacy@vianexis.eu" },
    { label: "Support", value: "support@vianexis.eu" },
    { label: "Security reports", value: "security@vianexis.eu" },
  ],
} as const;
