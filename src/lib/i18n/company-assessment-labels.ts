/** Company needs assessment wizard labels — prepared for all 35 locales. */
import type { Locale } from './types';

export type CompanyAssessmentLabels = {
  title: string;
  subtitle: string;
  continueTitle: string;
  save: string;
  saving: string;
  saved: string;
  next: string;
  back: string;
  submit: string;
  submitting: string;
  submittedTitle: string;
  submittedBody: string;
  summaryTitle: string;
  invalidLink: string;
  expiredLink: string;
  loading: string;
  stepCompany: string;
  stepSize: string;
  stepOperations: string;
  stepModules: string;
  stepIntegrations: string;
  stepRollout: string;
  stepSummary: string;
};

const en: CompanyAssessmentLabels = {
  title: 'Company needs assessment',
  subtitle: 'Quote request questionnaire — save and continue later via your secure link.',
  continueTitle: 'Continue company needs assessment',
  save: 'Save draft',
  saving: 'Saving…',
  saved: 'Draft saved',
  next: 'Next',
  back: 'Back',
  submit: 'Submit assessment',
  submitting: 'Submitting…',
  submittedTitle: 'Assessment submitted',
  submittedBody:
    'Thank you. Your snapshot is locked. Our team will review and prepare a quote suggestion.',
  summaryTitle: 'Review before submit',
  invalidLink: 'This continue link is invalid.',
  expiredLink: 'This continue link has expired.',
  loading: 'Loading assessment…',
  stepCompany: 'Official company data',
  stepSize: 'Company size',
  stepOperations: 'Trip operations',
  stepModules: 'Required ViaNexis modules',
  stepIntegrations: 'Integrations',
  stepRollout: 'Rollout and support',
  stepSummary: 'Summary',
};

const hu: CompanyAssessmentLabels = {
  title: 'Céges igényfelmérés',
  subtitle: 'Árajánlatkérés kérdőív — menthető, később biztonságos linken folytatható.',
  continueTitle: 'Igényfelmérés folytatása',
  save: 'Piszkozat mentése',
  saving: 'Mentés…',
  saved: 'Piszkozat mentve',
  next: 'Tovább',
  back: 'Vissza',
  submit: 'Igényfelmérés beküldése',
  submitting: 'Beküldés…',
  submittedTitle: 'Igényfelmérés beküldve',
  submittedBody:
    'Köszönjük. A válaszok zárolt pillanatképet kaptak. Csapatunk felülvizsgálja és árazási javaslatot készít.',
  summaryTitle: 'Összegzés beküldés előtt',
  invalidLink: 'Ez a folytató link érvénytelen.',
  expiredLink: 'Ez a folytató link lejárt.',
  loading: 'Igényfelmérés betöltése…',
  stepCompany: 'Hivatalos cégadatok',
  stepSize: 'Cégméret',
  stepOperations: 'Fuvarműködés',
  stepModules: 'Szükséges ViaNexis modulok',
  stepIntegrations: 'Integrációk',
  stepRollout: 'Bevezetés és támogatás',
  stepSummary: 'Összegzés',
};

function draft(overrides: Partial<CompanyAssessmentLabels> = {}): CompanyAssessmentLabels {
  return { ...en, ...overrides };
}

export const companyAssessmentLabels: Record<Locale, CompanyAssessmentLabels> = {
  en,
  hu,
  de: draft({
    title: 'Unternehmensbedarfsanalyse',
    continueTitle: 'Bedarfsanalyse fortsetzen',
    stepCompany: 'Offizielle Firmendaten',
    stepSize: 'Unternehmensgröße',
    stepOperations: 'Transportbetrieb',
    stepModules: 'Erforderliche ViaNexis-Module',
    stepIntegrations: 'Integrationen',
    stepRollout: 'Einführung und Support',
    stepSummary: 'Zusammenfassung',
  }),
  ro: draft({
    title: 'Evaluare nevoi companie',
    continueTitle: 'Continuă evaluarea',
    stepCompany: 'Date oficiale firmă',
    stepSize: 'Dimensiune companie',
    stepOperations: 'Operațiuni transport',
    stepModules: 'Module ViaNexis necesare',
    stepIntegrations: 'Integrări',
    stepRollout: 'Implementare și suport',
    stepSummary: 'Rezumat',
  }),
  sk: draft({
    title: 'Firemný prieskum potrieb',
    continueTitle: 'Pokračovať v prieskume',
    stepCompany: 'Oficiálne firemné údaje',
    stepSize: 'Veľkosť firmy',
    stepOperations: 'Prevádzka prepráv',
    stepModules: 'Požadované moduly ViaNexis',
    stepIntegrations: 'Integrácie',
    stepRollout: 'Nasadenie a podpora',
    stepSummary: 'Súhrn',
  }),
  pl: draft({
    title: 'Ocena potrzeb firmy',
    continueTitle: 'Kontynuuj ocenę',
    stepCompany: 'Oficjalne dane firmy',
    stepSize: 'Wielkość firmy',
    stepOperations: 'Operacje transportowe',
    stepModules: 'Wymagane moduły ViaNexis',
    stepIntegrations: 'Integracje',
    stepRollout: 'Wdrożenie i wsparcie',
    stepSummary: 'Podsumowanie',
  }),
  cs: draft({
    title: 'Průzkum potřeb společnosti',
    continueTitle: 'Pokračovat v průzkumu',
    stepCompany: 'Oficiální údaje společnosti',
    stepSize: 'Velikost společnosti',
    stepOperations: 'Provoz přeprav',
    stepModules: 'Požadované moduly ViaNexis',
    stepIntegrations: 'Integrace',
    stepRollout: 'Zavedení a podpora',
    stepSummary: 'Shrnutí',
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
    title: 'Bedrijfsbehoefteanalyse',
    continueTitle: 'Analyse voortzetten',
    stepCompany: 'Officiële bedrijfsgegevens',
    stepSize: 'Bedrijfsgrootte',
    stepOperations: 'Transportoperaties',
    stepModules: 'Benodigde ViaNexis-modules',
    stepIntegrations: 'Integraties',
    stepRollout: 'Uitrol en support',
    stepSummary: 'Samenvatting',
  }),
  fr: draft({
    title: "Évaluation des besoins de l'entreprise",
    continueTitle: "Poursuivre l'évaluation",
    stepCompany: "Données officielles de l'entreprise",
    stepSize: "Taille de l'entreprise",
    stepOperations: 'Opérations de transport',
    stepModules: 'Modules ViaNexis requis',
    stepIntegrations: 'Intégrations',
    stepRollout: 'Déploiement et support',
    stepSummary: 'Résumé',
  }),
  es: draft({
    title: 'Evaluación de necesidades de la empresa',
    continueTitle: 'Continuar evaluación',
    stepCompany: 'Datos oficiales de la empresa',
    stepSize: 'Tamaño de la empresa',
    stepOperations: 'Operaciones de transporte',
    stepModules: 'Módulos ViaNexis necesarios',
    stepIntegrations: 'Integraciones',
    stepRollout: 'Implantación y soporte',
    stepSummary: 'Resumen',
  }),
  pt: draft({
    title: 'Avaliação de necessidades da empresa',
    continueTitle: 'Continuar avaliação',
    stepCompany: 'Dados oficiais da empresa',
    stepSize: 'Dimensão da empresa',
    stepOperations: 'Operações de transporte',
    stepModules: 'Módulos ViaNexis necessários',
    stepIntegrations: 'Integrações',
    stepRollout: 'Implementação e suporte',
    stepSummary: 'Resumo',
  }),
  it: draft({
    title: 'Valutazione delle esigenze aziendali',
    continueTitle: 'Continua valutazione',
    stepCompany: 'Dati ufficiali azienda',
    stepSize: 'Dimensione azienda',
    stepOperations: 'Operazioni di trasporto',
    stepModules: 'Moduli ViaNexis richiesti',
    stepIntegrations: 'Integrazioni',
    stepRollout: 'Avvio e supporto',
    stepSummary: 'Riepilogo',
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

export function getCompanyAssessmentLabels(
  locale: Locale,
): CompanyAssessmentLabels {
  return companyAssessmentLabels[locale] ?? en;
}
