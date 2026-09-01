/**
 * Public Telematics Integration page — routing, pricing copy, claim safety.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "../src/lib/i18n/locales";
import { switchLocalePath } from "../src/lib/i18n/paths";
import {
  resolveTelematicsIntegrationsContent,
  TELEMATICS_PROVIDER_EXAMPLES,
  telematicsIntegrationsPath,
} from "../src/lib/i18n/telematics-integrations";

test("exactly 35 public locales for telematics integrations routing", () => {
  assert.equal(locales.length, 35);
  for (const locale of locales) {
    const path = telematicsIntegrationsPath(locale);
    const copy = resolveTelematicsIntegrationsContent(locale);
    assert.ok(copy.heroTitle.trim().length > 0, `${locale} empty hero`);
    assert.ok(copy.pricingBase.includes("79"), `${locale} missing base 79`);
    assert.ok(copy.ctaAssessment.trim().length > 0, `${locale} missing CTA`);
    if (locale === "hu") {
      assert.equal(path, "/hu/telematikai-integraciok");
    } else {
      assert.equal(path, `/${locale}/telematics-integrations`);
    }
  }
});

test("HU and EN canonical hero and pricing copy", () => {
  const hu = resolveTelematicsIntegrationsContent("hu");
  const en = resolveTelematicsIntegrationsContent("en");
  assert.equal(hu.heroTitle, "Már van GPS-rendszere? Nem kell lecserélnie.");
  assert.match(hu.heroSubtitle, /összekapcsolja/);
  assert.match(hu.pricingBase, /79/);
  assert.equal(
    en.heroTitle,
    "Already have a GPS system? You do not need to replace it.",
  );
  assert.match(en.pricingBase, /79/);
  assert.match(en.pricingClarification, /does not automatically reduce/);
});

test("AR structural locale uses EN telematics slug and non-empty copy", () => {
  const path = telematicsIntegrationsPath("ar");
  assert.equal(path, "/ar/telematics-integrations");
  const copy = resolveTelematicsIntegrationsContent("ar");
  assert.equal(copy.heroTitle, resolveTelematicsIntegrationsContent("en").heroTitle);
  assert.match(copy.securityBody, /24\/7/);
});

test("locale switch maps HU/EN telematics slugs", () => {
  assert.equal(
    switchLocalePath("/hu/telematikai-integraciok", "en"),
    "/en/telematics-integrations",
  );
  assert.equal(
    switchLocalePath("/en/telematics-integrations", "hu"),
    "/hu/telematikai-integraciok",
  );
  assert.equal(
    switchLocalePath("/ar/telematics-integrations", "hu"),
    "/hu/telematikai-integraciok",
  );
});

test("provider examples are not claimed as live-integrated", () => {
  const holazauto = TELEMATICS_PROVIDER_EXAMPLES.find(
    (row) => row.name === "HolAzAutó",
  );
  assert.ok(holazauto);
  assert.notEqual(holazauto.status, "supported");
  const blob = JSON.stringify([
    resolveTelematicsIntegrationsContent("hu"),
    resolveTelematicsIntegrationsContent("en"),
    TELEMATICS_PROVIDER_EXAMPLES,
  ]).toLowerCase();
  assert.equal(blob.includes("already integrates with holazautó"), false);
  assert.equal(blob.includes("live adapter"), true);
});
