import type { LegalContent } from "../legal-types";

export const legalRo: LegalContent = {
  versionBadge: "Versiunea de testare internă — revizuirea expertului juridic în curs · Această traducere este în curs de verificare.",
  privacy: {
    title: "Notificare de confidențialitate — versiune de testare internă",
    intro: "Această notificare se aplică în timpul fazei interne de testare și pregătire a aplicației ViaNexis Driver și a platformei aferente. Serviciul nu este o descărcare publică din Magazin Play — pregătirea pentru testarea internă Google Play este în curs. Politica finală cuprinzătoare de confidențialitate va fi publicată după revizuirea juridică.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Operatorul de date",
      body: "ViaNexis — vianexis.eu. Contact pentru confidențialitate: info@vianexis.eu",
    },
    scope: {
      title: "Domeniul de aplicare",
      body: "Această notificare acoperă aplicația mobilă ViaNexis Driver, fluxurile de lucru legate de șofer și călătorie și formularul de contact web. Portalul de administrare și dispecer al companiei sunt supuse unor termeni contractuali și de confidențialitate separati.",
    },
    dataCategories: {
      title: "Datele pe care le procesăm",
      items: [
        "Date de cont și de contact: nume, e-mail, telefon, companie, rol, țară.",
        "Datele profilului șoferului: identificatori, rol, setări de limbă, permisiuni.",
        "Date de călătorie: ID-uri de călătorie, stare, opriri, marcaje de timp, metadate.",
        "Documente: CMR, bonuri de livrare, facturi, fotografii, scanări, semnături digitale.",
        "Mesaje și notificări: comunicare legată de călătorie și evenimente de alertă.",
        "Locație: numai cu permisiunea utilizatorului și în timpul utilizării (când este în uz), dacă funcția este activă.",
        "Metadatele dispozitivului și ale sesiunii: tipul dispozitivului, versiunea sistemului de operare, versiunea aplicației, identificatorii de sesiune.",
        "Diagnosticare și jurnale: jurnalele tehnice și rapoartele de eroare — dacă sunt activate.",
        "Schimbul de date de paleți și ambalaje: tip, cantitate, lipsă, deteriorare, note.",
        "ADR / date de utilizare a asistentului vamal: căutări, vizualizări — nu decizii oficiale.",
        "Permisiunea de notificare și jetonul push viitor: push de producție (FCM) este o dependență separată de backend."
      ],
    },
    purposes: {
      title: "Scopurile prelucrarii",
      items: [
        "Gestionarea fluxurilor de lucru și documentarea performanței.",
        "Gestionarea documentelor, semnăturile și asamblarea pachetului de dovezi.",
        "Comunicare legată de călătorie și notificări operaționale.",
        "Securitate, audit și trasabilitate.",
        "Acces controlat la asistență într-o manieră auditabilă.",
        "Prevenirea și documentarea litigiilor legale și de afaceri.",
        "Îmbunătățirea funcționării aplicației și depanarea.",
        "Testare internă, pilot și evaluare a accesului."
      ],
    },
    sharing: {
      title: "Partajarea datelor",
      items: [
        "Angajatorul/compania de transport și utilizatorii autorizați de administrare/dispecerat – per chiriaș.",
        "Datele despre călătoria și documentele proprii ale șoferului conform regulilor companiei.",
        "Suport de platformă autorizat numai cu acces auditat, limitat, justificat.",
        "Autoritățile sau partenerii numai conform temeiului legal, contractului sau deciziei companiei.",
        "AI/OCR/furnizor de traducere numai prin integrare viitoare controlată de backend, dacă se aplică - cu revizuire umană.",
        "Nu vindem date personale. Nici un impuls de marketing."
      ],
    },
    rights: {
      title: "Drepturile tale",
      items: [
        "Acces la datele dvs. - prin intermediul administratorului companiei sau al canalului de asistență.",
        "Rectificarea datelor inexacte.",
        "Stergere acolo unde este posibil din punct de vedere legal și procesele companiei o permit.",
        "Obiecție sau restricție acolo unde este justificată din punct de vedere legal.",
        "Portabilitatea datelor acolo unde legea aplicabilă o prevede.",
        "Plângere la o autoritate de supraveghere.",
        "Contact: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Notificări",
      body: "Aplicația folosește notificări operaționale – nu marketing push. Textul ecranului de blocare este în mod implicit sigur pentru confidențialitate. Push-ul de producție (FCM/APNs) și gestionarea token-ului dispozitivului sunt dependențe de backend - pot fi parțiale sau nu active în timpul testării interne. Permisiunea de notificare este alegerea utilizatorului.",
    },
    location: {
      title: "Locaţie",
      body: "Locația este procesată numai cu permisiunea utilizatorului și în timpul utilizării (când este în uz), dacă caracteristica este activă - în scopuri de hartă, poziție proprie și dovezi de călătorie. Fără urmărire în fundal în starea actuală. Locația nu garantează conformitatea rutei sau conformitatea legală.",
    },
    importantNotices: {
      title: "Notificări importante",
      items: [
        "AI, OCR și traducerea automată sunt instrumente de asistență – este necesară o revizuire umană.",
        "ADR informația este un ajutor — nu înlocuiește sursele oficiale sau legislația.",
        "ViaNexis nu este o platformă certificată eFTI.",
        "Nu este un serviciu de urgență sau SOS.",
        "Documentele digitale nu au în mod automat forță probantă legală.",
        "Serviciul este în testare/pregătire internă — nu este un sistem public de producție live."
      ],
    },
    dataContact: {
      title: "Contact pentru confidențialitate",
      body: "Întrebări privind confidențialitatea: info@vianexis.eu. Contactul final al controlorului va apărea în anunțul publicat.",
    },
    playUrl: "Adresa URL de confidențialitate Stable Play Console: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Condiții de utilizare — versiunea de testare internă",
    intro: "Acești termeni se aplică în timpul fazei de testare și pilot internă a platformei ViaNexis. Serviciul nu este un produs public Play Store — pregătirea pentru testarea internă Google Play este în curs. Termenii finali vor fi publicati după revizuirea juridică.",
    sections: [
      {
        title: "Natura serviciului",
        body: "ViaNexis oferă dovezi digitale de transport și o platformă de operare a șoferilor pentru companiile de transport. Fond de ten eFTI-gata - nu este o platformă certificată eFTI. Nu promite acceptarea autorităților din fiecare țară.",
      },
      {
        title: "Testare internă",
        body: "Accesul este controlat - prin invitație de testare pilot sau internă. Nu înregistrarea publică automată. Backend-ul, notificările push și unele integrări sunt conectate treptat.",
      },
      {
        title: "Responsabilitatea utilizatorului",
        body: "Șoferul și compania sunt responsabili pentru călătorie, documente, ADR și conformitatea vamală. Aplicația acceptă documentația — nu înlocuiește consultanța juridică, experții ADR sau autoritățile.",
      },
      {
        title: "Disponibilitate",
        body: "În timpul testării interne, timpul de funcționare și funcțiile pot varia. SLA specific se aplică numai în baza contractului.",
      },
      {
        title: "Limitarea răspunderii",
        body: "ViaNexis nu promite forță probatorie legală automată, OCR/AI/traducere, servicii de urgență sau pregătire pentru producție, dacă este încă o dependență de backend.",
      }
    ],
  },
  legalNotice: {
    title: "Aviz juridic — versiunea de testare internă",
    intro: "Această pagină descrie starea de pregătire și testare internă a platformei ViaNexis. Nu înlocuiește documentația legală completă sau termenii contractuali.",
    sections: [
      {
        title: "Natura platformei",
        body: "Dovezi de transport digital, management de documente, mesagerie, notificări și control al companiei într-un singur sistem. Fond de ten eFTI-gata - nu este o platformă certificată eFTI.",
      },
      {
        title: "Starea testării interne",
        body: "Pregătirea pentru testarea internă Google Play este în curs. Samsung UAT și pregătirea pentru lansare în curs. Nu pretindem că aplicația este disponibilă public în Magazinul Play.",
      },
      {
        title: "Limitarea răspunderii",
        body: "Nu promitem acceptarea autorității, forța probatorie legală automată, AI/OCR/traducere fără cusur, servicii de urgență sau pregătirea completă a producției.",
      },
      {
        title: "Contact",
        body: "Întrebări legale și de confidențialitate: info@vianexis.eu",
      }
    ],
    relatedDocs: "Documente aferente",
  },
  disclaimersPage: {
    title: "Utilizare responsabilă - declinări de răspundere",
    intro: "Textele de mai jos descriu limite importante ale utilizării platformei. Versiunea de testare internă — nu înlocuiește consultanța juridică.",
    items: [
      {
        id: "adr",
        title: "ADR — utilizare responsabilă",
        body: "ADR și datele tunelului sunt informații de ajutor. Sursele oficiale, tabelele și regulile locale actuale trebuie întotdeauna verificate. ViaNexis nu înlocuiește legislația, ADR formarea, ofițerul DG al companiei sau deciziile autorității.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR și traducere",
        body: "Instrumente de asistență — este necesară evaluarea umană. Documentul și mesajul original rămân principale. Nu consiliere juridică și nu traducere autorizată.",
      },
      {
        id: "notificări",
        title: "Notificări și push",
        body: "Notificări operaționale – nu marketing push. Ecran de blocare sigur pentru confidențialitate în mod implicit. Pusarea de producție (FCM/APNs) este o dependență de backend - este posibil să nu fie live în timpul testării interne.",
      },
      {
        id: "truck-map",
        title: "Harta camioanelor / date comunității",
        body: "Hartă și traseu pentru orientare operațională — nu garantează restricții legale, permise sau acuratețea datelor comunitare. Nu este un substitut pentru navigația oficială.",
      },
      {
        id: "palet",
        title: "Dovada schimb palet / ambalaj",
        body: "Înregistrarea acceptă documentarea litigiilor. PDF secțiunea de dovezi din pachetul de călătorie completat nu este complet pregătită în toate cazurile. Nu decide disputele.",
      },
      {
        id: "legal-validity",
        title: "Valabilitate legală / documente",
        body: "Documentele și semnăturile digitale nu au în mod automat forță probantă legală. Acceptarea variază în funcție de țară și client.",
      },
      {
        id: "efti",
        title: "eFTI și partajarea autorității",
        body: "ViaNexis nu este o platformă certificată eFTI. Nu promite acceptarea autorităților din fiecare țară. Fundația eFTI-gata este pregătirea tehnică — nu un certificat.",
      }
    ],
  },
};
