/**
 * Company assessment customer-copy + 35-locale completeness regression tests.
 * Run: npx --yes tsx --test scripts/test-company-assessment-labels.ts
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  ASSESSMENT_RTL_LOCALES,
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
import { PUBLIC_SITE_LOCALE_COUNT } from "../src/lib/i18n/language-registry";
import { locales } from "../src/lib/i18n/locales";
import { switchLocalePath } from "../src/lib/i18n/paths";

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
