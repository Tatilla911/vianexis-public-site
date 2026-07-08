import type { SiteContent } from "../types";
import { legalSl } from "./legal/sl";

export const contentSl: SiteContent = {
  meta: {
    title: "ViaNexis Prevozi voznika in podjetja",
    description: "Aplikacija za voznika, nadzor podjetja, upravljanje dokumentov, sporočanje, obvestila in večjezični delovni tokovi potovanj v enem sistemu. Priprava internega testiranja v teku.",
    ogLocale: "sl_SI",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Lastnosti",
    driverApp: "Aplikacija za voznika",
    companyPortal: "Portal podjetja",
    documents: "Dokumenti",
    authorityEfti: "Oblast / eFTI",
    security: "Varnost",
    pilot: "Pilotski dostop",
    contact: "Kontakt",
    requestAccess: "Zahtevaj dostop",
    menuOpen: "Odpri meni",
  },
  footer: {
    tagline: "Digitalni prometni dokazi in platforma za voznikove operacije za prevozna podjetja. Podlaga, pripravljena na eFTI — ni certificirana platforma eFTI.",
    product: "Izdelek",
    legal: "Pravno",
    legalNotice: "Pravno obvestilo",
    privacy: "Politika zasebnosti",
    terms: "Pogoji uporabe",
    disclaimers: "Odgovorna uporaba",
    dataContact: "Kontakt za varstvo podatkov",
    copyright: "Ni certificirana platforma eFTI. Ne obljublja sprejema avtoritete, samodejne pravne dokazne moči, brezhibnega OCR/AI/prevajanja ali nujnih/SOS storitev. Ni javnega prenosa v Trgovini Play.",
  },
  hero: {
    title: "ViaNexis — digitalni transportni dokazi in platforma za voznikove operacije",
    subtitle: "Aplikacija za voznika, nadzor podjetja, upravljanje dokumentov, sporočanje, obvestila in večjezični delovni tokovi potovanj v enem sistemu.",
    primaryCta: "Kontaktirajte nas",
    secondaryCta: "Priprava internega testiranja v teku",
    stats: [
      {
        label: "Aplikacija za voznika",
        value: "Potovanje + brez povezave",
      },
      {
        label: "Dokumenti",
        value: "CMR + revizija",
      },
      {
        label: "Sporočila",
        value: "Večjezični",
      },
      {
        label: "Stanje",
        value: "Priprava na interni test",
      }
    ],
  },
  platformStatus: {
    title: "Trenutno stanje",
    items: [
      "Potekajo priprave na interno testiranje Google Play — ni prenos iz javne trgovine.",
      "Pripravljenost za izdajo aplikacije gonilnika in Samsung UAT v teku.",
      "Produkcijsko zaledje, potisna obvestila in partnerske integracije se povezujejo postopoma."
    ],
    disclaimer: "ViaNexis ne trdi, da sistem deluje, certificiran ali uradno sprejet v vseh državah.",
  },
  moduleLabels: {
    goal: "Cilj",
    appFoundation: "Osnova na strani aplikacije",
    backendDependency: "Odvisnost ozadja/skrbnika",
    important: "Pomembno",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikacija za voznika",
      goal: "Dovolite voznikom, da opravljajo naloge, dokumente in dogodke, povezane s potovanjem, na mobilnih napravah – na spletu in brez povezave.",
      appFoundation: "Seznam potovanj in podrobnosti, nalaganje dokumenta, zajem podpisa, kontrolni seznami, beleženje incidentov, shranjevanje in sinhronizacija brez povezave, PIN-zaščitena seja.",
      backendDependency: "Live API, obseg najemnika, potovanje in sinhronizacija dokumentov, razrešitev nastavitev podjetja.",
    },
    {
      id: "company-admin",
      title: "Nadzor podjetja / skrbnika",
      goal: "Naj prevozna podjetja upravljajo potovanja, uporabnike, dovoljenja in poteke dela z enega portala.",
      appFoundation: "Podatki in dejanja na strani voznika odražajo pravila podjetja.",
      backendDependency: "Spletni portal podjetja, skrbniška aplikacija platforme, vloge, upravljanje potovanj, zahteve za dokumente, nastavitve izmenjave podjetja.",
    },
    {
      id: "cmr-documents",
      title: "Digitalni CMR in dokumenti",
      goal: "Dokumenti, povezani s potovanji — CMR, dobavnica, račun, dokumenti vozila in voznika — upravljani na strukturiran način.",
      appFoundation: "Nalaganje dokumenta, skeniranje/fotografija, dodelitev potovanja, opravila na podlagi zahtev, koncept primarnega dokumenta.",
      backendDependency: "Shranjevanje dokumentov, metapodatki, pravila za podpisovanje, deljenje pooblastil z omejitvami obsega.",
      disclaimer: "Digitalni dokumenti nimajo samodejno pravne dokazne moči. Sprejemanje se razlikuje glede na državo in stranko.",
    },
    {
      id: "completed-package",
      title: "Zaključen izletni paket",
      goal: "Povzemite dokaze o opravljenem potovanju v izvoznem paketu.",
      appFoundation: "Zaključek potovanja, lokalni podatki in sinhronizirani dogodki kot osnova za sestavljanje paketa.",
      backendDependency: "Končano ustvarjanje paketa potovanja, izvoz PDF, izvoz revizije. Nekateri razdelki (npr. paleta/embalaža PDF) ostajajo odvisni.",
      disclaimer: "Paket podpira dokumentacijo; ne nadomešča pravne ocene podjetja ali organskih postopkov.",
    },
    {
      id: "messaging-notifications",
      title: "Sporočila in obvestila",
      goal: "Komunikacija, povezana s potovanjem, in opozorila za pomembne voznikove dogodke.",
      appFoundation: "Seznam sporočil, niti, povezane s potovanjem, osnova za obvestila na strani aplikacije. Uporabno za: novo sporočilo, spremembo potovanja, opravilo dokumenta, težavo pri sinhronizaciji.",
      backendDependency: "Produkcija push (FCM/APNs), registracija žetona naprave, odpošiljanje na strani strežnika — ločena odvisnost, še ni v živo.",
      disclaimer: "Ciljni zaslon se odpre po PIN. Produkcija ne zahteva, da vsak dogodek prispe takoj.",
    },
    {
      id: "pallet-packaging",
      title: "Menjava palet in embalaže",
      goal: "Zabeležite menjave palet in embalaže na postanek s količinami, pomanjkanjem, poškodbami in spori.",
      appFoundation: "Ločene palete in embalažni moduli. Preklop družbe. Podjetje lahko prednastavi elemente; voznik lahko doda embalažo po meri, če je dovoljeno. Shranjevanje in sinhronizacija brez povezave.",
      backendDependency: "Nastavitve izmenjave API, sinhronizacija zapisov, skrbniški uporabniški vmesnik portala, dokončan razdelek paketa PDF — slednje je odvisnost.",
      disclaimer: "PDF razdelek z dokazi ni popolnoma pripravljen v vseh primerih. Snemanje podpira dokumentacijo sporov, vendar ne odloča o sporih.",
    },
    {
      id: "adr-border",
      title: "ADR / mejna podpora",
      goal: "Informacije o hitri pomoči za ADR in mejni/carinski kontekst — skupaj s preverjanjem uradnih virov.",
      appFoundation: "ADR informacije, iskanje po številki UN, pomočnik za kode predorov, mejni/carinski metapodatki, povezani s potovanji.",
      backendDependency: "ADR posodobitve baze podatkov, metapodatki o pravilih za posamezne države, podatki o mejnih kontrolnih točkah.",
      disclaimer: "ADR in podatki tunela so pomožne informacije. Aplikacija ne nadomešča zakonodaje, usposabljanja, uradnika generalnega direktorata podjetja ali odločitev organa.",
    },
    {
      id: "truck-map",
      title: "Osnova zemljevida tovornjakov",
      goal: "Pregled flote in potovanja na zemljevidu — operativna orientacija.",
      appFoundation: "Pregled na podlagi zemljevida, prikaz potovanja in konteksta vozila.",
      backendDependency: "Integracija ponudnika telematike, ponudnik usmerjanja, položaj v živo — postopna integracija.",
      disclaimer: "Zemljevid ne zagotavlja skladnosti z zakonskimi omejitvami ali dovoljenji.",
    },
    {
      id: "večjezični",
      title: "Večjezično delovanje",
      goal: "Večjezične ekipe na eni platformi.",
      appFoundation: "Večjezični uporabniški vmesnik aplikacije za voznika, ohranitev izvirnega sporočila, prevod kot pomoč.",
      backendDependency: "Razširitev lokalizacije portala in javnega mesta, potek dela za pregled prevodov.",
      disclaimer: "Strojno ali AI prevajanje je pomoč; potreben je človeški pregled. Izvirni dokument ostane primarni.",
    },
    {
      id: "audit-support",
      title: "Dostop do revizije in podpore",
      goal: "Sledljiv dnevnik; nadzorovan dostop podpore za odpravljanje težav.",
      appFoundation: "Beleženje dogodkov za dejanja potovanj in dokumentov; revizijske podporne seje.",
      backendDependency: "Revizijski izvoz, politika dostopa do podpore, matrika dovoljenj podjetja.",
      disclaimer: "Revizijski dnevnik ni samodejno pravno dokazilo.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — odgovorna uporaba",
      body: "ADR in podatki tunela so pomožne informacije. Uradne vire, tabele in veljavna lokalna pravila je treba vedno preveriti. ViaNexis ne nadomešča zakonodaje, ADR usposabljanja, uradnika podjetja za nevarno blago ali odločitev organa.",
    },
    aiOcr: {
      title: "AI, OCR & prevod",
      body: "AI povzemanje, OCR in samodejno prevajanje so pomožna orodja. Potreben je človeški pregled. Izvirni dokument in sporočilo ostaneta primarna. Ne pravno svetovanje in ne overjen prevod.",
    },
    efti: {
      title: "eFTI & deljenje pooblastil",
      body: "ViaNexis ni certificirana platforma eFTI. Ne obljublja sprejemanja oblasti v vsaki državi. eFTI-ready temelj pomeni tehnično pripravljenost – ne potrdila ali licence.",
    },
  },
  home: {
    problem: {
      title: "Vsakodnevni logistični izzivi",
      subtitle: "Ko so dokumenti, podpisi in dogodki razpršeni, trpita sledljivost in dokazovanje.",
      cards: [
        {
          title: "Raztreseni dokumenti",
          description: "Potovalni dokumenti v e-pošti, klepetu ali papirju – težko jih je povezati z dejanskimi dogodki.",
        },
        {
          title: "Manjkajo podpisi",
          description: "Pozni ali manjkajoči podpisi odložijo zaprtje in povečajo tveganje spora.",
        },
        {
          title: "Težko dokazljivi dogodki",
          description: "Prevzem, dostava, menjava palet, incident — brez strukturiranih dnevnikov, težko jih je izslediti.",
        },
        {
          title: "Večjezične ekipe",
          description: "Vsakodnevni nesporazumi pri sporočilih — potrebno je ohraniti izvirno besedilo in pregledati prevod.",
        }
      ],
    },
    modules: {
      title: "Moduli platforme",
      subtitle: "Cilj, temelj na strani aplikacije, odvisnost od zaledja/skrbnika – s pravno varnim besedilom.",
    },
    pallet: {
      title: "Menjava palet in embalaže",
      subtitle: "Ločeni moduli, ki jih lahko preklaplja podjetje — brez povezave, shranite za revizijo.",
    },
    notifications: {
      title: "Sporočila in obvestila",
      subtitle: "Osnova na strani aplikacije je pripravljena – produkcija push je ločena odvisnost od ozadja.",
      cards: [
        {
          title: "Vrste obvestilnih dogodkov",
          description: "Novo sporočilo, sprememba potovanja, opravilo dokumenta, težava s sinhronizacijo.",
        },
        {
          title: "Dotaknite se usmerjanja in PIN",
          description: "Odpiranje ciljnega zaslona iz obvestila; globoka povezava po PIN.",
        },
        {
          title: "Zaklepanje zaslona, ​​ki varuje zasebnost",
          description: "Celotna vsebina dokumenta ali sporočila privzeto ni prikazana na zaklenjenem zaslonu.",
        }
      ],
      backendDepTitle: "Zaledna odvisnost",
      backendDepBody: "Potiskanje v produkcijo (FCM/APNs), registracija žetonov naprave in pošiljanje na strani strežnika še niso aktivni — potrebna je ločena integracija.",
    },
    disclaimersSection: {
      title: "Odgovorna uporaba — pomembna obvestila",
    },
    security: {
      title: "Zaščita in nadzor",
      subtitle: "Zaščita podjetja in voznika s strukturirano dokumentacijo.",
      cards: [
        {
          title: "Zaščita podjetja",
          description: "Dokumentacija na podlagi zahtev, revizijski dogodki, nadzorovan dostop.",
        },
        {
          title: "Zaščita voznika",
          description: "Strukturiran proces dokumentiranja dogodkov v sporih.",
        },
        {
          title: "Dokumentacijska hrbtenica",
          description: "Potovalni dokumenti in dogodki v enem sistemu.",
        },
        {
          title: "Revizijski dogodki",
          description: "Kdo je naredil kaj in kdaj – zabeleženo in iskanje.",
        }
      ],
      notPromiseTitle: "Ni obljuba",
      notPromiseBody: "ViaNexis ne obljublja samodejne pravne dokazne moči. Pravna ocena je odvisna od konteksta.",
    },
    contact: {
      title: "Kontaktno in interno testiranje",
      subtitle: "Nadzorovan dostop — ni samodejna registracija, ni javnega prenosa Play.",
      body: "Aplikacija gonilnika je v pripravi za interno testiranje v Googlu Play. Pripravljenost na izdajo in Samsung UAT v teku. Aktivacija ni samodejna.",
      consentNote: "Sistem obravnava dokumente, poteke dela gonilnika, podatke podjetja in dovoljenja — vsak dostop je pregledan posebej.",
      contactLink: "Kontaktirajte nas →",
    },
  },
  contactForm: {
    title: "Kontaktirajte nas",
    subtitle: "Zanimanje za platformo ViaNexis — ne samodejna registracija.",
    name: "ime *",
    company: "Podjetje *",
    email: "E-pošta *",
    phone: "Telefon",
    message: "sporočilo *",
    interestType: "Vrsta obresti *",
    interestPlaceholder: "Izberite ...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikacija za voznika",
      },
      {
        value: "company-admin",
        label: "Podjetje / skrbniška platforma",
      },
      {
        value: "dokumenti",
        label: "Upravljanje z dokumenti",
      },
      {
        value: "pallet-packaging",
        label: "Paleta / embalaža",
      },
      {
        value: "adr-customs",
        label: "ADR / carinska podpora",
      },
      {
        value: "drugo",
        label: "drugo",
      }
    ],
    consent: "Strinjam se, da ViaNexis posredovane podatke obdeluje izključno za kontaktne namene. *",
    submit: "Pošlji sporočilo",
    submitMailto: "Pošlji e-pošto",
    intakeDisabled: "Spletna oddaja vodilnih strank je v pripravi. Uporabite e-poštni stik ali poskusite znova pozneje.",
    successTitle: "Sporočilo prejeto",
    successBody: "Hvala za vaše zanimanje. Naša ekipa vas bo kontaktirala. Aktivacija dostopa ni samodejna.",
    newSubmission: "Novo sporočilo",
    errors: {
      name: "Ime je obvezno.",
      company: "Podjetje je potrebno.",
      email: "E-pošta je obvezna.",
      emailInvalid: "Vnesite veljaven e-poštni naslov.",
      message: "Sporočilo je obvezno.",
      interest: "Izberite vrsto obresti.",
      consent: "Potrebno je soglasje.",
      submitFailed: "Sporočila ni bilo mogoče poslati. Poskusite raje z e-pošto.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Inšpekcijski paket organa",
        description: "Dokumenti in dogodki, povezani s potovanjem, v skupnem paketu z omejenim obsegom.",
      },
      {
        title: "Obseg/časovno omejen dostop",
        description: "Omejen dostop na podlagi QR — ni javen.",
      },
      {
        title: "revizija",
        description: "Zabeleženi dogodki dostopa in skupne rabe.",
      },
      {
        title: "Podlaga, pripravljena za eFTI",
        description: "Tehnična podlaga za prihodnjo integracijo — ne certificiranje.",
      },
    ],
  },

  legal: legalSl,
};
