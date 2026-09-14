"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  canonicalizeAssessmentModules,
  COMMERCIAL_ASSESSMENT_MODULE_IDS,
  getCompanyAssessmentLabels,
  isAssessmentRtlLocale,
  resolveAssessmentFieldLabel,
  resolveAssessmentHelper,
  resolveAssessmentModuleLabel,
} from "@/lib/i18n/company-assessment-labels";
import { getTrainingSupportCopy } from "@/lib/i18n/training-support-copy";
import {
  hasAnyExternalIntegration,
  missingRequiredIntegrationNames,
  normalizeAssessmentIntegrations,
  type AssessmentIntegrations,
} from "@/lib/company-assessment-integrations";
import {
  normalizeAssessmentRollout,
  type AssessmentRollout,
} from "@/lib/company-assessment-rollout";
import type { Locale } from "@/lib/i18n/types";
import {
  formatContactLanguageLabel,
  listLanguagesForPublicSite,
} from "@/lib/i18n/language-registry";

type PostalAddress = {
  country?: string;
  postalCode?: string;
  city?: string;
  streetAddress?: string;
};

type OperatingSite = PostalAddress & {
  name?: string;
  type?: string;
  active?: boolean;
};

type CompanyOfficial = {
  legalName?: string;
  tradingName?: string;
  country?: string;
  headquarters?: string;
  postalCode?: string;
  city?: string;
  street?: string;
  registeredOffice?: PostalAddress;
  operatingSites?: OperatingSite[];
  billingAddressSameAsRegisteredOffice?: boolean;
  billingAddress?: PostalAddress | null;
  vatNumber?: string;
  registrationNumber?: string;
  website?: string;
  billingEmail?: string;
  billingContact?: string;
  primaryContact?: string;
  phone?: string;
  contactLanguage?: string;
};

type Payload = {
  companyOfficial?: CompanyOfficial;
  companySize?: Record<string, number | string[] | undefined>;
  operations?: Record<string, number | boolean | string | undefined>;
  modules?: string[];
  integrations?: AssessmentIntegrations;
  rollout?: AssessmentRollout;
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

const MODULE_OPTIONS = COMMERCIAL_ASSESSMENT_MODULE_IDS;

const OFFICIAL_IDENTITY_KEYS = ["legalName", "tradingName"] as const;

const OFFICIAL_CONTACT_KEYS = [
  "vatNumber",
  "registrationNumber",
  "website",
  "billingEmail",
  "billingContact",
  "primaryContact",
  "phone",
] as const;

const ADDRESS_FIELD_KEYS = [
  "addressCountry",
  "postalCode",
  "city",
  "street",
] as const;

const SITE_TYPES = [
  "depot",
  "warehouse",
  "office",
  "workshop",
  "parking_yard",
  "other",
] as const;

const SITE_TYPE_LABEL_KEYS: Record<(typeof SITE_TYPES)[number], string> = {
  depot: "siteTypeDepot",
  warehouse: "siteTypeWarehouse",
  office: "siteTypeOffice",
  workshop: "siteTypeWorkshop",
  parking_yard: "siteTypeParkingYard",
  other: "siteTypeOther",
};

const TRANSPORT_SCOPES = ["domestic", "international", "mixed"] as const;

const TRANSPORT_SCOPE_LABEL_KEYS: Record<
  (typeof TRANSPORT_SCOPES)[number],
  string
> = {
  domestic: "transportScopeDomestic",
  international: "transportScopeInternational",
  mixed: "transportScopeMixed",
};

const SIZE_KEYS = [
  "driversCount",
  "dispatchersCount",
  "adminUsersCount",
  "documentationStaffCount",
  "workshopStaffCount",
  "ownedTrucksCount",
  "ownedTrailersCount",
  "subcontractedDriversCount",
  "subcontractedCompaniesCount",
  "estimatedActiveUsers",
] as const;

const OPS_NUMBER_KEYS = [
  "monthlyTrips",
  "dailyActiveTrips",
  "domesticSharePercent",
  "euSharePercent",
] as const;

const OPS_BOOL_KEYS = [
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
] as const;

const INTEGRATION_CATEGORIES = [
  {
    enabledKey: "tmsEnabled",
    nameKey: "tms",
  },
  {
    enabledKey: "erpEnabled",
    nameKey: "erp",
  },
  {
    enabledKey: "gpsEnabled",
    nameKey: "gps",
  },
  {
    enabledKey: "documentStoreEnabled",
    nameKey: "documentStore",
  },
  {
    enabledKey: "customEnabled",
    nameKey: "customSystemName",
  },
] as const;

const ROLLOUT_DATE_KEYS = ["plannedStartDate", "pilotDate"] as const;

const ROLLOUT_YES_NO_KEYS = [
  "onboardingSupport",
  "customDevNeeded",
] as const;

function inputClass(extra = "") {
  return `form-control w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25 ${extra}`.trim();
}

const LTR_FIELD_KEYS = new Set([
  "website",
  "billingEmail",
  "vatNumber",
  "registrationNumber",
  "phone",
  "postalCode",
  "addressCountry",
]);

function valueDir(key: string): "ltr" | undefined {
  return LTR_FIELD_KEYS.has(key) ? "ltr" : undefined;
}

function emptyAddress(): PostalAddress {
  return { country: "", postalCode: "", city: "", streetAddress: "" };
}

function emptySite(country = ""): OperatingSite {
  return {
    name: "",
    type: "depot",
    active: true,
    country,
    postalCode: "",
    city: "",
    streetAddress: "",
  };
}

function readAddress(raw: unknown): PostalAddress {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return emptyAddress();
  }
  const row = raw as Record<string, unknown>;
  return {
    country: String(row.country ?? ""),
    postalCode: String(row.postalCode ?? ""),
    city: String(row.city ?? ""),
    streetAddress: String(row.streetAddress ?? row.street ?? ""),
  };
}

function formatAddress(address: PostalAddress | null | undefined): string {
  if (!address) return "";
  const locality = [address.postalCode, address.city].filter(Boolean).join(" ");
  return [address.streetAddress, locality || undefined, address.country]
    .filter(Boolean)
    .join(", ");
}

function addressValue(address: PostalAddress, key: (typeof ADDRESS_FIELD_KEYS)[number]): string {
  if (key === "addressCountry") return address.country ?? "";
  if (key === "street") return address.streetAddress ?? "";
  return address[key] ?? "";
}

function patchAddress(
  address: PostalAddress,
  key: (typeof ADDRESS_FIELD_KEYS)[number],
  value: string,
): PostalAddress {
  if (key === "addressCountry") return { ...address, country: value };
  if (key === "street") return { ...address, streetAddress: value };
  return { ...address, [key]: value };
}

function hydrateOfficial(official: CompanyOfficial | undefined): CompanyOfficial {
  const current = official ?? {};
  const nested = readAddress(current.registeredOffice);
  const registeredOffice: PostalAddress = {
    country: nested.country || String(current.country ?? ""),
    postalCode: nested.postalCode || String(current.postalCode ?? ""),
    city: nested.city || String(current.city ?? ""),
    streetAddress:
      nested.streetAddress ||
      String(current.street ?? current.headquarters ?? ""),
  };
  const operatingSites = Array.isArray(current.operatingSites)
    ? current.operatingSites.map((site) => {
        const address = readAddress(site);
        return {
          name: String(site.name ?? ""),
          type: SITE_TYPES.includes(site.type as (typeof SITE_TYPES)[number])
            ? site.type
            : site.type === "parking"
              ? "parking_yard"
              : "other",
          active: site.active !== false,
          ...address,
        };
      })
    : [];
  const billingSame = current.billingAddressSameAsRegisteredOffice !== false;
  return {
    ...current,
    registeredOffice,
    operatingSites,
    billingAddressSameAsRegisteredOffice: billingSame,
    billingAddress: billingSame
      ? emptyAddress()
      : readAddress(current.billingAddress),
  };
}

function FieldLabel({
  label,
  helper,
}: {
  label: string;
  helper?: string;
}) {
  return (
    <span className="mb-1 block">
      <span className="block font-medium text-brand-ink">{label}</span>
      {helper ? (
        <span className="mt-0.5 block text-sm font-normal text-neutral-grey">
          {helper}
        </span>
      ) : null}
    </span>
  );
}

function formatDisplayValue(
  value: unknown,
  yesLabel: string,
  noLabel: string,
): string {
  if (value === undefined || value === null || value === "") return "—";
  if (typeof value === "boolean") return value ? yesLabel : noLabel;
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—";
  return String(value);
}

export function CompanyAssessmentContinueWizard({
  locale,
  token,
}: {
  locale: Locale;
  token: string;
}) {
  const labels = getCompanyAssessmentLabels(locale);
  const trainingSupport = getTrainingSupportCopy(locale);
  const yesNo = useMemo(
    () => ({ yes: labels.yes, no: labels.no }),
    [labels.yes, labels.no],
  );
  const isRtl = isAssessmentRtlLocale(locale);
  const field = useCallback(
    (key: string) => resolveAssessmentFieldLabel(labels, key),
    [labels],
  );
  const helper = useCallback(
    (key: string) => resolveAssessmentHelper(labels, key),
    [labels],
  );
  const moduleLabel = useCallback(
    (key: string) => resolveAssessmentModuleLabel(labels, key),
    [labels],
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
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
            res.status === 400 ? labels.expiredLink : labels.invalidLink;
          setError(msg);
          setLoading(false);
          return;
        }
        const incoming = body.currentPayload ?? {};
        setPayload({
          ...incoming,
          companyOfficial: hydrateOfficial(incoming.companyOfficial),
          modules: canonicalizeAssessmentModules(incoming.modules),
          integrations: normalizeAssessmentIntegrations(incoming.integrations),
          rollout: normalizeAssessmentRollout(incoming.rollout),
        });
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
    if (step === "integrations") {
      const missing = missingRequiredIntegrationNames(payload.integrations);
      if (missing.length > 0) {
        setStepError(field("integrationSystemRequired"));
        return;
      }
    }
    setStepError(null);
    const next = Math.min(stepIndex + 1, STEPS.length - 1);
    const nextStep = STEPS[next];
    const nextPayload = {
      ...payload,
      currentStep: nextStep,
      integrations: normalizeAssessmentIntegrations(payload.integrations),
      rollout: normalizeAssessmentRollout(payload.rollout),
    };
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
      await save(
        {
          ...payload,
          currentStep: "summary",
          integrations: normalizeAssessmentIntegrations(payload.integrations),
          rollout: normalizeAssessmentRollout(payload.rollout),
        },
        "summary",
      );
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

  function setOfficial(key: keyof CompanyOfficial, value: string) {
    setPayload((p) => ({
      ...p,
      companyOfficial: { ...(p.companyOfficial ?? {}), [key]: value },
    }));
  }

  function setRegisteredOffice(key: (typeof ADDRESS_FIELD_KEYS)[number], value: string) {
    setPayload((p) => {
      const official = hydrateOfficial(p.companyOfficial);
      const registeredOffice = patchAddress(
        official.registeredOffice ?? emptyAddress(),
        key,
        value,
      );
      return {
        ...p,
        companyOfficial: {
          ...official,
          registeredOffice,
          country:
            key === "addressCountry"
              ? value
              : official.country || registeredOffice.country,
        },
      };
    });
  }

  function setBillingAddress(key: (typeof ADDRESS_FIELD_KEYS)[number], value: string) {
    setPayload((p) => {
      const official = hydrateOfficial(p.companyOfficial);
      return {
        ...p,
        companyOfficial: {
          ...official,
          billingAddressSameAsRegisteredOffice: false,
          billingAddress: patchAddress(
            official.billingAddress ?? emptyAddress(),
            key,
            value,
          ),
        },
      };
    });
  }

  function setBillingSame(same: boolean) {
    setPayload((p) => {
      const official = hydrateOfficial(p.companyOfficial);
      return {
        ...p,
        companyOfficial: {
          ...official,
          billingAddressSameAsRegisteredOffice: same,
          billingAddress: same ? emptyAddress() : official.billingAddress,
        },
      };
    });
  }

  function updateSites(sites: OperatingSite[]) {
    setPayload((p) => ({
      ...p,
      companyOfficial: {
        ...hydrateOfficial(p.companyOfficial),
        operatingSites: sites,
      },
      companySize: {
        ...(p.companySize ?? {}),
        sitesCount: sites.length,
      },
    }));
  }

  function setSite(index: number, patch: Partial<OperatingSite>) {
    const sites = [...(payload.companyOfficial?.operatingSites ?? [])];
    sites[index] = { ...sites[index], ...patch };
    updateSites(sites);
  }

  function setSiteAddress(
    index: number,
    key: (typeof ADDRESS_FIELD_KEYS)[number],
    value: string,
  ) {
    const sites = [...(payload.companyOfficial?.operatingSites ?? [])];
    const current = sites[index] ?? emptySite();
    sites[index] = { ...current, ...patchAddress(current, key, value) };
    updateSites(sites);
  }

  function setSize(key: string, value: string) {
    const num = value.trim() === "" ? undefined : Number(value);
    setPayload((p) => ({
      ...p,
      companySize: {
        ...(p.companySize ?? {}),
        [key]: Number.isFinite(num) ? num : undefined,
      },
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

  function setIntegrationFlag(
    enabledKey: (typeof INTEGRATION_CATEGORIES)[number]["enabledKey"],
    enabled: boolean,
  ) {
    setPayload((p) => {
      const current = { ...(p.integrations ?? {}) };
      current[enabledKey] = enabled;
      if (!enabled) {
        const category = INTEGRATION_CATEGORIES.find(
          (item) => item.enabledKey === enabledKey,
        );
        if (category) current[category.nameKey] = undefined;
        if (enabledKey === "customEnabled") {
          current.customIntegrationNotes = undefined;
        }
      }
      return {
        ...p,
        integrations: normalizeAssessmentIntegrations(current),
      };
    });
    setStepError(null);
  }

  function setIntegrationValue(
    key: keyof AssessmentIntegrations,
    value: string | boolean | number | AssessmentIntegrations["telematicsCapabilities"],
  ) {
    setPayload((p) => ({
      ...p,
      integrations: normalizeAssessmentIntegrations({
        ...(p.integrations ?? {}),
        [key]: value,
      } as AssessmentIntegrations),
    }));
    setStepError(null);
  }

  function setRollout(key: keyof AssessmentRollout, value: string | boolean | number) {
    setPayload((p) => ({
      ...p,
      rollout: normalizeAssessmentRollout({
        ...(p.rollout ?? {}),
        [key]: value,
      }),
    }));
  }

  const summaryRows = useMemo(() => {
    const rows: { section: string; items: { label: string; value: string }[] }[] =
      [];

    const official = hydrateOfficial(payload.companyOfficial);
    const officialItems = [
      ...OFFICIAL_IDENTITY_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(official[key], yesNo.yes, yesNo.no),
      })),
      {
        label: field("registeredOffice"),
        value: formatDisplayValue(
          formatAddress(official.registeredOffice),
          yesNo.yes,
          yesNo.no,
        ),
      },
      ...(official.operatingSites ?? []).map((site, index) => ({
        label: `${field("operatingSites")} ${index + 1}`,
        value: formatDisplayValue(
          [site.name, field(SITE_TYPE_LABEL_KEYS[(site.type as (typeof SITE_TYPES)[number]) ?? "other"] ?? "siteTypeOther"), formatAddress(site)]
            .filter(Boolean)
            .join(" — "),
          yesNo.yes,
          yesNo.no,
        ),
      })),
      {
        label: field("billingAddress"),
        value: official.billingAddressSameAsRegisteredOffice
          ? field("billingAddressSameAsRegisteredOffice")
          : formatDisplayValue(
              formatAddress(official.billingAddress),
              yesNo.yes,
              yesNo.no,
            ),
      },
      ...OFFICIAL_CONTACT_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(official[key], yesNo.yes, yesNo.no),
      })),
      {
        label: field("contactLanguage"),
        value: formatDisplayValue(
          formatContactLanguageLabel(official.contactLanguage, locale),
          yesNo.yes,
          yesNo.no,
        ),
      },
    ].filter((i) => i.value !== "—");
    rows.push({ section: labels.stepCompany, items: officialItems });

    const sizeItems = [
      ...SIZE_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(
          payload.companySize?.[key],
          yesNo.yes,
          yesNo.no,
        ),
      })),
      {
        label: field("transportScope"),
        value: formatDisplayValue(
          TRANSPORT_SCOPES.includes(
            payload.operations?.transportScope as (typeof TRANSPORT_SCOPES)[number],
          )
            ? field(
                TRANSPORT_SCOPE_LABEL_KEYS[
                  payload.operations?.transportScope as (typeof TRANSPORT_SCOPES)[number]
                ],
              )
            : "",
          yesNo.yes,
          yesNo.no,
        ),
      },
    ].filter((i) => i.value !== "—");
    rows.push({ section: labels.stepSize, items: sizeItems });

    const opsItems = [
      ...OPS_NUMBER_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(
          payload.operations?.[key],
          yesNo.yes,
          yesNo.no,
        ),
      })),
      ...OPS_BOOL_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(
          payload.operations?.[key],
          yesNo.yes,
          yesNo.no,
        ),
      })),
    ].filter((i) => i.value !== "—");
    rows.push({ section: labels.stepOperations, items: opsItems });

    const moduleItems = canonicalizeAssessmentModules(payload.modules).map(
      (key) => ({
        label: moduleLabel(key),
        value: yesNo.yes,
      }),
    );
    rows.push({ section: labels.stepModules, items: moduleItems });

    const integrations = normalizeAssessmentIntegrations(payload.integrations);
    const integrationItems = [
      ...INTEGRATION_CATEGORIES.flatMap((category) => {
        if (!integrations[category.enabledKey]) return [];
        return [
          {
            label: field(category.nameKey),
            value: formatDisplayValue(
              integrations[category.nameKey],
              yesNo.yes,
              yesNo.no,
            ),
          },
        ];
      }),
      ...(integrations.customEnabled && integrations.customIntegrationNotes
        ? [
            {
              label: field("customIntegrationNotes"),
              value: integrations.customIntegrationNotes,
            },
          ]
        : []),
      ...(integrations.dataMigrationRequired
        ? [
            {
              label: field("migrationNotes"),
              value: formatDisplayValue(
                integrations.migrationNotes,
                yesNo.yes,
                yesNo.no,
              ),
            },
          ]
        : []),
    ].filter((i) => i.value !== "—");
    rows.push({ section: labels.stepIntegrations, items: integrationItems });

    const rollout = normalizeAssessmentRollout(payload.rollout);
    const rolloutItems = [
      ...ROLLOUT_DATE_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(rollout[key], yesNo.yes, yesNo.no),
      })),
      {
        label: field("pilotUsers"),
        value: formatDisplayValue(rollout.pilotUsers, yesNo.yes, yesNo.no),
      },
      {
        label: field("trainingNeeded"),
        value: formatDisplayValue(rollout.trainingNeeded, yesNo.yes, yesNo.no),
      },
      ...(rollout.trainingNeeded
        ? [
            {
              label: field("onsiteTraining"),
              value: formatDisplayValue(
                rollout.onsiteTraining,
                yesNo.yes,
                yesNo.no,
              ),
            },
          ]
        : []),
      ...ROLLOUT_YES_NO_KEYS.map((key) => ({
        label: field(key),
        value: formatDisplayValue(rollout[key], yesNo.yes, yesNo.no),
      })),
      {
        label: field("notes"),
        value: formatDisplayValue(rollout.notes, yesNo.yes, yesNo.no),
      },
    ].filter((i) => i.value !== "—");
    rows.push({ section: labels.stepRollout, items: rolloutItems });

    return rows;
  }, [field, labels, locale, moduleLabel, payload, yesNo]);

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
    <div className="space-y-6" dir={isRtl ? "rtl" : "ltr"}>
      <div>
        <h2 className="text-subsection-title">{labels.continueTitle}</h2>
        <p className="text-body text-neutral-grey">{labels.subtitle}</p>
        <p className="mt-2 text-sm text-cyan-glow">
          {stepIndex + 1}/{STEPS.length}: {stepTitle}
        </p>
        {savedAt ? (
          <p className="mt-1 text-sm text-neutral-grey">
            {labels.saved}:{" "}
            <span dir="ltr">{new Date(savedAt).toLocaleString()}</span>
          </p>
        ) : null}
      </div>

      {step === "companyOfficial" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {OFFICIAL_IDENTITY_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel label={field(key)} helper={helper(key)} />
              <input
                className={inputClass()}
                dir={valueDir(key)}
                value={String(payload.companyOfficial?.[key] ?? "")}
                onChange={(e) => setOfficial(key, e.target.value)}
              />
            </label>
          ))}

          <fieldset className="min-w-0 space-y-3 rounded-md border border-navy-700 p-3 md:col-span-2">
            <legend className="px-1 text-sm font-semibold text-cyan-glow">
              {field("registeredOffice")}
            </legend>
            <div className="grid gap-3 md:grid-cols-2">
              {ADDRESS_FIELD_KEYS.map((key) => (
                <label key={key} className="form-label min-w-0">
                  <FieldLabel
                    label={field(key === "street" ? "street" : key)}
                  />
                  <input
                    className={inputClass()}
                    dir={valueDir(key === "addressCountry" ? "addressCountry" : key)}
                    value={addressValue(
                      payload.companyOfficial?.registeredOffice ?? emptyAddress(),
                      key,
                    )}
                    onChange={(e) => setRegisteredOffice(key, e.target.value)}
                  />
                </label>
              ))}
            </div>
          </fieldset>

          <div className="min-w-0 space-y-3 md:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-cyan-glow">
                {field("operatingSites")}
              </h3>
              <button
                type="button"
                className="rounded-md border border-cyan-accent/40 px-3 py-1.5 text-sm text-cyan-glow"
                onClick={() =>
                  updateSites([
                    ...(payload.companyOfficial?.operatingSites ?? []),
                    emptySite(
                      payload.companyOfficial?.registeredOffice?.country ?? "",
                    ),
                  ])
                }
              >
                {field("addOperatingSite")}
              </button>
            </div>
            {(payload.companyOfficial?.operatingSites ?? []).map((site, index) => (
              <fieldset
                key={`site-${index}`}
                className="space-y-3 rounded-md border border-navy-700 p-3"
              >
                <legend className="px-1 text-sm text-neutral-grey">
                  {field("operatingSites")} {index + 1}
                </legend>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="form-label min-w-0">
                    <FieldLabel label={field("siteName")} />
                    <input
                      className={inputClass()}
                      value={site.name ?? ""}
                      onChange={(e) => setSite(index, { name: e.target.value })}
                    />
                  </label>
                  <label className="form-label min-w-0">
                    <FieldLabel label={field("siteType")} />
                    <select
                      className={inputClass()}
                      value={site.type ?? "depot"}
                      onChange={(e) => setSite(index, { type: e.target.value })}
                    >
                      {SITE_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {field(SITE_TYPE_LABEL_KEYS[type])}
                        </option>
                      ))}
                    </select>
                  </label>
                  {ADDRESS_FIELD_KEYS.map((key) => (
                    <label key={key} className="form-label min-w-0">
                      <FieldLabel
                        label={field(key === "street" ? "street" : key)}
                      />
                      <input
                        className={inputClass()}
                        dir={valueDir(key === "addressCountry" ? "addressCountry" : key)}
                        value={addressValue(site, key)}
                        onChange={(e) =>
                          setSiteAddress(index, key, e.target.value)
                        }
                      />
                    </label>
                  ))}
                  <label className="flex min-w-0 items-start gap-2 text-brand-ink">
                    <input
                      className="mt-1 shrink-0"
                      type="checkbox"
                      checked={site.active !== false}
                      onChange={(e) =>
                        setSite(index, { active: e.target.checked })
                      }
                    />
                    <span className="leading-snug">{field("siteActive")}</span>
                  </label>
                  <button
                    type="button"
                    className="justify-self-start rounded-md border border-navy-600 px-3 py-1.5 text-sm text-brand-ink"
                    onClick={() =>
                      updateSites(
                        (payload.companyOfficial?.operatingSites ?? []).filter(
                          (_row, rowIndex) => rowIndex !== index,
                        ),
                      )
                    }
                  >
                    {field("removeOperatingSite")}
                  </button>
                </div>
              </fieldset>
            ))}
          </div>

          <fieldset className="min-w-0 space-y-3 rounded-md border border-navy-700 p-3 md:col-span-2">
            <legend className="px-1 text-sm font-semibold text-cyan-glow">
              {field("billingAddress")}
            </legend>
            <label className="flex min-w-0 items-start gap-2 text-brand-ink">
              <input
                className="mt-1 shrink-0"
                type="checkbox"
                checked={
                  payload.companyOfficial?.billingAddressSameAsRegisteredOffice !==
                  false
                }
                onChange={(e) => setBillingSame(e.target.checked)}
              />
              <span className="leading-snug">
                {field("billingAddressSameAsRegisteredOffice")}
              </span>
            </label>
            {payload.companyOfficial?.billingAddressSameAsRegisteredOffice ===
            false ? (
              <div className="grid gap-3 md:grid-cols-2">
                {ADDRESS_FIELD_KEYS.map((key) => (
                  <label key={key} className="form-label min-w-0">
                    <FieldLabel
                      label={field(key === "street" ? "street" : key)}
                    />
                    <input
                      className={inputClass()}
                      dir={valueDir(key === "addressCountry" ? "addressCountry" : key)}
                      value={addressValue(
                        payload.companyOfficial?.billingAddress ?? emptyAddress(),
                        key,
                      )}
                      onChange={(e) => setBillingAddress(key, e.target.value)}
                    />
                  </label>
                ))}
              </div>
            ) : null}
          </fieldset>

          {OFFICIAL_CONTACT_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel label={field(key)} helper={helper(key)} />
              <input
                className={inputClass()}
                dir={valueDir(key)}
                value={String(payload.companyOfficial?.[key] ?? "")}
                onChange={(e) => setOfficial(key, e.target.value)}
              />
            </label>
          ))}
          <label className="form-label min-w-0">
            <FieldLabel label={field("contactLanguage")} />
            <select
              className={inputClass()}
              value={payload.companyOfficial?.contactLanguage || locale}
              onChange={(e) => setOfficial("contactLanguage", e.target.value)}
            >
              {listLanguagesForPublicSite().map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {formatContactLanguageLabel(lang.code, locale)}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      {step === "companySize" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {SIZE_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel label={field(key)} helper={helper(key)} />
              <input
                className={inputClass()}
                type="number"
                min={0}
                dir="ltr"
                value={
                  payload.companySize?.[key] === undefined
                    ? ""
                    : String(payload.companySize?.[key])
                }
                onChange={(e) => setSize(key, e.target.value)}
              />
            </label>
          ))}
          <fieldset className="min-w-0 space-y-2 rounded-md border border-navy-700 p-3 md:col-span-2">
            <legend className="px-1 text-sm font-semibold text-cyan-glow">
              {field("transportScope")}
            </legend>
            <div className="grid gap-2 sm:grid-cols-3">
              {TRANSPORT_SCOPES.map((scope) => (
                <label
                  key={scope}
                  className="flex min-w-0 items-start gap-2 text-brand-ink"
                >
                  <input
                    className="mt-1 shrink-0"
                    type="radio"
                    name="transportScope"
                    value={scope}
                    checked={payload.operations?.transportScope === scope}
                    onChange={() =>
                      setPayload((p) => ({
                        ...p,
                        operations: {
                          ...(p.operations ?? {}),
                          transportScope: scope,
                        },
                      }))
                    }
                  />
                  <span className="leading-snug">
                    {field(TRANSPORT_SCOPE_LABEL_KEYS[scope])}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      ) : null}

      {step === "operations" ? (
        <div className="grid gap-3 md:grid-cols-2">
          {OPS_NUMBER_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel label={field(key)} helper={helper(key)} />
              <input
                className={inputClass()}
                type="number"
                dir="ltr"
                value={
                  payload.operations?.[key] === undefined
                    ? ""
                    : String(payload.operations?.[key])
                }
                onChange={(e) => setOps(key, e.target.value)}
              />
            </label>
          ))}
          <div className="grid gap-2 md:col-span-2 sm:grid-cols-2">
            {OPS_BOOL_KEYS.map((key) => (
              <label
                key={key}
                className="flex min-w-0 items-start gap-2 text-brand-ink"
              >
                <input
                  className="mt-1 shrink-0"
                  type="checkbox"
                  checked={Boolean(payload.operations?.[key])}
                  onChange={(e) => setOps(key, e.target.checked)}
                />
                <span className="leading-snug">{field(key)}</span>
              </label>
            ))}
          </div>
        </div>
      ) : null}

      {step === "modules" ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {MODULE_OPTIONS.map((opt) => {
            const selected = payload.modules ?? [];
            const checked = selected.includes(opt);
            return (
              <label
                key={opt}
                className="flex min-w-0 items-start gap-2 text-brand-ink"
              >
                <input
                  className="mt-1 shrink-0"
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    const next = new Set(
                      canonicalizeAssessmentModules(selected),
                    );
                    if (e.target.checked) next.add(opt);
                    else next.delete(opt);
                    setPayload((p) => ({
                      ...p,
                      modules: canonicalizeAssessmentModules(Array.from(next)),
                    }));
                  }}
                />
                <span className="leading-snug">{moduleLabel(opt)}</span>
              </label>
            );
          })}
        </div>
      ) : null}

      {step === "integrations" ? (
        <div className="grid gap-4">
          {INTEGRATION_CATEGORIES.map((category) => {
            const enabled = Boolean(
              payload.integrations?.[category.enabledKey],
            );
            return (
              <div
                key={category.enabledKey}
                className="grid gap-3 rounded-md border border-navy-700 p-3"
              >
                <label className="form-label min-w-0">
                  <FieldLabel label={field(category.enabledKey)} />
                  <select
                    className={inputClass()}
                    value={enabled ? "yes" : "no"}
                    onChange={(e) =>
                      setIntegrationFlag(
                        category.enabledKey,
                        e.target.value === "yes",
                      )
                    }
                  >
                    <option value="no">{labels.no}</option>
                    <option value="yes">{labels.yes}</option>
                  </select>
                </label>
                {enabled ? (
                  <label className="form-label min-w-0">
                    <FieldLabel
                      label={field(category.nameKey)}
                      helper={helper(category.nameKey)}
                    />
                    <input
                      className={inputClass()}
                      dir="auto"
                      value={String(
                        payload.integrations?.[category.nameKey] ?? "",
                      )}
                      onChange={(e) =>
                        setIntegrationValue(category.nameKey, e.target.value)
                      }
                    />
                  </label>
                ) : null}
                {category.enabledKey === "gpsEnabled" && enabled ? (
                  <>
                    <label className="form-label min-w-0">
                      <FieldLabel label={field("telematicsIntegrationRequested")} />
                      <select
                        className={inputClass()}
                        value={
                          payload.integrations?.telematicsIntegrationRequested ===
                          true
                            ? "yes"
                            : "no"
                        }
                        onChange={(e) =>
                          setIntegrationValue(
                            "telematicsIntegrationRequested",
                            e.target.value === "yes",
                          )
                        }
                      >
                        <option value="no">{labels.no}</option>
                        <option value="yes">{labels.yes}</option>
                      </select>
                    </label>
                    {payload.integrations?.telematicsIntegrationRequested ===
                    true ? (
                      <label className="form-label min-w-0">
                        <FieldLabel label={field("telematicsVehicleCount")} />
                        <input
                          className={inputClass()}
                          type="number"
                          min={1}
                          inputMode="numeric"
                          value={String(
                            payload.integrations?.telematicsVehicleCount ?? "",
                          )}
                          onChange={(e) =>
                            setIntegrationValue(
                              "telematicsVehicleCount",
                              e.target.value
                                ? Number(e.target.value)
                                : undefined,
                            )
                          }
                        />
                      </label>
                    ) : null}
                    <div className="grid gap-2 sm:grid-cols-2">
                      {(
                        [
                          ["telematicsCapTachograph", "tachograph"],
                          ["telematicsCapTemperature", "temperature"],
                          ["telematicsCapOdometer", "odometer"],
                          ["telematicsCapFuel", "fuel"],
                          ["telematicsCapLivePosition", "livePosition"],
                        ] as const
                      ).map(([labelKey, capKey]) => (
                        <label
                          key={capKey}
                          className="flex items-center gap-2 text-body-sm text-brand-ink"
                        >
                          <input
                            type="checkbox"
                            className="accent-gold-core"
                            checked={Boolean(
                              payload.integrations?.telematicsCapabilities?.[
                                capKey
                              ],
                            )}
                            onChange={(e) =>
                              setIntegrationValue("telematicsCapabilities", {
                                ...(payload.integrations
                                  ?.telematicsCapabilities ?? {}),
                                [capKey]: e.target.checked,
                              })
                            }
                          />
                          <span>{field(labelKey)}</span>
                        </label>
                      ))}
                    </div>
                  </>
                ) : null}
                {category.enabledKey === "customEnabled" && enabled ? (
                  <label className="form-label min-w-0">
                    <FieldLabel label={field("customIntegrationNotes")} />
                    <textarea
                      className={`${inputClass()} min-h-24`}
                      value={String(
                        payload.integrations?.customIntegrationNotes ?? "",
                      )}
                      onChange={(e) =>
                        setIntegrationValue(
                          "customIntegrationNotes",
                          e.target.value,
                        )
                      }
                    />
                  </label>
                ) : null}
              </div>
            );
          })}
          {hasAnyExternalIntegration(payload.integrations) ? (
            <div className="grid gap-3 rounded-md border border-navy-700 p-3">
              <label className="form-label min-w-0">
                <FieldLabel label={field("dataMigrationRequired")} />
                <select
                  className={inputClass()}
                  value={
                    payload.integrations?.dataMigrationRequired ? "yes" : "no"
                  }
                  onChange={(e) =>
                    setIntegrationValue(
                      "dataMigrationRequired",
                      e.target.value === "yes",
                    )
                  }
                >
                  <option value="no">{labels.no}</option>
                  <option value="yes">{labels.yes}</option>
                </select>
              </label>
              {payload.integrations?.dataMigrationRequired ? (
                <label className="form-label min-w-0">
                  <FieldLabel
                    label={field("migrationNotes")}
                    helper={helper("migrationNotes")}
                  />
                  <textarea
                    className={`${inputClass()} min-h-24`}
                    value={String(payload.integrations?.migrationNotes ?? "")}
                    onChange={(e) =>
                      setIntegrationValue("migrationNotes", e.target.value)
                    }
                  />
                </label>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {step === "rollout" ? (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="md:col-span-2 rounded-md border border-navy-700 bg-navy-900/40 p-3 text-sm text-neutral-grey">
            <p className="font-medium text-brand-ink">
              {trainingSupport.compact}
            </p>
          </div>
          {ROLLOUT_DATE_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel label={field(key)} helper={helper(key)} />
              <input
                className={inputClass()}
                value={String(payload.rollout?.[key] ?? "")}
                onChange={(e) => setRollout(key, e.target.value)}
              />
            </label>
          ))}
          <label className="form-label min-w-0">
            <FieldLabel label={field("pilotUsers")} helper={helper("pilotUsers")} />
            <input
              className={inputClass()}
              type="number"
              min={0}
              dir="ltr"
              value={
                payload.rollout?.pilotUsers === undefined
                  ? ""
                  : String(payload.rollout.pilotUsers)
              }
              onChange={(e) =>
                setRollout(
                  "pilotUsers",
                  e.target.value.trim() === ""
                    ? ""
                    : Math.max(0, Number(e.target.value)),
                )
              }
            />
          </label>
          <label className="form-label min-w-0">
            <FieldLabel
              label={field("trainingNeeded")}
              helper={trainingSupport.compact}
            />
            <select
              className={inputClass()}
              value={payload.rollout?.trainingNeeded ? "yes" : "no"}
              onChange={(e) =>
                setRollout("trainingNeeded", e.target.value === "yes")
              }
            >
              <option value="no">{labels.no}</option>
              <option value="yes">{labels.yes}</option>
            </select>
          </label>
          {payload.rollout?.trainingNeeded ? (
            <label className="form-label min-w-0">
              <FieldLabel
                label={field("onsiteTraining")}
                helper={trainingSupport.compact}
              />
              <select
                className={inputClass()}
                value={payload.rollout?.onsiteTraining ? "yes" : "no"}
                onChange={(e) =>
                  setRollout("onsiteTraining", e.target.value === "yes")
                }
              >
                <option value="no">{labels.no}</option>
                <option value="yes">{labels.yes}</option>
              </select>
            </label>
          ) : null}
          {ROLLOUT_YES_NO_KEYS.map((key) => (
            <label key={key} className="form-label min-w-0">
              <FieldLabel
                label={field(key)}
                helper={
                  key === "onboardingSupport"
                    ? trainingSupport.compact
                    : helper(key)
                }
              />
              <select
                className={inputClass()}
                value={payload.rollout?.[key] ? "yes" : "no"}
                onChange={(e) => setRollout(key, e.target.value === "yes")}
              >
                <option value="no">{labels.no}</option>
                <option value="yes">{labels.yes}</option>
              </select>
            </label>
          ))}
          <label className="form-label min-w-0 md:col-span-2">
            <FieldLabel label={field("notes")} helper={helper("notes")} />
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
          <div className="mt-4 space-y-5">
            {summaryRows.map((section) => (
              <div key={section.section}>
                <h4 className="text-sm font-semibold text-cyan-glow">
                  {section.section}
                </h4>
                {section.items.length === 0 ? (
                  <p className="mt-1 text-sm text-neutral-grey">
                    {labels.summaryEmpty}
                  </p>
                ) : (
                  <dl className="mt-2 space-y-1.5">
                    {section.items.map((item) => (
                      <div
                        key={`${section.section}-${item.label}`}
                        className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
                      >
                        <dt className="text-sm text-neutral-grey">
                          {item.label}
                        </dt>
                        <dd className="break-words text-sm text-brand-ink" dir="auto">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {stepError ? <p className="text-danger">{stepError}</p> : null}

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
          onClick={() =>
            void save(
              {
                ...payload,
                currentStep: step,
                integrations: normalizeAssessmentIntegrations(
                  payload.integrations,
                ),
                rollout: normalizeAssessmentRollout(payload.rollout),
              },
              step,
            )
          }
          disabled={saving || submitting}
        >
          {saving ? labels.saving : labels.save}
        </button>
      </div>
    </div>
  );
}
