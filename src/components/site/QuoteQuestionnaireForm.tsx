"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Button } from "@/components/site/Button";
import { localePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";
import {
  QUOTE_STEPS,
  clearQuoteDraft,
  getQuoteUiCopy,
  labelFor,
  helpFor,
  loadQuoteDraft,
  optionLabel,
  questionsForStep,
  resolveBilingualText,
  resolveQuoteLocale,
  saveQuoteDraft,
  validateStep,
  validateVisibleAnswers,
  visibleStepIds,
  buildReviewSections,
  type QuoteAnswers,
  type QuoteLocale,
  type QuoteQuestion,
} from "@/lib/quote-questionnaire";

type IntakeStatus = {
  enabled: boolean;
  captchaRequired: boolean;
  captchaSiteKey: string | null;
};

type SuccessState = {
  reference: string;
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

const FIELD =
  "form-control w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25";

const COUNTRIES = [
  { value: "HU", hu: "Magyarország", en: "Hungary" },
  { value: "AT", hu: "Ausztria", en: "Austria" },
  { value: "DE", hu: "Németország", en: "Germany" },
  { value: "SK", hu: "Szlovákia", en: "Slovakia" },
  { value: "RO", hu: "Románia", en: "Romania" },
  { value: "PL", hu: "Lengyelország", en: "Poland" },
  { value: "CZ", hu: "Csehország", en: "Czechia" },
  { value: "HR", hu: "Horvátország", en: "Croatia" },
  { value: "SI", hu: "Szlovénia", en: "Slovenia" },
  { value: "IT", hu: "Olaszország", en: "Italy" },
  { value: "OTHER", hu: "Egyéb / Other", en: "Other" },
];

function newIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `qr-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function QuestionField({
  q,
  locale,
  value,
  error,
  onChange,
}: {
  q: QuoteQuestion;
  locale: QuoteLocale;
  value: QuoteAnswers[string];
  error?: string;
  onChange: (next: string | string[] | null) => void;
}) {
  const id = useId();
  const label = labelFor(q, locale);
  const help = helpFor(q, locale);
  const describedBy = [help ? `${id}-help` : null, error ? `${id}-err` : null]
    .filter(Boolean)
    .join(" ");

  const opts = q.options ?? [];

  if (
    q.type === "single" ||
    q.type === "band" ||
    q.type === "number_or_band" ||
    q.type === "yes_no_unsure"
  ) {
    return (
      <fieldset className="space-y-2" aria-describedby={describedBy || undefined}>
        <legend className="text-body font-semibold text-brand-ink">{label}</legend>
        {help ? (
          <p id={`${id}-help`} className="text-body-sm text-neutral-grey">
            {help}
          </p>
        ) : null}
        <div className="grid gap-2 sm:grid-cols-2">
          {opts.map((opt) => {
            const selected = String(value ?? "") === opt.value;
            return (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-start gap-2 rounded-md border px-3 py-2 text-body-sm transition-colors",
                  selected
                    ? "border-gold-core bg-gold-core/10 text-brand-ink"
                    : "border-navy-700 bg-navy-900/40 text-brand-ink hover:border-cyan-glow/40",
                )}
              >
                <input
                  type="radio"
                  className="mt-1 accent-gold-core"
                  name={q.id}
                  value={opt.value}
                  checked={selected}
                  onChange={() => onChange(opt.value)}
                />
                <span className="min-w-0 flex-1 break-words">
                  {optionLabel(opt, locale)}
                </span>
              </label>
            );
          })}
        </div>
        {error ? (
          <p id={`${id}-err`} className="text-body-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </fieldset>
    );
  }

  if (q.type === "multi" || q.type === "language_multi") {
    const selected = Array.isArray(value) ? value.map(String) : [];
    return (
      <fieldset className="space-y-2" aria-describedby={describedBy || undefined}>
        <legend className="text-body font-semibold text-brand-ink">{label}</legend>
        {help ? (
          <p id={`${id}-help`} className="text-body-sm text-neutral-grey">
            {help}
          </p>
        ) : null}
        <div className="grid gap-2 sm:grid-cols-2">
          {opts.map((opt) => {
            const on = selected.includes(opt.value);
            return (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-start gap-2 rounded-md border px-3 py-2 text-body-sm transition-colors",
                  on
                    ? "border-gold-core bg-gold-core/10 text-brand-ink"
                    : "border-navy-700 bg-navy-900/40 text-brand-ink hover:border-cyan-glow/40",
                )}
              >
                <input
                  type="checkbox"
                  className="mt-1 accent-gold-core"
                  checked={on}
                  onChange={() => {
                    const next = on
                      ? selected.filter((v) => v !== opt.value)
                      : [...selected, opt.value];
                    onChange(next);
                  }}
                />
                <span className="min-w-0 flex-1 break-words">
                  {optionLabel(opt, locale)}
                </span>
              </label>
            );
          })}
        </div>
        {error ? (
          <p id={`${id}-err`} className="text-body-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </fieldset>
    );
  }

  if (q.type === "country") {
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-body font-semibold text-brand-ink">
          {label}
        </label>
        {help ? (
          <p id={`${id}-help`} className="text-body-sm text-neutral-grey">
            {help}
          </p>
        ) : null}
        <select
          id={id}
          className={FIELD}
          value={String(value ?? "")}
          aria-describedby={describedBy || undefined}
          aria-invalid={Boolean(error)}
          onChange={(e) => onChange(e.target.value || null)}
        >
          <option value="">
            {resolveBilingualText(locale, "Válasszon…", "Select…")}
          </option>
          {COUNTRIES.map((c) => (
            <option key={c.value} value={c.value}>
              {resolveBilingualText(locale, c.hu, c.en)}
            </option>
          ))}
        </select>
        {error ? (
          <p id={`${id}-err`} className="text-body-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (q.type === "textarea") {
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="block text-body font-semibold text-brand-ink">
          {label}
        </label>
        {help ? (
          <p id={`${id}-help`} className="text-body-sm text-neutral-grey">
            {help}
          </p>
        ) : null}
        <textarea
          id={id}
          className={cn(FIELD, "min-h-28")}
          value={String(value ?? "")}
          aria-describedby={describedBy || undefined}
          aria-invalid={Boolean(error)}
          onChange={(e) => onChange(e.target.value)}
        />
        {error ? (
          <p id={`${id}-err`} className="text-body-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  const inputType =
    q.type === "email" ? "email" : q.type === "date" ? "date" : "text";

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-body font-semibold text-brand-ink">
        {label}
      </label>
      {help ? (
        <p id={`${id}-help`} className="text-body-sm text-neutral-grey">
          {help}
        </p>
      ) : null}
      <input
        id={id}
        type={inputType}
        className={FIELD}
        value={String(value ?? "")}
        aria-describedby={describedBy || undefined}
        aria-invalid={Boolean(error)}
        autoComplete={
          q.id === "contact_email"
            ? "email"
            : q.id === "contact_name"
              ? "name"
              : q.id === "company_name"
                ? "organization"
                : undefined
        }
        onChange={(e) => onChange(e.target.value)}
      />
      {error ? (
        <p id={`${id}-err`} className="text-body-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteQuestionnaireForm({ locale }: { locale: Locale }) {
  const quoteLocale: QuoteLocale = resolveQuoteLocale(locale);
  const copy = getQuoteUiCopy(quoteLocale);
  const [answers, setAnswers] = useState<QuoteAnswers>({});
  const [stepId, setStepId] = useState("company");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draftNote, setDraftNote] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [website, setWebsite] = useState("");
  const [intake, setIntake] = useState<IntakeStatus | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<SuccessState | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaHostRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetId = useRef<string | null>(null);
  const submitLock = useRef(false);
  const idempotencyKey = useRef(newIdempotencyKey());
  const hydrated = useRef(false);

  const steps = useMemo(() => visibleStepIds(answers), [answers]);
  const stepIndex = Math.max(0, steps.indexOf(stepId));
  const isSummary = stepId === "summary";
  const progressPct =
    steps.length <= 1 ? 100 : Math.round((stepIndex / (steps.length - 1)) * 100);
  const stepMeta = QUOTE_STEPS.find((s) => s.id === stepId);
  const stepQuestions = useMemo(
    () => (isSummary ? [] : questionsForStep(stepId, answers)),
    [answers, isSummary, stepId],
  );
  const review = useMemo(
    () => (isSummary ? buildReviewSections(answers, quoteLocale) : []),
    [answers, isSummary, quoteLocale],
  );

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const draft = loadQuoteDraft(quoteLocale);
    if (draft && Object.keys(draft.answers).length > 0) {
      setAnswers(draft.answers);
      setStepId(draft.stepId || "company");
      setDraftNote(true);
    }
  }, [quoteLocale]);

  useEffect(() => {
    if (!hydrated.current) return;
    saveQuoteDraft(quoteLocale, answers, stepId);
  }, [answers, stepId, quoteLocale]);

  useEffect(() => {
    const visible = visibleStepIds(answers);
    if (!visible.includes(stepId)) {
      setStepId(visible[Math.min(stepIndex, visible.length - 1)] ?? "company");
    }
  }, [answers, stepId, stepIndex]);

  useEffect(() => {
    fetch("/api/quote-requests/status")
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
  }, [intake?.captchaRequired, intake?.captchaSiteKey, isSummary]);

  function setAnswer(id: string, value: string | string[] | null) {
    setAnswers((prev) => {
      const next = { ...prev };
      if (value == null || value === "" || (Array.isArray(value) && value.length === 0)) {
        delete next[id];
      } else {
        next[id] = value;
      }
      return next;
    });
    setErrors((prev) => {
      if (!prev[id]) return prev;
      const n = { ...prev };
      delete n[id];
      return n;
    });
  }

  function goBack() {
    const idx = steps.indexOf(stepId);
    if (idx > 0) setStepId(steps[idx - 1]!);
  }

  function goContinue() {
    if (isSummary) return;
    const stepErrors = validateStep(stepId, answers, quoteLocale);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    const idx = steps.indexOf(stepId);
    const next = steps[idx + 1];
    if (next) setStepId(next);
  }

  function startOver() {
    if (typeof window !== "undefined" && !window.confirm(copy.startOverConfirm)) {
      return;
    }
    clearQuoteDraft(quoteLocale);
    setAnswers({});
    setStepId("company");
    setErrors({});
    setDraftNote(false);
    setPrivacyAccepted(false);
    setSuccess(null);
    setSubmitError(null);
    idempotencyKey.current = newIdempotencyKey();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitLock.current || submitting) return;

    const allErrors = validateVisibleAnswers(answers, quoteLocale);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setSubmitError(
        quoteLocale === "hu"
          ? "Kérjük, javítsa a hiányzó vagy hibás mezőket."
          : "Please fix the missing or invalid fields.",
      );
      const firstId = Object.keys(allErrors)[0];
      const firstQ = firstId
        ? questionsForStep(
            // find step of first error
            (() => {
              const q = stepQuestions.find((x) => x.id === firstId);
              return q?.step ?? "company";
            })(),
            answers,
          )
        : [];
      void firstQ;
      const stepOfError =
        QUOTE_STEPS.find((s) =>
          questionsForStep(s.id, answers).some((q) => allErrors[q.id]),
        )?.id ?? "company";
      setStepId(stepOfError);
      return;
    }

    if (!privacyAccepted) {
      setSubmitError(copy.privacyRequired);
      return;
    }
    if (!intake?.enabled) {
      setSubmitError(copy.intakeUnavailable);
      return;
    }
    if (intake.captchaRequired && !captchaToken) {
      setSubmitError(
        quoteLocale === "hu"
          ? "Kérjük, erősítse meg, hogy nem robot."
          : "Please complete the captcha.",
      );
      return;
    }

    submitLock.current = true;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey.current,
        },
        body: JSON.stringify({
          locale: quoteLocale,
          answers,
          privacyAccepted: true,
          website,
          ...(captchaToken ? { captchaToken } : {}),
          idempotencyKey: idempotencyKey.current,
        }),
      });
      let body: Record<string, unknown> = {};
      try {
        body = (await response.json()) as Record<string, unknown>;
      } catch {
        body = {};
      }
      if (!response.ok) {
        setSubmitError(
          typeof body.error === "string" && body.error === "spam_detected"
            ? copy.submitError
            : copy.submitError,
        );
        if (window.turnstile && captchaWidgetId.current) {
          window.turnstile.reset(captchaWidgetId.current);
          setCaptchaToken(null);
        }
        return;
      }
      const reference =
        typeof body.reference === "string" && body.reference.trim()
          ? body.reference.trim()
          : typeof body.publicReference === "string"
            ? body.publicReference
            : `QR-${String(body.id ?? "ok").slice(0, 12)}`;
      clearQuoteDraft(quoteLocale);
      setSuccess({ reference });
      setDraftNote(false);
    } catch {
      setSubmitError(copy.submitError);
    } finally {
      setSubmitting(false);
      submitLock.current = false;
    }
  }

  if (success) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 rounded-lg border border-navy-700 bg-navy-900/50 p-6 sm:p-8">
        <h2 className="text-heading-sm text-brand-ink">{copy.successTitle}</h2>
        <p className="text-body text-neutral-grey">{copy.successBody}</p>
        <p className="text-body-sm text-brand-ink">
          {copy.referenceLabel}:{" "}
          <span className="font-semibold text-gold-core">{success.reference}</span>
        </p>
        <Button href={localePath(locale)} variant="secondary">
          {copy.backToHome}
        </Button>
      </div>
    );
  }

  return (
    <form
      className="relative mx-auto max-w-3xl space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-2">
        <h1 className="text-heading-sm text-brand-ink sm:text-heading">
          {copy.introTitle}
        </h1>
        <p className="text-body text-neutral-grey">{copy.introBody}</p>
        <p className="text-body-sm text-neutral-grey/80">{copy.introTime}</p>
      </div>

      {draftNote ? (
        <div
          className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-cyan-glow/30 bg-cyan-glow/5 px-4 py-3 text-body-sm text-brand-ink"
          role="status"
        >
          <span>{copy.draftRestored}</span>
          <button
            type="button"
            className="font-semibold text-gold-core underline-offset-2 hover:underline focus-ring"
            onClick={startOver}
          >
            {copy.startOver}
          </button>
        </div>
      ) : (
        <div className="flex justify-end">
          <button
            type="button"
            className="text-body-sm text-neutral-grey underline-offset-2 hover:text-brand-ink hover:underline focus-ring"
            onClick={startOver}
          >
            {copy.startOver}
          </button>
        </div>
      )}

      <div className="space-y-2" aria-label={copy.progress}>
        <div className="flex items-center justify-between gap-3 text-body-sm text-neutral-grey">
          <span>
            {stepMeta
              ? quoteLocale === "hu"
                ? stepMeta.hu
                : stepMeta.en
              : copy.reviewTitle}{" "}
            · {stepIndex + 1}/{steps.length}
          </span>
          <span>{progressPct}%</span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-navy-800"
          role="progressbar"
          aria-valuenow={progressPct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-accent to-gold-core transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {Object.keys(errors).length > 0 ? (
        <div
          className="rounded-md border border-red-400/40 bg-red-950/30 px-4 py-3 text-body-sm text-red-200"
          role="alert"
        >
          {quoteLocale === "hu"
            ? "Kérjük, javítsa a jelölt mezőket a folytatáshoz."
            : "Please fix the highlighted fields to continue."}
        </div>
      ) : null}

      {!isSummary ? (
        <div className="space-y-6 rounded-lg border border-navy-700 bg-navy-900/40 p-4 sm:p-6">
          <h2 className="text-heading-sm text-brand-ink">
            {stepMeta
              ? quoteLocale === "hu"
                ? stepMeta.hu
                : stepMeta.en
              : ""}
          </h2>
          {stepQuestions.map((q) => (
            <QuestionField
              key={q.id}
              q={q}
              locale={quoteLocale}
              value={answers[q.id]}
              error={errors[q.id]}
              onChange={(v) => setAnswer(q.id, v)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-6 rounded-lg border border-navy-700 bg-navy-900/40 p-4 sm:p-6">
          <h2 className="text-heading-sm text-brand-ink">{copy.reviewTitle}</h2>
          {review.map((section) => (
            <section key={section.stepId} className="space-y-2 border-b border-navy-700 pb-4 last:border-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-body font-semibold text-gold-core">
                  {section.title}
                </h3>
                <button
                  type="button"
                  className="text-body-sm font-semibold text-cyan-glow underline-offset-2 hover:underline focus-ring"
                  onClick={() => setStepId(section.stepId)}
                >
                  {copy.edit}
                </button>
              </div>
              <dl className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.id} className="grid gap-1 sm:grid-cols-2">
                    <dt className="text-body-sm text-neutral-grey">{item.label}</dt>
                    <dd className="text-body-sm break-words text-brand-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          <p className="text-body-sm text-neutral-grey">{copy.legalNotice}</p>

          <label className="flex items-start gap-3 text-body-sm text-brand-ink">
            <input
              type="checkbox"
              className="mt-1 accent-gold-core"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
            />
            <span>
              {copy.privacyLabel}{" "}
              <Link
                href={localePath(locale, "/privacy")}
                className="font-semibold text-gold-core hover:underline"
              >
                {quoteLocale === "hu" ? "Adatvédelem" : "Privacy"}
              </Link>
            </span>
          </label>

          {/* Honeypot */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>

          {intake?.captchaRequired ? (
            <div ref={captchaHostRef} className="min-h-[65px]" />
          ) : null}

          {submitError ? (
            <p className="text-body-sm text-red-300" role="alert">
              {submitError}
            </p>
          ) : null}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={goBack}
          className={stepIndex === 0 ? "invisible pointer-events-none" : ""}
        >
          {copy.back}
        </Button>
        {!isSummary ? (
          <Button type="button" variant="requestAccess" onClick={goContinue}>
            {copy.continue}
          </Button>
        ) : (
          <Button
            type="submit"
            variant="requestAccess"
            disabled={submitting}
          >
            {submitting ? copy.submitting : copy.submit}
          </Button>
        )}
      </div>
    </form>
  );
}
