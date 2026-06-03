"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { articlesData } from "../data/articles";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ArticlesClient() {
  const ITEMS_PER_PAGE = 4; // يفضل زيادتها لـ 4 أو 6 بدلاً من 2
  const articles = useMemo(() => Object.entries(articlesData), []);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, articles]);

  return (
    <main className="min-h-screen bg-slate-50/50">
      <section className="bg-emerald-50/60 py-20 text-center border-b border-emerald-100">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-emerald-800 mb-4"
        >
          نصائح وإرشادات الوقاية
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-slate-700"
        >
          أهم الطرق الفعالة لحماية منزلك من الآفات مقدمة من خبراء شركة الدرع
        </motion.p>
      </section>

      {/* ================= ARTICLES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {currentArticles.map(([slug, article], index) => (
            <motion.div
              key={slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-slate-100"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                loading="lazy"
                className="w-full h-52 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {article.excerpt}
                </p>

                <Link
                  href={`/articles/${slug}`}
                  className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg transition"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-lg border border-emerald-700 text-emerald-800 disabled:opacity-40 hover:bg-emerald-50 transition"
            >
              السابق
            </button>

            <span className="font-semibold text-slate-700">
              صفحة {currentPage} من {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-lg bg-emerald-800 text-white disabled:opacity-40 hover:bg-emerald-900 transition"
            >
              التالي
            </button>
          </div>
        )}
      </section>
    </main>
  );
}