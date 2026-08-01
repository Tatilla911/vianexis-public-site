import Link from "next/link";
import { DriverAppLegalPrintButton } from "@/components/site/DriverAppLegalPrintButton";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import {
  LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV,
  LEGAL_SHOW_TESTING_RELEASE_BANNER,
  legalCenterTestingReleaseBanner,
  legalConfig,
  legalControllerLabelForTerms,
  legalCounselReviewNotice,
} from "@/config/legal";
import {
  getLegalCenterCards,
  getLegalCenterCopy,
  type LegalCenterLocale,
} from "@/lib/i18n/legal-center/content";
import { localePath } from "@/lib/i18n/paths";

type Props = {
  contentLocale: LegalCenterLocale;
};

export function LegalCenterDocument({ contentLocale }: Props) {
  const copy = getLegalCenterCopy(contentLocale);
  const cards = getLegalCenterCards(contentLocale);
  const provider = legalControllerLabelForTerms[contentLocale];
  const address =
    contentLocale === "hu"
      ? legalConfig.registeredAddress.value!.hu
      : legalConfig.registeredAddress.value!.en;
  const pageUrl =
    contentLocale === "hu"
      ? legalConfig.legalCenterUrlHu.value!
      : legalConfig.legalCenterUrlEn.value!;
  const deletionUrl =
    contentLocale === "hu"
      ? legalConfig.accountDeletionUrlHu.value!
      : legalConfig.accountDeletionUrlEn.value!;
  const privacyRequestUrl =
    contentLocale === "hu"
      ? legalConfig.privacyRequestUrlHu.value!
      : legalConfig.privacyRequestUrlEn.value!;
  const disclaimersUrl =
    contentLocale === "hu"
      ? legalConfig.disclaimersUrlHu.value!
      : legalConfig.disclaimersUrlEn.value!;
  const privacyUrl =
    contentLocale === "hu"
      ? legalConfig.privacyUrlHu.value!
      : legalConfig.privacyUrlEn.value!;
  const other = contentLocale === "hu" ? "en" : "hu";
  const showCounsel =
    LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV &&
    process.env.NODE_ENV !== "production";

  return (
    <Section className="driver-app-legal-page legal-center-page pt-12">
      <div className="prose-legal mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center gap-4 print:hidden">
          <DriverAppLegalPrintButton label={copy.printLabel} />
        </div>

        {LEGAL_SHOW_TESTING_RELEASE_BANNER ? (
          <LegalStatusBadge
            label={legalCenterTestingReleaseBanner[contentLocale]}
            className="mb-4 mt-4"
          />
        ) : null}
        {showCounsel ? (
          <p className="text-meta mb-4 text-text-tertiary print:hidden">
            {legalCounselReviewNotice[contentLocale]}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
          <Link
            href={`/${other}/legal`}
            className="focus-ring text-nav rounded-md border border-navy-700 px-3 py-1.5 text-cyan-glow hover:border-cyan-glow"
            hrefLang={other}
            lang={other}
          >
            {copy.languageSwitchLabel}
          </Link>
        </div>

        <h1 className="text-page-title mt-6">{copy.pageTitle}</h1>
        {copy.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-lead mt-4 text-neutral-grey">
            {paragraph}
          </p>
        ))}

        <section
          id="service-provider"
          className="mt-10 scroll-mt-28 rounded-lg border border-navy-700 bg-navy-900/50 p-5 md:p-6"
          aria-labelledby="service-provider-heading"
        >
          <h2 id="service-provider-heading" className="text-card-title">
            {copy.providerHeading}
          </h2>
          <p className="text-body mt-3 text-brand-ink">{provider.line}</p>
          <p className="text-body mt-2 text-neutral-grey">{copy.providerBrandNote}</p>
          <dl className="mt-4 grid gap-3 text-body sm:grid-cols-2">
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.address}</dt>
              <dd className="break-words text-brand-ink">{address}</dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.taxNumber}</dt>
              <dd className="break-all text-brand-ink">
                {legalConfig.taxNumber.value}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.euVat}</dt>
              <dd className="break-all text-brand-ink">
                {legalConfig.euVatNumber.value}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.registration}</dt>
              <dd className="break-all text-brand-ink">
                {legalConfig.registrationNumber.value}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.website}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={legalConfig.websiteUrl.value!}
                >
                  {legalConfig.websiteUrl.value}
                </a>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.generalContact}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={`mailto:${legalConfig.generalContactEmail.value}`}
                >
                  {legalConfig.generalContactEmail.value}
                </a>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.legalContact}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={`mailto:${legalConfig.legalEmail.value}`}
                >
                  {legalConfig.legalEmail.value}
                </a>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.privacyContact}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={`mailto:${legalConfig.privacyEmail.value}`}
                >
                  {legalConfig.privacyEmail.value}
                </a>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.support}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={`mailto:${legalConfig.supportEmail.value}`}
                >
                  {legalConfig.supportEmail.value}
                </a>
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-text-tertiary">{copy.labels.security}</dt>
              <dd>
                <a
                  className="focus-ring break-all text-cyan-glow hover:underline"
                  href={`mailto:${legalConfig.securityEmail.value}`}
                >
                  {legalConfig.securityEmail.value}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10" aria-labelledby="platform-heading">
          <h2 id="platform-heading" className="text-card-title">
            {copy.platformHeading}
          </h2>
          {copy.platformBody.map((p) => (
            <p key={p.slice(0, 32)} className="text-body mt-3 text-neutral-grey">
              {p}
            </p>
          ))}
          <ul className="text-body mt-4 list-inside list-disc space-y-1.5 text-neutral-grey">
            {copy.platformNotList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            <a
              className="focus-ring text-nav text-cyan-glow hover:underline"
              href={disclaimersUrl}
            >
              {copy.platformDetailsLinkLabel}
            </a>
          </p>
        </section>

        <aside
          className="mt-10 rounded-md border border-gold-core/40 bg-gold-core/[0.06] p-5 md:p-6"
          aria-labelledby="account-deletion-highlight"
        >
          <h2 id="account-deletion-highlight" className="text-card-title">
            {copy.deletionHeading}
          </h2>
          <ul className="text-body mt-4 space-y-2 text-neutral-grey">
            {copy.deletionBody.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-core/70"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-body mt-4 text-neutral-grey">
            {copy.labels.privacyContact}:{" "}
            <a
              className="focus-ring text-cyan-glow hover:underline"
              href={`mailto:${legalConfig.privacyEmail.value}`}
            >
              {legalConfig.privacyEmail.value}
            </a>
          </p>
          <p className="mt-4 print:hidden">
            <a
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md bg-cyan-glow px-4 py-2.5 text-nav text-navy-1000 hover:opacity-90 sm:w-auto"
              href={deletionUrl}
            >
              {copy.deletionCta}
            </a>
          </p>
          <p className="text-meta mt-3 break-all text-text-tertiary">{deletionUrl}</p>
        </aside>

        <section className="mt-10" aria-labelledby="documents-heading">
          <h2 id="documents-heading" className="text-card-title">
            {copy.documentsHeading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
              const href =
                card.hrefPath.includes("#") && card.hrefPath.startsWith("/legal")
                  ? `#${card.hrefPath.split("#")[1]}`
                  : localePath(contentLocale, card.hrefPath.split("#")[0]!);
              return (
                <li key={card.id} className="flex">
                  <article className="flex h-full w-full min-w-0 flex-col rounded-lg border border-navy-700 bg-navy-900/50 p-5">
                    <h3 className="text-card-title">{card.title}</h3>
                    <p className="text-body mt-2 flex-1 text-neutral-grey">
                      {card.description}
                    </p>
                    <p className="text-meta mt-3 text-text-tertiary">
                      {copy.coveredServicesLabel}: {card.coveredServices}
                    </p>
                    {card.version ? (
                      <p className="text-meta mt-1 text-text-tertiary">
                        {copy.versionLabel}: {card.version}
                      </p>
                    ) : null}
                    {card.lastUpdated ? (
                      <p className="text-meta mt-1 text-text-tertiary">
                        {copy.lastUpdatedLabel}: {card.lastUpdated}
                      </p>
                    ) : null}
                    {card.statusLabel ? (
                      <p className="text-meta mt-1 text-gold-core">
                        {card.statusLabel}
                      </p>
                    ) : null}
                    <p className="mt-4 print:hidden">
                      <a
                        className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md border border-cyan-glow/50 px-4 py-2 text-nav text-cyan-glow hover:border-cyan-glow"
                        href={href}
                        aria-label={`${card.openLabel}: ${card.title}`}
                      >
                        {card.openLabel}
                      </a>
                    </p>
                    <p className="text-meta mt-3 hidden break-all text-text-tertiary print:block">
                      {card.absoluteUrl}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="mt-10 rounded-lg border border-navy-700 bg-navy-900/40 p-5 md:p-6"
          aria-labelledby="privacy-contact-heading"
        >
          <h2 id="privacy-contact-heading" className="text-card-title">
            {copy.privacyContactHeading}
          </h2>
          <p className="text-body mt-3 text-neutral-grey">
            {copy.privacyContactIntro}
          </p>
          <ul className="text-body mt-3 list-inside list-disc space-y-1 text-neutral-grey">
            {copy.privacyContactTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className="text-body mt-4">
            <a
              className="focus-ring text-cyan-glow hover:underline"
              href={`mailto:${legalConfig.privacyEmail.value}`}
            >
              {legalConfig.privacyEmail.value}
            </a>
          </p>
          <p className="mt-4 print:hidden">
            <a
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md border border-cyan-glow/50 px-4 py-2 text-nav text-cyan-glow hover:border-cyan-glow sm:w-auto"
              href={privacyRequestUrl}
            >
              {copy.privacyContactCta}
            </a>
          </p>
          <p className="text-meta mt-3 break-all text-text-tertiary">
            {privacyRequestUrl}
          </p>
        </section>

        <section className="mt-10" aria-labelledby="play-heading">
          <h2 id="play-heading" className="text-card-title">
            {copy.playHeading}
          </h2>
          <p className="text-body mt-3 text-neutral-grey">{copy.playBody}</p>
          <p className="mt-3">
            <a
              className="focus-ring break-all text-cyan-glow hover:underline"
              href={privacyUrl}
            >
              {privacyUrl}
            </a>
          </p>
        </section>

        <section className="mt-10" aria-labelledby="limits-heading">
          <h2 id="limits-heading" className="text-card-title">
            {copy.limitsHeading}
          </h2>
          <p className="text-body mt-3 text-neutral-grey">{copy.limitsBody}</p>
          <p className="mt-4">
            <a
              className="focus-ring text-nav text-cyan-glow hover:underline"
              href={disclaimersUrl}
            >
              {copy.limitsLinkLabel}
            </a>
          </p>
        </section>

        <section className="mt-10 hidden print:block" aria-hidden="false">
          <h2 className="text-card-title">{copy.printDocsHeading}</h2>
          <ul className="mt-4 space-y-3 text-body">
            {cards.map((card) => (
              <li key={`print-${card.id}`}>
                <strong>{card.title}</strong>
                <br />
                {card.absoluteUrl}
                {card.version ? (
                  <>
                    <br />
                    {copy.versionLabel}: {card.version}
                  </>
                ) : null}
                {card.lastUpdated ? (
                  <>
                    <br />
                    {copy.lastUpdatedLabel}: {card.lastUpdated}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            {copy.pageUrlLabel}: {pageUrl}
          </p>
          <p>
            {copy.printDateLabel}: {new Date().toISOString().slice(0, 10)}
          </p>
        </section>
      </div>
    </Section>
  );
}
