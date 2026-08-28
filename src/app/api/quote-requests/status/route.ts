import { NextResponse } from "next/server";

function isEnabled(): boolean {
  return Boolean(process.env.API_BASE_URL?.trim());
}

function captchaSiteKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  return key || null;
}

/**
 * Quote intake status — mirrors applications/status CAPTCHA policy.
 * captchaRequired only when backend requires it AND a site key exists.
 */
export async function GET() {
  const enabled = isEnabled();
  let captchaRequired = false;
  let captchaProvider: string = "none";

  if (enabled) {
    try {
      const apiBase = process.env.API_BASE_URL!.replace(/\/$/, "");
      const upstream = await fetch(`${apiBase}/public/applications/status`, {
        method: "GET",
        cache: "no-store",
      });
      if (upstream.ok) {
        const data = (await upstream.json()) as {
          captchaRequired?: boolean;
          captchaProvider?: string;
        };
        captchaRequired =
          Boolean(data.captchaRequired) && Boolean(captchaSiteKey());
        captchaProvider = data.captchaProvider ?? "none";
      }
    } catch {
      // Backend unreachable — form will surface network errors on submit.
    }
  }

  return NextResponse.json({
    enabled,
    captchaRequired,
    captchaProvider: captchaRequired ? captchaProvider : "none",
    captchaSiteKey: captchaRequired ? captchaSiteKey() : null,
  });
}
