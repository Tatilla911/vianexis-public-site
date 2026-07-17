import Link from "next/link";
import { TruckIcon } from "@/components/site/visuals/TruckIcon";
import { cn } from "@/lib/utils";

export type FeatureModuleIcon =
  | "truck"
  | "portal"
  | "doc"
  | "message"
  | "audit"
  | "offline";

type FeatureModuleCardProps = {
  title: string;
  description: string;
  href: string;
  detailsLabel?: string;
  icon: FeatureModuleIcon;
  className?: string;
};

function ModuleGlyph({ icon }: { icon: Exclude<FeatureModuleIcon, "truck"> }) {
  const paths: Record<typeof icon, React.ReactNode> = {
    portal: (
      <path
        d="M3.5 6.75A1.75 1.75 0 0 1 5.25 5h13.5a1.75 1.75 0 0 1 1.75 1.75v10.5A1.75 1.75 0 0 1 18.75 19H5.25a1.75 1.75 0 0 1-1.75-1.75V6.75Zm0 3h17M7 8.5h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    doc: (
      <path
        d="M7 3.5h6l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Zm6 0V7h4M9 12h6M9 15.5h6M9 8.5h1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    message: (
      <path
        d="M4 6.75A1.75 1.75 0 0 1 5.75 5h12.5A1.75 1.75 0 0 1 20 6.75v8.5A1.75 1.75 0 0 1 18.25 17H9l-4 3.25V6.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    audit: (
      <path
        d="M12 3.5 19 6.25v5.5c0 4.5-3 7.25-7 8.75-4-1.5-7-4.25-7-8.75v-5.5L12 3.5Zm-3 8 2.25 2.25L15.5 9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    offline: (
      <path
        d="M6.5 17.25a3.75 3.75 0 0 1-.72-7.43 5.25 5.25 0 0 1 10.2-1.86 4.25 4.25 0 0 1 1.02 8.29m-1-9.75L3.5 19M17.5 6.5 4 20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      {paths[icon]}
    </svg>
  );
}

export function FeatureModuleCard({
  title,
  description,
  href,
  detailsLabel,
  icon,
  className,
}: FeatureModuleCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring panel-glass panel-glass-hover group block rounded-md p-6 motion-reduce:transform-none",
        className,
      )}
    >
      <div className="accent-beam mb-4" aria-hidden="true" />
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-glow/10 text-cyan-glow"
        aria-hidden="true"
      >
        {icon === "truck" ? <TruckIcon size={24} tone="cyan" /> : <ModuleGlyph icon={icon} />}
      </div>
      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-glow">
        {title}
      </h3>
      <p className="text-body mt-2 text-neutral-grey">{description}</p>
      {detailsLabel ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-core">
          {detailsLabel}
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </Link>
  );
}
