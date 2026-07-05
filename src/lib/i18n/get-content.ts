import { contentEn } from "./content/en";
import { contentHu } from "./content/hu";
import {
  findLanguageEntry,
  resolveLanguageWithFallback,
  type LanguageCode,
} from "./language-registry";
import {
  getLastUpdatedLabel,
  getTranslationUnderReviewNotice,
  toPublicTranslationStatus,
  type PublicTranslationStatus,
} from "./translation-status";
import type { SiteContent } from "./types";

export type ResolvedSiteContent = SiteContent & {
  locale: LanguageCode;
  translationStatus: PublicTranslationStatus;
  legalTranslationStatus: PublicTranslationStatus;
  translationUnderReviewNotice: string | null;
  lastUpdatedLabel: string;
  contentFallbackLocale: LanguageCode | null;
};

const OG_LOCALE_BY_CODE: Partial<Record<LanguageCode, string>> = {
  hu: "hu_HU",
  en: "en_US",
  de: "de_DE",
  ro: "ro_RO",
  sk: "sk_SK",
  pl: "pl_PL",
  cs: "cs_CZ",
  bg: "bg_BG",
  hr: "hr_HR",
  sr: "sr_RS",
  sl: "sl_SI",
  et: "et_EE",
  lv: "lv_LV",
  lt: "lt_LT",
  fi: "fi_FI",
  sv: "sv_SE",
  da: "da_DK",
  nb: "nb_NO",
  nl: "nl_NL",
  fr: "fr_FR",
  es: "es_ES",
  pt: "pt_PT",
  it: "it_IT",
  el: "el_GR",
  tr: "tr_TR",
  uk: "uk_UA",
  ru: "ru_RU",
  sq: "sq_AL",
  mk: "mk_MK",
  bs: "bs_BA",
  be: "be_BY",
  ga: "ga_IE",
  mt: "mt_MT",
  is: "is_IS",
  ar: "ar_SA",
};

function buildDraftMeta(code: LanguageCode): SiteContent["meta"] {
  const entry = findLanguageEntry(code);
  const nativeName = entry?.nativeName ?? code.toUpperCase();

  return {
    title: `ViaNexis — ${nativeName}`,
    description: `${contentEn.meta.description} (${nativeName} — machine draft, under review.)`,
    ogLocale: OG_LOCALE_BY_CODE[code] ?? `${code}_${code.toUpperCase()}`,
    ogAlternateLocale: contentEn.meta.ogAlternateLocale,
  };
}

function withDraftOverlay(
  base: SiteContent,
  code: LanguageCode,
): SiteContent {
  const draftNotice = getTranslationUnderReviewNotice(code);
  const draftBadge =
    draftNotice ??
    "This translation is under review. — Machine draft based on English.";

  return {
    ...base,
    meta: buildDraftMeta(code),
    legal: {
      ...base.legal,
      versionBadge: `${base.legal.versionBadge} · ${draftBadge}`,
    },
  };
}

export function getContent(locale: LanguageCode): ResolvedSiteContent {
  const entry = resolveLanguageWithFallback(locale);
  const code = entry.code as LanguageCode;
  const translationStatus = toPublicTranslationStatus(code);
  const legalTranslationStatus = toPublicTranslationStatus(code, true);

  if (code === "hu") {
    return {
      ...contentHu,
      locale: "hu",
      translationStatus,
      legalTranslationStatus,
      translationUnderReviewNotice: null,
      lastUpdatedLabel: getLastUpdatedLabel("hu"),
      contentFallbackLocale: null,
    };
  }

  if (code === "en") {
    return {
      ...contentEn,
      locale: "en",
      translationStatus,
      legalTranslationStatus,
      translationUnderReviewNotice: null,
      lastUpdatedLabel: getLastUpdatedLabel("en"),
      contentFallbackLocale: null,
    };
  }

  const draftContent = withDraftOverlay(contentEn, code);

  return {
    ...draftContent,
    locale: code,
    translationStatus,
    legalTranslationStatus,
    translationUnderReviewNotice: getTranslationUnderReviewNotice(code),
    lastUpdatedLabel: getLastUpdatedLabel(code),
    contentFallbackLocale: "en",
  };
}
