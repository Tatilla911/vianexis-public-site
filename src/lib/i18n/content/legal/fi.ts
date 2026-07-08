import type { LegalContent } from "../legal-types";

export const legalFi: LegalContent = {
  versionBadge: "Sisäinen testausversio – lakiasiantuntijan tarkastus käynnissä",
  privacy: {
    title: "Tietosuojailmoitus – sisäinen testausversio",
    intro: "Tämä huomautus koskee ViaNexis ohjainsovelluksen ja siihen liittyvän alustan sisäisen testauksen ja valmisteluvaiheen aikana. Palvelu ei ole julkinen Play Kaupan lataus – Google Playn sisäisen testauksen valmistelu on käynnissä. Lopullinen kattava tietosuojakäytäntö julkaistaan ​​oikeudellisen tarkastelun jälkeen.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Rekisterinpitäjä",
      body: "ViaNexis — vianexis.eu. Tietosuojayhteystiedot: info@vianexis.eu",
    },
    scope: {
      title: "Laajuus",
      body: "Tämä ilmoitus kattaa ViaNexis Driver -mobiilisovelluksen, siihen liittyvät kuljettaja- ja matkatyönkulut sekä verkkoyhteyslomakkeen. Yrityksen ylläpitäjä- ja työnvälitysportaalia koskevat erilliset sopimus- ja tietosuojaehdot.",
    },
    dataCategories: {
      title: "Käsittelemämme tiedot",
      items: [
        "Tili- ja yhteystiedot: nimi, sähköpostiosoite, puhelin, yritys, rooli, maa.",
        "Kuljettajan profiilitiedot: tunnisteet, rooli, kieliasetukset, käyttöoikeudet.",
        "Matkan tiedot: matkatunnukset, tila, pysäkit, aikaleimat, metatiedot.",
        "Asiakirjat: CMR, lähetysluettelot, laskut, valokuvat, skannaukset, digitaaliset allekirjoitukset.",
        "Viestit ja ilmoitukset: matkaan liittyvät viestintä- ja hälytystapahtumat.",
        "Sijainti: vain käyttäjän luvalla ja käytön aikana (kun käytössä), jos ominaisuus on aktiivinen.",
        "Laitteen ja istunnon metatiedot: laitetyyppi, käyttöjärjestelmäversio, sovellusversio, istunnon tunnisteet.",
        "Diagnostiikka ja lokit: tekniset lokit ja virheraportit – jos käytössä.",
        "Lavojen ja pakkausten vaihtotiedot: tyyppi, määrä, puute, vauriot, huomautukset.",
        "ADR / tulliapulaisen käyttötiedot: haut, näkymät — ei virallisia päätöksiä.",
        "Ilmoituslupa ja tuleva push-tunnus: tuotannon push (FCM) on erillinen taustariippuvuus."
      ],
    },
    purposes: {
      title: "Käsittelyn tarkoitukset",
      items: [
        "Matkan työnkulkujen hallinta ja suorituskyvyn dokumentointi.",
        "Asiakirjojen hallinta, allekirjoitukset ja todistepaketin kokoonpano.",
        "Matkaan liittyvät viestintä- ja operatiiviset ilmoitukset.",
        "Turvallisuus, auditointi ja jäljitettävyys.",
        "Valvottu tukipääsy tarkastettavissa olevalla tavalla.",
        "Oikeudellisten ja liike-elämän riitojen ehkäisy ja dokumentointi.",
        "Sovelluksen toiminnan ja vianmäärityksen parantaminen.",
        "Sisäinen testaus, pilotointi ja pääsyn arviointi."
      ],
    },
    sharing: {
      title: "Tietojen jakaminen",
      items: [
        "Työnantaja/kuljetusyritys ja valtuutetut järjestelmänvalvojat/välittäjät – vuokralaisen laajuuden mukaan.",
        "Kuljettajan omat matka- ja asiakirjatiedot yrityksen sääntöjen mukaan.",
        "Valtuutettu alustatuki vain tarkastetulla, rajoitetulla ja perustellulla pääsyllä.",
        "Viranomaiset tai kumppanit vain oikeusperustan, sopimuksen tai yrityksen päätöksen mukaan.",
        "AI/OCR/käännöspalveluntarjoaja vain backend-ohjatun tulevan integraation kautta, jos sitä käytetään – ihmisen tarkastuksella.",
        "Emme myy henkilötietoja. Ei markkinointiponnistusta."
      ],
    },
    rights: {
      title: "Sinun oikeutesi",
      items: [
        "Pääsy tietoihisi – yrityksen järjestelmänvalvojan tai tukikanavan kautta.",
        "Virheellisten tietojen oikaisu.",
        "Poista, jos se on lain mukaan mahdollista ja yrityksen prosessit sen sallivat.",
        "Vastustus tai rajoitus, jos se on laillisesti perusteltua.",
        "Tietojen siirrettävyys, jos sovellettava laki sen määrää.",
        "Valitus valvontaviranomaiselle.",
        "Ota yhteyttä: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Ilmoitukset",
      body: "Sovellus käyttää toiminnallisia ilmoituksia - ei markkinointityöntöä. Lukitusnäytön teksti on oletusarvoisesti turvallista yksityisyydelle. Tuotantotyöntö (FCM/APNs) ja laitetunnusten käsittely ovat taustariippuvuuksia – voivat olla osittaisia ​​tai ei ole käytössä sisäisen testauksen aikana. Ilmoituslupa on käyttäjän valinta.",
    },
    location: {
      title: "Sijainti",
      body: "Sijaintia käsitellään vain käyttäjän luvalla ja käytön aikana (kun käytössä), jos ominaisuus on aktiivinen – karttaa, omaa sijaintia ja matkan näyttöä varten. Ei taustaseurantaa nykyisessä tilassa. Sijainti ei takaa reitin tai lain noudattamista.",
    },
    importantNotices: {
      title: "Tärkeitä huomautuksia",
      items: [
        "AI, OCR ja automaattinen käännös ovat apuvälineitä – vaaditaan ihmisen tarkastus.",
        "ADR tieto on apuväline – ei korvaa virallisia lähteitä tai lainsäädäntöä.",
        "ViaNexis ei ole sertifioitu eFTI-alusta.",
        "Ei hätä- tai SOS -palvelu.",
        "Digitaalisilla asiakirjoilla ei ole automaattisesti laillista todistusvoimaa.",
        "Palvelu on sisäisessä testauksessa/valmistelussa – ei julkinen live-tuotantojärjestelmä."
      ],
    },
    dataContact: {
      title: "Tietosuojayhteys",
      body: "Tietosuojakysymykset: info@vianexis.eu. Lopullinen rekisterinpitäjän yhteystieto näkyy julkaistussa ilmoituksessa.",
    },
    playUrl: "Stable Play Consolen tietosuoja-URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Käyttöehdot – sisäinen testausversio",
    intro: "Nämä ehdot ovat voimassa ViaNexis alustan sisäisen testauksen ja pilottivaiheen aikana. Palvelu ei ole julkinen Play Kaupan tuote – Google Playn sisäisen testauksen valmistelu on käynnissä. Lopulliset ehdot julkaistaan ​​oikeudellisen tarkastelun jälkeen.",
    sections: [
      {
        title: "Palvelun luonne",
        body: "ViaNexis tarjoaa digitaalisen liikenteen todisteita ja kuljettajien toimintaympäristön kuljetusyrityksille. eFTI-valmis perusta – ei sertifioitu eFTI-alusta. Ei lupaa auktoriteettien hyväksyntää kaikissa maissa.",
      },
      {
        title: "Sisäinen testaus",
        body: "Pääsyä valvotaan pilotti- tai sisäisen testauskutsun kautta. Ei automaattista julkista rekisteröintiä. Taustajärjestelmä, push-ilmoitukset ja jotkin integraatiot yhdistetään asteittain.",
      },
      {
        title: "Käyttäjän vastuu",
        body: "Kuljettaja ja yritys ovat vastuussa matkan, asiakirjan, ADR ja tullin noudattamisesta. Sovellus tukee dokumentaatiota – ei korvaa juridisia neuvoja, ADR asiantuntijoita tai viranomaisia.",
      },
      {
        title: "Saatavuus",
        body: "Sisäisen testauksen aikana käytettävyys ja ominaisuudet voivat vaihdella. Erityinen SLA koskee vain sopimusta.",
      },
      {
        title: "Vastuun rajoitus",
        body: "ViaNexis ei lupaa automaattista laillista todistusvoimaa, virheetöntä OCR/AI/käännöstä, hätäpalveluja tai tuotannon push-valmiutta, jos se on edelleen taustariippuvuus.",
      }
    ],
  },
  legalNotice: {
    title: "Oikeudellinen huomautus – sisäinen testausversio",
    intro: "Tällä sivulla kuvataan ViaNexis-alustan sisäinen testaus ja valmistelutila. Se ei korvaa kaikkia oikeudellisia asiakirjoja tai sopimusehtoja.",
    sections: [
      {
        title: "Alustan luonne",
        body: "Digitaalinen kuljetustodistus, dokumenttien hallinta, viestintä, ilmoitukset ja yrityksen valvonta yhdessä järjestelmässä. eFTI-valmis perusta – ei sertifioitu eFTI-alusta.",
      },
      {
        title: "Sisäisen testauksen tila",
        body: "Google Playn sisäisen testauksen valmistelu käynnissä. Samsung UAT ja julkaisuvalmius meneillään. Emme väitä, että sovellus on julkisesti saatavilla Play Kaupassa.",
      },
      {
        title: "Vastuun rajoitus",
        body: "Emme lupaa viranomaishyväksyntää, automaattista laillista todistusvoimaa, virheetöntä AI/OCR/käännöstä, hätäpalveluja tai täyttä tuotannon push-valmiutta.",
      },
      {
        title: "Ota yhteyttä",
        body: "Laki- ja tietosuojakysymykset: info@vianexis.eu",
      }
    ],
    relatedDocs: "Asiaan liittyvät asiakirjat",
  },
  disclaimersPage: {
    title: "Vastuullinen käyttö – vastuuvapauslausekkeet",
    intro: "Alla olevat tekstit kuvaavat alustan käytön tärkeitä rajoituksia. Sisäinen testausversio – ei korvaa juridista neuvontaa.",
    items: [
      {
        id: "adr",
        title: "ADR — vastuullinen käyttö",
        body: "ADR ja tunnelitiedot ovat aputietoja. Viralliset lähteet, taulukot ja voimassa olevat paikalliset säännöt on aina tarkistettava. ViaNexis ei korvaa lainsäädäntöä, ADR koulutusta, yrityksen pääosaston virkailijaa tai viranomaispäätöksiä.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR ja käännös",
        body: "Apuvälineet – vaaditaan ihmisen tarkastus. Alkuperäinen asiakirja ja viesti pysyvät ensisijaisena. Ei oikeudellista neuvontaa eikä varmennettua käännöstä.",
      },
      {
        id: "ilmoituksia",
        title: "Ilmoitukset ja push",
        body: "Toiminnalliset ilmoitukset – ei markkinointityöntöä. Yksityisyyssuojattu lukitusnäyttö oletuksena. Tuotantotyöntö (FCM/APNs) on taustariippuvuus – ei välttämättä ole käytössä sisäisen testauksen aikana.",
      },
      {
        id: "truck-map",
        title: "Kuorma-auton kartta / yhteisön tiedot",
        body: "Kartta ja reitti toiminnan suuntaamiseksi — ei takaa lakisääteisiä rajoituksia, lupia tai yhteisön tietojen tarkkuutta. Ei korvaa virallista navigointia.",
      },
      {
        id: "lava",
        title: "Lavojen/pakkausten vaihtotodistus",
        body: "Tallennus tukee kiistan dokumentointia. PDF todisteosio valmiissa matkapaketissa ei ole täysin valmis kaikissa tapauksissa. Ei ratkaise riitoja.",
      },
      {
        id: "legal-validity",
        title: "Oikeudellinen pätevyys / asiakirjat",
        body: "Digitaalisilla asiakirjoilla ja allekirjoituksilla ei ole automaattisesti laillista todistusvoimaa. Hyväksyminen vaihtelee maan ja asiakkaan mukaan.",
      },
      {
        id: "efti",
        title: "eFTI ja valtuuksien jakaminen",
        body: "ViaNexis ei ole sertifioitu eFTI-alusta. Ei lupaa auktoriteettien hyväksyntää kaikissa maissa. eFTI-valmis perusta on tekninen valmius – ei sertifikaatti.",
      }
    ],
  },
};
