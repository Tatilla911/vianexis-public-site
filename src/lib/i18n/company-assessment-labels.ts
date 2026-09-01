/**
 * Company needs assessment wizard labels — 35 public-site locales.
 *
 * Architecture:
 * - Golden HU/EN live here (manually approved, never machine-overwritten).
 * - Remaining locales come from company-assessment-labels.generated.ts
 *   (machine draft from EN via scripts/generate-company-assessment-labels.py).
 * - India Driver-App-only languages are excluded from this catalog.
 */
import type { Locale } from './types';
import { companyAssessmentLabelsGenerated } from './company-assessment-labels.generated';
import { ADDRESS_FIELD_DRAFTS } from './company-assessment-address-field-drafts';
import { TRANSPORT_SCOPE_FIELD_DRAFTS } from './company-assessment-transport-scope-drafts';
import { COMMERCIAL_MODULE_LABEL_DRAFTS } from './company-assessment-module-drafts';
import { INTEGRATION_FIELD_DRAFTS, INTEGRATION_HELPER_DRAFTS } from './company-assessment-integration-drafts';
import { TELEMATICS_FIELD_DRAFTS } from './company-assessment-telematics-drafts';
import { locales } from './locales';

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
  yes: string;
  no: string;
  /** Customer-facing field labels keyed by internal payload id (never rename keys). */
  fields: Record<string, string>;
  /** Optional helper text keyed by internal field id. */
  helpers: Record<string, string>;
  /** Module checkbox labels keyed by internal module id. */
  modules: Record<string, string>;
};

const EN_FIELDS: Record<string, string> = {
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
  tmsEnabled: 'Do you currently use a TMS / transport management system?',
  tms: 'Which TMS do you use?',
  erpEnabled: 'Do you currently use an ERP system?',
  erp: 'Which ERP system do you use?',
  gpsEnabled: 'Do you currently use a GPS / telematics system?',
  gps: 'Which GPS / telematics provider do you use?',
  telematicsIntegrationRequested:
    'Do you want ViaNexis to integrate this telematics provider?',
  telematicsVehicleCount:
    'How many active vehicles should be mapped for telematics integration?',
  telematicsCapTachograph: 'Tachograph data interest (optional)',
  telematicsCapTemperature: 'Temperature data interest (optional)',
  telematicsCapOdometer: 'Odometer data interest (optional)',
  telematicsCapFuel: 'Fuel data interest (optional)',
  telematicsCapLivePosition: 'Live position / event data interest (optional)',
  documentStoreEnabled:
    'Do you currently use an external document storage system?',
  documentStore: 'Which document storage system do you use?',
  customEnabled: 'Do you need any other external system integration?',
  customSystemName: 'Which system would you like to connect to ViaNexis?',
  customIntegrationNotes: 'Additional integration notes (optional)',
  dataMigrationRequired: 'Do you need to migrate existing data?',
  migrationNotes: 'Which data / from which system would you like to migrate?',
  integrationSystemRequired: 'Please name the system.',
  accounting: 'Accounting / finance system',
  emailImport: 'Email-based document import',
  api: 'API integration required',
  sso: 'Single sign-on (SSO) required',
  exportFormats: 'Preferred export formats',
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
  registeredOffice: 'Registered office',
  operatingSites: 'Operating sites',
  addOperatingSite: 'Add operating site',
  removeOperatingSite: 'Remove operating site',
  billingAddress: 'Billing address',
  billingAddressSameAsRegisteredOffice:
    'Billing address is the same as the registered office',
  addressCountry: 'Country',
  siteName: 'Site name',
  siteType: 'Site type',
  siteActive: 'Active site',
  siteTypeDepot: 'Depot',
  siteTypeWarehouse: 'Warehouse',
  siteTypeOffice: 'Office',
  siteTypeWorkshop: 'Workshop',
  siteTypeParkingYard: 'Parking yard',
  siteTypeOther: 'Other',
  transportScope: 'Transport scope',
  transportScopeDomestic: 'Domestic transport',
  transportScopeInternational: 'International transport',
  transportScopeMixed: 'Mixed',
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
  tmsEnabled: 'Használnak jelenleg TMS / fuvarszervező rendszert?',
  tms: 'Milyen TMS rendszert használnak?',
  erpEnabled: 'Használnak jelenleg ERP rendszert?',
  erp: 'Milyen ERP rendszert használnak?',
  gpsEnabled: 'Használnak GPS / telematikai rendszert?',
  gps: 'Milyen GPS / telematikai szolgáltatót használnak?',
  telematicsIntegrationRequested:
    'Kérik, hogy a ViaNexis integrálja ezt a telematikai szolgáltatót?',
  telematicsVehicleCount:
    'Hány aktív járművet kellene telematikai integrációhoz leképezni?',
  telematicsCapTachograph: 'Tahográf adat érdeklődés (opcionális)',
  telematicsCapTemperature: 'Hőmérséklet adat érdeklődés (opcionális)',
  telematicsCapOdometer: 'Kilométeróra adat érdeklődés (opcionális)',
  telematicsCapFuel: 'Üzemanyag adat érdeklődés (opcionális)',
  telematicsCapLivePosition: 'Élő pozíció / eseményadat érdeklődés (opcionális)',
  documentStoreEnabled: 'Használnak külső dokumentumtároló rendszert?',
  documentStore: 'Milyen dokumentumtároló rendszert használnak?',
  customEnabled: 'Szükségük van egyéb külső rendszer integrációjára?',
  customSystemName: 'Milyen rendszerrel szeretnék összekapcsolni a ViaNexist?',
  customIntegrationNotes: 'További integrációs megjegyzések (opcionális)',
  dataMigrationRequired: 'Szükséges meglévő adatok migrálása?',
  migrationNotes: 'Milyen adatokat / rendszerből szeretnének migrálni?',
  integrationSystemRequired: 'Kérjük, nevezzék meg a rendszert.',
  accounting: 'Könyvelési / pénzügyi rendszer',
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
  registeredOffice: 'Székhely',
  operatingSites: 'Telephelyek',
  addOperatingSite: 'Telephely hozzáadása',
  removeOperatingSite: 'Telephely eltávolítása',
  billingAddress: 'Számlázási cím',
  billingAddressSameAsRegisteredOffice:
    'A számlázási cím megegyezik a székhellyel',
  addressCountry: 'Ország',
  siteName: 'Telephely neve',
  siteType: 'Típus',
  siteActive: 'Aktív telephely',
  siteTypeDepot: 'Depó',
  siteTypeWarehouse: 'Raktár',
  siteTypeOffice: 'Iroda',
  siteTypeWorkshop: 'Műhely',
  siteTypeParkingYard: 'Parkoló',
  siteTypeOther: 'Egyéb',
  transportScope: 'Fuvarozási hatókör',
  transportScopeDomestic: 'Belföldi fuvarozás',
  transportScopeInternational: 'Nemzetközi fuvarozás',
  transportScopeMixed: 'Vegyes',
};

const EN_HELPERS: Record<string, string> = {
  monthlyTrips: 'An estimated average monthly volume is sufficient.',
  dailyActiveTrips: 'An approximate daily average is enough.',
  domesticSharePercent: 'Enter an estimated percentage between 0 and 100%.',
  euSharePercent: 'Enter an estimated percentage between 0 and 100%.',
  operatingCountries: 'Use country codes separated by commas (e.g. HU, DE, AT).',
  tms: 'If you are not sure, your technical contact can provide this later.',
  erp: 'If you are not sure, your technical contact can provide this later.',
  gps: 'If you are not sure, your technical contact can provide this later.',
  documentStore:
    'If you are not sure, your technical contact can provide this later.',
  customSystemName:
    'Name the system only — no passwords, API keys, or account secrets.',
  api: 'If you are not sure, your technical contact can provide this later.',
  sso: 'If you are not sure, your technical contact can provide this later.',
  migrationNotes: 'Describe the data and the source system at a high level.',
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
  gps: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  documentStore:
    'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  customSystemName:
    'Csak a rendszer nevét adja meg — jelszót, API-kulcsot vagy fióktitkot ne.',
  api: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  sso: 'Ha ezt nem tudja, később a technikai kapcsolattartó is megadhatja.',
  migrationNotes:
    'Röviden jelezze, milyen adatok és melyik rendszerből kerülnének át.',
  desiredSla: 'Pl. munkaidős, kiterjesztett vagy 24/7 támogatás.',
};

const EN_MODULES: Record<string, string> = {
  driver_app: 'Driver app',
  company_operations: 'Dispatcher / Company Operations',
  workshop: 'Workshop',
  warehouse: 'Warehouse',
  vehicle_qr: 'Vehicle QR Identification',
  trailer_container_qr: 'Trailer & Container QR Identification',
  customs: 'Customs',
  external_integrations: 'External Integrations',
  company_portal: 'Dispatcher / Company Operations',
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
  company_operations: 'Diszpécseri / céges operációs modul',
  workshop: 'Műhely modul',
  warehouse: 'Raktári modul',
  vehicle_qr: 'Járművek QR-kódos azonosítása',
  trailer_container_qr: 'Pótkocsik és konténerek QR-kódos azonosítása',
  customs: 'Vámkezelési modul',
  external_integrations: 'Külső integrációk',
  company_portal: 'Diszpécseri / céges operációs modul',
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
  stepModules: 'Which ViaNexis modules do you need?',
  stepIntegrations: 'Integrations',
  stepRollout: 'Rollout and support',
  stepSummary: 'Summary',
  yes: 'Yes',
  no: 'No',
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
  stepModules: 'Mely ViaNexis modulokra van szükségük?',
  stepIntegrations: 'Integrációk',
  stepRollout: 'Bevezetés és támogatás',
  stepSummary: 'Összegzés',
  yes: 'Igen',
  no: 'Nem',
  fields: HU_FIELDS,
  helpers: HU_HELPERS,
  modules: HU_MODULES,
};

/** Golden HU/EN packs — source of truth for generation + regression tests. */
export const COMPANY_ASSESSMENT_GOLDEN = {
  en,
  hu,
} as const;

export { EN_FIELDS, HU_FIELDS, EN_HELPERS, HU_HELPERS, EN_MODULES, HU_MODULES };

/** Public-site assessment locales = canonical 35 (includes Arabic, excludes India Driver-only). */
export const COMPANY_ASSESSMENT_LOCALES: readonly Locale[] = locales;

/** India Driver-App-only languages — excluded from assessment/public system catalog. */
export const INDIA_DRIVER_ONLY_LOCALES = [
  'hi',
  'bn',
  'mr',
  'te',
  'ta',
  'gu',
  'kn',
  'pa',
] as const;

export const ASSESSMENT_RTL_LOCALES: readonly Locale[] = ['ar'];

export function isAssessmentRtlLocale(locale: Locale): boolean {
  return (ASSESSMENT_RTL_LOCALES as readonly string[]).includes(locale);
}

function withAddressFieldDrafts(
  locale: Locale,
  pack: CompanyAssessmentLabels,
): CompanyAssessmentLabels {
  const fieldDrafts = {
    ...(ADDRESS_FIELD_DRAFTS[locale] ?? {}),
    ...(TRANSPORT_SCOPE_FIELD_DRAFTS[locale] ?? {}),
    ...(INTEGRATION_FIELD_DRAFTS[locale] ?? {}),
    ...(TELEMATICS_FIELD_DRAFTS[locale] ?? {}),
  };
  const moduleDrafts = COMMERCIAL_MODULE_LABEL_DRAFTS[locale] ?? {};
  const helperDrafts = INTEGRATION_HELPER_DRAFTS[locale] ?? {};
  const nextFields =
    Object.keys(fieldDrafts).length === 0
      ? pack.fields
      : {
          ...fieldDrafts,
          ...pack.fields,
        };
  const nextModules =
    Object.keys(moduleDrafts).length === 0
      ? pack.modules
      : {
          ...moduleDrafts,
          ...pack.modules,
        };
  const nextHelpers =
    Object.keys(helperDrafts).length === 0
      ? pack.helpers
      : {
          ...helperDrafts,
          ...pack.helpers,
        };
  if (
    nextFields === pack.fields &&
    nextModules === pack.modules &&
    nextHelpers === pack.helpers
  ) {
    return pack;
  }
  return {
    ...pack,
    fields: nextFields,
    helpers: nextHelpers,
    modules: nextModules,
  };
}

/**
 * Full catalog: golden HU/EN override generated drafts so approved copy cannot regress.
 */
export const companyAssessmentLabels: Record<Locale, CompanyAssessmentLabels> = {
  ...Object.fromEntries(
    (Object.entries(companyAssessmentLabelsGenerated) as Array<
      [Locale, CompanyAssessmentLabels]
    >).map(([locale, pack]) => [locale, withAddressFieldDrafts(locale, pack)]),
  ),
  en,
  hu,
} as Record<Locale, CompanyAssessmentLabels>;

export function getCompanyAssessmentLabels(
  locale: Locale,
): CompanyAssessmentLabels {
  return companyAssessmentLabels[locale] ?? companyAssessmentLabels.en ?? en;
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
  if (/^[a-z]+(?:[A-Z][a-z0-9]*)+$/.test(t)) return true;
  if (/^[a-z][a-z0-9]*(?:_[a-z0-9]+)+$/.test(t)) return true;
  if (/^[a-z][a-z0-9]*(?:\.[a-z][a-z0-9]*)+$/.test(t)) return true;
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

function resolveWithFallback(
  localeMap: Record<string, string> | undefined,
  enMap: Record<string, string>,
  key: string,
  kind: 'field' | 'module',
): string {
  const mapped = localeMap?.[key]?.trim();
  if (mapped && !looksLikeRawInternalKey(mapped)) return mapped;
  const enMapped = enMap[key]?.trim();
  if (enMapped && !looksLikeRawInternalKey(enMapped)) {
    if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
      console.warn(
        `[company-assessment] Missing ${kind} label for key=${key}; falling back to EN`,
      );
    }
    return enMapped;
  }
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn(`[company-assessment] Missing customer label for ${kind}: ${key}`);
  }
  return humanizeAssessmentKey(key);
}

export function resolveAssessmentFieldLabel(
  labels: CompanyAssessmentLabels,
  key: string,
): string {
  return resolveWithFallback(labels.fields, EN_FIELDS, key, 'field');
}

export function resolveAssessmentModuleLabel(
  labels: CompanyAssessmentLabels,
  key: string,
): string {
  return resolveWithFallback(labels.modules, EN_MODULES, key, 'module');
}

export function resolveAssessmentHelper(
  labels: CompanyAssessmentLabels,
  key: string,
): string | undefined {
  const h = labels.helpers[key]?.trim();
  if (h) return h;
  const en = EN_HELPERS[key]?.trim();
  return en || undefined;
}

/** Shell/nav keys required on every locale pack. */
export const COMPANY_ASSESSMENT_SHELL_KEYS = [
  'title',
  'subtitle',
  'continueTitle',
  'save',
  'saving',
  'saved',
  'next',
  'back',
  'submit',
  'submitting',
  'submittedTitle',
  'submittedBody',
  'summaryTitle',
  'summaryEmpty',
  'invalidLink',
  'expiredLink',
  'loading',
  'stepCompany',
  'stepSize',
  'stepOperations',
  'stepModules',
  'stepIntegrations',
  'stepRollout',
  'stepSummary',
  'yes',
  'no',
] as const;

/** All known field keys rendered by the wizard (internal contract). */
export const COMPANY_ASSESSMENT_FIELD_KEYS = Object.keys(EN_FIELDS);

/**
 * Selectable commercial modules in the assessment wizard.
 * Legacy micro-feature keys remain in EN_MODULES for old payloads.
 */
export const COMMERCIAL_ASSESSMENT_MODULE_IDS = [
  'driver_app',
  'company_operations',
  'workshop',
  'warehouse',
  'vehicle_qr',
  'trailer_container_qr',
  'customs',
  'external_integrations',
] as const;

const COMMERCIAL_MODULE_SET = new Set<string>(COMMERCIAL_ASSESSMENT_MODULE_IDS);

const ASSESSMENT_MODULE_ALIASES: Record<
  string,
  (typeof COMMERCIAL_ASSESSMENT_MODULE_IDS)[number]
> = {
  company_portal: 'company_operations',
  external_partner: 'external_integrations',
  api: 'external_integrations',
};

/** Map stored module ids to the commercial list shown in the wizard. */
export function canonicalizeAssessmentModules(raw: unknown): string[] {
  const selected = new Set<string>();
  if (!Array.isArray(raw)) return [];
  for (const item of raw) {
    if (typeof item !== 'string') continue;
    const key = item.trim().toLowerCase();
    if (!key) continue;
    const mapped = ASSESSMENT_MODULE_ALIASES[key] ?? key;
    if (COMMERCIAL_MODULE_SET.has(mapped)) selected.add(mapped);
  }
  return COMMERCIAL_ASSESSMENT_MODULE_IDS.filter((id) => selected.has(id));
}

/** All known module option keys stored in payload.modules. */
export const COMPANY_ASSESSMENT_MODULE_KEYS = Object.keys(EN_MODULES);
