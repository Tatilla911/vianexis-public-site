import { resolveLanguageWithFallback } from "../language-registry";
import {
  telematicsIntegrationsEn,
  telematicsIntegrationsHu,
  type TelematicsIntegrationsPageContent,
} from "./content";

export type { TelematicsIntegrationsPageContent, TelematicsProviderStatus } from "./content";
export { telematicsIntegrationsEn, telematicsIntegrationsHu } from "./content";

export const TELEMATICS_PROVIDER_EXAMPLES = [
  { name: "HolAzAutó", status: "discovery_required" as const },
  { name: "Webfleet", status: "planned" as const },
  { name: "Geotab", status: "planned" as const },
  { name: "Samsara", status: "planned" as const },
] as const;

export function resolveTelematicsIntegrationsContent(
  locale: string,
): TelematicsIntegrationsPageContent {
  const code = resolveLanguageWithFallback(locale).code;
  return code === "hu" ? telematicsIntegrationsHu : telematicsIntegrationsEn;
}

export function telematicsIntegrationsPath(locale: string): string {
  const code = resolveLanguageWithFallback(locale).code;
  return code === "hu"
    ? `/${code}/telematikai-integraciok`
    : `/${code}/telematics-integrations`;
}
