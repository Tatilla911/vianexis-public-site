# ViaNexis public presentation readiness

**Updated:** 2026-07-05  
**Repo:** `vianexis-public-site`  
**Scope:** Public landing / presentation copy only — no driver app release, backend endpoints, admin app, keystore, or Play signing changes.

## Goal

Prepare a legal-safe public presentation package for ViaNexis covering driver app, company/admin control, trip workflow, documents/CMR/evidence package, messaging/notifications, pallet/packaging exchange, ADR/border support, multilingual operation, audit/support access, and cautious Play internal testing status.

## Deliverables

| Artifact | Path | Status |
|----------|------|--------|
| Site content source (HU) | `src/lib/public-content.ts` | Updated |
| Homepage | `src/app/page.tsx` | Updated |
| Features page | `src/app/features/page.tsx` | Updated |
| HU copy master | `docs/public-site-legal-safe-copy-hu.md` | Created |
| EN copy draft | `docs/public-site-legal-safe-copy-en.md` | Created |
| This readiness doc | `docs/vianexis-public-presentation-readiness.md` | Created |

## Content structure implemented

### 1. Hero

- **HU title:** ViaNexis — digitális fuvarbizonyíték és sofőrplatform
- **HU subtitle:** Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben.
- **Primary CTA:** Kapcsolatfelvétel → `/contact`
- **Secondary CTA:** Belső tesztelés előkészítés alatt → `/pilot`
- **No** “Letöltés Google Playről” CTA

### 2. Platform modules (10)

Each module documents: goal, app-side foundation, backend/admin dependency, disclaimer where needed.

1. Sofőr app
2. Céges irányítás / Admin
3. Digitális CMR és dokumentumok
4. Lezárt fuvar csomag
5. Üzenetek és értesítések
6. Raklapcsere és göngyölegcsere
7. ADR és határ / vám segédletek
8. Tehergépkocsi térkép alap
9. Többnyelvű működés
10. Audit és support hozzáférés

### 3. Dedicated sections

- **Raklap/göngyöleg:** separate modules, company-toggle, preset items, custom packaging, quantities/damage/dispute, offline sync, PDF evidence as dependency
- **Értesítések:** app foundation ready; event types; tap routing; PIN deep link; production push/FCM as backend dependency
- **ADR disclaimer:** helper data only; official source required
- **AI/OCR/fordítás disclaimer:** assistive only; human review required
- **Play/internal status:** cautious wording via `PlatformStatusBanner`

## Legal-safe rules enforced

| Rule | Enforced |
|------|----------|
| No “certified eFTI platform” | Yes — `eftiDisclaimer` |
| No “legally accepted in all countries” | Yes — module + status disclaimers |
| No flawless AI/OCR/translation | Yes — `aiOcrDisclaimer` |
| No ADR replaces official source | Yes — `adrDisclaimer` |
| No production push/FCM ready if backend dependency | Yes — messaging module + notification section |
| No “demo app” wording | Yes |
| No excessive marketing | Yes — factual module structure |
| No Play Store download CTA | Yes |

## i18n status

- **Current site:** HU hardcoded in `public-content.ts` (no locale routing yet)
- **EN:** draft in `docs/public-site-legal-safe-copy-en.md` for future `/en` routes
- **Future:** extract `public-content.ts` keys to locale files per `transdoc-backend/docs/VIANEXIS_PUBLIC_SITE_MULTILINGUAL_REQUIREMENTS.md`

## Out of scope (this task)

- Driver app release code
- Backend endpoints
- Admin app functionality
- Keystore / Play signing
- Legal PDF content changes

## Validation commands

```bash
cd vianexis-public-site
git status
npm run lint    # exists
npm run build   # exists
# npm run validate — NOT defined in package.json
```

## Related internal docs

- `transdoc-backend/docs/product-guides/what-vianexis-does-not-do.md`
- `transdoc-driver-app/docs/pallet-packaging-exchange-foundation.md`
- `transdoc-driver-app/docs/driver-notification-foundation.md`
- `transdoc-driver-app/docs/app-google-play-internal-test-readiness.md`

## Checkpoint

| Block | Content |
|-------|---------|
| Érintett működés | ViaNexis public presentation readiness |
| Regresszió | Nincs (copy/site structure only) |
| Javítások | public copy, module sections, disclaimers, Play/internal wording |
| Tesztek | lint + build (no validate script) |
| Verdict | See test run below |
