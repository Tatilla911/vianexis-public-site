/**
 * Company assessment customer-copy regression tests.
 * Run: npx --yes tsx --test scripts/test-company-assessment-labels.ts
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  COMPANY_ASSESSMENT_FIELD_KEYS,
  COMPANY_ASSESSMENT_MODULE_KEYS,
  getCompanyAssessmentLabels,
  humanizeAssessmentKey,
  looksLikeRawInternalKey,
  resolveAssessmentFieldLabel,
  resolveAssessmentModuleLabel,
} from "../src/lib/i18n/company-assessment-labels";

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

const MODULE_RAW_KEYS = [
  "driver_app",
  "company_portal",
  "weekly_walkaround",
  "digital_signature",
  "custom_workflow",
] as const;

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

test("A/B: all HU and EN field labels are customer-facing (no raw IDs)", () => {
  for (const locale of ["hu", "en"] as const) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of COMPANY_ASSESSMENT_FIELD_KEYS) {
      const resolved = resolveAssessmentFieldLabel(labels, key);
      assert.ok(
        resolved.length > 0,
        `${locale} empty label for ${key}`,
      );
      assert.equal(
        looksLikeRawInternalKey(resolved),
        false,
        `${locale} raw-looking label for ${key}: ${resolved}`,
      );
      assert.notEqual(
        resolved,
        key,
        `${locale} label equals internal key for ${key}`,
      );
    }
  }
});

test("C: known raw keys absent from resolved HU/EN labels", () => {
  for (const locale of ["hu", "en"] as const) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of KNOWN_RAW_KEYS) {
      const resolved = resolveAssessmentFieldLabel(labels, key);
      assert.notEqual(resolved, key);
      assert.equal(looksLikeRawInternalKey(resolved), false);
    }
  }
});

test("module options have localized customer labels", () => {
  for (const locale of ["hu", "en"] as const) {
    const labels = getCompanyAssessmentLabels(locale);
    for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
      const resolved = resolveAssessmentModuleLabel(labels, key);
      assert.notEqual(resolved, key);
      assert.equal(
        looksLikeRawInternalKey(resolved),
        false,
        `${locale} module raw label ${key}: ${resolved}`,
      );
    }
    for (const key of MODULE_RAW_KEYS) {
      assert.notEqual(resolveAssessmentModuleLabel(labels, key), key);
    }
  }
});

test("D: internal field key set is stable (contract)", () => {
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("monthlyTrips"));
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("support247"));
  assert.ok(COMPANY_ASSESSMENT_FIELD_KEYS.includes("legalName"));
  assert.ok(COMPANY_ASSESSMENT_MODULE_KEYS.includes("driver_app"));
  assert.ok(COMPANY_ASSESSMENT_MODULE_KEYS.includes("custom_workflow"));
});

test("E: option/module values remain internal snake_case ids", () => {
  for (const key of COMPANY_ASSESSMENT_MODULE_KEYS) {
    assert.match(key, /^[a-z][a-z0-9_]*$/);
  }
});

test("HU sample copy quality for operations fields", () => {
  const hu = getCompanyAssessmentLabels("hu");
  assert.equal(hu.fields.monthlyTrips, "Havi fuvarok becsült száma");
  assert.equal(hu.fields.dailyActiveTrips, "Napi aktív fuvarok átlagos száma");
  assert.equal(hu.fields.domesticSharePercent, "Belföldi fuvarok aránya (%)");
  assert.equal(hu.fields.multiStop, "Több megállós fuvarok");
  assert.equal(hu.fields.adr, "ADR / veszélyes áru");
  assert.equal(hu.fields.support247, "24/7 működés vagy támogatási igény");
});

test("EN sample copy quality for operations fields", () => {
  const en = getCompanyAssessmentLabels("en");
  assert.equal(en.fields.monthlyTrips, "Estimated monthly trips");
  assert.equal(en.fields.dailyActiveTrips, "Average active trips per day");
  assert.equal(en.fields.nightWeekendDispatch, "Night / weekend dispatch operations");
  assert.equal(en.fields.support247, "24/7 operations or support requirement");
});

test("section titles localized for all 7 steps", () => {
  for (const locale of ["hu", "en"] as const) {
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

test("missing label falls back to humanized text, not raw id", () => {
  const labels = getCompanyAssessmentLabels("en");
  const sparse = {
    ...labels,
    fields: {},
    modules: {},
  };
  const fieldOut = resolveAssessmentFieldLabel(sparse, "monthlyTrips");
  const moduleOut = resolveAssessmentModuleLabel(sparse, "driver_app");
  assert.notEqual(fieldOut, "monthlyTrips");
  assert.notEqual(moduleOut, "driver_app");
  assert.equal(looksLikeRawInternalKey(fieldOut), false);
  assert.equal(looksLikeRawInternalKey(moduleOut), false);
});

test("nav buttons localized", () => {
  const hu = getCompanyAssessmentLabels("hu");
  const en = getCompanyAssessmentLabels("en");
  assert.equal(hu.back, "Vissza");
  assert.equal(hu.next, "Tovább");
  assert.equal(hu.save, "Piszkozat mentése");
  assert.equal(hu.submit, "Igényfelmérés beküldése");
  assert.equal(en.back, "Back");
  assert.equal(en.next, "Continue");
  assert.equal(en.save, "Save draft");
  assert.equal(en.submit, "Submit assessment");
});
