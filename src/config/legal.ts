/**
 * Central ViaNexis public-site legal configuration.
 * Only values found in this repository / confirmed operator config are filled.
 * Missing publish-critical fields use status: "requires_owner_input".
 */

export type LegalFieldStatus = "confirmed" | "requires_owner_input" | "requires_audit";

export type LegalConfigField<T> = {
  value: T | null;
  status: LegalFieldStatus;
  note?: string;
};

function confirmed<T>(value: T, note?: string): LegalConfigField<T> {
  return { value, status: "confirmed", note };
}

function pending<T = string>(note: string): LegalConfigField<T> {
  return { value: null, status: "requires_owner_input", note };
}

function auditPending<T = string>(note: string): LegalConfigField<T> {
  return { value: null, status: "requires_audit", note };
}

const DOMAIN = "https://vianexis.eu";

/**
 * Show internal testing release banner on legal pages.
 * Set false before production legal publication after counsel review.
 */
export const LEGAL_SHOW_TESTING_RELEASE_BANNER = true;

/**
 * Show counsel-review notice in non-production builds only.
 * Controlled by NODE_ENV !== "production" when true.
 */
export const LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV = true;

export const legalConfig = {
  legalBrandName: confirmed("ViaNexis"),
  driverAppName: confirmed("ViaNexis Driver"),
  legalEntityName: confirmed("Turul Atilla"),
  legalEntityType: confirmed({
    hu: "egyéni vállalkozó",
    en: "sole proprietor",
  }),
  /** Present in existing driver-app-legal/operator.ts in this repository. */
  registeredAddress: confirmed({
    hu: "5093 Vezseny, Földvári utca 22., Magyarország",
    en: "5093 Vezseny, Földvári utca 22., Hungary",
  }),
  registrationNumber: confirmed("61994454", "Egyéni vállalkozói nyilvántartási szám (repo operator.ts)"),
  taxNumber: confirmed("79264161-1-36", "Repo operator.ts"),
  euVatNumber: confirmed("HU79264161", "Repo operator.ts"),
  privacyEmail: confirmed("privacy@vianexis.eu"),
  gdprEmail: confirmed("gdpr@vianexis.eu"),
  legalEmail: confirmed("legal@vianexis.eu"),
  supportEmail: confirmed("support@vianexis.eu"),
  securityEmail: confirmed("security@vianexis.eu"),
  /** General site contact — not a substitute for privacy@ */
  generalContactEmail: confirmed("info@vianexis.eu"),
  websiteUrl: confirmed(DOMAIN),
  privacyPolicyVersion: confirmed("1.0"),
  privacyPolicyEffectiveDate: confirmed("2026-07-31"),
  privacyPolicyLastUpdatedDate: confirmed("2026-07-31"),
  supervisoryAuthorityName: confirmed({
    hu: "Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)",
    en: "Hungarian National Authority for Data Protection and Freedom of Information (NAIH)",
  }),
  supervisoryAuthorityUrl: confirmed("https://www.naih.hu"),
  supervisoryAuthorityPostalAddress: pending<string>(
    "Official NAIH postal address not verified in this repository — do not invent.",
  ),
  supervisoryAuthorityPhone: pending<string>(
    "Official NAIH phone not verified in this repository — do not invent.",
  ),
  dpoName: pending<string>("No DPO designation found in repository."),
  dpoEmail: pending<string>("No separate DPO email found; use privacy@ / gdpr@ until decided."),
  privacyUrlHu: confirmed(`${DOMAIN}/hu/privacy`),
  privacyUrlEn: confirmed(`${DOMAIN}/en/privacy`),
  accountDeletionUrlHu: confirmed(`${DOMAIN}/hu/driver-app/account-deletion`),
  accountDeletionUrlEn: confirmed(`${DOMAIN}/en/driver-app/account-deletion`),
  privacyRequestUrlHu: confirmed(`${DOMAIN}/hu/privacy-request`),
  privacyRequestUrlEn: confirmed(`${DOMAIN}/en/privacy-request`),
  termsUrlHu: confirmed(`${DOMAIN}/hu/terms`),
  termsUrlEn: confirmed(`${DOMAIN}/en/terms`),
  disclaimersUrlHu: confirmed(`${DOMAIN}/hu/disclaimers`),
  disclaimersUrlEn: confirmed(`${DOMAIN}/en/disclaimers`),
  legalCenterUrlHu: confirmed(`${DOMAIN}/hu/legal`),
  legalCenterUrlEn: confirmed(`${DOMAIN}/en/legal`),
  dataSafetyUrlHu: confirmed(`${DOMAIN}/hu/driver-app/data-safety`),
  dataSafetyUrlEn: confirmed(`${DOMAIN}/en/driver-app/data-safety`),
  driverAppLegalUrlHu: confirmed(`${DOMAIN}/hu/driver-app/legal`),
  driverAppLegalUrlEn: confirmed(`${DOMAIN}/en/driver-app/legal`),
  contactUrlHu: confirmed(`${DOMAIN}/hu/contact`),
  contactUrlEn: confirmed(`${DOMAIN}/en/contact`),
  driverAppPrivacyUrlHu: confirmed(`${DOMAIN}/hu/driver-app/privacy`),
  driverAppPrivacyUrlEn: confirmed(`${DOMAIN}/en/driver-app/privacy`),
  /**
   * When true, Legal Center may show a user-facing “under legal review” status.
   * Keep false until counsel explicitly authorises that public wording.
   */
  showPublicLegalReviewStatus: confirmed(false),
  retentionPolicy: auditPending(
    "No approved retention matrix with concrete periods in this repository.",
  ),
  processorsAudit: auditPending(
    "No completed processor / subprocessor audit for production listing.",
  ),
  internationalTransfersAudit: auditPending(
    "EGT-outside transfer mechanisms not contractually verified in this repo.",
  ),
  locationImplementationAudit: auditPending(
    "Driver App location implementation audit required (when-in-use / background).",
  ),
  encryptionAtRestAudit: auditPending(
    "At-rest encryption not attested from public-site repository alone.",
  ),
  pushNotificationsActive: auditPending<boolean>(
    "Confirm whether FCM/APNs is active in the Play-distributed build before stating as collected.",
  ),
  aiOcrProvidersActive: auditPending(
    "Confirm which AI/OCR/translation providers are live per environment.",
  ),
} as const;

export type LegalConfig = typeof legalConfig;

export function getConfirmedString(
  field: LegalConfigField<string>,
): string | null {
  return field.status === "confirmed" && field.value ? field.value : null;
}

export function listLegalConfigGaps(): Array<{
  key: string;
  status: LegalFieldStatus;
  note?: string;
}> {
  const gaps: Array<{ key: string; status: LegalFieldStatus; note?: string }> =
    [];
  for (const [key, field] of Object.entries(legalConfig)) {
    if (
      field &&
      typeof field === "object" &&
      "status" in field &&
      field.status !== "confirmed"
    ) {
      gaps.push({
        key,
        status: field.status as LegalFieldStatus,
        note: (field as LegalConfigField<unknown>).note,
      });
    }
  }
  return gaps;
}

/** Production build should fail if critical publish fields are missing. */
export const LEGAL_PRODUCTION_REQUIRED_KEYS = [
  "legalEntityName",
  "privacyEmail",
  "legalEmail",
  "websiteUrl",
  "privacyPolicyEffectiveDate",
  "privacyUrlHu",
  "privacyUrlEn",
  "accountDeletionUrlHu",
  "accountDeletionUrlEn",
] as const;

export function validateLegalConfigForProduction(): {
  ok: boolean;
  missing: string[];
  warnings: string[];
} {
  const missing: string[] = [];
  const warnings: string[] = [];

  for (const key of LEGAL_PRODUCTION_REQUIRED_KEYS) {
    const field = legalConfig[key] as LegalConfigField<unknown>;
    if (!field || field.status !== "confirmed" || field.value == null) {
      missing.push(key);
    }
  }

  for (const gap of listLegalConfigGaps()) {
    if (gap.status === "requires_owner_input" || gap.status === "requires_audit") {
      warnings.push(`${gap.key}: ${gap.note ?? gap.status}`);
    }
  }

  return { ok: missing.length === 0, missing, warnings };
}

export const legalOperatorStatement = {
  hu: "A ViaNexis szolgáltatást Turul Atilla egyéni vállalkozó üzemelteti.",
  en: "The ViaNexis service is operated by Atilla Turul, a sole proprietor registered in Hungary.",
} as const;

export const legalControllerLabel = {
  hu: {
    heading: "Adatkezelő",
    line: "Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője",
  },
  en: {
    heading: "Controller",
    line: "Turul Atilla, sole proprietor and operator of the ViaNexis brand",
  },
} as const;

export const legalTestingReleaseBanner = {
  hu: "Tesztelési kiadás. Ez a tájékoztató a jelenleg terjesztett ViaNexis Driver alkalmazásverzió tényleges adatkezelését ismerteti. A funkciók vagy adatkezelési folyamatok változása esetén a tájékoztatót a következő kiadás előtt frissítjük.",
  en: "Testing release. This policy describes the actual data-processing activities of the currently distributed ViaNexis Driver app version. If features or data-processing activities change, this policy will be updated before the next release.",
} as const;

/** Testing banner for Terms of Use pages (same kill-switch as privacy). */
export const legalTermsTestingReleaseBanner = {
  hu: "Tesztelési kiadás. Ezek a feltételek a jelenleg terjesztett ViaNexis platform- és ViaNexis Driver alkalmazásverzió használatára vonatkoznak. A szolgáltatás vagy a feltételek lényeges változása esetén a dokumentumot az új verzió vagy funkció kiadása előtt frissítjük.",
  en: "Testing release. These terms apply to the currently distributed versions of the ViaNexis platform and the ViaNexis Driver application. If the service or these terms change materially, this document will be updated before the relevant new version or feature is released.",
} as const;

/** Testing banner for Responsible Use / Disclaimers pages. */
export const legalResponsibleUseTestingReleaseBanner = {
  hu: "Tesztelési kiadás. Ez a dokumentum a jelenleg terjesztett ViaNexis platform- és ViaNexis Driver alkalmazásverzió felelős használati korlátait ismerteti. Új vagy lényegesen megváltozott funkció kiadása előtt a dokumentumot frissítjük.",
  en: "Testing release. This document describes the responsible-use limitations of the currently distributed versions of the ViaNexis platform and ViaNexis Driver application. It will be updated before any new or materially changed feature is released.",
} as const;

/** Testing banner for the Legal Center (/legal) hub. */
export const legalCenterTestingReleaseBanner = {
  hu: "Tesztelési kiadás. A dokumentumközpont a jelenleg terjesztett ViaNexis platform- és ViaNexis Driver verzióhoz tartozó jogi dokumentumokat tartalmazza. Új vagy lényegesen módosított funkció kiadása előtt a kapcsolódó dokumentumokat frissítjük.",
  en: "Testing release. This document center contains the legal documents applicable to the currently distributed versions of the ViaNexis platform and ViaNexis Driver. The relevant documents will be updated before any new or materially changed feature is released.",
} as const;

export const legalControllerLabelForTerms = {
  hu: {
    heading: "Szolgáltató",
    line: "Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője",
  },
  en: {
    heading: "Provider",
    line: "Turul Atilla, sole proprietor and operator of the ViaNexis brand",
  },
} as const;

export const legalCounselReviewNotice = {
  hu: "Fejlesztési megjegyzés: jogi szakértői felülvizsgálat ajánlott a végleges publikálás előtt. Ez a figyelmeztetés nem teszi érvénytelenné a tájékoztatót.",
  en: "Development note: legal counsel review is recommended before final publication. This notice does not invalidate the policy.",
} as const;
