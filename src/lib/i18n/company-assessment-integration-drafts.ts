/**
 * Draft (non-golden) conditional-integration labels.
 * HU/EN live in company-assessment-labels.ts and override these.
 * Values must not equal the English source strings (assessment label test P).
 */
import type { Locale } from './types';

type IntegrationFieldDraft = {
  tmsEnabled: string;
  erpEnabled: string;
  gpsEnabled: string;
  documentStoreEnabled: string;
  customEnabled: string;
  customSystemName: string;
  dataMigrationRequired: string;
  integrationSystemRequired: string;
};

type IntegrationHelperDraft = {
  gps: string;
  documentStore: string;
  customSystemName: string;
};

export const INTEGRATION_HELPER_DRAFTS: Partial<
  Record<Locale, IntegrationHelperDraft>
> = {
  de: {
    gps: 'Falls unbekannt, kann der technische Ansprechpartner das später nennen.',
    documentStore:
      'Falls unbekannt, kann der technische Ansprechpartner das später nennen.',
    customSystemName:
      'Nur den Systemnamen angeben — keine Passwörter, API-Schlüssel oder Kontogeheimnisse.',
  },
  ro: {
    gps: 'Dacă nu știți, contactul tehnic poate furniza acest lucru ulterior.',
    documentStore:
      'Dacă nu știți, contactul tehnic poate furniza acest lucru ulterior.',
    customSystemName:
      'Indicați doar numele sistemului — fără parole, chei API sau secrete de cont.',
  },
  sk: {
    gps: 'Ak si nie ste istí, technický kontakt to môže doplniť neskôr.',
    documentStore:
      'Ak si nie ste istí, technický kontakt to môže doplniť neskôr.',
    customSystemName:
      'Uveďte len názov systému — bez hesiel, API kľúčov alebo tajomstiev účtu.',
  },
  pl: {
    gps: 'Jeśli nie jesteście pewni, kontakt techniczny uzupełni to później.',
    documentStore:
      'Jeśli nie jesteście pewni, kontakt techniczny uzupełni to później.',
    customSystemName:
      'Podajcie tylko nazwę systemu — bez haseł, kluczy API i sekretów konta.',
  },
  cs: {
    gps: 'Pokud si nejste jisti, technický kontakt to doplní později.',
    documentStore:
      'Pokud si nejste jisti, technický kontakt to doplní později.',
    customSystemName:
      'Uveďte pouze název systému — žádná hesla, API klíče ani tajemství účtu.',
  },
  bg: {
    gps: 'Ако не сте сигурни, техническият контакт може да го посочи по-късно.',
    documentStore:
      'Ако не сте сигурни, техническият контакт може да го посочи по-късно.',
    customSystemName:
      'Посочете само името на системата — без пароли, API ключове или тайни на профила.',
  },
  hr: {
    gps: 'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    documentStore:
      'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    customSystemName:
      'Navedite samo naziv sustava — bez lozinki, API ključeva ili tajni računa.',
  },
  sr: {
    gps: 'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    documentStore:
      'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    customSystemName:
      'Navedite samo naziv sistema — bez lozinki, API ključeva ili tajni naloga.',
  },
  sl: {
    gps: 'Če niste prepričani, lahko tehnični stik to dopolni pozneje.',
    documentStore:
      'Če niste prepričani, lahko tehnični stik to dopolni pozneje.',
    customSystemName:
      'Navedite samo ime sistema — brez gesel, API ključev ali skrivnosti računa.',
  },
  et: {
    gps: 'Kui te ei tea, saab tehniline kontakt selle hiljem täpsustada.',
    documentStore:
      'Kui te ei tea, saab tehniline kontakt selle hiljem täpsustada.',
    customSystemName:
      'Märkige ainult süsteemi nimi — ilma paroolide, API-võtmete või konto saladusteta.',
  },
  lv: {
    gps: 'Ja neesat pārliecināti, tehniskais kontakts to var norādīt vēlāk.',
    documentStore:
      'Ja neesat pārliecināti, tehniskais kontakts to var norādīt vēlāk.',
    customSystemName:
      'Norādiet tikai sistēmas nosaukumu — bez parolēm, API atslēgām vai konta noslēpumiem.',
  },
  lt: {
    gps: 'Jei nežinote, techninis kontaktas tai gali nurodyti vėliau.',
    documentStore:
      'Jei nežinote, techninis kontaktas tai gali nurodyti vėliau.',
    customSystemName:
      'Nurodykite tik sistemos pavadinimą — be slaptažodžių, API raktų ar paskyros paslapčių.',
  },
  fi: {
    gps: 'Jos ette ole varmoja, tekninen yhteyshenkilö voi täydentää tämän myöhemmin.',
    documentStore:
      'Jos ette ole varmoja, tekninen yhteyshenkilö voi täydentää tämän myöhemmin.',
    customSystemName:
      'Ilmoittakaa vain järjestelmän nimi — ei salasanoja, API-avaimia eikä tilin salaisuuksia.',
  },
  sv: {
    gps: 'Om ni är osäkra kan den tekniska kontakten ange detta senare.',
    documentStore:
      'Om ni är osäkra kan den tekniska kontakten ange detta senare.',
    customSystemName:
      'Ange bara systemnamnet — inga lösenord, API-nycklar eller kontosekretess.',
  },
  da: {
    gps: 'Hvis I er i tvivl, kan den tekniske kontakt oplyse det senere.',
    documentStore:
      'Hvis I er i tvivl, kan den tekniske kontakt oplyse det senere.',
    customSystemName:
      'Angiv kun systemnavnet — ingen adgangskoder, API-nøgler eller kontoshemmeligheder.',
  },
  nb: {
    gps: 'Hvis dere er usikre, kan den tekniske kontakten oppgi dette senere.',
    documentStore:
      'Hvis dere er usikre, kan den tekniske kontakten oppgi dette senere.',
    customSystemName:
      'Oppgi bare systemnavnet — ingen passord, API-nøkler eller kontohemmeligheter.',
  },
  nl: {
    gps: 'Als u het niet zeker weet, kan het technisch contact dit later doorgeven.',
    documentStore:
      'Als u het niet zeker weet, kan het technisch contact dit later doorgeven.',
    customSystemName:
      'Geef alleen de systeemnaam op — geen wachtwoorden, API-sleutels of accountgeheimen.',
  },
  fr: {
    gps: 'Si vous n’êtes pas sûr, le contact technique pourra l’indiquer plus tard.',
    documentStore:
      'Si vous n’êtes pas sûr, le contact technique pourra l’indiquer plus tard.',
    customSystemName:
      'Indiquez uniquement le nom du système — pas de mots de passe, clés API ni secrets de compte.',
  },
  es: {
    gps: 'Si no están seguros, el contacto técnico puede indicarlo más adelante.',
    documentStore:
      'Si no están seguros, el contacto técnico puede indicarlo más adelante.',
    customSystemName:
      'Indiquen solo el nombre del sistema — sin contraseñas, claves API ni secretos de cuenta.',
  },
  pt: {
    gps: 'Se não tiverem a certeza, o contacto técnico pode indicar isto mais tarde.',
    documentStore:
      'Se não tiverem a certeza, o contacto técnico pode indicar isto mais tarde.',
    customSystemName:
      'Indiquem apenas o nome do sistema — sem palavras-passe, chaves API ou segredos de conta.',
  },
  it: {
    gps: 'Se non siete sicuri, il contatto tecnico potrà indicarlo in seguito.',
    documentStore:
      'Se non siete sicuri, il contatto tecnico potrà indicarlo in seguito.',
    customSystemName:
      'Indicate solo il nome del sistema — niente password, chiavi API o segreti dell’account.',
  },
  el: {
    gps: 'Αν δεν είστε βέβαιοι, η τεχνική επαφή μπορεί να το δηλώσει αργότερα.',
    documentStore:
      'Αν δεν είστε βέβαιοι, η τεχνική επαφή μπορεί να το δηλώσει αργότερα.',
    customSystemName:
      'Αναφέρετε μόνο το όνομα του συστήματος — χωρίς κωδικούς, κλειδιά API ή μυστικά λογαριασμού.',
  },
  tr: {
    gps: 'Emin değilseniz teknik irtibat daha sonra belirtebilir.',
    documentStore: 'Emin değilseniz teknik irtibat daha sonra belirtebilir.',
    customSystemName:
      'Yalnızca sistem adını yazın — parola, API anahtarı veya hesap sırrı girmeyin.',
  },
  uk: {
    gps: 'Якщо не впевнені, технічний контакт може вказати це пізніше.',
    documentStore:
      'Якщо не впевнені, технічний контакт може вказати це пізніше.',
    customSystemName:
      'Вкажіть лише назву системи — без паролів, API-ключів і секретів облікового запису.',
  },
  ru: {
    gps: 'Если не уверены, технический контакт может указать это позже.',
    documentStore:
      'Если не уверены, технический контакт может указать это позже.',
    customSystemName:
      'Укажите только название системы — без паролей, API-ключей и секретов учётной записи.',
  },
  sq: {
    gps: 'Nëse nuk jeni të sigurt, kontakti teknik mund ta japë më vonë.',
    documentStore:
      'Nëse nuk jeni të sigurt, kontakti teknik mund ta japë më vonë.',
    customSystemName:
      'Jepni vetëm emrin e sistemit — pa fjalëkalime, çelësa API ose sekrete llogarie.',
  },
  mk: {
    gps: 'Ако не сте сигурни, техничкиот контакт може да го наведе подоцна.',
    documentStore:
      'Ако не сте сигурни, техничкиот контакт може да го наведе подоцна.',
    customSystemName:
      'Наведете само името на системот — без лозинки, API клучеви или тајни на сметката.',
  },
  bs: {
    gps: 'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    documentStore:
      'Ako niste sigurni, tehnički kontakt to može navesti kasnije.',
    customSystemName:
      'Navedite samo naziv sistema — bez lozinki, API ključeva ili tajni računa.',
  },
  be: {
    gps: 'Калі не ўпэўненыя, тэхнічны кантакт можа ўказаць гэта пазней.',
    documentStore:
      'Калі не ўпэўненыя, тэхнічны кантакт можа ўказаць гэта пазней.',
    customSystemName:
      'Укажыце толькі назву сістэмы — без пароляў, API-ключоў і сакрэтаў уліковага запісу.',
  },
  ga: {
    gps: 'Mura bhfuil sibh cinnte, is féidir leis an teagmhálaí teicniúil é a chur ar fáil níos déanaí.',
    documentStore:
      'Mura bhfuil sibh cinnte, is féidir leis an teagmhálaí teicniúil é a chur ar fáil níos déanaí.',
    customSystemName:
      'Ainmnigí an córas amháin — gan pasfhocail, eochracha API ná rúin chuntais.',
  },
  mt: {
    gps: 'Jekk m’intomx ċerti, il-kuntatt tekniku jista’ jagħtiha aktar tard.',
    documentStore:
      'Jekk m’intomx ċerti, il-kuntatt tekniku jista’ jagħtiha aktar tard.',
    customSystemName:
      'Semmu biss l-isem tas-sistema — bla passwords, ċwievet API jew sigrieti tal-kont.',
  },
  is: {
    gps: 'Ef þið eruð óviss, getur tæknilegi tengiliðurinn gefið þetta upp síðar.',
    documentStore:
      'Ef þið eruð óviss, getur tæknilegi tengiliðurinn gefið þetta upp síðar.',
    customSystemName:
      'Tilgreinið aðeins kerfisheitið — engin lykilorð, API-lyklar eða reikningsleyndarmál.',
  },
  ar: {
    gps: 'إذا لم تكونوا متأكدين يمكن لجهة الاتصال التقنية ذكر ذلك لاحقاً.',
    documentStore:
      'إذا لم تكونوا متأكدين يمكن لجهة الاتصال التقنية ذكر ذلك لاحقاً.',
    customSystemName:
      'اذكروا اسم النظام فقط — دون كلمات مرور أو مفاتيح API أو أسرار الحساب.',
  },
};

export const INTEGRATION_FIELD_DRAFTS: Partial<
  Record<Locale, IntegrationFieldDraft>
> = {
  de: {
    tmsEnabled: 'Nutzen Sie derzeit ein TMS / Transportmanagementsystem?',
    erpEnabled: 'Nutzen Sie derzeit ein ERP-System?',
    gpsEnabled: 'Nutzen Sie ein GPS- / Telematiksystem?',
    documentStoreEnabled: 'Nutzen Sie ein externes Dokumentenarchiv?',
    customEnabled: 'Benötigen Sie die Anbindung eines weiteren Fremdsystems?',
    customSystemName: 'Mit welchem System soll ViaNexis verbunden werden?',
    dataMigrationRequired: 'Müssen bestehende Daten übernommen werden?',
    integrationSystemRequired: 'Bitte nennen Sie das System.',
  },
  ro: {
    tmsEnabled: 'Folosiți în prezent un TMS / sistem de management al transportului?',
    erpEnabled: 'Folosiți în prezent un sistem ERP?',
    gpsEnabled: 'Folosiți un sistem GPS / telematică?',
    documentStoreEnabled: 'Folosiți un sistem extern de stocare a documentelor?',
    customEnabled: 'Aveți nevoie de integrarea altui sistem extern?',
    customSystemName: 'Cu ce sistem doriți să conectați ViaNexis?',
    dataMigrationRequired: 'Este necesară migrarea datelor existente?',
    integrationSystemRequired: 'Vă rugăm să denumiți sistemul.',
  },
  sk: {
    tmsEnabled: 'Používate aktuálne TMS / systém riadenia dopravy?',
    erpEnabled: 'Používate aktuálne ERP systém?',
    gpsEnabled: 'Používate GPS / telematický systém?',
    documentStoreEnabled: 'Používate externý systém na ukladanie dokumentov?',
    customEnabled: 'Potrebujete integráciu ďalšieho externého systému?',
    customSystemName: 'S akým systémom chcete prepojiť ViaNexis?',
    dataMigrationRequired: 'Je potrebná migrácia existujúcich údajov?',
    integrationSystemRequired: 'Uveďte názov systému.',
  },
  pl: {
    tmsEnabled: 'Czy obecnie używacie TMS / systemu zarządzania transportem?',
    erpEnabled: 'Czy obecnie używacie systemu ERP?',
    gpsEnabled: 'Czy używacie systemu GPS / telematyki?',
    documentStoreEnabled: 'Czy używacie zewnętrznego systemu przechowywania dokumentów?',
    customEnabled: 'Czy potrzebujecie integracji innego systemu zewnętrznego?',
    customSystemName: 'Z jakim systemem chcecie połączyć ViaNexis?',
    dataMigrationRequired: 'Czy konieczna jest migracja istniejących danych?',
    integrationSystemRequired: 'Podajcie nazwę systemu.',
  },
  cs: {
    tmsEnabled: 'Používáte aktuálně TMS / systém řízení dopravy?',
    erpEnabled: 'Používáte aktuálně ERP systém?',
    gpsEnabled: 'Používáte GPS / telematický systém?',
    documentStoreEnabled: 'Používáte externí systém pro ukládání dokumentů?',
    customEnabled: 'Potřebujete integraci dalšího externího systému?',
    customSystemName: 'S jakým systémem chcete ViaNexis propojit?',
    dataMigrationRequired: 'Je potřeba migrovat stávající data?',
    integrationSystemRequired: 'Uveďte název systému.',
  },
  bg: {
    tmsEnabled: 'Използвате ли в момента TMS / система за управление на транспорта?',
    erpEnabled: 'Използвате ли в момента ERP система?',
    gpsEnabled: 'Използвате ли GPS / телематична система?',
    documentStoreEnabled: 'Използвате ли външна система за съхранение на документи?',
    customEnabled: 'Нуждаете ли се от интеграция с друга външна система?',
    customSystemName: 'С коя система искате да свържете ViaNexis?',
    dataMigrationRequired: 'Необходима ли е миграция на съществуващи данни?',
    integrationSystemRequired: 'Моля, посочете системата.',
  },
  hr: {
    tmsEnabled: 'Koristite li trenutačno TMS / sustav upravljanja prijevozom?',
    erpEnabled: 'Koristite li trenutačno ERP sustav?',
    gpsEnabled: 'Koristite li GPS / telematički sustav?',
    documentStoreEnabled: 'Koristite li vanjski sustav za pohranu dokumenata?',
    customEnabled: 'Trebate li integraciju drugog vanjskog sustava?',
    customSystemName: 'S kojim sustavom želite povezati ViaNexis?',
    dataMigrationRequired: 'Je li potrebna migracija postojećih podataka?',
    integrationSystemRequired: 'Navedite naziv sustava.',
  },
  sr: {
    tmsEnabled: 'Da li trenutno koristite TMS / sistem za upravljanje prevozom?',
    erpEnabled: 'Da li trenutno koristite ERP sistem?',
    gpsEnabled: 'Da li koristite GPS / telematički sistem?',
    documentStoreEnabled: 'Da li koristite spoljni sistem za skladištenje dokumenata?',
    customEnabled: 'Da li vam je potrebna integracija drugog spoljnog sistema?',
    customSystemName: 'Sa kojim sistemom želite da povežete ViaNexis?',
    dataMigrationRequired: 'Da li je potrebna migracija postojećih podataka?',
    integrationSystemRequired: 'Navedite naziv sistema.',
  },
  sl: {
    tmsEnabled: 'Ali trenutno uporabljate TMS / sistem za upravljanje prevoza?',
    erpEnabled: 'Ali trenutno uporabljate ERP sistem?',
    gpsEnabled: 'Ali uporabljate GPS / telematski sistem?',
    documentStoreEnabled: 'Ali uporabljate zunanji sistem za shranjevanje dokumentov?',
    customEnabled: 'Ali potrebujete integracijo drugega zunanjega sistema?',
    customSystemName: 'S katerim sistemom želite povezati ViaNexis?',
    dataMigrationRequired: 'Ali je potrebna migracija obstoječih podatkov?',
    integrationSystemRequired: 'Navedite ime sistema.',
  },
  et: {
    tmsEnabled: 'Kas kasutate praegu TMS / transpordihaldussüsteemi?',
    erpEnabled: 'Kas kasutate praegu ERP-süsteemi?',
    gpsEnabled: 'Kas kasutate GPS- / telemaatikasüsteemi?',
    documentStoreEnabled: 'Kas kasutate välist dokumendihoidlat?',
    customEnabled: 'Kas vajate mõne muu välissüsteemi liidestust?',
    customSystemName: 'Millise süsteemiga soovite ViaNexist ühendada?',
    dataMigrationRequired: 'Kas olemasolevad andmed tuleb üle tuua?',
    integrationSystemRequired: 'Palun nimetage süsteem.',
  },
  lv: {
    tmsEnabled: 'Vai pašlaik izmantojat TMS / transporta vadības sistēmu?',
    erpEnabled: 'Vai pašlaik izmantojat ERP sistēmu?',
    gpsEnabled: 'Vai izmantojat GPS / telematikas sistēmu?',
    documentStoreEnabled: 'Vai izmantojat ārēju dokumentu glabāšanas sistēmu?',
    customEnabled: 'Vai nepieciešama citas ārējās sistēmas integrācija?',
    customSystemName: 'Ar kuru sistēmu vēlaties savienot ViaNexis?',
    dataMigrationRequired: 'Vai nepieciešama esošo datu migrācija?',
    integrationSystemRequired: 'Lūdzu, norādiet sistēmas nosaukumu.',
  },
  lt: {
    tmsEnabled: 'Ar šiuo metu naudojate TMS / transporto valdymo sistemą?',
    erpEnabled: 'Ar šiuo metu naudojate ERP sistemą?',
    gpsEnabled: 'Ar naudojate GPS / telematikos sistemą?',
    documentStoreEnabled: 'Ar naudojate išorinę dokumentų saugojimo sistemą?',
    customEnabled: 'Ar reikia kitos išorinės sistemos integracijos?',
    customSystemName: 'Su kokia sistema norite sujungti ViaNexis?',
    dataMigrationRequired: 'Ar reikia perkelti esamus duomenis?',
    integrationSystemRequired: 'Nurodykite sistemos pavadinimą.',
  },
  fi: {
    tmsEnabled: 'Käytättekö tällä hetkellä TMS- / kuljetustenhallintajärjestelmää?',
    erpEnabled: 'Käytättekö tällä hetkellä ERP-järjestelmää?',
    gpsEnabled: 'Käytättekö GPS- / telematiikkajärjestelmää?',
    documentStoreEnabled: 'Käytättekö ulkoista asiakirjojen tallennusjärjestelmää?',
    customEnabled: 'Tarvitsetteko muun ulkoisen järjestelmän integraatiota?',
    customSystemName: 'Mihin järjestelmään ViaNexis pitäisi yhdistää?',
    dataMigrationRequired: 'Pitääkö olemassa olevat tiedot siirtää?',
    integrationSystemRequired: 'Ilmoittakaa järjestelmän nimi.',
  },
  sv: {
    tmsEnabled: 'Använder ni för närvarande ett TMS / transportledningssystem?',
    erpEnabled: 'Använder ni för närvarande ett ERP-system?',
    gpsEnabled: 'Använder ni ett GPS- / telematiksystem?',
    documentStoreEnabled: 'Använder ni ett externt dokumentarkiv?',
    customEnabled: 'Behöver ni integration mot ett annat externt system?',
    customSystemName: 'Vilket system vill ni koppla till ViaNexis?',
    dataMigrationRequired: 'Behöver befintliga data migreras?',
    integrationSystemRequired: 'Ange systemets namn.',
  },
  da: {
    tmsEnabled: 'Bruger I i øjeblikket et TMS / transportstyringssystem?',
    erpEnabled: 'Bruger I i øjeblikket et ERP-system?',
    gpsEnabled: 'Bruger I et GPS- / telematiksystem?',
    documentStoreEnabled: 'Bruger I et eksternt dokumentlager?',
    customEnabled: 'Har I brug for integration til et andet eksternt system?',
    customSystemName: 'Hvilket system skal ViaNexis forbindes med?',
    dataMigrationRequired: 'Skal eksisterende data migreres?',
    integrationSystemRequired: 'Angiv systemets navn.',
  },
  nb: {
    tmsEnabled: 'Bruker dere for øyeblikket et TMS / transportstyringssystem?',
    erpEnabled: 'Bruker dere for øyeblikket et ERP-system?',
    gpsEnabled: 'Bruker dere et GPS- / telematikksystem?',
    documentStoreEnabled: 'Bruker dere et eksternt dokumentlager?',
    customEnabled: 'Trenger dere integrasjon mot et annet eksternt system?',
    customSystemName: 'Hvilket system vil dere koble til ViaNexis?',
    dataMigrationRequired: 'Må eksisterende data migreres?',
    integrationSystemRequired: 'Oppgi systemnavnet.',
  },
  nl: {
    tmsEnabled: 'Gebruikt u momenteel een TMS / transportmanagementsysteem?',
    erpEnabled: 'Gebruikt u momenteel een ERP-systeem?',
    gpsEnabled: 'Gebruikt u een GPS- / telematicasysteem?',
    documentStoreEnabled: 'Gebruikt u een extern documentopslagsysteem?',
    customEnabled: 'Heeft u integratie met een ander extern systeem nodig?',
    customSystemName: 'Met welk systeem wilt u ViaNexis koppelen?',
    dataMigrationRequired: 'Moeten bestaande gegevens worden overgezet?',
    integrationSystemRequired: 'Geef de systeemnaam op.',
  },
  fr: {
    tmsEnabled: 'Utilisez-vous actuellement un TMS / système de gestion des transports ?',
    erpEnabled: 'Utilisez-vous actuellement un système ERP ?',
    gpsEnabled: 'Utilisez-vous un système GPS / télématique ?',
    documentStoreEnabled: 'Utilisez-vous un système externe de stockage de documents ?',
    customEnabled: 'Avez-vous besoin d’intégrer un autre système externe ?',
    customSystemName: 'Avec quel système souhaitez-vous relier ViaNexis ?',
    dataMigrationRequired: 'Faut-il migrer des données existantes ?',
    integrationSystemRequired: 'Veuillez indiquer le nom du système.',
  },
  es: {
    tmsEnabled: '¿Usan actualmente un TMS / sistema de gestión de transporte?',
    erpEnabled: '¿Usan actualmente un sistema ERP?',
    gpsEnabled: '¿Usan un sistema GPS / de telemática?',
    documentStoreEnabled: '¿Usan un sistema externo de almacenamiento de documentos?',
    customEnabled: '¿Necesitan integrar otro sistema externo?',
    customSystemName: '¿Con qué sistema quieren conectar ViaNexis?',
    dataMigrationRequired: '¿Es necesario migrar datos existentes?',
    integrationSystemRequired: 'Indiquen el nombre del sistema.',
  },
  pt: {
    tmsEnabled: 'Utilizam atualmente um TMS / sistema de gestão de transportes?',
    erpEnabled: 'Utilizam atualmente um sistema ERP?',
    gpsEnabled: 'Utilizam um sistema GPS / de telemática?',
    documentStoreEnabled: 'Utilizam um sistema externo de armazenamento de documentos?',
    customEnabled: 'Precisam de integrar outro sistema externo?',
    customSystemName: 'Com que sistema pretendem ligar o ViaNexis?',
    dataMigrationRequired: 'É necessário migrar dados existentes?',
    integrationSystemRequired: 'Indiquem o nome do sistema.',
  },
  it: {
    tmsEnabled: 'Utilizzate attualmente un TMS / sistema di gestione dei trasporti?',
    erpEnabled: 'Utilizzate attualmente un sistema ERP?',
    gpsEnabled: 'Utilizzate un sistema GPS / di telematica?',
    documentStoreEnabled: 'Utilizzate un sistema esterno di archiviazione documenti?',
    customEnabled: 'Vi serve l’integrazione di un altro sistema esterno?',
    customSystemName: 'Con quale sistema volete collegare ViaNexis?',
    dataMigrationRequired: 'È necessaria la migrazione dei dati esistenti?',
    integrationSystemRequired: 'Indicate il nome del sistema.',
  },
  el: {
    tmsEnabled: 'Χρησιμοποιείτε αυτή τη στιγμή TMS / σύστημα διαχείρισης μεταφορών;',
    erpEnabled: 'Χρησιμοποιείτε αυτή τη στιγμή σύστημα ERP;',
    gpsEnabled: 'Χρησιμοποιείτε σύστημα GPS / τηλεματικής;',
    documentStoreEnabled: 'Χρησιμοποιείτε εξωτερικό σύστημα αποθήκευσης εγγράφων;',
    customEnabled: 'Χρειάζεστε ενσωμάτωση άλλου εξωτερικού συστήματος;',
    customSystemName: 'Με ποιο σύστημα θέλετε να συνδέσετε το ViaNexis;',
    dataMigrationRequired: 'Απαιτείται μετεγκατάσταση υφιστάμενων δεδομένων;',
    integrationSystemRequired: 'Αναφέρετε το όνομα του συστήματος.',
  },
  tr: {
    tmsEnabled: 'Şu anda bir TMS / taşıma yönetim sistemi kullanıyor musunuz?',
    erpEnabled: 'Şu anda bir ERP sistemi kullanıyor musunuz?',
    gpsEnabled: 'GPS / telematik sistemi kullanıyor musunuz?',
    documentStoreEnabled: 'Harici bir belge saklama sistemi kullanıyor musunuz?',
    customEnabled: 'Başka bir harici sistem entegrasyonuna ihtiyacınız var mı?',
    customSystemName: 'ViaNexis’i hangi sistemle bağlamak istiyorsunuz?',
    dataMigrationRequired: 'Mevcut verilerin aktarılması gerekiyor mu?',
    integrationSystemRequired: 'Lütfen sistem adını yazın.',
  },
  uk: {
    tmsEnabled: 'Чи використовуєте зараз TMS / систему управління перевезеннями?',
    erpEnabled: 'Чи використовуєте зараз ERP-систему?',
    gpsEnabled: 'Чи використовуєте GPS / телематичну систему?',
    documentStoreEnabled: 'Чи використовуєте зовнішню систему зберігання документів?',
    customEnabled: 'Чи потрібна інтеграція іншої зовнішньої системи?',
    customSystemName: 'З якою системою потрібно з’єднати ViaNexis?',
    dataMigrationRequired: 'Чи потрібна міграція наявних даних?',
    integrationSystemRequired: 'Будь ласка, вкажіть назву системи.',
  },
  ru: {
    tmsEnabled: 'Используете ли вы сейчас TMS / систему управления перевозками?',
    erpEnabled: 'Используете ли вы сейчас ERP-систему?',
    gpsEnabled: 'Используете ли вы GPS / телематическую систему?',
    documentStoreEnabled: 'Используете ли вы внешнюю систему хранения документов?',
    customEnabled: 'Нужна ли интеграция другой внешней системы?',
    customSystemName: 'С какой системой нужно связать ViaNexis?',
    dataMigrationRequired: 'Нужна ли миграция существующих данных?',
    integrationSystemRequired: 'Укажите название системы.',
  },
  sq: {
    tmsEnabled: 'A përdorni aktualisht një TMS / sistem menaxhimi transporti?',
    erpEnabled: 'A përdorni aktualisht një sistem ERP?',
    gpsEnabled: 'A përdorni një sistem GPS / telematike?',
    documentStoreEnabled: 'A përdorni një sistem të jashtëm ruajtjeje dokumentesh?',
    customEnabled: 'A ju duhet integrimi i një sistemi tjetër të jashtëm?',
    customSystemName: 'Me cilin sistem dëshironi ta lidhni ViaNexis?',
    dataMigrationRequired: 'A duhet migrimi i të dhënave ekzistuese?',
    integrationSystemRequired: 'Ju lutemi emërtoni sistemin.',
  },
  mk: {
    tmsEnabled: 'Дали моментално користите TMS / систем за управување со транспорт?',
    erpEnabled: 'Дали моментално користите ERP систем?',
    gpsEnabled: 'Дали користите GPS / телематски систем?',
    documentStoreEnabled: 'Дали користите надворешен систем за чување документи?',
    customEnabled: 'Дали ви треба интеграција на друг надворешен систем?',
    customSystemName: 'Со кој систем сакате да го поврзете ViaNexis?',
    dataMigrationRequired: 'Дали е потребна миграција на постојните податоци?',
    integrationSystemRequired: 'Наведете го името на системот.',
  },
  bs: {
    tmsEnabled: 'Da li trenutno koristite TMS / sistem za upravljanje prevozom?',
    erpEnabled: 'Da li trenutno koristite ERP sistem?',
    gpsEnabled: 'Da li koristite GPS / telematički sistem?',
    documentStoreEnabled: 'Da li koristite vanjski sistem za pohranu dokumenata?',
    customEnabled: 'Da li vam je potrebna integracija drugog vanjskog sistema?',
    customSystemName: 'Sa kojim sistemom želite povezati ViaNexis?',
    dataMigrationRequired: 'Da li je potrebna migracija postojećih podataka?',
    integrationSystemRequired: 'Navedite naziv sistema.',
  },
  be: {
    tmsEnabled: 'Ці выкарыстоўваеце зараз TMS / сістэму кіравання перавозкамі?',
    erpEnabled: 'Ці выкарыстоўваеце зараз ERP-сістэму?',
    gpsEnabled: 'Ці выкарыстоўваеце GPS / тэлематычную сістэму?',
    documentStoreEnabled: 'Ці выкарыстоўваеце знешнюю сістэму захоўвання дакументаў?',
    customEnabled: 'Ці патрэбна інтэграцыя іншай знешняй сістэмы?',
    customSystemName: 'З якой сістэмай трэба звязаць ViaNexis?',
    dataMigrationRequired: 'Ці патрэбна міграцыя існуючых даных?',
    integrationSystemRequired: 'Калі ласка, укажыце назву сістэмы.',
  },
  ga: {
    tmsEnabled: 'An bhfuil TMS / córas bainistíochta iompair in úsáid agaibh faoi láthair?',
    erpEnabled: 'An bhfuil córas ERP in úsáid agaibh faoi láthair?',
    gpsEnabled: 'An bhfuil córas GPS / teileamaitice in úsáid agaibh?',
    documentStoreEnabled: 'An bhfuil córas seachtrach stórála doiciméad in úsáid agaibh?',
    customEnabled: 'An bhfuil comhtháthú córais sheachtraigh eile de dhíth?',
    customSystemName: 'Cén córas ar mhaith libh ViaNexis a nascadh leis?',
    dataMigrationRequired: 'An gá sonraí atá ann cheana a aistriú?',
    integrationSystemRequired: 'Ainmnigí an córas, le do thoil.',
  },
  mt: {
    tmsEnabled: 'Bħalissa tużaw TMS / sistema ta’ ġestjoni tat-trasport?',
    erpEnabled: 'Bħalissa tużaw sistema ERP?',
    gpsEnabled: 'Tużaw sistema GPS / telematics?',
    documentStoreEnabled: 'Tużaw sistema esterna għall-ħażna tad-dokumenti?',
    customEnabled: 'Għandkom bżonn integrazzjoni ta’ sistema esterna oħra?',
    customSystemName: 'Ma’ liema sistema tridu tgħaqqdu ViaNexis?',
    dataMigrationRequired: 'Hemm bżonn li d-dejta eżistenti tiġi migrata?',
    integrationSystemRequired: 'Jekk jogħġbok semmi s-sistema.',
  },
  is: {
    tmsEnabled: 'Notið þið núna TMS / flutningsstjórnunarkerfi?',
    erpEnabled: 'Notið þið núna ERP-kerfi?',
    gpsEnabled: 'Notið þið GPS- / fjarskiptakerfi?',
    documentStoreEnabled: 'Notið þið ytra skjalageymslukerfi?',
    customEnabled: 'Þurfið þið tengingu við annað ytra kerfi?',
    customSystemName: 'Við hvaða kerfi viljið þið tengja ViaNexis?',
    dataMigrationRequired: 'Þarf að flytja núverandi gögn?',
    integrationSystemRequired: 'Vinsamlegast nefnið kerfið.',
  },
  ar: {
    tmsEnabled: 'هل تستخدمون حالياً نظام TMS / إدارة النقل؟',
    erpEnabled: 'هل تستخدمون حالياً نظام ERP؟',
    gpsEnabled: 'هل تستخدمون نظام GPS / telematics؟',
    documentStoreEnabled: 'هل تستخدمون نظاماً خارجياً لتخزين المستندات؟',
    customEnabled: 'هل تحتاجون إلى ربط نظام خارجي آخر؟',
    customSystemName: 'ما النظام الذي تريدون ربط ViaNexis به؟',
    dataMigrationRequired: 'هل يلزم ترحيل البيانات الحالية؟',
    integrationSystemRequired: 'يرجى ذكر اسم النظام.',
  },
};
