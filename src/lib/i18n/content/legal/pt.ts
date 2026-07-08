import type { LegalContent } from "../legal-types";

export const legalPt: LegalContent = {
  versionBadge: "Versão de teste interno – revisão de especialista jurídico em andamento",
  privacy: {
    title: "Aviso de privacidade – versão de teste interno",
    intro: "Este aviso se aplica durante a fase interna de teste e preparação do aplicativo ViaNexis Driver e plataforma relacionada. O serviço não é um download público da Play Store – a preparação para testes internos do Google Play está em andamento. A política de privacidade final e abrangente será publicada após revisão legal.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Controlador de dados",
      body: "ViaNexis — vianexis.eu. Contato de privacidade: info@vianexis.eu",
    },
    scope: {
      title: "Escopo",
      body: "Este aviso abrange o aplicativo móvel ViaNexis Driver, os fluxos de trabalho relacionados ao motorista e à viagem e o formulário de contato na web. O portal de administração e despachante da empresa está sujeito a termos contratuais e de privacidade separados.",
    },
    dataCategories: {
      title: "Dados que processamos",
      items: [
        "Dados da conta e contato: nome, email, telefone, empresa, função, país.",
        "Dados do perfil do motorista: identificadores, função, configurações de idioma, permissões.",
        "Dados de viagem: IDs de viagem, status, paradas, carimbos de data e hora, metadados.",
        "Documentos: CMR, notas de entrega, faturas, fotos, digitalizações, assinaturas digitais.",
        "Mensagens e notificações: comunicação vinculada a viagens e eventos de alerta.",
        "Localização: somente com permissão do usuário e durante o uso (quando em uso), se o recurso estiver ativo.",
        "Metadados de dispositivo e sessão: tipo de dispositivo, versão do sistema operacional, versão do aplicativo, identificadores de sessão.",
        "Diagnósticos e logs: logs técnicos e relatórios de erros — se habilitados.",
        "Dados de troca de paletes e embalagens: tipo, quantidade, falta, danos, notas.",
        "ADR / dados de uso de auxiliares alfandegários: pesquisas, visualizações — não decisões oficiais.",
        "Permissão de notificação e token push futuro: push de produção (FCM) é uma dependência de back-end separada."
      ],
    },
    purposes: {
      title: "Finalidades do processamento",
      items: [
        "Gerenciando fluxos de trabalho de viagem e documentando o desempenho.",
        "Gerenciamento de documentos, assinaturas e montagem de pacotes de evidências.",
        "Comunicação vinculada a trip e notificações operacionais.",
        "Segurança, auditoria e rastreabilidade.",
        "Acesso de suporte controlado de maneira auditável.",
        "Prevenir e documentar disputas legais e comerciais.",
        "Melhorando a operação e solução de problemas do aplicativo.",
        "Testes internos, piloto e avaliação de acesso."
      ],
    },
    sharing: {
      title: "Compartilhamento de dados",
      items: [
        "Empregador/empresa de transporte e usuários administradores/despachadores autorizados — por escopo de locatário.",
        "Dados de viagem e documentos do próprio motorista de acordo com as regras da empresa.",
        "Suporte autorizado à plataforma apenas com acesso auditado, limitado e justificado.",
        "Autoridades ou parceiros apenas por base legal, contrato ou decisão da empresa.",
        "AI/OCR/provedor de tradução somente por meio de integração futura controlada por back-end, se aplicada – com revisão humana.",
        "Não vendemos dados pessoais. Sem impulso de marketing."
      ],
    },
    rights: {
      title: "Seus direitos",
      items: [
        "Acesso aos seus dados — via administrador da empresa ou canal de suporte.",
        "Retificação de dados imprecisos.",
        "Apagamento sempre que legalmente possível e os processos da empresa permitirem.",
        "Objeção ou restrição quando legalmente justificada.",
        "Portabilidade de dados quando a lei aplicável assim o estabelecer.",
        "Reclamação a uma autoridade de supervisão.",
        "Contato: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Notificações",
      body: "O aplicativo usa notificações operacionais – não push de marketing. O texto da tela de bloqueio é protegido por privacidade por padrão. O push de produção (FCM/APNs) e o manuseio de token de dispositivo são dependências de back-end – podem ser parciais ou não ativos durante os testes internos. A permissão de notificação é a escolha do usuário.",
    },
    location: {
      title: "Localização",
      body: "A localização é processada apenas com permissão do usuário e durante o uso (quando em uso), se o recurso estiver ativo — para fins de mapa, posição própria e evidência de viagem. Nenhum rastreamento em segundo plano no estado atual. A localização não garante a conformidade da rota ou conformidade legal.",
    },
    importantNotices: {
      title: "Avisos importantes",
      items: [
        "AI, OCR e tradução automática são ferramentas auxiliares – é necessária revisão humana.",
        "ADR as informações ajudam - não substituem fontes oficiais ou legislação.",
        "ViaNexis não é uma plataforma eFTI certificada.",
        "Não é um serviço de emergência ou SOS.",
        "Os documentos digitais não possuem automaticamente força probatória legal.",
        "O serviço está em teste/preparação interna – não em um sistema público de produção ao vivo."
      ],
    },
    dataContact: {
      title: "Contato de privacidade",
      body: "Perguntas sobre privacidade: info@vianexis.eu. O contato final do controlador aparecerá no aviso publicado.",
    },
    playUrl: "URL de privacidade estável do Play Console: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Termos de uso – versão de teste interno",
    intro: "Estes termos se aplicam durante os testes internos e a fase piloto da plataforma ViaNexis. O serviço não é um produto público da Play Store – a preparação para testes internos do Google Play está em andamento. Os termos finais serão publicados após revisão legal.",
    sections: [
      {
        title: "Natureza do serviço",
        body: "ViaNexis fornece evidências digitais de transporte e uma plataforma de operações de motorista para empresas de transporte. Base pronta para eFTI — não é uma plataforma eFTI certificada. Não promete aceitação de autoridade em todos os países.",
      },
      {
        title: "Testes internos",
        body: "O acesso é controlado – via piloto ou convite de teste interno. Registro público não automático. Backend, notificações push e algumas integrações são conectadas gradualmente.",
      },
      {
        title: "Responsabilidade do usuário",
        body: "O motorista e a empresa são responsáveis ​​pela viagem, documentos, ADR e conformidade alfandegária. O aplicativo suporta documentação – não substitui aconselhamento jurídico, especialistas ADR ou autoridades.",
      },
      {
        title: "Disponibilidade",
        body: "Durante os testes internos, o tempo de atividade e os recursos podem variar. SLA específico se aplica somente sob contrato.",
      },
      {
        title: "Limitação de responsabilidade",
        body: "ViaNexis não promete força probatória legal automática, OCR/AI/tradução perfeita, serviços de emergência ou prontidão para envio de produção se ainda for uma dependência de back-end.",
      }
    ],
  },
  legalNotice: {
    title: "Aviso legal — versão de teste interno",
    intro: "Esta página descreve os testes internos da plataforma ViaNexis e o status de preparação. Ele não substitui a documentação legal completa ou os termos contratuais.",
    sections: [
      {
        title: "Natureza da plataforma",
        body: "Evidências de transporte digital, gerenciamento de documentos, mensagens, notificações e controle da empresa em um único sistema. Base pronta para eFTI — não é uma plataforma eFTI certificada.",
      },
      {
        title: "Status de teste interno",
        body: "Preparação para testes internos do Google Play em andamento. Samsung UAT e preparação para lançamento em andamento. Não afirmamos que o aplicativo esteja disponível publicamente na Play Store.",
      },
      {
        title: "Limitação de responsabilidade",
        body: "Não prometemos aceitação de autoridade, força probatória legal automática, AI/OCR/tradução impecável, serviços de emergência ou prontidão total para produção.",
      },
      {
        title: "Contato",
        body: "Questões jurídicas e de privacidade: info@vianexis.eu",
      }
    ],
    relatedDocs: "Documentos relacionados",
  },
  disclaimersPage: {
    title: "Uso responsável – isenções de responsabilidade",
    intro: "Os textos abaixo descrevem limites importantes de uso da plataforma. Versão de testes internos — não substitui aconselhamento jurídico.",
    items: [
      {
        id: "endereço",
        title: "ADR — uso responsável",
        body: "ADR e os dados do túnel são informações auxiliares. Fontes oficiais, tabelas e regras locais vigentes devem sempre ser verificadas. ViaNexis não substitui a legislação, o treinamento de ADR, o diretor do DG da empresa ou decisões de autoridade.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR e tradução",
        body: "Ferramentas de apoio — é necessária revisão humana. O documento e a mensagem originais permanecem primários. Não é aconselhamento jurídico e nem tradução juramentada.",
      },
      {
        id: "notificações",
        title: "Notificações e push",
        body: "Notificações operacionais – não push de marketing. Tela de bloqueio segura para privacidade por padrão. O push de produção (FCM/APNs) é uma dependência de back-end – pode não estar ativo durante os testes internos.",
      },
      {
        id: "truck-map",
        title: "Mapa de caminhão/dados da comunidade",
        body: "Mapa e rota para orientação operacional — não garante restrições legais, licenças ou precisão dos dados da comunidade. Não é um substituto para a navegação oficial.",
      },
      {
        id: "palete",
        title: "Comprovante de troca de paletes/embalagens",
        body: "A gravação apoia a documentação da disputa. A seção de evidências PDF no pacote de viagem concluído não está totalmente pronta em todos os casos. Não decide disputas.",
      },
      {
        id: "legal-validity",
        title: "Validade legal/documentos",
        body: "Documentos e assinaturas digitais não possuem automaticamente força probatória legal. A aceitação varia de acordo com o país e o cliente.",
      },
      {
        id: "efti",
        title: "eFTI e compartilhamento de autoridade",
        body: "ViaNexis não é uma plataforma eFTI certificada. Não promete aceitação de autoridade em todos os países. A base pronta para eFTI é a preparação técnica - não um certificado.",
      }
    ],
  },
};
