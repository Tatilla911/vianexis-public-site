import { contentByLocale } from "./content-registry";
import { contentEn } from "./content/en";
import { contentHu } from "./content/hu";
import {
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

function withDraftReviewBadge(
  base: SiteContent,
  code: LanguageCode,
): SiteContent {
  const draftNotice = getTranslationUnderReviewNotice(code);
  if (!draftNotice) {
    return base;
  }
  return {
    ...base,
    legal: {
      ...base.legal,
      versionBadge: `${base.legal.versionBadge} · ${draftNotice}`,
    },
  };
}

export function getContent(locale: LanguageCode): ResolvedSiteContent {
  const entry = resolveLanguageWithFallback(locale);
  const code = entry.code as LanguageCode;
  const translationStatus = toPublicTranslationStatus(code);
  const legalTranslationStatus = toPublicTranslationStatus(code, true);
  const translationUnderReviewNotice = getTranslationUnderReviewNotice(code);

  const native =
    contentByLocale[code] ??
    (code === "hu" ? contentHu : code === "en" ? contentEn : null);

  if (native) {
    const content =
      code === "hu" || code === "en"
        ? native
        : withDraftReviewBadge(native, code);

    return {
      ...content,
      locale: code,
      translationStatus,
      legalTranslationStatus,
      translationUnderReviewNotice,
      lastUpdatedLabel: getLastUpdatedLabel(code),
      contentFallbackLocale: null,
    };
  }

  throw new Error(
    `Missing native public-site content for locale: ${code}. EN fallback is disabled for production content.`,
  );
}
