# Legal Center readiness — internal decision sheet

**Status:** living decision sheet (not public)  
**Date:** 2026-08-01  
**Scope:** `/hu/legal`, `/en/legal`  
**Rule:** Do not invent routes, versions, or compliance certifications. Public UI must not show internal readiness labels.

| # | Topic | status | evidence | requiresOwnerDecision | requiresLegalReview | productionBlocker | notes |
|---|-------|--------|----------|-----------------------|---------------------|-------------------|-------|
| 1 | Existing HU/EN legal routes | present | `/privacy`, `/terms`, `/disclaimers`, `/legal`, `/privacy-request`, `/contact`, `/driver-app/account-deletion`, `/driver-app/data-safety`, `/driver-app/legal`, `/driver-app/privacy`, `/driver-app/terms` | false | false | false | Non-HU/EN `/legal` redirects to `/en/legal` |
| 2 | Missing routes | none_for_cards | All 8 public cards map to existing routes or on-page `#service-provider` | false | false | false | No empty/404 cards shipped |
| 3 | Document versions | shared_and_privacy | Privacy `legalConfig.privacyPolicyVersion` = `1.0`; Terms/RU/Data Safety/Driver hub use `DRIVER_APP_LEGAL_VERSION` (`1.0`); deletion & privacy-request have no separate public version field | true | true | false | Do not invent per-doc versions beyond config/`version.ts` |
| 4 | Last updated dates | present | Privacy last updated from `legalConfig`; shared docs from `DRIVER_APP_LEGAL_LAST_UPDATED` (`2026-07-31`) | false | false | false | — |
| 5 | Testing banner | active | `LEGAL_SHOW_TESTING_RELEASE_BANNER` + `legalCenterTestingReleaseBanner` | true | true | true | Turn off only after counsel + content freeze |
| 6 | Data Safety page | exists | `/driver-app/data-safety` HU/EN; card included | false | true | false | Explicitly not Play Console form |
| 7 | Privacy contact page | exists | `/privacy-request` HU/EN + `privacy@` | false | true | false | Not labelled as DPO mailbox |
| 8 | Account deletion | exists | `/driver-app/account-deletion`; highlighted CTA on Legal Center | false | true | false | No automatic wipe claim |
| 9 | Broken link audit | pass_static | Validator checks absolute URLs from `legalConfig`; cards only for existing routes | false | false | false | Re-run after route renames |
| 10 | Metadata audit | pass | Title pipe form; canonical HU/EN; hreflang hu/en; indexable | false | false | false | — |
| 11 | Print audit | pass | Print list with absolute URLs, provider, print date; CTA/lang switch `print:hidden` | false | false | false | Does not embed full long-form docs |
| 12 | HU/EN parity | pass | Same card ids/order via shared `getLegalCenterCards` structure | false | false | false | — |
| 13 | Counsel review | open | `LEGAL_SHOW_COUNSEL_REVIEW_NOTICE_IN_DEV`; `showPublicLegalReviewStatus` = false | true | true | true | Public “under legal review” off until authorised |
| 14 | Production blockers | open | Testing banner on; counsel review; retention/processor audits still open in config gaps | true | true | true | See also privacy/terms/RU decision sheets |
| 15 | Next task | pending | Counsel review of Legal Center wording; confirm version display policy for deletion page | true | true | false | Then consider banner off |

## Related

- `docs/terms-legal-decisions.md`
- `docs/responsible-use-legal-decisions.md`
- `docs/legal-processors-audit.md`
- `docs/legal-google-play-readiness.md`
