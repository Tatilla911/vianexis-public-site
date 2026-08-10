import published from "./published-manuals.json";

export type ManualAccessLevel = "PUBLIC" | "CUSTOMER" | "INTERNAL";

export type ManualCatalogEntry = {
  id: string;
  order: number;
  accessLevel: ManualAccessLevel;
  role: { hu: string; en: string };
  title: { hu: string; en: string };
  description: { hu: string; en: string };
  version: string;
  updatedAt: string;
  documentId: { hu: string; en: string };
  /** Stable public filename when PUBLIC; otherwise null (never publish path). */
  fileName: { hu: string; en: string } | null;
};

/**
 * Structured ViaNexis manuals catalog for the public documentation library.
 * INTERNAL entries are intentionally omitted from the public page.
 * PUBLIC PDF bytes are synced into /public/docs/manuals via manuals:publish.
 */
export const manualsCatalog: ManualCatalogEntry[] = [
  {
    id: "quick-start",
    order: 10,
    accessLevel: "PUBLIC",
    role: { hu: "Gyors kezdés", en: "Quick Start" },
    title: {
      hu: "ViaNexis – Gyors kezdési útmutató",
      en: "ViaNexis – Quick Start Guide",
    },
    description: {
      hu: "Rövid bevezető az első naphoz és az első élő fuvarhoz.",
      en: "A short introduction for day one and the first live trip.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: {
      hu: "VN-GUIDE-QUICK-START-HU",
      en: "VN-GUIDE-QUICK-START-EN",
    },
    fileName: {
      hu: "ViaNexis-Gyors-Kezdesi-Utmutato.pdf",
      en: "ViaNexis-Quick-Start-Guide.pdf",
    },
  },
  {
    id: "driver",
    order: 20,
    accessLevel: "PUBLIC",
    role: { hu: "Sofőr", en: "Driver" },
    title: {
      hu: "ViaNexis – Sofőr kézikönyv",
      en: "ViaNexis – Driver Manual",
    },
    description: {
      hu: "Sofőrapp használata: fuvarok, dokumentumok, aláírás és offline munka.",
      en: "Using the driver app: trips, documents, signatures and offline work.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: { hu: "VN-GUIDE-DRIVER-HU", en: "VN-GUIDE-DRIVER-EN" },
    fileName: {
      hu: "ViaNexis-Sofor-Kezikonyv.pdf",
      en: "ViaNexis-Driver-Manual.pdf",
    },
  },
  {
    id: "company-owner",
    order: 30,
    accessLevel: "CUSTOMER",
    role: { hu: "Cégvezető", en: "Company Owner" },
    title: {
      hu: "ViaNexis – Cégvezetői kézikönyv",
      en: "ViaNexis – Company Owner Manual",
    },
    description: {
      hu: "Cégvezetői áttekintés: bevezetés, felelősség és auditálhatóság.",
      en: "Owner overview: onboarding, responsibility and auditability.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: {
      hu: "VN-GUIDE-COMPANY-OWNER-HU",
      en: "VN-GUIDE-COMPANY-OWNER-EN",
    },
    fileName: null,
  },
  {
    id: "dispatcher",
    order: 40,
    accessLevel: "CUSTOMER",
    role: { hu: "Diszpécser", en: "Dispatcher" },
    title: {
      hu: "ViaNexis – Diszpécser kézikönyv",
      en: "ViaNexis – Dispatcher Manual",
    },
    description: {
      hu: "Diszpécseri napi munka: fuvarok, kivételek és dokumentumkövetés.",
      en: "Dispatcher day-to-day: trips, exceptions and document follow-up.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: { hu: "VN-GUIDE-DISPATCHER-HU", en: "VN-GUIDE-DISPATCHER-EN" },
    fileName: null,
  },
  {
    id: "workshop",
    order: 50,
    accessLevel: "CUSTOMER",
    role: { hu: "Műhely", en: "Workshop" },
    title: {
      hu: "ViaNexis – Műhely kézikönyv",
      en: "ViaNexis – Workshop Manual",
    },
    description: {
      hu: "Műhelyfolyamatok: hibajelentés, javítás és flotta-biztonság.",
      en: "Workshop flows: defects, repairs and fleet safety.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: { hu: "VN-GUIDE-WORKSHOP-HU", en: "VN-GUIDE-WORKSHOP-EN" },
    fileName: null,
  },
  {
    id: "documentation-claims",
    order: 60,
    accessLevel: "CUSTOMER",
    role: { hu: "Dokumentáció / kárrendezés", en: "Documentation / Claims" },
    title: {
      hu: "ViaNexis – Dokumentációs és kárrendezési kézikönyv",
      en: "ViaNexis – Documentation and Claims Manual",
    },
    description: {
      hu: "Dokumentációs és kárrendezési határok, audit és aláírás.",
      en: "Documentation and claims boundaries, audit and signatures.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: {
      hu: "VN-GUIDE-DOCS-CLAIMS-HU",
      en: "VN-GUIDE-DOCS-CLAIMS-EN",
    },
    fileName: null,
  },
  {
    id: "legal-safety",
    order: 70,
    accessLevel: "CUSTOMER",
    role: { hu: "Jogi / biztonság", en: "Legal / Safety" },
    title: {
      hu: "ViaNexis – Jogi és biztonsági útmutató",
      en: "ViaNexis – Legal and Safety Guide",
    },
    description: {
      hu: "Jogi és biztonsági keretek: GDPR, CMR, ADR és AI határok.",
      en: "Legal and safety framing: GDPR, CMR, ADR and AI boundaries.",
    },
    version: "1.0",
    updatedAt: "2026-08-10",
    documentId: {
      hu: "VN-GUIDE-LEGAL-SAFETY-HU",
      en: "VN-GUIDE-LEGAL-SAFETY-EN",
    },
    fileName: null,
  },
  {
    id: "integration-overview",
    order: 110,
    accessLevel: "CUSTOMER",
    role: { hu: "Technical Review", en: "Technical Review" },
    title: {
      hu: "ViaNexis – Integration Overview",
      en: "ViaNexis – Integration Overview",
    },
    description: {
      hu: "Confidential technical review: integration landscape, Telegram model and customer IT process.",
      en: "Confidential technical review: integration landscape, Telegram model and customer IT process.",
    },
    version: "1.0",
    updatedAt: "2026-07-29",
    documentId: {
      hu: "VN-TECH-INTEGRATION-OVERVIEW-EN",
      en: "VN-TECH-INTEGRATION-OVERVIEW-EN",
    },
    fileName: null,
  },
  {
    id: "ai-capabilities-overview",
    order: 120,
    accessLevel: "CUSTOMER",
    role: { hu: "Technical Review", en: "Technical Review" },
    title: {
      hu: "ViaNexis – AI Capabilities Overview",
      en: "ViaNexis – AI Capabilities Overview",
    },
    description: {
      hu: "Confidential technical review: assistive AI capabilities, governance and customer AI coexistence.",
      en: "Confidential technical review: assistive AI capabilities, governance and customer AI coexistence.",
    },
    version: "1.0",
    updatedAt: "2026-07-29",
    documentId: {
      hu: "VN-TECH-AI-CAPABILITIES-EN",
      en: "VN-TECH-AI-CAPABILITIES-EN",
    },
    fileName: null,
  },
];

export type ManualUiLang = "hu" | "en";

export function resolveManualLang(locale: string): ManualUiLang {
  return locale === "hu" ? "hu" : "en";
}

export function publicManualsForPage(): ManualCatalogEntry[] {
  return manualsCatalog
    .filter((m) => m.accessLevel === "PUBLIC")
    .sort((a, b) => a.order - b.order);
}

export function customerManualsForPage(): ManualCatalogEntry[] {
  return manualsCatalog
    .filter((m) => m.accessLevel === "CUSTOMER")
    .sort((a, b) => a.order - b.order);
}

export function publicPdfHref(
  entry: ManualCatalogEntry,
  lang: ManualUiLang,
): string | null {
  if (entry.accessLevel !== "PUBLIC" || !entry.fileName) return null;
  return `/docs/manuals/${lang}/${entry.fileName[lang]}`;
}

/** Sync metadata written by backend `npm run manuals:publish`. */
export const publishedManualsMeta = published;
