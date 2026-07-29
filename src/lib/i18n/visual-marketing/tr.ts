import type { VisualMarketingContent } from "../visual-marketing";

export const visualMarketingTr: VisualMarketingContent = {
  skipToContent: "İçeriğe atla",
  brandVisuals: {
    routeLabel: "Aktif rota",
    routeId: "VN-2407-A18",
    statusLabel: "Live",
    networkOverline: "ViaNexis Ağı",
    networkTitle: "Bağlantıyı sağlayan yalnızca yol değildir.",
    networkSubtitle: "Duraklar, belgeler, imzalar, mesajlar ve kararlar, izinler ve aranabilir bir olay takibi ile zaman sırasına göre aynı yolculuk akışına aittir.",
    workflowEvents: [
      "Kalkış",
      "Toplamak",
      "Belge",
      "İmza",
      "Beklemek",
      "Teslimat",
      "Kapalı paket"
    ],
  },
  pillars: {
    title: "Üç sütun — tek kontrollü sistem",
    subtitle: "Sürücü dostu bir mobil akış, şirketin operasyonel kontrolü ve denetlenebilir bir karar takibi.",
    items: [
      {
        title: "Sürücü dostu uygulama",
        description: "Çevrimdışı özellikli bir mobil kullanıcı arayüzünde geziler, duraklar, belgeler, imzalar ve etkinlikler.",
      },
      {
        title: "Şirket kontrolü",
        description: "Şirket portalında sevk görevlisine genel bakış, izinler, uyarılar ve belge takibi.",
      },
      {
        title: "Denetlenebilir operasyonlar",
        description: "Abartılı güvenlik iddiaları olmadan aranabilir bir günlük ile olaylar, imzalar ve kararlar.",
      }
    ],
  },
  process: {
    title: "Temel gezi iş akışı",
    subtitle: "Oluşturma aşamasından kapalı bir pakete kadar — izne dayalı erişime sahip yapılandırılmış adımlar.",
    steps: [
      {
        title: "Gezi oluştur",
        description: "Teslim alma ve teslimat durakları, görevler ve belge gereksinimleri.",
      },
      {
        title: "Sürücü kabulü",
        description: "Ödev, kabul ve kontrollü oturum başlangıcı.",
      },
      {
        title: "Duraklar ve görevler",
        description: "Çoklu duraklar, görevler, olaylar ve hasar kayıtları.",
      },
      {
        title: "Belgeler ve imzalar",
        description: "Yükleyin, imzalayın, inceleyin; ardından kapalı bir yolculuk paketi.",
      }
    ],
  },
  homeModules: {
    title: "Ürün yüzeyleri",
    subtitle: "Her yüzey aynı gezi ve belge modelini paylaşır. Ayrıntılar ürün sayfalarında yayınlanmaktadır.",
    detailsLink: "Detaylar",
    items: [
      {
        title: "Sürücü uygulaması",
        description: "Çevrimdışı özellikli bir mobil akışta yolculuklar, duraklamalar, belgeler ve imzalar. Sürücüler her zaman bir sonraki gerekli eylemi görür.",
        href: "/driver-app",
        icon: "truck",
      },
      {
        title: "Şirket portalı",
        description: "Operasyonel genel bakış: etkin geziler, eksik belgeler, uyarılar ve izinler tek bir yerde.",
        href: "/company-portal",
        icon: "portal",
      },
      {
        title: "Belgeler ve imzalar",
        description: "Seyahat bağlantılı evraklar, imza durumları ve ihraç edilebilir kapalı seyahat paketi.",
        href: "/documents-signatures",
        icon: "doc",
      },
      {
        title: "Mesajlaşma ve uyarılar",
        description: "Gezi bağlantılı iletişim. Pilot programın bir parçası olarak bildirim özellikleri etkinleştirilebilir.",
        href: "/features",
        icon: "message",
      },
      {
        title: "Denetim ve izinler",
        description: "Rol tabanlı erişim, aranabilir olaylar ve kontrollü destek erişimi.",
        href: "/security-audit",
        icon: "audit",
      },
      {
        title: "Çevrimdışı işlem",
        description: "Sürücüler zayıf ağlarda çalışmaya devam edebilir; senkronizasyon tamamlandığında değişiklikler sonlandırılır.",
        href: "/driver-app",
        icon: "offline",
      }
    ],
  },
  documentsFlow: {
    title: "Belgeler ve imzalar",
    subtitle: "Seyahatle bağlantılı belgeler imzalanıp incelenebilir ve daha sonra ihraç edilebilir bir pakete kapatılabilir.",
    steps: [
      {
        title: "Yükle veya oluştur",
        description: "CMR, teslimat notu, fotoğraf veya dijital şablon.",
      },
      {
        title: "Bağlama",
        description: "Yolculuk, sürücü veya araç bağlamına atanmıştır.",
      },
      {
        title: "İmzalayın ve inceleyin",
        description: "Durum akışı: imza bekleniyor → imzalandı → inceleniyor.",
      },
      {
        title: "Kapalı gezi paketi",
        description: "Dışa aktarılabilir belgeler ve olaylar — denetlenebilir bir özet.",
      }
    ],
    statuses: [
      "Yüklendi",
      "Eksik",
      "İmza bekleniyor",
      "İmzalandı",
      "İnceleniyor"
    ],
    detailsLink: "Ayrıntılı belgeler",
  },
  offline: {
    title: "Çevrimdışı işlem ve senkronizasyon",
    subtitle: "Zayıf ağlarda çalışmalar devam ediyor; sonlandırma senkronizasyondan sonra gerçekleşiyor.",
    cards: [
      {
        title: "Yerel kaydetme",
        description: "Sürücü değişiklikleri cihazda güvenli bir şekilde saklanır.",
      },
      {
        title: "Görünür senkronizasyon",
        description: "Bekleyen değişiklikler, bağlantı yeniden sağlanana kadar görünür durumda kalır.",
      },
      {
        title: "Çatışma sinyali",
        description: "Çakışan kaynaklar günlüğe kaydedilir; hiçbir zaman sessizce üzerine yazılmaz.",
      }
    ],
    detailsLink: "Sürücü uygulaması",
  },
  responsibleUse: {
    title: "Sorumlu kullanım",
    subtitle: "Kısa, önemli sınırlamalar — ayrıntılar yasal sayfalarda yayınlanmaktadır.",
    items: [
      "ViaNexis sertifikalı bir eFTI platformu değildir ve otomatik yetki kabulü sözü vermez.",
      "OCR, yapay zeka ve çeviri yardımcıdır; insan tarafından incelenmesi gerekir.",
      "Sistem hukuki danışmanlık sağlamamaktadır.",
      "Bu bir acil durum veya SOS hizmeti değildir."
    ],
    detailsLink: "Sorumlu kullanım bildirimlerinin tamamı",
  },
  pilotCta: {
    title: "Kontrollü pilot erişimi",
    subtitle: "ViaNexis şu anda seçili taşıyıcılar ve sürücülerle bir pilot program aracılığıyla sunulmaktadır. Bireysel görüşme ve onay sonrasında erişim etkinleştirilir.",
  },
  preview: {
    tripId: "VN-2407-A18",
    phoneTitle: "Aktif yolculuk",
    phoneSubtitle: "Demo · VN-2407-A18",
    phoneRows: [
      {
        label: "Sonraki durak",
        value: "Teslim alma · Budapeşte (demo)",
        status: "Yolda",
      },
      {
        label: "Belge",
        value: "CMR – imza bekleniyor",
        status: "Aksiyon",
      },
      {
        label: "Senkronizasyon",
        value: "1 değişiklik beklemede",
        status: "Çevrimdışı",
      }
    ],
    phoneCaption: "Ürün demosu — anonimleştirilmiş örnek veriler.",
    browserTitle: "Operasyon kontrolü",
    browserSubtitle: "Demo filosu · sevk görevlisi görünümü",
    browserColumns: [
      "Seyahat",
      "Durmak",
      "Belge",
      "Durum"
    ],
    browserRows: [
      [
        "VN-2407-A18",
        "Budapeşte (demo)",
        "CMR eksik",
        "Uyarı"
      ],
      [
        "VN-2407-B03",
        "Gyor (demo)",
        "POD imzalandı",
        "Yolda"
      ],
      [
        "VN-2407-C11",
        "Viyana (demo)",
        "İnceleniyor",
        "Ön kapanış"
      ]
    ],
    browserCaption: "Şirket portalı demosu — canlı müşteri verileri değil.",
    driver: {
      navHome: "Ev",
      navTrips: "Geziler",
      navDocs: "Dokümanlar",
      navMore: "Daha",
      tripStatus: "Yolculuk devam ediyor",
      nextStopLabel: "Sonraki durak",
      nextStopValue: "Teslim alma · Budapeşte (demo)",
      documentLabel: "Belge",
      documentValue: "Dijital CMR",
      documentAction: "İmza gerekli",
      syncLabel: "Bağlantı",
      syncValue: "Çevrimdışı · 1 beklemede",
    },
    portal: {
      roleLabel: "Rol: Sevk görevlisi",
      alertLabel: "Uyarı",
      alertValue: "VN-2407-A18 · CMR imza bekliyor",
      auditLabel: "En son denetim etkinliği",
      auditValue: "Belge durumu değişti · sürücü uygulaması",
    },
  },
  statusLabels: {
    available: "Mevcut",
    pilot: "Pilot",
    development: "Geliştirme aşamasında",
  },
  productPage: {
    highlightsTitle: "Temel yetenekler",
    capabilitiesTitle: "Bu yüzeyin sağladığı şey",
    statusesTitle: "Durum etiketleri",
  },
  authority: {
    heroSubtitle: "Sertifikalı bir eFTI platformu değil, yolculuk kanıtlarına zaman ve kapsam sınırlı erişim.",
    foundationBadge: "Teknik hazırlık",
    notCertifiedBadge: "eFTI sertifikalı değil",
    foundationTitle: "hazırlık ne anlama gelir",
    foundationSubtitle: "Yapılandırılmış veriler ve kontrollü paylaşım; sertifika veya izin talebi olmadan.",
    extraDisclaimer: "ViaNexis her ülkede otorite kabulü sözü vermez. Yasal ve mevzuata uygunluk müşterinin sorumluluğundadır.",
  },
  moduleCapabilities: {
    "driver-app": [
      {
        title: "Gezi listesi ve duraklar",
        description: "Aktif geziler, sonraki eylemler ve durdurma görevleri.",
        status: "available",
      },
      {
        title: "Belgeler ve imza",
        description: "Yüklemeler, CMR görevleri ve imza yakalama.",
        status: "available",
      },
      {
        title: "Çevrimdışı çalışma",
        description: "Görünür bekleyen senkronizasyonla yerel kaydetme.",
        status: "available",
      },
      {
        title: "Mesajlaşma",
        description: "Sürücüler için yolculuk bağlantılı iletişim.",
        status: "pilot",
      }
    ],
    "company-admin": [
      {
        title: "Aktif gezi listesi",
        description: "Duraklar ve durumlarla operasyonel genel bakış.",
        status: "available",
      },
      {
        title: "Eksik belge uyarıları",
        description: "Eksik veya imzasız belgeler anında görünür.",
        status: "available",
      },
      {
        title: "İzinler",
        description: "Şirket verilerine rol tabanlı erişim.",
        status: "available",
      },
      {
        title: "Denetim etkinlikleri",
        description: "Aranabilir karar ve belge izi.",
        status: "pilot",
      }
    ],
    "cmr-documents": [
      {
        title: "Yükleme ve bağlama",
        description: "Yolculuk, sürücü veya araçla bağlantılı belgeler.",
        status: "available",
      },
      {
        title: "İmza iş akışı",
        description: "İmza bekleniyor → imzalandı → inceleniyor.",
        status: "pilot",
      },
      {
        title: "Kapalı gezi paketi",
        description: "Dışa aktarılabilir belgeler ve olaylar.",
        status: "pilot",
      },
      {
        title: "Şablon yönetimi",
        description: "Merkezi belge şablonları — kademeli olarak kullanıma sunma.",
        status: "development",
      }
    ],
    "audit-support": [
      {
        title: "Rol tabanlı erişim",
        description: "Kullanıcı ve şirket kapsamlı ayırma.",
        status: "available",
      },
      {
        title: "Denetim günlüğü",
        description: "Eylemler ve kararlar aranabilir durumda kalır.",
        status: "available",
      },
      {
        title: "Oturum ve cihaz",
        description: "Kontrollü oturum ve cihaz yönetimi.",
        status: "pilot",
      },
      {
        title: "Destek erişimi",
        description: "Zaman sınırlı, günlüğe kaydedilen destek girişi.",
        status: "pilot",
      }
    ],
  },
  ui: {
    language: "Dil",
    draftSuffix: "· taslak",
    breadcrumb: "Ekmek kırıntısı",
    primaryNav: "Öncelik",
    importantNotice: "Önemli bildirim",
  },
};
