import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const LOCKUP_SRC = "/brand/vianexis-lockup.png";
const LOCKUP_NATURAL = { w: 577, h: 109 } as const;

type BrandSize = "xs" | "sm" | "md" | "lg";

const LOCKUP_HEIGHT: Record<BrandSize, number> = {
  xs: 18,
  sm: 24,
  md: 28,
  lg: 36,
};

type BrandWordmarkProps = {
  size?: BrandSize;
  className?: string;
  /** Optional product line after the lockup (e.g. Driver, Network). */
  suffix?: string;
  priority?: boolean;
};

function lockupWidth(height: number): number {
  return Math.round((LOCKUP_NATURAL.w / LOCKUP_NATURAL.h) * height);
}

/**
 * Official ViaNexis lockup image (emblem + metallic wordmark).
 * Transparent plate — blends on navy / black marketing chrome.
 */
export function BrandWordmark({
  size = "md",
  className,
  suffix,
  priority = false,
}: BrandWordmarkProps) {
  const height = LOCKUP_HEIGHT[size];
  const width = lockupWidth(height);

  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-2",
        className,
      )}
    >
      <Image
        src={LOCKUP_SRC}
        alt=""
        width={width}
        height={height}
        className="h-auto w-auto max-w-full shrink-0 object-contain object-left"
        style={{ height, width: "auto" }}
        priority={priority}
        aria-hidden="true"
      />
      {suffix ? (
        <span className="text-overline text-gold-core whitespace-nowrap">
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
 * Linked official ViaNexis lockup for header / footer chrome.
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
