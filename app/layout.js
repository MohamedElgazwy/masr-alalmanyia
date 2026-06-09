import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlyingInsect from "./components/FlyingInsect";
import ScrollInsect from "./components/ScrollInsect";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Script from "next/script";
config.autoAddCss = false;


const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

// ================= METADATA FOR GLOBAL SEO =================
export const metadata = {
  title: {
    default: "مصر سيرفيس لإبادة الحشرات ومكافحة الآفات | الشركة الألمانية الأصلية",
    template: "%s | مصر سيرفيس لمكافحة الآفات",
  },
  description:
    "مصر سيرفيس (مصر الألمانية) توفر أفضل خدمات إبادة حشرات ومكافحة آفات متكاملة في مصر بضمان 5 سنوات. تشمل إبادة الصراصير، الفئران، بق الفراش، والنمل بأحدث الأمصال الألمانية الآمنة.",

  keywords: [
    "مصر سيرفيس",
    "الشركة الألمانية لمكافحة الحشرات",
    "رقم الشركة الألمانية لإبادة الحشرات",
    "إبادة حشرات في مصر",
    "مكافحة آفات وقوارض",
    "رش صراصير ونمل",
    "إبادة بق الفراش بالتبخير",
    "طرد الفئران",
    "مصر الألمانية الأصلية"
  ],

  // تم التعديل إلى الدومين الرسمي الفعلي الخاص بك
  metadataBase: new URL("https://misr-service.com"), 

  openGraph: {
    title: "مصر سيرفيس لإبادة الحشرات ومكافحة الآفات",
    description: "أفضل خدمات مكافحة الحشرات والقوارض في مصر بأمصال ألمانية آمنة 100% وبضمان 5 سنوات.",
    url: "https://misr-service.com",
    siteName: "مصر سيرفيس",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "مصر سيرفيس لإبادة الحشرات",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "مصر سيرفيس (الشركة الألمانية لمكافحة الآفات)",
    description: "خدمات إبادة حشرات وقوارض متكاملة وبضمان معتمد 5 سنوات.",
    images: ["/logo.png"],
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
        <FlyingInsect />
        <ScrollInsect />
        <Footer />
        
        {/* أزرار الاتصال العائمة مخصصة بهويتك الجديدة */}
        <FloatingContactButtons serviceName="" />

        {/* سكيما البيزنس المحلي (Local Business Schema) مهيأة بالكامل لمصر سيرفيس برابط الدومين الجديد */}
        <Script
          id="schema-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "مصر سيرفيس لإبادة الحشرات ومكافحة الآفات",
              "url": "https://misr-service.com",
              "logo": "https://misr-service.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+201035095011", 
                "contactType": "customer service",
                "areaServed": "EG",
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "22 شارع جامعة الدول العربية - المهندسين",
                "addressLocality": "Giza",
                "addressCountry": "EG"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}