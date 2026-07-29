#!/usr/bin/env python3
"""Patch remaining EN-identical leftovers that failed MT (placeholders etc.)."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src/lib/i18n/content"
LEGAL = CONTENT / "legal"
DRAFT = [
    "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv", "lt",
    "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]

# locale -> {en: translated}
HELP = {
    "de": "Hilfe nötig? Kontakt: {email}.",
    "ro": "Ai nevoie de ajutor? Contactează {email}.",
    "sk": "Potrebujete pomoc? Kontaktujte {email}.",
    "pl": "Potrzebujesz pomocy? Skontaktuj się: {email}.",
    "cs": "Potřebujete pomoc? Kontaktujte {email}.",
    "bg": "Нуждаете се от помощ? Свържете се с {email}.",
    "hr": "Trebate pomoć? Kontaktirajte {email}.",
    "sr": "Treba vam pomoć? Kontaktirajte {email}.",
    "sl": "Potrebujete pomoč? Kontaktirajte {email}.",
    "et": "Vajad abi? Võta ühendust: {email}.",
    "lv": "Nepieciešama palīdzība? Sazinieties: {email}.",
    "lt": "Reikia pagalbos? Susisiekite: {email}.",
    "fi": "Tarvitsetko apua? Ota yhteyttä: {email}.",
    "sv": "Behöver du hjälp? Kontakta {email}.",
    "da": "Brug for hjælp? Kontakt {email}.",
    "nb": "Trenger du hjelp? Kontakt {email}.",
    "nl": "Hulp nodig? Neem contact op via {email}.",
    "fr": "Besoin d’aide ? Contactez {email}.",
    "es": "¿Necesita ayuda? Contacte con {email}.",
    "pt": "Precisa de ajuda? Contacte {email}.",
    "it": "Serve aiuto? Contatta {email}.",
    "el": "Χρειάζεστε βοήθεια; Επικοινωνήστε: {email}.",
    "tr": "Yardım mı lazım? İletişim: {email}.",
    "uk": "Потрібна допомога? Зв’яжіться: {email}.",
    "ru": "Нужна помощь? Свяжитесь: {email}.",
    "sq": "Keni nevojë për ndihmë? Kontaktoni {email}.",
    "mk": "Ви треба помош? Контактирајте {email}.",
    "bs": "Trebate pomoć? Kontaktirajte {email}.",
    "be": "Патрэбна дапамога? Звяжыцеся: {email}.",
    "ga": "Cabhair uait? Déan teagmháil le {email}.",
    "mt": "Għandek bżonn għajnuna? Ikkuntattja {email}.",
    "is": "Þarftu aðstoð? Hafðu samband: {email}.",
    "ar": "هل تحتاج مساعدة؟ تواصل مع {email}.",
}

DUP_REF = {
    "de": "Für dieses Unternehmen oder diese E-Mail läuft bereits eine Bewerbung (Referenz: {reference}).",
    "ro": "O cerere pentru această companie sau e-mail este deja în curs (referință: {reference}).",
    "sk": "Žiadosť pre túto firmu alebo e-mail už prebieha (referencia: {reference}).",
    "pl": "Wniosek dla tej firmy lub adresu e-mail jest już w toku (numer: {reference}).",
    "cs": "Žádost pro tuto firmu nebo e-mail již probíhá (reference: {reference}).",
    "bg": "Вече има заявление за тази компания или имейл (референция: {reference}).",
    "hr": "Prijava za ovu tvrtku ili e-mail već je u tijeku (referenca: {reference}).",
    "sr": "Prijava za ovu kompaniju ili e-poštu je već u toku (referenca: {reference}).",
    "sl": "Prijava za to podjetje ali e-pošto je že v teku (referenca: {reference}).",
    "et": "Selle ettevõtte või e-posti jaoks on taotlus juba pooleli (viide: {reference}).",
    "lv": "Šim uzņēmumam vai e-pastam pieteikums jau ir procesā (atsauce: {reference}).",
    "lt": "Šiai įmonei ar el. paštui jau teikiama paraiška (nuoroda: {reference}).",
    "fi": "Tälle yritykselle tai sähköpostille on jo käynnissä oleva hakemus (viite: {reference}).",
    "sv": "En ansökan för detta företag eller e-post pågår redan (referens: {reference}).",
    "da": "En ansøgning for denne virksomhed eller e-mail er allerede i gang (reference: {reference}).",
    "nb": "En søknad for dette selskapet eller e-posten er allerede under behandling (referanse: {reference}).",
    "nl": "Er loopt al een aanvraag voor dit bedrijf of e-mailadres (referentie: {reference}).",
    "fr": "Une demande pour cette entreprise ou cet e-mail est déjà en cours (référence : {reference}).",
    "es": "Ya hay una solicitud en curso para esta empresa o correo (referencia: {reference}).",
    "pt": "Já existe um pedido em curso para esta empresa ou e-mail (referência: {reference}).",
    "it": "Una candidatura per questa azienda o email è già in corso (riferimento: {reference}).",
    "el": "Υπάρχει ήδη αίτηση για αυτή την εταιρεία ή email (αναφορά: {reference}).",
    "tr": "Bu şirket veya e-posta için başvuru zaten devam ediyor (referans: {reference}).",
    "uk": "Заявка для цієї компанії або пошти вже обробляється (номер: {reference}).",
    "ru": "Заявка для этой компании или почты уже обрабатывается (номер: {reference}).",
    "sq": "Një aplikim për këtë kompani ose email është tashmë në proces (referenca: {reference}).",
    "mk": "Веќе има пријава за оваа компанија или е-пошта (референца: {reference}).",
    "bs": "Prijava za ovu kompaniju ili e-mail je već u toku (referenca: {reference}).",
    "be": "Заяўка для гэтай кампаніі або пошты ўжо ў працэсе (нумар: {reference}).",
    "ga": "Tá iarratas ar an gcuideachta nó ríomhphost seo ar siúl cheana (tagairt: {reference}).",
    "mt": "Diġà hemm applikazzjoni għal din il-kumpanija jew email (referenza: {reference}).",
    "is": "Umsókn fyrir þetta fyrirtæki eða netfang er þegar í vinnslu (tilvísun: {reference}).",
    "ar": "هناك طلب قيد المعالجة لهذه الشركة أو البريد (المرجع: {reference}).",
}

NO_STORE = {
    "de": "Kein öffentlicher App-Store-Download.",
    "ro": "Fără descărcare publică din magazinul de aplicații.",
    "sk": "Žiadne verejné stiahnutie z obchodu s aplikáciami.",
    "pl": "Brak publicznego pobierania ze sklepu z aplikacjami.",
    "cs": "Žádné veřejné stažení z obchodu s aplikacemi.",
    "bg": "Няма публично изтегляне от магазина за приложения.",
    "hr": "Nema javnog preuzimanja iz trgovine aplikacija.",
    "sr": "Nema javnog preuzimanja iz prodavnice aplikacija.",
    "sl": "Ni javnega prenosa iz trgovine z aplikacijami.",
    "et": "Avalikku rakendusepoe allalaadimist pole.",
    "lv": "Nav publiskas lejupielādes no lietotņu veikala.",
    "lt": "Nėra viešo atsisiuntimo iš programėlių parduotuvės.",
    "fi": "Ei julkista sovelluskaupan latausta.",
    "sv": "Ingen offentlig nedladdning från appbutiken.",
    "da": "Ingen offentlig app-store-download.",
    "nb": "Ingen offentlig appbutikk-nedlasting.",
    "nl": "Geen openbare app-store-download.",
    "fr": "Pas de téléchargement public depuis l’App Store.",
    "es": "Sin descarga pública en la tienda de aplicaciones.",
    "pt": "Sem download público na loja de aplicações.",
    "it": "Nessun download pubblico dall’app store.",
    "el": "Δεν υπάρχει δημόσια λήψη από το app store.",
    "tr": "Herkese açık uygulama mağazası indirmesi yok.",
    "uk": "Немає публічного завантаження з магазину додатків.",
    "ru": "Нет публичной загрузки из магазина приложений.",
    "sq": "Nuk ka shkarkim publik nga dyqani i aplikacioneve.",
    "mk": "Нема јавно преземање од продавницата за апликации.",
    "bs": "Nema javnog preuzimanja iz trgovine aplikacija.",
    "be": "Няма публічнай загрузкі з крамы прыкладанняў.",
    "ga": "Níl aon íoslódáil phoiblí ón siopa aipeanna.",
    "mt": "Ebda niżla pubblika mill-app store.",
    "is": "Enginn opinber niðurhal úr appverslun.",
    "ar": "لا يوجد تنزيل عام من متجر التطبيقات.",
}

LICENSE = {
    "it": "Note licenza / ADR / GKI (opzionale)",
    "de": "Lizenz- / ADR- / GKI-Hinweise (optional)",
    "fr": "Notes permis / ADR / GKI (facultatif)",
    "es": "Notas de licencia / ADR / GKI (opcional)",
    "pl": "Uwagi licencja / ADR / GKI (opcjonalnie)",
    "ro": "Note permis / ADR / GKI (opțional)",
    "nl": "Licentie- / ADR- / GKI-notities (optioneel)",
    "pt": "Notas de licença / ADR / GKI (opcional)",
    "cs": "Poznámky licence / ADR / GKI (volitelné)",
    "sk": "Poznámky licencia / ADR / GKI (voliteľné)",
    "ru": "Примечания лицензия / ADR / GKI (необязательно)",
    "uk": "Примітки ліцензія / ADR / GKI (необов’язково)",
    "tr": "Lisans / ADR / GKI notları (isteğe bağlı)",
    "el": "Σημειώσεις άδειας / ADR / GKI (προαιρετικό)",
    "ar": "ملاحظات الرخصة / ADR / GKI (اختياري)",
    "bg": "Бележки лиценз / ADR / GKI (по избор)",
    "hr": "Napomene dozvola / ADR / GKI (opcionalno)",
    "sr": "Napomene dozvola / ADR / GKI (opciono)",
    "sl": "Opombe dovoljenje / ADR / GKI (izbirno)",
    "cs": "Poznámky licence / ADR / GKI (volitelné)",
    "sk": "Poznámky licencia / ADR / GKI (voliteľné)",
    "pl": "Uwagi licencja / ADR / GKI (opcjonalnie)",
    "ro": "Note permis / ADR / GKI (opțional)",
    "nl": "Licentie- / ADR- / GKI-notities (optioneel)",
    "pt": "Notas de licença / ADR / GKI (opcional)",
    "sv": "Anteckningar körkort / ADR / GKI (valfritt)",
    "da": "Noter licens / ADR / GKI (valgfrit)",
    "nb": "Merknader lisens / ADR / GKI (valgfritt)",
    "fi": "Lisenssi- / ADR- / GKI-huomiot (valinnainen)",
    "et": "Märkmed litsents / ADR / GKI (valikuline)",
    "lv": "Piezīmes licence / ADR / GKI (pēc izvēles)",
    "lt": "Pastabos licencija / ADR / GKI (neprivaloma)",
    "sq": "Shënime licenca / ADR / GKI (opsionale)",
    "mk": "Белешки лиценца / ADR / GKI (опционално)",
    "bs": "Napomene dozvola / ADR / GKI (opcionalno)",
    "be": "Нататкі ліцэнзія / ADR / GKI (неабавязкова)",
    "ga": "Nótaí ceadúnas / ADR / GKI (roghnach)",
    "mt": "Noti liċenzja / ADR / GKI (fakultattiv)",
    "is": "Athugasemdir ökuskírteini / ADR / GKI (valfrjálst)",
}

MISC = {
    "Enter a valid email address.": {
        "sl": "Vnesite veljaven e-poštni naslov.",
    },
    "Application received": {
        "lt": "Paraiška gauta",
    },
    "Notifications": {
        "fr": "Notifications",
        "de": "Benachrichtigungen",
        "es": "Notificaciones",
        "it": "Notifiche",
        "pl": "Powiadomienia",
        "ro": "Notificări",
        "nl": "Meldingen",
        "pt": "Notificações",
        "cs": "Oznámení",
        "sk": "Upozornenia",
        "sv": "Aviseringar",
        "da": "Notifikationer",
        "nb": "Varsler",
        "fi": "Ilmoitukset",
        "tr": "Bildirimler",
        "ru": "Уведомления",
        "uk": "Сповіщення",
        "el": "Ειδοποιήσεις",
        "ar": "الإشعارات",
        "hr": "Obavijesti",
        "sr": "Obaveštenja",
        "bg": "Известия",
        "sl": "Obvestila",
        "et": "Teavitused",
        "lv": "Paziņojumi",
        "lt": "Pranešimai",
        "sq": "Njoftime",
        "mk": "Известувања",
        "bs": "Obavještenja",
        "be": "Апавяшчэнні",
        "ga": "Fógraí",
        "mt": "Notifiki",
        "is": "Tilkynningar",
    },
}


def escape_ts(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def replace_one(text: str, source: str, target: str) -> str:
    if source not in text:
        return text
    return text.replace(f'"{source}"', f'"{escape_ts(target)}"')


def main() -> int:
    for locale in DRAFT:
        path = CONTENT / f"{locale}.ts"
        text = path.read_text(encoding="utf-8")
        orig = text
        text = replace_one(text, "Need help? Contact {email}.", HELP[locale])
        text = replace_one(
            text,
            "An application for this company or email is already in progress (reference: {reference}).",
            DUP_REF[locale],
        )
        text = replace_one(text, "No public app-store download.", NO_STORE[locale])
        if locale in LICENSE:
            text = replace_one(
                text,
                "License / ADR / GKI notes (optional)",
                LICENSE[locale],
            )
        for en, by_loc in MISC.items():
            if locale in by_loc:
                text = replace_one(text, en, by_loc[locale])
        if text != orig:
            path.write_text(text, encoding="utf-8")
            print(f"patched {locale}.ts")

        legal = LEGAL / f"{locale}.ts"
        ltext = legal.read_text(encoding="utf-8")
        lorig = ltext
        for en, by_loc in MISC.items():
            if locale in by_loc:
                ltext = replace_one(ltext, en, by_loc[locale])
        if ltext != lorig:
            legal.write_text(ltext, encoding="utf-8")
            print(f"patched legal/{locale}.ts")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
