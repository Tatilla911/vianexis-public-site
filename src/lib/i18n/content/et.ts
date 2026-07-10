import type { SiteContent } from "../types";
import { legalEt } from "./legal/et";

export const contentEt: SiteContent = {
  meta: {
    title: "ViaNexis Autojuhi ja ettevõtte transporditoimingud",
    description: "Juhirakendus, ettevõtte juhtimine, dokumendihaldus, sõnumside, teavitused ja mitmekeelsed reisi töövood ühes süsteemis. Sisetesti ettevalmistamine on pooleli.",
    ogLocale: "et_EE",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Omadused",
    driverApp: "Draiveri rakendus",
    companyPortal: "Ettevõtte portaal",
    documents: "Dokumendid",
    authorityEfti: "Asutus / eFTI",
    security: "Turvalisus",
    pilot: "Piloodi juurdepääs",
    contact: "Võtke ühendust",
    requestAccess: "Taotle juurdepääsu",
    menuOpen: "Ava menüü",
  },
  footer: {
    tagline: "Digitaalsed transporditõendid ja juhtide tööplatvorm transpordiettevõtetele. eFTI-valmis vundament – ​​pole sertifitseeritud eFTI platvorm.",
    product: "Toode",
    legal: "Juriidiline",
    legalNotice: "Õiguslik teade",
    privacy: "Privaatsuspoliitika",
    terms: "Kasutustingimused",
    disclaimers: "Vastutustundlik kasutamine",
    dataContact: "Andmekaitse kontakt",
    copyright: "Pole sertifitseeritud eFTI platvorm. Ei luba volituste aktsepteerimist, automaatset juriidilist tõendusjõudu, veatuid OCR/AI/tõlke- ega hädaabi-/SOS teenuseid. Avalikku Play poe allalaadimist pole.",
  },
  hero: {
    title: "ViaNexis – digitaalne transpordi tõendusmaterjal ja juhi tööplatvorm",
    subtitle: "Juhirakendus, ettevõtte juhtimine, dokumendihaldus, sõnumside, teavitused ja mitmekeelsed reisi töövood ühes süsteemis.",
    primaryCta: "Võtke meiega ühendust",
    secondaryCta: "Sisetesti ettevalmistamine on pooleli",
    stats: [
      {
        label: "Draiveri rakendus",
        value: "Reis + võrguühenduseta",
      },
      {
        label: "Dokumendid",
        value: "CMR + audit",
      },
      {
        label: "Sõnumid",
        value: "Mitmekeelne",
      },
      {
        label: "Olek",
        value: "Ettevalmistus sisemiseks testiks",
      }
    ],
  },
  platformStatus: {
    title: "Praegune olek",
    items: [
      "Google Play sisetesti ettevalmistamine on pooleli – mitte allalaadimine avalikust poest.",
      "Draiverirakenduse väljalaskevalmidus ja Samsungi UAT on pooleli.",
      "Tootmise taustaprogramm, tõukemärguanded ja partnerite integratsioonid ühendatakse järk-järgult."
    ],
    disclaimer: "ViaNexis ei väida, et süsteem on aktiivne, sertifitseeritud või ametlikult aktsepteeritud kõigis riikides.",
  },
  moduleLabels: {
    goal: "Eesmärk",
    appFoundation: "Rakendusepoolne vundament",
    backendDependency: "Taustaprogrammi/administraatori sõltuvus",
    important: "Tähtis",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Draiveri rakendus",
      goal: "Laske juhtidel lahendada reisiga seotud ülesandeid, dokumente ja sündmusi mobiilis – nii võrgus kui ka võrguühenduseta.",
      appFoundation: "Reisiloend ja üksikasjad, dokumendi üleslaadimine, allkirja püüdmine, kontrollnimekirjad, juhtumite logimine, võrguühenduseta salvestamine ja sünkroonimine, PIN-kaitstud seanss.",
      backendDependency: "Reaalajas API, rentniku ulatus, reisi ja dokumentide sünkroonimine, ettevõtte sätete eraldusvõime.",
    },
    {
      id: "company-admin",
      title: "Ettevõtte/administraatori juhtimine",
      goal: "Laske transpordiettevõtetel hallata reise, kasutajaid, õigusi ja töövooge ühest portaalist.",
      appFoundation: "Juhipoolsed andmed ja tegevused kajastavad ettevõtte reegleid.",
      backendDependency: "Ettevõtte veebiportaal, platvormi administraatori rakendus, rollid, reiside haldamine, dokumendinõuded, ettevõtte vahetuse seaded.",
    },
    {
      id: "cmr-documents",
      title: "Digitaalne CMR ja dokumendid",
      goal: "Reisiga seotud dokumente – CMR, saatelehte, arve, sõiduki ja juhi paberiid – hallatakse struktureeritult.",
      appFoundation: "Dokumendi üleslaadimine, skaneerimine/foto, reisi määramine, nõuetepõhised ülesanded, esmase dokumendi kontseptsioon.",
      backendDependency: "Dokumentide salvestamine, metaandmed, allkirjareeglid, volituste jagamine ulatuse piirangutega.",
      disclaimer: "Digidokumentidel ei ole automaatselt õiguslikku tõendusjõudu. Vastuvõtt on riigiti ja klienditi erinev.",
    },
    {
      id: "completed-package",
      title: "Täidetud reisipakett",
      goal: "Tehke kokkuvõte lõppenud reisi tõenditest eksporditavas pakendis.",
      appFoundation: "Reisi sulgemine, kohalikud andmed ja sünkroonitud sündmused paketi kokkupaneku aluseks.",
      backendDependency: "Lõpetatud reisipaketi genereerimine, PDF eksport, auditi eksport. Mõned sektsioonid (nt kaubaalus/pakend PDF) jäävad sõltuvusse.",
      disclaimer: "Pakett toetab dokumentatsiooni; see ei asenda äriühingu õiguslikku hinnangut ega volitusmenetlust.",
    },
    {
      id: "messaging-notifications",
      title: "Sõnumid ja märguanded",
      goal: "Reisiga seotud side ja hoiatused juhi oluliste sündmuste kohta.",
      appFoundation: "Sõnumiloend, reisiga seotud lõimed, rakendusepoolne teavitusfond. Kasutatav: uus sõnum, reisi muutmine, dokumendiülesanne, sünkroonimisprobleem.",
      backendDependency: "Tootmise tõuge (FCM/APNs), seadme loa registreerimine, serveripoolne saatmine – eraldi sõltuvus, ei ole veel saadaval.",
      disclaimer: "Sihtkuva avaneb pärast PIN. Tootmistõuge ei väida, et iga sündmus saabub kohe.",
    },
    {
      id: "pallet-packaging",
      title: "Kaubaaluste ja pakendite vahetus",
      goal: "Registreerige kaubaaluste ja pakendite vahetus peatuse kohta koguste, puuduse, kahjustuste ja vaidlustega.",
      appFoundation: "Eraldi kaubaalused ja pakendimoodulid. Ettevõtte vahel vahetatav. Ettevõte saab üksusi eelseadistada; juht saab lisada kohandatud pakendi, kui see on lubatud. Võrguühenduseta salvestamine ja sünkroonimine.",
      backendDependency: "Vahetusseaded API, kirje sünkroonimine, portaali administraatori kasutajaliides, lõpetatud pakett PDF – viimane on sõltuvus.",
      disclaimer: "PDF tõendite jaotis ei ole kõigil juhtudel täielikult valmis. Salvestamine toetab vaidluste dokumenteerimist, kuid ei lahenda vaidlusi.",
    },
    {
      id: "adr-border",
      title: "ADR / piirde tugi",
      goal: "Kiire abiteave ADR ja piiride/tollikonteksti jaoks – koos ametlike allikate kontrollimisega.",
      appFoundation: "ADR teave, ÜRO numbri otsing, tunnelikoodi abimees, reisidega seotud piiri/tolli metaandmed.",
      backendDependency: "ADR andmebaasi värskendused, riigipõhised reeglite metaandmed, piiripunktide andmed.",
      disclaimer: "ADR ja tunneli andmed on abiteave. Rakendus ei asenda seadusandlust, koolitust, ettevõtte peadirektoraadi ametnikku ega ametiasutuste otsuseid.",
    },
    {
      id: "truck-map",
      title: "Veoauto kaardi vundament",
      goal: "Laevastiku ja reiside ülevaade kaardil — operatiivorientatsioon.",
      appFoundation: "Kaardipõhine ülevaade, reisi ja sõiduki konteksti kuva.",
      backendDependency: "Telemaatika pakkuja integreerimine, marsruutimise pakkuja, reaalajas asukoht — järkjärguline integreerimine.",
      disclaimer: "Kaart ei taga seaduslike piirangute ega lubade täitmist.",
    },
    {
      id: "mitmekeelne",
      title: "Mitmekeelne toimimine",
      goal: "Mitmekeelsed meeskonnad ühel platvormil.",
      appFoundation: "Juhirakenduse mitmekeelne kasutajaliides, originaalsõnumi säilitamine, tõlge abina.",
      backendDependency: "Portaali ja avaliku saidi lokaadi laiendamine, tõlkeülevaatuse töövoog.",
      disclaimer: "Masintõlge või AI on abistav; inimese ülevaatus on vajalik. Algdokument jääb esmaseks.",
    },
    {
      id: "audit-support",
      title: "Juurdepääs auditile ja toele",
      goal: "Jälgitav palk; kontrollitud juurdepääs tõrkeotsingule.",
      appFoundation: "Sündmuste logimine reisi- ja dokumenditoimingute jaoks; auditeeritavad tugiseansid.",
      backendDependency: "Auditi eksport, tugi juurdepääsupoliitika, ettevõtte lubade maatriks.",
      disclaimer: "Auditilogi ei ole automaatne juriidiline tõend.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — vastutustundlik kasutamine",
      body: "ADR ja tunneli andmed on abiteave. Ametlikud allikad, tabelid ja kehtivad kohalikud reeglid tuleb alati kontrollida. ViaNexis ei asenda seadusandlust, ADR koolitust, ettevõtte ohtlike kaupade ametnikku ega ametiasutuste otsuseid.",
    },
    aiOcr: {
      title: "AI, PIN ja tõlge",
      body: "AI kokkuvõte, OCR ja automaatne tõlge on abivahendid. Inimlik ülevaatus on vajalik. Algdokument ja sõnum jäävad esmaseks. Ei ole juriidiline nõustamine ega kinnitatud tõlge.",
    },
    efti: {
      title: "eFTI ja volituste jagamine",
      body: "ViaNexis ei ole sertifitseeritud eFTI platvorm. See ei luba autoriteedi aktsepteerimist igas riigis. eFTI-valmis vundament tähendab tehnilist valmisolekut – mitte sertifikaati või litsentsi.",
    },
  },
  home: {
    problem: {
      title: "Igapäevased logistika väljakutsed",
      subtitle: "Kui dokumendid, allkirjad ja sündmused on hajutatud, kannatab jälgitavus ja tõendamine.",
      cards: [
        {
          title: "Dokumendid laiali",
          description: "Reisipaberid meilis, vestluses või paberkandjal – raske seostada tegelike sündmustega.",
        },
        {
          title: "Puuduvad allkirjad",
          description: "Hilinenud või puuduvad allkirjad viivitavad sulgemist ja suurendavad vaidluste riski.",
        },
        {
          title: "Raskesti tõestatavad sündmused",
          description: "Korjamine, kohaletoimetamine, kaubaaluste vahetus, vahejuhtum – ilma struktureeritud palkideta, raskesti jälgitav.",
        },
        {
          title: "Mitmekeelsed meeskonnad",
          description: "Igapäevased sõnumite arusaamatused – nõutav on originaalteksti säilitamine ja ülevaadatud tõlge.",
        }
      ],
    },
    modules: {
      title: "Platvormi moodulid",
      subtitle: "Eesmärk, rakendusepoolne alus, taustaprogrammi/administraatori sõltuvus – juriidiliselt ohutu sõnastusega.",
    },
    pallet: {
      title: "Kaubaaluste ja pakendite vahetus",
      subtitle: "Eraldi moodulid, ettevõtte vahel vahetatavad – võrguühenduseta salvestamine auditi jaoks.",
    },
    notifications: {
      title: "Sõnumid ja märguanded",
      subtitle: "Rakendusepoolne sihtasutus on valmis – tootmistõuge on eraldi taustaprogrammi sõltuvus.",
      cards: [
        {
          title: "Teavitussündmuste tüübid",
          description: "New message, trip change, document task, sync issue.",
        },
        {
          title: "Puudutage marsruutimist ja PIN",
          description: "Open target screen from notification; deep link after PIN.",
        },
        {
          title: "Privaatsuskindel lukustusekraan",
          description: "Kogu dokumendi või sõnumi sisu ei kuvata vaikimisi lukustuskuval.",
        }
      ],
      backendDepTitle: "Taustaprogrammi sõltuvus",
      backendDepBody: "Tootmistõuke (FCM/APNs), seadme loa registreerimine ja serveripoolne saatmine ei ole veel aktiivsed – vaja on eraldi integreerimist.",
    },
    disclaimersSection: {
      title: "Vastutustundlik kasutamine – olulised märkused",
    },
    security: {
      title: "Protection and control",
      subtitle: "Ettevõtte ja juhi kaitse struktureeritud dokumentatsiooniga.",
      cards: [
        {
          title: "Ettevõtte kaitse",
          description: "Nõudepõhine dokumentatsioon, auditeeritavad sündmused, kontrollitud juurdepääs.",
        },
        {
          title: "Juhi kaitse",
          description: "Struktureeritud protsess vaidluste sündmuste dokumenteerimiseks.",
        },
        {
          title: "Dokumentatsiooni selgroog",
          description: "Reisiga seotud paberid ja sündmused ühes süsteemis.",
        },
        {
          title: "Auditeeritavad sündmused",
          description: "Kes mida ja millal tegi – logitud ja otsitav.",
        }
      ],
      notPromiseTitle: "Mitte lubadus",
      notPromiseBody: "ViaNexis ei luba automaatset õiguslikku tõendusjõudu. Õiguslik hinnang sõltub kontekstist.",
    },
    contact: {
      title: "Kontakt ja sisetestimine",
      subtitle: "Kontrollitud juurdepääs – pole automaatset registreerimist ega avalikku Play allalaadimist.",
      body: "Draiveri rakendus on Google Play sisetesti ettevalmistamisel. Väljalaskevalmidus ja Samsungi UAT on pooleli. Aktiveerimine ei ole automaatne.",
      consentNote: "Süsteem haldab dokumente, draiverite töövooge, ettevõtte andmeid ja õigusi – iga juurdepääs vaadatakse eraldi üle.",
      contactLink: "Võtke meiega ühendust →",
    },
  },
  contactForm: {
    title: "Võtke meiega ühendust",
    subtitle: "Huvi platvormi ViaNexis vastu – mitte automaatne registreerimine.",
    name: "nimi *",
    company: "Ettevõte*",
    email: "meil*",
    phone: "Telefon",
    message: "sõnum*",
    interestType: "Huvi tüüp *",
    interestPlaceholder: "Vali...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Draiveri rakendus",
      },
      {
        value: "company-admin",
        label: "Ettevõtte / administraatori platvorm",
      },
      {
        value: "dokumente",
        label: "Dokumendihaldus",
      },
      {
        value: "pallet-packaging",
        label: "Kaubaalus / pakend",
      },
      {
        value: "adr-customs",
        label: "ADR / tolli tugi",
      },
      {
        value: "muud",
        label: "muud",
      }
    ],
    consent: "Nõustun, et ViaNexis töötleb esitatud andmeid ainult kontakteerumise eesmärgil. *",
    submit: "Saada sõnum",
    submitMailto: "Saada meil",
    intakeDisabled: "Ettevalmistamisel on müügivihje veebipõhine esitamine. Kasutage meilikontakti või proovige hiljem uuesti.",
    successTitle: "Sõnum vastu võetud",
    successBody: "Täname teid huvi eest. Meie meeskond võtab teiega ühendust. Juurdepääsu aktiveerimine ei ole automaatne.",
    newSubmission: "Uus sõnum",
    errors: {
      name: "Nimi on kohustuslik.",
      company: "Ettevõte on nõutav.",
      email: "E-post on kohustuslik.",
      emailInvalid: "Sisestage kehtiv e-posti aadress.",
      message: "Sõnum on kohustuslik.",
      interest: "Valige huvi tüüp.",
      consent: "Nõusolek on vajalik.",
      submitFailed: "Sõnumit ei saanud saata. Proovige selle asemel meili.",
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
        title: "Ametiasutuse kontrolli pakett",
        description: "Reisiga seotud dokumendid ja sündmused piiratud ulatusega jagatud paketis.",
      },
      {
        title: "Juurdepääs ulatus/ajaliselt piiratud",
        description: "QR-põhine piiratud juurdepääs – pole avalik.",
      },
      {
        title: "Audit",
        description: "Logitud juurdepääs ja sündmuste jagamine.",
      },
      {
        title: "eFTI-valmidusega jumestuskreem",
        description: "Tehniline baas tulevaseks integratsiooniks – mitte sertifitseerimiseks.",
      },
    ],
  },

  legal: legalEt,
};
