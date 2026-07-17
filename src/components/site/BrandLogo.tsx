import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href: string;
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md";
};

/**
 * Official ViaNexis mark (uploaded gold VN monogram) + wordmark.
 */
export function BrandLogo({
  href,
  tone = "dark",
  className,
  size = "md",
}: BrandLogoProps) {
  const markPx = size === "sm" ? 32 : 36;
  const wordSize = size === "sm" ? "text-base" : "text-lg";

  return (
    <Link
      href={href}
      className={cn("focus-ring flex items-center gap-2.5 rounded-md", className)}
      aria-label={siteConfig.name}
    >
      <Image
        src="/brand/vianexis-mark.png"
        alt=""
        width={markPx}
        height={markPx}
        className="shrink-0 rounded-[22%] shadow-[0_0_20px_rgb(212_175_55_/_0.25)]"
        priority
      />
      <span
        className={cn(
          "font-bold tracking-tight",
          wordSize,
          tone === "dark" ? "text-white" : "text-navy-1000",
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
