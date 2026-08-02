import { redirect } from 'next/navigation';

type PageProps = {
  params: Promise<{ code: string }>;
};

/**
 * Public opaque QR entry: https://vianexis.eu/q/<code>
 * Proxies to the backend resolver which issues allowlisted redirects only.
 * Never logs the plaintext code.
 */
export default async function PublicQrResolvePage({ params }: PageProps) {
  const { code } = await params;
  const apiBase = (
    process.env.VIANEXIS_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://vianexis-staging-api.onrender.com'
  ).replace(/\/+$/, '');

  const safeCode = encodeURIComponent(code.trim());
  // Prefer server-side redirect via backend so allowlist + consume run once.
  redirect(`${apiBase}/q/${safeCode}`);
}
