"use client";

import { useEffect, useState, type FormEvent } from "react";
import { getContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interestType: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>> & {
  submit?: string;
};

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interestType: "",
  message: "",
  consent: false,
};

type ContactLeadFormProps = {
  locale: Locale;
  className?: string;
  id?: string;
};

export function ContactLeadForm({ locale, className, id }: ContactLeadFormProps) {
  const copy = getContent(locale).contactForm;
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [intakeEnabled, setIntakeEnabled] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/contact/status")
      .then((res) => res.json())
      .then((data: { enabled?: boolean }) => setIntakeEnabled(Boolean(data.enabled)))
      .catch(() => setIntakeEnabled(false));
  }, []);

  function validate(data: FormData): FormErrors {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = copy.errors.name;
    if (!data.company.trim()) next.company = copy.errors.company;
    if (!data.email.trim()) {
      next.email = copy.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = copy.errors.emailInvalid;
    }
    if (!data.message.trim()) next.message = copy.errors.message;
    if (!data.interestType) next.interestType = copy.errors.interest;
    if (!data.consent) next.consent = copy.errors.consent;
    return next;
  }

  function handleChange(field: keyof FormData, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!intakeEnabled) return;

    setSubmitting(true);
    setErrors({});

    try {
      const interestLabel =
        copy.interestOptions.find((o) => o.value === formData.interestType)
          ?.label ?? formData.interestType;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: formData.name.trim(),
          companyName: formData.company.trim(),
          customerEmail: formData.email.trim(),
          customerPhone: formData.phone.trim() || undefined,
          sourceLocale: locale,
          preferredLanguage: locale,
          messageLanguage: locale,
          messageText: `[${interestLabel}]\n\n${formData.message.trim()}`,
          consentPrivacy: true,
        }),
      });

      if (!response.ok) {
        setErrors({ submit: copy.errors.submitFailed });
        return;
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setErrors({ submit: copy.errors.submitFailed });
    } finally {
      setSubmitting(false);
    }
  }

  function buildMailtoHref() {
    const interestLabel =
      copy.interestOptions.find((o) => o.value === formData.interestType)
        ?.label ?? formData.interestType;
    const subject = encodeURIComponent(`ViaNexis — ${interestLabel}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${interestLabel}\n\n${formData.message}`,
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div
        id={id}
        className={cn(
          "rounded-md border border-success/30 bg-success/10 p-8",
          className,
        )}
      >
        <h3 className="text-card-title text-white">{copy.successTitle}</h3>
        <p className="text-body mt-2 text-neutral-grey">
          {copy.successBody}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-nav mt-6 text-cyan-glow hover:underline"
        >
          {copy.newSubmission}
        </button>
      </div>
    );
  }

  const inputClass =
    "form-control w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-2.5 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25";

  const intakeReady = intakeEnabled === true;

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn("panel-glass rounded-md p-6 sm:p-8", className)}
      noValidate
    >
      <h3 className="text-subsection-title text-white">{copy.title}</h3>
      <p className="text-body mt-2 text-neutral-grey">{copy.subtitle}</p>

      {intakeEnabled === false && (
        <p className="mt-4 rounded-md border border-gold-core/30 bg-gold-core/10 p-3 text-body text-neutral-grey">
          {copy.intakeDisabled}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={copy.name} error={errors.name}>
          <input
            type="text"
            className={inputClass}
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Field>

        <Field label={copy.company} error={errors.company}>
          <input
            type="text"
            className={inputClass}
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </Field>

        <Field label={copy.email} error={errors.email}>
          <input
            type="email"
            className={inputClass}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Field>

        <Field label={copy.phone} error={errors.phone}>
          <input
            type="tel"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label={copy.interestType} error={errors.interestType}>
            <select
              className={inputClass}
              value={formData.interestType}
              onChange={(e) => handleChange("interestType", e.target.value)}
            >
              <option value="">{copy.interestPlaceholder}</option>
              {copy.interestOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label={copy.message} error={errors.message}>
            <textarea
              rows={4}
              className={inputClass}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </Field>
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleChange("consent", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-navy-600 bg-navy-800 text-gold-core focus:ring-gold-core/30"
          />
          <span className="text-body text-neutral-grey">{copy.consent}</span>
        </label>
        {errors.consent && (
          <p className="form-error mt-1">{errors.consent}</p>
        )}
      </div>

      {errors.submit && (
        <p className="form-error mt-4">{errors.submit}</p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={!intakeReady || submitting}
          className="rounded-md bg-gold-core px-6 py-3 text-button text-navy-1000 transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copy.submit}
        </button>
        <a
          href={buildMailtoHref()}
          className="inline-flex items-center justify-center rounded-md border border-navy-600 px-6 py-3 text-button text-white transition-colors hover:bg-navy-800"
        >
          {copy.submitMailto}
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="form-label mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="form-error mt-1">{error}</p>}
    </div>
  );
}
