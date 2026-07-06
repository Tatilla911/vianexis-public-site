# Public site deployment readiness

**Updated:** 2026-07-06  
**Scope:** Next.js marketing / legal site — not driver app, backend, or admin app.  
**Production domain:** https://vianexis.eu

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
| Validate script | `npm run validate` (locale gate + lint + build) |

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
| Smoke (post-deploy) | `npm run smoke:public -- https://vianexis.eu` | After deploy |

**Build command:**

```bash
npm ci
npm run build
npm run start
```

---

## Deploy target

| Target | Notes |
|--------|-------|
| **Primary** | Node / Next host — Vercel, Hostinger Node, VPS (`npm run start`) |
| **Domain** | `https://vianexis.eu` (`siteConfig.domain`, `metadataBase` in root layout) |
| Static export | **Not configured** — middleware + API routes required |

See **[production-deploy-vianexis-eu.md](./production-deploy-vianexis-eu.md)** for hosting decision.

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
| `NEXT_PUBLIC_SITE_URL` | Optional override | Defaults to `https://vianexis.eu` in `siteConfig` |

### Contact backend dependency

| Layer | Detail |
|-------|--------|
| UI | `ContactLeadForm` — name, company, email, phone, message, interest type |
| Proxy | `POST /api/contact` → `POST {API_BASE_URL}/public/intake/contact` |
| Status | `GET /api/contact/status` → `{ enabled: boolean }` |
| Backend | `transdoc-backend` public intake endpoint |
| Captcha | Backend `CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS` — separate dependency |
| Rate limit | Backend `@PublicRateLimit()` |
| False success | **Prevented** — success only on HTTP 201 from proxy; submit disabled when intake off |
| PII logging | **None** — contact route does not log form fields |

**Pre-deploy default:** leave `CONTACT_INTAKE_ENABLED` unset or `false` until backend + captcha ready.

---

## Privacy URL (Play Console)

| Locale | Stable URL | Status |
|--------|------------|--------|
| HU | https://vianexis.eu/hu/privacy | reviewed + legalReviewRequired badge; **indexable** |
| EN | https://vianexis.eu/en/privacy | reviewed + legalReviewRequired badge; **indexable** |
| DE…AR (33) | https://vianexis.eu/{code}/privacy | draftMachine + under review notice + `noindex` |

Internal testing version badge shown — legal expert review in progress. **Do not change URL path** after Play listing — update text only.

---

## SEO / metadata production sanity

| Check | Status |
|-------|--------|
| Canonical URLs | `https://vianexis.eu/{locale}/...` via `buildLocaleMetadata` |
| OpenGraph URL | Same production domain — not localhost |
| hreflang | 35 locales via `buildLocaleAlternates` |
| Sitemap | `https://vianexis.eu/sitemap.xml` — 35 locales × public paths |
| robots.txt | `allow: /` — does not block HU/EN privacy |
| Draft legal noindex | Only non-verified locales (`shouldNoindexLegalPage`) |
| Play privacy pages | HU/EN reachable, no login, no `noindex` |

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
| `/` | → `/hu` (root page + middleware) |
| `/{locale}` | 35 locale homes (`hu`, `en`, `de`, `ro`, …) |
| `/{locale}/privacy` | Play privacy URL pattern |
| `/{locale}/contact` | Lead form |
| Legacy `/contact` etc. | → `/hu/...` redirect (middleware) |

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
- [ ] `sitemap.xml` lists key routes on `https://vianexis.eu`
- [ ] `npm run smoke:public -- https://vianexis.eu` PASS after deploy
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
- Deploy to vianexis.eu **pending** until hosting configured

---

## Related docs

| Doc | Purpose |
|-----|---------|
| `production-deploy-vianexis-eu.md` | Node vs static hosting decision |
| `google-play-internal-upload-pack.md` | Play listing, Data Safety, permissions |
| `vianexis-public-presentation-readiness.md` | Marketing copy readiness |
| `public-site-legal-safe-copy-hu.md` | HU copy master |
| `public-site-legal-safe-copy-en.md` | EN copy draft |
