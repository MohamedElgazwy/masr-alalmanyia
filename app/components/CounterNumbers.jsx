"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 10,
    suffix: "+",
    title: "سنوات خبرة",
  },
  {
    number: 5000,
    suffix: "+",
    title: "مريض تم خدمته",
  },
  {
    number: 150,
    suffix: "+",
    title: "طبيب وممرض",
  },
  {
    number: 24,
    suffix: "/7",
    title: "خدمة متواصلة",
  },
];

export default function CounterNumbers() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                <CountUp end={item.number} duration={2} />
                {item.suffix}
              </h3>
              <p className="text-gray-600 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
