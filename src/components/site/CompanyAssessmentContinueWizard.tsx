"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getCompanyAssessmentLabels } from "@/lib/i18n/company-assessment-labels";
import type { Locale } from "@/lib/i18n/types";

type Payload = {
  companyOfficial?: Record<string, string | undefined>;
  companySize?: Record<string, number | string[] | undefined>;
  operations?: Record<string, number | boolean | undefined>;
  modules?: string[];
  integrations?: Record<string, string | boolean | string[] | undefined>;
  rollout?: Record<string, string | number | boolean | undefined>;
  currentStep?: string;
};

const STEPS = [
  "companyOfficial",
  "companySize",
  "operations",
  "modules",
  "integrations",
  "rollout",
  "summary",
] as const;

const MODULE_OPTIONS = [
  "driver_app",
  "company_portal",
  "platform_admin_support",
  "documents",
  "cmr",
  "digital_signature",
  "checklist",
  "weekly_walkaround",
  "incident",
  "evidence_pack",
  "messaging",
  "notifications",
  "map",
  "truck_map",
  "adr",
  "customs",
  "ai",
  "efti",
  "authority_access",
  "external_partner",
  "api",
  "custom_report",
  "custom_workflow",
];

function inputClass() {
  return "form-control w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25";
}

export function CompanyAssessmentContinueWizard({
  locale,
  token,
}: {
  locale: Locale;
  token: string;
}) {
  const labels = getCompanyAssessmentLabels(locale);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [payload, setPayload] = useState<Payload>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const step = STEPS[stepIndex];
  const stepTitle = useMemo(() => {
    switch (step) {
      case "companyOfficial":
        return labels.stepCompany;
      case "companySize":
        return labels.stepSize;
      case "operations":
        return labels.stepOperations;
      case "modules":
        return labels.stepModules;
      case "integrations":
        return labels.stepIntegrations;
      case "rollout":
        return labels.stepRollout;
      default:
        return labels.stepSummary;
    }
  }, [labels, step]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/company-assessments/continue/${encodeURIComponent(token)}`,
        );
        const body = (await res.json()) as {
          currentPayload?: Payload;
          submitted?: boolean;
          message?: string;
          error?: string;
        };
        if (cancelled) return;
        if (!res.ok) {
          const msg =
            res.status === 400
              ? labels.expiredLink
              : labels.invalidLink;
          setError(msg);
          setLoading(false);
          return;
        }
        setPayload(body.currentPayload ?? {});
        setSubmitted(Boolean(body.submitted));
        const idx = STEPS.indexOf(
          (body.currentPayload?.currentStep as (typeof STEPS)[number]) ??
            "companyOfficial",
        );
        setStepIndex(idx >= 0 ? idx : 0);
        setLoading(false);
      } catch {
        if (!cancelled) {
          setError(labels.invalidLink);
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token, labels.expiredLink, labels.invalidLink]);

  const save = useCallback(
    async (nextPayload: Payload, currentStep: string) => {
      setSaving(true);
      try {
        const res = await fetch(
          `/api/company-assessments/continue/${encodeURIComponent(token)}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              payload: { ...nextPayload, currentStep },
              currentStep,
            }),
          },
        );
        if (res.ok) {
          setSavedAt(new Date().toISOString());
        }
      } finally {
        setSaving(false);
      }
    },
    [token],
  );

  async function goNext() {
    const next = Math.min(stepIndex + 1, STEPS.length - 1);
    const nextStep = STEPS[next];
    const nextPayload = { ...payload, currentStep: nextStep };
    setPayload(nextPayload);
    setStepIndex(next);
    await save(nextPayload, nextStep);
  }

  async function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      await save({ ...payload, currentStep: "summary" }, "summary");
      const res = await fetch(
        `/api/company-assessments/continue/${encodeURIComponent(token)}/submit`,
        { method: "POST" },
      );
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(labels.invalidLink);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function setOfficial(key: string, value: string) {
    setPayload((p) => ({
      ...p,
      companyOfficial: { ...(p.companyOfficial ?? {}), [key]: value },
    }));
  }

  function setSize(key: string, value: string) {
    const num = value.trim() === "" ? undefined : Number(value);
    setPayload((p) => ({
      ...p,
      companySize: { ...(p.companySize ?? {}), [key]: Number.isFinite(num) ? num : undefined },
    }));
  }

  function setOps(key: string, value: string | boolean) {
    setPayload((p) => ({
      ...p,
      operations: {
        ...(p.operations ?? {}),
        [key]:
          typeof value === "boolean"
            ? value
            : value.trim() === ""
              ? undefined
              : Number(value),
      },
    }));
  }

  function setIntegration(key: string, value: string | boolean) {
    setPayload((p) => ({
      ...p,
      integrations: { ...(p.integrations ?? {}), [key]: value },
    }));
  }

  function setRollout(key: string, value: string | boolean | number) {
    setPayload((p) => ({
      ...p,
      rollout: { ...(p.rollout ?? {}), [key]: value },
    }));
  }

  if (loading) {
    return <p className="text-neutral-grey">{labels.loading}</p>;
  }
  if (error) {
    return <p className="text-danger">{error}</p>;
  }
  if (submitted) {
    return (
      <div className="rounded-md border border-success/30 bg-success/10 p-6">
        <h3 className="text-card-title">{labels.submittedTitle}</h3>
        <p className="mt-2 text-neutral-grey">{labels.submittedBody}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-subsection-title">{labels.continueTitle}</h2>
        <p className="text-body text-neutral-grey">{labels.subtitle}</p>
        <p className="mt-2 text-sm text-cyan-glow">
          {stepIndex + 1}/{STEPS.length}: {stepTitle}
        </p>
        {savedAt ? (
          <p className="mt-1 text-sm text-neutral-grey">
            {labels.saved}: {new Date(savedAt).toLocaleString()}
          </p>
        ) : null}
      </div>

      {step === "companyOfficial" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "legalName",
            "tradingName",
            "country",
            "headquarters",
            "postalCode",
            "city",
            "street",
            "vatNumber",
            "registrationNumber",
            "website",
            "billingEmail",
            "billingContact",
            "primaryContact",
            "phone",
            "contactLanguage",
          ].map((key) => (
            <label key={key} className="form-label">
              <span className="mb-1 block font-medium text-brand-ink">{key}</span>
              <input
                className={inputClass()}
                value={String(payload.companyOfficial?.[key] ?? "")}
                onChange={(e) => setOfficial(key, e.target.value)}
              />
            </label>
          ))}
        </div>
      ) : null}

      {step === "companySize" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "driversCount",
            "dispatchersCount",
            "adminUsersCount",
            "documentationStaffCount",
            "workshopStaffCount",
            "ownedTrucksCount",
            "ownedTrailersCount",
            "subcontractedDriversCount",
            "subcontractedCompaniesCount",
            "sitesCount",
            "estimatedActiveUsers",
          ].map((key) => (
            <label key={key} className="form-label">
              <span className="mb-1 block font-medium text-brand-ink">{key}</span>
              <input
                className={inputClass()}
                type="number"
                min={0}
                value={
                  payload.companySize?.[key] === undefined
                    ? ""
                    : String(payload.companySize?.[key])
                }
                onChange={(e) => setSize(key, e.target.value)}
              />
            </label>
          ))}
          <label className="form-label md:col-span-2">
            <span className="mb-1 block font-medium text-brand-ink">operatingCountries</span>
            <input
              className={inputClass()}
              placeholder="HU, DE, AT"
              value={
                Array.isArray(payload.companySize?.operatingCountries)
                  ? (payload.companySize?.operatingCountries as string[]).join(", ")
                  : ""
              }
              onChange={(e) =>
                setPayload((p) => ({
                  ...p,
                  companySize: {
                    ...(p.companySize ?? {}),
                    operatingCountries: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  },
                }))
              }
            />
          </label>
        </div>
      ) : null}

      {step === "operations" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {["monthlyTrips", "dailyActiveTrips", "domesticSharePercent", "euSharePercent"].map(
            (key) => (
              <label key={key} className="form-label">
                <span className="mb-1 block font-medium text-brand-ink">{key}</span>
                <input
                  className={inputClass()}
                  type="number"
                  value={
                    payload.operations?.[key] === undefined
                      ? ""
                      : String(payload.operations?.[key])
                  }
                  onChange={(e) => setOps(key, e.target.value)}
                />
              </label>
            ),
          )}
          {[
            "multiStop",
            "adr",
            "customs",
            "refrigerated",
            "container",
            "groupage",
            "express",
            "subcontractedTrips",
            "nightWeekendDispatch",
            "support247",
          ].map((key) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={Boolean(payload.operations?.[key])}
                onChange={(e) => setOps(key, e.target.checked)}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>
      ) : null}

      {step === "modules" ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {MODULE_OPTIONS.map((opt) => {
            const selected = payload.modules ?? [];
            const checked = selected.includes(opt);
            return (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    const next = new Set(selected);
                    if (e.target.checked) next.add(opt);
                    else next.delete(opt);
                    setPayload((p) => ({ ...p, modules: Array.from(next) }));
                  }}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
      ) : null}

      {step === "integrations" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {["tms", "erp", "accounting", "gps", "documentStore", "migrationNotes", "customIntegrationNotes"].map(
            (key) => (
              <label key={key} className="form-label md:col-span-2">
                <span className="mb-1 block font-medium text-brand-ink">{key}</span>
                <input
                  className={inputClass()}
                  value={String(payload.integrations?.[key] ?? "")}
                  onChange={(e) => setIntegration(key, e.target.value)}
                />
              </label>
            ),
          )}
          {["emailImport", "api", "sso"].map((key) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={Boolean(payload.integrations?.[key])}
                onChange={(e) => setIntegration(key, e.target.checked)}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>
      ) : null}

      {step === "rollout" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {["plannedStartDate", "pilotDate", "desiredSla", "supportLanguage"].map((key) => (
            <label key={key} className="form-label">
              <span className="mb-1 block font-medium text-brand-ink">{key}</span>
              <input
                className={inputClass()}
                value={String(payload.rollout?.[key] ?? "")}
                onChange={(e) => setRollout(key, e.target.value)}
              />
            </label>
          ))}
          <label className="form-label">
            <span className="mb-1 block font-medium text-brand-ink">pilotUsers</span>
            <input
              className={inputClass()}
              type="number"
              value={
                payload.rollout?.pilotUsers === undefined
                  ? ""
                  : String(payload.rollout.pilotUsers)
              }
              onChange={(e) =>
                setRollout(
                  "pilotUsers",
                  e.target.value.trim() === "" ? "" : Number(e.target.value),
                )
              }
            />
          </label>
          {["trainingNeeded", "onsiteTraining", "onboardingSupport", "customDevNeeded"].map(
            (key) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={Boolean(payload.rollout?.[key])}
                  onChange={(e) => setRollout(key, e.target.checked)}
                />
                <span>{key}</span>
              </label>
            ),
          )}
          <label className="form-label md:col-span-2">
            <span className="mb-1 block font-medium text-brand-ink">notes</span>
            <textarea
              className={`${inputClass()} min-h-24`}
              value={String(payload.rollout?.notes ?? "")}
              onChange={(e) => setRollout("notes", e.target.value)}
            />
          </label>
        </div>
      ) : null}

      {step === "summary" ? (
        <div className="rounded-md border border-navy-700 bg-navy-900/40 p-4">
          <h3 className="text-card-title">{labels.summaryTitle}</h3>
          <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap break-words text-xs text-neutral-grey">
            {JSON.stringify(payload, null, 2)}
          </pre>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border border-navy-600 px-4 py-2 text-brand-ink"
          onClick={() => void goBack()}
          disabled={stepIndex === 0 || saving || submitting}
        >
          {labels.back}
        </button>
        {step !== "summary" ? (
          <button
            type="button"
            className="rounded-md bg-cyan-accent px-4 py-2 font-medium text-navy-950"
            onClick={() => void goNext()}
            disabled={saving || submitting}
          >
            {labels.next}
          </button>
        ) : (
          <button
            type="button"
            className="rounded-md bg-cyan-accent px-4 py-2 font-medium text-navy-950"
            onClick={() => void handleSubmit()}
            disabled={saving || submitting}
          >
            {submitting ? labels.submitting : labels.submit}
          </button>
        )}
        <button
          type="button"
          className="rounded-md border border-cyan-accent/40 px-4 py-2 text-cyan-glow"
          onClick={() => void save({ ...payload, currentStep: step }, step)}
          disabled={saving || submitting}
        >
          {saving ? labels.saving : labels.save}
        </button>
      </div>
    </div>
  );
}
