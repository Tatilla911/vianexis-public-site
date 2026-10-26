import { TrafficBanWidget } from "@/components/site/TrafficBanWidget";
import { truckBanCopy } from "@/lib/i18n/truck-ban";
export function TruckBanPage({ locale }: { locale: string }) {
  const copy = truckBanCopy(locale);
  return <div className="container-site py-12 sm:py-20">
    <header className="mb-8 max-w-4xl border-l-4 border-gold-core pl-5">
      <h1 className="text-3xl font-bold text-brand-ink sm:text-5xl">{copy.title}</h1>
      <p className="mt-5 text-lg text-brand-ink">{copy.intro}</p>
    </header>
    <TrafficBanWidget locale={locale} />
    <aside className="mt-6 space-y-3 text-brand-ink">
      <p>{copy.source} <a href="https://trafficban.com/" className="underline" target="_blank" rel="noopener noreferrer">TrafficBan.com</a></p>
      <p>{copy.disclaimer}</p>
    </aside>
  </div>;
}
