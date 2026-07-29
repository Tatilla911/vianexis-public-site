/**
 * Maps Next.js / upstream application API errors to safe UI message keys.
 * Never returns raw backend stacks or secret fields.
 */

export type ApplicationErrorKey =
  | "duplicate"
  | "captchaRequired"
  | "captchaInvalid"
  | "privacy"
  | "spam"
  | "network"
  | "notConfigured"
  | "submitFailed";

export type ApplicationSubmitSuccess = {
  reference: string;
  status: string;
  submittedAt: string | null;
  applicationId?: number;
};

export type ApplicationSubmitFailure = {
  key: ApplicationErrorKey;
  reference?: string | null;
  supportEmail?: string | null;
};

export function mapApplicationError(input: {
  status: number;
  body: unknown;
}): ApplicationSubmitFailure {
  const body =
    input.body && typeof input.body === "object"
      ? (input.body as Record<string, unknown>)
      : {};

  const code = typeof body.code === "string" ? body.code : "";
  const error = typeof body.error === "string" ? body.error : "";
  const existing = body.existingRequest as
    | { reference?: string | null }
    | undefined;
  const contact = body.contact as { supportEmail?: string | null } | undefined;

  if (input.status === 409 || code === "duplicate_pending_registration") {
    return {
      key: "duplicate",
      reference: existing?.reference ?? null,
      supportEmail: contact?.supportEmail ?? "support@vianexis.eu",
    };
  }

  if (
    code === "captcha_required" ||
    error === "captcha_required" ||
    input.status === 400 && String(body.message ?? "").includes("CAPTCHA")
  ) {
    return { key: "captchaRequired" };
  }

  if (
    code === "captcha_failed" ||
    code === "captcha_invalid" ||
    error === "captcha_failed"
  ) {
    return { key: "captchaInvalid" };
  }

  if (error === "privacy_required") {
    return { key: "privacy" };
  }

  if (error === "spam_detected") {
    return { key: "spam" };
  }

  if (error === "applications_not_configured" || input.status === 503) {
    return { key: "notConfigured" };
  }

  if (error === "upstream_unreachable" || input.status === 502) {
    return { key: "network" };
  }

  return { key: "submitFailed" };
}

export function parseApplicationSuccess(body: unknown): ApplicationSubmitSuccess {
  const data =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const reference =
    typeof data.reference === "string" && data.reference.trim()
      ? data.reference.trim()
      : typeof data.id === "number"
        ? `APP-${data.id}`
        : typeof data.applicationId === "number"
          ? `APP-${data.applicationId}`
          : "APP-unknown";
  const submittedAt =
    typeof data.submittedAt === "string"
      ? data.submittedAt
      : typeof data.createdAt === "string"
        ? data.createdAt
        : null;
  const status =
    typeof data.status === "string" && data.status.trim()
      ? data.status
      : "new";

  return {
    reference,
    status,
    submittedAt,
    applicationId:
      typeof data.applicationId === "number"
        ? data.applicationId
        : typeof data.id === "number"
          ? data.id
          : undefined,
  };
}
