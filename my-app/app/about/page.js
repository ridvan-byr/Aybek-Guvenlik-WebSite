'use client';
import Image from "next/image";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
              Hakkımızda
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Aybek Güvenlik olarak, 10 yılı aşkın deneyimimizle ev ve iş yerlerinizin güvenliğini sağlamak için çalışıyoruz.
            </p>
          </div>

          {/* Company Info */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-12 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6 md:mb-8">
                <Image 
                  src="/Aybek.png" 
                  alt="Aybek Güvenlik Logo" 
                  width={80} 
                  height={80} 
                  className="md:w-[100px] md:h-[100px] mx-auto mb-4 md:mb-6 rounded-full shadow-lg"
                  priority
                />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                  Aybek Güvenlik
                </h2>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Güvenliğiniz bizim önceliğimiz
                </p>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  Aybek Güvenlik olarak, 40 yılı aşkın deneyimimizle ev ve iş yerlerinizin güvenliğini sağlamak için çalışıyoruz. 
                  En son teknolojileri kullanarak, müşterilerimize en güvenilir ve kullanıcı dostu güvenlik çözümleri sunuyoruz.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  Misyonumuz, müşterilerimizin güvenlik ihtiyaçlarını en üst düzeyde karşılamak ve onlara huzurlu bir yaşam ortamı sağlamaktır. 
                  Bu doğrultuda, sürekli kendimizi geliştiriyor ve en güncel teknolojileri takip ediyoruz.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  Vizyonumuz, güvenlik sektöründe lider konuma gelmek ve müşterilerimizin güvenini kazanarak uzun vadeli iş ortaklıkları kurmaktır.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Değerlerimiz
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Çalışma prensiplerimiz ve değerlerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">Güvenilirlik</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  40 yıllık deneyimimizle müşterilerimize güvenilir hizmet sunuyoruz. 
                  Her projede kalite ve güvenlik standartlarını en üst seviyede tutuyoruz.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">Hızlı Servis</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  7/24 teknik destek ve hızlı servis hizmeti sunuyoruz. 
                  Acil durumlarda anında müdahale ediyoruz.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">Teknoloji</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  En son teknolojileri takip ediyor ve müşterilerimize en güncel çözümleri sunuyoruz. 
                  Sürekli yenilikçi yaklaşımlar geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-4xl mx-auto mt-16 md:mt-20">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Ekibimiz
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Uzman kadromuzla hizmetinizdeyiz
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    Teknik Uzmanlar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    Deneyimli teknik ekibimiz, alarm ve kamera sistemlerinin kurulumu, 
                    bakımı ve onarımı konularında uzmanlaşmıştır.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>• Sertifikalı teknisyenler</li>
                    <li>• Sürekli eğitim programları</li>
                    <li>• Güncel teknoloji bilgisi</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
                    Müşteri Hizmetleri
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                    Müşteri memnuniyetini ön planda tutan ekibimiz, 
                    her ihtiyacınızda yanınızda olmaya hazırdır.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>• 7/24 destek hizmeti</li>
                    <li>• Hızlı yanıt süreleri</li>
                    <li>• Profesyonel iletişim</li>
                  </ul>
                </div>
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