import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { WorldNetworkWatermark } from "@/components/site/visuals/WorldNetworkWatermark";
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
    <footer className="relative overflow-hidden border-t border-navy-700 bg-navy-1000 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <WorldNetworkWatermark variant="background" />
      </div>
      <div className="container-site relative z-10 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo href={localePath(locale)} tone="dark" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-grey">
              {content.footer.tagline}
            </p>
            <p className="mt-4 text-sm text-navy-600">
              {siteConfig.domain.replace("https://", "")}
            </p>
          </div>

          <div>
            <h3 className="text-overline text-gold-core">
              {content.footer.product}
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-grey transition-colors hover:text-cyan-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-overline text-gold-core">
              {content.footer.legal}
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-grey transition-colors hover:text-cyan-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6">
          <p className="text-xs leading-relaxed text-navy-600">
            © {new Date().getFullYear()} ViaNexis. {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
