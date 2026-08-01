# Google Play Data Safety — internal audit checklist (ViaNexis Driver)

**Status:** NOT COMPLETE — must be filled against the distributed app binary, not this public site alone.  
**Date:** 2026-08-01  
**Public summary page:** `/hu|en/driver-app/data-safety` (plain-language; not the Play form)

## Checklist

| Item | Status | Notes |
|------|--------|-------|
| package name | requires_audit | Confirm from Play Console / Android app |
| app version | requires_audit | Match distributed track |
| target SDK | requires_audit | AndroidManifest / gradle |
| Android permissions | requires_audit | Manifest + runtime flows |
| runtime permission flow | requires_audit | Especially location, camera, mic, notifications |
| location (precise / approximate / background) | requires_audit | Driver App location implementation audit required |
| camera | requires_audit | |
| microphone | requires_audit | |
| photos and files | requires_audit | |
| notifications | requires_audit | |
| push token | requires_audit | Confirm FCM active in Play build |
| device identifiers | requires_audit | |
| crash and diagnostics | requires_audit | No analytics/crash SDK claimed without binary audit |
| analytics | requires_audit | |
| third-party SDKs | requires_audit | |
| backend APIs | requires_audit | Cross-check with backend |
| document upload | requires_audit | |
| signatures | requires_audit | |
| messages | requires_audit | |
| AI/OCR/translation | requires_audit | Providers per environment |
| data sharing | requires_audit | Carrier company + processors |
| encryption in transit | requires_audit | Expect TLS; confirm deployment |
| encryption at rest | requires_audit | Infra attestation required |
| account creation | requires_audit | |
| account deletion | partial | Public form at `/driver-app/account-deletion` + backend `/public/privacy-requests` — fulfilment ops still required |
| data retention | requires_owner_input | No approved numeric matrix in public-site repo |
| optional vs required collection | requires_audit | |
| internal / closed / open / production track differences | requires_audit | |

## Rule

Do **not** mark Data safety “ready” without code + binary + SDK audit of the distributed build.
