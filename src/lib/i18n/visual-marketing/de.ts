import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingDe: VisualMarketingContent = {
  skipToContent: "Zum Inhalt springen",
  brandVisuals: {
    routeLabel: "Aktive Route",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis-Netzwerk",
    networkTitle: "Es ist nicht nur die Route, die verbindet.",
    networkSubtitle: "Stopps, Dokumente, Unterschriften, Nachrichten und Entscheidungen gehören zum selben Reiseablauf – in zeitlicher Reihenfolge, mit Berechtigungen und einem durchsuchbaren Ereignispfad.",
    workflowEvents: [
      "Abfahrt",
      "Abholen",
      "Dokumentieren",
      "Unterschrift",
      "Warten",
      "Lieferung",
      "Geschlossenes Paket"
    ],
  },
  pillars: {
    title: "Drei Säulen – ein kontrolliertes System",
    subtitle: "Ein fahrerfreundlicher mobiler Ablauf, betriebliche Betriebskontrolle und ein überprüfbarer Entscheidungspfad.",
    items: [
      {
        title: "Fahrerfreundliche App",
        description: "Fahrten, Stopps, Dokumente, Unterschriften und Ereignisse in einer offlinefähigen mobilen Benutzeroberfläche.",
      },
      {
        title: "Unternehmenskontrolle",
        description: "Disponentenübersicht, Berechtigungen, Benachrichtigungen und Dokumentenverfolgung im Unternehmensportal.",
      },
      {
        title: "Überprüfbare Vorgänge",
        description: "Ereignisse, Signaturen und Entscheidungen mit durchsuchbarem Protokoll – ohne übertriebene Sicherheitsansprüche.",
      }
    ],
  },
  process: {
    title: "Kern-Reise-Workflow",
    subtitle: "Von der Erstellung bis zum geschlossenen Paket – strukturierte Schritte mit berechtigungsbewusstem Zugriff.",
    steps: [
      {
        title: "Reise erstellen",
        description: "Abhol- und Lieferstopps, Aufgaben und Dokumentenanforderungen.",
      },
      {
        title: "Fahrerakzeptanz",
        description: "Zuweisung, Annahme und kontrollierter Sitzungsstart.",
      },
      {
        title: "Stopps und Aufgaben",
        description: "Mehrere Stopps, Aufgaben, Ereignisse und Schadensaufzeichnungen.",
      },
      {
        title: "Dokumente und Unterschriften",
        description: "Hochladen, unterschreiben, bewerten – dann ein geschlossenes Reisepaket.",
      }
    ],
  },
  homeModules: {
    title: "Produktoberflächen",
    subtitle: "Jede Oberfläche verfügt über dasselbe Reise- und Dokumentenmodell. Details live auf den Produktseiten.",
    detailsLink: "Details",
    items: [
      {
        title: "Fahrer-App",
        description: "Fahrten, Stopps, Dokumente und Unterschriften in einem offlinefähigen mobilen Ablauf. Fahrer sehen immer die nächste erforderliche Aktion.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Firmenportal",
        description: "Betriebsübersicht: aktive Fahrten, fehlende Dokumente, Warnungen und Berechtigungen an einem Ort.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumente und Unterschriften",
        description: "Reisebezogene Unterlagen, Unterschriftenstatus und ein exportierbares geschlossenes Reisepaket.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Nachrichten und Benachrichtigungen",
        description: "Reisebezogene Kommunikation. Im Rahmen des Pilotprogramms können Benachrichtigungsfunktionen aktiviert werden.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit und Berechtigungen",
        description: "Rollenbasierter Zugriff, durchsuchbare Ereignisse und kontrollierter Support-Zugriff.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline-Betrieb",
        description: "Fahrer können in schwachen Netzwerken weiterarbeiten; Die Änderungen werden abgeschlossen, wenn die Synchronisierung abgeschlossen ist.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumente und Unterschriften",
    subtitle: "Dokumente sind mit der Reise verknüpft, können signiert und überprüft und dann in einem exportierbaren Paket zusammengefasst werden.",
    steps: [
      {
        title: "Hochladen oder erstellen",
        description: "CMR, Lieferschein, Foto oder digitale Vorlage.",
      },
      {
        title: "Verlinkung",
        description: "Dem Fahrt-, Fahrer- oder Fahrzeugkontext zugeordnet.",
      },
      {
        title: "Unterschreiben und überprüfen",
        description: "Statusablauf: wartet auf Unterschrift → unterzeichnet → wird geprüft.",
      },
      {
        title: "Geschlossenes Reisepaket",
        description: "Exportierbare Dokumente und Ereignisse – eine überprüfbare Zusammenfassung.",
      }
    ],
    statuses: [
      "Hochgeladen",
      "Fehlen",
      "Warten auf Unterschrift",
      "Unterzeichnet",
      "Wird überprüft"
    ],
    detailsLink: "Dokumente im Detail",
  },
  offline: {
    title: "Offline-Betrieb und Synchronisierung",
    subtitle: "Die Arbeit an schwachen Netzwerken wird fortgesetzt – die Finalisierung erfolgt nach der Synchronisierung.",
    cards: [
      {
        title: "Lokale Speicherung",
        description: "Treiberänderungen werden sicher auf dem Gerät gespeichert.",
      },
      {
        title: "Sichtbare Synchronisierung",
        description: "Ausstehende Änderungen bleiben sichtbar, bis die Verbindung wiederhergestellt ist.",
      },
      {
        title: "Konfliktsignalisierung",
        description: "Widersprüchliche Quellen werden protokolliert – niemals stillschweigend überschrieben.",
      }
    ],
    detailsLink: "Fahrer-App",
  },
  responsibleUse: {
    title: "Verantwortungsvoller Umgang",
    subtitle: "Kurze, wichtige Grenzen – Details finden Sie live auf den rechtlichen Seiten.",
    items: [
      "ViaNexis ist keine zertifizierte eFTI-Plattform und verspricht keine automatische behördliche Akzeptanz.",
      "OCR, KI und Übersetzung sind hilfreich – eine menschliche Überprüfung ist erforderlich.",
      "Das System bietet keine Rechtsberatung an.",
      "Es handelt sich nicht um einen Notfall- oder SOS-Dienst."
    ],
    detailsLink: "Vollständige Hinweise zur verantwortungsvollen Nutzung",
  },
  pilotCta: {
    title: "Kontrollierter Pilotenzugang",
    subtitle: "ViaNexis ist derzeit über ein Pilotprogramm mit ausgewählten Spediteuren und Fahrern verfügbar. Der Zugang wird nach individueller Absprache und Genehmigung freigeschaltet.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktive Reise",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Nächster Halt",
        value: "Abholung · Budapest (Demo)",
        status: "Unterwegs",
      },
      {
        label: "Dokumentieren",
        value: "CMR – wartet auf Unterschrift",
        status: "Aktion",
      },
      {
        label: "Synchronisieren",
        value: "1 Änderung ausstehend",
        status: "Offline",
      }
    ],
    phoneCaption: "Produktdemo – anonymisierte Beispieldaten.",
    browserTitle: "Betriebskontrolle",
    browserSubtitle: "Demo-Flotte · Dispatcher-Ansicht",
    browserColumns: [
      "Reise",
      "Stoppen",
      "Dokumentieren",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (Demo)",
        "CMR fehlt",
        "Alarm"
      ],
      [
        "VN-2407-B03",
        "Győr (Demo)",
        "POD signiert",
        "Unterwegs"
      ],
      [
        "VN-2407-C11",
        "Wien (Demo)",
        "Wird überprüft",
        "Vorab schließen"
      ]
    ],
    browserCaption: "Demo des Unternehmensportals – keine Live-Kundendaten.",
    driver: {
      navHome: "Heim",
      navTrips: "Ausflüge",
      navDocs: "Dokumente",
      navMore: "Mehr",
      tripStatus: "Reise läuft",
      nextStopLabel: "Nächster Halt",
      nextStopValue: "Abholung · Budapest (Demo)",
      documentLabel: "Dokumentieren",
      documentValue: "Digitales CMR",
      documentAction: "Unterschrift erforderlich",
      syncLabel: "Verbindung",
      syncValue: "Offline · 1 ausstehend",
    },
    portal: {
      roleLabel: "Rolle: Disponent",
      alertLabel: "Alarm",
      alertValue: "VN-2407-A18 · CMR wartet auf Unterschrift",
      auditLabel: "Letztes Audit-Ereignis",
      auditValue: "Dokumentstatus geändert · Fahrer-App",
    },
  },
  statusLabels: {
    available: "Verfügbar",
    pilot: "Pilot",
    development: "In der Entwicklung",
  },
  productPage: {
    highlightsTitle: "Schlüsselfunktionen",
    capabilitiesTitle: "Was diese Oberfläche bietet",
    statusesTitle: "Statusbeschriftungen",
  },
  authority: {
    heroSubtitle: "Zeitlich und umfangsbegrenzter Zugriff auf Reisenachweise – keine zertifizierte eFTI-Plattform.",
    foundationBadge: "Technische Bereitschaft",
    notCertifiedBadge: "Nicht zertifiziertes eFTI",
    foundationTitle: "Was Bereitschaft bedeutet",
    foundationSubtitle: "Strukturierte Daten und kontrollierter Austausch – ohne Zertifikat oder Genehmigungsanspruch.",
    extraDisclaimer: "ViaNexis verspricht nicht in jedem Land eine behördliche Akzeptanz. Die Einhaltung gesetzlicher und behördlicher Vorschriften liegt weiterhin in der Verantwortung des Kunden.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Reiseliste und Haltestellen",
        description: "Aktive Fahrten, nächste Aktionen und Stoppaufgaben.",
        status: "available",
      },
      {
        title: "Dokumente und Unterschrift",
        description: "Uploads, CMR-Aufgaben und Signaturerfassung.",
        status: "available",
      },
      {
        title: "Offline-Arbeit",
        description: "Lokales Speichern mit sichtbarer ausstehender Synchronisierung.",
        status: "available",
      },
      {
        title: "Nachrichten",
        description: "Fahrtbezogene Kommunikation für Fahrer.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktive Reiseliste",
        description: "Betriebsübersicht mit Stopps und Status.",
        status: "available",
      },
      {
        title: "Benachrichtigungen über fehlende Dokumente",
        description: "Fehlende oder nicht unterzeichnete Dokumente sind sofort sichtbar.",
        status: "available",
      },
      {
        title: "Berechtigungen",
        description: "Rollenbasierter Zugriff auf Unternehmensdaten.",
        status: "available",
      },
      {
        title: "Audit-Ereignisse",
        description: "Durchsuchbarer Entscheidungs- und Dokumentenpfad.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Hochladen und verlinken",
        description: "Mit der Reise, dem Fahrer oder dem Fahrzeug verknüpfte Dokumente.",
        status: "available",
      },
      {
        title: "Signatur-Workflow",
        description: "Warten auf Unterschrift → unterzeichnet → Rezension.",
        status: "pilot",
      },
      {
        title: "Geschlossenes Reisepaket",
        description: "Exportierbare Dokumente und Ereignisse.",
        status: "pilot",
      },
      {
        title: "Vorlagenverwaltung",
        description: "Zentrale Dokumentvorlagen – schrittweise Einführung.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rollenbasierter Zugriff",
        description: "Benutzer- und unternehmensweite Trennung.",
        status: "available",
      },
      {
        title: "Audit-Protokoll",
        description: "Aktionen und Entscheidungen bleiben durchsuchbar.",
        status: "available",
      },
      {
        title: "Sitzung und Gerät",
        description: "Kontrollierte Sitzungs- und Geräteverwaltung.",
        status: "pilot",
      },
      {
        title: "Support-Zugang",
        description: "Zeitlich begrenzter, protokollierter Support-Eintrag.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Sprache",
    draftSuffix: "· Entwurf",
    breadcrumb: "Semmelbrösel",
    primaryNav: "Primär",
    importantNotice: "Wichtiger Hinweis",
  },
};
