import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingRo: VisualMarketingContent = {
  skipToContent: "Treci la conținut",
  brandVisuals: {
    routeLabel: "Rută activă",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Rețeaua ViaNexis",
    networkTitle: "Nu este doar traseul care face legătura.",
    networkSubtitle: "Opririle, documentele, semnăturile, mesajele și deciziile aparțin aceluiași flux de călătorie – în ordine de timp, cu permisiuni și un traseu al evenimentului care poate fi căutat.",
    workflowEvents: [
      "Plecare",
      "Ridicare",
      "Document",
      "Semnătura",
      "Aşteptare",
      "Livrare",
      "Pachet închis"
    ],
  },
  pillars: {
    title: "Trei piloni — un sistem controlat",
    subtitle: "Un flux mobil prietenos cu șoferul, control operațional al companiei și o cale de decizie auditabilă.",
    items: [
      {
        title: "Aplicație prietenoasă cu șoferul",
        description: "Călătorii, opriri, documente, semnături și evenimente într-o interfață de utilizare mobilă offline.",
      },
      {
        title: "Controlul companiei",
        description: "Prezentare generală a dispecerului, permisiuni, alerte și urmărire a documentelor în portalul companiei.",
      },
      {
        title: "Operațiuni auditabile",
        description: "Evenimente, semnături și decizii cu un jurnal care poate fi căutat - fără pretenții de securitate exagerate.",
      }
    ],
  },
  process: {
    title: "Fluxul de lucru principal al călătoriei",
    subtitle: "De la creare la un pachet închis - pași structurați cu acces conștient de permisiune.",
    steps: [
      {
        title: "Creați călătoria",
        description: "Opriri de ridicare și livrare, sarcini și cerințe privind documentele.",
      },
      {
        title: "Acceptarea șoferului",
        description: "Atribuirea, acceptarea și începerea unei sesiuni controlate.",
      },
      {
        title: "Opriri și sarcini",
        description: "Mai multe opriri, sarcini, evenimente și înregistrări de daune.",
      },
      {
        title: "Documente și semnături",
        description: "Încărcați, semnați, revizuiți - apoi un pachet de călătorie închisă.",
      }
    ],
  },
  homeModules: {
    title: "Suprafețele produsului",
    subtitle: "Fiecare suprafață are același model de călătorie și document. Detalii live pe paginile produselor.",
    detailsLink: "Detalii",
    items: [
      {
        title: "Aplicația pentru șofer",
        description: "Călătorii, opriri, documente și semnături într-un flux mobil compatibil offline. Șoferii văd întotdeauna următoarea acțiune necesară.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portalul companiei",
        description: "Prezentare generală operațională: călătorii active, documente lipsă, alerte și permisiuni într-un singur loc.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documente și semnături",
        description: "Documente legate de călătorie, stări de semnătură și un pachet de călătorie închisă exportabil.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Mesaje și alerte",
        description: "Comunicare legată de călătorie. Funcțiile de notificare pot fi activate ca parte a programului pilot.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit și permisiuni",
        description: "Acces bazat pe roluri, evenimente care pot fi căutate și acces controlat la asistență.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operare offline",
        description: "Șoferii pot continua să lucreze pe rețele slabe; modificările se finalizează când sincronizarea se încheie.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documente și semnături",
    subtitle: "Documentele se leagă de călătorie, pot fi semnate și revizuite, apoi închise într-un pachet exportabil.",
    steps: [
      {
        title: "Încărcați sau creați",
        description: "CMR, bon de livrare, fotografie sau șablon digital.",
      },
      {
        title: "Legătura",
        description: "Atribuit contextului călătoriei, șoferului sau vehiculului.",
      },
      {
        title: "Semnează și revizuiește",
        description: "Flux de stare: așteaptă semnătura → semnat → în curs de revizuire.",
      },
      {
        title: "Pachet de călătorie închisă",
        description: "Documente și evenimente exportabile — un rezumat auditabil.",
      }
    ],
    statuses: [
      "Încărcat",
      "Lipsă",
      "Se așteaptă semnătura",
      "Semnat",
      "În curs de revizuire"
    ],
    detailsLink: "Documente în detaliu",
  },
  offline: {
    title: "Operare offline și sincronizare",
    subtitle: "Lucrările continuă pe rețelele slabe — finalizarea are loc după sincronizare.",
    cards: [
      {
        title: "Salvare locală",
        description: "Modificările driverului sunt stocate în siguranță pe dispozitiv.",
      },
      {
        title: "Sincronizare vizibilă",
        description: "Modificările în așteptare rămân vizibile până la revenirea conectivității.",
      },
      {
        title: "Semnalizarea conflictelor",
        description: "Sursele aflate în conflict sunt înregistrate – niciodată suprascrise în tăcere.",
      }
    ],
    detailsLink: "Aplicația pentru șofer",
  },
  responsibleUse: {
    title: "Utilizare responsabilă",
    subtitle: "Limite scurte, importante — detaliile live pe paginile legale.",
    items: [
      "ViaNexis nu este o platformă certificată eFTI și nu promite acceptarea automată a autorității.",
      "OCR, AI și traducerea sunt de asistență - este necesară o revizuire umană.",
      "Sistemul nu oferă consultanță juridică.",
      "Nu este un serviciu de urgență sau SOS."
    ],
    detailsLink: "Notificări complete de utilizare responsabilă",
  },
  pilotCta: {
    title: "Acces pilot controlat",
    subtitle: "ViaNexis este disponibil în prezent printr-un program pilot cu transportatori și șoferi selectați. Accesul este activat după discuție și aprobare individuală.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Călătoria activă",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Următoarea oprire",
        value: "Preluare · Budapesta (demo)",
        status: "Drum",
      },
      {
        label: "Document",
        value: "CMR — în așteptarea semnării",
        status: "Acţiune",
      },
      {
        label: "Sincronizare",
        value: "1 modificare în așteptare",
        status: "Offline",
      }
    ],
    phoneCaption: "Demo de produs — date eșantion anonimizate.",
    browserTitle: "Controlul operațiunilor",
    browserSubtitle: "Flotă demonstrativă · vizualizare dispecer",
    browserColumns: [
      "excursie",
      "Stop",
      "Document",
      "Stare"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapesta (demo)",
        "CMR lipsește",
        "Alerta"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD semnat",
        "Drum"
      ],
      [
        "VN-2407-C11",
        "Viena (demo)",
        "În curs de revizuire",
        "Pre-închidere"
      ]
    ],
    browserCaption: "Portalul demonstrativ al companiei - nu date live despre clienți.",
    driver: {
      navHome: "Acasă",
      navTrips: "Excursii",
      navDocs: "Docs",
      navMore: "Mai mult",
      tripStatus: "Călătoria în curs",
      nextStopLabel: "Următoarea oprire",
      nextStopValue: "Preluare · Budapesta (demo)",
      documentLabel: "Document",
      documentValue: "CMR digital",
      documentAction: "Este necesară semnătura",
      syncLabel: "Conexiune",
      syncValue: "Offline · 1 în așteptare",
    },
    portal: {
      roleLabel: "Rol: Dispecer",
      alertLabel: "Alerta",
      alertValue: "VN-2407-A18 · CMR în așteptarea semnării",
      auditLabel: "Ultimul eveniment de audit",
      auditValue: "Starea documentului a fost schimbată · aplicația șofer",
    },
  },
  statusLabels: {
    available: "Disponibil",
    pilot: "Pilot",
    development: "În dezvoltare",
  },
  productPage: {
    highlightsTitle: "Capabilitati cheie",
    capabilitiesTitle: "Ce oferă această suprafață",
    statusesTitle: "Etichete de stare",
  },
  authority: {
    heroSubtitle: "Acces limitat în timp și în domeniul de aplicare la dovezile călătoriei - nu o platformă certificată eFTI.",
    foundationBadge: "Pregătire tehnică",
    notCertifiedBadge: "Necertificat eFTI",
    foundationTitle: "Ce înseamnă pregătirea",
    foundationSubtitle: "Date structurate și partajare controlată - fără un certificat sau un permis.",
    extraDisclaimer: "ViaNexis nu promite acceptarea autorităților din fiecare țară. Respectarea legală și a reglementărilor rămâne responsabilitatea clientului.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista călătoriilor și opriri",
        description: "Călătorii active, următoarele acțiuni și sarcini de oprire.",
        status: "available",
      },
      {
        title: "Documente și semnătură",
        description: "Încărcări, sarcini CMR și captură de semnătură.",
        status: "available",
      },
      {
        title: "Munca offline",
        description: "Salvare locală cu sincronizare vizibilă în așteptare.",
        status: "available",
      },
      {
        title: "Mesaje",
        description: "Comunicare legată de călătorie pentru șoferi.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista de călătorie activă",
        description: "Prezentare generală operațională cu opriri și stări.",
        status: "available",
      },
      {
        title: "Alerte despre documente lipsă",
        description: "Documentele lipsă sau nesemnate sunt imediat vizibile.",
        status: "available",
      },
      {
        title: "Permisiuni",
        description: "Acces bazat pe roluri la datele companiei.",
        status: "available",
      },
      {
        title: "Evenimente de audit",
        description: "Decizie și traseu document care poate fi căutat.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Încărcați și conectați",
        description: "Documente legate de călătorie, șofer sau vehicul.",
        status: "available",
      },
      {
        title: "Flux de lucru pentru semnături",
        description: "Se așteaptă semnătura → semnat → revizuire.",
        status: "pilot",
      },
      {
        title: "Pachet de călătorie închisă",
        description: "Documente și evenimente exportabile.",
        status: "pilot",
      },
      {
        title: "Gestionarea șabloanelor",
        description: "Șabloane de documente centrale — lansare treptată.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Acces bazat pe roluri",
        description: "Separare între utilizator și companie.",
        status: "available",
      },
      {
        title: "Jurnal de audit",
        description: "Acțiunile și deciziile rămân căutate.",
        status: "available",
      },
      {
        title: "Sesiune și dispozitiv",
        description: "Gestionare controlată a sesiunii și a dispozitivelor.",
        status: "pilot",
      },
      {
        title: "Suport acces",
        description: "Intrare de asistență înregistrată, limitată în timp.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Limbă",
    draftSuffix: "· draft",
    breadcrumb: "Pesmet",
    primaryNav: "Primar",
    importantNotice: "Notă importantă",
  },
};
