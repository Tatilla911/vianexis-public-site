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
    title: "Aktualny stan",
    items: [
      "Trwają przygotowania do wewnętrznych testów Google Play – nie jest to pobieranie ze sklepu publicznego.",
      "Gotowość do wydania aplikacji sterownika i Samsung UAT w toku.",
      "Zaplecze produkcyjne, powiadomienia push i integracje partnerów są łączone stopniowo."
    ],
    disclaimer: "ViaNexis nie twierdzi, że system działa, jest certyfikowany lub oficjalnie akceptowany w każdym kraju.",
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
      body: "Aplikacja sterownika znajduje się w fazie przygotowań do wewnętrznych testów Google Play. Gotowość do wydania i Samsung UAT w toku. Aktywacja nie jest automatyczna.",
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
  legal: {
    versionBadge: "Wersja do testów wewnętrznych — trwa ocena eksperta prawnego",
    privacy: {
      title: "Informacja o ochronie prywatności — wersja do testów wewnętrznych",
      intro: "Niniejsza uwaga ma zastosowanie podczas wewnętrznych testów i fazy przygotowawczej aplikacji ViaNexis Driver i powiązanej platformy. Usługa nie jest dostępna do pobrania w Sklepie Play — trwają przygotowania do wewnętrznych testów Google Play. Ostateczna kompleksowa polityka prywatności zostanie opublikowana po weryfikacji prawnej.",
      lastUpdated: "2026-07-05",
      controller: {
        title: "Administrator danych",
        body: "ViaNexis — vianexis.eu. Kontakt w sprawie prywatności: info@vianexis.eu",
      },
      scope: {
        title: "Zakres",
        body: "Niniejsze powiadomienie dotyczy aplikacji mobilnej ViaNexis Kierowcy, powiązanych procesów pracy z kierowcami i podróżami oraz internetowego formularza kontaktowego. Portal administratora i dyspozytora firmy podlega odrębnym warunkom umownym i dotyczącym prywatności.",
      },
      dataCategories: {
        title: "Dane, które przetwarzamy",
        items: [
          "Dane konta i dane kontaktowe: imię i nazwisko, adres e-mail, telefon, firma, rola, kraj.",
          "Dane profilu kierowcy: identyfikatory, rola, ustawienia językowe, uprawnienia.",
          "Dane podróży: identyfikatory podróży, status, przystanki, znaczniki czasu, metadane.",
          "Dokumenty: CMR, dowody dostawy, faktury, zdjęcia, skany, podpisy cyfrowe.",
          "Wiadomości i powiadomienia: komunikacja związana z podróżą i zdarzenia alarmowe.",
          "Lokalizacja: tylko za zgodą użytkownika i podczas użytkowania (podczas użytkowania), jeśli funkcja jest aktywna.",
          "Metadane urządzenia i sesji: typ urządzenia, wersja systemu operacyjnego, wersja aplikacji, identyfikatory sesji.",
          "Diagnostyka i dzienniki: dzienniki techniczne i raporty o błędach — jeśli są włączone.",
          "Dane wymiany palet i opakowań: rodzaj, ilość, braki, uszkodzenia, uwagi.",
          "ADR / dane dotyczące użytkowania pomocy celnej: wyszukiwania, wyświetlenia — nie oficjalne decyzje.",
          "Zezwolenie na powiadomienia i przyszły token wypychania: wypychanie produkcyjne (FCM) to osobna zależność zaplecza."
        ],
      },
      purposes: {
        title: "Cele przetwarzania",
        items: [
          "Zarządzanie przebiegiem podróży i dokumentowanie wyników.",
          "Zarządzanie dokumentami, podpisami i montażem pakietu dowodowego.",
          "Powiadomienia komunikacyjne i operacyjne powiązane z podróżą.",
          "Bezpieczeństwo, audyt i identyfikowalność.",
          "Kontrolowany dostęp do wsparcia w sposób podlegający audytowi.",
          "Zapobieganie i dokumentowanie sporów prawnych i biznesowych.",
          "Poprawianie działania aplikacji i rozwiązywanie problemów.",
          "Testy wewnętrzne, pilotaż i ocena dostępu."
        ],
      },
      sharing: {
        title: "Udostępnianie danych",
        items: [
          "Pracodawca/firma transportowa i upoważnieni użytkownicy administratorzy/dyspozytorzy — według zakresu najemcy.",
          "Własna podróż kierowcy i dane dokumentu zgodnie z przepisami firmy.",
          "Autoryzowane wsparcie platformy tylko z audytowanym, ograniczonym i uzasadnionym dostępem.",
          "Władze lub partnerzy wyłącznie na podstawie podstawy prawnej, umowy lub decyzji firmy.",
          "AI/OCR/dostawca tłumaczeń tylko poprzez przyszłą integrację kontrolowaną przez backend, jeśli jest stosowana – z weryfikacją manualną.",
          "Nie sprzedajemy danych osobowych. Żadnego nacisku marketingowego."
        ],
      },
      rights: {
        title: "Twoje prawa",
        items: [
          "Dostęp do Twoich danych — poprzez administratora firmy lub kanał wsparcia.",
          "Sprostowanie nieprawidłowych danych.",
          "Usunąć, jeśli jest to prawnie możliwe i pozwalają na to procesy firmowe.",
          "Sprzeciw lub ograniczenie, jeśli jest to prawnie uzasadnione.",
          "Przenoszenie danych, jeżeli przewiduje to obowiązujące prawo.",
          "Skarga do organu nadzorczego.",
          "Kontakt: info@vianexis.eu"
        ],
      },
      notifications: {
        title: "Powiadomienia",
        body: "Aplikacja wykorzystuje powiadomienia operacyjne, a nie marketingowe. Tekst na ekranie blokady jest domyślnie bezpieczny dla prywatności. Wypychanie produkcyjne (FCM/APNs) i obsługa tokenów urządzenia są zależnościami zaplecza — mogą być częściowe lub nie działać podczas testów wewnętrznych. Zezwolenie na powiadamianie jest wyborem użytkownika.",
      },
      location: {
        title: "Lokalizacja",
        body: "Lokalizacja jest przetwarzana wyłącznie za zgodą użytkownika i podczas użytkowania (kiedy jest używana), jeśli funkcja jest aktywna — dla celów mapy, własnej pozycji i dowodów podróży. Brak śledzenia w tle w bieżącym stanie. Lokalizacja nie gwarantuje zgodności z trasą ani zgodności z prawem.",
      },
      importantNotices: {
        title: "Ważne uwagi",
        items: [
          "AI, OCR i tłumaczenie automatyczne to narzędzia pomocnicze — wymagana jest weryfikacja manualna.",
          "ADR informacja jest pomocą — nie zastępuje oficjalnych źródeł ani przepisów.",
          "ViaNexis nie jest certyfikowaną platformą eFTI.",
          "Nie jest to sytuacja awaryjna ani usługa SOS.",
          "Dokumenty cyfrowe nie mają automatycznie mocy dowodowej.",
          "Usługa jest w fazie wewnętrznych testów/przygotowań — a nie publicznego systemu produkcyjnego na żywo."
        ],
      },
      dataContact: {
        title: "Kontakt dotyczący prywatności",
        body: "Pytania dotyczące prywatności: info@vianexis.eu. Ostateczny kontakt z administratorem zostanie podany w opublikowanym powiadomieniu.",
      },
      playUrl: "Adres URL prywatności stabilnej Konsoli Play: https://vianexis.eu/en/privacy",
    },
    terms: {
      title: "Regulamin — wersja do testów wewnętrznych",
      intro: "Niniejsze warunki mają zastosowanie podczas wewnętrznych testów i fazy pilotażowej platformy ViaNexis. Usługa nie jest produktem publicznym Sklepu Play — trwają przygotowania do wewnętrznych testów Google Play. Ostateczne warunki zostaną opublikowane po weryfikacji prawnej.",
      sections: [
        {
          title: "Charakter usługi",
          body: "ViaNexis zapewnia cyfrowe dowody transportu i platformę obsługi kierowców dla firm transportowych. Podstawa gotowa do obsługi eFTI — nie jest to certyfikowana platforma eFTI. Nie obiecuje akceptacji władz w każdym kraju.",
        },
        {
          title: "Testy wewnętrzne",
          body: "Dostęp jest kontrolowany — poprzez zaproszenie do testów pilotażowych lub wewnętrznych. Nie automatyczna rejestracja publiczna. Backend, powiadomienia push i niektóre integracje są łączone stopniowo.",
        },
        {
          title: "Odpowiedzialność użytkownika",
          body: "Kierowca i firma są odpowiedzialni za podróż, dokumenty, ADR i zgodność z przepisami celnymi. Aplikacja obsługuje dokumentację — nie zastępuje porady prawnej, ekspertów ADR ani władz.",
        },
        {
          title: "Dostępność",
          body: "Podczas testów wewnętrznych czas działania i funkcje mogą się różnić. Specyficzna umowa SLA ma zastosowanie wyłącznie w ramach umowy.",
        },
        {
          title: "Ograniczenie odpowiedzialności",
          body: "ViaNexis nie obiecuje automatycznej prawnej mocy dowodowej, bezbłędnego OCR/AI/tłumaczenia, usług awaryjnych ani gotowości do uruchomienia produkcji, jeśli nadal jest to zależność od backendu.",
        }
      ],
    },
    legalNotice: {
      title: "Nota prawna — wersja do testów wewnętrznych",
      intro: "Na tej stronie opisano stan wewnętrznych testów i przygotowań platformy ViaNexis. Nie zastępuje pełnej dokumentacji prawnej ani warunków umownych.",
      sections: [
        {
          title: "Charakter platformy",
          body: "Cyfrowa ewidencja transportu, zarządzanie dokumentami, przesyłanie wiadomości, powiadomienia i kontrola firmy w jednym systemie. Podstawa gotowa do obsługi eFTI — nie jest to certyfikowana platforma eFTI.",
        },
        {
          title: "Stan testów wewnętrznych",
          body: "Trwają przygotowania do wewnętrznych testów Google Play. Samsung UAT i przygotowanie do wydania w toku. Nie twierdzimy, że aplikacja jest publicznie dostępna w Sklepie Play.",
        },
        {
          title: "Ograniczenie odpowiedzialności",
          body: "Nie obiecujemy akceptacji władz, automatycznej mocy prawnej, bezbłędnego AI/OCR/tłumaczenia, usług awaryjnych ani pełnej gotowości do rozpoczęcia produkcji.",
        },
        {
          title: "Kontakt",
          body: "Pytania prawne i dotyczące prywatności: info@vianexis.eu",
        }
      ],
      relatedDocs: "Powiązane dokumenty",
    },
    disclaimersPage: {
      title: "Odpowiedzialne użytkowanie — zastrzeżenia",
      intro: "Poniższe teksty opisują istotne ograniczenia korzystania z platformy. Wersja do testów wewnętrznych – nie zastępuje porady prawnej.",
      items: [
        {
          id: "adres",
          title: "ADR — odpowiedzialne użytkowanie",
          body: "ADR i dane tunelu są informacjami pomocniczymi. Zawsze należy zweryfikować oficjalne źródła, tabele i aktualne przepisy lokalne. ViaNexis nie zastępuje przepisów prawnych, ADR szkoleń, dyrektora generalnego firmy ani decyzji władz.",
        },
        {
          id: "ai-ocr",
          title: "AI, OCR i tłumaczenie",
          body: "Narzędzia pomocnicze — wymagana jest weryfikacja manualna. Oryginalny dokument i wiadomość pozostają najważniejsze. Nie jest to porada prawna ani tłumaczenie przysięgłe.",
        },
        {
          id: "powiadomienia",
          title: "Powiadomienia i push",
          body: "Powiadomienia operacyjne — nie push marketingowy. Domyślnie ekran blokady zapewniający prywatność. Wypychanie produkcyjne (FCM/APNs) jest zależnością od backendu — może nie działać podczas testów wewnętrznych.",
        },
        {
          id: "truck-map",
          title: "Mapa ciężarówek / dane społeczności",
          body: "Mapa i trasa orientacyjna — nie gwarantuje ograniczeń prawnych, pozwoleń ani dokładności danych społeczności. Nie zastępuje oficjalnej nawigacji.",
        },
        {
          id: "paleta",
          title: "Dowód wymiany palety/opakowania",
          body: "Nagrywanie wspiera dokumentację sporu. PDF sekcja dowodowa w zrealizowanym pakiecie wycieczkowym nie jest w pełni gotowa we wszystkich przypadkach. Nie rozstrzyga sporów.",
        },
        {
          id: "legal-validity",
          title: "Moc prawna / dokumenty",
          body: "Dokumenty i podpisy cyfrowe nie mają automatycznie mocy dowodowej. Akceptacja różni się w zależności od kraju i klienta.",
        },
        {
          id: "efekt",
          title: "eFTI i udostępnianie uprawnień",
          body: "ViaNexis nie jest certyfikowaną platformą eFTI. Nie obiecuje akceptacji władz w każdym kraju. Podstawa gotowa do eFTI to przygotowanie techniczne — a nie certyfikat.",
        }
      ],
    },
  },
  legal: legalPl,
};
