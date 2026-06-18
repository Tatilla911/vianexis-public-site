"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type FormData = {
  companyName: string;
  country: string;
  contactName: string;
  position: string;
  email: string;
  phone: string;
  driverCount: string;
  vehicleCount: string;
  interestArea: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  companyName: "",
  country: "",
  contactName: "",
  position: "",
  email: "",
  phone: "",
  driverCount: "",
  vehicleCount: "",
  interestArea: "",
  message: "",
  consent: false,
};

const SUCCESS_MESSAGE =
  "Köszönjük az érdeklődést. A ViaNexis csapata átnézi a megadott adatokat, és felveszi Önnel a kapcsolatot. A pilot vagy céges hozzáférés aktiválása nem automatikus, mert a rendszer dokumentumokat, sofőrfolyamatokat, céges adatokat és jogosultságokat kezel.";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.companyName.trim()) errors.companyName = "A cégnév megadása kötelező.";
  if (!data.country.trim()) errors.country = "Az ország megadása kötelező.";
  if (!data.contactName.trim())
    errors.contactName = "A kapcsolattartó neve kötelező.";
  if (!data.email.trim()) {
    errors.email = "Az e-mail cím megadása kötelező.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Érvényes e-mail címet adjon meg.";
  }
  if (!data.consent)
    errors.consent = "A kapcsolatfelvételi adatkezelés elfogadása kötelező.";

  return errors;
}

type PilotAccessFormProps = {
  className?: string;
  id?: string;
};

export function PilotAccessForm({ className, id }: PilotAccessFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    field: keyof FormData,
    value: string | boolean,
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Integrate with backend public intake endpoint or email service.
    // Placeholder: client-side only — no network request is sent.
    setSubmitted(true);
    setErrors({});
  }

  if (submitted) {
    return (
      <div
        id={id}
        className={cn(
          "rounded-xl border border-vianexis-blue/20 bg-vianexis-blue/5 p-8",
          className,
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vianexis-blue/10 text-vianexis-blue">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy">
          Igénylés rögzítve
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text/70">
          {SUCCESS_MESSAGE}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData(initialFormData);
          }}
          className="mt-6 text-sm font-medium text-vianexis-blue hover:underline"
        >
          Új igénylés
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-deep-blue/15 bg-white px-4 py-2.5 text-sm text-text placeholder:text-text/40 focus:border-vianexis-blue focus:outline-none focus:ring-2 focus:ring-vianexis-blue/20";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={cn(
        "rounded-xl border border-deep-blue/10 bg-white p-6 shadow-sm sm:p-8",
        className,
      )}
      noValidate
    >
      <h3 className="text-xl font-semibold text-navy">
        Céges hozzáférés igénylése
      </h3>
      <p className="mt-2 text-sm text-text/60">
        Kontrollált pilot hozzáférés — nem automatikus regisztráció.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Cégnév *" error={errors.companyName}>
          <input
            type="text"
            className={inputClass}
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </Field>

        <Field label="Ország *" error={errors.country}>
          <input
            type="text"
            className={inputClass}
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
          />
        </Field>

        <Field label="Kapcsolattartó neve *" error={errors.contactName}>
          <input
            type="text"
            className={inputClass}
            value={formData.contactName}
            onChange={(e) => handleChange("contactName", e.target.value)}
          />
        </Field>

        <Field label="Beosztás" error={errors.position}>
          <input
            type="text"
            className={inputClass}
            value={formData.position}
            onChange={(e) => handleChange("position", e.target.value)}
          />
        </Field>

        <Field label="E-mail *" error={errors.email}>
          <input
            type="email"
            className={inputClass}
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </Field>

        <Field label="Telefonszám" error={errors.phone}>
          <input
            type="tel"
            className={inputClass}
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Field>

        <Field label="Sofőrök száma" error={errors.driverCount}>
          <input
            type="number"
            min="0"
            className={inputClass}
            value={formData.driverCount}
            onChange={(e) => handleChange("driverCount", e.target.value)}
          />
        </Field>

        <Field label="Járművek száma" error={errors.vehicleCount}>
          <input
            type="number"
            min="0"
            className={inputClass}
            value={formData.vehicleCount}
            onChange={(e) => handleChange("vehicleCount", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Érdeklődési terület" error={errors.interestArea}>
            <select
              className={inputClass}
              value={formData.interestArea}
              onChange={(e) => handleChange("interestArea", e.target.value)}
            >
              <option value="">Válasszon...</option>
              <option value="driver-app">Sofőr app</option>
              <option value="company-portal">Céges portál</option>
              <option value="documents">Dokumentumkezelés és aláírások</option>
              <option value="authority">Hatósági ellenőrzési csomag</option>
              <option value="efti">eFTI-ready foundation</option>
              <option value="full">Teljes platform</option>
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Üzenet" error={errors.message}>
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
            className="mt-1 h-4 w-4 rounded border-deep-blue/20 text-vianexis-blue focus:ring-vianexis-blue/20"
          />
          <span className="text-sm text-text/70">
            Elfogadom, hogy a ViaNexis a megadott adatokat kizárólag a
            kapcsolatfelvétel és a pilot hozzáférés értékelése céljából kezelje. *
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-vianexis-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vianexis-blue/90 sm:w-auto"
      >
        Igénylés elküldése
      </button>
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
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
