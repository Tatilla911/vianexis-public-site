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
    title: "Aktueller Stand",
    items: [
      "Die internen Testvorbereitungen für Google Play laufen – kein öffentlicher Store-Download.",
      "Bereit zur Veröffentlichung der Treiber-App und Samsung UAT in Bearbeitung.",
      "Produktions-Backend, Push-Benachrichtigungen und Partnerintegrationen werden nach und nach angebunden."
    ],
    disclaimer: "ViaNexis erhebt keinen Anspruch darauf, dass das System in jedem Land aktiv, zertifiziert oder offiziell akzeptiert ist.",
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
      body: "Die Treiber-App befindet sich in der internen Testvorbereitung von Google Play. Release-Bereitschaft und Samsung UAT in Bearbeitung. Die Aktivierung erfolgt nicht automatisch.",
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
  legal: {
    versionBadge: "Interne Testversion – Prüfung durch Rechtsexperten läuft",
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
        title: "eFTI-ready foundation",
        description: "Technische Basis für künftige Integration — keine Zertifizierung.",
      },
    ],
  },
  legal: legalDe,
};
