import { NextResponse } from "next/server";

function isEnabled(): boolean {
  return Boolean(process.env.API_BASE_URL?.trim());
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

  const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");
  try {
    const upstream = await fetch(`${apiBase}/public/applications/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!upstream.ok) {
      const text = await upstream.text();
      return NextResponse.json(
        { error: "upstream_failed", detail: text.slice(0, 200) },
        { status: upstream.status >= 500 ? 502 : upstream.status },
      );
    }
    const data = await upstream.json();
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
