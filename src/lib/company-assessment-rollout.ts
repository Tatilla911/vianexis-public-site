export type AssessmentRollout = {
  plannedStartDate?: string;
  pilotDate?: string;
  pilotUsers?: number;
  trainingNeeded?: boolean;
  onsiteTraining?: boolean;
  onboardingSupport?: boolean;
  customDevNeeded?: boolean;
  notes?: string;
  desiredSla?: string;
  supportLanguage?: string;
};

function asTrimmed(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean | undefined {
  if (value === true || value === "true" || value === "yes") return true;
  if (value === false || value === "false" || value === "no") return false;
  return undefined;
}

function asNonNegativeInt(value: unknown): number | undefined {
  if (value === "" || value === null || value === undefined) return undefined;
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < 0) return undefined;
  return Math.floor(n);
}

export function normalizeAssessmentRollout(
  raw: AssessmentRollout | undefined,
): AssessmentRollout {
  const src = raw ?? {};
  const trainingNeeded = asBool(src.trainingNeeded) === true;
  const next: AssessmentRollout = {};
  const plannedStartDate = asTrimmed(src.plannedStartDate);
  const pilotDate = asTrimmed(src.pilotDate);
  const notes = asTrimmed(src.notes);
  const pilotUsers = asNonNegativeInt(src.pilotUsers);
  if (plannedStartDate) next.plannedStartDate = plannedStartDate;
  if (pilotDate) next.pilotDate = pilotDate;
  if (pilotUsers !== undefined) next.pilotUsers = pilotUsers;
  if (asBool(src.trainingNeeded) !== undefined) next.trainingNeeded = trainingNeeded;
  if (trainingNeeded && asBool(src.onsiteTraining) !== undefined) {
    next.onsiteTraining = asBool(src.onsiteTraining) === true;
  }
  if (asBool(src.onboardingSupport) !== undefined) {
    next.onboardingSupport = asBool(src.onboardingSupport) === true;
  }
  if (asBool(src.customDevNeeded) !== undefined) {
    next.customDevNeeded = asBool(src.customDevNeeded) === true;
  }
  if (notes) next.notes = notes;
  const desiredSla = asTrimmed(src.desiredSla);
  const supportLanguage = asTrimmed(src.supportLanguage);
  if (desiredSla) next.desiredSla = desiredSla;
  if (supportLanguage) next.supportLanguage = supportLanguage;
  return next;
}
