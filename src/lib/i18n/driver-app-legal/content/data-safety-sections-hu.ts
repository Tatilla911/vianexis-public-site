import type { LegalSection } from "../types";

export const dataSafetySectionsHu: LegalSection[] = [
  {
    id: "purpose",
    title: "1. A dokumentum célja",
    body: "Ez a dokumentum közérthető összefoglaló a ViaNexis Driver alkalmazás adatkezelési és biztonsági jellemzőiről. Kiegészíti, de nem helyettesíti az Adatvédelmi tájékoztatót. Nem a Google Play Data safety űrlapjának hivatalos másolata, és nem minősül az alkalmazásbolt saját nyilatkozatának.",
  },
  {
    id: "app-and-version",
    title: "2. Érintett alkalmazás és verzió",
    body: "Érintett alkalmazás: ViaNexis Driver. A jelen összefoglaló a nyilvános jogi csomagban megjelölt dokumentumverzióhoz és a jelenleg terjesztett alkalmazásfunkciók kódauditjához igazodik. A funkciók környezetenként eltérhetnek. Szolgáltató: Turul Atilla egyéni vállalkozó, a ViaNexis márkanév üzemeltetője. A ViaNexis önálló jogi személyként nem szerepel.",
  },
  {
    id: "data-overview",
    title: "3. Milyen adatokat kezelhet az alkalmazás",
    body: "Az alkalmazás a szolgáltatás működtetéséhez fiók-, profil-, fuvar-, dokumentum-, üzenet- és eszközadatokat kezelhet. Egyes adatok csak akkor keletkeznek, ha a felhasználó engedélyt ad vagy funkciót használ (helyadat, kamera, mikrofon, értesítések). Automatikus eredmény (OCR, fordítás, beszédfelismerés) segédjellegű lehet.",
  },
  {
    id: "account-and-profile",
    title: "4. Fiók- és profiladatok",
    body: "Kezelhető: név, e-mail, telefonszám, céges hozzárendelés, sofőrprofil és bejelentkezési munkamenet-adatok. A hitelesítési tokenek az eszközön védett tárolóban tarthatók. A helyi PIN sózott hash formában, nem nyílt szövegként tárolható. A szerveroldali jelszókezelés részleteit az Adatvédelmi tájékoztató ismerteti.",
  },
  {
    id: "trip-and-company-data",
    title: "5. Fuvar- és céges adatok",
    body: "Kezelhető: fuvarazonosítók, státuszok, megállók, átvételi/kiszállítási adatok, jármű- és pótkocsiadatok, rendszám, céges beállítások és a fuvarhoz kapcsolódó operatív metaadatok. Ezek a fuvarozó cég folyamatainak támogatását szolgálják. A ViaNexis technológiai szolgáltató, nem fuvarozó.",
  },
  {
    id: "location",
    title: "6. Helyadat",
    body: "Az Android manifeszt a jelenlegi audit szerint ACCESS_FINE_LOCATION és ACCESS_COARSE_LOCATION engedélyeket deklarál; ACCESS_BACKGROUND_LOCATION nincs deklarálva. A térképi saját pozíció megjelenítése when-in-use jellegű, helyi megjelenítésre tervezett.\n\nEgyes funkciók — például fuvarhoz kapcsolódó helyrögzítés, ellenőrzőlista, aláírás-metaadat vagy céges riasztás — a felhasználói művelet során helyadatot rögzíthetnek, és az adat a háttérrendszerbe vagy más, a felhasználó által indított csatornára kerülhet. A helyadat pontatlan lehet. Az engedély visszavonása korlátozhatja a helyfüggő funkciókat.",
  },
  {
    id: "camera-photos-videos",
    title: "7. Kamera, fotó és videó",
    body: "Kamera- és médiatár-hozzáférés fuvarhoz, dokumentumhoz, kárrögzítéshez vagy melléklethez használható. A tartalom feltöltéskor a háttérrendszerbe kerülhet. Vezetés közben veszélyes módon felvételt készíteni tilos. A funkció jellemzően opcionális, a konkrét feladattól függően kötelező lehet a cég folyamata szerint.",
  },
  {
    id: "documents-and-signatures",
    title: "8. Dokumentumok és aláírások",
    body: "Feltölthető dokumentumok és rögzített aláírások a fuvar bizonyítását támogatják. Időbélyeg és opcionális helyadat kapcsolódhat. A digitális másolat nem feltétlenül eredeti okirat, és a rögzített aláírás nem automatikusan minősített elektronikus aláírás. Részletek: Felhasználási feltételek és Felelős használat.",
  },
  {
    id: "messages-and-notifications",
    title: "9. Üzenetek és értesítések",
    body: "Az alkalmazáson belüli üzenetek és mellékletek operatív kommunikációt szolgálnak, és a háttérrendszerben tárolhatók. Az értesítések operatív jellegűek lehetnek. A jelenlegi termékcél szerint nincs marketing push. Értesítés késhet vagy elmaradhat; nem sürgősségi segélyhívó csatorna.",
  },
  {
    id: "push-token",
    title: "10. Push token",
    body: "Ha a push az adott buildben és környezetben aktív, az alkalmazás Firebase Cloud Messaging (FCM) segítségével eszköz-/telepítéshez kötött push tokent kezelhet, és a tokent a háttérrendszernek regisztrálhatja. A token a kézbesítéshez szükséges. Az értesítési engedély a rendszerbeállításokban visszavonható. Zárolási képernyőn adatvédelmi szempontból óvatos előnézet használható a helyi megjelenítési útvonalon.",
  },
  {
    id: "ocr-on-device",
    title: "11. OCR és helyi feldolgozás",
    body: "Egyes dokumentum-segédfunkciók Google ML Kit szövegfelismerést használhatnak az eszközön. Az OCR félreolvashat adatot. Az OCR-eredmény önmagában nem hiteles másolat. Emberi ellenőrzés szükséges. Felhő-OCR vendort a jelenlegi audit nem állít aktívként pusztán a függőség miatt.",
  },
  {
    id: "audio-and-speech",
    title: "12. Hang és beszédfelismerés",
    body: "Ha a felhasználó mikrofonengedélyt ad, beszédfelismerés vagy hangrögzítés segítheti a bevitelt. A felismerés az operációs rendszer vagy kapcsolódó szolgáltatás útján történhet, és egyes útvonalakon hang a háttérrendszerbe is feltöltődhet átírás céljából. A funkció opcionális. iOS környezetben a használati leírások teljessége külön ellenőrizendő a kiadás előtt.",
  },
  {
    id: "device-and-diagnostics",
    title: "13. Eszköz- és diagnosztikai adatok",
    body: "Kezelhető: platformjelölés, nyelv, időzóna, push-eszközregisztrációhoz kapcsolódó azonosítók, valamint biztonsági szempontból releváns események. A jelenlegi kódaudit alapján a terjesztett alkalmazáscsomagban nem azonosítottunk külön Crashlytics, Sentry vagy analytics SDK-t. Helyi hibakeresési naplózás fejlesztői környezetben előfordulhat.",
  },
  {
    id: "third-party-providers",
    title: "14. Harmadik fél szolgáltatók",
    body: "A szolgáltatás nyújtásához adatfeldolgozók vehetők igénybe, például hoszting, adatbázis- és fájltárolás, valamint push-kézbesítés (FCM, adott esetben APNs). Térképcserép-, fordítási vagy egyéb külső szolgáltató csak akkor minősül aktívnak, ha az adott környezetben ténylegesen engedélyezett. A Google Play Data safety „megosztás” fogalma eltérhet a hétköznapi megosztástól; a szolgáltatói besorolás jogi és üzemeltetői döntést igényel.",
  },
  {
    id: "data-sharing",
    title: "15. Adatmegosztás",
    body: "Adatok a fuvarozó cég jogosult felhasználóival a jogviszony és a funkció szerint megoszthatók. Hatósági vagy partneri megosztás csak megfelelő jogalap vagy céges döntés alapján történhet. Nem állítjuk, hogy „semmilyen adatot nem osztunk meg”, és nem állítjuk az adatok eladását vagy hirdetési profilalkotást a jelenlegi audit alapján. Részletek: Adatvédelmi tájékoztató.",
  },
  {
    id: "encryption-and-security",
    title: "16. Titkosítás és biztonság",
    body: "Az adatátvitel TLS-kapcsolaton keresztül történik, ha a szolgáltatás elérhető és megfelelően HTTPS-re van konfigurálva. Nem állítjuk, hogy minden build és minden mellékútvonal minden körülmény között kizárólag titkosított csatornát használ.\n\nAz eszközön a hitelesítési tokenek és a helyi PIN-hash flutter_secure_storage segítségével, Androidon encryptedSharedPreferences opcióval védhetők. Nem állítjuk, hogy minden helyben tárolt dokumentum vagy várakozási sor at-rest titkosított. Nem állítunk független biztonsági felülvizsgálatot vagy feltörhetetlenséget.",
  },
  {
    id: "offline-storage",
    title: "17. Offline tárolás",
    body: "Egyes adatok és feltöltési sorok ideiglenesen az eszközön maradhatnak (például SharedPreferences és alkalmazásfájlok). A szinkronizáció késhet vagy sikertelen lehet. Az alkalmazás törlése helyi adatvesztést okozhat anélkül, hogy a szerveroldali fiók törlődne.",
  },
  {
    id: "retention",
    title: "18. Megőrzés",
    body: "A megőrzési időket a szolgáltatás célja, a fuvarozó cég kötelezettségei és az alkalmazandó jog határozza meg. Ezen az oldalon nem adunk meg kitalált, konkrét napokban kifejezett megőrzési határidőket. Részletek: Adatvédelmi tájékoztató.",
  },
  {
    id: "deletion-and-user-control",
    title: "19. Törlés és felhasználói kontroll",
    body: "A törlési kérelmeket ellenőrzött folyamatban kezeljük. Az alkalmazás eltávolítása, a kijelentkezés és a cégtől való leválasztás nem egyenlő a végleges fióktörléssel. A kérelem nem indít azonnali, automatikus teljes adattörlést.\n\nFiók és kapcsolódó adatok törlésének kérése:\nhttps://vianexis.eu/hu/driver-app/account-deletion\n\nAdatvédelmi kérelem űrlap:\nhttps://vianexis.eu/hu/privacy-request\n\nOperációs rendszer engedélyei (hely, kamera, mikrofon, értesítés) a készülék beállításaiban kezelhetők.",
  },
  {
    id: "children",
    title: "20. Gyermekek",
    body: "A ViaNexis Driver szakmai sofőralkalmazás. Nem gyermekeknek szóló szolgáltatás, és nem irányul 13 év alatti felhasználókra. Tudatos gyermekadat-gyűjtést nem végzünk.",
  },
  {
    id: "play-data-safety-relation",
    title: "21. Google Play Data Safety kapcsolat",
    body: "A Google Play Data safety adatlapját mindig a kiadott ViaNexis Driver alkalmazásverzió tényleges engedélyei, SDK-i és adatfolyamai alapján kell értelmezni. Ez az oldal nem a Play űrlap, nem jelenti a Google jóváhagyását, és nem helyettesíti az áruházi nyilatkozatot.",
  },
  {
    id: "contact",
    title: "22. Kapcsolat",
    body: "Adatvédelem: privacy@vianexis.eu\nTámogatás: support@vianexis.eu\nBiztonság: security@vianexis.eu\nJogi: legal@vianexis.eu\nWeb: https://vianexis.eu",
  },
  {
    id: "final-provisions",
    title: "23. Záró rendelkezések",
    body: "Kapcsolódó dokumentumok:\nAdatvédelmi tájékoztató: https://vianexis.eu/hu/privacy\nFelhasználási feltételek: https://vianexis.eu/hu/terms\nFelelős használat: https://vianexis.eu/hu/disclaimers\nFióktörlés: https://vianexis.eu/hu/driver-app/account-deletion\n\nEltérés esetén az Adatvédelmi tájékoztató és az alkalmazandó jog irányadó. A dokumentum hivatalos magyar és angol változatban érhető el.",
  },
];
