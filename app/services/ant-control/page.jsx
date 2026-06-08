import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBug, 
  faTriangleExclamation, 
  faMagnifyingGlassLocation, 
  faShieldHeart, 
  faHouseCircleXmark, 
  faVialCircleCheck,
  faBacteria
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة النمل | إبادة فورية بضمان مصر سيرفيس",
  description: "تخلص من الناموس والنمل نهائياً مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة النمل والصراصير. نستخدم أحدث التقنيات والمبيدات الألمانية الآمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة النمل",
    "رقم الشركة الألمانية لإبادة النمل",
    "مصر سيرفيس",
    "إبادة النمل",
    "شركة مكافحة النمل",
    "شركات التخلص من النمل",
    "مصر الألمانية الأصلية",
  ],
};

export default function AntControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ant.jpg" /* صورة مخصصة لخدمة مكافحة النمل */
            alt="الشركة الألمانية لمكافحة النمل - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة الناموس والنمل الأبيض والأسود
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة النمل <br />
              <span className="text-emerald-400">إبادة المستعمرات بضمان 5 سنوات</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة النمل</strong>؟ شركة <strong>مصر سيرفيس</strong> تقدم الحل الفعال للتخلص من النمل بشكل نهائي وآمن. نستخدم مبيدات ألمانية عالية الجودة تقضي على النمل من الجذور دون أي تأثير ضار على صحتك.
            </p>
            <CallButtons serviceName="معاينة إبادة النمل" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركات مكافحة النمل في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع النمل في المنزل أو العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يعاني الكثيرون من انتشار النمل داخل المنازل أو أماكن العمل، خاصة في فصول الصيف والمناطق التي تتوافر فيها مصادر الطعام والرطوبة. هذه الحشرة الصغيرة قد تبدو غير ضارة في البداية، لكنها سرعان ما تتحول إلى مصدر إزعاج كبير.
              </p>
              <p>
                النمل قادر على الدخول من أصغر الفتحات، وبناء مستعمرات ضخمة داخل الجدران يصعب الوصول إليها بالطرق التقليدية. لذا، تعتمد <strong>الشركة الألمانية (مصر سيرفيس)</strong> على طرق علمية حديثة لاستهداف الملكة والمستعمرة بالكامل لضمان عدم عودته مجدداً.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 shadow-inner">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-600" />
                مخاطر وجود النمل في منشأتك
              </h3>
              <ul className="space-y-4">
                {[
                  "تلوث الأطعمة ونقل البكتيريا والجراثيم للأغذية المكشوفة.",
                  "لدغات مؤلمة والتهابات جلدية (خاصة من النمل الناري واللادغ).",
                  "تلف المواد والمنتجات المخزنة في المصانع والمستودعات.",
                  "تخريب أساسات الأخشاب والجدران (في حالة النمل الأبيض).",
                  "الإضرار بسمعة المطاعم والفنادق وإعطاء انطباع بعدم النظافة.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faBacteria} className="text-amber-500 mt-1" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY IT'S HARD ================= */}
      <section className="py-20 bg-slate-50 border-y border-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-6">
                <FontAwesomeIcon icon={faBug} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">التكاثر والمستعمرات المخفية</h3>
              <p className="text-slate-600 leading-relaxed">
                المستعمرة الواحدة قد تحتوي على آلاف الأفراد بقيادة ملكة مسؤولة عن إنتاج أعداد جديدة باستمرار. قتل النمل الظاهر على السطح لا يحل المشكلة لأن المصدر الحقيقي يبقى مخفياً في العمق تحت الأرضيات أو داخل الشقوق.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات المكافحة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يعد التخلص من النمل أمراً صعباً؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يظن الكثيرون أن القضاء على النمل يمكن أن يتم بسهولة بالمبيدات التجارية، لكن النمل يمتلك قدرة مذهلة على التكيف وتغيير مساراته عند استشعار الخطر.
              </p>
              <p>
                لذلك، فإن التخلص النهائي يتطلب تدخلاً مهنياً من <strong>الشركة الألمانية مصر سيرفيس</strong>. نستخدم مبيدات معتمدة تستهدف المستعمرة بالكامل، وتعمل بنظام "العدوى المتسلسلة" حيث ينقل النمل المبيد إلى الملكة وباقي الأفراد.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= HOW WE ELIMINATE THEM ================= */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/image9.jpg')] bg-repeat" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                كيف تقضي الشركة الألمانية على النمل؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على النمل يحتاج إلى خطوات دقيقة وعلمية. تعتمد <strong>مصر سيرفيس</strong> على أحدث التقنيات وأساليب المكافحة لضمان إبادة الجذور.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. فحص شامل ودقيق للمكان",
                desc: "استخدام أجهزة فحص لتتبع مسارات سير النمل والوصول إلى بؤر تكاثره المخفية داخل الجدران أو تحت الأرضيات.",
              },
              {
                icon: faVialCircleCheck,
                title: "2. أمصال ومبيدات ألمانية متطورة",
                desc: "استخدام مبيدات عالية الكفاءة (جل وأمصال سائلة) تقضي على النمل البالغ واليرقات، وهي آمنة تماماً على الأطفال والحيوانات الأليفة.",
              },
              {
                icon: faShieldHeart,
                title: "3. أجهزة رش وتوزيع دقيقة",
                desc: "تطبيق المبيد بأجهزة تضمن وصول المادة الفعالة لأدق الفتحات والشقوق التي يصعب الوصول إليها بالطرق التقليدية.",
              },
              {
                icon: faHouseCircleXmark,
                title: "4. متابعة دورية وضمان 5 سنوات",
                desc: "توفير برنامج متابعة للتأكد من عدم عودة النمل، مع تقديم استشارات لسد الشقوق وإحكام غلق مصادر الطعام.",
              },
            ].map((step, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-emerald-800/50 p-6 rounded-xl border border-emerald-700/50 flex gap-4 backdrop-blur-sm">
                  <div className="text-amber-400 text-3xl mt-1 shrink-0">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-emerald-100 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ & HELP CENTER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">مركز المساعدة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              الأسئلة الشائعة عن مكافحة النمل
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "هل المبيدات المستخدمة لإبادة النمل آمنة على الأطفال والحيوانات الأليفة؟",
              "كم مرة يجب مكافحة النمل في السنة للحفاظ على بيئة نظيفة؟",
              "هل أحتاج إلى إخلاء المنزل أو إزالة الأواني أثناء عملية الرش؟",
              "هل تقدم الشركة الألمانية خدمة طوارئ واستجابة سريعة للمطاعم والشركات؟",
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
              <CallButtons serviceName="طلب استشارة ومعاينة لمكافحة النمل" />
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