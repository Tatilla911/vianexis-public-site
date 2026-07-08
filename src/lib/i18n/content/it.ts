import type { SiteContent } from "../types";
import { legalIt } from "./legal/it";

export const contentIt: SiteContent = {
  meta: {
    title: "ViaNexis Operazioni di trasporto autisti e aziende",
    description: "App per autisti, controllo aziendale, gestione dei documenti, messaggistica, notifiche e flussi di lavoro di viaggio multilingue in un unico sistema. Preparazione dei test interni in corso.",
    ogLocale: "it_IT",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Caratteristiche",
    driverApp: "Applicazione per autisti",
    companyPortal: "Portale aziendale",
    documents: "Documenti",
    authorityEfti: "Autorità / eFTI",
    security: "Sicurezza",
    pilot: "Accesso pilota",
    contact: "Contatto",
    requestAccess: "Richiedi l'accesso",
    menuOpen: "Apri il menu",
  },
  footer: {
    tagline: "Prove digitali di trasporto e piattaforma operativa dei conducenti per le aziende di trasporto. Fondazione eFTI-ready: non una piattaforma eFTI certificata.",
    product: "Prodotto",
    legal: "Legale",
    legalNotice: "Avviso legale",
    privacy: "Politica sulla riservatezza",
    terms: "Termini di utilizzo",
    disclaimers: "Uso responsabile",
    dataContact: "Contatto per la protezione dei dati",
    copyright: "Non è una piattaforma eFTI certificata. Non promette l'accettazione da parte dell'autorità, forza probatoria legale automatica, servizi OCR/AI/translation impeccabili o servizi di emergenza/SOS. Nessun download pubblico dal Play Store.",
  },
  hero: {
    title: "ViaNexis: prove digitali del trasporto e piattaforma operativa dei conducenti",
    subtitle: "App per autisti, controllo aziendale, gestione dei documenti, messaggistica, notifiche e flussi di lavoro di viaggio multilingue in un unico sistema.",
    primaryCta: "Contattaci",
    secondaryCta: "Preparazione dei test interni in corso",
    stats: [
      {
        label: "Applicazione per autisti",
        value: "Viaggio + offline",
      },
      {
        label: "Documenti",
        value: "CMR + controllo",
      },
      {
        label: "Messaggistica",
        value: "Multilingue",
      },
      {
        label: "Stato",
        value: "Preparazione test interni",
      }
    ],
  },
  platformStatus: {
    title: "Stato attuale",
    items: [
      "Preparazione ai test interni di Google Play in corso: non si tratta di un download dallo store pubblico.",
      "Preparazione al rilascio dell'app driver e Samsung UAT in corso.",
      "Il backend di produzione, le notifiche push e le integrazioni dei partner verranno collegati gradualmente."
    ],
    disclaimer: "ViaNexis non afferma che il sistema sia attivo, certificato o ufficialmente accettato in ogni Paese.",
  },
  moduleLabels: {
    goal: "Obiettivo",
    appFoundation: "Fondazione lato app",
    backendDependency: "Dipendenza backend/amministratore",
    important: "Importante",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Applicazione per autisti",
      goal: "Consenti agli autisti di gestire attività, documenti ed eventi collegati al viaggio su dispositivi mobili, online e offline.",
      appFoundation: "Elenco e dettagli del viaggio, caricamento di documenti, acquisizione di firme, elenchi di controllo, registrazione degli incidenti, salvataggio e sincronizzazione offline, sessione protetta da PIN.",
      backendDependency: "Live API, ambito inquilino, sincronizzazione di viaggi e documenti, risoluzione delle impostazioni aziendali.",
    },
    {
      id: "company-admin",
      title: "Controllo azienda/amministratore",
      goal: "Consenti alle aziende di trasporto di gestire viaggi, utenti, autorizzazioni e flussi di lavoro da un unico portale.",
      appFoundation: "I dati e le azioni lato conducente riflettono le regole aziendali.",
      backendDependency: "Portale aziendale web, app di amministrazione della piattaforma, ruoli, gestione viaggi, requisiti documentali, impostazioni di scambio aziendale.",
    },
    {
      id: "cmr-documents",
      title: "CMR digitale e documenti",
      goal: "Documenti collegati al viaggio - CMR, bolla di consegna, fattura, documenti del veicolo e del conducente - gestiti in modo strutturato.",
      appFoundation: "Caricamento di documenti, scansione/foto, assegnazione del viaggio, attività basate sui requisiti, concetto di documento principale.",
      backendDependency: "Archiviazione di documenti, metadati, regole di firma, condivisione di autorità con limiti di ambito.",
      disclaimer: "I documenti digitali non hanno automaticamente valore probatorio legale. L'accettazione varia in base al Paese e al cliente.",
    },
    {
      id: "completed-package",
      title: "Pacchetto viaggio completato",
      goal: "Riepilogare le prove del viaggio completato in un pacchetto esportabile.",
      appFoundation: "Chiusura del viaggio, dati locali ed eventi sincronizzati come base per l'assemblaggio del pacchetto.",
      backendDependency: "Generazione del pacchetto di viaggio completata, esportazione PDF, esportazione di controllo. Alcune sezioni (ad esempio pallet/imballaggio PDF) rimangono dipendenze.",
      disclaimer: "Il pacchetto supporta la documentazione; non sostituisce la valutazione legale o il procedimento dell'autorità della società.",
    },
    {
      id: "messaging-notifications",
      title: "Messaggi e notifiche",
      goal: "Comunicazioni e avvisi legati al viaggio per eventi importanti del conducente.",
      appFoundation: "Elenco dei messaggi, thread collegati al viaggio, base di notifica lato app. Utilizzabile per: nuovo messaggio, modifica viaggio, attività documento, problema di sincronizzazione.",
      backendDependency: "Push di produzione (FCM/APNs), registrazione del token del dispositivo, invio lato server: dipendenza separata, non ancora attivo.",
      disclaimer: "La schermata di destinazione si apre dopo PIN. La spinta alla produzione non pretende che ogni evento arrivi istantaneamente.",
    },
    {
      id: "pallet-packaging",
      title: "Scambio pallet e imballaggi",
      goal: "Registra gli scambi di pallet e imballaggi per fermata con quantità, carenza, danni e controversie.",
      appFoundation: "Moduli pallet e imballaggio separati. Commutabile dall'azienda. L'azienda può preimpostare gli articoli; l'autista può aggiungere un imballaggio personalizzato se consentito. Salvataggio e sincronizzazione offline.",
      backendDependency: "Impostazioni di Exchange API, sincronizzazione dei record, interfaccia utente di amministrazione del portale, sezione PDF del pacchetto completato: quest'ultima è una dipendenza.",
      disclaimer: "La sezione delle prove PDF non è completamente pronta in tutti i casi. La registrazione supporta la documentazione delle controversie ma non risolve le controversie.",
    },
    {
      id: "adr-border",
      title: "ADR / supporto per i confini",
      goal: "Informazioni di supporto rapide per ADR e il contesto frontaliero/dogana, insieme alla verifica delle fonti ufficiali.",
      appFoundation: "Informazioni ADR, ricerca del numero ONU, assistente per il codice del tunnel, metadati di confine/doganali collegati ai viaggi.",
      backendDependency: "Aggiornamenti del database ADR, metadati delle regole specifiche del paese, dati dei checkpoint di frontiera.",
      disclaimer: "ADR e i dati del tunnel sono informazioni di supporto. L'app non sostituisce la legislazione, la formazione, il funzionario DG dell'azienda o le decisioni delle autorità.",
    },
    {
      id: "truck-map",
      title: "Base per la mappa dei camion",
      goal: "Panoramica della flotta e del viaggio sulla mappa: orientamento operativo.",
      appFoundation: "Panoramica basata su mappa, visualizzazione del contesto del viaggio e del veicolo.",
      backendDependency: "Integrazione del fornitore di servizi telematici, fornitore di routing, posizione live: integrazione graduale.",
      disclaimer: "La mappa non garantisce il rispetto di restrizioni o permessi legali.",
    },
    {
      id: "multilingue",
      title: "Funzionamento multilingue",
      goal: "Team multilingue su un'unica piattaforma.",
      appFoundation: "Interfaccia utente multilingue dell'app conducente, conservazione del messaggio originale, traduzione come assistenza.",
      backendDependency: "Espansione locale del portale e del sito pubblico, flusso di lavoro di revisione della traduzione.",
      disclaimer: "La traduzione automatica o AI è assistiva; è necessaria la revisione umana. Il documento originale rimane primario.",
    },
    {
      id: "audit-support",
      title: "Accesso al controllo e al supporto",
      goal: "Registro tracciabile; accesso controllato al supporto per la risoluzione dei problemi.",
      appFoundation: "Registrazione eventi per azioni di viaggio e documenti; sessioni di supporto verificabili.",
      backendDependency: "Esportazione di audit, politica di accesso al supporto, matrice di autorizzazioni aziendali.",
      disclaimer: "Il registro di controllo non costituisce una prova legale automatica.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR: uso responsabile",
      body: "ADR e i dati del tunnel sono informazioni di supporto. Le fonti ufficiali, le tabelle e le norme locali vigenti devono essere sempre verificate. ViaNexis non sostituisce la legislazione, la formazione di ADR, il responsabile delle merci pericolose dell'azienda o le decisioni delle autorità.",
    },
    aiOcr: {
      title: "AI, OCR e traduzione",
      body: "AI riepilogo, OCR e la traduzione automatica sono strumenti di assistenza. È necessaria la revisione umana. Il documento e il messaggio originali rimangono primari. Non consulenza legale e non traduzione certificata.",
    },
    efti: {
      title: "eFTI e condivisione dell'autorità",
      body: "ViaNexis non è una piattaforma eFTI certificata. Non promette l’accettazione dell’autorità in ogni paese. eFTI-ready Foundation significa preparazione tecnica, non un certificato o una licenza.",
    },
  },
  home: {
    problem: {
      title: "Sfide logistiche quotidiane",
      subtitle: "Quando documenti, firme ed eventi sono sparsi, la tracciabilità e le prove ne risentono.",
      cards: [
        {
          title: "Documenti sparsi",
          description: "Documenti di viaggio via e-mail, chat o carta: difficili da collegare a eventi reali.",
        },
        {
          title: "Firme mancanti",
          description: "Firme tardive o mancanti ritardano la chiusura e aumentano il rischio di controversie.",
        },
        {
          title: "Eventi difficili da dimostrare",
          description: "Ritiro, consegna, cambio pallet, incidente: senza registri strutturati, difficile da tracciare.",
        },
        {
          title: "Squadre multilingue",
          description: "Incomprensioni quotidiane nei messaggi: è necessaria la conservazione del testo originale e la traduzione rivista.",
        }
      ],
    },
    modules: {
      title: "Moduli della piattaforma",
      subtitle: "Obiettivo, base lato app, dipendenza dal backend/amministratore, con una formulazione sicura dal punto di vista legale.",
    },
    pallet: {
      title: "Scambio pallet e imballaggi",
      subtitle: "Moduli separati, attivabili dall'azienda: salvataggio offline per l'audit.",
    },
    notifications: {
      title: "Messaggi e notifiche",
      subtitle: "Predisposizione per le basi lato app: il push della produzione è una dipendenza backend separata.",
      cards: [
        {
          title: "Tipi di eventi di notifica",
          description: "Nuovo messaggio, modifica viaggio, attività documento, problema di sincronizzazione.",
        },
        {
          title: "Tocca percorso e PIN",
          description: "Apri la schermata di destinazione dalla notifica; collegamento diretto dopo PIN.",
        },
        {
          title: "Schermata di blocco sicura per la privacy",
          description: "Il contenuto completo del documento o del messaggio non viene visualizzato nella schermata di blocco per impostazione predefinita.",
        }
      ],
      backendDepTitle: "Dipendenza dal back-end",
      backendDepBody: "Il push di produzione (FCM/APNs), la registrazione del token del dispositivo e l'invio lato server non sono ancora attivi: è necessaria un'integrazione separata.",
    },
    disclaimersSection: {
      title: "Uso responsabile: avvisi importanti",
    },
    security: {
      title: "Protezione e controllo",
      subtitle: "Tutela dell'azienda e degli autisti con documentazione strutturata.",
      cards: [
        {
          title: "Tutela aziendale",
          description: "Documentazione basata sui requisiti, eventi verificabili, accesso controllato.",
        },
        {
          title: "Protezione del conducente",
          description: "Processo strutturato per la documentazione degli eventi nelle controversie.",
        },
        {
          title: "Dorsale della documentazione",
          description: "Documenti ed eventi collegati ai viaggi in un unico sistema.",
        },
        {
          title: "Eventi verificabili",
          description: "Chi ha fatto cosa e quando: registrato e ricercabile.",
        }
      ],
      notPromiseTitle: "Non una promessa",
      notPromiseBody: "ViaNexis non promette forza probatoria legale automatica. La valutazione giuridica dipende dal contesto.",
    },
    contact: {
      title: "Contatto e test interni",
      subtitle: "Accesso controllato: registrazione non automatica, nessun download di Play pubblico.",
      body: "L'app per conducenti è in fase di preparazione ai test interni di Google Play. Prontezza per il rilascio e Samsung UAT in corso. L'attivazione non è automatica.",
      consentNote: "Il sistema gestisce documenti, flussi di lavoro degli autisti, dati aziendali e autorizzazioni: ogni accesso viene esaminato individualmente.",
      contactLink: "Contattaci→",
    },
  },
  contactForm: {
    title: "Contattaci",
    subtitle: "Interesse per la piattaforma ViaNexis: non registrazione automatica.",
    name: "Nome *",
    company: "Azienda *",
    email: "E-mail *",
    phone: "Telefono",
    message: "Messaggio *",
    interestType: "Tipologia di interesse *",
    interestPlaceholder: "Selezionare...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Applicazione per autisti",
      },
      {
        value: "company-admin",
        label: "Piattaforma aziendale/amministrativa",
      },
      {
        value: "documenti",
        label: "Gestione dei documenti",
      },
      {
        value: "pallet-packaging",
        label: "Pallet/imballaggio",
      },
      {
        value: "adr-customs",
        label: "ADR / supporto doganale",
      },
      {
        value: "altro",
        label: "Altro",
      }
    ],
    consent: "Accetto che ViaNexis elabori i dati forniti esclusivamente a fini di contatto. *",
    submit: "Invia messaggio",
    submitMailto: "Invia e-mail",
    intakeDisabled: "È in corso la preparazione dell'invio di lead online. Utilizza il contatto email o riprova più tardi.",
    successTitle: "Messaggio ricevuto",
    successBody: "Grazie per il tuo interesse. Il nostro team ti contatterà. L'attivazione dell'accesso non è automatica.",
    newSubmission: "Nuovo messaggio",
    errors: {
      name: "Il nome è obbligatorio.",
      company: "È richiesta la compagnia.",
      email: "L'e-mail è obbligatoria.",
      emailInvalid: "Inserisci un indirizzo email valido.",
      message: "Il messaggio è obbligatorio.",
      interest: "Seleziona un tipo di interesse.",
      consent: "È richiesto il consenso.",
      submitFailed: "Impossibile inviare il messaggio. Prova invece con la posta elettronica.",
    },
  },
  authorityEfti: {
    cards: [
      {
        title: "Pacchetto di ispezione delle autorità",
        description: "Documenti ed eventi collegati al viaggio in un pacchetto condiviso con ambito limitato.",
      },
      {
        title: "Accesso limitato nell'ambito/nel tempo",
        description: "Accesso limitato basato su QR: non pubblico.",
      },
      {
        title: "Controllo",
        description: "Accesso registrato ed eventi di condivisione.",
      },
      {
        title: "eFTI-fondotinta pronto",
        description: "Base tecnica per l'integrazione futura, non certificazione.",
      }
    ],
  },
  legal: legalIt,
};
