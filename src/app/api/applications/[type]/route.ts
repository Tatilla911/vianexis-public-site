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

export async function GET() {
  return NextResponse.json({ enabled: isEnabled() });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ type: string }> },
) {
  if (!isEnabled()) {
    return NextResponse.json({ error: "applications_not_configured" }, { status: 503 });
  }

  const { type } = await context.params;
  if (!["company", "driver", "partner"].includes(type)) {
    return NextResponse.json({ error: "invalid_type" }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (body.website && String(body.website).trim()) {
    return NextResponse.json({ error: "spam_detected" }, { status: 400 });
  }
  if (!body.privacyAccepted) {
    return NextResponse.json({ error: "privacy_required" }, { status: 400 });
  }

  // Never log captcha tokens or raw body secrets.
  const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");
  try {
    const upstream = await fetch(`${apiBase}/public/applications/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await parseUpstreamBody(upstream);
    if (!upstream.ok) {
      // Prefer structured upstream JSON (code, existingRequest) over opaque text.
      return NextResponse.json(data, {
        status: upstream.status >= 500 ? 502 : upstream.status,
      });
    }
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
