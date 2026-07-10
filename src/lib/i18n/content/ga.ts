import type { SiteContent } from "../types";
import { legalGa } from "./legal/ga";

export const contentGa: SiteContent = {
  meta: {
    title: "ViaNexis Oibríochtaí iompair tiománaí agus cuideachta",
    description: "Aip tiománaithe, rialú cuideachta, bainistíocht doiciméad, teachtaireachtaí, fógraí, agus sreabhadh oibre turais ilteangach i gcóras amháin. Tá ullmhúchán tástála inmheánach ar siúl.",
    ogLocale: "ga_IE",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Gnéithe",
    driverApp: "App tiománaí",
    companyPortal: "Tairseach cuideachta",
    documents: "Doiciméid",
    authorityEfti: "Údarás / eFTI",
    security: "Slándáil",
    pilot: "Rochtain phíolótach",
    contact: "Teagmháil",
    requestAccess: "Iarr rochtain",
    menuOpen: "Roghchlár a oscailt",
  },
  footer: {
    tagline: "Fianaise iompair dhigitigh agus ardán oibríochtaí tiománaithe do chuideachtaí iompair. Fondúireacht eFTI-réidh — ní ardán eFTI deimhnithe.",
    product: "Táirge",
    legal: "Dlíthiúil",
    legalNotice: "Fógra dlíthiúil",
    privacy: "Beartas príobháideachta",
    terms: "Téarmaí úsáide",
    disclaimers: "Úsáid fhreagrach",
    dataContact: "Teagmháil um chosaint sonraí",
    copyright: "Ní ardán deimhnithe eFTI é. Ní gheallann sé go nglacfar leis an údarás, fórsa promhaidh dlíthiúil uathoibríoch, OCR/AI/aistriúchán, nó seirbhísí éigeandála/SOS. Níl aon íoslódáil sa store súgartha poiblí.",
  },
  hero: {
    title: "ViaNexis — fianaise iompair dhigitigh agus ardán oibríochtaí tiománaithe",
    subtitle: "Aip tiománaithe, rialú cuideachta, bainistíocht doiciméad, teachtaireachtaí, fógraí, agus sreabhadh oibre turais ilteangach i gcóras amháin.",
    primaryCta: "Déan teagmháil linn",
    secondaryCta: "Tá ullmhúchán tástála inmheánach ar siúl",
    stats: [
      {
        label: "App tiománaí",
        value: "Turas + as líne",
      },
      {
        label: "Doiciméid",
        value: "CMR + iniúchadh",
      },
      {
        label: "teachtaireachtaí",
        value: "Ilteangach",
      },
      {
        label: "Stádas",
        value: "Ullmhú tástála inmheánach",
      }
    ],
  },
  platformStatus: {
    title: "Stádas reatha",
    items: [
      "Ullmhúchán tástála inmheánach Google Play ar siúl - ní íoslódáil siopa poiblí.",
      "Ullmhacht scaoileadh aip tiománaithe agus Samsung UAT ar siúl.",
      "Tá inneall táirgeachta, fógraí brú, agus comhtháthú comhpháirtíochta á nascadh de réir a chéile."
    ],
    disclaimer: "Ní éilíonn ViaNexis go bhfuil an córas beo, deimhnithe, nó glactha go hoifigiúil i ngach tír.",
  },
  moduleLabels: {
    goal: "Sprioc",
    appFoundation: "Fondúireacht taobh app",
    backendDependency: "Inneall / spleáchas admin",
    important: "Tábhachtach",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "App tiománaí",
      goal: "Lig do thiománaithe tascanna, doiciméid agus imeachtaí a bhaineann le turas a láimhseáil ar shoghluaiste - ar líne agus as líne.",
      appFoundation: "Liosta turas agus sonraí, uaslódáil doiciméad, gabháil sínithe, seicliostaí, logáil teagmhais, sábháil agus sioncronú as líne, seisiún cosanta PIN.",
      backendDependency: "Beo API, raon feidhme an tionónta, sioncrónú turas agus doiciméad, réiteach socruithe cuideachta.",
    },
    {
      id: "company-admin",
      title: "Rialú Cuideachta / Riaracháin",
      goal: "Lig do chuideachtaí iompair turais, úsáideoirí, ceadanna agus sreafaí oibre a bhainistiú ó thairseach amháin.",
      appFoundation: "Léiríonn sonraí agus gníomhartha taobh tiománaithe rialacha na cuideachta.",
      backendDependency: "Tairseach cuideachta gréasáin, aip riaracháin ardáin, róil, bainistíocht turas, riachtanais doiciméad, socruithe malartaithe cuideachta.",
    },
    {
      id: "cmr-documents",
      title: "Digiteach CMR & doiciméid",
      goal: "Doiciméid turas-nasctha — CMR, nóta seachadta, sonrasc, páipéir feithicle agus tiománaithe — arna mbainistiú ar bhealach struchtúrtha.",
      appFoundation: "Uaslódáil doiciméad, scanadh/grianghraf, sannadh turais, tascanna bunaithe ar riachtanais, coincheap príomhdhoiciméid.",
      backendDependency: "Stóráil doiciméad, meiteashonraí, rialacha sínithe, comhroinnt údaráis le teorainneacha scóip.",
      disclaimer: "Ní iompraíonn doiciméid dhigiteacha fórsa promhaidh dlí go huathoibríoch. Athraíonn glacadh de réir tíre agus custaiméara.",
    },
    {
      id: "completed-package",
      title: "Pacáiste turais críochnaithe",
      goal: "Déan achoimre ar fhianaise turais chríochnaithe i bpacáiste is féidir a onnmhairiú.",
      appFoundation: "Dúnadh turas, sonraí áitiúla, agus imeachtaí sioncronaithe mar bhunús do thionól pacáiste.",
      backendDependency: "Giniúint pacáiste turas críochnaithe, onnmhairiú PDF, onnmhairiú iniúchta. Tá roinnt codanna (m.sh. pailléid/pacáistiú PDF) ina spleáchas i gcónaí.",
      disclaimer: "Tacaíonn an pacáiste le doiciméadú; ní ghlacann sé ionad mheasúnú dlíthiúil nó imeachtaí údaráis na cuideachta.",
    },
    {
      id: "messaging-notifications",
      title: "Teachtaireachtaí & fógraí",
      goal: "Cumarsáid turas-nasctha agus foláirimh maidir le himeachtaí tábhachtacha tiománaithe.",
      appFoundation: "Liosta teachtaireachta, snáitheanna turas-nasctha, bunús fógra ar thaobh na haipe. Inúsáidte le haghaidh: teachtaireacht nua, athrú turais, tasc doiciméad, saincheist sioncronaithe.",
      backendDependency: "Brú táirgeachta (FCM/APNs), clárú chomhartha gléas, seoladh freastalaí-taobh - spleáchas ar leith, nach bhfuil fós beo.",
      disclaimer: "Osclaíonn an scáileán sprice tar éis PIN. Ní éilíonn brú táirgeachta go dtagann gach imeacht láithreach.",
    },
    {
      id: "pallet-packaging",
      title: "Malartú pailléid & pacáistithe",
      goal: "Déan malartuithe pailléid agus pacáistithe a thaifeadadh in aghaidh an stad le cainníochtaí, ganntanas, damáiste agus díospóid.",
      appFoundation: "Modúil phailléid agus pacáistithe ar leithligh. Cuideachta-scoránaigh. Is féidir le cuideachta míreanna réamhshocraithe; is féidir leis an tiománaí pacáistiú saincheaptha a chur leis má cheadaítear é. Sábháil agus sioncronú as líne.",
      backendDependency: "Socruithe malairte API, sioncrónú taifead, UI admin tairseach, alt PDF pacáiste críochnaithe - is spleáchas é an dara ceann.",
      disclaimer: "Níl an chuid fianaise PDF go hiomlán réidh i ngach cás. Tacaíonn taifeadadh le doiciméid díospóide ach ní chinntear díospóidí.",
    },
    {
      id: "adr-border",
      title: "ADR / tacaíocht teorann",
      goal: "Faisnéis thapa chúntóra le haghaidh ADR agus comhthéacs teorann/custaim — taobh le fíorú foinsí oifigiúla.",
      appFoundation: "ADR eolas, cuardach uimhreacha na NA, cúntóir cód tolláin, meiteashonraí teorann/custaim a bhaineann le turais.",
      backendDependency: "ADR nuashonruithe bunachar sonraí, meiteashonraí rialacha a bhaineann go sonrach le tír, sonraí seicphointí teorann.",
      disclaimer: "Is faisnéis chúntóra iad ADR agus sonraí tolláin. Ní thagann an aip in ionad reachtaíochta, oiliúna, oifigeach DG na cuideachta, ná cinntí údaráis.",
    },
    {
      id: "truck-map",
      title: "Bunús léarscáil trucail",
      goal: "Forbhreathnú ar chabhlach agus turas ar an léarscáil — treoshuíomh oibriúcháin.",
      appFoundation: "Forbhreathnú léarscáil-bhunaithe, taispeáint comhthéacs turais agus feithicle.",
      backendDependency: "Comhtháthú soláthraí teileamaitice, soláthraí ródaithe, suíomh beo — comhtháthú de réir a chéile.",
      disclaimer: "Ní ráthaíonn an léarscáil go gcomhlíontar srianta nó ceadanna dlíthiúla.",
    },
    {
      id: "ilteangach",
      title: "Oibríocht ilteangach",
      goal: "Foirne ilteangacha ar ardán amháin.",
      appFoundation: "Chomhéadain ilteangach an aip tiománaí, coinneáil na bunteachtaireachtaí, aistriúchán mar chúnamh.",
      backendDependency: "Leathnú locale tairseach agus suíomh poiblí, sreabhadh oibre athbhreithnithe aistriúcháin.",
      disclaimer: "Tá aistriúchán meaisín nó AI cabhrach; athbhreithniú daonna ag teastáil. Tá an bundoiciméad fós ina bhun.",
    },
    {
      id: "audit-support",
      title: "Iniúchadh agus rochtain tacaíochta",
      goal: "Log inrianaithe; rochtain tacaíochta rialaithe le haghaidh fabhtcheartaithe.",
      appFoundation: "Logáil imeachtaí le haghaidh gníomhartha turais agus doiciméad; seisiúin tacaíochta in-iniúchta.",
      backendDependency: "Onnmhairiú iniúchta, beartas rochtana tacaíochta, maitrís cead fiontair.",
      disclaimer: "Ní cruthúnas dlíthiúil uathoibríoch é an loga iniúchta.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — úsáid fhreagrach",
      body: "Is faisnéis chúntóra iad ADR agus sonraí tolláin. Ní mór foinsí oifigiúla, táblaí, agus rialacha áitiúla reatha a fhíorú i gcónaí. Ní chuireann ViaNexis ionad reachtaíochta, ADR oiliúint, oifigeach earraí contúirteacha na cuideachta, nó cinntí údaráis.",
    },
    aiOcr: {
      title: "AI, OCR & aistriúchán",
      body: "Is uirlisí cúnta iad AI achoimriú, OCR, agus aistriúchán uathoibríoch. Tá athbhreithniú daonna ag teastáil. Fanann an doiciméad bunaidh agus an teachtaireacht bhunaidh. Ní comhairle dlí agus ní aistriúchán deimhnithe.",
    },
    efti: {
      title: "eFTI & roinnt údaráis",
      body: "Ní ardán eFTI deimhnithe é ViaNexis. Ní gheallann sé go nglacfar leis an údarás i ngach tír. Ciallaíonn fondúireacht réidh eFTI ullmhacht theicniúil — ní teastas nó ceadúnas.",
    },
  },
  home: {
    problem: {
      title: "Dúshláin lóistíochta laethúla",
      subtitle: "Nuair a scaiptear doiciméid, sínithe, agus imeachtaí, bíonn inrianaitheacht agus cruthúnais ag fulaingt.",
      cards: [
        {
          title: "Doiciméid scaipthe",
          description: "Páipéir thurais i ríomhphost, comhrá, nó páipéar - is deacair iad a nascadh le himeachtaí iarbhír.",
        },
        {
          title: "Sínithe ar iarraidh",
          description: "Cuireann sínithe déanacha nó sínithe atá in easnamh moill ar dhúnadh agus méadaítear an riosca díospóide.",
        },
        {
          title: "Imeachtaí deacair a chruthú",
          description: "Piocadh, seachadadh, malartú pailléid, teagmhas — gan logaí struchtúrtha, deacair a lorg.",
        },
        {
          title: "Foirne ilteangacha",
          description: "Míthuiscintí teachtaireachtaí laethúla — coinneáil buntéacs agus aistriúchán athbhreithnithe ag teastáil.",
        }
      ],
    },
    modules: {
      title: "Modúil ardán",
      subtitle: "Sprioc, bunús ar thaobh na bhfeidhmchlár, inneall/spleáchas riaracháin - le foclaíocht atá sábháilte ó thaobh an dlí de.",
    },
    pallet: {
      title: "Malartú pailléid & pacáistithe",
      subtitle: "Modúil ar leith, cuideachta-scorraithe - ach amháin as líne i dtreo iniúchta.",
    },
    notifications: {
      title: "Teachtaireachtaí & fógraí",
      subtitle: "Fondúireacht taobh an aip réidh - is spleáchas inneall ar leith é brú táirgeachta.",
      cards: [
        {
          title: "Cineálacha teagmhais fógra",
          description: "Teachtaireacht nua, athrú turais, tasc doiciméad, saincheist sioncronaithe.",
        },
        {
          title: "Tapáil ródú & PIN",
          description: "Oscail an scáileán sprice ó fhógra; nasc domhain i ndiaidh PIN.",
        },
        {
          title: "Scáileán glas príobháideachta",
          description: "Ní thaispeántar inneachar iomlán an doiciméid nó na teachtaireachta ar an scáileán glas de réir réamhshocraithe.",
        }
      ],
      backendDepTitle: "Spleáchas backend",
      backendDepBody: "Níl an brú táirgeachta (FCM/APNs), clárú chomhartha an ghléis, agus seoladh taobh an fhreastalaí beo go fóill - tá gá le comhtháthú ar leith.",
    },
    disclaimersSection: {
      title: "Úsáid fhreagrach — fógraí tábhachtacha",
    },
    security: {
      title: "Cosaint agus rialú",
      subtitle: "Cosaint cuideachta agus tiománaithe le doiciméadú struchtúrtha.",
      cards: [
        {
          title: "Cosaint cuideachta",
          description: "Doiciméadú riachtanas-bhunaithe, teagmhais in-iniúchta, rochtain rialaithe.",
        },
        {
          title: "Cosaint tiománaí",
          description: "Próiseas struchtúrtha chun imeachtaí i ndíospóidí a dhoiciméadú.",
        },
        {
          title: "Cnámh droma doiciméadú",
          description: "Páipéir agus imeachtaí turas-nasctha in aon chóras amháin.",
        },
        {
          title: "Imeachtaí in-iniúchta",
          description: "Cé a rinne cad nuair - logáilte agus inchuardaithe.",
        }
      ],
      notPromiseTitle: "Ní gealltanas",
      notPromiseBody: "Ní gheallann ViaNexis fórsa promhaidh dlíthiúil uathoibríoch. Braitheann measúnú dlíthiúil ar chomhthéacs.",
    },
    contact: {
      title: "Teagmháil agus tástáil inmheánach",
      subtitle: "Rochtain rialaithe - ní clárúchán uathoibríoch, gan aon íoslódáil poiblí Play.",
      body: "Tá an aip tiománaithe in ullmhúchán tástála inmheánach Google Play. Ullmhacht scaoileadh agus Samsung UAT ar siúl. Níl an ghníomhachtú uathoibríoch.",
      consentNote: "Láimhseálann an córas doiciméid, sreafaí oibre tiománaithe, sonraí cuideachta, agus ceadanna - déantar athbhreithniú aonair ar gach rochtain.",
      contactLink: "Déan teagmháil linn →",
    },
  },
  contactForm: {
    title: "Déan teagmháil linn",
    subtitle: "Suim san ardán ViaNexis — ní clárú uathoibríoch é.",
    name: "Ainm *",
    company: "Cuideachta *",
    email: "Ríomhphost *",
    phone: "Fón",
    message: "Teachtaireacht *",
    interestType: "Cineál spéise *",
    interestPlaceholder: "Roghnaigh...",
    interestOptions: [
      {
        value: "driver-app",
        label: "App tiománaí",
      },
      {
        value: "company-admin",
        label: "Ardán Cuideachta/Riaracháin",
      },
      {
        value: "doiciméid",
        label: "Bainistíocht doiciméad",
      },
      {
        value: "pallet-packaging",
        label: "Pailéad / pacáistiú",
      },
      {
        value: "adr-customs",
        label: "ADR / tacaíocht chustaim",
      },
      {
        value: "eile",
        label: "Eile",
      }
    ],
    consent: "Aontaím go ndéanann ViaNexis na sonraí a chuirtear ar fáil a phróiseáil chun críocha teagmhála amháin. *",
    submit: "Seol teachtaireacht",
    submitMailto: "Seol ríomhphost",
    intakeDisabled: "Tá aighneacht luaidhe ar líne á ullmhú. Úsáid teagmhálaí ríomhphoist nó bain triail eile as ar ball.",
    successTitle: "Teachtaireacht faighte",
    successBody: "Go raibh maith agat as do spéis. Déanfaidh ár bhfoireann teagmháil leat. Níl gníomhachtú rochtana uathoibríoch.",
    newSubmission: "Teachtaireacht nua",
    errors: {
      name: "Tá ainm ag teastáil.",
      company: "Cuideachta ag teastáil.",
      email: "Tá ríomhphost ag teastáil.",
      emailInvalid: "Cuir isteach seoladh ríomhphoist bailí.",
      message: "Tá teachtaireacht ag teastáil.",
      interest: "Roghnaigh cineál spéise.",
      consent: "Tá cead ag teastáil.",
      submitFailed: "Níorbh fhéidir an teachtaireacht a sheoladh. Bain triail as ríomhphost ina ionad sin.",
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
        title: "Pacáiste iniúchta Údaráis",
        description: "Doiciméid agus imeachtaí turas-nasctha i bpacáiste comhroinnte atá teoranta ó thaobh raon feidhme de.",
      },
      {
        title: "Scóip / rochtain teoranta ó thaobh ama",
        description: "QR bunaithe ar rochtain theoranta — ní poiblí.",
      },
      {
        title: "Iniúchadh",
        description: "Rochtain logáilte agus imeachtaí a roinnt.",
      },
      {
        title: "eFTI-bunús réidh",
        description: "Bonn teicniúil maidir le comhtháthú sa todhchaí — ní deimhniú.",
      }
    ],
  },
  legal: legalGa,
};
