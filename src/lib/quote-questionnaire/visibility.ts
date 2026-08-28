import type {
  QuoteAnswers,
  QuotePath,
  QuoteQuestion,
  VisibilityRule,
} from "./schema";
import { QUOTE_QUESTIONS, QUOTE_STEPS } from "./schema";

function asArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (value == null || value === "") return [];
  return [String(value)];
}

function bandCeiling(band: string | undefined): number {
  if (!band) return 0;
  if (band === "1" || band === "1_2") return 2;
  if (band === "2_3") return 3;
  if (band.endsWith("_plus")) {
    const n = Number(band.replace(/_plus$/, "").split("_").pop());
    return Number.isFinite(n) ? n : 9999;
  }
  const parts = band.split("_").map(Number);
  return Math.max(...parts.filter((n) => Number.isFinite(n)));
}

function exactOrBandMax(
  answers: QuoteAnswers,
  exactKey: string,
  bandKey: string,
): number {
  const exactRaw = answers[exactKey];
  if (exactRaw != null && String(exactRaw).trim() !== "") {
    const n = Number(String(exactRaw).replace(/[^\d]/g, ""));
    if (Number.isFinite(n) && n >= 0) return n;
  }
  return bandCeiling(String(answers[bandKey] ?? ""));
}

/** Resolve short / standard / enterprise path from scale + flags. */
export function resolveQuotePath(answers: QuoteAnswers): QuotePath {
  const drivers = exactOrBandMax(answers, "drivers_exact", "drivers_count");
  const vehicles = exactOrBandMax(answers, "vehicles_exact", "vehicles_count");
  const sites = bandCeiling(String(answers.sites_count ?? ""));
  const integration = answers.integration_needed === "yes";
  const security = answers.security_special === "yes" || answers.sso_required === "yes";
  const yard = answers.needs_yard_qr === "yes";
  const support =
    answers.support_package === "247" || answers.support_package === "enterprise";

  if (
    drivers >= 101 ||
    vehicles >= 101 ||
    sites >= 4 ||
    integration ||
    security ||
    yard ||
    support
  ) {
    return "enterprise";
  }

  if (
    drivers <= 50 &&
    vehicles <= 50 &&
    sites <= 2 &&
    answers.integration_needed !== "yes" &&
    answers.security_special !== "yes" &&
    answers.needs_yard_qr !== "yes" &&
    !support
  ) {
    return "short";
  }

  return "standard";
}

export function evaluateVisibilityRule(
  rule: VisibilityRule,
  answers: QuoteAnswers,
  path: QuotePath,
): boolean {
  switch (rule.op) {
    case "always":
      return true;
    case "eq":
      return answers[rule.q] === rule.value;
    case "neq":
      return answers[rule.q] !== rule.value;
    case "in":
      return rule.values.includes(String(answers[rule.q] ?? ""));
    case "includes":
      return asArray(answers[rule.q]).includes(rule.value);
    case "and":
      return rule.rules.every((r) => evaluateVisibilityRule(r, answers, path));
    case "or":
      return rule.rules.some((r) => evaluateVisibilityRule(r, answers, path));
    case "path":
      return path === rule.value;
    default:
      return false;
  }
}

export function isQuestionVisible(
  question: QuoteQuestion,
  answers: QuoteAnswers,
  path: QuotePath = resolveQuotePath(answers),
): boolean {
  if (path === "short" && (question.enterpriseOnly || question.shortPathHide)) {
    // Still show if its own visibleWhen is always and not enterprise-only detail
    // except shortPathHide which we hide on short path.
    if (question.shortPathHide) return false;
    if (question.enterpriseOnly) return false;
  }
  return evaluateVisibilityRule(question.visibleWhen, answers, path);
}

export function visibleQuestions(
  answers: QuoteAnswers,
  path: QuotePath = resolveQuotePath(answers),
): QuoteQuestion[] {
  return QUOTE_QUESTIONS.filter((q) => isQuestionVisible(q, answers, path));
}

export function visibleStepIds(answers: QuoteAnswers): string[] {
  const path = resolveQuotePath(answers);
  const visible = new Set(
    visibleQuestions(answers, path).map((q) => q.step),
  );
  return QUOTE_STEPS.filter(
    (s) => s.id === "summary" || visible.has(s.id),
  )
    .filter((s) => {
      if (s.id === "summary") return true;
      if (path === "short" && s.shortPath === false) {
        // Keep step only if it has visible questions despite short path
        return visible.has(s.id);
      }
      return visible.has(s.id) || s.id === "summary";
    })
    .map((s) => s.id);
}

export function questionsForStep(
  stepId: string,
  answers: QuoteAnswers,
): QuoteQuestion[] {
  const path = resolveQuotePath(answers);
  return QUOTE_QUESTIONS.filter(
    (q) => q.step === stepId && isQuestionVisible(q, answers, path),
  );
}
