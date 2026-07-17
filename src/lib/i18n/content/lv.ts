import type { SiteContent } from "../types";
import { legalLv } from "./legal/lv";

export const contentLv: SiteContent = {
  meta: {
    title: "ViaNexis Šoferu un uzņēmuma transporta operācijas",
    description: "Vadītāja lietotne, uzņēmuma vadība, dokumentu pārvaldība, ziņojumapmaiņa, paziņojumi un daudzvalodu ceļojumu darbplūsmas vienā sistēmā. Notiek iekšējās pārbaudes sagatavošana.",
    ogLocale: "lv_LV",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Funkcijas",
    driverApp: "Vadītāja lietotne",
    companyPortal: "Uzņēmuma portāls",
    documents: "Dokumenti",
    authorityEfti: "Iestāde / eFTI",
    security: "Drošība",
    pilot: "Pilota piekļuve",
    contact: "Sazināties",
    requestAccess: "Pieprasīt piekļuvi",
    menuOpen: "Atvērt izvēlni",
  },
  footer: {
    tagline: "Digitālā transporta pierādījumu un vadītāju operāciju platforma transporta uzņēmumiem. eFTI gatavs pamats — nav sertificēta eFTI platforma.",
    product: "Produkts",
    legal: "Juridisks",
    legalNotice: "Juridisks paziņojums",
    privacy: "Privātuma politika",
    terms: "Lietošanas noteikumi",
    disclaimers: "Atbildīga lietošana",
    dataContact: "Datu aizsardzības kontaktpersona",
    copyright: "Nav sertificēta eFTI platforma. Nesola pilnvaru pieņemšanu, automātisku juridisko pierādījuma spēku, nevainojamus OCR/AI/tulkojumu vai ārkārtas/SOS pakalpojumus. Nav publiskas Play veikala lejupielādes.",
  },
  hero: {
    title: "ViaNexis — digitāla transporta pierādījumu un vadītāja operāciju platforma",
    subtitle: "Vadītāja lietotne, uzņēmuma vadība, dokumentu pārvaldība, ziņojumapmaiņa, paziņojumi un daudzvalodu ceļojumu darbplūsmas vienā sistēmā.",
    primaryCta: "Sazinieties ar mums",
    secondaryCta: "Notiek iekšējās pārbaudes sagatavošana",
    stats: [
      {
        label: "Vadītāja lietotne",
        value: "Ceļojums + bezsaistē",
      },
      {
        label: "Dokumenti",
        value: "CMR + audits",
      },
      {
        label: "Ziņapmaiņa",
        value: "Daudzvalodu",
      },
      {
        label: "Statuss",
        value: "Iekšējās pārbaudes sagatavošana",
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
    goal: "Mērķis",
    appFoundation: "Lietojumprogrammas puses tonālais krēms",
    backendDependency: "Aizmugursistēmas/administratora atkarība",
    important: "Svarīgi",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Vadītāja lietotne",
      goal: "Ļaujiet vadītājiem mobilajā ierīcē veikt ar ceļojumu saistītus uzdevumus, dokumentus un notikumus — tiešsaistē un bezsaistē.",
      appFoundation: "Ceļojumu saraksts un informācija, dokumentu augšupielāde, parakstu tveršana, kontrolsaraksti, incidentu reģistrēšana, bezsaistes saglabāšana un sinhronizācija, PIN aizsargāta sesija.",
      backendDependency: "Tiešraides API, nomnieka darbības joma, ceļojumu un dokumentu sinhronizācija, uzņēmuma iestatījumu izšķirtspēja.",
    },
    {
      id: "company-admin",
      title: "Uzņēmuma/Administratora kontrole",
      goal: "Ļaujiet transporta uzņēmumiem pārvaldīt braucienus, lietotājus, atļaujas un darbplūsmas no viena portāla.",
      appFoundation: "Vadītāja puses dati un darbības atspoguļo uzņēmuma noteikumus.",
      backendDependency: "Uzņēmuma tīmekļa portāls, platformas administratora lietotne, lomas, ceļojumu pārvaldība, dokumentu prasības, uzņēmuma apmaiņas iestatījumi.",
    },
    {
      id: "cmr-documents",
      title: "Digitālais CMR un dokumenti",
      goal: "Ar ceļojumu saistītie dokumenti — CMR, pavadzīme, rēķins, transportlīdzekļa un vadītāja dokumenti — tiek pārvaldīti strukturētā veidā.",
      appFoundation: "Dokumentu augšupielāde, skenēšana/fotografēšana, brauciena uzdevums, uz prasībām balstīti uzdevumi, primārā dokumenta koncepcija.",
      backendDependency: "Dokumentu glabāšana, metadati, parakstu noteikumi, pilnvaru koplietošana ar tvēruma ierobežojumiem.",
      disclaimer: "Digitālajiem dokumentiem nav automātiski juridisks pierādījuma spēks. Pieņemšana atšķiras atkarībā no valsts un klienta.",
    },
    {
      id: "completed-package",
      title: "Pabeigta ceļojuma pakete",
      goal: "Apkopojiet pabeigtā brauciena pierādījumus eksportējamā iepakojumā.",
      appFoundation: "Ceļojuma slēgšana, vietējie dati un sinhronizētie notikumi kā pamats pakotnes komplektēšanai.",
      backendDependency: "Pabeigta ceļojuma pakotnes ģenerēšana, PDF eksportēšana, audita eksportēšana. Dažas sadaļas (piemēram, palete/iepakojums PDF) joprojām ir atkarīgas.",
      disclaimer: "Pakete atbalsta dokumentāciju; tas neaizstāj uzņēmuma juridisko novērtējumu vai pilnvaru procedūru.",
    },
    {
      id: "messaging-notifications",
      title: "Ziņapmaiņa un paziņojumi",
      goal: "Ar braucienu saistīta komunikācija un brīdinājumi par svarīgiem autovadītāja notikumiem.",
      appFoundation: "Ziņojumu saraksts, ar ceļojumu saistīti pavedieni, lietotnes puses paziņojumu fonds. Izmantojams: jaunam ziņojumam, ceļojuma maiņai, dokumenta uzdevumam, sinhronizācijas problēmai.",
      backendDependency: "Ražošanas push (FCM/APNs), ierīces marķiera reģistrācija, servera puses nosūtīšana — atsevišķa atkarība, vēl nav pieejama.",
      disclaimer: "Mērķa ekrāns tiek atvērts pēc PIN. Ražošanas virzība neapgalvo, ka katrs notikums ierodas uzreiz.",
    },
    {
      id: "pallet-packaging",
      title: "Palešu un iepakojuma maiņa",
      goal: "Reģistrējiet palešu un iepakojuma apmaiņu katrā pieturā, norādot daudzumus, trūkumu, bojājumus un strīdus.",
      appFoundation: "Atsevišķi palešu un iepakojuma moduļi. Pārslēdzams uzņēmumā. Uzņēmums var iepriekš iestatīt vienumus; vadītājs var pievienot pielāgotu iepakojumu, ja tas ir atļauts. Saglabāšana un sinhronizācija bezsaistē.",
      backendDependency: "Apmaiņas iestatījumi API, ierakstu sinhronizācija, portāla administratora lietotāja saskarne, pabeigta pakotnes sadaļa PDF — pēdējā ir atkarība.",
      disclaimer: "PDF pierādījumu sadaļa nav pilnībā gatava visos gadījumos. Ierakstīšana atbalsta strīdu dokumentāciju, bet neizšķir strīdus.",
    },
    {
      id: "adr-border",
      title: "ADR / apmales atbalsts",
      goal: "Ātra palīginformācija par ADR un robežu/muitas kontekstu — līdztekus oficiālo avotu pārbaudei.",
      appFoundation: "ADR informācija, ANO numura meklēšana, tuneļa koda palīgs, robežu/muitas metadati, kas saistīti ar braucieniem.",
      backendDependency: "ADR datu bāzes atjauninājumi, valstij specifisku noteikumu metadati, robežkontroles punktu dati.",
      disclaimer: "ADR un tuneļa dati ir palīginformācija. Lietotne neaizstāj tiesību aktus, apmācību, uzņēmuma ģenerāldirektorāta amatpersonu vai iestāžu lēmumus.",
    },
    {
      id: "truck-map",
      title: "Kravas automašīnu kartes pamats",
      goal: "Flotes un braucienu pārskats kartē — operatīvā orientācija.",
      appFoundation: "Uz kartes balstīts pārskats, brauciena un transportlīdzekļa konteksta displejs.",
      backendDependency: "Telemātikas nodrošinātāja integrācija, maršrutēšanas nodrošinātājs, tiešā pozīcija — pakāpeniska integrācija.",
      disclaimer: "Karte negarantē atbilstību juridiskajiem ierobežojumiem vai atļaujām.",
    },
    {
      id: "daudzvalodu",
      title: "Daudzvalodu darbība",
      goal: "Daudzvalodu komandas vienā platformā.",
      appFoundation: "Vadītāja lietotnes daudzvalodu lietotāja saskarne, oriģinālo ziņojumu saglabāšana, tulkošana kā palīdzība.",
      backendDependency: "Portāla un publisko vietņu lokalizācijas paplašināšana, tulkojumu pārskatīšanas darbplūsma.",
      disclaimer: "Mašīntulkošana vai AI tulkojums ir palīgs; nepieciešama cilvēka pārbaude. Sākotnējais dokuments paliek primārais.",
    },
    {
      id: "audit-support",
      title: "Piekļuve auditam un atbalstam",
      goal: "Izsekojams baļķis; kontrolēta atbalsta piekļuve problēmu novēršanai.",
      appFoundation: "Notikumu reģistrēšana ceļojumu un dokumentu darbībām; auditējamas atbalsta sesijas.",
      backendDependency: "Audita eksports, atbalsta piekļuves politika, uzņēmuma atļauju matrica.",
      disclaimer: "Audita žurnāls nav automātisks juridisks pierādījums.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — atbildīga lietošana",
      body: "ADR un tuneļa dati ir palīginformācija. Oficiālie avoti, tabulas un pašreizējie vietējie noteikumi vienmēr ir jāpārbauda. ViaNexis neaizstāj tiesību aktus, ADR apmācību, uzņēmuma bīstamo kravu amatpersonu vai iestāžu lēmumus.",
    },
    aiOcr: {
      title: "AI, OCR un tulkojums",
      body: "AI kopsavilkums, OCR un automātiskā tulkošana ir palīgrīki. Nepieciešama cilvēka pārbaude. Sākotnējais dokuments un ziņojums paliek primārais. Nav juridiskas konsultācijas un nav apstiprināts tulkojums.",
    },
    efti: {
      title: "eFTI un pilnvaru kopīgošana",
      body: "ViaNexis nav sertificēta eFTI platforma. Tas nesola autoritātes pieņemšanu katrā valstī. eFTI-gatavs pamats nozīmē tehnisko sagatavotību, nevis sertifikātu vai licenci.",
    },
  },
  home: {
    problem: {
      title: "Ikdienas loģistikas izaicinājumi",
      subtitle: "Ja dokumenti, paraksti un notikumi ir izkaisīti, tiek traucēta izsekojamība un pierādījumi.",
      cards: [
        {
          title: "Izkaisīti dokumenti",
          description: "Ceļojumu dokumenti e-pastā, tērzēšanā vai papīra formātā — grūti saistīt ar faktiskiem notikumiem.",
        },
        {
          title: "Trūkst parakstu",
          description: "Novēloti parakstīti vai trūkstošie paraksti aizkavē slēgšanu un palielina strīdu risku.",
        },
        {
          title: "Grūti pierādāmi notikumi",
          description: "Saņemšana, piegāde, palešu maiņa, incidents — bez strukturētiem baļķiem, grūti izsekojami.",
        },
        {
          title: "Daudzvalodu komandas",
          description: "Ikdienas ziņojumu pārpratumi — nepieciešama oriģinālā teksta saglabāšana un pārskatīts tulkojums.",
        }
      ],
    },
    modules: {
      title: "Platformas moduļi",
      subtitle: "Mērķis, lietotnes puses pamats, aizmugursistēmas/administratora atkarība — ar juridiski drošu formulējumu.",
    },
    pallet: {
      title: "Palešu un iepakojuma maiņa",
      subtitle: "Atsevišķi moduļi, pārslēdzami uzņēmumā — saglabājiet bezsaistē, lai veiktu auditu.",
    },
    notifications: {
      title: "Ziņapmaiņa un paziņojumi",
      subtitle: "Gatavs lietojumprogrammas pamats — ražošanas push ir atsevišķa aizmugursistēmas atkarība.",
      cards: [
        {
          title: "Paziņojumu notikumu veidi",
          description: "Jauns ziņojums, ceļojuma maiņa, dokumenta uzdevums, sinhronizācijas problēma.",
        },
        {
          title: "Pieskarieties maršrutēšanai un PIN",
          description: "Atvērt mērķa ekrānu no paziņojuma; dziļā saite pēc PIN.",
        },
        {
          title: "Privātumam drošs bloķēšanas ekrāns",
          description: "Pilns dokumenta vai ziņojuma saturs pēc noklusējuma netiek rādīts bloķēšanas ekrānā.",
        }
      ],
      backendDepTitle: "Aizmugursistēmas atkarība",
      backendDepBody: "Ražošanas push (FCM/APNs), ierīces marķiera reģistrācija un servera puses nosūtīšana vēl nav pieejama — ir nepieciešama atsevišķa integrācija.",
    },
    disclaimersSection: {
      title: "Atbildīga lietošana — svarīgi norādījumi",
    },
    security: {
      title: "Aizsardzība un kontrole",
      subtitle: "Uzņēmuma un vadītāja aizsardzība ar strukturētu dokumentāciju.",
      cards: [
        {
          title: "Uzņēmuma aizsardzība",
          description: "Uz prasībām balstīta dokumentācija, auditējami notikumi, kontrolēta piekļuve.",
        },
        {
          title: "Vadītāja aizsardzība",
          description: "Strukturēts process strīdu notikumu dokumentēšanai.",
        },
        {
          title: "Dokumentācijas mugurkauls",
          description: "Ar ceļojumiem saistīti dokumenti un pasākumi vienā sistēmā.",
        },
        {
          title: "Auditējami notikumi",
          description: "Kurš ko darīja, kad — reģistrēts un meklējams.",
        }
      ],
      notPromiseTitle: "Nav solījums",
      notPromiseBody: "ViaNexis nesola automātisku juridisko pierādījuma spēku. Juridiskais vērtējums ir atkarīgs no konteksta.",
    },
    contact: {
      title: "Kontaktu un iekšējā pārbaude",
      subtitle: "Kontrolēta piekļuve — ne automātiska reģistrācija, ne publiska Play lejupielāde.",
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
      consentNote: "Sistēma apstrādā dokumentus, draiveru darbplūsmas, uzņēmuma datus un atļaujas — katra piekļuve tiek atsevišķi pārskatīta.",
      contactLink: "Sazinieties ar mums →",
    },
  },
  contactForm: {
    title: "Sazinieties ar mums",
    subtitle: "Interese par ViaNexis platformu — nav automātiska reģistrācija.",
    name: "Vārds*",
    company: "Company *",
    email: "E-pasts*",
    phone: "Tālrunis",
    message: "Ziņa*",
    interestType: "Interešu veids*",
    interestPlaceholder: "Izvēlieties...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Vadītāja lietotne",
      },
      {
        value: "company-admin",
        label: "Uzņēmuma/Administratora platforma",
      },
      {
        value: "dokumentus",
        label: "Dokumentu pārvaldība",
      },
      {
        value: "pallet-packaging",
        label: "Palete / iepakojums",
      },
      {
        value: "adr-customs",
        label: "ADR / muitas atbalsts",
      },
      {
        value: "cits",
        label: "Cits",
      }
    ],
    consent: "Es piekrītu, ka ViaNexis apstrādā sniegtos datus tikai saziņas nolūkos. *",
    submit: "Nosūtīt ziņu",
    submitMailto: "Nosūtīt e-pastu",
    intakeDisabled: "Tiek gatavota potenciālo pirkumu iesniegšana tiešsaistē. Izmantojiet e-pasta kontaktpersonu vai vēlāk mēģiniet vēlreiz.",
    successTitle: "Ziņa saņemta",
    successBody: "Paldies par interesi. Mūsu komanda ar jums sazināsies. Piekļuves aktivizēšana nav automātiska.",
    newSubmission: "Jauna ziņa",
    errors: {
      name: "Jānorāda vārds.",
      company: "Nepieciešams uzņēmums.",
      email: "Nepieciešams e-pasts.",
      emailInvalid: "Ievadiet derīgu e-pasta adresi.",
      message: "Nepieciešama ziņa.",
      interest: "Izvēlieties interešu veidu.",
      consent: "Nepieciešama piekrišana.",
      submitFailed: "Ziņojumu nevarēja nosūtīt. Tā vietā izmēģiniet e-pastu.",
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
        title: "Iestādes pārbaudes pakete",
        description: "Ar ceļojumu saistīti dokumenti un notikumi koplietotā pakotnē ar ierobežotu tvērumu.",
      },
      {
        title: "Ierobežota piekļuve darbības jomai/laikam",
        description: "QR balstīta ierobežota piekļuve — nav publiska.",
      },
      {
        title: "Audits",
        description: "Reģistrētie piekļuves un kopīgošanas notikumi.",
      },
      {
        title: "eFTI gatavs tonālais krēms",
        description: "Tehniskā bāze turpmākai integrācijai, nevis sertifikācija.",
      }
    ],
  },
  legal: legalLv,
};
