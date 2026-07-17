import type { LegalContent } from "../legal-types";

export const legalSk: LegalContent = {
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
};
