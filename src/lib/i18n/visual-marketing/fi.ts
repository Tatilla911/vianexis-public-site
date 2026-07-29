import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingFi: VisualMarketingContent = {
  skipToContent: "Siirry sisältöön",
  brandVisuals: {
    routeLabel: "Aktiivinen reitti",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Network",
    networkTitle: "Se ei ole vain reitti, joka yhdistää.",
    networkSubtitle: "Pysähdykset, asiakirjat, allekirjoitukset, viestit ja päätökset kuuluvat samaan matkavirtaan – aikajärjestyksessä, lupien ja haettavan tapahtumareitin kera.",
    workflowEvents: [
      "Lähtö",
      "Nouto",
      "Asiakirja",
      "Allekirjoitus",
      "Odottaa",
      "Toimitus",
      "Suljettu paketti"
    ],
  },
  pillars: {
    title: "Kolme pilaria – yksi ohjattu järjestelmä",
    subtitle: "Kuljettajaystävällinen mobiilivirtaus, yrityksen toiminnanohjaus ja tarkastettava päätöspolku.",
    items: [
      {
        title: "Kuljettajaystävällinen sovellus",
        description: "Matkat, pysähdykset, asiakirjat, allekirjoitukset ja tapahtumat offline-tilassa toimivassa mobiilikäyttöliittymässä.",
      },
      {
        title: "Yrityksen valvonta",
        description: "Työnvälittäjän yleiskatsaus, käyttöoikeudet, hälytykset ja asiakirjojen seuranta yritysportaalissa.",
      },
      {
        title: "Tarkastettavat toiminnot",
        description: "Tapahtumat, allekirjoitukset ja päätökset haettavan lokin avulla – ilman liioiteltuja turvallisuusvaatimuksia.",
      }
    ],
  },
  process: {
    title: "Matkan perustyönkulku",
    subtitle: "Luomisesta suljettuun pakettiin – jäsennellyt vaiheet käyttöoikeustietoisilla käyttöoikeuksilla.",
    steps: [
      {
        title: "Luo matka",
        description: "Nouto- ja toimituspysäkit, tehtävät ja asiakirjavaatimukset.",
      },
      {
        title: "Kuljettajan hyväksyntä",
        description: "Luovuttaminen, hyväksyminen ja kontrolloitu istunnon aloitus.",
      },
      {
        title: "Pysähdykset ja tehtävät",
        description: "Useita pysähdyksiä, tehtäviä, tapahtumia ja vahinkotietoja.",
      },
      {
        title: "Asiakirjat ja allekirjoitukset",
        description: "Lataa, allekirjoita, tarkista – sitten suljettu matkapaketti.",
      }
    ],
  },
  homeModules: {
    title: "Tuotteiden pinnat",
    subtitle: "Jokaisella pinnalla on sama matka- ja asiakirjamalli. Tiedot livenä tuotesivuilta.",
    detailsLink: "Yksityiskohdat",
    items: [
      {
        title: "Kuljettajan sovellus",
        description: "Matkoja, pysähdyksiä, asiakirjoja ja allekirjoituksia offline-tilassa toimivassa mobiilivirtauksessa. Kuljettajat näkevät aina seuraavan vaaditun toimenpiteen.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Yritysportaali",
        description: "Toimintakatsaus: aktiiviset matkat, puuttuvat asiakirjat, hälytykset ja käyttöoikeudet yhdessä paikassa.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Asiakirjat & allekirjoitukset",
        description: "Matkaan liittyvät paperityöt, allekirjoitustilat ja vientikelpoinen suljettu matkapaketti.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Viestit ja hälytykset",
        description: "Matkaan liittyvä viestintä. Ilmoitusominaisuudet voidaan aktivoida osana pilottiohjelmaa.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Tarkastus ja käyttöoikeudet",
        description: "Roolipohjainen käyttöoikeus, haettavat tapahtumat ja valvottu tuki.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Offline-toiminta",
        description: "Ajurit voivat jatkaa työskentelyä heikkoissa verkoissa; muutokset valmistuvat, kun synkronointi on valmis.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Asiakirjat & allekirjoitukset",
    subtitle: "Asiakirjat linkittävät matkaan, ne voidaan allekirjoittaa ja tarkistaa ja sitten sulkea vientikelpoiseksi paketiksi.",
    steps: [
      {
        title: "Lataa tai luo",
        description: "CMR, lähetystodistus, valokuva tai digitaalinen malli.",
      },
      {
        title: "Linkittäminen",
        description: "Määritetty matkan, kuljettajan tai ajoneuvon kontekstiin.",
      },
      {
        title: "Allekirjoita ja tarkista",
        description: "Tilankulku: odottaa allekirjoitusta → allekirjoitettu → tarkistetaan.",
      },
      {
        title: "Suljettu matkapaketti",
        description: "Vietävät asiakirjat ja tapahtumat – tarkastettava yhteenveto.",
      }
    ],
    statuses: [
      "Ladattu",
      "Puuttuu",
      "Odotetaan allekirjoitusta",
      "Allekirjoitettu",
      "Tarkistuksessa"
    ],
    detailsLink: "Asiakirjat yksityiskohtaisesti",
  },
  offline: {
    title: "Offline-käyttö ja synkronointi",
    subtitle: "Työ jatkuu heikkoissa verkoissa – viimeistely tapahtuu synkronoinnin jälkeen.",
    cards: [
      {
        title: "Paikallinen tallennus",
        description: "Ohjaimen muutokset tallennetaan turvallisesti laitteeseen.",
      },
      {
        title: "Näkyvä synkronointi",
        description: "Odottavat muutokset pysyvät näkyvissä, kunnes yhteys palautuu.",
      },
      {
        title: "Konfliktin signalointi",
        description: "Ristiriitaiset lähteet kirjataan lokiin – niitä ei koskaan kirjoiteta hiljaa päälle.",
      }
    ],
    detailsLink: "Kuljettajan sovellus",
  },
  responsibleUse: {
    title: "Vastuullinen käyttö",
    subtitle: "Lyhyet, tärkeät rajoitukset – tiedot näkyvät lakisivuilla.",
    items: [
      "ViaNexis ei ole sertifioitu eFTI-alusta, eikä se lupaa automaattista auktoriteetin hyväksyntää.",
      "Tekstintunnistus, tekoäly ja käännös ovat apuvälineitä – ihmisen tarkastus vaaditaan.",
      "Järjestelmä ei tarjoa oikeudellista neuvontaa.",
      "Se ei ole hätä- tai SOS-palvelu."
    ],
    detailsLink: "Täydelliset vastuullisen käytön ilmoitukset",
  },
  pilotCta: {
    title: "Ohjattu lentäjän pääsy",
    subtitle: "ViaNexis on tällä hetkellä saatavilla pilottiohjelman kautta valittujen operaattorien ja kuljettajien kanssa. Pääsy aktivoidaan henkilökohtaisen keskustelun ja hyväksynnän jälkeen.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktiivinen matka",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Seuraava pysäkki",
        value: "Nouto · Budapest (demo)",
        status: "Matkalla",
      },
      {
        label: "Asiakirja",
        value: "CMR - odottaa allekirjoitusta",
        status: "Toiminta",
      },
      {
        label: "Synkronoi",
        value: "1 muutos odottaa",
        status: "Offline-tilassa",
      }
    ],
    phoneCaption: "Tuotedemo – anonymisoidut näytetiedot.",
    browserTitle: "Toiminnan ohjaus",
    browserSubtitle: "Demokalusto · lähettäjänäkymä",
    browserColumns: [
      "Matka",
      "Stop",
      "Asiakirja",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demo)",
        "CMR puuttuu",
        "Varoitus"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD allekirjoitettu",
        "Matkalla"
      ],
      [
        "VN-2407-C11",
        "Wien (demo)",
        "Tarkistuksessa",
        "Esisuljettu"
      ]
    ],
    browserCaption: "Yritysportaalin esittely – ei live-asiakasdataa.",
    driver: {
      navHome: "Kotiin",
      navTrips: "Matkat",
      navDocs: "Asiakirjat",
      navMore: "Lisää",
      tripStatus: "Matka käynnissä",
      nextStopLabel: "Seuraava pysäkki",
      nextStopValue: "Nouto · Budapest (demo)",
      documentLabel: "Asiakirja",
      documentValue: "Digitaalinen CMR",
      documentAction: "Allekirjoitus vaaditaan",
      syncLabel: "Yhteys",
      syncValue: "Offline · 1 vireillä",
    },
    portal: {
      roleLabel: "Rooli: Lähettäjä",
      alertLabel: "Varoitus",
      alertValue: "VN-2407-A18 · CMR odottaa allekirjoitusta",
      auditLabel: "Viimeisin auditointitapahtuma",
      auditValue: "Asiakirjan tila muutettu · ohjainsovellus",
    },
  },
  statusLabels: {
    available: "Saatavilla",
    pilot: "Pilotti",
    development: "Kehityksessä",
  },
  productPage: {
    highlightsTitle: "Keskeiset ominaisuudet",
    capabilitiesTitle: "Mitä tämä pinta tarjoaa",
    statusesTitle: "Tilatarrat",
  },
  authority: {
    heroSubtitle: "Aika- ja laajuusrajoitettu pääsy matkatodisteisiin – ei sertifioitu eFTI-alusta.",
    foundationBadge: "Tekninen valmius",
    notCertifiedBadge: "Ei sertifioitu eFTI",
    foundationTitle: "Mitä valmius tarkoittaa",
    foundationSubtitle: "Strukturoitu data ja kontrolloitu jakaminen – ilman sertifikaattia tai lupavaatimusta.",
    extraDisclaimer: "ViaNexis ei lupaa viranomaishyväksyntää kaikissa maissa. Lakien ja määräysten noudattaminen on asiakkaan vastuulla.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Matkalista ja pysäkit",
        description: "Aktiiviset matkat, seuraavat toimet ja pysäytystehtävät.",
        status: "available",
      },
      {
        title: "Asiakirjat ja allekirjoitus",
        description: "Lataukset, CMR-tehtävät ja allekirjoitusten sieppaus.",
        status: "available",
      },
      {
        title: "Offline-työ",
        description: "Paikallinen tallennus näkyvällä odottavalla synkronoinnilla.",
        status: "available",
      },
      {
        title: "Viestit",
        description: "Matkaan liittyvä viestintä kuljettajille.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktiivinen matkaluettelo",
        description: "Toimintakatsaus pysähdyksineen ja tiloineen.",
        status: "available",
      },
      {
        title: "Hälytykset puuttuvista asiakirjoista",
        description: "Puuttuvat tai allekirjoittamattomat asiakirjat näkyvät välittömästi.",
        status: "available",
      },
      {
        title: "Käyttöoikeudet",
        description: "Roolipohjainen pääsy yrityksen tietoihin.",
        status: "available",
      },
      {
        title: "Tarkastustapahtumat",
        description: "Haettavissa päätös- ja asiakirjapolku.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Lataa ja linkitä",
        description: "Matkaan, kuljettajaan tai ajoneuvoon liittyvät asiakirjat.",
        status: "available",
      },
      {
        title: "Allekirjoituksen työnkulku",
        description: "Odottaa allekirjoitusta → allekirjoitettu → tarkistus.",
        status: "pilot",
      },
      {
        title: "Suljettu matkapaketti",
        description: "Viedyt asiakirjat ja tapahtumat.",
        status: "pilot",
      },
      {
        title: "Mallinhallinta",
        description: "Keskitetyt asiakirjamallit – asteittainen käyttöönotto.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Roolipohjainen pääsy",
        description: "Käyttäjä- ja yrityskohtainen erottelu.",
        status: "available",
      },
      {
        title: "Tarkastusloki",
        description: "Toimet ja päätökset ovat haettavissa.",
        status: "available",
      },
      {
        title: "Istunto ja laite",
        description: "Hallittu istunto ja laitehallinta.",
        status: "pilot",
      },
      {
        title: "Tuen käyttöoikeus",
        description: "Aikarajoitettu, kirjattu tukimerkintä.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Kieli",
    draftSuffix: "· luonnos",
    breadcrumb: "Leipämuru",
    primaryNav: "Ensisijainen",
    importantNotice: "Tärkeä huomautus",
  },
};
