import type { LegalContent } from "../legal-types";

export const legalFr: LegalContent = {
  versionBadge: "Version de test interne – expertise juridique en cours · Cette traduction est en cours de révision.",
  privacy: {
    title: "Avis de confidentialité — version de test interne",
    intro: "Cet avis s'applique pendant la phase de test interne et de préparation de l'application Driver ViaNexis et de la plateforme associée. Le service n’est pas un téléchargement public du Play Store – la préparation des tests internes de Google Play est en cours. La politique de confidentialité complète finale sera publiée après examen juridique.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Responsable du traitement des données",
      body: "ViaNexis — vianexis.eu. Contact confidentialité : info@vianexis.eu",
    },
    scope: {
      title: "Portée",
      body: "Cet avis couvre l'application mobile ViaNexis Driver, les flux de travail des conducteurs et des trajets associés, ainsi que le formulaire de contact Web. L'administrateur de l'entreprise et le portail du répartiteur sont soumis à des conditions contractuelles et de confidentialité distinctes.",
    },
    dataCategories: {
      title: "Données que nous traitons",
      items: [
        "Données de compte et de contact : nom, email, téléphone, entreprise, fonction, pays.",
        "Données du profil du conducteur : identifiants, rôle, paramètres de langue, autorisations.",
        "Données de trajet : identifiants de trajet, statut, arrêts, horodatages, métadonnées.",
        "Documents : CMR, bons de livraison, factures, photos, scans, signatures numériques.",
        "Messages et notifications : événements de communication et d'alerte liés au voyage.",
        "Localisation : uniquement avec l'autorisation de l'utilisateur et pendant l'utilisation (when-in-use), si la fonctionnalité est active.",
        "Métadonnées de l'appareil et de la session : type d'appareil, version du système d'exploitation, version de l'application, identifiants de session.",
        "Diagnostics et journaux : journaux techniques et rapports d'erreurs - si activés.",
        "Données d'échange de palettes et d'emballages : type, quantité, manque, dommages, notes.",
        "ADR / données d'utilisation des aides douanières : recherches, avis — pas de décisions officielles.",
        "Autorisation de notification et futur jeton push : le push de production (FCM) est une dépendance backend distincte."
      ],
    },
    purposes: {
      title: "Finalités du traitement",
      items: [
        "Gérer les flux de travail des voyages et documenter les performances.",
        "Gestion des documents, signatures et assemblage des dossiers de preuves.",
        "Communication liée au voyage et notifications opérationnelles.",
        "Sécurité, audit et traçabilité.",
        "Accès au support contrôlé de manière vérifiable.",
        "Prévenir et documenter les litiges juridiques et commerciaux.",
        "Amélioration du fonctionnement et du dépannage de l'application.",
        "Tests internes, pilote et évaluation d'accès."
      ],
    },
    sharing: {
      title: "Partage de données",
      items: [
        "Employeur/entreprise de transport et utilisateurs administrateurs/répartiteurs autorisés — par périmètre de locataire.",
        "Les données de voyage et de document du conducteur conformément aux règles de l'entreprise.",
        "Support de plateforme autorisé uniquement avec un accès audité, limité et justifié.",
        "Autorités ou partenaires uniquement sur base juridique, contrat ou décision de l'entreprise.",
        "AI/OCR/fournisseur de traduction uniquement via une intégration future contrôlée par le backend, si appliquée – avec examen humain.",
        "Nous ne vendons pas de données personnelles. Aucune poussée marketing."
      ],
    },
    rights: {
      title: "Vos droits",
      items: [
        "Accédez à vos données – via l'administrateur de l'entreprise ou le canal d'assistance.",
        "Rectification de données inexactes.",
        "Effacement lorsque la loi le permet et que les processus de l’entreprise le permettent.",
        "Objection ou restriction lorsque cela est légalement justifié.",
        "Portabilité des données lorsque la loi applicable le prévoit.",
        "Plainte auprès d'une autorité de contrôle.",
        "Contact : info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Notifications",
      body: "L'application utilise des notifications opérationnelles, et non des notifications marketing. Le texte de l'écran de verrouillage respecte la confidentialité par défaut. La poussée de production (FCM/APNs) et la gestion des jetons de périphérique sont des dépendances backend – peuvent être partielles ou ne pas être actives pendant les tests internes. L'autorisation de notification est le choix de l'utilisateur.",
    },
    location: {
      title: "Emplacement",
      body: "La localisation est traitée uniquement avec l'autorisation de l'utilisateur et pendant l'utilisation (lors de l'utilisation), si la fonctionnalité est active – à des fins de carte, de position personnelle et de preuve de voyage. Aucun suivi en arrière-plan dans l’état actuel. La localisation ne garantit pas le respect de l'itinéraire ni la conformité légale.",
    },
    importantNotices: {
      title: "Avis importants",
      items: [
        "AI, OCR et la traduction automatique sont des outils d'assistance – une révision humaine est requise.",
        "Les informations ADR sont une aide – ne remplacent pas les sources officielles ou la législation.",
        "ViaNexis n'est pas une plateforme eFTI certifiée.",
        "Il ne s'agit pas d'un service d'urgence ou d'un service SOS.",
        "Les documents numériques n’ont pas automatiquement force probante légale.",
        "Le service est en cours de test/préparation interne – et non un système de production public en direct."
      ],
    },
    dataContact: {
      title: "Contact pour la confidentialité",
      body: "Questions de confidentialité : info@vianexis.eu. Le contact final du contrôleur apparaîtra dans l’avis publié.",
    },
    playUrl: "URL de confidentialité de la console Play Stable : https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Conditions d'utilisation — version de test interne",
    intro: "Ces conditions s’appliquent pendant la phase de test interne et pilote de la plateforme ViaNexis. Le service n'est pas un produit public du Play Store : la préparation des tests internes de Google Play est en cours. Les conditions définitives seront publiées après examen juridique.",
    sections: [
      {
        title: "Nature de la prestation",
        body: "ViaNexis fournit des preuves numériques de transport et une plateforme d'opérations de conducteur pour les entreprises de transport. Fondation prête pour eFTI – pas une plate-forme eFTI certifiée. Ne promet pas l’acceptation des autorités dans tous les pays.",
      },
      {
        title: "Tests internes",
        body: "L’accès est contrôlé – via un projet pilote ou une invitation à des tests internes. Pas d’enregistrement public automatique. Le backend, les notifications push et certaines intégrations sont connectés progressivement.",
      },
      {
        title: "Responsabilité de l'utilisateur",
        body: "Le chauffeur et l'entreprise sont responsables du voyage, des documents, du ADR et de la conformité douanière. L'application prend en charge la documentation et ne remplace pas les conseils juridiques, les experts ADR ou les autorités.",
      },
      {
        title: "Disponibilité",
        body: "Lors des tests internes, la disponibilité et les fonctionnalités peuvent varier. Un SLA spécifique s’applique uniquement sous contrat.",
      },
      {
        title: "Limitation de responsabilité",
        body: "ViaNexis ne promet pas de force probante légale automatique, de OCR/AI/traduction sans faille, de services d'urgence ou de préparation à la production s'il s'agit toujours d'une dépendance backend.",
      }
    ],
  },
  legalNotice: {
    title: "Mentions légales — version de test interne",
    intro: "Cette page décrit l'état des tests et de la préparation internes de la plateforme ViaNexis. Il ne remplace pas la documentation juridique complète ni les conditions contractuelles.",
    sections: [
      {
        title: "Nature de la plateforme",
        body: "Preuves numériques de transport, gestion de documents, messagerie, notifications et contrôle d'entreprise dans un seul système. Fondation prête pour eFTI – pas une plate-forme eFTI certifiée.",
      },
      {
        title: "Statut des tests internes",
        body: "Access is currently available through a controlled pilot program. No public Play Store download.",
      },
      {
        title: "Limitation de responsabilité",
        body: "Nous ne promettons pas l’acceptation des autorités, une force probante légale automatique, une AI/OCR/traduction sans faille, des services d’urgence ou une préparation complète à la production.",
      },
      {
        title: "Contact",
        body: "Questions juridiques et de confidentialité : info@vianexis.eu",
      }
    ],
    relatedDocs: "Documents associés",
  },
  disclaimersPage: {
    title: "Utilisation responsable – avertissements",
    intro: "Les textes ci-dessous décrivent des limites importantes à l'utilisation de la plateforme. Version de test interne — ne remplace pas un avis juridique.",
    items: [
      {
        id: "adr",
        title: "ADR — utilisation responsable",
        body: "ADR et les données du tunnel sont des informations d'assistance. Les sources officielles, les tableaux et les règles locales en vigueur doivent toujours être vérifiés. ViaNexis ne remplace pas la législation, la formation ADR, le responsable DG de l'entreprise ou les décisions des autorités.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR et traduction",
        body: "Outils d'assistance – examen humain requis. Le document et le message originaux restent prioritaires. Pas de conseils juridiques ni de traduction certifiée.",
      },
      {
        id: "avis",
        title: "Notifications et push",
        body: "Notifications opérationnelles – pas de poussée marketing. Écran de verrouillage sécurisé par défaut. La poussée de production (FCM/APNs) est une dépendance backend et peut ne pas être active pendant les tests internes.",
      },
      {
        id: "truck-map",
        title: "Carte des camions / données communautaires",
        body: "Carte et itinéraire pour l'orientation opérationnelle — ne garantissent pas les restrictions légales, les permis ou l'exactitude des données communautaires. Ne remplace pas la navigation officielle.",
      },
      {
        id: "palette",
        title: "Preuve d'échange palette/emballage",
        body: "L’enregistrement prend en charge la documentation des litiges. La section des preuves PDF du forfait de voyage terminé n'est pas entièrement prête dans tous les cas. Ne tranche pas les litiges.",
      },
      {
        id: "legal-validity",
        title: "Validité juridique / documents",
        body: "Les documents et signatures numériques n’ont pas automatiquement force probante. L'acceptation varie selon le pays et le client.",
      },
      {
        id: "efti",
        title: "eFTI et partage d'autorité",
        body: "ViaNexis n'est pas une plateforme eFTI certifiée. Ne promet pas l’acceptation des autorités dans tous les pays. La base prête pour eFTI est une préparation technique, pas un certificat.",
      }
    ],
  },
};
