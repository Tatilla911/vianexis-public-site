/**
 * Re-exports operator facts from the central legal config for Driver App legal content.
 * Keep this module for existing imports; do not hardcode identity separately.
 */

import { legalConfig, legalOperatorStatement } from "@/config/legal";

export const OPERATOR_LEGAL_NAME_HU = "Turul Atilla egyéni vállalkozó";
export const OPERATOR_LEGAL_NAME_EN = "Atilla Turul, sole proprietor";
export const OPERATOR_SHORT_NAME = legalConfig.legalBrandName.value!;

export const OPERATOR_ADDRESS_HU = legalConfig.registeredAddress.value!.hu;
export const OPERATOR_ADDRESS_EN = legalConfig.registeredAddress.value!.en;

export const OPERATOR_TAX_NUMBER = legalConfig.taxNumber.value!;
export const OPERATOR_EU_VAT_NUMBER = legalConfig.euVatNumber.value!;
export const OPERATOR_REGISTRATION_NUMBER = `EV ${legalConfig.registrationNumber.value!}`;

export const OPERATOR_EMAIL_DOMAIN = "vianexis.eu";

export const OPERATOR_EMAILS = {
  privacy: legalConfig.privacyEmail.value!,
  gdpr: legalConfig.gdprEmail.value!,
  legal: legalConfig.legalEmail.value!,
  support: legalConfig.supportEmail.value!,
  security: legalConfig.securityEmail.value!,
} as const;

export const OPERATOR_STATEMENT_HU = legalOperatorStatement.hu;
export const OPERATOR_STATEMENT_EN = legalOperatorStatement.en;

export const OPERATOR_FULL_IDENTIFICATION_HU = [
  `Üzemeltető / adatkezelő: ${OPERATOR_LEGAL_NAME_HU}`,
  `Székhely: ${OPERATOR_ADDRESS_HU}`,
  `Adószám: ${OPERATOR_TAX_NUMBER}`,
  `Közösségi adószám: ${OPERATOR_EU_VAT_NUMBER}`,
  `Nyilvántartási szám: ${OPERATOR_REGISTRATION_NUMBER}`,
  `Adatvédelmi kapcsolat: ${OPERATOR_EMAILS.privacy} / ${OPERATOR_EMAILS.gdpr}`,
  `Jogi kapcsolat: ${OPERATOR_EMAILS.legal}`,
];

export const OPERATOR_FULL_IDENTIFICATION_EN = [
  `Operator / data controller: ${OPERATOR_LEGAL_NAME_EN}`,
  `Registered seat: ${OPERATOR_ADDRESS_EN}`,
  `Hungarian tax number: ${OPERATOR_TAX_NUMBER}`,
  `EU VAT number: ${OPERATOR_EU_VAT_NUMBER}`,
  `Registration number: ${OPERATOR_REGISTRATION_NUMBER}`,
  `Privacy contact: ${OPERATOR_EMAILS.privacy} / ${OPERATOR_EMAILS.gdpr}`,
  `Legal contact: ${OPERATOR_EMAILS.legal}`,
];
