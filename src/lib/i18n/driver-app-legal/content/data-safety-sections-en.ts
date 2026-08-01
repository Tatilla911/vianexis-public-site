import type { LegalSection } from "../types";

export const dataSafetySectionsEn: LegalSection[] = [
  {
    id: "purpose",
    title: "1. Purpose of this document",
    body: "This document is a plain-language summary of data-handling and security characteristics of the ViaNexis Driver application. It complements, but does not replace, the Privacy notice. It is not an official copy of the Google Play Data safety form and is not the store’s own declaration.",
  },
  {
    id: "app-and-version",
    title: "2. Covered application and version",
    body: "Covered application: ViaNexis Driver. This summary aligns with the document version shown in the public legal package and with a code audit of the currently distributed app features. Features may differ by environment. Provider: Turul Atilla, sole proprietor and operator of the ViaNexis brand. ViaNexis is not presented as a separate legal entity.",
  },
  {
    id: "data-overview",
    title: "3. What data the application may process",
    body: "The application may process account, profile, trip, document, message and device data needed to operate the service. Some data arise only if the user grants permission or uses a feature (location, camera, microphone, notifications). Automated output (OCR, translation, speech recognition) may be assistive only.",
  },
  {
    id: "account-and-profile",
    title: "4. Account and profile data",
    body: "May include name, email, phone number, company affiliation, driver profile and session data. Authentication tokens may be kept in protected on-device storage. A local PIN may be stored as a salted hash, not as plaintext. Server-side password handling is described in the Privacy notice.",
  },
  {
    id: "trip-and-company-data",
    title: "5. Trip and company data",
    body: "May include trip identifiers, statuses, stops, pick-up/delivery data, vehicle and trailer data, licence plates, company settings and related operational metadata. These support the carrier company’s workflows. ViaNexis is a technology provider, not a carrier.",
  },
  {
    id: "location",
    title: "6. Location",
    body: "The current Android manifest declares ACCESS_FINE_LOCATION and ACCESS_COARSE_LOCATION; ACCESS_BACKGROUND_LOCATION is not declared. Map own-position display is designed as when-in-use, local presentation.\n\nSome features — for example trip-related location capture, checklists, signature metadata or a company alert — may record location during a user action, and that data may be sent to the backend or another channel the user initiates. Location may be inaccurate. Revoking permission may limit location-dependent features.",
  },
  {
    id: "camera-photos-videos",
    title: "7. Camera, photos and videos",
    body: "Camera and media-library access may be used for trips, documents, damage records or attachments. Content may be uploaded to the backend. Do not capture media in a dangerous way while driving. The feature is typically optional, but a company process may make it required for a task.",
  },
  {
    id: "documents-and-signatures",
    title: "8. Documents and signatures",
    body: "Uploaded documents and captured signatures support trip evidence. A timestamp and optional location may be attached. A digital copy is not necessarily an original instrument, and a captured signature is not automatically a qualified electronic signature. See the Terms of Use and Responsible Use documents.",
  },
  {
    id: "messages-and-notifications",
    title: "9. Messages and notifications",
    body: "In-app messages and attachments support operational communication and may be stored in the backend. Notifications may be operational. Under the current product intent there is no marketing push. Notifications may be delayed or may fail; they are not an emergency hotline.",
  },
  {
    id: "push-token",
    title: "10. Push token",
    body: "When push is active in the relevant build and environment, the app may process a device/install-bound push token via Firebase Cloud Messaging (FCM) and register it with the backend. The token is needed for delivery. Notification permission can be revoked in system settings. Lock-screen previews may use a privacy-cautious local display path.",
  },
  {
    id: "ocr-on-device",
    title: "11. OCR and on-device processing",
    body: "Some document aids may use Google ML Kit text recognition on the device. OCR may misread data. OCR output is not by itself a certified copy. Human review is required. This audit does not treat a cloud OCR vendor as active merely because a dependency exists.",
  },
  {
    id: "audio-and-speech",
    title: "12. Audio and speech recognition",
    body: "If the user grants microphone permission, speech recognition or audio recording may assist input. Recognition may use the operating system or related services, and some paths may upload audio to the backend for transcription. The feature is optional. Completeness of iOS usage descriptions must be verified before an iOS store release.",
  },
  {
    id: "device-and-diagnostics",
    title: "13. Device and diagnostic data",
    body: "May include platform markers, language, timezone, identifiers related to push-device registration, and security-relevant events. Based on the current code audit, we did not identify a separate Crashlytics, Sentry or analytics SDK in the distributed app package. Local debug logging may occur in development builds.",
  },
  {
    id: "third-party-providers",
    title: "14. Third-party providers",
    body: "Processors may be used to provide the service, such as hosting, database and file storage, and push delivery (FCM and, where applicable, APNs). Map-tile, translation or other external providers are treated as active only when enabled in the relevant environment. Google Play’s “sharing” concept differs from everyday language; classifying service providers requires operational and legal decisions.",
  },
  {
    id: "data-sharing",
    title: "15. Data sharing",
    body: "Data may be available to authorised users of the carrier company according to the relationship and feature. Authority or partner sharing may occur only with an appropriate legal basis or company decision. We do not claim that “no data is shared,” and based on the current audit we do not claim sale of data or advertising profiling. Details: Privacy notice.",
  },
  {
    id: "encryption-and-security",
    title: "16. Encryption and security",
    body: "Data transmission uses a TLS connection when the service is available and properly configured for HTTPS. We do not claim that every build and every secondary path uses an encrypted channel under all circumstances.\n\nOn the device, authentication tokens and the local PIN hash may be protected with flutter_secure_storage, including the Android encryptedSharedPreferences option. We do not claim that every locally stored document or upload queue is encrypted at rest. We do not claim an independent security review or that the system is unbreachable.",
  },
  {
    id: "offline-storage",
    title: "17. Offline storage",
    body: "Some data and upload queues may remain temporarily on the device (for example SharedPreferences and application files). Synchronisation may be delayed or may fail. Uninstalling the app may cause local data loss without deleting the server-side account.",
  },
  {
    id: "retention",
    title: "18. Retention",
    body: "Retention periods are determined by the purpose of the service, the carrier company’s obligations and applicable law. This page does not invent concrete retention deadlines in days. Details: Privacy notice.",
  },
  {
    id: "deletion-and-user-control",
    title: "19. Deletion and user control",
    body: "Deletion requests are handled through a controlled process. Uninstalling the app, signing out and unlinking from a company are not the same as permanent account deletion. A request does not trigger immediate automatic full data deletion.\n\nRequest deletion of your account and associated data:\nhttps://vianexis.eu/en/driver-app/account-deletion\n\nPrivacy request form:\nhttps://vianexis.eu/en/privacy-request\n\nOperating-system permissions (location, camera, microphone, notifications) can be managed in device settings.",
  },
  {
    id: "children",
    title: "20. Children",
    body: "ViaNexis Driver is a professional driver application. It is not a service directed at children and is not aimed at users under 13. We do not knowingly collect children’s data.",
  },
  {
    id: "play-data-safety-relation",
    title: "21. Relationship to Google Play Data safety",
    body: "The Google Play Data safety form must always be interpreted against the actual permissions, SDKs and data flows of the distributed ViaNexis Driver app version. This page is not the Play form, does not mean Google approval, and does not replace the store declaration.",
  },
  {
    id: "contact",
    title: "22. Contact",
    body: "Privacy: privacy@vianexis.eu\nSupport: support@vianexis.eu\nSecurity: security@vianexis.eu\nLegal: legal@vianexis.eu\nWeb: https://vianexis.eu",
  },
  {
    id: "final-provisions",
    title: "23. Final provisions",
    body: "Related documents:\nPrivacy notice: https://vianexis.eu/en/privacy\nTerms of Use: https://vianexis.eu/en/terms\nResponsible Use: https://vianexis.eu/en/disclaimers\nAccount deletion: https://vianexis.eu/en/driver-app/account-deletion\n\nIn case of conflict, the Privacy notice and applicable law prevail. This document is officially available in Hungarian and English.",
  },
];
