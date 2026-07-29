import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingEs: VisualMarketingContent = {
  skipToContent: "Saltar al contenido",
  brandVisuals: {
    routeLabel: "Ruta activa",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Red ViaNexis",
    networkTitle: "No es sólo la ruta la que conecta.",
    networkSubtitle: "Las paradas, los documentos, las firmas, los mensajes y las decisiones pertenecen al mismo flujo de viaje, en orden temporal, con permisos y un seguimiento de eventos con capacidad de búsqueda.",
    workflowEvents: [
      "Partida",
      "Levantar",
      "Documento",
      "Firma",
      "Espera",
      "Entrega",
      "paquete cerrado"
    ],
  },
  pillars: {
    title: "Tres pilares: un sistema controlado",
    subtitle: "Un flujo móvil fácil de usar para el conductor, control operativo de la empresa y un seguimiento de decisiones auditable.",
    items: [
      {
        title: "Aplicación amigable para el conductor",
        description: "Viajes, paradas, documentos, firmas y eventos en una interfaz de usuario móvil sin conexión.",
      },
      {
        title: "control de la empresa",
        description: "Descripción general del despachador, permisos, alertas y seguimiento de documentos en el portal de la empresa.",
      },
      {
        title: "Operaciones auditables",
        description: "Eventos, firmas y decisiones con un registro con capacidad de búsqueda, sin afirmaciones de seguridad exageradas.",
      }
    ],
  },
  process: {
    title: "Flujo de trabajo del viaje principal",
    subtitle: "Desde la creación hasta un paquete cerrado: pasos estructurados con acceso según permisos.",
    steps: [
      {
        title: "Crear viaje",
        description: "Paradas de recogida y entrega, tareas y requisitos de documentos.",
      },
      {
        title: "Aceptación del conductor",
        description: "Asignación, aceptación e inicio de sesión controlado.",
      },
      {
        title: "Paradas y tareas",
        description: "Múltiples paradas, tareas, eventos y registros de daños.",
      },
      {
        title: "Documentos y firmas",
        description: "Cargue, firme, revise y luego un paquete de viaje cerrado.",
      }
    ],
  },
  homeModules: {
    title: "Superficies del producto",
    subtitle: "Cada superficie comparte el mismo modelo de viaje y documento. Los detalles se encuentran en las páginas del producto.",
    detailsLink: "Detalles",
    items: [
      {
        title: "aplicación de controlador",
        description: "Viajes, paradas, documentos y firmas en un flujo móvil sin conexión. Los conductores siempre ven la siguiente acción requerida.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal de empresa",
        description: "Resumen operativo: viajes activos, documentos faltantes, alertas y permisos en un solo lugar.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Documentos y firmas",
        description: "Trámites vinculados al viaje, estados de firma y paquete de viaje cerrado exportable.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Mensajería y alertas",
        description: "Comunicación vinculada al viaje. Las funciones de notificación se pueden activar como parte del programa piloto.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Auditoría y permisos",
        description: "Acceso basado en roles, eventos con capacidad de búsqueda y acceso de soporte controlado.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Operación sin conexión",
        description: "Los conductores pueden seguir trabajando en redes débiles; Los cambios finalizan cuando se completa la sincronización.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Documentos y firmas",
    subtitle: "Los documentos se vinculan con el viaje, se pueden firmar y revisar y luego cerrarlos en un paquete exportable.",
    steps: [
      {
        title: "Subir o crear",
        description: "CMR, albarán de entrega, fotografía o plantilla digital.",
      },
      {
        title: "Enlace",
        description: "Asignado al contexto del viaje, conductor o vehículo.",
      },
      {
        title: "Firmar y revisar",
        description: "Flujo de estado: pendiente de firma → firmado → en revisión.",
      },
      {
        title: "Paquete de viaje cerrado",
        description: "Documentos y eventos exportables: un resumen auditable.",
      }
    ],
    statuses: [
      "subido",
      "Desaparecido",
      "En espera de firma",
      "Firmado",
      "En revisión"
    ],
    detailsLink: "Documentos en detalle",
  },
  offline: {
    title: "Operación y sincronización sin conexión",
    subtitle: "El trabajo continúa en redes débiles: la finalización se produce después de la sincronización.",
    cards: [
      {
        title: "guardado local",
        description: "Los cambios de controlador se almacenan de forma segura en el dispositivo.",
      },
      {
        title: "Sincronización visible",
        description: "Los cambios pendientes permanecen visibles hasta que vuelva la conectividad.",
      },
      {
        title: "Señalización de conflictos",
        description: "Las fuentes en conflicto se registran y nunca se sobrescriben silenciosamente.",
      }
    ],
    detailsLink: "aplicación de controlador",
  },
  responsibleUse: {
    title: "Uso responsable",
    subtitle: "Límites breves e importantes: los detalles se encuentran en las páginas legales.",
    items: [
      "ViaNexis no es una plataforma eFTI certificada y no promete la aceptación automática de la autoridad.",
      "OCR, IA y traducción son de ayuda: se requiere revisión humana.",
      "El sistema no proporciona asesoramiento jurídico.",
      "No es un servicio de emergencia ni SOS."
    ],
    detailsLink: "Avisos completos de uso responsable",
  },
  pilotCta: {
    title: "Acceso piloto controlado",
    subtitle: "ViaNexis está actualmente disponible a través de un programa piloto con transportistas y conductores seleccionados. El acceso se activa después de una discusión y aprobación individual.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "viaje activo",
    phoneSubtitle: "Demostración · VN-2407-A18",
    phoneRows: [
      {
        label: "Próxima parada",
        value: "Recogida · Budapest (demostración)",
        status: "En ruta",
      },
      {
        label: "Documento",
        value: "CMR – pendiente de firma",
        status: "Acción",
      },
      {
        label: "Sincronizar",
        value: "1 cambio pendiente",
        status: "Desconectado",
      }
    ],
    phoneCaption: "Demostración del producto: datos de muestra anónimos.",
    browserTitle: "Control de operaciones",
    browserSubtitle: "Flota de demostración · vista del despachador",
    browserColumns: [
      "Viaje",
      "Detener",
      "Documento",
      "Estado"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapest (demostración)",
        "Falta CMR",
        "Alerta"
      ],
      [
        "VN-2407-B03",
        "Győr (demostración)",
        "POD firmado",
        "En ruta"
      ],
      [
        "VN-2407-C11",
        "Viena (demostración)",
        "En revisión",
        "Pre-cierre"
      ]
    ],
    browserCaption: "Demostración del portal de la empresa: no datos reales del cliente.",
    driver: {
      navHome: "Hogar",
      navTrips: "Viajes",
      navDocs: "Documentos",
      navMore: "Más",
      tripStatus: "Viaje en progreso",
      nextStopLabel: "Próxima parada",
      nextStopValue: "Recogida · Budapest (demostración)",
      documentLabel: "Documento",
      documentValue: "RMC digital",
      documentAction: "Firma requerida",
      syncLabel: "Conexión",
      syncValue: "Desconectado · 1 pendiente",
    },
    portal: {
      roleLabel: "Rol: Despachador",
      alertLabel: "Alerta",
      alertValue: "VN-2407-A18 · CMR en espera de firma",
      auditLabel: "Último evento de auditoría",
      auditValue: "Estado del documento cambiado · aplicación del conductor",
    },
  },
  statusLabels: {
    available: "Disponible",
    pilot: "Piloto",
    development: "En desarrollo",
  },
  productPage: {
    highlightsTitle: "Capacidades clave",
    capabilitiesTitle: "Qué proporciona esta superficie",
    statusesTitle: "Etiquetas de estado",
  },
  authority: {
    heroSubtitle: "Acceso limitado en tiempo y alcance a pruebas de viaje; no es una plataforma eFTI certificada.",
    foundationBadge: "preparación técnica",
    notCertifiedBadge: "eFTI no certificado",
    foundationTitle: "¿Qué significa preparación?",
    foundationSubtitle: "Datos estructurados e intercambio controlado, sin necesidad de certificado ni permiso.",
    extraDisclaimer: "ViaNexis no promete la aceptación de la autoridad en todos los países. El cumplimiento legal y normativo sigue siendo responsabilidad del cliente.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista de viajes y paradas",
        description: "Viajes activos, próximas acciones y detener tareas.",
        status: "available",
      },
      {
        title: "Documentos y firma",
        description: "Cargas, tareas CMR y captura de firmas.",
        status: "available",
      },
      {
        title: "Trabajo sin conexión",
        description: "Guardado local con sincronización pendiente visible.",
        status: "available",
      },
      {
        title: "Mensajería",
        description: "Comunicación vinculada al viaje para conductores.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista de viajes activa",
        description: "Resumen operativo con paradas y estados.",
        status: "available",
      },
      {
        title: "Alertas de documentos faltantes",
        description: "Los documentos faltantes o sin firmar son visibles inmediatamente.",
        status: "available",
      },
      {
        title: "Permisos",
        description: "Acceso basado en roles a los datos de la empresa.",
        status: "available",
      },
      {
        title: "Eventos de auditoría",
        description: "Seguimiento de documentos y decisiones con capacidad de búsqueda.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Subir y vincular",
        description: "Documentos vinculados al viaje, conductor o vehículo.",
        status: "available",
      },
      {
        title: "Flujo de trabajo de firma",
        description: "En espera de firma → firmado → revisión.",
        status: "pilot",
      },
      {
        title: "Paquete de viaje cerrado",
        description: "Documentos y eventos exportables.",
        status: "pilot",
      },
      {
        title: "Gestión de plantillas",
        description: "Plantillas de documentos centrales: implementación gradual.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Acceso basado en roles",
        description: "Separación del alcance del usuario y de la empresa.",
        status: "available",
      },
      {
        title: "Registro de auditoría",
        description: "Las acciones y decisiones siguen siendo buscables.",
        status: "available",
      },
      {
        title: "Sesión y dispositivo",
        description: "Gestión controlada de sesiones y dispositivos.",
        status: "pilot",
      },
      {
        title: "Acceso a soporte",
        description: "Entrada de soporte registrada por tiempo limitado.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Idioma",
    draftSuffix: "· borrador",
    breadcrumb: "Migaja de pan",
    primaryNav: "Primario",
    importantNotice: "Aviso importante",
  },
};
