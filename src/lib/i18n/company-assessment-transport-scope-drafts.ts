/**
 * Draft (non-golden) transport-scope labels.
 * HU/EN live in company-assessment-labels.ts and override these.
 * Values must not equal the English source strings (assessment label test P).
 */
import type { Locale } from './types';

type TransportScopeDraft = {
  transportScope: string;
  transportScopeDomestic: string;
  transportScopeInternational: string;
  transportScopeMixed: string;
};

export const TRANSPORT_SCOPE_FIELD_DRAFTS: Partial<
  Record<Locale, TransportScopeDraft>
> = {
  de: {
    transportScope: 'Beförderungsbereich',
    transportScopeDomestic: 'Inlandsverkehr',
    transportScopeInternational: 'Internationaler Verkehr',
    transportScopeMixed: 'Gemischt',
  },
  ro: {
    transportScope: 'Domeniul de transport',
    transportScopeDomestic: 'Transport intern',
    transportScopeInternational: 'Transport internațional',
    transportScopeMixed: 'Mixt',
  },
  sk: {
    transportScope: 'Rozsah prepravy',
    transportScopeDomestic: 'Vnútroštátna preprava',
    transportScopeInternational: 'Medzinárodná preprava',
    transportScopeMixed: 'Zmiešané',
  },
  pl: {
    transportScope: 'Zakres transportu',
    transportScopeDomestic: 'Transport krajowy',
    transportScopeInternational: 'Transport międzynarodowy',
    transportScopeMixed: 'Mieszany',
  },
  cs: {
    transportScope: 'Rozsah přepravy',
    transportScopeDomestic: 'Vnitrostátní přeprava',
    transportScopeInternational: 'Mezinárodní přeprava',
    transportScopeMixed: 'Kombinované',
  },
  bg: {
    transportScope: 'Обхват на транспорта',
    transportScopeDomestic: 'Вътрешен транспорт',
    transportScopeInternational: 'Международен транспорт',
    transportScopeMixed: 'Смесен',
  },
  hr: {
    transportScope: 'Opseg prijevoza',
    transportScopeDomestic: 'Domaći prijevoz',
    transportScopeInternational: 'Međunarodni prijevoz',
    transportScopeMixed: 'Mješovito',
  },
  sr: {
    transportScope: 'Obuhvat prevoza',
    transportScopeDomestic: 'Domaći prevoz',
    transportScopeInternational: 'Međunarodni prevoz',
    transportScopeMixed: 'Mešovito',
  },
  sl: {
    transportScope: 'Obseg prevoza',
    transportScopeDomestic: 'Notranji prevoz',
    transportScopeInternational: 'Mednarodni prevoz',
    transportScopeMixed: 'Mešano',
  },
  et: {
    transportScope: 'Veokäsitlusala',
    transportScopeDomestic: 'Siseriiklik vedu',
    transportScopeInternational: 'Rahvusvaheline vedu',
    transportScopeMixed: 'Kombineeritud',
  },
  lv: {
    transportScope: 'Pārvadājumu tvērums',
    transportScopeDomestic: 'Iekšzemes pārvadājumi',
    transportScopeInternational: 'Starptautiskie pārvadājumi',
    transportScopeMixed: 'Jaukts',
  },
  lt: {
    transportScope: 'Vežimo apimtis',
    transportScopeDomestic: 'Vidaus vežimas',
    transportScopeInternational: 'Tarptautinis vežimas',
    transportScopeMixed: 'Mišrus',
  },
  fi: {
    transportScope: 'Kuljetuksen laajuus',
    transportScopeDomestic: 'Kotimaan kuljetus',
    transportScopeInternational: 'Kansainvälinen kuljetus',
    transportScopeMixed: 'Yhdistetty',
  },
  sv: {
    transportScope: 'Transportens omfattning',
    transportScopeDomestic: 'Inrikestransport',
    transportScopeInternational: 'Internationell transport',
    transportScopeMixed: 'Kombinerat',
  },
  da: {
    transportScope: 'Transportens omfang',
    transportScopeDomestic: 'Indenlandsk transport',
    transportScopeInternational: 'Grænseoverskridende transport',
    transportScopeMixed: 'Kombineret',
  },
  nb: {
    transportScope: 'Transportens omfang',
    transportScopeDomestic: 'Innenlandsk transport',
    transportScopeInternational: 'Internasjonal transport',
    transportScopeMixed: 'Kombinert',
  },
  nl: {
    transportScope: 'Vervoersbereik',
    transportScopeDomestic: 'Binnenlands vervoer',
    transportScopeInternational: 'Internationaal vervoer',
    transportScopeMixed: 'Gecombineerd',
  },
  fr: {
    transportScope: 'Périmètre de transport',
    transportScopeDomestic: 'Transport national',
    transportScopeInternational: 'Transport international',
    transportScopeMixed: 'Mixte',
  },
  es: {
    transportScope: 'Ámbito de transporte',
    transportScopeDomestic: 'Transporte nacional',
    transportScopeInternational: 'Transporte internacional',
    transportScopeMixed: 'Combinado',
  },
  pt: {
    transportScope: 'Âmbito do transporte',
    transportScopeDomestic: 'Transporte nacional',
    transportScopeInternational: 'Transporte internacional',
    transportScopeMixed: 'Combinado',
  },
  it: {
    transportScope: 'Ambito del trasporto',
    transportScopeDomestic: 'Trasporto nazionale',
    transportScopeInternational: 'Trasporto internazionale',
    transportScopeMixed: 'Combinato',
  },
  el: {
    transportScope: 'Εύρος μεταφοράς',
    transportScopeDomestic: 'Εσωτερικές μεταφορές',
    transportScopeInternational: 'Διεθνείς μεταφορές',
    transportScopeMixed: 'Μεικτό',
  },
  tr: {
    transportScope: 'Taşıma kapsamı',
    transportScopeDomestic: 'Yurt içi taşıma',
    transportScopeInternational: 'Uluslararası taşıma',
    transportScopeMixed: 'Karma',
  },
  uk: {
    transportScope: 'Сфера перевезень',
    transportScopeDomestic: 'Внутрішні перевезення',
    transportScopeInternational: 'Міжнародні перевезення',
    transportScopeMixed: 'Змішані',
  },
  ru: {
    transportScope: 'Сфера перевозок',
    transportScopeDomestic: 'Внутренние перевозки',
    transportScopeInternational: 'Международные перевозки',
    transportScopeMixed: 'Смешанные',
  },
  sq: {
    transportScope: 'Fushëveprimi i transportit',
    transportScopeDomestic: 'Transport i brendshëm',
    transportScopeInternational: 'Transport ndërkombëtar',
    transportScopeMixed: 'I përzier',
  },
  mk: {
    transportScope: 'Опсег на транспорт',
    transportScopeDomestic: 'Внатрешен транспорт',
    transportScopeInternational: 'Меѓународен транспорт',
    transportScopeMixed: 'Мешано',
  },
  bs: {
    transportScope: 'Opseg prevoza',
    transportScopeDomestic: 'Domaći prevoz',
    transportScopeInternational: 'Međunarodni prevoz',
    transportScopeMixed: 'Mješovito',
  },
  be: {
    transportScope: 'Сфера перавозак',
    transportScopeDomestic: 'Унутраныя перавозкі',
    transportScopeInternational: 'Міжнародныя перавозкі',
    transportScopeMixed: 'Змешаныя',
  },
  ga: {
    transportScope: 'Raon iompair',
    transportScopeDomestic: 'Iompar intíre',
    transportScopeInternational: 'Iompar idirnáisiúnta',
    transportScopeMixed: 'Measctha',
  },
  mt: {
    transportScope: 'Ambitu tat-trasport',
    transportScopeDomestic: 'Trasport domestiku',
    transportScopeInternational: 'Trasport internazzjonali',
    transportScopeMixed: 'Imħallat',
  },
  is: {
    transportScope: 'Umfang flutninga',
    transportScopeDomestic: 'Innlendir flutningar',
    transportScopeInternational: 'Alþjóðlegir flutningar',
    transportScopeMixed: 'Blandað',
  },
  ar: {
    transportScope: 'نطاق النقل',
    transportScopeDomestic: 'النقل المحلي',
    transportScopeInternational: 'النقل الدولي',
    transportScopeMixed: 'مختلط',
  },
};
