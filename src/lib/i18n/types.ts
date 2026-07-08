import type { LegalContent } from "./content/legal-types";
import type { LanguageCode } from "./language-registry";

export type Locale = LanguageCode;

export type PlatformModule = {
  id: string;
  title: string;
  goal: string;
  appFoundation: string;
  backendDependency?: string;
  disclaimer?: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    ogAlternateLocale: string;
  };
  nav: {
    features: string;
    driverApp: string;
    companyPortal: string;
    documents: string;
    authorityEfti: string;
    security: string;
    pilot: string;
    contact: string;
    requestAccess: string;
    menuOpen: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    legalNotice: string;
    privacy: string;
    terms: string;
    disclaimers: string;
    dataContact: string;
    copyright: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
  };
  platformStatus: {
    title: string;
    items: string[];
    disclaimer: string;
  };
  moduleLabels: {
    goal: string;
    appFoundation: string;
    backendDependency: string;
    important: string;
  };
  platformModules: PlatformModule[];
  disclaimers: {
    adr: { title: string; body: string };
    aiOcr: { title: string; body: string };
    efti: { title: string; body: string };
  };
  home: {
    problem: {
      title: string;
      subtitle: string;
      cards: { title: string; description: string }[];
    };
    modules: { title: string; subtitle: string };
    pallet: { title: string; subtitle: string };
    notifications: {
      title: string;
      subtitle: string;
      cards: { title: string; description: string }[];
      backendDepTitle: string;
      backendDepBody: string;
    };
    disclaimersSection: { title: string };
    security: {
      title: string;
      subtitle: string;
      cards: { title: string; description: string }[];
      notPromiseTitle: string;
      notPromiseBody: string;
    };
    contact: {
      title: string;
      subtitle: string;
      body: string;
      consentNote: string;
      contactLink: string;
    };
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    interestType: string;
    interestPlaceholder: string;
    interestOptions: { value: string; label: string }[];
    consent: string;
    submit: string;
    submitMailto: string;
    intakeDisabled: string;
    successTitle: string;
    successBody: string;
    newSubmission: string;
    errors: {
      name: string;
      company: string;
      email: string;
      emailInvalid: string;
      message: string;
      interest: string;
      consent: string;
      submitFailed: string;
    };
  };
  authorityEfti: {
    cards: { title: string; description: string }[];
  };
  legal: LegalContent;
};
