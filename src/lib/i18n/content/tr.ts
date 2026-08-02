import type { SiteContent } from "../types";
import { legalTr } from "./legal/tr";

export const contentTr: SiteContent = {
  meta: {
    title: "ViaNexis Sürücü ve şirket taşıma işlemleri",
    description: "Tek bir sistemde sürücü uygulaması, şirket kontrolü, belge yönetimi, mesajlaşma, bildirimler ve çok dilli yolculuk iş akışları. Dahili test hazırlığı devam ediyor.",
    ogLocale: "tr_TR",
    ogAlternateLocale: "en_US",
  },
  nav: {
    features: "Özellikler",
    driverApp: "Sürücü uygulaması",
    companyPortal: "Şirket portalı",
    documents: "Belgeler",
    authorityEfti: "Yetkili / eFTI",
    security: "Güvenlik",
    pilot: "Pilot erişimi",
    contact: "Temas etmek",
    requestAccess: "Erişim iste",
    menuOpen: "Menüyü aç",
  },
  footer: {
    tagline: "Taşımacılık şirketleri için dijital taşıma kanıtları ve sürücü operasyonları platformu. eFTI-hazır temel — sertifikalı bir eFTI platformu değil.",
    product: "Ürün",
    legal: "Yasal",
    legalNotice: "Yasal uyarı",
    privacy: "Gizlilik politikası",
    terms: "Kullanım şartları",
    disclaimers: "Sorumlu kullanım",
    dataContact: "Veri koruma iletişim kişisi",
    copyright: "Sertifikalı bir eFTI platformu değil. Otorite kabulü, otomatik yasal kanıt gücü, kusursuz OCR/AI/translation veya acil durum/SOS hizmetleri vaat etmez. Herkese açık Play Store indirmesi yok.",
  },
  hero: {
    title: "ViaNexis — dijital taşıma kanıtı ve sürücü işlemleri platformu",
    subtitle: "Tek bir sistemde sürücü uygulaması, şirket kontrolü, belge yönetimi, mesajlaşma, bildirimler ve çok dilli yolculuk iş akışları.",
    primaryCta: "Bize Ulaşın",
    secondaryCta: "Dahili test hazırlığı devam ediyor",
    stats: [
      {
        label: "Sürücü uygulaması",
        value: "Seyahat + çevrimdışı",
      },
      {
        label: "Belgeler",
        value: "CMR + denetim",
      },
      {
        label: "Mesajlaşma",
        value: "Çok dilli",
      },
      {
        label: "Durum",
        value: "Dahili test hazırlığı",
      }
    ],
  },
    platformStatus: {
    title: "Kontrollü pilot erişimi",
    items: [
      "ViaNexis şu anda seçili taşıyıcılar ve sürücülerle bir pilot program aracılığıyla sunulmaktadır.",
      "Bireysel görüşme ve onay sonrasında erişim etkinleştirilir.",
      "Herkese açık uygulama mağazası indirmesi yok.",
    ],
    disclaimer:
      "ViaNexis, sistemin her ülkede resmi olarak kabul edildiğini veya sertifikalandırıldığını iddia etmez.",
  },

  moduleLabels: {
    goal: "Amaç",
    appFoundation: "Uygulama tarafı temeli",
    backendDependency: "Arka uç/yönetici bağımlılığı",
    important: "Önemli",
  },
  platformModules: [
    {
      id: "driver-app",
      title: "Sürücü uygulaması",
      goal: "Sürücülerin yolculukla bağlantılı görevleri, belgeleri ve etkinlikleri mobil ortamda (çevrimiçi ve çevrimdışı) yönetmesine izin verin.",
      appFoundation: "Gezi listesi ve ayrıntılar, belge yükleme, imza yakalama, kontrol listeleri, olay günlüğü tutma, çevrimdışı kaydetme ve senkronizasyon, PIN korumalı oturum.",
      backendDependency: "Canlı API, kiracı kapsamı, gezi ve belge senkronizasyonu, şirket ayarları çözümü.",
    },
    {
      id: "company-admin",
      title: "Şirket / Yönetici kontrolü",
      goal: "Nakliye şirketlerinin seyahatleri, kullanıcıları, izinleri ve iş akışlarını tek bir portaldan yönetmesine izin verin.",
      appFoundation: "Sürücü tarafındaki veriler ve eylemler şirket kurallarını yansıtır.",
      backendDependency: "Web şirketi portalı, platform yöneticisi uygulaması, roller, gezi yönetimi, belge gereksinimleri, şirket değişim ayarları.",
    },
    {
      id: "cmr-documents",
      title: "Dijital CMR ve belgeler",
      goal: "Seyahat bağlantılı belgeler (CMR, irsaliye, fatura, araç ve sürücü belgeleri) yapılandırılmış bir şekilde yönetilir.",
      appFoundation: "Belge yükleme, tarama/fotoğraf, gezi ataması, gereksinime dayalı görevler, birincil belge konsepti.",
      backendDependency: "Belge depolama, meta veriler, imza kuralları, kapsam sınırlamalarıyla yetki paylaşımı.",
      disclaimer: "Dijital belgeler otomatik olarak yasal delil gücü taşımaz. Kabul ülkeye ve müşteriye göre değişir.",
    },
    {
      id: "completed-package",
      title: "Tamamlanan gezi paketi",
      goal: "Tamamlanan yolculuk kanıtlarını dışa aktarılabilir bir pakette özetleyin.",
      appFoundation: "Paket montajının temeli olarak gezi kapanışı, yerel veriler ve senkronize edilmiş olaylar.",
      backendDependency: "Seyahat paketi oluşturma, PDF dışa aktarma, denetim dışa aktarma tamamlandı. Bazı bölümler (örn. palet/ambalaj PDF) bağımlılık olarak kalır.",
      disclaimer: "Paket belgeleri destekler; şirketin hukuki değerlendirmesinin veya yetki işlemlerinin yerine geçmez.",
    },
    {
      id: "messaging-notifications",
      title: "Mesajlaşma ve bildirimler",
      goal: "Önemli sürücü olayları için yolculuk bağlantılı iletişim ve uyarılar.",
      appFoundation: "Mesaj listesi, gezi bağlantılı ileti dizileri, uygulama tarafı bildirim temeli. Şunlar için kullanılabilir: yeni mesaj, gezi değişikliği, belge görevi, senkronizasyon sorunu.",
      backendDependency: "Üretim aktarımı (FCM/APNs), cihaz belirteci kaydı, sunucu tarafı gönderimi — ayrı bağımlılık, henüz yayınlanmadı.",
      disclaimer: "Hedef ekranı PIN sonrasında açılır. Üretim itişi her olayın anında gerçekleşeceğini iddia etmez.",
    },
    {
      id: "pallet-packaging",
      title: "Palet ve ambalaj değişimi",
      goal: "Durak başına palet ve ambalaj değişimlerini miktar, eksiklik, hasar ve anlaşmazlıkla birlikte kaydedin.",
      appFoundation: "Ayrı palet ve paketleme modülleri. Şirket tarafından değiştirilebilir. Şirket öğeleri önceden ayarlayabilir; sürücü izin verilirse özel paketleme ekleyebilir. Çevrimdışı kaydetme ve senkronizasyon.",
      backendDependency: "Exchange ayarları API, kayıt senkronizasyonu, portal yönetici kullanıcı arayüzü, tamamlanmış paket PDF bölümü — ikincisi bir bağımlılıktır.",
      disclaimer: "PDF kanıt bölümü her durumda tam olarak hazır değildir. Kayıt, anlaşmazlık dokümantasyonunu destekler ancak anlaşmazlıkları çözmez.",
    },
    {
      id: "adr-border",
      title: "ADR / sınır desteği",
      goal: "Resmi kaynakların doğrulanmasının yanı sıra ADR ve sınır/gümrük bağlamı için hızlı yardımcı bilgiler.",
      appFoundation: "ADR bilgileri, BM numarası araması, tünel kodu yardımcısı, gezilerle bağlantılı sınır/gümrük meta verileri.",
      backendDependency: "ADR veritabanı güncellemeleri, ülkeye özgü kural meta verileri, sınır kontrol noktası verileri.",
      disclaimer: "ADR ve tünel verileri yardımcı bilgilerdir. Uygulama mevzuatın, eğitimin, şirketin Genel Müdürlük görevlisinin veya otorite kararlarının yerine geçmez.",
    },
    {
      id: "truck-map",
      title: "Kamyon haritası temeli",
      goal: "Haritada filo ve seyahate genel bakış — operasyonel yönelim.",
      appFoundation: "Harita tabanlı genel bakış, yolculuk ve araç bağlamı ekranı.",
      backendDependency: "Telematik sağlayıcı entegrasyonu, yönlendirme sağlayıcısı, canlı konum — kademeli entegrasyon.",
      disclaimer: "Harita, yasal kısıtlamalara veya izinlere uygunluğu garanti etmez.",
    },
    {
      id: "çok dilli",
      title: "Çok dilli çalışma",
      goal: "Çok dilli ekipler tek platformda.",
      appFoundation: "Sürücü uygulaması çok dilli kullanıcı arayüzü, orijinal mesaj saklama, yardım olarak çeviri.",
      backendDependency: "Portal ve genel site yerel ayarının genişletilmesi, çeviri inceleme iş akışı.",
      disclaimer: "Makine veya AI çevirisi yardımcıdır; insan incelemesi gereklidir. Orijinal belge birincil olarak kalır.",
    },
    {
      id: "audit-support",
      title: "Denetim ve destek erişimi",
      goal: "İzlenebilir günlük; sorun giderme için kontrollü destek erişimi.",
      appFoundation: "Gezi ve belge eylemleri için olay günlüğü; denetlenebilir destek oturumları.",
      backendDependency: "Denetim dışa aktarımı, destek erişim politikası, kurumsal izin matrisi.",
      disclaimer: "Denetim günlüğü otomatik yasal kanıt değildir.",
    }
  ],
  disclaimers: {
    adr: {
      title: "ADR — sorumlu kullanım",
      body: "ADR ve tünel verileri yardımcı bilgilerdir. Resmi kaynaklar, tablolar ve mevcut yerel kurallar her zaman doğrulanmalıdır. ViaNexis mevzuatın, ADR eğitiminin, şirketin tehlikeli madde görevlisinin veya otorite kararlarının yerine geçmez.",
    },
    aiOcr: {
      title: "AI, OCR ve çeviri",
      body: "AI özetleme, OCR ve otomatik çeviri yardımcı araçlardır. İnsan incelemesi gereklidir. Orijinal belge ve mesaj birincil kalır. Yasal tavsiye ve onaylı çeviri değildir.",
    },
    efti: {
      title: "eFTI ve yetki paylaşımı",
      body: "ViaNexis sertifikalı bir eFTI platformu değildir. Her ülkede otorite kabulü vaat etmez. eFTI-hazır temel, bir sertifika veya lisans değil, teknik hazırlık anlamına gelir.",
    },
  },
  home: {
    problem: {
      title: "Günlük lojistik zorlukları",
      subtitle: "Belgeler, imzalar ve olaylar dağıldığında izlenebilirlik ve kanıt zarar görür.",
      cards: [
        {
          title: "Dağınık belgeler",
          description: "E-posta, sohbet veya kağıt yoluyla gönderilen gezi yazılarının gerçek olaylara bağlanması zordur.",
        },
        {
          title: "Eksik imzalar",
          description: "Geç veya eksik imzalar kapatmayı geciktirir ve anlaşmazlık riskini artırır.",
        },
        {
          title: "Kanıtlanması zor olaylar",
          description: "Teslim alma, teslimat, palet değişimi, olay — yapılandırılmış günlükler olmadan, izlenmesi zor.",
        },
        {
          title: "Çok dilli ekipler",
          description: "Günlük mesajlarda yanlış anlamalar — orijinal metnin saklanması ve gözden geçirilmiş çeviri gereklidir.",
        }
      ],
    },
    modules: {
      title: "Platform modülleri",
      subtitle: "Hedef, uygulama tarafı temeli, arka uç/yönetici bağımlılığı — yasal olarak güvenli ifadelerle.",
    },
    pallet: {
      title: "Palet ve ambalaj değişimi",
      subtitle: "Şirket tarafından değiştirilebilen ayrı modüller; denetime yönelik çevrimdışı kaydetme.",
    },
    notifications: {
      title: "Mesajlaşma ve bildirimler",
      subtitle: "Uygulama tarafı temeli hazır — üretim itme, ayrı bir arka uç bağımlılığıdır.",
      cards: [
        {
          title: "Bildirim etkinliği türleri",
          description: "Yeni mesaj, gezi değişikliği, belge görevi, senkronizasyon sorunu.",
        },
        {
          title: "Yönlendirme ve API'ya dokunun",
          description: "Bildirimden hedef ekranı açın; PIN sonrasında derin bağlantı.",
        },
        {
          title: "Gizlilik açısından güvenli kilit ekranı",
          description: "Tam belge veya mesaj içeriği varsayılan olarak kilit ekranında gösterilmez.",
        }
      ],
      backendDepTitle: "Arka uç bağımlılığı",
      backendDepBody: "Üretim aktarımı (FCM/APNs), cihaz belirteci kaydı ve sunucu tarafı gönderimi henüz yayında değil; ayrı bir entegrasyon gerekiyor.",
    },
    disclaimersSection: {
      title: "Sorumlu kullanım — önemli bildirimler",
    },
    security: {
      title: "Koruma ve kontrol",
      subtitle: "Yapılandırılmış belgelerle şirket ve sürücü koruması.",
      cards: [
        {
          title: "Şirket koruması",
          description: "Gereksinime dayalı dokümantasyon, denetlenebilir olaylar, kontrollü erişim.",
        },
        {
          title: "Sürücü koruması",
          description: "Anlaşmazlıklardaki olayların belgelenmesi için yapılandırılmış süreç.",
        },
        {
          title: "Dokümantasyon omurgası",
          description: "Gezi bağlantılı makaleler ve etkinlikler tek bir sistemde.",
        },
        {
          title: "Denetlenebilir olaylar",
          description: "Kim, ne zaman yaptı? Kayıtlı ve aranabilir.",
        }
      ],
      notPromiseTitle: "Bir söz değil",
      notPromiseBody: "ViaNexis otomatik olarak yasal delil gücü vaat etmez. Yasal değerlendirme bağlama bağlıdır.",
    },
    contact: {
      title: "İletişim ve dahili testler",
      subtitle: "Kontrollü erişim; otomatik kayıt değil, herkese açık Play indirmesi yok.",
      body: "Erişim şu anda kontrollü bir pilot program aracılığıyla sağlanmaktadır. Etkinleştirme, bireysel bir incelemenin ardından gerçekleşir.",
      consentNote: "Sistem belgeleri, sürücü iş akışlarını, şirket verilerini ve izinleri yönetir; her erişim ayrı ayrı incelenir.",
      contactLink: "Bize ulaşın →",
    },
  },
  contactForm: {
    title: "Bize Ulaşın",
    subtitle: "ViaNexis platformuna ilgi — otomatik kayıt değil.",
    name: "İsim *",
    company: "Şirket *",
    email: "E-posta *",
    phone: "Telefon",
    message: "Mesaj *",
    interestType: "İlgi türü *",
    interestPlaceholder: "Seçme...",
    interestOptions: [
      {
        value: "driver-app",
        label: "Sürücü uygulaması",
      },
      {
        value: "company-admin",
        label: "Şirket / Yönetici platformu",
      },
      {
        value: "belgeler",
        label: "Doküman yönetimi",
      },
      {
        value: "adr-customs",
        label: "ADR / gümrük desteği",
      },
      {
        value: "diğer",
        label: "Diğer",
      }
    ],
    consent: "ViaNexis'nin sağlanan verileri yalnızca iletişim amacıyla işlediğini kabul ediyorum. *",
    submit: "Mesaj gönder",
    submitMailto: "E-posta gönder",
    intakeDisabled: "Çevrimiçi potansiyel müşteri gönderimi hazırlanıyor. E-posta iletişimini kullanın veya daha sonra tekrar deneyin.",
    successTitle: "Mesaj alındı",
    successBody: "İlginiz için teşekkür ederiz. Ekibimiz sizinle iletişime geçecektir. Erişim aktivasyonu otomatik değildir.",
    newSubmission: "Yeni mesaj",
    errors: {
      name: "Ad gerekli.",
      company: "Şirket gereklidir.",
      email: "E-posta gerekli.",
      emailInvalid: "Geçerli bir e-posta adresi girin.",
      message: "Mesaj gerekli.",
      interest: "Bir ilgi alanı türü seçin.",
      consent: "Rıza gereklidir.",
      submitFailed: "Mesaj gönderilemedi. Bunun yerine e-postayı deneyin.",
    },
  },
  applicationForms: {
    common: {
      privacy: "Gizlilik politikasını kabul ediyorum ve veri işlenmesine izin veriyorum. *",
      submit: "Başvuruyu gönder",
      submitting: "Submitting…",
      intakeDisabled: "Online başvurular hazırlanıyor. support@vianexis.eu ile iletişime geçin veya daha sonra tekrar deneyin.",
      successTitle: "Başvuru alındı",
      successBody: "Teşekkür ederim. Başvurunuz inceleniyor. ViaNexis yöneticisi onaylayana kadar erişim verilmez.",
      newSubmission: "Yeni uygulama",
      referenceLabel: "Uygulama referansı",
      submittedAtLabel: "Submitted at",
      statusLabel: "Status",
      statusUnderReview: "Under review",
      nextStep: "İnceleme sonrasında sizinle iletişime geçeceğiz. Destek için uygulama referansınızı saklayın.",
      captchaHint: "Göndermeden önce güvenlik kontrolünü tamamlayın.",
      supportContact: "Yardıma mı ihtiyacınız var? {email} ile iletişime geçin.",
      errors: {
        required: "Bu alan gereklidir.",
        email: "E-posta gerekli.",
        emailInvalid: "Geçerli bir e-posta adresi girin.",
        password: "Şifre en az 8 karakter olmalıdır.",
        privacy: "Gizlilik kabulü gereklidir.",
        submitFailed: "Başvuru gönderilemedi. Daha sonra tekrar deneyin.",
        duplicate: "Bu şirket veya e-posta için bir başvuru zaten devam ediyor.",
        duplicateWithRef: "Bu şirket veya e-posta için başvuru zaten devam ediyor (referans: {reference}).",
        captchaRequired: "Devam etmek için güvenlik kontrolünü tamamlayın.",
        captchaInvalid: "Güvenlik kontrolünün süresi doldu veya başarısız oldu. Tekrar deneyin.",
        spam: "Gönderim engellendi.",
        network: "Ağ hatası. Bağlantınızı kontrol edip tekrar deneyin.",
      },
    },
    company: { title: "Şirket başvurusu", subtitle: "ViaNexis şirket platformu erişimine başvurun.", companyName: "Firma Adı *", country: "Country *", vatNumber: "VAT / tax ID", contactName: "Kişi adı *", contactEmail: "İletişim e-postası *", contactPhone: "Phone *", fleetSize: "Fleet size", moduleInterests: "İlgilenilen modüller", moduleOptions: [{ value: "driver_app", label: "Driver app" },{ value: "dispatch_portal", label: "Gönderim portalı" },{ value: "documents", label: "Documents" },{ value: "fleet_workshop", label: "Filo / atölye" },{ value: "external_shipper_receiver", label: "Harici gönderici / alıcı" }], notes: "Notes" },
    driver: { title: "Sürücü uygulaması", subtitle: "Kendi kendine kayıt — oturum açmadan önce onay bekleniyor.", fullName: "Full name *", email: "Email *", password: "Password *", phone: "Phone", country: "Country", companyNameHint: "Şirket adı (isteğe bağlı)", companyCode: "Davet / şirket kodu (isteğe bağlı)", licenseNotes: "Lisans / ADR / GKI notları (isteğe bağlı)" },
    partner: { title: "İş ortağı ilgisi", subtitle: "Gönderici, alıcı, depo veya gümrük ortağı sorgulaması.", companyName: "Firma Adı *", role: "Role *", roleOptions: [{ value: "shipper", label: "Shipper" },{ value: "receiver", label: "Receiver" },{ value: "warehouse", label: "Warehouse" },{ value: "customs_broker", label: "Gümrük komisyoncusu" },{ value: "other_partner", label: "Diğer ortak" }], contactName: "Kişi adı *", email: "Email *", phone: "Phone", notes: "Notes" },
  },
  authorityEfti: {
    cards: [
      {
        title: "Yetki denetim paketi",
        description: "Kapsam sınırlı bir paylaşılan pakette gezi bağlantılı belgeler ve etkinlikler.",
      },
      {
        title: "Kapsam/zaman sınırlı erişim",
        description: "QR tabanlı sınırlı erişim — herkese açık değil.",
      },
      {
        title: "Denetim",
        description: "Erişim ve paylaşım etkinlikleri günlüğe kaydedildi.",
      },
      {
        title: "eFTI-hazır temel",
        description: "Gelecekteki entegrasyon için teknik temel - sertifikasyon değil.",
      }
    ],
  },
  legal: legalTr,
};
