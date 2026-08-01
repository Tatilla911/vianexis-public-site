import type { DriverAppLegalBundle } from "../types";
import {
  OPERATOR_EMAILS,
  OPERATOR_FULL_IDENTIFICATION_EN,
  OPERATOR_STATEMENT_EN,
} from "../operator";
import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "../version";
import { termsSectionsEn } from "./terms-sections-en";

const versionLabel = `Version: ${DRIVER_APP_LEGAL_VERSION}`;
const effectiveLabel = `Effective date: ${DRIVER_APP_LEGAL_EFFECTIVE_DATE}`;
const lastUpdatedLabel = `Last updated: ${DRIVER_APP_LEGAL_LAST_UPDATED}`;

const standardContacts = [
  { label: "Privacy / GDPR", value: OPERATOR_EMAILS.privacy },
  { label: "Privacy contact", value: OPERATOR_EMAILS.gdpr },
  { label: "Legal matters", value: OPERATOR_EMAILS.legal },
  { label: "Customer support", value: OPERATOR_EMAILS.support },
  { label: "Security reports", value: OPERATOR_EMAILS.security },
];

export const driverAppLegalEn: DriverAppLegalBundle = {
  nav: {
    hub: "Legal center",
    privacy: "Privacy notice",
    terms: "Terms of use",
    dataSafety: "Data safety summary",
    accountDeletion: "Account & data deletion",
  },
  chrome: {
    print: "Print / save as PDF",
    tableOfContents: "Table of contents",
    languageSwitchHint:
      "This document is officially available in Hungarian and English. The application interface may be available in additional languages, but this legal document does not currently have official translations in those languages.",
    backToHub: "Back to legal center",
    currentVersionLabel: "Current version",
  },
  hub: {
    title: "ViaNexis Driver App — Legal Center",
    metaDescription:
      "Privacy notice, terms of use, data safety summary, and account/data deletion information for the ViaNexis Driver App, all in one place.",
    intro:
      "This page collects all of the legal documentation relevant to using the ViaNexis Driver App. These documents apply specifically to the mobile app and are separate from the legal notices published on the vianexis.eu marketing website. We recommend reading the Privacy notice and the Terms of use before registering, since they explain how we handle your data and what rights and obligations you have as a driver or company user.",
    cards: [
      {
        hrefSuffix: "/privacy",
        title: "Privacy notice",
        description:
          "What data the Driver App collects, why, on what legal basis, who we share it with, and what rights you have.",
      },
      {
        hrefSuffix: "/terms",
        title: "Terms of use",
        description:
          "The rules for using the Driver App: what we commit to, what we expect from you and your carrier company, and the limits of the service.",
      },
      {
        hrefSuffix: "/data-safety",
        title: "Data safety summary",
        description:
          "A plain-language, table-based overview of the data categories we collect, whether they're required, and what happens to them — not an official app-store declaration.",
      },
      {
        hrefSuffix: "/account-deletion",
        title: "Account & data deletion",
        description:
          "The difference between unlinking, suspending, deleting your account, and uninstalling the app, plus how to submit a deletion request.",
      },
    ],
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    contactsTitle: "Contact us about legal or privacy matters",
    contacts: standardContacts,
  },
  privacy: {
    title: "ViaNexis Driver App Privacy Policy",
    metaDescription:
      "Full privacy notice for the ViaNexis Driver App: what data we process, why, on what legal basis, how long we keep it, and your rights as a data subject.",
    intro:
      "This Privacy Notice explains how we process personal data in connection with the ViaNexis Driver App (the \"Driver App\" or the \"app\"). It applies to the mobile app and the backend services it relies on; it does not apply to the separate legal documents published on the vianexis.eu marketing website. This notice has been drafted with reference to Regulation (EU) 2016/679 (GDPR) and, where relevant, Hungarian Act CXII of 2011 on the Right of Informational Self-Determination and Freedom of Information (Infotv.).",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Table of contents",
    sections: [
      {
        id: "intro-and-scope",
        title: "1. Introduction and scope",
        body: "This notice covers the processing activities connected with installing, registering for, and using the ViaNexis Driver App day to day — including document handling for shipments, messaging, e-signature capture, and diagnostic data generated automatically by the device. It applies to drivers, as well as to any other person who uses the Driver App or its connected company-facing surfaces (for example a dispatcher or company administrator), to the extent their data appears within the app.\n\nThis notice does not cover the carrier company's own internal HR or payroll systems, nor any processing that happens between the carrier company and its customers outside the app. Where a carrier company processes driver data outside the Driver App (for example, paper-based personnel records), that processing is governed by the carrier company's own privacy policy.",
      },
      {
        id: "controller-details",
        title: "2. Controller details",
        body: `${OPERATOR_STATEMENT_EN} The identification details below describe the operator's capacity as controller for account-, platform-, and security-level processing carried out in connection with the app.`,
        items: OPERATOR_FULL_IDENTIFICATION_EN,
      },
      {
        id: "roles-vianexis-carrier",
        title: "3. The roles of ViaNexis and the carrier company",
        body: "The roles of ViaNexis and the carrier company are not uniform across every data flow. They depend on the purpose of the processing, the contractual model, and who determines the purposes and means. The separation below is informative and may vary by the specific relationship.\n\nViaNexis may act as an independent controller for, among other things, account authentication, platform security, access management, its own support and privacy-request handling, and system-operation logs — where ViaNexis determines the purposes and means.\n\nThe carrier company may act as an independent controller for, among other things, transport assignments, work organisation, customer and consignee data, company document requirements, and employment-related processing — where the company determines the purposes and means.\n\nViaNexis may act as a processor for shipment data handled on the carrier company's instructions, company documents, and dispatcher or administrative workflows. If you are unsure whom to contact, you may contact either party and we will help route the request.",
      },
      {
        id: "data-subjects",
        title: "4. Data subjects",
        body: "The processing described in this notice primarily concerns drivers using the Driver App, who may be employees of the carrier company or independent contractors/subcontractors under a contractual relationship with it. It may also concern carrier company staff (dispatchers, fleet managers, administrators) who use the company-facing surface to assign shipments, upload documents, or exchange messages with drivers.",
        items: [
          "Drivers (as employees or contractors)",
          "Company administrators, dispatchers, and fleet managers",
          "Third parties whose data appears on an uploaded document (e.g. a consignee's signature, or a sender's/recipient's contact details on a CMR)",
          "People who contact customer support",
        ],
      },
      {
        id: "data-categories",
        title: "5. Categories of data we process",
        body: "The main data categories processed through the Driver App are listed below. The exact scope varies by feature, and some categories (such as location data) are only generated if the relevant permission has been granted.",
        items: [
          "Account data: full name, email address, phone number; authentication data: passwords are stored using a one-way salted hash; the original password is not stored; company code or company identifier; language preference",
          "Shipment-related data: shipment identifier, route/stop details, status updates, timestamps",
          "Location data: GPS coordinates, if the user grants permission, and only while an opened location-dependent feature is in use (see Section 8)",
          "Documents and media: photographs, videos, scanned or photographed transport documents, damage-assessment images — when the feature is used",
          "E-signature and evidence data: the signature capture itself and associated timestamp; location data if the user records it during that feature",
          "Messages: the content of in-app messages exchanged between a driver and a dispatcher or company contact",
          "Push notification identifier (token) and the installation/device identifier used for push-device registration, platform label, locale and timezone settings",
          "Security and operational log events: for example login and access events to the extent needed for service security",
          "The content of customer-support and privacy-request communications",
        ],
      },
      {
        id: "sources",
        title: "6. Sources of data",
        body: "Most of the data comes directly from you: information provided at registration, documents and photos you upload, messages you write, and signatures you capture. Some data is entered or generated by the carrier company's administrator or dispatcher on the company-facing surface (for example, assigning a shipment or creating a driver profile).\n\nOther data is generated automatically by the device and the app itself (for example, diagnostic data, or location data where permitted). Finally, some data originates from third parties — for instance, when a consignee's signature appears on a transport document, or when a customer's contact details are included on an uploaded document.",
      },
      {
        id: "purposes-and-legal-bases",
        title: "7. Purposes and legal bases",
        body: "We process data for the purposes and on the legal bases listed below. A given piece of data can serve more than one purpose. A phone system permission (for example location access) may be a technical prerequisite; it does not by itself replace a GDPR legal basis.",
        items: [
          "Account and authentication: account creation, sign-in, password/PIN handling, access provisioning — performance of a contract (GDPR Art. 6(1)(b)), and legitimate interest to the extent needed for platform security (GDPR Art. 6(1)(f))",
          "Platform security: abuse prevention, detection of unauthorized access, session/token handling, system-operation logs — legitimate interest (GDPR Art. 6(1)(f))",
          "Carrier-company shipment workflow: assignments, statuses and company workflows — typically performance of the contract/relationship between the driver and the carrier company; where ViaNexis acts on the company's instructions, processing under the company's controller instructions. The concrete legal basis may depend on the company contract and roles",
          "Operational document handling: transport documents, uploaded photos/videos and related records as part of the shipment workflow — under the company/contractual model; whether ViaNexis or the carrier company is the controller depends on the specific data flow",
          "Optional location-dependent feature: displaying own position or recording a trip-related location — processing for the feature's contractual or legitimate-interest purpose; mobile OS permission is a technical prerequisite and is not by itself GDPR consent, and can be withdrawn in device settings",
          "Operational push notifications: delivering shipment-related push notifications — performance of a contract / legitimate interest for operating the service, together with system notification permission (OS permission does not replace the GDPR legal basis)",
          "Support: handling customer-support requests — legitimate interest (GDPR Art. 6(1)(f))",
          "Privacy requests: receiving and handling privacy and account-deletion requests — compliance with a legal obligation and/or legitimate interest (GDPR Art. 6(1)(c)/(f))",
          "Legal claims: establishing, exercising or defending legal claims — legitimate interest and, where applicable, legal obligation",
          "Legal obligations: retaining records required by law — compliance with a legal obligation (GDPR Art. 6(1)(c)), where applicable",
        ],
      },
      {
        id: "location",
        title: "8. Location data",
        body: "The current app version does not request continuous background location access. Location data may be processed only while the user is actively using a location-dependent feature, for example to display their own position or record the location of a trip-related event.\n\nThe Driver App processes location data only with the mobile operating system's permission (Android: ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION; no ACCESS_BACKGROUND_LOCATION in the current manifest). The app is not used for covert employee monitoring, and the current release does not claim continuous route tracking or automatic background arrival/departure detection.\n\nYou can revoke this permission at any time in your phone's system settings. Revoking it carries no penalty, but location-dependent features may then work in a limited way or not at all. Where location is recorded during a feature, the carrier company may access it only to the extent its permissions allow and as needed for shipment coordination.",
      },
      {
        id: "camera-photos-videos-files",
        title: "9. Camera, photos, videos, and files",
        body: "The app may request camera access to capture documents, cargo damage, load condition, or other shipment-related situations. Instead of using the camera, you can also choose an existing photo or file already stored on your phone. Captured photos, videos, and files are associated with the relevant shipment and the carrier company's related workflow (e.g. claims handling, customer support), and are retained in line with the principles described in Section 18.",
      },
      {
        id: "transport-and-personal-documents",
        title: "10. Transport documents and personal documents",
        body: "The Driver App allows you to upload photographed or scanned copies of transport documents (e.g. CMR consignment notes, delivery notes, customs documents) and certain personal documents (e.g. driving licence, ADR certificate). These documents often contain the personal data of third parties (sender, consignee, recipient), which we process as an inherent part of the transport workflow.\n\nIt is your responsibility as a driver to upload only documents you are entitled to handle and that genuinely relate to the shipment in question. This obligation does not affect the applicable data-protection responsibilities of ViaNexis or the transport company. Access to uploaded documents is restricted by permission level: a carrier company can only see documents tied to its own shipments.",
      },
      {
        id: "e-signatures-and-evidence",
        title: "11. E-signatures and evidence",
        body: "The Driver App lets you capture an electronic signature (a touchscreen signature drawing) to confirm shipment events such as pickup or delivery. Alongside the signature, we may also record supporting data such as the timestamp and — where permitted and recorded during that feature — location data, because together these can serve as evidence in the event of a dispute.\n\nThe evidential value and legal effect of a recorded signature depend on the type of document, the circumstances of capture, and the applicable law. ViaNexis does not guarantee that a recorded signature qualifies as a qualified electronic signature in every country or procedure, or that it is by itself fully conclusive evidence. See Section 16 of the Terms of Use for more detail: https://vianexis.eu/en/terms#electronic-signatures-and-evidence",
      },
      {
        id: "messages-and-translation",
        title: "12. Messages and translation",
        body: "The Driver App includes a built-in messaging feature between a driver and a dispatcher or company contact. Machine translation is treated as active processing only where it is actually enabled in the relevant environment; this distributed release does not claim an active external translation vendor. Where available, it is a convenience feature — it does not replace certified translation and can be inaccurate. For critical content, human confirmation is recommended.\n\nMessage content may be logged and retained in connection with the relevant shipment, in accordance with the principles in Section 18, including for the purpose of clarifying disputes.",
      },
      {
        id: "device-security-diagnostics",
        title: "13. Device, security, and diagnostic data",
        body: "In the current app version, push-device registration may process an app-generated installation/device identifier, a platform label, locale and timezone settings, and a push token. For service security we may log login and access-related events.\n\nBased on the current code audit, we do not claim that the distributed Driver App uses a separate analytics SDK, Crashlytics, or automatic crash-reporting service, and we do not claim routine standalone collection of device manufacturer, OS version, or network connection type. If a later release introduces such processing, this section will be updated before that release.",
      },
      {
        id: "push-notifications",
        title: "14. Push notifications",
        body: "To deliver push notifications, the app may use Firebase Cloud Messaging (FCM) and store a push token tied to your device/installation. This allows notifications about important shipment-related events such as a new assignment, a document request, or an incoming message. Push notifications can be turned off in your phone's system settings. See Section 16 for information about providers involved in delivery.",
      },
      {
        id: "automated-checks-and-ai",
        title: "15. Automated checks and artificial intelligence",
        body: "The Driver App may include automated assistive features (for example on-device text recognition or translation preparation). These features are advisory only and do not make legal decisions without human involvement.\n\nNot every such feature is active in every environment in the current release. Where machine translation or document assistance is available, it does not replace certified translation or legal, customs, or ADR compliance decisions. Final responsibility rests with the driver and the carrier company.",
      },
      {
        id: "processors-and-recipients",
        title: "16. Processors and other recipients",
        body: "Recipients needed to operate the service may process data. Code-verified active categories may include in particular: the backend/hosting operator, database and file-storage services, push delivery (FCM and, where applicable, APNs), and the carrier company with which you have a driver relationship.\n\nEmail delivery, map-tile providers, cloud AI/OCR, or external monitoring are treated as active processors only where actually enabled in the relevant environment; planned or staging-only providers are not listed as active processors. Whether Article 28 GDPR contracts exist must be verified per provider and environment; this page does not claim a blanket Article 28 contract with every provider.\n\nThe current environment-specific list is available on request at privacy@vianexis.eu.",
      },
      {
        id: "international-transfers",
        title: "17. International transfers",
        body: "Where push notifications are delivered via FCM, personal data (for example a push token and related device-registration data) may be transferred outside the EEA, including to the United States, through Google's push infrastructure. Hosting, storage, or email-delivery regions depend on the actual operational configuration.\n\nDetailed information about the specific safeguard used for a given provider (for example an adequacy decision or another mechanism under GDPR Chapter V) is available on request at privacy@vianexis.eu. This page does not state SCCs or an adequacy decision as a verified fact without supporting provider documentation.",
      },
      {
        id: "retention",
        title: "18. Retention",
        body: "We retain data by category for as long as needed for the relevant purpose. We publish a concrete period in days or years only where an approved internal rule or legal obligation confirms it. Where no such decision exists yet, we apply event-based principles:",
        items: [
          "Account data: for the life of the account, then until deletion/anonymisation is completed",
          "Session/token: until the token is revoked or becomes invalid",
          "Push token: until the token is revoked, replaced, or the account/device registration ends",
          "Shipment data: until the end of the legal and company retention period tied to the shipment",
          "Documents: for as long as required for the shipment and the company's legal/accounting obligations",
          "Signatures: for the retention period of the related shipment/record",
          "Location data: for the limited time needed for the specific feature/event purpose",
          "Messages: for as long as needed for the shipment and support/dispute handling",
          "Technical/operational logs: for the limited time needed for security and operations",
          "Security audit logs: for the limited time needed for accountability and security",
          "Support logs: until the request/case is closed and for as long as needed for accountability",
          "Privacy request / account deletion request: until the request is closed and for as long as needed for accountability",
        ],
      },
      {
        id: "account-and-data-deletion",
        title: "19. Account and data deletion",
        body: "Signing out, uninstalling the app, unlinking from a company, and suspending an account are not the same as permanent account and data deletion. Permanent deletion is a separate request.\n\nRequest deletion of your account and associated data:\nhttps://vianexis.eu/en/driver-app/account-deletion\n\nThe system records the request as an operational case record; the request itself does not trigger immediate automatic full data deletion. After identification, deletable account data may be deleted or anonymised; data may remain where required by law, security, fraud prevention, audit, contract, or legal claims. Operative use of retained data is restricted. The requester receives further information at the contact address provided. The neutral acknowledgement does not disclose whether an account exists for the submitted details.",
      },
      {
        id: "data-subject-rights",
        title: "20. Your rights as a data subject",
        body: "Under the GDPR you have the rights listed below in connection with the processing of your personal data. You may send requests to privacy@vianexis.eu or gdpr@vianexis.eu. We will respond without undue delay and, as a rule, within one month of receipt. Taking into account the complexity and number of requests, that period may be extended by a further two months; we will inform you of any such extension and the reasons for the delay within the first month.",
        items: [
          "Right of access: you can ask whether we process data about you, and if so, what data",
          "Right to rectification: you can ask us to correct inaccurate or incomplete data",
          "Right to erasure (\"right to be forgotten\"): in certain cases, you can ask us to delete your data",
          "Right to restriction of processing: in certain situations, you can ask us to temporarily limit processing",
          "Right to object: where processing relies on legitimate interest, you can object to it",
          "Right to data portability: you can ask to receive data processed on the basis of consent or contract in a structured, machine-readable format",
          "Right to withdraw consent: you can withdraw consent-based processing (e.g. location, push notifications) at any time, without needing to give a reason",
        ],
      },
      {
        id: "complaints-and-remedies",
        title: "21. Complaints and remedies",
        body: "If you believe our processing of your data breaches applicable law, we encourage you to contact us first at privacy@vianexis.eu or gdpr@vianexis.eu so we can address the issue as quickly as possible. You may also lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH), or with the supervisory authority in your own EU member state of residence, workplace, or the place of the alleged infringement.",
        items: [
          "NAIH — Hungarian National Authority for Data Protection and Freedom of Information",
          "Address: 1055 Budapest, Falk Miksa utca 9–11., Hungary",
          "Postal address: 1363 Budapest, Pf. 9., Hungary",
          "Website: naih.hu",
        ],
      },
      {
        id: "security",
        title: "22. Security",
        body: "Based on the code audit, we apply verified technical and organizational measures to protect personal data. These include, among others: TLS-encrypted transmission between the app and backend systems; storage of passwords as bcrypt salted hashes (the original password is not stored); role- and tenant-based access control; security and accountability audit logging; session/token revocation; and limited support access on a need-to-know basis.\n\nWe do not claim end-to-end encryption, nor that all data is protected by at-rest encryption, and no system can be considered unbreachable. If you suspect a data breach, report it to security@vianexis.eu.",
      },
      {
        id: "minors",
        title: "23. Minors",
        body: "The Driver App and its features are designed exclusively for adult drivers holding a valid driving licence or relevant professional qualification, and for the company users who manage them. The app is not directed at minors, and we do not knowingly collect personal data from minors. If we become aware that we have processed a minor's personal data through the service without a lawful basis, we will take the necessary steps to delete the data or restrict its processing, taking into account applicable legal retention obligations.",
      },
      {
        id: "changes",
        title: "24. Changes to this notice",
        body: "We may update this notice from time to time — for example, due to changes in law, the introduction of a new feature, or a change in our providers. The version number, effective date, and last-updated date shown at the top of this page always let you check whether you're reading the most current version. For material changes, we will provide notice through an in-app notification or by email. We recommend reviewing this notice periodically.",
      },
      {
        id: "contact",
        title: "25. Contact",
        body: "If you have questions, requests, or concerns about how we handle your data, you can reach us using the contact details below.",
      },
    ],
    contactsTitle: "Contact us about privacy matters",
    contacts: standardContacts,
  },
  terms: {
    title: "Terms of Use – ViaNexis",
    metaDescription:
      "Terms of Use for the ViaNexis platform and ViaNexis Driver application: roles, account use, documents, liability and B2B contractual framework.",
    intro:
      "These Terms apply to use of the ViaNexis platform, the ViaNexis Driver application, the related company portal and backend services. Access may be controlled, pilot or invitation-based. Processing of personal data is described in the Privacy notice; permanent account deletion is a separate request.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Table of contents",
    sections: termsSectionsEn,
    contactsTitle: "Contact",
    contacts: [
      { label: "General contact", value: "info@vianexis.eu" },
      { label: "Legal", value: OPERATOR_EMAILS.legal },
      { label: "Privacy", value: OPERATOR_EMAILS.privacy },
      { label: "Support", value: OPERATOR_EMAILS.support },
      { label: "Security reports", value: OPERATOR_EMAILS.security },
    ],
  },
  dataSafety: {
    title: "ViaNexis Driver – Data Safety Summary",
    metaDescription:
      "A plain-language, table-based summary of what data the ViaNexis Driver App collects, whether it's required, where it comes from, and what happens to it.",
    intro:
      "This page summarizes, in plain language and table form, the categories of data the ViaNexis Driver App processes, whether providing them is required to use the service, whether they come from you directly or are generated automatically by the device/app, what purpose they serve, and whether they're shared with third parties. This summary complements, but does not replace, the full Privacy notice, and it is not the official data-safety declaration published in a given app store's own format (e.g. Google Play's \"Data safety\" section) — those store-specific declarations are always published on the relevant store, following that store's own rules.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    disclaimer:
      "This summary is an informational, plain-language overview and is not the official data-safety declaration of any given app store. The Google Play Data safety form must be completed based on the actual permissions, SDKs and data flows of the distributed app version. The Privacy notice remains the legally controlling document.",
    tableHeaders: {
      category: "Data category",
      collected: "What we collect",
      requirement: "Required / optional",
      origin: "Source",
      purpose: "Purpose",
      sharing: "Shared with third parties",
    },
    rows: [
      {
        category: "Account data",
        collected: "Name, email address, phone number; password stored as a one-way salted hash; company code",
        requirement: "Required to create an account",
        origin: "Provided by the user",
        purpose: "Registration, authentication, account management",
        sharing: "Never sold; shared with the carrier company to the extent needed to confirm the working relationship",
      },
      {
        category: "Location data",
        collected: "GPS coordinates, if location access is granted",
        requirement: "Optional, permission-based",
        origin: "Automatic, from device sensors",
        purpose: "Showing own position or recording a trip-event location (no continuous background tracking)",
        sharing: "Shared with the carrier company as needed for shipment coordination",
      },
      {
        category: "Camera and photos",
        collected: "Photos/videos related to a shipment, damage, or document",
        requirement: "Feature-dependent, usually optional (a gallery photo can be used instead)",
        origin: "Captured or uploaded by the user",
        purpose: "Documentation, claims handling, evidence",
        sharing: "Shared with the carrier company, and with legal representatives in the event of a dispute",
      },
      {
        category: "Transport documents",
        collected: "Copies of CMRs, delivery notes, customs documents, driving licence/ADR certificate",
        requirement: "Feature-dependent; may be required depending on the shipment",
        origin: "Uploaded by the user or a company administrator",
        purpose: "Proof of shipment, compliance evidence",
        sharing: "Shared with the carrier company; with authorities where required by law",
      },
      {
        category: "E-signature data",
        collected: "Signature drawing, timestamp, device identifier",
        requirement: "Optional, depending on the shipment workflow",
        origin: "Captured by the user",
        purpose: "Confirming pickup/delivery, evidence",
        sharing: "Shared with the carrier company; used as evidence in disputes",
      },
      {
        category: "Messages",
        collected: "Content of messages between driver and dispatcher",
        requirement: "Optional, depending on use of the messaging feature",
        origin: "Entered by the user",
        purpose: "Communication, translation assistance, documentation",
        sharing: "Shared with the carrier company; with the translation sub-processor when translation is used",
      },
      {
        category: "Device and diagnostic data",
        collected: "Push-device registration identifier, platform, locale/timezone; security log events",
        requirement: "As needed for service security and push delivery",
        origin: "Automatic / feature-dependent",
        purpose: "Push delivery, security",
        sharing: "With the push provider (FCM); with the hosting environment",
      },
      {
        category: "Push token",
        collected: "Device-bound push notification identifier",
        requirement: "Optional (can be turned off)",
        origin: "Automatic",
        purpose: "Delivering shipment-related notifications",
        sharing: "Shared with the push-notification sub-processor",
      },
      {
        category: "Usage and log data",
        collected: "Login events, feature usage, security events",
        requirement: "Required for security",
        origin: "Automatic",
        purpose: "Fraud and abuse prevention, security",
        sharing: "Not shared with third parties, except where required by law",
      },
    ],
    sections: [
      {
        id: "encryption-in-transit",
        title: "Encryption in transit",
        body: "Traffic between the app and the backend systems is encrypted (TLS). Passwords are never stored in readable form; they are protected using a cryptographic hashing algorithm.",
      },
      {
        id: "deletion-path",
        title: "Deletion path",
        body: "You can submit a deletion, suspension, or unlinking request for your account and data on the Account & data deletion page. Identity verification may be required before the request is fulfilled, and certain data may still be retained afterward for legal or accounting reasons.",
      },
      {
        id: "location-camera-push-audit",
        title: "Location, camera, push, and logging",
        body: "Location tracking and push notifications are permission-based and can be turned off at any time in your phone's system settings. Instead of using the camera, you can select content from your gallery. Security-relevant events (such as login attempts) are logged to help prevent abuse.",
      },
      {
        id: "third-parties",
        title: "Third parties",
        body: "Some data is shared, to the extent needed to run the service, with our data-processor partners (e.g. hosting, push notifications, email delivery) and with the carrier company you have a working relationship with. Beyond that, we only share data with third parties where required by law or justified by a legitimate interest (e.g. pursuing a legal claim).",
      },
      {
        id: "no-sale-no-ad-profiling",
        title: "No data sale, no ad profiling",
        body: "As of the publication of this document, ViaNexis does not sell user data to third parties and does not use it for advertising-based profiling. Based on the current code audit, the distributed Driver App does not include a separate analytics or Crashlytics package. If dependencies or practices change, this section will be updated before the next release.",
      },
    ],
    contactsTitle: "Questions about how we handle data?",
    contacts: standardContacts,
  },
  accountDeletion: {
    title: "Request deletion of your ViaNexis Driver account and data",
    metaDescription:
      "Request deletion, rectification, restriction, or a copy of your ViaNexis Driver account and personal data. Public privacy request form.",
    intro:
      "This page explains what permanent ViaNexis Driver account deletion means, and how it differs from uninstalling the app, signing out, unlinking from a company, and account suspension. You can then submit a privacy request. Recording a request does not mean immediate or automatic deletion: identity verification may be required, and some data may remain for legal, security, audit, or contractual reasons.",
    explanationSections: [
      {
        id: "what-deletion-means",
        title: "What does account deletion mean?",
        body: "A permanent ViaNexis Driver account and data deletion request means that, after review and identification, access linked to the driver account and deletable personal data may be removed or anonymized by the service operator. Recording a request does not by itself confirm whether an account exists for the details you submitted, and it does not trigger immediate automatic deletion.",
      },
      {
        id: "unlink-vs-suspend-vs-delete-vs-uninstall",
        title: "What is not account deletion?",
        body: "1. Uninstalling the app: removing it from your phone does not delete the account or data stored on the server.\n\n2. Signing out: the session ends; the account and data remain.\n\n3. Unlinking from a company: the driver profile and company assignment may be separated without immediately deleting all personal data.\n\n4. Account suspension: sign-in and app access may be temporarily restricted; data usually remains.\n\n5. Permanent account and data deletion request: this is the only account-deletion process. Submit a request on this page without signing in:\nhttps://vianexis.eu/en/driver-app/account-deletion",
      },
      {
        id: "what-may-remain",
        title: "What can be deleted, and what may remain?",
        body: "Deletable or anonymizable data may include account credentials and profile data, push tokens, and other personal data where no other legal basis requires retention. Data may remain where required by law, security, fraud prevention, audit, contract, accountability, or legal claims (for example certain transport documents, signature evidence, security audit logs, or the privacy-request record). Operative use of retained data is restricted. Data retained by a carrier company under its own legal obligations may follow separate rules.",
      },
      {
        id: "process-steps",
        title: "Steps in processing the request",
        body: "1. The request is recorded as an operational case.\n2. Proportionate identity verification where needed.\n3. Determination of ViaNexis and — if relevant — carrier-company controller roles.\n4. Identification of deletable, anonymizable, and retained data categories.\n5. Manual execution (deletion/anonymisation, token revocation, access termination).\n6. Closing notice to the contact address provided.\n\nDo not submit a password, PIN, or full identity document on this first form. The request may require full name, account email or phone number, and a contact email.",
      },
      {
        id: "identity-verification",
        title: "Identity verification and remedies",
        body: "Proportionate identity verification may be requested. For questions or complaints, write to privacy@vianexis.eu; you may also lodge a complaint with the NAIH. Controller: Turul Atilla, sole proprietor and operator of the ViaNexis brand. Application: ViaNexis Driver.",
      },
    ],
    formTitle: "Submit a privacy request",
    formIntro:
      "Complete the required fields. Provide at least one of: account email or account phone. Do not enter a password or PIN.",
    formFields: [
      {
        id: "fullName",
        label: "Full name *",
        required: true,
        placeholder: "First Last",
      },
      {
        id: "accountEmail",
        label: "Account email",
        required: false,
        placeholder: "driver@example.com",
        helpText: "Provide at least an account email or an account phone number.",
      },
      {
        id: "accountPhone",
        label: "Account phone number",
        required: false,
        placeholder: "+36 …",
        helpText: "Provide at least an account email or an account phone number.",
      },
      {
        id: "contactEmail",
        label: "Contact email *",
        required: true,
        placeholder: "contact@example.com",
      },
      {
        id: "country",
        label: "Country *",
        required: true,
        placeholder: "HU",
        helpText: "Two-letter country code, for example HU.",
      },
      {
        id: "companyName",
        label: "Company name",
        required: false,
      },
      {
        id: "driverIdentifier",
        label: "Driver identifier",
        required: false,
      },
      {
        id: "preferredLanguage",
        label: "Preferred language",
        required: false,
        placeholder: "en",
      },
      {
        id: "message",
        label: "Message",
        required: false,
      },
      {
        id: "privacyAccepted",
        label: "I accept the privacy notice. *",
        required: true,
      },
      {
        id: "ownershipConfirmed",
        label:
          "I confirm that this request concerns my own account or an account I am lawfully representing. *",
        required: true,
      },
    ],
    requestTypeLabel: "Request type *",
    requestTypePlaceholder: "Select a request type",
    requestTypes: [
      {
        value: "full_account_deletion",
        label: "Delete full ViaNexis Driver account",
        description: "Request discontinuation of the driver account and deletable personal data.",
      },
      {
        value: "personal_data_deletion",
        label: "Request deletion of personal data",
        description: "Deletion or anonymization of specific personal data where legally possible.",
      },
      {
        value: "company_link_termination",
        label: "Request ending company link",
        description: "End company assignment without full account deletion.",
      },
      {
        value: "data_copy",
        label: "Request a copy of data",
        description: "Request a copy of personal data being processed.",
      },
      {
        value: "data_rectification",
        label: "Rectify data",
        description: "Request correction of inaccurate personal data.",
      },
      {
        value: "processing_restriction",
        label: "Restrict processing",
        description: "Request restriction of processing where applicable.",
      },
      {
        value: "other_privacy",
        label: "Other privacy request",
        description: "Any other GDPR or privacy-related request.",
      },
    ],
    confirmationLabel:
      "I confirm that the information provided is accurate and that I am authorized to submit this request.",
    submitLabel: "Submit request",
    submittingLabel: "Submitting…",
    successTitle: "We have recorded your request",
    successMessage:
      "If the submitted details correspond to a ViaNexis Driver account, the request has been recorded. We will provide further information after the required verification.",
    errorMessages: {
      required: "This field is required.",
      emailInvalid: "Please enter a valid email address.",
      requestTypeRequired: "Please select a request type.",
      confirmationRequired:
        "You must accept the privacy notice and confirm ownership.",
      accountContactRequired:
        "Provide at least an account email or an account phone number.",
      submitFailed:
        "We could not submit your request. Please try again, or email privacy@vianexis.eu.",
      network:
        "A network error occurred. Check your connection and try again.",
    },
    contactsTitle: "Contact",
    contacts: standardContacts,
  },
};
