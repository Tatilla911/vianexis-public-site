import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingEn: VisualMarketingContent = {
  skipToContent: "Skip to content",
  brandVisuals: {
    routeLabel: "Active route",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "It is not only the route that connects.",
    networkSubtitle: "Stops, documents, signatures, messages, and decisions belong to the same trip flow — in time order, with permissions and a searchable event trail.",
    workflowEvents: [
      "Departure",
      "Pickup",
      "Document",
      "Signature",
      "Waiting",
      "Delivery",
      "Closed package"
    ],
  },
  pillars: {
    title: "Three pillars — one controlled system",
    subtitle: "A driver-friendly mobile flow, company operational control, and an auditable decision trail.",
    items: [
      {
        title: "Driver-friendly app",
        description: "Trips, stops, documents, signatures, and events in an offline-capable mobile UI.",
      },
      {
        title: "Company control",
        description: "Dispatcher overview, permissions, alerts, and document tracking in the company portal.",
      },
      {
        title: "Auditable operations",
        description: "Events, signatures, and decisions with a searchable log — without exaggerated security claims.",
      }
    ],
  },
  process: {
    title: "Core trip workflow",
    subtitle: "From creation to a closed package — structured steps with permission-aware access.",
    steps: [
      {
        title: "Create trip",
        description: "Pickup and delivery stops, tasks, and document requirements.",
      },
      {
        title: "Driver acceptance",
        description: "Assignment, acceptance, and a controlled session start.",
      },
      {
        title: "Stops and tasks",
        description: "Multiple stops, tasks, events, and damage records.",
      },
      {
        title: "Documents and signatures",
        description: "Upload, sign, review — then a closed trip package.",
      }
    ],
  },
  homeModules: {
    title: "Product surfaces",
    subtitle: "Every surface shares the same trip and document model. Details live on the product pages.",
    detailsLink: "Details",
    items: [
      {
        title: "Driver app",
        description: "Trips, stops, documents, and signatures in an offline-capable mobile flow. Drivers always see the next required action.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Company portal",
        description: "Operational overview: active trips, missing documents, alerts, and permissions in one place.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documents & signatures",
        description: "Trip-linked paperwork, signature states, and an exportable closed trip package.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Messaging & alerts",
        description: "Trip-linked communication. Notification features can be activated as part of the pilot program.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit & permissions",
        description: "Role-based access, searchable events, and controlled support access.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline operation",
        description: "Drivers can keep working on weak networks; changes finalize when sync completes.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documents & signatures",
    subtitle: "Documents link to the trip, can be signed and reviewed, then closed into an exportable package.",
    steps: [
      {
        title: "Upload or create",
        description: "CMR, delivery note, photo, or digital template.",
      },
      {
        title: "Linking",
        description: "Assigned to trip, driver, or vehicle context.",
      },
      {
        title: "Sign and review",
        description: "Status flow: awaiting signature → signed → under review.",
      },
      {
        title: "Closed trip package",
        description: "Exportable documents and events — an auditable summary.",
      }
    ],
    statuses: [
      "Uploaded",
      "Missing",
      "Awaiting signature",
      "Signed",
      "Under review"
    ],
    detailsLink: "Documents in detail",
  },
  offline: {
    title: "Offline operation & sync",
    subtitle: "Work continues on weak networks — finalization happens after sync.",
    cards: [
      {
        title: "Local save",
        description: "Driver changes are stored safely on the device.",
      },
      {
        title: "Visible sync",
        description: "Pending changes stay visible until connectivity returns.",
      },
      {
        title: "Conflict signalling",
        description: "Conflicting sources are logged — never silently overwritten.",
      }
    ],
    detailsLink: "Driver app",
  },
  responsibleUse: {
    title: "Responsible use",
    subtitle: "Short, important limits — details live on the legal pages.",
    items: [
      "ViaNexis is not a certified eFTI platform and does not promise automatic authority acceptance.",
      "OCR, AI, and translation are assistive — human review is required.",
      "The system does not provide legal advice.",
      "It is not an emergency or SOS service."
    ],
    detailsLink: "Full responsible-use notices",
  },
  pilotCta: {
    title: "Controlled pilot access",
    subtitle: "ViaNexis is currently available through a pilot program with selected carriers and drivers. Access is activated after individual discussion and approval.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Active trip",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Next stop",
        value: "Pickup · Budapest (demo)",
        status: "En route",
      },
      {
        label: "Document",
        value: "CMR — awaiting signature",
        status: "Action",
      },
      {
        label: "Sync",
        value: "1 change pending",
        status: "Offline",
      }
    ],
    phoneCaption: "Product demo — anonymized sample data.",
    browserTitle: "Operations control",
    browserSubtitle: "Demo fleet · dispatcher view",
    browserColumns: [
      "Trip",
      "Stop",
      "Document",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR missing",
        "Alert"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD signed",
        "En route"
      ],
      [
        "VN-2407-C11",
        "Vienna (demo)",
        "Under review",
        "Pre-close"
      ]
    ],
    browserCaption: "Company portal demo — not live customer data.",
    driver: {
      navHome: "Home",
      navTrips: "Trips",
      navDocs: "Docs",
      navMore: "More",
      tripStatus: "Trip in progress",
      nextStopLabel: "Next stop",
      nextStopValue: "Pickup · Budapest (demo)",
      documentLabel: "Document",
      documentValue: "Digital CMR",
      documentAction: "Signature required",
      syncLabel: "Connection",
      syncValue: "Offline · 1 pending",
    },
    portal: {
      roleLabel: "Role: Dispatcher",
      alertLabel: "Alert",
      alertValue: "VN-2407-A18 · CMR awaiting signature",
      auditLabel: "Latest audit event",
      auditValue: "Document status changed · driver app",
    },
  },
  statusLabels: {
    available: "Available",
    pilot: "Pilot",
    development: "In development",
  },
  productPage: {
    highlightsTitle: "Key capabilities",
    capabilitiesTitle: "What this surface provides",
    statusesTitle: "Status labels",
  },
  authority: {
    heroSubtitle: "Time- and scope-limited access to trip evidence — not a certified eFTI platform.",
    foundationBadge: "Technical readiness",
    notCertifiedBadge: "Not certified eFTI",
    foundationTitle: "What readiness means",
    foundationSubtitle: "Structured data and controlled sharing — without a certificate or permit claim.",
    extraDisclaimer: "ViaNexis does not promise authority acceptance in every country. Legal and regulatory compliance remains the customer’s responsibility.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Trip list and stops",
        description: "Active trips, next actions, and stop tasks.",
        status: "available",
      },
      {
        title: "Documents and signature",
        description: "Uploads, CMR tasks, and signature capture.",
        status: "available",
      },
      {
        title: "Offline work",
        description: "Local save with visible pending sync.",
        status: "available",
      },
      {
        title: "Messaging",
        description: "Trip-linked communication for drivers.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Active trip list",
        description: "Operational overview with stops and statuses.",
        status: "available",
      },
      {
        title: "Missing-document alerts",
        description: "Missing or unsigned documents are immediately visible.",
        status: "available",
      },
      {
        title: "Permissions",
        description: "Role-based access to company data.",
        status: "available",
      },
      {
        title: "Audit events",
        description: "Searchable decision and document trail.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Upload and linking",
        description: "Documents linked to trip, driver, or vehicle.",
        status: "available",
      },
      {
        title: "Signature workflow",
        description: "Awaiting signature → signed → review.",
        status: "pilot",
      },
      {
        title: "Closed trip package",
        description: "Exportable documents and events.",
        status: "pilot",
      },
      {
        title: "Template management",
        description: "Central document templates — gradual rollout.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Role-based access",
        description: "User- and company-scoped separation.",
        status: "available",
      },
      {
        title: "Audit log",
        description: "Actions and decisions remain searchable.",
        status: "available",
      },
      {
        title: "Session and device",
        description: "Controlled session and device management.",
        status: "pilot",
      },
      {
        title: "Support access",
        description: "Time-limited, logged support entry.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Language",
    draftSuffix: " · draft",
    breadcrumb: "Breadcrumb",
    primaryNav: "Primary",
    importantNotice: "Important notice",
  },
};
