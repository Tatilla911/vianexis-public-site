import Link from "next/link";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const content = getContent(locale);

  const productLinks = [
    { href: localePath(locale, "/features"), label: content.nav.features },
    { href: localePath(locale, "/driver-app"), label: content.nav.driverApp },
    {
      href: localePath(locale, "/company-portal"),
      label: content.nav.companyPortal,
    },
    { href: localePath(locale, "/pilot"), label: content.nav.pilot },
  ];

  const legalLinks = [
    { href: localePath(locale, "/legal"), label: content.footer.legalNotice },
    { href: localePath(locale, "/privacy"), label: content.footer.privacy },
    { href: localePath(locale, "/terms"), label: content.footer.terms },
    {
      href: localePath(locale, "/disclaimers"),
      label: content.footer.disclaimers,
    },
    {
      href: `mailto:${siteConfig.contactEmail}`,
      label: content.footer.dataContact,
    },
  ];

  return (
    <footer className="border-t border-deep-blue/10 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-deep-blue text-sm font-bold text-gold">
                VN
              </span>
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {content.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-white/40">
              {siteConfig.domain.replace("https://", "")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {content.footer.product}
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {content.footer.legal}
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            © {new Date().getFullYear()} ViaNexis. {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
