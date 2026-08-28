import type { QuoteAnswers } from "./schema";

export function asModuleList(answers: QuoteAnswers): string[] {
  const out = new Set<string>();
  for (const key of [
    "driver_capabilities",
    "portal_capabilities",
    "special_ops",
    "asset_types",
    "yard_features",
    "activity_types",
  ] as const) {
    const raw = answers[key];
    if (Array.isArray(raw)) {
      for (const v of raw) out.add(String(v));
    }
  }
  if (answers.needs_yard_qr === "yes") out.add("yard_qr");
  if (answers.wants_ai === "yes") out.add("ai");
  return Array.from(out).sort();
}
