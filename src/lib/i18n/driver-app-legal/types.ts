/**
 * Type definitions for the ViaNexis Driver App legal content bundle.
 * This module is intentionally self-contained (does not reuse the marketing
 * site's `SiteContent`/`LegalContent` types) because the Driver App legal
 * center has its own pages, its own version/effective-date badge, and only
 * ships fully hand-authored content in Hungarian and English.
 */

export type LegalSection = {
  /** Stable anchor id, used for the table of contents and deep links (e.g. "controller-details"). */
  id: string;
  title: string;
  /** Main prose paragraph(s) for the section. May contain multiple paragraphs separated by "\n\n". */
  body?: string;
  /** Optional bullet list rendered below (or instead of) the body. */
  items?: string[];
};

export type LegalContact = {
  label: string;
  value: string;
};

/** Shared shape for the three long-form legal documents (Privacy, Terms, and reused by Data Safety). */
export type DriverAppLegalDoc = {
  title: string;
  metaDescription: string;
  intro: string;
  versionLabel: string;
  effectiveLabel: string;
  lastUpdatedLabel: string;
  tocLabel: string;
  sections: LegalSection[];
  contactsTitle: string;
  contacts: LegalContact[];
};

export type DriverAppLegalHubCard = {
  /** Path suffix appended to the driver-app legal base route, e.g. "/privacy". */
  hrefSuffix: string;
  title: string;
  description: string;
};

export type DriverAppLegalHub = {
  title: string;
  metaDescription: string;
  intro: string;
  cards: DriverAppLegalHubCard[];
  versionLabel: string;
  effectiveLabel: string;
  lastUpdatedLabel: string;
  contactsTitle: string;
  contacts: LegalContact[];
};

/** One row of the plain-language data safety summary table. */
export type DriverAppDataSafetyRow = {
  category: string;
  /** What is actually collected within this category. */
  collected: string;
  /** Whether providing this data is required to use core features, or optional/permission-based. */
  requirement: string;
  /** Whether the data originates from the user directly or is generated automatically by the device/app. */
  origin: string;
  purpose: string;
  sharing: string;
};

export type DriverAppDataSafetyTableHeaders = {
  category: string;
  collected: string;
  requirement: string;
  origin: string;
  purpose: string;
  sharing: string;
};

export type DriverAppDataSafety = {
  title: string;
  metaDescription: string;
  intro: string;
  versionLabel: string;
  effectiveLabel: string;
  lastUpdatedLabel: string;
  /** Disclaimer clarifying this page is a plain-language summary, not the official store data-safety declaration. */
  disclaimer: string;
  tableHeaders: DriverAppDataSafetyTableHeaders;
  rows: DriverAppDataSafetyRow[];
  /** Narrative sections following the table: encryption, deletion path, no sale/ads, third parties, etc. */
  sections: LegalSection[];
  contactsTitle: string;
  contacts: LegalContact[];
};

export type DriverAppAccountDeletionFormField = {
  id: string;
  label: string;
  required: boolean;
  helpText?: string;
  placeholder?: string;
};

export type DriverAppAccountDeletionRequestType = {
  value: string;
  label: string;
  description: string;
};

export type DriverAppAccountDeletionErrorMessages = {
  required: string;
  emailInvalid: string;
  requestTypeRequired: string;
  confirmationRequired: string;
  accountContactRequired: string;
  submitFailed: string;
  network: string;
};

export type DriverAppAccountDeletion = {
  title: string;
  metaDescription: string;
  intro: string;
  /** Explanatory sections distinguishing unlink / suspend / delete / uninstall, retained data, verification, etc. */
  explanationSections: LegalSection[];
  formTitle: string;
  formIntro: string;
  formFields: DriverAppAccountDeletionFormField[];
  requestTypeLabel: string;
  requestTypePlaceholder: string;
  requestTypes: DriverAppAccountDeletionRequestType[];
  confirmationLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  errorMessages: DriverAppAccountDeletionErrorMessages;
  contactsTitle: string;
  contacts: LegalContact[];
};

export type DriverAppLegalNav = {
  hub: string;
  privacy: string;
  terms: string;
  dataSafety: string;
  accountDeletion: string;
};

/** Common UI chrome shared across all driver-app legal pages. */
export type DriverAppLegalChrome = {
  print: string;
  tableOfContents: string;
  languageSwitchHint: string;
  backToHub: string;
  currentVersionLabel: string;
};

export type DriverAppLegalBundle = {
  nav: DriverAppLegalNav;
  chrome: DriverAppLegalChrome;
  hub: DriverAppLegalHub;
  privacy: DriverAppLegalDoc;
  terms: DriverAppLegalDoc;
  dataSafety: DriverAppDataSafety;
  accountDeletion: DriverAppAccountDeletion;
};
