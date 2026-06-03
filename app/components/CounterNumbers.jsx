"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 12,
    suffix: "+",
    title: "سنوات خبرة",
  },
  {
    number: 8500,
    suffix: "+",
    title: "منشأة تم تأمينها",
  },
  {
    number: 45,
    suffix: "+",
    title: "مهندس وفني مكافحة",
  },
  {
    number: 24,
    suffix: "/7",
    title: "طوارئ واستجابة",
  },
];

export default function CounterNumbers() {
  return (
    <section className="py-20 bg-slate-50 border-t border-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-4xl font-bold text-emerald-800 mb-2">
                <CountUp end={item.number} duration={2.5} />
                <span className="text-amber-500 ml-1">{item.suffix}</span>
              </h3>
              <p className="text-slate-600 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}