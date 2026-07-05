# Public site deployment readiness

**Updated:** 2026-07-05  
**Repo:** `vianexis-public-site`  
**Scope:** Static/SSR Next.js marketing site — not driver app, backend, or admin app.

## Build status

| Check | Status |
|-------|--------|
| `npm run lint` | Run before deploy |
| `npm run build` | Run before deploy |
| `npm run validate` | **Not defined** in `package.json` |

## Routing

| Route | Purpose |
|-------|---------|
| `/` | Redirects to `/hu` (middleware) |
| `/hu`, `/en` | Locale home |
| `/hu/contact`, `/en/contact` | Contact / lead form |
| `/hu/privacy`, `/en/privacy` | Privacy policy (DRAFT) — Play Console URL candidate |
| `/hu/legal`, `/en/legal` | Legal notice (DRAFT) |
| `/hu/disclaimers`, `/en/disclaimers` | ADR / AI-OCR / eFTI disclaimers |
| Legacy paths (`/contact`, etc.) | Redirect to `/hu/...` via middleware |

## Environment variables

| Variable | Scope | Required | Notes |
|----------|-------|----------|-------|
| `API_BASE_URL` | Server | For intake | e.g. `https://api.vianexis.hu` |
| `CONTACT_INTAKE_ENABLED` | Server | Optional | `true` to enable POST proxy to backend |

See `.env.example`. **Never commit `.env` with secrets.**

## Contact form backend dependency

| Component | Status |
|-----------|--------|
| UI form (`ContactLeadForm`) | Ready — name, company, email, phone, message, interest type |
| `/api/contact` proxy | Ready — forwards to `POST /public/intake/contact` |
| `/api/contact/status` | Reports whether intake is enabled |
| Default deploy | **Disabled** — submit button disabled; mailto fallback active |
| Backend endpoint | Exists: `transdoc-backend` `POST /public/intake/contact` |
| Captcha | Backend dependency when `CAPTCHA_REQUIRED_PUBLIC_ENDPOINTS=true` |
| Rate limit | Backend `@PublicRateLimit()` |

**No false success:** form only shows success after HTTP 201 from `/api/contact`.

## Privacy URL requirement (Play Console)

| Locale | Draft URL |
|--------|-----------|
| HU | `https://vianexis.eu/hu/privacy` |
| EN | `https://vianexis.eu/en/privacy` |

Pages show **DRAFT** badge until legal review. Stabilise URL before Play listing; update text after review without changing path.

## SEO / meta

- Per-locale `title`, `description`, OpenGraph in `[locale]/layout.tsx`
- `alternates.canonical` and `alternates.languages` for HU/EN
- HU title: ViaNexis Driver és céges fuvarirányítás
- EN title: ViaNexis Driver and company transport operations
- No false Play Store download claim

## Deployment target

| Target | Notes |
|--------|-------|
| Vercel / Node host | `npm run build` + `npm run start` |
| Static export | Not configured — uses middleware + API routes |
| Domain | `vianexis.eu` (configured in `siteConfig.domain`) |

## Prelaunch checklist

- [ ] `npm run lint` PASS
- [ ] `npm run build` PASS
- [ ] `/hu` and `/en` home render
- [ ] Language switcher preserves path slug
- [ ] Contact form: disabled without env OR succeeds with backend
- [ ] Privacy pages reachable at stable URLs
- [ ] Legal/disclaimers pages show DRAFT badge
- [ ] No “Download on Google Play” CTA
- [ ] No certified eFTI claim
- [ ] `CONTACT_INTAKE_ENABLED` set only when backend + captcha ready

## Known limitations

- Subpages (driver-app, company-portal, etc.) use module summaries — not full marketing copy per page
- Legal/privacy/terms are **DRAFT** — expert review pending
- Online lead intake disabled by default
- Production push/FCM described as backend dependency only
- EN subpages beyond home/features/contact/legal are module-based summaries

## Related docs

- `docs/vianexis-public-presentation-readiness.md`
- `docs/public-site-legal-safe-copy-hu.md`
- `docs/public-site-legal-safe-copy-en.md`
