import { driverAppLegalEn } from "./content/en";
import { driverAppLegalHu } from "./content/hu";
import type { DriverAppLegalBundle } from "./types";

export type { DriverAppLegalBundle } from "./types";
export type {
  LegalSection,
  LegalContact,
  DriverAppLegalDoc,
  DriverAppLegalHub,
  DriverAppLegalHubCard,
  DriverAppDataSafety,
  DriverAppDataSafetyRow,
  DriverAppDataSafetyTableHeaders,
  DriverAppAccountDeletion,
  DriverAppAccountDeletionFormField,
  DriverAppAccountDeletionRequestType,
  DriverAppAccountDeletionErrorMessages,
  DriverAppLegalNav,
  DriverAppLegalChrome,
} from "./types";

export {
  DRIVER_APP_LEGAL_VERSION,
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
} from "./version";

export * from "./operator";

export { driverAppLegalHu } from "./content/hu";
export { driverAppLegalEn } from "./content/en";

/**
 * Locales for which the Driver App legal center ships fully hand-authored,
 * legally reviewed content. Every other locale falls back to English.
 */
export type DriverAppLegalOfficialLocale = "hu" | "en";

export type ResolvedDriverAppLegal = {
  legal: DriverAppLegalBundle;
  /** The content locale actually used to render the page ("hu" or "en"). */
  contentLocale: DriverAppLegalOfficialLocale;
  /** True only when the requested locale itself has hand-authored content (i.e. is "hu" or "en"). */
  isOfficialLocale: boolean;
};

/**
 * Returns the Driver App legal content bundle for a given site locale.
 *
 * Hungarian ("hu") gets the Hungarian bundle. Every other locale — including
 * all other public-site languages — gets the English bundle, because we do
 * not ship machine-translated legal text. `isOfficialLocale` tells callers
 * whether the requested locale matches the content actually returned, so UI
 * can show a "this legal document is only available in English" notice when
 * needed.
 */
export function getDriverAppLegal(locale: string): ResolvedDriverAppLegal {
  const normalized = locale?.toLowerCase();

  if (normalized === "hu") {
    return {
      legal: driverAppLegalHu,
      contentLocale: "hu",
      isOfficialLocale: true,
    };
  }

  return {
    legal: driverAppLegalEn,
    contentLocale: "en",
    isOfficialLocale: normalized === "en",
  };
}

/**
 * Footer label helpers for the Driver App legal center links.
 *
 * Only Hungarian and English have real translations. Every other locale
 * intentionally falls back to English rather than shipping an inaccurate
 * machine translation — see `getFooterDriverAppLegalLabels`.
 */
export type DriverAppLegalFooterLabels = {
  driverAppLegalCenter: string;
  accountDeletion: string;
  deleteAccount: string;
  privacy: string;
  terms: string;
  disclaimers: string;
  legalNotice: string;
  privacyContact: string;
  contact: string;
};

const driverAppLegalFooterLabelsHu: DriverAppLegalFooterLabels = {
  driverAppLegalCenter: "Sofőr app – Jogi tudnivalók",
  accountDeletion: "Fiók és adattörlés",
  deleteAccount: "Fiók törlése",
  privacy: "Adatvédelmi tájékoztató",
  terms: "Felhasználási feltételek",
  disclaimers: "Felelős használat",
  legalNotice: "Jogi információk",
  privacyContact: "Adatvédelmi kapcsolat",
  contact: "Kapcsolat",
};

const driverAppLegalFooterLabelsEn: DriverAppLegalFooterLabels = {
  driverAppLegalCenter: "Driver App – Legal center",
  accountDeletion: "Account & data deletion",
  deleteAccount: "Delete account",
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  disclaimers: "Responsible Use",
  legalNotice: "Legal information",
  privacyContact: "Privacy Contact",
  contact: "Contact",
};

export const driverAppLegalFooterLabels: Record<
  DriverAppLegalOfficialLocale,
  DriverAppLegalFooterLabels
> = {
  hu: driverAppLegalFooterLabelsHu,
  en: driverAppLegalFooterLabelsEn,
};

/**
 * Returns footer label strings for the Driver App legal links.
 * Hungarian gets Hungarian labels; every other locale (including English)
 * gets the English labels — we do not create inaccurate translations for
 * the site's other ~33 languages.
 */
export function getFooterDriverAppLegalLabels(
  locale: string,
): DriverAppLegalFooterLabels {
  return locale?.toLowerCase() === "hu"
    ? driverAppLegalFooterLabelsHu
    : driverAppLegalFooterLabelsEn;
}
