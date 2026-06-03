export const metadata = {
  title: "من نحن | شركة الدرع لإبادة الحشرات",
  description: "تعرف على شركة الدرع الرائدة في مجال مكافحة الآفات وإبادة الحشرات في مصر",
};

import StatsCounters from "../components/StatsCounters";
import WhyChooseUs from "../components/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* HERO */}
      <section className="bg-emerald-50/60 py-20 text-center border-b border-emerald-100">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">
          من نحن
        </h1>

        <p className="max-w-3xl mx-auto text-slate-700 text-lg leading-relaxed px-4">
          شركة الدرع هي مؤسسة متخصصة ورائدة في تقديم حلول الإبادة ومكافحة الآفات باحترافية عالية، مع التركيز التام على صحة وأمان أسرتك أو بيئة عملك من خلال استخدام أفضل الأمصال المعتمدة.
        </p>
      </section>

      <StatsCounters />

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-amber-500">🎯</span> رؤيتنا
            </h2>
            <p className="text-slate-700 leading-relaxed">
              أن نكون الخيار الأول والأكثر ثقة لمكافحة الحشرات في مصر، من خلال تقديم خدمات آمنة، فعالة، وممتدة المفعول، مع الالتزام الصارم بمعايير الحفاظ على البيئة والصحة العامة.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="text-amber-500">🚀</span> رسالتنا
            </h2>
            <p className="text-slate-700 leading-relaxed">
              توفير حماية متكاملة للمنشآت السكنية والتجارية ضد كافة أنواع الآفات، بأيدي فريق هندسي وفني محترف، وباستخدام أحدث تقنيات الإبادة الألمانية لضمان بيئة نظيفة خالية من الحشرات.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <WhyChooseUs />
    </main>
  );
}