export const siteConfig = {
  name: "ViaNexis",
  domain: "https://vianexis.eu",
  title: "ViaNexis — digitális fuvarbizonyíték és sofőrplatform",
  description:
    "Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben. Belső tesztelés előkészítés alatt.",
  contactEmail: "info@vianexis.eu",
} as const;

export const navLinks = [
  { href: "/features", label: "Funkciók" },
  { href: "/driver-app", label: "Sofőr app" },
  { href: "/company-portal", label: "Céges portál" },
  { href: "/documents-signatures", label: "Dokumentumok" },
  { href: "/authority-efti", label: "Hatóság / eFTI" },
  { href: "/security-audit", label: "Biztonság" },
  { href: "/pilot", label: "Pilot hozzáférés" },
  { href: "/contact", label: "Kapcsolat" },
] as const;

export const footerLinks = {
  product: [
    { href: "/features", label: "Funkciók" },
    { href: "/driver-app", label: "Sofőr app" },
    { href: "/company-portal", label: "Céges portál" },
    { href: "/pilot", label: "Pilot hozzáférés" },
  ],
  legal: [
    { href: "/legal", label: "Jogi információk" },
    { href: "/privacy", label: "Adatvédelem" },
    { href: "/terms", label: "Felhasználási feltételek" },
  ],
} as const;
