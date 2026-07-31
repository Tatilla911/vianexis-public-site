import type { LegalContent } from "../legal-types";

export const legalNb: LegalContent = {
  versionBadge: "Intern testversjon — juridisk ekspertgjennomgang pågår",
  privacy: {
    title: "Personvernerklæring – intern testversjon",
    intro: "Denne merknaden gjelder under den interne test- og forberedelsesfasen av ViaNexis Driver-appen og relatert plattform. Tjenesten er ikke en offentlig Play Store-nedlasting – forberedelse av intern testing i Google Play pågår. Den endelige omfattende personvernerklæringen vil bli publisert etter juridisk gjennomgang.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Behandlingsansvarlig",
      body: "ViaNexis — vianexis.eu. Personvernkontakt: info@vianexis.eu",
    },
    scope: {
      title: "Scope",
      body: "Denne merknaden dekker ViaNexis Driver-mobilappen, relaterte sjåfør- og turarbeidsflyter og nettkontaktskjemaet. Selskapets admin- og ekspeditørportal er underlagt separate kontrakts- og personvernvilkår.",
    },
    dataCategories: {
      title: "Data vi behandler",
      items: [
        "Konto- og kontaktdata: navn, e-post, telefon, firma, rolle, land.",
        "Førerprofildata: identifikatorer, rolle, språkinnstillinger, tillatelser.",
        "Turdata: tur-IDer, status, stopp, tidsstempler, metadata.",
        "Dokumenter: CMR, følgesedler, fakturaer, bilder, skanninger, digitale signaturer.",
        "Meldinger og varsler: trip-linked kommunikasjon og varslingshendelser.",
        "Plassering: kun med brukertillatelse og mens den er i bruk (når den er i bruk), hvis funksjonen er aktiv.",
        "Enhets- og øktmetadata: enhetstype, OS-versjon, appversjon, øktidentifikatorer.",
        "Diagnostikk og logger: tekniske logger og feilrapporter – hvis aktivert.",
        "Pall og emballasje utveksler data: type, mengde, mangel, skader, merknader.",
        "ADR / tollhjelpers bruksdata: søk, visninger — ikke offisielle avgjørelser.",
        "Varslingstillatelse og fremtidig push-token: produksjons-push (FCM) er en separat backend-avhengighet."
      ],
    },
    purposes: {
      title: "Formål med behandlingen",
      items: [
        "Administrere turarbeidsflyter og dokumentere ytelse.",
        "Dokumenthåndtering, signaturer og montering av bevispakke.",
        "Trip-linked kommunikasjon og driftsvarsler.",
        "Sikkerhet, revisjon og sporbarhet.",
        "Kontrollert støttetilgang på en kontrollerbar måte.",
        "Forebygging og dokumentering av juridiske og forretningsmessige tvister.",
        "Forbedre appdrift og feilsøking.",
        "Intern testing, pilot og tilgangsevaluering."
      ],
    },
    sharing: {
      title: "Data sharing",
      items: [
        "Arbeidsgiver/transportfirma og autoriserte admin/ekspeditørbrukere — per leietakeromfang.",
        "Førerens egne reise- og dokumentdata i henhold til selskapets regler.",
        "Autorisert plattformstøtte kun med revidert, begrenset, begrunnet tilgang.",
        "Myndigheter eller partnere kun i henhold til juridisk grunnlag, kontrakt eller bedriftsbeslutning.",
        "AI/OCR/oversettelsesleverandør kun via backend-kontrollert fremtidig integrasjon, hvis brukt - med menneskelig vurdering.",
        "Vi selger ikke personopplysninger. Ingen markedsføringspress."
      ],
    },
    rights: {
      title: "Your rights",
      items: [
        "Tilgang til dataene dine – via bedriftsadministrator eller støttekanal.",
        "Retting av unøyaktige data.",
        "Sletting der det er lovlig mulig og bedriftsprosesser tillater det.",
        "Innsigelse eller begrensning der det er juridisk begrunnet.",
        "Dataportabilitet der gjeldende lov gir det.",
        "Klage til en tilsynsmyndighet.",
        "Kontakt: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Varsler",
      body: "Appen bruker operative varsler – ikke markedsførings-push. Tekst på låseskjerm er personvernsikker som standard. Produksjons-push (FCM/APN-er) og enhetstokenhåndtering er backend-avhengigheter – kan være delvis eller ikke aktiv under intern testing. Varslingstillatelse er brukerens valg.",
    },
    location: {
      title: "Location",
      body: "Plassering behandles kun med brukertillatelse og mens den er i bruk (når den er i bruk), hvis funksjonen er aktiv - for kart, egen posisjon og reisebevisformål. Ingen bakgrunnssporing i gjeldende tilstand. Plassering garanterer ikke ruteoverholdelse eller lovoverholdelse.",
    },
    importantNotices: {
      title: "Viktige merknader",
      items: [
        "AI, OCR og automatisk oversettelse er hjelpeverktøy – menneskelig vurdering kreves.",
        "ADR-informasjon er en hjelper — erstatter ikke offisielle kilder eller lovgivning.",
        "ViaNexis er ikke en sertifisert eFTI-plattform.",
        "Ikke en nød- eller SOS-tjeneste.",
        "Digitale dokumenter har ikke automatisk rettslig beviskraft.",
        "Tjenesten er i intern testing / forberedelse - ikke et offentlig live produksjonssystem."
      ],
    },
    dataContact: {
      title: "Personvernkontakt",
      body: "Personvernspørsmål: info@vianexis.eu. Endelig kontrollkontakt vil fremgå av den publiserte kunngjøringen.",
    },
    playUrl: "Stable Play Console personvern-URL: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Vilkår for bruk — intern testversjon",
    intro: "Disse vilkårene gjelder under ViaNexis-plattformens interne testing og pilotfase. Tjenesten er ikke et offentlig Play Butikk-produkt – forberedelse av intern testing på Google Play pågår. Endelige vilkår vil bli publisert etter juridisk gjennomgang.",
    sections: [
      {
        title: "Tjenestens art",
        body: "ViaNexis leverer digital transportbevis og en sjåførdriftsplattform for transportselskaper. eFTI-klar fundament – ​​ikke en sertifisert eFTI-plattform. Lover ikke autoritetsgodkjenning i alle land.",
      },
      {
        title: "Intern testing",
        body: "Tilgangen kontrolleres – via pilot- eller intern testinvitasjon. Ikke automatisk offentlig registrering. Backend, push-varslinger og noen integrasjoner kobles sammen gradvis.",
      },
      {
        title: "Brukeransvar",
        body: "Sjåfør og firma er ansvarlige for reise, dokumenter, ADR og tolloverholdelse. Appen støtter dokumentasjon – erstatter ikke juridisk rådgivning, ADR-eksperter eller myndigheter.",
      },
      {
        title: "Availability",
        body: "Under intern testing kan oppetid og funksjoner variere. Spesifikk SLA gjelder kun under kontrakt.",
      },
      {
        title: "Ansvarsbegrensning",
        body: "ViaNexis lover ikke automatisk juridisk beviskraft, feilfri OCR/AI/oversettelse, nødtjenester eller produksjons-push-beredskap hvis det fortsatt er en backend-avhengighet.",
      }
    ],
  },
  legalNotice: {
    title: "Juridisk merknad – intern testversjon",
    intro: "Denne siden beskriver ViaNexis-plattformens interne testing og forberedelsesstatus. Den erstatter ikke fullstendig juridisk dokumentasjon eller kontraktsmessige vilkår.",
    sections: [
      {
        title: "Plattformens art",
        body: "Digital transportbevis, dokumenthåndtering, meldinger, varslinger og bedriftskontroll i ett system. eFTI-klar fundament – ​​ikke en sertifisert eFTI-plattform.",
      },
      {
        title: "Intern teststatus",
        body: "Tilgang er for tiden tilgjengelig gjennom et kontrollert pilotprogram. Ingen offentlig nedlasting av Play Store.",
      },
      {
        title: "Ansvarsbegrensning",
        body: "Vi lover ikke autoritetsgodkjenning, automatisk rettslig beviskraft, feilfri AI/OCR/oversettelse, nødtjenester eller full produksjonsberedskap.",
      },
      {
        title: "Contact",
        body: "Juridiske spørsmål og personvernspørsmål: info@vianexis.eu",
      }
    ],
    relatedDocs: "Relaterte dokumenter",
  },
  disclaimersPage: {
    title: "Ansvarlig bruk — ansvarsfraskrivelser",
    intro: "Tekstene nedenfor beskriver viktige grenser for plattformbruk. Intern testversjon — erstatter ikke juridisk rådgivning.",
    items: [
      {
        id: "adr",
        title: "ADR — ansvarlig bruk",
        body: "ADR og tunneldata er hjelpeinformasjon. Offisielle kilder, tabeller og gjeldende lokale regler må alltid verifiseres. ViaNexis erstatter ikke lovgivning, ADR-opplæring, selskapets DG-ansvarlig eller myndighetsvedtak.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR og oversettelse",
        body: "Hjelpeverktøy – menneskelig vurdering kreves. Originaldokument og melding forblir primære. Ikke juridisk rådgivning og ikke sertifisert oversettelse.",
      },
      {
        id: "notifications",
        title: "Varsler og push",
        body: "Driftsvarsler – ikke markedsførings-push. Personvernsikker låseskjerm som standard. Produksjons-push (FCM/APN-er) er en backend-avhengighet – er kanskje ikke aktiv under intern testing.",
      },
      {
        id: "truck-map",
        title: "Lastebilkart / samfunnsdata",
        body: "Kart og rute for operasjonell orientering – garanterer ikke juridiske restriksjoner, tillatelser eller fellesskapsdatanøyaktighet. Ikke en erstatning for offisiell navigasjon.",
      },
      {
        id: "pallet",
        title: "Pall / emballasje utveksle bevis",
        body: "Opptak støtter tvistedokumentasjon. PDF-bevisdel i gjennomført turpakke er ikke helt klar i alle tilfeller. Avgjør ikke tvister.",
      },
      {
        id: "legal-validity",
        title: "Rettslig gyldighet / dokumenter",
        body: "Digitale dokumenter og signaturer har ikke automatisk rettslig beviskraft. Aksept varierer etter land og kunde.",
      },
      {
        id: "efti",
        title: "eFTI og myndighetsdeling",
        body: "ViaNexis er ikke en sertifisert eFTI-plattform. Lover ikke autoritetsgodkjenning i alle land. eFTI-klar fundament er teknisk beredskap — ikke et sertifikat.",
      }
    ],
  },
};
