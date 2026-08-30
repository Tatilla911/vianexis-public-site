# Public enterprise integration message

**Repo:** `vianexis-public-site`  
**Audience:** Product / marketing / sales alignment for the public homepage  
**Runtime source of truth (site copy):** `src/lib/i18n/enterprise-integration/en.ts` and `hu.ts`  
**Homepage section:** `#integrations` (`EnterpriseIntegrationSection`)

This note summarises the **canonical public message**. Full technical detail lives in the backend staging-integration docs (see links below). Do not invent vendor logos or claim every TMS/provider is already connected.

---

## Canonical English (EN)

**Eyebrow:** Enterprise integrations  
**Title:** Connect ViaNexis to your existing systems

ViaNexis is built for **provider-neutral** integration with external transport and enterprise systems. ViaNexis can connect to external systems, and approved external systems can connect to ViaNexis through APIs, webhooks and connector architecture.

**Two-way connectivity**

- **External systems → ViaNexis** — trips, stops, assignments and operational data where the external interface supports it.
- **ViaNexis → External systems** — execution status, delays and document metadata (e.g. final CMR / POD) where supported.

**Coexistence:** Companies do not necessarily need to replace their current TMS or ERP to adopt ViaNexis.

**Capability note:** Integration options depend on the capabilities and interface of the external system. New documented API-based providers normally need provider-specific configuration, mapping and adapter work — not a redesign of ViaNexis core.

**Partner / sandbox:** Partner API and webhook options for approved integrations; sandbox validation before production; production access remains manually approved.

---

## Canonical Hungarian (HU)

**Eyebrow:** Vállalati integrációk  
**Title:** Kapcsolja össze a ViaNexist meglévő rendszereivel

A ViaNexis **szolgáltatófüggetlen** integrációs architektúrára épül. A ViaNexis csatlakozhat külső rendszerekhez, és jóváhagyott külső rendszerek is csatlakozhatnak a ViaNexishez API-k, webhookok és connector architektúra révén.

**Kétirányú kapcsolódás**

- **Külső rendszerek → ViaNexis** — fuvarok, megállók, hozzárendelések és operatív adatok, ha a külső interfész támogatja.
- **ViaNexis → Külső rendszerek** — végrehajtási státusz, késések és dokumentum-metaadatok (pl. végleges CMR / POD), ahol támogatott.

**Együttélés:** A cégeknek nem feltétlenül kell lecserélniük meglévő TMS vagy ERP rendszerüket.

**Képesség:** Az integrációs lehetőségek a külső rendszer interfészétől függnek. Új, dokumentált API-alapú szolgáltatóknál általában konfiguráció, mapping és adapter munka szükséges — nem a ViaNexis mag átalakítása.

**Partner / sandbox:** Partner API és webhook jóváhagyott integrációkhoz; sandbox validáció az éles előtt; éles hozzáférés manuális jóváhagyással.

---

## Claims guardrails

**Say:** provider-neutral, two-way, coexistence with TMS/ERP, Partner API / webhooks, sandbox, certification / manual production approval.

**Do not say:** every TMS or provider already connected; named unverified vendors as “integrated”; production self-service without approval.

Presentation readiness: [vianexis-public-presentation-readiness.md](vianexis-public-presentation-readiness.md).

---

## Technical detail (backend docs)

Expected paths in `transdoc-backend-staging-integration` (relative under `docs/`):

| Doc | Role |
|---|---|
| `product-enterprise-integration-capability.md` | Canonical product capability statement |
| `integration-capabilities-overview.md` | Customer-facing capability categories |
| `integration-hub-foundation.md` | Integration Hub parent contract |
| `partner-api-v1.md` | Partner API v1 specification |
| `integration-technical-onboarding.md` | Sandbox → certification onboarding |
| `connector-development-playbook.md` | Provider adapter playbook |
| `partner-developer-portal.md` | Partner Integration Portal |
| `integration-docs-index.md` | Full integration docs index |
