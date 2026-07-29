import type { SiteContent } from "../types";
import { legalDe } from "./legal/de";

export const contentDe: SiteContent = {
  meta: {
    title: "ViaNexis Fahrer- und Firmentransporte",
    description: "Fahrer-App, Unternehmenssteuerung, Dokumentenverwaltung, Messaging, Benachrichtigungen und mehrsprachige Reiseabläufe in einem System. Interne Testvorbereitung im Gange.",
    ogLocale: "de_DE",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Merkmale",
    driverApp: "Fahrer-App",
    companyPortal: "Firmenportal",
    documents: "Unterlagen",
    authorityEfti: "Autorität / eFTI",
    security: "Sicherheit",
    pilot: "Pilotenzugang",
    contact: "Kontakt",
    requestAccess: "Zugriff anfordern",
    menuOpen: "Menü öffnen",
  },
  footer: {
    tagline: "Digitale Transportbeweis- und Fahrerbetriebsplattform für Transportunternehmen. eFTI-fähige Grundlage – keine zertifizierte eFTI-Plattform.",
    product: "Produkt",
    legal: "Legal",
    legalNotice: "Rechtlicher Hinweis",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    disclaimers: "Verantwortungsvoller Umgang",
    dataContact: "Datenschutzkontakt",
    copyright: "Keine zertifizierte eFTI-Plattform. Verspricht keine behördliche Akzeptanz, automatische rechtliche Beweiskraft, einwandfreie OCR/AI/Übersetzung oder Notfall-/SOS-Dienste. Kein öffentlicher Play Store-Download.",
  },
  hero: {
    title: "ViaNexis – Plattform für digitale Transportnachweise und Fahrereinsätze",
    subtitle: "Fahrer-App, Unternehmenssteuerung, Dokumentenverwaltung, Messaging, Benachrichtigungen und mehrsprachige Reiseabläufe in einem System.",
    primaryCta: "Kontaktieren Sie uns",
    secondaryCta: "Interne Testvorbereitung im Gange",
    stats: [
      {
        label: "Fahrer-App",
        value: "Reise + offline",
      },
      {
        label: "Unterlagen",
        value: "CMR + Prüfung",
      },
      {
        label: "Nachrichten",
        value: "Mehrsprachig",
      },
      {
        label: "Status",
        value: "Interne Testvorbereitung",
      }
    ],
  },
    platformStatus: {
    title: "Kontrollierter Pilotenzugang",
    items: [
      "ViaNexis ist derzeit über ein Pilotprogramm mit ausgewählten Spediteuren und Fahrern verfügbar.",
      "Der Zugang wird nach individueller Absprache und Genehmigung freigeschaltet.",
      "Kein öffentlicher App-Store-Download.",
    ],
    disclaimer:
      "ViaNexis erhebt nicht den Anspruch, dass das System in jedem Land offiziell akzeptiert oder zertifiziert ist.",
  },

  moduleLabels: {
    goal: "Ziel",
    appFoundation: "App-seitige Grundlage",
    backendDependency: "Backend-/Administrator-Abhängigkeit",
    important: "Wichtig",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Fahrer-App",
      goal: "Lassen Sie Fahrer reisebezogene Aufgaben, Dokumente und Ereignisse auf Mobilgeräten erledigen – online und offline.",
      appFoundation: "Reiseliste und -details, Hochladen von Dokumenten, Unterschriftenerfassung, Checklisten, Protokollierung von Vorfällen, Offline-Speichern und -Synchronisierung, PIN-geschützte Sitzung.",
      backendDependency: "Live API, Mieterumfang, Reise- und Dokumentensynchronisierung, Auflösung der Unternehmenseinstellungen.",
    },
    {
      id: "company-admin",
      title: "Unternehmens-/Administratorkontrolle",
      goal: "Lassen Sie Transportunternehmen Fahrten, Benutzer, Berechtigungen und Arbeitsabläufe über ein Portal verwalten.",
      appFoundation: "Fahrerseitige Daten und Aktionen spiegeln die Unternehmensregeln wider.",
      backendDependency: "Web-Unternehmensportal, Plattform-Admin-App, Rollen, Reisemanagement, Dokumentenanforderungen, Unternehmensaustauscheinstellungen.",
    },
    {
      id: "cmr-documents",
      title: "Digitale CMR & Dokumente",
      goal: "Reisebezogene Dokumente – CMR, Lieferschein, Rechnung, Fahrzeug- und Fahrerpapiere – strukturiert verwaltet.",
      appFoundation: "Dokumenten-Upload, Scan/Foto, Reisezuordnung, bedarfsgerechte Aufgaben, primäres Dokumentenkonzept.",
      backendDependency: "Dokumentenspeicherung, Metadaten, Signaturregeln, gemeinsame Nutzung von Berechtigungen mit Umfangsbeschränkungen.",
      disclaimer: "Digitale Dokumente haben nicht automatisch rechtliche Beweiskraft. Die Akzeptanz variiert je nach Land und Kunde.",
    },
    {
      id: "completed-package",
      title: "Abgeschlossenes Reisepaket",
      goal: "Fassen Sie die Nachweise über die abgeschlossene Reise in einem exportierbaren Paket zusammen.",
      appFoundation: "Reiseabschluss, lokale Daten und synchronisierte Ereignisse als Grundlage für die Paketzusammenstellung.",
      backendDependency: "Abgeschlossene Reisepaketgenerierung, PDF-Export, Audit-Export. Einige Abschnitte (z. B. Palette/Verpackung PDF) bleiben Abhängigkeiten.",
      disclaimer: "Das Paket unterstützt die Dokumentation; Sie ersetzt nicht die rechtliche Beurteilung oder das behördliche Verfahren des Unternehmens.",
    },
    {
      id: "messaging-notifications",
      title: "Nachrichten und Benachrichtigungen",
      goal: "Fahrtbezogene Kommunikation und Benachrichtigungen bei wichtigen Fahrerereignissen.",
      appFoundation: "Nachrichtenliste, mit Trips verknüpfte Threads, App-seitige Benachrichtigungsgrundlage. Verwendbar für: neue Nachricht, Reiseänderung, Dokumentaufgabe, Synchronisierungsproblem.",
      backendDependency: "Produktions-Push (FCM/APNs), Geräte-Token-Registrierung, serverseitiger Versand – separate Abhängigkeit, noch nicht live.",
      disclaimer: "Der Zielbildschirm wird nach PIN geöffnet. Produktionsschub bedeutet nicht, dass jedes Ereignis sofort eintrifft.",
    },
    {
      id: "pallet-packaging",
      title: "Paletten- und Verpackungsaustausch",
      goal: "Erfassen Sie den Paletten- und Verpackungsaustausch pro Stopp mit Mengen, Fehlmengen, Schäden und Streitigkeiten.",
      appFoundation: "Separate Paletten- und Verpackungsmodule. Firmenumschaltbar. Das Unternehmen kann Artikel voreinstellen; Der Fahrer kann, sofern zulässig, eine benutzerdefinierte Verpackung hinzufügen. Offline-Speichern und Synchronisieren.",
      backendDependency: "Exchange-Einstellungen API, Datensatzsynchronisierung, Portal-Administrator-Benutzeroberfläche, Abschnitt „abgeschlossenes Paket PDF“ – Letzteres ist eine Abhängigkeit.",
      disclaimer: "Der Beweisabschnitt PDF ist nicht in allen Fällen vollständig fertig. Die Aufzeichnung unterstützt die Streitdokumentation, entscheidet aber nicht über Streitigkeiten.",
    },
    {
      id: "adr-border",
      title: "ADR / Grenzunterstützung",
      goal: "Schnelle Hilfsinformationen für ADR und den Grenz-/Zollkontext – neben der Überprüfung offizieller Quellen.",
      appFoundation: "ADR-Informationen, UN-Nummernsuche, Tunnelcode-Helfer, mit Reisen verknüpfte Grenz-/Zollmetadaten.",
      backendDependency: "ADR Datenbankaktualisierungen, länderspezifische Regelmetadaten, Grenzkontrollpunktdaten.",
      disclaimer: "ADR und Tunneldaten sind Hilfsinformationen. Die App ersetzt nicht die Gesetzgebung, Schulungen, den Generaldirektionsbeauftragten des Unternehmens oder behördliche Entscheidungen.",
    },
    {
      id: "truck-map",
      title: "LKW-Kartenfundament",
      goal: "Flotten- und Fahrtenübersicht auf der Karte – Einsatzorientierung.",
      appFoundation: "Kartenbasierte Übersicht, Fahrt- und Fahrzeugkontextanzeige.",
      backendDependency: "Integration von Telematikanbietern, Routinganbieter, Live-Position – schrittweise Integration.",
      disclaimer: "Die Karte garantiert nicht die Einhaltung gesetzlicher Beschränkungen oder Genehmigungen.",
    },
    {
      id: "mehrsprachig",
      title: "Mehrsprachiger Betrieb",
      goal: "Mehrsprachige Teams auf einer Plattform.",
      appFoundation: "Mehrsprachige Benutzeroberfläche der Fahrer-App, Beibehaltung der ursprünglichen Nachricht, Übersetzung als Unterstützung.",
      backendDependency: "Erweiterung des Gebietsschemas für Portale und öffentliche Websites, Arbeitsablauf für die Übersetzungsprüfung.",
      disclaimer: "Maschinelle oder AI-Übersetzung ist hilfreich; Eine menschliche Überprüfung ist erforderlich. Das Originaldokument bleibt primär.",
    },
    {
      id: "audit-support",
      title: "Audit- und Support-Zugriff",
      goal: "Nachverfolgbares Protokoll; Kontrollierter Support-Zugang zur Fehlerbehebung.",
      appFoundation: "Ereignisprotokollierung für Fahrt- und Dokumentenaktionen; überprüfbare Support-Sitzungen.",
      backendDependency: "Audit-Export, Support-Zugriffsrichtlinie, Unternehmensberechtigungsmatrix.",
      disclaimer: "Das Audit-Protokoll ist kein automatischer Rechtsbeweis.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR – verantwortungsvoller Umgang",
      body: "ADR und Tunneldaten sind Hilfsinformationen. Offizielle Quellen, Tabellen und aktuelle lokale Regeln müssen immer überprüft werden. ViaNexis ersetzt keine Gesetzgebung, ADR Schulungen, den Gefahrgutbeauftragten des Unternehmens oder behördliche Entscheidungen.",
    },
    aiOcr: {
      title: "AI, OCR & Übersetzung",
      body: "AI-Zusammenfassung, OCR und automatische Übersetzung sind unterstützende Tools. Eine menschliche Überprüfung ist erforderlich. Das Originaldokument und die Nachricht bleiben primär. Keine Rechtsberatung und keine beglaubigte Übersetzung.",
    },
    efti: {
      title: "eFTI & Autoritätsteilung",
      body: "ViaNexis ist keine zertifizierte eFTI-Plattform. Es verspricht nicht in jedem Land Autoritätsakzeptanz. eFTI-ready Foundation bedeutet technische Vorbereitung – kein Zertifikat oder eine Lizenz.",
    },
  },
  home: {
    problem: {
      title: "Alltägliche logistische Herausforderungen",
      subtitle: "Wenn Dokumente, Unterschriften und Ereignisse verstreut sind, leiden Nachverfolgbarkeit und Nachweis.",
      cards: [
        {
          title: "Verstreute Dokumente",
          description: "Reiseberichte per E-Mail, Chat oder Papier – schwer mit tatsächlichen Ereignissen zu verknüpfen.",
        },
        {
          title: "Fehlende Unterschriften",
          description: "Verspätete oder fehlende Unterschriften verzögern den Abschluss und erhöhen das Streitrisiko.",
        },
        {
          title: "Schwer nachzuweisende Ereignisse",
          description: "Abholung, Lieferung, Palettentausch, Vorfall – ohne strukturierte Protokolle, schwer nachvollziehbar.",
        },
        {
          title: "Mehrsprachige Teams",
          description: "Tägliche Missverständnisse bei Nachrichten – Beibehaltung des Originaltextes und überprüfte Übersetzung erforderlich.",
        }
      ],
    },
    modules: {
      title: "Plattformmodule",
      subtitle: "Ziel, App-seitige Grundlage, Backend-/Administrator-Abhängigkeit – mit rechtssicherer Formulierung.",
    },
    pallet: {
      title: "Paletten- und Verpackungsaustausch",
      subtitle: "Separate Module, unternehmensintern umschaltbar – Offline-Speicherung für die Prüfung.",
    },
    notifications: {
      title: "Nachrichten und Benachrichtigungen",
      subtitle: "App-seitige Grundlage bereit – Produktions-Push ist eine separate Backend-Abhängigkeit.",
      cards: [
        {
          title: "Benachrichtigungsereignistypen",
          description: "Neue Nachricht, Reiseänderung, Dokumentaufgabe, Synchronisierungsproblem.",
        },
        {
          title: "Tippen Sie auf Routing und PIN",
          description: "Zielbildschirm über Benachrichtigung öffnen; Deep-Link nach PIN.",
        },
        {
          title: "Datenschutzsicherer Sperrbildschirm",
          description: "Der vollständige Dokument- oder Nachrichteninhalt wird standardmäßig nicht auf dem Sperrbildschirm angezeigt.",
        }
      ],
      backendDepTitle: "Backend-Abhängigkeit",
      backendDepBody: "Produktions-Push (FCM/APNs), Geräte-Token-Registrierung und serverseitiger Versand sind noch nicht live – separate Integration erforderlich.",
    },
    disclaimersSection: {
      title: "Verantwortungsvoller Umgang – wichtige Hinweise",
    },
    security: {
      title: "Schutz und Kontrolle",
      subtitle: "Unternehmens- und Fahrerschutz durch strukturierte Dokumentation.",
      cards: [
        {
          title: "Unternehmensschutz",
          description: "Anforderungsgerechte Dokumentation, überprüfbare Ereignisse, kontrollierter Zugriff.",
        },
        {
          title: "Fahrerschutz",
          description: "Strukturierter Prozess zur Dokumentation des Streitgeschehens.",
        },
        {
          title: "Dokumentationsrückgrat",
          description: "Reisebezogene Vorträge und Veranstaltungen in einem System.",
        },
        {
          title: "Überprüfbare Ereignisse",
          description: "Wer hat wann was getan – protokolliert und durchsuchbar.",
        }
      ],
      notPromiseTitle: "Kein Versprechen",
      notPromiseBody: "ViaNexis verspricht keine automatische rechtliche Beweiskraft. Die rechtliche Beurteilung hängt vom Kontext ab.",
    },
    contact: {
      title: "Kontakt und interne Tests",
      subtitle: "Kontrollierter Zugriff – keine automatische Registrierung, kein öffentlicher Play-Download.",
      body: "Der Zugang ist derzeit über ein kontrolliertes Pilotprogramm möglich. Die Freischaltung erfolgt nach individueller Prüfung.",
      consentNote: "Das System verwaltet Dokumente, Fahrer-Workflows, Unternehmensdaten und Berechtigungen – jeder Zugriff wird individuell überprüft.",
      contactLink: "Kontaktieren Sie uns →",
    },
  },
  contactForm: {
    title: "Kontaktieren Sie uns",
    subtitle: "Interesse an der ViaNexis-Plattform – keine automatische Registrierung.",
    name: "Name *",
    company: "Unternehmen *",
    email: "E-Mail *",
    phone: "Telefon",
    message: "Nachricht *",
    interestType: "Zinsart *",
    interestPlaceholder: "Wählen...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Fahrer-App",
      },
      {
        value: "company-admin",
        label: "Unternehmen / Admin-Plattform",
      },
      {
        value: "Unterlagen",
        label: "Dokumentenmanagement",
      },
      {
        value: "pallet-packaging",
        label: "Palette / Verpackung",
      },
      {
        value: "adr-customs",
        label: "ADR / Zollunterstützung",
      },
      {
        value: "andere",
        label: "Andere",
      }
    ],
    consent: "Ich bin damit einverstanden, dass ViaNexis die angegebenen Daten ausschließlich zur Kontaktaufnahme verarbeitet. *",
    submit: "Nachricht senden",
    submitMailto: "E-Mail senden",
    intakeDisabled: "Die Online-Lead-Einreichung ist in Vorbereitung. Nutzen Sie den E-Mail-Kontakt oder versuchen Sie es später noch einmal.",
    successTitle: "Nachricht erhalten",
    successBody: "Vielen Dank für Ihr Interesse. Unser Team wird sich mit Ihnen in Verbindung setzen. Die Zugangsaktivierung erfolgt nicht automatisch.",
    newSubmission: "Neue Nachricht",
    errors: {
      name: "Name ist erforderlich.",
      company: "Firma ist erforderlich.",
      email: "E-Mail ist erforderlich.",
      emailInvalid: "Geben Sie eine gültige E-Mail-Adresse ein.",
      message: "Nachricht ist erforderlich.",
      interest: "Wählen Sie eine Interessenart aus.",
      consent: "Eine Einwilligung ist erforderlich.",
      submitFailed: "Die Nachricht konnte nicht gesendet werden. Versuchen Sie es stattdessen per E-Mail.",
    },
  },
  applicationForms: {
    common: {
      privacy: "Ich akzeptiere die Datenschutzerklärung und stimme der Datenverarbeitung zu. *",
      submit: "Bewerbung einreichen",
      submitting: "Submitting…",
      intakeDisabled: "Online-Bewerbungen sind in Vorbereitung. Kontaktieren Sie support@vianexis.eu oder versuchen Sie es später noch einmal.",
      successTitle: "Bewerbung eingegangen",
      successBody: "Danke schön. Ihre Bewerbung wird derzeit geprüft. Der Zugriff wird erst gewährt, wenn ein ViaNexis-Administrator dies genehmigt.",
      newSubmission: "Neue Anwendung",
      referenceLabel: "Anwendungsreferenz",
      submittedAtLabel: "Submitted at",
      statusLabel: "Status",
      statusUnderReview: "Under review",
      nextStep: "Wir werden uns nach der Prüfung mit Ihnen in Verbindung setzen. Bewahren Sie Ihre Bewerbungsreferenz zur Unterstützung auf.",
      captchaHint: "Führen Sie vor dem Absenden die Sicherheitsüberprüfung durch.",
      supportContact: "Brauchen Sie Hilfe? Kontaktieren Sie {email}.",
      errors: {
        required: "Dieses Feld ist erforderlich.",
        email: "E-Mail ist erforderlich.",
        emailInvalid: "Geben Sie eine gültige E-Mail-Adresse ein.",
        password: "Das Passwort muss mindestens 8 Zeichen lang sein.",
        privacy: "Datenschutzakzeptanz ist erforderlich.",
        submitFailed: "Die Bewerbung konnte nicht gesendet werden. Versuchen Sie es später noch einmal.",
        duplicate: "Eine Bewerbung für dieses Unternehmen oder diese E-Mail ist bereits in Bearbeitung.",
        duplicateWithRef: "Eine Bewerbung für dieses Unternehmen oder diese E-Mail ist bereits in Bearbeitung (Referenz: {reference}).",
        captchaRequired: "Führen Sie die Sicherheitsüberprüfung durch, um fortzufahren.",
        captchaInvalid: "Die Sicherheitsüberprüfung ist abgelaufen oder fehlgeschlagen. Versuchen Sie es erneut.",
        spam: "Einreichung blockiert.",
        network: "Netzwerkfehler. Überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
      },
    },
    company: { title: "Firmenbewerbung", subtitle: "Beantragen Sie den Zugang zur Unternehmensplattform ViaNexis.", companyName: "Name der Firma *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Kontaktname *", contactEmail: "Kontakt-E-Mail *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "Interessante Module", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Versandportal" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Fuhrpark / Werkstatt" },{ value: "pallet_packaging", label: "Palette / Verpackung" },{ value: "external_shipper_receiver", label: "Externer Versender/Empfänger" }], notes: "Notes" },
    driver: { title: "Treiberanwendung", subtitle: "Selbstregistrierung – Genehmigung vor der Anmeldung erforderlich.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Firmenname (optional)", companyCode: "Einladung/Firmencode (optional)", licenseNotes: "Lizenz-/ADR-/GKI-Hinweise (optional)" },
    partner: { title: "Partnerinteresse", subtitle: "Anfrage nach Versender, Empfänger, Lager oder Zollpartner.", companyName: "Name der Firma *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Zollagent" },{ value: "other_partner", label: "Anderer Partner" }], contactName: "Kontaktname *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Behördliches Inspektionspaket",
        description:
          "Fahrtbezogene Dokumente und Ereignisse in einem scope-begrenzten gemeinsamen Paket.",
      },
      {
        title: "Scope / zeitlich begrenzter Zugang",
        description: "QR-basierter begrenzter Zugang — nicht öffentlich.",
      },
      {
        title: "Audit",
        description: "Protokollierte Zugriffs- und Freigabeereignisse.",
      },
      {
        title: "eFTI-fähige Foundation",
        description: "Technische Basis für künftige Integration — keine Zertifizierung.",
      },
    ],
  },
  legal: legalDe,
};
