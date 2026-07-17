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
  legal: {
    versionBadge: "Različica za interno testiranje — pravni strokovni pregled v teku",
    privacy: {
      title: "Obvestilo o zasebnosti — različica za interno testiranje",
      intro: "To obvestilo velja med internim testiranjem in fazo priprave aplikacije ViaNexis Driver in povezane platforme. Storitev ni javni prenos v Trgovini Play — priprava internega testiranja Google Play je v teku. Končna celovita politika zasebnosti bo objavljena po pravnem pregledu.",
      lastUpdated: "2026-07-05",
      controller: {
        title: "Upravljavec podatkov",
        body: "ViaNexis — vianexis.eu. Kontakt za zasebnost: info@vianexis.eu",
      },
      scope: {
        title: "Področje uporabe",
        body: "To obvestilo zajema mobilno aplikacijo ViaNexis Driver, povezane poteke dela voznika in potovanja ter spletni kontaktni obrazec. Za skrbniški in dispečerski portal podjetja veljajo ločeni pogodbeni pogoji in pogoji zasebnosti.",
      },
      dataCategories: {
        title: "Podatki, ki jih obdelujemo",
        items: [
          "Račun in kontaktni podatki: ime, e-pošta, telefon, podjetje, vloga, država.",
          "Podatki o profilu voznika: identifikatorji, vloga, jezikovne nastavitve, dovoljenja.",
          "Podatki o potovanjih: ID-ji potovanj, status, postanki, časovni žigi, metapodatki.",
          "Dokumenti: CMR, dobavnice, računi, fotografije, skeni, digitalni podpisi.",
          "Sporočila in obvestila: komunikacija, povezana s potovanjem, in opozorilni dogodki.",
          "Lokacija: samo z dovoljenjem uporabnika in med uporabo (ko je v uporabi), če je funkcija aktivna.",
          "Metapodatki o napravi in ​​seji: vrsta naprave, različica OS, različica aplikacije, identifikatorji seje.",
          "Diagnostika in dnevniki: tehnični dnevniki in poročila o napakah — če je omogočeno.",
          "Podatki o izmenjavi palet in embalaže: vrsta, količina, manko, poškodbe, opombe.",
          "ADR / podatki o uporabi carinskega pomočnika: iskanja, ogledi — niso uradne odločitve.",
          "Dovoljenje za obvestila in prihodnji potisni žeton: produkcijski potisni (FCM) je ločena odvisnost od zaledja."
        ],
      },
      purposes: {
        title: "Nameni obdelave",
        items: [
          "Upravljanje delovnih tokov potovanj in dokumentiranje uspešnosti.",
          "Upravljanje dokumentov, podpisi in sestavljanje paketa dokazov.",
          "Komunikacija, povezana s potovanjem, in operativna obvestila.",
          "Varnost, revizija in sledljivost.",
          "Nadzorovan dostop do podpore na revizijski način.",
          "Preprečevanje in dokumentiranje pravnih in poslovnih sporov.",
          "Improving app operation and troubleshooting.",
          "Interno testiranje, pilot in evalvacija dostopa."
        ],
      },
      sharing: {
        title: "Skupna raba podatkov",
        items: [
          "Delodajalec/transportno podjetje in pooblaščeni skrbniki/dispečerji — glede na obseg najemnika.",
          "Voznikova lastna pot in podatki o dokumentih po pravilih podjetja.",
          "Pooblaščena podpora platforme samo z revidiranim, omejenim, upravičenim dostopom.",
          "Organi ali partnerji samo na podlagi pravne podlage, pogodbe ali odločitve podjetja.",
          "AI/OCR/ponudnik prevodov samo prek prihodnje integracije, ki jo nadzoruje zaledje, če je uporabljena – s človeškim pregledom.",
          "Osebnih podatkov ne prodajamo. Brez marketinškega pritiska."
        ],
      },
      rights: {
        title: "Vaše pravice",
        items: [
          "Dostop do vaših podatkov — prek skrbnika podjetja ali podpornega kanala.",
          "Popravek netočnih podatkov.",
          "Izbris, kjer je zakonsko mogoče in procesi podjetja dovoljujejo.",
          "Ugovor ali omejitev, če je to pravno utemeljeno.",
          "Prenosljivost podatkov, kjer veljavna zakonodaja to določa.",
          "Pritožba pri nadzornem organu.",
          "Kontakt: info@vianexis.eu"
        ],
      },
      notifications: {
        title: "Obvestila",
        body: "Aplikacija uporablja operativna obvestila – ne trženja. Besedilo na zaklenjenem zaslonu je privzeto varno glede zasebnosti. Potiskanje proizvodnje (FCM/APNs) in obravnavanje žetonov naprave sta odvisnosti od zaledja – med internim testiranjem sta lahko delna ali neaktivna. Dovoljenje za obveščanje je izbira uporabnika.",
      },
      location: {
        title: "Lokacija",
        body: "Lokacija se obdeluje samo z dovoljenjem uporabnika in med uporabo (ko je v uporabi), če je funkcija aktivna — za namene zemljevida, lastnega položaja in dokazov o potovanju. V trenutnem stanju ni sledenja v ozadju. Lokacija ne zagotavlja skladnosti poti ali zakonske skladnosti.",
      },
      importantNotices: {
        title: "Pomembna obvestila",
        items: [
          "AI, OCR in samodejno prevajanje so pomožna orodja – potreben je človeški pregled.",
          "ADR informacije so v pomoč – ne nadomeščajo uradnih virov ali zakonodaje.",
          "ViaNexis ni certificirana platforma eFTI.",
          "Ni nujno storitev ali storitev SOS.",
          "Digitalni dokumenti nimajo samodejno pravne dokazne moči.",
          "Storitev je v internem testiranju/pripravah – ni sistem za javno produkcijo v živo."
        ],
      },
      dataContact: {
        title: "Kontakt za zasebnost",
        body: "Vprašanja glede zasebnosti: info@vianexis.eu. Končni kontakt upravljavca bo prikazan v objavljenem obvestilu.",
      },
      playUrl: "URL zasebnosti konzole Stable Play: https://vianexis.eu/en/privacy",
    },
    terms: {
      title: "Pogoji uporabe — različica za interno testiranje",
      intro: "Ti pogoji veljajo med notranjim testiranjem in pilotno fazo platforme ViaNexis. Storitev ni javni izdelek Trgovine Play — priprava internega testiranja Google Play je v teku. Končni pogoji bodo objavljeni po pravnem pregledu.",
      sections: [
        {
          title: "Narava storitve",
          body: "ViaNexis zagotavlja digitalne dokaze o prevozu in platformo za voznike za prevozna podjetja. Podlaga, pripravljena na eFTI — ni certificirana platforma eFTI. Ne obljublja sprejemanja oblasti v vsaki državi.",
        },
        {
          title: "Interno testiranje",
          body: "Dostop je nadzorovan — prek pilotnega ali internega povabila na testiranje. Ni samodejna javna registracija. Zaledje, potisna obvestila in nekatere integracije se povezujejo postopoma.",
        },
        {
          title: "Odgovornost uporabnika",
          body: "Voznik in podjetje sta odgovorna za potovanje, dokumente, ADR in skladnost s carino. Aplikacija podpira dokumentacijo – ne nadomešča pravnih nasvetov, ADR strokovnjakov ali organov.",
        },
        {
          title: "Razpoložljivost",
          body: "Med internim testiranjem se lahko čas delovanja in funkcije razlikujejo. Posebna pogodba o ravni storitev velja samo po pogodbi.",
        },
        {
          title: "Omejitev odgovornosti",
          body: "ViaNexis ne obljublja samodejne pravne dokazne moči, brezhibnega OCR/AI/prevajanja, nujnih storitev ali pripravljenosti za pospeševanje proizvodnje, če je še vedno odvisnost od ozadja.",
        }
      ],
    },
    legalNotice: {
      title: "Pravno obvestilo — različica za interno testiranje",
      intro: "Na tej strani je opisano stanje notranjega testiranja in priprave platforme ViaNexis. Ne nadomešča celotne pravne dokumentacije ali pogodbenih pogojev.",
      sections: [
        {
          title: "Narava platforme",
          body: "Digitalni transportni dokazi, upravljanje dokumentov, sporočanje, obvestila in nadzor podjetja v enem sistemu. Podlaga, pripravljena na eFTI — ni certificirana platforma eFTI.",
        },
        {
          title: "Stanje internega testiranja",
          body: "Priprava internega testiranja Google Play je v teku. Samsung UAT in pripravljenost za izdajo v teku. Ne trdimo, da je aplikacija javno dostopna v Trgovini Play.",
        },
        {
          title: "Omejitev odgovornosti",
          body: "Ne obljubljamo sprejema avtoritete, samodejne pravne dokazne moči, brezhibnega AI/OCR/prevajanja, nujnih storitev ali popolne pripravljenosti za pospeševanje proizvodnje.",
        },
        {
          title: "Kontakt",
          body: "Pravna vprašanja in vprašanja glede zasebnosti: info@vianexis.eu",
        }
      ],
      relatedDocs: "Sorodni dokumenti",
    },
    disclaimersPage: {
      title: "Odgovorna uporaba — zavrnitev odgovornosti",
      intro: "Spodnja besedila opisujejo pomembne omejitve uporabe platforme. Različica za interno testiranje — ne nadomešča pravnih nasvetov.",
      items: [
        {
          id: "naslov",
          title: "ADR — odgovorna uporaba",
          body: "ADR in podatki tunela so pomožne informacije. Uradne vire, tabele in veljavna lokalna pravila je treba vedno preveriti. ViaNexis ne nadomešča zakonodaje, ADR usposabljanja, generalnega direktorja podjetja ali odločitev organa.",
        },
        {
          id: "ai-ocr",
          title: "AI, OCR & prevod",
          body: "Pomožna orodja – potreben človeški pregled. Izvirni dokument in sporočilo ostaneta primarna. Ne pravno svetovanje in ne overjen prevod.",
        },
        {
          id: "obvestila",
          title: "Obvestila in potiskanje",
          body: "Operativna obvestila – ne marketinški pritisk. Privzeto zaklenjen zaslon, ki varuje zasebnost. Produkcija push (FCM/APNs) je odvisnost od zaledja – med internim testiranjem morda ne bo v živo.",
        },
        {
          id: "truck-map",
          title: "Zemljevid tovornjakov/podatki skupnosti",
          body: "Zemljevid in pot za operativno orientacijo — ne zagotavlja zakonskih omejitev, dovoljenj ali točnosti podatkov skupnosti. Ni nadomestilo za uradno navigacijo.",
        },
        {
          id: "paleta",
          title: "Dokaz o menjavi palete/embalaže",
          body: "Snemanje podpira dokumentacijo sporov. PDF razdelek z dokazi v zaključenem paketu potovanja ni v vseh primerih popolnoma pripravljen. Ne odloča o sporih.",
        },
        {
          id: "legal-validity",
          title: "Pravna veljavnost / dokumenti",
          body: "Digitalni dokumenti in podpisi nimajo samodejno pravne dokazne moči. Sprejemanje se razlikuje glede na državo in stranko.",
        },
        {
          id: "efti",
          title: "eFTI & deljenje pooblastil",
          body: "ViaNexis ni certificirana platforma eFTI. Ne obljublja sprejemanja oblasti v vsaki državi. eFTI-ready temelj je tehnična pripravljenost – ne certifikat.",
        }
      ],
    },
  },
  legal: legalSl,
};
