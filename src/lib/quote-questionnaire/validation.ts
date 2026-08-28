import type { QuoteAnswers, QuoteLocale, QuoteQuestion } from "./schema";
import { QUOTE_QUESTIONS } from "./schema";
import { isQuestionVisible, resolveQuotePath } from "./visibility";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    return locale === "hu" ? "Kötelező mező." : "This field is required.";
  }
  if (empty) return null;

  if (q.type === "email" && !EMAIL_RE.test(String(raw).trim())) {
    return locale === "hu"
      ? "Érvényes e-mail-címet adjon meg."
      : "Enter a valid email address.";
  }

  if (
    (q.id === "drivers_exact" || q.id === "vehicles_exact") &&
    String(raw).trim() !== ""
  ) {
    const n = Number(String(raw).replace(/[^\d]/g, ""));
    if (!Number.isFinite(n) || n < 0 || n > 100000) {
      return locale === "hu"
        ? "Érvényes, nem negatív számot adjon meg."
        : "Enter a valid non-negative number.";
    }
  }

  if (
    q.id === "activity_other" &&
    Array.isArray(answers.activity_types) &&
    answers.activity_types.includes("other") &&
    String(raw).trim() === ""
  ) {
    return locale === "hu"
      ? "Kérjük, röviden írja le az egyéb tevékenységet."
      : "Please briefly describe the other activity.";
  }

  const forbidden =
    /password|api[_ -]?key|secret|token|Bearer\s+[A-Za-z0-9._-]+/i;
  if (
    (q.type === "text" || q.type === "textarea") &&
    forbidden.test(String(raw))
  ) {
    return locale === "hu"
      ? "Ne adjon meg jelszót, API-kulcsot vagy titkos hitelesítőt."
      : "Do not enter passwords, API keys or secrets.";
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
