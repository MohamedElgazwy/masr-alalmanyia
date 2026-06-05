import Image from "next/image";
import Link from "next/link";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faShieldHalved, 
  faVialVirus, 
  faHouseCircleXmark, 
  faCheckDouble
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الفئران | إبادة القوارض بضمان مصر سيرفيس",
  description: "تخلص من الفئران نهائياً مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة الفئران والقوارض. نستخدم أحدث التقنيات والمبيدات الألمانية الآمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة الفئران",
    "رقم الشركة الألمانية لإبادة الفئران",
    "مصر سيرفيس",
    "إبادة الفئران",
    "شركة مكافحة الفئران",
    "شركات التخلص من الفئران",
    "مصر الألمانية",
  ],
};

export default function RodentControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image6.jpg" /* تأكد من وجود صورة مناسبة للفئران أو المكافحة في هذا المسار */
            alt="الشركة الألمانية لمكافحة الفئران - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة الفئران والقوارض
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة الفئران <br />
              <span className="text-emerald-400">القضاء النهائي بضمان 5 سنوات</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              إذا كنت تبحث عن <strong>رقم الشركة الألمانية لمكافحة الفئران</strong>، فشركة <strong>مصر سيرفيس</strong> هي خيارك الأول. حلول سريعة وفعالة تضمن القضاء التام على الفئران من جذورها، ومنع عودتها مرة أخرى بأمصال ألمانية آمنة.
            </p>
            <CallButtons serviceName="معاينة إبادة الفئران" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة لمكافحة الفئران في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع الفئران في المنزل أو العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                تُعد الفئران من أخطر أنواع القوارض التي قد تهاجم المنازل والمخازن وأماكن العمل. فهي لا تسبب الإزعاج فقط، بل تشكل خطراً صحياً وبيئياً كبيراً بنقلها للأمراض وتخريبها للممتلكات.
              </p>
              <p>
                لا داعي للقلق — فالحل موجود مع <strong>الشركة الألمانية لإبادة الفئران (مصر سيرفيس)</strong>. نحن نعتمد على خطة عمل دقيقة تبدأ بمعاينة المكان وتحديد مصادر تواجد القوارض ومساراتها، ثم استخدام الوسائل المناسبة (طُعم احترافي، مصائد آمنة) بما يتناسب مع طبيعة المكان دون أي تأثير سلبي على البيئة أو صحة الأفراد.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-inner">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-500" />
                مخاطر وجود الفئران
              </h3>
              <ul className="space-y-4">
                {[
                  "نقل أمراض خطيرة مثل السالمونيلا، التيفود، والحمى النزفية.",
                  "تلوث الأطعمة والأدوات المنزلية عبر فضلاتها وبولها.",
                  "قضم الأسلاك الكهربائية مما قد يؤدي إلى حدوث حرائق خطيرة.",
                  "تلف الأثاث والمنتجات الغذائية المخزنة وتخريب الممتلكات.",
                  "التكاثر السريع جداً (أنثى واحدة تنتج عشرات الفئران خلال شهور).",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                    <FontAwesomeIcon icon={faVialVirus} className="text-emerald-600 mt-1" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= HOW WE ELIMINATE THEM ================= */}
      <section className="py-20 bg-slate-50 border-t border-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h4 className="text-amber-600 font-bold mb-2">طرق المكافحة العلمية</h4>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                كيف تقضي الشركة الألمانية على الفئران؟
              </h2>
              <p className="text-slate-600 text-lg">
                يُعد القضاء على الفئران مهمة تتطلب خبرة فنية عالية وأدوات متطورة. تعتمد <strong>مصر سيرفيس</strong> على منهج علمي دقيق لضمان نتائج فعالة ومستدامة.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                title: "1. الفحص الميداني الدقيق",
                desc: "يبدأ فريقنا بفحص شامل للمكان لتحديد مصادر دخول الفئران وأماكن اختبائها ومسارات تحركها، ثم وضع خطة مخصصة تتناسب مع حجم الإصابة.",
              },
              {
                title: "2. استخدام تقنيات وأمصال ألمانية",
                desc: "نستخدم مبيدات ألمانية الصنع آمنة تمامًا، معتمدة من وزارة الصحة المصرية، لا تسبب أي أضرار أو روائح مزعجة، وتضمن القضاء الفوري.",
              },
              {
                title: "3. أجهزة ومصائد احترافية",
                desc: "يضم فريق مصر الألمانية فنيين مدربين يستخدمون مصائد احترافية، وأجهزة طرد بالموجات فوق الصوتية، وطُعمًا عالي الفعالية لمنع عودة القوارض نهائياً.",
              },
              {
                title: "4. المتابعة والصيانة الدورية",
                desc: "لا نكتفي بالإبادة فقط، بل نقدم خدمات المتابعة للتأكد من استمرار الحماية على المدى الطويل وضمان بيئة نظيفة وآمنة تماماً.",
              },
            ].map((step, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-4 hover:shadow-md transition">
                  <div className="text-emerald-600 text-2xl mt-1">
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY IT'S HARD ================= */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-white">
                لماذا يعد التخلص من الفئران أمراً صعباً؟
              </h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-4">
                يعتقد الكثيرون أن القضاء على الفئران يتم بسهولة بالمواد المنزلية، لكنها كائنات شديدة الذكاء ولديها قدرة عالية على التكيف واكتشاف المصائد التقليدية.
              </p>
              <p className="text-emerald-100 text-lg leading-relaxed">
                كما أن قدرتها الهائلة على التكاثر واختباءها في جدران مجوفة وأسقف يجعل الوصول إليها شبه مستحيل بدون أدوات ومبيدات <strong>الشركة الألمانية المتخصصة (مصر سيرفيس)</strong>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-xl font-bold shrink-0">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">ضمان 5 سنوات</h3>
                  <p className="text-emerald-100">نقدم ضماناً حقيقياً لمدة 5 سنوات لضمان بقاء المكان خالياً من الفئران على المدى الطويل.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-xl font-bold shrink-0">
                  <FontAwesomeIcon icon={faHouseCircleXmark} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">زيارات متابعة مجانية</h3>
                  <p className="text-emerald-100">نوفر أسعاراً تنافسية وعروضاً خاصة مع زيارات متابعة دورية مجانية للتأكد من عدم عودة القوارض.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ & HELP CENTER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">مركز المساعدة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              الأسئلة الشائعة عن مكافحة الفئران
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "ما أسباب ظهور الفئران في المنزل أو المخازن؟",
              "هل يمكن التخلص من الفئران بطرق منزلية عادية؟",
              "هل المبيدات والأمصال المستخدمة آمنة للأطفال والحيوانات الأليفة؟",
              "كم تستغرق عملية إبادة الفئران من قبل فريق مصر الألمانية؟",
            ].map((question, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-slate-800 font-bold hover:bg-emerald-50 hover:border-emerald-200 transition cursor-help">
                  <span className="text-emerald-600 ml-3">؟</span> {question}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12">
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة الفئران" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRUST COMPONENTS ================= */}
      <WhyChooseUs />
      <CounterNumbers />

    </main>
  );
}