/**
 * ViaNexis 35-language registry — mirrors transdoc-backend/src/i18n/language-registry.ts
 * Do not replace with ad-hoc locale lists; backend registry is source of truth.
 */

export enum LanguageReviewStatus {
  VERIFIED = "verified",
  NEEDS_REVIEW = "needs_review",
  MACHINE_DRAFT = "machine_draft",
  NOT_STARTED = "not_started",
}

export interface LanguageRegistryEntry {
  code: string;
  englishName: string;
  nativeName: string;
  enabledForUi: boolean;
  enabledForTranslation: boolean;
  enabledForPublicSite: boolean;
  draftMachineTranslationAllowed: boolean;
  reviewStatus: LanguageReviewStatus;
}

const PRIMARY_LANGUAGES: LanguageRegistryEntry[] = [
  {
    code: "hu",
    englishName: "Hungarian",
    nativeName: "Magyar",
    enabledForUi: true,
    enabledForTranslation: true,
    enabledForPublicSite: true,
    draftMachineTranslationAllowed: false,
    reviewStatus: LanguageReviewStatus.VERIFIED,
  },
  {
    code: "en",
    englishName: "English",
    nativeName: "English",
    enabledForUi: true,
    enabledForTranslation: true,
    enabledForPublicSite: true,
    draftMachineTranslationAllowed: false,
    reviewStatus: LanguageReviewStatus.VERIFIED,
  },
];

const EXPANDED_LANGUAGES: Omit<
  LanguageRegistryEntry,
  | "enabledForUi"
  | "enabledForTranslation"
  | "enabledForPublicSite"
  | "draftMachineTranslationAllowed"
  | "reviewStatus"
>[] = [
  { code: "de", englishName: "German", nativeName: "Deutsch" },
  { code: "ro", englishName: "Romanian", nativeName: "Română" },
  { code: "sk", englishName: "Slovak", nativeName: "Slovenčina" },
  { code: "pl", englishName: "Polish", nativeName: "Polski" },
  { code: "cs", englishName: "Czech", nativeName: "Čeština" },
  { code: "bg", englishName: "Bulgarian", nativeName: "Български" },
  { code: "hr", englishName: "Croatian", nativeName: "Hrvatski" },
  { code: "sr", englishName: "Serbian", nativeName: "Srpski" },
  { code: "sl", englishName: "Slovenian", nativeName: "Slovenščina" },
  { code: "et", englishName: "Estonian", nativeName: "Eesti" },
  { code: "lv", englishName: "Latvian", nativeName: "Latviešu" },
  { code: "lt", englishName: "Lithuanian", nativeName: "Lietuvių" },
  { code: "fi", englishName: "Finnish", nativeName: "Suomi" },
  { code: "sv", englishName: "Swedish", nativeName: "Svenska" },
  { code: "da", englishName: "Danish", nativeName: "Dansk" },
  { code: "nb", englishName: "Norwegian (Bokmål)", nativeName: "Norsk bokmål" },
  { code: "nl", englishName: "Dutch", nativeName: "Nederlands" },
  { code: "fr", englishName: "French", nativeName: "Français" },
  { code: "es", englishName: "Spanish", nativeName: "Español" },
  { code: "pt", englishName: "Portuguese", nativeName: "Português" },
  { code: "it", englishName: "Italian", nativeName: "Italiano" },
  { code: "el", englishName: "Greek", nativeName: "Ελληνικά" },
  { code: "tr", englishName: "Turkish", nativeName: "Türkçe" },
  { code: "uk", englishName: "Ukrainian", nativeName: "Українська" },
  { code: "ru", englishName: "Russian", nativeName: "Русский" },
  { code: "sq", englishName: "Albanian", nativeName: "Shqip" },
  { code: "mk", englishName: "Macedonian", nativeName: "Македонски" },
  { code: "bs", englishName: "Bosnian", nativeName: "Bosanski" },
  { code: "be", englishName: "Belarusian", nativeName: "Беларуская" },
  { code: "ga", englishName: "Irish", nativeName: "Gaeilge" },
  { code: "mt", englishName: "Maltese", nativeName: "Malti" },
  { code: "is", englishName: "Icelandic", nativeName: "Íslenska" },
  { code: "ar", englishName: "Arabic", nativeName: "العربية" },
];

function toExpandedEntry(
  lang: (typeof EXPANDED_LANGUAGES)[number],
): LanguageRegistryEntry {
  return {
    ...lang,
    enabledForUi: false,
    enabledForTranslation: true,
    enabledForPublicSite: true,
    draftMachineTranslationAllowed: true,
    reviewStatus: LanguageReviewStatus.NEEDS_REVIEW,
  };
}

export const VIANEXIS_LANGUAGE_REGISTRY: readonly LanguageRegistryEntry[] = [
  ...PRIMARY_LANGUAGES,
  ...EXPANDED_LANGUAGES.map(toExpandedEntry),
];

export const DEFAULT_FALLBACK_LANGUAGE_CHAIN: readonly string[] = ["en", "hu"];

export type LanguageCode = (typeof VIANEXIS_LANGUAGE_REGISTRY)[number]["code"];

export function normalizeLanguageCode(code: string | null | undefined): string | null {
  if (!code || typeof code !== "string") return null;
  const trimmed = code.trim().toLowerCase();
  if (!trimmed || trimmed === "auto") return null;
  const base = trimmed.split("-")[0];
  return base || null;
}

export function findLanguageEntry(
  code: string | null | undefined,
): LanguageRegistryEntry | undefined {
  const normalized = normalizeLanguageCode(code);
  if (!normalized) return undefined;
  return VIANEXIS_LANGUAGE_REGISTRY.find((entry) => entry.code === normalized);
}

export function resolveLanguageWithFallback(
  requested: string | null | undefined,
  fallbackChain: readonly string[] = DEFAULT_FALLBACK_LANGUAGE_CHAIN,
): LanguageRegistryEntry {
  const direct = findLanguageEntry(requested);
  if (direct) return direct;

  for (const code of fallbackChain) {
    const entry = findLanguageEntry(code);
    if (entry) return entry;
  }

  return PRIMARY_LANGUAGES[1];
}

export function listLanguagesForPublicSite(): LanguageRegistryEntry[] {
  return VIANEXIS_LANGUAGE_REGISTRY.filter((entry) => entry.enabledForPublicSite);
}

export const PUBLIC_SITE_LOCALE_COUNT = VIANEXIS_LANGUAGE_REGISTRY.length;
