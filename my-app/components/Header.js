'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAlarmDropdownOpen, setIsAlarmDropdownOpen] = useState(false);
  const [isCameraDropdownOpen, setIsCameraDropdownOpen] = useState(false);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-200 focus:outline-none">
            <Image 
              src="/Aybek.png" 
              alt="Aybek Güvenlik Logo" 
              width={40} 
              height={40} 
              className="md:w-[50px] md:h-[50px] rounded-full"
              priority
            />
            <span className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">Aybek Güvenlik</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateTo('/')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
            >
              Ana Sayfa
            </button>
            
            {/* Alarm Systems Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAlarmDropdownOpen(true)}
              onMouseLeave={() => setIsAlarmDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 py-2">
                <button 
                  onClick={() => navigateTo('/alarm-systems')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
                >
                  Alarm Sistemleri
                </button>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isAlarmDropdownOpen ? 'rotate-180' : ''} text-gray-700 dark:text-gray-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {isAlarmDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-4">
                    {/* Ev Güvenliği */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/alarm-systems#ev-guvenligi')}
                        className="block p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Ev Güvenliği</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Konutlar için özel alarm sistemleri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {/* İş Güvenliği */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/alarm-systems#is-guvenligi')}
                        className="block p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">İş Güvenliği</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">İş yerleri için profesyonel sistemler</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Camera Systems Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCameraDropdownOpen(true)}
              onMouseLeave={() => setIsCameraDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 py-2">
                <button 
                  onClick={() => navigateTo('/camera-systems')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
                >
                  Kamera Sistemleri
                </button>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isCameraDropdownOpen ? 'rotate-180' : ''} text-gray-700 dark:text-gray-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {isCameraDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-4">
                    {/* Kamera Sistem Özellikleri */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/camera-systems#features')}
                        className="block p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Kamera Sistem Özellikleri</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Gelişmiş kamera özellikleri ve teknolojileri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {/* Kamera Türleri */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/camera-systems#types')}
                        className="block p-4 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">Kamera Türleri</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Farklı ihtiyaçlar için kamera çeşitleri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {/* Kayıt Sistemleri */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/camera-systems#recording')}
                        className="block p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">Kayıt Sistemleri</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">DVR/NVR ve bulut kayıt çözümleri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Vehicle Tracking Systems Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsVehicleDropdownOpen(true)}
              onMouseLeave={() => setIsVehicleDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 py-2">
                <button 
                  onClick={() => navigateTo('/vehicle-tracking')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
                >
                  Araç Takip ve Şarj Sistemleri
                </button>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isVehicleDropdownOpen ? 'rotate-180' : ''} text-gray-700 dark:text-gray-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {isVehicleDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-4">
                    {/* GPS Takip Cihazları */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/vehicle-tracking#gps-devices')}
                        className="block p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">GPS Takip Cihazları</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Gerçek zamanlı konum takibi</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {/* Filo Yönetim Yazılımı */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/vehicle-tracking#fleet-management')}
                        className="block p-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">Filo Yönetim Yazılımı</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Kapsamlı filo yönetim çözümleri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    
                    {/* Rota Optimizasyonu */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/vehicle-tracking#route-optimization')}
                        className="block p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-red-100 dark:bg-red-900 p-2 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">Rota Optimizasyonu</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Akıllı rota planlama ve optimizasyon</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    {/* Şarj Sistemleri */}
                    <div className="mb-4">
                      <button 
                        onClick={() => navigateTo('/vehicle-tracking#charging-systems')}
                        className="block p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 group w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Şarj Sistemleri</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Elektrikli araç şarj çözümleri</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => navigateTo('/about')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => navigateTo('/contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-lg cursor-pointer"
            >
              İletişim
            </button>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/905322020625"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 hover:scale-105 transform text-lg"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
              </svg>
              İletişim
            </a>
          </div>

          {/* Sağ kısım: Mobil menü butonu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobil menü butonu */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              <svg className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { navigateTo('/'); closeMobileMenu(); }}
                className="block w-full text-left px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md font-medium transition-colors duration-200 text-base md:text-lg cursor-pointer"
              >
                Ana Sayfa
              </button>
              
              {/* Mobile Alarm Systems Submenu */}
              <div className="px-3 py-2">
                <div className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Alarm Sistemleri</div>
                <div className="ml-4 space-y-2">
                  <button 
                    onClick={() => { navigateTo('/alarm-systems#ev-guvenligi'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    🏠 Ev Güvenliği
                  </button>
                  <button 
                    onClick={() => { navigateTo('/alarm-systems#is-guvenligi'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    🏢 İş Güvenliği
                  </button>
                </div>
              </div>
              
              {/* Mobile Camera Systems Submenu */}
              <div className="px-3 py-2">
                <div className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Kamera Sistemleri</div>
                <div className="ml-4 space-y-2">
                  <button 
                    onClick={() => { navigateTo('/camera-systems#features'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    ✅ Kamera Sistem Özellikleri
                  </button>
                  <button 
                    onClick={() => { navigateTo('/camera-systems#types'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    📹 Kamera Türleri
                  </button>
                  <button 
                    onClick={() => { navigateTo('/camera-systems#recording'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    💾 Kayıt Sistemleri
                  </button>
                </div>
              </div>

              {/* Mobile Vehicle Tracking Submenu */}
              <div className="px-3 py-2">
                <div className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Araç Takip ve Şarj Sistemleri</div>
                <div className="ml-4 space-y-2">
                  <button 
                    onClick={() => { navigateTo('/vehicle-tracking#gps-devices'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    📍 GPS Takip Cihazları
                  </button>
                  <button 
                    onClick={() => { navigateTo('/vehicle-tracking#fleet-management'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    🚛 Filo Yönetim Yazılımı
                  </button>
                  <button 
                    onClick={() => { navigateTo('/vehicle-tracking#route-optimization'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    🗺️ Rota Optimizasyonu
                  </button>
                  <button 
                    onClick={() => { navigateTo('/vehicle-tracking#charging-systems'); closeMobileMenu(); }}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200 text-sm cursor-pointer"
                  >
                    ⚡ Şarj Sistemleri
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => { navigateTo('/about'); closeMobileMenu(); }}
                className="block w-full text-left px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md font-medium transition-colors duration-200 text-base md:text-lg cursor-pointer"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => { navigateTo('/contact'); closeMobileMenu(); }}
                className="block w-full text-left px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md font-medium transition-colors duration-200 text-base md:text-lg cursor-pointer"
              >
                İletişim
              </button>
              <div className="pt-2">
                <a
                  href="https://wa.me/905322020625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white px-3 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-base md:text-lg"
                  onClick={closeMobileMenu}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                  </svg>
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 