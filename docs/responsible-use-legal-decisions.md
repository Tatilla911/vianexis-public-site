# Responsible Use / Disclaimers — internal legal decisions

**Status:** living decision sheet (not public)  
**Date:** 2026-08-01  
**Scope:** `/hu/disclaimers`, `/en/disclaimers`  
**Rule:** Do not invent answers. Public copy must stay cautious where status is open.

| # | Topic | status | evidence | requiresOwnerDecision | requiresLegalReview | productionBlocker | notes |
|---|-------|--------|----------|-----------------------|---------------------|-------------------|-------|
| 1 | Active ADR features | active_assistive | Driver App `lib/services/adr/*`, bundled ADR PDFs / tunnel seed data | false | true | false | Public: informative only; not DGSA; official ADR prevails |
| 2 | Active tunnel data source | active_bundled_seed | Driver-bundled Europe tunnel seed + official country source URLs in ADR module | true | true | false | Confirm refresh cadence / ownership of updates |
| 3 | Active navigation/map features | active_limited | `geolocator` when-in-use; map UI; no certified truck nav; no `ACCESS_BACKGROUND_LOCATION` | false | true | false | Public: orientation aid only |
| 4 | Active AI features | assistive_env_dependent | Assistive AI/OCR UI paths; tachograph premium cloud AI “not yet available” | true | true | false | Do not name cloud AI vendor as active |
| 5 | OCR on-device or cloud | on_device_capability | `google_mlkit_text_recognition` in Driver `pubspec` | false | true | false | Public: on-device capability; no active cloud OCR claim |
| 6 | Translation vendor status | planned_or_gated | Backend `TRANSLATION_ENABLED` default false; mock/placeholder providers | true | true | false | Public: no active external translation vendor |
| 7 | Push status | capability_env_gated | FCM in app; backend push provider often disabled by default; privacy audit pending | true | true | false | Public: operational notifications if enabled; no marketing push |
| 8 | Offline limits | partial_offline | Local queues / reconnect services; sync may fail | false | true | false | Matches Terms offline caveats |
| 9 | Community map status | not_active_full_network | `MAP_COMMUNITY_FEATURE_ENABLED` default false; Driver community layer/publishing false | false | false | false | Public §18 conditional / not active |
| 10 | eFTI status | foundation_not_certified | Portal/API “not certified” copy; readiness docs | false | true | false | Public: not certified eFTI platform |
| 11 | Authority access status | foundation_gated | Inspection packages / QR exist; some start flags default false | true | true | false | Sharing only with legal basis / permissions |
| 12 | SOS / emergency feature | company_alert_not_psap | Driver `SosService` company channels; not 112 PSAP | false | true | false | Public: not emergency service; call local emergency number |
| 13 | Chapters needing legal review | open | ADR, customs, e-sign/evidence, liability framing, SOS | true | true | true | Counsel review before production banner off |
| 14 | Production blockers | open | Testing banner on; counsel review; tunnel data ownership; push/AI vendor attestation | true | true | true | Turn off `LEGAL_SHOW_TESTING_RELEASE_BANNER` only after review |
| 15 | Evidence / code refs | documented | See rows above; also Terms §21 community, Privacy §8 location, `docs/legal-processors-audit.md` | false | false | false | Keep in sync with Terms/Privacy |

## Related

- `docs/terms-legal-decisions.md`
- `docs/legal-processors-audit.md`
- `docs/account-deletion-operations.md`
