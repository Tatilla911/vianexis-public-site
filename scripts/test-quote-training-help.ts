/**
 * Quote questionnaire training help copy.
 * Run: npx --yes tsx --test scripts/test-quote-training-help.ts
 */
import assert from 'node:assert/strict';
import test from 'node:test';
import { helpFor, QUOTE_QUESTIONS } from '../src/lib/quote-questionnaire/schema';
import { TRAINING_SUPPORT_GOLDEN } from '../src/lib/i18n/training-support-copy';

test('training_needed exposes compact HU/EN language model help', () => {
  const q = QUOTE_QUESTIONS.find((row) => row.id === 'training_needed');
  assert.ok(q);
  assert.equal(q.helpHu, TRAINING_SUPPORT_GOLDEN.hu.compact);
  assert.equal(q.helpEn, TRAINING_SUPPORT_GOLDEN.en.compact);
  assert.equal(helpFor(q, 'hu'), TRAINING_SUPPORT_GOLDEN.hu.compact);
  assert.equal(helpFor(q, 'en'), TRAINING_SUPPORT_GOLDEN.en.compact);
  assert.match(helpFor(q, 'hu') ?? '', /tolmács/i);
  assert.match(helpFor(q, 'en') ?? '', /interpreter/i);
  assert.doesNotMatch(helpFor(q, 'en') ?? '', /every supported language/i);
});
