# Account deletion operations (internal)

**Audience:** privacy ops / platform support  
**Scope:** ViaNexis Driver account and associated-data deletion requests  
**Rule:** Public intake records a request only. There is **no automatic wipe**. Do not invent retention periods or processors here — see `data-retention-matrix.md` and `legal-processors-audit.md`.

## Status model (system)

| Status | Meaning |
|--------|---------|
| `received` | Intake recorded (public form / API) |
| `identity_verification_required` | Proportionate ID check needed |
| `under_review` | Staff reviewing categories / roles |
| `approved` | Deletion/anonymisation plan approved |
| `partially_fulfilled` | Some categories deleted/anonymised; some retained |
| `fulfilled` | Planned actions completed |
| `rejected` | Request rejected (reason recorded internally) |
| `closed` | Case closed; closing notice recorded when applicable |

Every status change must be audited (`privacy_request_status_changed` + status-specific event).  
`automatedWipeSupported` remains `false`.

## Procedure

### 1. Kérelem beérkezése
Public site / API creates a `privacy_requests` row (`status=received`) and a `privacy_request_received` audit event. Uniform public response — no account-existence disclosure.

**Automatizálható később:** intake, ack e-mail, staff routing (már részben megvan).

### 2. Fióklétezés nem publikus ellenőrzése
Staff checks whether submitted account email/phone maps to a driver user. Result is **internal only**. Never return “no such account” / “account exists” on public channels.

**Manuális:** lookup and matching today.  
**Automatizálható később:** internal match assistant (still never leak publicly).

### 3. Kérelmező személyazonosságának arányos ellenőrzése
If needed, set `identity_verification_required`. Ask only for proportionate proof. Do **not** request passwords/PINs on the public form; do not store full ID document scans unless legally necessary and approved.

**Manuális:** verification judgement.  
**Jogi/tulajdonosi döntés:** acceptable verification methods.

### 4. ViaNexis és fuvarozó cég adatkezelői szerepének meghatározása
Record high-level notes in `controllerRoleNotes` (roles/categories, not unnecessary PII). Determine what ViaNexis can delete vs what remains under the carrier as independent controller.

**Jogi/tulajdonosi döntés:** per-tenant contractual model if unclear.

### 5. Adatkategóriák azonosítása
Map categories (account, tokens, trips, docs, signatures, location, messages, logs, privacy request record, media, AI/OCR records if any).

### 6. Törölhető adatok
List category labels in `deletableCategories` (e.g. `account_profile,push_token`). Prefer labels over raw dumps.

### 7. Anonimizálható adatok
Where deletion would break integrity but identity can be stripped, note anonymisation in `fulfillmentActions`.

### 8. Kötelezően vagy indokoltan megőrzendő adatok
Record `retainedCategories` + `retentionNotes` (legal basis / purpose). Operative use of retained data must be restricted.

**Jogi/tulajdonosi döntés:** concrete retention durations (`data-retention-matrix.md`).

### 9. Aktív sessionök és tokenek visszavonása
Revoke active sessions / auth tokens for the matched user.

**Automatizálható később:** staff-triggered revoke helper.  
**Manuális most:** ops via existing session tooling.

### 10. Push token törlése
Remove FCM (and APNs if present) device registrations for the user/installation.

**Automatizálható később:** yes, once playbook is approved.

### 11. Céges hozzáférés megszüntetése
Unlink / disable driver–company access as required for the case. Distinct from full account deletion if only company termination was requested.

### 12. Harmadik fél processzorok értesítése, ha szükséges
Only for **active** processors with relevant personal data. See `legal-processors-audit.md`. Do not notify planned/unused vendors.

**Jogi/tulajdonosi döntés:** when processor notice is required; DPA/SCC status.

### 13. Törlés/anonimizálás végrehajtása
Execute approved steps. Summarize in `fulfillmentActions`. Set `partially_fulfilled` or `fulfilled` accordingly. **No auto wipe from intake.**

**Manuális most:** category-by-category execution.  
**Automatizálható később:** guided wipe jobs after legal approval.

### 14. Auditbejegyzés
Confirm status transition audits and any fulfillment metadata updates exist. Do not log passwords, full messages, or raw ID images in audit metadata.

### 15. Felhasználói lezáró értesítés
Send closing notice to `contactEmail` using neutral wording. Set `closureNotifiedAt` (`markClosureNotified`).

**Automatizálható később:** templated closing mail keyed by status.

### 16. Ügy lezárása
Set `closed` when no further action remains (including after rejection with notice).

### 17. Jogorvoslat vagy panasz kezelése
Route complaints to `privacy@vianexis.eu` / `gdpr@vianexis.eu`; NAIH path remains available per public policy. Escalate legal questions — do not invent outcomes.

## Automation vs manual vs decision

| Area | Now | Later automation candidate | Needs legal/owner decision |
|------|-----|----------------------------|----------------------------|
| Intake + neutral ack | Automated | — | Copy freezes |
| Account match | Manual | Internal matcher | Matching rules |
| ID verification | Manual | Checklist only | Accepted methods |
| Category plan | Manual | Suggestions from schema | Retention matrix values |
| Session/push revoke | Manual / existing tools | Staff-triggered job | — |
| Data wipe | Manual | Guided jobs | What may be wiped |
| Processor notice | Manual | Checklist from audit | Active vendor list + DPA |
| Closing notice | Manual / email tooling | Template send | Closing copy |

## Related

- Public URLs: `https://vianexis.eu/hu/driver-app/account-deletion`, `https://vianexis.eu/en/driver-app/account-deletion`
- Backend module: `transdoc-backend/src/privacy-requests`
- `docs/data-retention-matrix.md`
- `docs/legal-processors-audit.md`
