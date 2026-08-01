# ViaNexis Driver — legal processors audit

**Status:** living internal audit (not a public processor schedule)  
**Date:** 2026-07-29  
**Rule:** Do not list planned / staging-only / unverified providers as active processors on public legal pages. Do not claim a blanket GDPR Art. 28 contract for every provider without documentary proof.

## Status legend

| Status | Meaning |
|--------|---------|
| active | Code and/or deployment evidence indicates use in the distributed Driver App / production-facing stack |
| staging only | Referenced for staging/test environments |
| planned | Mentioned in product intent or placeholders; not confirmed live |
| not used | Searched and not found as an active dependency in the audited codepaths |

## Audit table

| Category | Provider / evidence | Status | Data notes | Transfer / region | Art. 28 DPA verified? |
|----------|---------------------|--------|------------|-------------------|------------------------|
| Backend hosting | Render referenced in portal/staging API hostnames (`*.onrender.com`) | active (ops evidence) | API hosting for backend | Region depends on Render service config — **requiresDecision** | **requiresDecision** |
| Database | PostgreSQL via backend TypeORM stack | active | Account, trip, docs, messages, privacy requests | Depends on host region — **requiresDecision** | **requiresDecision** |
| File / object storage | Backend `storage` module (local / S3-compatible / Azure options in code) | active (capability); provider instance **requiresDecision** | Uploaded documents, media | Depends on configured backend — **requiresDecision** | **requiresDecision** |
| Push notifications | Firebase Cloud Messaging (`firebase_messaging` in Driver App) | active | Push token, device registration id, platform, locale/timezone | Google FCM infrastructure — EEA→US possible | **requiresDecision** (Google terms / transfer mechanism) |
| Apple push | APNs | planned / platform-dependent | iOS push if/when iOS production push is enabled | Apple infrastructure | **requiresDecision** |
| Email / SMTP | Backend email module + SMTP checklist items | active capability; production SMTP vendor **requiresDecision** | Transactional / privacy-request notifications | Depends on SMTP vendor | **requiresDecision** |
| DNS / domain | `vianexis.eu` public site | active | DNS / edge metadata as needed for site delivery | Depends on DNS/CDN vendor — **requiresDecision** | n/a / **requiresDecision** |
| Map tiles | `flutter_map` / MapLibre-style foundation in app | active UI; specific tile CDN **requiresDecision** | IP may be visible to tile CDN when map opens | Depends on tile URL | **requiresDecision** |
| On-device OCR | `google_mlkit_text_recognition` in app dependencies | active capability (typically on-device) | Image frames / text locally unless cloud API enabled | Usually on-device | n/a if on-device only |
| Machine translation | Backend translation module with placeholder/noop providers | planned / environment-gated | Message text when feature enabled | Provider-dependent | **requiresDecision** |
| Cloud AI / OCR subcontractor | Integration placeholders exist | planned / not confirmed production | — | — | not claimed |
| Crash reporting | No Crashlytics/Sentry package in Driver `pubspec` | not used | — | — | — |
| Analytics SDK | No Firebase Analytics package in Driver `pubspec` | not used | — | — | — |
| Support tooling | In-product support + email contacts | active (first-party) | Support / privacy request content | Operator systems | n/a (controller) |
| Carrier company | Tenant company using the platform | active recipient / controller for company workflows | Trip, docs, messages as configured | EEA-typical; company-dependent | Contractual model **requiresDecision** |

## Public-policy mapping

Public privacy text may describe **categories** that are code-verified (hosting, DB/storage, FCM/APNs, carrier company) and must:

- avoid naming unverified vendors as active processors;
- avoid claiming Art. 28 DPAs for all providers;
- direct detailed lists to `privacy@vianexis.eu`;
- mark transfer safeguards as available on request unless a specific mechanism is documented.

## Open decisions (`requiresDecision`)

1. Production Render (or other host) region attestation  
2. Production DB and object-storage vendor + region  
3. Production SMTP vendor + DPA  
4. FCM / Google transfer mechanism documentation for the operator  
5. Map tile CDN identity + ToS / DPA if personal data is processed  
6. Whether production translation uses a live third-party provider  
7. Numeric retention matrix owner approval (event-based principles published until then)

## Related docs

- `docs/LEGAL_PROCESSOR_AUDIT_REQUIRED.md`
- `docs/google-play-data-safety-audit.md`
- `../transdoc-backend/docs/google-play-data-safety-driver-app.md` (if present in workspace)
