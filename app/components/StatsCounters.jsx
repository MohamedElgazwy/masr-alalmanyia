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
    <span className="text-4xl font-bold text-emerald-800">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounters() {
  const stats = [
    { label: "سنوات خبرة في السوق", value: 12, suffix: "+" },
    { label: "منشأة وعقار تم تأمينهم", value: 18500, suffix: "+" },
    { label: "مهندس وفني متخصص", value: 45, suffix: "+" },
    { label: "محافظة نغطيها بالكامل", value: 12, suffix: "" },
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
              className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition border border-slate-100"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-slate-600 font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}