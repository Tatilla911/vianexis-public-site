import type { LegalContent } from "../legal-types";

export const legalHu: LegalContent = {
  versionBadge:
    "Belső tesztelési verzió — jogi szakértői felülvizsgálat folyamatban",
  privacy: {
    title: "Adatvédelmi tájékoztató — belső tesztelési verzió",
    intro:
      "Ez a tájékoztató a ViaNexis Driver sofőralkalmazás és a kapcsolódó platform belső tesztelési / előkészítési fázisában érvényes. A szolgáltatás még nem nyilvános Play Store letöltés — a Google Play belső tesztelés előkészítése folyamatban. A végleges, teljes körű adatvédelmi szöveg jogi felülvizsgálat után kerül publikálásra.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Adatkezelő",
      body: "ViaNexis — vianexis.eu. Adatvédelmi kapcsolat: info@vianexis.eu",
    },
    scope: {
      title: "Hatály",
      body: "Ez a tájékoztató a ViaNexis Driver mobilalkalmazást, a kapcsolódó sofőr- és fuvarfolyamatokat, valamint a webes kapcsolatfelvételi űrlapot érinti. A céges admin és diszpécser portál külön szerződéses és adatkezelési keretben értendő.",
    },
    dataCategories: {
      title: "Kezelt adatok",
      items: [
        "Fiók- és kapcsolattartási adatok: név, e-mail, telefon, cég, szerepkör, ország.",
        "Sofőr profiladatok: azonosítók, munkakör, nyelvi beállítások, jogosultságok.",
        "Fuvaradatok: fuvar azonosítók, státusz, megállók, időpontok, metaadatok.",
        "Dokumentumok: CMR, szállítólevél, számla, fotók, szkennek, digitális aláírások.",
        "Üzenetek és értesítések: fuvarhoz kötött kommunikáció, értesítési események.",
        "Helyadat: csak felhasználói engedéllyel és használat közben (when-in-use), ha a funkció aktív.",
        "Eszköz- és munkamenet metaadatok: eszköztípus, OS verzió, app verzió, session azonosítók.",
        "Hibakeresési és naplóadatok: technikai logok, hibaüzenetek — ha engedélyezett.",
        "Raklap- és göngyölegcsere adatok: típus, mennyiség, hiány, sérülés, megjegyzés.",
        "ADR / vám segédadatok használati adatai: keresések, megtekintések — nem hivatalos döntés.",
        "Értesítési engedély és jövőbeli push token: production push (FCM) bekötése külön dependency.",
      ],
    },
    purposes: {
      title: "Adatkezelés céljai",
      items: [
        "Fuvarfolyamat kezelése és teljesítés dokumentálása.",
        "Dokumentumkezelés, aláírások és bizonyítékcsomag összeállítása.",
        "Fuvarhoz kötött kommunikáció és operatív értesítések.",
        "Biztonság, audit és visszakövethetőség.",
        "Kontrollált support hozzáférés auditált módon.",
        "Jogi és üzleti viták megelőzése, dokumentálás támogatása.",
        "Alkalmazás működésének javítása, hibaelhárítás.",
        "Belső tesztelés, pilot és hozzáférés-értékelés.",
      ],
    },
    sharing: {
      title: "Adatmegosztás",
      items: [
        "A munkáltató / fuvarozó cég és annak jogosult admin/diszpécser felhasználói — tenant scope szerint.",
        "A sofőr saját fuvar- és dokumentumadatai a cég szabályai szerint.",
        "Jogosult platform support csak auditált, korlátozott, indokolt hozzáféréssel.",
        "Hatóság vagy partner csak jogalap, szerződés vagy cég döntése szerint.",
        "AI/OCR/fordítás szolgáltató csak backend-controlled jövőbeli integráció esetén, ha alkalmazott — emberi ellenőrzés mellett.",
        "Nem értékesítjük a személyes adatokat. Nincs marketing push.",
      ],
    },
    rights: {
      title: "Érintetti jogok",
      items: [
        "Hozzáférés a saját adatokhoz — a cég adminon vagy support csatornán keresztül.",
        "Helyesbítés pontatlan adatok esetén.",
        "Törlés, ha jogilag lehetséges és a cég folyamatai lehetővé teszik.",
        "Tiltakozás vagy korlátozás, ha jogalap indokolja.",
        "Adathordozhatóság, ha alkalmazandó jog szerint elérhető.",
        "Panasz a felügyeleti hatóságnál.",
        "Kapcsolat: info@vianexis.eu",
      ],
    },
    notifications: {
      title: "Értesítések",
      body: "Az alkalmazás operatív értesítéseket használ — nem marketing push. A zárolási képernyőn alapból privacy-safe szöveg jelenik meg. A production push (FCM/APNs) és device token kezelés backend dependency — belső tesztelésben részben vagy teljesen nem éles. Az értesítési engedély a felhasználó döntése.",
    },
    location: {
      title: "Helyadat",
      body: "Helyadat csak felhasználói engedéllyel és használat közben (when-in-use) kerül kezelésre, ha a funkció aktív — térkép, saját pozíció, fuvarbizonyíték céljából. Nincs háttérkövetés a jelenlegi állapot szerint. A helyadat nem garantál útvonal-megfelelést vagy jogszabályi megfelelést.",
    },
    importantNotices: {
      title: "Fontos tudnivalók",
      items: [
        "AI, OCR és automatikus fordítás segédeszköz — emberi ellenőrzés szükséges.",
        "ADR információ segédlet — nem helyettesíti a hivatalos forrást vagy jogszabályt.",
        "A ViaNexis nem minősített eFTI platform.",
        "Nem vészhelyzeti vagy SOS szolgáltatás.",
        "A digitális dokumentum nem jelent automatikus jogi bizonyító erőt.",
        "A szolgáltatás belső tesztelés / előkészítés alatt áll — nem nyilvános éles rendszer.",
      ],
    },
    dataContact: {
      title: "Adatvédelmi kapcsolat",
      body: "Adatvédelmi kérdések: info@vianexis.eu. A végleges adatkezelői elérhetőség a publikált tájékoztatóban szerepel.",
    },
    playUrl: "Stabil Play Console privacy URL: https://vianexis.eu/hu/privacy",
  },
  terms: {
    title: "Felhasználási feltételek — belső tesztelési verzió",
    intro:
      "Ezek a feltételek a ViaNexis platform belső tesztelési és pilot fázisában érvényesek. A szolgáltatás nem nyilvános Play Store termék — a Google Play belső tesztelés előkészítése folyamatban. A végleges feltételek jogi felülvizsgálat után kerülnek publikálásra.",
    sections: [
      {
        title: "Szolgáltatás jellege",
        body: "A ViaNexis digitális fuvarbizonyítékot és sofőrplatformot nyújt fuvarozó cégeknek. A platform eFTI-ready foundation — nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban.",
      },
      {
        title: "Belső tesztelés",
        body: "A hozzáférés kontrollált — pilot vagy belső tesztelési meghívó alapján. Nem automatikus nyilvános regisztráció. A backend, push értesítések és egyes integrációk fokozatosan kerülnek bekötésre.",
      },
      {
        title: "Felhasználói felelősség",
        body: "A sofőr és a cég felelős a fuvar, dokumentum, ADR és vám megfelelés ellenőrzéséért. Az alkalmazás segít a dokumentálásban — nem helyettesíti a jogi tanácsadást, ADR szakértőt vagy hatóságot.",
      },
      {
        title: "Elérhetőség",
        body: "Belső tesztelésben az üzemidő és funkciók változhatnak. Konkrét SLA csak szerződésben értendő.",
      },
      {
        title: "Felelősségkorlátozás",
        body: "A ViaNexis nem ígér automatikus jogi bizonyító erőt, hibátlan OCR/AI/fordítást, vészhelyzeti szolgáltatást vagy production push készenlétet, ha az még backend dependency.",
      },
    ],
  },
  legalNotice: {
    title: "Jogi információk — belső tesztelési verzió",
    intro:
      "Ez az oldal a ViaNexis platform belső tesztelési és előkészítési státuszát ismerteti. Nem helyettesíti a teljes jogi dokumentációt vagy szerződéses feltételeket.",
    sections: [
      {
        title: "Platform jellege",
        body: "Digitális fuvarbizonyíték, dokumentumkezelés, üzenetek, értesítések és céges irányítás egy rendszerben. eFTI-ready foundation — nem minősített eFTI platform.",
      },
      {
        title: "Belső tesztelési státusz",
        body: "Access is currently available through a controlled pilot program. No public Play Store download.",
      },
      {
        title: "Felelősségkorlátozás",
        body: "Nem ígérünk hatósági elfogadást, automatikus jogi bizonyító erőt, hibátlan AI/OCR/fordítást, vészhelyzeti szolgáltatást vagy teljes production push készenlétet.",
      },
      {
        title: "Kapcsolat",
        body: "Jogi és adatvédelmi kérdések: info@vianexis.eu",
      },
    ],
    relatedDocs: "Kapcsolódó dokumentumok",
  },
  disclaimersPage: {
    title: "Felelős használat — disclaimerek",
    intro:
      "Az alábbi szövegek a platform használatának fontos korlátait írják le. Belső tesztelési verzió — nem helyettesítik a jogi tanácsadást.",
    items: [
      {
        id: "adr",
        title: "ADR — felelős használat",
        body: "ADR és alagút adatok segédinformációk. A hivatalos forrás, táblázás és aktuális helyi szabály mindig ellenőrizendő. A ViaNexis nem helyettesíti a jogszabályt, ADR oktatást, vállalati veszélyes áru felelőst vagy hatósági döntést.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR és fordítás",
        body: "Segédeszköz — emberi ellenőrzés szükséges. Az eredeti dokumentum és üzenet marad elsődleges. Nem jogi tanács és nem minősített fordítás.",
      },
      {
        id: "notifications",
        title: "Értesítések és push",
        body: "Operatív értesítések — nem marketing push. Lockscreen privacy-safe alapértelmezés. Production push (FCM/APNs) backend dependency — belső tesztelésben nem feltétlenül éles.",
      },
      {
        id: "truck-map",
        title: "Tehergépkocsi térkép / közösségi adat",
        body: "Térkép és útvonal operatív orientáció — nem garantálja a jogszabályi korlátozások, engedélyek vagy közösségi adatok pontosságát. Nem hivatalos navigáció helyett.",
      },
      {
        id: "pallet",
        title: "Raklap / göngyölegcsere bizonyíték",
        body: "A rögzítés támogatja a vitás helyzet dokumentálását. A PDF evidence szekció a lezárt fuvar csomagban még nem minden esetben teljes. Nem dönt vitában.",
      },
      {
        id: "legal-validity",
        title: "Jogi érvényesség / dokumentumok",
        body: "A digitális dokumentum és aláírás nem jelent automatikus jogi bizonyító erőt. Az elfogadás országonként és ügyfelenként eltérhet.",
      },
      {
        id: "efti",
        title: "eFTI és hatósági megosztás",
        body: "A ViaNexis nem minősített eFTI platform. Nem ígér hatósági elfogadást minden országban. Az eFTI-ready foundation technikai felkészültség — nem tanúsítvány.",
      },
    ],
  },
};
