import { visualMarketingByLocale } from "./visual-marketing/registry";
import { visualMarketingEn } from "./visual-marketing/en";

export type VisualMarketingContent = {
  skipToContent: string;
  brandVisuals: {
    routeLabel: string;
    routeId: string;
    statusLabel: string;
    networkOverline: string;
    networkTitle: string;
    networkSubtitle: string;
    workflowEvents: string[];
  };
  pillars: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  homeModules: {
    title: string;
    subtitle: string;
    detailsLink: string;
    items: {
      title: string;
      description: string;
      href: string;
      icon: "truck" | "portal" | "doc" | "message" | "audit" | "offline";
    }[];
  };
  documentsFlow: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    statuses: string[];
    detailsLink: string;
  };
  offline: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
    detailsLink: string;
  };
  responsibleUse: {
    title: string;
    subtitle: string;
    items: string[];
    detailsLink: string;
  };
  pilotCta: {
    title: string;
    subtitle: string;
  };
  preview: {
    tripId: string;
    phoneTitle: string;
    phoneSubtitle: string;
    phoneRows: { label: string; value: string; status?: string }[];
    phoneCaption: string;
    browserTitle: string;
    browserSubtitle: string;
    browserColumns: string[];
    browserRows: string[][];
    browserCaption: string;
    driver: {
      navHome: string;
      navTrips: string;
      navDocs: string;
      navMore: string;
      tripStatus: string;
      nextStopLabel: string;
      nextStopValue: string;
      documentLabel: string;
      documentValue: string;
      documentAction: string;
      syncLabel: string;
      syncValue: string;
    };
    portal: {
      roleLabel: string;
      alertLabel: string;
      alertValue: string;
      auditLabel: string;
      auditValue: string;
    };
  };
  statusLabels: {
    available: string;
    pilot: string;
    development: string;
  };
  productPage: {
    highlightsTitle: string;
    capabilitiesTitle: string;
    statusesTitle: string;
  };
  authority: {
    heroSubtitle: string;
    foundationBadge: string;
    notCertifiedBadge: string;
    foundationTitle: string;
    foundationSubtitle: string;
    extraDisclaimer: string;
  };
  moduleCapabilities: Record<
    string,
    {
      title: string;
      description: string;
      status: "available" | "pilot" | "development";
    }[]
  >;
  ui: {
    language: string;
    draftSuffix: string;
    breadcrumb: string;
    primaryNav: string;
    importantNotice: string;
  };
};

export function resolveVisualMarketing(locale: string): VisualMarketingContent {
  return visualMarketingByLocale[locale] ?? visualMarketingEn;
}

export { visualMarketingEn } from "./visual-marketing/en";
export { visualMarketingHu } from "./visual-marketing/hu";
