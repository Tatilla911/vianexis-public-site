/**
 * Draft (non-golden) telematics commercial assessment labels.
 * HU/EN live in company-assessment-labels.ts and override these.
 * Values must not equal the English source strings (assessment label test P).
 */
import type { Locale } from './types';

type TelematicsFieldDraft = {
  telematicsIntegrationRequested: string;
  telematicsVehicleCount: string;
  telematicsCapTachograph: string;
  telematicsCapTemperature: string;
  telematicsCapOdometer: string;
  telematicsCapFuel: string;
  telematicsCapLivePosition: string;
};

export const TELEMATICS_FIELD_DRAFTS: Partial<
  Record<Locale, TelematicsFieldDraft>
> = {
  de: {
    telematicsIntegrationRequested:
      'Soll ViaNexis diesen Telematikanbieter anbinden?',
    telematicsVehicleCount:
      'Wie viele aktive Fahrzeuge sollen für die Telematikintegration zugeordnet werden?',
    telematicsCapTachograph: 'Interesse an Tachographendaten (optional)',
    telematicsCapTemperature: 'Interesse an Temperaturdaten (optional)',
    telematicsCapOdometer: 'Interesse an Kilometerzählerdaten (optional)',
    telematicsCapFuel: 'Interesse an Kraftstoffdaten (optional)',
    telematicsCapLivePosition: 'Interesse an Live-Position / Ereignisdaten (optional)',
  },
  ro: {
    telematicsIntegrationRequested:
      'Doriți ca ViaNexis să integreze acest furnizor de telematică?',
    telematicsVehicleCount:
      'Câte vehicule active trebuie mapate pentru integrarea telematică?',
    telematicsCapTachograph: 'Interes pentru date tahograf (opțional)',
    telematicsCapTemperature: 'Interes pentru date de temperatură (opțional)',
    telematicsCapOdometer: 'Interes pentru date odometru (opțional)',
    telematicsCapFuel: 'Interes pentru date de combustibil (opțional)',
    telematicsCapLivePosition: 'Interes pentru poziție live / evenimente (opțional)',
  },
  sk: {
    telematicsIntegrationRequested:
      'Chcete, aby ViaNexis integroval tohto telematického poskytovateľa?',
    telematicsVehicleCount:
      'Koľko aktívnych vozidiel sa má namapovať na telematickú integráciu?',
    telematicsCapTachograph: 'Záujem o tachografové údaje (voliteľné)',
    telematicsCapTemperature: 'Záujem o teplotné údaje (voliteľné)',
    telematicsCapOdometer: 'Záujem o údaje odometra (voliteľné)',
    telematicsCapFuel: 'Záujem o palivové údaje (voliteľné)',
    telematicsCapLivePosition: 'Záujem o živú polohu / udalosti (voliteľné)',
  },
  pl: {
    telematicsIntegrationRequested:
      'Czy ViaNexis ma zintegrować tego dostawcę telematyki?',
    telematicsVehicleCount:
      'Ile aktywnych pojazdów ma być zmapowanych do integracji telematycznej?',
    telematicsCapTachograph: 'Zainteresowanie danymi tachografu (opcjonalnie)',
    telematicsCapTemperature: 'Zainteresowanie danymi temperatury (opcjonalnie)',
    telematicsCapOdometer: 'Zainteresowanie danymi licznika (opcjonalnie)',
    telematicsCapFuel: 'Zainteresowanie danymi paliwa (opcjonalnie)',
    telematicsCapLivePosition: 'Zainteresowanie pozycją na żywo / zdarzeniami (opcjonalnie)',
  },
  cs: {
    telematicsIntegrationRequested:
      'Chcete, aby ViaNexis integroval tohoto telematického poskytovatele?',
    telematicsVehicleCount:
      'Kolik aktivních vozidel má být namapováno pro telematickou integraci?',
    telematicsCapTachograph: 'Zájem o tachografová data (volitelné)',
    telematicsCapTemperature: 'Zájem o teplotní data (volitelné)',
    telematicsCapOdometer: 'Zájem o data tachometru (volitelné)',
    telematicsCapFuel: 'Zájem o palivová data (volitelné)',
    telematicsCapLivePosition: 'Zájem o živou polohu / události (volitelné)',
  },
  bg: {
    telematicsIntegrationRequested:
      'Искате ли ViaNexis да интегрира този телематичен доставчик?',
    telematicsVehicleCount:
      'Колко активни превозни средства трябва да се съпоставят за телематична интеграция?',
    telematicsCapTachograph: 'Интерес към данни от тахограф (по желание)',
    telematicsCapTemperature: 'Интерес към температурни данни (по желание)',
    telematicsCapOdometer: 'Интерес към данни от одометър (по желание)',
    telematicsCapFuel: 'Интерес към данни за гориво (по желание)',
    telematicsCapLivePosition: 'Интерес към жива позиция / събития (по желание)',
  },
  hr: {
    telematicsIntegrationRequested:
      'Želite li da ViaNexis integrira ovog telematičkog pružatelja?',
    telematicsVehicleCount:
      'Koliko aktivnih vozila treba mapirati za telematičku integraciju?',
    telematicsCapTachograph: 'Interes za tahografske podatke (neobavezno)',
    telematicsCapTemperature: 'Interes za podatke o temperaturi (neobavezno)',
    telematicsCapOdometer: 'Interes za podatke odometra (neobavezno)',
    telematicsCapFuel: 'Interes za podatke o gorivu (neobavezno)',
    telematicsCapLivePosition: 'Interes za živu poziciju / događaje (neobavezno)',
  },
  sr: {
    telematicsIntegrationRequested:
      'Želite li da ViaNexis integriše ovog telematičkog pružaoca?',
    telematicsVehicleCount:
      'Koliko aktivnih vozila treba mapirati za telematičku integraciju?',
    telematicsCapTachograph: 'Interesovanje za tahografske podatke (opciono)',
    telematicsCapTemperature: 'Interesovanje za podatke o temperaturi (opciono)',
    telematicsCapOdometer: 'Interesovanje za podatke odometra (opciono)',
    telematicsCapFuel: 'Interesovanje za podatke o gorivu (opciono)',
    telematicsCapLivePosition: 'Interesovanje za živu poziciju / događaje (opciono)',
  },
  sl: {
    telematicsIntegrationRequested:
      'Želite, da ViaNexis integrira tega telematskega ponudnika?',
    telematicsVehicleCount:
      'Koliko aktivnih vozil naj se preslika za telematsko integracijo?',
    telematicsCapTachograph: 'Zanimanje za tahografske podatke (neobvezno)',
    telematicsCapTemperature: 'Zanimanje za temperaturne podatke (neobvezno)',
    telematicsCapOdometer: 'Zanimanje za podatke odometra (neobvezno)',
    telematicsCapFuel: 'Zanimanje za podatke o gorivu (neobvezno)',
    telematicsCapLivePosition: 'Zanimanje za živo lokacijo / dogodke (neobvezno)',
  },
  et: {
    telematicsIntegrationRequested:
      'Kas soovite, et ViaNexis integreeriks selle telemaatikateenuse osutaja?',
    telematicsVehicleCount:
      'Mitu aktiivset sõidukit tuleks telemaatika integratsiooniks kaardistada?',
    telematicsCapTachograph: 'Huvi tahhograafiandmete vastu (valikuline)',
    telematicsCapTemperature: 'Huvi temperatuurandmete vastu (valikuline)',
    telematicsCapOdometer: 'Huvi odomeetriandmete vastu (valikuline)',
    telematicsCapFuel: 'Huvi kütuseandmete vastu (valikuline)',
    telematicsCapLivePosition: 'Huvi reaalaja asukoha / sündmuste vastu (valikuline)',
  },
  lv: {
    telematicsIntegrationRequested:
      'Vai vēlaties, lai ViaNexis integrētu šo telematikas pakalpojumu sniedzēju?',
    telematicsVehicleCount:
      'Cik aktīvo transportlīdzekļu jākartē telematikas integrācijai?',
    telematicsCapTachograph: 'Interese par tahogrāfa datiem (pēc izvēles)',
    telematicsCapTemperature: 'Interese par temperatūras datiem (pēc izvēles)',
    telematicsCapOdometer: 'Interese par odometra datiem (pēc izvēles)',
    telematicsCapFuel: 'Interese par degvielas datiem (pēc izvēles)',
    telematicsCapLivePosition: 'Interese par dzīvo pozīciju / notikumiem (pēc izvēles)',
  },
  lt: {
    telematicsIntegrationRequested:
      'Ar norite, kad ViaNexis integruotų šį telematikos teikėją?',
    telematicsVehicleCount:
      'Kiek aktyvių transporto priemonių reikia susieti telematikos integracijai?',
    telematicsCapTachograph: 'Susidomėjimas tachografo duomenimis (neprivaloma)',
    telematicsCapTemperature: 'Susidomėjimas temperatūros duomenimis (neprivaloma)',
    telematicsCapOdometer: 'Susidomėjimas odometro duomenimis (neprivaloma)',
    telematicsCapFuel: 'Susidomėjimas kuro duomenimis (neprivaloma)',
    telematicsCapLivePosition: 'Susidomėjimas gyva vieta / įvykiais (neprivaloma)',
  },
  fi: {
    telematicsIntegrationRequested:
      'Haluatteko, että ViaNexis integroi tämän telematiikkapalvelun?',
    telematicsVehicleCount:
      'Kuinka monta aktiivista ajoneuvoa tulisi kartoittaa telematiikkaintegraatioon?',
    telematicsCapTachograph: 'Kiinnostus ajopiirturitietoihin (valinnainen)',
    telematicsCapTemperature: 'Kiinnostus lämpötilatietoihin (valinnainen)',
    telematicsCapOdometer: 'Kiinnostus matkamittaritietoihin (valinnainen)',
    telematicsCapFuel: 'Kiinnostus polttoainetietoihin (valinnainen)',
    telematicsCapLivePosition: 'Kiinnostus live-sijaintiin / tapahtumiin (valinnainen)',
  },
  sv: {
    telematicsIntegrationRequested:
      'Vill ni att ViaNexis integrerar den här telematikleverantören?',
    telematicsVehicleCount:
      'Hur många aktiva fordon ska mappas för telematikintegrationen?',
    telematicsCapTachograph: 'Intresse för färdskrivardata (valfritt)',
    telematicsCapTemperature: 'Intresse för temperaturdata (valfritt)',
    telematicsCapOdometer: 'Intresse för vägmätardata (valfritt)',
    telematicsCapFuel: 'Intresse för bränsledata (valfritt)',
    telematicsCapLivePosition: 'Intresse för liveposition / händelser (valfritt)',
  },
  da: {
    telematicsIntegrationRequested:
      'Ønsker I, at ViaNexis integrerer denne telematikudbyder?',
    telematicsVehicleCount:
      'Hvor mange aktive køretøjer skal mappes til telematikintegrationen?',
    telematicsCapTachograph: 'Interesse for tachografdata (valgfrit)',
    telematicsCapTemperature: 'Interesse for temperaturdata (valgfrit)',
    telematicsCapOdometer: 'Interesse for kilometertællerdata (valgfrit)',
    telematicsCapFuel: 'Interesse for brændstofdata (valgfrit)',
    telematicsCapLivePosition: 'Interesse for liveposition / hændelser (valgfrit)',
  },
  nb: {
    telematicsIntegrationRequested:
      'Ønsker dere at ViaNexis integrerer denne telematikkleverandøren?',
    telematicsVehicleCount:
      'Hvor mange aktive kjøretøy skal mappes for telematikkintegrasjonen?',
    telematicsCapTachograph: 'Interesse for tachografdata (valgfritt)',
    telematicsCapTemperature: 'Interesse for temperaturdata (valgfritt)',
    telematicsCapOdometer: 'Interesse for kilometertellerdata (valgfritt)',
    telematicsCapFuel: 'Interesse for drivstoffdata (valgfritt)',
    telematicsCapLivePosition: 'Interesse for liveposisjon / hendelser (valgfritt)',
  },
  nl: {
    telematicsIntegrationRequested:
      'Wilt u dat ViaNexis deze telematicaanbieder koppelt?',
    telematicsVehicleCount:
      'Hoeveel actieve voertuigen moeten worden gekoppeld voor de telematica-integratie?',
    telematicsCapTachograph: 'Interesse in tachograafgegevens (optioneel)',
    telematicsCapTemperature: 'Interesse in temperatuurgegevens (optioneel)',
    telematicsCapFuel: 'Interesse in brandstofgegevens (optioneel)',
    telematicsCapOdometer: 'Interesse in kilometertellergegevens (optioneel)',
    telematicsCapLivePosition: 'Interesse in livepositie / gebeurtenissen (optioneel)',
  },
  fr: {
    telematicsIntegrationRequested:
      'Souhaitez-vous que ViaNexis intègre ce fournisseur de télématique ?',
    telematicsVehicleCount:
      'Combien de véhicules actifs doivent être associés à l’intégration télématique ?',
    telematicsCapTachograph: 'Intérêt pour les données tachygraphe (facultatif)',
    telematicsCapTemperature: 'Intérêt pour les données de température (facultatif)',
    telematicsCapOdometer: 'Intérêt pour les données odomètre (facultatif)',
    telematicsCapFuel: 'Intérêt pour les données carburant (facultatif)',
    telematicsCapLivePosition: 'Intérêt pour la position en direct / les événements (facultatif)',
  },
  es: {
    telematicsIntegrationRequested:
      '¿Quieren que ViaNexis integre este proveedor de telemática?',
    telematicsVehicleCount:
      '¿Cuántos vehículos activos deben mapearse para la integración telemática?',
    telematicsCapTachograph: 'Interés en datos de tacógrafo (opcional)',
    telematicsCapTemperature: 'Interés en datos de temperatura (opcional)',
    telematicsCapOdometer: 'Interés en datos de odómetro (opcional)',
    telematicsCapFuel: 'Interés en datos de combustible (opcional)',
    telematicsCapLivePosition: 'Interés en posición en vivo / eventos (opcional)',
  },
  pt: {
    telematicsIntegrationRequested:
      'Pretendem que o ViaNexis integre este fornecedor de telemática?',
    telematicsVehicleCount:
      'Quantos veículos ativos devem ser mapeados para a integração telemática?',
    telematicsCapTachograph: 'Interesse em dados de tacógrafo (opcional)',
    telematicsCapTemperature: 'Interesse em dados de temperatura (opcional)',
    telematicsCapOdometer: 'Interesse em dados de odómetro (opcional)',
    telematicsCapFuel: 'Interesse em dados de combustível (opcional)',
    telematicsCapLivePosition: 'Interesse em posição em direto / eventos (opcional)',
  },
  it: {
    telematicsIntegrationRequested:
      'Volete che ViaNexis integri questo fornitore di telematica?',
    telematicsVehicleCount:
      'Quanti veicoli attivi devono essere mappati per l’integrazione telematica?',
    telematicsCapTachograph: 'Interesse per i dati tachigrafo (facoltativo)',
    telematicsCapTemperature: 'Interesse per i dati di temperatura (facoltativo)',
    telematicsCapOdometer: 'Interesse per i dati odometro (facoltativo)',
    telematicsCapFuel: 'Interesse per i dati carburante (facoltativo)',
    telematicsCapLivePosition: 'Interesse per posizione live / eventi (facoltativo)',
  },
  el: {
    telematicsIntegrationRequested:
      'Θέλετε το ViaNexis να ενσωματώσει αυτόν τον πάροχο τηλεματικής;',
    telematicsVehicleCount:
      'Πόσα ενεργά οχήματα πρέπει να αντιστοιχιστούν για την ενσωμάτωση τηλεματικής;',
    telematicsCapTachograph: 'Ενδιαφέρον για δεδομένα ταχογράφου (προαιρετικό)',
    telematicsCapTemperature: 'Ενδιαφέρον για δεδομένα θερμοκρασίας (προαιρετικό)',
    telematicsCapOdometer: 'Ενδιαφέρον για δεδομένα οδομέτρου (προαιρετικό)',
    telematicsCapFuel: 'Ενδιαφέρον για δεδομένα καυσίμου (προαιρετικό)',
    telematicsCapLivePosition: 'Ενδιαφέρον για ζωντανή θέση / συμβάντα (προαιρετικό)',
  },
  tr: {
    telematicsIntegrationRequested:
      'ViaNexis’in bu telematik sağlayıcısını entegre etmesini istiyor musunuz?',
    telematicsVehicleCount:
      'Telematik entegrasyonu için kaç aktif araç eşlenmeli?',
    telematicsCapTachograph: 'Takograf verisine ilgi (isteğe bağlı)',
    telematicsCapTemperature: 'Sıcaklık verisine ilgi (isteğe bağlı)',
    telematicsCapOdometer: 'Kilometre sayacı verisine ilgi (isteğe bağlı)',
    telematicsCapFuel: 'Yakıt verisine ilgi (isteğe bağlı)',
    telematicsCapLivePosition: 'Canlı konum / olay verisine ilgi (isteğe bağlı)',
  },
  uk: {
    telematicsIntegrationRequested:
      'Бажаєте, щоб ViaNexis інтегрував цього телематичного постачальника?',
    telematicsVehicleCount:
      'Скільки активних транспортних засобів потрібно зіставити для телематичної інтеграції?',
    telematicsCapTachograph: 'Інтерес до даних тахографа (необов’язково)',
    telematicsCapTemperature: 'Інтерес до даних температури (необов’язково)',
    telematicsCapOdometer: 'Інтерес до даних одометра (необов’язково)',
    telematicsCapFuel: 'Інтерес до даних пального (необов’язково)',
    telematicsCapLivePosition: 'Інтерес до живої позиції / подій (необов’язково)',
  },
  ru: {
    telematicsIntegrationRequested:
      'Хотите, чтобы ViaNexis интегрировал этого телематического провайдера?',
    telematicsVehicleCount:
      'Сколько активных транспортных средств нужно сопоставить для телематической интеграции?',
    telematicsCapTachograph: 'Интерес к данным тахографа (необязательно)',
    telematicsCapTemperature: 'Интерес к данным температуры (необязательно)',
    telematicsCapOdometer: 'Интерес к данным одометра (необязательно)',
    telematicsCapFuel: 'Интерес к данным топлива (необязательно)',
    telematicsCapLivePosition: 'Интерес к живой позиции / событиям (необязательно)',
  },
  sq: {
    telematicsIntegrationRequested:
      'Dëshironi që ViaNexis të integrojë këtë ofrues telematike?',
    telematicsVehicleCount:
      'Sa mjete aktive duhet të përputhen për integrimin telematik?',
    telematicsCapTachograph: 'Interes për të dhëna tahografi (opsionale)',
    telematicsCapTemperature: 'Interes për të dhëna temperature (opsionale)',
    telematicsCapOdometer: 'Interes për të dhëna odometri (opsionale)',
    telematicsCapFuel: 'Interes për të dhëna karburanti (opsionale)',
    telematicsCapLivePosition: 'Interes për pozicionin në kohë reale / ngjarje (opsionale)',
  },
  mk: {
    telematicsIntegrationRequested:
      'Дали сакате ViaNexis да го интегрира овој телематски провајдер?',
    telematicsVehicleCount:
      'Колку активни возила треба да се мапираат за телематска интеграција?',
    telematicsCapTachograph: 'Интерес за тахографски податоци (изборно)',
    telematicsCapTemperature: 'Интерес за податоци за температура (изборно)',
    telematicsCapOdometer: 'Интерес за податоци од одометар (изборно)',
    telematicsCapFuel: 'Интерес за податоци за гориво (изборно)',
    telematicsCapLivePosition: 'Интерес за жива позиција / настани (изборно)',
  },
  bs: {
    telematicsIntegrationRequested:
      'Želite li da ViaNexis integriše ovog telematičkog pružatelja?',
    telematicsVehicleCount:
      'Koliko aktivnih vozila treba mapirati za telematičku integraciju?',
    telematicsCapTachograph: 'Interes za tahografske podatke (opcionalno)',
    telematicsCapTemperature: 'Interes za podatke o temperaturi (opcionalno)',
    telematicsCapOdometer: 'Interes za podatke odometra (opcionalno)',
    telematicsCapFuel: 'Interes za podatke o gorivu (opcionalno)',
    telematicsCapLivePosition: 'Interes za živu poziciju / događaje (opcionalno)',
  },
  be: {
    telematicsIntegrationRequested:
      'Хочаце, каб ViaNexis інтэграваў гэтага тэлематычнага пастаўшчыка?',
    telematicsVehicleCount:
      'Колькі актыўных транспартных сродкаў трэба супаставіць для тэлематычнай інтэграцыі?',
    telematicsCapTachograph: 'Цікавасць да даных тахографа (неабавязкова)',
    telematicsCapTemperature: 'Цікавасць да даных тэмпературы (неабавязкова)',
    telematicsCapOdometer: 'Цікавасць да даных адаметра (неабавязкова)',
    telematicsCapFuel: 'Цікавасць да даных паліва (неабавязкова)',
    telematicsCapLivePosition: 'Цікавасць да жывой пазіцыі / падзей (неабавязкова)',
  },
  ga: {
    telematicsIntegrationRequested:
      'Ar mhaith libh go ndéanfadh ViaNexis an soláthraí teileamaitice seo a chomhtháthú?',
    telematicsVehicleCount:
      'Cé mhéad feithicil ghníomhach ba cheart a mhapáil don chomhtháthú teileamaitice?',
    telematicsCapTachograph: 'Suim i sonraí tacagraif (roghnach)',
    telematicsCapTemperature: 'Suim i sonraí teochta (roghnach)',
    telematicsCapOdometer: 'Suim i sonraí odaiméadair (roghnach)',
    telematicsCapFuel: 'Suim i sonraí breosla (roghnach)',
    telematicsCapLivePosition: 'Suim i suíomh beo / imeachtaí (roghnach)',
  },
  mt: {
    telematicsIntegrationRequested:
      'Tridu li ViaNexis jintegra dan il-fornitur tat-telematika?',
    telematicsVehicleCount:
      'Kemm vetturi attivi għandhom jiġu mmapjati għall-integrazzjoni telematika?',
    telematicsCapTachograph: 'Interess f’data tat-takografu (mhux obbligatorju)',
    telematicsCapTemperature: 'Interess f’data tat-temperatura (mhux obbligatorju)',
    telematicsCapOdometer: 'Interess f’data tal-odometru (mhux obbligatorju)',
    telematicsCapFuel: 'Interess f’data tal-fjuwil (mhux obbligatorju)',
    telematicsCapLivePosition: 'Interess f’pożizzjoni live / avvenimenti (mhux obbligatorju)',
  },
  is: {
    telematicsIntegrationRequested:
      'Viljið þið að ViaNexis samþætti þennan fjarskiptaþjónustuaðila?',
    telematicsVehicleCount:
      'Hversu mörg virk ökutæki á að kortleggja fyrir fjarskiptasamþættingu?',
    telematicsCapTachograph: 'Áhugi á hraðaritagögnum (valfrjálst)',
    telematicsCapTemperature: 'Áhugi á hitagögnum (valfrjálst)',
    telematicsCapOdometer: 'Áhugi á kílómetramælagögnum (valfrjálst)',
    telematicsCapFuel: 'Áhugi á eldsneytisgögnum (valfrjálst)',
    telematicsCapLivePosition: 'Áhugi á rauntímastaðsetningu / atburðum (valfrjálst)',
  },
  ar: {
    telematicsIntegrationRequested:
      'هل تريدون أن يدمج ViaNexis مزود التليماتيك هذا؟',
    telematicsVehicleCount:
      'كم عدد المركبات النشطة التي يجب ربطها لتكامل التليماتيك؟',
    telematicsCapTachograph: 'اهتمام ببيانات التاكوغراف (اختياري)',
    telematicsCapTemperature: 'اهتمام ببيانات الحرارة (اختياري)',
    telematicsCapOdometer: 'اهتمام ببيانات عداد المسافات (اختياري)',
    telematicsCapFuel: 'اهتمام ببيانات الوقود (اختياري)',
    telematicsCapLivePosition: 'اهتمام بالموقع الحي / الأحداث (اختياري)',
  },
};
