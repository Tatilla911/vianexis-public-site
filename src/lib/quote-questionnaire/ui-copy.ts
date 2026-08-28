import type { QuoteLocale } from "./schema";
import { QUOTE_QUESTIONNAIRE_VERSION } from "./schema";

export type QuoteUiCopy = {
  pageTitle: string;
  introTitle: string;
  introBody: string;
  introTime: string;
  continue: string;
  back: string;
  submit: string;
  edit: string;
  startOver: string;
  startOverConfirm: string;
  draftRestored: string;
  progress: string;
  reviewTitle: string;
  successTitle: string;
  successBody: string;
  referenceLabel: string;
  legalNotice: string;
  privacyLabel: string;
  privacyRequired: string;
  submitting: string;
  submitError: string;
  intakeUnavailable: string;
  exactOptional: string;
};

const HU: QuoteUiCopy = {
  pageTitle: "Személyre szabott ajánlat kérése",
  introTitle: "ViaNexis ajánlatkérő kérdőív",
  introBody:
    "Néhány kérdés segítségével pontosabban meg tudjuk határozni, milyen ViaNexis megoldásra van szükségük, és ennek alapján személyre szabott ajánlatot készítünk. Csak a válaszok alapján releváns kérdéseket mutatjuk. Az űrlap elküldése nem jelent kötelezettségvállalást. Ha egy műszaki részletet most nem tudnak, jelölhetik „Nem tudom / technikai kollégánk tudja” válasszal, és később is pótolható.",
  introTime: "Kis cég: kb. 5–10 perc · Közepes: 10–20 perc · Enterprise: csak ha szükséges, hosszabb",
  continue: "Tovább",
  back: "Vissza",
  submit: "Ajánlatkérés elküldése",
  edit: "Szerkesztés",
  startOver: "Újrakezdés",
  startOverConfirm: "Biztosan törli a kitöltést és újrakezdi?",
  draftRestored: "A korábbi kitöltést visszaállítottuk.",
  progress: "Haladás",
  reviewTitle: "Ellenőrzés elküldés előtt",
  successTitle: "Köszönjük az érdeklődést",
  successBody:
    "A megadott információk alapján előkészítjük a ViaNexis személyre szabott ajánlatát. Az űrlap elküldése érdeklődés, nem hoz létre előfizetést vagy szolgáltatási szerződést — a végleges hatókör és ár külön egyeztetés tárgya.",
  referenceLabel: "Hivatkozási azonosító",
  legalNotice:
    "Az ajánlatkérés elküldése érdeklődésnek minősül, nem hoz létre előfizetést vagy szolgáltatási szerződést. A végleges hatókör és árazás külön megállapodás tárgya.",
  privacyLabel: "Elfogadom az adatvédelmi tájékoztatót. *",
  privacyRequired: "Az adatvédelmi hozzájárulás kötelező.",
  submitting: "Küldés…",
  submitError: "A küldés nem sikerült. Próbálja újra — a válaszok megmaradtak.",
  intakeUnavailable:
    "Az ajánlatkérő űrlap jelenleg nem érhető el. Kérjük, vegye fel a kapcsolatot velünk e-mailben.",
  exactOptional: "Pontos szám (opcionális)",
};

const EN: QuoteUiCopy = {
  pageTitle: "Request a tailored quote",
  introTitle: "ViaNexis quote request questionnaire",
  introBody:
    "A few questions help us understand which ViaNexis solution fits your operation so we can prepare a tailored quote. Only relevant questions are shown based on your answers. Submitting this form creates no commitment. If a technical detail is unknown, choose “Not sure / technical colleague knows” — it can be completed later.",
  introTime:
    "Small company: about 5–10 min · Medium: 10–20 min · Enterprise: longer only when needed",
  continue: "Continue",
  back: "Back",
  submit: "Submit quote request",
  edit: "Edit",
  startOver: "Start over",
  startOverConfirm: "Clear your progress and start over?",
  draftRestored: "Your previous progress has been restored.",
  progress: "Progress",
  reviewTitle: "Review before submit",
  successTitle: "Thank you for your interest",
  successBody:
    "Based on the information you provided, we will prepare a tailored ViaNexis quote. Submitting this form is an inquiry only and does not create a subscription or service contract — final scope and pricing are agreed separately.",
  referenceLabel: "Reference ID",
  legalNotice:
    "Submitting this request is an inquiry only. It does not create a subscription or service contract. Final scope and pricing are agreed separately.",
  privacyLabel: "I accept the privacy notice. *",
  privacyRequired: "Privacy consent is required.",
  submitting: "Submitting…",
  submitError: "Submission failed. Please try again — your answers were kept.",
  intakeUnavailable:
    "The quote request form is currently unavailable. Please contact us by email.",
  exactOptional: "Exact number (optional)",
};

export function getQuoteUiCopy(locale: QuoteLocale): QuoteUiCopy {
  return locale === "hu" ? HU : EN;
}

export function quoteDraftStorageKey(locale: QuoteLocale): string {
  return `vianexis.${QUOTE_QUESTIONNAIRE_VERSION}.quote-draft.${locale}`;
}

export const QUOTE_CTA = {
  hu: "Személyre szabott ajánlat kérése",
  en: "Request a tailored quote",
} as const;
