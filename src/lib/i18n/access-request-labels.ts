/** Short access-request + email delivery status labels — all 35 public locales. */
import type { Locale } from './types';

export type AccessRequestUiLabels = {
  contactLanguage: string;
  notesOptional: string;
  shortSubtitle: string;
  leadSaved: string;
  emailSent: string;
  emailFailed: string;
  emailProviderMissing: string;
  emailBlockedAllowlist: string;
  emailConsole: string;
  emailSkipped: string;
  emailStatusLabel: string;
};

const en: AccessRequestUiLabels = {
  contactLanguage: 'Preferred contact language *',
  notesOptional: 'Short note (optional)',
  shortSubtitle:
    'Short access request. Detailed company needs assessment follows by secure email link.',
  leadSaved: 'Your request was saved.',
  emailSent: 'Confirmation email sent.',
  emailFailed: 'Confirmation email could not be sent. Your request is still saved.',
  emailProviderMissing: 'Email provider is not configured. Your request is still saved.',
  emailBlockedAllowlist: 'Email blocked by staging allowlist. Your request is still saved.',
  emailConsole: 'Email logged to console (not delivered). Your request is still saved.',
  emailSkipped: 'Email delivery disabled. Your request is still saved.',
  emailStatusLabel: 'Email status',
};

const hu: AccessRequestUiLabels = {
  contactLanguage: 'Kívánt kapcsolattartási nyelv *',
  notesOptional: 'Rövid megjegyzés (opcionális)',
  shortSubtitle:
    'Rövid hozzáférésigénylés. A részletes céges igényfelmérés biztonságos e-mail linken folytatható.',
  leadSaved: 'Az igény mentve lett.',
  emailSent: 'A visszaigazoló e-mail elküldve.',
  emailFailed: 'Az e-mail küldése sikertelen. Az igény ettől még mentve van.',
  emailProviderMissing: 'A szolgáltató nincs konfigurálva. Az igény mentve van.',
  emailBlockedAllowlist: 'A staging allowlist blokkolta az e-mailt. Az igény mentve van.',
  emailConsole: 'Az e-mail konzolra íródott (nem kézbesítve). Az igény mentve van.',
  emailSkipped: 'Az e-mail küldés ki van kapcsolva. Az igény mentve van.',
  emailStatusLabel: 'E-mail státusz',
};

function draft(
  overrides: Partial<AccessRequestUiLabels> = {},
): AccessRequestUiLabels {
  return { ...en, ...overrides };
}

export const accessRequestUiLabels: Record<Locale, AccessRequestUiLabels> = {
  en,
  hu,
  de: draft({
    contactLanguage: 'Bevorzugte Kontaktsprachen *',
    notesOptional: 'Kurze Notiz (optional)',
    leadSaved: 'Ihre Anfrage wurde gespeichert.',
    emailSent: 'Bestätigungs-E-Mail gesendet.',
    emailFailed: 'E-Mail konnte nicht gesendet werden. Ihre Anfrage ist gespeichert.',
    emailStatusLabel: 'E-Mail-Status',
  }),
  ro: draft({
    contactLanguage: 'Limba de contact preferată *',
    notesOptional: 'Notă scurtă (opțional)',
    leadSaved: 'Cererea a fost salvată.',
    emailSent: 'E-mailul de confirmare a fost trimis.',
    emailFailed: 'Trimiterea e-mailului a eșuat. Cererea este totuși salvată.',
    emailStatusLabel: 'Status e-mail',
  }),
  sk: draft({
    contactLanguage: 'Preferovaný kontaktný jazyk *',
    notesOptional: 'Krátka poznámka (voliteľné)',
    leadSaved: 'Vaša žiadosť bola uložená.',
    emailSent: 'Potvrdzovací e-mail bol odoslaný.',
    emailFailed: 'E-mail sa nepodarilo odoslať. Žiadosť je uložená.',
    emailStatusLabel: 'Stav e-mailu',
  }),
  pl: draft({
    contactLanguage: 'Preferowany język kontaktu *',
    notesOptional: 'Krótka notatka (opcjonalnie)',
    leadSaved: 'Twoje zgłoszenie zostało zapisane.',
    emailSent: 'Wysłano e-mail potwierdzający.',
    emailFailed: 'Nie udało się wysłać e-maila. Zgłoszenie jest zapisane.',
    emailStatusLabel: 'Status e-maila',
  }),
  cs: draft({
    contactLanguage: 'Preferovaný kontaktní jazyk *',
    notesOptional: 'Krátká poznámka (volitelné)',
    leadSaved: 'Váš požadavek byl uložen.',
    emailSent: 'Potvrzovací e-mail odeslán.',
    emailFailed: 'E-mail se nepodařilo odeslat. Požadavek je uložen.',
    emailStatusLabel: 'Stav e-mailu',
  }),
  bg: draft(),
  hr: draft(),
  sr: draft(),
  sl: draft(),
  et: draft(),
  lv: draft(),
  lt: draft(),
  fi: draft(),
  sv: draft(),
  da: draft(),
  nb: draft(),
  nl: draft({
    contactLanguage: 'Gewenste contacttaal *',
    notesOptional: 'Korte opmerking (optioneel)',
    leadSaved: 'Uw aanvraag is opgeslagen.',
    emailSent: 'Bevestigingsmail verzonden.',
    emailFailed: 'E-mail verzenden mislukt. Aanvraag is opgeslagen.',
    emailStatusLabel: 'E-mailstatus',
  }),
  fr: draft({
    contactLanguage: 'Langue de contact préférée *',
    notesOptional: 'Courte note (facultatif)',
    leadSaved: 'Votre demande a été enregistrée.',
    emailSent: 'E-mail de confirmation envoyé.',
    emailFailed: "Échec de l'envoi de l'e-mail. La demande est enregistrée.",
    emailStatusLabel: 'Statut e-mail',
  }),
  es: draft({
    contactLanguage: 'Idioma de contacto preferido *',
    notesOptional: 'Nota breve (opcional)',
    leadSaved: 'Su solicitud se guardó.',
    emailSent: 'Correo de confirmación enviado.',
    emailFailed: 'No se pudo enviar el correo. La solicitud está guardada.',
    emailStatusLabel: 'Estado del correo',
  }),
  pt: draft({
    contactLanguage: 'Idioma de contacto preferido *',
    notesOptional: 'Nota breve (opcional)',
    leadSaved: 'O seu pedido foi guardado.',
    emailSent: 'E-mail de confirmação enviado.',
    emailFailed: 'Falha ao enviar o e-mail. O pedido está guardado.',
    emailStatusLabel: 'Estado do e-mail',
  }),
  it: draft({
    contactLanguage: 'Lingua di contatto preferita *',
    notesOptional: 'Breve nota (opzionale)',
    leadSaved: 'La richiesta è stata salvata.',
    emailSent: 'Email di conferma inviata.',
    emailFailed: 'Invio email non riuscito. La richiesta è salvata.',
    emailStatusLabel: 'Stato email',
  }),
  el: draft(),
  tr: draft(),
  uk: draft(),
  ru: draft(),
  sq: draft(),
  mk: draft(),
  bs: draft(),
  be: draft(),
  ga: draft(),
  mt: draft(),
  is: draft(),
  ar: draft(),
};

export function getAccessRequestUiLabels(locale: Locale): AccessRequestUiLabels {
  return accessRequestUiLabels[locale] ?? en;
}

export function describeEmailDeliveryStatus(
  locale: Locale,
  status: string | null | undefined,
  emailSent?: boolean | null,
): string {
  const labels = getAccessRequestUiLabels(locale);
  if (emailSent === true || status === 'sent' || status === 'delivered') {
    return labels.emailSent;
  }
  switch (status) {
    case 'provider_not_configured':
      return labels.emailProviderMissing;
    case 'blocked_by_staging_allowlist':
      return labels.emailBlockedAllowlist;
    case 'console':
      return labels.emailConsole;
    case 'skipped':
      return labels.emailSkipped;
    case 'failed':
    case 'suppressed':
      return labels.emailFailed;
    default:
      return labels.emailFailed;
  }
}
