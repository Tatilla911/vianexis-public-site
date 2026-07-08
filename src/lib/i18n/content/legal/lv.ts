import type { LegalContent } from "../legal-types";

export const legalLv: LegalContent = {
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
};
