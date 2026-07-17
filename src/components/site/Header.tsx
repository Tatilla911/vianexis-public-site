"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState("");
  const [compact, setCompact] = useState(false);
  const content = getContent(locale);
  const pathname = usePathname();
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMenuVisible = menuOpen && menuPath === pathname;

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

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setMenuPath(pathname);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    clearCloseTimer();
    setMenuOpen(false);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setMenuOpen(false), 140);
  };

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuVisible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isMenuVisible]);

  useEffect(() => () => clearCloseTimer(), []);

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
          "container-site flex items-center justify-between gap-4 transition-[padding]",
          compact ? "py-2.5" : "py-4",
        )}
      >
        <BrandLogo href={localePath(locale)} tone="dark" />

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block [&_select]:border-navy-700 [&_select]:bg-navy-900 [&_select]:text-white">
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <Button
            href={localePath(locale, "/pilot")}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {content.nav.requestAccess}
          </Button>

          <div
            ref={menuRef}
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={cn(
                "focus-ring group inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border transition-all",
                isMenuVisible
                  ? "border-cyan-glow/50 bg-navy-800 text-cyan-glow shadow-[0_0_24px_rgb(0_191_255_/_0.2)]"
                  : "border-navy-600 bg-navy-900/80 text-white hover:border-gold-core/50 hover:text-gold-core",
              )}
              aria-label={content.nav.menuOpen}
              aria-expanded={isMenuVisible}
              aria-controls={menuId}
              aria-haspopup="menu"
              onClick={() => {
                if (isMenuVisible) closeMenu();
                else openMenu();
              }}
            >
              <Icon name={isMenuVisible ? "close" : "menu"} size={24} />
            </button>

            <div
              id={menuId}
              role="menu"
              aria-label="Primary"
              className={cn(
                "absolute right-0 top-[calc(100%+0.65rem)] z-50 w-[min(20rem,calc(100vw-1.5rem))] origin-top-right",
                "transition-[opacity,transform,visibility] duration-200 ease-out",
                isMenuVisible
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 pointer-events-none opacity-0",
              )}
            >
              <div className="overflow-hidden rounded-lg border border-navy-600 bg-navy-900/95 shadow-[0_20px_50px_rgb(0_0_0_/_0.55),0_0_40px_rgb(0_191_255_/_0.08)] backdrop-blur-xl">
                <div className="border-b border-navy-700 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 px-4 py-3">
                  <p className="text-overline text-gold-core">ViaNexis</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-grey">
                    {content.footer.tagline}
                  </p>
                </div>

                <nav className="flex flex-col gap-1.5 p-2.5" aria-label="Primary">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className={cn(
                        "focus-ring group/item relative flex items-center justify-between gap-3 overflow-hidden rounded-md border px-3.5 py-2.5 text-sm font-semibold transition-all",
                        isActive(link.href)
                          ? "border-gold-core/45 bg-gold-core/10 text-gold-pale shadow-[inset_0_0_0_1px_rgb(212_175_55_/_0.15)]"
                          : "border-navy-700 bg-navy-1000/60 text-neutral-grey hover:border-cyan-glow/40 hover:bg-navy-800 hover:text-white hover:shadow-[0_0_20px_rgb(0_191_255_/_0.12)]",
                      )}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <Icon
                        name="arrowRight"
                        size={16}
                        className={cn(
                          "relative z-10 shrink-0 transition-transform",
                          isActive(link.href)
                            ? "text-gold-core"
                            : "text-navy-600 group-hover/item:translate-x-0.5 group-hover/item:text-cyan-glow",
                        )}
                      />
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-cyan-glow to-gold-core transition-opacity",
                          isActive(link.href)
                            ? "opacity-100"
                            : "opacity-0 group-hover/item:opacity-100",
                        )}
                      />
                    </Link>
                  ))}
                </nav>

                <div className="space-y-2 border-t border-navy-700 bg-navy-1000/70 p-3 sm:hidden">
                  <div className="[&_select]:w-full [&_select]:border-navy-700 [&_select]:bg-navy-900 [&_select]:text-white">
                    <LanguageSwitcher currentLocale={locale} />
                  </div>
                  <Button
                    href={localePath(locale, "/pilot")}
                    className="w-full"
                    onClick={closeMenu}
                  >
                    {content.nav.requestAccess}
                  </Button>
                </div>

                <div className="hidden border-t border-navy-700 p-3 sm:block">
                  <Button
                    href={localePath(locale, "/pilot")}
                    className="w-full"
                    onClick={closeMenu}
                  >
                    {content.nav.requestAccess}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
