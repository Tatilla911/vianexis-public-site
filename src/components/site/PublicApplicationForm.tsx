"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { getContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";
import {
  mapApplicationError,
  parseApplicationSuccess,
  type ApplicationSubmitSuccess,
} from "@/lib/applications/application-error-map";

type ApplicationType = "company" | "driver" | "partner";

type IntakeStatus = {
  enabled: boolean;
  captchaRequired: boolean;
  captchaSiteKey: string | null;
};

type PublicApplicationFormProps = {
  locale: Locale;
  type: ApplicationType;
  className?: string;
  children: (ctx: {
    values: Record<string, string | boolean | string[]>;
    setValue: (key: string, value: string | boolean | string[]) => void;
    errors: Record<string, string>;
  }) => ReactNode;
  validate: (values: Record<string, string | boolean | string[]>) => Record<string, string>;
  buildPayload: (values: Record<string, string | boolean | string[]>) => Record<string, unknown>;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export function PublicApplicationForm({
  locale,
  type,
  className,
  children,
  validate,
  buildPayload,
}: PublicApplicationFormProps) {
  const copy = getContent(locale).applicationForms;
  const [values, setValues] = useState<Record<string, string | boolean | string[]>>({
    privacyAccepted: false,
    website: "",
    moduleInterests: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<ApplicationSubmitSuccess | null>(null);
  const [intake, setIntake] = useState<IntakeStatus | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaHostRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetId = useRef<string | null>(null);
  const submitLock = useRef(false);

  useEffect(() => {
    fetch("/api/applications/status")
      .then((res) => res.json())
      .then((data: IntakeStatus) =>
        setIntake({
          enabled: Boolean(data.enabled),
          captchaRequired: Boolean(data.captchaRequired),
          captchaSiteKey: data.captchaSiteKey ?? null,
        }),
      )
      .catch(() =>
        setIntake({ enabled: false, captchaRequired: false, captchaSiteKey: null }),
      );
  }, []);

  useEffect(() => {
    if (!intake?.captchaRequired || !intake.captchaSiteKey || !captchaHostRef.current) {
      return;
    }

    let cancelled = false;
    const siteKey = intake.captchaSiteKey;

    function mountWidget() {
      if (cancelled || !captchaHostRef.current || !window.turnstile) return;
      captchaHostRef.current.innerHTML = "";
      captchaWidgetId.current = window.turnstile.render(captchaHostRef.current, {
        sitekey: siteKey,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(null),
        "error-callback": () => setCaptchaToken(null),
      });
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-vianexis-turnstile="1"]',
    );
    if (existing && window.turnstile) {
      mountWidget();
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.dataset.vianexisTurnstile = "1";
    script.onload = () => mountWidget();
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [intake?.captchaRequired, intake?.captchaSiteKey]);

  function setValue(key: string, value: string | boolean | string[]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function errorMessage(key: string, reference?: string | null): string {
    const errorsCopy = copy.common.errors;
    switch (key) {
      case "duplicate":
        return reference
          ? errorsCopy.duplicateWithRef.replace("{reference}", reference)
          : errorsCopy.duplicate;
      case "captchaRequired":
        return errorsCopy.captchaRequired;
      case "captchaInvalid":
        return errorsCopy.captchaInvalid;
      case "privacy":
        return errorsCopy.privacy;
      case "spam":
        return errorsCopy.spam;
      case "network":
        return errorsCopy.network;
      case "notConfigured":
        return copy.common.intakeDisabled;
      default:
        return errorsCopy.submitFailed;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitLock.current || submitting) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    if (!intake?.enabled) return;

    if (intake.captchaRequired && !captchaToken) {
      setErrors({ submit: errorMessage("captchaRequired") });
      return;
    }

    submitLock.current = true;
    setSubmitting(true);
    setErrors({});
    try {
      const response = await fetch(`/api/applications/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buildPayload(values),
          preferredLanguage: locale,
          privacyAccepted: true,
          website: "",
          ...(captchaToken ? { captchaToken } : {}),
        }),
      });

      let body: unknown = {};
      try {
        body = await response.json();
      } catch {
        body = {};
      }

      if (!response.ok) {
        const mapped = mapApplicationError({ status: response.status, body });
        setErrors({
          submit: errorMessage(mapped.key, mapped.reference),
          ...(mapped.supportEmail
            ? { supportHint: mapped.supportEmail }
            : {}),
        });
        if (window.turnstile && captchaWidgetId.current) {
          window.turnstile.reset(captchaWidgetId.current);
          setCaptchaToken(null);
        }
        return;
      }

      setSuccess(parseApplicationSuccess(body));
      setValues({ privacyAccepted: false, website: "", moduleInterests: [] });
      setCaptchaToken(null);
    } catch {
      setErrors({ submit: errorMessage("network") });
    } finally {
      setSubmitting(false);
      submitLock.current = false;
    }
  }

  if (success) {
    const submittedLabel = success.submittedAt
      ? new Date(success.submittedAt).toLocaleString(locale === "hu" ? "hu-HU" : "en-GB")
      : "—";
    return (
      <div
        className={cn("rounded-md border border-success/30 bg-success/10 p-6", className)}
        role="status"
        aria-live="polite"
      >
        <h3 className="text-card-title text-white">{copy.common.successTitle}</h3>
        <p className="mt-2 text-neutral-grey">{copy.common.successBody}</p>
        <dl className="mt-4 space-y-2 text-body text-neutral-grey">
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-white">{copy.common.referenceLabel}</dt>
            <dd>
              <code className="text-cyan-glow">{success.reference}</code>
            </dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-white">{copy.common.submittedAtLabel}</dt>
            <dd>{submittedLabel}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-white">{copy.common.statusLabel}</dt>
            <dd>{copy.common.statusUnderReview}</dd>
          </div>
        </dl>
        <p className="mt-3 text-body text-neutral-grey">{copy.common.nextStep}</p>
        <button
          type="button"
          className="text-nav mt-4 text-cyan-glow underline"
          onClick={() => setSuccess(null)}
        >
          {copy.common.newSubmission}
        </button>
      </div>
    );
  }

  const enabled = intake?.enabled ?? null;

  return (
    <form
      className={cn("panel-glass space-y-4 rounded-md p-6", className)}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
    >
      {enabled === false ? (
        <p className="rounded-md border border-gold-core/30 bg-gold-core/10 p-3 text-body text-gold-pale">
          {copy.common.intakeDisabled}
        </p>
      ) : null}
      {children({ values, setValue, errors })}
      <label className="text-body flex items-start gap-2">
        <input
          type="checkbox"
          checked={Boolean(values.privacyAccepted)}
          onChange={(e) => setValue("privacyAccepted", e.target.checked)}
          aria-required
        />
        <span>{copy.common.privacy}</span>
      </label>
      {errors.privacy ? <p className="form-error">{errors.privacy}</p> : null}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        value={String(values.website ?? "")}
        onChange={(e) => setValue("website", e.target.value)}
        aria-hidden
      />
      {intake?.captchaRequired ? (
        <div>
          <div ref={captchaHostRef} className="min-h-[65px]" />
          <p className="mt-1 text-caption text-neutral-grey">{copy.common.captchaHint}</p>
        </div>
      ) : null}
      {errors.submit ? (
        <div className="form-error" role="alert">
          <p>{errors.submit}</p>
          {errors.supportHint ? (
            <p className="mt-1">
              {copy.common.supportContact.replace("{email}", errors.supportHint)}
            </p>
          ) : null}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={!enabled || submitting}
        className="rounded-md bg-gold-core px-4 py-2 text-button text-navy-1000 hover:bg-gold-light disabled:opacity-50"
      >
        {submitting ? copy.common.submitting : copy.common.submit}
      </button>
    </form>
  );
}
