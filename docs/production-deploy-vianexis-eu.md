# Production deploy — vianexis.eu

**Site:** `vianexis-public-site`  
**Production domain:** https://vianexis.eu  
**Updated:** 2026-07-06

---

## Decision summary

| Option | Recommended | Reason |
|--------|-------------|--------|
| **A — Node / Next.js hosting** | **Yes** | Middleware locale redirects, `/api/contact` proxy, dynamic sitemap/robots |
| **B — Static hosting only** | **No** (not without rework) | API routes + middleware are runtime dependencies |

Use **Option A** for production at `vianexis.eu`, including Google Play privacy URL readiness.

---

## Deploy option A — Node / Next hosting

**Use when you need:**

- `POST /api/contact` → backend `POST /public/intake/contact`
- Middleware redirects (`/` → `/hu`, legacy `/privacy` → `/hu/privacy`, …)
- Dynamic `sitemap.xml` and `robots.txt`
- Next.js App Router server features

### Build

```bash
npm ci
npm run build
```

### Start

```bash
npm run start
```

Default port: **3000**. Put HTTPS reverse proxy (Hostinger, Nginx, Caddy, Vercel) in front.

### Required environment variables

Set in hosting panel — **never commit `.env`:**

```bash
API_BASE_URL=https://api.vianexis.hu
CONTACT_INTAKE_ENABLED=true
```

| Variable | Purpose |
|----------|---------|
| `API_BASE_URL` | Backend base for contact intake proxy |
| `CONTACT_INTAKE_ENABLED` | Must be exactly `true` to enable form submit |
| `NEXT_PUBLIC_SITE_URL` | Optional — not required today; canonical/OG/sitemap use `siteConfig.domain` (`https://vianexis.eu`) |

### Contact form (production)

| State | Behaviour |
|-------|-----------|
| `CONTACT_INTAKE_ENABLED` unset or `false` | Submit disabled; localized notice; **mailto fallback** active; no false success |
| `CONTACT_INTAKE_ENABLED=true` + `API_BASE_URL` set | `GET /api/contact/status` → `{ enabled: true }`; submit → `POST /api/contact` → backend |
| Backend error | Localized cautious error (`copy.errors.submitFailed`); no PII in server logs |

Backend dependency: `POST /public/intake/contact` on `transdoc-backend`. Captcha/rate-limit are separate backend concerns.

### Hosting targets

| Target | Notes |
|--------|-------|
| Vercel | Native Next.js — set env vars in dashboard |
| Hostinger Node / VPS | `npm run build` + `npm run start` + reverse proxy |
| Docker | Build image, run `npm run start`, expose 3000 |

### Post-deploy smoke

```bash
npm run smoke:public -- https://vianexis.eu
```

---

## Deploy option B — Static hosting

**Only suitable if all of the following are true:**

- Contact form runs in **mailto-only** mode (no `/api/contact` proxy)
- Legacy redirects are handled by host rules (`.htaccess`, CDN rules) instead of Next middleware
- `sitemap.xml` / `robots.txt` are pre-generated at build time with production domain
- No runtime Node process

### Current project status

This repo is **not configured for static export**:

- `src/middleware.ts` — locale + legacy path redirects
- `src/app/api/contact/route.ts` — contact intake proxy
- `src/app/api/contact/status/route.ts` — intake status endpoint
- `next.config.ts` — no `output: "export"`

Enabling static export would require a larger refactor (remove API routes, replace middleware redirects with host config, verify contact UX). **Do not attempt as part of the initial vianexis.eu deploy.**

### If static is required later

1. Add `output: "export"` and verify all pages are statically generatable
2. Move redirects to Hostinger/CDN config
3. Disable or replace API contact proxy; document mailto-only
4. Re-run `npm run build` and upload `out/` directory
5. Re-run smoke checks against static host

---

## Production URL contract

| URL | Purpose |
|-----|---------|
| https://vianexis.eu | Redirect → `/hu` |
| https://vianexis.eu/hu/privacy | **Play Console privacy URL (HU)** |
| https://vianexis.eu/en/privacy | **Play Console privacy URL (EN)** |
| https://vianexis.eu/hu/contact | Contact form |
| https://vianexis.eu/sitemap.xml | SEO sitemap (35 locales) |
| https://vianexis.eu/robots.txt | `allow: /` + sitemap pointer |

Legacy redirects (middleware):

| From | To |
|------|-----|
| `/privacy` | `/hu/privacy` |
| `/terms` | `/hu/terms` |
| `/legal` | `/hu/legal` |
| `/disclaimers` | `/hu/disclaimers` |
| `/contact` | `/hu/contact` |

---

## Rollback

1. Re-deploy previous build artifact or git tag in hosting panel
2. Run `npm run smoke:public -- https://vianexis.eu` — privacy URLs must stay 200
3. If contact intake misbehaves, set `CONTACT_INTAKE_ENABLED=false` and redeploy (mailto fallback)

---

## Related docs

- [hostinger-or-public-deploy-checklist.md](./hostinger-or-public-deploy-checklist.md)
- [public-site-deploy-readiness.md](./public-site-deploy-readiness.md)
- [google-play-internal-upload-pack.md](./google-play-internal-upload-pack.md)
