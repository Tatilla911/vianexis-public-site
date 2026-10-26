import { redirect } from 'next/navigation';
import { truckBanPath } from '@/lib/i18n/truck-ban';
export default async function Page({params}: {params: Promise<{locale: string}>}) {
  redirect(truckBanPath((await params).locale));
}
