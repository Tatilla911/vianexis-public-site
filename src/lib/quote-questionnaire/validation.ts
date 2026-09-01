import type { QuoteAnswers, QuoteQuestion } from "./schema";
import { QUOTE_QUESTIONS } from "./schema";
import { resolveBilingualText, type QuoteLocale } from "./locale-resolver";
import { isQuestionVisible, resolveQuotePath } from "./visibility";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALIDATION = {
  required: {
    hu: "Kötelező mező.",
    en: "This field is required.",
  },
  emailInvalid: {
    hu: "Érvényes e-mail-címet adjon meg.",
    en: "Enter a valid email address.",
  },
  numberInvalid: {
    hu: "Érvényes, nem negatív számot adjon meg.",
    en: "Enter a valid non-negative number.",
  },
  activityOther: {
    hu: "Kérjük, röviden írja le az egyéb tevékenységet.",
    en: "Please briefly describe the other activity.",
  },
  forbiddenSecret: {
    hu: "Ne adjon meg jelszót, API-kulcsot vagy titkos hitelesítőt.",
    en: "Do not enter passwords, API keys or secrets.",
  },
} as const;

function validationMessage(
  locale: QuoteLocale,
  key: keyof typeof VALIDATION,
): string {
  const entry = VALIDATION[key];
  return resolveBilingualText(locale, entry.hu, entry.en);
}

export function validateQuestion(
  q: QuoteQuestion,
  answers: QuoteAnswers,
  locale: QuoteLocale,
): string | null {
  const path = resolveQuotePath(answers);
  if (!isQuestionVisible(q, answers, path)) return null;

  const raw = answers[q.id];
  const empty =
    raw == null ||
    (typeof raw === "string" && raw.trim() === "") ||
    (Array.isArray(raw) && raw.length === 0);

  if (q.required && empty) {
    return validationMessage(locale, "required");
  }
  if (empty) return null;

  if (q.type === "email" && !EMAIL_RE.test(String(raw).trim())) {
    return validationMessage(locale, "emailInvalid");
  }

  if (
    (q.id === "drivers_exact" || q.id === "vehicles_exact") &&
    String(raw).trim() !== ""
  ) {
    const n = Number(String(raw).replace(/[^\d]/g, ""));
    if (!Number.isFinite(n) || n < 0 || n > 100000) {
      return validationMessage(locale, "numberInvalid");
    }
  }

  if (
    q.id === "activity_other" &&
    Array.isArray(answers.activity_types) &&
    answers.activity_types.includes("other") &&
    String(raw).trim() === ""
  ) {
    return validationMessage(locale, "activityOther");
  }

  const forbidden =
    /password|api[_ -]?key|secret|token|Bearer\s+[A-Za-z0-9._-]+/i;
  if (
    (q.type === "text" || q.type === "textarea") &&
    forbidden.test(String(raw))
  ) {
    return validationMessage(locale, "forbiddenSecret");
  }

  return null;
}

export function validateVisibleAnswers(
  answers: QuoteAnswers,
  locale: QuoteLocale,
): Record<string, string> {
  const path = resolveQuotePath(answers);
  const errors: Record<string, string> = {};
  for (const q of QUOTE_QUESTIONS) {
    if (!isQuestionVisible(q, answers, path)) continue;
    const err = validateQuestion(q, answers, locale);
    if (err) errors[q.id] = err;
  }
  return errors;
}

export function validateStep(
  stepId: string,
  answers: QuoteAnswers,
  locale: QuoteLocale,
): Record<string, string> {
  const path = resolveQuotePath(answers);
  const errors: Record<string, string> = {};
  for (const q of QUOTE_QUESTIONS) {
    if (q.step !== stepId) continue;
    if (!isQuestionVisible(q, answers, path)) continue;
    const err = validateQuestion(q, answers, locale);
    if (err) errors[q.id] = err;
  }
  return errors;
}
