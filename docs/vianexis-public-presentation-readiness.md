# ViaNexis public presentation readiness

**Updated:** 2026-07-05  
**Repo:** `vianexis-public-site`  
**Audience:** Controlled HU preview — fuvarozó cégek, diszpécserek, sofőrök

---

## Positioning

**Fő üzenet:** ViaNexis Driver + Company Control Platform — digitális fuvarbizonyíték, sofőr munkafolyamat és céges irányítás egy ökoszisztémában.

**Nem állítunk:** éles production platform, tanúsított eFTI, minden országban hivatalos elfogadás, hibátlan AI/OCR/fordítás, Play Store letöltés.

---

## Modul lefedettség (site)

| Modul | Site státusz | Megjegyzés |
|-------|--------------|------------|
| Driver App | ✅ `/driver-app` + homepage | Play internal prep — nem store link |
| Company Portal / Admin | 🟡 `/company-portal` | Admin app külön nem emelt oldal |
| Digital CMR & evidence | ✅ `/documents-signatures` | Jogi disclaimer OK |
| Messaging & notifications | 🟡 homepage section | FCM dependency jelölve |
| Pallet/packaging exchange | ✅ homepage section | Backend + admin settings dependency |
| ADR & border | 🟡 module card | Nincs dedikált oldal |
| Completed trip package | 🟡 module card | Nincs dedikált oldal |
| Multilingual | 🟡 module card | Site csak HU |
| Authority / eFTI foundation | ✅ `/authority-efti` | Nem minősített — disclaimer erős |
| Security / audit | ✅ `/security-audit` | |
| Company onboarding / pilot | 🟡 `/pilot` | Form még nem küld backendre |

---

## Disclaimerek (kötelező)

- Nem jogi tanácsadás
- AI/OCR/fordítás emberi ellenőrzést igényel
- ADR hivatalos forrás ellenőrzendő
- eFTI certification **not claimed** — csak „eFTI-ready foundation”
- Push/FCM még nem éles
- Google Play belső teszt előkészítés alatt

---

## Következő lépések

1. Pilot form → backend public intake endpoint
2. Legal pages counsel review (DRAFT badge eltávolítása után)
3. Platform status banner aloldalakon
4. Admin app narratíva (portál vs platform admin)
5. EN locale — legal review után

Cross-repo matrix: `transdoc-backend/docs/platform-integration-matrix.md`
