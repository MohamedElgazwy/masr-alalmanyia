"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { articlesData } from "../data/articles"; // تأكد من مسار ملف البيانات
import CallButtons from "../components/CallButtons";

// إعدادات الحركة
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ArticlesClient() {
  const ITEMS_PER_PAGE = 6; 
  const articles = useMemo(() => Object.entries(articlesData), []);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, articles]);

  return (
    <main className="min-h-screen bg-slate-50/50">
      
      {/* ================= HERO SECTION (SEO Optimized) ================= */}
      <section className="bg-emerald-900 py-24 text-center border-b border-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 text-sm font-bold text-slate-900 bg-amber-500 px-5 py-2 rounded-full shadow-md"
          >
            مدونة الشركة الألمانية
          </motion.span>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md"
          >
            مقالات أفضل خبراء إبادة الحشرات
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-emerald-50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
          >
            دليلك الشامل من <strong>مصر سيرفيس (الشركة الألمانية الأصلية)</strong> للوقاية من الآفات والحشرات المنزلية والتجارية. نضع بين يديك خبرة 25 عاماً في مكافحة الحشرات المعتمدة.
          </motion.p>
        </div>
      </section>

      {/* ================= ARTICLES GRID ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SEO Text Block */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              أحدث المقالات من شركة رش حشرات معتمدة
            </h2>
            <p className="text-slate-600">
              تابع نصائح الشركة الألمانية لمكافحة الحشرات في القاهرة وجميع المحافظات للحفاظ على بيئة صحية آمنة لك ولأسرتك.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map(([slug, article], index) => (
              <motion.div
                key={slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {article.date || "مقال جديد"}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-6 text-sm flex-grow line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/articles/${slug}`}
                    className="inline-block text-center bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white font-bold px-6 py-2.5 rounded-lg transition-colors w-full border border-emerald-100 hover:border-emerald-800"
                  >
                    اقرأ المزيد ←
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-16">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-2.5 rounded-lg border-2 border-slate-200 text-slate-600 font-bold disabled:opacity-40 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                السابق
              </button>

              <span className="font-bold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
                صفحة {currentPage} من {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-2.5 rounded-lg bg-emerald-800 text-white font-bold disabled:opacity-40 hover:bg-emerald-900 transition shadow-md"
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CALL TO ACTION (SEO Heavy) ================= */}
      <section className="py-16 bg-emerald-50/60 border-t border-emerald-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">
            استشر خبراء الشركة الألمانية الآن
          </h2>
          <p className="text-slate-700 mb-8 text-lg leading-relaxed">
            هل لديك استفسار يخص مكافحة الحشرات؟ فريق الدعم في <strong>مصر سيرفيس</strong> جاهز للرد على أسئلتك وتحديد موعد المعاينة المجانية.
          </p>
          <CallButtons serviceName="استشارة مجانية من قسم المقالات" />
        </div>
      </section>

    </main>
  );
}