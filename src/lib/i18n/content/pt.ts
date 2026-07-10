import type { SiteContent } from "../types";
import { legalPt } from "./legal/pt";

export const contentPt: SiteContent = {
  meta: {
    title: "ViaNexis Motorista e operações de transporte da empresa",
    description: "Aplicativo de motorista, controle da empresa, gerenciamento de documentos, mensagens, notificações e fluxos de trabalho de viagem multilíngues em um único sistema. Preparação de testes internos em andamento.",
    ogLocale: "pt_PT",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Características",
    driverApp: "Aplicativo para motorista",
    companyPortal: "Portal da empresa",
    documents: "Documentos",
    authorityEfti: "Autoridade / eFTI",
    security: "Segurança",
    pilot: "Acesso piloto",
    contact: "Contato",
    requestAccess: "Solicitar acesso",
    menuOpen: "Abrir menu",
  },
  footer: {
    tagline: "Plataforma digital de evidências de transporte e operações de motorista para empresas de transporte. Base pronta para eFTI — não é uma plataforma eFTI certificada.",
    product: "Produto",
    legal: "Jurídico",
    legalNotice: "Aviso legal",
    privacy: "Política de Privacidade",
    terms: "Termos de uso",
    disclaimers: "Uso responsável",
    dataContact: "Contato de proteção de dados",
    copyright: "Não é uma plataforma eFTI certificada. Não promete aceitação de autoridade, força probatória legal automática, serviços OCR/AI/tradução perfeitos ou serviços de emergência/SOS. Nenhum download público da Play Store.",
  },
  hero: {
    title: "ViaNexis — plataforma digital de evidências de transporte e operações de motorista",
    subtitle: "Aplicativo de motorista, controle da empresa, gerenciamento de documentos, mensagens, notificações e fluxos de trabalho de viagem multilíngues em um único sistema.",
    primaryCta: "Contate-nos",
    secondaryCta: "Preparação para testes internos em andamento",
    stats: [
      {
        label: "Aplicativo para motorista",
        value: "Viagem + off-line",
      },
      {
        label: "Documentos",
        value: "CMR + auditoria",
      },
      {
        label: "Mensagens",
        value: "Multilíngue",
      },
      {
        label: "Status",
        value: "Preparação para teste interno",
      }
    ],
  },
  platformStatus: {
    title: "Estado atual",
    items: [
      "Preparação para testes internos do Google Play em andamento – não um download de loja pública.",
      "Preparação para lançamento do aplicativo do driver e Samsung UAT em andamento.",
      "Back-end de produção, notificações push e integrações de parceiros estão sendo conectados gradualmente."
    ],
    disclaimer: "ViaNexis não afirma que o sistema esteja ativo, certificado ou oficialmente aceito em todos os países.",
  },
  moduleLabels: {
    goal: "Meta",
    appFoundation: "Fundação do lado do aplicativo",
    backendDependency: "Dependência de back-end/administrador",
    important: "Importante",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplicativo para motorista",
      goal: "Permita que os motoristas cuidem de tarefas, documentos e eventos relacionados à viagem em dispositivos móveis, on-line e off-line.",
      appFoundation: "Lista e detalhes da viagem, upload de documentos, captura de assinaturas, listas de verificação, registro de incidentes, salvamento e sincronização offline, sessão protegida por PIN.",
      backendDependency: "Live API, escopo do locatário, sincronização de viagens e documentos, resolução de configurações da empresa.",
    },
    {
      id: "company-admin",
      title: "Controle da empresa/administrador",
      goal: "Permita que as empresas de transporte gerenciem viagens, usuários, permissões e fluxos de trabalho em um único portal.",
      appFoundation: "Os dados e ações do motorista refletem as regras da empresa.",
      backendDependency: "Portal da empresa na Web, aplicativo de administração da plataforma, funções, gerenciamento de viagens, requisitos de documentos, configurações de troca da empresa.",
    },
    {
      id: "cmr-documents",
      title: "CMR digital e documentos",
      goal: "Documentos vinculados à viagem — CMR, guia de entrega, fatura, documentos do veículo e do motorista — gerenciados de forma estruturada.",
      appFoundation: "Upload de documentos, digitalização/foto, atribuição de viagem, tarefas baseadas em requisitos, conceito de documento primário.",
      backendDependency: "Armazenamento de documentos, metadados, regras de assinatura, compartilhamento de autoridade com limites de escopo.",
      disclaimer: "Os documentos digitais não possuem automaticamente força probatória legal. A aceitação varia de acordo com o país e o cliente.",
    },
    {
      id: "completed-package",
      title: "Pacote de viagem concluído",
      goal: "Resuma as evidências da viagem concluída em um pacote exportável.",
      appFoundation: "Fechamento de viagem, dados locais e eventos sincronizados como base para montagem do pacote.",
      backendDependency: "Geração de pacote de viagem concluída, exportação PDF, exportação de auditoria. Algumas seções (por exemplo, palete/embalagem PDF) permanecem dependências.",
      disclaimer: "O pacote suporta documentação; não substitui a avaliação jurídica ou procedimentos de autoridade da empresa.",
    },
    {
      id: "messaging-notifications",
      title: "Mensagens e notificações",
      goal: "Comunicação e alertas vinculados à viagem para eventos importantes do motorista.",
      appFoundation: "Lista de mensagens, tópicos vinculados a viagens, base de notificação do aplicativo. Utilizável para: nova mensagem, alteração de viagem, tarefa de documento, problema de sincronização.",
      backendDependency: "Push de produção (FCM/APNs), registro de token de dispositivo, envio do lado do servidor — dependência separada, ainda não ativa.",
      disclaimer: "A tela de destino é aberta após PIN. O impulso de produção não afirma que todos os eventos chegam instantaneamente.",
    },
    {
      id: "pallet-packaging",
      title: "Troca de paletes e embalagens",
      goal: "Registre trocas de paletes e embalagens por parada com quantidades, escassez, danos e disputas.",
      appFoundation: "Módulos separados de paletes e embalagens. Alternável pela empresa. A empresa pode predefinir itens; o driver pode adicionar embalagens personalizadas, se permitido. Salvar e sincronizar offline.",
      backendDependency: "Configurações do Exchange API, sincronização de registros, UI de administração do portal, seção PDF do pacote completo — a última é uma dependência.",
      disclaimer: "A seção de evidências do PDF não está totalmente pronta em todos os casos. A gravação apoia a documentação de disputas, mas não decide disputas.",
    },
    {
      id: "adr-border",
      title: "ADR / suporte de fronteira",
      goal: "Informações auxiliares rápidas para ADR e contexto de fronteira/alfândega - juntamente com verificação de fontes oficiais.",
      appFoundation: "Informações ADR, pesquisa de número ONU, código auxiliar de túnel, metadados de fronteira/alfândega vinculados a viagens.",
      backendDependency: "ADR atualizações de banco de dados, metadados de regras específicas do país, dados de pontos de controle de fronteira.",
      disclaimer: "ADR e os dados do túnel são informações auxiliares. O aplicativo não substitui a legislação, o treinamento, o diretor do DG da empresa ou as decisões das autoridades.",
    },
    {
      id: "truck-map",
      title: "Base do mapa de caminhão",
      goal: "Visão geral da frota e da viagem no mapa — orientação operacional.",
      appFoundation: "Visão geral baseada em mapa, exibição de contexto de viagem e veículo.",
      backendDependency: "Integração de provedor de telemática, provedor de roteamento, posição ao vivo — integração gradual.",
      disclaimer: "O mapa não garante o cumprimento de restrições ou autorizações legais.",
    },
    {
      id: "multilíngue",
      title: "Operação multilíngue",
      goal: "Equipes multilíngues em uma plataforma.",
      appFoundation: "UI multilíngue do aplicativo Driver, retenção de mensagem original, tradução como assistência.",
      backendDependency: "Expansão de localidade de portal e site público, fluxo de trabalho de revisão de tradução.",
      disclaimer: "A tradução automática ou AI é auxiliar; revisão humana é necessária. O documento original permanece primário.",
    },
    {
      id: "audit-support",
      title: "Acesso de auditoria e suporte",
      goal: "Registro rastreável; acesso de suporte controlado para solução de problemas.",
      appFoundation: "Registro de eventos para ações de viagens e documentos; sessões de suporte auditáveis.",
      backendDependency: "Exportação de auditoria, política de acesso de suporte, matriz de permissão empresarial.",
      disclaimer: "O log de auditoria não é uma prova legal automática.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — uso responsável",
      body: "ADR e os dados do túnel são informações auxiliares. Fontes oficiais, tabelas e regras locais vigentes devem sempre ser verificadas. ViaNexis não substitui a legislação, o treinamento de ADR, o oficial de mercadorias perigosas da empresa ou decisões de autoridades.",
    },
    aiOcr: {
      title: "AI, OCR e tradução",
      body: "O resumo AI, OCR e a tradução automática são ferramentas de apoio. A revisão humana é necessária. O documento e a mensagem originais permanecem primários. Não é aconselhamento jurídico e nem tradução juramentada.",
    },
    efti: {
      title: "eFTI e compartilhamento de autoridade",
      body: "ViaNexis não é uma plataforma eFTI certificada. Não promete aceitação de autoridade em todos os países. A base pronta para eFTI significa preparação técnica - não um certificado ou licença.",
    },
  },
  home: {
    problem: {
      title: "Desafios logísticos diários",
      subtitle: "Quando documentos, assinaturas e eventos estão espalhados, a rastreabilidade e a comprovação são prejudicadas.",
      cards: [
        {
          title: "Documentos espalhados",
          description: "Documentos de viagem por e-mail, chat ou papel – difíceis de vincular a eventos reais.",
        },
        {
          title: "Assinaturas ausentes",
          description: "Assinaturas atrasadas ou faltantes atrasam o encerramento e aumentam o risco de disputa.",
        },
        {
          title: "Eventos difíceis de provar",
          description: "Coleta, entrega, troca de paletes, incidentes — sem registros estruturados, difíceis de rastrear.",
        },
        {
          title: "Equipes multilíngues",
          description: "Mal-entendidos diários nas mensagens – é necessária a retenção do texto original e a tradução revisada.",
        }
      ],
    },
    modules: {
      title: "Módulos de plataforma",
      subtitle: "Objetivo, base do aplicativo, dependência de back-end/administrador – com redação legalmente segura.",
    },
    pallet: {
      title: "Troca de paletes e embalagens",
      subtitle: "Módulos separados, alternáveis ​​pela empresa – salvos off-line para auditoria.",
    },
    notifications: {
      title: "Mensagens e notificações",
      subtitle: "Preparada para a base do aplicativo – o push de produção é uma dependência de back-end separada.",
      cards: [
        {
          title: "Tipos de eventos de notificação",
          description: "Nova mensagem, alteração de viagem, tarefa de documento, problema de sincronização.",
        },
        {
          title: "Toque em roteamento e PIN",
          description: "Abra a tela de destino da notificação; link direto após PIN.",
        },
        {
          title: "Tela de bloqueio segura para privacidade",
          description: "Conteúdo completo do documento ou mensagem não mostrado na tela de bloqueio por padrão.",
        }
      ],
      backendDepTitle: "Dependência de back-end",
      backendDepBody: "O push de produção (FCM/APNs), o registro de token do dispositivo e o envio do lado do servidor ainda não estão ativos – é necessária integração separada.",
    },
    disclaimersSection: {
      title: "Uso responsável — avisos importantes",
    },
    security: {
      title: "Proteção e controle",
      subtitle: "Proteção da empresa e do motorista com documentação estruturada.",
      cards: [
        {
          title: "Proteção da empresa",
          description: "Documentação baseada em requisitos, eventos auditáveis, acesso controlado.",
        },
        {
          title: "Proteção do motorista",
          description: "Processo estruturado para documentar eventos em disputas.",
        },
        {
          title: "Estrutura de documentação",
          description: "Artigos e eventos vinculados a viagens em um sistema.",
        },
        {
          title: "Eventos auditáveis",
          description: "Quem fez o quê e quando — registrado e pesquisável.",
        }
      ],
      notPromiseTitle: "Não é uma promessa",
      notPromiseBody: "ViaNexis não promete força probatória legal automática. A avaliação jurídica depende do contexto.",
    },
    contact: {
      title: "Contato e testes internos",
      subtitle: "Acesso controlado – sem registro automático, sem download público do Play.",
      body: "O aplicativo do driver está em preparação para testes internos do Google Play. Preparação para liberação e Samsung UAT em andamento. A ativação não é automática.",
      consentNote: "O sistema gerencia documentos, fluxos de trabalho de motoristas, dados da empresa e permissões – cada acesso é revisado individualmente.",
      contactLink: "Entre em contato conosco →",
    },
  },
  contactForm: {
    title: "Contate-nos",
    subtitle: "Interesse na plataforma ViaNexis — registro não automático.",
    name: "Nome *",
    company: "Empresa *",
    email: "E-mail *",
    phone: "Telefone",
    message: "Mensagem *",
    interestType: "Tipo de interesse *",
    interestPlaceholder: "Selecione...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplicativo para motorista",
      },
      {
        value: "company-admin",
        label: "Plataforma da empresa/administrador",
      },
      {
        value: "documentos",
        label: "Gestão de documentos",
      },
      {
        value: "pallet-packaging",
        label: "Palete / embalagem",
      },
      {
        value: "adr-customs",
        label: "ADR / suporte alfandegário",
      },
      {
        value: "outro",
        label: "Outro",
      }
    ],
    consent: "Concordo que ViaNexis processe os dados fornecidos exclusivamente para fins de contato. *",
    submit: "Enviar mensagem",
    submitMailto: "Enviar e-mail",
    intakeDisabled: "O envio de leads on-line está sendo preparado. Use o contato por e-mail ou tente novamente mais tarde.",
    successTitle: "Mensagem recebida",
    successBody: "Obrigado pelo seu interesse. Nossa equipe entrará em contato com você. A ativação do acesso não é automática.",
    newSubmission: "Nova mensagem",
    errors: {
      name: "O nome é obrigatório.",
      company: "Empresa é necessária.",
      email: "O e-mail é obrigatório.",
      emailInvalid: "Insira um endereço de e-mail válido.",
      message: "A mensagem é obrigatória.",
      interest: "Selecione um tipo de interesse.",
      consent: "O consentimento é necessário.",
      submitFailed: "Não foi possível enviar a mensagem. Em vez disso, tente e-mail.",
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
        title: "Pacote de inspeção de autoridade",
        description: "Documentos e eventos vinculados a viagens em um pacote compartilhado com escopo limitado.",
      },
      {
        title: "Escopo/acesso limitado por tempo",
        description: "Acesso limitado baseado em QR — não público.",
      },
      {
        title: "Auditoria",
        description: "Acesso registrado e eventos de compartilhamento.",
      },
      {
        title: "Base pronta para eFTI",
        description: "Base técnica para integração futura — não certificação.",
      }
    ],
  },
  legal: legalPt,
};
