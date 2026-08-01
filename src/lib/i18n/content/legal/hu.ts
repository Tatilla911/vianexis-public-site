import type { LegalContent } from "../legal-types";

export const legalHu: LegalContent = {
  versionBadge:
    "Tesztelési kiadás – a funkciók és adatkezelési folyamatok a kiadott alkalmazásverzió szerint változhatnak.",
  privacy: {
    title: "Adatvédelmi tájékoztató",
    intro:
      "Ez a tájékoztató a ViaNexis nyilvános weboldalára, a ViaNexis Driver sofőralkalmazásra és a kapcsolódó fuvarfolyamatokra vonatkozó adatkezelés áttekintése. A sofőralkalmazás részletes, teljes adatvédelmi szabályzata a /privacy oldalon érhető el. A jelen szöveg a webhely és az alkalmazás közös, felhasználóbarát áttekintése.",
    lastUpdated: "2026-07-31",
    controller: {
      title: "Adatkezelő",
      body: "Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője. Székhely: 5093 Vezseny, Földvári utca 22., Magyarország. Adószám: 79264161-1-36. Közösségi adószám: HU79264161. Egyéni vállalkozói nyilvántartási szám: 61994454. Adatvédelmi kapcsolat: privacy@vianexis.eu",
    },
    scope: {
      title: "Hatály",
      body: "Ez a tájékoztató a ViaNexis Driver mobilalkalmazást, a kapcsolódó sofőr- és fuvarfolyamatokat, valamint a webes kapcsolatfelvételi és hozzáférés-igénylő űrlapokat érinti. A céges admin és diszpécser portál külön szerződéses és adatkezelési keretben értendő. A sofőralkalmazás részletes szabályzata a /privacy oldalon található.",
    },
    dataCategories: {
      title: "Kezelt adatok",
      items: [
        "Fiók- és kapcsolattartási adatok: név, e-mail, telefon, cég, szerepkör, ország.",
        "Hozzávetőleges ország/régió a hálózati edge metaadatból, kizárólag a nyelv és a helyi tartalom kiválasztásához (nem állampolgárság-meghatározás). A nyelvet bármikor kézzel felülírhatja.",
        "Sofőr profiladatok: azonosítók, munkakör, nyelvi beállítások, jogosultságok.",
        "Fuvaradatok: fuvar azonosítók, státusz, megállók, időpontok, metaadatok.",
        "Dokumentumok: CMR, szállítólevél, számla, fotók, szkennek, digitális aláírások.",
        "Üzenetek és értesítések: fuvarhoz kötött kommunikáció, értesítési események.",
        "Helyadat: csak felhasználói engedéllyel és használat közben (when-in-use), ha a funkció az adott alkalmazásverzióban aktív.",
        "Eszköz- és munkamenet metaadatok: eszköztípus, OS verzió, app verzió, session azonosítók.",
        "Hibakeresési és naplóadatok: technikai logok, hibaüzenetek — ha engedélyezett.",
        "Raklap- és göngyölegcsere adatok: típus, mennyiség, hiány, sérülés, megjegyzés.",
        "ADR / vám segédadatok használati adatai: keresések, megtekintések — nem hivatalos döntés.",
        "Értesítési engedély; eszközértesítési token csak akkor, ha az adott alkalmazásverzióban az operatív push értesítés aktív.",
      ],
    },
    purposes: {
      title: "Adatkezelés céljai",
      items: [
        "Nyelv és helyi tartalom kiválasztása hozzávetőleges ország/régió alapján (a felhasználó felülírhatja).",
        "Fuvarfolyamat kezelése és teljesítés dokumentálása.",
        "Dokumentumkezelés, aláírások és bizonyítékcsomag összeállítása.",
        "Fuvarhoz kötött kommunikáció és operatív értesítések.",
        "Biztonság, audit és visszakövethetőség.",
        "Kontrollált support hozzáférés auditált módon.",
        "Jogi és üzleti viták megelőzése, dokumentálás támogatása.",
        "Alkalmazás működésének javítása, hibaelhárítás.",
        "Kontrollált hozzáférés, pilot és szolgáltatásértékelés.",
      ],
    },
    sharing: {
      title: "Adatmegosztás",
      items: [
        "A munkáltató / fuvarozó cég és annak jogosult admin/diszpécser felhasználói — tenant scope szerint.",
        "A sofőr saját fuvar- és dokumentumadatai a cég szabályai szerint.",
        "Jogosult platform support csak auditált, korlátozott, indokolt hozzáféréssel.",
        "Hatóság vagy partner csak jogalap, szerződés vagy cég döntése szerint.",
        "AI/OCR/fordítás szolgáltató csak akkor, ha az adott alkalmazásverzióban ténylegesen alkalmazott — emberi ellenőrzés mellett.",
        "Nem értékesítjük a személyes adatokat. Nincs marketing célú push értesítés.",
      ],
    },
    rights: {
      title: "Érintetti jogok",
      items: [
        "Hozzáférés a saját adatokhoz — közvetlenül a ViaNexis felé a privacy@vianexis.eu címen, illetve a cég adminján vagy support csatornán keresztül.",
        "Helyesbítés pontatlan adatok esetén.",
        "Törlés, ha jogilag lehetséges és a cég folyamatai lehetővé teszik.",
        "Tiltakozás vagy korlátozás, ha jogalap indokolja.",
        "Adathordozhatóság, ha alkalmazandó jog szerint elérhető.",
        "Panasz a felügyeleti hatóságnál (Magyarországon: Nemzeti Adatvédelmi és Információszabadság Hatóság — NAIH).",
        "Kapcsolat: privacy@vianexis.eu",
      ],
    },
    notifications: {
      title: "Értesítések",
      body: "Az alkalmazás operatív értesítéseket használ — nem marketing célú push. A zárolási képernyőn alapból adatvédelmi szempontból óvatos szöveg jelenik meg. Push értesítés operatív riasztásokhoz használható, ha az adott, kiadott alkalmazásverzióban engedélyezett. Eszközértesítési tokent csak akkor kezelünk, ha a push aktív. Az értesítési engedély a felhasználó döntése.",
    },
    location: {
      title: "Helyadat",
      body: "Helyadat csak felhasználói engedéllyel és használat közben (when-in-use) kerül kezelésre, ha a funkció az adott alkalmazásverzióban aktív — térkép, saját pozíció és fuvarbizonyíték céljából. A jelenlegi dokumentált szándék szerint nincs háttérkövetés. A helyengedélyt a készülék beállításaiban bármikor visszavonhatja; visszavonás után a helyfüggő funkciók korlátozottan vagy nem működhetnek. A helyadat nem garantál útvonal-megfelelést vagy jogszabályi megfelelést.",
    },
    importantNotices: {
      title: "Fontos tudnivalók",
      items: [
        "AI, OCR és automatikus fordítás segédeszköz — emberi ellenőrzés szükséges.",
        "ADR információ segédlet — nem helyettesíti a hivatalos forrást vagy jogszabályt.",
        "A ViaNexis nem minősített eFTI platform. A technikai felkészültség nem minősítés.",
        "Nem vészhelyzeti vagy SOS szolgáltatás.",
        "A digitális dokumentum nem jelent automatikus jogi bizonyító erőt.",
        "A funkciók és adatkezelési folyamatok a kiadott alkalmazásverzió szerint változhatnak.",
      ],
    },
    dataContact: {
      title: "Adatvédelmi kapcsolat",
      body: "Adatvédelmi kérdések és joggyakorlás: privacy@vianexis.eu. A sofőralkalmazás részletes adatvédelmi szabályzata: /privacy.",
    },
    playUrl: "Stabil publikus adatvédelmi URL: https://vianexis.eu/hu/privacy",
  },
  terms: {
    title: "Felhasználási feltételek",
    intro:
      "Ezek a feltételek a ViaNexis platform és a ViaNexis Driver sofőralkalmazás használatára vonatkoznak. A szolgáltatás kontrollált hozzáféréssel, pilot vagy meghívás alapján is elérhető lehet. A sofőralkalmazás részletes feltételei a kapcsolódó jogi oldalakon találhatók.",
    sections: [
      {
        title: "Szolgáltatás jellege",
        body: "A ViaNexis digitális fuvarbizonyítékot és sofőrplatformot nyújt fuvarozó cégeknek. A platform technikai felkészültséget biztosít az eFTI irányú folyamatokhoz — ez nem minősítés, és a ViaNexis nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban.",
      },
      {
        title: "Hozzáférés és fiók",
        body: "A hozzáférés kontrollált lehet — pilot, meghívó vagy céges szerződés alapján. A fiók a munkáltató / fuvarozó cég jogosultságai szerint működik. Fióktörlési tájékoztató és kérelem: https://vianexis.eu/hu/driver-app/account-deletion.",
      },
      {
        title: "Felhasználói felelősség",
        body: "A sofőr és a cég felelős a fuvar, dokumentum, ADR és vám megfelelés ellenőrzéséért. Az alkalmazás segít a dokumentálásban — nem helyettesíti a jogi tanácsadást, ADR szakértőt vagy hatóságot.",
      },
      {
        title: "Elfogadható használat",
        body: "A szolgáltatást csak jogszerű, fuvarhoz kötött üzleti célra szabad használni. Tilos a jogosulatlan hozzáférés, a rendszer megsértése, mások adatainak visszaélésszerű kezelése, valamint a marketing vagy egyéb nem operatív célú visszaélés az értesítési funkciókkal.",
      },
      {
        title: "Szellemi tulajdon",
        body: "A ViaNexis márkanév, a szoftver, a dokumentáció és a kapcsolódó anyagok az üzemeltető vagy jogosult licencadók tulajdonát képezik. A használat nem ruház át tulajdonjogot.",
      },
      {
        title: "Elérhetőség",
        body: "A funkciók és az üzemidő a kiadott alkalmazásverziótól és a szerződéses kerettől függően változhatnak. Konkrét rendelkezésre állási vállalás (SLA) csak szerződésben értendő.",
      },
      {
        title: "Felelősségkorlátozás",
        body: "Az alkalmazandó kötelező jogszabályok keretei között a ViaNexis nem ígér automatikus jogi bizonyító erőt, hibátlan OCR/AI/fordítást, vészhelyzeti szolgáltatást, vagy minden országban hatósági elfogadást. A szolgáltatás segédeszköz a dokumentáláshoz és az operatív munkához.",
      },
      {
        title: "Módosítások",
        body: "Ezeket a feltételeket indokolt esetben frissíthetjük. A lényeges változásokról a webhelyen vagy az alkalmazáson keresztül tájékoztatást adunk, ahol ez indokolt.",
      },
      {
        title: "Kapcsolat",
        body: "Általános kapcsolat: info@vianexis.eu. Adatvédelem: privacy@vianexis.eu. Jogi megkeresés: legal@vianexis.eu.",
      },
    ],
  },
  legalNotice: {
    title: "Jogi információk",
    intro:
      "Ez az oldal a ViaNexis platform üzemeltetőjét, jellegét és a kapcsolódó jogi tájékoztatókat ismerteti. Nem helyettesíti a teljes szerződéses feltételeket vagy a sofőralkalmazás részletes adatvédelmi szabályzatát.",
    sections: [
      {
        title: "Üzemeltető",
        body: "Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője. Székhely: 5093 Vezseny, Földvári utca 22., Magyarország. Adószám: 79264161-1-36. Közösségi adószám: HU79264161. Egyéni vállalkozói nyilvántartási szám: 61994454.",
      },
      {
        title: "Platform jellege",
        body: "Digitális fuvarbizonyíték, dokumentumkezelés, üzenetek, értesítések és céges irányítás egy rendszerben. Technikai felkészültség az eFTI irányú folyamatokhoz — nem minősítés; a ViaNexis nem minősített eFTI platform.",
      },
      {
        title: "Hozzáférés",
        body: "A szolgáltatás kontrollált hozzáféréssel és pilot keretében is elérhető lehet. A funkciók a kiadott alkalmazásverzió szerint változhatnak.",
      },
      {
        title: "Felelősségkorlátozás",
        body: "Az alkalmazandó kötelező jogszabályok keretei között nem ígérünk hatósági elfogadást minden országban, automatikus jogi bizonyító erőt, hibátlan AI/OCR/fordítást vagy vészhelyzeti szolgáltatást.",
      },
      {
        title: "Kapcsolat",
        body: "Általános: info@vianexis.eu. Adatvédelem: privacy@vianexis.eu. Jogi: legal@vianexis.eu.",
      },
    ],
    relatedDocs: "Kapcsolódó dokumentumok",
  },
  disclaimersPage: {
    title: "Felelős használat — disclaimerek",
    intro:
      "Az alábbi szövegek a platform használatának fontos korlátait írják le. Nem helyettesítik a jogi tanácsadást. A korlátozások az alkalmazandó kötelező jogszabályok keretei között értendők.",
    items: [
      {
        id: "adr",
        title: "ADR — felelős használat",
        body: "ADR és alagút adatok segédinformációk. A hivatalos forrás, táblázás és aktuális helyi szabály mindig ellenőrizendő. A ViaNexis nem helyettesíti a jogszabályt, ADR oktatást, vállalati veszélyes áru felelőst vagy hatósági döntést. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR és fordítás",
        body: "Segédeszköz — emberi ellenőrzés szükséges. Az eredeti dokumentum és üzenet marad elsődleges. Nem jogi tanács és nem minősített fordítás. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "notifications",
        title: "Értesítések",
        body: "Operatív értesítések — nem marketing célú push. A zárolási képernyő szöveg alapból adatvédelmi szempontból óvatos. Push értesítés operatív riasztásokhoz használható, ha az adott alkalmazásverzióban engedélyezett; eszközértesítési token csak akkor kerül kezelésre, ha a push aktív. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "truck-map",
        title: "Tehergépkocsi térkép / közösségi adat",
        body: "Térkép és útvonal operatív orientáció — nem garantálja a jogszabályi korlátozások, engedélyek vagy közösségi adatok pontosságát. Nem helyettesíti a hivatalos navigációt. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "pallet",
        title: "Raklap / göngyölegcsere bizonyíték",
        body: "A rögzítés támogatja a vitás helyzet dokumentálását. Nem dönt vitában, és nem helyettesíti a cég vagy a felek saját értékelését. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "legal-validity",
        title: "Jogi érvényesség / dokumentumok és aláírások",
        body: "A digitális dokumentum és aláírás nem jelent automatikus jogi bizonyító erőt. Az elfogadás országonként és ügyfelenként eltérhet. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "efti",
        title: "eFTI és hatósági megosztás",
        body: "A ViaNexis nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban. A technikai felkészültség nem minősítés. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "emergency",
        title: "Vészhelyzet",
        body: "A ViaNexis nem vészhelyzeti, SOS vagy hatósági szolgáltatás. Vészhelyzetben mindig a helyi segélyhívó számot (az Európai Unióban: 112) kell hívni. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "navigation",
        title: "Navigáció",
        body: "Az alkalmazásban megjelenő térkép, útvonal vagy pozíció operatív segítség — nem hivatalos navigációs vagy közlekedési hatósági útmutató. A sofőr felelős a KRESZ és a helyi szabályok betartásáért. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
      {
        id: "human-review",
        title: "Emberi ellenőrzés",
        body: "Az automatikus javaslatok, OCR eredmények, fordítások és státuszjelzések emberi ellenőrzést igényelnek. A felhasználó és a cég felelős a végleges döntésekért. A korlátozások az alkalmazandó kötelező jogszabályok keretei között érvényesek.",
      },
    ],
  },
};
