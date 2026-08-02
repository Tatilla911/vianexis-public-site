import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Transparent VX monogram (no cream plate). */
const MARK_SRC = "/brand/vianexis-mark.png";

type BrandSize = "xs" | "sm" | "md" | "lg";

const MARK_HEIGHT: Record<BrandSize, number> = {
  xs: 22,
  sm: 28,
  md: 34,
  lg: 44,
};

const WORD_CLASS: Record<BrandSize, string> = {
  xs: "text-[0.95rem] tracking-tight",
  sm: "text-[1.1rem] tracking-tight",
  md: "text-[1.25rem] tracking-tight",
  lg: "text-[1.55rem] tracking-tight",
};

type BrandWordmarkProps = {
  size?: BrandSize;
  className?: string;
  /** Optional product line after the lockup (e.g. Driver, Network). */
  suffix?: string;
  priority?: boolean;
};

/**
 * ViaNexis mark (transparent VX) + wordmark for marketing chrome.
 */
export function BrandWordmark({
  size = "md",
  className,
  suffix,
  priority = false,
}: BrandWordmarkProps) {
  const height = MARK_HEIGHT[size];

  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-2.5",
        className,
      )}
    >
      <Image
        src={MARK_SRC}
        alt=""
        width={height}
        height={height}
        className="h-auto w-auto max-w-full shrink-0 object-contain object-left"
        style={{ height, width: "auto" }}
        priority={priority}
        aria-hidden="true"
      />
      <span
        className={cn(
          "font-semibold text-gold-core whitespace-nowrap",
          WORD_CLASS[size],
        )}
        style={{ fontFamily: "var(--font-display-serif), Georgia, serif" }}
      >
        ViaNexis
      </span>
      {suffix ? (
        <span className="text-overline text-gold-core/80 whitespace-nowrap">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}

type BrandLogoProps = {
  href: string;
  /** @deprecated Lockup is gold metallic; tone kept for call-site compatibility. */
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md";
};

/**
 * Linked ViaNexis mark + wordmark for header / footer chrome.
 */
export function BrandLogo({
  href,
  className,
  size = "md",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={cn("focus-ring inline-flex items-center rounded-md", className)}
      aria-label={siteConfig.name}
    >
      <BrandWordmark size={size} priority />
    </Link>
  );
}
