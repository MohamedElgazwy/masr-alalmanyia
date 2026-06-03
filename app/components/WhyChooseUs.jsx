"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  MapPin,
  Stethoscope,
  Microscope,
} from "lucide-react";

const items = [
  {
    icon: <Stethoscope size={28} />,
    text: "طاقم طبي وتمريضي محترف بجميع التخصصات",
  },
  {
    icon: <ShieldCheck size={28} />,
    text: "الالتزام الكامل بمعايير الجودة وسلامة المرضى",
  },
  {
    icon: <MapPin size={28} />,
    text: "تغطية جغرافية واسعة وسرعة الوصول",
  },
  {
    icon: <HeartPulse size={28} />,
    text: "رعاية إنسانية ونفسية قبل العلاج",
  },
  {
    icon: <Microscope size={28} />,
    text: "خدمات متكاملة: تحاليل – أشعة – تمريض",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-700 mb-14"
        >
          لماذا تختار Nabd Alhayaat؟
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-blue-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
