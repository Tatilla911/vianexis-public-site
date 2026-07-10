import type { SiteContent } from "../types";
import { legalHr } from "./legal/hr";

export const contentHr: SiteContent = {
  meta: {
    title: "ViaNexis Operacije prijevoza vozača i tvrtke",
    description: "Aplikacija za vozača, kontrola tvrtke, upravljanje dokumentima, slanje poruka, obavijesti i višejezični tijek putovanja u jednom sustavu. Priprema internog testiranja u tijeku.",
    ogLocale: "hr_HR",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Značajke",
    driverApp: "Aplikacija za vozača",
    companyPortal: "Portal tvrtke",
    documents: "Dokumenti",
    authorityEfti: "Autoritet / eFTI",
    security: "Sigurnost",
    pilot: "Pristup pilotu",
    contact: "Kontakt",
    requestAccess: "Zatraži pristup",
    menuOpen: "Otvori izbornik",
  },
  footer: {
    tagline: "Digitalni prometni dokazi i platforma za rad vozača za prijevozničke tvrtke. Temelj spreman za eFTI — nije certificirana platforma eFTI.",
    product: "Proizvod",
    legal: "Pravno",
    legalNotice: "Pravna obavijest",
    privacy: "Politika privatnosti",
    terms: "Uvjeti korištenja",
    disclaimers: "Odgovorno korištenje",
    dataContact: "Kontakt za zaštitu podataka",
    copyright: "Nije certificirana eFTI platforma. Ne obećava prihvaćanje autoriteta, automatsku pravnu dokaznu snagu, besprijekoran OCR/AI/prijevod ili hitne/SOS usluge. Nema javnog preuzimanja Trgovine Play.",
  },
  hero: {
    title: "ViaNexis — digitalni dokazi o prijevozu i platforma za rad vozača",
    subtitle: "Aplikacija za vozača, kontrola tvrtke, upravljanje dokumentima, slanje poruka, obavijesti i višejezični tijek putovanja u jednom sustavu.",
    primaryCta: "Kontaktirajte nas",
    secondaryCta: "Priprema internog testiranja u tijeku",
    stats: [
      {
        label: "Aplikacija za vozača",
        value: "Putovanje + offline",
      },
      {
        label: "Dokumenti",
        value: "CMR + revizija",
      },
      {
        label: "Slanje poruka",
        value: "Višejezični",
      },
      {
        label: "Status",
        value: "Priprema internog testa",
      }
    ],
  },
  platformStatus: {
    title: "Trenutno stanje",
    items: [
      "U tijeku je priprema internog testiranja Google Playa — nije preuzimanje iz javne trgovine.",
      "Spremnost za izdavanje aplikacije vozača i Samsung UAT u tijeku.",
      "Produkcija backend, push obavijesti i integracije partnera povezuju se postupno."
    ],
    disclaimer: "ViaNexis ne tvrdi da je sustav aktivan, certificiran ili službeno prihvaćen u svakoj zemlji.",
  },
  moduleLabels: {
    goal: "Cilj",
    appFoundation: "Temelj na strani aplikacije",
    backendDependency: "Zavisnost pozadine/administratora",
    important: "Važno",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikacija za vozača",
      goal: "Dopustite vozačima da obrađuju zadatke povezane s putovanjem, dokumente i događaje na mobilnom uređaju — online i offline.",
      appFoundation: "Popis putovanja i detalji, učitavanje dokumenata, snimanje potpisa, popisi za provjeru, bilježenje incidenata, izvanmrežno spremanje i sinkronizacija, PIN-zaštićena sesija.",
      backendDependency: "Uživo API, opseg stanara, sinkronizacija putovanja i dokumenata, razrješenje postavki tvrtke.",
    },
    {
      id: "company-admin",
      title: "Kontrola tvrtke / administratora",
      goal: "Neka prijevozničke tvrtke upravljaju putovanjima, korisnicima, dopuštenjima i tijekovima rada s jednog portala.",
      appFoundation: "Podaci i radnje na strani vozača odražavaju pravila tvrtke.",
      backendDependency: "Web portal tvrtke, aplikacija za administratore platforme, uloge, upravljanje putovanjima, zahtjevi za dokumentima, postavke razmjene tvrtki.",
    },
    {
      id: "cmr-documents",
      title: "Digital CMR & documents",
      goal: "Dokumenti povezani s putovanjem — CMR, otpremnica, faktura, dokumenti vozila i vozača — kojima se upravlja na strukturiran način.",
      appFoundation: "Prijenos dokumenata, skeniranje/fotografija, dodjela putovanja, zadaci temeljeni na zahtjevima, koncept primarnog dokumenta.",
      backendDependency: "Pohrana dokumenata, metapodaci, pravila potpisa, dijeljenje ovlaštenja s ograničenjima opsega.",
      disclaimer: "Digitalni dokumenti nemaju automatski pravnu dokaznu snagu. Prihvaćanje se razlikuje ovisno o zemlji i korisniku.",
    },
    {
      id: "completed-package",
      title: "Završen paket putovanja",
      goal: "Sažeti dokaze o završenom putovanju u paket koji se može izvoziti.",
      appFoundation: "Zatvaranje putovanja, lokalni podaci i sinkronizirani događaji kao osnova za sastavljanje paketa.",
      backendDependency: "Dovršeno generiranje paketa putovanja, izvoz PDF, izvoz revizije. Neki odjeljci (npr. paleta/pakiranje PDF) ostaju ovisni.",
      disclaimer: "Paket podržava dokumentaciju; ne zamjenjuje pravnu procjenu tvrtke ili postupak ovlaštenja.",
    },
    {
      id: "messaging-notifications",
      title: "Poruke i obavijesti",
      goal: "Komunikacija povezana s putovanjem i upozorenja za važne događaje za vozača.",
      appFoundation: "Popis poruka, niti povezane s putovanjem, temelj obavijesti na strani aplikacije. Upotrebljivo za: novu poruku, promjenu putovanja, zadatak dokumenta, problem sinkronizacije.",
      backendDependency: "Produkcija push (FCM/APNs), registracija tokena uređaja, slanje na strani poslužitelja — odvojena ovisnost, još neaktivno.",
      disclaimer: "Ciljni zaslon otvara se nakon PIN. Produkcija ne zahtijeva da svaki događaj stigne odmah.",
    },
    {
      id: "pallet-packaging",
      title: "Razmjena paleta i ambalaže",
      goal: "Bilježite razmjene paleta i pakiranja po zaustavljanju s količinama, nedostatkom, oštećenjima i sporovima.",
      appFoundation: "Odvojeni moduli za palete i pakiranje. Tvrtka-preklopna. Tvrtka može unaprijed postaviti stavke; vozač može dodati prilagođeno pakiranje ako je dopušteno. Izvanmrežno spremanje i sinkronizacija.",
      backendDependency: "Postavke Exchangea API, sinkronizacija zapisa, korisničko sučelje administratora portala, odjeljak dovršenog paketa PDF — potonje je ovisnost.",
      disclaimer: "PDF odjeljak s dokazima nije u potpunosti spreman u svim slučajevima. Snimanje podržava dokumentaciju sporova, ali ne odlučuje o sporovima.",
    },
    {
      id: "adr-border",
      title: "ADR / granična podrška",
      goal: "Brze pomoćne informacije za ADR i granični/carinski kontekst — uz provjeru službenih izvora.",
      appFoundation: "ADR informacije, pretraživanje UN broja, pomoćnik koda tunela, granični/carinski metapodaci povezani s putovanjima.",
      backendDependency: "ADR ažuriranja baze podataka, metapodaci o pravilima za pojedine države, podaci o graničnim kontrolnim točkama.",
      disclaimer: "ADR i podaci o tunelu pomoćne su informacije. Aplikacija ne zamjenjuje zakonodavstvo, obuku, službenika generalne uprave tvrtke ili odluke nadležnih tijela.",
    },
    {
      id: "truck-map",
      title: "Temelj karte kamiona",
      goal: "Pregled flote i putovanja na karti — operativna orijentacija.",
      appFoundation: "Pregled temeljen na karti, prikaz putovanja i konteksta vozila.",
      backendDependency: "Integracija pružatelja telematike, pružatelja usmjeravanja, pozicije uživo — postupna integracija.",
      disclaimer: "Karta ne jamči poštivanje zakonskih ograničenja ili dozvola.",
    },
    {
      id: "višejezičan",
      title: "Višejezični rad",
      goal: "Višejezični timovi na jednoj platformi.",
      appFoundation: "Višejezično sučelje aplikacije za vozača, zadržavanje izvorne poruke, prijevod kao pomoć.",
      backendDependency: "Proširenje lokalizacije portala i javne stranice, tijek rada pregleda prijevoda.",
      disclaimer: "Strojni ili AI prijevod je pomoćni; potreban je ljudski pregled. Izvorni dokument ostaje primarni.",
    },
    {
      id: "audit-support",
      title: "Pristup reviziji i podršci",
      goal: "Slijedivi dnevnik; kontrolirani pristup podrške za rješavanje problema.",
      appFoundation: "Bilježenje događaja za akcije putovanja i dokumenta; revizijske sesije podrške.",
      backendDependency: "Revizija izvoza, politika pristupa podršci, matrica dopuštenja poduzeća.",
      disclaimer: "Dnevnik revizije nije automatski pravni dokaz.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — odgovorna uporaba",
      body: "ADR i podaci o tunelu pomoćne su informacije. Službeni izvori, tablice i trenutna lokalna pravila uvijek moraju biti provjereni. ViaNexis ne zamjenjuje zakonodavstvo, ADR obuku, službenika tvrtke za opasne tvari ili odluke nadležnih tijela.",
    },
    aiOcr: {
      title: "AI, OCR & prijevod",
      body: "AI sažetak, OCR i automatski prijevod pomoćni su alati. Potreban je ljudski pregled. Izvorni dokument i poruka ostaju primarni. Nije pravni savjet niti ovjereni prijevod.",
    },
    efti: {
      title: "eFTI & dijeljenje ovlasti",
      body: "ViaNexis nije certificirana eFTI platforma. Ne obećava prihvaćanje vlasti u svakoj zemlji. eFTI-ready temelj znači tehničku spremnost — ne certifikat ili licencu.",
    },
  },
  home: {
    problem: {
      title: "Svakodnevni logistički izazovi",
      subtitle: "Kada su dokumenti, potpisi i događaji razbacani, sljedivost i dokazi trpe.",
      cards: [
        {
          title: "Razbacani dokumenti",
          description: "Putni papiri u e-pošti, chatu ili papiru — teško ih je povezati sa stvarnim događajima.",
        },
        {
          title: "Nedostaju potpisi",
          description: "Zakašnjeli potpisi ili nedostajući potpisi odgađaju zatvaranje i povećavaju rizik od spora.",
        },
        {
          title: "Teško dokazivi događaji",
          description: "Preuzimanje, dostava, razmjena paleta, incident — bez strukturiranih zapisa, teško ih je ući u trag.",
        },
        {
          title: "Višejezični timovi",
          description: "Dnevni nesporazumi u porukama — potrebno je zadržati izvorni tekst i pregledati prijevod.",
        }
      ],
    },
    modules: {
      title: "Moduli platforme",
      subtitle: "Cilj, temelj na strani aplikacije, ovisnost o pozadini/administratoru — s pravnim izrazom.",
    },
    pallet: {
      title: "Razmjena paleta i ambalaže",
      subtitle: "Odvojeni moduli, tvrtka može mijenjati — offline spremanje prema reviziji.",
    },
    notifications: {
      title: "Poruke i obavijesti",
      subtitle: "Spreman temelj na strani aplikacije — produkcija je odvojena ovisnost o pozadini.",
      cards: [
        {
          title: "Vrste događaja obavijesti",
          description: "Nova poruka, promjena puta, zadatak dokumenta, problem sa sinkronizacijom.",
        },
        {
          title: "Dodirnite usmjeravanje i PIN",
          description: "Otvaranje ciljnog zaslona iz obavijesti; dubinska veza nakon PIN.",
        },
        {
          title: "Zaključani zaslon koji štiti privatnost",
          description: "Cijeli sadržaj dokumenta ili poruke nije prikazan na zaključanom zaslonu prema zadanim postavkama.",
        }
      ],
      backendDepTitle: "Pozadinska ovisnost",
      backendDepBody: "Produkcija push (FCM/APNs), registracija tokena uređaja i slanje na strani poslužitelja još nisu aktivni — potrebna je zasebna integracija.",
    },
    disclaimersSection: {
      title: "Odgovorna uporaba — važne napomene",
    },
    security: {
      title: "Zaštita i kontrola",
      subtitle: "Zaštita poduzeća i vozača strukturiranom dokumentacijom.",
      cards: [
        {
          title: "Zaštita poduzeća",
          description: "Dokumentacija temeljena na zahtjevima, događaji koji se mogu revidirati, kontrolirani pristup.",
        },
        {
          title: "Zaštita vozača",
          description: "Strukturirani proces dokumentiranja događaja u sporovima.",
        },
        {
          title: "Dokumentacijska okosnica",
          description: "Povezani dokumenti i događaji u jednom sustavu.",
        },
        {
          title: "Revizijski događaji",
          description: "Tko je što učinio kada - evidentirano i pretraživo.",
        }
      ],
      notPromiseTitle: "Nije obećanje",
      notPromiseBody: "ViaNexis ne obećava automatsku pravnu dokaznu snagu. Pravna procjena ovisi o kontekstu.",
    },
    contact: {
      title: "Kontakt i interno testiranje",
      subtitle: "Kontrolirani pristup — nema automatske registracije, nema javnog Play preuzimanja.",
      body: "Aplikacija upravljačkog programa je u pripremi internog testiranja Google Playa. Spremnost za izdavanje i Samsung UAT u tijeku. Aktivacija nije automatska.",
      consentNote: "Sustav rukuje dokumentima, tijekovima rada vozača, podacima tvrtke i dopuštenjima — svaki se pristup pojedinačno pregledava.",
      contactLink: "Kontaktirajte nas →",
    },
  },
  contactForm: {
    title: "Kontaktirajte nas",
    subtitle: "Interes za platformu ViaNexis — ne automatska registracija.",
    name: "Ime *",
    company: "tvrtka *",
    email: "Email *",
    phone: "Telefon",
    message: "Poruka *",
    interestType: "Vrsta kamate *",
    interestPlaceholder: "Odaberite...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikacija za vozača",
      },
      {
        value: "company-admin",
        label: "Tvrtka/Administratorska platforma",
      },
      {
        value: "dokumenata",
        label: "Upravljanje dokumentima",
      },
      {
        value: "pallet-packaging",
        label: "Paleta/pakiranje",
      },
      {
        value: "adr-customs",
        label: "ADR / carinska podrška",
      },
      {
        value: "drugo",
        label: "ostalo",
      }
    ],
    consent: "Slažem se da ViaNexis obrađuje dostavljene podatke isključivo u svrhu kontakta. *",
    submit: "Pošalji poruku",
    submitMailto: "Pošalji email",
    intakeDisabled: "U pripremi je online prijava potencijalnih klijenata. Upotrijebite kontakt putem e-pošte ili pokušajte ponovno kasnije.",
    successTitle: "Poruka primljena",
    successBody: "Hvala vam na interesu. Naš tim će Vas kontaktirati. Aktivacija pristupa nije automatska.",
    newSubmission: "Nova poruka",
    errors: {
      name: "Ime je potrebno.",
      company: "Društvo je potrebno.",
      email: "Email je obavezan.",
      emailInvalid: "Unesite valjanu adresu e-pošte.",
      message: "Poruka je obavezna.",
      interest: "Odaberite vrstu kamate.",
      consent: "Potreban je pristanak.",
      submitFailed: "Nije moguće poslati poruku. Pokušajte umjesto toga putem e-pošte.",
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
        title: "Paket nadležnih inspekcija",
        description: "Dokumenti i događaji povezani s putovanjem u zajedničkom paketu ograničenog opsega.",
      },
      {
        title: "Opseg / vremenski ograničen pristup",
        description: "Ograničeni pristup temeljen na QR-u — nije javan.",
      },
      {
        title: "revizija",
        description: "Zabilježeni događaji pristupa i dijeljenja.",
      },
      {
        title: "Temelj spreman za eFTI",
        description: "Tehnička osnova za buduću integraciju — ne certifikacija.",
      },
    ],
  },

  legal: legalHr,
};
