import { NextResponse } from "next/server";

function apiBase(): string | null {
  const base = process.env.API_BASE_URL?.trim();
  return base ? base.replace(/\/$/, "") : null;
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

export async function POST(
  _request: Request,
  context: { params: Promise<{ token: string }> },
) {
  const base = apiBase();
  if (!base) {
    return NextResponse.json({ error: "applications_not_configured" }, { status: 503 });
  }
  const { token } = await context.params;
  try {
    const upstream = await fetch(
      `${base}/public/company-assessments/continue/${encodeURIComponent(token)}/submit`,
      { method: "POST", headers: { Accept: "application/json" } },
    );
    const data = await parseUpstreamBody(upstream);
    return NextResponse.json(data, {
      status: upstream.ok ? 200 : upstream.status >= 500 ? 502 : upstream.status,
    });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
