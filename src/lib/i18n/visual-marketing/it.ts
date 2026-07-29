import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingIt: VisualMarketingContent = {
  skipToContent: "Vai al contenuto",
  brandVisuals: {
    routeLabel: "Percorso attivo",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Rete ViaNexis",
    networkTitle: "Non è solo il percorso che collega.",
    networkSubtitle: "Fermate, documenti, firme, messaggi e decisioni appartengono allo stesso flusso di viaggio, in ordine temporale, con autorizzazioni e un percorso eventi ricercabile.",
    workflowEvents: [
      "Partenza",
      "Raccolta",
      "Documento",
      "Firma",
      "In attesa",
      "Consegna",
      "Confezione chiusa"
    ],
  },
  pillars: {
    title: "Tre pilastri: un sistema controllato",
    subtitle: "Un flusso mobile user-friendly, controllo operativo aziendale e un percorso decisionale verificabile.",
    items: [
      {
        title: "Applicazione intuitiva per i conducenti",
        description: "Viaggi, fermate, documenti, firme ed eventi in un'interfaccia utente mobile con funzionalità offline.",
      },
      {
        title: "Controllo aziendale",
        description: "Panoramica del dispatcher, autorizzazioni, avvisi e tracciamento dei documenti nel portale aziendale.",
      },
      {
        title: "Operazioni verificabili",
        description: "Eventi, firme e decisioni con un registro consultabile, senza esagerate pretese di sicurezza.",
      }
    ],
  },
  process: {
    title: "Flusso di lavoro principale del viaggio",
    subtitle: "Dalla creazione a un pacchetto chiuso: passaggi strutturati con accesso sensibile alle autorizzazioni.",
    steps: [
      {
        title: "Crea viaggio",
        description: "Fermate di ritiro e consegna, attività e requisiti dei documenti.",
      },
      {
        title: "Accettazione del conducente",
        description: "Assegnazione, accettazione e inizio controllato della sessione.",
      },
      {
        title: "Soste e compiti",
        description: "Numerose fermate, attività, eventi e registrazioni dei danni.",
      },
      {
        title: "Documenti e firme",
        description: "Carica, firma, rivedi, quindi un pacchetto di viaggio chiuso.",
      }
    ],
  },
  homeModules: {
    title: "Superfici del prodotto",
    subtitle: "Ogni superficie condivide lo stesso modello di viaggio e di documento. Dettagli in diretta sulle pagine dei prodotti.",
    detailsLink: "Dettagli",
    items: [
      {
        title: "Applicazione per autisti",
        description: "Viaggi, fermate, documenti e firme in un flusso mobile con funzionalità offline. I conducenti vedono sempre la successiva azione richiesta.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portale aziendale",
        description: "Panoramica operativa: viaggi attivi, documenti mancanti, avvisi e autorizzazioni in un unico posto.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documenti e firme",
        description: "Documenti collegati al viaggio, stati della firma e un pacchetto di viaggio chiuso esportabile.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Messaggi e avvisi",
        description: "Comunicazione legata al viaggio. Le funzionalità di notifica possono essere attivate come parte del programma pilota.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Controllo e autorizzazioni",
        description: "Accesso basato sui ruoli, eventi ricercabili e accesso al supporto controllato.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operazione offline",
        description: "I conducenti possono continuare a lavorare su reti deboli; le modifiche vengono finalizzate al termine della sincronizzazione.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documenti e firme",
    subtitle: "I documenti si collegano al viaggio, possono essere firmati e revisionati, quindi chiusi in un pacchetto esportabile.",
    steps: [
      {
        title: "Carica o crea",
        description: "CMR, bolla di consegna, foto o modello digitale.",
      },
      {
        title: "Collegamento",
        description: "Assegnato al contesto di viaggio, conducente o veicolo.",
      },
      {
        title: "Firma e rivedi",
        description: "Flusso dello stato: in attesa di firma → firmato → in corso di revisione.",
      },
      {
        title: "Pacchetto viaggio chiuso",
        description: "Documenti ed eventi esportabili: un riepilogo verificabile.",
      }
    ],
    statuses: [
      "Caricato",
      "Mancante",
      "In attesa di firma",
      "Firmato",
      "In corso di revisione"
    ],
    detailsLink: "Documenti in dettaglio",
  },
  offline: {
    title: "Funzionamento e sincronizzazione offline",
    subtitle: "Il lavoro continua su reti deboli: la finalizzazione avviene dopo la sincronizzazione.",
    cards: [
      {
        title: "Salvataggio locale",
        description: "Le modifiche al driver vengono archiviate in modo sicuro sul dispositivo.",
      },
      {
        title: "Sincronizzazione visibile",
        description: "Le modifiche in sospeso rimangono visibili fino al ripristino della connettività.",
      },
      {
        title: "Segnalazione di conflitti",
        description: "Le fonti in conflitto vengono registrate, mai sovrascritte silenziosamente.",
      }
    ],
    detailsLink: "Applicazione per autisti",
  },
  responsibleUse: {
    title: "Uso responsabile",
    subtitle: "Limiti brevi e importanti: i dettagli si trovano nelle pagine legali.",
    items: [
      "ViaNexis non è una piattaforma eFTI certificata e non promette l'accettazione automatica da parte dell'autorità.",
      "OCR, AI e traduzione sono assistivi: è necessaria la revisione umana.",
      "Il sistema non fornisce consulenza legale.",
      "Non è un servizio di emergenza o SOS."
    ],
    detailsLink: "Avvisi completi sull'uso responsabile",
  },
  pilotCta: {
    title: "Accesso pilota controllato",
    subtitle: "ViaNexis è attualmente disponibile attraverso un programma pilota con vettori e autisti selezionati. L'accesso viene attivato previa discussione e approvazione individuale.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Viaggio attivo",
    phoneSubtitle: "Dimostrazione · VN-2407-A18",
    phoneRows: [
      {
        label: "Prossima fermata",
        value: "Ritiro · Budapest (demo)",
        status: "In viaggio",
      },
      {
        label: "Documento",
        value: "CMR: in attesa di firma",
        status: "Azione",
      },
      {
        label: "Sincronizzazione",
        value: "1 modifica in sospeso",
        status: "Non in linea",
      }
    ],
    phoneCaption: "Demo del prodotto: dati campione anonimizzati.",
    browserTitle: "Controllo delle operazioni",
    browserSubtitle: "Flotta demo · visualizzazione dispatcher",
    browserColumns: [
      "Viaggio",
      "Fermare",
      "Documento",
      "Stato"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (dimostrazione)",
        "CMR mancante",
        "Avviso"
      ],
      [
        "VN-2407-B03",
        "Győr (dimostrazione)",
        "POD firmato",
        "In viaggio"
      ],
      [
        "VN-2407-C11",
        "Vienna (dimostrazione)",
        "In corso di revisione",
        "Pre-chiusura"
      ]
    ],
    browserCaption: "Demo del portale aziendale: non dati dei clienti in tempo reale.",
    driver: {
      navHome: "Casa",
      navTrips: "Viaggi",
      navDocs: "Documenti",
      navMore: "Di più",
      tripStatus: "Viaggio in corso",
      nextStopLabel: "Prossima fermata",
      nextStopValue: "Ritiro · Budapest (demo)",
      documentLabel: "Documento",
      documentValue: "CMR digitale",
      documentAction: "Firma richiesta",
      syncLabel: "Connessione",
      syncValue: "Offline · 1 in sospeso",
    },
    portal: {
      roleLabel: "Ruolo: spedizioniere",
      alertLabel: "Avviso",
      alertValue: "VN-2407-A18 · CMR in attesa di firma",
      auditLabel: "Ultimo evento di controllo",
      auditValue: "Lo stato del documento è cambiato · app driver",
    },
  },
  statusLabels: {
    available: "Disponibile",
    pilot: "Pilota",
    development: "In sviluppo",
  },
  productPage: {
    highlightsTitle: "Funzionalità chiave",
    capabilitiesTitle: "Cosa offre questa superficie",
    statusesTitle: "Etichette di stato",
  },
  authority: {
    heroSubtitle: "Accesso limitato nel tempo e nell'ambito alle prove del viaggio: non è una piattaforma eFTI certificata.",
    foundationBadge: "Prontezza tecnica",
    notCertifiedBadge: "Non certificato eFTI",
    foundationTitle: "Cosa significa essere pronti",
    foundationSubtitle: "Dati strutturati e condivisione controllata – senza certificato o richiesta di autorizzazione.",
    extraDisclaimer: "ViaNexis non promette l'accettazione da parte delle autorità in ogni paese. La conformità legale e normativa rimane responsabilità del cliente.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Elenco viaggi e fermate",
        description: "Viaggi attivi, azioni successive e attività interrotte.",
        status: "available",
      },
      {
        title: "Documenti e firma",
        description: "Caricamenti, attività CMR e acquisizione di firme.",
        status: "available",
      },
      {
        title: "Lavoro offline",
        description: "Salvataggio locale con sincronizzazione visibile in sospeso.",
        status: "available",
      },
      {
        title: "Messaggistica",
        description: "Comunicazione legata al viaggio per gli autisti.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Elenco viaggi attivi",
        description: "Panoramica operativa con fermate e stati.",
        status: "available",
      },
      {
        title: "Avvisi di documenti mancanti",
        description: "I documenti mancanti o non firmati sono immediatamente visibili.",
        status: "available",
      },
      {
        title: "Autorizzazioni",
        description: "Role-based access to company data.",
        status: "available",
      },
      {
        title: "Eventi di controllo",
        description: "Decisione ricercabile e traccia dei documenti.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Caricamento e collegamento",
        description: "Documenti collegati al viaggio, al conducente o al veicolo.",
        status: "available",
      },
      {
        title: "Flusso di lavoro della firma",
        description: "In attesa di firma → firmato → revisione.",
        status: "pilot",
      },
      {
        title: "Pacchetto viaggio chiuso",
        description: "Exportable documents and events.",
        status: "pilot",
      },
      {
        title: "Gestione dei modelli",
        description: "Modelli di documenti centrali: implementazione graduale.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Accesso basato sui ruoli",
        description: "Separazione a livello di utente e azienda.",
        status: "available",
      },
      {
        title: "Registro di controllo",
        description: "Le azioni e le decisioni rimangono ricercabili.",
        status: "available",
      },
      {
        title: "Sessione e dispositivo",
        description: "Sessione controllata e gestione del dispositivo.",
        status: "pilot",
      },
      {
        title: "Supporta l'accesso",
        description: "Voce di supporto registrata e limitata nel tempo.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Lingua",
    draftSuffix: "· bozza",
    breadcrumb: "Pangrattato",
    primaryNav: "Primario",
    importantNotice: "Avviso importante",
  },
};
