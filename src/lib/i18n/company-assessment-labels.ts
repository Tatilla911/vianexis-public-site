/** Company needs assessment wizard labels — prepared for all 35 locales. */
import type { Locale } from './types';

export type CompanyAssessmentLabels = {
  title: string;
  subtitle: string;
  continueTitle: string;
  save: string;
  saving: string;
  saved: string;
  next: string;
  back: string;
  submit: string;
  submitting: string;
  submittedTitle: string;
  submittedBody: string;
  summaryTitle: string;
  summaryEmpty: string;
  invalidLink: string;
  expiredLink: string;
  loading: string;
  stepCompany: string;
  stepSize: string;
  stepOperations: string;
  stepModules: string;
  stepIntegrations: string;
  stepRollout: string;
  stepSummary: string;
  /** Customer-facing field labels keyed by internal payload id (never rename keys). */
  fields: Record<string, string>;
  /** Optional helper text keyed by internal field id. */
  helpers: Record<string, string>;
  /** Module checkbox labels keyed by internal module id. */
  modules: Record<string, string>;
};

const EN_FIELDS: Record<string, string> = {
  // Section 1 — company official
  legalName: 'Legal company name',
  tradingName: 'Trading / brand name',
  country: 'Country of registration',
  headquarters: 'Headquarters location',
  postalCode: 'Postal code',
  city: 'City',
  street: 'Street address',
  vatNumber: 'VAT / tax number',
  registrationNumber: 'Company registration number',
  website: 'Website',
  billingEmail: 'Billing email',
  billingContact: 'Billing contact name',
  primaryContact: 'Primary contact name',
  phone: 'Phone number',
  contactLanguage: 'Preferred contact language',
  // Section 2 — company size
  driversCount: 'Number of drivers',
  dispatchersCount: 'Number of dispatchers',
  adminUsersCount: 'Number of admin users',
  documentationStaffCount: 'Documentation / office staff',
  workshopStaffCount: 'Workshop staff',
  ownedTrucksCount: 'Owned trucks',
  ownedTrailersCount: 'Owned trailers',
  subcontractedDriversCount: 'Subcontracted drivers',
  subcontractedCompaniesCount: 'Subcontractor companies',
  sitesCount: 'Number of sites / depots',
  estimatedActiveUsers: 'Estimated active users',
  operatingCountries: 'Operating countries',
  // Section 3 — operations
  monthlyTrips: 'Estimated monthly trips',
  dailyActiveTrips: 'Average active trips per day',
  domesticSharePercent: 'Share of domestic trips (%)',
  euSharePercent: 'Share of trips within the EU (%)',
  multiStop: 'Multi-stop trips',
  adr: 'ADR / dangerous goods',
  customs: 'Trips requiring customs clearance',
  refrigerated: 'Refrigerated / temperature-controlled transport',
  container: 'Container transport',
  groupage: 'Groupage / consolidated freight',
  express: 'Express / urgent transport',
  subcontractedTrips: 'Trips handled by subcontractors',
  nightWeekendDispatch: 'Night / weekend dispatch operations',
  support247: '24/7 operations or support requirement',
  // Section 5 — integrations
  tms: 'Current TMS (transport management system)',
  erp: 'Current ERP system',
  accounting: 'Accounting / finance system',
  gps: 'GPS / telematics provider',
  documentStore: 'Document storage system',
  migrationNotes: 'Data migration notes',
  customIntegrationNotes: 'Custom integration notes',
  emailImport: 'Email-based document import',
  api: 'API integration required',
  sso: 'Single sign-on (SSO) required',
  exportFormats: 'Preferred export formats',
  // Section 6 — rollout
  plannedStartDate: 'Planned go-live date',
  pilotDate: 'Preferred pilot start date',
  desiredSla: 'Desired support / SLA level',
  supportLanguage: 'Preferred support language',
  pilotUsers: 'Number of users in the pilot',
  trainingNeeded: 'Training required',
  onsiteTraining: 'On-site training preferred',
  onboardingSupport: 'Onboarding support required',
  customDevNeeded: 'Custom development required',
  notes: 'Additional notes',
};

const HU_FIELDS: Record<string, string> = {
  legalName: 'Hivatalos cégnév',
  tradingName: 'Kereskedelmi / márkanév',
  country: 'Bejegyzés országa',
  headquarters: 'Székhely',
  postalCode: 'Irányítószám',
  city: 'Város',
  street: 'Utca, házszám',
  vatNumber: 'Adószám / ÁFA-szám',
  registrationNumber: 'Cégjegyzékszám',
  website: 'Weboldal',
  billingEmail: 'Számlázási e-mail',
  billingContact: 'Számlázási kapcsolattartó',
  primaryContact: 'Elsődleges kapcsolattartó',
  phone: 'Telefonszám',
  contactLanguage: 'Kapcsolattartás nyelve',
  driversCount: 'Sofőrök száma',
  dispatchersCount: 'Diszpécserek száma',
  adminUsersCount: 'Admin felhasználók száma',
  documentationStaffCount: 'Dokumentációs / irodai munkatársak',
  workshopStaffCount: 'Műhelymunkatársak',
  ownedTrucksCount: 'Saját teherautók száma',
  ownedTrailersCount: 'Saját pótkocsik / félpótkocsik száma',
  subcontractedDriversCount: 'Alvállalkozói sofőrök száma',
  subcontractedCompaniesCount: 'Alvállalkozó cégek száma',
  sitesCount: 'Telephelyek / depók száma',
  estimatedActiveUsers: 'Becsült aktív felhasználók',
  operatingCountries: 'Működési országok',
  monthlyTrips: 'Havi fuvarok becsült száma',
  dailyActiveTrips: 'Napi aktív fuvarok átlagos száma',
  domesticSharePercent: 'Belföldi fuvarok aránya (%)',
  euSharePercent: 'EU-n belüli fuvarok aránya (%)',
  multiStop: 'Több megállós fuvarok',
  adr: 'ADR / veszélyes áru',
  customs: 'Vámkezelést igénylő fuvarok',
  refrigerated: 'Hűtött / hőmérséklet-szabályozott fuvarok',
  container: 'Konténeres fuvarok',
  groupage: 'Gyűjtőfuvarok',
  express: 'Expressz / sürgős fuvarok',
  subcontractedTrips: 'Alvállalkozóval végzett fuvarok',
  nightWeekendDispatch: 'Éjszakai / hétvégi diszpécserszolgálat',
  support247: '24/7 működés vagy támogatási igény',
  tms: 'Jelenlegi TMS (fuvarszervező rendszer)',
  erp: 'Jelenlegi ERP rendszer',
  accounting: 'Könyvelési / pénzügyi rendszer',
  gps: 'GPS / telematikai szolgáltató',
  documentStore: 'Dokumentumtároló rendszer',
  migrationNotes: 'Adatmigrációs megjegyzések',
  customIntegrationNotes: 'Egyedi integrációs megjegyzések',
  emailImport: 'E-mail alapú dokumentumimport',
  api: 'API-integráció szükséges',
  sso: 'Egyszeri bejelentkezés (SSO) szükséges',
  exportFormats: 'Preferált exportformátumok',
  plannedStartDate: 'Tervezett élesindítás dátuma',
  pilotDate: 'Preferált pilot kezdés',
  desiredSla: 'Kívánt támogatási / SLA szint',
  supportLanguage: 'Preferált támogatási nyelv',
  pilotUsers: 'Pilot felhasználók száma',
  trainingNeeded: 'Oktatás szükséges',
  onsiteTraining: 'Helyszíni oktatás preferált',
  onboardingSupport: 'Bevezetési támogatás szükséges',
  customDevNeeded: 'Egyedi fejlesztés szükséges',
  notes: 'Egyéb megjegyzések',
};

const EN_HELPERS: Record<string, string> = {
  monthlyTrips: 'An estimated average monthly volume is sufficient.',
  dailyActiveTrips: 'An approximate daily average is enough.',
  domesticSharePercent: 'Enter an estimated percentage between 0 and 100%.',
  euSharePercent: 'Enter an estimated percentage between 0 and 100%.',
  operatingCountries: 'Use country codes separated by commas (e.g. HU, DE, AT).',
  tms: 'If you are not sure, your technical contact can provide this later.',
  erp: 'If you are not sure, your technical contact can provide this later.',
  api: 'If you are not sure, your technical contact can provide this later.',
  sso: 'If you are not sure, your technical contact can provide this later.',
  migrationNotes: 'Briefly note systems or data that may need migration.',
  desiredSla: 'E.g. standard business hours, extended, or 24/7.',
};

const HU_HELPERS: Record<string, string> = {
  monthlyTrips: 'Az átlagos havi mennyiség becslése is megfelelő.',
  dailyActiveTrips: 'A napi átlag becslése is elegendő.',
  domesticSharePercent: 'Adjon meg egy becsült arányt 0 és 100% között.',
  euSharePercent: 'Adjon meg egy becsült arányt 0 és 100% között.',
  operatingCountries: 'Országkódok vesszővel elválasztva (pl. HU, DE, AT).',
  tms: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  erp: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  api: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  sso: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  migrationNotes: 'Röviden jelezze, milyen rendszerek vagy adatok migrációja merülhet fel.',
  desiredSla: 'Pl. munkaidős, kiterjesztett vagy 24/7 támogatás.',
};

const EN_MODULES: Record<string, string> = {
  driver_app: 'Driver app',
  company_portal: 'Company portal',
  platform_admin_support: 'Platform admin support',
  documents: 'Document management',
  cmr: 'CMR / consignment notes',
  digital_signature: 'Digital signature',
  checklist: 'Checklists',
  weekly_walkaround: 'Weekly vehicle walkaround',
  incident: 'Incident / claims handling',
  evidence_pack: 'Evidence pack',
  messaging: 'Messaging',
  notifications: 'Notifications',
  map: 'Map',
  truck_map: 'Truck map / routing',
  adr: 'ADR / dangerous goods module',
  customs: 'Customs module',
  ai: 'AI / OCR assistance',
  efti: 'eFTI readiness',
  authority_access: 'Authority access',
  external_partner: 'External partner access',
  api: 'API access',
  custom_report: 'Custom reports',
  custom_workflow: 'Custom workflows',
};

const HU_MODULES: Record<string, string> = {
  driver_app: 'Sofőralkalmazás',
  company_portal: 'Céges portál',
  platform_admin_support: 'Platform admin támogatás',
  documents: 'Dokumentumkezelés',
  cmr: 'CMR / fuvarlevelek',
  digital_signature: 'Digitális aláírás',
  checklist: 'Ellenőrzőlisták',
  weekly_walkaround: 'Heti járműbejárás',
  incident: 'Incidens- / kárkezelés',
  evidence_pack: 'Bizonyítékcsomag',
  messaging: 'Üzenetküldés',
  notifications: 'Értesítések',
  map: 'Térkép',
  truck_map: 'Kamiontérkép / útvonal',
  adr: 'ADR / veszélyes áru modul',
  customs: 'Vám modul',
  ai: 'AI / OCR támogatás',
  efti: 'eFTI felkészültség',
  authority_access: 'Hatósági hozzáférés',
  external_partner: 'Külső partner hozzáférés',
  api: 'API-hozzáférés',
  custom_report: 'Egyedi jelentések',
  custom_workflow: 'Egyedi munkafolyamatok',
};

const en: CompanyAssessmentLabels = {
  title: 'Company needs assessment',
  subtitle:
    'Quote request questionnaire — you can save and continue later via your secure link.',
  continueTitle: 'Continue company needs assessment',
  save: 'Save draft',
  saving: 'Saving…',
  saved: 'Draft saved',
  next: 'Continue',
  back: 'Back',
  submit: 'Submit assessment',
  submitting: 'Submitting…',
  submittedTitle: 'Assessment submitted',
  submittedBody:
    'Thank you. Your answers are locked. Our team will review them and prepare a quote suggestion.',
  summaryTitle: 'Review before submit',
  summaryEmpty: 'No answers yet in this section.',
  invalidLink: 'This continue link is invalid.',
  expiredLink: 'This continue link has expired.',
  loading: 'Loading assessment…',
  stepCompany: 'Official company data',
  stepSize: 'Company size and fleet',
  stepOperations: 'Trip operations',
  stepModules: 'Required ViaNexis modules',
  stepIntegrations: 'Integrations',
  stepRollout: 'Rollout and support',
  stepSummary: 'Summary',
  fields: EN_FIELDS,
  helpers: EN_HELPERS,
  modules: EN_MODULES,
};

const hu: CompanyAssessmentLabels = {
  title: 'Céges igényfelmérés',
  subtitle:
    'Árajánlatkérés kérdőív — menthető, később biztonságos linken folytatható.',
  continueTitle: 'Igényfelmérés folytatása',
  save: 'Piszkozat mentése',
  saving: 'Mentés…',
  saved: 'Piszkozat mentve',
  next: 'Tovább',
  back: 'Vissza',
  submit: 'Igényfelmérés beküldése',
  submitting: 'Beküldés…',
  submittedTitle: 'Igényfelmérés beküldve',
  submittedBody:
    'Köszönjük. A válaszok zárolt pillanatképet kaptak. Csapatunk felülvizsgálja és árazási javaslatot készít.',
  summaryTitle: 'Összegzés beküldés előtt',
  summaryEmpty: 'Ebben a részben még nincs válasz.',
  invalidLink: 'Ez a folytató link érvénytelen.',
  expiredLink: 'Ez a folytató link lejárt.',
  loading: 'Igényfelmérés betöltése…',
  stepCompany: 'Hivatalos cégadatok',
  stepSize: 'Cégméret és flotta',
  stepOperations: 'Fuvarozási működés',
  stepModules: 'Szükséges ViaNexis modulok',
  stepIntegrations: 'Integrációk',
  stepRollout: 'Bevezetés és támogatás',
  stepSummary: 'Összegzés',
  fields: HU_FIELDS,
  helpers: HU_HELPERS,
  modules: HU_MODULES,
};

function draft(overrides: Partial<CompanyAssessmentLabels> = {}): CompanyAssessmentLabels {
  return {
    ...en,
    ...overrides,
    fields: { ...en.fields, ...(overrides.fields ?? {}) },
    helpers: { ...en.helpers, ...(overrides.helpers ?? {}) },
    modules: { ...en.modules, ...(overrides.modules ?? {}) },
  };
}

export const companyAssessmentLabels: Record<Locale, CompanyAssessmentLabels> = {
  en,
  hu,
  de: draft({
    title: 'Unternehmensbedarfsanalyse',
    continueTitle: 'Bedarfsanalyse fortsetzen',
    stepCompany: 'Offizielle Firmendaten',
    stepSize: 'Unternehmensgröße und Flotte',
    stepOperations: 'Transportbetrieb',
    stepModules: 'Erforderliche ViaNexis-Module',
    stepIntegrations: 'Integrationen',
    stepRollout: 'Einführung und Support',
    stepSummary: 'Zusammenfassung',
  }),
  ro: draft({
    title: 'Evaluare nevoi companie',
    continueTitle: 'Continuă evaluarea',
    stepCompany: 'Date oficiale firmă',
    stepSize: 'Dimensiune și flotă',
    stepOperations: 'Operațiuni transport',
    stepModules: 'Module ViaNexis necesare',
    stepIntegrations: 'Integrări',
    stepRollout: 'Implementare și suport',
    stepSummary: 'Rezumat',
  }),
  sk: draft({
    title: 'Firemný prieskum potrieb',
    continueTitle: 'Pokračovať v prieskume',
    stepCompany: 'Oficiálne firemné údaje',
    stepSize: 'Veľkosť firmy a flotila',
    stepOperations: 'Prevádzka prepráv',
    stepModules: 'Požadované moduly ViaNexis',
    stepIntegrations: 'Integrácie',
    stepRollout: 'Nasadenie a podpora',
    stepSummary: 'Súhrn',
  }),
  pl: draft({
    title: 'Ocena potrzeb firmy',
    continueTitle: 'Kontynuuj ocenę',
    stepCompany: 'Oficjalne dane firmy',
    stepSize: 'Wielkość firmy i flota',
    stepOperations: 'Operacje transportowe',
    stepModules: 'Wymagane moduły ViaNexis',
    stepIntegrations: 'Integracje',
    stepRollout: 'Wdrożenie i wsparcie',
    stepSummary: 'Podsumowanie',
  }),
  cs: draft({
    title: 'Průzkum potřeb společnosti',
    continueTitle: 'Pokračovat v průzkumu',
    stepCompany: 'Oficiální údaje společnosti',
    stepSize: 'Velikost společnosti a flotila',
    stepOperations: 'Provoz přeprav',
    stepModules: 'Požadované moduly ViaNexis',
    stepIntegrations: 'Integrace',
    stepRollout: 'Zavedení a podpora',
    stepSummary: 'Shrnutí',
  }),
  bg: draft(),
  hr: draft(),
  sr: draft(),
  sl: draft(),
  et: draft(),
  lv: draft(),
  lt: draft(),
  fi: draft(),
  sv: draft(),
  da: draft(),
  nb: draft(),
  nl: draft({
    title: 'Bedrijfsbehoefteanalyse',
    continueTitle: 'Analyse voortzetten',
    stepCompany: 'Officiële bedrijfsgegevens',
    stepSize: 'Bedrijfsgrootte en vloot',
    stepOperations: 'Transportoperaties',
    stepModules: 'Benodigde ViaNexis-modules',
    stepIntegrations: 'Integraties',
    stepRollout: 'Uitrol en support',
    stepSummary: 'Samenvatting',
  }),
  fr: draft({
    title: "Évaluation des besoins de l'entreprise",
    continueTitle: "Poursuivre l'évaluation",
    stepCompany: "Données officielles de l'entreprise",
    stepSize: "Taille de l'entreprise et flotte",
    stepOperations: 'Opérations de transport',
    stepModules: 'Modules ViaNexis requis',
    stepIntegrations: 'Integrations',
    stepRollout: 'Déploiement et support',
    stepSummary: 'Résumé',
  }),
  es: draft({
    title: 'Evaluación de necesidades de la empresa',
    continueTitle: 'Continuar evaluación',
    stepCompany: 'Datos oficiales de la empresa',
    stepSize: 'Tamaño de la empresa y flota',
    stepOperations: 'Operaciones de transporte',
    stepModules: 'Módulos ViaNexis necesarios',
    stepIntegrations: 'Integraciones',
    stepRollout: 'Implantación y soporte',
    stepSummary: 'Resumen',
  }),
  pt: draft({
    title: 'Avaliação de necessidades da empresa',
    continueTitle: 'Continuar avaliação',
    stepCompany: 'Dados oficiais da empresa',
    stepSize: 'Dimensão da empresa e frota',
    stepOperations: 'Operações de transporte',
    stepModules: 'Módulos ViaNexis necessários',
    stepIntegrations: 'Integrações',
    stepRollout: 'Implementação e suporte',
    stepSummary: 'Resumo',
  }),
  it: draft({
    title: 'Valutazione delle esigenze aziendali',
    continueTitle: 'Continua valutazione',
    stepCompany: 'Dati ufficiali azienda',
    stepSize: 'Dimensione azienda e flotta',
    stepOperations: 'Operazioni di trasporto',
    stepModules: 'Moduli ViaNexis richiesti',
    stepIntegrations: 'Integrazioni',
    stepRollout: 'Avvio e supporto',
    stepSummary: 'Riepilogo',
  }),
  el: draft(),
  tr: draft(),
  uk: draft(),
  ru: draft(),
  sq: draft(),
  mk: draft(),
  bs: draft(),
  be: draft(),
  ga: draft(),
  mt: draft(),
  is: draft(),
  ar: draft(),
};

export function getCompanyAssessmentLabels(
  locale: Locale,
): CompanyAssessmentLabels {
  return companyAssessmentLabels[locale] ?? en;
}

/** Acronyms / short codes allowed in customer-facing UI. */
const ALLOWED_ACRONYMS = new Set([
  'ADR',
  'TMS',
  'ERP',
  'API',
  'AI',
  'OCR',
  'SSO',
  'CMR',
  'eFTI',
  'EFTI',
  'VAT',
  'GPS',
  'SLA',
  'EU',
  'HU',
  'DE',
  'AT',
]);

/**
 * Detects likely raw internal keys (camelCase, snake_case, dotted paths).
 * Used as a customer-UI guard — never show these as labels.
 */
export function looksLikeRawInternalKey(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  if (ALLOWED_ACRONYMS.has(t)) return false;
  if (/^[a-z]+(?:[A-Z][a-z0-9]*)+$/.test(t)) return true; // camelCase
  if (/^[a-z][a-z0-9]*(?:_[a-z0-9]+)+$/.test(t)) return true; // snake_case
  if (/^[a-z][a-z0-9]*(?:\.[a-z][a-z0-9]*)+$/.test(t)) return true; // dotted path
  return false;
}

/** Controlled humanized fallback — never returns the raw key as-is. */
export function humanizeAssessmentKey(key: string): string {
  const spaced = key
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  if (!spaced) return 'Field';
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function resolveAssessmentFieldLabel(
  labels: CompanyAssessmentLabels,
  key: string,
): string {
  const mapped = labels.fields[key]?.trim();
  if (mapped && !looksLikeRawInternalKey(mapped)) return mapped;
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn(`[company-assessment] Missing customer label for field: ${key}`);
  }
  return humanizeAssessmentKey(key);
}

export function resolveAssessmentModuleLabel(
  labels: CompanyAssessmentLabels,
  key: string,
): string {
  const mapped = labels.modules[key]?.trim();
  if (mapped && !looksLikeRawInternalKey(mapped)) return mapped;
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn(`[company-assessment] Missing customer label for module: ${key}`);
  }
  return humanizeAssessmentKey(key);
}

export function resolveAssessmentHelper(
  labels: CompanyAssessmentLabels,
  key: string,
): string | undefined {
  const h = labels.helpers[key]?.trim();
  return h || undefined;
}

/** All known field keys rendered by the wizard (internal contract). */
export const COMPANY_ASSESSMENT_FIELD_KEYS = Object.keys(EN_FIELDS);

/** All known module option keys stored in payload.modules. */
export const COMPANY_ASSESSMENT_MODULE_KEYS = Object.keys(EN_MODULES);
