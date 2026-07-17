import type { SiteContent } from "../types";
import { legalSk } from "./legal/sk";

export const contentSk: SiteContent = {
  meta: {
    title: "ViaNexis Operácie prepravy vodiča a spoločnosti",
    description: "Aplikácia vodiča, riadenie spoločnosti, správa dokumentov, správy, upozornenia a pracovné postupy vo viacerých jazykoch v jednom systéme. Prebieha príprava interného testovania.",
    ogLocale: "sk_SK",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Vlastnosti",
    driverApp: "Aplikácia vodiča",
    companyPortal: "Firemný portál",
    documents: "dokumenty",
    authorityEfti: "Autorita / eFTI",
    security: "Bezpečnosť",
    pilot: "Pilotný prístup",
    contact: "Kontaktovať",
    requestAccess: "Požiadať o prístup",
    menuOpen: "Otvoriť menu",
  },
  footer: {
    tagline: "Platforma digitálnej evidencie dopravy a prevádzky vodičov pre dopravné spoločnosti. eFTI-ready základ — nie certifikovaná eFTI platforma.",
    product: "Produkt",
    legal: "Právne",
    legalNotice: "Právne upozornenie",
    privacy: "Zásady ochrany osobných údajov",
    terms: "Podmienky používania",
    disclaimers: "Zodpovedné používanie",
    dataContact: "Kontakt na ochranu údajov",
    copyright: "Nie je certifikovanou platformou eFTI. Nesľubuje prijatie autority, automatickú právnu dôkaznú silu, bezchybné OCR/AI/preklady alebo núdzové/SOS služby. Žiadne verejné sťahovanie z Obchodu Play.",
  },
  hero: {
    title: "ViaNexis — platforma digitálnej evidencie dopravy a prevádzky vodičov",
    subtitle: "Aplikácia vodiča, riadenie spoločnosti, správa dokumentov, správy, upozornenia a pracovné postupy vo viacerých jazykoch v jednom systéme.",
    primaryCta: "Kontaktujte nás",
    secondaryCta: "Prebieha príprava interného testovania",
    stats: [
      {
        label: "Aplikácia vodiča",
        value: "Výlet + offline",
      },
      {
        label: "dokumenty",
        value: "CMR + audit",
      },
      {
        label: "Správy",
        value: "Viacjazyčný",
      },
      {
        label: "Stav",
        value: "Príprava na interný test",
      }
    ],
  },
  platformStatus: {
    title: "Aktuálny stav",
    items: [
      "Prebieha príprava interného testovania služby Google Play – nejde o stiahnutie z verejného obchodu.",
      "Pripravenosť na vydanie aplikácie ovládača a prebieha proces Samsung UAT.",
      "Postupne sa pripája produkčný backend, push notifikácie a partnerské integrácie."
    ],
    disclaimer: "ViaNexis netvrdí, že systém je aktívny, certifikovaný alebo oficiálne akceptovaný v každej krajine.",
  },
  moduleLabels: {
    goal: "Cieľ",
    appFoundation: "Základ na strane aplikácie",
    backendDependency: "Backend / závislosť správcu",
    important: "Dôležité",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikácia vodiča",
      goal: "Umožnite vodičom zvládnuť úlohy, dokumenty a udalosti spojené s výletom na mobile – online aj offline.",
      appFoundation: "Zoznam ciest a podrobnosti, nahrávanie dokumentov, zachytávanie podpisov, kontrolné zoznamy, zaznamenávanie incidentov, offline ukladanie a synchronizácia, PIN-chránená relácia.",
      backendDependency: "Live API, rozsah nájomníka, synchronizácia cesty a dokumentov, riešenie nastavení spoločnosti.",
    },
    {
      id: "company-admin",
      title: "Kontrola spoločnosti / správcu",
      goal: "Umožnite dopravným spoločnostiam spravovať cesty, používateľov, povolenia a pracovné postupy z jedného portálu.",
      appFoundation: "Údaje a akcie na strane vodiča odrážajú pravidlá spoločnosti.",
      backendDependency: "Portál webovej spoločnosti, aplikácia na správu platformy, roly, správa ciest, požiadavky na dokumenty, nastavenia výmeny spoločností.",
    },
    {
      id: "cmr-documents",
      title: "Digitálne CMR a dokumenty",
      goal: "Dokumenty spojené s cestou — CMR, dodací list, faktúra, doklady od vozidla a vodiča — spravované štruktúrovaným spôsobom.",
      appFoundation: "Nahrávanie dokumentov, skenovanie/fotenie, priradenie cesty, úlohy založené na požiadavkách, koncept primárneho dokumentu.",
      backendDependency: "Ukladanie dokumentov, metaúdaje, pravidlá podpisovania, zdieľanie oprávnení s limitmi rozsahu.",
      disclaimer: "Digitálne dokumenty nemajú automaticky právnu dôkaznú silu. Akceptácia sa líši v závislosti od krajiny a zákazníka.",
    },
    {
      id: "completed-package",
      title: "Dokončený balík zájazdu",
      goal: "Zhrňte dôkaz o absolvovanej ceste do exportovateľného balíka.",
      appFoundation: "Uzavretie cesty, miestne údaje a synchronizované udalosti ako základ pre zostavenie balíka.",
      backendDependency: "Dokončené generovanie balíka zájazdu, export PDF, export auditu. Niektoré sekcie (napr. paleta/obal PDF) zostávajú závislými.",
      disclaimer: "Balík podporuje dokumentáciu; nenahrádza právne posúdenie spoločnosti ani konanie o orgánoch.",
    },
    {
      id: "messaging-notifications",
      title: "Správy a upozornenia",
      goal: "Komunikácia a upozornenia na dôležité udalosti vodiča.",
      appFoundation: "Zoznam správ, vlákna prepojené s tripom, základ upozornení na strane aplikácie. Použiteľné pre: novú správu, zmenu cesty, úlohu dokumentu, problém so synchronizáciou.",
      backendDependency: "Production push (FCM/APNs), registrácia tokenu zariadenia, odoslanie na strane servera – samostatná závislosť, zatiaľ nie aktívne.",
      disclaimer: "Cieľová obrazovka sa otvorí po PIN. Produkčný tlak netvrdí, že každá udalosť príde okamžite.",
    },
    {
      id: "pallet-packaging",
      title: "Výmena paliet a obalov",
      goal: "Zaznamenajte výmenu paliet a obalov na zastávku s množstvom, nedostatkom, poškodením a spormi.",
      appFoundation: "Samostatné paletové a baliace moduly. Prepínateľné podľa spoločnosti. Spoločnosť môže prednastaviť položky; vodič môže pridať vlastné balenie, ak je to povolené. Ukladanie a synchronizácia offline.",
      backendDependency: "Nastavenia výmeny API, synchronizácia záznamov, používateľské rozhranie správcu portálu, sekcia dokončeného balíka PDF – druhá je závislosť.",
      disclaimer: "PDF dôkazová časť nie je vo všetkých prípadoch úplne pripravená. Záznam podporuje dokumentáciu sporov, ale nerozhoduje spory.",
    },
    {
      id: "adr-border",
      title: "ADR / podpora hraníc",
      goal: "Rýchle pomocné informácie pre ADR a hraničný/colný kontext – spolu s overením oficiálnych zdrojov.",
      appFoundation: "ADR informácie, vyhľadávanie UN čísel, pomocník s kódom tunela, metaúdaje hraníc/colné prepojené s cestami.",
      backendDependency: "ADR aktualizácie databázy, metadáta pravidiel pre konkrétnu krajinu, údaje o hraničných kontrolách.",
      disclaimer: "ADR a údaje tunela sú pomocné informácie. Aplikácia nenahrádza legislatívu, školenia, generálneho riaditeľa spoločnosti ani rozhodnutia úradov.",
    },
    {
      id: "truck-map",
      title: "Základ mapy pre nákladné autá",
      goal: "Prehľad vozového parku a jázd na mape — prevádzková orientácia.",
      appFoundation: "Prehľad založený na mape, zobrazenie kontextu cesty a vozidla.",
      backendDependency: "Integrácia poskytovateľa telematiky, poskytovateľ smerovania, aktuálna pozícia — postupná integrácia.",
      disclaimer: "Mapa nezaručuje dodržiavanie zákonných obmedzení alebo povolení.",
    },
    {
      id: "viacjazyčný",
      title: "Viacjazyčná prevádzka",
      goal: "Viacjazyčné tímy na jednej platforme.",
      appFoundation: "Viacjazyčné používateľské rozhranie aplikácie ovládača, uchovávanie pôvodných správ, preklad ako pomoc.",
      backendDependency: "Rozšírenie miestneho nastavenia portálu a verejnej stránky, pracovný postup kontroly prekladov.",
      disclaimer: "Strojový alebo AI preklad je pomocný; je potrebná ľudská kontrola. Pôvodný dokument zostáva primárny.",
    },
    {
      id: "audit-support",
      title: "Prístup k auditu a podpore",
      goal: "Vysledovateľný denník; kontrolovaný prístup podpory pre riešenie problémov.",
      appFoundation: "Protokolovanie udalostí pre akcie ciest a dokumentov; auditovateľné podporné relácie.",
      backendDependency: "Export auditu, politika prístupu k podpore, matica podnikových povolení.",
      disclaimer: "Protokol auditu nie je automatickým právnym dôkazom.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — zodpovedné používanie",
      body: "ADR a údaje tunela sú pomocné informácie. Oficiálne zdroje, tabuľky a aktuálne miestne pravidlá musia byť vždy overené. ViaNexis nenahrádza legislatívu, školenie ADR, úradníka spoločnosti pre nebezpečný tovar ani rozhodnutia orgánov.",
    },
    aiOcr: {
      title: "AI, OCR a preklad",
      body: "AI sumarizácia, OCR a automatický preklad sú pomocné nástroje. Vyžaduje sa ľudská kontrola. Pôvodný dokument a správa zostávajú primárne. Nie je to právne poradenstvo ani overený preklad.",
    },
    efti: {
      title: "eFTI a zdieľanie právomocí",
      body: "ViaNexis nie je certifikovanou platformou eFTI. Nesľubuje akceptovanie autority v každej krajine. eFTI-pripravený základ znamená technickú pripravenosť – nie certifikát alebo licenciu.",
    },
  },
  home: {
    problem: {
      title: "Každodenné logistické výzvy",
      subtitle: "Keď sú dokumenty, podpisy a udalosti rozptýlené, utrpí to sledovateľnosť a dôkaz.",
      cards: [
        {
          title: "Rozhádzané dokumenty",
          description: "Cestovné papiere v e-maile, chate alebo papieri – ťažko prepojiť so skutočnými udalosťami.",
        },
        {
          title: "Chýbajúce podpisy",
          description: "Neskoré alebo chýbajúce podpisy oneskorujú uzavretie a zvyšujú riziko sporov.",
        },
        {
          title: "Ťažko dokázateľné udalosti",
          description: "Vyzdvihnutie, dodávka, výmena paliet, incident — bez štruktúrovaných protokolov, ťažko vysledovateľné.",
        },
        {
          title: "Viacjazyčné tímy",
          description: "Denné nedorozumenia správ – vyžaduje sa uchovávanie pôvodného textu a kontrolovaný preklad.",
        }
      ],
    },
    modules: {
      title: "Platformové moduly",
      subtitle: "Cieľ, základ na strane aplikácie, závislosť od backendu/správcu – s formuláciou, ktorá je bezpečná z hľadiska zákona.",
    },
    pallet: {
      title: "Výmena paliet a obalov",
      subtitle: "Samostatné moduly, prepínateľné v rámci spoločnosti – offline uloženie smerom k auditu.",
    },
    notifications: {
      title: "Správy a upozornenia",
      subtitle: "Pripravená základňa na strane aplikácie – produkčný tlak je samostatná backendová závislosť.",
      cards: [
        {
          title: "Typy udalostí upozornení",
          description: "Nová správa, zmena cesty, úloha dokumentu, problém so synchronizáciou.",
        },
        {
          title: "Klepnite na smerovanie a PIN",
          description: "Otvorte cieľovú obrazovku z upozornenia; priamy odkaz po PIN.",
        },
        {
          title: "Uzamykacia obrazovka s ochranou súkromia",
          description: "Celý obsah dokumentu alebo správy sa predvolene nezobrazuje na uzamknutej obrazovke.",
        }
      ],
      backendDepTitle: "Backendová závislosť",
      backendDepBody: "Produkcia push (FCM/APNs), registrácia tokenu zariadenia a odoslanie na strane servera ešte nie sú aktívne – vyžaduje sa samostatná integrácia.",
    },
    disclaimersSection: {
      title: "Zodpovedné používanie – dôležité upozornenia",
    },
    security: {
      title: "Ochrana a kontrola",
      subtitle: "Ochrana spoločnosti a vodiča so štruktúrovanou dokumentáciou.",
      cards: [
        {
          title: "Ochrana spoločnosti",
          description: "Dokumentácia založená na požiadavkách, auditovateľné udalosti, kontrolovaný prístup.",
        },
        {
          title: "Ochrana vodiča",
          description: "Štruktúrovaný proces dokumentovania udalostí v sporoch.",
        },
        {
          title: "Chrbtica dokumentácie",
          description: "Papiere a udalosti spojené s výletmi v jednom systéme.",
        },
        {
          title: "Auditable events",
          description: "Kto čo kedy urobil – prihlásené a vyhľadávateľné.",
        }
      ],
      notPromiseTitle: "Nie sľub",
      notPromiseBody: "ViaNexis nesľubuje automatickú právnu dôkaznú silu. Právne posúdenie závisí od kontextu.",
    },
    contact: {
      title: "Kontaktné a interné testovanie",
      subtitle: "Riadený prístup – nie automatická registrácia, žiadne verejné sťahovanie Play.",
      body: "Aplikácia ovládača je v príprave na interné testovanie Google Play. Pripravené na vydanie a Samsung UAT prebieha. Aktivácia nie je automatická.",
      consentNote: "Systém spracováva dokumenty, pracovné postupy ovládačov, firemné údaje a povolenia – každý prístup je individuálne posúdený.",
      contactLink: "Kontaktujte nás →",
    },
  },
  contactForm: {
    title: "Kontaktujte nás",
    subtitle: "Záujem o platformu ViaNexis — nie automatická registrácia.",
    name: "meno *",
    company: "Spoločnosť *",
    email: "E-mail *",
    phone: "Telefón",
    message: "Správa *",
    interestType: "Typ záujmu *",
    interestPlaceholder: "Vybrať...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikácia vodiča",
      },
      {
        value: "company-admin",
        label: "Platforma spoločnosti / správcu",
      },
      {
        value: "dokumentov",
        label: "Správa dokumentov",
      },
      {
        value: "pallet-packaging",
        label: "Paleta / balenie",
      },
      {
        value: "adr-customs",
        label: "ADR / colná podpora",
      },
      {
        value: "iné",
        label: "Iné",
      }
    ],
    consent: "Súhlasím s tým, že ViaNexis spracúva poskytnuté údaje výlučne na kontaktné účely. *",
    submit: "Odoslať správu",
    submitMailto: "Odoslať email",
    intakeDisabled: "Pripravuje sa online odoslanie potenciálnych zákazníkov. Použite e-mailový kontakt alebo to skúste znova neskôr.",
    successTitle: "Správa prijatá",
    successBody: "Ďakujeme za váš záujem. Náš tím vás bude kontaktovať. Aktivácia prístupu nie je automatická.",
    newSubmission: "Nová správa",
    errors: {
      name: "Meno je povinné.",
      company: "Vyžaduje sa spoločnosť.",
      email: "Vyžaduje sa e-mail.",
      emailInvalid: "Zadajte platnú e-mailovú adresu.",
      message: "Vyžaduje sa správa.",
      interest: "Vyberte typ záujmu.",
      consent: "Vyžaduje sa súhlas.",
      submitFailed: "Správu nebolo možné odoslať. Skúste radšej e-mail.",
    },
  },
  legal: {
    versionBadge: "Verzia interného testovania – práve prebieha preskúmanie odborníkom v oblasti práva",
    privacy: {
      title: "Upozornenie o ochrane osobných údajov – interná testovacia verzia",
      intro: "Toto oznámenie platí počas internej testovacej a prípravnej fázy aplikácie ViaNexis Driver a súvisiacej platformy. Služba nie je verejným stiahnutím z Obchodu Play – prebieha príprava na interné testovanie služby Google Play. Konečné komplexné zásady ochrany osobných údajov budú zverejnené po právnej kontrole.",
      lastUpdated: "2026-07-05",
      controller: {
        title: "správca údajov",
        body: "ViaNexis — vianexis.eu. Kontakt na ochranu osobných údajov: info@vianexis.eu",
      },
      scope: {
        title: "Rozsah",
        body: "Toto oznámenie sa vzťahuje na mobilnú aplikáciu ViaNexis Driver, súvisiace pracovné postupy vodiča a cesty a webový kontaktný formulár. Administrátorský a dispečerský portál spoločnosti podliehajú samostatným zmluvným podmienkam a podmienkam ochrany osobných údajov.",
      },
      dataCategories: {
        title: "Údaje, ktoré spracovávame",
        items: [
          "Údaje o účte a kontaktné údaje: meno, e-mail, telefón, spoločnosť, rola, krajina.",
          "Údaje profilu vodiča: identifikátory, rola, jazykové nastavenia, povolenia.",
          "Údaje o ceste: ID cesty, stav, zastávky, časové pečiatky, metadáta.",
          "Dokumenty: CMR, dodacie listy, faktúry, fotografie, skeny, digitálne podpisy.",
          "Správy a upozornenia: komunikácia a upozornenia spojené s výletom.",
          "Poloha: iba s povolením používateľa a počas používania (pri používaní), ak je funkcia aktívna.",
          "Metadáta zariadenia a relácie: typ zariadenia, verzia operačného systému, verzia aplikácie, identifikátory relácie.",
          "Diagnostika a protokoly: technické protokoly a chybové hlásenia – ak sú povolené.",
          "Paleta a obal si vymieňajú údaje: druh, množstvo, manko, poškodenie, poznámky.",
          "ADR / údaje o používaní colného pomocníka: vyhľadávania, zobrazenia – nie oficiálne rozhodnutia.",
          "Povolenie na upozornenia a budúci token push: produkčné push (FCM) je samostatná závislosť na backende."
        ],
      },
      purposes: {
        title: "Účely spracovania",
        items: [
          "Správa pracovných postupov na cestách a dokumentovanie výkonu.",
          "Správa dokumentov, podpisy a zostavovanie balíkov dôkazov.",
          "Komunikácia a prevádzkové upozornenia spojené s výletom.",
          "Bezpečnosť, audit a sledovateľnosť.",
          "Kontrolovaný prístup k podpore auditovateľným spôsobom.",
          "Predchádzanie a dokumentovanie právnych a obchodných sporov.",
          "Zlepšenie fungovania aplikácie a riešenie problémov.",
          "Interné testovanie, pilotné testovanie a hodnotenie prístupu."
        ],
      },
      sharing: {
        title: "Zdieľanie údajov",
        items: [
          "Zamestnávateľ/dopravná spoločnosť a oprávnení používatelia admin/dispečer — na rozsah nájomcu.",
          "Vlastná cesta vodiča a údaje o dokladoch podľa firemných pravidiel.",
          "Podpora autorizovanej platformy len s kontrolovaným, obmedzeným a odôvodneným prístupom.",
          "Orgány alebo partneri len na základe právneho základu, zmluvy alebo rozhodnutia spoločnosti.",
          "AI/OCR/poskytovateľ prekladu iba prostredníctvom budúcej integrácie riadenej backendom, ak sa použije – s kontrolou človekom.",
          "Osobné údaje nepredávame. Žiadny marketingový tlak."
        ],
      },
      rights: {
        title: "Vaše práva",
        items: [
          "Prístup k vašim údajom — cez administráciu spoločnosti alebo kanál podpory.",
          "Oprava nepresných údajov.",
          "Vymazanie tam, kde je to právne možné a firemné procesy to umožňujú.",
          "Námietka alebo obmedzenie, ak je to právne opodstatnené.",
          "Prenosnosť údajov tam, kde to umožňujú príslušné zákony.",
          "Sťažnosť na dozorný orgán.",
          "Kontakt: info@vianexis.eu"
        ],
      },
      notifications: {
        title: "Upozornenia",
        body: "Aplikácia využíva prevádzkové upozornenia – nie marketingový tlak. Text na uzamknutej obrazovke je v predvolenom nastavení bezpečný. Produkcia push (FCM/APNs) a manipulácia s tokenmi zariadenia sú závislé od backendu – môžu byť čiastočné alebo nemusia byť aktívne počas interného testovania. Povolenie upozornení je voľba používateľa.",
      },
      location: {
        title: "Poloha",
        body: "Poloha sa spracúva iba s povolením používateľa a počas používania (pri používaní), ak je funkcia aktívna – na účely mapy, vlastnej polohy a evidencie cesty. Žiadne sledovanie na pozadí v aktuálnom stave. Poloha nezaručuje súlad s trasou ani súlad s právnymi predpismi.",
      },
      importantNotices: {
        title: "Dôležité upozornenia",
        items: [
          "AI, OCR a automatický preklad sú pomocné nástroje – vyžaduje sa kontrola človekom.",
          "ADR informácie sú pomocníkom — nenahrádzajú oficiálne zdroje ani legislatívu.",
          "ViaNexis nie je certifikovanou platformou eFTI.",
          "Nejde o núdzovú službu alebo službu SOS.",
          "Digitálne dokumenty nemajú automaticky právnu dôkaznú silu.",
          "Služba je v internom testovaní/príprave – nie je to verejný živý produkčný systém."
        ],
      },
      dataContact: {
        title: "Kontakt na ochranu osobných údajov",
        body: "Otázky týkajúce sa ochrany osobných údajov: info@vianexis.eu. Konečný kontakt na kontrolóra sa objaví vo zverejnenom oznámení.",
      },
      playUrl: "Stabilná webová adresa ochrany osobných údajov služby Play Console: https://vianexis.eu/en/privacy",
    },
    terms: {
      title: "Podmienky používania — interná testovacia verzia",
      intro: "Tieto podmienky platia počas interného testovania a pilotnej fázy platformy ViaNexis. Služba nie je verejným produktom Obchodu Play – prebieha príprava na interné testovanie služby Google Play. Konečné podmienky budú zverejnené po právnej kontrole.",
      sections: [
        {
          title: "Povaha služby",
          body: "ViaNexis poskytuje pre dopravné spoločnosti digitálnu evidenciu dopravy a platformu pre prevádzku vodičov. eFTI-ready základ — nie certifikovaná eFTI platforma. Nesľubuje akceptovanie autority v každej krajine.",
        },
        {
          title: "Interné testovanie",
          body: "Prístup je kontrolovaný – prostredníctvom pilotnej alebo internej testovacej pozvánky. Nie je to automatická verejná registrácia. Backend, push notifikácie a niektoré integrácie sa pripájajú postupne.",
        },
        {
          title: "Zodpovednosť užívateľa",
          body: "Vodič a spoločnosť sú zodpovední za cestu, dokument, ADR a dodržiavanie colných predpisov. Aplikácia podporuje dokumentáciu – nenahrádza právne poradenstvo, odborníkov ADR ani úrady.",
        },
        {
          title: "Dostupnosť",
          body: "Počas interného testovania sa doba prevádzkyschopnosti a funkcie môžu líšiť. Špecifická SLA platí len na základe zmluvy.",
        },
        {
          title: "Obmedzenie zodpovednosti",
          body: "ViaNexis nesľubuje automatickú právnu dôkaznú silu, bezchybný OCR/AI/preklad, pohotovostné služby alebo pripravenosť na tlačenie produkcie, ak je stále závislá na backende.",
        }
      ],
    },
    legalNotice: {
      title: "Právne upozornenie — verzia interného testovania",
      intro: "Táto stránka popisuje stav interného testovania a prípravy platformy ViaNexis. Nenahrádza úplnú právnu dokumentáciu ani zmluvné podmienky.",
      sections: [
        {
          title: "Povaha platformy",
          body: "Digitálna evidencia prepravy, správa dokumentov, zasielanie správ, notifikácie a kontrola spoločnosti v jednom systéme. eFTI-ready základ — nie certifikovaná eFTI platforma.",
        },
        {
          title: "Stav interného testovania",
          body: "Prebieha príprava interného testovania služby Google Play. Samsung UAT a pripravuje sa vydanie. Netvrdíme, že aplikácia je verejne dostupná v Obchode Play.",
        },
        {
          title: "Obmedzenie zodpovednosti",
          body: "Nesľubujeme akceptovanie autority, automatickú právnu dôkaznú silu, bezchybný AI/OCR/preklad, pohotovostné služby ani plnú pripravenosť na tlačenie produkcie.",
        },
        {
          title: "Kontaktovať",
          body: "Právne otázky a otázky týkajúce sa ochrany súkromia: info@vianexis.eu",
        }
      ],
      relatedDocs: "Súvisiace dokumenty",
    },
    disclaimersPage: {
      title: "Zodpovedné používanie — zrieknutie sa zodpovednosti",
      intro: "Nižšie uvedené texty popisujú dôležité limity používania platformy. Interná testovacia verzia — nenahrádza právne poradenstvo.",
      items: [
        {
          id: "adr",
          title: "ADR — zodpovedné používanie",
          body: "ADR a údaje tunela sú pomocné informácie. Oficiálne zdroje, tabuľky a aktuálne miestne pravidlá musia byť vždy overené. ViaNexis nenahrádza legislatívu, školenie ADR, riaditeľa GR spoločnosti ani rozhodnutia úradov.",
        },
        {
          id: "ai-ocr",
          title: "AI, OCR a preklad",
          body: "Pomocné nástroje – vyžaduje sa kontrola človekom. Pôvodný dokument a správa zostávajú primárne. Nie je to právne poradenstvo ani overený preklad.",
        },
        {
          id: "upozornenia",
          title: "Upozornenia a push",
          body: "Prevádzkové upozornenia – nie marketingový tlak. Predvolene uzamknutá obrazovka s ochranou súkromia. Production push (FCM/APNs) je backendová závislosť – nemusí byť aktívna počas interného testovania.",
        },
        {
          id: "truck-map",
          title: "Mapa kamiónu / údaje komunity",
          body: "Mapa a trasa pre prevádzkovú orientáciu — nezaručuje zákonné obmedzenia, povolenia ani presnosť údajov komunity. Nie je náhradou za oficiálnu navigáciu.",
        },
        {
          id: "paleta",
          title: "Evidencia výmeny paliet / obalov",
          body: "Nahrávanie podporuje dokumentáciu sporov. PDF dôkazová časť v dokončenom balíku výletov nie je vo všetkých prípadoch úplne pripravená. Nerozhoduje spory.",
        },
        {
          id: "legal-validity",
          title: "Právna platnosť / dokumenty",
          body: "Digitálne dokumenty a podpisy nemajú automaticky právnu dôkaznú silu. Akceptácia sa líši v závislosti od krajiny a zákazníka.",
        },
        {
          id: "efti",
          title: "eFTI a zdieľanie právomocí",
          body: "ViaNexis nie je certifikovanou platformou eFTI. Nesľubuje akceptovanie autority v každej krajine. eFTI-základom pripravenosti je technická pripravenosť – nie certifikát.",
        }
      ],
    },
  },
  legal: legalSk,
};
