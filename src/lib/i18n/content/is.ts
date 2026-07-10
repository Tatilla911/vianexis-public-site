import type { SiteContent } from "../types";
import { legalIs } from "./legal/is";

export const contentIs: SiteContent = {
  meta: {
    title: "ViaNexis Flutningastarfsemi ökumanna og fyrirtækja",
    description: "Ökumannsforrit, fyrirtækjaeftirlit, skjalastjórnun, skilaboð, tilkynningar og fjöltyngt ferðaverkflæði í einu kerfi. Undirbúningur innri prófunar í gangi.",
    ogLocale: "is_IS",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Eiginleikar",
    driverApp: "Bílstjóri app",
    companyPortal: "Fyrirtækjagátt",
    documents: "Skjöl",
    authorityEfti: "Yfirvald / eFTI",
    security: "Öryggi",
    pilot: "Aðgangur flugmanna",
    contact: "Hafðu samband",
    requestAccess: "Biðja um aðgang",
    menuOpen: "Opna valmynd",
  },
  footer: {
    tagline: "Stafræn flutningssönnunargögn og akstursvettvangur fyrir flutningafyrirtæki. eFTI-tilbúinn grunnur - ekki vottaður eFTI vettvangur.",
    product: "Vara",
    legal: "Löglegt",
    legalNotice: "Lagatilkynning",
    privacy: "Persónuverndarstefna",
    terms: "Notkunarskilmálar",
    disclaimers: "Ábyrg notkun",
    dataContact: "Tengiliður gagnaverndar",
    copyright: "Ekki vottaður eFTI vettvangur. Lofar ekki samþykki valds, sjálfvirku lagalegu sönnunargildi, gallalausri OCR/AI/þýðingu eða neyðar-/SOS þjónustu. Ekkert opinbert Play Store niðurhal.",
  },
  hero: {
    title: "ViaNexis — stafræn flutningssönnunargögn og akstursvettvangur ökumanns",
    subtitle: "Ökumannsforrit, fyrirtækjaeftirlit, skjalastjórnun, skilaboð, tilkynningar og fjöltyngt ferðaverkflæði í einu kerfi.",
    primaryCta: "Hafðu samband við okkur",
    secondaryCta: "Undirbúningur innri prófunar í gangi",
    stats: [
      {
        label: "Bílstjóri app",
        value: "Ferð + án nettengingar",
      },
      {
        label: "Skjöl",
        value: "CMR + endurskoðun",
      },
      {
        label: "Skilaboð",
        value: "Fjöltyngt",
      },
      {
        label: "Staða",
        value: "Undirbúningur fyrir innri próf",
      }
    ],
  },
  platformStatus: {
    title: "Núverandi staða",
    items: [
      "Undirbúningur fyrir innri prófun á Google Play – ekki niðurhal í opinberri verslun.",
      "Viðbúið að gefa út ökumannsforrit og Samsung UAT í vinnslu.",
      "Framleiðslubakendi, ýttutilkynningar og samþættingar samstarfsaðila eru tengdar smám saman."
    ],
    disclaimer: "ViaNexis heldur því ekki fram að kerfið sé lifandi, vottað eða opinberlega samþykkt í hverju landi.",
  },
  moduleLabels: {
    goal: "Markmið",
    appFoundation: "Grunnur app hliðar",
    backendDependency: "Bakendi / stjórnandi ósjálfstæði",
    important: "Mikilvægt",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Bílstjóri app",
      goal: "Leyfðu ökumönnum að sjá um ferðatengd verkefni, skjöl og viðburði í farsíma — á netinu og utan nets.",
      appFoundation: "Ferðalisti og smáatriði, upphleðsla skjala, handtaka undirskrifta, gátlistar, atvikaskráning, vistun og samstilling án nettengingar, PIN vernduð lota.",
      backendDependency: "Lifandi API, umfang leigjanda, samstillingu ferða og skjala, upplausn fyrirtækjastillinga.",
    },
    {
      id: "company-admin",
      title: "Fyrirtæki / Admin stjórn",
      goal: "Leyfðu flutningafyrirtækjum að stjórna ferðum, notendum, heimildum og verkflæði frá einni gátt.",
      appFoundation: "Gögn og aðgerðir frá ökumanni endurspegla reglur fyrirtækisins.",
      backendDependency: "Veffyrirtækjagátt, stjórnunarforrit vettvangs, hlutverk, ferðastjórnun, skjalakröfur, stillingar fyrirtækjaskipta.",
    },
    {
      id: "cmr-documents",
      title: "Stafræn CMR & skjöl",
      goal: "Ferðatengd skjöl — CMR, fylgiseðill, reikningur, ökutæki og ökumannspappírar — stjórnað á skipulegan hátt.",
      appFoundation: "Upphleðsla skjala, skönnun/mynd, ferðaúthlutun, kröfumiðuð verkefni, aðal skjalahugmynd.",
      backendDependency: "Skjalageymsla, lýsigögn, undirskriftarreglur, deiling heimildar með umfangstakmörkunum.",
      disclaimer: "Stafræn skjöl hafa ekki sjálfkrafa lagalegt sönnunargildi. Samþykki er mismunandi eftir löndum og viðskiptavinum.",
    },
    {
      id: "completed-package",
      title: "Fullbúinn ferðapakki",
      goal: "Dragðu saman sönnunargögn fyrir lokið ferð í útflutningspakka.",
      appFoundation: "Lokun ferðar, staðbundin gögn og samstilltir atburðir sem grunnur að pakkasamsetningu.",
      backendDependency: "Búið að búa til ferðapakka, PDF útflutningur, endurskoðunarútflutningur. Sumir hlutar (t.d. bretti/umbúðir PDF) eru áfram ósjálfstæðir.",
      disclaimer: "Pakkinn styður skjöl; það kemur ekki í stað lögfræðilegs mats eða valdsmeðferðar félagsins.",
    },
    {
      id: "messaging-notifications",
      title: "Skilaboð og tilkynningar",
      goal: "Ferðatengd samskipti og viðvaranir fyrir mikilvæga atburði ökumanns.",
      appFoundation: "Skilaboðalisti, ferðatengdir þræðir, tilkynningagrunnur við app hlið. Notanlegt fyrir: ný skilaboð, breytingu á ferð, skjalaverkefni, samstillingarvandamál.",
      backendDependency: "Framleiðsluýting (FCM/APNs), skráning á tákni tækis, sending á miðlara - aðskilin háð, ekki enn í notkun.",
      disclaimer: "Markskjár opnast eftir PIN. Framleiðsluframleiðsla heldur því ekki fram að allir viðburðir berist samstundis.",
    },
    {
      id: "pallet-packaging",
      title: "Skipti á bretti og umbúðum",
      goal: "Skráðu bretti og umbúðir á stoppi með magni, skorti, skemmdum og ágreiningi.",
      appFoundation: "Aðskildar bretti og umbúðir. Hægt að skipta um fyrirtæki. Fyrirtækið getur forstillt hluti; ökumaður getur bætt við sérsniðnum umbúðum ef leyfilegt er. Vista og samstilla án nettengingar.",
      backendDependency: "Skiptistillingar API, samstilling skráa, notendaviðmót vefgáttar, lokið pakki PDF hluti - síðarnefnda er ósjálfstæði.",
      disclaimer: "PDF sönnunarhluti er ekki að fullu tilbúinn í öllum tilvikum. Upptaka styður deiluskjöl en sker ekki úr ágreiningi.",
    },
    {
      id: "adr-border",
      title: "ADR / landamærastuðningur",
      goal: "Fljótlegar hjálparupplýsingar fyrir ADR og landamæri/siðsamhengi — ásamt sannprófun á opinberum heimildum.",
      appFoundation: "ADR upplýsingar, SÞ númeraleit, hjálpargangakóða, landamæra-/tolllýsigögn tengd ferðum.",
      backendDependency: "ADR gagnagrunnsuppfærslur, lýsigögn landssértækra reglna, gögn um landamæraeftirlit.",
      disclaimer: "ADR og gönggögn eru hjálparupplýsingar. Forritið kemur ekki í stað laga, þjálfunar, yfirmanns DG fyrirtækisins eða ákvarðana yfirvalda.",
    },
    {
      id: "truck-map",
      title: "Vörubílakort grunnur",
      goal: "Yfirlit yfir flota og ferð á korti — rekstrarstefnu.",
      appFoundation: "Kort byggt yfirlit, ferð og samhengi ökutækis.",
      backendDependency: "Samþætting fjarskiptaveitu, leiðarveita, lifandi staða - smám saman samþætting.",
      disclaimer: "Kortið ábyrgist ekki að farið sé að lagalegum takmörkunum eða leyfum.",
    },
    {
      id: "fjöltyngt",
      title: "Fjöltyng aðgerð",
      goal: "Fjöltyngd teymi á einum vettvangi.",
      appFoundation: "Ökumannsforrit fjöltyngt notendaviðmót, varðveisla upprunalegra skilaboða, þýðing sem aðstoð.",
      backendDependency: "Stækkun gáttar og opinberrar síðu, verkflæði fyrir yfirferð þýðinga.",
      disclaimer: "Vél- eða AI þýðing hjálpar; mannleg endurskoðun er krafist. Upprunalega skjalið er áfram aðal.",
    },
    {
      id: "audit-support",
      title: "Aðgangur að endurskoðun og stuðningi",
      goal: "Rekjanlegur log; stjórnaðan stuðningsaðgang fyrir bilanaleit.",
      appFoundation: "Atburðaskráning fyrir ferða- og skjalaaðgerðir; endurskoðanlegir stuðningsfundir.",
      backendDependency: "Endurskoðunarútflutningur, stuðningsaðgangsstefna, heimildafylki fyrirtækja.",
      disclaimer: "Endurskoðunarskráin er ekki sjálfvirk lagasönnun.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — ábyrg notkun",
      body: "ADR og gönggögn eru hjálparupplýsingar. Ávallt verður að sannreyna opinberar heimildir, töflur og gildandi staðbundnar reglur. ViaNexis kemur ekki í staðinn fyrir löggjöf, ADR þjálfun, yfirmann hættulegra varnings fyrirtækisins eða ákvarðanir yfirvalda.",
    },
    aiOcr: {
      title: "AI, OCR & þýðing",
      body: "AI samantekt, OCR og sjálfvirk þýðing eru hjálpartæki. Mannleg endurskoðun er nauðsynleg. Upprunalega skjalið og skilaboðin eru áfram aðal. Ekki lögfræðiráðgjöf og ekki löggilt þýðing.",
    },
    efti: {
      title: "eFTI og valdsmiðlun",
      body: "ViaNexis er ekki vottaður eFTI vettvangur. Það lofar ekki valdssamþykki í hverju landi. eFTI-tilbúinn grunnur þýðir tæknilegan viðbúnað - ekki vottorð eða leyfi.",
    },
  },
  home: {
    problem: {
      title: "Daglegar flutningsáskoranir",
      subtitle: "Þegar skjöl, undirskriftir og atburðir eru á víð og dreif er rekjanleiki og sönnun fyrir stafni.",
      cards: [
        {
          title: "Dreifð skjöl",
          description: "Ferðablöð í tölvupósti, spjalli eða pappír - erfitt að tengja við raunverulega atburði.",
        },
        {
          title: "Vantar undirskriftir",
          description: "Seint eða vantar undirskriftir tefja lokun og auka ágreiningshættu.",
        },
        {
          title: "Atburðir sem erfitt er að sanna",
          description: "Afhending, afhending, brettaskipti, atvik — án skipulagðra annála, erfitt að rekja.",
        },
        {
          title: "Fjöltyngd teymi",
          description: "Daglegur misskilningur í skilaboðum — varðveisla upprunalegs texta og endurskoðaðrar þýðingar krafist.",
        }
      ],
    },
    modules: {
      title: "Pallur einingar",
      subtitle: "Markmið, grunnur á apphlið, háð bakenda/stjórnanda - með lagalega öruggu orðalagi.",
    },
    pallet: {
      title: "Skipti á bretti og umbúðum",
      subtitle: "Aðskildar einingar, hægt að skipta um fyrirtæki — vistun án nettengingar í átt að endurskoðun.",
    },
    notifications: {
      title: "Skilaboð og tilkynningar",
      subtitle: "Grunnur apphliðar tilbúinn - framleiðsluýting er sérstakt bakendaháð.",
      cards: [
        {
          title: "Tegundir tilkynningaviðburða",
          description: "Ný skilaboð, breyting á ferð, skjalaverkefni, samstillingarmál.",
        },
        {
          title: "Pikkaðu á leið og PIN",
          description: "Opnaðu markskjá frá tilkynningu; djúpur hlekkur eftir PIN.",
        },
        {
          title: "Persónuverndaröryggis læsaskjár",
          description: "Fullt skjal eða innihald skilaboða er ekki sjálfgefið sýnt á lásskjá.",
        }
      ],
      backendDepTitle: "Bakenda ósjálfstæði",
      backendDepBody: "Framleiðsluýting (FCM/APNs), skráning á tákni tækis og sending á miðlara er ekki enn í gangi - aðskilin samþætting er nauðsynleg.",
    },
    disclaimersSection: {
      title: "Ábyrg notkun — mikilvægar tilkynningar",
    },
    security: {
      title: "Vernd og eftirlit",
      subtitle: "Fyrirtækja- og ökumannsvernd með skipulögðum skjölum.",
      cards: [
        {
          title: "Fyrirtækjavernd",
          description: "Kröfubundin skjöl, endurskoðanlegir atburðir, stýrður aðgangur.",
        },
        {
          title: "Vörn ökumanns",
          description: "Skipulagt ferli til að skrásetja atburði í deilum.",
        },
        {
          title: "Skjalaburður",
          description: "Ferðatengd blöð og viðburðir í einu kerfi.",
        },
        {
          title: "Endurskoðanlegir atburðir",
          description: "Hver gerði hvað hvenær - skráður og hægt að leita.",
        }
      ],
      notPromiseTitle: "Ekki loforð",
      notPromiseBody: "ViaNexis lofar ekki sjálfvirku lagalegu sönnunargildi. Lögfræðilegt mat fer eftir samhengi.",
    },
    contact: {
      title: "Snerting og innri prófun",
      subtitle: "Stýrður aðgangur — ekki sjálfvirk skráning, ekkert opinbert niðurhal á Play.",
      body: "Ökumannsforritið er í Google Play innri prófunarundirbúningi. Losunarviðbúnaður og Samsung UAT í gangi. Virkjun er ekki sjálfvirk.",
      consentNote: "Kerfið sér um skjöl, verkflæði ökumanna, fyrirtækjagögn og heimildir - hver aðgangur er skoðaður fyrir sig.",
      contactLink: "Hafðu samband við okkur →",
    },
  },
  contactForm: {
    title: "Hafðu samband við okkur",
    subtitle: "Áhugi á ViaNexis pallinum — ekki sjálfvirkri skráningu.",
    name: "Nafn *",
    company: "Fyrirtæki *",
    email: "Tölvupóstur *",
    phone: "Sími",
    message: "Skilaboð *",
    interestType: "Vaxtategund *",
    interestPlaceholder: "Veldu...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Bílstjóri app",
      },
      {
        value: "company-admin",
        label: "Fyrirtæki / stjórnunarvettvangur",
      },
      {
        value: "skjöl",
        label: "Skjalastjórnun",
      },
      {
        value: "pallet-packaging",
        label: "Bretti / umbúðir",
      },
      {
        value: "adr-customs",
        label: "ADR / tollstuðningur",
      },
      {
        value: "annað",
        label: "Annað",
      }
    ],
    consent: "Ég samþykki að ViaNexis vinni uppgefnar gögn eingöngu í snertingarskyni. *",
    submit: "Sendu skilaboð",
    submitMailto: "Sendu tölvupóst",
    intakeDisabled: "Verið er að undirbúa leiðaskil á netinu. Notaðu tengilið í tölvupósti eða reyndu aftur síðar.",
    successTitle: "Skilaboð móttekin",
    successBody: "Þakka þér fyrir áhugann. Lið okkar mun hafa samband við þig. Aðgangsvirkjun er ekki sjálfvirk.",
    newSubmission: "Ný skilaboð",
    errors: {
      name: "Nafn er áskilið.",
      company: "Fyrirtæki er krafist.",
      email: "Tölvupóstur er nauðsynlegur.",
      emailInvalid: "Sláðu inn gilt netfang.",
      message: "Skilaboð eru nauðsynleg.",
      interest: "Veldu áhugasvið.",
      consent: "Samþykki þarf.",
      submitFailed: "Ekki var hægt að senda skilaboð. Prófaðu tölvupóst í staðinn.",
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
        title: "Skoðunarpakki yfirvalda",
        description: "Ferðatengd skjöl og viðburðir í sameiginlegum pakka með takmörkuðum umfangi.",
      },
      {
        title: "Umfang / tímatakmarkaður aðgangur",
        description: "QR byggður takmarkaður aðgangur — ekki opinber.",
      },
      {
        title: "Endurskoðun",
        description: "Skráður aðgangur og samnýtingarviðburðir.",
      },
      {
        title: "eFTI-tilbúinn grunnur",
        description: "Tæknilegur grunnur fyrir framtíðarsamþættingu - ekki vottun.",
      }
    ],
  },
  legal: legalIs,
};
