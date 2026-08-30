import type { LanguageCode } from "../language-registry";
import { enterpriseIntegrationByLocale } from "./catalog.generated";
import { enterpriseIntegrationEn } from "./en";
import { enterpriseIntegrationHu } from "./hu";
import type { EnterpriseIntegrationContent } from "./types";

export type { EnterpriseIntegrationContent } from "./types";
export { enterpriseIntegrationEn } from "./en";
export { enterpriseIntegrationHu } from "./hu";

/**
 * Resolve public enterprise-integration copy for a locale.
 * HU/EN always use canonical hand-authored sources.
 */
export function resolveEnterpriseIntegration(
  locale: string,
): EnterpriseIntegrationContent {
  if (locale === "hu") return enterpriseIntegrationHu;
  if (locale === "en") return enterpriseIntegrationEn;
  const fromCatalog = enterpriseIntegrationByLocale[locale as LanguageCode];
  return fromCatalog ?? enterpriseIntegrationEn;
}
