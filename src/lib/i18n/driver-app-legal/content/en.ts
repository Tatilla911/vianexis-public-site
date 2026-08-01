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
          "ViaNexis account and authentication: account creation, sign-in, password/PIN handling, access provisioning — performance of a contract (GDPR Art. 6(1)(b)), and legitimate interest to the extent needed for platform security (GDPR Art. 6(1)(f))",
          "Company shipment workflow: assignments, statuses, documents and company workflows — performance of the contract/relationship between the driver and the carrier company, or, where ViaNexis acts on the company's instructions, processing under the company's controller instructions",
          "Platform security: abuse prevention, detection of unauthorized access, system-operation logs — legitimate interest (GDPR Art. 6(1)(f))",
          "Legal and accounting obligations: retaining records required by law — compliance with a legal obligation (GDPR Art. 6(1)(c)), where applicable",
          "Optional location-dependent feature: displaying own position or recording a trip-related location — alongside the contractual/legitimate-interest purpose of the feature, system permission is required; permission-based processing can be withdrawn in device settings (GDPR Art. 6(1)(a)/(f)/(b) depending on the feature)",
          "Operational notifications: delivering shipment-related push notifications — performance of a contract / legitimate interest for operating the service, together with system notification permission",
          "Support and privacy requests: handling customer-support and privacy requests — legitimate interest and/or compliance with a legal obligation",
          "Legal claims: establishing, exercising or defending legal claims — legitimate interest and, where applicable, legal obligation",
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
        body: "The Driver App lets you capture an electronic signature (a touchscreen signature drawing) to confirm shipment events such as pickup or delivery. Alongside the signature, we may also record supporting data such as the timestamp and — where permitted and recorded during that feature — location data, because together these can serve as evidence in the event of a dispute.\n\nThe evidential value and legal effect of a recorded signature depend on the type of document, the circumstances of capture, and the applicable law. ViaNexis does not guarantee that a recorded signature qualifies as a qualified electronic signature in every country or procedure, or that it is by itself fully conclusive evidence. See Section 9 of the Terms of use for more detail.",
      },
      {
        id: "messages-and-translation",
        title: "12. Messages and translation",
        body: "The Driver App includes a built-in messaging feature between a driver and a dispatcher or company contact. To make communication easier, the system may offer machine (automatic) translation when the parties use different languages. Machine translation is a convenience feature — it does not replace a certified or official translation, and it can occasionally be inaccurate. For critical content (for example, instructions concerning dangerous goods), we recommend seeking human confirmation.\n\nMessage content may be logged and retained in connection with the relevant shipment, in accordance with the principles in Section 18, including for the purpose of clarifying disputes.",
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
        body: "Signing out, uninstalling the app, unlinking from a company, and suspending an account are not the same as permanent account deletion. Permanent account deletion is a separate process: a request submitted on the public page (https://vianexis.eu/en/driver-app/account-deletion).\n\nThe backend records the request as an operational case record; the request itself does not trigger immediate automatic full data deletion. After identification, deletable account data may be deleted or anonymised; data may remain where required by law, security, fraud prevention, audit, contract, or legal claims. Operative use of retained data is restricted. The requester receives further information at the contact address provided. The neutral acknowledgement does not disclose whether an account exists for the submitted details.",
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
        body: "We apply appropriate technical and organizational measures to protect personal data. These include, among others, encrypted (TLS) transmission of data between the app and backend systems, storage of passwords using a one-way salted hash (the original password is not stored), access restricted by permission level, and logging of security-relevant events.\n\nWhile we take reasonable steps to protect your data, no system can be considered completely secure. If you notice or suspect a data breach, please report it immediately to security@vianexis.eu.",
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
    title: "ViaNexis Driver App Terms of Use",
    metaDescription:
      "Terms of use for the ViaNexis Driver App: account rules, acceptable use, the limits of the service, and your obligations as a driver or carrier company.",
    intro:
      "These Terms of Use (the \"Terms\") govern your use of the ViaNexis Driver App mobile application (the \"Driver App\" or the \"app\"). By installing the app, registering an account, or using any feature of the service, you accept these Terms. If you do not agree with them, please do not use the app, and let your carrier company know.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Table of contents",
    sections: [
      {
        id: "intro-and-acceptance",
        title: "1. Introduction and acceptance",
        body: `${OPERATOR_STATEMENT_EN} These Terms govern the use of the Driver App and the backend services connected to it. Accepting these Terms is a condition of registering an account or accepting an invitation from a carrier company.`,
      },
      {
        id: "service-description",
        title: "2. Description of the service",
        body: "The Driver App is a mobile application for drivers that supports managing shipment-related tasks, documents, and events: viewing your shipment list and stops, uploading documents, capturing electronic signatures, completing checklists, recording incidents, messaging with dispatch, and — to a limited extent — offline use. The Driver App connects to the carrier company's own administrative/company-facing surface (the portal), through which the company assigns shipments and manages permissions.\n\nThe service is currently available in a controlled, invitation-based (pilot) form, so some features may still be under development or may be available to a different extent depending on the carrier company.",
      },
      {
        id: "eligibility-and-registration",
        title: "3. Eligibility and account registration",
        body: "To use the Driver App, you must be an adult and, depending on the nature of the transport work, hold a valid driving licence and any other qualification required for the shipment in question (e.g. an ADR certificate). Accounts are typically created based on an invitation from a carrier company and/or a company identifier (company code). Information provided during registration must be accurate and kept up to date.",
      },
      {
        id: "personal-account-security",
        title: "4. Account security: a personal, non-shareable account",
        body: "Your Driver App account is personal and intended solely for your own individual use. Sharing your login credentials (password, PIN) with any other person — including other drivers, dispatchers, or company administrators — is prohibited. The account must not be created or used as a shared \"company driver account\" used jointly by multiple drivers: every driver must have their own individual account.\n\nYou are responsible for activity on your account, including activity resulting from credentials you shared with someone else. If you suspect unauthorized access to your account, report it immediately to security@vianexis.eu.",
      },
      {
        id: "company-managed-driver-profiles",
        title: "5. Company-managed driver profiles",
        body: "A carrier company's administrator or dispatcher can manage certain aspects of a driver's profile through the company portal — for example, assigning shipments, granting or revoking access, or deactivating the profile when the working relationship ends. This kind of company-level management does not, and cannot, extend to the driver's personal login credentials.\n\nUnder no circumstances may a carrier company ask a driver for their password or PIN, and a carrier company is not entitled to log into a driver's account using the driver's own credentials. If a carrier company asks you to do this, please decline, and report it to security@vianexis.eu or support@vianexis.eu.",
      },
      {
        id: "permissions-and-device-access",
        title: "6. Permissions and device access",
        body: "Certain app features (such as location, camera, and push notifications) require separate permissions granted at the operating-system level. Except for the basic data needed for the account functionality described in Section 3, granting these permissions is voluntary and can be revoked at any time in your phone's system settings. Some features will work in a limited way, or not at all, without the corresponding permission; this is not considered a defect of the app.",
      },
      {
        id: "acceptable-use",
        title: "7. Acceptable use",
        body: "The following conduct is prohibited when using the Driver App: uploading a false, misleading, or manipulated document, photo, or signature; recording data or a signature on behalf of another person without their consent; attempting unauthorized access to another account or to any other part of the system; using the app in an abusive way or in a way that adversely affects the system's operation (e.g. automated queries, attempts to bypass security mechanisms); and uploading unlawful content or engaging in unlawful activity through the app.",
      },
      {
        id: "uploaded-content-responsibility",
        title: "8. Uploaded content and responsibility",
        body: "The driver, or as applicable the carrier company, is responsible for the authenticity, lawfulness, and genuine relevance to the shipment of any document, photo, video, or other content uploaded to the Driver App. This obligation does not affect the applicable data-protection responsibilities of ViaNexis or the transport company. ViaNexis does not verify or guarantee the authenticity or legal adequacy of uploaded content and is not liable for consequences arising from false or inaccurate content being uploaded.",
      },
      {
        id: "e-signature-legal-effect",
        title: "9. Legal effect of e-signatures",
        body: "The evidential value and legal effect of a recorded signature depend on the type of document, the circumstances of capture, and the applicable law. ViaNexis does not guarantee that a recorded signature qualifies as a qualified electronic signature in every country or procedure, or that it is by itself fully conclusive evidence. For some document types, the law may require a qualified or advanced electronic signature, which a simple signature drawing captured in the app may not by itself satisfy.",
      },
      {
        id: "offline-mode-and-sync",
        title: "10. Offline mode and synchronization",
        body: "Certain Driver App features (such as data entry and document upload) may be available offline, with data synchronizing to the backend once connectivity is restored. Offline synchronization is under continuous development, so full, guaranteed offline functionality covering every scenario is not currently provided. Until synchronization has occurred, offline-captured data exists only on your device and can be lost if the device is damaged, lost, or has its app data cleared. For critical data, we recommend confirming that synchronization has completed as soon as connectivity is restored.",
      },
      {
        id: "automated-checks-and-ai-assistance",
        title: "11. Automated checks and AI assistance",
        body: "Automated and AI-based assistive features available in the app (such as document recognition, flagging missing data, or translation suggestions) are advisory only and do not replace the user's or the carrier company's own review and decision-making. These features do not replace a legal, customs, or ADR compliance decision, and are not to be treated as an official or professional opinion.",
      },
      {
        id: "not-an-authority-or-emergency-service",
        title: "12. Not an authority, legal advisor, or emergency service",
        body: "ViaNexis and the Driver App are not a government authority, do not provide legal advice, and are not an emergency service. Any warning, suggestion, or automated check result shown in the app is informational only and never replaces official proceedings, legal advice, or contacting emergency services (e.g. police, ambulance, disaster management) in an emergency. In an emergency, always call the local emergency number (112 within the European Union).",
      },
      {
        id: "adr-customs-traffic-compliance",
        title: "13. ADR, customs, and traffic compliance",
        body: "ViaNexis does not guarantee that using the Driver App, by itself, ensures compliance with dangerous-goods transport (ADR), customs, or traffic regulations. Certain app features (such as checklists and document reminders) may help you keep track of compliance, but using them does not relieve the driver or the carrier company of the obligation to know and follow the official rules that apply to them.",
      },
      {
        id: "driver-and-company-obligations",
        title: "14. Obligations of the driver and the carrier company",
        body: "It is the sole responsibility of the driver and the carrier company to comply with applicable laws, regulatory requirements, and obligations arising from the transport contract, including maintaining the validity of a driving licence, ADR certificate, and any other required documents, and ensuring the accuracy and timeliness of data recorded in the app.",
      },
      {
        id: "availability-and-maintenance",
        title: "15. Availability and maintenance",
        body: "ViaNexis works to keep the Driver App running continuously and reliably, but — particularly given the service's current controlled pilot status — does not guarantee uninterrupted availability. The service may be temporarily limited or unavailable due to planned maintenance, updates, or unforeseen technical issues. Where possible, we will provide advance notice of planned maintenance.",
      },
      {
        id: "intellectual-property",
        title: "16. Intellectual property",
        body: "The Driver App, its name, branding, source code, and related documentation are the intellectual property of ViaNexis and/or the operator. Under these Terms, you are granted only the right to use the app as intended, and no other right (e.g. copying, reverse engineering, distribution) is granted. As for documents and photos you upload, you or the carrier company retain your rights to that content, while granting ViaNexis the license needed to provide the service (e.g. storing, displaying, and processing it as part of the shipment workflow).",
      },
      {
        id: "third-party-services",
        title: "17. Third-party services",
        body: "The Driver App relies on third-party providers for certain features (e.g. push notifications, mapping, cloud storage). ViaNexis is not liable for damages arising from an outage, unavailability, or malfunction of such third-party providers, although we take care to select reliable partners.",
      },
      {
        id: "limitation-of-liability",
        title: "18. Limitation of liability",
        body: "To the fullest extent permitted by applicable law, ViaNexis is not liable for indirect, incidental, or consequential damages, lost profits, data loss, or fines or sanctions arising from a failure to comply with regulatory requirements (e.g. ADR, customs, or traffic rules), whether such failure results from use of the Driver App or the inability to use it. This limitation does not affect any liability that cannot be limited or excluded under applicable law.",
      },
      {
        id: "disclaimer-of-warranties",
        title: "19. Disclaimer of warranties",
        body: "The Driver App is provided on an \"as is\" and \"as available\" basis, reflecting the service's current controlled pilot status. To the extent permitted by law, ViaNexis disclaims all express or implied warranties, including, without limitation, any warranty of error-free operation, continuous availability, or fitness for a particular purpose (such as regulatory compliance).",
      },
      {
        id: "suspension-and-termination",
        title: "20. Suspension and termination",
        body: "ViaNexis reserves the right to suspend or terminate an account in the event of a breach of these Terms, a security risk, or suspected abuse. You may stop using your account at any time; the detailed options for managing your account and data (unlinking, suspension, deletion, uninstalling) are described on the Account & data deletion page.",
      },
      {
        id: "changes-to-terms",
        title: "21. Changes to these Terms",
        body: "We may update these Terms from time to time — for example, due to changes in law, the introduction of a new feature, or business reasons. Updated Terms take effect from the effective date shown at the top of this document. We will provide notice of material changes through an in-app notification or by email. Continued use of the app after a change takes effect constitutes acceptance of the updated Terms.",
      },
      {
        id: "governing-law-and-disputes",
        title: "22. Governing law and dispute resolution",
        body: "These Terms and any dispute arising from them are governed by the laws of Hungary. The parties will endeavor to resolve any dispute primarily through discussion, via legal@vianexis.eu. Failing that, and absent a mandatory rule to the contrary, the Hungarian courts have jurisdiction over the dispute.",
      },
      {
        id: "contact",
        title: "23. Contact",
        body: "If you have questions about these Terms, you can reach us using the contact details below.",
      },
    ],
    contactsTitle: "Contact us about these Terms",
    contacts: standardContacts,
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
        body: "As of the publication of this document, ViaNexis does not sell user data to third parties and does not use it for advertising-based profiling. This statement reflects our current product intent; a full audit of the data practices of embedded software development kits (SDKs) and subcontractors is in progress, and this section will be refined if that audit identifies any need to do so.",
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
      "This page explains what account deletion means, how it differs from ending a company link, suspension, and uninstalling the app, and lets you submit a privacy request. Submitting a request does not delete the account immediately: identity verification may be required, and some data may remain for legal, security, audit, or contractual reasons.",
    explanationSections: [
      {
        id: "what-deletion-means",
        title: "What does account deletion mean?",
        body: "A ViaNexis Driver account deletion request means that, after review, access linked to the driver account and deletable personal data will be removed or anonymized by the service operator. Recording a request does not automatically confirm whether an account exists for the details you submitted.",
      },
      {
        id: "unlink-vs-suspend-vs-delete-vs-uninstall",
        title: "Company link, suspension, deletion, and uninstalling the app",
        body: "Ending a company link: the driver profile and company assignment may be separated without immediately deleting all personal data.\n\nSuspension: sign-in and app access may be temporarily restricted; data usually remains.\n\nAccount deletion: a request to discontinue the ViaNexis Driver account and deletable personal data.\n\nUninstalling the app from your phone does not delete the account or data stored on our servers.",
      },
      {
        id: "what-may-remain",
        title: "What can be deleted, and what may remain?",
        body: "Account credentials and profile data may be deleted or anonymized where no other legal basis requires retention. Data may remain where required by law, security, fraud prevention, audit, contract, or legal claims. Access to retained data is restricted. Documents retained by a company under its own legal obligations may follow separate rules.",
      },
      {
        id: "identity-verification",
        title: "Identity verification",
        body: "Identity verification may follow the request. Do not submit a password, PIN, or full identity document on this first form. You will be informed when the request is closed, using the contact address you provide.",
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
