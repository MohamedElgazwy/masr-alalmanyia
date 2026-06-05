"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { servicesData } from "../data/services";
import WhyChooseUs from "../components/WhyChooseUs";
import CounterNumbers from "../components/CounterNumbers";
import CallButtons from "../components/CallButtons";

export default function ServicesClient() {
  const services = Object.entries(servicesData);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="bg-emerald-900 py-20 text-center border-b border-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">خدمات مصر سيرفيس بيست كنترول</h1>
          <p className="text-emerald-50 text-lg max-w-3xl mx-auto">
            <strong>مصر الألمانية</strong> هي أفضل شركة مكافحة حشرات وقوارض في مصر. نقدم تقنيات ألمانية متطورة وآمنة.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {services.map(([slug, service], index) => (
              <Reveal key={slug} delay={index * 0.1}>
                <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="relative h-56">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-emerald-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm flex-grow">{service.shortDescription}</p>
                    <Link href={`/services/${slug}`} className="w-full bg-slate-900 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-lg text-center transition">
                      طرق الإبادة والتفاصيل
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CounterNumbers />

      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">طلب خدمة أو استشارة من الشركة الألمانية</h2>
        <CallButtons serviceName="طلب استشارة وخدمة من مصر الألمانية" />
      </section>
    </main>
  );
}