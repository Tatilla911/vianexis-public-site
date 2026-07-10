import type { SiteContent } from "../types";
import { legalBs } from "./legal/bs";

export const contentBs: SiteContent = {
  meta: {
    title: "ViaNexis Prijevoz vozača i kompanije",
    description: "Aplikacija za vozača, kontrola kompanije, upravljanje dokumentima, razmjena poruka, obavještenja i višejezični tokovi posla u jednom sistemu. Priprema internog testiranja u toku.",
    ogLocale: "bs_BA",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Karakteristike",
    driverApp: "Aplikacija za vozače",
    companyPortal: "Portal kompanije",
    documents: "Dokumenti",
    authorityEfti: "Autoritet / eFTI",
    security: "Sigurnost",
    pilot: "Pilotski pristup",
    contact: "Kontakt",
    requestAccess: "Zatražite pristup",
    menuOpen: "Otvorite meni",
  },
  footer: {
    tagline: "Digitalni transportni dokazi i platforma za rad vozača za transportne kompanije. eFTI-spremna osnova — nije certificirana eFTI platforma.",
    product: "Proizvod",
    legal: "Pravni",
    legalNotice: "Pravna obavijest",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
    disclaimers: "Odgovorno korištenje",
    dataContact: "Kontakt za zaštitu podataka",
    copyright: "Nije certificirana eFTI platforma. Ne obećava prihvatanje autoriteta, automatsku pravnu dokaznu snagu, besprijekorne OCR/AI/prevod ili hitne/SOS usluge. Nema javnog preuzimanja iz Play prodavnice.",
  },
  hero: {
    title: "ViaNexis — digitalni transportni dokaz i platforma za rad vozača",
    subtitle: "Aplikacija za vozača, kontrola kompanije, upravljanje dokumentima, razmjena poruka, obavještenja i višejezični tokovi posla u jednom sistemu.",
    primaryCta: "Kontaktirajte nas",
    secondaryCta: "Priprema internog testiranja u toku",
    stats: [
      {
        label: "Aplikacija za vozače",
        value: "Putovanje + van mreže",
      },
      {
        label: "Dokumenti",
        value: "CMR + revizija",
      },
      {
        label: "Razmjena poruka",
        value: "Višejezično",
      },
      {
        label: "Status",
        value: "Priprema za interni test",
      }
    ],
  },
  platformStatus: {
    title: "Trenutni status",
    items: [
      "Google Play interna priprema za testiranje je u toku — nije preuzimanje iz javne trgovine.",
      "Aplikacija drajvera je spremna za izdavanje i Samsung UAT je u toku.",
      "Produkcijski backend, push obavijesti i integracije partnera se postepeno povezuju."
    ],
    disclaimer: "ViaNexis ne tvrdi da je sistem aktivan, certificiran ili službeno prihvaćen u svakoj zemlji.",
  },
  moduleLabels: {
    goal: "Gol",
    appFoundation: "Podloga sa strane aplikacije",
    backendDependency: "Backend/admin zavisnost",
    important: "Važno",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikacija za vozače",
      goal: "Dozvolite vozačima da upravljaju zadacima, dokumentima i događajima povezanim s putovanjem na mobilnom uređaju - online i van mreže.",
      appFoundation: "Lista putovanja i detalji, otpremanje dokumenata, hvatanje potpisa, kontrolne liste, evidentiranje incidenata, vanmrežno spremanje i sinhronizacija, PIN-zaštićena sesija.",
      backendDependency: "Uživo API, opseg stanara, sinhronizacija putovanja i dokumenata, rješavanje postavki kompanije.",
    },
    {
      id: "company-admin",
      title: "Kompanija/Admin kontrola",
      goal: "Dozvolite transportnim kompanijama da upravljaju putovanjima, korisnicima, dozvolama i tokovima rada sa jednog portala.",
      appFoundation: "Podaci i radnje na strani vozača odražavaju pravila kompanije.",
      backendDependency: "Web portal kompanije, aplikacija za administraciju platforme, uloge, upravljanje putovanjima, zahtjevi za dokumentima, postavke razmjene kompanije.",
    },
    {
      id: "cmr-documents",
      title: "Digitalni CMR i dokumenti",
      goal: "Dokumenti vezani za putovanje — CMR, otpremnica, faktura, dokumenti o vozilu i vozaču — upravljani na strukturiran način.",
      appFoundation: "Upload dokumenata, skeniranje/fotografija, zadaci putovanja, zadaci zasnovani na zahtjevima, koncept primarnog dokumenta.",
      backendDependency: "Skladištenje dokumenata, metapodaci, pravila potpisa, dijeljenje ovlaštenja s ograničenjima opsega.",
      disclaimer: "Digitalni dokumenti nemaju automatski pravnu dokaznu snagu. Prihvatanje se razlikuje u zavisnosti od zemlje i kupca.",
    },
    {
      id: "completed-package",
      title: "Završen paket putovanja",
      goal: "Sažmite dokaze o obavljenom putovanju u paketu za izvoz.",
      appFoundation: "Zatvaranje putovanja, lokalni podaci i sinhronizirani događaji kao osnova za sastavljanje paketa.",
      backendDependency: "Završeno generiranje paketa putovanja, izvoz PDF, izvoz revizije. Neki dijelovi (npr. paleta/pakovanje PDF) ostaju ovisnosti.",
      disclaimer: "Paket podržava dokumentaciju; ne zamjenjuje pravnu procjenu kompanije ili nadležne postupke.",
    },
    {
      id: "messaging-notifications",
      title: "Poruke i obavještenja",
      goal: "Komunikacija vezana za putovanje i upozorenja za važne događaje vozača.",
      appFoundation: "Lista poruka, teme vezane za putovanje, osnova za obavještenje na strani aplikacije. Koristi se za: novu poruku, promjenu putovanja, zadatak dokumenta, problem sinhronizacije.",
      backendDependency: "Produkcija push (FCM/APNs), registracija tokena uređaja, otpremanje na strani servera — odvojena ovisnost, još nije aktivna.",
      disclaimer: "Ciljni ekran se otvara nakon PIN. Produkcija ne tvrdi da svaki događaj dolazi odmah.",
    },
    {
      id: "pallet-packaging",
      title: "Razmjena paleta i ambalaže",
      goal: "Zabilježite razmjenu paleta i ambalaže po stanici s količinama, nestašicom, oštećenjem i sporom.",
      appFoundation: "Odvojeni moduli paleta i pakovanja. Kompanija-promjenjiva. Kompanija može unaprijed postaviti stavke; vozač može dodati prilagođeno pakovanje ako je dozvoljeno. Vanmrežno spremanje i sinhronizacija.",
      backendDependency: "Postavke razmjene API, sinhronizacija zapisa, korisničko sučelje administratora portala, kompletan paket PDF odjeljak — ovo drugo je ovisnost.",
      disclaimer: "PDF odjeljak dokaza nije u potpunosti spreman u svim slučajevima. Snimanje podržava dokumentaciju o sporovima, ali ne odlučuje o sporovima.",
    },
    {
      id: "adr-border",
      title: "ADR / granična podrška",
      goal: "Brze pomoćne informacije za ADR i granični/carinski kontekst — uz provjeru službenih izvora.",
      appFoundation: "ADR informacije, traženje UN broja, pomoćnik koda tunela, metapodaci granice/carine povezani sa putovanjima.",
      backendDependency: "ADR ažuriranja baze podataka, metapodaci pravila specifičnih za državu, podaci graničnih kontrolnih punktova.",
      disclaimer: "ADR i podaci tunela su pomoćne informacije. Aplikacija ne zamjenjuje zakone, obuku, službenika Generalnog direktorata kompanije ili odluke vlasti.",
    },
    {
      id: "truck-map",
      title: "Temelj karte kamiona",
      goal: "Pregled flote i putovanja na karti — operativna orijentacija.",
      appFoundation: "Pregled zasnovan na karti, prikaz konteksta putovanja i vozila.",
      backendDependency: "Integracija provajdera telematike, provajder rutiranja, pozicija uživo — postepena integracija.",
      disclaimer: "Mapa ne garantuje poštivanje zakonskih ograničenja ili dozvola.",
    },
    {
      id: "višejezičan",
      title: "Višejezični rad",
      goal: "Višejezični timovi na jednoj platformi.",
      appFoundation: "Višejezično korisničko sučelje aplikacije vozača, zadržavanje originalne poruke, prijevod kao pomoć.",
      backendDependency: "Proširenje lokalizacije portala i javnih stranica, radni tok pregleda prijevoda.",
      disclaimer: "Mašinski ili AI prijevod je pomoćni; potreban je ljudski pregled. Originalni dokument ostaje primarni.",
    },
    {
      id: "audit-support",
      title: "Pristup reviziji i podršci",
      goal: "Traceable log; kontrolirani pristup podršci za rješavanje problema.",
      appFoundation: "Evidentiranje događaja za putovanja i radnje dokumenata; sesije podrške koje se mogu revidirati.",
      backendDependency: "Izvoz revizije, politika pristupa podrške, matrica dozvola preduzeća.",
      disclaimer: "Dnevnik revizije nije automatski pravni dokaz.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — odgovorna upotreba",
      body: "ADR i podaci tunela su pomoćne informacije. Zvanični izvori, tabele i trenutna lokalna pravila moraju uvijek biti provjereni. ViaNexis ne zamjenjuje zakone, ADR obuku, službenika kompanije za opasne terete ili odluke vlasti.",
    },
    aiOcr: {
      title: "AI, OCR & prijevod",
      body: "AI sažetak, OCR i automatsko prevođenje su pomoćni alati. Potreban je ljudski pregled. Originalni dokument i poruka ostaju primarni. Nije pravni savjet i nije ovjereni prijevod.",
    },
    efti: {
      title: "eFTI i dijeljenje ovlaštenja",
      body: "ViaNexis nije certificirana eFTI platforma. Ne obećava prihvatanje vlasti u svakoj zemlji. eFTI-ready temelj znači tehničku spremnost — a ne certifikat ili licencu.",
    },
  },
  home: {
    problem: {
      title: "Svakodnevni logistički izazovi",
      subtitle: "Kada su dokumenti, potpisi i događaji raštrkani, sljedivost i dokazi trpe.",
      cards: [
        {
          title: "Razbacani dokumenti",
          description: "Dokumenti o putovanjima u e-pošti, chatu ili papiru — teško ih je povezati sa stvarnim događajima.",
        },
        {
          title: "Nedostaju potpisi",
          description: "Kasni ili nedostajući potpisi odgađaju zatvaranje i povećavaju rizik od sporova.",
        },
        {
          title: "Događaji koji se teško dokazuju",
          description: "Preuzimanje, dostava, zamjena paleta, incident — bez strukturiranih dnevnika, teško ući u trag.",
        },
        {
          title: "Višejezični timovi",
          description: "Dnevni nesporazumi u porukama — potrebno je zadržavanje originalnog teksta i pregledan prijevod.",
        }
      ],
    },
    modules: {
      title: "Platformski moduli",
      subtitle: "Cilj, osnova na strani aplikacije, ovisnost o pozadini/administratoru — s pravno sigurnim formulacijama.",
    },
    pallet: {
      title: "Razmjena paleta i ambalaže",
      subtitle: "Odvojeni moduli, koji se mogu prebaciti u kompaniju — van mreže sačuvajte za reviziju.",
    },
    notifications: {
      title: "Poruke i obavještenja",
      subtitle: "Osnova na strani aplikacije spremna — produkcija push je zasebna pozadinska ovisnost.",
      cards: [
        {
          title: "Vrste događaja obavještenja",
          description: "Nova poruka, promjena putovanja, zadatak dokumenta, problem sinhronizacije.",
        },
        {
          title: "Usmjeravanje dodirom i PIN",
          description: "Otvorite ciljni ekran iz obavijesti; duboka veza nakon PIN.",
        },
        {
          title: "Zaključani ekran koji je siguran za privatnost",
          description: "Cijeli sadržaj dokumenta ili poruke se prema zadanim postavkama ne prikazuje na zaključanom ekranu.",
        }
      ],
      backendDepTitle: "Backend zavisnost",
      backendDepBody: "Pritisak proizvodnje (FCM/APNs), registracija tokena uređaja i otpremanje na strani servera još nisu aktivni — potrebna je posebna integracija.",
    },
    disclaimersSection: {
      title: "Odgovorno korištenje — važne napomene",
    },
    security: {
      title: "Zaštita i kontrola",
      subtitle: "Zaštita preduzeća i vozača sa strukturiranom dokumentacijom.",
      cards: [
        {
          title: "Zaštita kompanije",
          description: "Dokumentacija zasnovana na zahtjevima, događaji koji se mogu revidirati, kontrolirani pristup.",
        },
        {
          title: "Zaštita vozača",
          description: "Strukturiran proces za dokumentovanje događaja u sporovima.",
        },
        {
          title: "Okosnica dokumentacije",
          description: "Dokumenti i događaji povezani sa putovanjem u jednom sistemu.",
        },
        {
          title: "Događaji koji se mogu revidirati",
          description: "Ko je šta uradio kada - registrovan i pretraživ.",
        }
      ],
      notPromiseTitle: "Nije obećanje",
      notPromiseBody: "ViaNexis ne obećava automatsku pravnu dokaznu snagu. Pravna procjena zavisi od konteksta.",
    },
    contact: {
      title: "Kontakt i interno testiranje",
      subtitle: "Kontrolisani pristup — ne automatska registracija, nema javno preuzimanje Play.",
      body: "Aplikacija drajver je u pripremi za interno testiranje Google Playa. Spremnost za oslobađanje i Samsung UAT u toku. Aktivacija nije automatska.",
      consentNote: "Sistem upravlja dokumentima, radnim tokovima vozača, podacima kompanije i dozvolama — svaki pristup se pojedinačno pregleda.",
      contactLink: "Kontaktirajte nas →",
    },
  },
  contactForm: {
    title: "Kontaktirajte nas",
    subtitle: "Interes za platformu ViaNexis — ne automatska registracija.",
    name: "Ime *",
    company: "Kompanija *",
    email: "Email *",
    phone: "Telefon",
    message: "Poruka *",
    interestType: "Vrsta kamata *",
    interestPlaceholder: "Odaberite...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikacija za vozače",
      },
      {
        value: "company-admin",
        label: "Kompanija / Admin platforma",
      },
      {
        value: "dokumenata",
        label: "Upravljanje dokumentima",
      },
      {
        value: "pallet-packaging",
        label: "Paleta / pakovanje",
      },
      {
        value: "adr-customs",
        label: "ADR / carinska podrška",
      },
      {
        value: "ostalo",
        label: "Ostalo",
      }
    ],
    consent: "Slažem se da ViaNexis obrađuje dostavljene podatke isključivo u svrhu kontakta. *",
    submit: "Pošalji poruku",
    submitMailto: "Pošalji email",
    intakeDisabled: "Online prijava potencijalnog klijenta je u pripremi. Koristite e-mail kontakt ili pokušajte ponovo kasnije.",
    successTitle: "Poruka primljena",
    successBody: "Hvala na interesovanju. Naš tim će Vas kontaktirati. Aktivacija pristupa nije automatska.",
    newSubmission: "Nova poruka",
    errors: {
      name: "Ime je obavezno.",
      company: "Firma je obavezna.",
      email: "Email je obavezan.",
      emailInvalid: "Unesite važeću adresu e-pošte.",
      message: "Poruka je obavezna.",
      interest: "Odaberite vrstu kamate.",
      consent: "Potreban je pristanak.",
      submitFailed: "Poruka nije mogla biti poslana. Umjesto toga pokušajte putem e-pošte.",
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
        title: "Inspekcijski paket organa",
        description: "Dokumenti i događaji povezani sa putovanjem u zajedničkom paketu ograničenog obima.",
      },
      {
        title: "Obim / vremenski ograničen pristup",
        description: "Ograničeni pristup zasnovan na QR - nije javno.",
      },
      {
        title: "Revizija",
        description: "Zabilježeni događaji pristupa i dijeljenja.",
      },
      {
        title: "eFTI-spremna podloga",
        description: "Tehnička osnova za buduću integraciju — ne certificiranje.",
      }
    ],
  },
  legal: legalBs,
};
