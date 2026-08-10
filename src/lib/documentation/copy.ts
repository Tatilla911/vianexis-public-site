import type { Locale } from "@/lib/i18n/types";
import { resolveManualLang, type ManualUiLang } from "./catalog";

export type DocumentationCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  publicSectionTitle: string;
  publicSectionSubtitle: string;
  customerSectionTitle: string;
  customerSectionSubtitle: string;
  versionLabel: string;
  updatedLabel: string;
  roleLabel: string;
  viewLabel: string;
  downloadLabel: string;
  restrictedBadge: string;
  restrictedBody: string;
  requestAccessLabel: string;
  languageNote: string;
};

const hu: DocumentationCopy = {
  metaTitle: "ViaNexis dokumentáció | Kézikönyvek és útmutatók",
  metaDescription:
    "ViaNexis kézikönyvek és útmutatók: nyilvános útmutatók és ügyfél dokumentáció.",
  title: "ViaNexis dokumentáció",
  subtitle: "Kézikönyvek és útmutatók a ViaNexis használatához.",
  publicSectionTitle: "Nyilvános útmutatók",
  publicSectionSubtitle:
    "Szabadon megtekinthető és letölthető kézikönyvek.",
  customerSectionTitle: "Ügyfél dokumentáció",
  customerSectionSubtitle:
    "Részletes operatív kézikönyvek ViaNexis ügyfelek és engedélyezett partnerek számára.",
  versionLabel: "Verzió",
  updatedLabel: "Frissítve",
  roleLabel: "Szerepkör",
  viewLabel: "Megtekintés",
  downloadLabel: "PDF letöltése",
  restrictedBadge: "Korlátozott",
  restrictedBody:
    "Ez a kézikönyv ViaNexis ügyfelek és engedélyezett partnerek számára érhető el.",
  requestAccessLabel: "Hozzáférés igénylése",
  languageNote: "A kézikönyvek magyar és angol nyelven érhetők el.",
};

const en: DocumentationCopy = {
  metaTitle: "ViaNexis Documentation | Manuals and guides",
  metaDescription:
    "ViaNexis manuals and guides: public guides and customer documentation.",
  title: "ViaNexis Documentation",
  subtitle: "Manuals and guides for using ViaNexis.",
  publicSectionTitle: "Public guides",
  publicSectionSubtitle: "Freely viewable and downloadable manuals.",
  customerSectionTitle: "Customer documentation",
  customerSectionSubtitle:
    "Detailed operational manuals for ViaNexis customers and authorised partners.",
  versionLabel: "Version",
  updatedLabel: "Updated",
  roleLabel: "Role",
  viewLabel: "View",
  downloadLabel: "Download PDF",
  restrictedBadge: "Restricted",
  restrictedBody:
    "This manual is available to ViaNexis customers and authorised partners.",
  requestAccessLabel: "Request access",
  languageNote: "Manuals are available in Hungarian and English.",
};

export function getDocumentationCopy(locale: Locale): DocumentationCopy {
  return resolveManualLang(locale) === "hu" ? hu : en;
}

export function documentationNavLabel(locale: Locale): string {
  return resolveManualLang(locale) === "hu" ? "Dokumentáció" : "Documentation";
}

export function documentationPathForLocale(locale: Locale): string {
  const lang: ManualUiLang = resolveManualLang(locale);
  // HU preferred slug; EN and other locales use documentation (site convention).
  return lang === "hu" ? `/${locale}/dokumentacio` : `/${locale}/documentation`;
}

export function isDocumentationSlug(slug: string): boolean {
  return slug === "/dokumentacio" || slug === "/documentation";
}
