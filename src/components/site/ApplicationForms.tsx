"use client";

import { PublicApplicationForm } from "@/components/site/PublicApplicationForm";
import { getContent } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

function field(
  label: string,
  key: string,
  values: Record<string, string | boolean | string[]>,
  setValue: (k: string, v: string | boolean | string[]) => void,
  errors: Record<string, string>,
  type: "text" | "email" | "password" = "text",
) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-white">{label}</span>
      <input
        className="w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25"
        type={type}
        value={String(values[key] ?? "")}
        onChange={(e) => setValue(key, e.target.value)}
      />
      {errors[key] ? <span className="mt-1 block text-red-600">{errors[key]}</span> : null}
    </label>
  );
}

export function CompanyApplicationForm({ locale }: { locale: Locale }) {
  const copy = getContent(locale).applicationForms.company;
  const common = getContent(locale).applicationForms.common;

  return (
    <PublicApplicationForm
      locale={locale}
      type="company"
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!String(values.companyName ?? "").trim()) errors.companyName = common.errors.required;
        if (!String(values.country ?? "").trim()) errors.country = common.errors.required;
        if (!String(values.contactName ?? "").trim()) errors.contactName = common.errors.required;
        if (!String(values.contactEmail ?? "").trim()) errors.contactEmail = common.errors.email;
        if (!String(values.contactPhone ?? "").trim()) errors.contactPhone = common.errors.required;
        if (!values.privacyAccepted) errors.privacy = common.errors.privacy;
        return errors;
      }}
      buildPayload={(values) => ({
        companyName: String(values.companyName ?? "").trim(),
        country: String(values.country ?? "").trim(),
        vatNumber: String(values.vatNumber ?? "").trim() || undefined,
        contactName: String(values.contactName ?? "").trim(),
        contactEmail: String(values.contactEmail ?? "").trim(),
        contactPhone: String(values.contactPhone ?? "").trim(),
        fleetSize: String(values.fleetSize ?? "").trim() || undefined,
        moduleInterests: values.moduleInterests,
        notes: String(values.notes ?? "").trim() || undefined,
      })}
    >
      {({ values, setValue, errors }) => (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-white">{copy.title}</h2>
            <p className="text-neutral-grey">{copy.subtitle}</p>
          </div>
          {field(copy.companyName, "companyName", values, setValue, errors)}
          {field(copy.country, "country", values, setValue, errors)}
          {field(copy.vatNumber, "vatNumber", values, setValue, errors)}
          {field(copy.contactName, "contactName", values, setValue, errors)}
          {field(copy.contactEmail, "contactEmail", values, setValue, errors, "email")}
          {field(copy.contactPhone, "contactPhone", values, setValue, errors)}
          {field(copy.fleetSize, "fleetSize", values, setValue, errors)}
          <label className="block text-sm md:col-span-2">
            <span className="mb-1 block font-medium text-white">{copy.moduleInterests}</span>
            <div className="grid gap-2 sm:grid-cols-2">
              {copy.moduleOptions.map((opt) => {
                const selected = (values.moduleInterests as string[] | undefined) ?? [];
                const checked = selected.includes(opt.value);
                return (
                  <label key={opt.value} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const next = new Set(selected);
                        if (e.target.checked) next.add(opt.value);
                        else next.delete(opt.value);
                        setValue("moduleInterests", Array.from(next));
                      }}
                    />
                    <span>{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </label>
          <label className="block text-sm md:col-span-2">
            <span className="mb-1 block font-medium text-white">{copy.notes}</span>
            <textarea
              className="min-h-24 w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25"
              value={String(values.notes ?? "")}
              onChange={(e) => setValue("notes", e.target.value)}
            />
          </label>
        </div>
      )}
    </PublicApplicationForm>
  );
}

export function DriverApplicationForm({ locale }: { locale: Locale }) {
  const copy = getContent(locale).applicationForms.driver;
  const common = getContent(locale).applicationForms.common;

  return (
    <PublicApplicationForm
      locale={locale}
      type="driver"
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!String(values.fullName ?? "").trim()) errors.fullName = common.errors.required;
        if (!String(values.email ?? "").trim()) errors.email = common.errors.email;
        if (String(values.password ?? "").length < 8) errors.password = common.errors.password;
        if (!values.privacyAccepted) errors.privacy = common.errors.privacy;
        return errors;
      }}
      buildPayload={(values) => ({
        fullName: String(values.fullName ?? "").trim(),
        email: String(values.email ?? "").trim(),
        password: String(values.password ?? ""),
        phone: String(values.phone ?? "").trim() || undefined,
        country: String(values.country ?? "").trim() || undefined,
        companyNameHint: String(values.companyNameHint ?? "").trim() || undefined,
        companyCode: String(values.companyCode ?? "").trim() || undefined,
        licenseNotes: String(values.licenseNotes ?? "").trim() || undefined,
      })}
    >
      {({ values, setValue, errors }) => (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-white">{copy.title}</h2>
            <p className="text-neutral-grey">{copy.subtitle}</p>
          </div>
          {field(copy.fullName, "fullName", values, setValue, errors)}
          {field(copy.email, "email", values, setValue, errors, "email")}
          {field(copy.password, "password", values, setValue, errors, "password")}
          {field(copy.phone, "phone", values, setValue, errors)}
          {field(copy.country, "country", values, setValue, errors)}
          {field(copy.companyNameHint, "companyNameHint", values, setValue, errors)}
          {field(copy.companyCode, "companyCode", values, setValue, errors)}
          {field(copy.licenseNotes, "licenseNotes", values, setValue, errors)}
        </div>
      )}
    </PublicApplicationForm>
  );
}

export function PartnerApplicationForm({ locale }: { locale: Locale }) {
  const copy = getContent(locale).applicationForms.partner;
  const common = getContent(locale).applicationForms.common;

  return (
    <PublicApplicationForm
      locale={locale}
      type="partner"
      validate={(values) => {
        const errors: Record<string, string> = {};
        if (!String(values.companyName ?? "").trim()) errors.companyName = common.errors.required;
        if (!String(values.role ?? "").trim()) errors.role = common.errors.required;
        if (!String(values.contactName ?? "").trim()) errors.contactName = common.errors.required;
        if (!String(values.email ?? "").trim()) errors.email = common.errors.email;
        if (!values.privacyAccepted) errors.privacy = common.errors.privacy;
        return errors;
      }}
      buildPayload={(values) => ({
        companyName: String(values.companyName ?? "").trim(),
        role: String(values.role ?? "").trim(),
        contactName: String(values.contactName ?? "").trim(),
        email: String(values.email ?? "").trim(),
        phone: String(values.phone ?? "").trim() || undefined,
        notes: String(values.notes ?? "").trim() || undefined,
      })}
    >
      {({ values, setValue, errors }) => (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-white">{copy.title}</h2>
            <p className="text-neutral-grey">{copy.subtitle}</p>
          </div>
          {field(copy.companyName, "companyName", values, setValue, errors)}
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-white">{copy.role}</span>
            <select
              className="w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25"
              value={String(values.role ?? "")}
              onChange={(e) => setValue("role", e.target.value)}
            >
              <option value="">—</option>
              {copy.roleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.role ? <span className="mt-1 block text-red-600">{errors.role}</span> : null}
          </label>
          {field(copy.contactName, "contactName", values, setValue, errors)}
          {field(copy.email, "email", values, setValue, errors, "email")}
          {field(copy.phone, "phone", values, setValue, errors)}
          <label className="block text-sm md:col-span-2">
            <span className="mb-1 block font-medium text-white">{copy.notes}</span>
            <textarea
              className="min-h-24 w-full rounded-md border border-navy-700 bg-navy-800 px-3 py-2 text-white placeholder:text-neutral-grey/50 focus:border-cyan-accent focus:outline-none focus:ring-2 focus:ring-cyan-accent/25"
              value={String(values.notes ?? "")}
              onChange={(e) => setValue("notes", e.target.value)}
            />
          </label>
        </div>
      )}
    </PublicApplicationForm>
  );
}
