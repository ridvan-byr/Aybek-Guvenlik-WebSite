'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AlarmSystems() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Alarm Sistemleri
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ev ve iş yeriniz için profesyonel alarm sistemleri ile 7/24 güvenlik koruması
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Alarm Sistem Özellikleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              En son teknoloji ile donatılmış alarm sistemlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kablolu Sistemler */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Kablolu Sistemler</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Güvenilir kablolu bağlantı</li>
                <li>• Kesintisiz sinyal iletimi</li>
                <li>• Uzun ömürlü performans</li>
                <li>• Kolay bakım</li>
                <li>• Mobil uygulama desteği</li>
              </ul>
            </div>

            {/* Kablosuz Sistemler */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Kablosuz Sistemler</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Kolay kurulum</li>
                <li>• Esnek yerleşim</li>
                <li>• Mobil uygulama desteği</li>
                <li>• Akıllı sensör teknolojisi</li>
              </ul>
            </div>

            {/* Akıllı Sensörler */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Akıllı Sensörler</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Hareket algılama</li>
                <li>• Su basma sensörü</li>
                <li>• Kapı/pencere sensörü</li>
                <li>• Duman dedektörü</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ev Güvenliği Section */}
      <section id="ev-guvenligi" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              🏠 Ev Güvenliği
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Konutlarınız için özel tasarlanmış alarm sistemleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Ev Alarm Sistemi */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-200 dark:border-blue-700">
              <div className="bg-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Ev Alarm Sistemi</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Kapı/pencere sensörleri</li>
                <li>• Hareket algılama</li>
                <li>• Cam kırılma dedektörü</li>
                <li>• Siren ve uyarı sistemi</li>
                <li>• Mobil uygulama kontrolü</li>
              </ul>
            </div>

            {/* Akıllı Ev Güvenliği */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="bg-green-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Akıllı Ev Güvenliği</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Otomatik senaryolar</li>
                <li>• Enerji tasarrufu</li>
                <li>• Uzaktan izleme</li>
              </ul>
            </div>

            {/* Yangın Güvenliği */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-red-200 dark:border-red-700">
              <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Yangın Güvenliği</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Duman dedektörleri</li>
                <li>• Isı sensörleri</li>
                <li>• CO dedektörleri</li>
                <li>• Otomatik söndürme</li>
                <li>• Acil durum bildirimi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* İş Güvenliği Section */}
      <section id="is-guvenligi" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              🏢 İş Güvenliği
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              İş yerleriniz için profesyonel güvenlik çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Ofis Güvenliği */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-200 dark:border-purple-700">
              <div className="bg-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Ofis Güvenliği</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Giriş kontrol sistemleri</li>
                <li>• Kartlı geçiş</li>
                <li>• Parmak izi tanıma</li>
                <li>• Ziyaretçi yönetimi</li>
                <li>• Personel takibi</li>
              </ul>
            </div>

            {/* Depo Güvenliği */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-200 dark:border-orange-700">
              <div className="bg-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Depo Güvenliği</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Çevre güvenliği</li>
                <li>• Ağırlık sensörleri</li>
                <li>• RFID takip sistemi</li>
                <li>• Sıcaklık kontrolü</li>
                <li>• Nem sensörleri</li>
              </ul>
            </div>

            {/* Fabrika Güvenliği */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-indigo-200 dark:border-indigo-700">
              <div className="bg-indigo-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Fabrika Güvenliği</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Endüstriyel sensörler</li>
                <li>• Makine güvenliği</li>
                <li>• Çevre izleme</li>
                <li>• Acil durum sistemleri</li>
                <li>• Veri analizi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Profesyonel alarm sistemi çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Ücretsiz Keşif</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mekanınızı inceleyerek en uygun alarm sistemi önerisi sunuyoruz.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Profesyonel Kurulum</h3>
                  <p className="text-gray-600 dark:text-gray-300">Uzman ekibimiz tarafından hızlı ve güvenli kurulum.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Mobil Kontrol</h3>
                  <p className="text-gray-600 dark:text-gray-300">Telefonunuzdan alarm sisteminizi kontrol edin ve izleyin.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">7/24 Teknik Destek</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kesintisiz teknik destek ve bakım hizmeti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Alarm Sistemi Kurulumu
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905322020625"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                </svg>
                WhatsApp ile İletişim
              </a>
              <a 
                href="tel:+905322020625" 
                className="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
} 