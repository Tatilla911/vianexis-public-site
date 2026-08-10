import { redirect } from "next/navigation";
import { resolveLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import DocumentationPage, {
  generateMetadata as docsGenerateMetadata,
} from "../documentation/page";

type PageProps = {
  params: Promise<{ locale: string }>;
};

/** HU preferred slug; non-HU locales redirect to /documentation. */
export async function generateMetadata(props: PageProps) {
  const locale = resolveLocale((await props.params).locale) as Locale;
  if (locale !== "hu") {
    return {};
  }
  return docsGenerateMetadata(props);
}

export default async function DokumentacioPage(props: PageProps) {
  const locale = resolveLocale((await props.params).locale) as Locale;
  if (locale !== "hu") {
    redirect(`/${locale}/documentation`);
  }
  return DocumentationPage(props);
}
