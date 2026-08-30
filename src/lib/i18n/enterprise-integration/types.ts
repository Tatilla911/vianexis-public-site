/**
 * Public enterprise integration messaging — provider-neutral, two-way.
 * HU + EN are canonical; other locales use reviewed/draft machine translation.
 */
export type EnterpriseIntegrationContent = {
  eyebrow: string;
  title: string;
  body: string;
  coexistence: string;
  capabilityNote: string;
  architectureNote: string;
  partnerApiNote: string;
  sandboxNote: string;
  directionsTitle: string;
  directions: { title: string; description: string }[];
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
  examplesTitle: string;
  examples: { title: string; description: string }[];
  systemsLabel: string;
  /** Keep Latin product acronyms (TMS, ERP, …) where appropriate. */
  systems: string[];
  flowExternal: string;
  flowExternalDetail: string;
  flowLayer: string;
  flowLayerDetail: string;
  flowOperations: string;
  flowOperationsDetail: string;
  ctaPrimary: string;
  ctaSecondary: string;
};
