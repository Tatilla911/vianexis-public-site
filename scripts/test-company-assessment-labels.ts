/**
 * Company assessment customer-copy + 35-locale completeness regression tests.
 * Run: npx --yes tsx --test scripts/test-company-assessment-labels.ts
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  ASSESSMENT_RTL_LOCALES,
  canonicalizeAssessmentModules,
  COMMERCIAL_ASSESSMENT_MODULE_IDS,
  COMPANY_ASSESSMENT_FIELD_KEYS,
  COMPANY_ASSESSMENT_LOCALES,
  COMPANY_ASSESSMENT_MODULE_KEYS,
  COMPANY_ASSESSMENT_SHELL_KEYS,
  getCompanyAssessmentLabels,
  humanizeAssessmentKey,
  INDIA_DRIVER_ONLY_LOCALES,
  isAssessmentRtlLocale,
  looksLikeRawInternalKey,
  resolveAssessmentFieldLabel,
  resolveAssessmentModuleLabel,
} from "../src/lib/i18n/company-assessment-labels";
import {
  formatContactLanguageLabel,
  PUBLIC_SITE_LOCALE_COUNT,
} from "../src/lib/i18n/language-registry";
import { locales } from "../src/lib/i18n/locales";
import { switchLocalePath } from "../src/lib/i18n/paths";
import {
  missingRequiredIntegrationNames,
  normalizeAssessmentIntegrations,
} from "../src/lib/company-assessment-integrations";
import { normalizeAssessmentRollout } from "../src/lib/company-assessment-rollout";

const KNOWN_RAW_KEYS = [
  "monthlyTrips",
  "dailyActiveTrips",
  "domesticSharePercent",
  "euSharePercent",
  "nightWeekendDispatch",
  "support247",
  "multiStop",
  "subcontractedTrips",
  "operatingCountries",
  "driversCount",
  "legalName",
  "plannedStartDate",
  "customDevNeeded",
  "emailImport",
] as const;

test("A: exactly 35 assessment system locales", () => {
  assert.equal(PUBLIC_SITE_LOCALE_COUNT, 35);
  assert.equal(locales.length, 35);
  assert.equal(COMPANY_ASSESSMENT_LOCALES.length, 35);
  assert.deepEqual([...COMPANY_ASSESSMENT_LOCALES].sort(), [...locales].sort());
});

test("B: Arabic included", () => {
  assert.ok(COMPANY_ASSESSMENT_LOCALES.includes("ar"));
  assert.ok(ASSESSMENT_RTL_LOCALES.includes("ar"));
  assert.equal(isAssessmentRtlLocale("ar"), true);
  assert.equal(isAssessmentRtlLocale("hu"), false);
});

test("C: India Driver-App-only languages excluded", () => {
  for (const code of INDIA_DRIVER_ONLY_LOCALES) {
    assert.equal(
      (COMPANY_ASSESSMENT_LOCALES as readonly string[]).includes(code),
      false,
      `India-only locale ${code} must not be in assessment catalog`,
    );
  }
});

test("looksLikeRawInternalKey detects camelCase and snake_case", () => {
  assert.equal(looksLikeRawInternalKey("monthlyTrips"), true);
  assert.equal(looksLikeRawInternalKey("nightWeekendDispatch"), true);
  assert.equal(looksLikeRawInternalKey("driver_app"), true);
  assert.equal(looksLikeRawInternalKey("translation.key.path"), true);
  assert.equal(looksLikeRawInternalKey("Estimated monthly trips"), false);
  assert.equal(looksLikeRawInternalKey("Havi fuvarok becsült száma"), false);
  assert.equal(looksLikeRawInternalKey("ADR"), false);
  assert.equal(looksLikeRawInternalKey("TMS"), false);
  assert.equal(looksLikeRawInternalKey("API"), false);
});

test("humanizeAssessmentKey never returns raw camelCase id", () => {
  const out = humanizeAssessmentKey("monthlyTrips");
  assert.equal(looksLikeRawInternalKey(out), false);
  assert.notEqual(out, "monthlyTrips");
  assert.match(out, /monthly trips/i);
});

test("D/E: HU and EN golden copy preserved", () => {
  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.equal(hu.fields.monthlyTrips, "Havi fuvarok becsült száma");
  assert.equal(hu.fields.dailyActiveTrips, "Napi aktív fuvarok átlagos száma");
  assert.equal(hu.fields.domesticSharePercent, "Belföldi fuvarok aránya (%)");
  assert.equal(hu.fields.multiStop, "Több megállós fuvarok");
  assert.equal(hu.fields.adr, "ADR / veszélyes áru");
  assert.equal(hu.fields.support247, "24/7 működés vagy támogatási igény");
  assert.equal(hu.yes, "Igen");
  assert.equal(hu.no, "Nem");
  assert.equal(en.fields.monthlyTrips, "Estimated monthly trips");
  assert.equal(en.fields.dailyActiveTrips, "Average active trips per day");
  assert.equal(
    en.fields.nightWeekendDispatch,
    "Night / weekend dispatch operations",
  );
  assert.equal(
    en.fields.support247,
    "24/7 operations or support requirement",
  );
  assert.equal(en.yes, "Yes");
  assert.equal(en.no, "No");
  assert.equal(hu.fields.registeredOffice, "Székhely");
  assert.equal(hu.fields.operatingSites, "Telephelyek");
  assert.equal(hu.fields.addOperatingSite, "Telephely hozzáadása");
  assert.equal(hu.fields.billingAddress, "Számlázási cím");
  assert.equal(
    hu.fields.billingAddressSameAsRegisteredOffice,
    "A számlázási cím megegyezik a székhellyel",
  );
  assert.equal(en.fields.registeredOffice, "Registered office");
  assert.equal(en.fields.operatingSites, "Operating sites");
  assert.equal(hu.fields.transportScope, "Fuvarozási hatókör");
  assert.equal(hu.fields.transportScopeDomestic, "Belföldi fuvarozás");
  assert.equal(hu.fields.transportScopeInternational, "Nemzetközi fuvarozás");
  assert.equal(hu.fields.transportScopeMixed, "Vegyes");
  assert.equal(en.fields.transportScope, "Transport scope");
  assert.equal(en.fields.transportScopeDomestic, "Domestic transport");
  assert.equal(en.fields.transportScopeInternational, "International transport");
  assert.equal(en.fields.transportScopeMixed, "Mixed");
});

test("F: all 35 locales complete for shell/fields/modules", () => {
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of COMPANY_ASSESSMENT_SHELL_KEYS) {
      const value = String((labels as Record<string, unknown>)[key] ?? "");
      assert.ok(value.trim().length > 0, `${locale} missing shell.${key}`);
      assert.equal(
        looksLikeRawInternalKey(value),
        false,
        `${locale} shell.${key} looks raw: ${value}`,
      );
    }
    for (const key of COMPANY_ASSESSMENT_FIELD_KEYS) {
      const resolved = resolveAssessmentFieldLabel(labels, key);
      assert.ok(resolved.trim().length > 0, `${locale} empty field ${key}`);
      assert.equal(
        looksLikeRawInternalKey(resolved),
        false,
        `${locale} raw field ${key}: ${resolved}`,
      );
      assert.notEqual(resolved, key, `${locale} field label equals id ${key}`);
    }
    for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
      const resolved = resolveAssessmentModuleLabel(labels, key);
      assert.ok(resolved.trim().length > 0, `${locale} empty module ${key}`);
      assert.equal(
        looksLikeRawInternalKey(resolved),
        false,
        `${locale} raw module ${key}: ${resolved}`,
      );
      assert.notEqual(resolved, key, `${locale} module label equals id ${key}`);
    }
  }
});

test("G: known raw keys absent from resolved labels across all locales", () => {
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of KNOWN_RAW_KEYS) {
      const resolved = resolveAssessmentFieldLabel(labels, key);
      assert.notEqual(resolved, key);
      assert.equal(looksLikeRawInternalKey(resolved), false);
    }
  }
});

test("H/I: internal field and module ids remain stable", () => {
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("monthlyTrips"));
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("support247"));
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("legalName"));
  assert.ok(COMPANY_ASSESSMENT_MODULE_KEYS.includes("driver_app"));
  assert.ok(COMPANY_ASSESSMENT_MODULE_KEYS.includes("custom_workflow"));
  assert.ok(COMPANY_ASSESSMENT_MODULE_KEYS.includes("company_operations"));
  assert.ok(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("driver_app"));
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("adr"), false);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("efti"), false);
  for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
    assert.match(key, /^[a-z][a-z0-9_]*$/);
  }
});

test("J/K/M: locale path switch preserves continue path + query token", () => {
  const path = "/hu/company-assessment/continue";
  const token = "?token=test-continue-token";
  const de = switchLocalePath(path, "de");
  const ar = switchLocalePath(de, "ar");
  const back = switchLocalePath(ar, "hu");
  assert.equal(de, "/de/company-assessment/continue");
  assert.equal(ar, "/ar/company-assessment/continue");
  assert.equal(back, "/hu/company-assessment/continue");
  // LanguageSwitcher appends window.location.search — simulate contract
  assert.equal(`${de}${token}`, "/de/company-assessment/continue?token=test-continue-token");
  assert.equal(`${ar}${token}`, "/ar/company-assessment/continue?token=test-continue-token");
});

test("L: Arabic RTL pack has Arabic script and localized labels", () => {
  const ar = getCompanyAssessmentLabels("ar");
  assert.equal(isAssessmentRtlLocale("ar"), true);
  const sample = [
    ar.title,
    ar.continueTitle,
    ar.fields.monthlyTrips,
    ar.fields.support247,
    ar.modules.driver_app,
    ar.yes,
    ar.no,
  ].join(" ");
  assert.ok(
    /[\u0600-\u06FF]/.test(sample),
    `Arabic pack should include Arabic script: ${sample.slice(0, 120)}`,
  );
  assert.notEqual(ar.fields.monthlyTrips, "monthlyTrips");
  assert.equal(looksLikeRawInternalKey(ar.fields.monthlyTrips), false);
});

test("N: summary shell strings localized for sample locales", () => {
  for (const locale of ["hu", "en", "de", "fr", "pl", "ro", "ar"] as const) {
    const labels = getCompanyAssessmentLabels(locale);
    assert.ok(labels.summaryTitle.trim());
    assert.ok(labels.summaryEmpty.trim());
    assert.ok(labels.yes.trim());
    assert.ok(labels.no.trim());
    assert.equal(looksLikeRawInternalKey(labels.summaryTitle), false);
  }
});

test("O: validation/error strings localized", () => {
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of ["invalidLink", "expiredLink", "loading"] as const) {
      assert.ok(labels[key].trim());
      assert.equal(looksLikeRawInternalKey(labels[key]), false);
      assert.ok(!labels[key].includes("monthlyTrips"));
    }
  }
});

test("section titles localized for all 7 steps across all locales", () => {
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    const titles = [
      labels.stepCompany,
      labels.stepSize,
      labels.stepOperations,
      labels.stepModules,
      labels.stepIntegrations,
      labels.stepRollout,
      labels.stepSummary,
    ];
    assert.equal(titles.length, 7);
    for (const title of titles) {
      assert.ok(title.length > 0);
      assert.equal(looksLikeRawInternalKey(title), false);
    }
  }
});

test("missing label falls back to EN then humanized text, not raw id", () => {
  const labels = getCompanyAssessmentLabels("en");
  const sparse = {
    ...labels,
    fields: {},
    modules: {},
  };
  const fieldOut = resolveAssessmentFieldLabel(sparse, "monthlyTrips");
  const moduleOut = resolveAssessmentModuleLabel(sparse, "driver_app");
  assert.equal(fieldOut, "Estimated monthly trips");
  assert.equal(moduleOut, "Driver app");
});

test("P: draft locales have no EN source-language leftovers", () => {
  const en = getCompanyAssessmentLabels("en");
  /** Native spellings that intentionally match EN (not fallback leftovers). */
  const allowedIdentical = new Set(["es|No", "it|No"]);
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    if (locale === "en" || locale === "hu") continue;
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of COMPANY_ASSESSMENT_SHELL_KEYS) {
      const value = String((labels as Record<string, unknown>)[key] ?? "");
      const source = String((en as Record<string, unknown>)[key] ?? "");
      if (value === source && allowedIdentical.has(`${locale}|${value}`)) {
        continue;
      }
      assert.notEqual(
        value,
        source,
        `${locale} shell.${key} still equals EN source`,
      );
    }
    for (const key of COMPANY_ASSESSMENT_FIELD_KEYS) {
      assert.notEqual(
        labels.fields[key],
        en.fields[key],
        `${locale} fields.${key} still equals EN source`,
      );
    }
    for (const key of Object.keys(en.helpers)) {
      assert.notEqual(
        labels.helpers[key],
        en.helpers[key],
        `${locale} helpers.${key} still equals EN source`,
      );
    }
    for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
      assert.notEqual(
        labels.modules[key],
        en.modules[key],
        `${locale} modules.${key} still equals EN source`,
      );
    }
  }
});

test("Q: placeholder tokens preserved vs EN", () => {
  const en = getCompanyAssessmentLabels("en");
  const tokenRe = /(\{[^{}]+\}|\{\{[^{}]+\}\})/g;
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    const pairs: Array<[string, string]> = [
      ...COMPANY_ASSESSMENT_SHELL_KEYS.map(
        (k) =>
          [
            String((en as Record<string, unknown>)[k] ?? ""),
            String((labels as Record<string, unknown>)[k] ?? ""),
          ] as [string, string],
      ),
      ...COMPANY_ASSESSMENT_FIELD_KEYS.map(
        (k) => [en.fields[k], labels.fields[k]] as [string, string],
      ),
      ...Object.keys(en.helpers).map(
        (k) => [en.helpers[k], labels.helpers[k]] as [string, string],
      ),
      ...COMPANY_ASSESSMENT_MODULE_KEYS.map(
        (k) => [en.modules[k], labels.modules[k]] as [string, string],
      ),
    ];
    for (const [source, value] of pairs) {
      const srcTokens = [...source.matchAll(tokenRe)].map((m) => m[0]).sort();
      const valTokens = [...value.matchAll(tokenRe)].map((m) => m[0]).sort();
      assert.deepEqual(
        valTokens,
        srcTokens,
        `${locale} placeholder mismatch for ${source}`,
      );
    }
  }
});

test("R: generated catalog has no empty customer-facing values", () => {
  for (const locale of COMPANY_ASSESSMENT_LOCALES) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of COMPANY_ASSESSMENT_SHELL_KEYS) {
      assert.ok(String((labels as Record<string, unknown>)[key] ?? "").trim());
    }
    for (const key of COMPANY_ASSESSMENT_FIELD_KEYS) {
      assert.ok(labels.fields[key]?.trim());
    }
    for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
      assert.ok(labels.modules[key]?.trim());
    }
  }
});

test("D: operatingCountries is not shown in the assessment wizard", () => {
  const wizard = readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/site/CompanyAssessmentContinueWizard.tsx",
    ),
    "utf8",
  );
  assert.equal(wizard.includes("operatingCountries"), false);
  assert.equal(wizard.includes("HU, DE, AT"), false);
  assert.equal(wizard.includes("transportScope"), true);
});

test("E: transport scope option labels are localized, not raw enums", () => {
  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.notEqual(hu.fields.transportScopeDomestic, "domestic");
  assert.notEqual(en.fields.transportScopeDomestic, "domestic");
  assert.equal(hu.fields.transportScopeDomestic, "Belföldi fuvarozás");
  assert.equal(en.fields.transportScopeInternational, "International transport");
});

test("commercial modules: wizard shows only the 8 operational modules", () => {
  const wizard = readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/site/CompanyAssessmentContinueWizard.tsx",
    ),
    "utf8",
  );
  assert.equal(wizard.includes("COMMERCIAL_ASSESSMENT_MODULE_IDS"), true);
  assert.equal(wizard.includes("company_portal"), false);
  assert.equal(wizard.includes("platform_admin_support"), false);
  assert.equal(wizard.includes("digital_signature"), false);
  assert.equal(wizard.includes("evidence_pack"), false);
  assert.equal(wizard.includes("truck_map"), false);
  assert.equal(wizard.includes("authority_access"), false);
  assert.equal(wizard.includes("custom_workflow"), false);
  assert.deepEqual([...COMMERCIAL_ASSESSMENT_MODULE_IDS], [
    "driver_app",
    "company_operations",
    "workshop",
    "warehouse",
    "vehicle_qr",
    "trailer_container_qr",
    "customs",
    "external_integrations",
  ]);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("adr"), false);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("efti"), false);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("ai"), false);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("cmr"), false);
  assert.equal(COMMERCIAL_ASSESSMENT_MODULE_IDS.includes("map"), false);
  assert.deepEqual(
    canonicalizeAssessmentModules(["company_portal", "adr", "efti", "api"]),
    ["company_operations", "external_integrations"],
  );
});

test("commercial module labels are localized HU/EN, not raw ids", () => {
  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.equal(hu.stepModules, "Mely ViaNexis modulokra van szükségük?");
  assert.equal(en.stepModules, "Which ViaNexis modules do you need?");
  assert.equal(hu.modules.driver_app, "Sofőralkalmazás");
  assert.equal(hu.modules.company_operations, "Diszpécseri / céges operációs modul");
  assert.equal(hu.modules.workshop, "Műhely modul");
  assert.equal(hu.modules.warehouse, "Raktári modul");
  assert.equal(hu.modules.vehicle_qr, "Járművek QR-kódos azonosítása");
  assert.equal(
    hu.modules.trailer_container_qr,
    "Pótkocsik és konténerek QR-kódos azonosítása",
  );
  assert.equal(hu.modules.customs, "Vámkezelési modul");
  assert.equal(hu.modules.external_integrations, "Külső integrációk");
  assert.equal(en.modules.company_operations, "Dispatcher / Company Operations");
  assert.equal(en.modules.workshop, "Workshop");
  assert.equal(en.modules.warehouse, "Warehouse");
  assert.equal(en.modules.vehicle_qr, "Vehicle QR Identification");
  assert.equal(
    en.modules.trailer_container_qr,
    "Trailer & Container QR Identification",
  );
  assert.equal(en.modules.customs, "Customs");
  assert.equal(en.modules.external_integrations, "External Integrations");
  for (const key of COMMERCIAL_ASSESSMENT_MODULE_IDS) {
    assert.notEqual(hu.modules[key], key);
    assert.notEqual(en.modules[key], key);
    assert.equal(looksLikeRawInternalKey(hu.modules[key]), false);
    assert.equal(looksLikeRawInternalKey(en.modules[key]), false);
  }
});

test("F: contact language shows localized display label, not raw hu", () => {
  assert.equal(formatContactLanguageLabel("hu", "hu"), "Magyar (HU)");
  assert.equal(formatContactLanguageLabel("hu", "en"), "Hungarian (HU)");
  assert.notEqual(formatContactLanguageLabel("hu", "hu"), "hu");
});

test("conditional integrations: wizard hides accounting and stale names", () => {
  const wizard = readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/site/CompanyAssessmentContinueWizard.tsx",
    ),
    "utf8",
  );
  assert.equal(wizard.includes("accounting"), false);
  assert.equal(wizard.includes("emailImport"), false);
  assert.equal(wizard.includes("INTEGRATION_TEXT_KEYS"), false);
  assert.equal(wizard.includes("password"), false);
  assert.equal(wizard.includes("apiKey"), false);
  assert.equal(wizard.includes("api_key"), false);
  assert.equal(wizard.includes("tmsEnabled"), true);
  assert.equal(wizard.includes("dataMigrationRequired"), true);

  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.equal(
    hu.fields.tmsEnabled,
    "Használnak jelenleg TMS / fuvarszervező rendszert?",
  );
  assert.equal(hu.fields.tms, "Milyen TMS rendszert használnak?");
  assert.equal(hu.fields.erpEnabled, "Használnak jelenleg ERP rendszert?");
  assert.equal(hu.fields.gpsEnabled, "Használnak GPS / telematikai rendszert?");
  assert.equal(
    hu.fields.documentStoreEnabled,
    "Használnak külső dokumentumtároló rendszert?",
  );
  assert.equal(
    hu.fields.customEnabled,
    "Szükségük van egyéb külső rendszer integrációjára?",
  );
  assert.equal(
    hu.fields.dataMigrationRequired,
    "Szükséges meglévő adatok migrálása?",
  );
  assert.equal(
    en.fields.tmsEnabled,
    "Do you currently use a TMS / transport management system?",
  );

  const tmsNo = normalizeAssessmentIntegrations({
    tmsEnabled: false,
    tms: "Transics",
  });
  assert.equal(tmsNo.tmsEnabled, false);
  assert.equal(tmsNo.tms, undefined);

  const tmsYes = normalizeAssessmentIntegrations({
    tmsEnabled: true,
    tms: "Transics",
  });
  assert.equal(tmsYes.tms, "Transics");
  assert.deepEqual(missingRequiredIntegrationNames(tmsYes), []);
  assert.deepEqual(
    missingRequiredIntegrationNames({ tmsEnabled: true, tms: "" }),
    ["tms"],
  );

  const erp = normalizeAssessmentIntegrations({ erpEnabled: true, erp: "SAP" });
  assert.equal(erp.erp, "SAP");
  const gps = normalizeAssessmentIntegrations({
    gpsEnabled: true,
    gps: "Webfleet",
  });
  assert.equal(gps.gps, "Webfleet");
  const telematics = normalizeAssessmentIntegrations({
    gpsEnabled: true,
    gps: "HolAzAutó",
    telematicsIntegrationRequested: true,
    telematicsVehicleCount: 50,
    telematicsCapabilities: { tachograph: true, fuel: false },
  });
  assert.equal(telematics.telematicsIntegrationRequested, true);
  assert.equal(telematics.telematicsVehicleCount, 50);
  assert.equal(telematics.telematicsCapabilities?.tachograph, true);
  assert.equal(telematics.telematicsCapabilities?.fuel, undefined);
  assert.equal(
    hu.fields.telematicsIntegrationRequested,
    "Kérik, hogy a ViaNexis integrálja ezt a telematikai szolgáltatót?",
  );
  assert.match(en.fields.telematicsVehicleCount, /active vehicles/);
  const noSecrets = readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/site/CompanyAssessmentContinueWizard.tsx",
    ),
    "utf8",
  );
  assert.equal(noSecrets.includes("apiKey"), false);
  assert.equal(noSecrets.includes("password"), false);
  const docs = normalizeAssessmentIntegrations({
    documentStoreEnabled: true,
    documentStore: "SharePoint",
  });
  assert.equal(docs.documentStore, "SharePoint");
  const custom = normalizeAssessmentIntegrations({
    customEnabled: true,
    customSystemName: "Partner API",
  });
  assert.equal(custom.customSystemName, "Partner API");

  const migrationOff = normalizeAssessmentIntegrations({
    tmsEnabled: false,
    dataMigrationRequired: true,
    migrationNotes: "import trips",
  });
  assert.equal(migrationOff.dataMigrationRequired, false);
  assert.equal(migrationOff.migrationNotes, undefined);

  const migrationOn = normalizeAssessmentIntegrations({
    tmsEnabled: true,
    tms: "Transics",
    dataMigrationRequired: true,
    migrationNotes: "trips from Transics",
  });
  assert.equal(migrationOn.dataMigrationRequired, true);
  assert.equal(migrationOn.migrationNotes, "trips from Transics");

  const legacy = normalizeAssessmentIntegrations({
    tms: "Transics",
    accounting: "Navision",
  });
  assert.equal(legacy.tmsEnabled, true);
  assert.equal(legacy.accounting, "Navision");
});

test("step 6 rollout: no SLA/language fields; training is conditional", () => {
  const wizard = readFileSync(
    join(
      dirname(fileURLToPath(import.meta.url)),
      "../src/components/site/CompanyAssessmentContinueWizard.tsx",
    ),
    "utf8",
  );
  // A / B: new wizard does not collect support language or SLA.
  assert.equal(wizard.includes("desiredSla"), false);
  assert.equal(wizard.includes("supportLanguage"), false);
  assert.equal(wizard.includes("ROLLOUT_DATE_KEYS"), true);
  assert.equal(wizard.includes("trainingNeeded"), true);
  assert.equal(wizard.includes("onsiteTraining"), true);
  assert.equal(wizard.includes("onboardingSupport"), true);
  assert.equal(wizard.includes("customDevNeeded"), true);

  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.equal(hu.fields.plannedStartDate, "Tervezett élesindítás dátuma");
  assert.equal(hu.fields.pilotDate, "Preferált pilot kezdés");
  assert.equal(hu.fields.pilotUsers, "Pilot felhasználók száma");
  assert.equal(hu.fields.trainingNeeded, "Oktatás szükséges");
  assert.equal(hu.fields.onsiteTraining, "Helyszíni oktatás preferált");
  assert.equal(hu.fields.onboardingSupport, "Bevezetési támogatás szükséges");
  assert.equal(hu.fields.customDevNeeded, "Egyedi fejlesztés szükséges");
  assert.equal(hu.fields.notes, "Egyéb megjegyzések");
  assert.equal(en.fields.plannedStartDate, "Planned go-live date");
  assert.equal(en.fields.pilotDate, "Preferred pilot start date");

  // C / D / E
  const dates = normalizeAssessmentRollout({
    plannedStartDate: "2026-10-01",
    pilotDate: "2026-09-15",
    pilotUsers: 8,
  });
  assert.equal(dates.plannedStartDate, "2026-10-01");
  assert.equal(dates.pilotDate, "2026-09-15");
  assert.equal(dates.pilotUsers, 8);
  assert.equal(
    normalizeAssessmentRollout({ pilotUsers: -1 }).pilotUsers,
    undefined,
  );

  // F: training NO does not submit stale on-site preference
  const trainingNo = normalizeAssessmentRollout({
    trainingNeeded: false,
    onsiteTraining: true,
  });
  assert.equal(trainingNo.trainingNeeded, false);
  assert.equal(trainingNo.onsiteTraining, undefined);

  // G: training YES keeps on-site preference
  const trainingYes = normalizeAssessmentRollout({
    trainingNeeded: true,
    onsiteTraining: true,
  });
  assert.equal(trainingYes.trainingNeeded, true);
  assert.equal(trainingYes.onsiteTraining, true);

  // H / I
  const flags = normalizeAssessmentRollout({
    onboardingSupport: true,
    customDevNeeded: true,
    notes: "later discovery",
  });
  assert.equal(flags.onboardingSupport, true);
  assert.equal(flags.customDevNeeded, true);
  assert.equal(flags.notes, "later discovery");

  // J: legacy payload remains readable
  const legacy = normalizeAssessmentRollout({
    desiredSla: "24/7",
    supportLanguage: "hu",
  });
  assert.equal(legacy.desiredSla, "24/7");
  assert.equal(legacy.supportLanguage, "hu");
});
