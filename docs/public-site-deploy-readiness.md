# Public site deployment readiness

**Updated:** 2026-07-05 (platform release checkpoint)  
**Baseline commit:** `daa93c2`  
**Baseline commit:** f105806+  
**Scope:** Next.js marketing / legal site — not driver app, backend, or admin app.

---

## Build status

| Check | Command | Status |
|-------|---------|--------|
| Lint | `npm run lint` | Run before deploy |
| Build | `npm run build` | Run before deploy |
| Validate | `npm run validate` | **Not defined** in `package.json` |

**Platform checkpoint (2026-07-05):** lint PASS · build PASS · routes verified in build output · deploy to vianexis.eu **pending**

**Build command:**

```bash
npm run build
npm run start
```

---

## Deploy target

| Target | Notes |
|--------|-------|
| **Primary** | Vercel or Node host (`npm run start`) |
| **Domain** | `vianexis.eu` (`siteConfig.domain`) |
| Static export | **Not configured** — middleware + API routes required |

---

## Required environment variables

Set in hosting provider (server-side only — **never commit `.env`**):

```bash
API_BASE_URL=https://api.vianexis.hu
CONTACT_INTAKE_ENABLED=true
```

| Variable | Required for | Default behaviour |
|----------|--------------|-------------------|
| `API_BASE_URL` | Contact intake proxy | Intake disabled without it |
| `CONTACT_INTAKE_ENABLED` | Enable form submit | `false` or unset → submit disabled, mailto fallback |

### Contact backend dependency

| Layer | Detail |
|-------|--------|
| UI | `ContactLeadForm` — name, company, email, phone, message, interest type |
| Proxy | `POST /api/contact` → `POST {API_BASE_URL}/public/intake/contact` |
| Status | `GET /api/contact/status` → `{ enabled: boolean }` |
| Backend | `transdoc-backend` public intake endpoint |
| Captcha | Backend `CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS` — separate dependency |
| Rate limit | Backend `@PublicRateLimit()` |
| False success | **Prevented** — success only on HTTP 201 from proxy |

**Pre-deploy default:** leave `CONTACT_INTAKE_ENABLED` unset or `false` until backend + captcha ready.

---

## Privacy URL (Play Console)

| Locale | Stable URL | Page title |
|--------|------------|------------|
| HU | https://vianexis.eu/hu/privacy | Adatvédelmi tájékoztató — belső tesztelési verzió |
| EN | https://vianexis.eu/en/privacy | Privacy notice — internal testing version |

Internal testing version badge shown — legal expert review in progress. **Do not change URL path** after Play listing — update text only.

---

## Legal pages

| HU | EN |
|----|-----|
| `/hu/terms` | `/en/terms` |
| `/hu/legal` | `/en/legal` |
| `/hu/disclaimers` | `/en/disclaimers` |

All show internal testing version notice. Disclaimers include: ADR, AI/OCR, notifications/push, truck map, pallet evidence, legal validity, eFTI.

---

## Routing sanity

| Route | Purpose |
|-------|---------|
| `/` | → `/hu` (middleware) |
| `/hu`, `/en` | Locale home |
| `/hu/privacy`, `/en/privacy` | Play privacy URL |
| `/hu/contact`, `/en/contact` | Lead form |
| `/hu/disclaimers`, `/en/disclaimers` | Full disclaimer set |
| Legacy `/contact` etc. | → `/hu/...` redirect |

**SEO:** `sitemap.xml`, `robots.txt` generated via `src/app/sitemap.ts`, `src/app/robots.ts`.

---

## Deploy checklist

See **[hostinger-or-public-deploy-checklist.md](./hostinger-or-public-deploy-checklist.md)** for step-by-step deploy, smoke URLs, env vars, and rollback.

## Prelaunch checklist

- [ ] `npm run lint` PASS
- [ ] `npm run build` PASS
- [ ] `/hu` and `/en` home render
- [ ] Language switcher preserves path slug
- [ ] `/hu/privacy` and `/en/privacy` reachable (Play URL)
- [ ] Contact form: **disabled** without env OR succeeds with backend
- [ ] Mailto fallback works when intake disabled
- [ ] Legal pages show internal testing version badge
- [ ] Disclaimers: ADR, AI/OCR, push, eFTI present
- [ ] SEO meta + OG alternates HU/EN
- [ ] `sitemap.xml` lists key routes
- [ ] No “Download on Google Play” CTA
- [ ] No certified eFTI claim
- [ ] No production push/FCM ready claim
- [ ] No “demo app” wording

---

## Known limitations

- Privacy/terms are **internal testing version** — not final legal counsel approval
- Contact intake disabled by default until env configured
- Production push/FCM described as backend dependency only
- Subpages beyond home/features use module summaries
- `npm run validate` script not defined

---

## Related docs

| Doc | Purpose |
|-----|---------|
| `google-play-internal-upload-pack.md` | Play listing, Data Safety, permissions |
| `vianexis-public-presentation-readiness.md` | Marketing copy readiness |
| `public-site-legal-safe-copy-hu.md` | HU copy master |
| `public-site-legal-safe-copy-en.md` | EN copy draft |
