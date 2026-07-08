import {
  LanguageReviewStatus,
  findLanguageEntry,
  type LanguageCode,
} from "./language-registry";

/** Public-site translation status — maps registry review status to release semantics. */
export type PublicTranslationStatus =
  | "reviewed"
  | "draftMachine"
  | "legalReviewRequired"
  | "officialOnly"
  | "missing";

export function toPublicTranslationStatus(
  code: LanguageCode,
  isLegalContent = false,
): PublicTranslationStatus {
  const entry = findLanguageEntry(code);
  if (!entry) return "missing";

  if (entry.reviewStatus === LanguageReviewStatus.VERIFIED) {
    return isLegalContent ? "legalReviewRequired" : "reviewed";
  }

  if (entry.draftMachineTranslationAllowed) {
    return isLegalContent ? "legalReviewRequired" : "draftMachine";
  }

  return "missing";
}

/** Translation under review notice — shown on draft locale legal/marketing pages. */
export const translationUnderReviewNotices: Partial<Record<LanguageCode, string>> = {
  hu: "A fordítás ellenőrzés alatt áll.",
  en: "This translation is under review.",
  de: "Diese Übersetzung wird überprüft.",
  ro: "Această traducere este în curs de verificare.",
  sk: "Tento preklad je v procese kontroly.",
  pl: "To tłumaczenie jest w trakcie weryfikacji.",
  cs: "Tento překlad je v procesu kontroly.",
  bg: "Този превод е в процес на проверка.",
  hr: "Ovaj prijevod je u pregledu.",
  sr: "Ovaj prevod je u pregledu.",
  sl: "Ta prevod je v pregledu.",
  et: "See tõlge on ülevaatamisel.",
  lv: "Šis tulkojums tiek pārskatīts.",
  lt: "Šis vertimas peržiūrimas.",
  fi: "Tämä käännös on tarkistettavana.",
  sv: "Denna översättning granskas.",
  da: "Denne oversættelse er under gennemgang.",
  nb: "Denne oversettelsen er under gjennomgang.",
  nl: "Deze vertaling wordt gecontroleerd.",
  fr: "Cette traduction est en cours de révision.",
  es: "Esta traducción está en revisión.",
  pt: "Esta tradução está em revisão.",
  it: "Questa traduzione è in revisione.",
  el: "Αυτή η μετάφραση βρίσκεται υπό έλεγχο.",
  tr: "Bu çeviri incelenmektedir.",
  uk: "Цей переклад перебуває на перевірці.",
  ru: "Этот перевод находится на проверке.",
  sq: "Ky përkthim është në shqyrtim.",
  mk: "Овој превод е во преглед.",
  bs: "Ovaj prevod je u pregledu.",
  be: "Гэты пераклад знаходзіцца на праверцы.",
  ga: "Tá an t-aistriúchán seo faoi athbhreithniú.",
  mt: "Din it-traduzzjoni qed tiġi rreviewjata.",
  is: "Þessi þýðing er í yfirferð.",
  ar: "هذه الترجمة قيد المراجعة.",
};

export function getTranslationUnderReviewNotice(code: LanguageCode): string | null {
  if (toPublicTranslationStatus(code) === "reviewed") return null;
  return translationUnderReviewNotices[code] ?? null;
}

export const lastUpdatedLabels: Partial<Record<LanguageCode, string>> = {
  hu: "Utolsó frissítés:",
  en: "Last updated:",
  de: "Zuletzt aktualisiert:",
  ro: "Ultima actualizare:",
  sk: "Naposledy aktualizované:",
  pl: "Ostatnia aktualizacja:",
  cs: "Naposledy aktualizováno:",
  bg: "Последна актуализация:",
  hr: "Zadnje ažuriranje:",
  sr: "Poslednje ažuriranje:",
  sl: "Zadnja posodobitev:",
  et: "Viimati uuendatud:",
  lv: "Pēdējoreiz atjaunināts:",
  lt: "Paskutinį kartą atnaujinta:",
  fi: "Viimeksi päivitetty:",
  sv: "Senast uppdaterad:",
  da: "Sidst opdateret:",
  nb: "Sist oppdatert:",
  nl: "Laatst bijgewerkt:",
  fr: "Dernière mise à jour :",
  es: "Última actualización:",
  pt: "Última atualização:",
  it: "Ultimo aggiornamento:",
  el: "Τελευταία ενημέρωση:",
  tr: "Son güncelleme:",
  uk: "Останнє оновлення:",
  ru: "Последнее обновление:",
  sq: "Përditësimi i fundit:",
  mk: "Последно ажурирано:",
  bs: "Posljednje ažuriranje:",
  be: "Апошняе абнаўленне:",
  ga: "Nuashonraithe go deireanach:",
  mt: "Aġġornat l-aħħar:",
  is: "Síðast uppfært:",
  ar: "آخر تحديث:",
};

export function getLastUpdatedLabel(code: LanguageCode): string {
  return lastUpdatedLabels[code] ?? "Last updated:";
}

/** Draft locale legal pages are not indexed; HU/EN remain indexable with review badge. */
export function shouldNoindexLegalPage(code: LanguageCode): boolean {
  const entry = findLanguageEntry(code);
  if (!entry) return true;
  return entry.reviewStatus !== LanguageReviewStatus.VERIFIED;
}
