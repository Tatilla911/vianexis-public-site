# ViaNexis Driver — legal processors audit

**Status:** living internal audit (not a public processor schedule)
**Date:** 2026-07-29 (updated for privacy finalization pass)
**Rule:** Do not list planned / staging-only / unverified providers as active processors on public legal pages. Do not claim a blanket GDPR Art. 28 contract for every provider without documentary proof.

## Status legend

| Status | Meaning |
|--------|---------|
| active_production | Evidence of use in production-facing / Play-distributed paths |
| active_staging | Referenced for staging/test environments |
| optional_env | Capability exists; enabled only when environment config turns it on |
| planned | Product intent / placeholder; **not** active |
| not_used | Searched; not an active dependency in audited codepaths |

## Audit table

| Provider / evidence | Function | Data (categories) | Region | Outside EEA possible? | DPA status | SCC / transfer mechanism status | Privacy/DPA document | Owner decision | Production blocker? |
|---------------------|----------|-------------------|--------|----------------------|------------|----------------------------------|----------------------|----------------|---------------------|
| Backend hosting (Render hostnames `*.onrender.com` observed in ops evidence) | API hosting | Account, trip, docs, messages, privacy requests | Depends on Render service config | **requiresDecision** | **requiresDecision** | **requiresDecision** | not attached in repo | Confirm prod host + region | Yes — region/DPA attestation |
| PostgreSQL (TypeORM) | Primary database | Same as backend | Host-dependent | **requiresDecision** | **requiresDecision** | **requiresDecision** | not attached in repo | Confirm prod DB region | Yes — region/DPA |
| Object/file storage module (local / S3-compatible / Azure options in code) | Document & media storage | Uploaded docs, photos/videos | Config-dependent | **requiresDecision** | **requiresDecision** | **requiresDecision** | not attached in repo | Confirm **which** backend is production-active | Yes — if production uses third-party object store without DPA |
| Firebase Cloud Messaging (`firebase_messaging` in Driver App) | Push delivery | Push token, install/device registration id, platform, locale/timezone | Google FCM infrastructure | Yes (US possible) | **requiresDecision** | **requiresDecision** | Google terms; operator copy **requiresDecision** | Document transfer mechanism | Yes for claiming transfer safeguards publicly as verified |
| APNs | iOS push | iOS push token if/when iOS prod push enabled | Apple | Possible | **requiresDecision** | **requiresDecision** | Apple terms | Confirm iOS production push | Only if iOS push is production-claimed |
| SMTP / email module | Transactional & privacy-request mail | Contact email, template metadata | Vendor-dependent | **requiresDecision** | **requiresDecision** | **requiresDecision** | not attached | Confirm production SMTP vendor | Yes — before naming SMTP vendor as active |
| DNS / `vianexis.eu` edge | Public site delivery | DNS/edge metadata as needed | Vendor-dependent | **requiresDecision** | n/a / **requiresDecision** | **requiresDecision** | — | Confirm DNS/CDN vendor | No for Driver App core claims |
| Map tile / map foundation (`flutter_map` / MapLibre-style) | Map UI | IP may hit tile CDN when map opens | Tile URL dependent | **requiresDecision** | **requiresDecision** | **requiresDecision** | — | Confirm tile CDN | Before naming tile CDN |
| On-device ML Kit text recognition (`google_mlkit_text_recognition`) | Assistive OCR capability | Image frames / text typically on-device | On-device if local only | Usually no | n/a if on-device only | n/a | — | Confirm no cloud OCR path in distributed build | If cloud OCR enabled without disclosure |
| Translation module (placeholder / noop providers in backend) | Message translation | Message text **if** enabled | Provider-dependent | **requiresDecision** | **requiresDecision** | **requiresDecision** | — | Confirm whether any env enables live vendor | Do not list as active until enabled |
| Cloud AI / OCR subcontractors (integration placeholders) | Cloud document assistance | — | — | — | not claimed | not claimed | — | Keep planned until live | Do not publish as active |
| Crash reporting (Crashlytics/Sentry) | Crash telemetry | — | — | — | — | — | — | — | N/A — **not_used** in Driver `pubspec` |
| Analytics SDK (Firebase Analytics etc.) | Product analytics | — | — | — | — | — | — | — | N/A — **not_used** in Driver `pubspec` |
| First-party support + privacy inbox | Support / privacy ops | Support & privacy request content | Operator systems | Typically EEA ops — **requiresDecision** | n/a (controller) | n/a | internal | — | No |
| Carrier company (tenant) | Shipment workflows | Trip, docs, messages as configured | Company-dependent | Company-dependent | Contractual model **requiresDecision** | Company-dependent | company contract | Role model per tenant | Yes if public text asserts a single model for all tenants |

## Classification summary

### Active production (code- or ops-evidenced categories; vendor instance may still need decision)
- Backend hosting (ops evidence)
- PostgreSQL
- File/object storage **capability** (specific vendor instance **requiresDecision**)
- FCM push
- First-party support/privacy handling
- Carrier company as recipient/controller for company workflows

### Active staging
- Render staging API hostnames / staging configs (do not treat as production processor schedule)

### Optional / environment-dependent
- SMTP vendor (capability active; production vendor unset in audit)
- Map tile CDN (UI present; CDN identity unset)
- APNs (platform-dependent)
- On-device OCR (capability; cloud path not confirmed)
- Translation providers (gated / placeholder)

### Planned
- Cloud AI/OCR subcontractors
- Live third-party translation vendor (until enabled)

### Not used (audited)
- Crashlytics / Sentry crash reporting packages in Driver App
- Firebase Analytics / separate analytics SDK in Driver App

## Public-policy mapping

Public privacy text may describe **categories** that are code-verified and must:

- avoid naming unverified vendors as active processors;
- avoid claiming Art. 28 DPAs for all providers;
- direct detailed lists to `privacy@vianexis.eu`;
- mark transfer safeguards as available on request unless a specific mechanism is documented.

## Open decisions (`requiresDecision`)

1. Production host region attestation
2. Production DB and object-storage vendor + region + DPA
3. Production SMTP vendor + DPA
4. FCM / Google transfer mechanism documentation for the operator
5. Map tile CDN identity + ToS / DPA if personal data is processed
6. Whether production translation uses a live third-party provider
7. Numeric retention matrix owner approval (`docs/data-retention-matrix.md`)
8. Per-tenant controller/processor contractual model wording

## Related docs

- `docs/account-deletion-operations.md`
- `docs/data-retention-matrix.md`
- `docs/LEGAL_PROCESSOR_AUDIT_REQUIRED.md`
- `docs/google-play-data-safety-audit.md`
