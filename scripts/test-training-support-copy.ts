/**
 * Training / onboarding-support copy regression tests.
 * Run: npx --yes tsx --test scripts/test-training-support-copy.ts
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getTrainingSupportCopy,
  TRAINING_SUPPORT_GOLDEN,
} from '../src/lib/i18n/training-support-copy';

test('HU full title and body cover direct HU/EN, interpreter, materials, tailored', () => {
  const hu = TRAINING_SUPPORT_GOLDEN.hu;
  assert.equal(hu.title, 'Oktatás és bevezetési támogatás');
  const body = hu.paragraphs.join('\n');
  assert.match(body, /magyar és angol/i);
  assert.match(body, /tolmács/i);
  assert.match(body, /segédanyag/i);
  assert.match(body, /igazítható/i);
  assert.doesNotMatch(body, /minden támogatott nyelv/i);
  assert.doesNotMatch(body, /every supported/i);
});

test('EN full title and body cover direct HU/EN, interpreter, materials, tailored', () => {
  const en = TRAINING_SUPPORT_GOLDEN.en;
  assert.equal(en.title, 'Training and onboarding support');
  const body = en.paragraphs.join('\n');
  assert.match(body, /Hungarian and English/i);
  assert.match(body, /interpreter/i);
  assert.match(body, /training materials|guides|documentation/i);
  assert.match(body, /tailored/i);
  assert.doesNotMatch(body, /every app language/i);
  assert.doesNotMatch(body, /native-language trainers in every/i);
});

test('compact HU/EN notes keep the same language model', () => {
  const hu = getTrainingSupportCopy('hu');
  const en = getTrainingSupportCopy('en');
  assert.match(hu.compact, /magyar és angol/i);
  assert.match(hu.compact, /tolmács/i);
  assert.match(hu.compact, /segédanyag/i);
  assert.match(en.compact, /Hungarian and English/i);
  assert.match(en.compact, /interpreter/i);
  assert.match(en.compact, /training materials/i);
});

test('non-HU locales fall back to EN (no false HU leakage)', () => {
  const de = getTrainingSupportCopy('de');
  assert.equal(de.title, TRAINING_SUPPORT_GOLDEN.en.title);
  assert.equal(de.compact, TRAINING_SUPPORT_GOLDEN.en.compact);
  assert.doesNotMatch(de.compact, /magyar/i);
});
