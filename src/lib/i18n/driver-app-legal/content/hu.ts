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
          "ViaNexis-fiók és hitelesítés: fiók létrehozása, bejelentkezés, jelszó/PIN kezelés, hozzáférés biztosítása — szerződés teljesítése (GDPR 6. cikk (1) b) pont), illetve a platform biztonságához szükséges mértékben jogos érdek (GDPR 6. cikk (1) f) pont)",
          "Céges fuvarfolyamat: fuvarfeladatok, státuszok, dokumentumok és céges munkafolyamatok — a sofőr és a fuvarozó cég közötti szerződés/jogviszony teljesítése, illetve ahol a ViaNexis a cég utasítására jár el, a cég adatkezelői utasítása szerinti feldolgozás",
          "Platformbiztonság: visszaélés-megelőzés, jogosulatlan hozzáférés észlelése, rendszerüzemeltetési naplók — jogos érdek (GDPR 6. cikk (1) f) pont)",
          "Jogi és számviteli kötelezettség: jogszabály által előírt bizonylatok és nyilvántartások megőrzése — jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont), ahol alkalmazandó",
          "Opcionális helyfüggő funkció: saját pozíció megjelenítése vagy fuvaresethez kapcsolódó hely rögzítése — a funkció használatához szükséges szerződéses/jogos érdekű cél mellett a rendszerengedély megadása; a hozzájárulás jellegű kezelés visszavonható a rendszerbeállításokban (GDPR 6. cikk (1) a) / f) / b) pont — a konkrét funkciótól függően)",
          "Operatív értesítés: fuvarral kapcsolatos push értesítések kézbesítése — szerződés teljesítése / jogos érdek a szolgáltatás működtetéséhez, a rendszerértesítési engedély mellett",
          "Support és privacy request: ügyfélszolgálati és adatvédelmi kérelmek ügyintézése — jogos érdek, illetve jogi kötelezettség teljesítése",
          "Jogi igények kezelése: igények előterjesztése, érvényesítése vagy védelme — jogos érdek, illetve ahol alkalmazandó, jogi kötelezettség",
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
        body: "A Driver App lehetőséget biztosít elektronikus aláírás rögzítésére (érintőképernyős aláírás-rajzolat formájában) a fuvarozási események (pl. átvétel, kiszállítás) igazolásához. Az aláírással együtt olyan kiegészítő adatokat is rögzíthetünk, mint az időbélyeg és — ha a funkció során engedélyezve van és rögzítésre kerül — a helyadat, mert ezek együttesen szolgálhatnak bizonyítékként egy esetleges vitás helyzetben.\n\nA rögzített aláírás bizonyító ereje és joghatása a dokumentum típusától, a rögzítés körülményeitől és az alkalmazandó jogtól függ. A ViaNexis nem garantálja, hogy a rögzített aláírás minden országban vagy minden eljárásban minősített elektronikus aláírásnak vagy önmagában teljes bizonyító erejű bizonyítéknak minősül. Részletesebb tájékoztatást a Felhasználási feltételek 9. szakasza tartalmaz.",
      },
      {
        id: "messages-and-translation",
        title: "12. Üzenetek és fordítás",
        body: "A Driver App beépített üzenetküldési funkciót biztosít a sofőr és a diszpécser/céges kapcsolattartó között. Az üzenetváltás megkönnyítése érdekében a rendszer gépi (automatikus) fordítást kínálhat fel, ha a felek eltérő nyelvet használnak. A gépi fordítás kényelmi funkció, amely nem helyettesíti a hiteles vagy hivatalos fordítást, és időnként pontatlan lehet — kritikus tartalom (pl. veszélyes áru kezelésére vonatkozó utasítás) esetén javasolt az emberi megerősítés kérése.\n\nAz üzenetek tartalma a fuvarhoz kapcsolódóan naplózásra és a 18. szakasz szerinti elvek alapján megőrzésre kerülhet, egyebek mellett esetleges vitás helyzetek tisztázása céljából.",
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
        body: "A kijelentkezés, az alkalmazás eltávolítása, a cégtől való leválasztás és a fiók felfüggesztése nem azonos a végleges fióktörléssel. A végleges account deletion külön folyamat: a nyilvános oldalon (https://vianexis.eu/hu/driver-app/account-deletion) beadott kérelem.\n\nA backend a kérelmet ügyintézési rekordként rögzíti; a kérelem önmagában nem indít azonnali, automatikus teljes adattörlést. Azonosítás után a törölhető fiókadatok törölhetők vagy anonimizálhatók; megmaradhatnak jogszabály, biztonság, csalásmegelőzés, audit, szerződés vagy jogi igény miatt szükséges adatok. A megmaradó adatok operatív használata korlátozott. A kérelmező a megadott kapcsolattartási címen kap tájékoztatást a további lépésekről. A semleges visszaigazolás nem árulja el, hogy a megadott adatokhoz tartozik-e fiók.",
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
        body: "A személyes adatok védelme érdekében megfelelő technikai és szervezési intézkedéseket alkalmazunk. Ilyen intézkedés többek között az adatok titkosított (TLS) továbbítása az alkalmazás és a háttérrendszerek között, a jelszavak egyirányú, sózott hash formájában történő tárolása (az eredeti jelszót nem tároljuk), a hozzáférések jogosultsági szintekhez kötése, valamint a biztonsági szempontból releváns események naplózása.\n\nBár mindent megteszünk az adatok védelme érdekében, egyetlen rendszer sem tekinthető abszolút mértékben biztonságosnak. Amennyiben adatvédelmi incidenst észlelsz vagy gyanítasz, kérjük, haladéktalanul jelezd a security@vianexis.eu címen.",
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
    title: "ViaNexis Driver alkalmazás felhasználási feltételek",
    metaDescription:
      "A ViaNexis Driver App használatára vonatkozó felhasználási feltételek: fiókhasználat, elfogadható magatartás, felelősségi korlátok és a szolgáltatás jellege.",
    intro:
      "Jelen Felhasználási feltételek (a továbbiakban: „Feltételek”) szabályozzák a ViaNexis Driver App mobilalkalmazás (a továbbiakban: „Driver App” vagy „alkalmazás”) használatát. Az alkalmazás telepítésével, a fiók regisztrálásával vagy a szolgáltatás bármely funkciójának használatával elfogadod a jelen Feltételeket. Ha a Feltételekkel nem értesz egyet, kérjük, ne használd az alkalmazást, és jelezd ezt a fuvarozó céged felé.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    tocLabel: "Tartalomjegyzék",
    sections: [
      {
        id: "intro-and-acceptance",
        title: "1. Bevezetés és elfogadás",
        body: `${OPERATOR_STATEMENT_HU} A jelen Feltételek a Driver App és az ahhoz kapcsolódó háttérszolgáltatások használatára vonatkoznak. A Feltételek elfogadása a regisztráció, illetve a fuvarozó cég általi meghívás elfogadásának feltétele.`,
      },
      {
        id: "service-description",
        title: "2. A szolgáltatás leírása",
        body: "A Driver App egy sofőröknek szánt mobilalkalmazás, amely a fuvarhoz kapcsolódó feladatok, dokumentumok és események kezelését támogatja: fuvarlista és megállók megtekintése, dokumentumfeltöltés, elektronikus aláírás rögzítése, ellenőrzőlisták kitöltése, incidensek rögzítése, üzenetváltás a diszpécserrel, valamint — korlátozott mértékben — offline használat. A Driver App a fuvarozó cég saját adminisztrációs/céges felületéhez (portál) kapcsolódik, amelyen keresztül a cég fuvarokat oszt ki és jogosultságokat kezel.\n\nA szolgáltatás jelenleg kontrollált, egyeztetett hozzáférésű (pilot) formában érhető el, ezért egyes funkciók fejlesztés alatt állhatnak, vagy fuvarozó cégenként eltérő mértékben lehetnek elérhetők.",
      },
      {
        id: "eligibility-and-registration",
        title: "3. Jogosultság és fiókregisztráció",
        body: "A Driver App használatához nagykorúnak kell lenned, és a fuvarozás jellegétől függően érvényes vezetői engedéllyel, illetve az adott fuvarhoz szükséges egyéb jogosultsággal (pl. ADR-igazolvány) kell rendelkezned. A fiók létrehozása jellemzően a fuvarozó cég meghívása, illetve céges azonosító (cégkód) megadása alapján történik. A regisztráció során megadott adatoknak valósnak és naprakésznek kell lenniük.",
      },
      {
        id: "personal-account-security",
        title: "4. Fiókbiztonság: személyes, nem megosztható fiók",
        body: "A Driver App-hoz tartozó fiók személyes és kizárólag a saját, egyéni használatodra szolgál. A bejelentkezési adatok (jelszó, PIN) megosztása bármely más személlyel — beleértve más sofőröket, diszpécsereket vagy céges adminisztrátorokat is — tilos. Nem hozható létre és nem használható úgy sem a fiók, hogy azt több sofőr közösen, „céges sofőr-fiókként” használja: minden sofőrnek saját, egyéni fiókkal kell rendelkeznie.\n\nA fiókodhoz kapcsolódó tevékenységekért — az általad megosztott bejelentkezési adatokból eredő tevékenységeket is beleértve — te vagy felelős. Ha azt gyanítod, hogy fiókodhoz jogosulatlanul fértek hozzá, haladéktalanul jelezd a security@vianexis.eu címen.",
      },
      {
        id: "company-managed-driver-profiles",
        title: "5. A fuvarozó cég által kezelt sofőrprofilok",
        body: "A fuvarozó cég adminisztrátora vagy diszpécsere a céges portálon keresztül kezelheti a sofőr profiljának egyes elemeit — például fuvart oszthat ki, hozzáférést adhat vagy vonhat vissza, illetve inaktiválhatja a profilt a jogviszony megszűnésekor. Ez a fajta céges kezelés azonban nem terjed ki és nem is terjedhet ki a sofőr személyes bejelentkezési adataira.\n\nA fuvarozó cég semmilyen körülmények között nem kérheti el a sofőr jelszavát vagy PIN-kódját, és nem jogosult a sofőr fiókjába annak bejelentkezési adataival belépni. Ha egy fuvarozó cég ilyet kér tőled, kérjük, utasítsd vissza, és jelezd ezt a security@vianexis.eu vagy a support@vianexis.eu címen.",
      },
      {
        id: "permissions-and-device-access",
        title: "6. Engedélyek és eszközhozzáférések",
        body: "Az alkalmazás egyes funkciói (pl. helymeghatározás, kamera, push értesítés) az operációs rendszer szintjén megadott, külön engedélyt igényelnek. Ezen engedélyek megadása — a Feltételek 3. szakaszában leírt alapvető, fiókhasználathoz szükséges adatok kivételével — önkéntes, és a telefon rendszerbeállításaiban bármikor visszavonható. Egyes funkciók a hozzá tartozó engedély hiányában korlátozottan vagy egyáltalán nem működnek; ez nem tekinthető az alkalmazás hibájának.",
      },
      {
        id: "acceptable-use",
        title: "7. Elfogadható használat",
        body: "A Driver App használata során az alábbi magatartások tilosak: hamis, megtévesztő vagy manipulált dokumentum, fénykép vagy aláírás feltöltése; más személy nevében, annak hozzájárulása nélkül történő adatrögzítés vagy aláírás; jogosulatlan hozzáférés kísérlete más fiókjához vagy a rendszer más részéhez; az alkalmazás rendeltetésétől eltérő, visszaélésszerű vagy a rendszer működését hátrányosan befolyásoló használat (pl. automatizált lekérdezések, biztonsági mechanizmusok megkerülésének kísérlete); valamint jogszabályba ütköző tartalom feltöltése vagy tevékenység végzése az alkalmazáson keresztül.",
      },
      {
        id: "uploaded-content-responsibility",
        title: "8. Feltöltött tartalom és felelősség",
        body: "A Driver App-ba feltöltött dokumentumok, fényképek, videók és egyéb tartalmak valódiságáért, jogszerűségéért és a fuvarhoz való tényleges kapcsolódásáért a feltöltő sofőr, illetve a fuvarozó cég felel. Ez a kötelezettség nem érinti a ViaNexis vagy a fuvarozó cég alkalmazandó adatvédelmi felelősségét. A ViaNexis nem ellenőrzi és nem garantálja a feltöltött tartalom hitelességét vagy jogi megfelelőségét, és nem vállal felelősséget a hamis vagy pontatlan tartalom feltöltéséből eredő következményekért.",
      },
      {
        id: "e-signature-legal-effect",
        title: "9. Az e-aláírás jogi hatálya",
        body: "A rögzített aláírás bizonyító ereje és joghatása a dokumentum típusától, a rögzítés körülményeitől és az alkalmazandó jogtól függ. A ViaNexis nem garantálja, hogy a rögzített aláírás minden országban vagy minden eljárásban minősített elektronikus aláírásnak vagy önmagában teljes bizonyító erejű bizonyítéknak minősül. Egyes dokumentumtípusok esetén jogszabály minősített vagy fokozott biztonságú elektronikus aláírást írhat elő, amelyet az alkalmazásban rögzíthető egyszerű aláírás-rajzolat önmagában nem feltétlenül elégít ki.",
      },
      {
        id: "offline-mode-and-sync",
        title: "10. Offline működés és szinkronizáció",
        body: "A Driver App bizonyos funkciói (pl. adatrögzítés, dokumentumfeltöltés) internetkapcsolat hiányában, offline módban is elérhetők lehetnek, és a rögzített adatok a kapcsolat helyreállásakor szinkronizálódnak a háttérrendszerrel. Az offline szinkronizáció funkciója folyamatos fejlesztés alatt áll, ezért teljes körű, minden helyzetre kiterjedő, garantált offline működés jelenleg nem biztosított. Amíg a szinkronizáció nem történt meg, az offline rögzített adat kizárólag az eszközön érhető el, és elveszhet, ha az eszköz meghibásodik, elveszik, vagy az alkalmazás adatai törlődnek. Kritikus adat esetén javasolt a kapcsolat helyreállása utáni mielőbbi szinkronizáció ellenőrzése.",
      },
      {
        id: "automated-checks-and-ai-assistance",
        title: "11. Automatizált ellenőrzések és AI-asszisztencia",
        body: "Az alkalmazásban elérhető automatizált és mesterséges intelligencia alapú segédfunkciók (pl. dokumentum-felismerés, hiányzó adat jelzése, fordítási javaslat) kizárólag tájékoztató, támogató jellegűek, és nem helyettesítik a felhasználó vagy a fuvarozó cég saját ellenőrzését és döntését. Ezek a funkciók nem helyettesítik a jogi, vámügyi vagy ADR-megfelelőségi döntést, és nem tekinthetők hatósági vagy szakmai állásfoglalásnak.",
      },
      {
        id: "not-an-authority-or-emergency-service",
        title: "12. Nem hatóság, nem jogi tanácsadó és nem segélyhívó szolgáltatás",
        body: "A ViaNexis és a Driver App nem minősül hatóságnak, nem nyújt jogi tanácsadást, és nem minősül segélyhívó vagy vészhelyzeti szolgáltatásnak. Az alkalmazásban megjelenő figyelmeztetés, javaslat vagy automatizált ellenőrzés eredménye tájékoztató jellegű, és semmilyen körülmények között nem helyettesíti a hatósági eljárást, a jogi tanácsadást vagy a segélyhívó szolgálatok (pl. rendőrség, mentők, katasztrófavédelem) elérését vészhelyzet esetén. Vészhelyzetben mindig a helyi segélyhívó számot (az Európai Unióban: 112) kell hívni.",
      },
      {
        id: "adr-customs-traffic-compliance",
        title: "13. ADR, vámügyi és közlekedési megfelelőség",
        body: "A ViaNexis nem garantálja, hogy a Driver App használata önmagában biztosítja a veszélyes áruk szállítására vonatkozó (ADR), vámügyi vagy közlekedési jogszabályoknak való megfelelést. Az alkalmazás egyes funkciói (pl. ellenőrzőlisták, dokumentum-emlékeztetők) segíthetik a megfelelés nyomon követését, de ezek használata nem mentesíti a sofőrt és a fuvarozó céget azon kötelezettség alól, hogy megismerjék és betartsák a rájuk vonatkozó hatósági előírásokat.",
      },
      {
        id: "driver-and-company-obligations",
        title: "14. A sofőr és a fuvarozó cég kötelezettségei",
        body: "A sofőr és a fuvarozó cég kizárólagos felelőssége, hogy betartsa a rá vonatkozó jogszabályokat, hatósági előírásokat és a fuvarozási szerződésből eredő kötelezettségeket, ideértve a vezetői engedély, az ADR-igazolvány és egyéb szükséges okmányok érvényességének fenntartását, valamint az alkalmazásban rögzített adatok pontosságát és időszerűségét.",
      },
      {
        id: "availability-and-maintenance",
        title: "15. Rendelkezésre állás és karbantartás",
        body: "A ViaNexis törekszik a Driver App folyamatos és megbízható működésének biztosítására, azonban — különös tekintettel a szolgáltatás jelenlegi, kontrollált pilot jellegére — nem garantál megszakítás nélküli rendelkezésre állást. Tervezett karbantartás, frissítés vagy előre nem látható technikai probléma miatt a szolgáltatás időszakosan korlátozottan érhető el vagy szünetelhet. Amennyiben lehetséges, a tervezett karbantartásról előzetesen tájékoztatást adunk.",
      },
      {
        id: "intellectual-property",
        title: "16. Szellemi tulajdon",
        body: "A Driver App, annak elnevezése, arculata, forráskódja és a hozzá kapcsolódó dokumentáció a ViaNexis, illetve az üzemeltető szellemi tulajdonát képezi. A felhasználó a Feltételek szerint kizárólag a rendeltetésszerű használatra jogosult, egyéb jogot (pl. másolás, visszafejtés, terjesztés) nem szerez. A felhasználó által feltöltött dokumentumok és fényképek tekintetében a felhasználó, illetve a fuvarozó cég megőrzi a jogosultságait, ugyanakkor a szolgáltatás nyújtásához szükséges mértékben felhasználási jogot biztosít a ViaNexis részére (pl. tárolás, megjelenítés, feldolgozás a fuvarfolyamat keretében).",
      },
      {
        id: "third-party-services",
        title: "17. Harmadik féltől származó szolgáltatások",
        body: "A Driver App működése egyes funkciók (pl. push értesítés, térképszolgáltatás, felhő-tárhely) tekintetében harmadik fél szolgáltatóira támaszkodik. A ViaNexis nem vállal felelősséget az ilyen harmadik fél szolgáltatók üzemzavarából, elérhetetlenségéből vagy hibás működéséből eredő károkért, ugyanakkor törekszik megbízható partnerek kiválasztására.",
      },
      {
        id: "limitation-of-liability",
        title: "18. A felelősség korlátozása",
        body: "A vonatkozó jogszabályok által megengedett legteljesebb mértékben a ViaNexis nem vállal felelősséget a Driver App használatából vagy használatának ellehetetlenüléséből eredő közvetett, járulékos vagy következményi károkért, elmaradt haszonért, adatvesztésért, illetve a jogszabályi (pl. ADR, vámügyi, közlekedési) megfelelés elmulasztásából eredő bírságért vagy szankcióért. Ez a korlátozás nem érinti azokat a felelősségi eseteket, amelyek jogszabály alapján nem korlátozhatók vagy zárhatók ki.",
      },
      {
        id: "disclaimer-of-warranties",
        title: "19. Szavatosság kizárása",
        body: "A Driver App-ot „ahogy van” (as is) és „ahogy elérhető” (as available) alapon biztosítjuk, tekintettel a szolgáltatás jelenlegi, kontrollált pilot jellegére. A ViaNexis a jogszabályok által megengedett mértékben kizár minden kifejezett vagy hallgatólagos szavatosságot, ideértve különösen, de nem kizárólagosan a hibátlan működésre, a folyamatos rendelkezésre állásra, vagy egy adott (pl. hatósági megfelelési) célra való alkalmasságra vonatkozó szavatosságot.",
      },
      {
        id: "suspension-and-termination",
        title: "20. Felfüggesztés és megszűnés",
        body: "A ViaNexis fenntartja a jogot, hogy a jelen Feltételek megsértése, biztonsági kockázat vagy visszaélésgyanú esetén a fiókot felfüggessze vagy megszüntesse. A felhasználó bármikor kezdeményezheti a fiók használatának megszüntetését; a fiók és az adatok kezelésének részletes lehetőségeit (leválasztás, felfüggesztés, törlés, eltávolítás) a Fiók és adattörlés oldal ismerteti.",
      },
      {
        id: "changes-to-terms",
        title: "21. A Feltételek módosítása",
        body: "A jelen Feltételeket időről időre módosíthatjuk, például jogszabályváltozás, új funkció bevezetése vagy üzleti okok miatt. A módosított Feltételek a dokumentum tetején feltüntetett hatálybalépési dátumtól alkalmazandók. Lényeges módosításról az alkalmazáson belüli értesítés vagy e-mail útján tájékoztatást adunk. A módosítás hatálybalépését követő további használat a módosított Feltételek elfogadását jelenti.",
      },
      {
        id: "governing-law-and-disputes",
        title: "22. Irányadó jog és vitarendezés",
        body: "A jelen Feltételekre és az azokból eredő jogvitákra Magyarország joga irányadó. A felek törekednek arra, hogy esetleges vitás kérdéseiket elsősorban egyeztetés útján, a legal@vianexis.eu címen keresztül rendezzék. Ennek eredménytelensége esetén a jogvita elbírálására — jogszabály eltérő rendelkezése hiányában — a magyar bíróságok rendelkeznek joghatósággal.",
      },
      {
        id: "contact",
        title: "23. Kapcsolat",
        body: "A Feltételekkel kapcsolatos kérdéseiddel az alábbi elérhetőségeken kereshetsz meg minket.",
      },
    ],
    contactsTitle: "Kapcsolat a Feltételekkel kapcsolatban",
    contacts: standardContacts,
  },
  dataSafety: {
    title: "ViaNexis Driver – adatbiztonsági és adatkezelési összefoglaló",
    metaDescription:
      "Közérthető, táblázatos összefoglaló arról, milyen adatokat gyűjt a ViaNexis Driver App, kötelezőek-e, honnan származnak, és mi történik velük.",
    intro:
      "Ez az oldal közérthető, táblázatos formában foglalja össze, hogy a ViaNexis Driver App milyen adatkategóriákat kezel, ezek kötelezőek-e a szolgáltatás használatához, tőled vagy automatikusan az eszköztől/alkalmazástól származnak-e, milyen célt szolgálnak, és megosztásra kerülnek-e harmadik féllel. Ez az összefoglaló kiegészíti, de nem helyettesíti a teljes Adatvédelmi tájékoztatót, és nem minősül az alkalmazásboltok (pl. Google Play „Adatbiztonság” szekció) hivatalos, azok saját formátuma szerinti nyilatkozatának — az áruházi nyilatkozatokat mindig az adott áruház felületén, a hatályos szabályaik szerint tesszük közzé.",
    versionLabel,
    effectiveLabel,
    lastUpdatedLabel,
    disclaimer:
      "Ez az összefoglaló tájékoztató jellegű, közérthető megfogalmazás, és nem az adott alkalmazásbolt hivatalos adatbiztonsági nyilatkozata. A Google Play Data safety adatlapját a kiadott alkalmazásverzió tényleges engedélyei, SDK-i és adatfolyamai alapján kell kitölteni. Jogi szempontból az Adatvédelmi tájékoztató az irányadó dokumentum.",
    tableHeaders: {
      category: "Adatkategória",
      collected: "Mit gyűjtünk",
      requirement: "Kötelező / opcionális",
      origin: "Forrás",
      purpose: "Cél",
      sharing: "Megosztás harmadik féllel",
    },
    rows: [
      {
        category: "Fiókadatok",
        collected: "Név, e-mail cím, telefonszám; jelszó egyirányú sózott hash formában; cégkód",
        requirement: "Kötelező a fiók létrehozásához",
        origin: "Felhasználó által megadott",
        purpose: "Regisztráció, hitelesítés, fiókkezelés",
        sharing: "Nem kerül eladásra; a fuvarozó céggel a jogviszony igazolásához szükséges mértékben megosztott",
      },
      {
        category: "Helyadatok",
        collected: "GPS-koordináták, ha a helymeghatározás engedélyezve van",
        requirement: "Opcionális, engedélyalapú",
        origin: "Automatikus, az eszköz szenzorai",
        purpose: "Saját pozíció megjelenítése vagy fuvareset helyének rögzítése (nincs folyamatos háttérkövetés)",
        sharing: "A fuvarozó céggel, a fuvarszervezéshez szükséges mértékben",
      },
      {
        category: "Kamera és fényképek",
        collected: "Fuvarhoz, kárhoz vagy dokumentumhoz kapcsolódó fényképek/videók",
        requirement: "Funkciófüggő, jellemzően opcionális (galériából is választható)",
        origin: "Felhasználó által rögzített vagy feltöltött",
        purpose: "Dokumentálás, kárrendezés, bizonyíték",
        sharing: "A fuvarozó céggel és — jogvita esetén — a jogi képviselővel",
      },
      {
        category: "Fuvarokmányok és dokumentumok",
        collected: "CMR, szállítólevél, vámokmány, jogosítvány/ADR-igazolvány másolata",
        requirement: "Funkciófüggő, a fuvar jellegétől függően kötelező lehet",
        origin: "Felhasználó vagy céges adminisztrátor által feltöltött",
        purpose: "Fuvarbizonylat, megfelelőség igazolása",
        sharing: "A fuvarozó céggel; jogszabályi kötelezettség esetén hatósággal",
      },
      {
        category: "E-aláírás adatok",
        collected: "Aláírás-rajzolat, időbélyeg, eszközazonosító",
        requirement: "Opcionális, a fuvar folyamatától függ",
        origin: "Felhasználó által rögzített",
        purpose: "Átvétel/kiszállítás igazolása, bizonyíték",
        sharing: "A fuvarozó céggel; jogvita esetén bizonyítékként",
      },
      {
        category: "Üzenetek",
        collected: "Sofőr és diszpécser közötti üzenetváltás tartalma",
        requirement: "Opcionális, a kommunikációs funkció használatától függ",
        origin: "Felhasználó által beírt",
        purpose: "Kommunikáció, fordítási segédlet, dokumentálás",
        sharing: "A fuvarozó céggel; fordítási funkció esetén a fordítási alszolgáltatóval",
      },
      {
        category: "Eszköz- és diagnosztikai adatok",
        collected: "Push-eszközregisztráció azonosító, platform, nyelv/időzóna; biztonsági naplóesemények",
        requirement: "A szolgáltatás biztonságához és push kézbesítéshez szükséges mértékben",
        origin: "Automatikus / funkciófüggő",
        purpose: "Push kézbesítés, biztonság",
        sharing: "Push szolgáltatóval (FCM); hoszting környezettel",
      },
      {
        category: "Push token",
        collected: "Eszközhöz kötött push-azonosító",
        requirement: "Opcionális (kikapcsolható)",
        origin: "Automatikus",
        purpose: "Fuvarral kapcsolatos értesítés kézbesítése",
        sharing: "Push-értesítési alszolgáltatóval",
      },
      {
        category: "Használati és naplóadatok",
        collected: "Bejelentkezési események, funkcióhasználat, biztonsági események",
        requirement: "Kötelező a biztonsághoz",
        origin: "Automatikus",
        purpose: "Csalás- és visszaélés-megelőzés, biztonság",
        sharing: "Nem kerül megosztásra harmadik féllel, kivéve jogszabályi kötelezettség esetén",
      },
    ],
    sections: [
      {
        id: "encryption-in-transit",
        title: "Titkosítás átvitel közben",
        body: "Az alkalmazás és a háttérrendszerek közötti adatforgalom titkosított (TLS) csatornán keresztül zajlik. A jelszavakat nem tároljuk olvasható formában, hanem kriptográfiai hash-eljárással védjük.",
      },
      {
        id: "deletion-path",
        title: "Törlési lehetőség",
        body: "A fiókodhoz és adataidhoz kapcsolódó törlési, felfüggesztési vagy leválasztási kérelmet a Fiók és adattörlés oldalon nyújthatod be. A kérelem teljesítése előtt személyazonosság-ellenőrzés szükséges lehet, és bizonyos adatok jogi/számviteli okból a kérelem teljesítése után is megőrzésre kerülhetnek.",
      },
      {
        id: "location-camera-push-audit",
        title: "Helyadat, kamera, push és naplózás",
        body: "A helymeghatározás és a push értesítés engedélyalapú, és a telefon rendszerbeállításaiban bármikor kikapcsolható. A kamera-hozzáférés helyett galériából is választható tartalom. A biztonsági szempontból releváns eseményeket (pl. bejelentkezési kísérletek) naplózzuk a visszaélések megelőzése céljából.",
      },
      {
        id: "third-parties",
        title: "Harmadik felek",
        body: "Az adatok egy részét a szolgáltatás működtetéséhez szükséges mértékben megosztjuk adatfeldolgozó partnereinkkel (pl. hoszting, push-értesítés, e-mail kézbesítés), valamint a fuvarozó céggel, amellyel jogviszonyban állsz. Ezen felül harmadik féllel csak jogszabályi kötelezettség vagy jogos érdek (pl. jogi igényérvényesítés) alapján osztunk meg adatot.",
      },
      {
        id: "no-sale-no-ad-profiling",
        title: "Nincs adateladás, nincs hirdetési profilalkotás",
        body: "A jelen dokumentum elfogadásának időpontjában a ViaNexis nem értékesíti a felhasználói adatokat harmadik félnek, és nem használja azokat hirdetési célú profilalkotásra. Ez a nyilatkozat a jelenlegi termékszándékot tükrözi; a beépített szoftverfejlesztői készletek (SDK-k) és alvállalkozók tényleges adatkezelési gyakorlatának teljes körű auditja folyamatban van, ennek lezárultával ezt a szakaszt szükség esetén pontosítjuk.",
      },
    ],
    contactsTitle: "Kérdésed van az adatkezeléssel kapcsolatban?",
    contacts: standardContacts,
  },
  accountDeletion: {
    title: "ViaNexis Driver fiók és adatok törlésének kérése",
    metaDescription:
      "Kérje ViaNexis Driver fiókja és adatainak törlését, helyesbítését, korlátozását vagy másolatát. Publikus adatvédelmi kérelem űrlap.",
    intro:
      "Ezen az oldalon áttekintheti, mit jelent a fióktörlés, miben különbözik a céges kapcsolat megszüntetésétől, a felfüggesztéstől és az alkalmazás eltávolításától, majd adatvédelmi kérelmet nyújthat be. A kérelem nem jelenti a fiók azonnali törlését: személyazonosság-ellenőrzés történhet, és bizonyos adatok jogszabály, biztonság, audit vagy szerződés miatt megmaradhatnak.",
    explanationSections: [
      {
        id: "what-deletion-means",
        title: "Mit jelent a fióktörlés?",
        body: "A ViaNexis Driver fiók törlésének kérése azt jelenti, hogy a sofőrfiókhoz kapcsolódó hozzáférést és a törölhető személyes adatokat a szolgáltató a kérelem vizsgálata után megszünteti vagy anonimizálja. A kérelem rögzítése után nem erősítjük meg automatikusan, hogy a megadott adatokhoz tartozik-e fiók.",
      },
      {
        id: "unlink-vs-suspend-vs-delete-vs-uninstall",
        title: "Céges kapcsolat, felfüggesztés, törlés és az app eltávolítása",
        body: "Céges kapcsolat megszüntetése: a sofőrprofil és a vállalati hozzárendelés szétválasztható, anélkül hogy minden személyes adat azonnal törlődne.\n\nFelfüggesztés: a bejelentkezés és az app-hozzáférés ideiglenesen korlátozható; az adatok általában megmaradnak.\n\nFióktörlés: a ViaNexis Driver fiók és a törölhető személyes adatok megszüntetésére irányuló kérelem.\n\nAz alkalmazás eltávolítása a telefonról nem törli a szerveren tárolt fiókot és adatokat.",
      },
      {
        id: "what-may-remain",
        title: "Mi törölhető, és mi maradhat meg?",
        body: "Törölhető vagy anonimizálható lehet a fiókhoz tartozó belépési és profiladat, ha nincs más jogalap a megőrzésre. Megmaradhatnak jogszabály, biztonság, csalásmegelőzés, audit, szerződés vagy jogi igény miatt szükséges adatok. A megőrzött adatokhoz való hozzáférés korlátozott. A cég saját jogi kötelezettsége miatt tárolt fuvarokmányokra külön szabály vonatkozhat.",
      },
      {
        id: "identity-verification",
        title: "Személyazonosság-ellenőrzés",
        body: "A kérelem után személyazonosság-ellenőrzés történhet. Az első űrlapon ne adjon meg jelszót, PIN-kódot vagy teljes személyi okmányt. A lezárásról a kérelmező tájékoztatást kap a megadott kapcsolattartási címen.",
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
