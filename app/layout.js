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
    default: "نبض الحياة للرعاية المنزلية",
    template: "%s | نبض الحياة للرعاية المنزلية",
  },
  description:
    "شركة نبض الحياة تقدم خدمات طبية منزلية متكاملة في مصر تشمل التمريض المنزلي، رعاية كبار السن، التحاليل المنزلية، والأشعة المنزلية بأعلى جودة.",

  keywords: [
    "رعاية منزلية",
    "تمريض منزلي",
    "رعاية كبار السن",
    "تحاليل منزلية",
    "أشعة منزلية",
    "خدمات طبية منزلية في مصر",
  ],

  metadataBase: new URL("https://nabdalhayaat.com"),

  openGraph: {
    title: "نبض الحياة للرعاية المنزلية",
    description: "أفضل خدمات الرعاية الطبية المنزلية في مصر.",
    url: "https://nabdalhayaat.com",
    siteName: "نبض الحياة",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "نبض الحياة للرعاية المنزلية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "نبض الحياة للرعاية المنزلية",
    description: "خدمات طبية منزلية متكاملة في مصر.",
    images: ["/images/logo.jpg"],
  },
  // Favicon
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
        <FloatingContactButtons />

        <Script
          id="schema-medical"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "نبض الحياة للرعاية المنزلية",
              url: "https://nabdalhayaat.com",
              logo: "https://nabdalhayaat.com/images/logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+201024193594",
                contactType: "customer service",
                areaServed: "EG",
              },
            }),
          }}
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-17985320440"
              strategy="afterInteractive"
            />

            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17985320440');
  `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
