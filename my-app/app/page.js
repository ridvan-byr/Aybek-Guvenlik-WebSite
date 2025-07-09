'use client';
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DiscoveryButton from '../components/DiscoveryButton';
import DiscoveryModal from '../components/DiscoveryModal';
import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <header id="home" className="relative overflow-hidden text-white bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/background.jpg)'}}></div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/Aybek.png" 
              alt="Aybek Güvenlik Logo" 
              width={80} 
              height={80} 
              className="md:w-[100px] md:h-[100px] rounded-full shadow-2xl border-4 border-white/20 mb-6 md:mb-8"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Aybek Güvenlik
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed px-4">
            Alarm, kamera ve güvenlik sistemlerinde profesyonel çözümler. 
            <br className="hidden sm:block" />
            <span className="font-semibold">Eviniz ve iş yeriniz için en güvenilir teknolojilerle yanınızdayız.</span>
          </p>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Ürünlerimiz
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Güvenilir markaların en kaliteli ürünleri
            </p>
          </div>

          {/* Alarm Sistemleri Başlığı */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Alarm Sistemleri
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto">
            {/* Ajax */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
                <Image 
                  src="/images/ajax.jpg" 
                  alt="Ajax Logo" 
                  width={400} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-blue-600 dark:bg-blue-700 px-4 py-2 rounded-lg">Ajax</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Akıllı güvenlik sistemleri ve kablosuz alarm çözümleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• Kablosuz sensörler</p>
                  <p>• Akıllı hub sistemleri</p>
                  <p>• Mobil uygulama</p>
                </div>
              </div>
            </div>

            {/* Dahua */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
                <Image 
                  src="/images/dahua.jpg" 
                  alt="Dahua Logo" 
                  width={800} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-green-600 dark:bg-green-700 px-4 py-2 rounded-lg">Dahua</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Yüksek çözünürlüklü kamera sistemleri ve DVR/NVR çözümleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• IP kameralar</p>
                  <p>• Gece görüşü</p>
                  <p>• HD çözünürlük</p>
                </div>
              </div>
            </div>

            {/* DSC Neo */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
                <Image 
                  src="/images/dscneo.png" 
                  alt="DSC Neo Logo" 
                  width={400} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-purple-600 dark:bg-purple-700 px-4 py-2 rounded-lg">DSC Neo</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Profesyonel alarm kontrol panelleri ve güvenlik sistemleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• Kontrol panelleri</p>
                  <p>• Kablolu sistemler</p>
                  <p>• Endüstriyel çözümler</p>
                </div>
              </div>
            </div>

            {/* Teletek */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
                <Image 
                  src="/images/teletek.jpg" 
                  alt="Teletek Logo" 
                  width={400} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-orange-600 dark:bg-orange-700 px-4 py-2 rounded-lg">Teletek</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Türk malı güvenlik sistemleri ve alarm çözümleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• Yerli üretim</p>
                  <p>• Güvenilir sistemler</p>
                  <p>• Uygun fiyat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kamera Sistemleri Başlığı */}
          <div className="text-center mb-8 md:mb-12 mt-12 md:mt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Kamera Sistemleri
            </h3>
          </div>

          {/* Kamera Sistemleri Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
            {/* Hikvision */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
        <Image
                  src="/images/hikvision.jpg" 
                  alt="Hikvision Logo" 
                  width={800} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg scale-110"
          priority
        />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-red-600 dark:bg-red-700 px-4 py-2 rounded-lg">Hikvision</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Dünya lideri video güvenlik çözümleri ve akıllı kamera sistemleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• HD kameralar</p>
                  <p>• Akıllı analitik</p>
                  <p>• Bulut çözümleri</p>
                </div>
              </div>
            </div>

            {/* Dahua Kamera */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl p-6 md:p-10 h-auto md:h-[580px] flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 mb-6 md:mb-8 flex items-center justify-center h-48 md:h-60">
            <Image
                  src="/images/dahuakamera.jpg" 
                  alt="Dahua Kamera Logo" 
                  width={400} 
                  height={300} 
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-center bg-green-600 dark:bg-green-700 px-4 py-2 rounded-lg">Dahua</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4 leading-relaxed">
                    Yüksek çözünürlüklü kamera sistemleri ve DVR/NVR çözümleri
                  </p>
                </div>
                <div className="space-y-1 text-sm md:text-md text-gray-500 dark:text-gray-400 text-center">
                  <p>• IP kameralar</p>
                  <p>• Gece görüşü</p>
                  <p>• HD çözünürlük</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <main id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Güvenlik ihtiyaçlarınız için kapsamlı çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Alarm Systems */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-red-100 dark:bg-red-900/20 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">Alarm Sistemleri</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4 md:mb-6 text-sm md:text-base">
                Ev ve iş yeriniz için profesyonel alarm sistemleri
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-md">
                <li>• Hareket sensörleri</li>
                <li>• Kapı/pencere sensörleri</li>
                <li>• Siren ve uyarı sistemleri</li>
                <li>• Mobil uygulama kontrolü</li>
              </ul>
              <div className="mt-4 md:mt-6 text-center">
                <button 
                  onClick={() => navigateTo('/alarm-systems')}
                  className="inline-block bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm md:text-base"
                >
                  Detaylar
                </button>
              </div>
            </div>

            {/* Camera Systems */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">Kamera Sistemleri</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4 md:mb-6 text-sm md:text-base">
                Yüksek çözünürlüklü kamera sistemleri ile izleme
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-md">
                <li>• IP kameralar</li>
                <li>• AHD Kameralar</li>
                <li>• Uzaktan izleme</li>
                <li>• Kayıt sistemleri</li>
              </ul>
              <div className="mt-4 md:mt-6 text-center">
                <button 
                  onClick={() => navigateTo('/camera-systems')}
                  className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm md:text-base"
                >
                  Detaylar
                </button>
              </div>
            </div>

            {/* Vehicle Tracking Systems */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 mx-auto">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">Araç Takip Sistemleri</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4 md:mb-6 text-sm md:text-base">
                Filo yönetimi ve araç takibi için profesyonel çözümler
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-md">
                <li>• GPS takip cihazları</li>
                <li>• Filo yönetim yazılımı</li>
                <li>• Rota optimizasyonu</li>
                <li>• Yakıt takibi</li>
              </ul>
              <div className="mt-4 md:mt-6 text-center">
                <button 
                  onClick={() => navigateTo('/vehicle-tracking')}
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm md:text-base"
                >
                  Detaylar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
      <DiscoveryButton onClick={() => setModalOpen(true)} />
      <DiscoveryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
