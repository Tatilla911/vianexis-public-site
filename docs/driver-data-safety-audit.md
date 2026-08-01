# Driver App Data Safety Audit (internal)

**Audit date:** 2026-08-01  
**App path:** `/Users/turul/Projects/transdoc-driver-app`  
**Branch:** `feat/map-foundation-phase-m1`  
**Commit:** `20c9050` (`chore(map): remove unrelated splash sound changes`, 2026-07-31)  
**pubspec version:** `0.1.0+1`  
**Store label:** ViaNexis Driver (`android:label`, iOS `CFBundleDisplayName`)  
**Package id (Android):** `com.vianexis.driver` (from project; confirm in build.gradle if packaging for Play)  
**Rule:** No invented flows. Unknowns marked. Public UI must not show this document.

## 1. Android permissions (main manifest)

| Permission | Declared | Runtime request evidence | Purpose | Leaves device? | Required/optional |
|---|---|---|---|---|---|
| `INTERNET` | yes | network APIs | API / FCM / maps tiles / optional translation | yes | required for online use |
| `RECORD_AUDIO` | yes | `native_speech_service.dart`, `chunk_audio_capture_service.dart` | STT / audio chunks | STT may leave via OS; chunks may upload | optional |
| `CAMERA` | yes | `in_app_document_camera_screen.dart`, ImagePicker | trip/docs evidence | yes when uploaded | feature-optional |
| `READ_EXTERNAL_STORAGE` maxSdk 32 | yes | media/gallery paths | gallery pick | yes when uploaded | feature-optional |
| `READ_MEDIA_IMAGES` | yes | `media_permission_service.dart` | gallery | yes when uploaded | feature-optional |
| `READ_MEDIA_VIDEO` | yes | image_picker video paths | video evidence | yes when uploaded | feature-optional |
| `ACCESS_FINE_LOCATION` | yes | `geolocator` / `LocationHelperService` | map, trip notes, checklist, SOS, signatures | map stream local; other flows may upload | optional |
| `ACCESS_COARSE_LOCATION` | yes | same | same | same | optional |
| `ACCESS_BACKGROUND_LOCATION` | **not declared** | `map_location_service.dart` comments | N/A | N/A | N/A |
| `POST_NOTIFICATIONS` | yes | `driver_notification_permission_service.dart` | operational alerts | FCM token to backend | optional |
| `USE_BIOMETRIC` / `USE_FINGERPRINT` | yes | `local_auth` / `biometric_unlock_service.dart` | PIN unlock | local | optional |

Debug/profile manifests only add `INTERNET`.

**Evidence:** `android/app/src/main/AndroidManifest.xml`.

## 2. iOS usage descriptions

| Key | Present | Notes |
|---|---|---|
| `NSCameraUsageDescription` | yes | trip documents |
| `NSLocationWhenInUseUsageDescription` | yes | map when-in-use; claims no background; also claims not shared with dispatch — **overbroad vs trip/SOS/signature GPS paths** |
| Mic / speech / photos / Face ID | **missing** | plugins used in Dart; iOS shipping gap / production blocker for iOS store |

**Evidence:** `ios/Runner/Info.plist`.

## 3. Active SDKs / libraries (used in `lib/`)

| Package | Constraint | Active use | Data / third party | requiresOwnerDecision | productionBlocker |
|---|---|---|---|---|---|
| `http` | ^1.2.2 | yes | API host | false | false |
| `firebase_core` / `firebase_messaging` | ^3.13 / ^15.2.7 | yes | FCM token → Google + backend | true (prod FCM on?) | true until prod attestation |
| `google_mlkit_text_recognition` | ^0.15.1 | yes | on-device OCR | false | false |
| `geolocator` / `geocoding` | ^13 / ^3 | yes | GPS; reverse geocode via OS | true (geocoder vendor) | false |
| `flutter_map` / `latlong2` | ^8.3 / ^0.9 | yes | tiles via dart-define host | true (tile CDN) | false |
| `image_picker` / `camera` / `file_picker` | yes | media capture | uploads | false | false |
| `speech_to_text` / `record` | yes | mic | OS STT / optional backend STT | true | false |
| `flutter_secure_storage` / `local_auth` | yes | JWT, PIN hash, FCM pending | local encrypted prefs option | false | false |
| `shared_preferences` | yes | settings/queues meta | local plaintext prefs | false | false |
| `flutter_local_notifications` | yes | local display | local | false | false |
| `socket_io_client` | yes | messaging | backend | false | false |
| `signature` / PDF stack | yes | e-sign / docs | backend when uploaded | false | false |
| `url_launcher` / `share_plus` | yes | external apps | user-chosen | false | false |
| `google_fonts` | ^6.2.1 | yes | may fetch fonts from Google | true | false |
| `translation_service` Google fallback | code | yes path | text to `translate.googleapis.com` | true | true if enabled in prod without disclosure |
| Crashlytics / Analytics / Sentry | **not in pubspec** | unused | — | false | false |
| sqflite / hive / isar / dio | absent | — | — | false | false |

## 4. Active data flows (summary)

- Account/login → backend API (JWT in secure storage).
- Trip docs / driver docs / chat attachments / form attachments → multipart upload endpoints.
- Signatures (+ optional GPS) → `POST /signatures`.
- Trip live location text may sync as trip events.
- SOS may send location via SMS/email/share/events.
- Map own-position stream: device-local by design.
- FCM token → `POST /driver/notifications/devices`.
- OCR: on-device ML Kit.
- Translation: backend and/or Google public translate fallback.
- Offline queues: SharedPreferences + files under `path_provider`.

## 5. Non-active / caution

- Continuous background location: not declared / not map-designed.
- Marketing push category: not found in client/backend enums audited.
- Analytics/Crashlytics packages: not present.
- Legacy cleartext LAN API (`lib/services/api_config.dart` hardcoded HTTP IP) for some secondary services — production risk if reachable in release builds.

## 6. Encryption evidence

| Claim | Proven? | Evidence |
|---|---|---|
| TLS for primary API when `API_BASE_URL` is HTTPS | yes for config path | `lib/api/api_config.dart` |
| Always TLS in every build | **no** | debug HTTP defaults; legacy HTTP helper |
| PIN/JWT in `flutter_secure_storage` + Android encryptedSharedPreferences | yes | `pin_security_service.dart`, `token_storage.dart`, FCM service |
| All documents/queues encrypted at rest | **no** | prefs + files |
| Independent security review | **no** | — |

## 7. Deletion

In-app link opens `https://vianexis.eu/{hu|en}/driver-app/account-deletion` (`lib/config/legal_external_urls.dart`). No automatic wipe in app.

## 8. Children

No age gate / under-13 logic found. Professional driver product. Public wording: not directed at children.

## 9. Privacy Policy alignment (do not auto-edit Privacy)

| Item | Status |
|---|---|
| No continuous background location | aligns |
| FCM / push token | aligns |
| On-device OCR capability | aligns |
| Processors / no blanket DPA claim | aligns |
| Location “not shared with dispatch” in iOS plist | **conflicts** with trip/SOS/signature upload paths |
| Data Safety old TLS absolute wording | **too strong** vs HTTP debug/legacy |
| Google Translate fallback | may be under-disclosed if enabled in distributed build |
| Speech / mic | Privacy mentions assistive features cautiously; DS previously thin |

## 10. Production blockers (internal)

1. Confirm production FCM active and payload privacy (data-only vs notification body).  
2. Confirm whether Google Translate fallback can run in Play build.  
3. Confirm tile CDN / hosting / object storage processors for Play “share vs service provider”.  
4. iOS Info.plist completeness before iOS store.  
5. Remove or isolate legacy cleartext API helpers from release.  
6. Counsel review of Play “Data shared” answers.  
7. Testing banner / legal review on public DS page.

## 11. Flutter analyze

`flutter analyze` completed with infos/warnings only (unused imports, deprecated members, test hygiene). No app code was changed this session.

## 12. Privacy Policy consistency (report only — Privacy not edited)

| Type | Item |
|---|---|
| Aligns | No continuous background location; FCM/push described cautiously; on-device OCR; no blanket DPA; deletion not automatic |
| Too broad (elsewhere) | iOS Info.plist “not shared with dispatch” vs trip/SOS/signature GPS — **app plist**, not Privacy body |
| Too narrow / gap | Google Translate fallback path if enabled in prod; speech/mic depth; legacy HTTP helper risk |
| Missing in Privacy vs code | Explicit Google Translate public endpoint as possible recipient when fallback runs |
| Not active | Crashlytics/Analytics packages |
| Pre-production fix | Confirm processors + Play “shared”; HTTPS-only release; Translate fallback flag; iOS usage strings |
