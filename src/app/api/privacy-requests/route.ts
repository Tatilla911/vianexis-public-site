import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  if (!isEnabled()) {
    return NextResponse.json(
      { error: "privacy_requests_not_configured" },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Never accept or forward credential fields.
  for (const key of Object.keys(body)) {
    if (
      ["password", "pin", "passcode", "secret", "currentPassword", "newPassword", "driverPin"].includes(
        key,
      )
    ) {
      return NextResponse.json(
        { error: "credential_fields_not_allowed" },
        { status: 400 },
      );
    }
  }

  if (body.website && String(body.website).trim()) {
    return NextResponse.json({ error: "spam_detected" }, { status: 400 });
  }
  if (!body.privacyAccepted || !body.ownershipConfirmed) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }

  const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");
  try {
    const upstream = await fetch(`${apiBase}/public/privacy-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await parseUpstreamBody(upstream);
    if (!upstream.ok) {
      return NextResponse.json(data, {
        status: upstream.status >= 500 ? 502 : upstream.status,
      });
    }
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
