"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import CallButtons from "@/app/components/CallButtons";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import { servicesData } from "@/app/data/services";
import CounterNumbers from "./components/CounterNumbers";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const services = Object.entries(servicesData).slice(0, 6);

  /* ===== Parallax Effect ===== */
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="pb-20 pt-10 bg-blue-50 overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-5 mx-2"
        >
          <span className="inline-block text-blue-700 font-bold text-3xl tracking-wide">
           نبض الحياة للرعاية المنزلية _ Nabd Alhayaat For Home Car
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="inline-block text-blue-700 font-semibold text-2xl tracking-wide">
            “مستشفى فى بيتك”
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
           رعاية طبية منزلية متخصصة 
              <br />
             تصل إليك بسرعة وأمان.
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              نوفر خدمات المستشفى في المنزل بأعلى معايير الجودة، على يد طاقم طبي وتمريضي محترف. 
            </p>

            

            {/* CTA Buttons (Micro-interaction جوه component) */}
            <CallButtons serviceName="التمريض المنزلي" />
          </motion.div>

          {/* IMAGE – Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/photo1.jpg"
              alt="Home Medical Care"
              width={600}
              height={450}
              priority
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              خدماتنا الطبية
            </h2>

            <p className="text-gray-600 text-lg">
              باقات رعاية صحية منزلية تناسب جميع الاحتياجات
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map(([slug, service]) => (
              <motion.div
                key={slug}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-slate-50 rounded-xl shadow-sm hover:shadow-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>

                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      href={`/services/${slug}`}
                      className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
                    >
                      عرض التفاصيل
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* VIEW ALL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block text-blue-700 font-semibold hover:underline"
            >
              عرض جميع الخدمات →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />
      <CounterNumbers />
    </main>
  );
}
