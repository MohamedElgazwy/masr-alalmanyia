import Image from "next/image";
import { notFound } from "next/navigation";
import CallButtons from "@/app/components/CallButtons";
import ArticleMotionWrapper from "@/app/components/ArticleMotionWrapper";
import { articlesData } from "@/app/data/articles";

/* ================= Metadata ================= */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) return {};

  return {
    title: `${article.title} | Nabd Alhayaat`,
    description: article.excerpt,
  };
}

/* ================= Page ================= */
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <ArticleMotionWrapper>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
              مقالة طبية
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {article.excerpt}
            </p>
          </div>
        </ArticleMotionWrapper>
      </section>

      {/* IMAGE */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 -mt-16">
          <ArticleMotionWrapper delay={0.2}>
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={600}
              priority
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </ArticleMotionWrapper>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <ArticleMotionWrapper delay={0.3}>
            <article
              dir="rtl"
              className="
                prose prose-lg max-w-none
                prose-headings:text-blue-700
                prose-headings:font-bold
                prose-p:text-gray-700
                prose-li:text-gray-700
              "
            >
              {article.content
                .trim()
                .split("\n")
                .map((line, i) =>
                  line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
                )}
            </article>
          </ArticleMotionWrapper>

          {/* MEDICAL NOTE */}
          
          <ArticleMotionWrapper delay={0.4}>
            <div className="mt-16 bg-blue-50 border-r-4 border-blue-600 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                📌 تنويه طبي
              </h3>
              <p className="text-gray-700">
                المعلومات الواردة للتوعية ولا تغني عن استشارة الطبيب المختص.
              </p>
            </div>
          </ArticleMotionWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-20 text-center">
        <ArticleMotionWrapper>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            هل تحتاج إلى استشارة طبية منزلية؟
          </h2>

          <p className="text-gray-700 mb-8">
            فريق Nabd Alhayaat جاهز لمساعدتك داخل منزلك
          </p>

          <CallButtons serviceName="استشارة طبية منزلية" />
        </ArticleMotionWrapper>
      </section>

    </main>
  );
}
