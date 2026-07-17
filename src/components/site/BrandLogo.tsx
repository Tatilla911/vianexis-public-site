"use client";

import Link from "next/link";
import { useId } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href: string;
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md";
};

/**
 * ViaNexis brand mark — Figma gold badge + angular route monogram + wordmark.
 */
export function BrandLogo({
  href,
  tone = "dark",
  className,
  size = "md",
}: BrandLogoProps) {
  const gradId = useId().replace(/:/g, "");
  const markSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const wordSize = size === "sm" ? "text-base" : "text-lg";

  return (
    <Link
      href={href}
      className={cn("focus-ring flex items-center gap-2.5 rounded-md", className)}
      aria-label={siteConfig.name}
    >
      <svg
        className={cn(markSize, "shrink-0")}
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7C27B" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6F3D" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill={`url(#${gradId})`} />
        {/* Angular route monogram — reads as Via / path, not “VN” text */}
        <path
          d="M9 11 L16 23 L23 11"
          fill="none"
          stroke="#0A111A"
          strokeWidth="2.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 11 H21.5"
          stroke="#FFFFFF"
          strokeWidth="2.05"
          strokeLinecap="round"
        />
        <circle cx="16" cy="11" r="1.4" fill="#00BFFF" />
      </svg>
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
