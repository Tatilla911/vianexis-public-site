import Link from "next/link";
import { BrandLogo } from "@/components/site/BrandLogo";
import { WorldNetworkWatermark } from "@/components/site/visuals/WorldNetworkWatermark";
import {
  documentationNavLabel,
  documentationPathForLocale,
} from "@/lib/documentation/copy";
import { getContent } from "@/lib/i18n";
import { resolveBrandStory } from "@/lib/i18n/brand-story";
import { getFooterDriverAppLegalLabels } from "@/lib/i18n/driver-app-legal";
import { localePath } from "@/lib/i18n/paths";
import {
  resolveTelematicsIntegrationsContent,
  telematicsIntegrationsPath,
} from "@/lib/i18n/telematics-integrations";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const content = getContent(locale);
  const brandStory = resolveBrandStory(locale);
  const labels = getFooterDriverAppLegalLabels(locale);
  const legalLocale = locale === "hu" ? "hu" : "en";

  const productLinks = [
    { href: localePath(locale, "/features"), label: content.nav.features },
    {
      href: telematicsIntegrationsPath(locale),
      label: resolveTelematicsIntegrationsContent(locale).navLabel,
    },
    { href: localePath(locale, "/driver-app"), label: content.nav.driverApp },
    {
      href: localePath(locale, "/company-portal"),
      label: content.nav.companyPortal,
    },
    { href: localePath(locale, "/pilot"), label: content.nav.pilot },
  ];

  const resourceLinks = [
    {
      href: documentationPathForLocale(locale),
      label: documentationNavLabel(locale),
    },
  ];

  const legalLinks = [
    {
      href: localePath(legalLocale, "/legal"),
      label: labels.legalNotice,
    },
    {
      href: localePath(legalLocale, "/privacy"),
      label: labels.privacy,
    },
    {
      href: localePath(legalLocale, "/terms"),
      label: labels.terms,
    },
    {
      href: localePath(legalLocale, "/disclaimers"),
      label: labels.disclaimers,
    },
    {
      href: localePath(legalLocale, "/driver-app/account-deletion"),
      label: labels.deleteAccount,
    },
    {
      href: localePath(legalLocale, "/privacy-request"),
      label: labels.privacyContact,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-navy-700 bg-navy-1000 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <WorldNetworkWatermark variant="background" />
      </div>
      <div className="container-site relative z-10 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo href={localePath(locale)} tone="dark" />
            <p className="text-overline mt-3 max-w-md text-pretty text-gold-core">
              {brandStory.tagline}
            </p>
            <p className="text-body mt-3 max-w-md text-neutral-grey">
              {content.footer.tagline}
            </p>
            <p className="text-meta mt-4 text-text-tertiary">
              {siteConfig.domain.replace("https://", "")}
            </p>
          </div>

          <div>
            <h3 className="text-overline text-gold-core">
              {content.footer.product}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nav text-neutral-grey transition-colors hover:text-cyan-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-overline text-gold-core">
              {locale === "hu" ? "Források" : "Resources"}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nav text-neutral-grey transition-colors hover:text-cyan-glow"
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
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-nav text-neutral-grey transition-colors hover:text-cyan-glow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6">
          <p className="text-meta leading-relaxed text-text-tertiary">
            © {new Date().getFullYear()} ViaNexis. {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
