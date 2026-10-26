export const trafficBanEmbedUrl = "https://trafficban.com/plugins/box.html?href=trafficban.com&language=en";
export const truckBanPath = (locale: string) => locale === "hu" ? "/hu/kamionstop" : "/en/truck-restrictions";
export const truckBanCopy = (locale: string) => locale === "hu" ? {
  nav: "Kamionstop", title: "Európai kamionstop – Teherautós közlekedési tilalmak",
  intro: "Ingyenesen elérhető európai tilalmi információk, regisztráció nélkül.",
  source: "Az információ szolgáltatója: TrafficBan.com.",
  disclaimer: "Tájékoztató információ, nem a ViaNexis által jogilag jóváhagyott adat. Indulás előtt ellenőrizd az illetékes hatóság aktuális előírásait. A megjelenítés nem jelent hivatalos partnerséget.",
  privacy: "A külső modul betöltésekor a böngésződ kapcsolódik a TrafficBanhoz és annak hirdetési szolgáltatóihoz. Ezek sütiket használhatnak és böngészési adatokat kezelhetnek. A modul angol nyelvű.",
  load: "Külső tartalom engedélyezése és betöltése", hide: "Külső tartalom bezárása",
  open: "TrafficBan.com megnyitása", fallback: "Ha a lista nem jelenik meg, nyisd meg közvetlenül a szolgáltató oldalát.",
  privacyLink: "TrafficBan adatkezelési tájékoztató", frame: "TrafficBan európai teherautós tilalmak",
} : {
  nav: "Truck restrictions", title: "European Truck Driving Restrictions",
  intro: "Free European truck restriction information. No registration required.",
  source: "Information provider: TrafficBan.com.",
  disclaimer: "Indicative information, not legally approved by ViaNexis. Check current restrictions with the competent authority before departure. Display does not imply an official partnership.",
  privacy: "Loading this external module connects your browser to TrafficBan and its advertising providers. They may use cookies and process browsing data. The widget is in English.",
  load: "Allow and load external content", hide: "Close external content",
  open: "Open TrafficBan.com", fallback: "If the list does not appear, open the provider website directly.",
  privacyLink: "TrafficBan privacy information", frame: "TrafficBan European truck restrictions",
};
