# Public site deployment readiness

**Updated:** 2026-07-05 (35-language localization foundation)  
**Baseline commit:** `daa93c2` + 35-locale foundation  
**Scope:** Next.js marketing / legal site — not driver app, backend, or admin app.

---

## 35-language localization foundation

| Item | Status |
|------|--------|
| Locale count | **35/35** (backend registry: `nb`, `be`, `mt`, `is`, `ar`, …) |
| HU / EN | **reviewed** (verified in registry) |
| 33 expanded | **draftMachine** — EN structural fallback + review notice |
| Google Translate widget | **Not used** |
| Browser auto-translate | **Not relied on** |
| Legal draft locales | Translation under review notice + `noindex` on legal pages |
| Validate script | `node scripts/validate-locales.mjs` + lint + build |

**i18n layout:** `src/lib/i18n/language-registry.ts`, `translation-status.ts`, `get-content.ts`, `content/hu.ts`, `content/en.ts`

**Review priority:** DE, RO, PL, SK, FR — see `transdoc-backend/docs/localization/35-language-rollout-plan.md`

---

## Build status

| Check | Command | Status |
|-------|---------|--------|
| Locale gate | `node scripts/validate-locales.mjs` | Run before deploy |
| Lint | `npm run lint` | Run before deploy |
| Build | `npm run build` | Run before deploy |
| Validate | `npm run validate` | Locale gate + lint + build |

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

| Locale | Stable URL | Status |
|--------|------------|--------|
| HU | https://vianexis.eu/hu/privacy | reviewed + legalReviewRequired badge |
| EN | https://vianexis.eu/en/privacy | reviewed + legalReviewRequired badge |
| DE…AR (33) | https://vianexis.eu/{code}/privacy | draftMachine + under review notice + noindex |

Internal testing version badge shown — legal expert review in progress. **Do not change URL path** after Play listing — update text only.

---

## Legal pages

All **35 locales** have routes:

| Pattern | Example |
|---------|---------|
| Privacy | `/de/privacy`, `/ro/privacy`, … |
| Terms | `/de/terms`, … |
| Legal notice | `/de/legal`, … |
| Disclaimers | `/de/disclaimers`, … |

HU/EN show internal testing version notice. Draft locales show translation under review banner (not presented as final legal counsel review).

Disclaimers include: ADR, AI/OCR, notifications/push, truck map, pallet evidence, legal validity, eFTI.

---

## Routing sanity

| Route | Purpose |
|-------|---------|
| `/` | → `/hu` (middleware) |
| `/{locale}` | 35 locale homes (`hu`, `en`, `de`, `ro`, …) |
| `/{locale}/privacy` | Play privacy URL pattern |
| `/{locale}/contact` | Lead form |
| Legacy `/contact` etc. | → `/hu/...` redirect |

**SEO:** `sitemap.xml` (35 locales × public paths), `robots.txt`, `alternates.languages` for all 35 locales.

---

## Deploy checklist

See **[hostinger-or-public-deploy-checklist.md](./hostinger-or-public-deploy-checklist.md)** for step-by-step deploy, smoke URLs, env vars, and rollback.

## Prelaunch checklist

- [ ] `npm run validate` PASS (locale gate + lint + build)
- [ ] `/hu` and `/en` home render
- [ ] Sample draft locale `/de` home + `/de/privacy` render with review notice
- [ ] Language switcher (35-locale select) preserves path slug
- [ ] `/hu/privacy` and `/en/privacy` reachable (Play URL)
- [ ] Contact form: **disabled** without env OR succeeds with backend
- [ ] Mailto fallback works when intake disabled
- [ ] Legal pages show internal testing version badge
- [ ] Disclaimers: ADR, AI/OCR, push, eFTI present
- [ ] SEO meta + OG alternates for **35 locales**
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
- Subpages beyond home/features use module summaries (draft locales: EN fallback)
- `npm run validate` runs locale coverage gate before lint/build

---

## Related docs

| Doc | Purpose |
|-----|---------|
| `google-play-internal-upload-pack.md` | Play listing, Data Safety, permissions |
| `vianexis-public-presentation-readiness.md` | Marketing copy readiness |
| `public-site-legal-safe-copy-hu.md` | HU copy master |
| `public-site-legal-safe-copy-en.md` | EN copy draft |
