import type { SiteContent } from "../types";
import { legalFr } from "./legal/fr";

export const contentFr: SiteContent = {
  meta: {
    title: "ViaNexis Opérations de transport chauffeur et entreprise",
    description: "Application de chauffeur, contrôle d'entreprise, gestion de documents, messagerie, notifications et flux de travail multilingues dans un seul système. Préparation des tests internes en cours.",
    ogLocale: "fr_FR",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Caractéristiques",
    driverApp: "Application pilote",
    companyPortal: "Portail de l'entreprise",
    documents: "Documents",
    authorityEfti: "Autorité / eFTI",
    security: "Sécurité",
    pilot: "Accès pilote",
    contact: "Contact",
    requestAccess: "Demander l'accès",
    menuOpen: "Ouvrir le menu",
  },
  footer: {
    tagline: "Plateforme numérique de preuves de transport et d'opérations de conducteur pour les entreprises de transport. Fondation prête pour eFTI – pas une plate-forme eFTI certifiée.",
    product: "Produit",
    legal: "Légal",
    legalNotice: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    disclaimers: "Utilisation responsable",
    dataContact: "Contact pour la protection des données",
    copyright: "Il ne s'agit pas d'une plate-forme eFTI certifiée. Ne promet pas l'acceptation des autorités, une force probante légale automatique, des services OCR/AI/traduction irréprochables, ou des services d'urgence/SOS. Aucun téléchargement public sur le Play Store.",
  },
  hero: {
    title: "ViaNexis — plateforme numérique de preuves de transport et d'opérations pour les conducteurs",
    subtitle: "Application de chauffeur, contrôle d'entreprise, gestion de documents, messagerie, notifications et flux de travail multilingues dans un seul système.",
    primaryCta: "Contactez-nous",
    secondaryCta: "Préparation des tests internes en cours",
    stats: [
      {
        label: "Application pilote",
        value: "Voyage + hors ligne",
      },
      {
        label: "Documents",
        value: "CMR + audit",
      },
      {
        label: "Messagerie",
        value: "Multilingue",
      },
      {
        label: "Statut",
        value: "Préparation aux tests internes",
      }
    ],
  },
  platformStatus: {
    title: "Statut actuel",
    items: [
      "Préparation des tests internes de Google Play en cours – pas de téléchargement dans la boutique publique.",
      "Préparation de la publication de l'application pilote et Samsung UAT en cours.",
      "Le backend de production, les notifications push et les intégrations de partenaires sont progressivement connectés."
    ],
    disclaimer: "ViaNexis ne prétend pas que le système est opérationnel, certifié ou officiellement accepté dans tous les pays.",
  },
  moduleLabels: {
    goal: "But",
    appFoundation: "Fondation côté application",
    backendDependency: "Dépendance backend/administrateur",
    important: "Important",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Application pilote",
      goal: "Permettez aux conducteurs de gérer les tâches, les documents et les événements liés au voyage sur mobile, en ligne et hors ligne.",
      appFoundation: "Liste et détails du voyage, téléchargement de documents, capture de signature, listes de contrôle, journalisation des incidents, sauvegarde et synchronisation hors ligne, session protégée PIN.",
      backendDependency: "Live API, portée du locataire, synchronisation des déplacements et des documents, résolution des paramètres de l'entreprise.",
    },
    {
      id: "company-admin",
      title: "Contrôle de l'entreprise / de l'administration",
      goal: "Laissez les entreprises de transport gérer les trajets, les utilisateurs, les autorisations et les flux de travail à partir d'un seul portail.",
      appFoundation: "Les données et les actions côté conducteur reflètent les règles de l'entreprise.",
      backendDependency: "Portail Web de l'entreprise, application d'administration de la plateforme, rôles, gestion des voyages, exigences en matière de documents, paramètres d'échange de l'entreprise.",
    },
    {
      id: "cmr-documents",
      title: "CMR et documents numériques",
      goal: "Documents liés au voyage — CMR, bon de livraison, facture, papiers du véhicule et du conducteur — gérés de manière structurée.",
      appFoundation: "Téléchargement de documents, numérisation/photo, affectation de voyage, tâches basées sur les exigences, concept de document principal.",
      backendDependency: "Stockage de documents, métadonnées, règles de signature, partage d'autorité avec limites de portée.",
      disclaimer: "Les documents numériques n’ont pas automatiquement force probante légale. L'acceptation varie selon le pays et le client.",
    },
    {
      id: "completed-package",
      title: "Forfait voyage terminé",
      goal: "Résumez les preuves du voyage effectué dans un package exportable.",
      appFoundation: "Clôture du voyage, données locales et événements synchronisés comme base pour l'assemblage du package.",
      backendDependency: "Génération de packages de voyage terminés, export PDF, export d'audit. Certaines sections (par exemple palette/emballage PDF) restent des dépendances.",
      disclaimer: "Le package prend en charge la documentation ; elle ne remplace pas l'évaluation juridique ou la procédure d'autorité de l'entreprise.",
    },
    {
      id: "messaging-notifications",
      title: "Messagerie et notifications",
      goal: "Communication liée au trajet et alertes pour les événements importants du conducteur.",
      appFoundation: "Liste de messages, fils de discussion liés au voyage, base de notification côté application. Utilisable pour : nouveau message, changement de voyage, tâche de document, problème de synchronisation.",
      backendDependency: "Production push (FCM/APNs), enregistrement du jeton de périphérique, répartition côté serveur — dépendance séparée, pas encore en ligne.",
      disclaimer: "L'écran cible s'ouvre après PIN. La poussée de production ne prétend pas que chaque événement arrive instantanément.",
    },
    {
      id: "pallet-packaging",
      title: "Échange de palettes et d'emballages",
      goal: "Enregistrez les échanges de palettes et d'emballages par arrêt avec les quantités, les pénuries, les dommages et les litiges.",
      appFoundation: "Modules de palettes et d'emballage séparés. Basculable en fonction de l'entreprise. L'entreprise peut prédéfinir des éléments ; le conducteur peut ajouter un emballage personnalisé s’il est autorisé. Sauvegarde et synchronisation hors ligne.",
      backendDependency: "Paramètres Exchange API, synchronisation des enregistrements, interface utilisateur d'administration du portail, section du package PDF terminé - cette dernière est une dépendance.",
      disclaimer: "La section des preuves PDF n'est pas entièrement prête dans tous les cas. L'enregistrement prend en charge la documentation des litiges mais ne tranche pas les litiges.",
    },
    {
      id: "adr-border",
      title: "ADR / soutien aux frontières",
      goal: "Informations d'aide rapide pour ADR et le contexte frontalier/douanier, ainsi que la vérification des sources officielles.",
      appFoundation: "Informations ADR, recherche de numéro ONU, assistant de code tunnel, métadonnées frontières/douanes liées aux déplacements.",
      backendDependency: "Mises à jour de la base de données ADR, métadonnées des règles spécifiques au pays, données des points de contrôle frontaliers.",
      disclaimer: "ADR et les données du tunnel sont des informations d'assistance. L'application ne remplace pas la législation, la formation, le responsable DG de l'entreprise ou les décisions des autorités.",
    },
    {
      id: "truck-map",
      title: "Fondation de la carte des camions",
      goal: "Aperçu de la flotte et des voyages sur la carte — orientation opérationnelle.",
      appFoundation: "Aperçu basé sur une carte, affichage du contexte du trajet et du véhicule.",
      backendDependency: "Intégration du fournisseur télématique, fournisseur de routage, position en direct — intégration progressive.",
      disclaimer: "La carte ne garantit pas le respect des restrictions légales ou des permis.",
    },
    {
      id: "multilingue",
      title: "Fonctionnement multilingue",
      goal: "Des équipes multilingues sur une seule plateforme.",
      appFoundation: "Interface utilisateur multilingue de l'application Driver, conservation des messages originaux, traduction comme assistance.",
      backendDependency: "Extension des paramètres régionaux du portail et du site public, flux de travail de révision des traductions.",
      disclaimer: "La traduction automatique ou AI est utile ; un examen humain est nécessaire. Le document original reste primordial.",
    },
    {
      id: "audit-support",
      title: "Accès aux audits et au support",
      goal: "Journal traçable ; accès contrôlé au support pour le dépannage.",
      appFoundation: "Journalisation des événements pour les actions de déplacement et de document ; séances de support vérifiables.",
      backendDependency: "Exportation d’audit, politique d’accès au support, matrice d’autorisation d’entreprise.",
      disclaimer: "Le journal d’audit ne constitue pas une preuve juridique automatique.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — utilisation responsable",
      body: "ADR et les données du tunnel sont des informations d'assistance. Les sources officielles, les tableaux et les règles locales en vigueur doivent toujours être vérifiés. ViaNexis ne remplace pas la législation, la formation ADR, le responsable des marchandises dangereuses de l'entreprise ou les décisions des autorités.",
    },
    aiOcr: {
      title: "AI, OCR et traduction",
      body: "Le résumé AI, OCR et la traduction automatique sont des outils d'assistance. Un examen humain est nécessaire. Le document et le message originaux restent primaires. Pas de conseils juridiques ni de traduction certifiée.",
    },
    efti: {
      title: "eFTI et partage d'autorité",
      body: "ViaNexis n'est pas une plateforme eFTI certifiée. Cela ne garantit pas l’acceptation des autorités dans tous les pays. La fondation prête pour eFTI signifie une préparation technique – et non un certificat ou une licence.",
    },
  },
  home: {
    problem: {
      title: "Les défis logistiques quotidiens",
      subtitle: "Lorsque les documents, les signatures et les événements sont dispersés, la traçabilité et les preuves en pâtissent.",
      cards: [
        {
          title: "Documents épars",
          description: "Documents de voyage par courrier électronique, chat ou papier – difficile à relier aux événements réels.",
        },
        {
          title: "Signatures manquantes",
          description: "Les signatures tardives ou manquantes retardent la clôture et augmentent le risque de litige.",
        },
        {
          title: "Événements difficiles à prouver",
          description: "Enlèvement, livraison, échange de palettes, incident — sans journaux structurés, difficile à retracer.",
        },
        {
          title: "Équipes multilingues",
          description: "Malentendus quotidiens dans les messages : conservation du texte original et traduction révisée requises.",
        }
      ],
    },
    modules: {
      title: "Modules de plateforme",
      subtitle: "Objectif, fondation côté application, dépendance backend/administrateur – avec une formulation juridiquement sûre.",
    },
    pallet: {
      title: "Échange de palettes et d'emballages",
      subtitle: "Modules séparés, activables en fonction de l'entreprise – sauvegarde hors ligne en vue d'un audit.",
    },
    notifications: {
      title: "Messagerie et notifications",
      subtitle: "Prêt pour les fondations côté application : la poussée de production est une dépendance backend distincte.",
      cards: [
        {
          title: "Types d'événements de notification",
          description: "Nouveau message, changement de voyage, tâche de document, problème de synchronisation.",
        },
        {
          title: "Routage des prises et PIN",
          description: "Ouvrez l'écran cible à partir de la notification ; lien profond après PIN.",
        },
        {
          title: "Écran de verrouillage sécurisé",
          description: "Le contenu complet du document ou du message n'est pas affiché par défaut sur l'écran de verrouillage.",
        }
      ],
      backendDepTitle: "Dépendance back-end",
      backendDepBody: "La poussée de production (FCM/APNs), l'enregistrement du jeton d'appareil et la répartition côté serveur ne sont pas encore opérationnels : une intégration distincte est requise.",
    },
    disclaimersSection: {
      title: "Utilisation responsable — avis importants",
    },
    security: {
      title: "Protection et contrôle",
      subtitle: "Protection de l'entreprise et du conducteur avec une documentation structurée.",
      cards: [
        {
          title: "Protection de l'entreprise",
          description: "Documentation basée sur les exigences, événements vérifiables, accès contrôlé.",
        },
        {
          title: "Protection du conducteur",
          description: "Processus structuré pour documenter les événements liés aux litiges.",
        },
        {
          title: "Colonne documentaire",
          description: "Documents et événements liés au voyage dans un seul système.",
        },
        {
          title: "Événements auditables",
          description: "Qui a fait quoi quand – connecté et consultable.",
        }
      ],
      notPromiseTitle: "Pas une promesse",
      notPromiseBody: "ViaNexis ne promet pas une force probante légale automatique. L’évaluation juridique dépend du contexte.",
    },
    contact: {
      title: "Contact et tests internes",
      subtitle: "Accès contrôlé – pas d’inscription automatique, pas de téléchargement Play public.",
      body: "L'application pilote est en cours de préparation aux tests internes de Google Play. Préparation à la publication et Samsung UAT en cours. L'activation n'est pas automatique.",
      consentNote: "Le système gère les documents, les flux de travail des chauffeurs, les données de l'entreprise et les autorisations — chaque accès est examiné individuellement.",
      contactLink: "Contactez-nous →",
    },
  },
  contactForm: {
    title: "Contactez-nous",
    subtitle: "Intérêt pour la plateforme ViaNexis — pas d'inscription automatique.",
    name: "Nom *",
    company: "Entreprise *",
    email: "E-mail *",
    phone: "Téléphone",
    message: "Message *",
    interestType: "Type d'intérêt *",
    interestPlaceholder: "Sélectionner...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Application pilote",
      },
      {
        value: "company-admin",
        label: "Plateforme Entreprise / Administrateur",
      },
      {
        value: "documents",
        label: "Gestion des documents",
      },
      {
        value: "pallet-packaging",
        label: "Palette / emballage",
      },
      {
        value: "adr-customs",
        label: "ADR / assistance douanière",
      },
      {
        value: "autre",
        label: "Autre",
      }
    ],
    consent: "J'accepte que ViaNexis traite les données fournies uniquement à des fins de contact. *",
    submit: "Envoyer un message",
    submitMailto: "Envoyer un e-mail",
    intakeDisabled: "La soumission de prospects en ligne est en cours de préparation. Utilisez le contact par e-mail ou réessayez plus tard.",
    successTitle: "Message reçu",
    successBody: "Merci pour votre intérêt. Notre équipe vous contactera. L'activation de l'accès n'est pas automatique.",
    newSubmission: "Nouveau message",
    errors: {
      name: "Le nom est requis.",
      company: "La compagnie est requise.",
      email: "Un e-mail est requis.",
      emailInvalid: "Entrez une adresse e-mail valide.",
      message: "Un message est requis.",
      interest: "Sélectionnez un type d'intérêt.",
      consent: "Le consentement est requis.",
      submitFailed: "Le message n'a pas pu être envoyé. Essayez plutôt le courrier électronique.",
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
        title: "Dossier d'inspection des autorités",
        description: "Documents et événements liés au voyage dans un package partagé à portée limitée.",
      },
      {
        title: "Portée/accès limité dans le temps",
        description: "Accès limité basé sur QR – non public.",
      },
      {
        title: "Audit",
        description: "Accès enregistré et événements de partage.",
      },
      {
        title: "Fond de teint prêt pour eFTI",
        description: "Base technique pour une intégration future – pas de certification.",
      }
    ],
  },
  legal: legalFr,
};
