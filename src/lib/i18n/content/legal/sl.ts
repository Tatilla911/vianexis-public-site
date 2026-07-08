import type { LegalContent } from "../legal-types";

export const legalSl: LegalContent = {
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
};
