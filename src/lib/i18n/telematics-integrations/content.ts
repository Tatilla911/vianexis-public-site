export type TelematicsProviderStatus = "supported" | "planned" | "discovery_required";

export type TelematicsIntegrationsPageContent = {
  metaTitle: string;
  metaDescription: string;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  whyTitle: string;
  whyBody: string;
  usesTitle: string;
  usesCurrentTitle: string;
  usesCurrent: string[];
  usesPlannedTitle: string;
  usesPlanned: string[];
  existingTitle: string;
  existingBody: string;
  noProviderTitle: string;
  noProviderBody: string;
  providersTitle: string;
  providersIntro: string;
  providersNote: string;
  pricingTitle: string;
  pricingBase: string;
  pricingBandsIntro: string;
  pricingBands: string[];
  pricingProviderNote: string;
  pricingNewProvider: string;
  pricingClarification: string;
  securityTitle: string;
  securityBody: string;
  partnerTitle: string;
  partnerBody: string;
  partnerCta: string;
  ctaTitle: string;
  ctaAssessment: string;
  ctaContact: string;
  statusSupported: string;
  statusPlanned: string;
  statusDiscovery: string;
};

export const telematicsIntegrationsHu: TelematicsIntegrationsPageContent = {
  metaTitle: "Telematikai rendszer integráció | ViaNexis",
  metaDescription:
    "Meglévő GPS/telematikai rendszer összekapcsolása a ViaNexisszel dokumentációhoz és operatív folyamatokhoz — nem folyamatos flottakövetés.",
  navLabel: "Telematikai integrációk",
  heroTitle: "Már van GPS-rendszere? Nem kell lecserélnie.",
  heroSubtitle:
    "A ViaNexis a meglévő telematikai rendszerét összekapcsolja a fuvarfolyamatokkal, dokumentumokkal és operációs munkával. A kompatibilitás szolgáltatótól és integrációs megállapodástól függ.",
  whyTitle: "Miért integráljuk a meglévő telematikát?",
  whyBody:
    "Ha már van működő GPS/telematikai szolgáltatója, a ViaNexis nem kényszerít cserére. A szükséges hely-, idő- és járműadatokat a meglévő rendszerből veszi át a dokumentációhoz és a munkafolyamatokhoz.",
  usesTitle: "Mire használja a ViaNexis az adatokat?",
  usesCurrentTitle: "Jelenlegi felhasználás",
  usesCurrent: [
    "Dokumentum idő/hely bizonyítás",
    "CMR aláírás hely/idő",
    "Walkaround / háttér ellenőrzőlista helybizonyítás",
    "Menetlevél hely/idő",
    "Érkezési és kiválasztott fuvaresemények",
  ],
  usesPlannedTitle: "Tervezett / szolgáltatófüggő",
  usesPlanned: [
    "Kilométeróra",
    "Hőmérséklet",
    "Tahográf",
    "Szervizadatok",
    "ETA",
    "Üzemanyag",
    "Pótkocsi-kapcsolat",
  ],
  existingTitle: "Ha már van telematikai szolgáltatója",
  existingBody:
    "A ViaNexis integrálja a szolgáltató adatait. Ön megtartja a meglévő előfizetését. A ViaNexis telematikai integrációs díjat számít fel; a szolgáltató saját díja külön marad, hacsak nincs ViaNexis viszonteladói szerződés.",
  noProviderTitle: "Ha nincs telematikai szolgáltatója",
  noProviderBody:
    "A ViaNexis Sofőr alkalmazás pontszerű, munkafolyamat-alapú helybizonyítást ad (ellenőrzőlista, érkezés, CMR, menetlevél, mérföldkövek). Ez nem folyamatos flottakövetési díj.",
  providersTitle: "Szolgáltató példák és státusz",
  providersIntro:
    "Kompatibilis telematikai szolgáltatók integrálhatók. Az alábbi nevek példák — nem mind élő adapter.",
  providersNote:
    "Ne tekintse „integráltnak” a szolgáltatót, amíg a státusz nem Supported és az adapter nincs élesítve.",
  pricingTitle: "Árazás",
  pricingBase: "Telematikai integrációs alapdíj: 79 EUR / cég / hó",
  pricingBandsIntro: "Aktív leképezett járművek sávos díja (a teljes darabszámra érvényes, nem progresszív):",
  pricingBands: [
    "1–25 jármű: 3,00 EUR / jármű / hó",
    "26–100 jármű: 2,00 EUR / jármű / hó",
    "101–500 jármű: 1,50 EUR / jármű / hó",
    "501+: egyedi ajánlat",
  ],
  pricingProviderNote:
    "A szolgáltató saját előfizetése külön fizetendő, ha nem ViaNexis partneri/reseller csomag.",
  pricingNewProvider:
    "Új / még nem támogatott szolgáltató: egyedi integrációs felmérés szükséges (CUSTOM).",
  pricingClarification:
    "A meglévő külső telematika nem csökkenti automatikusan a ViaNexis egyéb moduljainak árát. A ViaNexis modulok saját operatív funkciót adnak; folyamatos ViaNexis GPS-flottakövetésért nem számlázunk.",
  securityTitle: "Biztonság és adatvédelem",
  securityBody:
    "A ViaNexis a konfigurált integrációból származó operatív és munkafolyamat-bizonyítási adatokat használ. Nem ígérünk 24/7 munkavállaló-megfigyelést. Hitelesítő adatok csak a kereskedelmi bevezetés után, biztonságos csatornán kerülnek bekérésre — soha az ajánlatkérő kérdőívben.",
  partnerTitle: "Telematikai szolgáltató?",
  partnerBody:
    "A ViaNexis szolgáltatói API-kat köthet be az operációs platformjába. Integrációs partnerség egyeztethető — titkos kereskedelmi feltételek nélkül.",
  partnerCta: "Integrációs partnerség",
  ctaTitle: "Kezdje a céges felméréssel",
  ctaAssessment: "Céges felmérés",
  ctaContact: "Kapcsolat",
  statusSupported: "Támogatott",
  statusPlanned: "Tervezett",
  statusDiscovery: "Felmérés szükséges",
};

export const telematicsIntegrationsEn: TelematicsIntegrationsPageContent = {
  metaTitle: "Telematics Integration | ViaNexis",
  metaDescription:
    "Connect an existing GPS/telematics system to ViaNexis for documentation and operational workflows — not continuous fleet surveillance.",
  navLabel: "Telematics integrations",
  heroTitle: "Already have a GPS system? You do not need to replace it.",
  heroSubtitle:
    "ViaNexis connects your existing telematics system to trip workflows, documents and operational work. Compatibility depends on the provider and the integration agreement.",
  whyTitle: "Why ViaNexis integrates existing telematics",
  whyBody:
    "If you already run a GPS/telematics provider, ViaNexis does not force a rip-and-replace. It reuses the location, time and vehicle data needed for documentation and operational workflows.",
  usesTitle: "What ViaNexis uses the data for",
  usesCurrentTitle: "Current uses",
  usesCurrent: [
    "Document time/location evidence",
    "CMR signature location/time",
    "Walkaround / background checklist location evidence",
    "Journey sheet location/time",
    "Arrival events and selected trip milestones",
  ],
  usesPlannedTitle: "Planned / provider-dependent",
  usesPlanned: [
    "Odometer",
    "Temperature",
    "Tachograph",
    "Service data",
    "ETA",
    "Fuel",
    "Trailer connection",
  ],
  existingTitle: "If you already have a telematics provider",
  existingBody:
    "ViaNexis integrates provider data. You keep your existing subscription. ViaNexis charges a telematics integration fee; the provider’s own fee stays separate unless a ViaNexis reseller contract exists.",
  noProviderTitle: "If you have no telematics provider",
  noProviderBody:
    "The ViaNexis Driver App provides point-based workflow location evidence (checklist, arrival, CMR, journey sheet, milestones). This is not a continuous fleet-tracking fee.",
  providersTitle: "Provider examples and status",
  providersIntro:
    "Compatible telematics providers can be integrated. Names below are examples — not every provider has a live adapter.",
  providersNote:
    "Do not treat a provider as “integrated” until status is Supported and the adapter is live.",
  pricingTitle: "Pricing",
  pricingBase: "Telematics Integration base fee: EUR 79 / company / month",
  pricingBandsIntro:
    "Active mapped vehicle bands (rate applies to the total count, not progressive tiers):",
  pricingBands: [
    "1–25 vehicles: EUR 3.00 / vehicle / month",
    "26–100 vehicles: EUR 2.00 / vehicle / month",
    "101–500 vehicles: EUR 1.50 / vehicle / month",
    "501+: custom quote",
  ],
  pricingProviderNote:
    "The provider’s own subscription is billed separately unless a ViaNexis partner/reseller package applies.",
  pricingNewProvider:
    "New / unsupported provider: discovery required (CUSTOM implementation fee).",
  pricingClarification:
    "Existing external telematics does not automatically reduce prices of unrelated ViaNexis modules. ViaNexis modules still deliver their own operational value; you are not charged for a duplicate ViaNexis continuous GPS service.",
  securityTitle: "Security and privacy",
  securityBody:
    "ViaNexis uses operational and workflow-evidence data from configured integrations. We do not promise 24/7 employee surveillance. Credentials are collected only after commercial onboarding over a secure channel — never in the quote questionnaire.",
  partnerTitle: "Telematics provider?",
  partnerBody:
    "ViaNexis can integrate provider APIs into its operational platform. Integration partnership can be discussed — without publishing confidential commercial terms.",
  partnerCta: "Integration partnership",
  ctaTitle: "Start with a company assessment",
  ctaAssessment: "Company assessment",
  ctaContact: "Contact",
  statusSupported: "Supported",
  statusPlanned: "Planned",
  statusDiscovery: "Discovery required",
};
