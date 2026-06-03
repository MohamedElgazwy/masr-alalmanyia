"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { articlesData } from "@/app/data/articles";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ArticlesPage() {
  const ITEMS_PER_PAGE = 2;
  const articles = useMemo(() => Object.entries(articlesData), []);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, articles]);

  return (
    <main className="min-h-screen">
      <section className="bg-blue-50 py-20 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl font-bold text-blue-700 mb-4"
        >
          المقالات الطبية
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-gray-700"
        >
          محتوى طبي موثوق من Nabd Alhayaat
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
              className="bg-slate-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
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
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {article.excerpt}
                </p>

                <Link
                  href={`/articles/${slug}`}
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition"
                >
                  اقرأ المقال
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 rounded-lg border border-blue-700 text-blue-700 disabled:opacity-40"
          >
            السابق
          </button>

          <span className="font-semibold text-gray-700">
            صفحة {currentPage} من {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-6 py-2 rounded-lg bg-blue-700 text-white disabled:opacity-40"
          >
            التالي
          </button>
        </div>
      </section>
    </main>
  );
}
