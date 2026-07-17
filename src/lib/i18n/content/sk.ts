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
    title: "Controlled pilot access",
    items: [
      "ViaNexis is currently available through a pilot program with selected carriers and drivers.",
      "Access is activated after individual discussion and approval.",
      "No public app-store download.",
    ],
    disclaimer:
      "ViaNexis does not claim the system is officially accepted or certified in every country.",
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
      backendDependency: "Notification features can be activated as part of the pilot program.",
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
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
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
  applicationForms: {
    common: {
      privacy: "I accept the privacy policy and consent to data processing. *",
      submit: "Submit application",
      intakeDisabled: "Online applications are being prepared. Contact support@vianexis.eu or try again later.",
      successTitle: "Application received",
      successBody: "Thank you. Your application is in review. Access is not automatic until approved.",
      newSubmission: "New application",
      errors: { required: "This field is required.", email: "Email is required.", emailInvalid: "Enter a valid email address.", password: "Password must be at least 8 characters.", privacy: "Privacy acceptance is required.", submitFailed: "Application could not be sent. Try again later." },
    },
    company: { title: "Company application", subtitle: "Apply for ViaNexis company platform access.", companyName: "Company name *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Contact name *", contactEmail: "Contact email *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "Modules of interest", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Dispatch portal" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Fleet / workshop" },{ value: "pallet_packaging", label: "Pallet / packaging" },{ value: "external_shipper_receiver", label: "External shipper / receiver" }], notes: "Notes" },
    driver: { title: "Driver application", subtitle: "Self-registration — pending approval before login.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Company name (optional)", companyCode: "Invite / company code (optional)", licenseNotes: "License / ADR / GKI notes (optional)" },
    partner: { title: "Partner interest", subtitle: "Shipper, receiver, warehouse or customs partner inquiry.", companyName: "Company name *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Customs broker" },{ value: "other_partner", label: "Other partner" }], contactName: "Contact name *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Inšpekčný balík úradov",
        description: "Dokumenty a udalosti spojené s výletom v zdieľanom balíku s obmedzeným rozsahom.",
      },
      {
        title: "Rozsah / časovo obmedzený prístup",
        description: "Obmedzený prístup na základe QR — nie je verejný.",
      },
      {
        title: "Audit",
        description: "Zaznamenaný prístup a udalosti zdieľania.",
      },
      {
        title: "základ pripravený na eFTI",
        description: "Technický základ pre budúcu integráciu – nie certifikáciu.",
      },
    ],
  },

  legal: legalSk,
};
