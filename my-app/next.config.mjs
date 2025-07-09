/** @type {import('next').NextConfig} */
const nextConfig = {
  // Domain konfigürasyonu
  images: {
    domains: ['aybekgüvenlik.com', 'www.aybekgüvenlik.com'],
  },
  // Production için optimizasyonlar
  compress: true,
  poweredByHeader: false,
  // SEO için
  trailingSlash: false,
  // ESLint hatalarını geçici olarak devre dışı bırak
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
