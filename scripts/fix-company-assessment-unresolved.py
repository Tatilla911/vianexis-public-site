#!/usr/bin/env python3
"""Fix ONLY unresolved Company Assessment MT leftovers.

- Preserves good cache entries (value != EN source).
- Clears EN-identical cache leftovers.
- Seeds Arabic curated translations (required locale).
- Seeds sibling-locale copies when available.
- Retries MT only for remaining gaps.
- Regenerates company-assessment-labels.generated.ts.

Does not rewrite HU/EN golden. Does not touch India Driver-only locales.
"""

from __future__ import annotations

import json
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GOLDEN_PATH = ROOT / ".wip-locale-draft/assessment-golden.json"
CACHE_PATH = ROOT / ".wip-locale-draft/assessment-mt-cache.json"
OUT = ROOT / "src/lib/i18n/company-assessment-labels.generated.ts"
AUDIT_PATH = ROOT / ".wip-locale-draft/assessment-unresolved-audit.json"

LOCALES = [
    "hu", "en", "de", "ro", "sk", "pl", "cs", "bg", "hr", "sr", "sl", "et", "lv",
    "lt", "fi", "sv", "da", "nb", "nl", "fr", "es", "pt", "it", "el", "tr", "uk",
    "ru", "sq", "mk", "bs", "be", "ga", "mt", "is", "ar",
]
DRAFT = [c for c in LOCALES if c not in ("hu", "en")]
SHELL_KEYS = [
    "title", "subtitle", "continueTitle", "save", "saving", "saved", "next",
    "back", "submit", "submitting", "submittedTitle", "submittedBody",
    "summaryTitle", "summaryEmpty", "invalidLink", "expiredLink", "loading",
    "stepCompany", "stepSize", "stepOperations", "stepModules",
    "stepIntegrations", "stepRollout", "stepSummary", "yes", "no",
]

SIBLINGS = {
    "da": ["sv", "nb", "nl", "de"],
    "nb": ["da", "sv", "nl", "de"],
    "sv": ["da", "nb", "nl", "de"],
    "bs": ["hr", "sr", "sl", "mk"],
    "sl": ["hr", "bs", "sr", "sk"],
    "uk": ["ru", "be"],
    "et": ["fi"],
    "sq": ["mk", "hr"],
    "nl": ["de", "da"],
    "fr": ["es", "it", "pt"],
    "es": ["pt", "fr", "it"],
    "ga": ["en"],  # no sibling — MT only
    "el": ["en"],
    "ar": [],
}

# Curated Arabic for unresolved EN leftovers (customer-facing).
AR_CURATED: dict[str, str] = {
    "Required ViaNexis modules": "وحدات ViaNexis المطلوبة",
    "Integrations": "التكاملات",
    "Rollout and support": "النشر والدعم",
    "Yes": "نعم",
    "No": "لا",
    "Legal company name": "الاسم القانوني للشركة",
    "Country of registration": "بلد التسجيل",
    "Headquarters location": "موقع المقر الرئيسي",
    "Postal code": "الرمز البريدي",
    "VAT / tax number": "رقم ضريبة القيمة المضافة / الرقم الضريبي",
    "Subcontracted drivers": "سائقون متعاقدون من الباطن",
    "Estimated active users": "المستخدمون النشطون المقدرون",
    "Night / weekend dispatch operations": "عمليات الإرسال الليلية / في عطلة نهاية الأسبوع",
    "24/7 operations or support requirement": "متطلب تشغيل أو دعم على مدار الساعة طوال أيام الأسبوع",
    "Current TMS (transport management system)": "نظام إدارة النقل الحالي (TMS)",
    "Current ERP system": "نظام تخطيط موارد المؤسسات الحالي (ERP)",
    "Accounting / finance system": "نظام المحاسبة / المالية",
    "Data migration notes": "ملاحظات ترحيل البيانات",
    "Custom integration notes": "ملاحظات التكامل المخصص",
    "Email-based document import": "استيراد المستندات عبر البريد الإلكتروني",
    "Single sign-on (SSO) required": "تسجيل الدخول الموحد (SSO) مطلوب",
    "Preferred pilot start date": "تاريخ بدء التجربة المفضل",
    "Desired support / SLA level": "مستوى الدعم / اتفاقية مستوى الخدمة المطلوب",
    "Preferred support language": "لغة الدعم المفضلة",
    "Platform admin support": "دعم مسؤول المنصة",
    "eFTI readiness": "جاهزية eFTI",
    "Authority access": "وصول الجهات الرسمية",
    "External partner access": "وصول الشركاء الخارجيين",
    "API access": "وصول API",
}

# Extra curated for stubborn short / borrowed leftovers after MT.
EXTRA_CURATED: dict[str, dict[str, str]] = {
    "sl": {
        "Integrations": "Integracije",
        "Rollout and support": "Uvajanje in podpora",
    },
    "nl": {
        "Website": "Website-adres",
    },
    "fr": {
        "Website": "Site web",
    },
    "es": {
        "Website": "Sitio web",
    },
    "da": {
        "Postal code": "Postnummer",
        "Number of dispatchers": "Antal disponenter",
        "Owned trucks": "Egne lastbiler",
        "Subcontracted drivers": "Underleverandørchauffører",
        "Number of sites / depots": "Antal lokaliteter / depoter",
        "Estimated active users": "Anslåede aktive brugere",
        "Estimated monthly trips": "Anslåede månedlige ture",
        "Average active trips per day": "Gennemsnitlige aktive ture pr. dag",
        "Container transport": "Containertransport",
        "Driver app": "Chaufførapp",
        "Platform admin support": "Platformadmin-support",
        "AI / OCR assistance": "AI- / OCR-assistance",
        "Authority access": "Myndighedsadgang",
    },
    "sv": {
        "Website": "Webbplats",
        "Billing email": "Fakturerings-e-post",
        "Primary contact name": "Primär kontaktpersons namn",
        "Estimated active users": "Uppskattat antal aktiva användare",
        "Operating countries": "Verksamhetsländer",
        "Estimated monthly trips": "Uppskattat antal månatliga transporter",
        "Average active trips per day": "Genomsnittligt antal aktiva transporter per dag",
        "Multi-stop trips": "Transporter med flera stopp",
        "ADR / dangerous goods": "ADR / farligt gods",
    },
    "nb": {
        "Share of trips within the EU (%)": "Andel turer innenfor EU (%)",
        "ADR / dangerous goods": "ADR / farlig gods",
        "Refrigerated / temperature-controlled transport": "Kjøle- / temperaturkontrollert transport",
        "Container transport": "Containertransport",
        "Groupage / consolidated freight": "Stykkgods / konsolidert frakt",
        "Express / urgent transport": "Ekspress- / haste transport",
        "Platform admin support": "Plattformadmin-støtte",
        "Weekly vehicle walkaround": "Ukentlig kjøretøysinspeksjon",
        "Driver app": "Sjåførapp",
    },
    "et": {
        "Document management": "Dokumendihaldus",
        "Checklists": "Kontrollnimekirjad",
        "Evidence pack": "Tõendipakett",
        "Messaging": "Sõnumside",
        "Notifications": "Teavitused",
        "Truck map / routing": "Veoki kaart / marsruutimine",
        "ADR / dangerous goods module": "ADR / ohtlike kaupade moodul",
        "Customs module": "Tollimoodul",
        "Authority access": "Asutuste juurdepääs",
        "External partner access": "Välispartneri juurdepääs",
        "API access": "API juurdepääs",
    },
    "sq": {
        "Trips handled by subcontractors": "Udhëtime të trajtuara nga nënkontraktorët",
    },
    "uk": {
        "Company needs assessment": "Оцінка потреб компанії",
        "Continue company needs assessment": "Продовжити оцінку потреб компанії",
        "Save draft": "Зберегти чернетку",
        "Draft saved": "Чернетку збережено",
        "Continue": "Продовжити",
        "Back": "Назад",
        "Submitting…": "Надсилання…",
        "Assessment submitted": "Оцінку надіслано",
        "Thank you. Your answers are locked. Our team will review them and prepare a quote suggestion.":
            "Дякуємо. Ваші відповіді заблоковано. Наша команда перегляне їх і підготує пропозицію щодо вартості.",
        "Trip operations": "Операції з рейсами",
        "Preferred export formats": "Бажані формати експорту",
    },
}


def escape_ts(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace("\n", "\\n")
        .replace("\r", "")
    )


def emit_map(name: str, mapping: dict[str, str], indent: int = 4) -> list[str]:
    pad = " " * indent
    lines = [f"{pad}{name}: {{"]
    for k, v in mapping.items():
        lines.append(f"{pad}  {k}: '{escape_ts(v)}',")
    lines.append(f"{pad}}},")
    return lines


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save_cache(cache: dict) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(
        json.dumps(cache, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def translate_once(text: str, locale: str) -> str | None:
    from deep_translator import GoogleTranslator, MyMemoryTranslator

    PROTECT = [
        "ViaNexis", "TMS", "ERP", "API", "ADR", "SSO", "OCR", "AI",
        "CMR", "eFTI", "GPS", "SLA", "VAT", "EU",
    ]
    protected = text
    placeholders: dict[str, str] = {}
    for i, token in enumerate(PROTECT):
        if token in protected:
            ph = f"__P{i}__"
            placeholders[ph] = token
            protected = protected.replace(token, ph)

    def unprotect(out: str) -> str:
        cleaned = out
        for ph, token in placeholders.items():
            cleaned = cleaned.replace(ph, token)
            cleaned = cleaned.replace(ph.lower(), token).replace(ph.upper(), token)
        return cleaned.replace("Vianexis", "ViaNexis").replace("vianexis", "ViaNexis")

    gt = {"nb": "no"}.get(locale, locale)
    try:
        out = GoogleTranslator(source="en", target=gt).translate(protected)
        if out and out.strip() and out.strip() != protected:
            return unprotect(out.strip())
    except Exception:
        pass

    mm = {"nb": "no-NO", "sr": "sr-Latn"}.get(locale, locale)
    for target in (f"{mm}-{mm.upper()}" if "-" not in mm else mm, mm, gt):
        try:
            out = MyMemoryTranslator(source="en-GB", target=target).translate(protected)
            if out and out.strip() and out.strip() != protected:
                return unprotect(out.strip())
        except Exception:
            continue
    return None


def is_good(locale: str, source: str, value: str) -> bool:
    v = (value or "").strip()
    if not v:
        return False
    if v == source and locale != "en":
        return False
    return True


def sibling_hit(cache: dict, locale: str, source: str) -> str | None:
    for sib in SIBLINGS.get(locale, []):
        if sib in ("en",):
            continue
        val = cache.get(f"{sib}|{source}")
        if isinstance(val, str) and is_good(sib, source, val):
            return val
    return None


def resolve_text(locale: str, source: str, cache: dict) -> str:
    key = f"{locale}|{source}"
    cached = cache.get(key)
    if isinstance(cached, str) and is_good(locale, source, cached):
        return cached

    curated = EXTRA_CURATED.get(locale, {}).get(source)
    if curated and is_good(locale, source, curated):
        cache[key] = curated
        return curated

    if locale == "ar":
        ar = AR_CURATED.get(source)
        if ar and is_good("ar", source, ar):
            cache[key] = ar
            return ar

    sib = sibling_hit(cache, locale, source)
    if sib:
        # Prefer MT into target locale; sibling only as last resort seed
        pass

    for _ in range(3):
        out = translate_once(source, locale)
        if out and is_good(locale, source, out):
            cache[key] = out
            return out
        time.sleep(0.35)

    if sib and is_good(locale, source, sib):
        # Sibling language copy is better than English leftover for close languages.
        cache[key] = sib
        print(f"  sibling-seed {locale}: {source[:50]!r} <- sibling", flush=True)
        return sib

    if locale == "ar" and source in AR_CURATED:
        cache[key] = AR_CURATED[source]
        return AR_CURATED[source]

    print(f"  STILL unresolved {locale}: {source[:70]!r}", flush=True)
    cache[key] = source
    return source


def main() -> int:
    golden = load_json(GOLDEN_PATH)
    en = golden["en"]
    hu = golden["hu"]
    cache = load_json(CACHE_PATH) if CACHE_PATH.exists() else {}

    # Preserve good entries; drop EN-identical leftovers for draft locales.
    cleaned: dict[str, str] = {}
    dropped = 0
    for k, v in cache.items():
        if not isinstance(v, str) or "|" not in k:
            continue
        loc, src = k.split("|", 1)
        if loc in ("hu", "en"):
            cleaned[k] = v
            continue
        if is_good(loc, src, v):
            cleaned[k] = v
        else:
            dropped += 1
    print(f"cache kept {len(cleaned)} dropped_identical {dropped}", flush=True)

    # Seed curated Arabic + extras
    for src, ar in AR_CURATED.items():
        cleaned[f"ar|{src}"] = ar
    for loc, mapping in EXTRA_CURATED.items():
        for src, val in mapping.items():
            if is_good(loc, src, val):
                cleaned[f"{loc}|{src}"] = val

    packs = {"en": en, "hu": hu}
    still_bad: list[dict] = []

    for locale in DRAFT:
        print(f"locale {locale}...", flush=True)
        shell = {k: resolve_text(locale, en[k], cleaned) for k in SHELL_KEYS}
        fields = {
            k: resolve_text(locale, v, cleaned) for k, v in en["fields"].items()
        }
        helpers = {
            k: resolve_text(locale, v, cleaned) for k, v in en["helpers"].items()
        }
        modules = {
            k: resolve_text(locale, v, cleaned) for k, v in en["modules"].items()
        }
        packs[locale] = {
            **shell,
            "fields": fields,
            "helpers": helpers,
            "modules": modules,
        }
        for section, mapping in (
            ("", {k: shell[k] for k in SHELL_KEYS}),
            ("fields.", fields),
            ("helpers.", helpers),
            ("modules.", modules),
        ):
            for k, v in mapping.items():
                src = en[k] if section == "" else (
                    en["fields"][k] if section == "fields." else
                    en["helpers"][k] if section == "helpers." else
                    en["modules"][k]
                )
                if not is_good(locale, src, v):
                    still_bad.append({
                        "language": locale,
                        "key": f"{section}{k}",
                        "source": src,
                        "generated": v,
                        "failureType": "source-language fallback",
                    })
        save_cache(cleaned)
        time.sleep(0.05)

    lines = [
        "/**",
        " * Company Assessment labels — generated for all 35 public-site locales.",
        " * HU/EN golden (approved). Other locales: machine draft from EN.",
        " * Regenerate: npx tsx scripts/export-company-assessment-golden.mjs &&",
        " *   python3 scripts/generate-company-assessment-labels.py",
        " * India Driver-App-only languages are excluded.",
        " */",
        "import type { Locale } from './types';",
        "import type { CompanyAssessmentLabels } from './company-assessment-labels';",
        "",
        "export const companyAssessmentLabelsGenerated: Record<",
        "  Locale,",
        "  CompanyAssessmentLabels",
        "> = {",
    ]
    for locale in LOCALES:
        pack = packs[locale]
        lines.append(f"  {locale}: {{")
        for k in SHELL_KEYS:
            lines.append(f"    {k}: '{escape_ts(pack[k])}',")
        lines.extend(emit_map("fields", pack["fields"]))
        lines.extend(emit_map("helpers", pack["helpers"]))
        lines.extend(emit_map("modules", pack["modules"]))
        lines.append("  },")
    lines.append("};")
    lines.append("")
    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")

    AUDIT_PATH.write_text(
        json.dumps(still_bad, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    good = sum(
        1
        for k, v in cleaned.items()
        if "|" in k and is_good(k.split("|", 1)[0], k.split("|", 1)[1], v)
    )
    print(f"wrote {OUT}", flush=True)
    print(f"good_cache_entries {good}", flush=True)
    print(f"still_unresolved {len(still_bad)}", flush=True)
    return 0 if not still_bad else 1


if __name__ == "__main__":
    raise SystemExit(main())
