'use client';
import Image from "next/image";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
              İletişim
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Güvenlik sistemleri hakkında bilgi almak için bizimle iletişime geçin
            </p>
          </div>

          {/* Contact Info */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">Telefon</h3>
                <div className="space-y-2 text-center">
                  <a href="tel:+902126652050" className="block text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +90 212 665 20 50
                  </a>
                  <a href="tel:+905322020625" className="block text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +90 532 202 06 25
                  </a>
                  <a href="tel:+905322020625" className="block text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +90 532 202 06 25
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/20 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">WhatsApp</h3>
                <div className="text-center">
                  <a 
                    href="https://wa.me/905322020625" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm-1 15.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 8.5 11 8.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5Z"/>
                    </svg>
                    WhatsApp'ta Aç
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mt-2">+90 532 202 06 25</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
                <div className="bg-red-100 dark:bg-red-900/20 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4 text-center">Konum</h3>
                <div className="space-y-3 md:space-y-4 text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    Veliefendi, Semiha Şakir Cd. No:47, 34025 Zeytinburnu/İstanbul
                  </p>
                  <a 
                    href="https://maps.google.com/?q=AYBEKLER+HABERLEŞME+VE+GÜVENLİK+SİSTEMLERİ,+Veliefendi,+Semiha+Şakir+Cd.+No:47,+34025+Zeytinburnu/İstanbul" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200 cursor-pointer font-medium text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Google Maps'te Aç
                  </a>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">E-posta</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:aybekguvenlik@hotmail.com" 
                    className="block text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-base md:text-lg font-medium"
                  >
                    aybekguvenlik@hotmail.com
                  </a>
                  <a 
                    href="mailto:aybekler@hotmail.com" 
                    className="block text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-base md:text-lg font-medium"
                  >
                    aybekler@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-4 md:p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white text-center">
                  Konumumuz
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2 text-sm md:text-base">
                  AYBEKLER HABERLEŞME VE GÜVENLİK SİSTEMLERİ
                </p>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.20647626318907!2d28.903017588922655!3d40.99672725206482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb74c257d829%3A0xad133409a6ff4056!2zQVlCRUtMRVIgSEFCRVJMRcWeTUUgVkUgR8OcVkVOTMSwSyBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1751825314239!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aybek Güvenlik Konum"
                  className="absolute inset-0"
                ></iframe>
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