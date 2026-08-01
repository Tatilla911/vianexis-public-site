import type { LegalSection } from "../types";
import { OPERATOR_FULL_IDENTIFICATION_EN, OPERATOR_STATEMENT_EN } from "../operator";

export const termsSectionsEn: LegalSection[] = [
  {
    id: "intro-and-scope",
    title: "1. Introduction and scope",
    body: `These Terms of Use (the "Terms") govern the use of technology services offered under the ViaNexis brand. In particular, the Terms apply to the ViaNexis Driver mobile application, the ViaNexis company operations portal, related backend and platform services, and — where applicable — controlled administrative interfaces, pilot and invitation-based use, as well as related document, messaging, signature and audit features.

The Terms do not automatically cover every part of the vianexis.eu marketing website; that site has its own legal notices. Processing of personal data in the driver application is described in the Privacy notice.

${OPERATOR_STATEMENT_EN}`,
  },
  {
    id: "provider-details",
    title: "2. Provider details",
    body: "The service is provided by Turul Atilla, a sole proprietor, under the ViaNexis brand. The identification details below come from the central legal configuration.",
    items: OPERATOR_FULL_IDENTIFICATION_EN,
  },
  {
    id: "definitions",
    title: "3. Definitions",
    body: "Unless the context requires otherwise, the following terms have the meanings below. The list is informative; not every role or feature is available in every environment.",
    items: [
      "ViaNexis: the brand used by the provider and the related platform services",
      "Provider: Turul Atilla, sole proprietor and operator of the ViaNexis brand",
      "Platform: the ViaNexis technology system, including backend services and related interfaces",
      "ViaNexis Driver: the mobile application intended for drivers",
      "Company portal: the carrier company's operational/administrative web interface",
      "Carrier company: an organisation using the Platform with drivers and shipments",
      "User: a natural person authorised to use the Platform or ViaNexis Driver",
      "Driver: a driver user of ViaNexis Driver",
      "Company administrator: a user who manages permissions and accounts on the company portal",
      "Dispatcher: a company user performing shipment coordination and operational tasks",
      "Authorised staff member: a user assigned by the company to the Platform with appropriate permissions",
      "Account: a User's authenticated access to the Platform or ViaNexis Driver",
      "Shipment: a transport assignment or related task managed in the system",
      "Shipment data: operational, status and metadata related to a shipment",
      "Document: an uploaded, generated or captured transport document, record or related file",
      "Electronic signature: a touchscreen signature drawing captured in the system and related evidence data",
      "User content: content uploaded or recorded by a User or the company",
      "Pilot: a controlled, limited or invitation-based period of use",
      "Separate company contract: a written agreement between the Provider and the Carrier company that goes beyond these Terms",
      "Audit data: a security, accountability or case-handling log entry",
    ],
  },
  {
    id: "nature-of-service",
    title: "4. Nature of the service",
    body: "ViaNexis is a technology provider. The Platform and ViaNexis Driver provide digital tools to support shipment-related tasks, documents, messages, signatures and operational workflows.\n\nViaNexis is not a carrier, freight forwarder, customs agent, ADR safety adviser, public authority, emergency service, or a certified eFTI platform. The Platform may support technical readiness for eFTI-oriented processes; that is not certification and does not mean acceptance by authorities in every country.\n\nThe service is B2B in nature: it is primarily intended for carrier companies and their authorised users.",
  },
  {
    id: "acceptance-of-terms",
    title: "5. Acceptance of the Terms",
    body: "A User accepts the Terms when, in ViaNexis Driver, they confirm acceptance after opening the legal documents, or — depending on the company portal or other interface — when they complete the acceptance step required for use. Registration, accepting an invitation, or using the service also presupposes knowledge of and compliance with the Terms where the relevant interface requires this.\n\nViaNexis Driver may include a local (on-device) acceptance gate tied to document versions. That local record does not automatically mean acceptance is also audited and logged in the backend in every case. The version number and effective date appear in the document header.\n\nIf a User does not accept the Terms, they may not use the service. A Carrier company's own contractual acceptance does not automatically replace a driver's personal acceptance where the application requires a separate acceptance. Acceptance does not waive rights that cannot be waived under mandatory law.",
  },
  {
    id: "user-and-company-roles",
    title: "6. User and company roles",
    body: "The Platform supports multiple user roles. Not every role is available in every environment or for every company. Access is typically granted by an authorised company administrator or — for platform-level functions — by the Provider's support/administrative process.\n\nUsers are responsible for actions taken with their own credentials. Using another person's account is prohibited. Permissions may be revoked.",
    items: [
      "Driver: ViaNexis Driver use; shipment tasks, documents, signatures and messages as permitted",
      "Company administrator: company portal; users, permissions and company settings as permitted",
      "Dispatcher: shipment coordination and operational tasks as permitted",
      "Workshop / fleet user: vehicle and defect-related functions where active for the company",
      "External partner admin/operator: partner-portal functions where active for the company and configuration",
      "Support or platform-administrative access: limited, need-to-know support/ops access",
      "Other platform roles (e.g. onboarding reviewer, billing admin): only where actually assigned in the environment",
    ],
  },
  {
    id: "controlled-pilot-invite-access",
    title: "7. Controlled, pilot and invitation-based access",
    body: "Access may be controlled, pilot, invitation-based, or tied to a separate company contract. Pilot features, duration and limits may be set out in a separate agreement or pilot terms. In a pilot environment, some features may be limited, may change, or may differ by company.\n\nAn invitation or company assignment does not grant unlimited rights. The Provider or the Carrier company may restrict access under these Terms and the applicable contract.",
  },
  {
    id: "account-creation-and-management",
    title: "8. Account creation and management",
    body: "Accounts are typically created through an invitation, company assignment or controlled registration process. Submitted details must be accurate and up to date. Accounts are personal.\n\nAccount management may include updating profile data, permission changes, unlinking from a company, suspension, signing out and a deletion request. Uninstalling the app, signing out, unlinking from a company and suspension are not the same as permanent account and data deletion.",
  },
  {
    id: "company-assignment-and-permissions",
    title: "9. Company assignment and permissions",
    body: "Drivers and other users are typically assigned to a Carrier company. A company administrator or authorised staff member may manage assignment, invitation, suspension, reactivation or revocation of driver-app access through the portal, according to available features.\n\nUnlinking from a company or revoking access does not necessarily delete the account or all data. The Carrier company may not request or use the driver's password or PIN.",
  },
  {
    id: "account-security",
    title: "10. Account security",
    body: "Users must protect their password, PIN and — where used — biometric access. Account sharing is prohibited. Sessions and known devices may be managed according to available security features.\n\nIf unauthorised access is suspected, the User must report it without delay to security@vianexis.eu and, where possible, change credentials.",
  },
  {
    id: "acceptable-use",
    title: "11. Acceptable use",
    body: "The service may be used only for lawful transport, documentation, dispatch, company, evidence-handling, audit and support purposes, within the scope of permissions and applicable law.",
  },
  {
    id: "prohibited-conduct",
    title: "12. Prohibited conduct",
    body: "In particular, the following is prohibited:",
    items: [
      "using another person's account or sharing an account",
      "attempting unauthorised access",
      "bypassing access restrictions or tenant separation",
      "uploading malicious code",
      "automated attacks, overloading or circumventing security mechanisms",
      "reverse engineering beyond exceptions permitted by applicable law",
      "abusive handling of personal data",
      "uploading unlawful, false or misleading documents",
      "capturing a deceptive or unauthorised signature",
      "manipulating audit data",
      "spam, marketing push or harassment",
      "publishing dangerous or unlawful instructions",
      "endangering another user's safety",
      "reselling the service without separate permission",
    ],
  },
  {
    id: "shipment-data-and-user-content",
    title: "13. Shipment data and user content",
    body: "User content may include documents, photos, videos, messages, signatures, shipment data, incident data, notes and uploaded company forms.\n\nThe user or the entitled party retains rights in the content. ViaNexis receives only a limited right needed to operate, store, transmit, display, back up and support the service. Content is not used for advertising without separate permission.\n\nUsers may upload only content they are entitled to handle. Uploading unnecessary, special-category or non-shipment-related personal data should be avoided. Access to unlawful content may be restricted or removed. This does not affect the data-protection responsibilities of ViaNexis or the Carrier company.\n\nThe Carrier company and its authorised staff are responsible for checking entered shipment data. Drivers must report reasonably detectable errors. ViaNexis does not become a party to the carriage contract and does not automatically guarantee the accuracy of every address, weight, goods detail, stop, customs information or ADR data. For critical discrepancies, the original order, official documents and regulatory rules prevail.",
  },
  {
    id: "third-party-personal-data",
    title: "14. Personal data of third parties",
    body: "CMR notes, delivery notes, signatures, consignee details, images and other documents may contain personal data of third parties. Only data needed for the shipment workflow may be recorded. Users must avoid unnecessary data capture. The Carrier company's own controller obligations remain. User obligations do not relieve ViaNexis or the Carrier company of applicable law.",
  },
  {
    id: "documents-and-digital-copies",
    title: "15. Documents and digital copies",
    body: "An uploaded digital copy is not in every case identical to the original instrument. Image or OCR content may be wrong. Law or contract may require keeping the original document. Users and the company must check completeness. Incorrect, damaged or invalid documents may be marked; invalidation does not automatically erase the audit trail. Downloading or exporting a document does not by itself guarantee acceptance by authorities.",
  },
  {
    id: "electronic-signatures-and-evidence",
    title: "16. Electronic signatures and evidence data",
    body: "The evidential value and legal effect of a recorded signature depend on the type of document, the circumstances of capture and applicable law. ViaNexis does not guarantee that a recorded signature qualifies as a qualified electronic signature in every country or procedure, or that it is by itself fully conclusive evidence.\n\nA signature may be linked to the document and to the related role, timestamp and audit data. Incorrect or unauthorised signatures must be reported. Deletion or invalidation of a signature may be limited and does not automatically erase the audit trail. Manipulating a signature is prohibited.",
  },
  {
    id: "adr-customs-border-route-aids",
    title: "17. ADR, customs, border and route aids",
    body: "ADR information aids, customs and border information, official links, route or navigation aids, driving-ban or restriction information, and AI-based summaries — where available — are informative only.\n\nNone of them replaces applicable law, an authority instruction, an ADR safety adviser, a customs agent or a certified navigation system. For critical decisions, official sources must be checked. ViaNexis is not an emergency service; in an emergency call the local emergency number (in the EU: 112).\n\nOnly aids that are actually available form part of the service under these Terms; planned features are not treated as active services.",
  },
  {
    id: "ai-ocr-and-translation",
    title: "18. AI, OCR and automatic translation",
    body: "AI, OCR and automatic-translation features — where actually enabled in the relevant environment — are assistive tools. Results may be wrong, incomplete or ambiguous. The original document prevails. Human review is required. Critical decisions must not be based solely on AI/OCR/translation output.\n\nBased on currently verified behaviour, the system does not make automated decisions with legal effect. AI is not a legal, customs or ADR expert. Users must report or correct obvious errors. Availability may depend on environment and configuration. This distributed release does not claim an active external translation or cloud-OCR vendor merely because a capability exists.",
  },
  {
    id: "offline-use-and-synchronisation",
    title: "19. Offline use and synchronisation",
    body: "Some ViaNexis Driver features may be usable temporarily offline. Data may be stored locally. Synchronisation may be delayed; failed synchronisation may occur. Concurrent edits may conflict. Users must check that uploads and status changes succeeded.\n\nUninstalling the app, device failure or storage clean-up may cause local data loss. While offline, not all data, documents or notifications are up to date. In urgent situations the offline app does not replace the company's communication procedure. Full offline operation in every situation is not guaranteed.",
  },
  {
    id: "notifications-and-communication",
    title: "20. Notifications and communication",
    body: "Push, email and in-app notifications may be delayed or may fail. Device, network, operating-system or provider settings may affect delivery. Notifications are not an exclusive safety or emergency channel. Users must check shipment tasks and messages regularly. For critical or emergency matters, company or official communication channels must be used.\n\nThe current system is intended for operational notifications; using notification features for spam or harassment is prohibited under these Terms. Marketing push is not used according to the current product intent and privacy notice.",
  },
  {
    id: "map-and-community-features",
    title: "21. Map and community features",
    body: "In the currently distributed version, map features may be limited and may primarily serve as orientation or own-position display aids where the feature and map-provider configuration are available. The map is not a certified navigation system and does not replace official route or traffic information.\n\nThese Terms do not treat a full community network or community location-sharing service as active. If a community feature is later activated, its rules — including nickname use, avoiding full names and plate numbers, location-sharing controls, reporting/blocking and prohibition of unlawful content — will appear in updated Terms or feature-specific rules before that release.",
  },
  {
    id: "intellectual-property",
    title: "22. Intellectual property",
    body: "The ViaNexis brand, logo, software, source code, user interface, documentation, templates, and proprietary database and system structure are intellectual property of the Provider or entitled licensors. Access grants a limited, revocable right of use; it does not transfer ownership.\n\nOwnership of User content does not automatically transfer to ViaNexis. Unauthorised copying, distribution, modification or resale is prohibited. Mandatory-law exceptions such as interoperability remain. Licensed third-party content may also be subject to its licence terms.",
  },
  {
    id: "third-party-services-and-links",
    title: "23. Third-party services and links",
    body: "At a category level, the service may rely on map, push, email, storage or infrastructure services, official external links, navigation apps, and — where enabled — AI/OCR/translation capabilities. Specific providers may depend on the environment; these Terms do not name an unverified vendor as an active processor.\n\nThird-party terms may apply. ViaNexis does not control every external service. External outages may affect features. Content of official external links may change; a link does not mean automatic endorsement.",
  },
  {
    id: "availability-and-maintenance",
    title: "24. Service availability and maintenance",
    body: "The system is not guaranteed to be error-free. Planned and emergency maintenance may occur. External-provider failures may cause outages. An internet connection may be required. Reasonable remediation may start if an error or data discrepancy is found. Concrete uptime, response times or an SLA may be committed only in a separate company contract. Pilot environments may have feature limits and changes. Features may be temporarily restricted for security reasons.",
  },
  {
    id: "fees-pilot-and-company-contracts",
    title: "25. Fees, pilot and separate company contracts",
    body: "Some pilots may be free of charge. Paid use occurs only under a separate offer, order or company contract. Fees, invoicing, payment deadlines, taxes, any allowances and service levels are set out in that separate contract. These Terms alone do not create an automatic payment obligation without a separate order or contract.\n\nA separate company contract may include subscription, support, SLA, data-processing terms and custom workflows. A separate written contract may deviate from specific Terms provisions; in case of conflict, the separate contract prevails for that deviation. End of a company contract may affect related driver access. Fee changes may occur only under the relevant contract and prior notice.\n\nThese Terms do not assert automatic subscription renewal, specific prices, refunds, automatic billing or a payment provider.",
  },
  {
    id: "suspension-and-termination",
    title: "26. Suspension and termination",
    body: "The Provider may restrict or suspend access for reasons including unauthorised access, account sharing, security risk, unlawful content, abuse, endangering another user, payment delay under a separate contract, end of a company contract, end of a pilot, an authority order or material breach.\n\nWhere possible, prior notice is given; immediate restriction may occur in urgent security cases. Suspension is not automatic data deletion. Audit data that must lawfully be retained may remain. Incorrect suspension may be raised via support@vianexis.eu or legal@vianexis.eu.",
  },
  {
    id: "account-and-data-deletion",
    title: "27. Account and data deletion",
    body: "Permanent account and data deletion is a request-based process; recording a request does not trigger immediate automatic full data deletion. Identity verification may be required. Some data may remain for legal, security, accounting or evidential reasons; operative use of retained data is restricted. In some cases the Carrier company, as controller, may decide on deletion of company data.\n\nUninstalling the app, signing out, unlinking from a company and suspension are not the same as deletion.\n\nRequest deletion of your account and associated data:\nhttps://vianexis.eu/en/driver-app/account-deletion",
  },
  {
    id: "data-export-on-access-end",
    title: "28. Data download and access at end of use",
    body: "Company export, shipment-package PDF or document download may be available according to permissions and available features. These Terms do not promise a general self-service export of all data.\n\nAccess or data-portability requests regarding one's own data — where applicable — may be submitted to privacy@vianexis.eu. Before termination, the company may be able to export data under the separate contract. These Terms do not assert an automatic 30/60/90-day export window.",
  },
  {
    id: "warranties-and-liability",
    title: "29. Warranties and liability",
    body: "The service is a technical and operational aid. It does not guarantee error-free operation, acceptance by authorities in every country, or error-free OCR/AI/translation, and it does not replace an expert or official source. For consequences of incorrect data entered by users, companies or third parties, ViaNexis is liable only within the limits of applicable law. External-service failures may limit operation.\n\nMandatory rights cannot be excluded. Mandatory rules on intentional or grossly negligent harm, personal injury, or liability that cannot lawfully be excluded remain. These Terms do not set a financial liability cap until a separate legal and business decision exists. ViaNexis does not claim that it has no liability for any damage whatsoever.",
  },
  {
    id: "force-majeure",
    title: "30. Force majeure",
    body: "Neither party is liable for delay or non-performance caused by an event beyond its reasonable control, including in particular internet or telecom outages, power failure, cloud-provider outage, cyber attack, authority action, war or civil emergency, natural disaster, or another similar obstacle.\n\nRelief applies only for the duration and extent of the obstacle. Reasonable mitigation measures must be taken. Force majeure does not automatically cancel data-protection or security obligations.",
  },
  {
    id: "changes-to-terms",
    title: "31. Changes to the Terms",
    body: "We may amend the Terms for bug fixes, security changes, new features, feature removal, legal changes, changes in providers or business reasons. Separate contracts are amended under their own terms.\n\nFor material changes we aim to give prior or reasonable notice. Urgent security changes may take effect immediately. The new version number and effective date appear in the document header. Fresh acceptance may be required where needed. Not every minor change requires separate consent.",
  },
  {
    id: "governing-law-and-disputes",
    title: "32. Governing law and disputes",
    body: "These Terms are governed by Hungarian law, without prejudice to applicable EU law and mandatory national provisions. The parties will first seek to resolve disputes amicably. The competent court or other dispute forum is determined by the separate company contract and applicable law.\n\nThese Terms do not assert an exclusive court or arbitration clause without a separate owner or legal decision.",
  },
  {
    id: "document-hierarchy",
    title: "33. Relationship and priority of documents",
    body: "The relationship may be governed by several documents, including: a separate company contract; an order or offer; a data-processing agreement; an SLA or service schedule; these Terms; feature-specific rules; the Privacy notice; and responsible-use disclaimers.\n\nWhere a contractual deviation exists, the separate written contract may prevail on that point. Data-protection rights and obligations are governed by the Privacy notice and applicable law; the Privacy notice is not merely a subordinate contractual clause. Disclaimers cannot override mandatory law.",
  },
  {
    id: "contact",
    title: "34. Contact",
    body: "For questions about the Terms and the service:",
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
    title: "35. Final provisions",
    body: "If any provision of the Terms is invalid or unenforceable, the remaining provisions remain in effect. Failure to exercise a right under the Terms does not waive that right. The Terms apply from the version and effective date shown in the header.\n\nThis document is officially available in Hungarian and English. The application interface may be available in additional languages, but this legal document does not currently have official translations in those languages.",
  },
];
