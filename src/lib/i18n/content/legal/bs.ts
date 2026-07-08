import type { LegalContent } from "../legal-types";

export const legalBs: LegalContent = {
  versionBadge: "Verzija za interno testiranje — pravni stručni pregled u toku",
  privacy: {
    title: "Obaveštenje o privatnosti — verzija za interno testiranje",
    intro: "Ovo obavještenje se primjenjuje tokom faze internog testiranja i pripreme aplikacije ViaNexis Driver i povezane platforme. Usluga nije javno preuzimanje Play Store – priprema za interno testiranje Google Play je u toku. Konačna sveobuhvatna politika privatnosti bit će objavljena nakon pravne revizije.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Kontrolor podataka",
      body: "ViaNexis — vianexis.eu. Kontakt za privatnost: info@vianexis.eu",
    },
    scope: {
      title: "Obim",
      body: "Ovo obavještenje pokriva mobilnu aplikaciju ViaNexis Driver, povezane tokove rada vozača i putovanja, te web obrazac za kontakt. Portal administratora i dispečera kompanije podliježu posebnim ugovornim uvjetima i uvjetima privatnosti.",
    },
    dataCategories: {
      title: "Podaci koje obrađujemo",
      items: [
        "Podaci o nalogu i kontaktu: ime, email, telefon, kompanija, uloga, država.",
        "Podaci o profilu vozača: identifikatori, uloga, postavke jezika, dozvole.",
        "Podaci o putovanju: ID putovanja, status, zaustavljanja, vremenske oznake, metapodaci.",
        "Dokumenti: CMR, otpremnice, fakture, fotografije, skenovi, digitalni potpisi.",
        "Poruke i obavještenja: komunikacija vezana za putovanje i događaji upozorenja.",
        "Lokacija: samo uz dozvolu korisnika i dok je u upotrebi (kada se koristi), ako je funkcija aktivna.",
        "Metapodaci uređaja i sesije: tip uređaja, verzija OS-a, verzija aplikacije, identifikatori sesije.",
        "Dijagnostika i evidencija: tehnički zapisi i izvještaji o greškama — ako je omogućeno.",
        "Podaci o razmjeni paleta i ambalaže: vrsta, količina, nestašica, oštećenja, napomene.",
        "ADR / podaci o korištenju carinskog pomoćnika: pretrage, pregledi — ne zvanične odluke.",
        "Dozvola za obavještenje i budući push token: produkcija push (FCM) je zasebna pozadinska ovisnost."
      ],
    },
    purposes: {
      title: "Svrhe obrade",
      items: [
        "Upravljanje radnim tokovima putovanja i dokumentovanje performansi.",
        "Upravljanje dokumentima, potpisi i sastavljanje paketa dokaza.",
        "Komunikacija vezana za putovanje i operativna obavještenja.",
        "Sigurnost, revizija i sljedivost.",
        "Kontrolisani pristup podršci na način koji se može revidirati.",
        "Sprečavanje i dokumentovanje pravnih i poslovnih sporova.",
        "Poboljšanje rada aplikacije i rješavanje problema.",
        "Interno testiranje, pilot i evaluacija pristupa."
      ],
    },
    sharing: {
      title: "Dijeljenje podataka",
      items: [
        "Poslodavac/transportna kompanija i ovlašteni korisnici administratora/dispečera — po obimu zakupca.",
        "Podaci o putovanju i dokumentima vozača prema pravilima kompanije.",
        "Ovlaštena podrška platformi samo sa revidiranim, ograničenim, opravdanim pristupom.",
        "Vlasti ili partneri samo po pravnoj osnovi, ugovoru ili odluci kompanije.",
        "AI/OCR/provajder prevoda samo putem buduće integracije kontrolisane pozadinske strane, ako se primenjuje — uz ljudski pregled.",
        "Ne prodajemo lične podatke. Nema marketinškog pritiska."
      ],
    },
    rights: {
      title: "Vaša prava",
      items: [
        "Pristup vašim podacima — preko administratora kompanije ili kanala podrške.",
        "Ispravljanje netačnih podataka.",
        "Brisanje tamo gdje je to zakonski moguće i procesi kompanije.",
        "Prigovor ili ograničenje ako je to zakonski opravdano.",
        "Prenosivost podataka tamo gde je predviđeno važećim zakonom.",
        "Žalba nadzornom organu.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Obavještenja",
      body: "Aplikacija koristi operativna obavještenja - ne marketinški pritisak. Tekst na zaključanom ekranu je podrazumevano siguran za privatnost. Produkcija push (FCM/APNs) i rukovanje tokenom uređaja su ovisnosti o pozadini - mogu biti djelomične ili neaktivne tokom internog testiranja. Dozvola za obavještavanje je izbor korisnika.",
    },
    location: {
      title: "Lokacija",
      body: "Lokacija se obrađuje samo uz dozvolu korisnika i dok je u upotrebi (kada je u upotrebi), ako je funkcija aktivna — za potrebe karte, vlastite pozicije i dokaza putovanja. Nema praćenja u pozadini u trenutnom stanju. Lokacija ne garantuje usklađenost rute ili zakonsku usklađenost.",
    },
    importantNotices: {
      title: "Važna obaveštenja",
      items: [
        "AI, OCR i automatsko prevođenje su pomoćni alati - potreban je ljudski pregled.",
        "ADR informacije su pomoćne — ne zamjenjuju zvanične izvore ili zakone.",
        "ViaNexis nije certificirana eFTI platforma.",
        "Nije hitna ili SOS usluga.",
        "Digitalni dokumenti nemaju automatski pravnu dokaznu snagu.",
        "Usluga je u internom testiranju/pripremanju — nije javni sistem proizvodnje uživo."
      ],
    },
    dataContact: {
      title: "Kontakt za privatnost",
      body: "Pitanja o privatnosti: info@vianexis.eu. Konačni kontakt kontrolora pojavit će se u objavljenom obavještenju.",
    },
    playUrl: "URL za privatnost stabilne Play konzole: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Uslovi korištenja — verzija za interno testiranje",
    intro: "Ovi uslovi se primjenjuju tokom internog testiranja i pilot faze ViaNexis platforme. Usluga nije javni proizvod Play Store – priprema za interno testiranje Google Playa je u toku. Konačni uslovi će biti objavljeni nakon pravne revizije.",
    sections: [
      {
        title: "Priroda usluge",
        body: "ViaNexis pruža digitalne transportne dokaze i platformu za rad vozača za transportne kompanije. eFTI-spremna osnova — nije certificirana eFTI platforma. Ne obećava prihvatanje vlasti u svakoj zemlji.",
      },
      {
        title: "Interno testiranje",
        body: "Pristup se kontroliše — putem pilot ili pozivnice za interno testiranje. Nije automatska javna registracija. Backend, push obavijesti i neke integracije se postepeno povezuju.",
      },
      {
        title: "Odgovornost korisnika",
        body: "Vozač i kompanija su odgovorni za putovanje, dokumente, ADR i usklađenost sa carinom. Aplikacija podržava dokumentaciju — ne zamjenjuje pravni savjet, ADR stručnjake ili vlasti.",
      },
      {
        title: "Dostupnost",
        body: "Tokom internog testiranja, vrijeme rada i funkcije mogu varirati. Specifični SLA se primjenjuje samo pod ugovorom.",
      },
      {
        title: "Ograničenje odgovornosti",
        body: "ViaNexis ne obećava automatsku pravnu dokaznu snagu, besprijekoran OCR/AI/prevod, hitne službe ili spremnost za pokretanje proizvodnje ako je i dalje ovisno o pozadini.",
      }
    ],
  },
  legalNotice: {
    title: "Pravna obavijest — verzija za interno testiranje",
    intro: "Ova stranica opisuje interno testiranje i status pripreme ViaNexis platforme. Ne zamjenjuje punu pravnu dokumentaciju ili ugovorne uslove.",
    sections: [
      {
        title: "Priroda platforme",
        body: "Digitalni transportni dokaz, upravljanje dokumentima, slanje poruka, obaveštenja i kontrola kompanije u jednom sistemu. eFTI-spremna osnova — nije certificirana eFTI platforma.",
      },
      {
        title: "Status internog testiranja",
        body: "Priprema za interno testiranje Google Playa je u toku. Samsung UAT i spremnost za oslobađanje u toku. Ne tvrdimo da je aplikacija javno dostupna u Play Store-u.",
      },
      {
        title: "Ograničenje odgovornosti",
        body: "Ne obećavamo prihvatanje autoriteta, automatsku pravnu dokaznu snagu, besprijekoran AI/OCR/prevod, hitne službe ili punu spremnost za pokretanje proizvodnje.",
      },
      {
        title: "Kontakt",
        body: "Pravna pitanja i pitanja o privatnosti: info@vianexis.eu",
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
        title: "ADR — odgovorna upotreba",
        body: "ADR i podaci tunela su pomoćne informacije. Zvanični izvori, tabele i trenutna lokalna pravila moraju uvijek biti provjereni. ViaNexis ne zamjenjuje zakone, ADR obuku, službenika DG kompanije ili odluke vlasti.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR & prijevod",
        body: "Pomoćni alati — potreban je ljudski pregled. Originalni dokument i poruka ostaju primarni. Nije pravni savjet i nije ovjereni prijevod.",
      },
      {
        id: "obavještenja",
        title: "Obavještenja i push",
        body: "Operativna obavještenja — ne marketinški pritisak. Zaključani ekran siguran za privatnost prema zadanim postavkama. Pritisak proizvodnje (FCM/APNs) je zavisnost od pozadinske mreže — možda neće biti aktivna tokom internog testiranja.",
      },
      {
        id: "truck-map",
        title: "Mapa kamiona / podaci zajednice",
        body: "Mapa i ruta za operativnu orijentaciju — ne garantuje zakonska ograničenja, dozvole ili tačnost podataka zajednice. Nije zamjena za službenu navigaciju.",
      },
      {
        id: "paleta",
        title: "Dokaz o razmjeni paleta / ambalaže",
        body: "Snimanje podržava dokumentaciju o sporu. PDF dio dokaza u kompletiranom paketu putovanja nije u potpunosti spreman u svim slučajevima. Ne rješava sporove.",
      },
      {
        id: "legal-validity",
        title: "Pravna valjanost / dokumenti",
        body: "Digitalni dokumenti i potpisi nemaju automatski pravnu dokaznu snagu. Prihvatanje se razlikuje u zavisnosti od zemlje i kupca.",
      },
      {
        id: "efti",
        title: "eFTI i dijeljenje ovlaštenja",
        body: "ViaNexis nije certificirana eFTI platforma. Ne obećava prihvatanje vlasti u svakoj zemlji. eFTI-ready temelj je tehnička spremnost — ne certifikat.",
      }
    ],
  },
};
