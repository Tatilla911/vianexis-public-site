import type { LegalContent } from "../legal-types";

export const legalHr: LegalContent = {
  versionBadge: "Verzija za interno testiranje — pravni stručni pregled u tijeku",
  privacy: {
    title: "Obavijest o privatnosti — verzija za interno testiranje",
    intro: "Ova se obavijest primjenjuje tijekom internog testiranja i faze pripreme aplikacije ViaNexis Driver i povezane platforme. Usluga nije javno preuzimanje u Trgovini Play — priprema internog testiranja Google Playa je u tijeku. Konačna sveobuhvatna politika privatnosti bit će objavljena nakon pravne provjere.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Kontrolor podataka",
      body: "ViaNexis — vianexis.eu. Kontakt za privatnost: info@vianexis.eu",
    },
    scope: {
      title: "Opseg",
      body: "Ova se obavijest odnosi na mobilnu aplikaciju ViaNexis Driver, povezane tijekove rada vozača i putovanja te web obrazac za kontakt. Administratorski i dispečerski portal tvrtke podliježu zasebnim ugovornim uvjetima i uvjetima privatnosti.",
    },
    dataCategories: {
      title: "Podaci koje obrađujemo",
      items: [
        "Podaci o računu i kontaktu: ime, e-mail, telefon, tvrtka, uloga, država.",
        "Podaci o profilu vozača: identifikatori, uloga, jezične postavke, dopuštenja.",
        "Podaci o putovanju: ID-ovi putovanja, status, zaustavljanja, vremenske oznake, metapodaci.",
        "Dokumenti: CMR, otpremnice, računi, fotografije, skenovi, digitalni potpisi.",
        "Poruke i obavijesti: komunikacija povezana s putovanjem i događaji upozorenja.",
        "Lokacija: samo uz dopuštenje korisnika i dok je u upotrebi (when-in-use), ako je značajka aktivna.",
        "Metapodaci o uređaju i sesiji: vrsta uređaja, verzija OS-a, verzija aplikacije, identifikatori sesije.",
        "Dijagnostika i zapisnici: tehnički zapisnici i izvješća o pogreškama — ako je omogućeno.",
        "Podaci o razmjeni paleta i pakiranja: vrsta, količina, manjak, oštećenja, napomene.",
        "ADR / podaci o korištenju carinskog pomoćnika: pretraživanja, pregledi — nisu službene odluke.",
        "Dopuštenje obavijesti i budući push token: proizvodni push (FCM) zasebna je pozadinska ovisnost."
      ],
    },
    purposes: {
      title: "Svrhe obrade",
      items: [
        "Upravljanje tijekovima putovanja i dokumentiranje izvedbe.",
        "Upravljanje dokumentima, potpisi i sastavljanje paketa dokaza.",
        "Komunikacija povezana s putovanjem i operativne obavijesti.",
        "Sigurnost, revizija i sljedivost.",
        "Kontrolirani pristup podršci na revizijski način.",
        "Sprječavanje i dokumentiranje pravnih i poslovnih sporova.",
        "Poboljšanje rada aplikacije i rješavanje problema.",
        "Interno testiranje, pilot i evaluacija pristupa."
      ],
    },
    sharing: {
      title: "Dijeljenje podataka",
      items: [
        "Poslodavac/prijevoznička tvrtka i ovlašteni korisnici administratori/dispečeri — prema opsegu stanara.",
        "Podaci o vlastitom putovanju i dokumentima vozača prema pravilima tvrtke.",
        "Ovlaštena podrška za platformu samo s revidiranim, ograničenim, opravdanim pristupom.",
        "Vlasti ili partneri samo prema pravnoj osnovi, ugovoru ili odluci tvrtke.",
        "AI/OCR/pružatelj usluga prijevoda samo putem buduće integracije kontrolirane pozadinom, ako se primjenjuje — uz ljudski pregled.",
        "Ne prodajemo osobne podatke. Nema marketinškog pritiska."
      ],
    },
    rights: {
      title: "Vaša prava",
      items: [
        "Pristup vašim podacima — putem administratora tvrtke ili kanala podrške.",
        "Ispravak netočnih podataka.",
        "Brisanje gdje je to zakonski moguće i procesi tvrtke dopuštaju.",
        "Prigovor ili ograničenje ako je zakonski opravdano.",
        "Prenosivost podataka tamo gdje to dopušta važeći zakon.",
        "Žalba nadzornom tijelu.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Obavijesti",
      body: "Aplikacija koristi operativne obavijesti - a ne marketinški pritisak. Tekst na zaključanom zaslonu prema zadanim je postavkama siguran za privatnost. Puskanje proizvodnje (FCM/APNs) i rukovanje tokenima uređaja pozadinske su ovisnosti — mogu biti djelomične ili neaktivne tijekom internog testiranja. Dopuštenje za obavijesti je izbor korisnika.",
    },
    location: {
      title: "Mjesto",
      body: "Lokacija se obrađuje samo uz dopuštenje korisnika i dok je u upotrebi (kada je u upotrebi), ako je značajka aktivna — za potrebe karte, vlastite pozicije i dokaza o putovanju. Nema pozadinskog praćenja u trenutnom stanju. Lokacija ne jamči usklađenost s rutom ili zakonsku usklađenost.",
    },
    importantNotices: {
      title: "Važne obavijesti",
      items: [
        "AI, OCR i automatski prijevod pomoćni su alati — potreban je ljudski pregled.",
        "ADR informacija je pomoćnik — ne zamjenjuje službene izvore ili zakone.",
        "ViaNexis nije certificirana eFTI platforma.",
        "Nije hitna ili SOS usluga.",
        "Digitalni dokumenti nemaju automatski pravnu dokaznu snagu.",
        "Usluga je u internom testiranju/pripremi — nije sustav javne produkcije uživo."
      ],
    },
    dataContact: {
      title: "Kontakt za privatnost",
      body: "Pitanja o privatnosti: info@vianexis.eu. Konačni kontakt voditelja obrade pojavit će se u objavljenoj obavijesti.",
    },
    playUrl: "URL privatnosti Stable Play konzole: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Uvjeti korištenja — verzija za interno testiranje",
    intro: "Ovi se uvjeti primjenjuju tijekom internog testiranja platforme ViaNexis i pilot faze. Usluga nije javni proizvod Trgovine Play — priprema internog testiranja Google Playa je u tijeku. Konačni uvjeti bit će objavljeni nakon pravne provjere.",
    sections: [
      {
        title: "Priroda usluge",
        body: "ViaNexis pruža digitalne dokaze o prijevozu i platformu za rad vozača za prijevozničke tvrtke. Temelj spreman za eFTI — nije certificirana platforma eFTI. Ne obećava prihvaćanje vlasti u svakoj zemlji.",
      },
      {
        title: "Interno testiranje",
        body: "Pristup je kontroliran — putem pilota ili poziva za interno testiranje. Nije automatska javna registracija. Backend, push obavijesti i neke integracije povezuju se postupno.",
      },
      {
        title: "Odgovornost korisnika",
        body: "Vozač i tvrtka odgovorni su za putovanje, dokumente, ADR i usklađenost s carinskim propisima. Aplikacija podržava dokumentaciju — ne zamjenjuje pravne savjete, ADR stručnjake ili nadležna tijela.",
      },
      {
        title: "Dostupnost",
        body: "Tijekom internog testiranja, vrijeme rada i značajke mogu varirati. Specifični SLA primjenjuje se samo prema ugovoru.",
      },
      {
        title: "Ograničenje odgovornosti",
        body: "ViaNexis ne obećava automatsku pravnu dokaznu snagu, besprijekoran OCR/AI/prijevod, hitne usluge ili spremnost za pokretanje proizvodnje ako još uvijek ovisi o pozadini.",
      }
    ],
  },
  legalNotice: {
    title: "Pravna obavijest — verzija za interno testiranje",
    intro: "Ova stranica opisuje interno testiranje i status pripreme platforme ViaNexis. Ne zamjenjuje punu pravnu dokumentaciju ili ugovorne uvjete.",
    sections: [
      {
        title: "Priroda platforme",
        body: "Digitalni transportni dokazi, upravljanje dokumentima, slanje poruka, obavijesti i kontrola tvrtke u jednom sustavu. Temelj spreman za eFTI — nije certificirana platforma eFTI.",
      },
      {
        title: "Status internog testiranja",
        body: "Google Play priprema internog testiranja u tijeku. Samsung UAT i priprema za izdavanje u tijeku. Ne tvrdimo da je aplikacija javno dostupna u Trgovini Play.",
      },
      {
        title: "Ograničenje odgovornosti",
        body: "Ne obećavamo prihvaćanje autoriteta, automatsku pravnu dokaznu snagu, besprijekoran AI/OCR/prijevod, hitne usluge ili potpunu spremnost za pokretanje proizvodnje.",
      },
      {
        title: "Kontakt",
        body: "Pravna pitanja i pitanja privatnosti: info@vianexis.eu",
      }
    ],
    relatedDocs: "Povezani dokumenti",
  },
  disclaimersPage: {
    title: "Odgovorno korištenje — odricanje od odgovornosti",
    intro: "Tekstovi u nastavku opisuju važna ograničenja korištenja platforme. Verzija za interno testiranje — ne zamjenjuje pravni savjet.",
    items: [
      {
        id: "adr",
        title: "ADR — odgovorna uporaba",
        body: "ADR i podaci o tunelu su pomoćne informacije. Službeni izvori, tablice i trenutna lokalna pravila uvijek moraju biti provjereni. ViaNexis ne zamjenjuje zakonodavstvo, ADR obuku, službenika generalnog direktorata tvrtke ili odluke nadležnih tijela.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & prijevod",
        body: "Pomoćni alati — potreban ljudski pregled. Izvorni dokument i poruka ostaju primarni. Nije pravni savjet niti ovjereni prijevod.",
      },
      {
        id: "obavijesti",
        title: "Obavijesti i push",
        body: "Operativne obavijesti — ne marketinški pritisak. Zaključani zaslon koji štiti privatnost prema zadanim postavkama. Produkcija push (FCM/APNs) je pozadinska ovisnost — možda neće biti aktivna tijekom internog testiranja.",
      },
      {
        id: "truck-map",
        title: "Karta kamiona / podaci o zajednici",
        body: "Karta i ruta za radnu orijentaciju — ne jamči zakonska ograničenja, dozvole ili točnost podataka zajednice. Nije zamjena za službenu navigaciju.",
      },
      {
        id: "paleta",
        title: "Dokazi o razmjeni paleta/pakiranja",
        body: "Snimanje podržava dokumentaciju sporova. PDF odjeljak s dokazima u dovršenom paketu putovanja nije u potpunosti spreman u svim slučajevima. Ne rješava sporove.",
      },
      {
        id: "legal-validity",
        title: "Pravna valjanost / dokumenti",
        body: "Digitalni dokumenti i potpisi nemaju automatski pravnu dokaznu snagu. Prihvaćanje se razlikuje ovisno o zemlji i korisniku.",
      },
      {
        id: "efti",
        title: "eFTI & dijeljenje ovlasti",
        body: "ViaNexis nije certificirana eFTI platforma. Ne obećava prihvaćanje vlasti u svakoj zemlji. eFTI-ready temelj je tehnička spremnost — a ne certifikat.",
      }
    ],
  },
};
