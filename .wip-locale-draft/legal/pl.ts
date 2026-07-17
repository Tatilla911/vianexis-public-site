import type { LegalContent } from "../legal-types";

export const legalPl: LegalContent = {
  versionBadge: "Wersja do testów wewnętrznych — trwa ocena eksperta prawnego · To tłumaczenie jest w trakcie weryfikacji.",
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
};
