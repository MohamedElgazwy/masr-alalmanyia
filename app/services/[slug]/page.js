import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { servicesData } from "@/app/data/services";
import Reveal from "@/app/components/Reveal";
import CounterNumbers from "@/app/components/CounterNumbers";

/* ===========================
   Static Generation (SEO Boost)
=========================== */
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

/* ===========================
   Dynamic Metadata (VERY IMPORTANT)
=========================== */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      "رعاية منزلية",
      "خدمات طبية منزلية",
      "تمريض منزلي في مصر",
      "نبض الحياة للرعاية المنزلية",
    ],
    openGraph: {
      title: service.title,
      description: service.description,
      type: "article",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `خدمة ${service.title} من نبض الحياة`,
        },
      ],
    },
  };
}

/* ===========================
   Page Component
=========================== */
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return (
    <>
      <main className="min-h-screen">
        {/* HERO */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            <Reveal>
              <div>
                <h1 className="text-4xl font-bold text-blue-700 mb-4">
                  {service.title}
                </h1>

                <p className="text-xl text-gray-700 mb-6">
                  {service.tagline}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <CallButtons serviceName={service.serviceNameForWhatsApp} />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Image
                src={service.image}
                alt={`خدمة ${service.title} من نبض الحياة للرعاية المنزلية`}
                width={600}
                height={450}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </Reveal>

          </div>
        </section>

        {/* SCOPE */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
                نطاق الخدمة
              </h2>
            </Reveal>

            <ul className="grid md:grid-cols-2 gap-6">
              {service.scopes.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <li className="bg-slate-50 p-5 rounded-xl shadow-sm text-gray-700">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <WhyChooseUs />
        <CounterNumbers />

        {/* FINAL CTA */}
        <section className="py-20 bg-blue-50 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              احجز الآن بسهولة
            </h2>

            <p className="text-gray-700 mb-8">
              تواصل معنا الآن وسيقوم فريقنا الطبي بالرد عليك في أسرع وقت
            </p>

            <CallButtons serviceName={service.serviceNameForWhatsApp} />
          </Reveal>
        </section>
      </main>

      {/* Structured Data per Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.description,
            provider: {
              "@type": "MedicalBusiness",
              name: "نبض الحياة للرعاية المنزلية",
              url: "https://nabdalhayaat.com",
            },
          }),
        }}
      />
    </>
  );
}
