"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { getContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type ApplicationType = "company" | "driver" | "partner";

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
  const [submitted, setSubmitted] = useState(false);
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/applications/status")
      .then((res) => res.json())
      .then((data: { enabled?: boolean }) => setEnabled(Boolean(data.enabled)))
      .catch(() => setEnabled(false));
  }, []);

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    if (!enabled) return;

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
        }),
      });
      if (!response.ok) {
        setErrors({ submit: copy.common.errors.submitFailed });
        return;
      }
      setSubmitted(true);
      setValues({ privacyAccepted: false, website: "", moduleInterests: [] });
    } catch {
      setErrors({ submit: copy.common.errors.submitFailed });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={cn("rounded-md border border-success/30 bg-success/10 p-6", className)}>
        <h3 className="text-card-title text-white">{copy.common.successTitle}</h3>
        <p className="mt-2 text-neutral-grey">{copy.common.successBody}</p>
        <button
          type="button"
          className="text-nav mt-4 text-cyan-glow underline"
          onClick={() => setSubmitted(false)}
        >
          {copy.common.newSubmission}
        </button>
      </div>
    );
  }

  return (
    <form className={cn("panel-glass space-y-4 rounded-md p-6", className)} onSubmit={handleSubmit} noValidate>
      {enabled === false ? (
        <p className="rounded-md border border-gold-core/30 bg-gold-core/10 p-3 text-body text-gold-pale">{copy.common.intakeDisabled}</p>
      ) : null}
      {children({ values, setValue, errors })}
      <label className="text-body flex items-start gap-2">
        <input
          type="checkbox"
          checked={Boolean(values.privacyAccepted)}
          onChange={(e) => setValue("privacyAccepted", e.target.checked)}
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
      {errors.submit ? <p className="form-error">{errors.submit}</p> : null}
      <button
        type="submit"
        disabled={!enabled || submitting}
        className="rounded-md bg-gold-core px-4 py-2 text-button text-navy-1000 hover:bg-gold-light disabled:opacity-50"
      >
        {copy.common.submit}
      </button>
    </form>
  );
}
