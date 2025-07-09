'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CameraSystems() {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kamera Sistemleri
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Yüksek çözünürlüklü kamera sistemleri ile 7/24 izleme ve kayıt
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Kamera Sistemi Özellikleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              En son teknoloji ile donatılmış kamera sistemlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* IP Kameralar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">IP Kameralar</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• HD çözünürlük</li>
                <li>• Gece görüşü teknolojisi</li>
                <li>• Hareket algılama</li>
                
              </ul>
            </div>

            {/* Dome Kameralar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Dome Kameralar</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Geniş görüş açısı</li>
                <li>• PTZ kontrolü</li>
                <li>• İç/dış mekan uyumlu</li> 
              </ul>
            </div>

            {/* Bullet Kameralar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Bullet Kameralar</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Uzun mesafe görüş</li>
                <li>• Hava koşullarına dayanıklı</li>
                <li>• IR LED aydınlatma</li>
                <li>• Güçlü lens sistemi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Types Section */}
      <section id="types" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Kamera Türleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              İhtiyacınıza uygun kamera çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {/* Analog Kameralar */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-200 dark:border-blue-700">
              <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">Analog Kameralar</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• Uygun fiyat</li>
                <li>• Kolay kurulum</li>
                <li>• Güvenilir</li>
                <li>• Geniş uyumluluk</li>
              </ul>
            </div>

            {/* IP Kameralar */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">IP Kameralar</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• Yüksek çözünürlük</li>
                <li>• Uzaktan erişim</li>
                <li>• Akıllı özellikler</li>
                <li>• Ölçeklenebilir</li>
              </ul>
            </div>

            {/* PTZ Kameralar */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-purple-200 dark:border-purple-700">
              <div className="bg-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">PTZ Kameralar</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• Uzaktan kontrol</li>
                <li>• Geniş görüş açısı</li>
                <li>• Zoom özelliği</li>
                <li>• Otomatik takip</li>
              </ul>
            </div>

            {/* Termal Kameralar */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-red-200 dark:border-red-700">
              <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">Termal Kameralar</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• Isı algılama</li>
                <li>• Gece görüşü</li>
                <li>• Duman tespiti</li>
                <li>• Endüstriyel kullanım</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recording Systems Section */}
      <section id="recording" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Kayıt Sistemleri
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Güvenilir kayıt ve depolama çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* DVR Sistemleri */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">DVR Sistemleri</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Analog kamera uyumlu</li>
                <li>• 8-32-64 kanal desteği</li>
                <li>• HDD depolama</li>
                <li>• Uzaktan erişim</li>
              </ul>
            </div>

            {/* NVR Sistemleri */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">NVR Sistemleri</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• IP kamera uyumlu</li>
                <li>• Yüksek çözünürlük</li>
                <li>• Akıllı analitik</li>
              </ul>
            </div>

            {/* Hybrid Sistemler */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Hybrid Sistemler</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Analog + IP uyumlu</li>
                <li>• Esnek yapı</li>
                <li>• Geçiş kolaylığı</li>
                <li>• Maliyet etkin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Uygulama Alanları
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Kamera sistemlerinin kullanım alanları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Ev Güvenliği</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Konut güvenliği ve izleme</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">İş Yerleri</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Ofis ve mağaza güvenliği</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Depolar</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Depo ve antrepo izleme</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Endüstriyel</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Fabrika ve üretim tesisleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Profesyonel kamera sistemi çözümleri
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
                  <p className="text-gray-600 dark:text-gray-300">Mekanınızı inceleyerek en uygun kamera sistemi önerisi sunuyoruz.</p>
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
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Mobil İzleme</h3>
                  <p className="text-gray-600 dark:text-gray-300">Telefonunuzdan kamera sisteminizi izleyin ve kontrol edin.</p>
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
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Kamera Sistemi Kurulumu
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905322020625"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                </svg>
                WhatsApp ile İletişim
              </a>
              <a 
                href="tel:+905322020625" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
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