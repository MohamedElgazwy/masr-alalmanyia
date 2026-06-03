"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="text-4xl font-bold text-blue-700">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounters() {
  const stats = [
    { label: "سنوات خبرة", value: 10, suffix: "+" },
    { label: "مريض تم خدمتهم", value: 12000, suffix: "+" },
    { label: "خدمة طبية", value: 15, suffix: "+" },
    { label: "تغطية محافظات", value: 8, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
