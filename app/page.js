"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import CallButtons from "./components/CallButtons";
import WhyChooseUs from "./components/WhyChooseUs";
import CounterNumbers from "./components/CounterNumbers";
import { servicesData } from "./data/services";

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
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* ================= HERO ================= */}
      <section className="pb-20 pt-16 bg-emerald-50/60 overflow-hidden relative border-b border-emerald-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-4 mx-2"
        >
          <span className="inline-block text-emerald-800 font-bold text-3xl tracking-wide">
            شركة الدرع لإبادة الحشرات ومكافحة الآفات
          </span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="inline-block text-amber-600 font-bold text-2xl tracking-wide bg-amber-50 px-4 py-1 rounded-full border border-amber-200">
             “بيئة صحية.. حياة آمنة بدون حشرات”
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              إبادة فورية وممتدة للمنشآت
              <br />
              بأمصال ألمانية آمنة ومصرحة.
            </h1>

            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
              تخلص من القوارض، الصراصير، النمل الأبيض، وبق الفراش نهائياً وبضمان حقيقي يصل إلى 5 سنوات. نستخدم مبيدات صديقة للبيئة بدون رائحة وبدون مغادرة المكان.
            </p>

            <CallButtons serviceName="معاينة مجانية للموقع" />
          </motion.div>

          {/* IMAGE – Parallax */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/images/image1.jpg"
              alt="Pest Control Service"
              width={600}
              height={450}
              priority
              className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white"
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
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              خدمات الإبادة المتخصصة
            </h2>

            <p className="text-slate-600 text-lg">
              حلول بيئية وذكية مخصصة لحماية المنازل والمطاعم والشركات والمصانع
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
                className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md overflow-hidden border border-slate-100"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 text-sm min-h-[40px]">
                    {service.shortDescription}
                  </p>

                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      href={`/services/${slug}`}
                      className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-6 py-2.5 rounded-lg transition shadow-sm"
                    >
                      تفاصيل الخدمة والضمان
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
              className="inline-block text-emerald-800 font-bold hover:text-amber-600 hover:underline transition"
            >
              عرض كافة الخدمات والحلول المتاحة ←
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