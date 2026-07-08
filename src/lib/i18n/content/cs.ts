import type { SiteContent } from "../types";
import { legalCs } from "./legal/cs";

export const contentCs: SiteContent = {
  meta: {
    title: "ViaNexis Provoz řidičů a firemní přepravy",
    description: "Aplikace pro řidiče, řízení společnosti, správa dokumentů, zasílání zpráv, upozornění a pracovní postupy ve více jazycích v jednom systému. Probíhá příprava interního testování.",
    ogLocale: "cs_CZ",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Vlastnosti",
    driverApp: "Aplikace pro řidiče",
    companyPortal: "Firemní portál",
    documents: "Dokumenty",
    authorityEfti: "Autorita / eFTI",
    security: "Zabezpečení",
    pilot: "Pilotní přístup",
    contact: "Kontakt",
    requestAccess: "Požádejte o přístup",
    menuOpen: "Otevřít nabídku",
  },
  footer: {
    tagline: "Platforma digitální evidence dopravy a provozu řidičů pro dopravní společnosti. eFTI-ready základ — není certifikovaná eFTI platforma.",
    product: "Produkt",
    legal: "Právní",
    legalNotice: "Právní upozornění",
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky použití",
    disclaimers: "Odpovědné používání",
    dataContact: "Kontakt pro ochranu dat",
    copyright: "Nejedná se o certifikovanou platformu eFTI. Neslibuje přijetí autority, automatickou právní důkazní sílu, bezchybné OCR/AI/překlady nebo nouzové/SOS služby. Žádné veřejné stahování z Obchodu Play.",
  },
  hero: {
    title: "ViaNexis — platforma digitální evidence dopravy a provozu řidičů",
    subtitle: "Aplikace pro řidiče, řízení společnosti, správa dokumentů, zasílání zpráv, upozornění a pracovní postupy ve více jazycích v jednom systému.",
    primaryCta: "Kontaktujte nás",
    secondaryCta: "Probíhá příprava interního testování",
    stats: [
      {
        label: "Aplikace pro řidiče",
        value: "Výlet + offline",
      },
      {
        label: "Dokumenty",
        value: "CMR + audit",
      },
      {
        label: "Zasílání zpráv",
        value: "Vícejazyčný",
      },
      {
        label: "Postavení",
        value: "Příprava na interní test",
      }
    ],
  },
  platformStatus: {
    title: "Aktuální stav",
    items: [
      "Probíhá příprava interního testování Google Play – nejedná se o stahování z veřejného obchodu.",
      "Připraveno k vydání aplikace ovladače a probíhá Samsung UAT.",
      "Postupně se připojují produkční backend, push notifikace a integrace partnerů."
    ],
    disclaimer: "ViaNexis netvrdí, že je systém aktivní, certifikovaný nebo oficiálně přijatý v každé zemi.",
  },
  moduleLabels: {
    goal: "Gól",
    appFoundation: "Základ na straně aplikace",
    backendDependency: "Backend / admin závislost",
    important: "Důležité",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikace pro řidiče",
      goal: "Nechte řidiče zpracovávat úkoly, dokumenty a události spojené s jízdou na mobilu – online i offline.",
      appFoundation: "Seznam cest a podrobnosti, nahrávání dokumentů, zachycení podpisu, kontrolní seznamy, protokolování incidentů, offline ukládání a synchronizace, relace chráněná PIN.",
      backendDependency: "Živá API, rozsah nájemce, synchronizace cesty a dokumentů, řešení nastavení společnosti.",
    },
    {
      id: "company-admin",
      title: "Kontrola společnosti / správce",
      goal: "Nechte dopravní společnosti spravovat cesty, uživatele, oprávnění a pracovní postupy z jednoho portálu.",
      appFoundation: "Data a akce na straně řidiče odrážejí pravidla společnosti.",
      backendDependency: "Portál webové společnosti, aplikace pro správu platformy, role, správa cest, požadavky na dokumenty, nastavení firemní výměny.",
    },
    {
      id: "cmr-documents",
      title: "Digitální CMR a dokumenty",
      goal: "Dokumenty spojené s jízdou — CMR, dodací list, faktura, doklady od vozidla a řidiče — spravované strukturovaným způsobem.",
      appFoundation: "Nahrání dokumentu, skenování/fotografování, zadání cesty, úkoly založené na požadavcích, koncept primárního dokumentu.",
      backendDependency: "Ukládání dokumentů, metadata, pravidla pro podpisy, sdílení oprávnění s limity rozsahu.",
      disclaimer: "Digitální dokumenty nemají automaticky právní důkazní sílu. Přijetí se liší podle země a zákazníka.",
    },
    {
      id: "completed-package",
      title: "Hotový zájezdový balíček",
      goal: "Shrňte důkazy o dokončené cestě do exportovatelného balíčku.",
      appFoundation: "Uzavření cesty, místní data a synchronizované události jako základ pro sestavení balíčku.",
      backendDependency: "Dokončeno generování balíčku zájezdu, export PDF, export auditu. Některé sekce (např. paleta/balení PDF) zůstávají závislostmi.",
      disclaimer: "Balíček podporuje dokumentaci; nenahrazuje právní posouzení společnosti ani řízení o zmocnění.",
    },
    {
      id: "messaging-notifications",
      title: "Zprávy a upozornění",
      goal: "Komunikace a upozornění na důležité události řidiče.",
      appFoundation: "Seznam zpráv, vlákna spojená s tripem, základ pro upozornění na straně aplikace. Použitelné pro: novou zprávu, změnu cesty, úkol dokumentu, problém se synchronizací.",
      backendDependency: "Produkční push (FCM/APNs), registrace tokenu zařízení, odeslání na straně serveru – samostatná závislost, zatím neaktivní.",
      disclaimer: "Cílová obrazovka se otevře po PIN. Production push netvrdí, že každá událost dorazí okamžitě.",
    },
    {
      id: "pallet-packaging",
      title: "Výměna palet a obalů",
      goal: "Zaznamenávejte výměny palet a obalů na zastávce s množstvím, nedostatkem, poškozením a spory.",
      appFoundation: "Samostatné paletové a balicí moduly. Přepínatelné ve společnosti. Společnost může přednastavit položky; řidič může přidat vlastní balení, pokud je to povoleno. Offline ukládání a synchronizace.",
      backendDependency: "Nastavení Exchange API, synchronizace záznamů, uživatelské rozhraní správce portálu, sekce dokončeného balíčku PDF – druhá je závislost.",
      disclaimer: "Část důkazů PDF není ve všech případech plně připravena. Záznam podporuje dokumentaci sporů, ale nerozhoduje spory.",
    },
    {
      id: "adr-border",
      title: "ADR / podpora hranic",
      goal: "Rychlé pomocné informace pro ADR a hraniční/celní kontext – spolu s ověřením oficiálních zdrojů.",
      appFoundation: "ADR informace, vyhledávání UN čísel, pomocník s kódem tunelu, metadata hranic/celní spojená s cestami.",
      backendDependency: "ADR aktualizace databáze, metadata pravidel pro jednotlivé země, údaje o hraničních přechodech.",
      disclaimer: "ADR a data tunelu jsou pomocné informace. Aplikace nenahrazuje legislativu, školení, generálního ředitele společnosti ani rozhodnutí orgánů.",
    },
    {
      id: "truck-map",
      title: "Základ mapy nákladních vozidel",
      goal: "Přehled vozového parku a cest na mapě — provozní orientace.",
      appFoundation: "Přehled založený na mapě, zobrazení kontextu cesty a vozidla.",
      backendDependency: "Integrace poskytovatele telematiky, poskytovatel směrování, aktuální pozice — postupná integrace.",
      disclaimer: "Mapa nezaručuje dodržování zákonných omezení nebo povolení.",
    },
    {
      id: "vícejazyčný",
      title: "Vícejazyčné ovládání",
      goal: "Vícejazyčné týmy na jedné platformě.",
      appFoundation: "Vícejazyčné uživatelské rozhraní aplikace ovladače, uchování původních zpráv, překlad jako pomoc.",
      backendDependency: "Rozšíření národního prostředí portálu a veřejných stránek, pracovní postup kontroly překladu.",
      disclaimer: "Strojový nebo AI překlad je pomocný; je nutná kontrola člověkem. Původní dokument zůstává primární.",
    },
    {
      id: "audit-support",
      title: "Přístup k auditu a podpoře",
      goal: "sledovatelný protokol; řízený přístup k podpoře pro řešení problémů.",
      appFoundation: "Protokolování událostí pro akce výletů a dokumentů; auditovatelné relace podpory.",
      backendDependency: "Export auditu, politika přístupu k podpoře, matice podnikových oprávnění.",
      disclaimer: "Protokol auditu není automatickým právním důkazem.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — odpovědné použití",
      body: "ADR a data tunelu jsou pomocné informace. Oficiální zdroje, tabulky a aktuální místní pravidla musí být vždy ověřeny. ViaNexis nenahrazuje legislativu, školení ADR, pracovníka společnosti pro nebezpečné zboží ani rozhodnutí orgánů.",
    },
    aiOcr: {
      title: "AI, OCR a překlad",
      body: "AI sumarizace, OCR a automatický překlad jsou pomocné nástroje. Vyžaduje se kontrola člověkem. Původní dokument a zpráva zůstávají primární. Nejedná se o právní poradenství ani ověřený překlad.",
    },
    efti: {
      title: "eFTI a sdílení pravomocí",
      body: "ViaNexis není certifikovaná platforma eFTI. Neslibuje přijetí autority v každé zemi. eFTI-připravený základ znamená technickou připravenost – nikoli certifikát nebo licenci.",
    },
  },
  home: {
    problem: {
      title: "Každodenní logistické výzvy",
      subtitle: "Když jsou dokumenty, podpisy a události rozptýleny, trpí tím sledovatelnost a důkaz.",
      cards: [
        {
          title: "Rozházené dokumenty",
          description: "Cestovní papíry v e-mailu, chatu nebo papíru – těžko se spojují se skutečnými událostmi.",
        },
        {
          title: "Chybí podpisy",
          description: "Pozdní nebo chybějící podpisy zdržují uzavření a zvyšují riziko sporů.",
        },
        {
          title: "Těžko prokazatelné události",
          description: "Vyzvednutí, dodávka, výměna palet, incident — bez strukturovaných protokolů, těžko dohledatelné.",
        },
        {
          title: "Vícejazyčné týmy",
          description: "Každodenní nedorozumění zpráv – je vyžadováno uchování původního textu a zkontrolovaný překlad.",
        }
      ],
    },
    modules: {
      title: "Platformové moduly",
      subtitle: "Cíl, základ na straně aplikace, závislost na back-endu/administrátorovi – s právně bezpečným zněním.",
    },
    pallet: {
      title: "Výměna palet a obalů",
      subtitle: "Samostatné moduly, přepínatelné ve společnosti – offline ukládání do auditu.",
    },
    notifications: {
      title: "Zprávy a upozornění",
      subtitle: "Základ na straně aplikace připraven – produkční push je samostatná backendová závislost.",
      cards: [
        {
          title: "Typy událostí oznámení",
          description: "Nová zpráva, změna cesty, úkol dokumentu, problém se synchronizací.",
        },
        {
          title: "Klepněte na směrování a PIN",
          description: "Otevřete cílovou obrazovku z oznámení; přímý odkaz po PIN.",
        },
        {
          title: "Zamykací obrazovka s ochranou soukromí",
          description: "Celý obsah dokumentu nebo zprávy se ve výchozím nastavení na obrazovce uzamčení nezobrazuje.",
        }
      ],
      backendDepTitle: "Backendová závislost",
      backendDepBody: "Produkční push (FCM/APNs), registrace tokenu zařízení a odeslání na straně serveru zatím nejsou aktivní – je nutná samostatná integrace.",
    },
    disclaimersSection: {
      title: "Zodpovědné používání – důležitá upozornění",
    },
    security: {
      title: "Ochrana a kontrola",
      subtitle: "Ochrana společnosti a řidiče se strukturovanou dokumentací.",
      cards: [
        {
          title: "Ochrana společnosti",
          description: "Dokumentace založená na požadavcích, auditovatelné události, řízený přístup.",
        },
        {
          title: "Ochrana řidiče",
          description: "Strukturovaný proces pro dokumentaci událostí ve sporech.",
        },
        {
          title: "Páteř dokumentace",
          description: "Papíry a události spojené s výletem v jednom systému.",
        },
        {
          title: "Auditovatelné události",
          description: "Kdo co kdy udělal – přihlášený a prohledávatelný.",
        }
      ],
      notPromiseTitle: "Žádný slib",
      notPromiseBody: "ViaNexis neslibuje automatickou právní důkazní sílu. Právní posouzení závisí na kontextu.",
    },
    contact: {
      title: "Kontaktní a interní testování",
      subtitle: "Řízený přístup – žádná automatická registrace, žádné veřejné stahování Play.",
      body: "Aplikace ovladače je v přípravě na interní testování Google Play. Připraveno k vydání a Samsung UAT probíhá. Aktivace není automatická.",
      consentNote: "Systém zpracovává dokumenty, pracovní postupy ovladačů, firemní data a oprávnění – každý přístup je individuálně kontrolován.",
      contactLink: "Kontaktujte nás →",
    },
  },
  contactForm: {
    title: "Kontaktujte nás",
    subtitle: "Zájem o platformu ViaNexis — ne automatická registrace.",
    name: "jméno *",
    company: "Společnost *",
    email: "E-mail *",
    phone: "Telefon",
    message: "Zpráva *",
    interestType: "Typ zájmu *",
    interestPlaceholder: "Vybrat...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikace pro řidiče",
      },
      {
        value: "company-admin",
        label: "Firemní / administrátorská platforma",
      },
      {
        value: "dokumenty",
        label: "Správa dokumentů",
      },
      {
        value: "pallet-packaging",
        label: "Paleta / obal",
      },
      {
        value: "adr-customs",
        label: "ADR / celní podpora",
      },
      {
        value: "ostatní",
        label: "Ostatní",
      }
    ],
    consent: "Souhlasím s tím, že ViaNexis zpracovává poskytnuté údaje výhradně pro kontaktní účely. *",
    submit: "Odeslat zprávu",
    submitMailto: "Odeslat email",
    intakeDisabled: "Připravuje se online odeslání potenciálního zákazníka. Použijte e-mailový kontakt nebo to zkuste znovu později.",
    successTitle: "Zpráva přijata",
    successBody: "děkujeme za váš zájem. Náš tým vás bude kontaktovat. Aktivace přístupu není automatická.",
    newSubmission: "Nová zpráva",
    errors: {
      name: "Jméno je povinné.",
      company: "Společnost je vyžadována.",
      email: "E-mail je povinný.",
      emailInvalid: "Zadejte platnou e-mailovou adresu.",
      message: "Zpráva je povinná.",
      interest: "Vyberte typ zájmu.",
      consent: "Je vyžadován souhlas.",
      submitFailed: "Zprávu se nepodařilo odeslat. Zkuste místo toho e-mail.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Balíček kontroly úřadu",
        description: "Dokumenty a události spojené s tripem ve sdíleném balíčku s omezeným rozsahem.",
      },
      {
        title: "Rozsah/časově omezený přístup",
        description: "Omezený přístup na základě QR – neveřejný.",
      },
      {
        title: "Audit",
        description: "Zaznamenaný přístup a události sdílení.",
      },
      {
        title: "eFTI-ready základ",
        description: "Technický základ pro budoucí integraci – nikoli certifikaci.",
      },
    ],
  },

  legal: legalCs,
};
