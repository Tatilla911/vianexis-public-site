import {
  QUOTE_QUESTIONNAIRE_VERSION,
  type QuoteAnswers,
  type QuoteLocale,
} from "./schema";
import {
  normalizePricingInputs,
  type NormalizedPricingInputs,
} from "./normalize";
import { asModuleList } from "./normalize-helpers";
import { resolveQuotePath } from "./visibility";

export type QuoteSubmitClientPayload = {
  locale: QuoteLocale;
  answers: QuoteAnswers;
  privacyAccepted: boolean;
  website?: string;
  captchaToken?: string;
  idempotencyKey: string;
};

export type QuoteUpstreamBody = {
  customerEmail: string;
  customerName?: string;
  companyName?: string;
  country?: string;
  sourceLocale: string;
  preferredLanguage: string;
  messageLanguage: string;
  messageText: string;
  consentPrivacy: boolean;
  fleetSize?: number;
  officeUsers?: number;
  driverApps?: number;
  requestedModules?: string[];
  requestedAiFeatures?: string[];
  captchaToken?: string;
  idempotencyKey?: string;
};

function parseBandMid(band: unknown): number | undefined {
  if (band == null) return undefined;
  const s = String(band);
  if (s === "1") return 1;
  if (s.endsWith("_plus")) {
    const n = Number(s.replace(/_plus$/, "").split("_").pop());
    return Number.isFinite(n) ? n : undefined;
  }
  const parts = s.split("_").map(Number).filter((n) => Number.isFinite(n));
  if (parts.length === 0) return undefined;
  return Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);
}

function parseExactOrBand(
  answers: QuoteAnswers,
  exactKey: string,
  bandKey: string,
): number | undefined {
  const exact = answers[exactKey];
  if (exact != null && String(exact).trim() !== "") {
    const n = Number(String(exact).replace(/[^\d]/g, ""));
    if (Number.isFinite(n) && n >= 0) return n;
  }
  return parseBandMid(answers[bandKey]);
}

export function buildMessageText(
  answers: QuoteAnswers,
  locale: QuoteLocale,
  pricing: NormalizedPricingInputs,
): string {
  const path = resolveQuotePath(answers);
  const envelope = {
    questionnaireVersion: QUOTE_QUESTIONNAIRE_VERSION,
    locale,
    path,
    statusHint: "NEW",
    answers,
    pricingInputs: pricing,
  };
  const human = [
    `ViaNexis quote request (${QUOTE_QUESTIONNAIRE_VERSION})`,
    `Company: ${answers.company_name ?? ""}`,
    `Contact: ${answers.contact_name ?? ""} <${answers.contact_email ?? ""}>`,
    `Country: ${answers.company_country ?? ""}`,
    `Path: ${path}`,
    `Rollout: ${answers.rollout_type ?? ""}`,
    `Support: ${answers.support_package ?? ""}`,
    "",
    "--- machine-readable ---",
    JSON.stringify(envelope),
  ].join("\n");
  return human.slice(0, 20000);
}

export function buildUpstreamQuoteBody(
  payload: QuoteSubmitClientPayload,
): QuoteUpstreamBody {
  const { answers, locale } = payload;
  const path = resolveQuotePath(answers);
  const pricing = normalizePricingInputs(answers, path);
  const modules = asModuleList(answers);
  const aiFeatures = Array.isArray(answers.ai_features)
    ? answers.ai_features.map(String)
    : [];

  return {
    customerEmail: String(answers.contact_email ?? "").trim(),
    customerName: String(answers.contact_name ?? "").trim() || undefined,
    companyName: String(answers.company_name ?? "").trim() || undefined,
    country: String(answers.company_country ?? "").trim() || undefined,
    sourceLocale: locale,
    preferredLanguage: locale,
    messageLanguage: locale,
    messageText: buildMessageText(answers, locale, pricing),
    consentPrivacy: Boolean(payload.privacyAccepted),
    fleetSize: parseExactOrBand(answers, "vehicles_exact", "vehicles_count"),
    officeUsers: parseBandMid(answers.office_users_count),
    driverApps: parseExactOrBand(answers, "drivers_exact", "drivers_count"),
    requestedModules: modules.slice(0, 40),
    requestedAiFeatures: aiFeatures.slice(0, 40),
    ...(payload.captchaToken ? { captchaToken: payload.captchaToken } : {}),
    idempotencyKey: payload.idempotencyKey,
  };
}

export function assertNoSecrets(answers: QuoteAnswers): string | null {
  const forbidden =
    /password|api[_ -]?key|secret|token|Bearer\s+[A-Za-z0-9._-]+/i;
  for (const [key, value] of Object.entries(answers)) {
    if (value == null) continue;
    const text = Array.isArray(value) ? value.join(" ") : String(value);
    if (forbidden.test(text)) {
      return key;
    }
  }
  return null;
}
