/**
 * Quote questionnaire unit tests (conditions, normalize, draft, submit helpers).
 * Run: npx --yes tsx --test scripts/test-quote-questionnaire.ts
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  QUOTE_QUESTIONNAIRE_VERSION,
  QUOTE_QUESTIONS,
  assertNoSecrets,
  buildReviewSections,
  buildUpstreamQuoteBody,
  evaluateVisibilityRule,
  isQuestionVisible,
  normalizePricingInputs,
  resolveQuotePath,
  validateVisibleAnswers,
  visibleQuestions,
} from "../src/lib/quote-questionnaire/index";
import { quoteDraftStorageKey } from "../src/lib/quote-questionnaire/ui-copy";

function smallFleet(overrides: Record<string, unknown> = {}) {
  return {
    company_name: "Kis Fuvar Kft",
    company_country: "HU",
    contact_name: "Teszt Anna",
    contact_email: "anna@example.com",
    activity_types: ["road_freight"],
    drivers_count: "11_25",
    vehicles_count: "11_25",
    office_users_count: "1_2",
    sites_count: "1",
    rollout_type: "full",
    driver_capabilities: ["trips", "documents"],
    portal_capabilities: ["dispatch", "docs"],
    uses_tms: "no",
    trips_monthly: "0_500",
    wants_ai: "no",
    needs_yard_qr: "no",
    channels: ["in_app", "email"],
    retention: "1y",
    support_package: "standard",
    security_special: "no",
    sso_required: "no",
    ...overrides,
  };
}

test("schema version and question count", () => {
  assert.equal(QUOTE_QUESTIONNAIRE_VERSION, "pricing-questionnaire-v1");
  assert.ok(QUOTE_QUESTIONS.length >= 60);
  assert.ok(QUOTE_QUESTIONS.length <= 90);
});

test("A: small company + no TMS → API questions hidden", () => {
  const answers = smallFleet();
  assert.equal(resolveQuotePath(answers), "short");
  const api = QUOTE_QUESTIONS.find((q) => q.id === "api_available")!;
  assert.equal(isQuestionVisible(api, answers), false);
  const visibleIds = visibleQuestions(answers).map((q) => q.id);
  assert.ok(!visibleIds.includes("api_available"));
  assert.ok(visibleIds.length >= 15 && visibleIds.length <= 28);
});

test("B: TMS yes + integration yes → integration questions shown", () => {
  const answers = smallFleet({
    uses_tms: "yes",
    integration_needed: "yes",
    drivers_count: "101_250",
    vehicles_count: "101_250",
  });
  assert.equal(resolveQuotePath(answers), "enterprise");
  const api = QUOTE_QUESTIONS.find((q) => q.id === "api_available")!;
  assert.equal(isQuestionVisible(api, answers), true);
});

test("C: translator no → translation detail hidden", () => {
  const answers = smallFleet({
    wants_ai: "yes",
    ai_features: ["doc_ocr"],
  });
  const freq = QUOTE_QUESTIONS.find((q) => q.id === "translation_frequency")!;
  assert.equal(isQuestionVisible(freq, answers), false);
});

test("D: QR/Yard no → yard detail hidden", () => {
  const answers = smallFleet({ needs_yard_qr: "no" });
  const sites = QUOTE_QUESTIONS.find((q) => q.id === "yard_sites")!;
  assert.equal(isQuestionVisible(sites, answers), false);
});

test("E: QR/Yard yes → yard detail visible", () => {
  const answers = smallFleet({
    needs_yard_qr: "yes",
    drivers_count: "51_100",
  });
  assert.equal(resolveQuotePath(answers), "enterprise");
  const sites = QUOTE_QUESTIONS.find((q) => q.id === "yard_sites")!;
  assert.equal(isQuestionVisible(sites, answers), true);
});

test("F: pilot → pilot detail shown", () => {
  const answers = smallFleet({ rollout_type: "pilot" });
  const pilotDrivers = QUOTE_QUESTIONS.find((q) => q.id === "pilot_drivers")!;
  assert.equal(isQuestionVisible(pilotDrivers, answers), true);
  assert.equal(
    evaluateVisibilityRule(
      { op: "eq", q: "rollout_type", value: "pilot" },
      answers,
      "short",
    ),
    true,
  );
});

test("G: enterprise SLA → enterprise support/security branch", () => {
  const answers = smallFleet({
    support_package: "enterprise",
    security_special: "yes",
  });
  assert.equal(resolveQuotePath(answers), "enterprise");
  const dedicated = QUOTE_QUESTIONS.find((q) => q.id === "support_dedicated")!;
  assert.equal(isQuestionVisible(dedicated, answers), true);
  const entSec = QUOTE_QUESTIONS.find(
    (q) => q.id === "security_enterprise_features",
  )!;
  assert.equal(isQuestionVisible(entSec, answers), true);
});

test("H: hidden required fields do not block submit", () => {
  const answers = smallFleet();
  // api_available would be required if visible — it is not
  const errors = validateVisibleAnswers(answers, "hu");
  assert.equal(errors.api_available, undefined);
  assert.equal(errors.integration_needed, undefined);
});

test("normalize: seats, exact over band, modules, volumes, complexity", () => {
  const answers = smallFleet({
    drivers_count: "11_25",
    drivers_exact: "18",
    vehicles_count: "26_50",
    vehicles_exact: "40",
    uses_tms: "yes",
    integration_needed: "yes",
    api_available: "no",
    wants_ai: "yes",
    ai_features: ["live_translation"],
    translation_users: "1_10",
    translation_frequency: "daily",
    custom_requirements: "Need custom report",
  });
  const path = resolveQuotePath(answers);
  const n = normalizePricingInputs(answers, path);
  assert.equal(n.driver_seats, 18);
  assert.equal(n.vehicle_licences, 40);
  assert.ok(n.module_flags.includes("trips"));
  assert.equal(n.trip_volume_band, "0_500");
  assert.equal(n.integration_complexity, "high");
  assert.equal(n.rollout_type, "full");
  assert.equal(n.custom_requirements_present, true);
  assert.ok(String(n.translation_usage_band).includes("daily"));
});

test("review never exposes pricingKey / scores", () => {
  const sections = buildReviewSections(smallFleet(), "en");
  const blob = JSON.stringify(sections);
  assert.ok(!blob.includes("pricingKey"));
  assert.ok(!blob.includes("integration_complexity"));
  assert.ok(!blob.includes("module_flags"));
  assert.ok(sections.some((s) => s.stepId === "company"));
});

test("assertNoSecrets rejects credential-like text", () => {
  assert.equal(
    assertNoSecrets({ note: "password=secret123" }),
    "note",
  );
  assert.equal(assertNoSecrets({ note: "Need dual language UI" }), null);
});

test("upstream payload keeps answers + pricing envelope", () => {
  const answers = smallFleet();
  const body = buildUpstreamQuoteBody({
    locale: "hu",
    answers,
    privacyAccepted: true,
    idempotencyKey: "test-key-1",
  });
  assert.equal(body.customerEmail, "anna@example.com");
  assert.ok(body.messageText.includes("pricing-questionnaire-v1"));
  assert.ok(body.messageText.includes('"answers"'));
  assert.ok(body.messageText.includes('"pricingInputs"'));
  assert.ok(body.messageText.length <= 20000);
  assert.equal(body.consentPrivacy, true);
});

test("draft storage key includes schema version", () => {
  assert.equal(
    quoteDraftStorageKey("hu"),
    `vianexis.${QUOTE_QUESTIONNAIRE_VERSION}.quote-draft.hu`,
  );
});
