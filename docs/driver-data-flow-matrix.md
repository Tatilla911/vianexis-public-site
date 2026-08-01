# Driver data-flow matrix (internal)

**Commit:** `20c9050` · **Branch:** `feat/map-foundation-phase-m1` · **Date:** 2026-08-01  
Retention cells are `unknown` unless a policy document with concrete periods exists.

| source | data category | trigger | device processing | backend endpoint (examples) | storage | processor | purpose | retention | deletion | user control | evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| registration/login | account / email / phone / name | signup/login | JWT in secure storage | auth/driver APIs | backend DB + secure storage | hosting | auth / account | unknown | web deletion request | logout; deletion URL | token_storage; onboarding APIs |
| profile | driver profile / company affiliation | profile edit / onboarding | local cache prefs possible | `/driver/me*` | backend | hosting | service | unknown | deletion request | in-app profile | driver_self APIs |
| vehicle UI | vehicle / trailer / plate | vehicle forms | local + sync | vehicle/company APIs | backend | hosting | ops | unknown | company/deletion rules | forms | vehicle screens |
| trip UI | trip / pickup / delivery | trip workflow | offline queue | trip APIs / sync queue | backend + local queue | hosting | ops / evidence | unknown | deletion exceptions | app use | trip_detail; sync queue |
| MapLocationService | precise location | map open | local stream only | none (by design) | memory | none | orientation | ephemeral | N/A | revoke location perm | map_location_service.dart |
| trip live / checklist / SOS / signature | precise location | feature actions | geolocator + optional geocode | trip events; signatures; events; SOS channels | backend / SMS/email | hosting; OS share; carriers | evidence / safety alert | unknown | deletion exceptions | revoke perm; feature off | trip_detail; sos_service; signatures_api |
| camera/gallery | photos / videos | capture/pick | local file | `/documents/upload/:tripId`; driver docs; attachments | object storage + local | hosting/storage | evidence | unknown | deletion request | revoke camera/photos | documents_api; image_picker |
| signature pad | signatures (+ optional GPS) | sign | PNG/base64 | `POST /signatures` | backend | hosting | evidence | unknown | deletion exceptions | feature | signature package |
| messaging | messages / attachments | chat | local drafts/queue | conversations + socket | backend | hosting | ops | unknown | deletion request | in-app | messaging_api; socket_io |
| FCM | push token / device install id | session + permission | secure storage pending token | `POST /driver/notifications/devices` | backend + FCM | Google FCM | operational notify | unknown | unregister/deletion | OS notification settings | driver_fcm_service |
| ML Kit OCR | OCR text | scan | on-device TextRecognizer | none in OCR service | ephemeral/local | Google ML Kit on-device | assistive fill | ephemeral | N/A | don't use OCR | adr/tachograph OCR services |
| translation_service | translated text | translate action | local + network | backend translation and/or Google translate URL | may leave device | Google and/or backend | language aid | unknown | N/A | disable feature | translation_service.dart |
| speech_to_text / record | audio / speech text | dictate / chunk | OS STT; local AAC | optional `/api/speech/transcribe` (legacy stack) | local + maybe backend | OS STT; backend | input aid | unknown | delete local files | mic permission | native_speech; audio_transcription |
| ADR module | ADR queries (local assets) | search | local PDFs/assets | usually none | local assets | none | assistive | local | N/A | N/A | assets/adr |
| PIN | local PIN hash / biometric flag | set PIN | SHA-256 hash in secure storage | none | secure storage + prefs meta | OS keystore | device unlock | device-local | logout clears PIN | disable biometrics | pin_security_service |
| support / privacy web | privacy requests | web form | browser | privacy-requests API | backend | hosting | legal rights | unknown | process-based | web form | public site |
| diagnostics | crash logs via SDK | — | debugPrint only | none found | console | none | debug | N/A | N/A | N/A | no Crashlytics in pubspec |

## Uncertainty flags

- Exact object-storage vendor / region: `unknown` · requiresOwnerDecision  
- Whether Play build enables Google Translate fallback: requiresOwnerDecision  
- Whether production FCM sends notification bodies to lock screen: requiresOwnerDecision  
- Concrete retention periods: requiresOwnerDecision (see `data-retention-matrix.md`)  
