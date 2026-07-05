# Hostinger / public site deploy checklist

**Site:** vianexis.eu (`vianexis-public-site`)  
**Updated:** 2026-07-05  
**Baseline commit:** `daa93c2`

---

## Pre-deploy verification (local)

```bash
cd vianexis-public-site
git status          # should be clean (ignore package-lock drift)
npm run lint        # PASS
npm run build       # PASS
# npm run validate  — NOT DEFINED
```

---

## Build commands

```bash
npm ci              # or npm install
npm run build
npm run start       # production server on port 3000
```

**Note:** Site uses Next.js middleware + API routes — requires Node host (Vercel, Hostinger Node, VPS). Static export alone is **not** sufficient.

---

## Environment variables (server)

Set in hosting panel — **never commit `.env`:**

```bash
API_BASE_URL=https://api.vianexis.hu
CONTACT_INTAKE_ENABLED=true   # only when backend + captcha ready
```

| Variable | When to set |
|----------|-------------|
| `API_BASE_URL` | Before enabling contact intake |
| `CONTACT_INTAKE_ENABLED=true` | After backend intake + captcha verified |

Default deploy: intake **disabled**, mailto fallback active.

---

## Deploy target options

| Target | Notes |
|--------|-------|
| **Vercel** | Recommended for Next.js — set env vars in dashboard |
| **Hostinger Node/VPS** | `npm run build` + `npm run start` behind reverse proxy |
| **Hostinger static only** | **Not suitable** — middleware/API routes required |

---

## DNS / domain

| Record | Value |
|--------|-------|
| Domain | `vianexis.eu` |
| HTTPS | Required for Play Console privacy URL |

---

## Post-deploy smoke URLs

Verify each returns 200 and correct locale content:

| URL | Purpose |
|-----|---------|
| https://vianexis.eu/hu | HU home |
| https://vianexis.eu/en | EN home |
| https://vianexis.eu/hu/privacy | **Play Console privacy URL (HU)** |
| https://vianexis.eu/en/privacy | **Play Console privacy URL (EN)** |
| https://vianexis.eu/hu/contact | Contact form |
| https://vianexis.eu/en/disclaimers | Disclaimers |
| https://vianexis.eu/sitemap.xml | SEO |
| https://vianexis.eu/robots.txt | SEO |
| https://vianexis.eu/api/contact/status | `{"enabled":true/false}` |

**Redirect check:** `/` → `/hu`, `/contact` → `/hu/contact`

---

## Language switcher

- Switch HU ↔ EN on `/hu/privacy` → should land on `/en/privacy`
- Switch on `/hu/contact` → `/en/contact`

---

## Contact form verification

| State | Expected |
|-------|----------|
| Intake disabled (default) | Submit button disabled; mailto link works |
| Intake enabled | POST to `/api/contact` → backend 201; success message |

Backend dependency: `POST /public/intake/contact`, captcha if `CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS=true`.

---

## Play Console linkage

After deploy, use in Play Console:

- Privacy policy: `https://vianexis.eu/hu/privacy` (or EN)
- Support email: `info@vianexis.eu`

---

## Rollback

1. Revert to previous deployment artifact / git tag in hosting panel
2. Verify privacy URL still resolves (Play Console breaks if 404)
3. If contact intake was enabled, disable env var first to stop bad submissions

---

## Prelaunch checklist

- [ ] lint + build PASS locally
- [ ] Env vars set (or intentionally unset for disabled intake)
- [ ] All smoke URLs 200
- [ ] Privacy pages show internal testing version badge
- [ ] No false Play Store download claim on site
- [ ] No certified eFTI claim
- [ ] Contact disabled OR backend intake tested end-to-end
- [ ] sitemap.xml accessible

---

## Related docs

- [public-site-deploy-readiness.md](./public-site-deploy-readiness.md)
- [google-play-internal-upload-pack.md](./google-play-internal-upload-pack.md)
