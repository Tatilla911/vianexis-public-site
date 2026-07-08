import type { LegalContent } from "../legal-types";

export const legalEt: LegalContent = {
  versionBadge: "Sisetestiversioon – käimas on juriidiline ekspertiis",
  privacy: {
    title: "Privaatsusteatis – sisetesti versioon",
    intro: "See teatis kehtib rakenduse ViaNexis draiveri ja sellega seotud platvormi sisetestimise ja ettevalmistamise etapis. Teenus ei ole Play poe avalik allalaadimine – Google Play sisetesti ettevalmistamine on pooleli. Lõplik põhjalik privaatsuspoliitika avaldatakse pärast juriidilist läbivaatamist.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Andmete vastutav töötleja",
      body: "ViaNexis — vianexis.eu. Privaatsuskontakt: info@vianexis.eu",
    },
    scope: {
      title: "Ulatus",
      body: "See teatis hõlmab mobiilirakendust ViaNexis Driver, sellega seotud juhi ja reisi töövooge ning veebikontaktivormi. Ettevõtte administraatori ja dispetšeriportaalile kehtivad eraldi lepingu- ja privaatsustingimused.",
    },
    dataCategories: {
      title: "Andmed, mida töötleme",
      items: [
        "Konto ja kontaktandmed: nimi, e-posti aadress, telefon, ettevõte, roll, riik.",
        "Juhi profiili andmed: identifikaatorid, roll, keeleseaded, load.",
        "Reisi andmed: reisi ID-d, olek, peatused, ajatemplid, metaandmed.",
        "Dokumendid: CMR, saatelehed, arved, fotod, skaneeringud, digiallkirjad.",
        "Sõnumid ja märguanded: reisiga seotud suhtlus- ja hoiatussündmused.",
        "Asukoht: ainult kasutaja loal ja kasutamise ajal (kasutamisel), kui funktsioon on aktiivne.",
        "Seadme ja seansi metaandmed: seadme tüüp, OS-i versioon, rakenduse versioon, seansi identifikaatorid.",
        "Diagnostika ja logid: tehnilised logid ja veaaruanded – kui see on lubatud.",
        "Kaubaaluste ja pakendite vahetusandmed: tüüp, kogus, puudus, kahjustused, märkmed.",
        "ADR / tolliabi kasutusandmed: otsingud, vaated — mitte ametlikud otsused.",
        "Teavitamise luba ja tulevane tõukeluba: tootmistõuge (FCM) on eraldi taustaprogrammi sõltuvus."
      ],
    },
    purposes: {
      title: "Töötlemise eesmärgid",
      items: [
        "Reisi töövoogude haldamine ja jõudluse dokumenteerimine.",
        "Dokumendihaldus, allkirjad ja tõendusmaterjali komplekteerimine.",
        "Reisiga seotud side- ja tegevusteated.",
        "Turvalisus, audit ja jälgitavus.",
        "Kontrollitud juurdepääs toele auditeeritaval viisil.",
        "Õigus- ja ärivaidluste ennetamine ja dokumenteerimine.",
        "Rakenduse toimimise ja tõrkeotsingu täiustamine.",
        "Sisetestimine, piloot ja juurdepääsu hindamine."
      ],
    },
    sharing: {
      title: "Andmete jagamine",
      items: [
        "Tööandja/transpordiettevõte ja volitatud administraator/dispetšerkasutajad – üürniku ulatuse kohta.",
        "Juhi enda sõidu- ja dokumendiandmed ettevõtte reeglite järgi.",
        "Lubatud platvormi tugi ainult auditeeritud, piiratud ja õigustatud juurdepääsuga.",
        "Asutused või partnerid ainult juriidilise aluse, lepingu või ettevõtte otsuse alusel.",
        "AI/OCR/tõlkepakkuja ainult taustaprogrammi juhitud tulevase integratsiooni kaudu, kui seda rakendatakse – inimese ülevaatusega.",
        "Me ei müü isikuandmeid. Ei mingit turunduslikku tõuget."
      ],
    },
    rights: {
      title: "Sinu õigused",
      items: [
        "Juurdepääs teie andmetele – ettevõtte administraatori või tugikanali kaudu.",
        "Ebatäpsete andmete parandamine.",
        "Kustutage, kui see on juriidiliselt võimalik ja ettevõtte protsessid seda võimaldavad.",
        "Vastuväide või piirang, kui see on õiguslikult põhjendatud.",
        "Andmete teisaldatavus, kui kohaldatav seadus seda ette näeb.",
        "Kaebus järelevalveasutusele.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Märguanded",
      body: "Rakendus kasutab operatiivseid teatisi, mitte turunduslikku tõuget. Lukustusekraani tekst on vaikimisi privaatsusele ohutu. Tootmistõuke (FCM/APNs) ja seadme žetoonide käsitlemine on taustasüsteemi sõltuvused – võivad sisetestimise ajal olla osalised või mitte. Teavitamise luba valib kasutaja.",
    },
    location: {
      title: "Asukoht",
      body: "Asukohta töödeldakse ainult kasutaja loal ja kasutamise ajal (kasutamisel), kui funktsioon on aktiivne – kaardi, enda asukoha ja reisi tõendamise eesmärgil. Praeguses olekus tausta jälgimine puudub. Asukoht ei garanteeri marsruudi ega seaduse järgimist.",
    },
    importantNotices: {
      title: "Olulised märkused",
      items: [
        "AI, OCR ja automaatne tõlge on abivahendid – vajalik on inimese ülevaatus.",
        "ADR teave on abimees – ei asenda ametlikke allikaid ega seadusandlust.",
        "ViaNexis ei ole sertifitseeritud eFTI platvorm.",
        "Pole hädaolukord ega SOS teenus.",
        "Digidokumentidel ei ole automaatselt õiguslikku tõendusjõudu.",
        "Teenus on sisetestimisel / ettevalmistamisel – mitte avalik reaalajas tootmissüsteem."
      ],
    },
    dataContact: {
      title: "Privaatsuskontakt",
      body: "Privaatsusküsimused: info@vianexis.eu. Vastutava töötleja lõplik kontakt kuvatakse avaldatud teates.",
    },
    playUrl: "Stabiilse Play Console'i ​​privaatsuse URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Kasutustingimused — sisetesti versioon",
    intro: "Need tingimused kehtivad platvormi ViaNexis sisetestimise ja pilootfaasi ajal. Teenus ei ole avalik Play poe toode – Google Play sisetesti ettevalmistamine on pooleli. Lõplikud tingimused avaldatakse pärast juriidilist läbivaatamist.",
    sections: [
      {
        title: "Teenuse olemus",
        body: "ViaNexis pakub transpordiettevõtetele digitaalseid transporditõendeid ja juhi tööplatvormi. eFTI-valmis vundament – ​​pole sertifitseeritud eFTI platvorm. Ei luba autoriteedi aktsepteerimist igas riigis.",
      },
      {
        title: "Sisemine testimine",
        body: "Juurdepääsu kontrollitakse piloot- või sisetestimise kutse kaudu. Ei ole automaatne avalik registreerimine. Taustaprogramm, tõukemärguanded ja mõned integratsioonid on ühendatud järk-järgult.",
      },
      {
        title: "Kasutaja vastutus",
        body: "Juht ja ettevõte vastutavad reisi, dokumentide, PDF ja tollinõuete täitmise eest. Rakendus toetab dokumentatsiooni – ei asenda õigusnõustamist, ADR eksperte ega ametiasutusi.",
      },
      {
        title: "Kättesaadavus",
        body: "Sisetestimise ajal võivad tööaeg ja funktsioonid erineda. Konkreetne SLA kehtib ainult lepingu alusel.",
      },
      {
        title: "Vastutuse piirang",
        body: "ViaNexis ei luba automaatset juriidilist tõendusjõudu, veatut OCR/AI/tõlget, hädaabiteenuseid ega tootmise tõukevalmidust, kui see on endiselt taustasõltuvus.",
      }
    ],
  },
  legalNotice: {
    title: "Õigusalane teade – sisetesti versioon",
    intro: "Sellel lehel kirjeldatakse platvormi ViaNexis sisetestimise ja ettevalmistuse olekut. See ei asenda täielikku juriidilist dokumentatsiooni ega lepingutingimusi.",
    sections: [
      {
        title: "Platvormi olemus",
        body: "Digitaalsed transporditõendid, dokumendihaldus, sõnumite saatmine, teatised ja ettevõtte kontroll ühes süsteemis. eFTI-valmis vundament – ​​pole sertifitseeritud eFTI platvorm.",
      },
      {
        title: "Sisetesti olek",
        body: "Google Play sisetesti ettevalmistamine on pooleli. Samsungi UAT ja väljalaskevalmidus on pooleli. Me ei väida, et rakendus on Play poes avalikult saadaval.",
      },
      {
        title: "Vastutuse piirang",
        body: "Me ei luba volituste aktsepteerimist, automaatset juriidilist tõendusjõudu, veatut AI/OCR/tõlget, hädaabiteenuseid ega täielikku tootmisvalmidust.",
      },
      {
        title: "Võtke ühendust",
        body: "Juriidilised ja privaatsusküsimused: info@vianexis.eu",
      }
    ],
    relatedDocs: "Seotud dokumendid",
  },
  disclaimersPage: {
    title: "Vastutustundlik kasutamine – lahtiütlused",
    intro: "Allolevad tekstid kirjeldavad platvormi kasutamise olulisi piiranguid. Sisetesti versioon – ei asenda õigusnõustamist.",
    items: [
      {
        id: "adr",
        title: "ADR — vastutustundlik kasutamine",
        body: "ADR ja tunneli andmed on abiteave. Ametlikud allikad, tabelid ja kehtivad kohalikud reeglid tuleb alati kontrollida. ViaNexis ei asenda õigusakte, ADR koolitust, ettevõtte peadirektoraadi ametnikku ega ametiasutuste otsuseid.",
      },
      {
        id: "ai-ocr",
        title: "AI, PIN ja tõlge",
        body: "Abivahendid – nõutav on inimese ülevaatus. Algdokument ja sõnum jäävad esmaseks. Ei ole juriidiline nõustamine ega kinnitatud tõlge.",
      },
      {
        id: "teateid",
        title: "Märguanded ja push",
        body: "Operatiivteatised – mitte turundustõuge. Vaikimisi privaatsuskindel lukustuskuva. Tootmistõuke (FCM/APNs) on taustaprogrammi sõltuvus – see ei pruugi sisetestimise ajal olla aktiivne.",
      },
      {
        id: "truck-map",
        title: "Veoautode kaart / kogukonna andmed",
        body: "Kaart ja marsruut operatiivseks orientatsiooniks – ei garanteeri juriidilisi piiranguid, lubasid ega kogukonna andmete täpsust. Ei asenda ametlikku navigeerimist.",
      },
      {
        id: "pallet",
        title: "Kaubaaluste / pakendite vahetamise tõendid",
        body: "Salvestamine toetab vaidluste dokumenteerimist. PDF tõendite osa lõpetatud reisipaketis ei ole kõigil juhtudel täielikult valmis. Ei otsusta vaidlusi.",
      },
      {
        id: "legal-validity",
        title: "Õiguslik kehtivus / dokumendid",
        body: "Digidokumentidel ja allkirjadel ei ole automaatselt õiguslikku tõendusjõudu. Vastuvõtt on riigiti ja klienditi erinev.",
      },
      {
        id: "efti",
        title: "eFTI ja volituste jagamine",
        body: "ViaNexis ei ole sertifitseeritud eFTI platvorm. Ei luba autoriteedi aktsepteerimist igas riigis. eFTI-valmis vundament on tehniline valmisolek – mitte sertifikaat.",
      }
    ],
  },
};
