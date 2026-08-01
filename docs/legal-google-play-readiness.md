# ViaNexis legal / Google Play readiness

**Generated:** 2026-08-01  
**Repository:** `vianexis-public-site` only  
**Final status:** **READY FOR INTERNAL TESTING** / **READY FOR CLOSED TESTING** (with blockers for production) — **NOT PRODUCTION READY**

---

## 1. Pages reviewed

- `/hu|en/legal`, `/privacy`, `/terms`, `/disclaimers`
- `/hu|en/driver-app/legal|privacy|terms|account-deletion|data-safety`
- `/hu|en/privacy-request` (new)
- Footer legal navigation
- API proxies: `/api/privacy-requests`, `/api/privacy-requests/status`

## 2. Modified / created files (summary)

**Created**

- `src/config/legal.ts`, `src/config/legal-dates.ts`
- `src/components/site/PrivacyPolicyDocument.tsx`
- `src/app/[locale]/privacy-request/page.tsx`
- `scripts/check-legal-content.mjs`, `scripts/validate-legal-config.mjs`
- `docs/legal-google-play-readiness.md` (this file)
- `docs/google-play-data-safety-audit.md`
- `docs/LEGAL_PROCESSOR_AUDIT_REQUIRED.md`

**Updated (selected)**

- `src/app/[locale]/privacy/page.tsx` — full Driver policy on Play-stable URL
- `src/app/[locale]/driver-app/privacy/page.tsx` — shared document; canonical → `/privacy`
- `src/lib/i18n/content/legal/{hu,en}.ts` — removed developer jargon
- `src/lib/i18n/driver-app-legal/**` — operator re-export, neutral deletion success copy, Data safety Play warning
- `src/components/site/Footer.tsx` — Delete account + Privacy contact
- `src/lib/site-config.ts`, `src/app/sitemap.ts`, `package.json`, smoke script

## 3. Gaps fixed

- Play-stable `/hu|en/privacy` now serves full ViaNexis Driver privacy policy (not draft “later” text).
- Controller identified as Turul Atilla EV + ViaNexis brand operator; privacy@ primary.
- Developer wording removed from HU/EN marketing legal (`production push`, Play Console section, “final text later”).
- Testing release banner isolated and configurable.
- Footer: Delete account + Privacy contact.
- Neutral account-deletion / privacy-request success copy (no account-existence leak).
- Central typed legal config with gap markers.
- Content checks + legal config validation scripts.

## 4. Google Play privacy requirements

| Requirement | Status |
|-------------|--------|
| Public privacy URL stable (`/hu/privacy`, `/en/privacy`) | Met (content upgraded) |
| Names app ViaNexis Driver | Met |
| Names controller | Met (repo-confirmed operator block) |
| Privacy contact email | Met (`privacy@vianexis.eu`) |
| Indexable HU/EN | Met |
| No login wall | Met |
| Developer jargon on Play URL | Cleared for HU/EN path |

## 5. Account deletion

| Requirement | Status |
|-------------|--------|
| Dedicated URL | Met (`/driver-app/account-deletion`) |
| Linked from privacy + footer | Met |
| No password/PIN | Met |
| Neutral success | Met |
| Backend proxy | Met (`POST /api/privacy-requests` → API) |
| Ops fulfilment SLA | Owner process still required |

## 6. Data safety audit

**Not ready.** See `docs/google-play-data-safety-audit.md`.

## 7. Missing controller data

Filled from existing repo `operator` / legal config:

- Address, tax ID, EU VAT, EV registration number (present in repo)

Still open:

- Official NAIH postal address / phone (not invented)
- Separate DPO designation (if any)

## 8. Retention decisions

No numeric retention matrix in this repo → `requiresDecision` / audit pending in `src/config/legal.ts`.

## 9. Processors

See `docs/LEGAL_PROCESSOR_AUDIT_REQUIRED.md` — not listed as active on public pages without audit.

## 10. International transfers

Mechanism not contractually verified in this repo → compliance blocker.

## 11. Driver App permission / SDK audit

Required outside this repo (Flutter/Android binary). Blocker for Data safety + some privacy claims (background location, push activity).

## 12. Legal counsel review points

- Exact GDPR legal bases per processing activity
- Liability / governing law clauses in Terms
- Processor list and SCCs / adequacy
- Retention matrix approval
- Role allocation (controller vs processor) vs carrier contracts

## 13. Production blockers

1. Processor audit incomplete  
2. Retention matrix incomplete  
3. International transfer mechanism unverified  
4. Driver App SDK/permission/location/push audit incomplete  
5. Encryption-at-rest attestation incomplete  
6. Counsel sign-off pending  
7. Confirm production `API_BASE_URL` so privacy-request intake works on live site  
8. Set `LEGAL_SHOW_TESTING_RELEASE_BANNER = false` only after counsel + track decision  

## 14. Test results

Recorded in the final agent response after command runs.

## 15. Status choice (evidence-based)

**READY FOR INTERNAL TESTING** and **READY FOR CLOSED TESTING**, and **READY FOR LEGAL REVIEW**.

**Not PRODUCTION READY** while blockers in §13 remain.
