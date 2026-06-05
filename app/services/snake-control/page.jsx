import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faSkullCrossbones, 
  faMagnifyingGlassLocation, 
  faShieldHalved, 
  faVialCircleCheck,
  faTree,
  faHouseCircleXmark
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الثعابين | طوارئ وإبادة فورية - مصر سيرفيس",
  description: "طوارئ 24 ساعة للتخلص من الثعابين والزواحف الخطرة مع مصر سيرفيس، الشركة الألمانية الأصلية. فريق متخصص ومبيدات ألمانية آمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة الثعابين",
    "رقم الشركة الألمانية لإبادة الثعابين",
    "مصر سيرفيس",
    "إبادة الثعابين",
    "شركة مكافحة الثعابين",
    "التخلص من الثعابين",
    "طوارئ مكافحة الثعابين",
    "مصر الألمانية الأصلية",
  ],
};

export default function SnakeControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image9.jpg" /* تأكد من توفر صورة مناسبة للزواحف أو المكافحة في هذا المسار */
            alt="الشركة الألمانية لمكافحة الثعابين - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة طوارئ إبادة الثعابين والزواحف
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة الثعابين <br />
              <span className="text-emerald-400">تدخل فوري بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة الثعابين</strong> في حالات الطوارئ؟ <strong>مصر الألمانية</strong> توفر لك تدخلاً فورياً على مدار 24 ساعة لتأمين منزلك أو مزرعتك من أخطر الزواحف باستخدام أحدث المعدات.
            </p>
            <CallButtons serviceName="طوارئ مكافحة الثعابين" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">طوارئ مكافحة الثعابين في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع الثعابين في المنزل أو المزرعة؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                وجود الثعابين في أي مكان سكني أو زراعي يمثل خطراً كبيراً على سلامة الإنسان والحيوانات الأليفة. تنتشر الثعابين عادة في المناطق المفتوحة، وتدخل للمنازل والمستودعات بحثاً عن الغذاء أو أماكن آمنة للاختباء.
              </p>
              <p>
                الاعتماد على الطرق التقليدية أو محاولة صيدها يدوياً غالباً ما يكون غير آمن. لذلك، فإن <strong>الشركة الألمانية (مصر سيرفيس)</strong> تقدم لك حلولاً متقدمة وآمنة لتأمين الموقع وفحصه بدقة، والقضاء على الثعابين بطرق علمية احترافية تضمن عدم عودتها.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر وجود الثعابين
              </h3>
              <ul className="space-y-4">
                {[
                  "التعرض للدغات سامة قد تسبب مضاعفات صحية خطيرة تصل إلى التسمم أو الوفاة.",
                  "الخطر الشديد والمباشر على الأطفال وكبار السن والحيوانات الأليفة في المكان.",
                  "خلق حالة من الذعر المستمر تؤدي إلى تعطيل النشاطات اليومية وتوقف العمل.",
                  "التسبب في خسائر اقتصادية في المزارع بالتهام الطيور والقوارض المرباة.",
                  "الاختباء في أماكن مظلمة ومفاجأة السكان، مما يزيد من خطورة التعرض للدغ.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faSkullCrossbones} className="text-red-500 mt-1" />
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                </div>
                <h4 className="font-bold text-slate-800">التخفي في الأماكن الضيقة</h4>
                <p className="text-sm text-slate-500 mt-2">تختبئ تحت الصخور، بين الأخشاب، وفي شقوق الجدران مما يجعل اكتشافها صعباً.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faTree} />
                </div>
                <h4 className="font-bold text-slate-800">التكيف السريع</h4>
                <p className="text-sm text-slate-500 mt-2">تتحمل الحرارة والجفاف وتنتقل بسرعة بحثاً عن فرائس، مما يعقد السيطرة عليها.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات السيطرة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من الثعابين بالطرق العادية؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                الثعابين لا تُكتشف غالباً إلا بشكل مفاجئ، وقدرتها على الاختباء وسرعة حركتها تجعل استخدام المبيدات المنزلية أو محاولات الصيد اليدوي غير فعالة وشديدة الخطورة.
              </p>
              <p>
                التخلص منها يتطلب معدات حماية متخصصة وخبرة ميدانية. <strong>الشركة الألمانية (مصر سيرفيس)</strong> تمتلك طاقماً مدرباً وأمصالاً ألمانية تقضي على الزواحف وتؤمن محيط المكان بالكامل لضمان عدم رجوعها.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= HOW WE ELIMINATE THEM ================= */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern.svg')] bg-repeat" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                كيف تقضي الشركة الألمانية على الثعابين؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على الثعابين يتطلب خطة طوارئ دقيقة ومدروسة. تعتمد <strong>مصر سيرفيس</strong> على التقنيات الحديثة لضمان الأمان الفوري:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الشامل وتأمين الموقع",
                desc: "تأمين الموقع فور الوصول وفحصه بدقة لتحديد مناطق اختباء الثعابين ومسارات دخولها للمنزل أو الحديقة.",
              },
              {
                icon: faVialCircleCheck,
                title: "2. المعالجة بالمبيدات الألمانية",
                desc: "استخدام مبيدات ألمانية عالية الجودة، آمنة على الإنسان والحيوانات الأليفة، ومخصصة لردع والقضاء على الثعابين في الشقوق.",
              },
              {
                icon: faHouseCircleXmark,
                title: "3. تنظيف وتأمين المحيط الخارجي",
                desc: "إزالة أي مخلفات أو أكوام خشبية قد تشجع الثعابين على التكاثر، ومعالجة المناطق المحيطة لمنع التسلل.",
              },
              {
                icon: faShieldHalved,
                title: "4. نصائح وقائية وضمان ممتد",
                desc: "تقديم التوجيهات اللازمة لسد الفجوات والحفاظ على نظافة الحديقة، وإصدار ضمان لمدة 5 سنوات لراحة بالك.",
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
              الأسئلة الشائعة عن مكافحة الثعابين
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "كيف أعرف أن هناك ثعابين مختبئة في محيط منزلي أو حديقتي؟",
              "هل الثعابين تدخل البيوت فعلًا وكيف يمكنني منعها من التسلل؟",
              "هل يمكن للشركة طرد الثعابين باستخدام أمصال وقائية دون قتلها؟",
              "هل تقدم الشركة الألمانية خدمة الطوارئ السريعة (24 ساعة) للتعامل مع الزواحف؟",
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
              <CallButtons serviceName="طلب طوارئ ومعاينة لمكافحة الثعابين" />
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