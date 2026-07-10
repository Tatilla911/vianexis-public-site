import type { SiteContent } from "../types";
import { legalMt } from "./legal/mt";

export const contentMt: SiteContent = {
  meta: {
    title: "ViaNexis Operazzjonijiet tat-trasport tas-sewwieq u tal-kumpanija",
    description: "App tas-sewwieq, kontroll tal-kumpanija, ġestjoni tad-dokumenti, messaġġi, notifiki, u flussi tax-xogħol tal-vjaġġi multilingwi f'sistema waħda. Tħejjija għall-ittestjar intern għaddejja.",
    ogLocale: "mt_MT",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Karatteristiċi",
    driverApp: "App tas-sewwieq",
    companyPortal: "Portal tal-kumpanija",
    documents: "Dokumenti",
    authorityEfti: "Awtorità / eFTI",
    security: "Sigurtà",
    pilot: "Aċċess pilota",
    contact: "Kuntatt",
    requestAccess: "Itlob aċċess",
    menuOpen: "Iftaħ il-menu",
  },
  footer: {
    tagline: "Evidenza tat-trasport diġitali u pjattaforma tal-operazzjonijiet tas-sewwieqa għall-kumpaniji tat-trasport. Fondazzjoni lesta eFTI — mhux pjattaforma ċċertifikata eFTI.",
    product: "Prodott",
    legal: "Legali",
    legalNotice: "Avvi] legali",
    privacy: "Politika ta' privatezza",
    terms: "Termini ta' użu",
    disclaimers: "Użu responsabbli",
    dataContact: "Kuntatt għall-protezzjoni tad-dejta",
    copyright: "Mhux pjattaforma ċċertifikata eFTI. Ma jwiegħedx aċċettazzjoni mill-awtorità, forza probatorja legali awtomatika, OCR/AI/traduzzjoni, jew servizzi ta' emerġenza/SOS bla difetti. L-ebda download pubbliku tal-Play Store.",
  },
  hero: {
    title: "ViaNexis — evidenza tat-trasport diġitali u pjattaforma tal-operat tas-sewwieq",
    subtitle: "App tas-sewwieq, kontroll tal-kumpanija, ġestjoni tad-dokumenti, messaġġi, notifiki, u flussi tax-xogħol tal-vjaġġi multilingwi f'sistema waħda.",
    primaryCta: "Ikkuntattjana",
    secondaryCta: "Tħejjija għall-ittestjar intern għaddejja",
    stats: [
      {
        label: "App tas-sewwieq",
        value: "Vjaġġ + offline",
      },
      {
        label: "Dokumenti",
        value: "CMR + verifika",
      },
      {
        label: "Messaġġi",
        value: "Multilingwi",
      },
      {
        label: "Status",
        value: "Preparazzjoni tat-test intern",
      }
    ],
  },
  platformStatus: {
    title: "Status kurrenti",
    items: [
      "Tħejjija għall-ittestjar intern ta' Google Play għaddejja — mhux download minn ħanut pubbliku.",
      "Prontezza għar-rilaxx tal-app tas-sewwieq u Samsung UAT fil-progress.",
      "Il-backend tal-produzzjoni, in-notifiki push, u l-integrazzjonijiet tal-imsieħba qed jiġu konnessi gradwalment."
    ],
    disclaimer: "ViaNexis ma jippretendix li s-sistema hija attiva, iċċertifikata, jew aċċettata uffiċjalment f'kull pajjiż.",
  },
  moduleLabels: {
    goal: "Goal",
    appFoundation: "Fondazzjoni tal-ġenb tal-app",
    backendDependency: "Dipendenza fuq backend / amministrazzjoni",
    important: "Importanti",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "App tas-sewwieq",
      goal: "Ħalli lis-sewwieqa jimmaniġġjaw ħidmiet, dokumenti u avvenimenti marbuta mal-vjaġġ fuq il-mowbajl — online u offline.",
      appFoundation: "Lista u dettalji tal-vjaġġ, upload ta' dokumenti, qbid tal-firma, listi ta' kontroll, illoggjar tal-inċidenti, salvataġġ u sinkronizzazzjoni offline, sessjoni protetta PIN.",
      backendDependency: "Live API, ambitu tal-kerrej, sinkronizzazzjoni tal-vjaġġ u tad-dokumenti, riżoluzzjoni tas-settings tal-kumpanija.",
    },
    {
      id: "company-admin",
      title: "Kontroll tal-Kumpanija / Amministratur",
      goal: "Ħalli lill-kumpaniji tat-trasport jimmaniġġjaw vjaġġi, utenti, permessi u flussi tax-xogħol minn portal wieħed.",
      appFoundation: "Id-dejta u l-azzjonijiet min-naħa tas-sewwieq jirriflettu r-regoli tal-kumpanija.",
      backendDependency: "Portal tal-kumpanija tal-web, app għall-amministrazzjoni tal-pjattaforma, rwoli, ġestjoni tal-vjaġġ, rekwiżiti tad-dokumenti, settings tal-iskambju tal-kumpanija.",
    },
    {
      id: "cmr-documents",
      title: "CMR diġitali & dokumenti",
      goal: "Dokumenti marbuta mal-vjaġġ — CMR, nota tal-kunsinna, fattura, karti tal-vettura u tas-sewwieq — ġestiti b'mod strutturat.",
      appFoundation: "Tlugħ ta' dokumenti, skan/ritratt, assenjazzjoni tal-vjaġġ, kompiti bbażati fuq il-ħtiġiet, kunċett ta' dokument primarju.",
      backendDependency: "Ħażna ta' dokumenti, metadejta, regoli tal-firma, qsim ta' awtorità b'limiti ta' ambitu.",
      disclaimer: "Id-dokumenti diġitali ma jkollhomx awtomatikament forza probatorja legali. L-aċċettazzjoni tvarja skont il-pajjiż u l-klijent.",
    },
    {
      id: "completed-package",
      title: "Pakkett tal-vjaġġ komplut",
      goal: "Agħti fil-qosor l-evidenza tal-vjaġġ komplut f'pakkett esportabbli.",
      appFoundation: "Għeluq tal-vjaġġ, dejta lokali, u avvenimenti sinkronizzati bħala l-bażi għall-assemblaġġ tal-pakkett.",
      backendDependency: "Ġenerazzjoni tal-pakkett tal-vjaġġ komplut, PDF esportazzjoni, esportazzjoni tal-verifika. Xi sezzjonijiet (eż. pallet/imballaġġ PDF) jibqgħu dipendenti.",
      disclaimer: "Il-pakkett jappoġġja dokumentazzjoni; ma tissostitwixxix il-valutazzjoni legali tal-kumpanija jew il-proċedimenti tal-awtorità.",
    },
    {
      id: "messaging-notifications",
      title: "Messaġġi u notifiki",
      goal: "Komunikazzjoni u twissijiet marbuta mal-vjaġġ għal avvenimenti importanti tas-sewwieq.",
      appFoundation: "Lista tal-messaġġi, ħjut marbuta mal-vjaġġ, pedament tan-notifika tan-naħa tal-app. Jintuża għal: messaġġ ġdid, bidla fil-vjaġġ, kompitu ta 'dokument, kwistjoni ta' sinkronizzazzjoni.",
      backendDependency: "Produzzjoni push (FCM/APNs), reġistrazzjoni tat-token tal-apparat, dispaċċ fuq is-server — dipendenza separata, għadha mhix ħaj.",
      disclaimer: "L-iskrin tal-mira jinfetaħ wara PIN. L-ispinta tal-produzzjoni ma tippretendix li kull avveniment jasal istantanjament.",
    },
    {
      id: "pallet-packaging",
      title: "Skambju ta' pallets u ippakkjar",
      goal: "Irreġistra l-iskambji tal-pallet u l-ippakkjar għal kull waqfa bi kwantitajiet, nuqqas, ħsara u tilwima.",
      appFoundation: "Moduli separati tal-pallet u tal-ippakkjar. Kumpanija-toggleable. Il-kumpanija tista 'tissettja minn qabel oġġetti; is-sewwieq jista 'jżid ippakkjar tad-dwana jekk ikun permess. Ħlief u sinkronizzazzjoni offline.",
      backendDependency: "Settings tal-iskambju API, sinkronizzazzjoni tar-rekords, UI tal-admin tal-portal, taqsima PDF tal-pakkett komplut — l-aħħar hija dipendenza.",
      disclaimer: "Is-sezzjoni tal-evidenza PDF mhix lesta għal kollox fil-każijiet kollha. Ir-reġistrazzjoni tappoġġja d-dokumentazzjoni tat-tilwim iżda ma tiddeċiedix it-tilwim.",
    },
    {
      id: "adr-border",
      title: "ADR / appoġġ fuq il-fruntiera",
      goal: "Informazzjoni ta' għajnuna ta' malajr għal ADR u l-kuntest tal-fruntiera/dwana — flimkien mal-verifika tas-sorsi uffiċjali.",
      appFoundation: "ADR informazzjoni, tfittxija tan-numru tan-NU, helper tal-kodiċi tal-mina, metadejta tal-fruntiera/dwana marbuta mal-vjaġġi.",
      backendDependency: "ADR aġġornamenti tad-database, metadata tar-regoli speċifiċi għall-pajjiż, data tal-punt ta' kontroll tal-fruntiera.",
      disclaimer: "ADR u d-dejta tal-mina huma informazzjoni ta' għajnuna. L-app ma tissostitwixxix il-leġiżlazzjoni, it-taħriġ, l-uffiċjal tad-DĠ tal-kumpanija, jew id-deċiżjonijiet tal-awtorità.",
    },
    {
      id: "truck-map",
      title: "Fondazzjoni tal-mappa tat-trakk",
      goal: "Ħarsa ġenerali tal-flotta u tal-vjaġġ fuq il-mappa — orjentazzjoni operattiva.",
      appFoundation: "Ħarsa ġenerali bbażata fuq il-mapep, vjaġġ u wirja tal-kuntest tal-vettura.",
      backendDependency: "Integrazzjoni tal-fornitur tat-telematika, fornitur tar-rotot, pożizzjoni diretta — integrazzjoni gradwali.",
      disclaimer: "Il-mappa ma tiggarantixxix konformità mar-restrizzjonijiet jew permessi legali.",
    },
    {
      id: "multilingwi",
      title: "Operazzjoni multilingwi",
      goal: "Timijiet multilingwi fuq pjattaforma waħda.",
      appFoundation: "UI multilingwi tal-app tas-sewwieq, żamma tal-messaġġ oriġinali, traduzzjoni bħala assistenza.",
      backendDependency: "Portal u espansjoni lokali tas-sit pubbliku, fluss tax-xogħol tar-reviżjoni tat-traduzzjoni.",
      disclaimer: "It-traduzzjoni magna jew AI hija assistiva; reviżjoni umana hija meħtieġa. Id-dokument oriġinali jibqa' primarju.",
    },
    {
      id: "audit-support",
      title: "Aċċess ta' verifika u appoġġ",
      goal: "Log traċċabbli; aċċess ikkontrollat ​​għall-appoġġ għas-soluzzjoni tal-problemi.",
      appFoundation: "Logging ta' avvenimenti għal azzjonijiet ta' vjaġġi u dokumenti; sessjonijiet ta’ appoġġ verifikabbli.",
      backendDependency: "Esportazzjoni tal-verifika, politika ta 'aċċess ta' appoġġ, matriċi tal-permess tal-intrapriża.",
      disclaimer: "Ir-reġistru tal-verifika mhuwiex prova legali awtomatika.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — użu responsabbli",
      body: "ADR u d-dejta tal-mina huma informazzjoni ta' għajnuna. Sorsi uffiċjali, tabelli, u regoli lokali attwali għandhom dejjem jiġu vverifikati. ViaNexis ma jissostitwixxix il-leġiżlazzjoni, it-taħriġ ADR, l-uffiċjal tal-merkanzija perikoluża tal-kumpanija, jew id-deċiżjonijiet tal-awtorità.",
    },
    aiOcr: {
      title: "AI, OCR & traduzzjoni",
      body: "AI sommarju, OCR, u traduzzjoni awtomatika huma għodod ta' assistenza. Reviżjoni umana hija meħtieġa. Id-dokument oriġinali u l-messaġġ jibqgħu primarji. Mhux parir legali u mhux traduzzjoni ċċertifikata.",
    },
    efti: {
      title: "eFTI & qsim ta' awtorità",
      body: "ViaNexis mhix pjattaforma ċċertifikata eFTI. Ma jwiegħedx aċċettazzjoni mill-awtorità f'kull pajjiż. Fondazzjoni eFTI lesta tfisser tħejjija teknika — mhux ċertifikat jew liċenzja.",
    },
  },
  home: {
    problem: {
      title: "Sfidi ta' loġistika ta' kuljum",
      subtitle: "Meta d-dokumenti, il-firem, u l-avvenimenti huma mferrxa, it-traċċabilità u l-prova jbatu.",
      cards: [
        {
          title: "Dokumenti mxerrda",
          description: "Dokumenti tal-vjaġġ bl-email, chat, jew karta — diffiċli biex tikkollega ma 'avvenimenti attwali.",
        },
        {
          title: "Firem nieqsa",
          description: "Firem tard jew neqsin idewmu l-għeluq u jżidu r-riskju tat-tilwim.",
        },
        {
          title: "Avvenimenti diffiċli biex jiġu ppruvati",
          description: "Pickup, konsenja, skambju tal-pallet, inċident — mingħajr zkuk strutturati, diffiċli biex jiġu rintraċċati.",
        },
        {
          title: "Timijiet multilingwi",
          description: "Nuqqas ta' ftehim ta' messaġġi ta' kuljum — żamma tat-test oriġinali u traduzzjoni riveduta meħtieġa.",
        }
      ],
    },
    modules: {
      title: "Moduli tal-pjattaformi",
      subtitle: "Għan, pedament fuq in-naħa tal-app, dipendenza fuq il-backend/admin — b'kliem sikur legali.",
    },
    pallet: {
      title: "Skambju ta' pallets u ippakkjar",
      subtitle: "Moduli separati, toggleable mill-kumpanija — ħlief offline għall-awditjar.",
    },
    notifications: {
      title: "Messaġġi u notifiki",
      subtitle: "Fondazzjoni fuq in-naħa tal-app lesta — l-ispinta tal-produzzjoni hija dipendenza backend separata.",
      cards: [
        {
          title: "Tipi ta' avveniment ta' notifika",
          description: "Messaġġ ġdid, bidla fil-vjaġġ, kompitu ta 'dokument, kwistjoni ta' sinkronizzazzjoni.",
        },
        {
          title: "Tektek ir-rotta & PIN",
          description: "Iftaħ l-iskrin tal-mira min-notifika; rabta profonda wara PIN.",
        },
        {
          title: "lockscreen sikur għall-privatezza",
          description: "Dokument sħiħ jew kontenut tal-messaġġ mhux muri fuq lockscreen awtomatikament.",
        }
      ],
      backendDepTitle: "Dipendenza backend",
      backendDepBody: "L-imbottatura tal-produzzjoni (FCM/APNs), ir-reġistrazzjoni tat-tokens tal-apparat, u d-dispaċċ min-naħa tas-server għadhom mhumiex ħajjin — integrazzjoni separata meħtieġa.",
    },
    disclaimersSection: {
      title: "Użu responsabbli — avviżi importanti",
    },
    security: {
      title: "Protezzjoni u kontroll",
      subtitle: "Protezzjoni tal-kumpanija u tas-sewwieq b'dokumentazzjoni strutturata.",
      cards: [
        {
          title: "Protezzjoni tal-kumpanija",
          description: "Dokumentazzjoni bbażata fuq ir-rekwiżiti, avvenimenti verifikabbli, aċċess ikkontrollat.",
        },
        {
          title: "Protezzjoni tas-sewwieq",
          description: "Proċess strutturat għad-dokumentazzjoni ta' avvenimenti fit-tilwim.",
        },
        {
          title: "Sinsla tad-dokumentazzjoni",
          description: "Karti u avvenimenti marbuta mal-vjaġġ f'sistema waħda.",
        },
        {
          title: "Avvenimenti verifikabbli",
          description: "Min għamel xiex meta — illoggjat u jista' jitfittex.",
        }
      ],
      notPromiseTitle: "Mhux wegħda",
      notPromiseBody: "ViaNexis ma jwiegħedx forza probatorja legali awtomatika. Il-valutazzjoni legali tiddependi fuq il-kuntest.",
    },
    contact: {
      title: "Kuntatt u ttestjar intern",
      subtitle: "Aċċess ikkontrollat ​​— mhux reġistrazzjoni awtomatika, ebda download pubbliku Play.",
      body: "L-app tas-sewwieq tinsab fil-preparazzjoni tal-ittestjar intern tal-Google Play. Prontezza tar-rilaxx u Samsung UAT fil-progress. L-attivazzjoni mhix awtomatika.",
      consentNote: "Is-sistema tieħu ħsieb id-dokumenti, il-flussi tax-xogħol tas-sewwieqa, id-dejta tal-kumpanija, u l-permessi — kull aċċess jiġi rivedut individwalment.",
      contactLink: "Ikkuntattjana →",
    },
  },
  contactForm: {
    title: "Ikkuntattjana",
    subtitle: "Interess fil-pjattaforma ViaNexis — mhux reġistrazzjoni awtomatika.",
    name: "Isem *",
    company: "Kumpanija *",
    email: "Email *",
    phone: "Telefon",
    message: "Messaġġ *",
    interestType: "Tip ta' interess *",
    interestPlaceholder: "Agħżel...",
    interestOptions: [
      {
        value: "driver-app",
        label: "App tas-sewwieq",
      },
      {
        value: "company-admin",
        label: "Pjattaforma tal-Kumpanija/Amministratur",
      },
      {
        value: "dokumenti",
        label: "Ġestjoni tad-dokumenti",
      },
      {
        value: "pallet-packaging",
        label: "Pallet / ippakkjar",
      },
      {
        value: "adr-customs",
        label: "ADR / appoġġ doganali",
      },
      {
        value: "oħra",
        label: "Oħrajn",
      }
    ],
    consent: "Naqbel li ViaNexis tipproċessa d-dejta pprovduta biss għal skopijiet ta' kuntatt. *",
    submit: "Ibgħat messaġġ",
    submitMailto: "Ibgħat email",
    intakeDisabled: "Is-sottomissjoni taċ-ċomb onlajn qed titħejja. Uża kuntatt bl-email jew erġa' pprova aktar tard.",
    successTitle: "Messaġġ riċevut",
    successBody: "Grazzi għall-interess tiegħek. It-tim tagħna se jikkuntattjak. L-attivazzjoni tal-aċċess mhix awtomatika.",
    newSubmission: "Messaġġ ġdid",
    errors: {
      name: "Isem huwa meħtieġ.",
      company: "Kumpanija hija meħtieġa.",
      email: "L-email hija meħtieġa.",
      emailInvalid: "Daħħal indirizz elettroniku validu.",
      message: "Huwa meħtieġ messaġġ.",
      interest: "Agħżel tip ta' interess.",
      consent: "Huwa meħtieġ kunsens.",
      submitFailed: "Il-messaġġ ma setax jintbagħat. Ipprova email minflok.",
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
        title: "Pakkett ta' spezzjoni tal-awtorità",
        description: "Dokumenti u avvenimenti marbuta ma' vjaġġi f'pakkett kondiviż b'ambitu limitat.",
      },
      {
        title: "Skop / aċċess limitat fil-ħin",
        description: "Aċċess limitat ibbażat fuq QR — mhux pubbliku.",
      },
      {
        title: "Verifika",
        description: "Aċċess illoggjat u qsim ta' avvenimenti.",
      },
      {
        title: "eFTI-fondazzjoni lesta",
        description: "Bażi teknika għal integrazzjoni futura — mhux ċertifikazzjoni.",
      }
    ],
  },
  legal: legalMt,
};
