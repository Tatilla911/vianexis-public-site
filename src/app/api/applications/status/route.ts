import { NextResponse } from "next/server";

function isEnabled(): boolean {
  return Boolean(process.env.API_BASE_URL?.trim());
}

function captchaSiteKey(): string | null {
  const key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  return key || null;
}

/**
 * Intake status for the marketing site.
 * captchaRequired is true only when BOTH backend requires captcha AND a site key exists.
 * Staging without CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS remains usable without Turnstile.
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
        captchaRequired = Boolean(data.captchaRequired) && Boolean(captchaSiteKey());
        captchaProvider = data.captchaProvider ?? "none";
      }
    } catch {
      // Backend unreachable — form will show network errors on submit.
    }
  }

  return NextResponse.json({
    enabled,
    captchaRequired,
    captchaProvider: captchaRequired ? captchaProvider : "none",
    captchaSiteKey: captchaRequired ? captchaSiteKey() : null,
    captchaNote:
      "When CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS is false on the API, captcha is not required.",
  });
}
