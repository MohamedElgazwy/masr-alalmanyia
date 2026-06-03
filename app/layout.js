import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Script from "next/script";
config.autoAddCss = false;

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: {
    default: "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
    template: "%s | شركة الدرع لمكافحة الآفات",
  },
  description:
    "شركة الدرع توفر خدمات إبادة حشرات ومكافحة آفات متكاملة في مصر تشمل إبادة الصراصير، مكافحة النمل الأبيض، بق الفراش، والفئران بأحدث الأمصال الألمانية الآمنة.",

  keywords: [
    "إبادة حشرات",
    "مكافحة آفات",
    "رش صراصير",
    "مكافحة النمل الأبيض",
    "إبادة بق الفراش",
    "شركة رش حشرات في مصر",
    "طرد الفئران والقوارض"
  ],

  metadataBase: new URL("https://eldaraapest.com"),

  openGraph: {
    title: "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
    description: "أفضل خدمات مكافحة الحشرات والقوارض في مصر بأمصال آمنة.",
    url: "https://eldaraapest.com",
    siteName: "شركة الدرع",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شركة الدرع لإبادة الحشرات",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "شركة الدرع لمكافحة الآفات",
    description: "خدمات إبادة حشرات وقوارض متكاملة وبضمان معتمد.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButtons serviceName="معاينة إبادة حشرات" />

        {/* تحويل الـ Schema إلى بيزنس محلي بدلاً من طبي */}
        <Script
          id="schema-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
              "url": "https://eldaraapest.com",
              "logo": "https://eldaraapest.com/images/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+201024193594",
                "contactType": "customer service",
                "areaServed": "EG",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}