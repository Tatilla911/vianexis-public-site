# Play Console Data Safety — internal draft answers

**App:** ViaNexis Driver `0.1.0+1`  
**Audit commit:** `20c9050` on `feat/map-foundation-phase-m1`  
**Date:** 2026-08-01  
**Not for public site.** Confidence reflects code audit only — counsel must confirm Play taxonomy.

| # | Question (Play-style) | Proposed answer | Rationale | Evidence | Confidence | ownerDecision | legalReview | productionBlocker |
|---|---|---|---|---|---|---|---|---|
| 1 | Does your app collect or share any of the required user data types? | **Yes** (collects) | Account, trip, docs, messages, optional location/media, push token | manifests + APIs | high | false | true | false |
| 2 | Is all user data encrypted in transit? | **Yes, with caveat for counsel** — recommend answering **Yes** only if Play release hard-requires HTTPS API and disables legacy HTTP helpers | Primary path uses HTTPS when configured; debug/legacy HTTP exists | `lib/api/api_config.dart`; legacy `lib/services/api_config.dart` | medium | true | true | true |
| 3 | Do you provide a way for users to request that their data be deleted? | **Yes** | Web account-deletion + privacy request | `legal_external_urls.dart`; public deletion page | high | false | true | false |
| 4 | Is the app account-creation based? | **Yes** (driver account / company affiliation) | Login/onboarding flows | driver APIs / settings | high | false | false | false |
| 5 | Independent security review? | **No** | No attested external audit in repo | — | high | false | false | false |
| 6 | Directed toward children / COPPA? | **No** | Professional driver app; no age gate | no age-gate code | high | false | true | false |
| 7 | Data shared with third parties (Play “shared”)? | **Do not answer “No data shared” yet** | FCM, hosting, storage, optional Google Translate, tile CDN, OS geocoder need classification as service providers vs share | FCM provider; translation fallback | low–medium | true | true | true |
| 8 | Approximate / precise location collected? | **Yes — optional, when-in-use** | Fine/coarse declared; no background permission | AndroidManifest; geolocator | high | false | true | false |
| 9 | Photos / videos collected? | **Yes — optional** | Camera/gallery/video paths + uploads | image_picker, camera | high | false | false | false |
| 10 | Audio files collected? | **Yes — optional** if STT/record used in distributed build | RECORD_AUDIO; speech/record | speech/record services | medium | true | true | false |
| 11 | Device or other IDs (push token)? | **Yes — optional** when push enabled | FCM token registration | `driver_fcm_service.dart` | high | true | true | false |
| 12 | Personal info (name, email, phone)? | **Yes** | Account/profile | onboarding/profile APIs | high | false | false | false |
| 13 | Messages? | **Yes** | Chat + attachments | messaging APIs / socket | high | false | false | false |
| 14 | App activity / diagnostics / crash logs via SDK? | **App interactions: limited/unknown**; **Crashlytics: No** | No Crashlytics/Analytics packages; local debugPrint only | pubspec | medium | true | true | false |
| 15 | Ephemeral processing? | **Partial** — OCR text may be ephemeral on device; uploads are persistent | ML Kit services | OCR services | medium | true | true | false |
| 16 | Encryption at rest (Play optional claim)? | **Do not claim full-disk / all-data at-rest encryption** | Only secure storage for tokens/PIN hash proven | flutter_secure_storage | high | false | true | false |
| 17 | Data sold / ads / advertising ID? | **No** (current audit) | No ad/analytics SDK found | pubspec | medium | true | true | false |
| 18 | Purpose: App functionality | **Yes** for core categories | trips, docs, messaging, auth | — | high | false | false | false |
| 19 | Purpose: Analytics | **No** unless later SDK added | no analytics package | pubspec | medium | true | false | false |
| 20 | Purpose: Fraud prevention / security | **Yes** (limited) | login/security events claimed in Privacy; confirm backend logging | Privacy + backend | medium | true | true | false |

## Play “shared” working note

Under Play, data handled by a **service provider** solely to provide the app’s functionality is often **not** declared as “shared,” while disclosure to a third party for *their* purposes is “shared.” Carrier company access may be separate (other users / business). **Owner + counsel must map:** FCM, cloud host, object storage, email, map tiles, Google Translate fallback, OS STT/geocoder.

## Do not enter until

- [ ] HTTPS-only release attestation  
- [ ] FCM production on/off attestation  
- [ ] Translate fallback on/off attestation  
- [ ] Processor list for Play forms  
- [ ] Counsel sign-off on “shared” answers  
