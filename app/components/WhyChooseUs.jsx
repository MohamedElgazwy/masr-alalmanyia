"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
  Award
} from "lucide-react";

const items = [
  {
    icon: <Award size={28} />,
    text: "مهندسون وفنيون متخصصون ومدربون على أعلى مستوى",
  },
  {
    icon: <ShieldCheck size={28} />,
    text: "استخدام أمصال ألمانية آمنة تماماً ومصرحة من وزارة الصحة",
  },
  {
    icon: <MapPin size={28} />,
    text: "تغطية جغرافية شاملة لجميع المحافظات وسرعة تلبية الطلبات",
  },
  {
    icon: <Zap size={28} />,
    text: "إبادة فورية من الجلسة الأولى بدون الحاجة لمغادرة المكان",
  },
  {
    icon: <Sparkles size={28} />,
    text: "ضمان حقيقي مكتوب يصل إلى 5 سنوات ومتابعات مجانية دورية",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-emerald-800 mb-14"
        >
          لماذا تختار الشركة الألمانية (مصر سيرفيس) لمكافحة الآفات؟
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition"
            >
              <div className="text-emerald-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}