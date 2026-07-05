# ViaNexis public site — jogilag óvatos tartalom (HU master)

> **Státusz:** HU master — a site `src/lib/i18n/content/hu.ts` forrása.  
> **EN draft:** `public-site-legal-safe-copy-en.md`  
> **Utolsó frissítés:** 2026-07-05

---

## Hero

**Cím:**  
ViaNexis — digitális fuvarbizonyíték és sofőrplatform

**Alcím:**  
Sofőralkalmazás, céges irányítás, dokumentumkezelés, üzenetek, értesítések és többnyelvű fuvarfolyamat egy rendszerben.

**Elsődleges CTA:** Kapcsolatfelvétel  
**Másodlagos CTA:** Belső tesztelés előkészítés alatt

**Nem használjuk:** „Letöltés Google Playről”, „demo app”, „éles rendszer”, „tanúsított platform”

---

## Aktuális állapot (platform státusz sáv)

- Google Play belső tesztelés előkészítés alatt.
- A sofőr app release readiness és Samsung UAT folyamatban.
- Production backend, push értesítések és partneri integrációk fokozatosan kerülnek bekötésre.

**Disclaimerek:** A ViaNexis nem állítja, hogy a rendszer éles, tanúsított vagy minden országban hivatalosan elfogadott platform.

---

## Modulok

### 1. Sofőr app

| Mező | Tartalom |
|------|----------|
| **Cél** | A sofőr fuvarhoz kötött feladatokat, dokumentumokat és eseményeket egy mobil felületen kezelje — online és offline is. |
| **App-side foundation** | Fuvarlista és részletek, dokumentumfeltöltés, aláírás-capture, checklist, incidensrögzítés, offline mentés és szinkron, PIN-védett munkamenet. |
| **Backend dependency** | Éles API, tenant scope, fuvar- és dokumentum-szinkron, céges beállítások feloldása. |

### 2. Céges irányítás / Admin

| Mező | Tartalom |
|------|----------|
| **Cél** | A fuvarozó cég fuvarokat, felhasználókat, jogosultságokat és munkafolyamatokat egy portálon irányítson. |
| **App-side foundation** | Sofőr oldali adatok és műveletek a céges szabályoknak megfelelően jelennek meg. |
| **Backend dependency** | Webes céges portál, admin app, szerepkörök, fuvarkezelés, dokumentumkövetelmények, céges exchange és értesítési beállítások. |

### 3. Digitális CMR és dokumentumok

| Mező | Tartalom |
|------|----------|
| **Cél** | Fuvarhoz kötött dokumentumok — CMR, szállítólevél, számla, jármű- és sofőriratok — strukturáltan kezelhetők legyenek. |
| **App-side foundation** | Dokumentumfeltöltés, scan/fénykép, fuvarhoz rendelés, követelmény-alapú teendők, primary document koncepció. |
| **Backend dependency** | Dokumentum tárolás, metaadat, aláírási szabályok, hatósági megosztás scope-korlátozással. |
| **Disclaimer** | A digitális dokumentum nem jelent automatikus jogi bizonyító erőt. Az elfogadás országonként és ügyfelenként eltérhet. |

### 4. Lezárt fuvar csomag

| Mező | Tartalom |
|------|----------|
| **Cél** | A teljesített fuvar bizonyítékai összefoglalhatók exportálható csomagban. |
| **App-side foundation** | Fuvar lezárása, helyi adatok és szinkronizált események alapja a csomag összeállításához. |
| **Backend dependency** | Completed trip package generálás, PDF export, audit export. Egyes szekciók (pl. raklap/göngyöleg PDF) még dependency állapotban. |
| **Disclaimer** | A csomag támogatja a dokumentálást; nem helyettesíti a cég jogi értékelését vagy hatósági eljárását. |

### 5. Üzenetek és értesítések

| Mező | Tartalom |
|------|----------|
| **Cél** | Fuvarhoz kötött kommunikáció és fontos események jelzése a sofőr számára. |
| **App-side foundation** | Üzenetlista, fuvarhoz kötött thread, app-oldali értesítési foundation (permission flow, payload modell, tap routing, PIN utáni deep link). Használható: új üzenet, fuvarmódosítás, dokumentum teendő, sync probléma. |
| **Backend dependency** | Production push (FCM/APNs), device token regisztráció, szerveroldali küldés és audit — külön dependency, még nem éles. |
| **Disclaimer** | Az értesítésből a célképernyő megnyitható PIN után. A lockscreen szöveg alapból privacy-safe. Production push nem állítja, hogy minden esemény azonnal megérkezik. |

### 6. Raklapcsere és göngyölegcsere

| Mező | Tartalom |
|------|----------|
| **Cél** | Raklap- és göngyölegcserék stop szinten rögzíthetők mennyiséggel, hiánnyal, sérüléssel és vitával. |
| **App-side foundation** | Külön raklapcsere és göngyöleg modul. Cégesen kapcsolható. Cég előre megadhatja a cseretárgyakat; sofőr egyedi göngyöleget is felvehet, ha engedélyezett. Offline mentés és későbbi szinkron. |
| **Backend dependency** | Exchange settings API, rekord szinkron, portál admin UI, completed package PDF szekció — utóbbi dependency. |
| **Disclaimer** | A PDF evidence szekció a lezárt fuvar csomagban még nem minden esetben teljes. A rögzítés támogatja a vitás helyzet dokumentálását, de nem dönt vitában. |

### 7. ADR és határ / vám segédletek

| Mező | Tartalom |
|------|----------|
| **Cél** | Gyors segédinformáció ADR és határ/vám kontextusban — hivatalos forrás ellenőrzése mellett. |
| **App-side foundation** | ADR tájékoztató, UN szám keresés, alagút kód segédlet, határ/vám metaadat fuvarhoz kötve. |
| **Backend dependency** | ADR adatbázis frissítés, országspecifikus szabály metaadat, határ checkpoint adatok. |
| **Disclaimer** | Lásd ADR disclaimer szekció alább. |

### 8. Tehergépkocsi térkép alap

| Mező | Tartalom |
|------|----------|
| **Cél** | Flotta és fuvar áttekintés térképen — operatív orientáció. |
| **App-side foundation** | Térkép alapú áttekintés, fuvar és jármű kontextus. |
| **Backend dependency** | Telematika provider, routing provider, élő pozíció — fokozatos bekötés. |
| **Disclaimer** | A térkép nem garantálja a jogszabályi korlátozások vagy engedélyek betartását. |

### 9. Többnyelvű működés

| Mező | Tartalom |
|------|----------|
| **Cél** | Többnyelvű csapatok egy platformon dolgozhassanak. |
| **App-side foundation** | Sofőr app többnyelvű felület, eredeti üzenet megőrzése, fordítás segítségként. |
| **Backend dependency** | Portál és public site locale bővítés, fordítási review workflow. |
| **Disclaimer** | Lásd AI/OCR/fordítás disclaimer alább. |

### 10. Audit és support hozzáférés

| Mező | Tartalom |
|------|----------|
| **Cél** | Visszakereshető napló; kontrollált support hozzáférés. |
| **App-side foundation** | Eseményrögzítés; support session auditálható módon. |
| **Backend dependency** | Audit export, support access policy, enterprise jogosultság-mátrix. |
| **Disclaimer** | Az auditnapló nem minősül automatikus jogi bizonyítéknak. |

---

## ADR disclaimer (kötelező szöveg)

Az ADR és alagút adatok **segédinformációk**. A hivatalos forrás, táblázás és aktuális helyi szabály **mindig ellenőrizendő**. A ViaNexis **nem helyettesíti** a jogszabályt, ADR oktatást, vállalati veszélyes áru felelőst vagy hatósági döntést. Az app **nem hoz ADR döntést** hivatalos forrás helyett.

---

## AI / OCR / fordítás disclaimer (kötelező szöveg)

Az AI összesítés, OCR és automatikus fordítás **segédeszköz**. **Emberi ellenőrzés szükséges.** Az eredeti dokumentum és üzenet marad **elsődleges**. Az automatikus értelmezés **nem jogi tanács** és nem minősített fordítás.

---

## eFTI disclaimer (kötelező szöveg)

A ViaNexis **nem minősített eFTI platform**. Nem ígér hatósági elfogadást minden országban. Az eFTI-ready foundation technikai felkészültséget jelent — **nem tanúsítványt vagy engedélyt**.

---

## Amit nem állítunk

- Nem certified eFTI platform
- Nem jogilag minden országban hivatalosan elfogadott
- Nem hibátlan AI/OCR/fordítás
- Nem ADR döntés hivatalos forrás helyett
- Nem kész production push/FCM (backend dependency)
- Nem kész Play Store nyilvános letöltés
- Nem „demo app”

---

## Kapcsolat

**E-mail:** info@vianexis.eu  
**CTA:** Kapcsolatfelvétel / Pilot hozzáférés igénylése (egyedi értékelés)
