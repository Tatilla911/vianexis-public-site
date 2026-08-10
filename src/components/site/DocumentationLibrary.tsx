import Link from "next/link";
import { Button } from "@/components/site/Button";
import { StatusBadge } from "@/components/site/StatusBadge";
import {
  customerManualsForPage,
  publicManualsForPage,
  publicPdfHref,
  resolveManualLang,
  type ManualCatalogEntry,
} from "@/lib/documentation/catalog";
import {
  getDocumentationCopy,
  type DocumentationCopy,
} from "@/lib/documentation/copy";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

type DocumentationLibraryProps = {
  locale: Locale;
};

function ManualMeta({
  entry,
  copy,
  lang,
}: {
  entry: ManualCatalogEntry;
  copy: DocumentationCopy;
  lang: "hu" | "en";
}) {
  return (
    <dl className="mt-4 grid gap-2 text-meta text-neutral-grey sm:grid-cols-2">
      <div>
        <dt className="text-text-tertiary">{copy.roleLabel}</dt>
        <dd className="text-brand-ink">{entry.role[lang]}</dd>
      </div>
      <div>
        <dt className="text-text-tertiary">{copy.versionLabel}</dt>
        <dd className="text-brand-ink">{entry.version}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-text-tertiary">{copy.updatedLabel}</dt>
        <dd className="text-brand-ink">{entry.updatedAt}</dd>
      </div>
    </dl>
  );
}

function PublicManualCard({
  entry,
  locale,
  copy,
}: {
  entry: ManualCatalogEntry;
  locale: Locale;
  copy: DocumentationCopy;
}) {
  const lang = resolveManualLang(locale);
  const href = publicPdfHref(entry, lang);
  if (!href) return null;

  return (
    <article
      className="panel-glass flex h-full flex-col rounded-md p-6"
      data-manual-id={entry.id}
      data-manual-access="PUBLIC"
      data-manual-lang={lang}
    >
      <h3 className="text-card-title text-brand-ink">{entry.title[lang]}</h3>
      <p className="text-body mt-3 text-neutral-grey">{entry.description[lang]}</p>
      <ManualMeta entry={entry} copy={copy} lang={lang} />
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-manual-id={entry.id}
          data-manual-action="view"
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-gold-core px-3 py-2 text-button text-brand-ink-on-gold shadow-sm transition-colors hover:bg-gold-light focus-ring"
          aria-label={`${copy.viewLabel}: ${entry.title[lang]}`}
        >
          {copy.viewLabel}
        </a>
        <a
          href={href}
          download={entry.fileName?.[lang]}
          data-manual-id={entry.id}
          data-manual-action="download"
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-navy-600 bg-transparent px-3 py-2 text-button text-brand-ink transition-colors hover:bg-navy-800 focus-ring"
        >
          {copy.downloadLabel}
        </a>
      </div>
    </article>
  );
}

function RestrictedManualCard({
  entry,
  locale,
  copy,
}: {
  entry: ManualCatalogEntry;
  locale: Locale;
  copy: DocumentationCopy;
}) {
  const lang = resolveManualLang(locale);
  const accessHref = localePath(locale, "/apply/company");

  return (
    <article
      className="panel-glass flex h-full flex-col rounded-md p-6"
      data-manual-id={entry.id}
      data-manual-access="CUSTOMER"
      data-manual-lang={lang}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-card-title text-brand-ink">{entry.title[lang]}</h3>
        <StatusBadge label={copy.restrictedBadge} tone="warning" onDark />
      </div>
      <p className="text-body mt-3 text-neutral-grey">{entry.description[lang]}</p>
      <ManualMeta entry={entry} copy={copy} lang={lang} />
      <p className="text-body mt-4 text-neutral-grey">{copy.restrictedBody}</p>
      <div className="mt-6">
        <Button href={accessHref} variant="requestAccess" size="sm">
          {copy.requestAccessLabel}
        </Button>
      </div>
    </article>
  );
}

export function DocumentationLibrary({ locale }: DocumentationLibraryProps) {
  const copy = getDocumentationCopy(locale);
  const publicManuals = publicManualsForPage();
  const customerManuals = customerManualsForPage();

  return (
    <div className="space-y-16">
      <p className="text-body text-neutral-grey">{copy.languageNote}</p>

      <section aria-labelledby="docs-public-heading">
        <h2
          id="docs-public-heading"
          className="text-section-title text-brand-ink"
        >
          {copy.publicSectionTitle}
        </h2>
        <p className="text-body mt-2 max-w-2xl text-neutral-grey">
          {copy.publicSectionSubtitle}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {publicManuals.map((entry) => (
            <PublicManualCard
              key={entry.id}
              entry={entry}
              locale={locale}
              copy={copy}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="docs-customer-heading">
        <h2
          id="docs-customer-heading"
          className="text-section-title text-brand-ink"
        >
          {copy.customerSectionTitle}
        </h2>
        <p className="text-body mt-2 max-w-2xl text-neutral-grey">
          {copy.customerSectionSubtitle}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {customerManuals.map((entry) => (
            <RestrictedManualCard
              key={entry.id}
              entry={entry}
              locale={locale}
              copy={copy}
            />
          ))}
        </div>
        <p className="text-meta mt-6 text-text-tertiary">
          <Link
            href={localePath(locale, "/contact")}
            className="text-cyan-glow hover:underline"
          >
            {locale === "hu" ? "Kapcsolat" : "Contact"}
          </Link>
        </p>
      </section>
    </div>
  );
}
