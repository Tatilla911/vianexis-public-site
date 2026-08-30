import type { EnterpriseIntegrationContent } from "./types";

/** Canonical Hungarian product message for enterprise integration. */
export const enterpriseIntegrationHu: EnterpriseIntegrationContent = {
  eyebrow: "Vállalati integrációk",
  title: "Kapcsolja össze a ViaNexist meglévő rendszereivel",
  body:
    "A ViaNexis szolgáltatófüggetlen integrációs architektúrára épül a külső szállítási és vállalati rendszerekhez. A ViaNexis csatlakozhat külső rendszerekhez, és jóváhagyott külső rendszerek is csatlakozhatnak a ViaNexishez API-k, webhookok és connector architektúra révén.",
  coexistence:
    "A cégeknek nem feltétlenül kell lecserélniük meglévő TMS vagy ERP rendszerüket a ViaNexis bevezetéséhez. A ViaNexis integráción keresztül a meglévő rendszerek mellett is bevezethető.",
  capabilityNote:
    "Az integrációs lehetőségek a külső rendszer képességeitől és interfészétől függnek.",
  architectureNote:
    "A ViaNexis szolgáltatófüggetlen integrációs architektúrát használ. Új, dokumentált API-alapú szolgáltatóknál általában szolgáltató-specifikus konfiguráció, mapping és adapter munka szükséges — nem a ViaNexis mag architektúrájának átalakítása.",
  partnerApiNote:
    "Jóváhagyott integrációkhoz Partner API és webhook-alapú kapcsolódási lehetőségek érhetők el.",
  sandboxNote:
    "Jóváhagyott műszaki partnerek sandbox környezetben validálhatják az integrációkat az éles bevezetés előtt. Az éles hozzáférés manuális jóváhagyással történik.",
  directionsTitle: "Kétirányú kapcsolódás",
  directions: [
    {
      title: "Külső rendszerek → ViaNexis",
      description:
        "Jóváhagyott rendszerek fuvarokat, megállókat, hozzárendeléseket és operatív adatokat küldhetnek a ViaNexisbe, ha a külső interfész ezt támogatja.",
    },
    {
      title: "ViaNexis → Külső rendszerek",
      description:
        "A ViaNexis visszaküldheti a végrehajtási státuszt, késéseket és dokumentum-metaadatokat (például végleges CMR vagy POD eseményeket) a kapcsolt rendszereknek, ahol ez támogatott.",
    },
  ],
  capabilitiesTitle: "Mit tesz lehetővé",
  capabilities: [
    {
      title: "Szolgáltatófüggetlen architektúra",
      description:
        "Az integrációk közös mintát követnek, nem szolgáltatónkénti mag-átalakítást.",
    },
    {
      title: "API- és webhook-kapcsolódás",
      description:
        "Strukturált adatcsere Partner API-n és esemény-webhookokon keresztül jóváhagyott partnereknek.",
    },
    {
      title: "Kétirányú adatcsere",
      description:
        "Bejövő operatív adatok és kimenő státusz- vagy dokumentumesemények ütemezetten is bevezethetők.",
    },
    {
      title: "Sandbox műszaki onboarding",
      description:
        "A mappingek és folyamatok kontrollált sandboxban validálhatók az éles indulás előtt.",
    },
    {
      title: "Kontrollált connector tanúsítás",
      description:
        "Az éles bevezetés felülvizsgálatot és jóváhagyást igényel — nem anonim önkiszolgáló aktiválás.",
    },
    {
      title: "Megtarthatja a meglévő magrendszereket",
      description:
        "A ViaNexis sofőr-műveletekre és bizonyítékkezelésre használható anélkül, hogy azonnal le kellene cserélni a TMS-t.",
    },
  ],
  examplesTitle: "Példa folyamatok",
  examples: [
    {
      title: "TMS",
      description:
        "Egy TMS fuvar-, megálló- és hozzárendelési adatokat küldhet a ViaNexisbe. A ViaNexis visszaadhat végrehajtási státuszt, késésjelzéseket és végleges CMR / POD metaadatokat, ha a TMS interfész ezt támogatja.",
    },
    {
      title: "Telematics",
      description:
        "Egy telematics szolgáltató GPS, kilométeróra vagy üzemanyaghoz kapcsolódó szállítási adatokat adhat a ViaNexisnek az elérhető interfész szerint.",
    },
    {
      title: "Partner API / webhooks",
      description:
        "Egy jóváhagyott vállalati alkalmazás Partner API-n vagy webhookokon keresztül cserélhet megállapodott operatív eseményeket a ViaNexisszel.",
    },
  ],
  systemsLabel: "Releváns rendszertípusok",
  systems: [
    "TMS",
    "ERP",
    "Telematics",
    "Tachograph / adat szolgáltatók",
    "Routing / toll / fuel",
    "WMS / yard / gate",
    "Accounting",
    "eCMR / eFTI",
    "Egyéb dokumentált vállalati rendszerek",
  ],
  flowExternal: "Külső rendszerek",
  flowExternalDetail: "TMS · ERP · Telematics · vállalati alkalmazások",
  flowLayer: "ViaNexis Integration Layer",
  flowLayerDetail: "Partner API · webhooks · connectors",
  flowOperations: "ViaNexis műveletek",
  flowOperationsDetail: "Sofőr · Cég · Dokumentumok",
  ctaPrimary: "Integráció megbeszélése",
  ctaSecondary: "Személyre szabott ajánlat kérése",
};
