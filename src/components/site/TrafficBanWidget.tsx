"use client";
import { useState } from "react";
import { Button } from "@/components/site/Button";
import { trafficBanEmbedUrl, truckBanCopy } from "@/lib/i18n/truck-ban";

export function TrafficBanWidget({ locale }: { locale: string }) {
  const copy = truckBanCopy(locale);
  const [allowed, setAllowed] = useState(false);
  return <section className="rounded-2xl border border-gold-core/40 bg-navy-900 p-4 sm:p-6" aria-label={copy.frame}>
    <p className="mb-3 text-brand-ink">{copy.privacy}</p>
    <a className="underline text-brand-ink" href="https://trafficban.com/privacy.html" target="_blank" rel="noopener noreferrer">{copy.privacyLink}</a>
    <div className="my-4"><Button onClick={() => setAllowed(!allowed)}>{allowed ? copy.hide : copy.load}</Button></div>
    {allowed && <iframe title={copy.frame} src={trafficBanEmbedUrl} referrerPolicy="no-referrer" className="w-full rounded-lg border border-gray-400 bg-white" style={{ height: "min(720px, 80vh)", minHeight: 360 }} />}
    <p className="mt-4 text-brand-ink">{copy.fallback}</p>
    <a className="mt-3 inline-block underline text-brand-ink" href="https://trafficban.com/en" target="_blank" rel="noopener noreferrer">{copy.open}</a>
  </section>;
}
