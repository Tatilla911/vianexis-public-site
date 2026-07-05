import { NextResponse } from "next/server";

type ContactPayload = {
  customerName?: string;
  companyName?: string;
  customerEmail: string;
  customerPhone?: string;
  sourceLocale: string;
  preferredLanguage?: string;
  messageLanguage?: string;
  messageText: string;
  consentPrivacy?: boolean;
};

function isIntakeEnabled(): boolean {
  return (
    process.env.CONTACT_INTAKE_ENABLED === "true" &&
    Boolean(process.env.API_BASE_URL?.trim())
  );
}

export async function GET() {
  return NextResponse.json({ enabled: isIntakeEnabled() });
}

export async function POST(request: Request) {
  if (!isIntakeEnabled()) {
    return NextResponse.json(
      { error: "intake_not_configured" },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body.customerEmail?.trim() || !body.messageText?.trim() || !body.sourceLocale?.trim()) {
    return NextResponse.json({ error: "validation_failed" }, { status: 400 });
  }

  const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");

  try {
    const upstream = await fetch(`${apiBase}/public/intake/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerEmail: body.customerEmail.trim(),
        customerName: body.customerName?.trim(),
        companyName: body.companyName?.trim(),
        customerPhone: body.customerPhone?.trim(),
        sourceLocale: body.sourceLocale.trim(),
        preferredLanguage: body.preferredLanguage?.trim() ?? body.sourceLocale,
        messageLanguage: body.messageLanguage?.trim() ?? body.sourceLocale,
        messageText: body.messageText.trim(),
        consentPrivacy: body.consentPrivacy ?? true,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return NextResponse.json(
        { error: "upstream_failed", detail: text.slice(0, 200) },
        { status: 502 },
      );
    }

    const data = await upstream.json();
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
