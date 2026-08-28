import type { QuoteAnswers } from "./schema";
import { asModuleList } from "./normalize-helpers";

function parseExact(value: unknown): number | null {
  if (value == null || String(value).trim() === "") return null;
  const n = Number(String(value).replace(/[^\d]/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : null;
}

function preferExactOrBand(
  answers: QuoteAnswers,
  exactKey: string,
  bandKey: string,
): { exact: number | null; band: string | null } {
  const exact = parseExact(answers[exactKey]);
  const band =
    answers[bandKey] != null && String(answers[bandKey]).trim() !== ""
      ? String(answers[bandKey])
      : null;
  return { exact, band };
}

export type NormalizedPricingInputs = {
  driver_seats: number | string | null;
  vehicle_licences: number | string | null;
  office_seats: string | number | null;
  site_licences: string | number | null;
  module_flags: string[];
  trip_volume_band: string | null;
  document_volume_band: string | null;
  photo_volume_band: string | null;
  storage_band: string | null;
  ai_usage_band: string | null;
  ocr_usage_band: string | null;
  translation_usage_band: string | null;
  sms_band: string | null;
  email_band: string | null;
  integration_complexity: string;
  migration_complexity: string;
  security_complexity: string;
  support_package: string | null;
  rollout_type: string | null;
  setup_package: Record<string, unknown>;
  country_band: string | null;
  language_band: Record<string, unknown>;
  custom_requirements_present: boolean;
  path: string;
};

function complexityFromFlags(flags: string[]): string {
  if (flags.includes("high")) return "high";
  if (flags.includes("medium")) return "medium";
  if (flags.includes("low")) return "low";
  return "none";
}

export function normalizePricingInputs(
  answers: QuoteAnswers,
  path: string,
): NormalizedPricingInputs {
  const drivers = preferExactOrBand(answers, "drivers_exact", "drivers_count");
  const vehicles = preferExactOrBand(
    answers,
    "vehicles_exact",
    "vehicles_count",
  );

  const modules = asModuleList(answers);
  const aiFeatures = Array.isArray(answers.ai_features)
    ? answers.ai_features.map(String)
    : [];

  const integrationFlags: string[] = [];
  if (answers.integration_needed === "yes") integrationFlags.push("medium");
  if (answers.api_available === "no") integrationFlags.push("high");
  if (answers.reefer_telematics === "now") integrationFlags.push("medium");
  if (
    answers.uses_tms === "no" ||
    answers.integration_needed === "no"
  ) {
    integrationFlags.push("none");
  }

  const securityFlags: string[] = [];
  if (answers.security_special === "yes") securityFlags.push("medium");
  if (answers.sso_required === "yes") securityFlags.push("high");
  if (
    Array.isArray(answers.security_enterprise_features) &&
    answers.security_enterprise_features.length > 0
  ) {
    securityFlags.push("high");
  }

  const translationSelected =
    modules.includes("live_translation") ||
    aiFeatures.includes("live_translation") ||
    aiFeatures.includes("photo_translation");

  return {
    driver_seats: drivers.exact ?? drivers.band,
    vehicle_licences: vehicles.exact ?? vehicles.band,
    office_seats:
      answers.office_users_count != null
        ? String(answers.office_users_count)
        : null,
    site_licences:
      answers.sites_count != null ? String(answers.sites_count) : null,
    module_flags: modules,
    trip_volume_band:
      answers.trips_monthly != null ? String(answers.trips_monthly) : null,
    document_volume_band:
      answers.cmr_monthly != null ? String(answers.cmr_monthly) : null,
    photo_volume_band:
      answers.photos_monthly != null ? String(answers.photos_monthly) : null,
    storage_band: answers.retention != null ? String(answers.retention) : null,
    ai_usage_band:
      answers.wants_ai === "yes"
        ? aiFeatures.length
          ? `yes:${aiFeatures.length}`
          : "yes"
        : answers.wants_ai != null
          ? String(answers.wants_ai)
          : null,
    ocr_usage_band: aiFeatures.includes("doc_ocr") ? "selected" : null,
    translation_usage_band: translationSelected
      ? [
          answers.translation_users,
          answers.translation_frequency,
        ]
          .filter((v) => v != null && String(v) !== "")
          .map(String)
          .join("|") || "selected"
      : null,
    sms_band: answers.sms_band != null ? String(answers.sms_band) : null,
    email_band: answers.email_band != null ? String(answers.email_band) : null,
    integration_complexity: complexityFromFlags(
      integrationFlags.length ? integrationFlags : ["none"],
    ),
    migration_complexity:
      answers.migration_needed === "yes"
        ? "medium"
        : answers.migration_needed === "no"
          ? "none"
          : "unknown",
    security_complexity: complexityFromFlags(
      securityFlags.length ? securityFlags : ["none"],
    ),
    support_package:
      answers.support_package != null ? String(answers.support_package) : null,
    rollout_type:
      answers.rollout_type != null ? String(answers.rollout_type) : null,
    setup_package: {
      pilot_drivers: answers.pilot_drivers ?? null,
      pilot_vehicles: answers.pilot_vehicles ?? null,
      pilot_sites: answers.pilot_sites ?? null,
      pilot_duration: answers.pilot_duration ?? null,
      training_needed: answers.training_needed ?? null,
      target_start: answers.target_start ?? null,
    },
    country_band:
      answers.company_country != null ? String(answers.company_country) : null,
    language_band: {
      ui_language_count: answers.ui_language_count ?? null,
      driver_languages: answers.driver_languages ?? [],
      office_languages: answers.office_languages ?? [],
    },
    custom_requirements_present: Boolean(
      answers.custom_requirements &&
        String(answers.custom_requirements).trim().length > 0,
    ),
    path,
  };
}

export { asModuleList };
