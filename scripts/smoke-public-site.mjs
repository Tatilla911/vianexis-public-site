#!/usr/bin/env node
/**
 * Post-deploy smoke checks for vianexis-public-site.
 * Usage: node scripts/smoke-public-site.mjs [baseUrl]
 *        npm run smoke:public -- https://vianexis.eu
 */
const baseUrl = (
  process.argv[2] ??
  process.env.SMOKE_BASE_URL ??
  "https://vianexis.eu"
).replace(/\/$/, "");

const pages = [
  { path: "/hu", expectStatus: 200 },
  { path: "/en", expectStatus: 200 },
  { path: "/hu/privacy", expectStatus: 200 },
  { path: "/en/privacy", expectStatus: 200 },
  { path: "/hu/contact", expectStatus: 200 },
  { path: "/en/contact", expectStatus: 200 },
  { path: "/hu/disclaimers", expectStatus: 200 },
  { path: "/en/disclaimers", expectStatus: 200 },
  { path: "/robots.txt", expectStatus: 200 },
  { path: "/sitemap.xml", expectStatus: 200 },
];

const redirects = [
  { path: "/", expectedLocation: "/hu" },
  { path: "/privacy", expectedLocation: "/hu/privacy" },
  { path: "/terms", expectedLocation: "/hu/terms" },
  { path: "/legal", expectedLocation: "/hu/legal" },
  { path: "/disclaimers", expectedLocation: "/hu/disclaimers" },
  { path: "/contact", expectedLocation: "/hu/contact" },
];

const results = [];

function record(name, ok, detail) {
  results.push({ name, ok, detail });
  const tag = ok ? "PASS" : "FAIL";
  console.log(`${tag}: ${name}${detail ? ` — ${detail}` : ""}`);
}

async function checkPage({ path, expectStatus }) {
  const url = `${baseUrl}${path}`;
  try {
    const response = await fetch(url, { redirect: "follow" });
    const ok = response.status === expectStatus;
    record(`${path} → ${expectStatus}`, ok, `got ${response.status}`);
  } catch (error) {
    record(`${path} → ${expectStatus}`, false, String(error));
  }
}

function normalizePath(location, baseUrl) {
  if (!location) return "";
  try {
    const url = new URL(location, baseUrl);
    const path = url.pathname.replace(/\/$/, "") || "/";
    return path;
  } catch {
    return location;
  }
}

async function checkRedirect({ path, expectedLocation }) {
  const url = `${baseUrl}${path}`;
  try {
    let response = await fetch(url, { redirect: "manual" });
    let location = response.headers.get("location") ?? "";

    // Apex → www hop (common on Vercel) — re-check redirect on resolved host.
    if (
      response.status >= 300 &&
      response.status < 400 &&
      location &&
      !normalizePath(location, baseUrl).includes(expectedLocation)
    ) {
      const hopUrl = new URL(location, baseUrl).toString();
      response = await fetch(hopUrl, { redirect: "manual" });
      location = response.headers.get("location") ?? location;
    }

    const status = response.status;
    const locationPath = normalizePath(location, baseUrl);
    const expectedPath = normalizePath(expectedLocation, baseUrl);
    const ok =
      status >= 300 &&
      status < 400 &&
      (locationPath === expectedPath || locationPath.endsWith(expectedPath));
    record(
      `${path} redirect → ${expectedLocation}`,
      ok,
      ok ? `status ${status}` : `status ${status}, location ${location || "(none)"}`,
    );
  } catch (error) {
    record(`${path} redirect → ${expectedLocation}`, false, String(error));
  }
}

console.log(`Smoke check base URL: ${baseUrl}\n`);

for (const redirect of redirects) {
  await checkRedirect(redirect);
}

for (const page of pages) {
  await checkPage(page);
}

const failed = results.filter((r) => !r.ok);
console.log(`\n--- Summary ---`);
console.log(`Total: ${results.length} | PASS: ${results.length - failed.length} | FAIL: ${failed.length}`);

if (failed.length > 0) {
  console.error("\nSmoke check FAILED.");
  process.exit(1);
}

console.log("\nSmoke check PASSED.");
