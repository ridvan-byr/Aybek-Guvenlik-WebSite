'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-black text-gray-800 dark:text-white py-8 md:py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Image 
            src="/Aybek.png" 
            alt="Aybek Güvenlik Logo" 
            width={50} 
            height={50} 
            className="md:w-[60px] md:h-[60px] mx-auto mb-4 rounded-full shadow-lg"
            priority
          />
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 dark:text-white">Aybek Güvenlik</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Güvenliğiniz bizim önceliğimiz</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <div className="flex flex-col items-center">
              <a href="tel:+902126652050" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
                +90 212 665 20 50
              </a>
              <a href="tel:+905323629160" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
                +90 532 362 91 60
              </a>
              <a href="tel:+905322020625" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
                +90 532 202 06 25
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <div className="flex flex-col items-center">
              <a href="mailto:aybekguvenlik@hotmail.com" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
                aybekguvenlik@hotmail.com
              </a>
              <a href="mailto:aybekler@hotmail.com" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm md:text-base">
                aybekler@hotmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-600 pt-4 md:pt-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Aybek Güvenlik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 