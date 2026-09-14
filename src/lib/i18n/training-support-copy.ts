/**
 * Customer-facing training / onboarding-support copy.
 * Distinguishes live training language availability from app UI languages.
 * Golden HU/EN only — other public-site locales fall back to EN.
 */
import type { Locale } from './types';

export type TrainingSupportCopy = {
  title: string;
  /** Full multi-paragraph body (separate paragraphs). */
  paragraphs: string[];
  /** Compact note for forms / request controls. */
  compact: string;
};

const HU: TrainingSupportCopy = {
  title: 'Oktatás és bevezetési támogatás',
  paragraphs: [
    'A ViaNexis bevezetéséhez teljes körű oktatást és részletes rendszerbemutatót biztosítunk, hogy a cég munkatársai magabiztosan tudják használni a platformot a mindennapi működés során.',
    'Személyes oktatást és élő, teljes körű támogatást magyar és angol nyelven közvetlenül biztosítunk.',
    'Más nyelvek esetén az oktatás igény szerint tolmács bevonásával is megszervezhető, így a fontos folyamatok, beállítások és munkafolyamatok érthetően átadhatók a résztvevők számára.',
    'A személyes oktatás mellett teljes körű segédanyagokat, útmutatókat és oktatási dokumentációt is biztosítunk. Ezek támogatják az önálló betanulást, az új munkatársak későbbi oktatását, valamint a rendszer használatának folyamatos elsajátítását.',
    'Az oktatás tartalma az adott cég működéséhez és a használt ViaNexis funkciókhoz igazítható.',
  ],
  compact:
    'Személyes oktatás magyar és angol nyelven érhető el. Más nyelvek esetén szükség szerint tolmács bevonásával szervezzük meg az oktatást. Teljes körű segédanyagokat minden esetben biztosítunk.',
};

const EN: TrainingSupportCopy = {
  title: 'Training and onboarding support',
  paragraphs: [
    'ViaNexis provides comprehensive training and detailed system guidance to help your team use the platform confidently in day-to-day operations.',
    'Full in-person training and live, comprehensive support are provided directly in Hungarian and English.',
    'For other languages, training can be arranged with an interpreter where required, ensuring that key workflows, settings and operational processes are clearly understood by all participants.',
    'In addition to in-person training, we provide comprehensive training materials, guides and supporting documentation. These materials support self-learning, future onboarding of new employees and continued adoption of the system.',
    'Training can be tailored to your company’s operations and to the ViaNexis features you use.',
  ],
  compact:
    'In-person training is available directly in Hungarian and English. For other languages, training can be arranged with an interpreter where required. Comprehensive training materials are provided in all cases.',
};

export function getTrainingSupportCopy(locale: Locale | string): TrainingSupportCopy {
  const code = String(locale ?? 'en').toLowerCase();
  return code === 'hu' || code.startsWith('hu') ? HU : EN;
}

export const TRAINING_SUPPORT_GOLDEN = { hu: HU, en: EN } as const;
