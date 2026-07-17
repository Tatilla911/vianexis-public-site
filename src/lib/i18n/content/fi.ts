import type { SiteContent } from "../types";
import { legalFi } from "./legal/fi";

export const contentFi: SiteContent = {
  meta: {
    title: "ViaNexis Kuljettajan ja yrityksen kuljetustoiminta",
    description: "Kuljettajasovellus, yrityshallinta, asiakirjojen hallinta, viestit, ilmoitukset ja monikieliset matkatyönkulut yhdessä järjestelmässä. Sisäisen testauksen valmistelu käynnissä.",
    ogLocale: "fi_FI",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Ominaisuudet",
    driverApp: "Kuljettajan sovellus",
    companyPortal: "Yritysportaali",
    documents: "Asiakirjat",
    authorityEfti: "Viranomainen / eFTI",
    security: "Turvallisuus",
    pilot: "Pilotin pääsy",
    contact: "Ota yhteyttä",
    requestAccess: "Pyydä käyttöoikeutta",
    menuOpen: "Avaa valikko",
  },
  footer: {
    tagline: "Digitaalinen kuljetustodistus ja kuljettajien toimintaalusta kuljetusyrityksille. eFTI-valmis perusta – ei sertifioitu eFTI-alusta.",
    product: "Tuote",
    legal: "Laillinen",
    legalNotice: "Oikeudellinen huomautus",
    privacy: "Tietosuojakäytäntö",
    terms: "Käyttöehdot",
    disclaimers: "Vastuullinen käyttö",
    dataContact: "Tietosuoja yhteyshenkilö",
    copyright: "Ei sertifioitu eFTI-alusta. Ei lupaa viranomaishyväksyntää, automaattista laillista todistusvoimaa, virheettömiä OCR/AI/käännös- tai hätä-/SOS-palveluita. Ei julkista Play Kaupan latausta.",
  },
  hero: {
    title: "ViaNexis — digitaalinen kuljetustodistus ja kuljettajan toimintaympäristö",
    subtitle: "Kuljettajasovellus, yrityshallinta, asiakirjojen hallinta, viestit, ilmoitukset ja monikieliset matkatyönkulut yhdessä järjestelmässä.",
    primaryCta: "Ota yhteyttä",
    secondaryCta: "Sisäisen testauksen valmistelu käynnissä",
    stats: [
      {
        label: "Kuljettajan sovellus",
        value: "Matka + offline",
      },
      {
        label: "Asiakirjat",
        value: "CMR + tarkastus",
      },
      {
        label: "Viestit",
        value: "Monikielinen",
      },
      {
        label: "Status",
        value: "Sisäisen testin valmistelu",
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
    goal: "Maali",
    appFoundation: "Sovelluspuolen meikki",
    backendDependency: "Tausta-/järjestelmänvalvojariippuvuus",
    important: "Tärkeää",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Kuljettajan sovellus",
      goal: "Anna kuljettajien käsitellä matkaan liittyviä tehtäviä, asiakirjoja ja tapahtumia mobiililaitteella – online- ja offline-tilassa.",
      appFoundation: "Matkaluettelo ja tiedot, asiakirjan lataus, allekirjoitusten kaappaus, tarkistuslistat, tapahtumaloki, offline-tallennus ja synkronointi, PIN-suojattu istunto.",
      backendDependency: "Live API, vuokralaisen laajuus, matka- ja asiakirjasynkronointi, yrityksen asetusten ratkaisu.",
    },
    {
      id: "company-admin",
      title: "Yrityksen/järjestelmänvalvojan hallinta",
      goal: "Anna kuljetusyritysten hallita matkoja, käyttäjiä, käyttöoikeuksia ja työnkulkuja yhdestä portaalista.",
      appFoundation: "Kuljettajan tiedot ja toimet vastaavat yrityksen sääntöjä.",
      backendDependency: "Verkkoyritysportaali, alustan järjestelmänvalvojasovellus, roolit, matkanhallinta, asiakirjavaatimukset, yritysvaihtoasetukset.",
    },
    {
      id: "cmr-documents",
      title: "Digitaalinen CMR ja asiakirjat",
      goal: "Matkaan liittyvät asiakirjat — CMR, lähetystodistus, lasku, ajoneuvo- ja kuljettajapaperit — hallitaan jäsennellysti.",
      appFoundation: "Asiakirjan lataus, skannaus/kuvaus, matkatehtävä, vaatimuspohjaiset tehtävät, ensisijainen asiakirjakonsepti.",
      backendDependency: "Asiakirjojen tallennus, metatiedot, allekirjoitussäännöt, valtuuksien jakaminen laajuusrajoilla.",
      disclaimer: "Digitaalisilla asiakirjoilla ei ole automaattisesti laillista todistusvoimaa. Hyväksyminen vaihtelee maan ja asiakkaan mukaan.",
    },
    {
      id: "completed-package",
      title: "Valmis matkapaketti",
      goal: "Tee yhteenveto suoritetusta matkasta vientikelpoisessa paketissa.",
      appFoundation: "Matkan sulkeminen, paikalliset tiedot ja synkronoidut tapahtumat paketin kokoamisen perustana.",
      backendDependency: "Valmis matkapaketin luominen, PDF vienti, tarkastusvienti. Jotkut osat (esim. lava/pakkaus PDF) jäävät riippuvuuksiksi.",
      disclaimer: "Paketti tukee dokumentaatiota; se ei korvaa yhtiön oikeudellista arviointia tai viranomaismenettelyä.",
    },
    {
      id: "messaging-notifications",
      title: "Viestit ja ilmoitukset",
      goal: "Matkaan liittyvä viestintä ja hälytykset tärkeistä kuljettajan tapahtumista.",
      appFoundation: "Viestiluettelo, linkitetyt viestiketjut, sovelluspuolen ilmoituspohja. Käytettävissä: uusi viesti, matkan muutos, asiakirjatehtävä, synkronointiongelma.",
      backendDependency: "Tuotantotyöntö (FCM/APNs), laitetunnuksen rekisteröinti, palvelinpuolen lähetys – erillinen riippuvuus, ei vielä käytössä.",
      disclaimer: "Kohdenäyttö avautuu PIN:n jälkeen. Tuotantotyöntö ei vaadi jokaisen tapahtuman saapuvan välittömästi.",
    },
    {
      id: "pallet-packaging",
      title: "Lavojen ja pakkausten vaihto",
      goal: "Tallenna kuormalavojen ja pakkausten vaihdot pysähdyskohtaisesti määrien, puutteen, vaurioiden ja riitojen kanssa.",
      appFoundation: "Erilliset lava- ja pakkausmoduulit. Yrityksen välillä vaihdettavissa. Yritys voi esiasettaa kohteita; kuljettaja voi lisätä mukautetun pakkauksen, jos se on sallittua. Offline-tallennus ja synkronointi.",
      backendDependency: "Vaihtoasetukset API, tietueiden synkronointi, portaalin järjestelmänvalvojan käyttöliittymä, valmis paketti PDF -osio – jälkimmäinen on riippuvuus.",
      disclaimer: "PDF todisteiden osio ei ole täysin valmis kaikissa tapauksissa. Tallennus tukee riitojen dokumentointia, mutta ei ratkaise riitoja.",
    },
    {
      id: "adr-border",
      title: "ADR / reunatuki",
      goal: "Nopeat aputiedot ADR- ja raja-/tullikontekstille – virallisten lähteiden tarkistamisen ohella.",
      appFoundation: "ADR information, UN number search, tunnel code helper, border/customs metadata linked to trips.",
      backendDependency: "ADR database updates, country-specific rule metadata, border checkpoint data.",
      disclaimer: "ADR ja tunnelitiedot ovat aputietoja. Sovellus ei korvaa lainsäädäntöä, koulutusta, yrityksen pääosaston virkailijaa tai viranomaispäätöksiä.",
    },
    {
      id: "truck-map",
      title: "Kuorma-auton kartan perusta",
      goal: "Laivaston ja matkan yleiskatsaus kartalla – toiminnan suunta.",
      appFoundation: "Karttapohjainen yleiskatsaus, matkan ja ajoneuvon kontekstin näyttö.",
      backendDependency: "Telemaattisen palveluntarjoajan integrointi, reitityspalveluntarjoaja, suora sijainti – asteittainen integrointi.",
      disclaimer: "Kartta ei takaa lakisääteisten rajoitusten tai lupien noudattamista.",
    },
    {
      id: "monikielinen",
      title: "Monikielinen toiminta",
      goal: "Monikieliset tiimit yhdellä alustalla.",
      appFoundation: "Kuljettajasovelluksen monikielinen käyttöliittymä, alkuperäisen viestin säilytys, käännös apuna.",
      backendDependency: "Portaalin ja julkisen sivuston aluelaajennus, käännöstarkistuksen työnkulku.",
      disclaimer: "Kone- tai AI-käännös on apuväline; ihmisen tarkastus tarvitaan. Alkuperäinen asiakirja pysyy ensisijaisena.",
    },
    {
      id: "audit-support",
      title: "Tarkastus- ja tukipääsy",
      goal: "Jäljitettävä loki; valvottu tukiyhteys vianmääritystä varten.",
      appFoundation: "Tapahtumaloki matka- ja asiakirjatoimintoja varten; tarkastettavia tukiistuntoja.",
      backendDependency: "Tarkastuksen vienti, tuen käyttöoikeuskäytäntö, yrityksen käyttöoikeusmatriisi.",
      disclaimer: "Tarkastusloki ei ole automaattinen laillinen todiste.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — vastuullinen käyttö",
      body: "ADR ja tunnelitiedot ovat aputietoja. Viralliset lähteet, taulukot ja voimassa olevat paikalliset säännöt on aina tarkistettava. ViaNexis ei korvaa lainsäädäntöä, ADR koulutusta, yrityksen vaarallisten aineiden toimihenkilöä tai viranomaispäätöksiä.",
    },
    aiOcr: {
      title: "AI, OCR ja käännös",
      body: "AI yhteenveto, OCR ja automaattinen käännös ovat apuvälineitä. Ihmisen arviointi vaaditaan. Alkuperäinen asiakirja ja viesti pysyvät ensisijaisena. Ei oikeudellista neuvontaa eikä varmennettua käännöstä.",
    },
    efti: {
      title: "eFTI ja valtuuksien jakaminen",
      body: "ViaNexis ei ole sertifioitu eFTI-alusta. Se ei lupaa auktoriteettien hyväksyntää kaikissa maissa. eFTI-valmis perusta tarkoittaa teknistä valmiutta – ei sertifikaattia tai lisenssiä.",
    },
  },
  home: {
    problem: {
      title: "Arjen logistiikan haasteita",
      subtitle: "Kun asiakirjat, allekirjoitukset ja tapahtumat ovat hajallaan, jäljitettävyys ja todisteet kärsivät.",
      cards: [
        {
          title: "Hajallaan olevia asiakirjoja",
          description: "Matkapaperit sähköpostissa, chatissa tai paperissa – vaikea yhdistää todellisiin tapahtumiin.",
        },
        {
          title: "Allekirjoitukset puuttuvat",
          description: "Myöhäiset tai puuttuvat allekirjoitukset viivästyttävät sulkemista ja lisäävät kiistan riskiä.",
        },
        {
          title: "Vaikeasti todistettavissa olevia tapahtumia",
          description: "Nouto, toimitus, kuormalavojen vaihto, tapahtuma – ilman strukturoituja lokeja, vaikea jäljittää.",
        },
        {
          title: "Monikieliset tiimit",
          description: "Päivittäiset viestien väärinkäsitykset – vaaditaan alkuperäisen tekstin säilyttäminen ja tarkistettu käännös.",
        }
      ],
    },
    modules: {
      title: "Alustan moduulit",
      subtitle: "Tavoite, sovelluspuolen perusta, tausta-/järjestelmänvalvojariippuvuus – juridisesti turvallisella sanamuodolla.",
    },
    pallet: {
      title: "Lavojen ja pakkausten vaihto",
      subtitle: "Erilliset moduulit, yrityksen vaihdettavissa – offline-tallennus tarkastusta varten.",
    },
    notifications: {
      title: "Viestit ja ilmoitukset",
      subtitle: "Sovelluspuolen perusta on valmis – tuotantotyöntö on erillinen taustariippuvuus.",
      cards: [
        {
          title: "Ilmoitustapahtumatyypit",
          description: "Uusi viesti, matkan muutos, asiakirjatehtävä, synkronointiongelma.",
        },
        {
          title: "Napauta reititys ja PIN",
          description: "Avaa kohdenäyttö ilmoituksesta; syvälinkki PIN:n jälkeen.",
        },
        {
          title: "Yksityisyyttä suojaava lukitusnäyttö",
          description: "Koko asiakirjan tai viestin sisältöä ei näytetä lukitusnäytöllä oletuksena.",
        }
      ],
      backendDepTitle: "Taustariippuvuus",
      backendDepBody: "Tuotantotyöntö (FCM/APNs), laitetunnuksen rekisteröinti ja palvelinpuolen lähetys eivät ole vielä käytössä – tarvitaan erillinen integrointi.",
    },
    disclaimersSection: {
      title: "Vastuullinen käyttö – tärkeitä huomautuksia",
    },
    security: {
      title: "Suojaus ja valvonta",
      subtitle: "Yrityksen ja kuljettajan suojaus jäsennellyllä dokumentaatiolla.",
      cards: [
        {
          title: "Yrityksen suoja",
          description: "Vaatimuspohjainen dokumentaatio, tarkastettavat tapahtumat, valvottu pääsy.",
        },
        {
          title: "Kuljettajan suojaus",
          description: "Strukturoitu prosessi kiistatapahtumien dokumentoimiseksi.",
        },
        {
          title: "Dokumentaation selkäranka",
          description: "Matkaan liittyvät paperit ja tapahtumat yhdessä järjestelmässä.",
        },
        {
          title: "Tarkastettavat tapahtumat",
          description: "Kuka teki mitä milloinkin – kirjattu ja haettavissa.",
        }
      ],
      notPromiseTitle: "Ei lupaus",
      notPromiseBody: "ViaNexis ei lupaa automaattista laillista todistusvoimaa. Oikeudellinen arviointi riippuu kontekstista.",
    },
    contact: {
      title: "Yhteydenotto ja sisäinen testaus",
      subtitle: "Hallittu pääsy – ei automaattista rekisteröintiä, ei julkista Play-latausta.",
      body: "Kuljettajasovellus on Google Playn sisäisen testauksen valmistelussa. Julkaisuvalmius ja Samsungin UAT käynnissä. Aktivointi ei ole automaattinen.",
      consentNote: "Järjestelmä käsittelee asiakirjoja, kuljettajien työnkulkuja, yritystietoja ja käyttöoikeuksia – jokainen pääsy tarkistetaan erikseen.",
      contactLink: "Ota yhteyttä →",
    },
  },
  contactForm: {
    title: "Ota yhteyttä",
    subtitle: "Kiinnostus ViaNexis-alustaa kohtaan – ei automaattista rekisteröintiä.",
    name: "nimi *",
    company: "Yritys *",
    email: "Sähköposti*",
    phone: "Puhelin",
    message: "Viesti *",
    interestType: "Kiinnostuksen tyyppi *",
    interestPlaceholder: "Valitse...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Kuljettajan sovellus",
      },
      {
        value: "company-admin",
        label: "Yritys / Admin-alusta",
      },
      {
        value: "asiakirjoja",
        label: "Asiakirjojen hallinta",
      },
      {
        value: "pallet-packaging",
        label: "Lava / pakkaus",
      },
      {
        value: "adr-customs",
        label: "ADR / tullituki",
      },
      {
        value: "muu",
        label: "Muut",
      }
    ],
    consent: "Hyväksyn, että ViaNexis käsittelee toimitettuja tietoja vain yhteydenottotarkoituksiin. *",
    submit: "Lähetä viesti",
    submitMailto: "Lähetä sähköpostia",
    intakeDisabled: "Online-johtopäätöstä valmistellaan. Käytä sähköpostia tai yritä myöhemmin uudelleen.",
    successTitle: "Viesti vastaanotettu",
    successBody: "Kiitos mielenkiinnostasi. Tiimimme ottaa sinuun yhteyttä. Käyttöoikeuden aktivointi ei ole automaattista.",
    newSubmission: "Uusi viesti",
    errors: {
      name: "Nimi vaaditaan.",
      company: "Yritys vaaditaan.",
      email: "Sähköposti vaaditaan.",
      emailInvalid: "Anna kelvollinen sähköpostiosoite.",
      message: "Viesti vaaditaan.",
      interest: "Valitse kiinnostuksen tyyppi.",
      consent: "Suostumus vaaditaan.",
      submitFailed: "Viestiä ei voitu lähettää. Kokeile sen sijaan sähköpostia.",
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
        title: "Viranomaisten tarkastuspaketti",
        description: "Matkaan linkitetyt asiakirjat ja tapahtumat rajoitetussa jaetussa paketissa.",
      },
      {
        title: "Laajuus / aika rajoitettu pääsy",
        description: "QR-pohjainen rajoitettu käyttöoikeus – ei julkinen.",
      },
      {
        title: "Tarkastaa",
        description: "Kirjatut pääsy- ja jakamistapahtumat.",
      },
      {
        title: "eFTI-valmis pohja",
        description: "Tekninen perusta tulevaa integraatiota varten – ei sertifiointia.",
      }
    ],
  },
  legal: legalFi,
};
