import type { LegalContent } from "../legal-types";

export const legalTr: LegalContent = {
  versionBadge: "Dahili test sürümü — hukuki uzman incelemesi devam ediyor",
  privacy: {
    title: "Gizlilik bildirimi — dahili test sürümü",
    intro: "Bu bildirim, ViaNexis Sürücü uygulamasının ve ilgili platformun dahili test ve hazırlık aşaması sırasında geçerlidir. Hizmet, herkese açık bir Play Store indirmesi değildir; Google Play dahili test hazırlığı devam etmektedir. Nihai kapsamlı gizlilik politikası yasal incelemenin ardından yayınlanacaktır.",
    lastUpdated: "2026-07-05",
    controller: {
      title: "Veri denetleyicisi",
      body: "ViaNexis — vianexis.eu. Gizlilik iletişim adresi: info@vianexis.eu",
    },
    scope: {
      title: "Kapsam",
      body: "Bu bildirim, ViaNexis Sürücü mobil uygulamasını, ilgili sürücü ve yolculuk iş akışlarını ve web iletişim formunu kapsar. Şirket yöneticisi ve sevk görevlisi portalı ayrı sözleşme ve gizlilik şartlarına tabidir.",
    },
    dataCategories: {
      title: "İşlediğimiz veriler",
      items: [
        "Hesap ve iletişim verileri: ad, e-posta, telefon, şirket, görev, ülke.",
        "Sürücü profili verileri: tanımlayıcılar, rol, dil ayarları, izinler.",
        "Yolculuk verileri: yolculuk kimlikleri, durum, duraklar, zaman damgaları, meta veriler.",
        "Belgeler: CMR, teslimat notları, faturalar, fotoğraflar, taramalar, dijital imzalar.",
        "Mesajlar ve bildirimler: gezi bağlantılı iletişim ve uyarı olayları.",
        "Konum: yalnızca kullanıcının izniyle ve kullanım sırasında (kullanımdayken), eğer özellik etkinse.",
        "Cihaz ve oturum meta verileri: cihaz türü, işletim sistemi sürümü, uygulama sürümü, oturum tanımlayıcıları.",
        "Teşhis ve günlükler: teknik günlükler ve hata raporları — eğer etkinse.",
        "Palet ve ambalaj değişim verileri: tür, miktar, eksiklik, hasar, notlar.",
        "ADR / gümrük yardımcısı kullanım verileri: aramalar, görüntülemeler — resmi kararlar değil.",
        "Bildirim izni ve gelecekteki push jetonu: üretim push (FCM) ayrı bir arka uç bağımlılığıdır."
      ],
    },
    purposes: {
      title: "İşlemenin amaçları",
      items: [
        "Yolculuk iş akışlarını yönetmek ve performansı belgelemek.",
        "Belge yönetimi, imzalar ve kanıt paketi derlemesi.",
        "Gezi bağlantılı iletişim ve operasyonel bildirimler.",
        "Güvenlik, denetim ve izlenebilirlik.",
        "Denetlenebilir bir şekilde kontrollü destek erişimi.",
        "Hukuki ve ticari anlaşmazlıkların önlenmesi ve belgelenmesi.",
        "Uygulamanın çalışmasını ve sorun gidermeyi iyileştirme.",
        "Dahili test, pilot uygulama ve erişim değerlendirmesi."
      ],
    },
    sharing: {
      title: "Veri paylaşımı",
      items: [
        "Kiracı kapsamına göre işveren/nakliye şirketi ve yetkili yönetici/sevk görevlisi kullanıcıları.",
        "Şirket kurallarına göre sürücünün kendi yolculuğu ve belge verileri.",
        "Yalnızca denetlenmiş, sınırlı, gerekçelendirilmiş erişimle yetkili platform desteği.",
        "Yetkililer veya ortaklar yalnızca yasal dayanağa, sözleşmeye veya şirket kararına göre.",
        "AI/OCR/çeviri sağlayıcısı, yalnızca arka uç tarafından kontrol edilen gelecekteki entegrasyon aracılığıyla (eğer uygulanıyorsa) insan incelemesiyle.",
        "Kişisel verileri satmıyoruz. Pazarlama baskısı yok."
      ],
    },
    rights: {
      title: "Haklarınız",
      items: [
        "Verilerinize şirket yöneticisi veya destek kanalı aracılığıyla erişim.",
        "Yanlış verilerin düzeltilmesi.",
        "Yasal olarak mümkün olan ve şirket süreçlerinin izin verdiği durumlarda silme.",
        "Yasal olarak haklı olduğu durumlarda itiraz veya kısıtlama.",
        "Yürürlükteki yasaların öngördüğü durumlarda veri taşınabilirliği.",
        "Denetleyici bir makama şikayette bulunulması.",
        "İletişim: info@vianexis.eu"
      ],
    },
    notifications: {
      title: "Bildirimler",
      body: "Uygulama, pazarlama bildirimlerini değil operasyonel bildirimleri kullanır. Kilit ekranı metni varsayılan olarak gizlilik açısından güvenlidir. Üretim aktarımı (FCM/APNs) ve cihaz belirteci işleme, arka uç bağımlılıklarıdır; dahili test sırasında kısmi olabilir veya canlı olmayabilir. Bildirim izni kullanıcının tercihidir.",
    },
    location: {
      title: "Konum",
      body: "Konum, yalnızca kullanıcının izniyle ve kullanım sırasında (kullanım sırasında), özellik etkinse harita, kendi konumu ve yolculuk kanıtı amacıyla işlenir. Mevcut durumda arka planda izleme yok. Konum, rota uyumluluğunu veya yasal uyumluluğu garanti etmez.",
    },
    importantNotices: {
      title: "Önemli bildirimler",
      items: [
        "AI, OCR ve otomatik çeviri yardımcı araçlardır; insan tarafından incelenmesi gerekir.",
        "ADR bilgileri bir yardımcıdır — resmi kaynakların veya mevzuatın yerine geçmez.",
        "ViaNexis sertifikalı bir eFTI platformu değildir.",
        "Acil bir durum veya SOS hizmeti değil.",
        "Dijital belgeler otomatik olarak yasal delil gücü taşımaz.",
        "Hizmet, halka açık bir canlı prodüksiyon sistemi değil, dahili test/hazırlık aşamasındadır."
      ],
    },
    dataContact: {
      title: "Gizlilik iletişim bilgileri",
      body: "Gizlilik soruları: info@vianexis.eu. Son kontrolörün iletişim bilgileri yayınlanan bildirimde görünecektir.",
    },
    playUrl: "Kararlı Play Console gizlilik URL'si: https://vianexis.eu/en/privacy",
  },
  terms: {
    title: "Kullanım koşulları — dahili test sürümü",
    intro: "Bu şartlar, ViaNexis platformunun dahili testi ve pilot aşaması sırasında geçerlidir. Hizmet, herkese açık bir Play Store ürünü değildir; Google Play'in dahili test hazırlıkları devam etmektedir. Nihai koşullar yasal inceleme sonrasında yayınlanacaktır.",
    sections: [
      {
        title: "Hizmetin niteliği",
        body: "ViaNexis taşımacılık şirketleri için dijital taşıma kanıtı ve sürücü operasyonları platformu sağlar. eFTI-hazır temel — sertifikalı bir eFTI platformu değil. Her ülkede otorite kabulü vaat etmez.",
      },
      {
        title: "Dahili test",
        body: "Erişim pilot veya dahili test daveti yoluyla kontrol edilir. Otomatik kamu kaydı değil. Arka uç, anlık bildirimler ve bazı entegrasyonlar kademeli olarak bağlanır.",
      },
      {
        title: "Kullanıcı sorumluluğu",
        body: "Yolculuk, belge, ADR ve gümrük uyumluluğundan sürücü ve şirket sorumludur. Uygulama dokümantasyonu destekler; hukuki tavsiyenin, ADR uzmanların veya yetkililerin yerini almaz.",
      },
      {
        title: "Kullanılabilirlik",
        body: "Dahili test sırasında çalışma süresi ve özellikler değişiklik gösterebilir. Belirli SLA yalnızca sözleşme kapsamında geçerlidir.",
      },
      {
        title: "Sorumluluğun Sınırlandırılması",
        body: "ViaNexis, arka uç bağımlılığı devam ediyorsa otomatik yasal kanıt gücü, kusursuz OCR/AI/translation, acil durum hizmetleri veya üretim itme hazırlığı vaat etmez.",
      }
    ],
  },
  legalNotice: {
    title: "Yasal bildirim — dahili test sürümü",
    intro: "Bu sayfada ViaNexis platformunun dahili test ve hazırlık durumu açıklanmaktadır. Tam yasal belgelerin veya sözleşme şartlarının yerine geçmez.",
    sections: [
      {
        title: "Platformun doğası",
        body: "Tek bir sistemde dijital aktarım kanıtı, belge yönetimi, mesajlaşma, bildirimler ve şirket kontrolü. eFTI-hazır temel — sertifikalı bir eFTI platformu değil.",
      },
      {
        title: "Dahili test durumu",
        body: "Access is currently available through a controlled pilot program. No public Play Store download.",
      },
      {
        title: "Sorumluluğun Sınırlandırılması",
        body: "Yetki kabulü, otomatik yasal kanıt gücü, kusursuz AI/OCR/translation, acil durum hizmetleri veya tam üretim itme hazırlığı sözü vermiyoruz.",
      },
      {
        title: "Temas etmek",
        body: "Yasal ve gizlilikle ilgili sorular: info@vianexis.eu",
      }
    ],
    relatedDocs: "İlgili belgeler",
  },
  disclaimersPage: {
    title: "Sorumlu kullanım - sorumluluk reddi beyanları",
    intro: "Aşağıdaki metinler platform kullanımının önemli sınırlarını açıklamaktadır. Dahili test sürümü — yasal tavsiyenin yerini almaz.",
    items: [
      {
        id: "adr",
        title: "ADR — sorumlu kullanım",
        body: "ADR ve tünel verileri yardımcı bilgilerdir. Resmi kaynaklar, tablolar ve mevcut yerel kurallar her zaman doğrulanmalıdır. ViaNexis mevzuatın, ADR eğitiminin, şirketin Genel Müdürlük görevlisinin veya otorite kararlarının yerine geçmez.",
      },
      {
        id: "ai-ocr",
        title: "AI, OCR ve çeviri",
        body: "Yardımcı araçlar — insan incelemesi gereklidir. Orijinal belge ve mesaj birincil kalır. Yasal tavsiye ve onaylı çeviri değildir.",
      },
      {
        id: "bildirimler",
        title: "Bildirimler ve push",
        body: "Operasyonel bildirimler – pazarlama baskısı değil. Varsayılan olarak gizlilik açısından güvenli kilit ekranı. Üretim aktarımı (FCM/APNs) bir arka uç bağımlılığıdır; dahili test sırasında canlı olmayabilir.",
      },
      {
        id: "truck-map",
        title: "Kamyon haritası / topluluk verileri",
        body: "Operasyonel yönelim için harita ve rota — yasal kısıtlamaları, izinleri veya topluluk verilerinin doğruluğunu garanti etmez. Resmi navigasyonun yerine geçmez.",
      },
      {
        id: "palet",
        title: "Palet / ambalaj değişim kanıtı",
        body: "Kayıt, anlaşmazlık belgelerini destekler. Tamamlanan yolculuk paketindeki PDF kanıt bölümü her durumda tam olarak hazır değildir. Anlaşmazlıklara karar vermez.",
      },
      {
        id: "legal-validity",
        title: "Yasal geçerlilik / belgeler",
        body: "Dijital belgeler ve imzalar otomatik olarak yasal delil gücü taşımaz. Kabul ülkeye ve müşteriye göre değişir.",
      },
      {
        id: "efti",
        title: "eFTI ve yetki paylaşımı",
        body: "ViaNexis sertifikalı bir eFTI platformu değildir. Her ülkede otorite kabulü vaat etmez. eFTI-hazır temel, bir sertifika değil, teknik hazırlıktır.",
      }
    ],
  },
};
