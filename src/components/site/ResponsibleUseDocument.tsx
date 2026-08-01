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
  legalControllerLabelForTerms,
  legalCounselReviewNotice,
  legalResponsibleUseTestingReleaseBanner,
} from "@/config/legal";
import {
  getDriverAppLegal,
  type DriverAppLegalOfficialLocale,
} from "@/lib/i18n/driver-app-legal";
import { responsibleUseDocEn } from "@/lib/i18n/driver-app-legal/content/responsible-use-sections-en";
import { responsibleUseDocHu } from "@/lib/i18n/driver-app-legal/content/responsible-use-sections-hu";
import { localePath } from "@/lib/i18n/paths";

type Props = {
  contentLocale: DriverAppLegalOfficialLocale;
  switchPath?: string;
  showBackToHub?: boolean;
};

export function ResponsibleUseDocument({
  contentLocale,
  switchPath = "/disclaimers",
  showBackToHub = true,
}: Props) {
  const { legal } = getDriverAppLegal(contentLocale);
  const doc =
    contentLocale === "hu" ? responsibleUseDocHu : responsibleUseDocEn;
  const provider = legalControllerLabelForTerms[contentLocale];
  const legalEmail = legalConfig.legalEmail.value!;
  const privacyUrl =
    contentLocale === "hu"
      ? legalConfig.privacyUrlHu.value!
      : legalConfig.privacyUrlEn.value!;
  const termsUrl =
    contentLocale === "hu"
      ? legalConfig.termsUrlHu.value!
      : legalConfig.termsUrlEn.value!;
  const deletionUrl =
    contentLocale === "hu"
      ? legalConfig.accountDeletionUrlHu.value!
      : legalConfig.accountDeletionUrlEn.value!;
  const pageUrl =
    contentLocale === "hu"
      ? `${legalConfig.websiteUrl.value!}/hu/disclaimers`
      : `${legalConfig.websiteUrl.value!}/en/disclaimers`;
  const showCounsel =
    LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV &&
    process.env.NODE_ENV !== "production";

  return (
    <Section className="driver-app-legal-page pt-12">
      <div className="prose-legal mx-auto w-full">
        <div className="flex flex-wrap items-center gap-4 print:hidden">
          {showBackToHub ? (
            <Link
              href={localePath(contentLocale, "/legal")}
              className="text-nav text-cyan-glow hover:underline"
            >
              {legal.chrome.backToHub}
            </Link>
          ) : null}
          <DriverAppLegalPrintButton label={legal.chrome.print} />
        </div>

        {LEGAL_SHOW_TESTING_RELEASE_BANNER ? (
          <LegalStatusBadge
            label={legalResponsibleUseTestingReleaseBanner[contentLocale]}
            className="mb-4 mt-4"
          />
        ) : null}
        {showCounsel ? (
          <p className="text-meta mb-4 text-text-tertiary print:hidden">
            {legalCounselReviewNotice[contentLocale]}
          </p>
        ) : null}

        <DriverAppLegalLocaleSwitch
          current={contentLocale}
          path={switchPath}
          hint={legal.chrome.languageSwitchHint}
        />

        <h1 className="text-page-title">{doc.title}</h1>
        <DriverAppLegalMeta
          versionLabel={doc.versionLabel}
          effectiveLabel={doc.effectiveLabel}
          lastUpdatedLabel={doc.lastUpdatedLabel}
        />

        <dl className="mt-6 space-y-2 text-body text-neutral-grey">
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Érintett szolgáltatások: "
                : "Covered services: "}
            </dt>
            <dd className="inline text-brand-ink">
              {contentLocale === "hu"
                ? "ViaNexis platform, ViaNexis Driver, kapcsolódó céges portál és háttérszolgáltatások"
                : "ViaNexis platform, ViaNexis Driver, related company portal and backend services"}
            </dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">{provider.heading}: </dt>
            <dd className="inline text-brand-ink">{provider.line}</dd>
          </div>
          <div>
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Jogi kapcsolat: " : "Legal contact: "}
            </dt>
            <dd className="inline">
              <a
                className="text-cyan-glow hover:underline"
                href={`mailto:${legalEmail}`}
              >
                {legalEmail}
              </a>
            </dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu" ? "Oldal URL: " : "Page URL: "}
            </dt>
            <dd className="inline break-all">{pageUrl}</dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Adatvédelmi tájékoztató URL: "
                : "Privacy policy URL: "}
            </dt>
            <dd className="inline break-all">{privacyUrl}</dd>
          </div>
          <div className="hidden print:block">
            <dt className="inline text-text-tertiary">
              {contentLocale === "hu"
                ? "Felhasználási feltételek URL: "
                : "Terms of Use URL: "}
            </dt>
            <dd className="inline break-all">{termsUrl}</dd>
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
            <dd className="inline">{new Date().toISOString().slice(0, 10)}</dd>
          </div>
        </dl>

        <p className="text-lead mt-5 text-neutral-grey">{doc.intro}</p>

        <div className="mt-8">
          <DriverAppLegalToc
            label={doc.tocLabel}
            sections={[...doc.sections]}
          />
        </div>
        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <DriverAppLegalSection key={section.id} section={section} />
          ))}
        </div>
        <DriverAppLegalContacts
          title={doc.contactsTitle}
          contacts={[...doc.contacts]}
        />
      </div>
    </Section>
  );
}
