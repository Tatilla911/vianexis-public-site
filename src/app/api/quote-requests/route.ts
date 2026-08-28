import { NextResponse } from "next/server";
import {
  assertNoSecrets,
  buildUpstreamQuoteBody,
  validateVisibleAnswers,
  type QuoteAnswers,
  type QuoteLocale,
  type QuoteSubmitClientPayload,
} from "@/lib/quote-questionnaire";

function isEnabled(): boolean {
  return Boolean(process.env.API_BASE_URL?.trim());
}

async function parseUpstreamBody(upstream: Response): Promise<unknown> {
  const text = await upstream.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return { error: "upstream_failed", detail: text.slice(0, 200) };
  }
}

const recentKeys = new Map<string, { at: number; body: unknown }>();
const IDEMPOTENCY_TTL_MS = 15 * 60 * 1000;

function pruneIdempotency(now: number) {
  for (const [key, value] of recentKeys) {
    if (now - value.at > IDEMPOTENCY_TTL_MS) recentKeys.delete(key);
  }
}

export async function GET() {
  return NextResponse.json({ enabled: isEnabled() });
}

export async function POST(request: Request) {
  if (!isEnabled()) {
    return NextResponse.json(
      { error: "quote_intake_not_configured" },
      { status: 503 },
    );
  }

  let body: QuoteSubmitClientPayload;
  try {
    body = (await request.json()) as QuoteSubmitClientPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (body.website && String(body.website).trim()) {
    return NextResponse.json({ error: "spam_detected" }, { status: 400 });
  }

  if (!body.privacyAccepted) {
    return NextResponse.json({ error: "privacy_required" }, { status: 400 });
  }

  const locale: QuoteLocale = body.locale === "hu" ? "hu" : "en";
  const answers: QuoteAnswers =
    body.answers && typeof body.answers === "object" ? body.answers : {};

  const secretField = assertNoSecrets(answers);
  if (secretField) {
    return NextResponse.json(
      { error: "secrets_not_allowed", field: secretField },
      { status: 400 },
    );
  }

  const validation = validateVisibleAnswers(answers, locale);
  if (Object.keys(validation).length > 0) {
    return NextResponse.json(
      { error: "validation_failed", fields: validation },
      { status: 400 },
    );
  }

  const email = String(answers.contact_email ?? "").trim();
  if (!email || email.length > 320) {
    return NextResponse.json({ error: "validation_failed" }, { status: 400 });
  }

  const serialized = JSON.stringify(answers);
  if (serialized.length > 18000) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  const idempotencyKey =
    (typeof body.idempotencyKey === "string" && body.idempotencyKey.trim()) ||
    request.headers.get("Idempotency-Key") ||
    "";

  const now = Date.now();
  pruneIdempotency(now);
  if (idempotencyKey && recentKeys.has(idempotencyKey)) {
    const cached = recentKeys.get(idempotencyKey)!;
    return NextResponse.json(cached.body, { status: 201 });
  }

  const upstreamBody = buildUpstreamQuoteBody({
    ...body,
    locale,
    answers,
    idempotencyKey: idempotencyKey || `auto-${now}`,
  });

  const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");
  try {
    const upstream = await fetch(`${apiBase}/public/intake/quote-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(upstreamBody),
    });
    const data = (await parseUpstreamBody(upstream)) as Record<string, unknown>;
    if (!upstream.ok) {
      return NextResponse.json(data, {
        status: upstream.status >= 500 ? 502 : upstream.status,
      });
    }

    const reference =
      typeof data.reference === "string"
        ? data.reference
        : typeof data.publicReference === "string"
          ? data.publicReference
          : typeof data.id === "number" || typeof data.id === "string"
            ? `QR-${String(data.id)}`
            : `QR-${idempotencyKey.slice(0, 8) || now.toString(36)}`;

    const responseBody = {
      acknowledged: true,
      reference,
      status: "NEW",
      ...data,
    };

    if (idempotencyKey) {
      recentKeys.set(idempotencyKey, { at: now, body: responseBody });
    }

    return NextResponse.json(responseBody, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "upstream_unreachable" },
      { status: 502 },
    );
  }
}
