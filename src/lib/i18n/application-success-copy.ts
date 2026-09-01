import { resolveBilingualText } from "./bilingual-resolver";

const APPLICATION_SUCCESS_COPY = {
  statusAwaitingIntake: {
    hu: "Részletes adatbekérőre vár",
    en: "Awaiting detailed intake",
  },
  continueUrlEmailNote: {
    hu: "A folytató linket e-mailben küldtük. A végleges admin jóváhagyás csak a részletes adatbekérő beküldése után lehetséges.",
    en: "A continuation link was emailed. Final admin approval is only possible after the detailed intake is submitted.",
  },
} as const;

export function applicationSuccessStatusAwaitingIntake(locale: string): string {
  const entry = APPLICATION_SUCCESS_COPY.statusAwaitingIntake;
  return resolveBilingualText(locale, entry.hu, entry.en);
}

export function applicationSuccessContinueUrlNote(locale: string): string {
  const entry = APPLICATION_SUCCESS_COPY.continueUrlEmailNote;
  return resolveBilingualText(locale, entry.hu, entry.en);
}
