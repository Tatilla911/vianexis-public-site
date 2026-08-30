/**
 * Enterprise integration public copy — 35-locale completeness + claim consistency.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "../src/lib/i18n/locales";
import {
  enterpriseIntegrationEn,
  enterpriseIntegrationHu,
  resolveEnterpriseIntegration,
} from "../src/lib/i18n/enterprise-integration";
import { enterpriseIntegrationByLocale } from "../src/lib/i18n/enterprise-integration/catalog.generated";
import type { EnterpriseIntegrationContent } from "../src/lib/i18n/enterprise-integration/types";

const REQUIRED_KEYS: (keyof EnterpriseIntegrationContent)[] = [
  "eyebrow",
  "title",
  "body",
  "coexistence",
  "capabilityNote",
  "architectureNote",
  "partnerApiNote",
  "sandboxNote",
  "directionsTitle",
  "directions",
  "capabilitiesTitle",
  "capabilities",
  "examplesTitle",
  "examples",
  "systemsLabel",
  "systems",
  "flowExternal",
  "flowExternalDetail",
  "flowLayer",
  "flowLayerDetail",
  "flowOperations",
  "flowOperationsDetail",
  "ctaPrimary",
  "ctaSecondary",
];

const FORBIDDEN_OVERCLAIM = [
  "works with every TMS",
  "all providers supported",
  "plug-and-play with every system",
  "ready connector available",
  "already integrates with every",
];

function collectStrings(node: unknown, acc: string[] = []): string[] {
  if (typeof node === "string") {
    acc.push(node);
    return acc;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, acc);
    return acc;
  }
  if (node && typeof node === "object") {
    for (const value of Object.values(node)) collectStrings(value, acc);
  }
  return acc;
}

function looksLikeRawKey(value: string): boolean {
  return (
    /^[a-z]+([A-Z][a-z0-9]+)+$/.test(value) ||
    value.startsWith("enterpriseIntegration.") ||
    value.startsWith("globalSearch")
  );
}

test("exactly 35 public locales for enterprise integration catalog", () => {
  assert.equal(locales.length, 35);
  assert.equal(Object.keys(enterpriseIntegrationByLocale).length, 35);
  for (const locale of locales) {
    assert.ok(
      enterpriseIntegrationByLocale[locale],
      `missing catalog locale ${locale}`,
    );
  }
});

test("canonical HU/EN resolve to hand-authored sources", () => {
  assert.equal(resolveEnterpriseIntegration("hu").title, enterpriseIntegrationHu.title);
  assert.equal(resolveEnterpriseIntegration("en").title, enterpriseIntegrationEn.title);
  assert.match(enterpriseIntegrationEn.body, /provider-neutral/i);
  assert.match(enterpriseIntegrationHu.title, /ViaNexis/);
});

test("all 35 locales have non-empty required keys and no raw keys", () => {
  let missing = 0;
  let empty = 0;
  let raw = 0;
  for (const locale of locales) {
    const copy = resolveEnterpriseIntegration(locale);
    for (const key of REQUIRED_KEYS) {
      const value = copy[key];
      if (value == null) {
        missing += 1;
        continue;
      }
      for (const text of collectStrings(value)) {
        if (!text.trim()) empty += 1;
        if (looksLikeRawKey(text)) raw += 1;
      }
    }
    assert.ok(copy.directions.length >= 2, `${locale} directions`);
    assert.ok(copy.capabilities.length >= 5, `${locale} capabilities`);
    assert.ok(copy.examples.length >= 3, `${locale} examples`);
    assert.ok(copy.systems.includes("TMS"), `${locale} missing TMS`);
    assert.ok(copy.systems.includes("ERP"), `${locale} missing ERP`);
  }
  assert.equal(missing, 0);
  assert.equal(empty, 0);
  assert.equal(raw, 0);
});

test("no overclaim phrasing across locales", () => {
  for (const locale of locales) {
    const blob = collectStrings(resolveEnterpriseIntegration(locale))
      .join("\n")
      .toLowerCase();
    for (const phrase of FORBIDDEN_OVERCLAIM) {
      assert.equal(
        blob.includes(phrase.toLowerCase()),
        false,
        `${locale} contains forbidden claim: ${phrase}`,
      );
    }
  }
});

test("two-way + capability-dependent claims preserved in EN/HU", () => {
  const en = resolveEnterpriseIntegration("en");
  const hu = resolveEnterpriseIntegration("hu");
  assert.match(en.body, /can connect to external systems/i);
  assert.match(en.body, /external systems can connect to ViaNexis/i);
  assert.match(en.capabilityNote, /subject to the capabilities/i);
  assert.match(en.coexistence, /do not necessarily need to replace/i);
  assert.match(en.sandboxNote, /sandbox/i);
  assert.match(en.partnerApiNote, /Partner API/i);
  assert.match(hu.body, /külső rendszerekhez/i);
  assert.match(hu.capabilityNote, /külső rendszer/i);
  assert.match(hu.coexistence, /nem feltétlenül kell lecserélniük/i);
});

test("Arabic catalog entry is present and RTL-safe text non-empty", () => {
  const ar = resolveEnterpriseIntegration("ar");
  assert.ok(ar.title.trim().length > 0);
  assert.ok(ar.body.trim().length > 0);
  assert.notEqual(ar.title, enterpriseIntegrationEn.title);
});
