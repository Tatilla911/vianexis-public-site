import type { LegalSection } from "../types";
import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "../version";

const versionLabel = `Verzió: ${DRIVER_APP_LEGAL_VERSION}`;
const effectiveLabel = `Hatálybalépés: ${DRIVER_APP_LEGAL_EFFECTIVE_DATE}`;
const lastUpdatedLabel = `Utolsó frissítés: ${DRIVER_APP_LEGAL_LAST_UPDATED}`;

export const responsibleUseSectionsHu: LegalSection[] = [
  {
    id: "purpose-and-scope",
    title: "1. A dokumentum célja és hatálya",
    body: "Ez a dokumentum a ViaNexis platform és a ViaNexis Driver alkalmazás felelős használatának fontos korlátait és biztonsági elveit foglalja össze. Célja a téves biztonságérzet megelőzése, nem a felelősség áthárítása.\n\nA dokumentum nem helyettesíti az Adatvédelmi tájékoztatót, a Felhasználási feltételeket, a külön céges szerződést, a jogszabályt, a hatósági döntést vagy a szakértői tanácsot. A kötelező jog alapján nem kizárható felelősséget nem korlátozza.\n\nA korlátozások az alkalmazandó kötelező jogszabályok keretei között értendők.\n\nÉrintett szolgáltatások: ViaNexis platform, ViaNexis Driver, kapcsolódó céges portál és háttérszolgáltatások, ahol alkalmazandó. A vianexis.eu marketingoldal saját tájékoztatói külön állnak.",
  },
  {
    id: "general-principles",
    title: "2. Általános felelős használati alapelvek",
    body: "A ViaNexis operatív és dokumentációs segédeszköz. A felhasználó és a fuvarozó cég köteles a kritikus adatokat ellenőrizni. Az eredeti dokumentum, a hivatalos utasítás és a jogszabály elsődleges. Automatizált eredmény nem kezelhető automatikusan tényként. A rendszer nem helyettesít szakmai oktatást vagy engedélyt. A nyilvánvaló hibát jelezni kell. A funkció használata nem mentesít a helyi szabályok betartása alól.",
  },
  {
    id: "shipment-data-and-user-input",
    title: "3. Fuvaradatok és felhasználói bevitel",
    body: "A bevitt fuvaradatok — cím, súly, áru, megálló, státusz, megjegyzés — pontosságáért a bevívő felhasználó és a fuvarozó cég felel. A ViaNexis nem válik a fuvarozási szerződés részesévé. Kritikus eltérés esetén az eredeti megbízás, hivatalos dokumentum és hatósági előírás az elsődleges. A sofőr köteles az ésszerűen felismerhető hibát jelezni.",
  },
  {
    id: "adr-and-dangerous-goods",
    title: "4. ADR és veszélyes áruk",
    body: "Az ADR-adatok és segédfunkciók tájékoztató jellegűek. Mindig az aktuális ADR kiadás, a hivatalos táblázatok, a fuvarokmányok és az illetékes hatósági rendelkezések az elsődlegesek.\n\nA ViaNexis nem ADR-biztonsági tanácsadó. Nem helyettesíti az ADR-oktatást, a vállalati veszélyesáru-biztonsági tanácsadót vagy a hatósági döntést. Nem garantálja a csomagolási, jelölési, táblázási, alagút- vagy mennyiségi számítás helyességét emberi ellenőrzés nélkül. Kritikus kérdésben hivatalos forrás és szakértő ellenőrzése szükséges. Vészhelyzetben nem az ADR-modult kell használni segítségkérésre. Az ADR-funkció nem garantál jogszabályi megfelelést.",
  },
  {
    id: "tunnel-route-and-traffic-restrictions",
    title: "5. Alagút-, útvonal- és közlekedési korlátozások",
    body: "Az alagútkategóriák és közlekedési korlátozások változhatnak. Ideiglenes helyi korlátozás, útlezárás, súly-, magasság-, tengely-, környezetvédelmi vagy időszakos korlátozás eltérhet. A sofőrnek figyelnie kell a közúti jelzéseket és hatósági utasításokat. Az alkalmazásban lévő adat nem írja felül a helyszíni jelzést. Az útvonal alkalmasságát a fuvarozó cégnek és a sofőrnek kell ellenőriznie.",
  },
  {
    id: "customs-border-and-authority-info",
    title: "6. Vám-, határ- és hatósági információk",
    body: "Hivatalos linkek vagy összefoglalók változhatnak. A vámeljárás országonként és árutípusonként eltér. A ViaNexis nem vámügynök, és nem ad kötelező erejű vám- vagy hatósági állásfoglalást. A hatósági döntés elsődleges. Az AI-összefoglalás — ha elérhető — nem helyettesíti az eredeti hivatalos forrást. Hiányos dokumentumot a rendszer nem tehet jogilag automatikusan megfelelővé.",
  },
  {
    id: "map-location-and-navigation",
    title: "7. Térkép, helyadat és navigáció",
    body: "A térkép és a pozíció operatív segítség. Nem minősített tehergépkocsi-navigáció. Nem garantálja a tehergépkocsi-méret, súly, ADR, útdíj vagy behajtási korlátozás figyelembevételét. A helyadat pontatlan vagy késleltetett lehet; GPS, hálózat és eszközbeállítás befolyásolja. A helyszíni közúti jelzés elsődleges.\n\nA jelenlegi terjesztett build a helyadatot when-in-use jelleggel kezelheti; folyamatos háttérkövetést nem kérünk, ha a manifeszt ezt továbbra is igazolja. A helyadat nem használható titkos munkavállalói megfigyelésre. Az engedély visszavonása korlátozhat funkciókat.",
  },
  {
    id: "ai-assistive-features",
    title: "8. AI-alapú segédfunkciók",
    body: "Az AI-kimenet — ahol a funkció ténylegesen elérhető — téves, hiányos vagy elavult lehet. Nem jogi, vám-, ADR-, biztosítási vagy hatósági tanács. Nem hozhat automatikusan végleges döntést. Kritikus döntésnél emberi ellenőrzés szükséges. Az eredeti dokumentum és hivatalos forrás elsődleges. A felhasználó köteles a nyilvánvaló hibát jelezni. Csak a ténylegesen engedélyezett AI-funkciók minősülnek aktívnak.",
  },
  {
    id: "ocr-and-document-recognition",
    title: "9. OCR és dokumentumfelismerés",
    body: "Az OCR félreolvashat számot, nevet, rendszámot, dátumot, súlyt, UN-számot vagy aláírást. Rossz képminőség növeli a hibakockázatot. Automatikus mezőkitöltést ellenőrizni kell. Az eredeti kép vagy dokumentum elsődleges. Az OCR-eredmény önmagában nem hiteles másolat. Kritikus adat mentése előtt megerősítés szükséges. A jelenlegi terjesztett kiadásban az OCR tipikusan eszközön futó képesség lehet; felhő-OCR vendort nem állítunk aktívként pusztán a képesség miatt.",
  },
  {
    id: "automatic-translation",
    title: "10. Automatikus fordítás és nyelvi segítség",
    body: "Az automatikus fordítás — ha az adott környezetben engedélyezve van — pontatlan lehet. Szakmai, ADR-, vám- és jogi kifejezés félrefordulhat. Az eredeti üzenet maradjon hozzáférhető. Kritikus utasításnál emberi megerősítés kell. Nem hiteles fordítás. Félreérthető tartalmat nem szabad kizárólag automatikus fordítás alapján végrehajtani. A jelenlegi terjesztett kiadásban nem állítunk aktív, külső fordítási szolgáltatót.",
  },
  {
    id: "electronic-signatures",
    title: "11. Elektronikus aláírások",
    body: "A rögzített aláírás bizonyító ereje és joghatása a dokumentum típusától, a rögzítés körülményeitől és az alkalmazandó jogtól függ. A ViaNexis nem garantálja, hogy a rögzített aláírás minden országban vagy minden eljárásban minősített elektronikus aláírásnak vagy önmagában teljes bizonyító erejű bizonyítéknak minősül. Időbélyeg, helyadat és auditnyom támogathatja a bizonyítást, de nem garantál joghatást. Rontott vagy jogosulatlan aláírást jelezni kell. Érvénytelenítés nem törli automatikusan az auditnyomot.",
  },
  {
    id: "digital-documents-and-evidence",
    title: "12. Digitális dokumentumok és bizonyítékadatok",
    body: "A digitális másolat nem feltétlenül azonos az eredeti okirattal. Export vagy PDF nem garantál hatósági elfogadást. Az eredeti dokumentum megőrzése jogszabály vagy szerződés szerint továbbra is szükséges lehet. Hibás vagy érvénytelen dokumentum jelölhető; az érvénytelenítés nem törli automatikusan az auditnyomot.",
  },
  {
    id: "pallet-and-packaging-exchange",
    title: "13. Raklap- és göngyölegcsere",
    body: "A rendszer a raklap- és göngyölegcsere dokumentálását támogatja. Nem dönti el automatikusan a felek közötti vitát. Mennyiség, típus, sérülés és hiány ellenőrzendő. Fénykép és aláírás támogathatja a bizonyítást. A cég saját elszámolási szabálya elsődleges lehet. Adatbevitel hibája téves egyenleget okozhat.",
  },
  {
    id: "photos-videos-and-incident-evidence",
    title: "14. Fényképek, videók és incidensbizonyítékok",
    body: "Csak a fuvarhoz szükséges tartalom rögzíthető. Más személy jogait és magánszféráját tiszteletben kell tartani. Vezetés közben tilos veszélyes módon felvételt készíteni. Hatósági vagy helyszíni szabály korlátozhatja a fotózást. A felvétel nem garantálja önmagában a kár vagy felelősség bizonyítását. Időbélyeg és helyadat pontatlan lehet. Manipulált vagy félrevezető felvétel feltöltése tilos.",
  },
  {
    id: "messages-and-operational-communication",
    title: "15. Üzenetek és operatív kommunikáció",
    body: "Az alkalmazáson belüli üzenetek operatív kommunikációt szolgálnak. Késhetnek, és nem helyettesítik a céges vagy hivatalos sürgősségi eljárást. Kritikus utasítást ellenőrizni kell. Spam, zaklatás vagy jogsértő tartalom tilos.",
  },
  {
    id: "push-and-other-notifications",
    title: "16. Push és egyéb értesítések",
    body: "Push, e-mail vagy alkalmazáson belüli értesítés késhet vagy elmaradhat. Nem kizárólagos sürgősségi csatorna. Zárolási képernyőn adatvédelmi szempontból óvatos előnézet használható. Értesítési token csak akkor kezelhető, ha a push az adott buildben és környezetben aktív. Kritikus feladatot a felhasználónak az alkalmazásban is ellenőriznie kell. Spam, marketing vagy zaklatás tilos. A jelenlegi termékcél szerint nincs marketing push.",
  },
  {
    id: "offline-use-and-synchronisation",
    title: "17. Offline használat és szinkronizáció",
    body: "Egyes funkciók ideiglenesen offline működhetnek. Adatok helyben maradhatnak. A szinkronizáció késhet vagy sikertelen lehet. Több eszköz vagy párhuzamos szerkesztés konfliktust okozhat. A feltöltés sikerét ellenőrizni kell. Az app törlése vagy eszközhiba helyi adatvesztést okozhat. Offline adat nem feltétlenül naprakész. Sürgős kommunikációra nem szabad kizárólag offline állapotra támaszkodni. Teljes offline működés nem garantált.",
  },
  {
    id: "map-and-community-content",
    title: "18. Térképi és közösségi tartalom",
    body: "A jelenlegi terjesztett verzióban a térképi funkciók korlátozottak lehetnek, és elsősorban tájékozódási vagy saját pozíció megjelenítési segédletként szolgálhatnak. Teljes közösségi hálózatot vagy közösségi helymegosztó szolgáltatást ez a dokumentum nem állít aktívként.\n\nHa később közösségi funkció aktiválódik, annak szabályai — többek között becenév használata, teljes név és rendszám kerülése, helymegosztás kontrollja, zaklatás és hamis biztonsági adat tilalma, médiafeltöltés szabályai, blokkolás/jelentés, moderáció, valamint az, hogy a közösségi adat pontossága nem garantált — a frissített dokumentumban jelennek meg a kiadás előtt.",
  },
  {
    id: "efti-and-authority-sharing",
    title: "19. eFTI és hatósági megosztás",
    body: "A ViaNexis nem minősített eFTI platform. Az eFTI-ready vagy technikai felkészültség nem minősítés, és nem garantál hatósági elfogadást. Hatósági megosztás csak megfelelő jogosultság, jogalap vagy céges döntés alapján történhet. QR vagy csomagolt hozzáférés nem tesz automatikusan hivatalossá dokumentumot. A hatóság kérhet más formátumot vagy eredeti dokumentumot.",
  },
  {
    id: "privacy-and-permissions",
    title: "20. Adatvédelem és jogosultságok",
    body: "Csak a szükséges adat kezelhető. Más felhasználó dokumentumához jogosulatlanul hozzáférni tilos. Megosztott eszközön kijelentkezés és PIN/biometria használata ajánlott. Support hozzáférés csak kontrollált és auditált módon történhet. Screenshot vagy export továbbküldése adatvédelmi kockázat.\n\nAdatvédelmi részletek: https://vianexis.eu/hu/privacy\nFelhasználási feltételek: https://vianexis.eu/hu/terms\nFiók és kapcsolódó adatok törlésének kérése: https://vianexis.eu/hu/driver-app/account-deletion",
  },
  {
    id: "support-and-controlled-access",
    title: "21. Support és kontrollált hozzáférés",
    body: "A támogatási és platform-adminisztratív hozzáférés korlátozott, szükség szerinti és auditálható lehet. A support nem helyettesíti a fuvarozó cég saját belső eljárását. Jogosulatlan hozzáférés gyanúját a security@vianexis.eu címen kell jelezni.",
  },
  {
    id: "availability-and-external-providers",
    title: "22. Rendszerelérhetőség és külső szolgáltatók",
    body: "A rendszer nem garantáltan hibamentes. Karbantartás vagy kiesés lehet. Külső szolgáltató hibája korlátozhat funkciót. Hálózati és eszközhiba befolyásolhatja. Adateltérés vagy hiba esetén a supportnak jelezni kell. Konkrét SLA csak külön szerződésben értendő. Az alkalmazás nem helyettesít tartalék céges eljárást.",
  },
  {
    id: "emergency-and-sos",
    title: "23. Vészhelyzet és SOS",
    body: "A ViaNexis nem segélyhívó, nem SOS központ, és nem hatósági vagy egészségügyi szolgáltatás. Vészhelyzetben a helyi segélyhívót kell használni. Az Európai Unióban a 112 elérhető; ez nem univerzális globális szám minden országban. Veszélyesáru-eseménynél kövesd a hivatalos vészhelyzeti utasításokat. Ne várj alkalmazásválaszra sürgős esetben. Az alkalmazásban elérhető céges riasztási funkció — ha van — nem helyettesíti a hatósági segélyhívást.",
  },
  {
    id: "human-review-and-final-decision",
    title: "24. Emberi ellenőrzés és végső döntés",
    body: "Automatikus javaslat, OCR-eredmény, fordítás, státuszjelzés és térképi adat emberi ellenőrzést igényel. A végleges döntés a felhasználóé és a fuvarozó cégé. A ViaNexis nem hoz helyetted jogi, hatósági vagy szakmai döntést.",
  },
  {
    id: "reporting-issues",
    title: "25. Hibák és problémák jelentése",
    body: "Technikai hiba: support@vianexis.eu. Biztonsági incidens: security@vianexis.eu. Adatvédelmi kérdés: privacy@vianexis.eu. Jogi kérdés: legal@vianexis.eu.\n\nNe küldjön jelszót, PIN-t, szükségtelen okmányfotót, illetve felesleges egészségügyi vagy különleges adatot.",
  },
  {
    id: "contact",
    title: "26. Kapcsolat",
    body: "Kapcsolat:",
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
    title: "27. Záró rendelkezések",
    body: "Kapcsolódó dokumentumok:\nAdatvédelmi tájékoztató: https://vianexis.eu/hu/privacy\nFelhasználási feltételek: https://vianexis.eu/hu/terms\nFiók és kapcsolódó adatok törlésének kérése: https://vianexis.eu/hu/driver-app/account-deletion\n\nA jelen korlátozások az alkalmazandó kötelező jogszabályok keretei között értendők. Sem ez a dokumentum, sem a ViaNexis más tájékoztatója nem zárja ki vagy korlátozza azokat a jogokat és felelősségeket, amelyek az alkalmazandó jog alapján nem zárhatók ki.\n\nA dokumentum hivatalos magyar és angol változatban érhető el. Más nyelveken az alkalmazás kezelőfelülete elérhető lehet, de a jelen jogi dokumentum nem rendelkezik hivatalos fordítással.",
  },
];

export const responsibleUseDocHu = {
  title: "Felelős használat és fontos korlátozások – ViaNexis",
  metaDescription: "A ViaNexis platform és a ViaNexis Driver felelős használati korlátai: ADR, AI/OCR, térkép, dokumentumok, értesítések és vészhelyzet.",
  intro: "Ez a dokumentum a ViaNexis platform és a ViaNexis Driver alkalmazás fontos használati korlátait és biztonsági elveit foglalja össze. Célja a téves biztonságérzet megelőzése, nem a felelősség áthárítása. Nem helyettesíti az Adatvédelmi tájékoztatót, a Felhasználási feltételeket, a céges szerződést, a jogszabályt, a hatósági döntést vagy a szakértői tanácsot. A kötelező jog alapján nem kizárható felelősséget nem korlátozza.",
  versionLabel,
  effectiveLabel,
  lastUpdatedLabel,
  tocLabel: "Tartalomjegyzék",
  sections: responsibleUseSectionsHu,
  contactsTitle: "Kapcsolat",
  contacts: [
    { label: "Általános kapcsolat", value: "info@vianexis.eu" },
    { label: "Jogi ügyek", value: "legal@vianexis.eu" },
    { label: "Adatvédelem", value: "privacy@vianexis.eu" },
    { label: "Ügyfélszolgálat", value: "support@vianexis.eu" },
    { label: "Biztonsági bejelentés", value: "security@vianexis.eu" },
  ],
} as const;
