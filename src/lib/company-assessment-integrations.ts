export type AssessmentIntegrations = {
  tmsEnabled?: boolean;
  tms?: string;
  erpEnabled?: boolean;
  erp?: string;
  gpsEnabled?: boolean;
  gps?: string;
  telematicsIntegrationRequested?: boolean;
  telematicsVehicleCount?: number;
  telematicsCapabilities?: {
    tachograph?: boolean;
    temperature?: boolean;
    odometer?: boolean;
    fuel?: boolean;
    livePosition?: boolean;
  };
  documentStoreEnabled?: boolean;
  documentStore?: string;
  customEnabled?: boolean;
  customSystemName?: string;
  customIntegrationNotes?: string;
  dataMigrationRequired?: boolean;
  migrationNotes?: string;
  accounting?: string;
  emailImport?: boolean;
  api?: boolean;
  sso?: boolean;
  exportFormats?: string[];
};

function asTrimmed(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asEnabled(flag: unknown, legacyName: unknown): boolean {
  if (flag === true || flag === "true" || flag === "yes") return true;
  if (flag === false || flag === "false" || flag === "no") return false;
  return asTrimmed(legacyName).length > 0;
}

export function hasAnyExternalIntegration(raw: AssessmentIntegrations | undefined): boolean {
  const n = normalizeAssessmentIntegrations(raw);
  return Boolean(
    n.tmsEnabled ||
      n.erpEnabled ||
      n.gpsEnabled ||
      n.documentStoreEnabled ||
      n.customEnabled,
  );
}

export function normalizeAssessmentIntegrations(
  raw: AssessmentIntegrations | undefined,
): AssessmentIntegrations {
  const src = raw ?? {};
  const tmsEnabled = asEnabled(src.tmsEnabled, src.tms);
  const erpEnabled = asEnabled(src.erpEnabled, src.erp);
  const gpsEnabled = asEnabled(src.gpsEnabled, src.gps);
  const documentStoreEnabled = asEnabled(
    src.documentStoreEnabled,
    src.documentStore,
  );
  const customName = asTrimmed(src.customSystemName);
  const customNotes = asTrimmed(src.customIntegrationNotes);
  const customEnabled = asEnabled(src.customEnabled, customName || customNotes);
  const anyExternal =
    tmsEnabled ||
    erpEnabled ||
    gpsEnabled ||
    documentStoreEnabled ||
    customEnabled;
  const dataMigrationRequired =
    anyExternal && asEnabled(src.dataMigrationRequired, src.migrationNotes);

  const next: AssessmentIntegrations = {
    tmsEnabled,
    tms: tmsEnabled ? asTrimmed(src.tms) || undefined : undefined,
    erpEnabled,
    erp: erpEnabled ? asTrimmed(src.erp) || undefined : undefined,
    gpsEnabled,
    gps: gpsEnabled ? asTrimmed(src.gps) || undefined : undefined,
    documentStoreEnabled,
    documentStore: documentStoreEnabled
      ? asTrimmed(src.documentStore) || undefined
      : undefined,
    customEnabled,
    customSystemName: customEnabled ? customName || undefined : undefined,
    customIntegrationNotes: customEnabled ? customNotes || undefined : undefined,
    dataMigrationRequired,
    migrationNotes: dataMigrationRequired
      ? asTrimmed(src.migrationNotes) || undefined
      : undefined,
  };
  if (gpsEnabled) {
    if (src.telematicsIntegrationRequested === true) {
      next.telematicsIntegrationRequested = true;
    } else if (src.telematicsIntegrationRequested === false) {
      next.telematicsIntegrationRequested = false;
    }
    const vehicleCount = Number(src.telematicsVehicleCount);
    if (Number.isFinite(vehicleCount) && vehicleCount > 0) {
      next.telematicsVehicleCount = Math.trunc(vehicleCount);
    }
    const caps = src.telematicsCapabilities ?? {};
    const nextCaps = {
      tachograph: caps.tachograph === true ? true : undefined,
      temperature: caps.temperature === true ? true : undefined,
      odometer: caps.odometer === true ? true : undefined,
      fuel: caps.fuel === true ? true : undefined,
      livePosition: caps.livePosition === true ? true : undefined,
    };
    if (Object.values(nextCaps).some(Boolean)) {
      next.telematicsCapabilities = nextCaps;
    }
  }
  const accounting = asTrimmed(src.accounting);
  if (accounting) next.accounting = accounting;
  if (src.emailImport === true) next.emailImport = true;
  if (src.api === true) next.api = true;
  if (src.sso === true) next.sso = true;
  return next;
}

export function missingRequiredIntegrationNames(
  raw: AssessmentIntegrations | undefined,
): string[] {
  const n = normalizeAssessmentIntegrations(raw);
  const missing: string[] = [];
  if (n.tmsEnabled && !n.tms) missing.push("tms");
  if (n.erpEnabled && !n.erp) missing.push("erp");
  if (n.gpsEnabled && !n.gps) missing.push("gps");
  if (n.documentStoreEnabled && !n.documentStore) missing.push("documentStore");
  if (n.customEnabled && !n.customSystemName) missing.push("customSystemName");
  if (n.dataMigrationRequired && !n.migrationNotes) missing.push("migrationNotes");
  return missing;
}
