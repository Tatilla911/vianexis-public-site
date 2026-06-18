"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-deep-blue/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-sm font-bold text-gold">
            VN
          </span>
          <span className="text-lg font-bold text-navy">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text/80 transition-colors hover:bg-light-bg hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/pilot"
            className="inline-flex items-center rounded-lg bg-vianexis-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-vianexis-blue/90"
          >
            Hozzáférés igénylése
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü megnyitása"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-deep-blue/10 bg-white lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-text/80 hover:bg-light-bg hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/pilot"
            className="mt-2 block rounded-lg bg-vianexis-blue px-4 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Hozzáférés igénylése
          </Link>
        </nav>
      </div>
    </header>
  );
}
