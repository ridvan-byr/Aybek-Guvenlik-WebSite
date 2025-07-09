import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Font loading optimizasyonu
  preload: true
});

export const metadata = {
  title: "Aybek Güvenlik - Alarm ve Kamera Sistemleri",
  description: "Profesyonel alarm, kamera ve güvenlik sistemleri. Ev ve iş yeriniz için en güvenilir teknolojilerle yanınızdayız.",
  keywords: "güvenlik sistemleri, alarm sistemleri, kamera sistemleri, ev güvenliği, iş yeri güvenliği, araç takip sistemleri, şarj sistemleri",
  authors: [{ name: "Aybek Güvenlik" }],
  creator: "Aybek Güvenlik",
  publisher: "Aybek Güvenlik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aybekgüvenlik.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Aybek Güvenlik - Alarm ve Kamera Sistemleri",
    description: "Profesyonel alarm, kamera ve güvenlik sistemleri. Ev ve iş yeriniz için en güvenilir teknolojilerle yanınızdayız.",
    url: 'https://aybekgüvenlik.com',
    siteName: 'Aybek Güvenlik',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aybek Güvenlik - Alarm ve Kamera Sistemleri",
    description: "Profesyonel alarm, kamera ve güvenlik sistemleri. Ev ve iş yeriniz için en güvenilir teknolojilerle yanınızdayız.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'krPvtUAv6kOWL-frVHXvyelrx7f17zVjJniKp_9BdwQ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
