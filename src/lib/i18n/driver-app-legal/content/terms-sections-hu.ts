import type { LegalSection } from "../types";
import { OPERATOR_FULL_IDENTIFICATION_HU, OPERATOR_STATEMENT_HU } from "../operator";

export const termsSectionsHu: LegalSection[] = [
  {
    id: "intro-and-scope",
    title: "1. Bevezetés és hatály",
    body: `Jelen Felhasználási feltételek (a továbbiakban: „Feltételek”) a ViaNexis márkanév alatt nyújtott technológiai szolgáltatások használatát szabályozzák. A Feltételek különösen a ViaNexis Driver mobilalkalmazásra, a ViaNexis céges operációs portálra, a kapcsolódó backend és platformszolgáltatásokra, valamint — ahol alkalmazandó — a kontrollált adminisztratív felületekre, a pilot és meghívásos használatra, továbbá a kapcsolódó dokumentum-, üzenet-, aláírás- és auditfunkciókra vonatkoznak.

A Feltételek nem terjednek ki automatikusan a vianexis.eu marketing weboldal minden tartalmi elemére; a marketingoldal saját jogi tájékoztatói külön dokumentumokban szerepelnek. A sofőralkalmazás adatkezelését az Adatvédelmi tájékoztató szabályozza.

${OPERATOR_STATEMENT_HU}`,
  },
  {
    id: "provider-details",
    title: "2. A szolgáltató adatai",
    body: "A szolgáltatást Turul Atilla egyéni vállalkozó nyújtja a ViaNexis márkanév alatt. Az alábbi azonosító adatok a központi jogi konfigurációból származnak.",
    items: OPERATOR_FULL_IDENTIFICATION_HU,
  },
  {
    id: "definitions",
    title: "3. Fogalommeghatározások",
    body: "A Feltételekben használt fogalmak — hacsak a szövegkörnyezet másként nem jelzi — az alábbi jelentéssel bírnak. A felsorolás tájékoztató; nem minden szerepkör vagy funkció érhető el minden környezetben.",
    items: [
      "ViaNexis: a szolgáltató által használt márkanév és a hozzá kapcsolódó platformszolgáltatások összessége",
      "Szolgáltató: Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője",
      "Platform: a ViaNexis technológiai rendszere, ideértve a backend szolgáltatásokat és a kapcsolódó felületeket",
      "ViaNexis Driver: a sofőröknek szánt mobilalkalmazás",
      "Céges portál: a fuvarozó cég operációs/adminisztratív webes felülete",
      "Fuvarozó cég: a Platformot használó, sofőrökkel és fuvarokkal rendelkező szervezet",
      "Felhasználó: a Platformot vagy a ViaNexis Driver alkalmazást jogosultan használó természetes személy",
      "Sofőr: a ViaNexis Driver alkalmazást használó sofőr felhasználó",
      "Céges adminisztrátor: a céges portálon jogosultságot és fiókokat kezelő felhasználó",
      "Diszpécser: fuvarszervezési és operatív feladatokat ellátó céges felhasználó",
      "Jogosult munkatárs: a cég által a Platformhoz hozzárendelt, megfelelő jogosultsággal rendelkező felhasználó",
      "Fiók: a Felhasználó azonosított hozzáférése a Platformhoz vagy a ViaNexis Driver alkalmazáshoz",
      "Fuvar: a rendszerben kezelt szállítási feladat vagy hozzárendelés",
      "Fuvaradat: a fuvarhoz kapcsolódó operatív, státusz- és metaadatok",
      "Dokumentum: feltöltött, generált vagy rögzített fuvarokmány, bizonylat vagy kapcsolódó fájl",
      "Elektronikus aláírás: a rendszerben rögzített érintőképernyős aláírás-rajzolat és kapcsolódó bizonyítékadatok",
      "Felhasználói tartalom: a Felhasználó vagy a cég által feltöltött vagy rögzített tartalom",
      "Pilot: kontrollált, korlátozott vagy meghívásos használati időszak",
      "Külön céges szerződés: a Szolgáltató és a Fuvarozó cég közötti, a Feltételeken túlmutató írásbeli megállapodás",
      "Auditadat: biztonsági, elszámoltathatósági vagy ügyintézési naplóbejegyzés",
    ],
  },
  {
    id: "nature-of-service",
    title: "4. A szolgáltatás jellege",
    body: "A ViaNexis technológiai szolgáltató. A Platform és a ViaNexis Driver digitális eszközöket biztosítanak a fuvarhoz kapcsolódó feladatok, dokumentumok, üzenetek, aláírások és operatív folyamatok támogatásához.\n\nA ViaNexis nem fuvarozó, nem szállítmányozó, nem vámügynök, nem ADR-biztonsági tanácsadó, nem hatóság, nem vészhelyzeti szolgáltatás, és nem minősített eFTI platform. A Platform technikai felkészültséget támogathat eFTI irányú folyamatokhoz; ez nem minősítés, és nem jelent hatósági elfogadást minden országban.\n\nA szolgáltatás jellege B2B: elsősorban fuvarozó cégek és azok jogosult felhasználói számára készült.",
  },
  {
    id: "acceptance-of-terms",
    title: "5. A feltételek elfogadása",
    body: "A Feltételeket a Felhasználó akkor fogadja el, amikor a ViaNexis Driver alkalmazásban a jogi dokumentumok megnyitása után jelzi az elfogadást, illetve — a céges portál vagy más felület saját folyamatától függően — amikor a használathoz szükséges elfogadási lépést teljesíti. A regisztráció, meghívás elfogadása vagy a szolgáltatás használata önmagában is a Feltételek ismeretét és betartását feltételezi, ahol a konkrét felület ezt előírja.\n\nA ViaNexis Driver alkalmazásban helyi (eszközön tárolt) elfogadási kapu létezhet, amely a dokumentumverzióhoz köthető. Ez a helyi rögzítés nem jelenti automatikusan, hogy az elfogadás minden esetben a backend rendszerben is auditáltan naplózásra kerül. A verziószám és a hatálybalépés a dokumentum fejlécében jelenik meg.\n\nHa a Felhasználó nem fogadja el a Feltételeket, nem használhatja a szolgáltatást. A Fuvarozó cég saját szerződéses elfogadása nem helyettesíti automatikusan a sofőr személyes elfogadását, ha az alkalmazás külön elfogadást kér. Az elfogadás nem jelent lemondást a kötelező jog által biztosított jogokról.",
  },
  {
    id: "user-and-company-roles",
    title: "6. Felhasználói és céges szerepkörök",
    body: "A Platform több felhasználói szerepkört támogat. Nem minden szerepkör érhető el minden környezetben vagy minden cégnél. A hozzáférést tipikusan a Fuvarozó cég jogosult adminisztrátora vagy — platformszintű funkcióknál — a Szolgáltató támogatási/adminisztratív folyamata adhatja.\n\nA Felhasználó felel a saját jogosultságával végzett műveletekért. Más személy fiókjának használata tilos. A jogosultság visszavonható.",
    items: [
      "Sofőr: ViaNexis Driver használata; fuvarfeladatok, dokumentumok, aláírások, üzenetek a jogosultság szerint",
      "Céges adminisztrátor: céges portál; felhasználók, jogosultságok, céges beállítások a jogosultság szerint",
      "Diszpécser: fuvarszervezés és operatív feladatok a jogosultság szerint",
      "Műhely / flottafelhasználó: jármű- és hibajegy jellegű funkciók, ha a cégnél aktív",
      "Külső partner adminisztrátor/operátor: partnerportál funkciók, ha a cégnél és a konfigurációban aktív",
      "Támogatási vagy platform-adminisztratív hozzáférés: korlátozott, szükség szerinti support/ops hozzáférés",
      "Egyéb platformszerepek (pl. onboarding reviewer, billing admin): csak ha a környezetben ténylegesen kiosztásra kerültek",
    ],
  },
  {
    id: "controlled-pilot-invite-access",
    title: "7. Kontrollált, pilot és meghívásos hozzáférés",
    body: "A hozzáférés lehet kontrollált, pilot, meghívásos vagy külön céges szerződéshez kötött. A pilot funkciói, időtartama és korlátai külön megállapodásban vagy pilot feltételekben szerepelhetnek. A pilot környezetben egyes funkciók korlátozottak lehetnek, változhatnak, vagy cégenként eltérő mértékben érhetők el.\n\nA meghívás vagy céges hozzárendelés nem jelent korlátlan jogosultságot. A Szolgáltató vagy a Fuvarozó cég a hozzáférést a Feltételek és a vonatkozó szerződés szerint korlátozhatja.",
  },
  {
    id: "account-creation-and-management",
    title: "8. Fiók létrehozása és kezelése",
    body: "A fiók létrehozása jellemzően meghívás, céges hozzárendelés vagy kontrollált regisztrációs folyamat útján történik. A megadott adatoknak pontosnak és naprakésznek kell lenniük. A fiók személyhez kötött.\n\nA fiókkezelés magában foglalhatja a profiladatok frissítését, a jogosultságok változását, a cégtől való leválasztást, a felfüggesztést, a kijelentkezést és a törlési kérelmet. Az alkalmazás eltávolítása, a kijelentkezés, a cégtől való leválasztás és a felfüggesztés nem azonos a végleges fiók- és adattörléssel.",
  },
  {
    id: "company-assignment-and-permissions",
    title: "9. Céges hozzárendelés és jogosultságok",
    body: "A sofőr és más felhasználók hozzáférése jellemzően Fuvarozó céghez rendelhető. A céges adminisztrátor vagy jogosult munkatárs a portálon keresztül hozzárendelést, meghívást, felfüggesztést, újraaktiválást vagy a sofőralkalmazás-hozzáférés visszavonását kezelheti a rendelkezésre álló funkciók szerint.\n\nA cégtől való leválasztás vagy a hozzáférés visszavonása nem feltétlenül törli a fiókot vagy az összes adatot. A Fuvarozó cég nem kérheti el és nem használhatja a sofőr jelszavát vagy PIN-kódját.",
  },
  {
    id: "account-security",
    title: "10. Fiókbiztonság",
    body: "A Felhasználó köteles védeni a jelszavát, PIN-kódját és — ahol használt — a biometrikus hozzáférést. A fiókmegosztás tilos. A munkamenetek és ismert eszközök kezelése a rendelkezésre álló biztonsági funkciók szerint történhet.\n\nJogosulatlan hozzáférés gyanúja esetén a Felhasználó köteles haladéktalanul jelezni a security@vianexis.eu címen, és ahol lehetséges, megváltoztatni a hitelesítő adatokat.",
  },
  {
    id: "acceptable-use",
    title: "11. Elfogadható használat",
    body: "A szolgáltatást kizárólag jogszerű fuvarozási, dokumentációs, diszpécseri, vállalati, bizonyítékkezelési, auditálási és support célra szabad használni, a jogosultságok és az alkalmazandó jog keretei között.",
  },
  {
    id: "prohibited-conduct",
    title: "12. Tiltott magatartások",
    body: "Tilos különösen:",
    items: [
      "más személy fiókjának használata vagy fiókmegosztás",
      "jogosulatlan hozzáférés kísérlete",
      "hozzáférési korlátozások vagy tenant-szeparáció megkerülése",
      "rosszindulatú kód feltöltése",
      "automatizált támadás, túlterhelés vagy biztonsági mechanizmusok kijátszása",
      "reverse engineering az alkalmazandó jog által megengedett kivételeken túl",
      "személyes adatok visszaélésszerű kezelése",
      "jogsértő, hamis vagy megtévesztő dokumentum feltöltése",
      "megtévesztő vagy jogosulatlan aláírás rögzítése",
      "auditadat manipulálása",
      "spam, marketing push vagy zaklatás",
      "veszélyes vagy jogellenes utasítás közzététele",
      "más felhasználó biztonságának veszélyeztetése",
      "a szolgáltatás továbbértékesítése külön engedély nélkül",
    ],
  },
  {
    id: "shipment-data-and-user-content",
    title: "13. Fuvaradatok és felhasználói tartalom",
    body: "A Felhasználói tartalom magában foglalhat dokumentumokat, fényképeket, videókat, üzeneteket, aláírásokat, fuvaradatokat, incidensadatokat, megjegyzéseket és feltöltött céges űrlapokat.\n\nA felhasználó vagy a jogosult fél megtartja a tartalomhoz fűződő jogait. A ViaNexis csak a szolgáltatás működtetéséhez, tárolásához, továbbításához, megjelenítéséhez, biztonsági mentéséhez és támogatásához szükséges, korlátozott jogot kap. Külön engedély nélkül a tartalmat nem használjuk reklámhoz.\n\nA Felhasználó csak olyan tartalmat tölthet fel, amelyhez megfelelő jogosultsága van. Felesleges, különleges vagy nem fuvarhoz kapcsolódó személyes adat feltöltése kerülendő. A jogsértő tartalom hozzáférése korlátozható vagy eltávolítható. Ez nem érinti a ViaNexis és a Fuvarozó cég saját adatvédelmi felelősségét.\n\nA Fuvarozó cég és jogosult munkatársai felelnek a bevitt fuvaradatok ellenőrzéséért. A sofőr köteles az ésszerűen felismerhető hibát jelezni. A ViaNexis nem válik a fuvarozási szerződés részesévé, és nem garantálja automatikusan minden cím, súly, áruadat, megálló, váminformáció vagy ADR-adat pontosságát. Kritikus eltérés esetén az eredeti megbízás, hivatalos dokumentum és hatósági előírás az elsődleges.",
  },
  {
    id: "third-party-personal-data",
    title: "14. Harmadik személyek adatainak kezelése",
    body: "CMR, szállítólevél, aláírás, címzettadat, képek és egyéb dokumentumok harmadik személyek adatait tartalmazhatják. Csak a fuvarfolyamathoz szükséges adat rögzíthető. A Felhasználó köteles kerülni a szükségtelen adatfelvételt. A Fuvarozó cég saját adatkezelői kötelezettségei fennmaradnak. A Felhasználó kötelezettsége nem mentesíti a ViaNexist vagy a Fuvarozó céget az alkalmazandó jog alól.",
  },
  {
    id: "documents-and-digital-copies",
    title: "15. Dokumentumok és digitális másolatok",
    body: "A feltöltött digitális másolat nem minden esetben azonos az eredeti okirattal. A kép vagy OCR tartalma hibás lehet. Az eredeti dokumentum megőrzését jogszabály vagy szerződés előírhatja. A Felhasználó és a cég köteles ellenőrizni a dokumentum teljességét. Hibás, rontott vagy érvénytelen dokumentum jelölhető; az érvénytelenítés nem törli automatikusan az auditnyomot. Dokumentum letöltése vagy exportja nem garantál önmagában hatósági elfogadást.",
  },
  {
    id: "electronic-signatures-and-evidence",
    title: "16. Elektronikus aláírások és bizonyítékadatok",
    body: "A rögzített aláírás bizonyító ereje és joghatása a dokumentum típusától, a rögzítés körülményeitől és az alkalmazandó jogtól függ. A ViaNexis nem garantálja, hogy a rögzített aláírás minden országban vagy minden eljárásban minősített elektronikus aláírásnak vagy önmagában teljes bizonyító erejű bizonyítéknak minősül.\n\nAz aláírás a dokumentumhoz és a rögzítéshez kapcsolódó szerephez, időbélyeghez és auditadatokhoz kötődhet. Téves vagy jogosulatlan aláírást jelezni kell. Az aláírás törlése vagy érvénytelenítése korlátozott lehet, és nem törli automatikusan az auditnyomot. Az aláírás manipulálása tilos.",
  },
  {
    id: "adr-customs-border-route-aids",
    title: "17. ADR-, vám-, határ- és útvonal-segédfunkciók",
    body: "A Platformban megjelenő ADR információs segédletek, vám- és határinformációk, hivatalos linkek, útvonal- vagy navigációs segédletek, vezetési tilalomra vagy korlátozásra vonatkozó információk, valamint AI-alapú összefoglalások — ha elérhetők — tájékoztató jellegűek.\n\nEgyik sem helyettesíti a hatályos jogszabályt, a hatósági utasítást, az ADR-biztonsági tanácsadót, a vámügynököt vagy a minősített navigációs rendszert. Kritikus döntésnél hivatalos forrást kell ellenőrizni. A ViaNexis nem vészhelyzeti szolgáltatás; vészhelyzetben a helyi segélyhívó számot (az EU-ban: 112) kell hívni.\n\nCsak a ténylegesen elérhető segédfunkciók minősülnek a Feltételek szerinti szolgáltatásrésznek; a tervezett funkciók nem tekinthetők aktív szolgáltatásnak.",
  },
  {
    id: "ai-ocr-and-translation",
    title: "18. AI, OCR és automatikus fordítás",
    body: "Az AI-, OCR- és automatikus fordítási funkciók — ahol az adott környezetben ténylegesen engedélyezve vannak — segédeszközök. Az eredmény hibás, hiányos vagy félreérthető lehet. Az eredeti dokumentum elsődleges. Emberi ellenőrzés szükséges. Kritikus döntést nem szabad kizárólag AI/OCR/fordítás kimenetére alapozni.\n\nA rendszer nem hoz automatikusan joghatással járó döntést a jelenlegi igazolt működés szerint. Az AI nem jogi, vámügyi vagy ADR szakértő. A Felhasználó köteles a nyilvánvaló hibát jelezni vagy korrigálni. A funkció elérhetősége környezettől és konfigurációtól függhet. A jelenlegi terjesztett kiadásban nem állítunk aktív, külső fordítási vagy felhő-OCR szolgáltatót pusztán azért, mert a képesség létezik.",
  },
  {
    id: "offline-use-and-synchronisation",
    title: "19. Offline használat és szinkronizáció",
    body: "A ViaNexis Driver bizonyos funkciói ideiglenesen offline is használhatók lehetnek. Adatok helyben tárolódhatnak. A szinkronizáció késhet; sikertelen szinkronizáció előfordulhat. Párhuzamos módosítás konfliktust okozhat. A Felhasználó köteles ellenőrizni, hogy a feltöltés és státuszváltás sikerült-e.\n\nAz alkalmazás eltávolítása, eszközhiba vagy tárhelytisztítás helyi adatvesztést okozhat. Offline állapotban nem minden adat, dokumentum vagy értesítés naprakész. Sürgős helyzetben az offline alkalmazás nem helyettesíti a céges kommunikációs eljárást. Teljes, minden helyzetre kiterjedő offline működés nem garantált.",
  },
  {
    id: "notifications-and-communication",
    title: "20. Értesítések és kommunikáció",
    body: "Push, e-mail és alkalmazáson belüli értesítés késhet vagy elmaradhat. Eszköz-, hálózati-, operációs rendszer- vagy szolgáltatói beállítás befolyásolhatja a kézbesítést. Az értesítés nem kizárólagos biztonsági vagy sürgősségi csatorna. A Felhasználó köteles a fuvarfeladatokat és üzeneteket rendszeresen ellenőrizni. Kritikus vagy vészhelyzeti ügyben a céges vagy hivatalos kommunikációt kell használni.\n\nA jelenlegi rendszer célja az operatív értesítés; a Feltételek szerinti használat során tilos az értesítési funkciót spamre vagy zaklatásra használni. Marketing push célú használatot a jelenlegi termékcél és adatvédelmi tájékoztató szerint nem alkalmazunk.",
  },
  {
    id: "map-and-community-features",
    title: "21. Térképi és közösségi funkciók",
    body: "A jelenleg terjesztett verzióban a térképi funkciók korlátozottak lehetnek, és elsősorban tájékozódási vagy saját pozíció megjelenítési segédletként szolgálhatnak, ahol a funkció és a térképszolgáltató konfigurációja elérhető. A térkép nem minősített navigációs rendszer, és nem helyettesíti a hivatalos útvonal- vagy forgalmi információt.\n\nTeljes közösségi hálózatot vagy közösségi helymegosztó szolgáltatást a jelen Feltételek nem állítanak aktívként. Ha később közösségi funkció aktiválódik, annak szabályai — többek között becenév használata, teljes név és rendszám kerülése, helyadatmegosztás kontrollja, jelentés/blokkolás és jogsértő tartalom tilalma — a frissített Feltételekben vagy funkcióspecifikus szabályokban jelennek meg a kiadás előtt.",
  },
  {
    id: "intellectual-property",
    title: "22. Szellemi tulajdon",
    body: "A ViaNexis márkanév, logó, szoftver, forráskód, felhasználói felület, dokumentáció, sablonok, valamint a saját adatbázis- és rendszerstruktúra a Szolgáltató vagy a jogosult licencadók szellemi tulajdonát képezik. A hozzáférés korlátozott, visszavonható használati jogot biztosít; nem ruház át tulajdonjogot.\n\nA Felhasználói tartalom tulajdonjoga nem száll automatikusan a ViaNexisre. Tilos a jogosulatlan másolás, terjesztés, módosítás vagy továbbértékesítés. A kötelező jog szerinti interoperabilitási és egyéb kivételek fennmaradnak. Licencelt harmadik fél tartalmakra a vonatkozó licencfeltételek is irányadók lehetnek.",
  },
  {
    id: "third-party-services-and-links",
    title: "23. Harmadik fél szolgáltatásai és hivatkozásai",
    body: "A szolgáltatás kategóriaszinten támaszkodhat többek között térkép-, push-, e-mail-, tárhely- vagy infrastruktúra-szolgáltatásokra, külső hivatalos linkekre, navigációs alkalmazásokra, valamint — ha engedélyezett — AI/OCR/fordítási képességekre. A konkrét szolgáltatók környezettől függhetnek; a Feltételek nem neveznek ki nem igazolt vendort aktív adatfeldolgozóként.\n\nA harmadik fél saját feltételei alkalmazandók lehetnek. A ViaNexis nem irányít minden külső szolgáltatást. Külső szolgáltatói kiesés befolyásolhatja a funkciót. Hivatalos külső link tartalma változhat; a hivatkozás nem jelent automatikus jóváhagyást.",
  },
  {
    id: "availability-and-maintenance",
    title: "24. Szolgáltatás elérhetősége és karbantartás",
    body: "A rendszer nem garantáltan hibamentes. Tervezett és sürgős karbantartás lehet. Külső szolgáltató hibája okozhat kiesést. Internetkapcsolat szükséges lehet. Hiba vagy adateltérés esetén ésszerű javítási folyamat indulhat. Konkrét uptime, reakcióidő vagy SLA csak külön céges szerződésben vállalható. Pilot környezetben funkciókorlátok és változások lehetnek. Biztonsági okból funkció ideiglenesen korlátozható.",
  },
  {
    id: "fees-pilot-and-company-contracts",
    title: "25. Díjazás, pilot és külön céges szerződés",
    body: "Egyes pilotok lehetnek díjmentesek. Fizetős használat csak külön ajánlat, megrendelés vagy céges szerződés alapján történik. A díj, számlázás, fizetési határidő, adók, esetleges keretek és szolgáltatási szint a külön szerződésben szerepelnek. A jelen Feltételek önmagában nem hoznak létre automatikus fizetési kötelezettséget, ha nincs külön megrendelés vagy szerződés.\n\nA külön céges szerződés tartalmazhat előfizetést, támogatást, SLA-t, adatfeldolgozási rendelkezéseket és egyedi munkafolyamatokat. A külön írásbeli szerződés eltérhet a Feltételek egyes rendelkezéseitől; eltérés esetén a külön szerződés az adott eltérés körében elsőbbséget élvez. A céges szerződés megszűnése érintheti a kapcsolódó sofőrök hozzáférését. Díjváltozás csak a vonatkozó szerződés és előzetes tájékoztatás szerint történhet.\n\nA jelen Feltételek nem állítanak automatikus előfizetés-megújítást, konkrét díjat, díjvisszatérítést, automatikus számlázást vagy fizetési szolgáltatót.",
  },
  {
    id: "suspension-and-termination",
    title: "26. Felfüggesztés és megszüntetés",
    body: "A Szolgáltató korlátozhatja vagy felfüggesztheti a hozzáférést például jogosulatlan hozzáférés, fiókmegosztás, biztonsági kockázat, jogsértő tartalom, visszaélés, más felhasználó veszélyeztetése, külön szerződés szerinti fizetési késedelem, céges szerződés megszűnése, pilot lejárta, hatósági kötelezés vagy súlyos szerződésszegés esetén.\n\nAhol lehetséges, előzetes értesítés történik; sürgős biztonsági esetben azonnali korlátozás lehet. A felfüggesztés nem automatikus adattörlés. A jogszerűen megőrzendő auditadatok megmaradhatnak. Téves felfüggesztés ellen a support@vianexis.eu vagy legal@vianexis.eu címen lehet jelezni.",
  },
  {
    id: "account-and-data-deletion",
    title: "27. Fiók- és adattörlés",
    body: "A végleges fiók- és adattörlés kérelemalapú folyamat; a kérelem rögzítése nem indít azonnali, automatikus teljes adattörlést. Személyazonosság ellenőrzése szükséges lehet. Bizonyos adatok jogi, biztonsági, számviteli vagy bizonyítási okból megmaradhatnak; a megőrzött adat operatív használata korlátozott. Egyes céges adatok törléséről a Fuvarozó cég mint adatkezelő dönthet.\n\nAz alkalmazás eltávolítása, a kijelentkezés, a cégtől való leválasztás és a felfüggesztés nem egyenlő a törléssel.\n\nFiók és kapcsolódó adatok törlésének kérése:\nhttps://vianexis.eu/hu/driver-app/account-deletion",
  },
  {
    id: "data-export-on-access-end",
    title: "28. Adatletöltés és hozzáférés megszűnéskor",
    body: "A rendszerben elérhető lehet céges export, fuvarcsomag PDF vagy dokumentumletöltés a jogosultság és a rendelkezésre álló funkciók szerint. Általános, minden adatra kiterjedő önkiszolgáló exportot a Feltételek nem ígérnek.\n\nSaját adatokhoz való hozzáférési vagy adathordozhatósági kérelem — ahol alkalmazandó — a privacy@vianexis.eu címen nyújtható be. Megszűnés előtt a cégnek a külön szerződés szerint lehetősége lehet exportálni az adatokat. A Feltételek nem állítanak automatikus 30/60/90 napos exportablakot.",
  },
  {
    id: "warranties-and-liability",
    title: "29. Szavatosság és felelősség",
    body: "A szolgáltatás technikai és operatív segédeszköz. Nem garantál hibátlan működést, minden országban hatósági elfogadást, hibátlan OCR/AI/fordítást, és nem helyettesít szakértőt vagy hivatalos forrást. Felhasználói, céges vagy harmadik fél által bevitt hibás adat következményeiért a ViaNexis csak az alkalmazandó jog keretei között felel. Külső szolgáltatás hibája korlátozhatja a működést.\n\nA kötelező jogok nem zárhatók ki. A szándékos vagy súlyosan gondatlan károkozásra, valamint a személyi sérülésre vagy a kötelezően nem kizárható felelősségre vonatkozó kötelező szabályok fennmaradnak. A Feltételek nem tartalmaznak pénzügyi felelősségi plafont, amíg arról nincs külön jogi és üzleti döntés. A ViaNexis nem állítja, hogy semmilyen kárért nem felel.",
  },
  {
    id: "force-majeure",
    title: "30. Vis maior",
    body: "Egyik fél sem felel az olyan késedelemért vagy nem teljesítésért, amelyet ésszerű ellenőrzésén kívül álló esemény okoz, ideértve különösen az internet- és távközlési kiesést, energiaellátási hibát, felhőszolgáltatói kiesést, kibertámadást, hatósági intézkedést, háborút vagy polgári rendkívüli eseményt, természeti katasztrófát, illetve más hasonló akadályt.\n\nA mentesülés csak az akadály időtartamára és mértékére vonatkozhat. Ésszerű kárenyhítési intézkedéseket meg kell tenni. A vis maior nem töröl automatikusan adatvédelmi vagy biztonsági kötelezettséget.",
  },
  {
    id: "changes-to-terms",
    title: "31. A feltételek módosítása",
    body: "A Feltételeket módosíthatjuk hibajavítás, biztonsági változás, új funkció, funkció megszüntetése, jogszabályváltozás, szolgáltatói kör változása vagy üzleti ok miatt. A külön szerződés módosítása a saját rendelkezései szerint történik.\n\nLényeges változás esetén előzetes vagy megfelelő idejű közlésre törekszünk. Sürgős biztonsági változás azonnal bevezethető. Az új verziószám és hatálybalépés a dokumentum fejlécében jelenik meg. Szükség esetén új elfogadás kérhető. Nem minden kisebb módosításhoz szükséges külön hozzájárulás.",
  },
  {
    id: "governing-law-and-disputes",
    title: "32. Irányadó jog és jogviták",
    body: "A feltételekre a magyar jog irányadó, az alkalmazandó uniós jog és a kötelezően alkalmazandó nemzeti rendelkezések sérelme nélkül. A felek a jogvitákat elsődlegesen békés úton kísérlik meg rendezni. Az illetékes bíróságot vagy más vitarendezési fórumot a külön céges szerződés és az alkalmazandó jog határozza meg.\n\nA Feltételek nem állítanak kizárólagos bíróságot vagy választottbíróságot külön tulajdonosi vagy jogi döntés nélkül.",
  },
  {
    id: "document-hierarchy",
    title: "33. Dokumentumok viszonya és elsőbbsége",
    body: "A jogviszonyt több dokumentum szabályozhatja, többek között: külön céges szerződés; megrendelés vagy ajánlat; adatfeldolgozói megállapodás; SLA vagy szolgáltatási melléklet; a jelen Feltételek; funkcióspecifikus szabályok; az Adatvédelmi tájékoztató; valamint a felelős használatra vonatkozó disclaimerek.\n\nSzerződéses eltérésnél a külön írásbeli szerződés az adott kérdésben elsőbbséget élvezhet. Az adatvédelmi jogokat és kötelezettségeket az Adatvédelmi tájékoztató és az alkalmazandó jog szabályozza; az Adatvédelmi tájékoztató nem egyszerűen alárendelt szerződéses feltétel. A disclaimerek nem írhatják felül a kötelező jogot.",
  },
  {
    id: "contact",
    title: "34. Kapcsolat",
    body: "A Feltételekkel és a szolgáltatással kapcsolatos megkeresések:",
    items: [
      "Általános kapcsolat: info@vianexis.eu",
      "Jogi megkeresés: legal@vianexis.eu",
      "Adatvédelem: privacy@vianexis.eu",
      "Támogatás: support@vianexis.eu",
      "Biztonsági bejelentés: security@vianexis.eu",
      "Weboldal: https://vianexis.eu",
    ],
  },
  {
    id: "final-provisions",
    title: "35. Záró rendelkezések",
    body: "Ha a Feltételek valamely rendelkezése érvénytelen vagy végrehajthatatlan, a többi rendelkezés hatályban marad. A Feltételek valamely jog gyakorlásának elmulasztása nem jelenti a jogról való lemondást. A Feltételek a fejlécben megjelölt verziótól és hatálybalépési dátumtól alkalmazandók.\n\nA dokumentum hivatalos magyar és angol változatban érhető el. Más nyelveken az alkalmazás kezelőfelülete elérhető lehet, de a jelen jogi dokumentum nem rendelkezik hivatalos fordítással.",
  },
];
