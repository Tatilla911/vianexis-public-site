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
    title: "Pašreizējais statuss",
    items: [
      "Notiek Google Play iekšējās testēšanas sagatavošana — nevis publiskā veikala lejupielāde.",
      "Gatavība draivera lietotnes izlaišanai un Samsung UAT.",
      "Ražošanas aizmugursistēma, pašpiegādes paziņojumi un partneru integrācijas tiek pakāpeniski savienotas."
    ],
    disclaimer: "ViaNexis neapgalvo, ka sistēma ir aktīva, sertificēta vai oficiāli pieņemta visās valstīs.",
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
      body: "Draivera lietotne ir Google Play iekšējās testēšanas sagatavošanā. Gatavība izlaišanai un notiek Samsung UAT. Aktivizācija nav automātiska.",
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
  legal: {
    versionBadge: "Iekšējās testēšanas versija — notiek juridiskā eksperta pārbaude",
    privacy: {
      title: "Paziņojums par konfidencialitāti — iekšējās testēšanas versija",
      intro: "Šis paziņojums attiecas uz ViaNexis draivera lietotnes un saistītās platformas iekšējās testēšanas un sagatavošanas posmu. Pakalpojums nav publiska Play veikala lejupielāde — notiek Google Play iekšējās testēšanas sagatavošana. Galīgā visaptverošā privātuma politika tiks publicēta pēc juridiskās pārskatīšanas.",
      lastUpdated: "2026-07-05",
      controller: {
        title: "Datu pārzinis",
        body: "ViaNexis — vianexis.eu. Privātuma kontaktinformācija: info@vianexis.eu",
      },
      scope: {
        title: "Darbības joma",
        body: "Šis paziņojums attiecas uz mobilo lietotni ViaNexis Driver, saistītajām vadītāja un brauciena darbplūsmām un tīmekļa saziņas veidlapu. Uz uzņēmuma administratoru un dispečeru portālu attiecas atsevišķi līguma un privātuma noteikumi.",
      },
      dataCategories: {
        title: "Dati, kurus mēs apstrādājam",
        items: [
          "Konta un kontaktinformācija: vārds, e-pasts, tālrunis, uzņēmums, loma, valsts.",
          "Vadītāja profila dati: identifikatori, loma, valodas iestatījumi, atļaujas.",
          "Brauciena dati: brauciena ID, statuss, pieturas, laikspiedoli, metadati.",
          "Dokumenti: CMR, pavadzīmes, rēķini, fotogrāfijas, skenēti, digitālie paraksti.",
          "Ziņojumi un paziņojumi: ar ceļojumu saistīti saziņas un brīdinājumu notikumi.",
          "Atrašanās vieta: tikai ar lietotāja atļauju un lietošanas laikā (lietošanas laikā), ja funkcija ir aktīva.",
          "Ierīces un sesijas metadati: ierīces veids, OS versija, lietotnes versija, sesijas identifikatori.",
          "Diagnostika un žurnāli: tehniskie žurnāli un kļūdu ziņojumi — ja ir iespējots.",
          "Palešu un iepakojumu apmaiņas dati: veids, daudzums, iztrūkums, bojājumi, piezīmes.",
          "ADR / muitas palīga lietošanas dati: meklējumi, skati — nevis oficiāli lēmumi.",
          "Paziņojumu atļauja un nākotnes push pilnvara: ražošanas push (FCM) ir atsevišķa aizmugursistēmas atkarība."
        ],
      },
      purposes: {
        title: "Apstrādes mērķi",
        items: [
          "Brauciena darbplūsmu pārvaldība un veiktspējas dokumentēšana.",
          "Dokumentu pārvaldība, paraksti un pierādījumu paketes komplektēšana.",
          "Ar ceļojumu saistīti saziņas un darbības paziņojumi.",
          "Drošība, audits un izsekojamība.",
          "Kontrolēta piekļuve atbalstam auditējamā veidā.",
          "Juridisku un biznesa strīdu novēršana un dokumentēšana.",
          "Lietotņu darbības un problēmu novēršanas uzlabošana.",
          "Iekšējā testēšana, izmēģinājums un piekļuves novērtējums."
        ],
      },
      sharing: {
        title: "Datu koplietošana",
        items: [
          "Darba devējs/transporta uzņēmums un pilnvarotie administratori/dispečeru lietotāji — katram īrniekam.",
          "Vadītāja paša brauciena un dokumentu dati atbilstoši uzņēmuma noteikumiem.",
          "Autorizēts platformas atbalsts tikai ar pārbaudītu, ierobežotu, pamatotu piekļuvi.",
          "Iestādes vai partneri tikai saskaņā ar juridisko pamatojumu, līgumu vai uzņēmuma lēmumu.",
          "AI/OCR/tulkošanas nodrošinātājs, tikai izmantojot aizmugursistēmas kontrolētu turpmāko integrāciju, ja tāda tiek lietota — ar cilvēka pārbaudi.",
          "Mēs nepārdodam personas datus. Nav mārketinga stimulu."
        ],
      },
      rights: {
        title: "Jūsu tiesības",
        items: [
          "Piekļuve jūsu datiem — izmantojot uzņēmuma administratoru vai atbalsta kanālu.",
          "Neprecīzu datu labošana.",
          "Dzēšana, ja tas ir likumīgi iespējams un uzņēmuma procesi to atļauj.",
          "Iebildumi vai ierobežojumi, ja tas ir juridiski pamatots.",
          "Datu pārnesamība, ja to paredz piemērojamie tiesību akti.",
          "Sūdzība uzraudzības iestādei.",
          "Sazināties: info@vianexis.eu"
        ],
      },
      notifications: {
        title: "Paziņojumi",
        body: "Lietotne izmanto darbības paziņojumus, nevis mārketinga push. Bloķēšanas ekrāna teksts pēc noklusējuma ir aizsargāts pret privātumu. Ražošanas push (FCM/APNs) un ierīces marķiera apstrāde ir aizmugursistēmas atkarības — iekšējās testēšanas laikā tās var būt daļējas vai nedarbinātas. Paziņojumu atļauja ir lietotāja izvēle.",
      },
      location: {
        title: "Atrašanās vieta",
        body: "Atrašanās vieta tiek apstrādāta tikai ar lietotāja atļauju un lietošanas laikā (lietošanas laikā), ja funkcija ir aktīva — kartes, paša atrašanās vietas un ceļojuma pierādījumu nolūkos. Pašreizējā stāvoklī fona izsekošanas nav. Atrašanās vieta negarantē atbilstību maršrutam vai tiesību aktiem.",
      },
      importantNotices: {
        title: "Svarīgi paziņojumi",
        items: [
          "AI, OCR un automātiskā tulkošana ir palīgrīki — nepieciešama cilvēka pārbaude.",
          "ADR informācija ir palīgs — neaizstāj oficiālos avotus vai tiesību aktus.",
          "ViaNexis nav sertificēta eFTI platforma.",
          "Nav ārkārtas vai SOS pakalpojums.",
          "Digitālajiem dokumentiem nav automātiski juridisks pierādījuma spēks.",
          "Pakalpojums atrodas iekšējā testēšanā/sagatavošanā — nevis publiska tiešās ražošanas sistēma."
        ],
      },
      dataContact: {
        title: "Privātuma kontaktpersona",
        body: "Privātuma jautājumi: info@vianexis.eu. Galīgā pārziņa kontaktpersona tiks parādīta publicētajā paziņojumā.",
      },
      playUrl: "Stable Play Console konfidencialitātes URL: https://vianexis.eu/en/privacy",
    },
    terms: {
      title: "Lietošanas noteikumi — iekšējās testēšanas versija",
      intro: "Šie noteikumi ir spēkā platformas ViaNexis iekšējās testēšanas un izmēģinājuma posmā. Pakalpojums nav publisks Play veikala produkts — notiek Google Play iekšējās testēšanas sagatavošana. Galīgie noteikumi tiks publicēti pēc juridiskās pārskatīšanas.",
      sections: [
        {
          title: "Pakalpojuma veids",
          body: "ViaNexis nodrošina digitālus transporta pierādījumus un vadītāja darbības platformu transporta uzņēmumiem. eFTI gatavs pamats — nav sertificēta eFTI platforma. Nesola autoritātes pieņemšanu katrā valstī.",
        },
        {
          title: "Iekšējā pārbaude",
          body: "Piekļuve tiek kontrolēta ar izmēģinājuma vai iekšējās testēšanas uzaicinājumu. Nav automātiska publiska reģistrācija. Aizmugursistēma, pašpiegādes paziņojumi un dažas integrācijas tiek savienotas pakāpeniski.",
        },
        {
          title: "Lietotāja atbildība",
          body: "Autovadītājs un uzņēmums ir atbildīgi par braucienu, dokumentu, ADR un muitas atbilstību. Lietotne atbalsta dokumentāciju — neaizstāj juridiskas konsultācijas, ADR ekspertus vai iestādes.",
        },
        {
          title: "Pieejamība",
          body: "Iekšējās testēšanas laikā darbības laiks un funkcijas var atšķirties. Konkrēts SLA tiek piemērots tikai saskaņā ar līgumu.",
        },
        {
          title: "Atbildības ierobežojums",
          body: "ViaNexis nesola automātisku juridisko pierādījuma spēku, nevainojamu OCR/AI/tulkošanu, neatliekamās palīdzības dienestus vai produkcijas push gatavību, ja tā joprojām ir aizmugursistēmas atkarība.",
        }
      ],
    },
    legalNotice: {
      title: "Juridisks paziņojums — iekšējās testēšanas versija",
      intro: "Šajā lapā ir aprakstīts ViaNexis platformas iekšējās pārbaudes un sagatavošanas statuss. Tas neaizstāj pilnu juridisko dokumentāciju vai līguma noteikumus.",
      sections: [
        {
          title: "Platformas būtība",
          body: "Digitālie transporta pierādījumi, dokumentu pārvaldība, ziņojumapmaiņa, paziņojumi un uzņēmuma kontrole vienā sistēmā. eFTI gatavs pamats — nav sertificēta eFTI platforma.",
        },
        {
          title: "Iekšējās pārbaudes statuss",
          body: "Notiek Google Play iekšējās testēšanas sagatavošana. Notiek Samsung UAT un laidiena gatavība. Mēs neapgalvojam, ka lietotne ir publiski pieejama Play veikalā.",
        },
        {
          title: "Atbildības ierobežojums",
          body: "Mēs neapsolām pilnvaru pieņemšanu, automātisku juridisku pierādījuma spēku, nevainojamu AI/OCR/tulkojumu, neatliekamās palīdzības pakalpojumus vai pilnīgu produkcijas push gatavību.",
        },
        {
          title: "Sazināties",
          body: "Juridiskie un privātuma jautājumi: info@vianexis.eu",
        }
      ],
      relatedDocs: "Saistītie dokumenti",
    },
    disclaimersPage: {
      title: "Atbildīga izmantošana — atrunas",
      intro: "Tālāk tekstos ir aprakstīti svarīgi platformas lietošanas ierobežojumi. Iekšējās pārbaudes versija — neaizstāj juridisko konsultāciju.",
      items: [
        {
          id: "adr",
          title: "ADR — atbildīga lietošana",
          body: "ADR un tuneļa dati ir palīginformācija. Oficiālie avoti, tabulas un pašreizējie vietējie noteikumi vienmēr ir jāpārbauda. ViaNexis neaizstāj tiesību aktus, ADR apmācību, uzņēmuma ģenerāldirektorāta amatpersonu vai iestāžu lēmumus.",
        },
        {
          id: "ai-ocr",
          title: "AI, OCR un tulkojums",
          body: "Palīgrīki — nepieciešama cilvēka pārbaude. Oriģinālais dokuments un ziņojums paliek primārie. Nav juridiskas konsultācijas un nav apstiprināts tulkojums.",
        },
        {
          id: "paziņojumi",
          title: "Paziņojumi un push",
          body: "Operatīvie paziņojumi — nevis mārketinga paziņojumi. Privātumam drošs bloķēšanas ekrāns pēc noklusējuma. Ražošanas push (FCM/APNs) ir aizmugursistēmas atkarība — iekšējās testēšanas laikā tā var nebūt pieejama.",
        },
        {
          id: "truck-map",
          title: "Kravas automašīnu karte / kopienas dati",
          body: "Karte un maršruts darbības orientācijai — negarantē juridiskus ierobežojumus, atļaujas vai kopienas datu precizitāti. Neaizvieto oficiālo navigāciju.",
        },
        {
          id: "palete",
          title: "Palešu/iepakojuma apmaiņas pierādījumi",
          body: "Ierakstīšana atbalsta strīdu dokumentāciju. PDF pierādījumu sadaļa pabeigtajā ceļojuma komplektā ne visos gadījumos ir pilnībā gatava. Neizlemj strīdus.",
        },
        {
          id: "legal-validity",
          title: "Juridiskais spēks / dokumenti",
          body: "Digitālajiem dokumentiem un parakstiem nav automātiski juridisks pierādījuma spēks. Pieņemšana atšķiras atkarībā no valsts un klienta.",
        },
        {
          id: "efti",
          title: "eFTI un pilnvaru kopīgošana",
          body: "ViaNexis nav sertificēta eFTI platforma. Nesola autoritātes pieņemšanu katrā valstī. eFTI-gatavs pamats ir tehniskā sagatavotība, nevis sertifikāts.",
        }
      ],
    },
  },
  legal: legalLv,
};
