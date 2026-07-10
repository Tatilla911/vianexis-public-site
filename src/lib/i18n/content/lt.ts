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
  legal: legalLt,
};
