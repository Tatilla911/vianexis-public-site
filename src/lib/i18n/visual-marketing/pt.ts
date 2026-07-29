import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingPt: VisualMarketingContent = {
  skipToContent: "Pular para o conteúdo",
  brandVisuals: {
    routeLabel: "Rota ativa",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Rede ViaNexis",
    networkTitle: "Não é apenas a rota que conecta.",
    networkSubtitle: "Paradas, documentos, assinaturas, mensagens e decisões pertencem ao mesmo fluxo de viagem — em ordem temporal, com permissões e uma trilha de eventos pesquisável.",
    workflowEvents: [
      "Partida",
      "Escolher",
      "Documento",
      "Assinatura",
      "Esperando",
      "Entrega",
      "Pacote fechado"
    ],
  },
  pillars: {
    title: "Três pilares — um sistema controlado",
    subtitle: "Um fluxo móvel fácil de usar, controle operacional da empresa e uma trilha de decisão auditável.",
    items: [
      {
        title: "Aplicativo amigável ao motorista",
        description: "Viagens, paradas, documentos, assinaturas e eventos em uma interface móvel com capacidade off-line.",
      },
      {
        title: "Controle da empresa",
        description: "Visão geral do despachante, permissões, alertas e rastreamento de documentos no portal da empresa.",
      },
      {
        title: "Operações auditáveis",
        description: "Eventos, assinaturas e decisões com um registro pesquisável — sem reivindicações de segurança exageradas.",
      }
    ],
  },
  process: {
    title: "Fluxo de trabalho principal da viagem",
    subtitle: "Da criação a um pacote fechado — etapas estruturadas com acesso com reconhecimento de permissão.",
    steps: [
      {
        title: "Criar viagem",
        description: "Paradas de coleta e entrega, tarefas e requisitos de documentos.",
      },
      {
        title: "Aceitação do motorista",
        description: "Atribuição, aceitação e início de sessão controlada.",
      },
      {
        title: "Paradas e tarefas",
        description: "Múltiplas paradas, tarefas, eventos e registros de danos.",
      },
      {
        title: "Documentos e assinaturas",
        description: "Carregue, assine, revise – e então um pacote de viagem fechado.",
      }
    ],
  },
  homeModules: {
    title: "Superfícies do produto",
    subtitle: "Cada superfície compartilha o mesmo modelo de viagem e documento. Os detalhes estão nas páginas do produto.",
    detailsLink: "Detalhes",
    items: [
      {
        title: "Aplicativo para motorista",
        description: "Viagens, paradas, documentos e assinaturas em um fluxo móvel com capacidade off-line. Os motoristas sempre veem a próxima ação necessária.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal da empresa",
        description: "Visão geral operacional: viagens ativas, documentos perdidos, alertas e permissões em um só lugar.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documentos e assinaturas",
        description: "Documentação vinculada à viagem, estados de assinatura e um pacote de viagem fechado exportável.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Mensagens e alertas",
        description: "Comunicação vinculada a trip. Os recursos de notificação podem ser ativados como parte do programa piloto.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Auditoria e permissões",
        description: "Acesso baseado em função, eventos pesquisáveis ​​e acesso de suporte controlado.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operação off-line",
        description: "Os drivers podem continuar trabalhando em redes fracas; as alterações são finalizadas quando a sincronização é concluída.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documentos e assinaturas",
    subtitle: "Os documentos vinculados à viagem podem ser assinados e revisados ​​e depois fechados em um pacote exportável.",
    steps: [
      {
        title: "Carregar ou criar",
        description: "CMR, nota de entrega, foto ou modelo digital.",
      },
      {
        title: "Vinculando",
        description: "Atribuído ao contexto da viagem, do motorista ou do veículo.",
      },
      {
        title: "Assinar e revisar",
        description: "Fluxo de status: aguardando assinatura → assinado → em revisão.",
      },
      {
        title: "Pacote de viagem fechado",
        description: "Documentos e eventos exportáveis ​​— um resumo auditável.",
      }
    ],
    statuses: [
      "Enviado",
      "Ausente",
      "Aguardando assinatura",
      "Assinado",
      "Em revisão"
    ],
    detailsLink: "Documentos em detalhes",
  },
  offline: {
    title: "Operação e sincronização offline",
    subtitle: "O trabalho continua em redes fracas – a finalização ocorre após a sincronização.",
    cards: [
      {
        title: "Salvamento local",
        description: "As alterações do driver são armazenadas com segurança no dispositivo.",
      },
      {
        title: "Sincronização visível",
        description: "As alterações pendentes permanecem visíveis até que a conectividade retorne.",
      },
      {
        title: "Sinalização de conflito",
        description: "Fontes conflitantes são registradas – nunca substituídas silenciosamente.",
      }
    ],
    detailsLink: "Aplicativo para motorista",
  },
  responsibleUse: {
    title: "Uso responsável",
    subtitle: "Limites curtos e importantes – os detalhes estão nas páginas jurídicas.",
    items: [
      "ViaNexis não é uma plataforma eFTI certificada e não promete aceitação automática de autoridade.",
      "OCR, IA e tradução são auxiliares – é necessária revisão humana.",
      "O sistema não fornece aconselhamento jurídico.",
      "Não é um serviço de emergência ou SOS."
    ],
    detailsLink: "Avisos completos de uso responsável",
  },
  pilotCta: {
    title: "Acesso piloto controlado",
    subtitle: "O ViaNexis está atualmente disponível através de um programa piloto com transportadoras e motoristas selecionados. O acesso é ativado após discussão e aprovação individual.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Viagem ativa",
    phoneSubtitle: "Demonstração · VN-2407-A18",
    phoneRows: [
      {
        label: "Próxima parada",
        value: "Recolha · Budapeste (demonstração)",
        status: "A caminho",
      },
      {
        label: "Documento",
        value: "CMR – aguardando assinatura",
        status: "Ação",
      },
      {
        label: "Sincronizar",
        value: "1 alteração pendente",
        status: "Off-line",
      }
    ],
    phoneCaption: "Demonstração do produto — dados de amostra anonimizados.",
    browserTitle: "Controle de operações",
    browserSubtitle: "Frota de demonstração · visualização do despachante",
    browserColumns: [
      "Viagem",
      "Parar",
      "Documento",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapeste (demonstração)",
        "CMR ausente",
        "Alerta"
      ],
      [
        "VN-2407-B03",
        "Győr (demonstração)",
        "POD assinado",
        "A caminho"
      ],
      [
        "VN-2407-C11",
        "Viena (demonstração)",
        "Em revisão",
        "Pré-fechar"
      ]
    ],
    browserCaption: "Demonstração do portal da empresa – não dados ao vivo do cliente.",
    driver: {
      navHome: "Lar",
      navTrips: "Viagens",
      navDocs: "Documentos",
      navMore: "Mais",
      tripStatus: "Viagem em andamento",
      nextStopLabel: "Próxima parada",
      nextStopValue: "Recolha · Budapeste (demonstração)",
      documentLabel: "Documento",
      documentValue: "RMC digital",
      documentAction: "Assinatura necessária",
      syncLabel: "Conexão",
      syncValue: "Off-line · 1 pendente",
    },
    portal: {
      roleLabel: "Função: Despachante",
      alertLabel: "Alerta",
      alertValue: "VN-2407-A18 · CMR aguardando assinatura",
      auditLabel: "Último evento de auditoria",
      auditValue: "Status do documento alterado · aplicativo de motorista",
    },
  },
  statusLabels: {
    available: "Disponível",
    pilot: "Piloto",
    development: "Em desenvolvimento",
  },
  productPage: {
    highlightsTitle: "Principais capacidades",
    capabilitiesTitle: "O que esta superfície oferece",
    statusesTitle: "Etiquetas de status",
  },
  authority: {
    heroSubtitle: "Acesso limitado no tempo e no escopo às evidências de viagem — não uma plataforma eFTI certificada.",
    foundationBadge: "Prontidão técnica",
    notCertifiedBadge: "Não certificado eFTI",
    foundationTitle: "O que significa prontidão",
    foundationSubtitle: "Dados estruturados e compartilhamento controlado — sem certificado ou solicitação de licença.",
    extraDisclaimer: "A ViaNexis não promete aceitação de autoridade em todos os países. A conformidade legal e regulatória continua sendo de responsabilidade do cliente.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista de viagens e paradas",
        description: "Viagens ativas, próximas ações e tarefas interrompidas.",
        status: "available",
      },
      {
        title: "Documentos e assinatura",
        description: "Uploads, tarefas CMR e captura de assinaturas.",
        status: "available",
      },
      {
        title: "Trabalho off-line",
        description: "Salvamento local com sincronização pendente visível.",
        status: "available",
      },
      {
        title: "Mensagens",
        description: "Comunicação vinculada à viagem para motoristas.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista de viagens ativas",
        description: "Visão geral operacional com paradas e status.",
        status: "available",
      },
      {
        title: "Alertas de documentos perdidos",
        description: "Documentos ausentes ou não assinados são imediatamente visíveis.",
        status: "available",
      },
      {
        title: "Permissões",
        description: "Acesso baseado em função aos dados da empresa.",
        status: "available",
      },
      {
        title: "Eventos de auditoria",
        description: "Decisão pesquisável e trilha de documentos.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Carregar e vincular",
        description: "Documentos vinculados à viagem, motorista ou veículo.",
        status: "available",
      },
      {
        title: "Fluxo de trabalho de assinatura",
        description: "Aguardando assinatura → assinado → revisão.",
        status: "pilot",
      },
      {
        title: "Pacote de viagem fechado",
        description: "Documentos e eventos exportáveis.",
        status: "pilot",
      },
      {
        title: "Gerenciamento de modelos",
        description: "Modelos de documentos centrais — implementação gradual.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Acesso baseado em função",
        description: "Separação no escopo do usuário e da empresa.",
        status: "available",
      },
      {
        title: "Registro de auditoria",
        description: "Ações e decisões permanecem pesquisáveis.",
        status: "available",
      },
      {
        title: "Sessão e dispositivo",
        description: "Sessão controlada e gerenciamento de dispositivos.",
        status: "pilot",
      },
      {
        title: "Acesso ao suporte",
        description: "Entrada de suporte registrada e limitada por tempo.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Linguagem",
    draftSuffix: "· rascunho",
    breadcrumb: "Pão ralado",
    primaryNav: "Primário",
    importantNotice: "Aviso importante",
  },
};
