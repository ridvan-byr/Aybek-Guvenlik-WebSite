'use client';
import Image from "next/image";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VehicleTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Araç Takip ve Şarj Sistemleri
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Filo yönetimi, araç takibi ve elektrikli araçlar için modern şarj çözümleri. Araçlarınızın anlık konumunu takip edin, maliyetlerinizi optimize edin ve elektrikli araçlarınızı güvenle şarj edin.
          </p>
        </div>
      </section>

      {/* GPS Devices Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div id="gps-devices" className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                GPS Takip Cihazları
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Gerçek zamanlı konum takibi ve detaylı raporlama
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Gerçek Zamanlı Takip</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Araçlarınızın anlık konumunu takip edin, rota geçmişini görüntüleyin
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  <li>• 7/24 konum takibi</li>
                  <li>• Hız ve yön bilgisi</li>
                  <li>• Rota geçmişi</li>
                  <li>• Anlık bildirimler</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Detaylı Raporlama</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Yakıt tüketimi, mesafe, sürüş süresi gibi detaylı raporlar
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Yakıt tüketim analizi</li>
                  <li>• Mesafe raporları</li>
                  <li>• Sürüş süresi takibi</li>
                  <li>• Performans metrikleri</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Güvenlik Özellikleri</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Araç hırsızlığına karşı koruma ve acil durum bildirimleri
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Hırsızlık alarmı</li>
                  <li>• Acil durum butonu</li>
                  <li>• Geofencing</li>
                  <li>• Anormal hareket uyarısı</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fleet Management Section */}
          <div id="fleet-management" className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Filo Yönetim Yazılımı
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Kapsamlı filo yönetim çözümleri ile operasyonlarınızı optimize edin
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Merkezi Yönetim Paneli
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Tüm araçlarınızı tek bir panelden yönetin. Gerçek zamanlı izleme, 
                    raporlama ve analiz araçları ile filonuzu daha verimli hale getirin.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Merkezi kontrol paneli</li>
                    <li>• Çoklu kullanıcı desteği</li>
                    <li>• Rol tabanlı erişim</li>
                    <li>• Mobil uygulama</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Gelişmiş Analitik
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Veri analizi ile filo performansınızı artırın. 
                    Maliyet optimizasyonu ve verimlilik artışı için detaylı raporlar.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Performans analizi</li>
                    <li>• Maliyet hesaplamaları</li>
                    <li>• Trend raporları</li>
                    <li>• Karşılaştırmalı analizler</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Route Optimization Section */}
          <div id="route-optimization" className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Rota Optimizasyonu
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Akıllı rota planlama ile yakıt tasarrufu ve zaman kazanın
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Akıllı Rota Planlama</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Trafik durumu, mesafe ve yakıt tüketimini göz önünde bulundurarak optimal rotalar
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Trafik analizi</li>
                  <li>• Mesafe optimizasyonu</li>
                  <li>• Yakıt tasarrufu</li>
                  <li>• Zaman kazanımı</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Dinamik Rota Güncelleme</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Gerçek zamanlı trafik verilerine göre rotaları otomatik güncelleme
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                  <li>• Gerçek zamanlı güncelleme</li>
                  <li>• Alternatif rota önerileri</li>
                  <li>• Acil durum rotaları</li>
                  <li>• Hava durumu entegrasyonu</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Şarj Sistemleri Section */}
          <section id="charging-systems" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Şarj Sistemleri
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Elektrikli araçlarınız için hızlı, güvenli ve akıllı şarj istasyonu çözümleri
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Örnek Şarj İstasyonu Kartı 1 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                    <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Hızlı Şarj İstasyonu</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                      Elektrikli araçlarınız için yüksek hızlı şarj imkanı. Kısa sürede tam dolum.
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• 22kW ve üzeri güç seçenekleri</li>
                      <li>• Akıllı enerji yönetimi</li>
                      <li>• Güvenli bağlantı</li>
                      <li>• Mobil uygulama ile kontrol</li>
                    </ul>
                  </div>
                  {/* Örnek Şarj İstasyonu Kartı 2 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                    <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Duvar Tipi Şarj Ünitesi</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                      Ev ve iş yerleri için kompakt, duvara monte edilebilen şarj çözümleri.
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• 7kW-11kW güç seçenekleri</li>
                      <li>• Kolay kurulum</li>
                      <li>• Akıllı zamanlama</li>
                      <li>• Uzaktan izleme</li>
                    </ul>
                  </div>
                  {/* Örnek Şarj İstasyonu Kartı 3 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 flex flex-col items-center">
                    <div className="bg-yellow-100 dark:bg-yellow-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Kamuya Açık Şarj Noktası</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                      Alışveriş merkezleri, otoparklar ve kamu alanları için güvenli şarj istasyonları.
                    </p>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                      <li>• RFID kart ile erişim</li>
                      <li>• Çoklu araç desteği</li>
                      <li>• 7/24 hizmet</li>
                      <li>• Enerji tüketim raporları</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Araç Takip Sistemleri Hakkında Bilgi Alın</h3>
              <p className="text-xl mb-6 opacity-90">
                Filo yönetimi ve araç takibi çözümlerimiz hakkında detaylı bilgi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/905322020625" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                  </svg>
                  WhatsApp'tan Bilgi Al
                </a>
                <a 
                  href="tel:+905322020625" 
                  className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
} 