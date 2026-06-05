import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faBookOpen, 
  faDroplet, 
  faShieldHalved, 
  faVialCircleCheck,
  faBug,
  faHouseCircleXmark,
  faMagnifyingGlassLocation
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة السمكة الفضية | إبادة تامة بضمان مصر سيرفيس",
  description: "تخلص من السمكة الفضية التي تتلف الكتب والمفروشات مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة السمكة الفضية. أمصال ألمانية آمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة السمكة الفضية",
    "رقم الشركة الألمانية لإبادة السمكة الفضية",
    "مصر سيرفيس",
    "إبادة السمكة الفضية",
    "شركة مكافحة السمكة الفضية",
    "التخلص من حشرة السمكة الفضية",
    "مصر الألمانية الأصلية",
  ],
};

export default function SilverfishControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image8.jpg" /* تأكد من توفر صورة مناسبة للسمكة الفضية أو المكافحة في هذا المسار */
            alt="الشركة الألمانية لمكافحة السمكة الفضية - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة حشرة السمكة الفضية
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة السمكة الفضية <br />
              <span className="text-emerald-400">إبادة جذرية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة السمكة الفضية</strong>؟ توفر لك <strong>مصر سيرفيس</strong> الحل النهائي لحماية منزلك وممتلكاتك من التلف باستخدام أحدث الأمصال الألمانية الآمنة بضمان 5 سنوات.
            </p>
            <CallButtons serviceName="معاينة إبادة السمكة الفضية" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة للسمكة الفضية في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع السمكة الفضية في المنزل أو العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                السمكة الفضية من الحشرات الصغيرة المزعجة التي تتحرك بسرعة وتختبئ في الشقوق والزوايا المظلمة، وتفضل الأماكن الرطبة مثل المطابخ، الحمامات، وخزانات المياه.
              </p>
              <p>
                على الرغم من أنها لا تلدغ الإنسان، إلا أنها تمثل تهديداً صامتاً لممتلكاتك، حيث تتغذى على المواد العضوية، الورق، والملابس. الاعتماد على <strong>الشركة الألمانية (مصر سيرفيس)</strong> يضمن لك التخلص منها نهائياً ومنع تكاثرها بفضل أمصالنا الفعالة والآمنة.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر انتشار السمكة الفضية
              </h3>
              <ul className="space-y-4">
                {[
                  "تلف شديد في الممتلكات الشخصية مثل الكتب، الوثائق الهامة، والملابس.",
                  "تلوث الطعام والأدوات المنزلية مما يرفع خطر انتشار البكتيريا والفطريات.",
                  "الضرر بالمواد اللاصقة (ورق الحائط، الأشرطة اللاصقة، وتجليد الكتب).",
                  "انزعاج نفسي مستمر بسبب حركتها السريعة المفاجئة ليلاً.",
                  "التكاثر السريع وتحول الإصابة البسيطة لغزو كامل إذا أُهملت.",
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
                  <FontAwesomeIcon icon={faDroplet} />
                </div>
                <h4 className="font-bold text-slate-800">عاشقة للرطوبة</h4>
                <p className="text-sm text-slate-500 mt-2">تستقر في الحمامات وأسفل الأحواض وخلف المواسير مما يصعب اكتشافها.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <h4 className="font-bold text-slate-800">تنوع الغذاء</h4>
                <p className="text-sm text-slate-500 mt-2">تأكل أي شيء يحتوي على نشويات ومواد لاصقة، مما يجعلها قادرة على البقاء في أي مكان.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من السمكة الفضية بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                السمكة الفضية حشرة ليلية صغيرة الحجم وتتحرك بسرعة فائقة، وتضع بيوضها في الشقوق العميقة والزوايا المظلمة. استخدام المنظفات أو المبيدات السطحية لا يصل أبداً إلى البيوض أو اليرقات.
              </p>
              <p>
                لذلك، فإن التدخل المهني من <strong>الشركة الألمانية مصر سيرفيس</strong> هو الحل. نحن نعتمد على استراتيجية متكاملة لامتصاص الرطوبة ورش مبيدات ألمانية متطورة تخترق أضيق الشقوق وتقضي على الحشرة بأكملها.
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
                كيف تقضي الشركة الألمانية على السمكة الفضية؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على السمكة الفضية يتطلب أسلوباً منظماً. تعتمد <strong>مصر سيرفيس</strong> على أحدث التقنيات الألمانية لضمان الحماية التامة:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الشامل وتحديد البؤر",
                desc: "تحديد مناطق الرطوبة العالية وأماكن تجمع الحشرة في المطابخ، الحمامات، والمخازن أو المكتبات.",
              },
              {
                icon: faVialCircleCheck,
                title: "2. المعالجة بالمبيدات الألمانية الدقيقة",
                desc: "استخدام أجهزة رش دقيقة لضخ مبيدات ألمانية عالية الجودة (آمنة تماماً) داخل الشقوق العميقة لقتل الحشرات والبيوض معاً.",
              },
              {
                icon: faHouseCircleXmark,
                title: "3. تنظيف ومعالجة الأسباب الجذرية",
                desc: "تنظيف المناطق المحيطة وتقديم توجيهات لتقليل الرطوبة ومعالجة التسربات المائية التي تعتبر بيئة خصبة لها.",
              },
              {
                icon: faShieldHalved,
                title: "4. المتابعة الوقائية والضمان",
                desc: "منح العميل ضماناً لمدة 5 سنوات لضمان عدم عودة السمكة الفضية، مع زيارات متابعة دورية مجانية.",
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
              الأسئلة الشائعة عن مكافحة السمكة الفضية
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "كيف أعرف أن منزلي أو مكان عملي مصاب بالسمكة الفضية فعلياً؟",
              "هل السمكة الفضية ضارة بالصحة وتسبب لدغات أو حساسية للإنسان؟",
              "ما هي الأسباب المباشرة لانتشارها المفاجئ في الحمامات والمطابخ؟",
              "هل المبيدات المستخدمة تؤثر على الكتب والملابس أو تترك بقعاً؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة السمكة الفضية" />
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