import type { SiteContent } from "../types";
import { legalRo } from "./legal/ro";

export const contentRo: SiteContent = {
  meta: {
    title: "ViaNexis Operațiuni de transport șofer și companie",
    description: "Aplicația șoferului, controlul companiei, gestionarea documentelor, mesageria, notificări și fluxuri de lucru pentru călătorii în mai multe limbi într-un singur sistem. Pregătirea testării interne în curs.",
    ogLocale: "ro_RO",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Caracteristici",
    driverApp: "Aplicația pentru șofer",
    companyPortal: "Portalul companiei",
    documents: "Documente",
    authorityEfti: "Autoritate / eFTI",
    security: "Securitate",
    pilot: "Acces pilot",
    contact: "Contact",
    requestAccess: "Solicitați acces",
    menuOpen: "Deschide meniul",
  },
  footer: {
    tagline: "Dovezi digitale de transport și platformă de operațiuni șofer pentru companiile de transport. Fond de ten eFTI-gata - nu este o platformă certificată eFTI.",
    product: "Produs",
    legal: "Legal",
    legalNotice: "Aviz legal",
    privacy: "Politica de confidențialitate",
    terms: "Termeni de utilizare",
    disclaimers: "Utilizare responsabilă",
    dataContact: "Contact pentru protecția datelor",
    copyright: "Nu este o platformă certificată eFTI. Nu promite acceptarea autorității, forța probantă legală automată, servicii impecabile OCR/AI/traducere sau de urgență/SOS. Nicio descărcare publică din Magazinul Play.",
  },
  hero: {
    title: "ViaNexis — platformă digitală de evidență a transportului și operațiuni ale șoferului",
    subtitle: "Aplicația șoferului, controlul companiei, gestionarea documentelor, mesageria, notificări și fluxuri de lucru pentru călătorii în mai multe limbi într-un singur sistem.",
    primaryCta: "Contactaţi-ne",
    secondaryCta: "Pregătirea testării interne în curs",
    stats: [
      {
        label: "Aplicația pentru șofer",
        value: "Călătorie + offline",
      },
      {
        label: "Documente",
        value: "CMR + audit",
      },
      {
        label: "Mesaje",
        value: "Multilingv",
      },
      {
        label: "Stare",
        value: "Pregătirea testului intern",
      }
    ],
  },
  platformStatus: {
    title: "Starea actuală",
    items: [
      "Pregătirea pentru testarea internă Google Play este în desfășurare — nu o descărcare în magazin public.",
      "Pregătirea pentru lansarea aplicației pentru șofer și Samsung UAT în curs.",
      "Backend-ul de producție, notificările push și integrările de parteneri sunt conectate treptat."
    ],
    disclaimer: "ViaNexis nu pretinde că sistemul este activ, certificat sau acceptat oficial în fiecare țară.",
  },
  moduleLabels: {
    goal: "Scop",
    appFoundation: "Fundație din partea aplicației",
    backendDependency: "Dependență de backend/administrator",
    important: "Important",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplicația pentru șofer",
      goal: "Permiteți șoferilor să se ocupe de sarcinile, documentele și evenimentele legate de călătorie pe mobil — online și offline.",
      appFoundation: "Lista și detaliile călătoriei, încărcarea documentelor, capturarea semnăturii, liste de verificare, înregistrarea incidentelor, salvare și sincronizare offline, sesiune protejată PIN.",
      backendDependency: "API live, domeniul de aplicare a chiriașului, sincronizarea călătoriei și a documentelor, rezoluția setărilor companiei.",
    },
    {
      id: "company-admin",
      title: "Companie/Control administrativ",
      goal: "Permiteți companiilor de transport să gestioneze călătoriile, utilizatorii, permisiunile și fluxurile de lucru dintr-un singur portal.",
      appFoundation: "Datele și acțiunile din partea șoferului reflectă regulile companiei.",
      backendDependency: "Portalul companiei web, aplicația de administrare a platformei, roluri, managementul călătoriilor, cerințele documentelor, setările de schimb ale companiei.",
    },
    {
      id: "cmr-documents",
      title: "CMR digital și documente",
      goal: "Documente legate de călătorie — CMR, bon de livrare, factură, documente pentru vehicul și șofer — gestionate într-un mod structurat.",
      appFoundation: "Încărcarea documentelor, scanarea/fotografie, atribuirea călătoriei, sarcini bazate pe cerințe, conceptul de document principal.",
      backendDependency: "Stocarea documentelor, metadate, reguli de semnătură, partajare de autoritate cu limite de sfere.",
      disclaimer: "Documentele digitale nu au în mod automat forță probantă legală. Acceptarea variază în funcție de țară și client.",
    },
    {
      id: "completed-package",
      title: "Pachet de călătorie finalizat",
      goal: "Rezumați dovezile călătoriei finalizate într-un pachet exportabil.",
      appFoundation: "Închiderea călătoriei, date locale și evenimente sincronizate ca bază pentru asamblarea pachetului.",
      backendDependency: "Generarea pachetului de călătorie finalizată, export PDF, export de audit. Unele secțiuni (de exemplu, paleți/ambalaj PDF) rămân dependențe.",
      disclaimer: "Pachetul acceptă documentație; nu înlocuiește evaluarea juridică sau procedurile de autoritate ale companiei.",
    },
    {
      id: "messaging-notifications",
      title: "Mesaje și notificări",
      goal: "Comunicare legată de călătorie și alerte pentru evenimente importante ale șoferului.",
      appFoundation: "Lista de mesaje, fire legate de călătorii, fundație pentru notificări din partea aplicației. Utilizabil pentru: mesaj nou, schimbarea călătoriei, sarcină de document, problemă de sincronizare.",
      backendDependency: "Push de producție (FCM/APNs), înregistrarea jetonului dispozitivului, dispecerare pe partea serverului — dependență separată, încă nu este activă.",
      disclaimer: "Ecranul țintă se deschide după PIN. Impulsarea producției nu pretinde că fiecare eveniment sosește instantaneu.",
    },
    {
      id: "pallet-packaging",
      title: "Schimb paleti si ambalaje",
      goal: "Înregistrați schimburile de paleți și ambalaje la oprire cu cantități, lipsuri, daune și dispute.",
      appFoundation: "Paleți și module de ambalare separate. Comutabil de companie. Compania poate preseta articole; șoferul poate adăuga ambalaj personalizat dacă este permis. Salvare offline și sincronizare.",
      backendDependency: "Setări de schimb API, sincronizare înregistrări, interfață de utilizare de administrator al portalului, secțiunea PDF pachet completat — ultima este o dependență.",
      disclaimer: "PDF secțiunea de dovezi nu este complet pregătită în toate cazurile. Înregistrarea acceptă documentarea litigiilor, dar nu hotărăște litigiile.",
    },
    {
      id: "adr-border",
      title: "ADR / suport de frontieră",
      goal: "Informații de ajutor rapid pentru ADR și contextul de frontieră/vamal — alături de verificarea surselor oficiale.",
      appFoundation: "ADR informații, căutare număr ONU, ajutor cod de tunel, metadate de frontieră/vamă legate de călătorii.",
      backendDependency: "ADR actualizări ale bazei de date, metadate ale regulilor specifice țării, date ale punctelor de control la frontieră.",
      disclaimer: "ADR și datele tunelului sunt informații de ajutor. Aplicația nu înlocuiește legislația, instruirea, ofițerul DG al companiei sau deciziile autorității.",
    },
    {
      id: "truck-map",
      title: "Fundația hărții camioanelor",
      goal: "Prezentare generală a flotei și a călătoriei pe hartă — orientare operațională.",
      appFoundation: "Prezentare generală bazată pe hartă, afișare a călătoriei și a contextului vehiculului.",
      backendDependency: "Integrare furnizor de telematică, furnizor de rutare, poziție live — integrare treptată.",
      disclaimer: "Harta nu garantează respectarea restricțiilor legale sau a permiselor.",
    },
    {
      id: "multilingv",
      title: "Operare multilingvă",
      goal: "Echipe multilingve pe o singură platformă.",
      appFoundation: "Interfața de utilizare multilingvă a aplicației driver, păstrarea mesajelor originale, traducerea ca asistență.",
      backendDependency: "Extindere locală a portalului și a site-ului public, flux de lucru pentru revizuirea traducerii.",
      disclaimer: "Traducerea automată sau AI este de asistență; este necesară revizuirea umană. Documentul original rămâne primar.",
    },
    {
      id: "audit-support",
      title: "Acces de audit și asistență",
      goal: "Jurnal trasabil; acces controlat la asistență pentru depanare.",
      appFoundation: "Înregistrare evenimente pentru acțiuni de călătorie și documente; sesiuni de suport auditabile.",
      backendDependency: "Export de audit, politică de acces la suport, matrice de permisiuni ale întreprinderii.",
      disclaimer: "Jurnalul de audit nu este o dovadă legală automată.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — utilizare responsabilă",
      body: "ADR și datele tunelului sunt informații de ajutor. Sursele oficiale, tabelele și regulile locale actuale trebuie întotdeauna verificate. ViaNexis nu înlocuiește legislația, ADR instruirea, ofițerul de mărfuri periculoase al companiei sau deciziile autorității.",
    },
    aiOcr: {
      title: "AI, OCR și traducere",
      body: "AI rezumatul, OCR și traducerea automată sunt instrumente de asistență. Este necesară evaluarea umană. Documentul și mesajul original rămân principale. Nu consiliere juridică și nu traducere autorizată.",
    },
    efti: {
      title: "eFTI și partajarea autorității",
      body: "ViaNexis nu este o platformă certificată eFTI. Nu promite acceptarea autorităților din fiecare țară. Fundația eFTI gata înseamnă pregătire tehnică - nu un certificat sau licență.",
    },
  },
  home: {
    problem: {
      title: "Provocări logistice de zi cu zi",
      subtitle: "Când documentele, semnăturile și evenimentele sunt împrăștiate, trasabilitatea și dovezile au de suferit.",
      cards: [
        {
          title: "Documente împrăștiate",
          description: "Documente de călătorie în e-mail, chat sau hârtie - greu de conectat la evenimente reale.",
        },
        {
          title: "Lipsesc semnături",
          description: "Semnăturile întârziate sau lipsă întârzie închiderea și cresc riscul de dispută.",
        },
        {
          title: "Evenimente greu de dovedit",
          description: "Ridicare, livrare, schimb de paleți, incident — fără jurnalele structurate, greu de urmărit.",
        },
        {
          title: "Echipe multilingve",
          description: "Neînțelegeri zilnice ale mesajelor — este necesară păstrarea textului original și traducerea revizuită.",
        }
      ],
    },
    modules: {
      title: "Module platforme",
      subtitle: "Obiectiv, fundație din partea aplicației, dependență de backend/admin — cu formularea legală sigură.",
    },
    pallet: {
      title: "Schimb paleti si ambalaje",
      subtitle: "Module separate, comutabile de către companie — salvare offline pentru audit.",
    },
    notifications: {
      title: "Mesaje și notificări",
      subtitle: "Pregătită fundația din partea aplicației - push de producție este o dependență separată de backend.",
      cards: [
        {
          title: "Tipuri de evenimente de notificare",
          description: "Mesaj nou, schimbare de călătorie, sarcină de document, problemă de sincronizare.",
        },
        {
          title: "Atingeți rutare și PIN",
          description: "Deschideți ecranul țintă din notificare; link profund după PIN.",
        },
        {
          title: "Ecran de blocare sigur pentru confidențialitate",
          description: "Conținutul complet al documentului sau al mesajului nu este afișat implicit pe ecranul de blocare.",
        }
      ],
      backendDepTitle: "Dependență de backend",
      backendDepBody: "Push de producție (FCM/APNs), înregistrarea token-ului dispozitivului și expedierea pe server nu sunt încă active - este necesară integrarea separată.",
    },
    disclaimersSection: {
      title: "Utilizare responsabilă — notificări importante",
    },
    security: {
      title: "Protecție și control",
      subtitle: "Protecția companiei și a șoferului cu documentație structurată.",
      cards: [
        {
          title: "Protecția companiei",
          description: "Documentație bazată pe cerințe, evenimente auditabile, acces controlat.",
        },
        {
          title: "Protecția șoferului",
          description: "Proces structurat de documentare a evenimentelor în litigii.",
        },
        {
          title: "Coloana vertebrală a documentației",
          description: "Lucrări și evenimente legate de călătorii într-un singur sistem.",
        },
        {
          title: "Evenimente auditabile",
          description: "Cine ce a făcut când — autentificat și căutat.",
        }
      ],
      notPromiseTitle: "Nu o promisiune",
      notPromiseBody: "ViaNexis nu promite forță probatorie legală automată. Evaluarea juridică depinde de context.",
    },
    contact: {
      title: "Contact și testare internă",
      subtitle: "Acces controlat — nu înregistrare automată, fără descărcare publică Play.",
      body: "Aplicația de șofer se află în pregătirea de testare internă Google Play. Pregătirea lansării și Samsung UAT în curs. Activarea nu este automată.",
      consentNote: "Sistemul gestionează documentele, fluxurile de lucru ale șoferului, datele companiei și permisiunile - fiecare acces este revizuit individual.",
      contactLink: "Contactează-ne →",
    },
  },
  contactForm: {
    title: "Contactaţi-ne",
    subtitle: "Interes pentru platforma ViaNexis — nu înregistrare automată.",
    name: "Nume *",
    company: "Companie *",
    email: "Email *",
    phone: "Telefon",
    message: "Mesaj *",
    interestType: "Tip de interes *",
    interestPlaceholder: "Selecta...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplicația pentru șofer",
      },
      {
        value: "company-admin",
        label: "Companie / Platformă de administrare",
      },
      {
        value: "documente",
        label: "Managementul documentelor",
      },
      {
        value: "pallet-packaging",
        label: "Palet / ambalare",
      },
      {
        value: "adr-customs",
        label: "ADR / suport vamal",
      },
      {
        value: "alte",
        label: "Alte",
      }
    ],
    consent: "Sunt de acord că ViaNexis prelucrează datele furnizate exclusiv în scopuri de contact. *",
    submit: "Trimite mesaj",
    submitMailto: "Trimite e-mail",
    intakeDisabled: "Trimiterea online a clienților potențiali este în curs de pregătire. Utilizați contactul de e-mail sau încercați din nou mai târziu.",
    successTitle: "Mesaj primit",
    successBody: "Vă mulțumim pentru interes. Echipa noastră vă va contacta. Activarea accesului nu este automată.",
    newSubmission: "Mesaj nou",
    errors: {
      name: "Numele este obligatoriu.",
      company: "Firma este obligatorie.",
      email: "E-mailul este necesar.",
      emailInvalid: "Introduceți o adresă de e-mail validă.",
      message: "Mesajul este obligatoriu.",
      interest: "Selectați un tip de interes.",
      consent: "Este necesar consimțământul.",
      submitFailed: "Mesajul nu a putut fi trimis. Încearcă e-mail în schimb.",
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
        title: "Pachetul de inspecție a autorităților",
        description: "Documente și evenimente legate de călătorie într-un pachet partajat cu sfere limitate.",
      },
      {
        title: "Domeniu de aplicare / acces limitat în timp",
        description: "Acces limitat bazat pe QR - nu public.",
      },
      {
        title: "Audit",
        description: "Acces înregistrat și partajare a evenimentelor.",
      },
      {
        title: "Fond de ten gata pentru eFTI",
        description: "Baza tehnică pentru integrarea viitoare — nu certificare.",
      },
    ],
  },

  legal: legalRo,
};
