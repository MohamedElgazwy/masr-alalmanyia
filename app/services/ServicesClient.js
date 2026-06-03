"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import { servicesData } from "../data/services";
import WhyChooseUs from "../components/WhyChooseUs";
import CounterNumbers from "../components/CounterNumbers";

export default function ServicesClient() {
  const services = Object.entries(servicesData);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="bg-emerald-50/60 py-20 text-center border-b border-emerald-100">
        <Reveal>
          <h1 className="text-4xl font-bold text-emerald-800 mb-6">
            خدمات مكافحة الآفات
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto px-4">
            خطط متكاملة للإبادة الفورية للشركات والمنازل بأعلى معايير الأمان الألمانية، لضمان بيئة نظيفة خالية من الحشرات.
          </p>
        </Reveal>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map(([slug, service], index) => (
            <Reveal key={slug} delay={index * 0.1}>
              <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-100 transition overflow-hidden hover:-translate-y-2 hover:shadow-lg">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-52 object-cover" 
                />
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <Link 
                    href={`/services/${slug}`} 
                    className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-lg transition"
                  >
                    طرق الإبادة والتفاصيل
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <WhyChooseUs />
      <CounterNumbers />
    </main>
  );
}