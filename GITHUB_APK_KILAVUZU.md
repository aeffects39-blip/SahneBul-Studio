# GitHub ile APK oluşturma

1. GitHub.com'da giriş yapıp **New repository** ile yeni bir repo oluştur. Örn. `SahneBul-Studio`; başlangıçta README veya .gitignore eklememek en kolayıdır.
2. ZIP'i bilgisayarında çıkar. İçindeki `SahneBul_Mobil_Baslangic` klasörünün **içeriğini** repoya yükle. `.github/workflows/build-apk.yml` dosyasının da yüklendiğini kontrol et.
3. Repo sayfasında **Actions** sekmesini aç.
4. Solda **Build SahneBul Android APK** iş akışını seç. **Run workflow** düğmesi görünüyorsa bas; yoksa önce dosyaları `main` veya `master` dalına yükle.
5. Çalışan işlemi aç. Yeşil tik olduğunda sayfanın altındaki **Artifacts** bölümünden `SahneBul-Studio-Android-APK` dosyasını indir.
6. ZIP'i çıkar, `app-debug.apk` dosyasını Android telefona gönder ve aç. Android, tarayıcı/dosya yöneticisi için "bilinmeyen uygulama yükleme" izni isteyebilir; yalnızca kendi oluşturduğun APK için izin ver.

Notlar:
- Bu workflow test amaçlı **debug APK** üretir. Mağaza dağıtımı için değildir.
- iPhone'da APK çalışmaz; iOS için ayrı bir derleme ve dağıtım yöntemi gerekir.
- İlk derlemede paket/Gradle uyumsuzluğu olursa GitHub Actions logundaki hata düzeltilmelidir.
- Proje iskeletindeki indirme ve sahne tarama işlevleri henüz tamamlanmış değildir.
