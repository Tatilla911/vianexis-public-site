import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "@/lib/i18n/driver-app-legal/version";

export {
  DRIVER_APP_LEGAL_VERSION as LEGAL_DOC_VERSION,
  DRIVER_APP_LEGAL_EFFECTIVE_DATE as LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED as LEGAL_LAST_UPDATED,
};

/** Keep driver-app-legal version.ts as SoT; this re-exports for legal config consumers. */
export const syncedLegalDates = {
  version: DRIVER_APP_LEGAL_VERSION,
  effective: DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  lastUpdated: DRIVER_APP_LEGAL_LAST_UPDATED,
} as const;
