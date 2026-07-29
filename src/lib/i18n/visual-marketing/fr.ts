import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingFr: VisualMarketingContent = {
  skipToContent: "Passer au contenu",
  brandVisuals: {
    routeLabel: "Itinéraire actif",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Réseau ViaNexis",
    networkTitle: "Il n’y a pas que la route qui relie.",
    networkSubtitle: "Les arrêts, les documents, les signatures, les messages et les décisions appartiennent au même flux de déplacement, dans l'ordre chronologique, avec des autorisations et un journal d'événements consultable.",
    workflowEvents: [
      "Départ",
      "Ramasser",
      "Document",
      "Signature",
      "En attendant",
      "Livraison",
      "Colis fermé"
    ],
  },
  pillars: {
    title: "Trois piliers – un système contrôlé",
    subtitle: "Un flux mobile convivial pour le conducteur, un contrôle opérationnel de l'entreprise et une piste de décision vérifiable.",
    items: [
      {
        title: "Application conviviale pour le conducteur",
        description: "Voyages, arrêts, documents, signatures et événements dans une interface utilisateur mobile compatible hors ligne.",
      },
      {
        title: "Contrôle de l'entreprise",
        description: "Présentation du répartiteur, autorisations, alertes et suivi des documents dans le portail de l'entreprise.",
      },
      {
        title: "Opérations vérifiables",
        description: "Événements, signatures et décisions avec un journal consultable — sans allégations de sécurité exagérées.",
      }
    ],
  },
  process: {
    title: "Flux de travail principal du voyage",
    subtitle: "De la création à un package fermé : étapes structurées avec accès prenant en compte les autorisations.",
    steps: [
      {
        title: "Créer un voyage",
        description: "Arrêts de ramassage et de livraison, tâches et exigences en matière de documents.",
      },
      {
        title: "Acceptation du chauffeur",
        description: "Affectation, acceptation et démarrage de session contrôlé.",
      },
      {
        title: "Arrêts et tâches",
        description: "Plusieurs arrêts, tâches, événements et enregistrements de dommages.",
      },
      {
        title: "Documents et signatures",
        description: "Téléchargez, signez, examinez – puis un forfait de voyage fermé.",
      }
    ],
  },
  homeModules: {
    title: "Surfaces du produit",
    subtitle: "Chaque surface partage le même modèle de voyage et de document. Les détails en direct sur les pages produits.",
    detailsLink: "Détails",
    items: [
      {
        title: "Application pilote",
        description: "Déplacements, arrêts, documents et signatures dans un flux mobile compatible hors ligne. Les conducteurs voient toujours la prochaine action requise.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portail de l'entreprise",
        description: "Aperçu opérationnel : voyages actifs, documents manquants, alertes et autorisations en un seul endroit.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documents et signatures",
        description: "Documents liés au voyage, états de signature et forfait de voyage fermé exportable.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Messagerie et alertes",
        description: "Communication liée au voyage. Les fonctionnalités de notification peuvent être activées dans le cadre du programme pilote.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audit et autorisations",
        description: "Accès basé sur les rôles, événements consultables et accès au support contrôlé.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Fonctionnement hors ligne",
        description: "Les conducteurs peuvent continuer à travailler sur des réseaux faibles ; les modifications sont finalisées une fois la synchronisation terminée.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documents et signatures",
    subtitle: "Les documents liés au voyage peuvent être signés et examinés, puis fermés dans un package exportable.",
    steps: [
      {
        title: "Télécharger ou créer",
        description: "CMR, bon de livraison, photo ou modèle numérique.",
      },
      {
        title: "Enchaînement",
        description: "Attribué au contexte du trajet, du conducteur ou du véhicule.",
      },
      {
        title: "Signer et réviser",
        description: "Flux de statut : en attente de signature → signé → en cours de révision.",
      },
      {
        title: "Forfait voyage fermé",
        description: "Documents et événements exportables – un résumé vérifiable.",
      }
    ],
    statuses: [
      "Téléchargé",
      "Manquant",
      "En attente de signature",
      "Signé",
      "En cours de révision"
    ],
    detailsLink: "Documents en détail",
  },
  offline: {
    title: "Fonctionnement et synchronisation hors ligne",
    subtitle: "Le travail se poursuit sur les réseaux faibles – la finalisation a lieu après la synchronisation.",
    cards: [
      {
        title: "Sauvegarde locale",
        description: "Les modifications du pilote sont stockées en toute sécurité sur l'appareil.",
      },
      {
        title: "Synchronisation visible",
        description: "Les modifications en attente restent visibles jusqu’au retour de la connectivité.",
      },
      {
        title: "Signalisation de conflit",
        description: "Les sources conflictuelles sont enregistrées – jamais écrasées silencieusement.",
      }
    ],
    detailsLink: "Application pilote",
  },
  responsibleUse: {
    title: "Utilisation responsable",
    subtitle: "Limites courtes et importantes – détails en direct sur les pages juridiques.",
    items: [
      "ViaNexis n'est pas une plateforme eFTI certifiée et ne promet pas d'acceptation automatique par les autorités.",
      "L'OCR, l'IA et la traduction sont utiles : une révision humAIne est requise.",
      "Le système ne fournit pas de conseils juridiques.",
      "Il ne s'agit pas d'un service d'urgence ou SOS."
    ],
    detailsLink: "Avis complets d’utilisation responsable",
  },
  pilotCta: {
    title: "Accès pilote contrôlé",
    subtitle: "ViaNexis est actuellement disponible via un programme pilote avec des transporteurs et des chauffeurs sélectionnés. L'accès est activé après discussion et approbation individuelles.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Voyage actif",
    phoneSubtitle: "Démo · VN-2407-A18",
    phoneRows: [
      {
        label: "Prochain arrêt",
        value: "Ramassage · Budapest (démo)",
        status: "En route",
      },
      {
        label: "Document",
        value: "CMR — en attente de signature",
        status: "Action",
      },
      {
        label: "Synchroniser",
        value: "1 changement en attente",
        status: "Hors ligne",
      }
    ],
    phoneCaption: "Démo du produit – échantillons de données anonymisés.",
    browserTitle: "Contrôle des opérations",
    browserSubtitle: "Flotte de démonstration · vue du répartiteur",
    browserColumns: [
      "Voyage",
      "Arrêt",
      "Document",
      "Statut"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (démo)",
        "CMR manquant",
        "Alerte"
      ],
      [
        "VN-2407-B03",
        "Győr (démo)",
        "POD signé",
        "En route"
      ],
      [
        "VN-2407-C11",
        "Vienne (démo)",
        "En cours de révision",
        "Pré-clôture"
      ]
    ],
    browserCaption: "Démo du portail de l'entreprise – pas de données client en direct.",
    driver: {
      navHome: "Maison",
      navTrips: "Voyages",
      navDocs: "Documents",
      navMore: "Plus",
      tripStatus: "Voyage en cours",
      nextStopLabel: "Prochain arrêt",
      nextStopValue: "Ramassage · Budapest (démo)",
      documentLabel: "Document",
      documentValue: "CMR numérique",
      documentAction: "Signature requise",
      syncLabel: "Connexion",
      syncValue: "Hors ligne · 1 en attente",
    },
    portal: {
      roleLabel: "Rôle : Répartiteur",
      alertLabel: "Alerte",
      alertValue: "VN-2407-A18 · CMR en attente de signature",
      auditLabel: "Dernier événement d'audit",
      auditValue: "Statut du document modifié · Application pilote",
    },
  },
  statusLabels: {
    available: "Disponible",
    pilot: "Pilote",
    development: "En développement",
  },
  productPage: {
    highlightsTitle: "Capacités clés",
    capabilitiesTitle: "Ce que cette surface apporte",
    statusesTitle: "Étiquettes d'état",
  },
  authority: {
    heroSubtitle: "Accès aux preuves de voyage limité dans le temps et dans la portée – il ne s'agit pas d'une plateforme eFTI certifiée.",
    foundationBadge: "Préparation technique",
    notCertifiedBadge: "Non certifié eFTI",
    foundationTitle: "Ce que signifie être prêt",
    foundationSubtitle: "Données structurées et partage contrôlé — sans certificat ni demande de permis.",
    extraDisclaimer: "ViaNexis ne promet pas l'acceptation des autorités dans tous les pays. La conformité légale et réglementaire reste de la responsabilité du client.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Liste des trajets et arrêts",
        description: "Déplacements actifs, actions suivantes et tâches d'arrêt.",
        status: "available",
      },
      {
        title: "Documents et signature",
        description: "Téléchargements, tâches CMR et capture de signature.",
        status: "available",
      },
      {
        title: "Travail hors ligne",
        description: "Sauvegarde locale avec synchronisation en attente visible.",
        status: "available",
      },
      {
        title: "Messagerie",
        description: "Communication liée au voyage pour les conducteurs.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Liste de voyages active",
        description: "Aperçu opérationnel avec arrêts et statuts.",
        status: "available",
      },
      {
        title: "Alertes de documents manquants",
        description: "Les documents manquants ou non signés sont immédiatement visibles.",
        status: "available",
      },
      {
        title: "Autorisations",
        description: "Accès basé sur les rôles aux données de l'entreprise.",
        status: "available",
      },
      {
        title: "Événements d'audit",
        description: "Décision consultable et piste documentaire.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Téléchargement et création de liens",
        description: "Documents liés au voyage, au conducteur ou au véhicule.",
        status: "available",
      },
      {
        title: "Flux de travail de signature",
        description: "En attente de signature → signé → révision.",
        status: "pilot",
      },
      {
        title: "Forfait voyage fermé",
        description: "Documents et événements exportables.",
        status: "pilot",
      },
      {
        title: "Gestion des modèles",
        description: "Modèles de documents centraux — déploiement progressif.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Accès basé sur les rôles",
        description: "Séparation au niveau de l'utilisateur et de l'entreprise.",
        status: "available",
      },
      {
        title: "Journal d'audit",
        description: "Les actions et les décisions restent consultables.",
        status: "available",
      },
      {
        title: "Session et appareil",
        description: "Gestion contrôlée des sessions et des appareils.",
        status: "pilot",
      },
      {
        title: "Accès à l'assistance",
        description: "Entrée d'assistance enregistrée et limitée dans le temps.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Langue",
    draftSuffix: "· brouillon",
    breadcrumb: "Fil d'Ariane",
    primaryNav: "Primaire",
    importantNotice: "Avis important",
  },
};
