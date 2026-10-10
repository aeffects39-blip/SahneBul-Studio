# SahneBul Studio — Mobil + Web başlangıç projesi

Bu, `Ortak.py` içindeki Windows/Tkinter uygulamasının Android + iOS + web dönüşümü için ilk iskeletidir.
Henüz mevcut Python özelliklerinin tamamının taşınmış sürümü değildir.

## Mimari
- `app/`: Expo + React Native + Expo Router; Android, iOS ve web için ortak arayüz.
- `backend/`: FastAPI servis başlangıcı. Video indirme ve yüzle sahne bulma işlemleri buraya güvenli biçimde taşınacak.
- UI şimdilik demo/başlangıç durumundadır; butonlar backend uçları hazır olmadığında kullanıcıya durum mesajı gösterir.

## Gerekenler
- Node.js LTS
- Expo Go (telefon üzerinde önizleme için)
- Python 3.11+

## Çalıştırma — arayüz
```bash
cd app
npm install
npx expo start
```
Terminalde QR kodu okutabilir veya `w` ile web sürümünü açabilirsin.

## Çalıştırma — API
```bash
cd backend
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
API varsayılan olarak `http://127.0.0.1:8000` adresinde çalışır.
Telefonla gerçek cihaz testi yaparken `app/src/config.ts` içindeki API adresini bilgisayarının yerel ağ IP'siyle değiştir.

## Mevcut programdan taşınacak ana modüller
1. Video indirme (yt-dlp/FFmpeg): mobil/web istemciden görev başlatma, sunucu/cihaz işleme stratejisi ve indirme durumları.
2. Yüzle sahne bulma (YuNet + SFace): referans fotoğrafı, video dosyası, tarama ayarları, sahne sonuçları.
3. Sonuç galerisi, video önizleme ve dışa aktarma.
4. İlk sürüm herkese açık ve ücretsiz olacak: giriş/üyelik zorunluluğu ve premium kilidi olmayacak. Gerekirse hesap sistemi daha sonra ayrıca eklenebilir.

## Önemli
- `Ortak.py` Windows'a özgü `Tkinter`, `.exe` araçları ve Windows dosya yolları kullanıyor; doğrudan Android/iOS üzerinde çalışmaz.
- Video indirme desteği kaynak platformların kurallarına, telif haklarına ve teknik kısıtlarına bağlıdır.
- Şimdilik premium/abonelik sistemi yok; uygulama özellikleri kullanıcıları premium durumuna göre engellemeyecek.

## Android APK oluşturma (ücretsiz test)
1. Node.js LTS kur: https://nodejs.org/
2. `app` klasörünü Komut İstemi'nde aç.
3. `npm install` komutunu çalıştır.
4. `npx eas-cli@latest login` ile ücretsiz Expo hesabına giriş yap (hesabın yoksa https://expo.dev/signup adresinden oluştur).
5. `npx eas-cli@latest build:configure` komutunu çalıştırırsan EAS yapılandırmasını sorabilir; projede `eas.json` zaten var, varsa mevcut ayarları koru.
6. `npx eas-cli@latest build --platform android --profile preview` komutunu çalıştır.
7. İlk seferde Android imzalama anahtarı oluşturma sorularını kabul et.
8. Derleme bulutta tamamlanınca Expo bir indirme bağlantısı verecek. Bağlantıyı Android telefonda açıp APK'yı indir ve kur. Android, tarayıcıya/dosya yöneticisine uygulama yükleme izni isteyebilir.

Not: EAS ücretsiz planındaki kullanılabilir derleme kotası ve bekleme süreleri değişebilir. APK oluşturulması, uygulamadaki henüz geliştirilmemiş özellikleri otomatik olarak tamamlamaz.
