import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
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
              Digitális fuvar-, dokumentum- és ellenőrzési támogatás fuvarozó
              cégeknek. eFTI-ready foundation — nem minősített eFTI platform.
            </p>
            <p className="mt-4 text-sm text-white/40">
              {siteConfig.domain.replace("https://", "")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Termék
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
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
              Jogi
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
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
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            © {new Date().getFullYear()} ViaNexis. A platform nem minősített eFTI
            platform, nem ígér hatósági elfogadást, automatikus jogi bizonyító
            erőt, hibátlan OCR/AI/fordítást vagy vészhelyzeti/SOS szolgáltatást.
          </p>
        </div>
      </div>
    </footer>
  );
}
