import type { SiteContent } from "../types";
import { legalPl } from "./legal/pl";

export const contentPl: SiteContent = {
  meta: {
    title: "ViaNexis Kierowcy i przewozy firmowe",
    description: "Aplikacja kierowcy, kontrola firmy, zarządzanie dokumentami, przesyłanie wiadomości, powiadomienia i wielojęzyczny przebieg podróży w jednym systemie. Trwają przygotowania do testów wewnętrznych.",
    ogLocale: "pl_PL",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Cechy",
    driverApp: "Aplikacja sterownika",
    companyPortal: "Portal firmowy",
    documents: "Dokumenty",
    authorityEfti: "Organ / eFTI",
    security: "Bezpieczeństwo",
    pilot: "Dostęp pilota",
    contact: "Kontakt",
    requestAccess: "Poproś o dostęp",
    menuOpen: "Otwórz menu",
  },
  footer: {
    tagline: "Cyfrowa platforma dowodowa transportu i obsługi kierowców dla firm transportowych. Podstawa gotowa do obsługi eFTI — nie jest to certyfikowana platforma eFTI.",
    product: "Produkt",
    legal: "Prawny",
    legalNotice: "Nota prawna",
    privacy: "Polityka prywatności",
    terms: "Warunki użytkowania",
    disclaimers: "Odpowiedzialne użytkowanie",
    dataContact: "Kontakt w sprawie ochrony danych",
    copyright: "Nie jest to certyfikowana platforma eFTI. Nie obiecuje akceptacji władz, automatycznej mocy prawnej, bezbłędnych usług OCR/AI/tłumaczenia ani usług awaryjnych/SOS. Brak publicznego pobierania ze Sklepu Play.",
  },
  hero: {
    title: "ViaNexis — cyfrowa platforma dowodowa transportu i obsługi kierowców",
    subtitle: "Aplikacja kierowcy, kontrola firmy, zarządzanie dokumentami, przesyłanie wiadomości, powiadomienia i wielojęzyczny przebieg podróży w jednym systemie.",
    primaryCta: "Skontaktuj się z nami",
    secondaryCta: "Trwają przygotowania do testów wewnętrznych",
    stats: [
      {
        label: "Aplikacja sterownika",
        value: "Podróż + offline",
      },
      {
        label: "Dokumenty",
        value: "CMR + audyt",
      },
      {
        label: "Wiadomości",
        value: "Wielojęzyczny",
      },
      {
        label: "Status",
        value: "Przygotowanie do testu wewnętrznego",
      }
    ],
  },
    platformStatus: {
    title: "Controlled pilot access",
    items: [
      "ViaNexis is currently available through a pilot program with selected carriers and drivers.",
      "Access is activated after individual discussion and approval.",
      "No public app-store download.",
    ],
    disclaimer:
      "ViaNexis does not claim the system is officially accepted or certified in every country.",
  },

  moduleLabels: {
    goal: "Bramka",
    appFoundation: "Podstawa po stronie aplikacji",
    backendDependency: "Zależność backendu/administratora",
    important: "Ważny",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Aplikacja sterownika",
      goal: "Pozwól kierowcom obsługiwać zadania, dokumenty i wydarzenia związane z podróżami na urządzeniach mobilnych — online i offline.",
      appFoundation: "Lista i szczegóły podróży, przesyłanie dokumentów, przechwytywanie podpisów, listy kontrolne, rejestrowanie zdarzeń, zapisywanie i synchronizacja w trybie offline, sesja chroniona PIN.",
      backendDependency: "Live API, zakres najemcy, synchronizacja podróży i dokumentów, rozpoznawanie ustawień firmy.",
    },
    {
      id: "company-admin",
      title: "Kontrola firmy/administratora",
      goal: "Pozwól firmom transportowym zarządzać podróżami, użytkownikami, uprawnieniami i przepływami pracy z jednego portalu.",
      appFoundation: "Dane i działania po stronie kierowcy odzwierciedlają zasady firmy.",
      backendDependency: "Portal internetowy firmy, aplikacja administratora platformy, role, zarządzanie podróżami, wymagania dotyczące dokumentów, ustawienia wymiany firmowej.",
    },
    {
      id: "cmr-documents",
      title: "Cyfrowe CMR i dokumenty",
      goal: "Dokumenty powiązane z podróżą — CMR, dowód dostawy, faktura, dokumenty pojazdu i kierowcy — zarządzane w zorganizowany sposób.",
      appFoundation: "Przesyłanie dokumentów, skanowanie/zdjęcie, przydzielanie podróży, zadania oparte na wymaganiach, podstawowa koncepcja dokumentu.",
      backendDependency: "Przechowywanie dokumentów, metadane, zasady podpisu, udostępnianie uprawnień z ograniczeniami zakresu.",
      disclaimer: "Dokumenty cyfrowe nie mają automatycznie mocy dowodowej. Akceptacja różni się w zależności od kraju i klienta.",
    },
    {
      id: "completed-package",
      title: "Gotowy pakiet wyjazdowy",
      goal: "Podsumuj dowody zakończonej podróży w pakiecie, który można eksportować.",
      appFoundation: "Zamknięcie wycieczki, dane lokalne i zsynchronizowane zdarzenia jako podstawa montażu pakietu.",
      backendDependency: "Zakończono generowanie pakietu wyjazdowego, eksport PDF, eksport audytu. Niektóre sekcje (np. paleta/opakowanie PDF) pozostają zależnościami.",
      disclaimer: "Pakiet obsługuje dokumentację; nie zastępuje oceny prawnej spółki ani postępowania urzędowego.",
    },
    {
      id: "messaging-notifications",
      title: "Wiadomości i powiadomienia",
      goal: "Komunikacja powiązana z podróżami i alerty dotyczące ważnych zdarzeń dla kierowcy.",
      appFoundation: "Lista wiadomości, wątki powiązane z podróżami, podstawa powiadomień po stronie aplikacji. Nadaje się do: nowej wiadomości, zmiany podróży, zadania dokumentowego, problemu z synchronizacją.",
      backendDependency: "Wypychanie produkcyjne (FCM/APNs), rejestracja tokenu urządzenia, wysyłka po stronie serwera — osobna zależność, jeszcze niedostępna.",
      disclaimer: "Ekran docelowy otwiera się po PIN. Produkcja nie gwarantuje, że każde wydarzenie nastąpi natychmiast.",
    },
    {
      id: "pallet-packaging",
      title: "Wymiana palet i opakowań",
      goal: "Rejestruj wymiany palet i opakowań na przystanek z uwzględnieniem ilości, braków, uszkodzeń i sporów.",
      appFoundation: "Oddzielne moduły paletowe i opakowaniowe. Możliwość przełączania dla firmy. Firma może wstępnie ustawić elementy; kierowca może dodać niestandardowe opakowanie, jeśli jest to dozwolone. Zapisuj i synchronizuj w trybie offline.",
      backendDependency: "Ustawienia Exchange API, synchronizacja rekordów, interfejs administratora portalu, ukończona sekcja pakietu PDF — ta ostatnia jest zależnością.",
      disclaimer: "PDF sekcja dowodowa nie jest w pełni gotowa we wszystkich przypadkach. Nagrywanie wspomaga dokumentację sporów, ale nie rozstrzyga sporów.",
    },
    {
      id: "adr-border",
      title: "ADR / wsparcie graniczne",
      goal: "Szybkie informacje pomocnicze dotyczące ADR i kontekstu granicznego/celnego — wraz z weryfikacją oficjalnych źródeł.",
      appFoundation: "ADR informacje, wyszukiwanie numerów ONZ, pomocnik w zakresie kodów tuneli, metadane graniczne/celne powiązane z podróżami.",
      backendDependency: "ADR aktualizacje baz danych, metadane przepisów specyficznych dla kraju, dane punktów kontroli granicznej.",
      disclaimer: "ADR i dane tunelu są informacjami pomocniczymi. Aplikacja nie zastępuje przepisów prawnych, szkoleń, urzędników DG firmy ani decyzji władz.",
    },
    {
      id: "truck-map",
      title: "Podstawa mapy ciężarówek",
      goal: "Przegląd floty i podróży na mapie — orientacja operacyjna.",
      appFoundation: "Przegląd oparty na mapie, wyświetlanie kontekstu podróży i pojazdu.",
      backendDependency: "Integracja dostawcy telematyki, dostawca routingu, pozycja na żywo — stopniowa integracja.",
      disclaimer: "Mapa nie gwarantuje przestrzegania ograniczeń prawnych i zezwoleń.",
    },
    {
      id: "wielojęzyczny",
      title: "Obsługa wielojęzyczna",
      goal: "Wielojęzyczne zespoły na jednej platformie.",
      appFoundation: "Wielojęzyczny interfejs aplikacji sterownika, zachowanie oryginalnej wiadomości, tłumaczenie jako pomoc.",
      backendDependency: "Rozszerzanie ustawień regionalnych portali i witryn publicznych, przepływ pracy podczas sprawdzania tłumaczeń.",
      disclaimer: "Tłumaczenie maszynowe lub AI jest pomocne; wymagana jest weryfikacja przez człowieka. Oryginalny dokument pozostaje dokumentem podstawowym.",
    },
    {
      id: "audit-support",
      title: "Dostęp do audytu i wsparcia",
      goal: "Identyfikowalny dziennik; kontrolowany dostęp do pomocy technicznej w celu rozwiązywania problemów.",
      appFoundation: "Rejestrowanie zdarzeń dla działań związanych z podróżami i dokumentami; kontrolowane sesje wsparcia.",
      backendDependency: "Eksport audytu, polityka dostępu do wsparcia, macierz uprawnień przedsiębiorstwa.",
      disclaimer: "Dziennik audytu nie jest automatycznym dowodem prawnym.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — odpowiedzialne użytkowanie",
      body: "ADR i dane tunelu są informacjami pomocniczymi. Zawsze należy zweryfikować oficjalne źródła, tabele i aktualne przepisy lokalne. ViaNexis nie zastępuje przepisów, ADR szkolenia, inspektora ds. towarów niebezpiecznych ani decyzji władz.",
    },
    aiOcr: {
      title: "AI, OCR i tłumaczenie",
      body: "AI podsumowanie, OCR i automatyczne tłumaczenie to narzędzia pomocnicze. Wymagana jest weryfikacja manualna. Oryginalny dokument i wiadomość pozostają najważniejsze. Nie jest to porada prawna ani tłumaczenie przysięgłe.",
    },
    efti: {
      title: "eFTI i udostępnianie uprawnień",
      body: "ViaNexis nie jest certyfikowaną platformą eFTI. Nie obiecuje akceptacji władz w każdym kraju. Podstawa gotowa do eFTI oznacza przygotowanie techniczne — a nie certyfikat czy licencję.",
    },
  },
  home: {
    problem: {
      title: "Codzienne wyzwania logistyczne",
      subtitle: "Kiedy dokumenty, podpisy i zdarzenia są rozproszone, cierpi na tym możliwość śledzenia i dowodów.",
      cards: [
        {
          title: "Rozrzucone dokumenty",
          description: "Dokumenty z podróży w wiadomościach e-mail, na czacie lub w prasie — trudno je powiązać z rzeczywistymi wydarzeniami.",
        },
        {
          title: "Brakujące podpisy",
          description: "Spóźnione lub brakujące podpisy opóźniają zamknięcie i zwiększają ryzyko sporu.",
        },
        {
          title: "Zdarzenia trudne do udowodnienia",
          description: "Odbiór, dostawa, wymiana palet, incydent — bez uporządkowanych dzienników, trudny do prześledzenia.",
        },
        {
          title: "Zespoły wielojęzyczne",
          description: "Codzienne nieporozumienia w wiadomościach — wymagane jest zachowanie oryginalnego tekstu i sprawdzenie tłumaczenia.",
        }
      ],
    },
    modules: {
      title: "Moduły platformy",
      subtitle: "Cel, fundament po stronie aplikacji, zależność od backendu/administratora — sformułowania bezpieczne pod względem prawnym.",
    },
    pallet: {
      title: "Wymiana palet i opakowań",
      subtitle: "Oddzielne moduły, przełączane przez firmę — zapisywanie offline w celu audytu.",
    },
    notifications: {
      title: "Wiadomości i powiadomienia",
      subtitle: "Gotowy do działania po stronie aplikacji — wypychanie produkcji to osobna zależność zaplecza.",
      cards: [
        {
          title: "Typy zdarzeń powiadomień",
          description: "Nowa wiadomość, zmiana podróży, zadanie dokumentu, problem z synchronizacją.",
        },
        {
          title: "Kliknij wyznaczanie tras i PIN",
          description: "Otwórz ekran docelowy z powiadomienia; głęboki link po PIN.",
        },
        {
          title: "Ekran blokady zapewniający prywatność",
          description: "Pełna treść dokumentu lub wiadomości nie jest domyślnie wyświetlana na ekranie blokady.",
        }
      ],
      backendDepTitle: "Zależność backendu",
      backendDepBody: "Wypychanie produkcyjne (FCM/APNs), rejestracja tokenu urządzenia i wysyłka po stronie serwera nie są jeszcze dostępne — wymagana jest osobna integracja.",
    },
    disclaimersSection: {
      title: "Odpowiedzialne użytkowanie — ważne uwagi",
    },
    security: {
      title: "Ochrona i kontrola",
      subtitle: "Ochrona firmy i kierowcy dzięki uporządkowanej dokumentacji.",
      cards: [
        {
          title: "Ochrona firmy",
          description: "Dokumentacja oparta na wymaganiach, zdarzenia podlegające audytowi, kontrolowany dostęp.",
        },
        {
          title: "Ochrona kierowcy",
          description: "Ustrukturyzowany proces dokumentowania zdarzeń w sporach.",
        },
        {
          title: "Podstawa dokumentacji",
          description: "Dokumenty i wydarzenia powiązane z wycieczkami w jednym systemie.",
        },
        {
          title: "Wydarzenia podlegające audytowi",
          description: "Kto i kiedy zrobił – zalogowany i możliwy do przeszukiwania.",
        }
      ],
      notPromiseTitle: "Nie obietnica",
      notPromiseBody: "ViaNexis nie zapewnia automatycznej mocy dowodowej. Ocena prawna zależy od kontekstu.",
    },
    contact: {
      title: "Testy kontaktowe i wewnętrzne",
      subtitle: "Kontrolowany dostęp — nie automatyczna rejestracja, brak publicznego pobierania z Play.",
      body: "Access is currently available through a controlled pilot program. Activation follows an individual review.",
      consentNote: "System obsługuje dokumenty, obieg kierowców, dane firmowe i uprawnienia – każdy dostęp jest indywidualnie sprawdzany.",
      contactLink: "Skontaktuj się z nami →",
    },
  },
  contactForm: {
    title: "Skontaktuj się z nami",
    subtitle: "Zainteresowanie platformą ViaNexis — nie automatyczna rejestracja.",
    name: "Nazwa *",
    company: "Firma *",
    email: "E-mail *",
    phone: "Telefon",
    message: "Wiadomość *",
    interestType: "Rodzaj zainteresowania *",
    interestPlaceholder: "Wybierać...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Aplikacja sterownika",
      },
      {
        value: "company-admin",
        label: "Platforma firmowa/administracyjna",
      },
      {
        value: "dokumenty",
        label: "Zarządzanie dokumentami",
      },
      {
        value: "pallet-packaging",
        label: "Paleta/opakowanie",
      },
      {
        value: "adr-customs",
        label: "ADR / wsparcie celne",
      },
      {
        value: "Inny",
        label: "Inny",
      }
    ],
    consent: "Zgadzam się, że ViaNexis przetwarza podane dane wyłącznie w celach kontaktowych. *",
    submit: "Wyślij wiadomość",
    submitMailto: "Wyślij e-mail",
    intakeDisabled: "Przygotowywane jest złożenie wniosku online. Skorzystaj z kontaktu e-mailowego lub spróbuj ponownie później.",
    successTitle: "Wiadomość otrzymana",
    successBody: "Dziękuję za zainteresowanie. Nasz zespół skontaktuje się z Tobą. Aktywacja dostępu nie następuje automatycznie.",
    newSubmission: "Nowa wiadomość",
    errors: {
      name: "Imię i nazwisko jest wymagane.",
      company: "Firma jest wymagana.",
      email: "Adres e-mail jest wymagany.",
      emailInvalid: "Wpisz prawidłowy adres e-mail.",
      message: "Wiadomość jest wymagana.",
      interest: "Wybierz typ zainteresowań.",
      consent: "Wymagana jest zgoda.",
      submitFailed: "Nie udało się wysłać wiadomości. Zamiast tego wypróbuj e-mail.",
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
        title: "Pakiet inspekcji władz",
        description: "Dokumenty i wydarzenia powiązane z podróżą w ramach wspólnego pakietu o ograniczonym zakresie.",
      },
      {
        title: "Dostęp ograniczony zakresowo/czasowo",
        description: "Ograniczony dostęp oparty na kodach QR — niepubliczny.",
      },
      {
        title: "Rewizja",
        description: "Rejestrowane zdarzenia dostępu i udostępniania.",
      },
      {
        title: "Podstawa gotowa do eFTI",
        description: "Baza techniczna dla przyszłej integracji — nie certyfikacja.",
      },
    ],
  },

  legal: legalPl,
};
