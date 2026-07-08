import type { LegalContent } from "../legal-types";

export const legalIt: LegalContent = {
  versionBadge: "Versione di test interno: revisione da parte di esperti legali in corso · Questa traduzione è in revisione.",
  privacy: {
    title: "Informativa sulla privacy: versione di test interno",
    intro: "Il presente avviso si applica durante la fase di test e preparazione interna dell'app ViaNexis Driver e della relativa piattaforma. Il servizio non è un download pubblico dal Play Store: è in corso la preparazione dei test interni di Google Play. L'informativa sulla privacy definitiva e completa sarà pubblicata dopo la revisione legale.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Titolare del trattamento",
      body: "ViaNexis — vianexis.eu. Contatto privacy: info@vianexis.eu",
    },
    scope: {
      title: "Ambito",
      body: "Il presente avviso riguarda l'app mobile ViaNexis Driver, i flussi di lavoro relativi al conducente e al viaggio e il modulo di contatto web. L'amministrazione aziendale e il portale del dispatcher sono soggetti a termini contrattuali e sulla privacy separati.",
    },
    dataCategories: {
      title: "Dati che elaboriamo",
      items: [
        "Dati dell'account e dei contatti: nome, email, telefono, azienda, ruolo, paese.",
        "Dati del profilo conducente: identificatori, ruolo, impostazioni della lingua, autorizzazioni.",
        "Dati di viaggio: ID viaggio, stato, fermate, timestamp, metadati.",
        "Documenti: CMR, bolle di consegna, fatture, foto, scansioni, firme digitali.",
        "Messaggi e notifiche: comunicazioni legate al viaggio ed eventi di allerta.",
        "Posizione: solo con il permesso dell'utente e durante l'uso (when-in-use), se la funzionalità è attiva.",
        "Metadati del dispositivo e della sessione: tipo di dispositivo, versione del sistema operativo, versione dell'app, identificatori di sessione.",
        "Diagnostica e registri: registri tecnici e rapporti sugli errori, se abilitati.",
        "Dati di scambio pallet e imballaggi: tipologia, quantità, ammanchi, danneggiamenti, note.",
        "ADR / dati sull'utilizzo dell'assistente doganale: ricerche, visualizzazioni, non decisioni ufficiali.",
        "Autorizzazione di notifica e token push futuro: il push di produzione (FCM) è una dipendenza back-end separata."
      ],
    },
    purposes: {
      title: "Finalità del trattamento",
      items: [
        "Gestire i flussi di lavoro del viaggio e documentare le prestazioni.",
        "Gestione dei documenti, firme e assemblaggio del pacchetto di prove.",
        "Comunicazioni legate al viaggio e notifiche operative.",
        "Sicurezza, controllo e tracciabilità.",
        "Accesso al supporto controllato in modo verificabile.",
        "Prevenire e documentare controversie legali e commerciali.",
        "Miglioramento del funzionamento dell'app e della risoluzione dei problemi.",
        "Test interni, progetto pilota e valutazione dell'accesso."
      ],
    },
    sharing: {
      title: "Condivisione dei dati",
      items: [
        "Datore di lavoro/azienda di trasporti e utenti amministratori/dispatcher autorizzati: ambito per locatario.",
        "Viaggio del conducente e dati documentali secondo le regole aziendali.",
        "Supporto della piattaforma autorizzata solo con accesso controllato, limitato e giustificato.",
        "Autorità o partner solo per base giuridica, contratto o decisione aziendale.",
        "AI/OCR/fornitore di traduzione solo tramite integrazione futura controllata dal backend, se applicata, con revisione umana.",
        "Non vendiamo dati personali. Nessuna spinta di marketing."
      ],
    },
    rights: {
      title: "I tuoi diritti",
      items: [
        "Accesso ai tuoi dati: tramite l'amministratore dell'azienda o il canale di supporto.",
        "Rettifica di dati inesatti.",
        "Cancellazione laddove legalmente possibile e i processi aziendali lo consentono.",
        "Obiezione o restrizione ove legalmente giustificata.",
        "Portabilità dei dati laddove la legge applicabile lo prevede.",
        "Denuncia ad un'autorità di controllo.",
        "Contatto: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Notifiche",
      body: "L'app utilizza notifiche operative, non push di marketing. Il testo della schermata di blocco è protetto dalla privacy per impostazione predefinita. Il push di produzione (FCM/APNs) e la gestione dei token del dispositivo sono dipendenze di backend: potrebbero essere parziali o non attive durante i test interni. L'autorizzazione alle notifiche è a scelta dell'utente.",
    },
    location: {
      title: "Posizione",
      body: "La posizione viene elaborata solo con l'autorizzazione dell'utente e durante l'uso (quando in uso), se la funzione è attiva, ai fini della mappa, della propria posizione e delle prove di viaggio. Nessun tracciamento in background nello stato attuale. La posizione non garantisce la conformità del percorso o la conformità legale.",
    },
    importantNotices: {
      title: "Avvisi importanti",
      items: [
        "AI, OCR e la traduzione automatica sono strumenti di assistenza: è necessaria la revisione umana.",
        "Le informazioni di ADR sono di aiuto: non sostituiscono le fonti o la legislazione ufficiali.",
        "ViaNexis non è una piattaforma eFTI certificata.",
        "Non è un servizio di emergenza o SOS.",
        "I documenti digitali non hanno automaticamente valore probatorio legale.",
        "Il servizio è in fase di test/preparazione interna, non è un sistema di produzione live pubblico."
      ],
    },
    dataContact: {
      title: "Contatto privacy",
      body: "Domande sulla privacy: info@vianexis.eu. Il contatto finale del responsabile apparirà nell'avviso pubblicato.",
    },
    playUrl: "URL sulla privacy di Stable Play Console: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Condizioni d'uso: versione di test interno",
    intro: "Questi termini si applicano durante la fase pilota e di test interno della piattaforma ViaNexis. Il servizio non è un prodotto pubblico del Play Store: è in corso la preparazione dei test interni di Google Play. I termini definitivi saranno pubblicati dopo la revisione legale.",
    sections: [
      {
        title: "Natura del servizio",
        body: "ViaNexis fornisce prove digitali del trasporto e una piattaforma operativa per i conducenti per le aziende di trasporto. Fondazione eFTI-ready: non una piattaforma eFTI certificata. Non promette l'accettazione dell'autorità in ogni paese.",
      },
      {
        title: "Test interni",
        body: "L'accesso è controllato: tramite invito a test pilota o interni. Registrazione pubblica non automatica. Backend, notifiche push e alcune integrazioni vengono collegate gradualmente.",
      },
      {
        title: "Responsabilità dell'utente",
        body: "L'autista e l'azienda sono responsabili del viaggio, dei documenti, di ADR e della conformità doganale. L'app supporta la documentazione e non sostituisce la consulenza legale, gli esperti di ADR o le autorità.",
      },
      {
        title: "Disponibilità",
        body: "Durante i test interni, i tempi di attività e le funzionalità possono variare. Lo SLA specifico si applica solo in base al contratto.",
      },
      {
        title: "Limitazione di responsabilità",
        body: "ViaNexis non promette forza probatoria legale automatica, OCR/AI/translation impeccabile, servizi di emergenza o disponibilità al push di produzione se è ancora una dipendenza back-end.",
      }
    ],
  },
  legalNotice: {
    title: "Avviso legale: versione di test interno",
    intro: "Questa pagina descrive lo stato dei test interni e della preparazione della piattaforma ViaNexis. Non sostituisce la documentazione legale completa o i termini contrattuali.",
    sections: [
      {
        title: "Natura della piattaforma",
        body: "Evidenze digitali di trasporto, gestione documentale, messaggistica, notifiche e controllo aziendale in un unico sistema. Fondazione eFTI-ready: non una piattaforma eFTI certificata.",
      },
      {
        title: "Stato dei test interni",
        body: "Preparazione dei test interni di Google Play in corso. Samsung UAT e preparazione del rilascio in corso. Non affermiamo che l'app sia disponibile pubblicamente sul Play Store.",
      },
      {
        title: "Limitazione di responsabilità",
        body: "Non promettiamo l'accettazione dell'autorità, la forza probatoria legale automatica, la AI/OCR/translation impeccabile, i servizi di emergenza o la piena disponibilità al push della produzione.",
      },
      {
        title: "Contatto",
        body: "Domande legali e privacy: info@vianexis.eu",
      }
    ],
    relatedDocs: "Documenti correlati",
  },
  disclaimersPage: {
    title: "Uso responsabile: esclusioni di responsabilità",
    intro: "I testi seguenti descrivono importanti limiti di utilizzo della piattaforma. Versione di test interno: non sostituisce la consulenza legale.",
    items: [
      {
        id: "adr",
        title: "ADR: uso responsabile",
        body: "ADR e i dati del tunnel sono informazioni di supporto. Le fonti ufficiali, le tabelle e le norme locali vigenti devono essere sempre verificate. ViaNexis non sostituisce la legislazione, la formazione di ADR, il funzionario DG dell'azienda o le decisioni delle autorità.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR e traduzione",
        body: "Strumenti di assistenza: è necessaria la revisione umana. Il documento e il messaggio originali rimangono primari. Non consulenza legale e non traduzione certificata.",
      },
      {
        id: "notifiche",
        title: "Notifiche e push",
        body: "Notifiche operative, non spinte di marketing. Schermata di blocco protetta dalla privacy per impostazione predefinita. Il push di produzione (FCM/APNs) è una dipendenza del backend: potrebbe non essere attivo durante i test interni.",
      },
      {
        id: "truck-map",
        title: "Mappa dei camion/dati della community",
        body: "Mappa e percorso per l'orientamento operativo: non garantisce restrizioni legali, permessi o accuratezza dei dati della comunità. Non sostituisce la navigazione ufficiale.",
      },
      {
        id: "pallet",
        title: "Prova dello scambio pallet/imballo",
        body: "La registrazione supporta la documentazione delle controversie. La sezione delle prove PDF nel pacchetto di viaggio completato non è completamente pronta in tutti i casi. Non decide le controversie.",
      },
      {
        id: "legal-validity",
        title: "Validità legale/documenti",
        body: "I documenti e le firme digitali non hanno automaticamente valore probatorio legale. L'accettazione varia in base al Paese e al cliente.",
      },
      {
        id: "efti",
        title: "eFTI e condivisione dell'autorità",
        body: "ViaNexis non è una piattaforma eFTI certificata. Non promette l'accettazione dell'autorità in ogni paese. eFTI-ready Foundation è preparazione tecnica, non un certificato.",
      }
    ],
  },
};
