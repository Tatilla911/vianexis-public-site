import type { DriverAppLegalBundle } from "../types";
import {
  OPERATOR_EMAILS,
  OPERATOR_FULL_IDENTIFICATION_HU,
  OPERATOR_STATEMENT_HU,
} from "../operator";
import {
  DRIVER_APP_LEGAL_EFFECTIVE_DATE,
  DRIVER_APP_LEGAL_LAST_UPDATED,
  DRIVER_APP_LEGAL_VERSION,
} from "../version";
import { dataSafetySectionsHu } from "./data-safety-sections-hu";
import { termsSectionsHu } from "./terms-sections-hu";

const versionLabel = `Verzió: ${DRIVER_APP_LEGAL_VERSION}`;
const effectiveLabel = `Hatálybalépés: ${DRIVER_APP_LEGAL_EFFECTIVE_DATE}`;
const lastUpdatedLabel = `Utolsó frissítés: ${DRIVER_APP_LEGAL_LAST_UPDATED}`;

const standardContacts = [
  { label: "Adatvédelem / GDPR", value: OPERATOR_EMAILS.privacy },
  { label: "Adatvédelmi kapcsolattartás", value: OPERATOR_EMAILS.gdpr },
  { label: "Jogi ügyek", value: OPERATOR_EMAILS.legal },
  { label: "Ügyfélszolgálat", value: OPERATOR_EMAILS.support },
  { label: "Biztonsági bejelentés", value: OPERATOR_EMAILS.security },
];

export const driverAppLegalHu: DriverAppLegalBundle = {
  nav: {
    hub: "Jogi tudnivalók",
    privacy: "Adatvédelmi tájékoztató",
    terms: "Felhasználási feltételek",
    dataSafety: "Adatbiztonsági összefoglaló",
    accountDeletion: "Fiók és adattörlés",
  },
  chrome: {
    print: "Nyomtatás / PDF mentés",
    tableOfContents: "Tartalomjegyzék",
    languageSwitchHint:
      "A dokumentum hivatalos magyar és angol változatban érhető el. Más nyelveken az alkalmazás kezelőfelülete elérhető lehet, de a jelen jogi dokumentum nem rendelkezik hivatalos fordítással.",
    backToHub: "Vissza a jogi tudnivalókhoz",
    currentVersionLabel: "Jelenlegi verzió",
  },
  hub: {
    title: "ViaNexis Driver App — Jogi tudnivalók",
    metaDescription:
      "A ViaNexis Driver App adatvédelmi tájékoztatója, felhasználási feltételei, adatbiztonsági összefoglalója és a fiók/adat törlésére vonatkozó tudnivalók egy helyen.",
    intro:
      "Ezen az oldalon találod a ViaNexis Driver App (sofőralkalmazás) használatához kapcsolódó teljes jogi dokumentációt. A dokumentumok a mobilalkalmazásra vonatkoznak, és külön állnak a vianexis.eu marketing weboldal saját jogi tájékoztatóitól. Javasoljuk, hogy regisztráció előtt olvasd el az Adatvédelmi tájékoztatót és a Felhasználási feltételeket, mert ezek határozzák meg, hogyan kezeljük az adataidat, és milyen jogaid és kötelezettségeid vannak sofőrként vagy céges felhasználóként.",
    cards: [
      {
        hrefSuffix: "/privacy",
        title: "Adatvédelmi tájékoztató",
        description:
          "Milyen adatokat kezelünk a Driver App használata során, milyen célból, milyen jogalapon, kikkel osztjuk meg, és milyen jogaid vannak.",
      },
      {
        hrefSuffix: "/terms",
        title: "Felhasználási feltételek",
        description:
          "A Driver App használatának szabályai: mit vállalunk, mit várunk el tőled és a fuvarozó cégtől, és milyen korlátok vonatkoznak a szolgáltatásra.",
      },
      {
        hrefSuffix: "/data-safety",
        title: "Adatbiztonsági összefoglaló",
        description:
          "Közérthető, táblázatos áttekintés arról, milyen adatkategóriákat gyűjtünk, kötelezőek-e, és mi történik velük — nem hivatalos áruházi nyilatkozat.",
      },
      {
        hrefSuffix: "/account-deletion",
        title: "Fiók és adattörlés",
        description:
          "A fiók leválasztása, felfüggesztése, törlése és az alkalmazás eltávolítása közötti különbségek, valamint a törlési kérelem beküldése.",
      },
    ],
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    contactsTitle: "Kapcsolat jogi és adatvédelmi kérdésekben",
    contacts: standardContacts,
  },
  privacy: {
    title: "ViaNexis Driver alkalmazás adatvédelmi tájékoztató",
    metaDescription:
      "Teljes körű adatvédelmi tájékoztató a ViaNexis Driver App sofőralkalmazás használatához: kezelt adatkategóriák, célok, jogalapok, megőrzés és az érintetti jogok.",
    intro:
      "Ez az Adatvédelmi tájékoztató azt írja le, hogyan kezeljük a személyes adatokat a ViaNexis Driver App (a továbbiakban: „Driver App” vagy „alkalmazás”) használata során. A tájékoztató a mobilalkalmazásra és az ahhoz kapcsolódó háttérszolgáltatásokra vonatkozik; nem vonatkozik a vianexis.eu marketing weboldal saját, önálló jogi dokumentumaira. A tájékoztatót az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Infotv.) figyelembevételével állítottuk össze.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Tartalomjegyzék",
    sections: [
      {
        id: "intro-and-scope",
        title: "1. Bevezetés és hatály",
        body: "Ez a tájékoztató a ViaNexis Driver App telepítésével, regisztrációjával és mindennapi használatával összefüggő adatkezelésekre vonatkozik, ideértve a fuvarokhoz kapcsolódó dokumentumkezelést, üzenetváltást, aláírás-rögzítést és az eszköz által automatikusan generált diagnosztikai adatokat is. A tájékoztató a sofőrökre, valamint a Driver App-ot vagy az ahhoz kapcsolódó céges felületeket használó egyéb személyekre (pl. diszpécser, céges adminisztrátor) terjed ki, amennyiben az ő adataik is megjelennek az alkalmazásban.\n\nA tájékoztató nem terjed ki a fuvarozó cég saját, belső HR- vagy bérszámfejtési rendszereire, sem a fuvarozó cég és ügyfelei közötti, az alkalmazáson kívül zajló adatkezelésekre. Amennyiben a fuvarozó cég a Driver App-on kívül is kezeli a sofőr adatait (pl. papíralapú munkaügyi nyilvántartás), arra a cég saját adatvédelmi szabályzata az irányadó.",
      },
      {
        id: "controller-details",
        title: "2. Az adatkezelő adatai",
        body: `${OPERATOR_STATEMENT_HU} Az alábbiakban közöljük az üzemeltető azonosító adatait, amelyek az alkalmazáshoz és a hozzá kapcsolódó fiók-, platform- és biztonsági szintű adatkezelésekhez kapcsolódó adatkezelői minőségre vonatkoznak.`,
        items: OPERATOR_FULL_IDENTIFICATION_HU,
      },
      {
        id: "roles-vianexis-carrier",
        title: "3. A ViaNexis és a fuvarozó cég szerepe az adatkezelésben",
        body: "A ViaNexis és a Driver App-ot használó fuvarozó cég szerepe adatkezelési szempontból nem egységes: az adott adatfolyamat céljától, a szerződéses modelltől és attól függ, hogy ki határozza meg az adatkezelés célját és eszközeit. Az alábbi elkülönítés tájékoztató jellegű, és a konkrét jogviszony alapján változhat.\n\nA ViaNexis önálló adatkezelő lehet többek között a fiók-hitelesítés, a platformbiztonság, a hozzáférés-kezelés, a saját support és privacy request ügyintézés, valamint a rendszerüzemeltetési naplók tekintetében — ahol a célokat és eszközöket a ViaNexis határozza meg.\n\nA fuvarozó cég önálló adatkezelő lehet többek között a fuvarfeladatok, a munkaszervezés, az ügyfél- és címzettadatok, a céges dokumentumkövetelmények és a munkáltatói célú adatkezelés tekintetében — ahol a célokat és eszközöket a cég határozza meg.\n\nA ViaNexis adatfeldolgozóként járhat el a fuvarozó cég utasítása alapján kezelt fuvaradatoknál, céges dokumentumoknál, valamint diszpécseri és adminisztratív munkafolyamatoknál. Kétség esetén mindkét felet megkeresheted; segítünk a megfelelő irányba terelni a kérelmet.",
      },
      {
        id: "data-subjects",
        title: "4. Érintettek köre",
        body: "A jelen tájékoztató szerinti adatkezelés elsősorban a Driver App-ot használó sofőrökre vonatkozik, akik lehetnek a fuvarozó cég alkalmazottai vagy azzal szerződéses jogviszonyban álló egyéni vállalkozók/alvállalkozók. Emellett érintettek lehetnek a fuvarozó cég azon munkatársai (diszpécser, flottafelelős, adminisztrátor), akik a céges felületen keresztül fuvarokat osztanak ki, dokumentumokat töltenek fel, vagy üzenetet váltanak a sofőrrel.",
        items: [
          "Sofőrök (alkalmazotti vagy vállalkozói jogviszonyban)",
          "Céges adminisztrátorok, diszpécserek, flottafelelősök",
          "Harmadik személyek, akiknek adata egy feltöltött dokumentumon megjelenik (pl. átvevő aláírása, feladó/címzett elérhetősége egy CMR-en)",
          "Ügyfélszolgálati megkeresést küldő személyek",
        ],
      },
      {
        id: "data-categories",
        title: "5. Kezelt adatkategóriák",
        body: "A Driver App használata során az alábbi fő adatkategóriákat kezeljük. A pontos kör funkciónként eltérhet, és egyes kategóriák (pl. helyadat) csak akkor keletkeznek, ha az érintett engedélyezte az adott hozzáférést.",
        items: [
          "Fiókadatok: teljes név, e-mail cím, telefonszám; hitelesítési adat: a jelszó egyirányú, sózott hash formájában kerül tárolásra; az eredeti jelszót nem tároljuk; cégkód vagy céges azonosító; nyelvi beállítás",
          "Fuvarhoz kapcsolódó adatok: fuvarazonosító, útvonal/megállók adatai, státuszfrissítések, időbélyegek",
          "Helyadatok: GPS-koordináták, ha a felhasználó engedélyezi, és csak a megnyitott, helyfüggő funkció használata során (lásd a 8. szakaszt)",
          "Dokumentumok és médiatartalom: fényképek, videók, szkennelt vagy fotózott fuvarokmányok, kármegállapítási felvételek — a funkció használatakor",
          "Aláírás- és bizonyítékadatok: elektronikus aláírás-rajzolat, kapcsolódó időbélyeg; helyadat, ha a felhasználó azt a funkció során rögzíti",
          "Üzenetek: a sofőr és a diszpécser/céges kapcsolattartó közötti, az alkalmazáson belüli üzenetváltás tartalma",
          "Push értesítési azonosító (token) és a push-eszközregisztrációhoz használt telepítés-/eszközazonosító, platformjelölés, nyelvi és időzóna-beállítás",
          "Biztonsági és üzemeltetési naplóesemények: például bejelentkezési és hozzáférési események a szolgáltatás biztonságához szükséges mértékben",
          "Ügyfélszolgálati és adatvédelmi kérelem kommunikáció tartalma",
        ],
      },
      {
        id: "sources",
        title: "6. Az adatok forrása",
        body: "Az adatok döntő része közvetlenül tőled származik: regisztrációkor megadott adatok, feltöltött dokumentumok és fényképek, beírt üzenetek, rögzített aláírás. Egyes adatokat a fuvarozó cég adminisztrátora vagy diszpécsere ad meg vagy hoz létre a céges felületen (pl. fuvarkiosztás, sofőrprofil létrehozása, céges megjegyzések).\n\nTovábbi adatok automatikusan, az eszköz és az alkalmazás működése révén keletkeznek (pl. diagnosztikai adatok, helyadat, ha engedélyezve van). Végül bizonyos adatok harmadik személyektől származhatnak, például amikor egy átvevő aláírása egy fuvarokmányon megjelenik, vagy amikor egy ügyfél elérhetősége szerepel egy feltöltött dokumentumon.",
      },
      {
        id: "purposes-and-legal-bases",
        title: "7. Adatkezelési célok és jogalapok",
        body: "Az adatokat az alábbi célokból és jogalapokon kezeljük. Egy adott adat egyszerre több célt is szolgálhat. A telefon rendszerengedélye (pl. helyhozzáférés) technikai előfeltétel lehet; önmagában nem helyettesíti a GDPR szerinti jogalapot.",
        items: [
          "Fiók és hitelesítés: fiók létrehozása, bejelentkezés, jelszó/PIN kezelés, hozzáférés biztosítása — szerződés teljesítése (GDPR 6. cikk (1) b) pont), illetve a platform biztonságához szükséges mértékben jogos érdek (GDPR 6. cikk (1) f) pont)",
          "Platformbiztonság: visszaélés-megelőzés, jogosulatlan hozzáférés észlelése, session-/tokenkezelés, rendszerüzemeltetési naplók — jogos érdek (GDPR 6. cikk (1) f) pont)",
          "Fuvarozó cég által kezelt fuvarfolyamat: fuvarfeladatok, státuszok és céges munkafolyamatok — tipikusan a sofőr és a fuvarozó cég közötti szerződés/jogviszony teljesítése; ahol a ViaNexis a cég utasítására jár el, a cég adatkezelői utasítása szerinti feldolgozás. A konkrét jogalap a céges szerződéstől és szereptől függhet",
          "Operatív dokumentumkezelés: fuvarokmányok, feltöltött fényképek/videók és kapcsolódó bizonylatok kezelése a fuvarfolyamat részeként — a céges/szerződéses modell szerint; a ViaNexis vagy a fuvarozó cég szerepe az adott adatfolyamtól függ",
          "Opcionális helyfüggő funkció: saját pozíció megjelenítése vagy fuvaresethez kapcsolódó hely rögzítése — a funkció céljához kapcsolódó szerződéses vagy jogos érdeken alapuló kezelés mellett a mobil operációs rendszer engedélye technikai előfeltétel; az OS-engedély önmagában nem azonos a GDPR-hozzájárulással, és a rendszerbeállításokban visszavonható",
          "Operatív push értesítés: fuvarral kapcsolatos push értesítések kézbesítése — szerződés teljesítése / jogos érdek a szolgáltatás működtetéséhez, a rendszerértesítési engedély mellett (az OS-engedély nem helyettesíti a GDPR-jogalapot)",
          "Support: ügyfélszolgálati megkeresések ügyintézése — jogos érdek (GDPR 6. cikk (1) f) pont)",
          "Privacy request: adatvédelmi és fióktörlési kérelmek fogadása és ügyintézése — jogi kötelezettség teljesítése és/vagy jogos érdek (GDPR 6. cikk (1) c) / f) pont)",
          "Jogi igények: igények előterjesztése, érvényesítése vagy védelme — jogos érdek, illetve ahol alkalmazandó, jogi kötelezettség",
          "Jogi kötelezettségek: jogszabály által előírt bizonylatok és nyilvántartások megőrzése — jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont), ahol alkalmazandó",
        ],
      },
      {
        id: "location",
        title: "8. Helyadatok kezelése",
        body: "A jelenlegi alkalmazásverzió nem kér folyamatos háttér-helyhozzáférést. Helyadat csak a felhasználó által megnyitott, helyfüggő funkció használata során kezelhető, például a saját pozíció megjelenítéséhez vagy egy fuvaresethez kapcsolódó hely rögzítéséhez.\n\nA Driver App a helyadatokat kizárólag a mobil operációs rendszer szintjén megadott engedély alapján kezeli (Android: ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION; nincs ACCESS_BACKGROUND_LOCATION a jelenlegi manifeszt szerint). Az alkalmazást nem használjuk titkos munkavállalói megfigyelésre, és nem állítunk folyamatos útvonalkövetést vagy automatikus háttérbeli érkezés-/indulásérzékelést a jelenlegi kiadásban.\n\nAz engedélyt a sofőr a telefon rendszerbeállításaiban bármikor visszavonhatja. A visszavonás nem jár szankcióval, azonban a helyfüggő funkciók ezt követően korlátozottan működhetnek vagy nem érhetők el. A fuvarozó cég a helyadatokhoz — ha azok a funkció során rögzítésre kerültek — a rá vonatkozó jogosultságok szerint férhet hozzá, a fuvarszervezéshez szükséges mértékben.",
      },
      {
        id: "camera-photos-videos-files",
        title: "9. Kamera, fényképek, videók és fájlok",
        body: "Az alkalmazás kamera-hozzáférést kérhet dokumentumok, árukár, rakományállapot vagy egyéb, a fuvarhoz kapcsolódó helyzet rögzítéséhez. A hozzáférés helyett a felhasználó választhat úgy is, hogy meglévő, a telefon galériájában tárolt képet vagy fájlt tölt fel. A rögzített fényképek, videók és fájlok a fuvarhoz és a hozzá kapcsolódó céges munkafolyamathoz (pl. kárrendezés, ügyfélszolgálati egyeztetés) kerülnek hozzárendelésre, és a 18. szakaszban ismertetett elvek szerint kerülnek megőrzésre.",
      },
      {
        id: "transport-and-personal-documents",
        title: "10. Fuvarokmányok és személyes dokumentumok",
        body: "A Driver App lehetővé teszi fuvarokmányok (pl. CMR-fuvarlevél, szállítólevél, vámokmány) és bizonyos személyes dokumentumok (pl. vezetői engedély, ADR-igazolvány) fotózott vagy szkennelt másolatának feltöltését. Ezek a dokumentumok gyakran tartalmaznak harmadik személyek (feladó, címzett, átvevő) adatait is, amelyeket a fuvarozási folyamat jellegéből adódóan kezelünk.\n\nA sofőr felelőssége, hogy kizárólag olyan dokumentumot töltsön fel, amelynek kezelésére jogosult, és amely a fuvarhoz ténylegesen kapcsolódik. Ez a kötelezettség nem érinti a ViaNexis vagy a fuvarozó cég alkalmazandó adatvédelmi felelősségét. A feltöltött dokumentumokhoz való hozzáférést jogosultsági szintek korlátozzák: a fuvarozó cég csak a rá vonatkozó fuvarokhoz tartozó dokumentumokat láthatja.",
      },
      {
        id: "e-signatures-and-evidence",
        title: "11. E-aláírások és bizonyítékok",
        body: "A Driver App lehetőséget biztosít elektronikus aláírás rögzítésére (érintőképernyős aláírás-rajzolat formájában) a fuvarozási események (pl. átvétel, kiszállítás) igazolásához. Az aláírással együtt olyan kiegészítő adatokat is rögzíthetünk, mint az időbélyeg és — ha a funkció során engedélyezve van és rögzítésre kerül — a helyadat, mert ezek együttesen szolgálhatnak bizonyítékként egy esetleges vitás helyzetben.\n\nA rögzített aláírás bizonyító ereje és joghatása a dokumentum típusától, a rögzítés körülményeitől és az alkalmazandó jogtól függ. A ViaNexis nem garantálja, hogy a rögzített aláírás minden országban vagy minden eljárásban minősített elektronikus aláírásnak vagy önmagában teljes bizonyító erejű bizonyítéknak minősül. Részletesebb tájékoztatást a Felhasználási feltételek 16. szakasza tartalmaz: https://vianexis.eu/hu/terms#electronic-signatures-and-evidence",
      },
      {
        id: "messages-and-translation",
        title: "12. Üzenetek és fordítás",
        body: "A Driver App beépített üzenetküldési funkciót biztosít a sofőr és a diszpécser/céges kapcsolattartó között. Gépi fordítás csak akkor tekinthető aktív adatkezelésnek, ha az adott környezetben ténylegesen engedélyezve van; a jelenlegi terjesztett kiadásban nem állítunk aktív, külső fordítási szolgáltatót. Ha a funkció elérhető, kényelmi jellegű, nem helyettesíti a hiteles fordítást, és pontatlan lehet — kritikus tartalom esetén emberi megerősítés javasolt.\n\nAz üzenetek tartalma a fuvarhoz kapcsolódóan naplózásra és a 18. szakasz szerinti elvek alapján megőrzésre kerülhet, egyebek mellett esetleges vitás helyzetek tisztázása céljából.",
      },
      {
        id: "device-security-diagnostics",
        title: "13. Eszköz-, biztonsági és diagnosztikai adatok",
        body: "A jelenlegi alkalmazásverzió a push-eszközregisztrációhoz saját, alkalmazáson belül generált eszköz-/telepítésazonosítót, platformjelölést, nyelvi és időzóna-beállítást, valamint push tokent kezelhet. A szolgáltatás biztonsága érdekében bejelentkezési és hozzáférési jellegű eseményeket naplózhatunk.\n\nA jelenlegi kódaudit alapján nem állítjuk, hogy a terjesztett Driver App külön analytics SDK-t, Crashlytics-t vagy automatikus crash-riportoló szolgáltatást használna, és nem állítjuk az eszköz gyártójának, OS-verziójának vagy a hálózati kapcsolat típusának rendszeres, önálló gyűjtését. Ha egy későbbi kiadásban ilyen adatkezelés megjelenik, ezt a szakaszt a kiadás előtt frissítjük.",
      },
      {
        id: "push-notifications",
        title: "14. Push értesítések",
        body: "A push értesítések küldéséhez az alkalmazás Firebase Cloud Messaging (FCM) szolgáltatást használhat, és eszközhöz/telepítéshez kötött push tokent tárol. Ez teszi lehetővé a fuvarral kapcsolatos fontos eseményekről (pl. új fuvar, dokumentumkérés, beérkező üzenet) szóló értesítést. A push értesítések a telefon rendszerbeállításaiban kikapcsolhatók. A kézbesítésben közreműködő szolgáltatókról a 16. szakasz ad tájékoztatást.",
      },
      {
        id: "automated-checks-and-ai",
        title: "15. Automatizált ellenőrzések és mesterséges intelligencia",
        body: "A Driver App tartalmazhat automatizált segédfunkciókat (például eszközön futó szövegfelismerést vagy fordítási előkészítést), amelyek tájékoztató és támogató jellegűek: nem hoznak emberi beavatkozás nélküli, joghatással járó döntést.\n\nA jelenlegi kiadásban nem minden ilyen funkció aktív minden környezetben. Ahol gépi fordítás vagy dokumentum-segédfunkció elérhető, az nem helyettesíti a hiteles fordítást, sem a jogi, vámügyi vagy ADR-megfelelőségi döntést. Ezekért a végső felelősség a sofőrt és a fuvarozó céget terheli.",
      },
      {
        id: "processors-and-recipients",
        title: "16. Adatfeldolgozók és egyéb címzettek",
        body: "Az adatok kezelésébe a szolgáltatás működtetéséhez szükséges címzettek kapcsolódhatnak be. A jelenlegi, kóddal igazolt aktív kategóriák közé tartozhatnak különösen: a backend/hoszting környezet üzemeltetője, az adatbázis- és fájltárolási szolgáltatás, a push-kézbesítés (FCM / adott esetben APNs), valamint a fuvarozó cég, amellyel sofőrként jogviszonyban állsz.\n\nE-mail kézbesítés, térképcserép-szolgáltató, felhő-AI/OCR vagy külső monitoring csak akkor minősül aktív adatfeldolgozónak, ha az adott környezetben ténylegesen be van kapcsolva; a tervezett vagy csak staging környezetben használt szolgáltatókat nem tüntetjük fel aktív adatfeldolgozóként. Az adatfeldolgozói szerződések megléte szolgáltatónként és környezetenként igazolandó; semmilyen általános, minden szolgáltatóra kiterjedő GDPR 28. cikk szerinti szerződést nem állítunk ezen az oldalon.\n\nAz aktuális, környezethez kötött lista a privacy@vianexis.eu címen igényelhető.",
      },
      {
        id: "international-transfers",
        title: "17. Nemzetközi adattovábbítás",
        body: "A push értesítések FCM-en keresztüli kézbesítése esetén személyes adat (például push token és kapcsolódó eszközregisztrációs adat) az EGT-n kívülre, különösen az Egyesült Államokba is továbbításra kerülhet a Google push infrastruktúráján keresztül. A hoszting, tárolás vagy e-mail kézbesítés régiója a tényleges üzemeltetési konfigurációtól függ.\n\nA konkrét szolgáltatóra vonatkozó megfelelő garancia (például megfelelőségi határozat vagy egyéb, a GDPR V. fejezete szerinti mechanizmus) típusáról a privacy@vianexis.eu címen kérhető részletes tájékoztatás. Ezen az oldalon nem állítunk sem SCC-t, sem megfelelőségi határozatot tényként anélkül, hogy a konkrét szolgáltatói dokumentáció ezt igazolná.",
      },
      {
        id: "retention",
        title: "18. Adatmegőrzés",
        body: "Az adatokat kategóriánként, a célhoz szükséges ideig őrizzük meg. Konkrét napokban vagy években kifejezett egységes határidőt csak akkor közlünk, ha azt jóváhagyott belső szabály vagy jogszabályi kötelezettség igazolja. Ahol ilyen döntés még nincs, eseményalapú elvet alkalmazunk:",
        items: [
          "Fiókadatok: a fiók fennállásáig, majd a törlési/anonimizálási folyamat lezárásáig",
          "Session/token: a token visszavonásáig vagy érvénytelenné válásáig",
          "Push token: a token visszavonásáig, cseréjéig vagy a fiók/eszközregisztráció megszűnéséig",
          "Fuvaradatok: a fuvarhoz kapcsolódó jogi és céges megőrzési idő végéig",
          "Dokumentumok: a fuvarhoz és a cég jogi/számviteli kötelezettségéhez szükséges ideig",
          "Aláírások: a kapcsolódó fuvar/bizonylat megőrzési idejéig",
          "Helyadatok: a konkrét funkció/esemény céljához szükséges korlátozott ideig",
          "Üzenetek: a fuvarhoz és a támogatás/vitakezelés céljához szükséges ideig",
          "Technikai/üzemeltetési logok: a biztonsági és üzemeltetési célhoz szükséges korlátozott ideig",
          "Biztonsági auditnaplók: az elszámoltathatósághoz és a biztonsági célhoz szükséges korlátozott ideig",
          "Support naplók: a kérelem/ügy lezárásáig és az elszámoltathatósághoz szükséges ideig",
          "Privacy request / account deletion request: a kérelem lezárásáig és az elszámoltathatósághoz szükséges ideig",
        ],
      },
      {
        id: "account-and-data-deletion",
        title: "19. Fiók és adatok törlése",
        body: "A kijelentkezés, az alkalmazás eltávolítása, a cégtől való leválasztás és a fiók felfüggesztése nem azonos a végleges fiók- és adattörléssel. A végleges törlés külön kérelem.\n\nFiók és kapcsolódó adatok törlésének kérése:\nhttps://vianexis.eu/hu/driver-app/account-deletion\n\nA rendszer a kérelmet ügyintézési rekordként rögzíti; a kérelem önmagában nem indít azonnali, automatikus teljes adattörlést. Azonosítás után a törölhető fiókadatok törölhetők vagy anonimizálhatók; megmaradhatnak jogszabály, biztonság, csalásmegelőzés, audit, szerződés vagy jogi igény miatt szükséges adatok. A megmaradó adatok operatív használata korlátozott. A kérelmező a megadott kapcsolattartási címen kap tájékoztatást a további lépésekről. A semleges visszaigazolás nem árulja el, hogy a megadott adatokhoz tartozik-e fiók.",
      },
      {
        id: "data-subject-rights",
        title: "20. Az érintettek jogai",
        body: "A GDPR alapján az alábbi jogok illetnek meg a személyes adataid kezelésével kapcsolatban. A jogok gyakorlására irányuló kérelmedet a privacy@vianexis.eu vagy a gdpr@vianexis.eu címre küldheted. A kérelmet indokolatlan késedelem nélkül, főszabály szerint a beérkezéstől számított egy hónapon belül megválaszoljuk. A határidő a kérelem összetettségére és a kérelmek számára tekintettel további két hónappal meghosszabbítható; erről és a késedelem okáról az első hónapon belül tájékoztatást adunk.",
        items: [
          "Hozzáférési jog: tájékoztatást kérhetsz arról, hogy kezelünk-e rád vonatkozó adatot, és ha igen, milyet",
          "Helyesbítéshez való jog: kérheted a pontatlan vagy hiányos adatok javítását",
          "Törléshez való jog („elfeledtetéshez való jog”): egyes esetekben kérheted az adataid törlését",
          "Az adatkezelés korlátozásához való jog: bizonyos helyzetekben kérheted az adatkezelés átmeneti korlátozását",
          "Tiltakozáshoz való jog: jogos érdeken alapuló adatkezelés esetén tiltakozhatsz az adatkezelés ellen",
          "Adathordozhatósághoz való jog: kérheted, hogy a hozzájárulás vagy szerződés alapján kezelt adataidat tagolt, géppel olvasható formátumban megkapd",
          "A hozzájárulás visszavonásához való jog: a hozzájáruláson alapuló adatkezelést (pl. helyadat, push értesítés) bármikor, indokolás nélkül visszavonhatod",
        ],
      },
      {
        id: "complaints-and-remedies",
        title: "21. Panasz és jogorvoslat",
        body: "Ha úgy ítéled meg, hogy az adataid kezelése sérti a jogszabályokat, javasoljuk, hogy elsőként a privacy@vianexis.eu vagy a gdpr@vianexis.eu címen jelezd felénk a problémát, hogy mielőbb orvosolhassuk. Ezen felül panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) is.",
        items: [
          "NAIH — Nemzeti Adatvédelmi és Információszabadság Hatóság",
          "Cím: 1055 Budapest, Falk Miksa utca 9–11.",
          "Postacím: 1363 Budapest, Pf. 9.",
          "Weboldal: naih.hu",
        ],
      },
      {
        id: "security",
        title: "22. Adatbiztonság",
        body: "A személyes adatok védelme érdekében a kódaudit alapján igazolt technikai és szervezési intézkedéseket alkalmazzuk. Ilyen intézkedés többek között: TLS-titkosított adatátvitel az alkalmazás és a háttérrendszerek között; a jelszavak bcrypt alapú, sózott hash formájában történő tárolása (az eredeti jelszót nem tároljuk); szerepkör- és tenant-alapú hozzáféréskorlátozás; biztonsági és elszámoltathatósági szempontból releváns auditnaplózás; session/token visszavonás; valamint a support hozzáférés korlátozása a szükséges mértékre.\n\nNem állítunk end-to-end titkosítást, sem azt, hogy minden adat at-rest titkosítással lenne védve, és egyetlen rendszer sem tekinthető feltörhetetlennek. Adatvédelmi incidens gyanúja esetén jelezd a security@vianexis.eu címen.",
      },
      {
        id: "minors",
        title: "23. Kiskorúak",
        body: "A Driver App kialakítása és funkciói kizárólag nagykorú, érvényes vezetői engedéllyel vagy releváns szakmai jogosultsággal rendelkező sofőrök, valamint az őket kezelő céges felhasználók számára készültek. Az alkalmazás nem szolgáltatás kiskorúak részére, és tudatosan nem gyűjtünk kiskorúaktól személyes adatot. Amennyiben tudomásunkra jut, hogy a szolgáltatáson keresztül jogalap nélkül kiskorú személyes adatait kezeltük, megtesszük a szükséges intézkedéseket az adatok törlésére vagy kezelésük korlátozására, figyelembe véve az alkalmazandó jogi megőrzési kötelezettségeket.",
      },
      {
        id: "changes",
        title: "24. A tájékoztató módosítása",
        body: "Ezt a tájékoztatót időről időre frissíthetjük, például jogszabályváltozás, új funkció bevezetése vagy a szolgáltatók körének változása miatt. A tájékoztató tetején feltüntetett verziószám, hatálybalépési dátum és utolsó frissítés dátuma alapján mindig ellenőrizheted, hogy a legfrissebb verziót olvasod-e. Lényeges változás esetén az alkalmazáson belüli értesítés vagy e-mail útján is tájékoztatást adunk. Javasoljuk, hogy időről időre tekintsd át a tájékoztatót.",
      },
      {
        id: "contact",
        title: "25. Kapcsolat",
        body: "Adatvédelemmel kapcsolatos kérdéseiddel, kérelmeiddel vagy észrevételeiddel az alábbi elérhetőségeken kereshetsz meg minket.",
      },
    ],
    contactsTitle: "Kapcsolat adatvédelmi kérdésekben",
    contacts: standardContacts,
  },
  terms: {
    title: "Felhasználási feltételek – ViaNexis",
    metaDescription:
      "A ViaNexis platform és a ViaNexis Driver alkalmazás felhasználási feltételei: szerepkörök, fiókhasználat, dokumentumok, felelősség és B2B szerződéses keretek.",
    intro:
      "Ezek a Feltételek a ViaNexis platform, a ViaNexis Driver alkalmazás, a kapcsolódó céges portál és háttérszolgáltatások használatára vonatkoznak. A szolgáltatás kontrollált, pilot vagy meghívásos formában is elérhető lehet. A személyes adatok kezelését az Adatvédelmi tájékoztató ismerteti; a végleges fióktörlés külön kérelem.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Tartalomjegyzék",
    sections: termsSectionsHu,
    contactsTitle: "Kapcsolat",
    contacts: [
      { label: "Általános kapcsolat", value: "info@vianexis.eu" },
      { label: "Jogi ügyek", value: OPERATOR_EMAILS.legal },
      { label: "Adatvédelem", value: OPERATOR_EMAILS.privacy },
      { label: "Ügyfélszolgálat", value: OPERATOR_EMAILS.support },
      { label: "Biztonsági bejelentés", value: OPERATOR_EMAILS.security },
    ],
  },
  dataSafety: {
    title: "ViaNexis Driver – adatbiztonsági és adatkezelési összefoglaló",
    metaDescription:
      "Közérthető összefoglaló a ViaNexis Driver adatkezeléséről: helyadat, kamera, push, OCR, törlés és szolgáltatók. Nem a Google Play Data safety űrlap.",
    intro:
      "Ez az oldal közérthető formában foglalja össze, hogy a ViaNexis Driver milyen adatkategóriákat kezelhet, milyen engedélyekhez kapcsolódnak, és hol találhatók a részletes jogi dokumentumok. Az alábbi táblázat áttekintés; a fejezetek a kódaudit szerinti korlátokat is ismertetik.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    disclaimer:
      "Ez az összefoglaló tájékoztató jellegű. Nem a Google Play Data safety űrlapja, nem jelenti a Google jóváhagyását, és nem helyettesíti az Adatvédelmi tájékoztatót. A Play adatlapot a kiadott alkalmazásverzió tényleges engedélyei, SDK-i és adatfolyamai alapján kell kitölteni.",
    tableHeaders: {
      category: "Adatkategória",
      collected: "Mit kezelhetünk",
      requirement: "Kötelező / opcionális",
      origin: "Forrás",
      purpose: "Cél",
      sharing: "Címzettek / szolgáltatók",
    },
    rows: [
      {
        category: "Fiókadatok",
        collected: "Név, e-mail, telefon, céges hozzárendelés; helyi PIN sózott hash; hitelesítési token",
        requirement: "Kötelező a fiókhasználathoz",
        origin: "Felhasználó / rendszer",
        purpose: "Hitelesítés, fiókkezelés",
        sharing: "Fuvarozó cég; hoszting. Nem értékesítjük.",
      },
      {
        category: "Helyadatok",
        collected: "GPS, ha engedélyezett (when-in-use; nincs háttér-helyengedély a manifesztben)",
        requirement: "Opcionális, engedélyalapú",
        origin: "Eszköz szenzorai",
        purpose: "Térkép, fuvarhely rögzítés, egyes bizonyíték-/riasztási funkciók",
        sharing: "Funkciótól függően háttérrendszer / cég; térképi stream helyi lehet",
      },
      {
        category: "Kamera, fotó, videó",
        collected: "Fuvar-/dokumentum-/kármédia",
        requirement: "Funkciófüggő, jellemzően opcionális",
        origin: "Felhasználó",
        purpose: "Dokumentálás, bizonyíték",
        sharing: "Fuvarozó cég; tárolási szolgáltató feltöltéskor",
      },
      {
        category: "Dokumentumok és aláírások",
        collected: "Fuvarokmányok, aláírás-rajzolat, időbélyeg, opcionális hely",
        requirement: "Funkció-/fuvarfüggő",
        origin: "Felhasználó / cég",
        purpose: "Bizonyíték, operatív dokumentálás",
        sharing: "Fuvarozó cég; jogalap esetén hatóság",
      },
      {
        category: "Üzenetek",
        collected: "Operatív üzenetek és mellékletek",
        requirement: "Opcionális",
        origin: "Felhasználó",
        purpose: "Kommunikáció, dokumentálás",
        sharing: "Fuvarozó cég; ha fordítás engedélyezett, fordítási útvonal",
      },
      {
        category: "OCR / beszéd (ha használt)",
        collected: "OCR-szöveg; beszéd-/hangbevitel",
        requirement: "Opcionális",
        origin: "Eszköz / OS / feltöltés",
        purpose: "Beviteli segítség",
        sharing: "OCR tipikusan eszközön; beszéd/fordítás útvonaltól függ",
      },
      {
        category: "Push token",
        collected: "FCM token, eszközregisztrációs meta",
        requirement: "Opcionális, ha push aktív",
        origin: "Automatikus",
        purpose: "Operatív értesítés",
        sharing: "FCM / háttérrendszer (adatfeldolgozóként értékelendő)",
      },
      {
        category: "Eszköz- és biztonsági meta",
        collected: "Platform, nyelv, időzóna; biztonsági események",
        requirement: "Szükséges mértékben",
        origin: "Automatikus",
        purpose: "Működés, biztonság",
        sharing: "Hoszting; nincs külön analytics/Crashlytics SDK a jelenlegi audit szerint",
      },
    ],
    sections: dataSafetySectionsHu,
    contactsTitle: "Kérdésed van az adatkezeléssel kapcsolatban?",
    contacts: standardContacts,
  },
  accountDeletion: {
    title: "ViaNexis Driver fiók és adatok törlésének kérése",
    metaDescription:
      "Kérje ViaNexis Driver fiókja és adatainak törlését, helyesbítését, korlátozását vagy másolatát. Publikus adatvédelmi kérelem űrlap.",
    intro:
      "Ezen az oldalon áttekintheti, mit jelent a ViaNexis Driver fiók végleges törlése, és miben különbözik az alkalmazás eltávolításától, a kijelentkezéstől, a cégtől való leválasztástól és a fiókfelfüggesztéstől. Ezután adatvédelmi kérelmet nyújthat be. A kérelem rögzítése nem jelent azonnali vagy automatikus törlést: személyazonosság-ellenőrzés történhet, és bizonyos adatok jogszabály, biztonság, audit vagy szerződés miatt megmaradhatnak.",
    explanationSections: [
      {
        id: "what-deletion-means",
        title: "Mit jelent a fióktörlés?",
        body: "A ViaNexis Driver alkalmazásra vonatkozó végleges fiók- és adattörlési kérelem azt jelenti, hogy a sofőrfiókhoz kapcsolódó hozzáférést és a törölhető személyes adatokat a szolgáltató a kérelem vizsgálata és azonosítás után megszüntetheti vagy anonimizálhatja. A kérelem rögzítése önmagában nem erősíti meg, hogy a megadott adatokhoz tartozik-e fiók, és nem indít azonnali, automatikus törlést.",
      },
      {
        id: "unlink-vs-suspend-vs-delete-vs-uninstall",
        title: "Mi nem számít fióktörlésnek?",
        body: "1. Alkalmazás eltávolítása: a telefonról való törlés nem törli a szerveren tárolt fiókot és adatokat.\n\n2. Kijelentkezés: a munkamenet véget ér; a fiók és az adatok megmaradnak.\n\n3. Cégtől leválasztás: a sofőrprofil és a vállalati hozzárendelés szétválasztható anélkül, hogy minden személyes adat azonnal törlődne.\n\n4. Fiókfelfüggesztés: a bejelentkezés és az app-hozzáférés ideiglenesen korlátozható; az adatok általában megmaradnak.\n\n5. Végleges fiók- és adattörlési kérelem: ez az egyetlen account deletion folyamat. A kérelmet ezen az oldalon, bejelentkezés nélkül lehet benyújtani:\nhttps://vianexis.eu/hu/driver-app/account-deletion",
      },
      {
        id: "what-may-remain",
        title: "Mi törölhető, és mi maradhat meg?",
        body: "Törölhető vagy anonimizálható lehet többek között a fiókhoz tartozó belépési és profiladat, a push token, valamint azok a személyes adatok, amelyekre nincs más jogalap a megőrzésre. Megmaradhatnak jogszabály, biztonság, csalásmegelőzés, audit, szerződés, elszámoltathatóság vagy jogi igény miatt szükséges adatok (például egyes fuvarokmányok, aláírásbizonyítékok, biztonsági auditnaplók vagy a privacy request rekord). A megőrzött adatok operatív használata korlátozott. A fuvarozó cég saját jogi kötelezettsége miatt tárolt adatokra külön szabály vonatkozhat.",
      },
      {
        id: "process-steps",
        title: "A kérelem feldolgozásának lépései",
        body: "1. A kérelem rögzítése ügyintézési rekordként.\n2. Szükség esetén arányos személyazonosság-ellenőrzés.\n3. A ViaNexis és — ha érintett — a fuvarozó cég adatkezelői szerepének meghatározása.\n4. Törölhető, anonimizálható és megőrzendő adatkategóriák azonosítása.\n5. Manuális végrehajtás (törlés/anonimizálás, tokenek visszavonása, hozzáférés megszüntetése).\n6. Lezáró tájékoztatás a megadott kapcsolattartási címen.\n\nAz első űrlapon ne adjon meg jelszót, PIN-kódot vagy teljes személyi okmányt. A kérelemhez szükséges lehet a teljes név, a fiókhoz tartozó e-mail vagy telefonszám, valamint kapcsolattartási e-mail.",
      },
      {
        id: "identity-verification",
        title: "Személyazonosság-ellenőrzés és jogorvoslat",
        body: "Arányos személyazonosság-ellenőrzés kérhető. További kérdés vagy panasz esetén írjon a privacy@vianexis.eu címre; panasszal a NAIH-hoz is fordulhat. Adatkezelő: Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője. Alkalmazás: ViaNexis Driver.",
      },
    ],
    formTitle: "Adatvédelmi kérelem beküldése",
    formIntro:
      "A kötelező mezőket töltse ki. A fiókhoz tartozó e-mail vagy telefonszám közül legalább az egyiket meg kell adni. Jelszót és PIN-t ne írjon be.",
    formFields: [
      {
        id: "fullName",
        label: "Teljes név *",
        required: true,
        placeholder: "Vezetéknév Keresztnév",
      },
      {
        id: "accountEmail",
        label: "Fiókhoz tartozó e-mail",
        required: false,
        placeholder: "sofőr@pelda.hu",
        helpText: "Legalább az e-mail vagy a telefonszám megadása kötelező.",
      },
      {
        id: "accountPhone",
        label: "Fiókhoz tartozó telefonszám",
        required: false,
        placeholder: "+36 …",
        helpText: "Legalább az e-mail vagy a telefonszám megadása kötelező.",
      },
      {
        id: "contactEmail",
        label: "Kapcsolattartási e-mail *",
        required: true,
        placeholder: "kapcsolat@pelda.hu",
      },
      {
        id: "country",
        label: "Ország *",
        required: true,
        placeholder: "HU",
        helpText: "Kétbetűs országkód, például HU.",
      },
      {
        id: "companyName",
        label: "Cég neve",
        required: false,
      },
      {
        id: "driverIdentifier",
        label: "Sofőrazonosító",
        required: false,
      },
      {
        id: "preferredLanguage",
        label: "Preferált nyelv",
        required: false,
        placeholder: "hu",
      },
      {
        id: "message",
        label: "Megjegyzés",
        required: false,
      },
      {
        id: "privacyAccepted",
        label: "Elfogadom az adatvédelmi tájékoztatót. *",
        required: true,
      },
      {
        id: "ownershipConfirmed",
        label:
          "Kijelentem, hogy saját vagy jogszerűen képviselt fiókról van szó. *",
        required: true,
      },
    ],
    requestTypeLabel: "Kérelem típusa *",
    requestTypePlaceholder: "Válasszon kérelemtípust",
    requestTypes: [
      {
        value: "full_account_deletion",
        label: "Teljes ViaNexis Driver fiók törlése",
        description: "A sofőrfiók és a törölhető személyes adatok megszüntetésének kérése.",
      },
      {
        value: "personal_data_deletion",
        label: "Személyes adatok törlésének kérése",
        description: "Adott személyes adatok törlése vagy anonimizálása, ahol jogilag lehetséges.",
      },
      {
        value: "company_link_termination",
        label: "Céges kapcsolat megszüntetésének kérése",
        description: "A vállalati hozzárendelés megszüntetése a fiók teljes törlése nélkül.",
      },
      {
        value: "data_copy",
        label: "Adatok másolatának kérése",
        description: "A kezelt személyes adatokról másolat kérése.",
      },
      {
        value: "data_rectification",
        label: "Adat helyesbítése",
        description: "Pontatlan személyes adatok javításának kérése.",
      },
      {
        value: "processing_restriction",
        label: "Adatkezelés korlátozása",
        description: "Az adatkezelés korlátozásának kérése a vonatkozó feltételek szerint.",
      },
      {
        value: "other_privacy",
        label: "Egyéb adatvédelmi kérelem",
        description: "Más GDPR- vagy adatvédelmi jellegű kérelem.",
      },
    ],
    confirmationLabel:
      "Megerősítem, hogy a megadott adatok pontosságáért felelek, és a kérelmet jogosultan nyújtom be.",
    submitLabel: "Kérelem beküldése",
    submittingLabel: "Beküldés folyamatban…",
    successTitle: "Kérelmét rögzítettük",
    successMessage:
      "Ha a megadott adatokhoz ViaNexis Driver-fiók tartozik, a kérelmet rögzítettük. A szükséges ellenőrzést követően tájékoztatást küldünk a további lépésekről.",
    errorMessages: {
      required: "Ez a mező kitöltése kötelező.",
      emailInvalid: "Érvényes e-mail címet adjon meg.",
      requestTypeRequired: "Válassza ki a kérelem típusát.",
      confirmationRequired: "A tájékoztató elfogadása és a tulajdonosi nyilatkozat kötelező.",
      accountContactRequired:
        "Adjon meg legalább a fiókhoz tartozó e-mail címet vagy telefonszámot.",
      submitFailed:
        "A kérelem beküldése nem sikerült. Próbálja újra, vagy írjon a privacy@vianexis.eu címre.",
      network: "Hálózati hiba történt. Ellenőrizze a kapcsolatot, és próbálja újra.",
    },
    contactsTitle: "Kapcsolat",
    contacts: standardContacts,
  },
};
