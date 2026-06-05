import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faPaw, 
  faMagnifyingGlassLocation, 
  faShieldHalved, 
  faVialCircleCheck,
  faBug,
  faHouseCircleXmark,
  faPumpMedical
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة القراد | إبادة فورية بضمان مصر سيرفيس",
  description: "تخلص من القراد لحماية أسرتك وحيواناتك الأليفة مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة القراد. أمصال ألمانية آمنة 100% بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة القراد",
    "رقم الشركة الألمانية لإبادة القراد",
    "مصر سيرفيس",
    "إبادة القراد",
    "شركة مكافحة القراد",
    "التخلص من القراد",
    "مصر الألمانية الأصلية",
  ],
};

export default function TickControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image10.jpg" /* تأكد من توفر صورة مناسبة للقراد أو المكافحة في هذا المسار */
            alt="الشركة الألمانية لمكافحة القراد - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة القراد والطفيليات
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة القراد <br />
              <span className="text-emerald-400">إبادة جذرية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة القراد</strong>؟ توفر لك <strong>مصر سيرفيس</strong> الحل الأمثل لحماية منزلك وحيواناتك الأليفة باستخدام أحدث الأمصال الألمانية الآمنة بضمان 5 سنوات.
            </p>
            <CallButtons serviceName="معاينة إبادة القراد" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة قراد في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع القراد في المنزل أو الحديقة؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                وجود القراد يمثل خطراً صحياً حقيقياً على الإنسان والحيوانات الأليفة. فهو من الطفيليات التي تتغذى على الدم، وتعيش عادة في الأماكن الرطبة والمظللة كالعشب الطويل، أو داخل المنازل عبر الحيوانات الأليفة.
              </p>
              <p>
                هذه الطفيليات الصغيرة تختبئ بسهولة في الشقوق وعلى الحيوانات، مما يجعل السيطرة عليها صعبة بدون خبرة متخصصة. التنظيف السطحي لا يكفي، ولذلك فإن <strong>الشركة الألمانية (مصر سيرفيس)</strong> تقدم خطة معالجة شاملة تقضي على القراد في جميع مراحله.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر وجود القراد
              </h3>
              <ul className="space-y-4">
                {[
                  "نقل أمراض خطيرة مثل حمى القراد، والتهابات الجلد، وأمراض الجهاز العصبي.",
                  "تهيج الجلد وحكة شديدة نتيجة اللدغات المستمرة.",
                  "خطر مباشر على الأطفال وكبار السن والحيوانات الصغيرة.",
                  "ضعف صحة الحيوانات الأليفة ونقل أمراض تؤدي لخسائر اقتصادية وصحية.",
                  "التكاثر السريع وتحول المشكلة البسيطة إلى غزو شامل للمكان.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faBug} className="text-red-500 mt-1" />
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
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faPaw} />
                </div>
                <h4 className="font-bold text-slate-800">التخفي الماكر</h4>
                <p className="text-sm text-slate-500 mt-2">يختبئ بسهولة في الأماكن المظلمة، العشب، وبين فرو الحيوانات الأليفة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <h4 className="font-bold text-slate-800">دورة حياة معقدة</h4>
                <p className="text-sm text-slate-500 mt-2">تشمل بيوض، يرقات، وبالغات، ويتطلب القضاء عليها أساليب معالجة مختلفة.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من القراد بالطرق العادية؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                القراد قادر على التكيف مع بيئات مختلفة، ويستطيع البقاء لفترات طويلة بدون غذاء. كما أن تحركه المستمر بين الحيوانات والأشخاص يسهل انتشاره السريع داخل المكان.
              </p>
              <p>
                استخدام المبيدات غير المتخصصة أو التنظيف السطحي لا يقضي على البيوض واليرقات. لهذا، <strong>الشركة الألمانية مصر سيرفيس</strong> توفر حلاً جذرياً يضمن القضاء التام على جميع مراحل حياة القراد بأمان.
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
                كيف تقضي الشركة الألمانية على القراد؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على القراد يتطلب خطة دقيقة. تعتمد <strong>مصر سيرفيس</strong> على أحدث التقنيات الألمانية لضمان حماية أسرتك وحيواناتك الأليفة:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الشامل للمكان",
                desc: "تحديد نقاط الاختباء ومسارات تحرك القراد بدقة، سواء في الحدائق أو الشقوق والزوايا المظلمة داخل المباني.",
              },
              {
                icon: faPumpMedical,
                title: "2. المعالجة بالمبيدات الألمانية",
                desc: "استخدام مبيدات ألمانية عالية الجودة، آمنة على الإنسان والحيوانات الأليفة، تقضي على البيوض واليرقات والبالغات.",
              },
              {
                icon: faHouseCircleXmark,
                title: "3. تنظيف وتأمين المحيط الخارجي",
                desc: "إزالة المخلفات والأخشاب من الحدائق التي قد تجذب القراد لضمان منع عودته مرة أخرى.",
              },
              {
                icon: faVialCircleCheck,
                title: "4. المتابعة الوقائية والضمان",
                desc: "تقديم نصائح لفحص الحيوانات وتقليم النباتات، وإصدار شهادة ضمان لمدة 5 سنوات مع متابعة دورية.",
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
              الأسئلة الشائعة عن مكافحة القراد
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "هل القراد ينتقل إلى الإنسان ويسبب الأمراض؟",
              "كيف أعرف أن الحيوان الأليف مصاب بالقراد؟",
              "هل المبيدات والأمصال المستخدمة آمنة للحيوانات الأليفة؟",
              "هل يكفي رش الحيوان الأليف فقط للتخلص من المشكلة؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة القراد" />
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