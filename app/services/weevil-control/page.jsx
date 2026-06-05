import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faShieldHalved, 
  faMagnifyingGlassLocation, 
  faVialCircleCheck,
  faSeedling,
  faHouseCircleXmark,
  faPumpMedical,
  faStoreSlash
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة السوس | إبادة تامة بضمان مصر سيرفيس",
  description: "تخلص من السوس في الأخشاب والمواد الغذائية مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة السوس. أمصال ألمانية آمنة 100% بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة السوس",
    "رقم الشركة الألمانية لإبادة السوس",
    "مصر سيرفيس",
    "إبادة السوس",
    "شركة مكافحة السوس",
    "التخلص من السوس",
    "مصر الألمانية الأصلية",
  ],
};

export default function WeevilControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image11.jpg" /* تأكد من توفر صورة مناسبة للسوس أو مكافحة الحبوب والأخشاب */
            alt="الشركة الألمانية لمكافحة السوس - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة سوس الخشب والحبوب
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة السوس <br />
              <span className="text-emerald-400">إبادة جذرية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة السوس</strong>؟ شركة <strong>مصر سيرفيس</strong> تقدم الحل النهائي للقضاء على السوس في المنازل، المخازن، والمطاعم باستخدام أحدث التقنيات الألمانية الآمنة.
            </p>
            <CallButtons serviceName="معاينة إبادة السوس" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركات مكافحة السوس في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع السوس في المنزل أو مكان العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                هذه الحشرة الصغيرة قد تبدو غير مؤذية، لكنها من أكثر الحشرات ضرراً. فالسوس يتغذى على الحبوب والمواد الجافة، ويمكنه أيضاً تدمير الأثاث الخشبي، مما يمثل خطراً صحياً واقتصادياً كبيراً.
              </p>
              <p>
                تجاهل المشكلة يؤدي لتفاقمها بسرعة بفضل قدرة السوس على التسلل للعبوات المغلقة. لذا، الاعتماد على <strong>الشركة الألمانية (مصر سيرفيس)</strong> يضمن لك حلاً جذرياً بمبيدات آمنة تماماً وخالية من الروائح.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر انتشار السوس
              </h3>
              <ul className="space-y-4">
                {[
                  "تلف كميات كبيرة من المواد الغذائية والحبوب دون ملاحظتها بسهولة من الخارج.",
                  "أضرار اقتصادية جسيمة للمطاعم والمخابز والمخازن وتدهور سمعة المكان.",
                  "اضطرابات في الجهاز الهضمي ناتجة عن تناول أغذية ملوثة ببويضات السوس.",
                  "انبعاث روائح كريهة من الأطعمة الفاسدة تجذب حشرات أخرى كالصراصير والعتة.",
                  "تدمير بطيء للهيكل الداخلي للأثاث الخشبي في حالة الإصابة بسوس الخشب.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faStoreSlash} className="text-red-500 mt-1" />
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
                  <FontAwesomeIcon icon={faSeedling} />
                </div>
                <h4 className="font-bold text-slate-800">تخفٍ ذكي داخل الحبوب</h4>
                <p className="text-sm text-slate-500 mt-2">يبيض داخل الحبوب فتظهر سليمة من الخارج بينما تُدمر من الداخل بالكامل.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <h4 className="font-bold text-slate-800">مقاومة للإغلاق</h4>
                <p className="text-sm text-slate-500 mt-2">يمكنه اختراق الفتحات الدقيقة جداً للعبوات، ويبقى حياً لفترات طويلة دون طعام.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من السوس بالطرق التقليدية؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                التخلص من السوس عبر تنظيف الأرفف أو التخلص من الأطعمة المصابة فقط غير كافٍ. السوس يمتلك دورة حياة سريعة ويختبئ في شقوق الخزائن والزوايا المظلمة التي يصعب الوصول إليها.
              </p>
              <p>
                الحل الجذري يتطلب تدخل <strong>الشركة الألمانية لإبادة السوس (مصر سيرفيس)</strong> باستخدام أجهزة متخصصة لضمان إبادة جميع المراحل (البيض، اليرقة، الحشرة البالغة) ومنع تكاثرها مستقبلاً.
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
                كيف تقضي الشركة الألمانية على السوس؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على السوس يحتاج لخطة متكاملة تحمي الأطعمة والأثاث معاً. هكذا يعمل فريق <strong>مصر سيرفيس</strong>:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الدقيق والتقييم",
                desc: "تحديد مصدر الإصابة بدقة في المخازن، المطابخ، أو الأثاث، وفرز المواد الملوثة وعزلها بأمان.",
              },
              {
                icon: faPumpMedical,
                title: "2. المعالجة بالمبيدات الألمانية",
                desc: "استخدام مبيدات ألمانية الصنع، خالية من الروائح وآمنة تماماً على صحة الإنسان، تضمن القضاء على السوس بجميع أطواره.",
              },
              {
                icon: faVialCircleCheck,
                title: "3. التعقيم العميق للشقوق",
                desc: "استخدام أجهزة رش متطورة تضخ المادة الفعالة داخل أدق الشقوق في الأرفف والجدران والأخشاب لضمان الإبادة التامة.",
              },
              {
                icon: faHouseCircleXmark,
                title: "4. تقديم استشارات وقائية وضمان",
                desc: "توجيه العملاء لطرق التخزين الصحيحة والتهوية، وإصدار شهادة ضمان لمدة 5 سنوات لراحة بال مستدامة.",
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
              الأسئلة الشائعة عن مكافحة السوس
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "ما هي الأسباب الرئيسية لظهور السوس فجأة في المواد الغذائية والمخازن؟",
              "هل يمكن التخلص من السوس بغسل الأرفف والحبوب فقط دون مبيدات؟",
              "هل تستطيع الشركة الألمانية مكافحة السوس في المطاحن والمصانع الكبيرة؟",
              "هل المبيدات المستخدمة تترك أثراً أو رائحة على الأطعمة المخزنة؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة السوس" />
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