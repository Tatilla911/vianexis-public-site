# Hostinger / public site deploy checklist

**Site:** vianexis.eu (`vianexis-public-site`)  
**Updated:** 2026-07-06  
**Production domain:** https://vianexis.eu

---

## Hosting mode decision

| Mode | Use for vianexis.eu? |
|------|----------------------|
| **Node / Next.js** (`npm run start`) | **Yes — recommended** |
| **Static export only** | **No** — middleware + `/api/contact` required |

See **[production-deploy-vianexis-eu.md](./production-deploy-vianexis-eu.md)** for full Option A vs B analysis.

---

## Pre-deploy verification (local)

```bash
cd vianexis-public-site
git status          # deploy files only — no .env, no WIP locale scripts
npm run validate    # locale gate + lint + build
```

---

## Build commands

```bash
npm ci
npm run build
npm run start       # production server on port 3000
```

---

## Environment variables (server)

Set in hosting panel — **never commit `.env`:**

```bash
API_BASE_URL=https://api.vianexis.hu
CONTACT_INTAKE_ENABLED=true   # only when backend intake verified
```

| Variable | When to set |
|----------|-------------|
| `API_BASE_URL` | Before enabling contact intake |
| `CONTACT_INTAKE_ENABLED=true` | After backend `POST /public/intake/contact` verified |
| `NEXT_PUBLIC_SITE_URL` | Optional; defaults to `https://vianexis.eu` via `siteConfig` |

**Default deploy:** intake disabled (`CONTACT_INTAKE_ENABLED` unset/false), mailto fallback active, submit button disabled — **no false success**.

---

## Deploy target options

| Target | Notes |
|--------|-------|
| **Vercel** | Recommended for Next.js — set env vars in dashboard |
| **Hostinger Node/VPS** | `npm ci && npm run build && npm run start` behind HTTPS reverse proxy |
| **Hostinger static only** | **Not suitable** — see production-deploy doc |

---

## DNS / domain

| Record | Value |
|--------|-------|
| Domain | `vianexis.eu` |
| HTTPS | Required for Play Console privacy URL |

---

## Post-deploy smoke (automated)

```bash
npm run smoke:public -- https://vianexis.eu
```

Script: `scripts/smoke-public-site.mjs`

### Smoke URL list

| URL | Expected |
|-----|----------|
| https://vianexis.eu/ | Redirect → `/hu` |
| https://vianexis.eu/hu | 200 HU home |
| https://vianexis.eu/en | 200 EN home |
| https://vianexis.eu/hu/privacy | 200 — **Play Console privacy (HU)** |
| https://vianexis.eu/en/privacy | 200 — **Play Console privacy (EN)** |
| https://vianexis.eu/hu/contact | 200 contact form |
| https://vianexis.eu/en/contact | 200 contact form |
| https://vianexis.eu/hu/disclaimers | 200 disclaimers |
| https://vianexis.eu/en/disclaimers | 200 disclaimers |
| https://vianexis.eu/sitemap.xml | 200 sitemap |
| https://vianexis.eu/robots.txt | 200 robots |
| https://vianexis.eu/api/contact/status | `{ "enabled": true/false }` |

**Legacy redirect checks** (included in smoke script): `/privacy` → `/hu/privacy`, `/terms` → `/hu/terms`, `/legal` → `/hu/legal`, `/disclaimers` → `/hu/disclaimers`, `/contact` → `/hu/contact`

---

## Manual post-deploy checks

- [ ] Privacy pages load without login; no 404/500
- [ ] HU/EN privacy show internal testing version badge (not final legal counsel claim)
- [ ] Draft locale `/de/privacy` shows translation under review notice
- [ ] Language switcher preserves path (e.g. `/hu/privacy` → `/en/privacy`)
- [ ] Contact: submit disabled OR succeeds with backend 201 — never false success
- [ ] Mailto fallback works when intake disabled
- [ ] No “Download on Google Play” CTA on site
- [ ] No certified eFTI claim
- [ ] No production push/FCM ready claim

---

## Contact form verification

| State | Expected |
|-------|----------|
| Intake disabled (default) | Submit disabled; localized notice; mailto link works |
| Intake enabled | `GET /api/contact/status` → `{ enabled: true }`; POST → backend 201; success message |

Proxy: `POST /api/contact` → `POST {API_BASE_URL}/public/intake/contact`

Backend dependency: captcha if `CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS=true` on backend.

---

## Play Console linkage

After deploy:

| Field | Value |
|-------|-------|
| Privacy policy (HU) | https://vianexis.eu/hu/privacy |
| Privacy policy (EN) | https://vianexis.eu/en/privacy |
| Support email | info@vianexis.eu |
| App access instructions | See `google-play-internal-upload-pack.md` |
| Data Safety | Draft in upload pack — complete manually in Console |

---

## Rollback

1. Re-deploy previous build artifact / git tag in hosting panel
2. Run `npm run smoke:public -- https://vianexis.eu` — privacy URLs must stay 200 (Play Console breaks on 404)
3. If contact intake misbehaves: set `CONTACT_INTAKE_ENABLED=false`, redeploy

---

## Related docs

- [production-deploy-vianexis-eu.md](./production-deploy-vianexis-eu.md)
- [public-site-deploy-readiness.md](./public-site-deploy-readiness.md)
- [google-play-internal-upload-pack.md](./google-play-internal-upload-pack.md)
