"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/site/Button";
import { Icon } from "@/components/site/Icon";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { getContent } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const content = getContent(locale);
  const pathname = usePathname();

  const navLinks = [
    { href: localePath(locale, "/features"), label: content.nav.features },
    { href: localePath(locale, "/driver-app"), label: content.nav.driverApp },
    {
      href: localePath(locale, "/company-portal"),
      label: content.nav.companyPortal,
    },
    {
      href: localePath(locale, "/documents-signatures"),
      label: content.nav.documents,
    },
    {
      href: localePath(locale, "/authority-efti"),
      label: content.nav.authorityEfti,
    },
    {
      href: localePath(locale, "/security-audit"),
      label: content.nav.security,
    },
    { href: localePath(locale, "/pilot"), label: content.nav.pilot },
    { href: localePath(locale, "/contact"), label: content.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-navy-700 bg-navy-1000/95 text-white backdrop-blur-md transition-shadow",
        compact && "shadow-lg",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between transition-[padding]",
          compact ? "py-2.5" : "py-4",
        )}
      >
        <BrandLogo href={localePath(locale)} tone="dark" />

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-navy-800 text-white"
                  : "text-neutral-grey hover:bg-navy-800/70 hover:text-white",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="[&_select]:border-navy-700 [&_select]:bg-navy-900 [&_select]:text-white">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <Button href={localePath(locale, "/pilot")} size="sm">
            {content.nav.requestAccess}
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={content.nav.menuOpen}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-navy-700 bg-navy-1000 lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="container-site space-y-1 py-4" aria-label="Mobile">
          <div className="mb-3 [&_select]:border-navy-700 [&_select]:bg-navy-900 [&_select]:text-white">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring block rounded-md px-3 py-3 text-base font-medium",
                isActive(link.href)
                  ? "bg-navy-800 text-white"
                  : "text-neutral-grey hover:bg-navy-800 hover:text-white",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={localePath(locale, "/pilot")}
            className="mt-3 w-full"
            onClick={() => setMobileOpen(false)}
          >
            {content.nav.requestAccess}
          </Button>
        </nav>
      </div>
    </header>
  );
}
