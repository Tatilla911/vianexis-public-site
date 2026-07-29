import type { SiteContent } from "../types";
import { legalEs } from "./legal/es";

export const contentEs: SiteContent = {
  meta: {
    title: "ViaNexis Operaciones de transporte de conductor y empresa",
    description: "Aplicación para conductores, control de la empresa, gestión de documentos, mensajería, notificaciones y flujos de trabajo de viajes multilingües en un solo sistema. Preparación de pruebas internas en curso.",
    ogLocale: "es_ES",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Características",
    driverApp: "aplicación de controlador",
    companyPortal: "Portal de empresa",
    documents: "Documentos",
    authorityEfti: "Autoridad / eFTI",
    security: "Seguridad",
    pilot: "Acceso piloto",
    contact: "Contacto",
    requestAccess: "Solicitar acceso",
    menuOpen: "abrir menú",
  },
  footer: {
    tagline: "Plataforma digital de pruebas de transporte y operaciones de conductores para empresas de transporte. Base lista para eFTI: no es una plataforma eFTI certificada.",
    product: "Producto",
    legal: "Legal",
    legalNotice: "Aviso legal",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
    disclaimers: "Uso responsable",
    dataContact: "Contacto de protección de datos",
    copyright: "No es una plataforma eFTI certificada. No promete aceptación de autoridad, fuerza probatoria legal automática, OCR/AI/traducción impecable ni servicios de emergencia/SOS. No hay descarga pública de Play Store.",
  },
  hero: {
    title: "ViaNexis — plataforma de operaciones de conductores y evidencia de transporte digital",
    subtitle: "Aplicación para conductores, control de la empresa, gestión de documentos, mensajería, notificaciones y flujos de trabajo de viajes multilingües en un solo sistema.",
    primaryCta: "Contáctenos",
    secondaryCta: "Preparación para pruebas internas en progreso",
    stats: [
      {
        label: "aplicación de controlador",
        value: "Viaje + sin conexión",
      },
      {
        label: "Documentos",
        value: "CMR + auditoría",
      },
      {
        label: "Mensajería",
        value: "Plurilingüe",
      },
      {
        label: "Estado",
        value: "Preparación para exámenes internos",
      }
    ],
  },
    platformStatus: {
    title: "Acceso piloto controlado",
    items: [
      "ViaNexis está actualmente disponible a través de un programa piloto con transportistas y conductores seleccionados.",
      "El acceso se activa después de una discusión y aprobación individual.",
      "No se permiten descargas de tiendas de aplicaciones públicas.",
    ],
    disclaimer:
      "ViaNexis no afirma que el sistema esté oficialmente aceptado o certificado en todos los países.",
  },

  moduleLabels: {
    goal: "Meta",
    appFoundation: "Base del lado de la aplicación",
    backendDependency: "Dependencia de backend/administrador",
    important: "Importante",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "aplicación de controlador",
      goal: "Permita que los conductores manejen tareas, documentos y eventos relacionados con el viaje en dispositivos móviles, en línea y fuera de línea.",
      appFoundation: "Lista de viajes y detalles, carga de documentos, captura de firmas, listas de verificación, registro de incidentes, guardado y sincronización sin conexión, sesión protegida PIN.",
      backendDependency: "Live API, alcance del inquilino, sincronización de viajes y documentos, resolución de configuración de la empresa.",
    },
    {
      id: "company-admin",
      title: "Control de empresa/administrador",
      goal: "Permita que las empresas de transporte administren viajes, usuarios, permisos y flujos de trabajo desde un solo portal.",
      appFoundation: "Los datos y acciones del lado del conductor reflejan las reglas de la empresa.",
      backendDependency: "Portal web de la empresa, aplicación de administración de la plataforma, roles, gestión de viajes, requisitos de documentos, configuración de intercambio de la empresa.",
    },
    {
      id: "cmr-documents",
      title: "CMR digitales y documentos",
      goal: "Documentos vinculados al viaje (CMR, albarán de entrega, factura, documentación del vehículo y del conductor) gestionados de forma estructurada.",
      appFoundation: "Carga de documentos, escaneo/fotografía, asignación de viajes, tareas basadas en requisitos, concepto de documento principal.",
      backendDependency: "Almacenamiento de documentos, metadatos, reglas de firma, intercambio de autoridad con límites de alcance.",
      disclaimer: "Los documentos digitales no tienen automáticamente fuerza probatoria legal. La aceptación varía según el país y el cliente.",
    },
    {
      id: "completed-package",
      title: "Paquete de viaje completo",
      goal: "Resumir la evidencia del viaje completado en un paquete exportable.",
      appFoundation: "Cierre de viaje, datos locales y eventos sincronizados como base para el armado del paquete.",
      backendDependency: "Generación de paquete de viaje completada, exportación PDF, exportación de auditoría. Algunas secciones (por ejemplo, paleta/embalaje PDF) siguen siendo dependencias.",
      disclaimer: "El paquete admite documentación; no reemplaza la evaluación jurídica ni los procedimientos de autoridad de la empresa.",
    },
    {
      id: "messaging-notifications",
      title: "Mensajería y notificaciones",
      goal: "Comunicación vinculada al viaje y alertas para eventos importantes del conductor.",
      appFoundation: "Lista de mensajes, hilos vinculados a viajes, base de notificaciones del lado de la aplicación. Utilizable para: mensaje nuevo, cambio de viaje, tarea de documento, problema de sincronización.",
      backendDependency: "Impulso de producción (FCM/APNs), registro de token de dispositivo, envío del lado del servidor: dependencia separada, aún no disponible.",
      disclaimer: "La pantalla de destino se abre después de PIN. El impulso de la producción no pretende que todos los eventos lleguen instantáneamente.",
    },
    {
      id: "pallet-packaging",
      title: "Intercambio de pallets y embalajes",
      goal: "Registre los intercambios de paletas y embalajes por parada con cantidades, escasez, daños y disputas.",
      appFoundation: "Módulos de palet y embalaje separados. Conmutable por la empresa. La empresa puede preestablecer elementos; El conductor puede agregar embalaje personalizado si está permitido. Guardar y sincronizar sin conexión.",
      backendDependency: "Configuración de Exchange API, sincronización de registros, interfaz de usuario de administración del portal, sección del paquete completo PDF; esta última es una dependencia.",
      disclaimer: "La sección de evidencia PDF no está completamente lista en todos los casos. La grabación respalda la documentación de disputas pero no decide las disputas.",
    },
    {
      id: "adr-border",
      title: "ADR / soporte fronterizo",
      goal: "Información de ayuda rápida para ADR y el contexto fronterizo/aduanero, junto con la verificación de fuentes oficiales.",
      appFoundation: "Información ADR, búsqueda de números ONU, ayuda de código de túnel, metadatos fronterizos/aduaneros vinculados a viajes.",
      backendDependency: "ADR actualizaciones de bases de datos, metadatos de reglas específicas de cada país, datos de puntos de control fronterizos.",
      disclaimer: "ADR y los datos del túnel son información de ayuda. La aplicación no reemplaza la legislación, la formación, el responsable de la DG de la empresa ni las decisiones de las autoridades.",
    },
    {
      id: "truck-map",
      title: "Fundación del mapa de camiones",
      goal: "Resumen de flotas y viajes en el mapa: orientación operativa.",
      appFoundation: "Descripción general basada en mapas, visualización del contexto del viaje y del vehículo.",
      backendDependency: "Integración de proveedores de telemática, proveedor de enrutamiento, posición en vivo: integración gradual.",
      disclaimer: "El mapa no garantiza el cumplimiento de restricciones o permisos legales.",
    },
    {
      id: "plurilingüe",
      title: "Operación multilingüe",
      goal: "Equipos multilingües en una plataforma.",
      appFoundation: "Interfaz de usuario multilingüe de la aplicación del conductor, retención de mensajes originales, traducción como asistencia.",
      backendDependency: "Ampliación de la configuración regional del portal y del sitio público, flujo de trabajo de revisión de traducción.",
      disclaimer: "La traducción automática o AI es de ayuda; Se requiere revisión humana. El documento original sigue siendo primario.",
    },
    {
      id: "audit-support",
      title: "Acceso a auditoría y soporte",
      goal: "Registro rastreable; Acceso controlado al soporte para la resolución de problemas.",
      appFoundation: "Registro de eventos para acciones de viajes y documentos; Sesiones de soporte auditables.",
      backendDependency: "Exportación de auditoría, política de acceso de soporte, matriz de permisos empresariales.",
      disclaimer: "El registro de auditoría no es una prueba legal automática.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — uso responsable",
      body: "ADR y los datos del túnel son información de ayuda. Siempre se deben verificar las fuentes oficiales, las tablas y las normas locales vigentes. ViaNexis no reemplaza la legislación, la capacitación de ADR, el responsable de mercancías peligrosas de la empresa ni las decisiones de las autoridades.",
    },
    aiOcr: {
      title: "AI, OCR y traducción",
      body: "AI resumen, OCR y traducción automática son herramientas de asistencia. Se requiere revisión humana. El documento y el mensaje originales siguen siendo primarios. Ni asesoramiento jurídico ni traducción jurada.",
    },
    efti: {
      title: "eFTI y compartir autoridad",
      body: "ViaNexis no es una plataforma eFTI certificada. No promete aceptación de la autoridad en todos los países. La base eFTI-ready significa preparación técnica, no un certificado o licencia.",
    },
  },
  home: {
    problem: {
      title: "Desafíos logísticos cotidianos",
      subtitle: "Cuando los documentos, las firmas y los eventos están dispersos, la trazabilidad y las pruebas se ven afectadas.",
      cards: [
        {
          title: "Documentos dispersos",
          description: "Documentos de viaje en correo electrónico, chat o en papel: difíciles de vincular a eventos reales.",
        },
        {
          title: "Firmas faltantes",
          description: "Las firmas tardías o faltantes retrasan el cierre y aumentan el riesgo de disputas.",
        },
        {
          title: "Eventos difíciles de probar",
          description: "Recogida, entrega, intercambio de palets, incidencias: sin registros estructurados, difíciles de rastrear.",
        },
        {
          title: "Equipos multilingües",
          description: "Malentendidos diarios en los mensajes: se requiere conservación del texto original y traducción revisada.",
        }
      ],
    },
    modules: {
      title: "Módulos de plataforma",
      subtitle: "Objetivo, base del lado de la aplicación, dependencia del backend/administrador, con redacción legalmente segura.",
    },
    pallet: {
      title: "Intercambio de pallets y embalajes",
      subtitle: "Módulos separados, conmutables por la empresa: guardar fuera de línea para la auditoría.",
    },
    notifications: {
      title: "Mensajería y notificaciones",
      subtitle: "Listo para la base del lado de la aplicación: el impulso de producción es una dependencia de backend independiente.",
      cards: [
        {
          title: "Tipos de eventos de notificación",
          description: "Mensaje nuevo, cambio de viaje, tarea de documento, problema de sincronización.",
        },
        {
          title: "Toque enrutamiento y PIN",
          description: "Abrir la pantalla de destino desde la notificación; enlace profundo después de PIN.",
        },
        {
          title: "Pantalla de bloqueo segura para la privacidad",
          description: "El contenido completo del documento o mensaje no se muestra en la pantalla de bloqueo de forma predeterminada.",
        }
      ],
      backendDepTitle: "Dependencia de backend",
      backendDepBody: "El impulso de producción (FCM/APNs), el registro del token del dispositivo y el envío del lado del servidor aún no están disponibles; se requiere una integración por separado.",
    },
    disclaimersSection: {
      title: "Uso responsable: avisos importantes",
    },
    security: {
      title: "Protección y control",
      subtitle: "Protección de empresas y conductores con documentación estructurada.",
      cards: [
        {
          title: "Protección de la empresa",
          description: "Documentación basada en requisitos, eventos auditables, acceso controlado.",
        },
        {
          title: "Protección del conductor",
          description: "Proceso estructurado para documentar eventos en disputas.",
        },
        {
          title: "Columna vertebral de la documentación",
          description: "Artículos y eventos vinculados a viajes en un solo sistema.",
        },
        {
          title: "Eventos auditables",
          description: "Quién hizo qué y cuándo: registrado y con capacidad de búsqueda.",
        }
      ],
      notPromiseTitle: "No es una promesa",
      notPromiseBody: "ViaNexis no promete fuerza probatoria legal automática. La evaluación jurídica depende del contexto.",
    },
    contact: {
      title: "Contacto y pruebas internas",
      subtitle: "Acceso controlado: no registro automático ni descarga pública de Play.",
      body: "Actualmente, el acceso está disponible a través de un programa piloto controlado. La activación sigue una revisión individual.",
      consentNote: "El sistema maneja documentos, flujos de trabajo de conductores, datos de la empresa y permisos; cada acceso se revisa individualmente.",
      contactLink: "Contáctanos →",
    },
  },
  contactForm: {
    title: "Contáctenos",
    subtitle: "Interés en la plataforma ViaNexis: no registro automático.",
    name: "Nombre *",
    company: "Compañía *",
    email: "Correo electrónico *",
    phone: "Teléfono",
    message: "Mensaje *",
    interestType: "Tipo de interés *",
    interestPlaceholder: "Seleccionar...",
    interestOptions: [
      {
        value: "driver-app",
        label: "aplicación de controlador",
      },
      {
        value: "company-admin",
        label: "Plataforma de empresa/administración",
      },
      {
        value: "documentos",
        label: "Gestión de documentos",
      },
      {
        value: "pallet-packaging",
        label: "Palet / embalaje",
      },
      {
        value: "adr-customs",
        label: "ADR / soporte aduanero",
      },
      {
        value: "otro",
        label: "Otro",
      }
    ],
    consent: "Acepto que ViaNexis procese los datos proporcionados únicamente con fines de contacto. *",
    submit: "enviar mensaje",
    submitMailto: "Enviar correo electrónico",
    intakeDisabled: "Se está preparando la presentación de clientes potenciales en línea. Utilice el contacto por correo electrónico o vuelva a intentarlo más tarde.",
    successTitle: "Mensaje recibido",
    successBody: "Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo. La activación del acceso no es automática.",
    newSubmission: "Nuevo mensaje",
    errors: {
      name: "El nombre es obligatorio.",
      company: "Se requiere empresa.",
      email: "Se requiere correo electrónico.",
      emailInvalid: "Ingrese una dirección de correo electrónico válida.",
      message: "Se requiere mensaje.",
      interest: "Seleccione un tipo de interés.",
      consent: "Se requiere consentimiento.",
      submitFailed: "No se pudo enviar el mensaje. Pruebe con el correo electrónico.",
    },
  },
  applicationForms: {
    common: {
      privacy: "Acepto la política de privacidad y consiento el tratamiento de datos. *",
      submit: "Enviar solicitud",
      submitting: "Submitting…",
      intakeDisabled: "Se están preparando solicitudes en línea. Ponte en contacto con support@vianexis.eu o vuelve a intentarlo más tarde.",
      successTitle: "Solicitud recibida",
      successBody: "Gracias. Su solicitud está bajo revisión. El acceso no se otorga hasta que un administrador de ViaNexis lo apruebe.",
      newSubmission: "Nueva aplicación",
      referenceLabel: "Referencia de la aplicación",
      submittedAtLabel: "Submitted at",
      statusLabel: "Status",
      statusUnderReview: "Under review",
      nextStep: "Nos comunicaremos con usted después de la revisión. Guarde la referencia de su aplicación para obtener soporte.",
      captchaHint: "Complete el control de seguridad antes de enviar.",
      supportContact: "¿Necesita ayuda? Contacte con {email}.",
      errors: {
        required: "Este campo es obligatorio.",
        email: "Se requiere correo electrónico.",
        emailInvalid: "Ingrese una dirección de correo electrónico válida.",
        password: "La contraseña debe tener al menos 8 caracteres.",
        privacy: "Se requiere aceptación de privacidad.",
        submitFailed: "No se pudo enviar la solicitud. Vuelve a intentarlo más tarde.",
        duplicate: "Ya hay una solicitud en curso para esta empresa o correo electrónico.",
        duplicateWithRef: "Ya hay una solicitud en curso para esta empresa o correo (referencia: {reference}).",
        captchaRequired: "Complete el control de seguridad para continuar.",
        captchaInvalid: "La verificación de seguridad expiró o falló. Intentar otra vez.",
        spam: "Envío bloqueado.",
        network: "Error de red. Comprueba tu conexión y vuelve a intentarlo.",
      },
    },
    company: { title: "Solicitud de empresa", subtitle: "Solicite acceso a la plataforma de la empresa ViaNexis.", companyName: "Nombre de empresa *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Nombre de contacto *", contactEmail: "Correo electrónico de contacto *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "Módulos de interés", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Portal de despacho" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Flota / taller" },{ value: "pallet_packaging", label: "Palet / embalaje" },{ value: "external_shipper_receiver", label: "Transportista/receptor externo" }], notes: "Notes" },
    driver: { title: "Aplicación de controlador", subtitle: "Autorregistro: pendiente de aprobación antes de iniciar sesión.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Nombre de la empresa (opcional)", companyCode: "Invitación/código de empresa (opcional)", licenseNotes: "Licencia / ADR / Notas GKI (opcional)" },
    partner: { title: "Interés del socio", subtitle: "Consulta del remitente, destinatario, almacén o socio aduanero.", companyName: "Nombre de empresa *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Agente de aduana" },{ value: "other_partner", label: "Otro socio" }], contactName: "Nombre de contacto *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Paquete de inspección de la autoridad",
        description: "Documentos y eventos vinculados a viajes en un paquete compartido de alcance limitado.",
      },
      {
        title: "Alcance/acceso limitado por tiempo",
        description: "Acceso limitado basado en QR: no público.",
      },
      {
        title: "Auditoría",
        description: "Acceso registrado y eventos compartidos.",
      },
      {
        title: "eFTI-base lista",
        description: "Base técnica para la integración futura, no certificación.",
      }
    ],
  },
  legal: legalEs,
};
