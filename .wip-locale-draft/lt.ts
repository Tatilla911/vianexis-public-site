import type { SiteContent } from "../types";
import { legalLt } from "./legal/lt";

export const contentLt: SiteContent = {
  meta: {
    title: "ViaNexis Vairuotojo ir įmonės transporto operacijos",
    description: "Vairuotojo programėlė, įmonės valdymas, dokumentų valdymas, susirašinėjimas, pranešimai ir kelių kalbų kelionių darbo eigos vienoje sistemoje. Vyksta vidinio testavimo paruošimas.",
    ogLocale: "lt_LT",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Savybės",
    driverApp: "Vairuotojo programa",
    companyPortal: "Įmonės portalas",
    documents: "Dokumentai",
    authorityEfti: "Institucija / eFTI",
    security: "Saugumas",
    pilot: "Piloto prieiga",
    contact: "Susisiekite",
    requestAccess: "Prašyti prieigos",
    menuOpen: "Atidaryti meniu",
  },
  footer: {
    tagline: "Skaitmeniniai transporto įrodymai ir vairuotojų operacijų platforma transporto įmonėms. eFTI paruoštas pagrindas – ne sertifikuota eFTI platforma.",
    product: "Produktas",
    legal: "Teisinė",
    legalNotice: "Teisinis pranešimas",
    privacy: "Privatumo politika",
    terms: "Naudojimo sąlygos",
    disclaimers: "Atsakingas naudojimas",
    dataContact: "Duomenų apsaugos kontaktas",
    copyright: "Ne sertifikuota eFTI platforma. Nežada įgaliojimų priimti, automatinės teisinės įrodomosios galios, nepriekaištingų OCR/AI/vertimo ar skubios pagalbos/SOS paslaugų. Nėra viešos „Play“ parduotuvės atsisiuntimo.",
  },
  hero: {
    title: "ViaNexis – skaitmeninis transporto įrodymas ir vairuotojo operacijų platforma",
    subtitle: "Vairuotojo programėlė, įmonės valdymas, dokumentų valdymas, susirašinėjimas, pranešimai ir kelių kalbų kelionių darbo eigos vienoje sistemoje.",
    primaryCta: "Susisiekite su mumis",
    secondaryCta: "Vyksta vidinio testavimo paruošimas",
    stats: [
      {
        label: "Vairuotojo programa",
        value: "Kelionė + neprisijungus",
      },
      {
        label: "Dokumentai",
        value: "CMR + auditas",
      },
      {
        label: "Susirašinėjimas žinutėmis",
        value: "Daugiakalbis",
      },
      {
        label: "Būsena",
        value: "Pasiruošimas vidiniam testui",
      }
    ],
  },
  platformStatus: {
    title: "Dabartinė būsena",
    items: [
      "Vykdomas „Google Play“ vidinio testavimo rengimas – ne atsisiunčiama viešoje parduotuvėje.",
      "Parengta tvarkyklės programai ir Samsung UAT.",
      "Gamybos užpakalinė programa, tiesioginiai pranešimai ir partnerių integracijos sujungiami palaipsniui."
    ],
    disclaimer: "ViaNexis neteigia, kad sistema veikia, yra sertifikuota arba oficialiai priimta visose šalyse.",
  },
  moduleLabels: {
    goal: "Tikslas",
    appFoundation: "Programos pusės pagrindas",
    backendDependency: "Backend / administratoriaus priklausomybė",
    important: "Svarbu",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Vairuotojo programa",
      goal: "Leiskite vairuotojams tvarkyti su kelione susijusias užduotis, dokumentus ir įvykius mobiliajame telefone – prisijungę ir neprisijungę.",
      appFoundation: "Kelionių sąrašas ir išsami informacija, dokumentų įkėlimas, parašo fiksavimas, kontroliniai sąrašai, incidentų registravimas, išsaugojimas ir sinchronizavimas neprisijungus, PIN apsaugota sesija.",
      backendDependency: "Tiesioginė API, nuomininko apimtis, kelionių ir dokumentų sinchronizavimas, įmonės nustatymų sprendimas.",
    },
    {
      id: "company-admin",
      title: "Įmonės / Administratoriaus valdymas",
      goal: "Leiskite transporto įmonėms valdyti keliones, vartotojus, leidimus ir darbo eigas iš vieno portalo.",
      appFoundation: "Vairuotojo duomenys ir veiksmai atspindi įmonės taisykles.",
      backendDependency: "Interneto įmonės portalas, platformos administravimo programėlė, vaidmenys, kelionių valdymas, dokumentų reikalavimai, įmonės mainų nustatymai.",
    },
    {
      id: "cmr-documents",
      title: "Skaitmeninis CMR ir dokumentai",
      goal: "Su kelione susiję dokumentai – CMR, važtaraštis, sąskaita faktūra, transporto priemonės ir vairuotojo dokumentai – tvarkomi struktūriškai.",
      appFoundation: "Dokumento įkėlimas, nuskaitymas/fotografavimas, kelionės paskyrimas, poreikiais pagrįstos užduotys, pirminio dokumento koncepcija.",
      backendDependency: "Dokumentų saugykla, metaduomenys, parašo taisyklės, įgaliojimų dalijimasis su apimties apribojimais.",
      disclaimer: "Skaitmeniniai dokumentai automatiškai neturi teisinės įrodomosios galios. Priėmimas skiriasi priklausomai nuo šalies ir kliento.",
    },
    {
      id: "completed-package",
      title: "Sukomplektuotas kelionės paketas",
      goal: "Apibendrinkite baigtos kelionės įrodymus eksportuojamame pakete.",
      appFoundation: "Kelionės uždarymas, vietiniai duomenys ir sinchronizuoti įvykiai yra paketo surinkimo pagrindas.",
      backendDependency: "Baigtas kelionės paketo generavimas, PDF eksportavimas, audito eksportavimas. Kai kurios sekcijos (pvz., padėklas / pakuotė PDF) išlieka priklausomybės.",
      disclaimer: "Paketas palaiko dokumentaciją; jis nepakeičia įmonės teisinio vertinimo ar įgaliojimų vykdymo procedūrų.",
    },
    {
      id: "messaging-notifications",
      title: "Žinutės ir pranešimai",
      goal: "Su kelione susietas bendravimas ir įspėjimai apie svarbius vairuotojo įvykius.",
      appFoundation: "Pranešimų sąrašas, su kelione susijusios gijos, programos pusės pranešimų pagrindas. Galima naudoti: naujam pranešimui, kelionės keitimui, dokumento užduočiai, sinchronizavimo problemai.",
      backendDependency: "Gamybos siuntimas (FCM/APNs), įrenginio prieigos rakto registracija, siuntimas iš serverio – atskira priklausomybė, dar neveikia.",
      disclaimer: "Tikslinis ekranas atidaromas po PIN. Gamybos postūmis nereiškia, kad kiekvienas įvykis atvyksta akimirksniu.",
    },
    {
      id: "pallet-packaging",
      title: "Padėklų ir pakuočių keitimas",
      goal: "Įrašykite padėklų ir pakuočių keitimą vienoje stotelėje, nurodydami kiekius, trūkumą, žalą ir ginčą.",
      appFoundation: "Atskiri padėklų ir pakavimo moduliai. Perjungiama įmonėje. Įmonė gali iš anksto nustatyti elementus; Jei leidžiama, vairuotojas gali pridėti pasirinktinę pakuotę. Išsaugoti ir sinchronizuoti neprisijungus.",
      backendDependency: "Keitimosi nustatymai API, įrašų sinchronizavimas, portalo administratoriaus vartotojo sąsaja, užbaigtas paketo PDF skyrius – pastaroji yra priklausomybė.",
      disclaimer: "PDF įrodymų skyrius nėra visiškai paruoštas visais atvejais. Įrašymas palaiko ginčo dokumentus, bet nesprendžia ginčų.",
    },
    {
      id: "adr-border",
      title: "ADR / kraštinių palaikymas",
      goal: "Greita pagalbinė informacija apie ADR ir sienų / muitinės kontekstą – kartu su oficialių šaltinių patikrinimu.",
      appFoundation: "ADR informacija, JT numerių paieška, tunelio kodo pagalbinė priemonė, sienos / muitinės metaduomenys, susieti su kelionėmis.",
      backendDependency: "ADR duomenų bazės atnaujinimai, konkrečios šalies taisyklių metaduomenys, pasienio kontrolės punktų duomenys.",
      disclaimer: "ADR ir tunelio duomenys yra pagalbinė informacija. Programėlė nepakeičia teisės aktų, mokymų, įmonės generalinio direktorato pareigūno ar valdžios sprendimų.",
    },
    {
      id: "truck-map",
      title: "Sunkvežimio žemėlapio pamatai",
      goal: "Laivyno ir kelionių apžvalga žemėlapyje – veiklos orientacija.",
      appFoundation: "Žemėlapio apžvalga, kelionės ir transporto priemonės konteksto rodymas.",
      backendDependency: "Telematikos teikėjo integracija, maršruto parinkimo teikėjas, tiesioginė padėtis – laipsniška integracija.",
      disclaimer: "Žemėlapis negarantuoja teisinių apribojimų ar leidimų laikymosi.",
    },
    {
      id: "daugiakalbis",
      title: "Daugiakalbis veikimas",
      goal: "Daugiakalbės komandos vienoje platformoje.",
      appFoundation: "Vairuotojo programos daugiakalbė vartotojo sąsaja, originalaus pranešimo išsaugojimas, vertimas kaip pagalba.",
      backendDependency: "Portalo ir viešosios svetainės lokalės išplėtimas, vertimo peržiūros darbo eiga.",
      disclaimer: "Mašininis arba AI vertimas yra pagalbinis; reikalinga žmogaus peržiūra. Originalus dokumentas išlieka pagrindinis.",
    },
    {
      id: "audit-support",
      title: "Prieiga prie audito ir palaikymo",
      goal: "Atsekamas rąstas; kontroliuojama pagalbos prieiga, skirta trikčių šalinimui.",
      appFoundation: "Įvykių registravimas kelionės ir dokumentų veiksmams; audituojamos palaikymo sesijos.",
      backendDependency: "Audito eksportas, palaikymo prieigos politika, įmonės leidimų matrica.",
      disclaimer: "Audito žurnalas nėra automatinis teisinis įrodymas.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR – atsakingas naudojimas",
      body: "ADR ir tunelio duomenys yra pagalbinė informacija. Visada reikia patikrinti oficialius šaltinius, lenteles ir galiojančias vietines taisykles. ViaNexis nepakeičia teisės aktų, ADR mokymų, įmonės pavojingų krovinių pareigūno ar valdžios sprendimų.",
    },
    aiOcr: {
      title: "AI, OCR ir vertimas",
      body: "AI santrauka, OCR ir automatinis vertimas yra pagalbinės priemonės. Reikia žmogaus peržiūros. Originalus dokumentas ir pranešimas išlieka pagrindiniai. Ne teisinės konsultacijos ir nepatvirtintas vertimas.",
    },
    efti: {
      title: "eFTI ir įgaliojimų bendrinimas",
      body: "ViaNexis nėra sertifikuota eFTI platforma. Tai nežada valdžios pripažinimo kiekvienoje šalyje. eFTI paruoštas pagrindas reiškia techninį pasirengimą, o ne sertifikatą ar licenciją.",
    },
  },
  home: {
    problem: {
      title: "Kasdieniai logistikos iššūkiai",
      subtitle: "Kai dokumentai, parašai ir įvykiai yra išsibarstę, nukenčia atsekamumas ir įrodymai.",
      cards: [
        {
          title: "Išmėtyti dokumentai",
          description: "Kelionės dokumentai el. paštu, pokalbiuose ar popieriuje – sunku susieti su tikrais įvykiais.",
        },
        {
          title: "Trūksta parašų",
          description: "Pavėluoti parašai arba jų trūkumas atitolina uždarymą ir padidina ginčų riziką.",
        },
        {
          title: "Sunkiai įrodomi įvykiai",
          description: "Paėmimas, pristatymas, padėklų keitimas, incidentas – be struktūrinių rąstų, sunkiai atsekami.",
        },
        {
          title: "Daugiakalbių komandų",
          description: "Kasdienių pranešimų nesusipratimai – reikalingas originalaus teksto išsaugojimas ir peržiūrėtas vertimas.",
        }
      ],
    },
    modules: {
      title: "Platformos moduliai",
      subtitle: "Tikslas, programos pagrindas, vidinė / administratoriaus priklausomybė – su teisiškai saugia formuluote.",
    },
    pallet: {
      title: "Padėklų ir pakuočių keitimas",
      subtitle: "Atskiri moduliai, perjungiami įmonėje – išsaugokite neprisijungę atliekant auditą.",
    },
    notifications: {
      title: "Žinutės ir pranešimai",
      subtitle: "Paruoštas programos pusės pagrindas – gamybos iškėlimas yra atskira užpakalinės programos priklausomybė.",
      cards: [
        {
          title: "Pranešimų įvykių tipai",
          description: "Naujas pranešimas, kelionės pakeitimas, dokumento užduotis, sinchronizavimo problema.",
        },
        {
          title: "Palieskite maršrutą ir PIN",
          description: "Atidaryti tikslinį ekraną iš pranešimo; gilioji nuoroda po PIN.",
        },
        {
          title: "Privatumo saugus užrakinimo ekranas",
          description: "Visas dokumento arba pranešimo turinys pagal numatytuosius nustatymus nerodomas užrakinimo ekrane.",
        }
      ],
      backendDepTitle: "Užpakalinės sistemos priklausomybė",
      backendDepBody: "Gamybos siuntimas (FCM/APNs), įrenginio prieigos rakto registracija ir serverio pusės siuntimas dar neveikia – reikia atskiro integravimo.",
    },
    disclaimersSection: {
      title: "Atsakingas naudojimas – svarbios pastabos",
    },
    security: {
      title: "Apsauga ir kontrolė",
      subtitle: "Įmonės ir vairuotojo apsauga su struktūrizuota dokumentacija.",
      cards: [
        {
          title: "Įmonės apsauga",
          description: "Reikalavimu pagrįsta dokumentacija, audituojami įvykiai, kontroliuojama prieiga.",
        },
        {
          title: "Vairuotojo apsauga",
          description: "Struktūrizuotas ginčų įvykių dokumentavimo procesas.",
        },
        {
          title: "Dokumentacijos pagrindas",
          description: "Su kelionėmis susiję dokumentai ir renginiai vienoje sistemoje.",
        },
        {
          title: "Audituojami įvykiai",
          description: "Kas ką ir kada padarė – registravosi ir galima ieškoti.",
        }
      ],
      notPromiseTitle: "Ne pažadas",
      notPromiseBody: "ViaNexis nežada automatinės teisinės įrodomosios galios. Teisinis vertinimas priklauso nuo konteksto.",
    },
    contact: {
      title: "Kontaktinis ir vidinis testavimas",
      subtitle: "Kontroliuojama prieiga – ne automatinė registracija, nėra viešo „Play“ atsisiuntimo.",
      body: "Vairuotojo programa yra ruošiama „Google Play“ vidiniam testavimui. Parengta išleidimui ir vyksta Samsung UAT. Aktyvinimas nėra automatinis.",
      consentNote: "Sistema tvarko dokumentus, vairuotojų darbo eigas, įmonės duomenis ir leidimus – kiekviena prieiga peržiūrima individualiai.",
      contactLink: "Susisiekite su mumis →",
    },
  },
  contactForm: {
    title: "Susisiekite su mumis",
    subtitle: "Susidomėjimas ViaNexis platforma – ne automatinė registracija.",
    name: "Vardas *",
    company: "Įmonė *",
    email: "El. paštas*",
    phone: "Telefonas",
    message: "žinutė*",
    interestType: "Pomėgių tipas *",
    interestPlaceholder: "Pasirinkite...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Vairuotojo programa",
      },
      {
        value: "company-admin",
        label: "Įmonės / Administratoriaus platforma",
      },
      {
        value: "dokumentus",
        label: "Dokumentų valdymas",
      },
      {
        value: "pallet-packaging",
        label: "Padėklas / pakuotė",
      },
      {
        value: "adr-customs",
        label: "ADR / muitinės palaikymas",
      },
      {
        value: "kitas",
        label: "Kita",
      }
    ],
    consent: "Sutinku, kad ViaNexis pateiktus duomenis tvarkytų tik kontaktiniais tikslais. *",
    submit: "Siųsti žinutę",
    submitMailto: "Siųsti el",
    intakeDisabled: "Rengiamas potencialių klientų pateikimas internetu. Naudokite el. pašto adresą arba bandykite dar kartą vėliau.",
    successTitle: "Gautas pranešimas",
    successBody: "Dėkojame už susidomėjimą. Mūsų komanda susisieks su jumis. Prieigos aktyvinimas nėra automatinis.",
    newSubmission: "Nauja žinutė",
    errors: {
      name: "Vardas yra būtinas.",
      company: "Reikalinga įmonė.",
      email: "Būtinas el.",
      emailInvalid: "Įveskite galiojantį el. pašto adresą.",
      message: "Reikalingas pranešimas.",
      interest: "Pasirinkite interesų tipą.",
      consent: "Būtinas sutikimas.",
      submitFailed: "Nepavyko išsiųsti pranešimo. Vietoj to pabandykite el.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Valdžios patikrinimo paketas",
        description: "Su kelione susieti dokumentai ir įvykiai ribotos apimties bendrame pakete.",
      },
      {
        title: "Apimtis / laikas ribota prieiga",
        description: "QR pagrįsta ribota prieiga – nevieša.",
      },
      {
        title: "Auditas",
        description: "Užregistruota prieiga ir bendrinimo įvykiai.",
      },
      {
        title: "eFTI paruoštas pagrindas",
        description: "Techninė bazė būsimai integracijai – ne sertifikavimas.",
      }
    ],
  },
  legal: {
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
          body: "Vairuotojas ir įmonė yra atsakingi už kelionę, dokumentus, __APSAUGOS_10__ ir muitinės laikymąsi. Programa palaiko dokumentus – nepakeičia teisinių patarimų, ADR ekspertų ar valdžios institucijų.",
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
  },
  legal: legalLt,
};
