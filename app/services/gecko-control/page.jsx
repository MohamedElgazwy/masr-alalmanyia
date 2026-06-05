import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faMagnifyingGlassLocation, 
  faShieldHalved, 
  faVialCircleCheck,
  faPaw,
  faMoon,
  faHouseCircleXmark,
  faVialVirus
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الأبراص | إبادة فورية بضمان مصر سيرفيس",
  description: "تخلص من الأبراص والزواحف المزعجة مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة الأبراص. نستخدم أحدث التقنيات والمبيدات الألمانية الآمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة الأبراص",
    "رقم الشركة الألمانية لإبادة الأبراص",
    "مصر سيرفيس",
    "إبادة الأبراص",
    "شركة مكافحة الأبراص",
    "التخلص من الأبراص",
    "مصر الألمانية الأصلية",
  ],
};

export default function GeckoControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image1.jpg" /* يرجى التأكد من مسار صورة مناسبة للأبراص أو المكافحة */
            alt="الشركة الألمانية لمكافحة الأبراص - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة الأبراص والزواحف
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة الأبراص <br />
              <span className="text-emerald-400">إبادة نهائية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة الأبراص</strong>؟ شركة <strong>مصر سيرفيس</strong> توفر لك تدخلاً متخصصاً للقضاء على الأبراص من الجذور باستخدام أمصال ألمانية آمنة وفعالة.
            </p>
            <CallButtons serviceName="معاينة إبادة الأبراص" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة أبراص في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع الأبراص في المنزل أو مكان العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                إن ظهور الأبراص يُعد مصدر إزعاج كبير وخطر محتمل، خصوصًا في المنازل التي يوجد بها أطفال. الأبراص ليست مجرد كائنات مزعجة تتحرك بسرعة، بل يمكن أن تكون سببًا في انتشار الجراثيم وتلوث المكان.
              </p>
              <p>
                تدخل الأبراص بسهولة من خلال الفتحات والشقوق الدقيقة. محاولات الطرد اليدوي أو المبيدات العادية غير فعالة. لذلك، فإن <strong>الشركة الألمانية (مصر سيرفيس)</strong> تضع بين يديك حلولاً متكاملة للقضاء على الأبراص بجميع أنواعها باستخدام مبيدات ألمانية آمنة تماماً.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر وجود الأبراص
              </h3>
              <ul className="space-y-4">
                {[
                  "نقل البكتيريا والجراثيم للأطعمة المكشوفة أثناء حركتها السريعة ليلاً.",
                  "ترك فضلاتها في أماكن الطعام مما يسبب تلوثاً وأمراضاً معوية.",
                  "إفراز سوائل ذات رائحة كريهة تسبب التهابات أو حساسية جلدية.",
                  "إثارة حالة من الذعر والخوف الشديد لدى الأطفال وكبار السن.",
                  "تأثير سلبي على سمعة المطاعم والفنادق وإعطاء انطباع بعدم النظافة.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faVialVirus} className="text-red-500 mt-1" />
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
                <h4 className="font-bold text-slate-800">مرونة وتكيف عالي</h4>
                <p className="text-sm text-slate-500 mt-2">تمتلك جسداً مرناً يسمح لها بالدخول لأضيق الفتحات والشقوق والاختباء ببراعة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faMoon} />
                </div>
                <h4 className="font-bold text-slate-800">نشاط ليلي وسرعة</h4>
                <p className="text-sm text-slate-500 mt-2">تتحرك في الظلام بسرعة فائقة وتتسلق الأسطح الرأسية مما يجعل ملاحقتها شبه مستحيلة.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات المكافحة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من الإبراص بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يُعد التخلص من الأبراص من المهام الصعبة التي تواجه أصحاب المنازل والمنشآت. تستطيع الأبراص العيش لفترات طويلة في الأماكن الدافئة، وتنجذب للأماكن التي يتوفر فيها الذباب أو الحشرات الصغيرة.
              </p>
              <p>
                المبيدات التقليدية لا تجدي نفعاً، لأن الأبراص تختبئ في زوايا بعيدة. الاعتماد على <strong>الشركة الألمانية لإبادة الأبراص (مصر سيرفيس)</strong> يضمن استخدام أمصال طاردة ومبيدات قاتلة مصممة خصيصاً للزواحف لضمان عدم عودتها.
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
                كيف تقضي الشركة الألمانية على الأبراص؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على الأبراص يحتاج إلى خبرة ميدانية ومواد معتمدة دولياً. هكذا يعمل فريق <strong>مصر سيرفيس</strong> لضمان حمايتك:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الميداني الدقيق",
                desc: "يقوم فريق متخصص بتحديد أماكن تواجد الأبراص ومسارات دخولها سواء من النوافذ أو الشقوق أو مخارج التهوية.",
              },
              {
                icon: faVialCircleCheck,
                title: "2. الرش والتبخير بالأمصال الألمانية",
                desc: "استخدام أحدث أدوات الرش لتطبيق مبيدات ألمانية مخصصة للزواحف تقضي عليها فور ملامستها وتطردها من المكان.",
              },
              {
                icon: faHouseCircleXmark,
                title: "3. سد الفتحات ومعالجة الأسباب",
                desc: "القضاء على الحشرات الصغيرة (مصدر غذاء الأبراص) وتقديم نصائح وقائية لإغلاق الشقوق ومنع الدخول مستقبلاً.",
              },
              {
                icon: faShieldHalved,
                title: "4. المتابعة الوقائية والضمان",
                desc: "تقديم ضمان لمدة 5 سنوات، مع زيارات متابعة مجانية للتأكد من القضاء التام على الأبراص وضمان بيئة نظيفة.",
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
              الأسئلة الشائعة عن مكافحة الأبراص
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "هل الأبراص سامة، وما هي خطورة اقترابها من الأطفال أو الأطعمة؟",
              "هل المبيدات الحشرية المنزلية العادية قادرة على قتل أو طرد الإبراص؟",
              "كيف أعرف أماكن اختباء الأبراص في منزلي خلال فترات النهار؟",
              "هل تقدمون خدمة سد الشقوق والنصائح لمنع دخول الأبراص بشكل نهائي؟",
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
              <CallButtons serviceName="طلب استشارة ومعاينة لمكافحة الأبراص" />
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