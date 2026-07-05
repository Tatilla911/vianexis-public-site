# ViaNexis public site — legal-safe copy (EN draft)

> **Status:** EN draft — for future `/en` locale routes.  
> **HU master:** `public-site-legal-safe-copy-hu.md`  
> **Source of truth (site):** `src/lib/i18n/content/hu.ts` and `src/lib/i18n/content/en.ts`  
> **Last updated:** 2026-07-05

---

## Hero

**Title:**  
ViaNexis — digital transport evidence and driver operations platform

**Subtitle:**  
Driver app, company control, document management, messaging, notifications, and multilingual trip workflows in one system.

**Primary CTA:** Contact us  
**Secondary CTA:** Internal testing preparation in progress

**Do not use:** “Download on Google Play”, “demo app”, “live production system”, “certified platform”

---

## Current status (platform status banner)

- Google Play internal testing preparation in progress.
- Driver app release readiness and Samsung UAT in progress.
- Production backend, push notifications, and partner integrations are being connected gradually.

**Disclaimer:** ViaNexis does not claim the system is live, certified, or officially accepted in every country.

---

## Modules

### 1. Driver App

| Field | Content |
|-------|---------|
| **Goal** | Let drivers handle trip-linked tasks, documents, and events on mobile — online and offline. |
| **App-side foundation** | Trip list and details, document upload, signature capture, checklists, incident logging, offline save and sync, PIN-protected session. |
| **Backend dependency** | Live API, tenant scope, trip and document sync, company settings resolution. |

### 2. Company / Admin Control

| Field | Content |
|-------|---------|
| **Goal** | Let transport companies manage trips, users, permissions, and workflows from one portal. |
| **App-side foundation** | Driver-side data and actions reflect company rules. |
| **Backend dependency** | Web company portal, admin app, roles, trip management, document requirements, company exchange and notification settings. |

### 3. Digital CMR & Documents

| Field | Content |
|-------|---------|
| **Goal** | Trip-linked documents — CMR, delivery note, invoice, vehicle and driver papers — managed in a structured way. |
| **App-side foundation** | Document upload, scan/photo, trip assignment, requirement-based tasks, primary document concept. |
| **Backend dependency** | Document storage, metadata, signature rules, authority sharing with scope limits. |
| **Disclaimer** | Digital documents do not automatically carry legal probative force. Acceptance varies by country and customer. |

### 4. Completed Trip Package

| Field | Content |
|-------|---------|
| **Goal** | Summarise completed-trip evidence — documents, events, signatures — in an exportable package. |
| **App-side foundation** | Trip closure, local data, and synced events as the basis for package assembly. |
| **Backend dependency** | Completed trip package generation, PDF export, audit export. Some sections (e.g. pallet/packaging PDF) remain dependencies. |
| **Disclaimer** | The package supports documentation; it does not replace the company’s legal assessment or authority proceedings. |

### 5. Messaging & Notifications

| Field | Content |
|-------|---------|
| **Goal** | Trip-linked communication and alerts for important events — traceable for dispatch and company. |
| **App-side foundation** | Message list, trip-linked threads, app-side notification foundation (permission flow, payload model, tap routing, deep link after PIN). Usable for: new message, trip change, document task, sync issue. |
| **Backend dependency** | Production push (FCM/APNs), device token registration, server-side dispatch and audit — separate dependency, not live yet. |
| **Disclaimer** | Target screen opens from notification after PIN. Lockscreen text is privacy-safe by default. Production push does not claim every event arrives instantly. |

### 6. Pallet & Packaging Exchange

| Field | Content |
|-------|---------|
| **Goal** | Record pallet and packaging exchanges per stop with quantities, shortage, damage, and dispute — toward audit and evidence package. |
| **App-side foundation** | Separate pallet and packaging modules. Company-toggleable. Company can preset exchange items; driver can add custom packaging if allowed. Offline save and later sync. |
| **Backend dependency** | Exchange settings API, record sync, portal admin UI, completed package PDF section — latter is a dependency. |
| **Disclaimer** | PDF evidence section in completed trip package is not fully ready in all cases. Recording supports dispute documentation but does not decide disputes. |

### 7. ADR / Border Support

| Field | Content |
|-------|---------|
| **Goal** | Quick helper information for ADR and border/customs context — alongside verification of official sources. |
| **App-side foundation** | ADR information, UN number search, tunnel code helper, border/customs metadata linked to trips. |
| **Backend dependency** | ADR database updates, country-specific rule metadata, border checkpoint data. |
| **Disclaimer** | See ADR disclaimer below. |

### 8. Truck Map Foundation

| Field | Content |
|-------|---------|
| **Goal** | Fleet and trip overview on map — operational orientation, not official navigation. |
| **App-side foundation** | Map-based overview, trip and vehicle context. |
| **Backend dependency** | Telematics provider, routing provider, live position — gradual integration. |
| **Disclaimer** | Map and route do not guarantee compliance with legal restrictions or permits. |

### 9. Multilingual Operation

| Field | Content |
|-------|---------|
| **Goal** | Multilingual teams on one platform — UI, messages, and document metadata support. |
| **App-side foundation** | Driver app multilingual UI, original message retention, translation as assistance. |
| **Backend dependency** | Portal and public site locale expansion, translation review workflow. |
| **Disclaimer** | See AI/OCR/translation disclaimer below. |

### 10. Audit & Support Access

| Field | Content |
|-------|---------|
| **Goal** | Traceable log of who did what when; controlled support access for troubleshooting. |
| **App-side foundation** | Event logging for trip and document actions; auditable support sessions. |
| **Backend dependency** | Audit export, support access policy, enterprise permission matrix. |
| **Disclaimer** | Audit log supports traceability; it is not automatic legal proof. |

---

## ADR disclaimer (required text)

ADR and tunnel data are **helper information**. Official sources, tables, and current local rules must **always be verified**. ViaNexis **does not replace** legislation, ADR training, the company’s dangerous-goods officer, or authority decisions. The app **does not make ADR decisions** instead of official sources.

---

## AI / OCR / translation disclaimer (required text)

AI summarisation, OCR, and automatic translation are **assistive tools**. **Human review is required.** The original document and message remain **primary**. Automatic interpretation is **not legal advice** and not certified translation.

---

## eFTI disclaimer (required text)

ViaNexis is **not a certified eFTI platform**. It does not promise authority acceptance in every country. eFTI-ready foundation means technical preparedness for future integration — **not a certificate or licence**.

---

## What we do not claim

- Not a certified eFTI platform
- Not officially accepted in every country
- Not flawless AI/OCR/translation
- Not ADR decisions instead of official sources
- Not production push/FCM ready (backend dependency)
- Not public Play Store download ready
- Not a “demo app”

---

## Contact

**Email:** info@vianexis.eu  
**CTA:** Contact us / Request pilot access (individual review)
