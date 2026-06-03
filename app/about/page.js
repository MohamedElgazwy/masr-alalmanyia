

export const metadata = {
  title: "من نحن | Nabd Alhayaat",
  description: "تعرف على نبض الحياة للرعاية الصحية المنزلية",
};

import StatsCounters from "@/app/components/StatsCounters";
import WhyChooseUs from "../components/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          من نحن
        </h1>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nabd Alhayaat هي مؤسسة متخصصة في تقديم خدمات الرعاية الصحية
          والتمريض المنزلي باحترافية عالية، مع التركيز على راحة المريض
          وجودة الخدمة داخل منزله.
        </p>
      </section>


      <StatsCounters />

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              رؤيتنا
            </h2>
            <p className="text-gray-700 leading-relaxed">
              أن نكون الخيار الأول للرعاية الصحية المنزلية في مصر،
              من خلال تقديم خدمات آمنة، متكاملة، وسريعة الوصول،
              مع الالتزام الكامل بمعايير الجودة وسلامة المرضى.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              رسالتنا
            </h2>
            <p className="text-gray-700 leading-relaxed">
              توفير رعاية طبية وتمريضية متخصصة داخل المنزل،
              بأيدي طاقم طبي محترف، باستخدام أحدث الأساليب الطبية،
              لضمان أفضل نتائج علاجية وراحة نفسية للمريض وأسرته.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <WhyChooseUs />
    </main>
  );
}
