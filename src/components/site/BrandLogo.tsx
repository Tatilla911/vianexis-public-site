import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href: string;
  /** dark = on navy surfaces; light = on white surfaces */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Existing ViaNexis mark (VN badge) — do not replace with Figma W logo.
 */
export function BrandLogo({ href, tone = "dark", className }: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={cn("focus-ring flex items-center gap-2 rounded-md", className)}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold",
          tone === "dark"
            ? "bg-navy-800 text-gold-core ring-1 ring-navy-700"
            : "bg-navy text-gold-core",
        )}
        aria-hidden="true"
      >
        VN
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          tone === "dark" ? "text-white" : "text-navy",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
