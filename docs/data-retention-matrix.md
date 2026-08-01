# Data retention matrix (internal decision sheet)

**Status:** draft decision sheet — **not** a public schedule of concrete periods  
**Rule:** Do not invent durations. Where no approved value exists: `currentValue: null`, `requiresOwnerDecision: true`.  
**Public policy:** may use event-based principles until this matrix is approved.

Legend:

- `controllerRole`: `vianexis` | `carrier` | `joint_or_depends` | `processor_for_carrier`
- `deletionMethod`: `delete` | `anonymise` | `restrict` | `undecided`
- `currentValue`: concrete retention length or `null`

| dataCategory | controllerRole | purpose | legalBasis | retentionStartEvent | retentionEndEvent | currentValue | deletionMethod | anonymisationPossible | requiresLegalReview | requiresOwnerDecision |
|---|---|---|---|---|---|---|---|---|---|---|
| account_profile | vianexis | provide driver account / authentication | contract / legitimate interest (security) | account_created | account_deletion_or_anonymisation_completed | null | undecided | true | true | true |
| password_hash | vianexis | authentication | contract / legitimate interest | password_set_or_rotated | credential_replaced_or_account_removed | null | delete | false | true | true |
| session_token | vianexis | authenticated access | contract / legitimate interest | session_issued | session_revoked_or_expired | null | delete | false | false | true |
| push_token | vianexis | operational push delivery | contract / legitimate interest + OS permission | device_registered | token_revoked_replaced_or_account_ended | null | delete | false | false | true |
| trip_data | joint_or_depends | shipment execution / coordination | depends on carrier contract / instructions | trip_created_or_assigned | trip_legal_or_company_retention_end | null | undecided | true | true | true |
| transport_document | joint_or_depends | shipment evidence / company workflow | depends on carrier obligations | document_uploaded_or_generated | document_legal_or_company_retention_end | null | undecided | limited | true | true |
| personal_document | joint_or_depends | driver qualification / compliance evidence | depends on carrier / legal obligation | document_uploaded | purpose_ended_or_legal_retention_end | null | undecided | limited | true | true |
| electronic_signature | joint_or_depends | evidence of handover / receipt | depends on contract / legal claims | signature_captured | related_record_retention_end | null | undecided | limited | true | true |
| location_data | joint_or_depends | optional location-dependent feature / event stamp | feature purpose + OS permission (not automatic GDPR consent) | location_event_recorded | feature_purpose_ended | null | delete_or_anonymise | true | true | true |
| message_content | joint_or_depends | operational messaging / dispute support | contract / legitimate interest | message_sent | trip_or_dispute_purpose_ended | null | undecided | true | true | true |
| diagnostic_log | vianexis | limited operations / diagnostics | legitimate interest | log_emitted | ops_purpose_ended | null | delete | true | true | true |
| security_audit_log | vianexis | security / accountability | legitimate interest / legal claims | event_logged | accountability_purpose_ended | null | restrict | limited | true | true |
| support_log | vianexis | support case handling | legitimate interest | ticket_opened | ticket_closed_plus_accountability | null | undecided | true | true | true |
| privacy_request | vianexis | GDPR/request accountability | legal obligation / legitimate interest | request_received | request_closed_plus_accountability | null | restrict | limited | true | true |
| account_deletion_request | vianexis | deletion-case accountability | legal obligation / legitimate interest | deletion_request_received | case_closed_plus_accountability | null | restrict | limited | true | true |
| email_notification_log | vianexis | delivery accountability for transactional mail | legitimate interest / legal obligation | email_send_attempted | delivery_accountability_ended | null | undecided | true | true | true |
| uploaded_photo_video | joint_or_depends | shipment / damage / evidence media | depends on carrier workflow | media_uploaded | related_purpose_or_legal_retention_end | null | undecided | limited | true | true |
| ai_ocr_processing_record | undecided | assistive document/text processing **if enabled** | undecided — only if feature active | processing_invoked | purpose_ended | null | undecided | true | true | true |

## Open owner decisions (blocking concrete public periods)

1. Numeric retention for account profile after deletion request closure  
2. Session / refresh token absolute max lifetime  
3. Push token stale cleanup window  
4. Trip and transport-document company vs ViaNexis retention split  
5. Signature and media evidence retention  
6. Location event max retention when recorded  
7. Message retention vs trip lifecycle  
8. Diagnostic vs security audit log split and caps  
9. Privacy / deletion request record retention after `closed`  
10. Email notification log retention  
11. Whether any AI/OCR cloud processing is production-active (else row stays non-applicable)

## Related

- Public privacy §18 (event-based)  
- `docs/account-deletion-operations.md`  
- `docs/legal-processors-audit.md`
