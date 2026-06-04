import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { articlesData } from "@/app/data/articles";
import CallButtons from "@/app/components/CallButtons";
import ArticleMotionWrapper from "@/app/components/ArticleMotionWrapper";

/* ================= Metadata ================= */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) return {};

  const url = `https://eldaraapest.com/articles/${slug}`;

  return {
    title: `${article.title} | شركة الدرع لإبادة الحشرات`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [
        {
          url: `https://eldaraapest.com${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

/* ================= Page ================= */
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) notFound();

  return (
    <>
      <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <ArticleMotionWrapper>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block mb-4 text-sm font-semibold text-emerald-700 bg-emerald-100 px-4 py-1 rounded-full">
              نصائح وإرشادات
            </span>

            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white"
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
                prose-headings:text-emerald-800
                prose-headings:font-bold
                prose-p:text-slate-700
                prose-li:text-slate-700
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

          {/* WARNING NOTE */}
          <ArticleMotionWrapper delay={0.4}>
            <div className="mt-16 bg-amber-50 border-r-4 border-amber-500 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-700 mb-3">
                📌 تنويه هام
              </h3>
              <p className="text-slate-700">
                الطرق الوقائية المنزلية مفيدة للحد من الانتشار، ولكن في حالة تفاقم الإصابة أو ظهور حشرات خطيرة مثل النمل الأبيض أو بق الفراش، يجب الاستعانة بخبراء الإبادة فوراً لتجنب تلف الممتلكات.
              </p>
            </div>
          </ArticleMotionWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50/60 py-20 text-center border-t border-emerald-100">
        <ArticleMotionWrapper>
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">
            هل تعاني من ظهور الحشرات في منشأتك؟
          </h2>

          <p className="text-slate-700 mb-8">
            فريق شركة الدرع جاهز لفحص المكان وتقديم حلول الإبادة الفورية بالضمان.
          </p>

          <CallButtons serviceName="طلب معاينة لمكافحة الحشرات" />
        </ArticleMotionWrapper>
      </section>

      </main>

      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: `https://eldaraapest.com${article.image}`,
            datePublished: article.date,
            author: {
              "@type": "Organization",
              name: "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
              url: "https://eldaraapest.com",
            },
            publisher: {
              "@type": "Organization",
              name: "شركة الدرع لإبادة الحشرات ومكافحة الآفات",
              logo: {
                "@type": "ImageObject",
                url: "https://eldaraapest.com/images/logo.jpg",
              },
            },
          }),
        }}
      />

    </>

  );