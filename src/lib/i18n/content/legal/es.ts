import type { LegalContent } from "../legal-types";

export const legalEs: LegalContent = {
  versionBadge: "Versión de prueba interna: revisión de expertos legales en curso · Esta traducción está en revisión.",
  privacy: {
    title: "Aviso de privacidad: versión de prueba interna",
    intro: "Este aviso se aplica durante la fase de preparación y prueba interna de la aplicación ViaNexis Driver y la plataforma relacionada. El servicio no es una descarga pública de Play Store: la preparación para las pruebas internas de Google Play está en progreso. La política de privacidad integral final se publicará después de la revisión legal.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Responsable del tratamiento",
      body: "ViaNexis — vianexis.eu. Contacto de privacidad: info@vianexis.eu",
    },
    scope: {
      title: "Alcance",
      body: "Este aviso cubre la aplicación móvil ViaNexis Driver, los flujos de trabajo relacionados con el conductor y el viaje, y el formulario de contacto web. El portal de administrador y despachador de la empresa está sujeto a términos contractuales y de privacidad separados.",
    },
    dataCategories: {
      title: "Datos que procesamos",
      items: [
        "Datos de cuenta y contacto: nombre, correo electrónico, teléfono, empresa, rol, país.",
        "Datos del perfil del conductor: identificadores, rol, configuración de idioma, permisos.",
        "Datos de viaje: ID de viaje, estado, paradas, marcas de tiempo, metadatos.",
        "Documentos: CMR, albaranes, facturas, fotografías, escaneos, firmas digitales.",
        "Mensajes y notificaciones: comunicación vinculada al viaje y eventos de alerta.",
        "Ubicación: solo con permiso del usuario y mientras está en uso (when-in-use), si la función está activa.",
        "Metadatos del dispositivo y de la sesión: tipo de dispositivo, versión del sistema operativo, versión de la aplicación, identificadores de sesión.",
        "Diagnósticos y registros: registros técnicos e informes de errores, si están habilitados.",
        "Datos de intercambio de pallets y embalajes: tipo, cantidad, faltantes, daños, notas.",
        "ADR / datos de uso del asistente de aduanas: búsquedas, vistas, no decisiones oficiales.",
        "Permiso de notificación y token de envío futuro: el envío de producción (FCM) es una dependencia de backend independiente."
      ],
    },
    purposes: {
      title: "Finalidades del tratamiento",
      items: [
        "Gestionar los flujos de trabajo de los viajes y documentar el rendimiento.",
        "Gestión documental, firmas y armado de paquetes de pruebas.",
        "Comunicación vinculada al viaje y notificaciones operativas.",
        "Seguridad, auditoría y trazabilidad.",
        "Acceso controlado al soporte de forma auditable.",
        "Prevenir y documentar disputas legales y comerciales.",
        "Mejora del funcionamiento de la aplicación y resolución de problemas.",
        "Pruebas internas, piloto y evaluación de acceso."
      ],
    },
    sharing: {
      title: "intercambio de datos",
      items: [
        "Empleador/empresa de transporte y usuarios administradores/despachadores autorizados, por ámbito de inquilino.",
        "Viaje del propio conductor y datos del documento según normas de la empresa.",
        "Soporte de plataforma autorizada únicamente con acceso auditado, limitado y justificado.",
        "Autoridades o socios únicamente por base legal, contrato o decisión de la empresa.",
        "AI/OCR/proveedor de traducción solo a través de una integración futura controlada por el backend, si se aplica, con revisión humana.",
        "No vendemos datos personales. Sin impulso de marketing."
      ],
    },
    rights: {
      title: "Tus derechos",
      items: [
        "Acceso a sus datos: a través del administrador de la empresa o del canal de soporte.",
        "Rectificación de datos inexactos.",
        "Supresión cuando sea legalmente posible y los procesos de la empresa lo permitan.",
        "Objeción o restricción cuando esté legalmente justificada.",
        "Portabilidad de los datos cuando la legislación aplicable lo establezca.",
        "Denuncia ante una autoridad de control.",
        "Contacto: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Notificaciones",
      body: "La aplicación utiliza notificaciones operativas, no impulsos de marketing. El texto de la pantalla de bloqueo es seguro para la privacidad de forma predeterminada. El impulso de producción (FCM/APNs) y el manejo de tokens de dispositivo son dependencias de backend; pueden ser parciales o no estar activos durante las pruebas internas. El permiso de notificación es elección del usuario.",
    },
    location: {
      title: "Ubicación",
      body: "La ubicación se procesa solo con el permiso del usuario y mientras está en uso (cuando está en uso), si la función está activa, para fines de mapa, posición propia y evidencia de viaje. No hay seguimiento en segundo plano en el estado actual. La ubicación no garantiza el cumplimiento de la ruta ni el cumplimiento legal.",
    },
    importantNotices: {
      title: "Avisos importantes",
      items: [
        "AI, OCR y la traducción automática son herramientas de asistencia: se requiere revisión humana.",
        "La información ADR es de ayuda: no reemplaza las fuentes oficiales ni la legislación.",
        "ViaNexis no es una plataforma eFTI certificada.",
        "No es un servicio de emergencia ni SOS.",
        "Los documentos digitales no tienen automáticamente fuerza probatoria legal.",
        "El servicio se encuentra en prueba/preparación interna, no en un sistema público de producción en vivo."
      ],
    },
    dataContact: {
      title: "Contacto de privacidad",
      body: "Preguntas sobre privacidad: info@vianexis.eu. El contacto final del controlador aparecerá en el aviso publicado.",
    },
    playUrl: "URL de privacidad de Play Console estable: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Condiciones de uso: versión de prueba interna",
    intro: "Estos términos se aplican durante la fase piloto y de prueba interna de la plataforma ViaNexis. El servicio no es un producto público de Play Store: la preparación para las pruebas internas de Google Play está en progreso. Los términos finales se publicarán después de la revisión legal.",
    sections: [
      {
        title: "Naturaleza del servicio",
        body: "ViaNexis proporciona evidencia de transporte digital y una plataforma de operaciones de conductores para empresas de transporte. Base lista para eFTI: no es una plataforma eFTI certificada. No promete aceptación de la autoridad en todos los países.",
      },
      {
        title: "Pruebas internas",
        body: "El acceso está controlado, mediante invitación a prueba piloto o interna. Registro público no automático. El backend, las notificaciones push y algunas integraciones se conectan gradualmente.",
      },
      {
        title: "Responsabilidad del usuario",
        body: "El conductor y la empresa son responsables del viaje, la documentación, ADR y el cumplimiento aduanero. La aplicación admite documentación: no reemplaza el asesoramiento legal, los ADR expertos ni las autoridades.",
      },
      {
        title: "Disponibilidad",
        body: "Durante las pruebas internas, el tiempo de actividad y las funciones pueden variar. El SLA específico se aplica solo bajo contrato.",
      },
      {
        title: "Limitación de responsabilidad",
        body: "ViaNexis no promete fuerza probatoria legal automática, OCR/AI/traducción impecable, servicios de emergencia o preparación para la producción si todavía es una dependencia de backend.",
      }
    ],
  },
  legalNotice: {
    title: "Aviso legal — versión de prueba interna",
    intro: "Esta página describe el estado de preparación y pruebas internas de la plataforma ViaNexis. No reemplaza la documentación legal completa ni los términos contractuales.",
    sections: [
      {
        title: "Naturaleza de la plataforma",
        body: "Pruebas de transporte digitales, gestión documental, mensajería, notificaciones y control de la empresa en un solo sistema. Base lista para eFTI: no es una plataforma eFTI certificada.",
      },
      {
        title: "Estado de las pruebas internas",
        body: "Access is currently available through a controlled pilot program. No public Play Store download.",
      },
      {
        title: "Limitación de responsabilidad",
        body: "No prometemos aceptación de autoridad, fuerza probatoria legal automática, AI/OCR/traducción impecable, servicios de emergencia o preparación para la producción total.",
      },
      {
        title: "Contacto",
        body: "Preguntas legales y de privacidad: info@vianexis.eu",
      }
    ],
    relatedDocs: "Documentos relacionados",
  },
  disclaimersPage: {
    title: "Uso responsable: descargos de responsabilidad",
    intro: "Los textos a continuación describen límites importantes del uso de la plataforma. Versión de prueba interna: no reemplaza el asesoramiento legal.",
    items: [
      {
        id: "dirección",
        title: "ADR — uso responsable",
        body: "ADR y los datos del túnel son información de ayuda. Siempre se deben verificar las fuentes oficiales, las tablas y las normas locales vigentes. ViaNexis no reemplaza la legislación, la formación de ADR, el responsable de la DG de la empresa ni las decisiones de las autoridades.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR y traducción",
        body: "Herramientas de asistencia: se requiere revisión humana. El documento y el mensaje originales siguen siendo primarios. Ni asesoramiento jurídico ni traducción jurada.",
      },
      {
        id: "notificaciones",
        title: "Notificaciones y push",
        body: "Notificaciones operativas, no impulso de marketing. Pantalla de bloqueo segura para la privacidad de forma predeterminada. El impulso de producción (FCM/APNs) es una dependencia de backend; es posible que no esté activo durante las pruebas internas.",
      },
      {
        id: "truck-map",
        title: "Mapa de camiones/datos de la comunidad",
        body: "Mapa y ruta para orientación operativa: no garantiza restricciones legales, permisos ni precisión de los datos de la comunidad. No sustituye a la navegación oficial.",
      },
      {
        id: "paleta",
        title: "Pruebas de intercambio de pallets/embalajes",
        body: "La grabación respalda la documentación de disputas. La sección de evidencia PDF del paquete de viaje completo no está completamente lista en todos los casos. No decide disputas.",
      },
      {
        id: "legal-validity",
        title: "Validez legal / documentos",
        body: "Los documentos y firmas digitales no tienen automáticamente fuerza probatoria legal. La aceptación varía según el país y el cliente.",
      },
      {
        id: "efti",
        title: "eFTI y compartir autoridad",
        body: "ViaNexis no es una plataforma eFTI certificada. No promete aceptación de la autoridad en todos los países. La base eFTI-ready es preparación técnica, no un certificado.",
      }
    ],
  },
};
