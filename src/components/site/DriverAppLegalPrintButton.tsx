"use client";

type Props = { label: string };

export function DriverAppLegalPrintButton({ label }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-nav text-neutral-grey hover:text-white print:hidden"
    >
      {label}
    </button>
  );
}
