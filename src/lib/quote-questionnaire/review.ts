import {
  QUOTE_QUESTIONS,
  QUOTE_STEPS,
  helpFor,
  labelFor,
  optionLabel,
  type QuoteAnswers,
  type QuoteQuestion,
} from "./schema";
import { resolveBilingualText, type QuoteLocale } from "./locale-resolver";
import { isQuestionVisible, resolveQuotePath } from "./visibility";

export type ReviewSection = {
  stepId: string;
  title: string;
  items: { id: string; label: string; value: string }[];
};

function formatAnswer(
  q: QuoteQuestion,
  answers: QuoteAnswers,
  locale: QuoteLocale,
): string {
  const raw = answers[q.id];
  if (raw == null || (Array.isArray(raw) && raw.length === 0) || raw === "") {
    return "—";
  }
  if (Array.isArray(raw)) {
    return raw
      .map((v) => {
        const opt = q.options?.find((o) => o.value === v);
        return opt ? optionLabel(opt, locale) : String(v);
      })
      .join(", ");
  }
  const opt = q.options?.find((o) => o.value === String(raw));
  if (opt) return optionLabel(opt, locale);
  return String(raw);
}

/** Customer-facing review — never includes pricingKey / scores. */
export function buildReviewSections(
  answers: QuoteAnswers,
  locale: QuoteLocale,
): ReviewSection[] {
  const path = resolveQuotePath(answers);
  const sections: ReviewSection[] = [];

  for (const step of QUOTE_STEPS) {
    if (step.id === "summary") continue;
    const questions = QUOTE_QUESTIONS.filter(
      (q) => q.step === step.id && isQuestionVisible(q, answers, path),
    );
    const items = questions
      .map((q) => {
        const value = formatAnswer(q, answers, locale);
        if (value === "—") return null;
        return {
          id: q.id,
          label: labelFor(q, locale),
          value,
        };
      })
      .filter(Boolean) as ReviewSection["items"];
    if (items.length === 0) continue;
    sections.push({
      stepId: step.id,
      title: resolveBilingualText(locale, step.hu, step.en),
      items,
    });
  }
  return sections;
}

export function questionHelp(
  q: QuoteQuestion,
  locale: QuoteLocale,
): string | undefined {
  return helpFor(q, locale);
}
