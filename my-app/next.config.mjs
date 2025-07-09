/** @type {import('next').NextConfig} */
const nextConfig = {
  // Domain konfigürasyonu
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aybekgüvenlik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.aybekgüvenlik.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
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
  // Performance optimizasyonları
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@next/font'],
  },
  // Compiler optimizasyonları
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
