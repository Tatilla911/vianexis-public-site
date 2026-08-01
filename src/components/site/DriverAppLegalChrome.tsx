import Link from "next/link";
import type { ReactNode } from "react";
import type { LegalSection } from "@/lib/i18n/driver-app-legal";

type Props = {
  section: LegalSection;
};

const ABSOLUTE_URL = /(https:\/\/[^\s]+)/g;

function renderTextWithLinks(text: string): ReactNode[] {
  const parts = text.split(ABSOLUTE_URL);
  return parts.map((part, index) => {
    if (part.startsWith("https://")) {
      return (
        <a
          key={`url-${index}`}
          href={part}
          className="break-all text-cyan-glow underline hover:no-underline"
        >
          {part}
        </a>
      );
    }
    return <span key={`text-${index}`}>{part}</span>;
  });
}

export function DriverAppLegalSection({ section }: Props) {
  const paragraphs = (section.body ?? "")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="text-card-title">{section.title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="text-body mt-3 text-neutral-grey">
          {renderTextWithLinks(paragraph)}
        </p>
      ))}
      {section.items && section.items.length > 0 && (
        <ul className="text-body mt-3 list-inside list-disc space-y-2 text-neutral-grey">
          {section.items.map((item) => (
            <li key={item}>{renderTextWithLinks(item)}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

type TocProps = {
  label: string;
  sections: LegalSection[];
};

export function DriverAppLegalToc({ label, sections }: TocProps) {
  return (
    <nav
      aria-label={label}
      className="driver-app-legal-toc max-w-full overflow-x-auto rounded-lg border border-navy-700 bg-navy-900/60 p-4"
    >
      <p className="text-overline text-gold-core">{label}</p>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5">
        {sections.map((section) => (
          <li key={section.id} className="min-w-0">
            <a
              href={`#${section.id}`}
              className="text-nav break-words text-cyan-glow hover:underline"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type MetaProps = {
  versionLabel: string;
  effectiveLabel: string;
  lastUpdatedLabel: string;
};

export function DriverAppLegalMeta({
  versionLabel,
  effectiveLabel,
  lastUpdatedLabel,
}: MetaProps) {
  return (
    <p className="text-meta mt-4 text-text-tertiary">
      {versionLabel} · {effectiveLabel} · {lastUpdatedLabel}
    </p>
  );
}

type LocaleSwitchProps = {
  current: "hu" | "en";
  path: string;
  hint: string;
};

export function DriverAppLegalLocaleSwitch({
  current,
  path,
  hint,
}: LocaleSwitchProps) {
  const other = current === "hu" ? "en" : "hu";
  const otherLabel = other === "hu" ? "Magyar" : "English";
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
      <p className="text-meta text-text-tertiary">{hint}</p>
      <Link
        href={`/${other}${path}`}
        className="text-nav rounded-md border border-navy-700 px-3 py-1.5 text-cyan-glow hover:border-cyan-glow"
        hrefLang={other}
      >
        {otherLabel}
      </Link>
    </div>
  );
}

type ContactsProps = {
  title: string;
  contacts: { label: string; value: string }[];
};

export function DriverAppLegalContacts({ title, contacts }: ContactsProps) {
  return (
    <section className="mt-10">
      <h2 className="text-card-title">{title}</h2>
      <ul className="mt-4 space-y-2 text-body text-neutral-grey">
        {contacts.map((c) => (
          <li key={`${c.label}-${c.value}`}>
            <span className="text-text-tertiary">{c.label}: </span>
            {c.value.includes("@") ? (
              <a className="text-cyan-glow hover:underline" href={`mailto:${c.value}`}>
                {c.value}
              </a>
            ) : (
              c.value
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
