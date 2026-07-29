/**
 * Phase 1 unit checks for public application error/success mapping.
 * Run: node --test scripts/test-application-error-map.mjs
 */
import assert from "node:assert/strict";
import test from "node:test";

function mapApplicationError(input) {
  const body =
    input.body && typeof input.body === "object" ? input.body : {};
  const code = typeof body.code === "string" ? body.code : "";
  const error = typeof body.error === "string" ? body.error : "";
  const existing = body.existingRequest;
  const contact = body.contact;

  if (input.status === 409 || code === "duplicate_pending_registration") {
    return {
      key: "duplicate",
      reference: existing?.reference ?? null,
      supportEmail: contact?.supportEmail ?? "support@vianexis.eu",
    };
  }
  if (code === "captcha_required" || error === "captcha_required") {
    return { key: "captchaRequired" };
  }
  if (code === "captcha_failed" || code === "captcha_invalid") {
    return { key: "captchaInvalid" };
  }
  if (error === "privacy_required") return { key: "privacy" };
  if (error === "spam_detected") return { key: "spam" };
  if (error === "applications_not_configured" || input.status === 503) {
    return { key: "notConfigured" };
  }
  if (error === "upstream_unreachable" || input.status === 502) {
    return { key: "network" };
  }
  return { key: "submitFailed" };
}

function parseApplicationSuccess(body) {
  const data = body && typeof body === "object" ? body : {};
  const reference =
    typeof data.reference === "string" && data.reference.trim()
      ? data.reference.trim()
      : typeof data.id === "number"
        ? `APP-${data.id}`
        : "APP-unknown";
  return {
    reference,
    status: typeof data.status === "string" ? data.status : "new",
    submittedAt:
      typeof data.submittedAt === "string"
        ? data.submittedAt
        : typeof data.createdAt === "string"
          ? data.createdAt
          : null,
  };
}

test("maps 409 duplicate with safe reference", () => {
  const mapped = mapApplicationError({
    status: 409,
    body: {
      code: "duplicate_pending_registration",
      existingRequest: { reference: "APP-12" },
      contact: { supportEmail: "support@vianexis.eu" },
    },
  });
  assert.equal(mapped.key, "duplicate");
  assert.equal(mapped.reference, "APP-12");
});

test("maps captcha required", () => {
  const mapped = mapApplicationError({
    status: 400,
    body: { code: "captcha_required" },
  });
  assert.equal(mapped.key, "captchaRequired");
});

test("maps network / unreachable", () => {
  const mapped = mapApplicationError({
    status: 502,
    body: { error: "upstream_unreachable" },
  });
  assert.equal(mapped.key, "network");
});

test("parses success reference", () => {
  const ok = parseApplicationSuccess({
    id: 7,
    reference: "APP-7",
    status: "new",
    submittedAt: "2026-07-28T12:00:00.000Z",
  });
  assert.equal(ok.reference, "APP-7");
  assert.equal(ok.status, "new");
});

test("generic failure ignores secret fields", () => {
  const mapped = mapApplicationError({
    status: 500,
    body: { stack: "Error: secret", token: "abc" },
  });
  assert.equal(mapped.key, "submitFailed");
  assert.equal(mapped.reference, undefined);
});
