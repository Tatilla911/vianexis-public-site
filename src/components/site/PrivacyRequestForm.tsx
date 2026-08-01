"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { DriverAppAccountDeletion } from "@/lib/i18n/driver-app-legal";
import type { Locale } from "@/lib/i18n/types";

type IntakeStatus = {
  enabled: boolean;
  captchaRequired: boolean;
  captchaSiteKey: string | null;
  supportedRequestTypes?: string[];
};

type Props = {
  locale: Locale;
  content: DriverAppAccountDeletion;
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PrivacyRequestForm({ locale, content }: Props) {
  const [values, setValues] = useState({
    fullName: "",
    accountEmail: "",
    accountPhone: "",
    contactEmail: "",
    country: locale === "hu" ? "HU" : "",
    companyName: "",
    driverIdentifier: "",
    preferredLanguage: locale,
    message: "",
    requestType: "",
    privacyAccepted: false,
    ownershipConfirmed: false,
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<IntakeStatus | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ publicReference?: string } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaHostRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetId = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/privacy-requests/status", {
          cache: "no-store",
        });
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as IntakeStatus;
        if (!cancelled) setStatus(data);
      } catch {
        if (!cancelled) {
          setStatus({
            enabled: false,
            captchaRequired: false,
            captchaSiteKey: null,
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!status?.captchaRequired || !status.captchaSiteKey) return;
    const siteKey = status.captchaSiteKey;
    const scriptId = "cf-turnstile-script";
    const ensure = () => {
      if (!captchaHostRef.current || !window.turnstile) return;
      if (captchaWidgetId.current) return;
      captchaWidgetId.current = window.turnstile.render(captchaHostRef.current, {
        sitekey: siteKey,
        callback: (token) => setCaptchaToken(token),
        "expired-callback": () => setCaptchaToken(null),
        "error-callback": () => setCaptchaToken(null),
      });
    };
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = ensure;
      document.head.appendChild(script);
    } else {
      ensure();
    }
  }, [status]);

  function setValue(key: keyof typeof values, value: string | boolean) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!values.fullName.trim()) next.fullName = content.errorMessages.required;
    if (!values.contactEmail.trim()) {
      next.contactEmail = content.errorMessages.required;
    } else if (!EMAIL_RE.test(values.contactEmail.trim())) {
      next.contactEmail = content.errorMessages.emailInvalid;
    }
    if (
      values.accountEmail.trim() &&
      !EMAIL_RE.test(values.accountEmail.trim())
    ) {
      next.accountEmail = content.errorMessages.emailInvalid;
    }
    if (!values.accountEmail.trim() && !values.accountPhone.trim()) {
      next.accountEmail = content.errorMessages.accountContactRequired;
      next.accountPhone = content.errorMessages.accountContactRequired;
    }
    if (!values.country.trim()) next.country = content.errorMessages.required;
    if (!values.requestType) {
      next.requestType = content.errorMessages.requestTypeRequired;
    }
    if (!values.privacyAccepted || !values.ownershipConfirmed) {
      next.confirmation = content.errorMessages.confirmationRequired;
    }
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (status && !status.enabled) {
      setFormError(content.errorMessages.submitFailed);
      return;
    }
    if (status?.captchaRequired && !captchaToken) {
      setFormError(content.errorMessages.confirmationRequired);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/privacy-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          accountEmail: values.accountEmail.trim() || undefined,
          accountPhone: values.accountPhone.trim() || undefined,
          contactEmail: values.contactEmail.trim(),
          country: values.country.trim().toUpperCase(),
          companyName: values.companyName.trim() || undefined,
          driverIdentifier: values.driverIdentifier.trim() || undefined,
          preferredLanguage: values.preferredLanguage.trim() || locale,
          sourceLocale: locale,
          message: values.message.trim() || undefined,
          requestType: values.requestType,
          privacyAccepted: values.privacyAccepted,
          ownershipConfirmed: values.ownershipConfirmed,
          website: values.website,
          captchaToken: captchaToken ?? undefined,
          source: "public_site",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        received?: boolean;
        publicReference?: string;
        error?: string;
      };
      if (!res.ok) {
        setFormError(content.errorMessages.submitFailed);
        return;
      }
      setDone({ publicReference: data.publicReference });
    } catch {
      setFormError(content.errorMessages.network);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div
        className="rounded-lg border border-navy-700 bg-navy-900/70 p-6"
        role="status"
      >
        <h3 className="text-card-title text-white">{content.successTitle}</h3>
        <p className="text-body mt-3 text-neutral-grey">{content.successMessage}</p>
        {done.publicReference ? (
          <p className="text-meta mt-4 text-text-tertiary">
            {done.publicReference}
          </p>
        ) : null}
      </div>
    );
  }

  const textFields = content.formFields.filter(
    (f) =>
      ![
        "privacyAccepted",
        "ownershipConfirmed",
        "requestType",
      ].includes(f.id),
  );

  const inputClass =
    "w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-2.5 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-lg border border-navy-700 bg-navy-900/50 p-5 sm:p-6"
      noValidate
    >
      <div>
        <h3 className="text-card-title text-white">{content.formTitle}</h3>
        <p className="text-body mt-2 text-neutral-grey">{content.formIntro}</p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValue("website", e.target.value)}
        />
      </div>

      {textFields.map((field) => {
        const isTextArea = field.id === "message";
        const value = String(values[field.id as keyof typeof values] ?? "");
        return (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="text-nav mb-1.5 block text-neutral-grey"
            >
              {field.label}
            </label>
            {isTextArea ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={4}
                maxLength={2000}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) =>
                  setValue(field.id as keyof typeof values, e.target.value)
                }
                className={inputClass}
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={
                  field.id.toLowerCase().includes("email") ? "email" : "text"
                }
                maxLength={field.id === "country" ? 8 : 255}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) =>
                  setValue(field.id as keyof typeof values, e.target.value)
                }
                className={inputClass}
                autoComplete="off"
              />
            )}
            {field.helpText ? (
              <p className="text-meta mt-1 text-text-tertiary">{field.helpText}</p>
            ) : null}
            {errors[field.id] ? (
              <p className="form-error text-meta mt-1">{errors[field.id]}</p>
            ) : null}
          </div>
        );
      })}

      <div>
        <label
          htmlFor="requestType"
          className="text-nav mb-1.5 block text-neutral-grey"
        >
          {content.requestTypeLabel}
        </label>
        <select
          id="requestType"
          name="requestType"
          value={values.requestType}
          onChange={(e) => setValue("requestType", e.target.value)}
          className={inputClass}
        >
          <option value="">{content.requestTypePlaceholder}</option>
          {content.requestTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {values.requestType ? (
          <p className="text-meta mt-1 text-text-tertiary">
            {
              content.requestTypes.find((t) => t.value === values.requestType)
                ?.description
            }
          </p>
        ) : null}
        {errors.requestType ? (
          <p className="form-error text-meta mt-1">{errors.requestType}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-3 text-body text-neutral-grey">
        <input
          type="checkbox"
          checked={values.privacyAccepted}
          onChange={(e) => setValue("privacyAccepted", e.target.checked)}
          className="mt-1"
        />
        <span>
          {content.formFields.find((f) => f.id === "privacyAccepted")?.label}
        </span>
      </label>

      <label className="flex items-start gap-3 text-body text-neutral-grey">
        <input
          type="checkbox"
          checked={values.ownershipConfirmed}
          onChange={(e) => setValue("ownershipConfirmed", e.target.checked)}
          className="mt-1"
        />
        <span>
          {
            content.formFields.find((f) => f.id === "ownershipConfirmed")
              ?.label
          }
        </span>
      </label>
      {errors.confirmation ? (
        <p className="form-error text-meta">{errors.confirmation}</p>
      ) : null}

      {status?.captchaRequired ? <div ref={captchaHostRef} /> : null}

      {formError ? <p className="form-error text-meta">{formError}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-cyan-accent px-5 py-2.5 text-nav font-semibold text-navy-1000 transition hover:brightness-110 disabled:opacity-60"
      >
        {submitting ? content.submittingLabel : content.submitLabel}
      </button>
    </form>
  );
}
