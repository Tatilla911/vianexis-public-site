import type { LegalContent } from "../legal-types";

export const legalDe: LegalContent = {
  versionBadge: "Interne Testversion – Prüfung durch Rechtsexperten läuft · Diese Übersetzung wird überprüft.",
  privacy: {
    title: "Datenschutzhinweis – interne Testversion",
    intro: "Dieser Hinweis gilt während der internen Test- und Vorbereitungsphase der ViaNexis-Treiber-App und der zugehörigen Plattform. Bei dem Dienst handelt es sich nicht um einen öffentlichen Play Store-Download – die internen Testvorbereitungen für Google Play sind im Gange. Die endgültige umfassende Datenschutzerklärung wird nach rechtlicher Prüfung veröffentlicht.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Datenverantwortlicher",
      body: "ViaNexis – vianexis.eu. Datenschutzkontakt: info@vianexis.eu",
    },
    scope: {
      title: "Umfang",
      body: "Dieser Hinweis gilt für die mobile Fahrer-App ViaNexis, zugehörige Arbeitsabläufe für Fahrer und Fahrten sowie das Web-Kontaktformular. Für das Firmenadministrator- und Disponentenportal gelten gesonderte Vertrags- und Datenschutzbestimmungen.",
    },
    dataCategories: {
      title: "Daten, die wir verarbeiten",
      items: [
        "Konto- und Kontaktdaten: Name, E-Mail, Telefon, Firma, Rolle, Land.",
        "Fahrerprofildaten: Kennungen, Rolle, Spracheinstellungen, Berechtigungen.",
        "Reisedaten: Reise-IDs, Status, Stopps, Zeitstempel, Metadaten.",
        "Dokumente: CMR, Lieferscheine, Rechnungen, Fotos, Scans, digitale Signaturen.",
        "Nachrichten und Benachrichtigungen: fahrtbezogene Kommunikations- und Alarmereignisse.",
        "Standort: nur mit Benutzererlaubnis und während der Nutzung (when-in-use), wenn die Funktion aktiv ist.",
        "Geräte- und Sitzungsmetadaten: Gerätetyp, Betriebssystemversion, App-Version, Sitzungskennungen.",
        "Diagnose und Protokolle: technische Protokolle und Fehlerberichte – sofern aktiviert.",
        "Daten zum Paletten- und Verpackungsaustausch: Typ, Menge, Mangel, Beschädigung, Notizen.",
        "ADR / Nutzungsdaten von Zollhelfern: Suchanfragen, Ansichten – keine offiziellen Entscheidungen.",
        "Benachrichtigungsberechtigung und zukünftiges Push-Token: Produktions-Push (FCM) ist eine separate Backend-Abhängigkeit."
      ],
    },
    purposes: {
      title: "Zwecke der Verarbeitung",
      items: [
        "Verwalten Sie Reiseabläufe und dokumentieren Sie die Leistung.",
        "Dokumentenverwaltung, Signaturen und Zusammenstellung von Beweispaketen.",
        "Fahrtbezogene Kommunikation und betriebliche Benachrichtigungen.",
        "Sicherheit, Audit und Rückverfolgbarkeit.",
        "Kontrollierter Support-Zugriff auf überprüfbare Weise.",
        "Vorbeugung und Dokumentation rechtlicher und geschäftlicher Streitigkeiten.",
        "Verbesserung der App-Bedienung und Fehlerbehebung.",
        "Interne Tests, Pilot- und Zugriffsbewertung."
      ],
    },
    sharing: {
      title: "Datenaustausch",
      items: [
        "Arbeitgeber/Transportunternehmen und autorisierte Administrator-/Disponentenbenutzer – pro Mandantenbereich.",
        "Eigene Fahrt- und Dokumentdaten des Fahrers gemäß den Unternehmensregeln.",
        "Autorisierter Plattformsupport nur mit geprüftem, eingeschränktem und begründetem Zugriff.",
        "Behörden oder Partner nur aufgrund von Rechtsgrundlage, Vertrag oder Unternehmensentscheidung.",
        "AI/OCR/Übersetzungsanbieter nur über Backend-gesteuerte zukünftige Integration, falls angewendet – mit menschlicher Überprüfung.",
        "Wir verkaufen keine personenbezogenen Daten. Kein Marketingschub."
      ],
    },
    rights: {
      title: "Ihre Rechte",
      items: [
        "Zugriff auf Ihre Daten – über den Firmenadministrator oder den Supportkanal.",
        "Berichtigung unrichtiger Daten.",
        "Löschung, sofern gesetzlich möglich und Unternehmensprozesse dies zulassen.",
        "Einspruch oder Einschränkung, soweit rechtlich gerechtfertigt.",
        "Datenübertragbarkeit, sofern geltendes Recht dies vorsieht.",
        "Beschwerde bei einer Aufsichtsbehörde.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Benachrichtigungen",
      body: "Die App verwendet betriebliche Benachrichtigungen – keine Marketing-Push. Der Text auf dem Sperrbildschirm ist standardmäßig datenschutzkonform. Produktions-Push (FCM/APNs) und Geräte-Token-Handhabung sind Backend-Abhängigkeiten – können während interner Tests teilweise oder nicht live sein. Die Benachrichtigungsberechtigung liegt im Ermessen des Benutzers.",
    },
    location: {
      title: "Standort",
      body: "Der Standort wird nur mit Benutzererlaubnis und während der Nutzung (when-in-use) verarbeitet, wenn die Funktion aktiv ist – für Karten-, eigene Positions- und Fahrtnachweiszwecke. Im aktuellen Zustand gibt es keine Hintergrundverfolgung. Der Standort ist keine Garantie für die Routenkonformität oder die Einhaltung gesetzlicher Vorschriften.",
    },
    importantNotices: {
      title: "Wichtige Hinweise",
      items: [
        "AI, OCR und automatische Übersetzung sind unterstützende Tools – eine menschliche Überprüfung ist erforderlich.",
        "ADR-Informationen sind ein Hilfsmittel – ersetzen keine offiziellen Quellen oder Gesetze.",
        "ViaNexis ist keine zertifizierte eFTI-Plattform.",
        "Kein Notfall oder SOS-Service.",
        "Digitale Dokumente haben nicht automatisch rechtliche Beweiskraft.",
        "Der Service befindet sich in der internen Test-/Vorbereitungsphase – kein öffentliches Live-Produktionssystem."
      ],
    },
    dataContact: {
      title: "Datenschutzkontakt",
      body: "Fragen zum Datenschutz: info@vianexis.eu. Der endgültige Kontakt zum Verantwortlichen wird in der veröffentlichten Mitteilung aufgeführt.",
    },
    playUrl: "Datenschutz-URL der Stable Play Console: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Nutzungsbedingungen – interne Testversion",
    intro: "Diese Bedingungen gelten während der internen Test- und Pilotphase der ViaNexis-Plattform. Der Dienst ist kein öffentliches Play Store-Produkt – die internen Testvorbereitungen für Google Play sind im Gange. Die endgültigen Bedingungen werden nach rechtlicher Prüfung veröffentlicht.",
    sections: [
      {
        title: "Art des Dienstes",
        body: "ViaNexis bietet digitale Transportnachweise und eine Fahrerbetriebsplattform für Transportunternehmen. eFTI-fähige Grundlage – keine zertifizierte eFTI-Plattform. Verspricht nicht die Akzeptanz der Behörden in jedem Land.",
      },
      {
        title: "Interne Tests",
        body: "Der Zugang wird kontrolliert – per Pilot- oder interner Testeinladung. Keine automatische öffentliche Registrierung. Backend, Push-Benachrichtigungen und einige Integrationen werden nach und nach verbunden.",
      },
      {
        title: "Verantwortung des Benutzers",
        body: "Fahrer und Unternehmen sind für die Einhaltung der Reise-, Dokumenten-, ADR- und Zollbestimmungen verantwortlich. Die App unterstützt die Dokumentation – ersetzt keine Rechtsberatung, ADR-Experten oder Behörden.",
      },
      {
        title: "Verfügbarkeit",
        body: "Während interner Tests können Betriebszeit und Funktionen variieren. Spezifische SLA gelten nur im Rahmen eines Vertrags.",
      },
      {
        title: "Haftungsbeschränkung",
        body: "ViaNexis verspricht keine automatische rechtliche Beweiskraft, einwandfreie OCR/AI/Übersetzung, Notfalldienste oder Produktions-Push-Bereitschaft, wenn immer noch eine Backend-Abhängigkeit besteht.",
      }
    ],
  },
  legalNotice: {
    title: "Rechtlicher Hinweis – interne Testversion",
    intro: "Auf dieser Seite wird der interne Test- und Vorbereitungsstatus der Plattform ViaNexis beschrieben. Sie ersetzen nicht die vollständige rechtliche Dokumentation oder Vertragsbedingungen.",
    sections: [
      {
        title: "Art der Plattform",
        body: "Digitale Transportnachweise, Dokumentenverwaltung, Nachrichtenübermittlung, Benachrichtigungen und Unternehmenssteuerung in einem System. eFTI-fähige Grundlage – keine zertifizierte eFTI-Plattform.",
      },
      {
        title: "Interner Teststatus",
        body: "Die internen Testvorbereitungen für Google Play laufen. Samsung UAT und Release-Bereitschaft im Gange. Wir behaupten nicht, dass die App im Play Store öffentlich verfügbar ist.",
      },
      {
        title: "Haftungsbeschränkung",
        body: "Wir versprechen keine behördliche Akzeptanz, automatische rechtliche Beweiskraft, einwandfreie AI/OCR/Übersetzung, Notdienste oder vollständige Produktions-Push-Bereitschaft.",
      },
      {
        title: "Kontakt",
        body: "Rechtliche und Datenschutzfragen: info@vianexis.eu",
      }
    ],
    relatedDocs: "Verwandte Dokumente",
  },
  disclaimersPage: {
    title: "Verantwortungsvoller Umgang – Haftungsausschluss",
    intro: "Die folgenden Texte beschreiben wichtige Grenzen der Plattformnutzung. Interne Testversion – ersetzt keine Rechtsberatung.",
    items: [
      {
        id: "adr",
        title: "ADR – verantwortungsvoller Umgang",
        body: "ADR und Tunneldaten sind Hilfsinformationen. Offizielle Quellen, Tabellen und aktuelle lokale Regeln müssen immer überprüft werden. ViaNexis ersetzt nicht die Gesetzgebung, ADR Schulungen, den DG-Beauftragten des Unternehmens oder behördliche Entscheidungen.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & Übersetzung",
        body: "Hilfswerkzeuge – menschliche Überprüfung erforderlich. Originaldokument und Nachricht bleiben primär. Keine Rechtsberatung und keine beglaubigte Übersetzung.",
      },
      {
        id: "Benachrichtigungen",
        title: "Benachrichtigungen und Push",
        body: "Operative Benachrichtigungen – kein Marketing-Push. Standardmäßig datenschutzsicherer Sperrbildschirm. Der Produktions-Push (FCM/APNs) ist eine Backend-Abhängigkeit – möglicherweise während interner Tests nicht aktiv.",
      },
      {
        id: "truck-map",
        title: "LKW-Karte/Community-Daten",
        body: "Karte und Route zur betrieblichen Orientierung – keine Garantie für gesetzliche Beschränkungen, Genehmigungen oder die Richtigkeit von Community-Daten. Kein Ersatz für die offizielle Navigation.",
      },
      {
        id: "Palette",
        title: "Nachweis über Paletten-/Verpackungsaustausch",
        body: "Die Aufzeichnung unterstützt die Streitdokumentation. Der PDF-Beweisabschnitt im abgeschlossenen Reisepaket ist nicht in allen Fällen vollständig bereit. Entscheidet keine Streitigkeiten.",
      },
      {
        id: "legal-validity",
        title: "Rechtsgültigkeit / Dokumente",
        body: "Digitale Dokumente und Unterschriften haben nicht automatisch rechtliche Beweiskraft. Die Akzeptanz variiert je nach Land und Kunde.",
      },
      {
        id: "efti",
        title: "eFTI & Autoritätsteilung",
        body: "ViaNexis ist keine zertifizierte eFTI-Plattform. Verspricht nicht die Akzeptanz der Behörden in jedem Land. Die eFTI-ready-Grundlage ist technische Vorbereitung – kein Zertifikat.",
      }
    ],
  },
};
