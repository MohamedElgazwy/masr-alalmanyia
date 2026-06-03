import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { servicesData } from "@/app/data/services";
import Reveal from "@/app/components/Reveal";
import CounterNumbers from "@/app/components/CounterNumbers";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      "إبادة حشرات بضمان",
      "أفضل شركة رش حشرات",
      "أسعار شركات مكافحة الحشرات",
      "شركة الدرع لإبادة الحشرات",
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
          alt: `خدمة ${service.title} من شركة الدرع`,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return (
    <>
      <main className="min-h-screen bg-slate-50/30">
        {/* HERO */}
        <section className="bg-emerald-50/50 py-20 border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            <Reveal>
              <div>
                <h1 className="text-4xl font-bold text-emerald-800 mb-4">
                  {service.title}
                </h1>

                <p className="text-xl text-amber-600 font-semibold mb-6">
                  {service.tagline}
                </p>

                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <CallButtons serviceName={service.serviceNameForWhatsApp} />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Image
                src={service.image}
                alt={`خدمة ${service.title} من شركة الدرع لإبادة الحشرات`}
                width={600}
                height={450}
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white"
              />
            </Reveal>

          </div>
        </section>

        {/* SCOPE */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center">
                خطوات ومراحل تنفيذ الخدمة
              </h2>
            </Reveal>

            <ul className="grid md:grid-cols-2 gap-6">
              {service.scopes.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <li className="bg-slate-50 p-5 rounded-xl shadow-sm text-slate-700 border border-slate-100 flex items-start gap-3">
                    <span className="text-emerald-700 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <WhyChooseUs />
        <CounterNumbers />

        {/* FINAL CTA */}
        <section className="py-20 bg-emerald-50/40 text-center border-t border-emerald-100">
          <Reveal>
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              احجز موعد المعاينة والرش الآن
            </h2>

            <p className="text-slate-700 mb-8 max-w-xl mx-auto">
              تواصل معنا الآن وسيقوم الفريق الهندسي المختص بتحديد نوع الإصابة ووضع خطة الإبادة الفورية الملائمة لمنشأتك.
            </p>

            <CallButtons serviceName={service.serviceNameForWhatsApp} />
          </Reveal>
        </section>
      </main>

      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "HomeAndConstructionBusiness",
              "name": "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
              "url": "https://eldaraapest.com",
            },
          }),
        }}
      />
    </>
  );
}