import {
  QUOTE_QUESTIONNAIRE_VERSION,
  type QuoteAnswers,
  type QuoteLocale,
} from "./schema";
import { quoteDraftStorageKey } from "./ui-copy";

export type QuoteDraft = {
  version: string;
  locale: QuoteLocale;
  answers: QuoteAnswers;
  stepId: string;
  savedAt: string;
};

export function loadQuoteDraft(locale: QuoteLocale): QuoteDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(quoteDraftStorageKey(locale));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QuoteDraft;
    if (!parsed || typeof parsed !== "object") return null;
    if (parsed.version !== QUOTE_QUESTIONNAIRE_VERSION) {
      window.localStorage.removeItem(quoteDraftStorageKey(locale));
      return null;
    }
    if (parsed.locale !== locale) return null;
    return {
      version: parsed.version,
      locale: parsed.locale,
      answers: parsed.answers ?? {},
      stepId: typeof parsed.stepId === "string" ? parsed.stepId : "company",
      savedAt: typeof parsed.savedAt === "string" ? parsed.savedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveQuoteDraft(
  locale: QuoteLocale,
  answers: QuoteAnswers,
  stepId: string,
): void {
  if (typeof window === "undefined") return;
  const draft: QuoteDraft = {
    version: QUOTE_QUESTIONNAIRE_VERSION,
    locale,
    answers,
    stepId,
    savedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(
      quoteDraftStorageKey(locale),
      JSON.stringify(draft),
    );
  } catch {
    // Quota / private mode — ignore.
  }
}

export function clearQuoteDraft(locale: QuoteLocale): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(quoteDraftStorageKey(locale));
  } catch {
    // ignore
  }
}
