import type { LegalContent } from "../legal-types";

export const legalCs: LegalContent = {
  versionBadge: "Verze interního testování – probíhá přezkum právního experta",
  privacy: {
    title: "Oznámení o ochraně osobních údajů — verze pro interní testování",
    intro: "Toto upozornění platí během interního testování a přípravné fáze aplikace ViaNexis Driver a související platformy. Služba není veřejným stažením z Obchodu Play – probíhá příprava na interní testování Google Play. Konečné komplexní zásady ochrany osobních údajů budou zveřejněny po právní kontrole.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Správce údajů",
      body: "ViaNexis — vianexis.eu. Kontakt pro ochranu osobních údajů: info@vianexis.eu",
    },
    scope: {
      title: "Rozsah",
      body: "Toto oznámení se týká mobilní aplikace ViaNexis Driver, souvisejících pracovních postupů řidiče a cesty a webového kontaktního formuláře. Administrátorský a dispečerský portál společnosti podléhají samostatným smluvním podmínkám a podmínkám ochrany osobních údajů.",
    },
    dataCategories: {
      title: "Údaje, které zpracováváme",
      items: [
        "Údaje o účtu a kontaktní údaje: jméno, e-mail, telefon, společnost, role, země.",
        "Údaje o profilu řidiče: identifikátory, role, jazyková nastavení, oprávnění.",
        "Údaje o cestě: ID cesty, stav, zastávky, časová razítka, metadata.",
        "Dokumenty: CMR, dodací listy, faktury, fotografie, skeny, digitální podpisy.",
        "Zprávy a upozornění: komunikace a výstrahy spojené s výletem.",
        "Umístění: pouze s povolením uživatele a při používání (při používání), pokud je funkce aktivní.",
        "Metadata zařízení a relace: typ zařízení, verze operačního systému, verze aplikace, identifikátory relace.",
        "Diagnostika a protokoly: technické protokoly a chybová hlášení – pokud je povoleno.",
        "Paleta a balení si vyměňují data: typ, množství, nedostatek, poškození, poznámky.",
        "ADR / údaje o používání celního pomocníka: vyhledávání, pohledy – nikoli oficiální rozhodnutí.",
        "Oprávnění k oznámení a budoucí push token: produkční push (FCM) je samostatná backendová závislost."
      ],
    },
    purposes: {
      title: "Účely zpracování",
      items: [
        "Správa pracovních postupů na cestách a dokumentování výkonu.",
        "Správa dokumentů, podpisy a sestavení balíčku důkazů.",
        "Komunikace a provozní upozornění spojená s jízdou.",
        "Zabezpečení, audit a sledovatelnost.",
        "Kontrolovaný přístup k podpoře auditovatelným způsobem.",
        "Předcházení a dokumentování právních a obchodních sporů.",
        "Zlepšení provozu aplikace a odstraňování problémů.",
        "Interní testování, pilotní testování a hodnocení přístupu."
      ],
    },
    sharing: {
      title: "Sdílení dat",
      items: [
        "Zaměstnavatel / přepravní společnost a oprávnění uživatelé admin/dispečer — na rozsah nájemce.",
        "Vlastní jízda a doklady řidiče podle firemních pravidel.",
        "Podpora autorizované platformy pouze s auditovaným, omezeným a oprávněným přístupem.",
        "Orgány nebo partneři pouze na základě právního základu, smlouvy nebo rozhodnutí společnosti.",
        "AI/OCR/poskytovatel překladů pouze prostřednictvím budoucí integrace řízené backendem, pokud je použita – s kontrolou člověkem.",
        "Osobní údaje neprodáváme. Žádný marketingový tlak."
      ],
    },
    rights: {
      title: "Vaše práva",
      items: [
        "Přístup k vašim datům — prostřednictvím firemního administrátora nebo kanálu podpory.",
        "Oprava nepřesných údajů.",
        "Výmaz tam, kde je to ze zákona možné a firemní procesy to umožňují.",
        "Námitka nebo omezení tam, kde je to právně odůvodněné.",
        "Přenositelnost údajů tam, kde to umožňují platné zákony.",
        "Stížnost u dozorového úřadu.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Oznámení",
      body: "Aplikace využívá provozní upozornění – nikoli marketingový tlak. Text na obrazovce uzamčení je ve výchozím nastavení bezpečný. Produkční push (FCM/APNs) a manipulace s tokeny zařízení jsou závislé na back-endu – mohou být částečné nebo neaktivní během interního testování. Oprávnění k oznámení je volbou uživatele.",
    },
    location: {
      title: "Umístění",
      body: "Poloha je zpracovávána pouze se souhlasem uživatele a při používání (při používání), pokud je funkce aktivní – pro účely mapy, vlastní polohy a evidence cesty. Žádné sledování na pozadí v aktuálním stavu. Lokalita nezaručuje soulad s trasou ani právní soulad.",
    },
    importantNotices: {
      title: "Důležitá upozornění",
      items: [
        "AI, OCR a automatický překlad jsou pomocné nástroje – vyžaduje se kontrola člověkem.",
        "ADR informace jsou pomocníkem — nenahrazují oficiální zdroje ani legislativu.",
        "ViaNexis není certifikovaná platforma eFTI.",
        "Nejedná se o nouzovou službu nebo službu SOS.",
        "Digitální dokumenty nemají automaticky právní důkazní sílu.",
        "Služba je v interním testování/přípravě – nejedná se o veřejný živý produkční systém."
      ],
    },
    dataContact: {
      title: "Kontakt pro ochranu osobních údajů",
      body: "Otázky k ochraně osobních údajů: info@vianexis.eu. Konečný kontakt na správce se objeví ve zveřejněném oznámení.",
    },
    playUrl: "Stabilní adresa URL ochrany soukromí Play Console: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Podmínky použití — interní testovací verze",
    intro: "Tyto podmínky platí během interního testování a pilotní fáze platformy ViaNexis. Služba není veřejným produktem Obchodu Play – probíhá příprava na interní testování Google Play. Konečné podmínky budou zveřejněny po právní kontrole.",
    sections: [
      {
        title: "Povaha služby",
        body: "ViaNexis poskytuje dopravním společnostem digitální dopravní důkazy a platformu pro provoz řidičů. eFTI-ready základ — není certifikovaná eFTI platforma. Neslibuje přijetí autority v každé zemi.",
      },
      {
        title: "Interní testování",
        body: "Přístup je řízen — prostřednictvím pilotního nebo interního testování. Nejedná se o automatickou veřejnou registraci. Backend, push notifikace a některé integrace se připojují postupně.",
      },
      {
        title: "Odpovědnost uživatele",
        body: "Řidič a společnost jsou odpovědní za cestu, doklady, ADR a dodržování celních předpisů. Aplikace podporuje dokumentaci – nenahrazuje právní poradenství, odborníky ADR ani úřady.",
      },
      {
        title: "Dostupnost",
        body: "Během interního testování se může doba provozuschopnosti a funkce lišit. Konkrétní SLA platí pouze na základě smlouvy.",
      },
      {
        title: "Omezení odpovědnosti",
        body: "ViaNexis neslibuje automatickou právní důkazní sílu, bezchybný OCR/AI/překlad, pohotovostní služby nebo připravenost produkčního push, pokud je stále závislá na backendu.",
      }
    ],
  },
  legalNotice: {
    title: "Právní upozornění — verze pro interní testování",
    intro: "Tato stránka popisuje interní testování a stav přípravy platformy ViaNexis. Nenahrazuje úplnou právní dokumentaci nebo smluvní podmínky.",
    sections: [
      {
        title: "Povaha platformy",
        body: "Digitální evidence přepravy, správa dokumentů, zasílání zpráv, upozornění a řízení společnosti v jednom systému. eFTI-ready základ — není certifikovaná eFTI platforma.",
      },
      {
        title: "Stav interního testování",
        body: "Access is currently available through a controlled pilot program. No public Play Store download.",
      },
      {
        title: "Omezení odpovědnosti",
        body: "Neslibujeme akceptaci autorit, automatickou právní důkazní sílu, bezchybný AI/OCR/překlad, pohotovostní služby ani plnou připravenost produkčního push.",
      },
      {
        title: "Kontakt",
        body: "Právní otázky a otázky ochrany soukromí: info@vianexis.eu",
      }
    ],
    relatedDocs: "Související dokumenty",
  },
  disclaimersPage: {
    title: "Odpovědné použití — vyloučení odpovědnosti",
    intro: "Níže uvedené texty popisují důležité limity použití platformy. Verze pro interní testování — nenahrazuje právní poradenství.",
    items: [
      {
        id: "adr",
        title: "ADR — odpovědné použití",
        body: "ADR a data tunelu jsou pomocné informace. Oficiální zdroje, tabulky a aktuální místní pravidla musí být vždy ověřeny. ViaNexis nenahrazuje legislativu, školení ADR, úředníka generálního ředitelství společnosti ani rozhodnutí orgánů.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR a překlad",
        body: "Pomocné nástroje – nutná kontrola člověkem. Původní dokument a zpráva zůstávají primární. Nejedná se o právní poradenství ani ověřený překlad.",
      },
      {
        id: "oznámení",
        title: "Oznámení a push",
        body: "Provozní upozornění – nikoli marketingový tlak. Ve výchozím nastavení je obrazovka uzamčení bezpečná pro ochranu soukromí. Produkční push (FCM/APNs) je backendová závislost – nemusí být aktivní během interního testování.",
      },
      {
        id: "truck-map",
        title: "Mapa nákladních vozidel / data komunity",
        body: "Mapa a trasa pro provozní orientaci — nezaručuje zákonná omezení, povolení ani přesnost dat komunity. Nenahrazuje oficiální navigaci.",
      },
      {
        id: "paleta",
        title: "Evidence výměny palet/obalů",
        body: "Záznam podporuje dokumentaci sporů. Část důkazů PDF v dokončeném balíčku cesty není ve všech případech plně připravena. Nerozhoduje spory.",
      },
      {
        id: "legal-validity",
        title: "Právní platnost / dokumenty",
        body: "Digitální dokumenty a podpisy nemají automaticky právní důkazní sílu. Přijetí se liší podle země a zákazníka.",
      },
      {
        id: "efti",
        title: "eFTI a sdílení pravomocí",
        body: "ViaNexis není certifikovaná platforma eFTI. Neslibuje přijetí autority v každé zemi. eFTI-základem připravenosti je technická připravenost – nikoli certifikát.",
      }
    ],
  },
};
