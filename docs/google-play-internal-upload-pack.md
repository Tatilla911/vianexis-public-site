# Google Play internal upload pack

**App:** ViaNexis Driver  
**Package:** `com.vianexis.driver`  
**Track:** Google Play Internal testing  
**Public site commit baseline:** f105806+  
**Updated:** 2026-07-05  
**Status:** Preparation — **not** publicly available on Play Store

---

## 1. App listing draft

### App name

**ViaNexis Driver**

### Short description — HU (max 80 chars)

Digitális fuvarbizonyíték sofőröknek — fuvar, dokumentum, offline.

### Full description — HU

ViaNexis Driver a fuvarozó cégek sofőralkalmazása belső teszteléshez.

A sofőr fuvarhoz kötött feladatokat, dokumentumokat és eseményeket kezel — online és offline is. CMR és egyéb fuvariratok feltöltése, aláírás rögzítése, üzenetek, raklap/göngyölegcsere és ADR segédinformáció egy rendszerben.

Fontos:
- Google Play belső tesztelés előkészítés alatt — nem nyilvános store letöltés.
- Nem minősített eFTI platform.
- AI/OCR/fordítás segédeszköz — emberi ellenőrzés szükséges.
- Production push (FCM) backend dependency — belső tesztben részben nem éles.
- Nem vészhelyzeti szolgáltatás.

Adatvédelem: https://vianexis.eu/hu/privacy  
Kapcsolat: info@vianexis.eu

### Short description — EN (max 80 chars)

Digital transport evidence for drivers — trips, documents, offline.

### Full description — EN

ViaNexis Driver is the driver app for transport companies — internal testing phase.

Drivers handle trip-linked tasks, documents, and events — online and offline. Upload CMR and trip papers, capture signatures, messaging, pallet/packaging exchange, and ADR helper information in one system.

Important:
- Google Play internal testing preparation — not a public store download.
- Not a certified eFTI platform.
- AI/OCR/translation are assistive tools — human review required.
- Production push (FCM) is a backend dependency — may not be live in internal testing.
- Not an emergency or SOS service.

Privacy: https://vianexis.eu/en/privacy  
Contact: info@vianexis.eu

---

## 2. Internal testing notes

| Topic | Status |
|-------|--------|
| Play track | Internal testing preparation |
| Public Play Store availability | **Not claimed** — internal test only |
| Production push / FCM | Backend dependency — not fully live |
| Truck Map tile provider | Separate config dependency |
| Backend account | Staging/prod tenant account required for testers |
| Samsung manual UAT | **PENDING** — see driver app `docs/samsung-final-manual-uat-checklist.md` |
| Signed AAB | `build/app/outputs/bundle/release/app-release.aab` (149.8 MB, 2026-07-05) — **debug-signed** (`ANDROIDD.RSA`; upload keystore missing) |
| Signed APK | `build/app/outputs/flutter-apk/app-release.apk` (177.6 MB, 2026-07-05) |
| Driver automated tests | **801/801 PASS** at `ba6c1f2` |
| Backend e2e | **551/551 PASS** at `18deac6` |
| Public site deploy | **Pending** — see `hostinger-or-public-deploy-checklist.md` |
| Signed AAB (not debug) | **Pending** — upload keystore owner action |
| Privacy URL | Stable: `/hu/privacy`, `/en/privacy` on vianexis.eu |

---

## 3. App access instructions (for Play Console + testers)

### Registration / login

1. Tester receives company invitation from ViaNexis admin — **not** public self-registration.
2. Install from Play Internal testing link (when release is live on track).
3. Open app → sign in with credentials provided by company admin.
4. If backend is staging: app must be built with staging `API_BASE_URL` (see driver app build docs).

### PIN setup

1. After first login, set app PIN when prompted.
2. PIN protects session — notification deep links require PIN unlock.
3. Biometric unlock may be available per device — data stays on device (OS).

### Notification permission

1. Android 13+: grant notification permission when prompted.
2. Operational alerts only — not marketing push.
3. Production FCM may be unavailable — in-app lists and local notifications as fallback.

### Pallet / packaging exchange

1. Open trip detail → separate **Pallet exchange** and **Packaging** cards (if enabled by company).
2. Record quantities, shortage, damage per stop.
3. Works offline — syncs when online.

### Documents

1. Trip detail → upload photo/scan per requirement.
2. Complete signature capture where required.
3. AI/OCR is assistive — verify critical fields manually.

### ADR

1. ADR Center provides helper information only.
2. Always verify official sources and company DG officer decisions.
3. App does not make ADR decisions.

### If backend not production-ready

- Use **staging account** credentials provided by ViaNexis.
- Report sync issues to company admin or info@vianexis.eu.
- Do not use for live commercial operations without sign-off.

---

## 4. Data Safety draft (Play Console)

### Personal info

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Name | Yes | Company tenant | Account, trip workflow |
| Email | Yes | Company tenant | Login, communication |
| Phone | Optional | Company tenant | Contact |
| Company / role | Yes | Company tenant | Access control |

### Location

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Approximate / precise location | When in use, if permitted | Company tenant when synced | Map, trip evidence — **no background tracking** |

### Photos / videos / files

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Photos | Yes | Company tenant | Documents, incidents |
| Files / documents | Yes | Company tenant | CMR, delivery notes |

### Messages

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| In-app messages | Yes | Company tenant | Trip communication |

### App activity

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Trip events, exchanges, signatures | Yes | Company tenant | Workflow, audit |

### Device / session identifiers

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Device metadata, session | Yes | Platform (tenant scope) | Security, support |
| Push token | Future / partial | Platform | Operational push — backend dependency |

### Diagnostics

| Data | Collected | Shared | Purpose |
|------|-----------|--------|---------|
| Crash / error logs | If enabled | Platform support | Troubleshooting |

### Data sharing summary

- Shared with employer company (tenant) — primary.
- Platform support — audited, limited access only.
- No sale of personal data.
- No ad networks.
- AI/OCR provider — only if future backend integration, controlled.

### Data deletion / support contact

- Request via company admin or info@vianexis.eu.
- Deletion subject to legal retention and company policy.

---

## 5. Permissions checklist

| Permission | Declared | Play declaration notes |
|------------|----------|------------------------|
| `INTERNET` | Yes | API, upload, messaging |
| `CAMERA` | Yes | Documents, QR, incidents |
| `ACCESS_FINE_LOCATION` | Yes | When-in-use only — map/evidence |
| `ACCESS_COARSE_LOCATION` | Yes | Fallback |
| `POST_NOTIFICATIONS` | Yes | Operational notifications — not ads |
| `READ_MEDIA_IMAGES` | Yes | Attachments (Android 13+) |
| `READ_MEDIA_VIDEO` | Yes | Video attachments if enabled |
| `READ_EXTERNAL_STORAGE` (≤API 32) | Yes | Legacy file pick |
| `RECORD_AUDIO` | Yes | **Audit:** confirm active feature before declaring |
| Biometric / PIN | Local (OS) | Session security — not uploaded |

**Not declared:** background location.

Driver app source: `transdoc-driver-app/android/app/src/main/AndroidManifest.xml`

---

## 6. Required before Play upload

| Item | Status |
|------|--------|
| Signed AAB verified **not** debug | **Pending** — upload keystore |
| Privacy URL stable and reachable | **Ready** — https://vianexis.eu/hu/privacy |
| Screenshots (phone) | **Pending** |
| Feature graphic | **Pending** |
| App icon | Present in app (`ic_launcher`) |
| Internal tester email list | **Pending** |
| App access credentials / instructions | This doc + staging accounts |
| Data Safety form completed | **Draft above** — Console entry pending |
| Contact / support email | info@vianexis.eu |
| Samsung manual UAT result | **Pending** |

---

## 7. Public site legal URLs (Play Console)

| Purpose | URL |
|---------|-----|
| Privacy (HU) | https://vianexis.eu/hu/privacy |
| Privacy (EN) | https://vianexis.eu/en/privacy |
| Terms (HU) | https://vianexis.eu/hu/terms |
| Legal (HU) | https://vianexis.eu/hu/legal |
| Disclaimers (HU) | https://vianexis.eu/hu/disclaimers |

Pages labelled **internal testing version** — legal expert review in progress. URL paths are stable for Play Console.

---

## 8. Honest limits — do not overclaim

- Not publicly available on Play Store (internal test prep).
- Not a certified eFTI platform.
- Not flawless AI/OCR/translation.
- Production push/FCM not fully live if backend dependency open.
- Not emergency/SOS service.
- Not legal advice.

---

## 9. Related docs

| Doc | Repo | Purpose |
|-----|------|---------|
| `play-internal-test-upload-pack.md` | transdoc-driver-app | AAB, signing, build |
| `app-google-play-internal-test-readiness.md` | transdoc-driver-app | UAT, blockers |
| `permissions-and-data-usage.md` | transdoc-driver-app | Permission audit |
| `public-site-deploy-readiness.md` | vianexis-public-site | Site deploy |
| `play-internal-release-notes.md` | transdoc-driver-app | Release notes HU/EN |
