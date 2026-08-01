import {
  LEGAL_SHOW_TESTING_RELEASE_BANNER,
  legalConfig,
} from "@/config/legal";
import {
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "@/lib/i18n/driver-app-legal/version";

export type LegalCenterLocale = "hu" | "en";

export type LegalCenterDocCard = {
  id: string;
  title: string;
  description: string;
  coveredServices: string;
  /** Relative path for Next Link, e.g. "/privacy" or "/legal#service-provider" */
  hrefPath: string;
  /** Absolute public URL for print and validators */
  absoluteUrl: string;
  version: string | null;
  lastUpdated: string | null;
  statusLabel: string | null;
  openLabel: string;
};

type Copy = {
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  languageSwitchLabel: string;
  printLabel: string;
  providerHeading: string;
  providerBrandNote: string;
  platformHeading: string;
  platformBody: string[];
  platformNotList: string[];
  platformDetailsLinkLabel: string;
  documentsHeading: string;
  versionLabel: string;
  lastUpdatedLabel: string;
  coveredServicesLabel: string;
  deletionHeading: string;
  deletionBody: string[];
  deletionCta: string;
  privacyContactHeading: string;
  privacyContactIntro: string;
  privacyContactTopics: string[];
  privacyContactCta: string;
  playHeading: string;
  playBody: string;
  limitsHeading: string;
  limitsBody: string;
  limitsLinkLabel: string;
  printDocsHeading: string;
  printDateLabel: string;
  pageUrlLabel: string;
  labels: {
    website: string;
    generalContact: string;
    legalContact: string;
    privacyContact: string;
    support: string;
    security: string;
    taxNumber: string;
    euVat: string;
    registration: string;
    address: string;
  };
  cards: Array<{
    id: string;
    title: string;
    description: string;
    coveredServices: string;
    hrefPath: string;
    urlKey:
      | "privacy"
      | "terms"
      | "disclaimers"
      | "deletion"
      | "privacyRequest"
      | "dataSafety"
      | "driverLegal"
      | "providerAnchor";
    versionSource: "privacy" | "shared" | "none";
    showLastUpdated: boolean;
  }>;
};

const copyHu: Copy = {
  pageTitle: "Jogi információk és dokumentumközpont – ViaNexis",
  metaTitle: "Jogi információk és dokumentumközpont | ViaNexis",
  metaDescription:
    "ViaNexis jogi dokumentumközpont: adatvédelem, felhasználási feltételek, felelős használat, fióktörlés és szolgáltatói adatok.",
  intro: [
    "Ezen az oldalon találhatók a ViaNexis platformhoz és a ViaNexis Driver alkalmazáshoz kapcsolódó jogi, adatvédelmi és felelős használati dokumentumok. Az egyes dokumentumok részletesen ismertetik a szolgáltatás használatának feltételeit, az adatkezelést, a fióktörlés folyamatát és a technikai funkciók korlátait.",
    "A dokumentumközpont nem helyettesíti az egyedi céges szerződést. Eltérés esetén a konkrét dokumentum és az alkalmazandó jog irányadó. A dokumentumok nyilvánosan, bejelentkezés nélkül elérhetők.",
  ],
  languageSwitchLabel: "English version",
  printLabel: "Nyomtatás / PDF mentés",
  providerHeading: "Szolgáltató",
  providerBrandNote:
    "A ViaNexis márkanév; a szolgáltató Turul Atilla egyéni vállalkozó. A ViaNexis önálló jogi személyként nem szerepel.",
  platformHeading: "A platform jellege",
  platformBody: [
    "A ViaNexis digitális fuvarbizonyítékot, dokumentumkezelést, üzeneteket, értesítéseket, céges operációs folyamatokat, sofőralkalmazást, auditálható műveleteket és kontrollált jogosultságokat támogató technológiai szolgáltatás.",
  ],
  platformNotList: [
    "nem fuvarozó",
    "nem vámügynök",
    "nem ADR-biztonsági tanácsadó",
    "nem hatóság",
    "nem vészhelyzeti szolgáltatás",
    "nem minősített eFTI platform — az eFTI-irányú technikai felkészültség nem minősítés",
  ],
  platformDetailsLinkLabel: "Részletes korlátozások: Felelős használat",
  documentsHeading: "Jogi dokumentumok",
  versionLabel: "Verzió",
  lastUpdatedLabel: "Utolsó frissítés",
  coveredServicesLabel: "Érintett szolgáltatás",
  deletionHeading: "ViaNexis Driver-fiók törlésének kérése",
  deletionBody: [
    "Az alkalmazás eltávolítása nem egyenlő a fiók törlésével.",
    "A kijelentkezés nem egyenlő a fiók törlésével.",
    "A cégtől való leválasztás nem egyenlő a fiók törlésével.",
    "A végleges törlés külön webes folyamaton indítható. A kérelem önmagában nem indít azonnali, automatikus teljes adattörlést.",
  ],
  deletionCta: "Fióktörlési kérelem indítása",
  privacyContactHeading: "Adatvédelmi kapcsolat",
  privacyContactIntro:
    "Adatvédelmi kérelmeket és kérdéseket a privacy@vianexis.eu címen, illetve az alábbi űrlapon nyújthat be. Támogatott témák:",
  privacyContactTopics: [
    "hozzáférési kérelem",
    "helyesbítés",
    "törlés",
    "korlátozás",
    "tiltakozás",
    "adathordozhatóság, ahol alkalmazható",
    "egyéb adatvédelmi kérdés",
  ],
  privacyContactCta: "Adatvédelmi kérelem űrlap",
  playHeading: "Google Play Data safety",
  playBody:
    "A Google Play Data safety adatlapját mindig a kiadott ViaNexis Driver alkalmazásverzió tényleges engedélyei, SDK-i és adatfolyamai alapján kell értelmezni. A részletes adatkezelési szabályokat az Adatvédelmi tájékoztató tartalmazza.",
  limitsHeading: "Rövid felelősségi összefoglaló",
  limitsBody:
    "A ViaNexis dokumentációs és operatív segédeszköz. Nem garantál automatikus jogi vagy hatósági elfogadást, és nem helyettesíti a hivatalos forrásokat, szakértői ellenőrzést vagy vészhelyzeti szolgáltatást. A részletes korlátozásokat a Felelős használat dokumentum tartalmazza.",
  limitsLinkLabel: "Felelős használat megnyitása",
  printDocsHeading: "Dokumentumlista (nyomtatás)",
  printDateLabel: "Nyomtatás dátuma",
  pageUrlLabel: "Oldal URL",
  labels: {
    website: "Weboldal",
    generalContact: "Általános kapcsolat",
    legalContact: "Jogi kapcsolat",
    privacyContact: "Adatvédelem",
    support: "Támogatás",
    security: "Biztonsági bejelentés",
    taxNumber: "Adószám",
    euVat: "Közösségi adószám",
    registration: "Nyilvántartási szám",
    address: "Székhely",
  },
  cards: [
    {
      id: "privacy",
      title: "Adatvédelmi tájékoztató",
      description:
        "A ViaNexis Driver és a kapcsolódó platform személyesadat-kezelési szabályai, jogalapjai, megőrzési és törlési elvei.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/privacy",
      urlKey: "privacy",
      versionSource: "privacy",
      showLastUpdated: true,
    },
    {
      id: "terms",
      title: "Felhasználási feltételek",
      description:
        "A platform és a sofőralkalmazás használatának szabályai, felhasználói felelősségek és szolgáltatási korlátok.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/terms",
      urlKey: "terms",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "disclaimers",
      title: "Felelős használat és fontos korlátozások",
      description:
        "Az ADR-, AI-, OCR-, fordítási, navigációs, dokumentum- és értesítési funkciók fontos korlátai.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/disclaimers",
      urlKey: "disclaimers",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "account-deletion",
      title: "Fiók és kapcsolódó adatok törlése",
      description:
        "A ViaNexis Driver-fiók és a kapcsolódó adatok törlésének kérelmezése, valamint a megőrzési kivételek.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/account-deletion",
      urlKey: "deletion",
      versionSource: "none",
      showLastUpdated: true,
    },
    {
      id: "privacy-request",
      title: "Adatvédelmi kapcsolat és érintetti kérelmek",
      description:
        "Hozzáférés, helyesbítés, törlés, korlátozás és egyéb adatvédelmi megkeresések űrlapon vagy e-mailben.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/privacy-request",
      urlKey: "privacyRequest",
      versionSource: "none",
      showLastUpdated: false,
    },
    {
      id: "data-safety",
      title: "ViaNexis Driver Data Safety összefoglaló",
      description:
        "Közérthető összefoglaló a kiadott alkalmazás adatkezelési és biztonsági jellemzőiről. Nem helyettesíti a Google Play Console aktuális Data safety adatlapját.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/data-safety",
      urlKey: "dataSafety",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "driver-legal",
      title: "ViaNexis Driver jogi információk",
      description:
        "A sofőralkalmazáshoz kapcsolódó jogi dokumentumok gyűjtőoldala.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/legal",
      urlKey: "driverLegal",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "provider",
      title: "Kapcsolat és szolgáltatói adatok",
      description:
        "Üzemeltető azonosító adatai, kapcsolatfelvételi címek és a dokumentumközpont szolgáltatói blokkja.",
      coveredServices: "ViaNexis",
      hrefPath: "/legal#service-provider",
      urlKey: "providerAnchor",
      versionSource: "none",
      showLastUpdated: false,
    },
  ],
};

const copyEn: Copy = {
  pageTitle: "Legal Information and Document Center – ViaNexis",
  metaTitle: "Legal Information and Document Center | ViaNexis",
  metaDescription:
    "ViaNexis legal document center: privacy, terms of use, responsible use, account deletion and provider details.",
  intro: [
    "This page collects the legal, privacy and responsible-use documents for the ViaNexis platform and the ViaNexis Driver application. Each document explains in detail the terms of use, data processing, the account-deletion process and the limits of technical features.",
    "This document center does not replace a separate company contract. In case of conflict, the specific document and applicable law prevail. The documents are publicly available without signing in.",
  ],
  languageSwitchLabel: "Magyar változat",
  printLabel: "Print / Save as PDF",
  providerHeading: "Service Provider",
  providerBrandNote:
    "ViaNexis is a brand name; the provider is Turul Atilla, a sole proprietor. ViaNexis is not presented as a separate legal entity.",
  platformHeading: "Nature of the platform",
  platformBody: [
    "ViaNexis is a technology service supporting digital transport evidence, document handling, messaging, notifications, company operational workflows, a driver application, auditable actions and controlled permissions.",
  ],
  platformNotList: [
    "not a carrier",
    "not a customs agent",
    "not an ADR safety adviser",
    "not an authority",
    "not an emergency service",
    "not a certified eFTI platform — eFTI-oriented technical readiness is not certification",
  ],
  platformDetailsLinkLabel: "Detailed limitations: Responsible Use",
  documentsHeading: "Legal documents",
  versionLabel: "Version",
  lastUpdatedLabel: "Last updated",
  coveredServicesLabel: "Covered services",
  deletionHeading: "Request deletion of your ViaNexis Driver account",
  deletionBody: [
    "Uninstalling the app is not the same as deleting the account.",
    "Signing out is not the same as deleting the account.",
    "Unlinking from a company is not the same as deleting the account.",
    "Permanent deletion is started through a separate web process. Submitting a request does not by itself trigger immediate automatic full data deletion.",
  ],
  deletionCta: "Start account deletion request",
  privacyContactHeading: "Privacy contact",
  privacyContactIntro:
    "Submit privacy requests and questions to privacy@vianexis.eu or via the form below. Supported topics:",
  privacyContactTopics: [
    "access request",
    "rectification",
    "erasure",
    "restriction",
    "objection",
    "data portability, where applicable",
    "other privacy questions",
  ],
  privacyContactCta: "Privacy request form",
  playHeading: "Google Play Data safety",
  playBody:
    "The Google Play Data safety form must always be interpreted against the actual permissions, SDKs and data flows of the distributed ViaNexis Driver app version. Detailed data-processing rules are set out in the Privacy Policy.",
  limitsHeading: "Short liability summary",
  limitsBody:
    "ViaNexis is a documentation and operational aid. It does not guarantee automatic legal or authority acceptance, and it does not replace official sources, expert review or emergency services. Detailed limitations are set out in the Responsible Use document.",
  limitsLinkLabel: "Open Responsible Use",
  printDocsHeading: "Document list (print)",
  printDateLabel: "Print date",
  pageUrlLabel: "Page URL",
  labels: {
    website: "Website",
    generalContact: "General contact",
    legalContact: "Legal contact",
    privacyContact: "Privacy",
    support: "Support",
    security: "Security reports",
    taxNumber: "Tax number",
    euVat: "EU VAT number",
    registration: "Registration number",
    address: "Registered seat",
  },
  cards: [
    {
      id: "privacy",
      title: "Privacy Policy",
      description:
        "Personal-data processing rules, legal bases, retention and deletion principles for ViaNexis Driver and the related platform.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/privacy",
      urlKey: "privacy",
      versionSource: "privacy",
      showLastUpdated: true,
    },
    {
      id: "terms",
      title: "Terms of Use",
      description:
        "Rules for using the platform and driver app, user responsibilities and service limitations.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/terms",
      urlKey: "terms",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "disclaimers",
      title: "Responsible Use and Important Limitations",
      description:
        "Important limits of ADR, AI, OCR, translation, navigation, document and notification features.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/disclaimers",
      urlKey: "disclaimers",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "account-deletion",
      title: "Account and associated data deletion",
      description:
        "How to request deletion of a ViaNexis Driver account and associated data, including retention exceptions.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/account-deletion",
      urlKey: "deletion",
      versionSource: "none",
      showLastUpdated: true,
    },
    {
      id: "privacy-request",
      title: "Privacy contact and data-subject requests",
      description:
        "Access, rectification, erasure, restriction and other privacy requests via form or email.",
      coveredServices: "ViaNexis platform, ViaNexis Driver",
      hrefPath: "/privacy-request",
      urlKey: "privacyRequest",
      versionSource: "none",
      showLastUpdated: false,
    },
    {
      id: "data-safety",
      title: "ViaNexis Driver Data Safety summary",
      description:
        "A plain-language summary of the distributed app’s data-handling and security characteristics. It does not replace the current Google Play Console Data safety form.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/data-safety",
      urlKey: "dataSafety",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "driver-legal",
      title: "ViaNexis Driver legal information",
      description:
        "Hub page for legal documents related to the driver application.",
      coveredServices: "ViaNexis Driver",
      hrefPath: "/driver-app/legal",
      urlKey: "driverLegal",
      versionSource: "shared",
      showLastUpdated: true,
    },
    {
      id: "provider",
      title: "Contact and provider details",
      description:
        "Operator identity details, contact addresses and the provider block on this document center.",
      coveredServices: "ViaNexis",
      hrefPath: "/legal#service-provider",
      urlKey: "providerAnchor",
      versionSource: "none",
      showLastUpdated: false,
    },
  ],
};

function absoluteUrl(
  locale: LegalCenterLocale,
  key: Copy["cards"][number]["urlKey"],
): string {
  const c = legalConfig;
  switch (key) {
    case "privacy":
      return locale === "hu" ? c.privacyUrlHu.value! : c.privacyUrlEn.value!;
    case "terms":
      return locale === "hu" ? c.termsUrlHu.value! : c.termsUrlEn.value!;
    case "disclaimers":
      return locale === "hu"
        ? c.disclaimersUrlHu.value!
        : c.disclaimersUrlEn.value!;
    case "deletion":
      return locale === "hu"
        ? c.accountDeletionUrlHu.value!
        : c.accountDeletionUrlEn.value!;
    case "privacyRequest":
      return locale === "hu"
        ? c.privacyRequestUrlHu.value!
        : c.privacyRequestUrlEn.value!;
    case "dataSafety":
      return locale === "hu"
        ? c.dataSafetyUrlHu.value!
        : c.dataSafetyUrlEn.value!;
    case "driverLegal":
      return locale === "hu"
        ? c.driverAppLegalUrlHu.value!
        : c.driverAppLegalUrlEn.value!;
    case "providerAnchor":
      return locale === "hu"
        ? `${c.legalCenterUrlHu.value!}#service-provider`
        : `${c.legalCenterUrlEn.value!}#service-provider`;
  }
}

function statusLabel(locale: LegalCenterLocale): string | null {
  if (
    legalConfig.showPublicLegalReviewStatus.value === true
  ) {
    return locale === "hu"
      ? "Jogi felülvizsgálat alatt"
      : "Under legal review";
  }
  if (LEGAL_SHOW_TESTING_RELEASE_BANNER) {
    return locale === "hu"
      ? "Aktuális tesztelési dokumentum"
      : "Current testing document";
  }
  return locale === "hu"
    ? "Frissítve"
    : "Updated";
}

export function getLegalCenterCopy(locale: LegalCenterLocale): Copy {
  return locale === "hu" ? copyHu : copyEn;
}

export function getLegalCenterCards(
  locale: LegalCenterLocale,
): LegalCenterDocCard[] {
  const copy = getLegalCenterCopy(locale);
  const openLabel = locale === "hu" ? "Megnyitás" : "Open";
  const privacyVersion = legalConfig.privacyPolicyVersion.value;
  const privacyUpdated = legalConfig.privacyPolicyLastUpdatedDate.value;
  const sharedVersion = DRIVER_APP_LEGAL_VERSION;
  const sharedUpdated = DRIVER_APP_LEGAL_LAST_UPDATED;
  const status = statusLabel(locale);

  return copy.cards.map((card) => {
    let version: string | null = null;
    if (card.versionSource === "privacy" && privacyVersion) {
      version = privacyVersion;
    } else if (card.versionSource === "shared") {
      version = sharedVersion;
    }

    let lastUpdated: string | null = null;
    if (card.showLastUpdated) {
      if (card.versionSource === "privacy") {
        lastUpdated = privacyUpdated;
      } else {
        lastUpdated = sharedUpdated;
      }
    }

    return {
      id: card.id,
      title: card.title,
      description: card.description,
      coveredServices: card.coveredServices,
      hrefPath: card.hrefPath,
      absoluteUrl: absoluteUrl(locale, card.urlKey),
      version,
      lastUpdated,
      statusLabel: status,
      openLabel,
    };
  });
}
