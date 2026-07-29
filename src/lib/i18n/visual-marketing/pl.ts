import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingPl: VisualMarketingContent = {
  skipToContent: "Przejdź do treści",
  brandVisuals: {
    routeLabel: "Aktywna trasa",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "Sieć ViaNexis",
    networkTitle: "Nie tylko trasa łączy.",
    networkSubtitle: "Przystanki, dokumenty, podpisy, wiadomości i decyzje należą do tego samego przepływu podróży — w kolejności czasowej, z uprawnieniami i możliwością przeszukiwania ścieżki zdarzeń.",
    workflowEvents: [
      "Wyjazd",
      "Ulec poprawie",
      "Dokument",
      "Podpis",
      "Czekanie",
      "Dostawa",
      "Zamknięty pakiet"
    ],
  },
  pillars: {
    title: "Trzy filary – jeden kontrolowany system",
    subtitle: "Przyjazny dla kierowcy przepływ mobilny, kontrola operacyjna firmy i ścieżka decyzyjna podlegająca audytowi.",
    items: [
      {
        title: "Aplikacja przyjazna kierowcy",
        description: "Podróże, przystanki, dokumenty, podpisy i wydarzenia w mobilnym interfejsie użytkownika obsługującym tryb offline.",
      },
      {
        title: "Kontrola firmy",
        description: "Przegląd dyspozytora, uprawnienia, alerty i śledzenie dokumentów w portalu firmowym.",
      },
      {
        title: "Operacje podlegające audytowi",
        description: "Zdarzenia, podpisy i decyzje z dziennikiem z możliwością przeszukiwania — bez przesadnych zapewnień dotyczących bezpieczeństwa.",
      }
    ],
  },
  process: {
    title: "Podstawowy przebieg podróży",
    subtitle: "Od stworzenia do zamkniętego pakietu — uporządkowane kroki z dostępem zależnym od uprawnień.",
    steps: [
      {
        title: "Utwórz wycieczkę",
        description: "Przystanki odbioru i dostawy, zadania i wymagania dotyczące dokumentów.",
      },
      {
        title: "Akceptacja kierowcy",
        description: "Przypisanie, akceptacja i kontrolowane rozpoczęcie sesji.",
      },
      {
        title: "Przystanki i zadania",
        description: "Wiele przystanków, zadań, zdarzeń i zapisów uszkodzeń.",
      },
      {
        title: "Dokumenty i podpisy",
        description: "Prześlij, podpisz, przejrzyj – a potem zamknięty pakiet wyjazdowy.",
      }
    ],
  },
  homeModules: {
    title: "Powierzchnie produktów",
    subtitle: "Każda powierzchnia ma ten sam model podróży i dokumentów. Szczegóły znajdziesz na stronach produktów.",
    detailsLink: "Bliższe dane",
    items: [
      {
        title: "Aplikacja sterownika",
        description: "Podróże, przystanki, dokumenty i podpisy w przepływie mobilnym obsługującym tryb offline. Kierowcy zawsze widzą następną wymaganą czynność.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Portal firmowy",
        description: "Przegląd operacyjny: aktywne podróże, brakujące dokumenty, alerty i uprawnienia w jednym miejscu.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Dokumenty i podpisy",
        description: "Dokumentacja powiązana z podróżą, stany podpisów i zamknięty pakiet podróży z możliwością eksportu.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Wiadomości i alerty",
        description: "Komunikacja połączona z podróżą. Funkcje powiadomień można aktywować w ramach programu pilotażowego.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Audyt i uprawnienia",
        description: "Dostęp oparty na rolach, zdarzenia z możliwością wyszukiwania i kontrolowany dostęp do pomocy technicznej.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Działanie offline",
        description: "Sterowniki mogą nadal pracować w słabych sieciach; zmiany zostaną sfinalizowane po zakończeniu synchronizacji.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Dokumenty i podpisy",
    subtitle: "Dokumenty powiązane z wyjazdem można podpisać i przejrzeć, a następnie zamknąć w pakiecie, który można wyeksportować.",
    steps: [
      {
        title: "Prześlij lub utwórz",
        description: "CMR, dowód dostawy, zdjęcie lub szablon cyfrowy.",
      },
      {
        title: "Łączenie",
        description: "Przypisane do kontekstu podróży, kierowcy lub pojazdu.",
      },
      {
        title: "Podpisz i przejrzyj",
        description: "Przepływ statusu: oczekuje na podpis → podpisano → w trakcie przeglądu.",
      },
      {
        title: "Zamknięty pakiet wycieczkowy",
        description: "Dokumenty i zdarzenia z możliwością eksportu — podsumowanie podlegające audytowi.",
      }
    ],
    statuses: [
      "Załadowany",
      "Zaginiony",
      "Oczekiwanie na podpis",
      "Podpisano",
      "W trakcie przeglądu"
    ],
    detailsLink: "Dokumenty szczegółowo",
  },
  offline: {
    title: "Praca w trybie offline i synchronizacja",
    subtitle: "Prace trwają w słabych sieciach — finalizacja następuje po synchronizacji.",
    cards: [
      {
        title: "Lokalny zapis",
        description: "Zmiany sterowników są bezpiecznie przechowywane na urządzeniu.",
      },
      {
        title: "Widoczna synchronizacja",
        description: "Oczekujące zmiany pozostają widoczne do czasu przywrócenia łączności.",
      },
      {
        title: "Sygnalizacja konfliktu",
        description: "Źródła powodujące konflikt są rejestrowane — nigdy nie są dyskretnie nadpisywane.",
      }
    ],
    detailsLink: "Aplikacja sterownika",
  },
  responsibleUse: {
    title: "Odpowiedzialne użytkowanie",
    subtitle: "Krótkie, ważne limity — szczegóły znajdziesz na stronach prawnych.",
    items: [
      "ViaNexis nie jest certyfikowaną platformą eFTI i nie gwarantuje automatycznej akceptacji uprawnień.",
      "OCR, sztuczna inteligencja i tłumaczenie są pomocne – wymagana jest weryfikacja manualna.",
      "System nie udziela porad prawnych.",
      "Nie jest to usługa alarmowa ani SOS."
    ],
    detailsLink: "Pełne uwagi dotyczące odpowiedzialnego użytkowania",
  },
  pilotCta: {
    title: "Kontrolowany dostęp pilota",
    subtitle: "ViaNexis jest obecnie dostępna w ramach programu pilotażowego u wybranych przewoźników i kierowców. Dostęp zostaje aktywowany po indywidualnej dyskusji i akceptacji.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktywna wycieczka",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Następny przystanek",
        value: "Odbiór · Budapeszt (demo)",
        status: "W drodze",
      },
      {
        label: "Dokument",
        value: "CMR — oczekuje na podpis",
        status: "Działanie",
      },
      {
        label: "Synchronizuj",
        value: "Oczekuje 1 zmiana",
        status: "Nieaktywny",
      }
    ],
    phoneCaption: "Demo produktu — zanonimizowane przykładowe dane.",
    browserTitle: "Kontrola operacji",
    browserSubtitle: "Flota demonstracyjna · widok dyspozytora",
    browserColumns: [
      "Wycieczka",
      "Zatrzymywać się",
      "Dokument",
      "Status"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapeszt (demo)",
        "Brak CMR",
        "Alarm"
      ],
      [
        "VN-2407-B03",
        "Győr (demo)",
        "POD podpisany",
        "W drodze"
      ],
      [
        "VN-2407-C11",
        "Wiedeń (demo)",
        "W trakcie przeglądu",
        "Wstępne zamknięcie"
      ]
    ],
    browserCaption: "Demo portalu firmowego — nie aktualne dane klientów.",
    driver: {
      navHome: "Dom",
      navTrips: "Wycieczki",
      navDocs: "Dokumenty",
      navMore: "Więcej",
      tripStatus: "Podróż w toku",
      nextStopLabel: "Następny przystanek",
      nextStopValue: "Odbiór · Budapeszt (demo)",
      documentLabel: "Dokument",
      documentValue: "Cyfrowy CMR",
      documentAction: "Wymagany podpis",
      syncLabel: "Połączenie",
      syncValue: "Offline · 1 w toku",
    },
    portal: {
      roleLabel: "Rola: Dyspozytor",
      alertLabel: "Alarm",
      alertValue: "VN-2407-A18 · CMR oczekuje na podpis",
      auditLabel: "Najnowsze wydarzenie audytowe",
      auditValue: "Zmieniono status dokumentu · aplikacja sterownika",
    },
  },
  statusLabels: {
    available: "Dostępny",
    pilot: "Pilot",
    development: "W rozwoju",
  },
  productPage: {
    highlightsTitle: "Kluczowe możliwości",
    capabilitiesTitle: "Co zapewnia ta powierzchnia",
    statusesTitle: "Etykiety stanu",
  },
  authority: {
    heroSubtitle: "Dostęp do dowodów podróży ograniczony czasowo i zakresowo – nie jest to certyfikowana platforma eFTI.",
    foundationBadge: "Gotowość techniczna",
    notCertifiedBadge: "Brak certyfikatu eFTI",
    foundationTitle: "Co oznacza gotowość",
    foundationSubtitle: "Uporządkowane dane i kontrolowane udostępnianie — bez konieczności posiadania certyfikatu lub pozwolenia.",
    extraDisclaimer: "ViaNexis nie obiecuje akceptacji władz w każdym kraju. Zgodność z przepisami prawnymi i przepisami pozostaje obowiązkiem klienta.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Lista podróży i przystanków",
        description: "Aktywne podróże, kolejne działania i zadania zatrzymania.",
        status: "available",
      },
      {
        title: "Dokumenty i podpis",
        description: "Przesyłanie, zadania CMR i przechwytywanie podpisów.",
        status: "available",
      },
      {
        title: "Praca offline",
        description: "Lokalny zapis z widoczną oczekującą synchronizacją.",
        status: "available",
      },
      {
        title: "Wiadomości",
        description: "Komunikacja połączona z podróżą dla kierowców.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Lista aktywnych podróży",
        description: "Przegląd operacyjny z przystankami i statusami.",
        status: "available",
      },
      {
        title: "Alerty dotyczące brakujących dokumentów",
        description: "Brakujące lub niepodpisane dokumenty są natychmiast widoczne.",
        status: "available",
      },
      {
        title: "Uprawnienia",
        description: "Dostęp do danych firmy oparty na rolach.",
        status: "available",
      },
      {
        title: "Wydarzenia audytowe",
        description: "Możliwość przeszukiwania decyzji i śladów dokumentów.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Prześlij i połącz",
        description: "Dokumenty powiązane z podróżą, kierowcą lub pojazdem.",
        status: "available",
      },
      {
        title: "Przepływ pracy z podpisem",
        description: "Oczekuje na podpis → podpisano → recenzję.",
        status: "pilot",
      },
      {
        title: "Zamknięty pakiet wycieczkowy",
        description: "Eksportowalne dokumenty i wydarzenia.",
        status: "pilot",
      },
      {
        title: "Zarządzanie szablonami",
        description: "Centralne szablony dokumentów — wdrażanie stopniowe.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Dostęp oparty na rolach",
        description: "Separacja na poziomie użytkownika i firmy.",
        status: "available",
      },
      {
        title: "Dziennik audytu",
        description: "Działania i decyzje można nadal przeszukiwać.",
        status: "available",
      },
      {
        title: "Sesja i urządzenie",
        description: "Kontrolowane zarządzanie sesjami i urządzeniami.",
        status: "pilot",
      },
      {
        title: "Dostęp do wsparcia",
        description: "Ograniczony czasowo, zarejestrowany wpis pomocy technicznej.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Język",
    draftSuffix: "· projekt",
    breadcrumb: "Bułka tarta",
    primaryNav: "Podstawowy",
    importantNotice: "Ważna informacja",
  },
};
