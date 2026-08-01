import Link from "next/link";
import {
  DriverAppLegalContacts,
  DriverAppLegalLocaleSwitch,
  DriverAppLegalMeta,
  DriverAppLegalSection,
  DriverAppLegalToc,
} from "@/components/site/DriverAppLegalChrome";
import { DriverAppLegalPrintButton } from "@/components/site/DriverAppLegalPrintButton";
import { LegalStatusBadge } from "@/components/site/LegalStatusBadge";
import { Section } from "@/components/site/Section";
import {
  LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV,
  LEGAL_SHOW_TESTING_RELEASE_BANNER,
  legalConfig,
  legalControllerLabel,
  legalCounselReviewNotice,
  legalTestingReleaseBanner,
} from "@/config/legal";
import {
  getDriverAppLegal,
  type DriverAppLegalOfficialLocale,
} from "@/lib/i18n/driver-app-legal";
import { localePath } from "@/lib/i18n/paths";

type Props = {
  contentLocale: DriverAppLegalOfficialLocale;
  /** Path used for HU/EN language switch (e.g. "/privacy" or "/driver-app/privacy"). */
  switchPath: string;
  /** Canonical Play-facing title override. */
  titleOverride?: string;
  showBackToHub?: boolean;
};

export function PrivacyPolicyDocument({
  contentLocale,
  switchPath,
  titleOverride,
  showBackToHub = true,
}: Props) {
  const { legal } = getDriverAppLegal(contentLocale);
  const doc = legal.privacy;
  const title = titleOverride ?? doc.title;
  const controller = legalControllerLabel[contentLocale];
  const privacyEmail = legalConfig.privacyEmail.value!;
  const deletionUrl =
    contentLocale === "hu"
      ? legalConfig.accountDeletionUrlHu.value!
      : legalConfig.accountDeletionUrlEn.value!;
  const showCounsel =
    LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV &&
    process.env.NODE_ENV !== "production";

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full">
        <div className="flex flex-wrap items-center gap-4 print:hidden">
          {showBackToHub ? (
            <Link
              href={localePath(contentLocale, "/driver-app/legal")}
              className="text-nav text-cyan-glow hover:underline"
            >
              {legal.chrome.backToHub}
            </Link>
          ) : null}
          <DriverAppLegalPrintButton label={legal.chrome.print} />
        </div>

        {LEGAL_SHOW_TESTING_RELEASE_BANNER ? (
          <LegalStatusBadge
            label={legalTestingReleaseBanner[contentLocale]}
            className="mb-4 mt-4"
          />
        ) : null}
        {showCounsel ? (
          <p className="text-meta mb-4 text-text-tertiary">
            {legalCounselReviewNotice[contentLocale]}
          </p>
        ) : null}

        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={switchPath}
          hint={legal.chrome.languageSwitchHint}
        />

        <h1 className="text-page-title text-white">{title}</h1>
        <DriverAppLegalMeta
          versionLabel={doc.versionLabel}
          effectiveLabel={doc.effectiveLabel}
          lastUpdatedLabel={doc.lastUpdatedLabel}
        />

        <dl className="mt-6 space-y-2 text-body text-neutral-grey">
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Érintett alkalmazás: " : "Application: "}
            </dt>
            <dd className="inline text-white">
              {legalConfig.driverAppName.value}
            </dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">{controller.heading}: </dt>
            <dd className="inline text-white">{controller.line}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Adatvédelmi kapcsolat: "
                : "Privacy contact: "}
            </dt>
            <dd className="inline">
              <a
                className="text-cyan-glow hover:underline"
                href={`mailto:${privacyEmail}`}
              >
                {privacyEmail}
              </a>
            </dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Adatvédelmi tájékoztató URL: "
                : "Privacy policy URL: "}
            </dt>
            <dd className="inline break-all">
              {contentLocale === "hu"
                ? "https://vianexis.eu/hu/driver-app/privacy"
                : "https://vianexis.eu/en/driver-app/privacy"}
            </dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Fióktörlési URL: "
                : "Account deletion URL: "}
            </dt>
            <dd className="inline break-all">{deletionUrl}</dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Nyomtatás dátuma: " : "Print date: "}
            </dt>
            <dd className="inline">
              {new Date().toISOString().slice(0, 10)}
            </dd>
          </div>
        </dl>

        <p className="text-lead mt-5 text-neutral-grey">{doc.intro}</p>

        <aside className="mt-6 rounded-md border border-cyan-glow/40 bg-navy-900/50 p-4">
          <p className="text-card-title text-white">
            {contentLocale === "hu"
              ? "Fiók és kapcsolódó adatok törlése"
              : "Delete account and associated data"}
          </p>
          <p className="text-body mt-2 text-neutral-grey">
            {contentLocale === "hu"
              ? "A végleges fióktörlési kérelmet a következő, bejelentkezés nélkül elérhető oldalon nyújthatja be:"
              : "Submit a permanent account-deletion request on the following page (no sign-in required):"}
          </p>
          <p className="text-body mt-3">
            <a
              className="text-cyan-glow break-all underline hover:no-underline"
              href={deletionUrl}
            >
              {deletionUrl}
            </a>
          </p>
        </aside>

        <div className="mt-8">
          <DriverAppLegalToc label={doc.tocLabel} sections={doc.sections} />
        </div>
        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <DriverAppLegalSection key={section.id} section={section} />
          ))}
        </div>
        <DriverAppLegalContacts
          title={doc.contactsTitle}
          contacts={doc.contacts}
        />
      </div>
    </Section>
  );
}
