import type { LegalContent } from "../legal-types";

export const legalLt: LegalContent = {
  versionBadge: "Vidaus testavimo versija – vykdoma teisės ekspertų peržiūra",
  privacy: {
    title: "Privatumo pranešimas – vidinio testavimo versija",
    intro: "Šis pranešimas taikomas ViaNexis tvarkyklės programos ir susijusios platformos vidinio testavimo ir paruošimo etapu. Paslauga nėra viešas „Play“ parduotuvės atsisiuntimas – ruošiamasi „Google Play“ vidiniam testavimui. Galutinė išsami privatumo politika bus paskelbta po teisinės peržiūros.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Duomenų valdytojas",
      body: "ViaNexis — vianexis.eu. Kontaktai dėl privatumo: info@vianexis.eu",
    },
    scope: {
      title: "Taikymo sritis",
      body: "Šis pranešimas apima ViaNexis Vairuotojo programą mobiliesiems, susijusias vairuotojo ir kelionių darbo eigas ir žiniatinklio kontaktinę formą. Įmonės administratoriui ir dispečerių portalui taikomos atskiros sutartinės ir privatumo sąlygos.",
    },
    dataCategories: {
      title: "Duomenys, kuriuos apdorojame",
      items: [
        "Paskyros ir kontaktiniai duomenys: vardas, pavardė, el. pašto adresas, telefonas, įmonė, vaidmuo, šalis.",
        "Vairuotojo profilio duomenys: identifikatoriai, vaidmuo, kalbos nustatymai, leidimai.",
        "Kelionės duomenys: kelionės ID, būsena, sustojimai, laiko žymos, metaduomenys.",
        "Dokumentai: CMR, važtaraščiai, sąskaitos faktūros, nuotraukos, nuskaitymai, skaitmeniniai parašai.",
        "Žinutės ir pranešimai: su kelione susiję bendravimo ir įspėjimo įvykiai.",
        "Vieta: tik gavus vartotojo leidimą ir naudojant (kai naudojama), jei funkcija aktyvi.",
        "Įrenginio ir seanso metaduomenys: įrenginio tipas, OS versija, programos versija, seanso identifikatoriai.",
        "Diagnostika ir žurnalai: techniniai žurnalai ir klaidų ataskaitos – jei įjungta.",
        "Padėklų ir pakuočių mainų duomenys: tipas, kiekis, trūkumas, pažeidimai, pastabos.",
        "ADR / muitinės pagalbininko naudojimo duomenys: paieškos, peržiūros – ne oficialūs sprendimai.",
        "Pranešimo leidimas ir būsimas „push“ prieigos raktas: gamybos siuntimas (FCM) yra atskira vidinės sistemos priklausomybė."
      ],
    },
    purposes: {
      title: "Apdorojimo tikslai",
      items: [
        "Kelionės darbo eigos valdymas ir našumo dokumentavimas.",
        "Dokumentų tvarkymas, parašai ir įrodymų paketo surinkimas.",
        "Su kelione susieti komunikacijos ir veiklos pranešimai.",
        "Saugumas, auditas ir atsekamumas.",
        "Kontroliuojama prieiga prie palaikymo audituojamu būdu.",
        "Teisinių ir verslo ginčų prevencija ir dokumentavimas.",
        "Programos veikimo ir trikčių šalinimo tobulinimas.",
        "Vidinis testavimas, bandomasis ir prieigos įvertinimas."
      ],
    },
    sharing: {
      title: "Dalijimasis duomenimis",
      items: [
        "Darbdavys / transporto įmonė ir įgalioti administratoriai / dispečeriniai vartotojai – pagal nuomininko apimtį.",
        "Vairuotojo kelionės ir dokumentų duomenys pagal įmonės taisykles.",
        "Įgaliotas platformos palaikymas tik su audituota, ribota, pagrįsta prieiga.",
        "Institucijoms ar partneriams tik pagal teisinį pagrindą, sutartį ar įmonės sprendimą.",
        "AI/OCR/vertimo teikėjas tik per vidinės programos valdomą būsimą integraciją, jei ji taikoma – su žmogaus peržiūra.",
        "Mes neparduodame asmens duomenų. Jokio rinkodaros postūmio."
      ],
    },
    rights: {
      title: "Jūsų teisės",
      items: [
        "Prieiga prie jūsų duomenų – per įmonės administratorių arba palaikymo kanalą.",
        "Netikslių duomenų ištaisymas.",
        "Ištrinkite, kur teisiškai įmanoma ir įmonės procesai leidžia.",
        "Prieštaravimas arba apribojimas, kai tai teisiškai pagrįsta.",
        "Duomenų perkeliamumas, kai tai numato taikomi įstatymai.",
        "Skundas priežiūros institucijai.",
        "Susisiekite: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Pranešimai",
      body: "Programa naudoja operatyvinius pranešimus, o ne rinkodaros pastangas. Užrakinimo ekrano tekstas pagal numatytuosius nustatymus yra saugus privatumui. Gamybos stūmimas (FCM/APNs) ir įrenginio prieigos raktų tvarkymas yra užpakalinės sistemos priklausomybės – vidinio bandymo metu gali būti dalinis arba neaktyvus. Pranešimo leidimas yra vartotojo pasirinkimas.",
    },
    location: {
      title: "Vieta",
      body: "Vietovė apdorojama tik gavus vartotojo leidimą ir naudojant (naudojant), jei funkcija aktyvi – žemėlapio, savo padėties ir kelionės įrodymų tikslais. Dabartinės būsenos fono stebėjimo nėra. Vieta negarantuoja maršruto ar teisės aktų laikymosi.",
    },
    importantNotices: {
      title: "Svarbūs įspėjimai",
      items: [
        "AI, OCR ir automatinis vertimas yra pagalbiniai įrankiai – reikia žmogaus peržiūros.",
        "ADR informacija yra pagalbinė priemonė – nepakeičia oficialių šaltinių ar teisės aktų.",
        "ViaNexis nėra sertifikuota eFTI platforma.",
        "Ne avarinė situacija ar SOS paslauga.",
        "Skaitmeniniai dokumentai automatiškai neturi teisinės įrodomosios galios.",
        "Paslauga yra vidinio testavimo / rengimo metu – ne vieša tiesioginė gamybos sistema."
      ],
    },
    dataContact: {
      title: "Privatumo kontaktas",
      body: "Privatumo klausimai: info@vianexis.eu. Galutinis duomenų valdytojo kontaktas bus nurodytas paskelbtame pranešime.",
    },
    playUrl: "„Stable Play Console“ privatumo URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Naudojimo sąlygos – vidinio testavimo versija",
    intro: "Šios sąlygos taikomos ViaNexis platformos vidinio testavimo ir bandomojo etapo metu. Paslauga nėra viešas „Play“ parduotuvės produktas – ruošiamasi „Google Play“ vidiniam testavimui. Galutinės sąlygos bus paskelbtos po teisinės peržiūros.",
    sections: [
      {
        title: "Paslaugos pobūdis",
        body: "ViaNexis teikia skaitmeninius transporto įrodymus ir vairuotojo operacijų platformą transporto įmonėms. eFTI paruoštas pagrindas – ne sertifikuota eFTI platforma. Nežada valdžios pripažinimo kiekvienoje šalyje.",
      },
      {
        title: "Vidinis testavimas",
        body: "Prieiga kontroliuojama – naudojant bandomąjį arba vidinio testavimo kvietimą. Ne automatinė vieša registracija. Backend, tiesioginiai pranešimai ir kai kurios integracijos yra sujungtos palaipsniui.",
      },
      {
        title: "Vartotojo atsakomybė",
        body: "Vairuotojas ir įmonė yra atsakingi už kelionę, dokumentus, GMR ir muitinės laikymąsi. Programa palaiko dokumentus – nepakeičia teisinių patarimų, ADR ekspertų ar valdžios institucijų.",
      },
      {
        title: "Prieinamumas",
        body: "Vidinio bandymo metu veikimo laikas ir funkcijos gali skirtis. Konkreti SLA taikoma tik pagal sutartį.",
      },
      {
        title: "Atsakomybės apribojimas",
        body: "ViaNexis nežada automatinės teisinės įrodomosios galios, nepriekaištingos OCR/AI/vertimo, skubios pagalbos tarnybų ar gamybinės stūmimo parengties, jei vis dar yra užpakalinė priklausomybė.",
      }
    ],
  },
  legalNotice: {
    title: "Teisinis pranešimas – vidinio testavimo versija",
    intro: "Šiame puslapyje aprašoma ViaNexis platformos vidinio testavimo ir paruošimo būsena. Tai nepakeičia visų teisinių dokumentų ar sutarties sąlygų.",
    sections: [
      {
        title: "Platformos pobūdis",
        body: "Skaitmeniniai transporto įrodymai, dokumentų valdymas, pranešimų siuntimas, pranešimai ir įmonės kontrolė vienoje sistemoje. eFTI paruoštas pagrindas – ne sertifikuota eFTI platforma.",
      },
      {
        title: "Vidinio testavimo būsena",
        body: "Vykdomas „Google Play“ vidinio testavimo rengimas. Vykdomas Samsung UAT ir išleidimo paruošimas. Neteigiame, kad programa yra viešai pasiekiama „Play“ parduotuvėje.",
      },
      {
        title: "Atsakomybės apribojimas",
        body: "Nežadame autoriteto priėmimo, automatinės teisinės įrodomosios galios, nepriekaištingo AI/OCR/vertimo, skubios pagalbos tarnybų ar visiškos gamybos pasirengimo.",
      },
      {
        title: "Susisiekite",
        body: "Teisiniai ir privatumo klausimai: info@vianexis.eu",
      }
    ],
    relatedDocs: "Susiję dokumentai",
  },
  disclaimersPage: {
    title: "Atsakingas naudojimas – atsakomybės apribojimai",
    intro: "Toliau pateiktuose tekstuose aprašomos svarbios platformos naudojimo ribos. Vidaus testavimo versija – nepakeičia teisinės konsultacijos.",
    items: [
      {
        id: "adr",
        title: "ADR – atsakingas naudojimas",
        body: "ADR ir tunelio duomenys yra pagalbinė informacija. Visada reikia patikrinti oficialius šaltinius, lenteles ir galiojančias vietines taisykles. ViaNexis nepakeičia teisės aktų, ADR mokymų, įmonės GD pareigūno ar valdžios sprendimų.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR ir vertimas",
        body: "Pagalbinės priemonės – reikalinga žmogaus peržiūra. Originalus dokumentas ir pranešimas išlieka pagrindiniais. Ne teisinės konsultacijos ir nepatvirtintas vertimas.",
      },
      {
        id: "pranešimai",
        title: "Pranešimai ir siuntimas",
        body: "Veiklos pranešimai – ne rinkodaros spaudimas. Privatumo saugus užrakinimo ekranas pagal numatytuosius nustatymus. Gamybos stūmimas (FCM/APNs) yra vidinė priklausomybė – vidinio bandymo metu gali nebūti aktyvi.",
      },
      {
        id: "truck-map",
        title: "Sunkvežimių žemėlapis / bendruomenės duomenys",
        body: "Žemėlapis ir maršrutas orientuojantis į veiklą – negarantuoja teisinių apribojimų, leidimų ar bendruomenės duomenų tikslumo. Ne oficialios navigacijos pakaitalas.",
      },
      {
        id: "padėklas",
        title: "Padėklo / pakuotės keitimo įrodymai",
        body: "Įrašymas palaiko ginčo dokumentus. PDF įrodymų skiltis užpildytame kelionės pakete nėra visiškai paruošta visais atvejais. Nesprendžia ginčų.",
      },
      {
        id: "legal-validity",
        title: "Teisinis galiojimas / dokumentai",
        body: "Skaitmeniniai dokumentai ir parašai automatiškai neturi teisinės įrodomosios galios. Priėmimas skiriasi priklausomai nuo šalies ir kliento.",
      },
      {
        id: "efti",
        title: "eFTI ir įgaliojimų bendrinimas",
        body: "ViaNexis nėra sertifikuota eFTI platforma. Nežada valdžios pripažinimo kiekvienoje šalyje. eFTI paruoštas pagrindas yra techninis pasirengimas, o ne sertifikatas.",
      }
    ],
  },
};
