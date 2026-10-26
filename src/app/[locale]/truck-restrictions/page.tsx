import { redirect } from "next/navigation";
import { TruckBanPage } from "@/components/site/TruckBanPage";
import { truckBanCopy, truckBanPath } from "@/lib/i18n/truck-ban";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return { title: truckBanCopy(locale).title, alternates: { canonical: truckBanPath(locale), languages: { hu: "/hu/kamionstop", en: "/en/truck-restrictions" } } };
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (`/${locale}/truck-restrictions` !== truckBanPath(locale)) redirect(truckBanPath(locale));
  return <TruckBanPage locale={locale} />;
}
