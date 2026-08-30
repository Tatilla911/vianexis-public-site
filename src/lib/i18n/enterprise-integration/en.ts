import type { EnterpriseIntegrationContent } from "./types";

/** Canonical English product message for enterprise integration. */
export const enterpriseIntegrationEn: EnterpriseIntegrationContent = {
  eyebrow: "Enterprise integrations",
  title: "Connect ViaNexis to your existing systems",
  body:
    "ViaNexis is built for provider-neutral integration with external transport and enterprise systems. ViaNexis can connect to external systems, and approved external systems can connect to ViaNexis through APIs, webhooks and connector architecture.",
  coexistence:
    "Companies do not necessarily need to replace their current TMS or ERP to adopt ViaNexis. ViaNexis can be introduced alongside existing systems through integration.",
  capabilityNote:
    "Integration options are available subject to the capabilities and interface provided by the external system.",
  architectureNote:
    "ViaNexis uses a provider-neutral integration architecture. New documented API-based providers normally need provider-specific configuration, mapping and adapter work — not a redesign of ViaNexis core.",
  partnerApiNote:
    "Partner API and webhook-based integration options are available for approved integrations.",
  sandboxNote:
    "Approved technical partners can validate integrations in a sandbox environment before production rollout. Production access remains manually approved.",
  directionsTitle: "Two-way connectivity",
  directions: [
    {
      title: "External systems → ViaNexis",
      description:
        "Approved systems can send trips, stops, assignments and operational data into ViaNexis where the external interface supports it.",
    },
    {
      title: "ViaNexis → External systems",
      description:
        "ViaNexis can return execution status, delays and document metadata such as final CMR or POD events to connected systems where supported.",
    },
  ],
  capabilitiesTitle: "What this enables",
  capabilities: [
    {
      title: "Provider-neutral architecture",
      description:
        "Designed so integrations follow a shared pattern instead of one-off core changes for each provider.",
    },
    {
      title: "API and webhook connectivity",
      description:
        "Structured exchange through Partner API and event webhooks for approved partners.",
    },
    {
      title: "Two-way data exchange",
      description:
        "Inbound operational data and outbound status or document events can be phased over time.",
    },
    {
      title: "Sandbox technical onboarding",
      description:
        "Validate mappings and flows in a controlled sandbox before go-live.",
    },
    {
      title: "Controlled connector certification",
      description:
        "Production rollout follows review and approval — not anonymous self-service activation.",
    },
    {
      title: "Keep your core systems",
      description:
        "Use ViaNexis for driver operations and evidence without forcing an all-or-nothing TMS replacement.",
    },
  ],
  examplesTitle: "Example flows",
  examples: [
    {
      title: "TMS",
      description:
        "A TMS can send trip, stop and assignment data into ViaNexis. ViaNexis can return execution status, delay signals and final CMR / POD metadata where the TMS interface supports it.",
    },
    {
      title: "Telematics",
      description:
        "A telematics provider can supply GPS, odometer or fuel-related transport data into ViaNexis according to the available interface.",
    },
    {
      title: "Partner API / webhooks",
      description:
        "An approved enterprise application can connect through Partner API or webhooks to exchange agreed operational events with ViaNexis.",
    },
  ],
  systemsLabel: "Relevant system categories",
  systems: [
    "TMS",
    "ERP",
    "Telematics",
    "Tachograph / data providers",
    "Routing / toll / fuel",
    "WMS / yard / gate",
    "Accounting",
    "eCMR / eFTI",
    "Other documented enterprise systems",
  ],
  flowExternal: "External systems",
  flowExternalDetail: "TMS · ERP · Telematics · enterprise apps",
  flowLayer: "ViaNexis Integration Layer",
  flowLayerDetail: "Partner API · webhooks · connectors",
  flowOperations: "ViaNexis operations",
  flowOperationsDetail: "Driver · Company · Documents",
  ctaPrimary: "Discuss an integration",
  ctaSecondary: "Request a tailored quote",
};
