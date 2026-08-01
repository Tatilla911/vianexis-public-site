# Terms of Use — internal legal decisions

**Status:** living decision sheet (not public)  
**Date:** 2026-07-29 (updated 2026-08-01 for acceptance version mismatch)  
**Scope:** ViaNexis Terms of Use (`/hu/terms`, `/en/terms`, `/driver-app/terms`)  
**Rule:** Do not invent answers. Public Terms must stay cautious where status is open.

## Terms version acceptance mismatch (explicit)

| Field | Value |
|-------|--------|
| Public Terms version | `1.0` (`DRIVER_APP_LEGAL_VERSION` in `src/lib/i18n/driver-app-legal/version.ts`) |
| Public Terms effective / last updated | `2026-07-31` |
| Driver App local acceptance version | `hu-0.1` (Driver App `LegalDocumentCatalog` / local SharedPreferences gate — **not modified in this public-site pass**) |
| Status | **mismatch** |
| Evidence meaning | Current Driver App local acceptance **must not** be treated as proven acceptance of public Terms `1.0` |
| Production blocker | **yes** |
| Closed / internal testing blocker | **not necessarily**, while `LEGAL_SHOW_TESTING_RELEASE_BANNER` is active and the acceptance limitation is documented |
| Do not downgrade public Terms to | `hu-0.1` |

### Next separate task (acceptance evidence)

Implement a central Terms acceptance record covering at least:

- central Terms version identifier (align with public `1.0`);
- backend acceptance record;
- user ID;
- document version;
- locale;
- acceptedAt;
- app version;
- Terms URL or document hash;
- re-acceptance prompt on material Terms changes.

Do **not** change Driver App or backend in a public-site-only legal pass.

| # | Topic | status | evidence | requiresOwnerDecision | requiresLegalReview | productionBlocker | notes |
|---|-------|--------|----------|-----------------------|---------------------|-------------------|-------|
| 1 | Terms acceptance implementation | partial | Driver App local SharedPreferences gate; public Terms describe local gate without claiming backend audit | true | true | true | Public `1.0` vs app `hu-0.1` mismatch — see section above |
| 2 | Separate driver acceptance required? | likely_yes_in_app | App requires open-docs + checkbox; company acceptance does not auto-replace | true | true | false | Public text already separates company vs driver acceptance |
| 3 | Company contract vs Terms priority | drafted_cautious | Public hierarchy chapter: separate written contract may prevail for deviations | true | true | false | Confirm standard MSA precedence wording with counsel |
| 4 | Active user roles | code_verified_partial | Backend `UserRole`: driver, company_admin, dispatcher, workshop, external_partner_*, platform staff roles | false | true | false | Public Terms list roles as environment-dependent |
| 5 | Pilot terms | open | Pilot access exists in product language; no single published pilot schedule in repo | true | true | false | Duration/limits belong in separate pilot agreement |
| 6 | Pricing model | open | Subscriptions module + `STRIPE_PLACEHOLDER`; no public price list | true | true | true | Public Terms: paid use only via separate offer/contract; no prices |
| 7 | Automatic renewal | not_asserted | No verified consumer auto-renew flow for Driver; Stripe placeholder | true | true | true | Do not claim auto-renewal until implemented and approved |
| 8 | SLA | not_in_public_terms | No customer uptime SLA in code; ops queue “SLA” badges are internal | true | true | false | SLA only via separate company contract |
| 9 | Data-export options | partial | Trip PDF packages; portal CSV/ops exports; no general self-service dump | true | true | false | Public Terms: available exports by permission; privacy@ for access requests |
| 10 | Post-termination access window | open | No approved 30/60/90-day export window in repo | true | true | true | Do not invent retention/export window |
| 11 | Liability cap | open | No approved financial cap | true | true | true | Public Terms omit cap; balanced mandatory-law carve-outs only |
| 12 | Governing law | drafted_hu_law | Public Terms: Hungarian law without prejudice to EU/mandatory rules | true | true | false | Counsel to confirm cross-border B2B wording |
| 13 | Competent court / arbitration | open | Public Terms: forum set by separate contract + applicable law; no exclusive court invented | true | true | true | Owner/counsel must decide exclusive venue if desired |
| 14 | Community feature status | not_active_as_full_network | `MAP_COMMUNITY_FEATURE_ENABLED` default false; limited map orientation possible | false | false | false | Public Terms describe limited map; community rules deferred until activation |
| 15 | Offline data limits | code_verified_partial | Local cache + reconnect; sync may fail; not full offline | false | true | false | Public Terms match caveats |
| 16 | Terms version acceptance logging | local_only | On-device preference; no Driver ToS backend audit API found | true | true | true | Needed before claiming server-side acceptance evidence |
| 17 | Chapters needing counsel review | open | Liability, governing law/forum, hierarchy vs DPA, fees, acceptance | true | true | true | Especially §§29–33 and acceptance |
| 18 | Production publish blockers | open | Testing banner on; acceptance version mismatch; liability/forum/fees undecided; counsel review | true | true | true | Turn off `LEGAL_SHOW_TESTING_RELEASE_BANNER` only after review |

## Follow-ups

- Marketing `content/legal/{hu,en}.ts` short overviews may still use relative `/privacy` paths on marketing legal pages; HU/EN `/terms` and `/privacy` long-form pages use absolute Play/stable URLs where required.
- Privacy → Terms e-signature cross-reference should target Terms §16 / `#electronic-signatures-and-evidence` (fixed in public-site content).

## Related

- `docs/account-deletion-operations.md`
- `docs/data-retention-matrix.md`
- `docs/legal-processors-audit.md`
