import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faShieldHalved, 
  faVialCircleCheck, 
  faHouseCircleXmark,
  faBug,
  faMagnifyingGlassLocation,
  faPaw,
  faPumpMedical
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة البراغيث | إبادة فورية بضمان مصر سيرفيس",
  description: "تخلص من البراغيث المزعجة نهائياً مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة البراغيث. نستخدم أحدث الأمصال الألمانية الآمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة البراغيث",
    "رقم الشركة الألمانية لإبادة البراغيث",
    "مصر سيرفيس",
    "إبادة البراغيث",
    "شركة مكافحة البراغيث",
    "التخلص من البراغيث",
    "مصر الألمانية الأصلية",
  ],
};

export default function FleaControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/flea.jpg" /* صورة مخصصة لخدمة مكافحة البراغيث */
            alt="الشركة الألمانية لمكافحة البراغيث - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة البراغيث والحشرات الطفيلية
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة البراغيث <br />
              <span className="text-emerald-400">إبادة شاملة بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة البراغيث</strong>؟ شركة <strong>مصر سيرفيس</strong> توفر لك تدخلاً فورياً للقضاء على البراغيث من الجذور في جميع مراحلها باستخدام أمصال ألمانية آمنة وفعالة.
            </p>
            <CallButtons serviceName="معاينة إبادة البراغيث" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة براغيث في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع البراغيث في المنزل أو العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                البراغيث من الحشرات الطفيلية التي تتغذى على الدم، وتسبب لدغات مؤلمة وحكة شديدة قد تؤدي إلى التهابات جلدية مزعجة. تتميز بقدرتها الهائلة على القفز لمسافات طويلة والانتقال بسهولة من مكان لآخر.
              </p>
              <p>
                بمجرد دخولها للمكان، تتجمع داخل السجاد والأثاث وشقوق الأرضيات وتبدأ في التكاثر بسرعة. لذا، الحل الأمثل هو الاعتماد على <strong>الشركة الألمانية (مصر سيرفيس)</strong> التي تمتلك المبيدات الآمنة للقضاء التام عليها ومنع عودتها.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر وجود البراغيث
              </h3>
              <ul className="space-y-4">
                {[
                  "لدغات مؤلمة تسبب حكة شديدة قد تتطور إلى التهابات وجروح مفتوحة.",
                  "نقل الأمراض الطفيلية الخطيرة التي تؤثر على صحة الإنسان والحيوان معاً.",
                  "إصابة الحيوانات الأليفة (القطط والكلاب) بفقر الدم وتساقط الشعر.",
                  "انتشار سريع جداً يصعب السيطرة عليه بالوسائل المنزلية العادية.",
                  "أضرار نفسية تشمل الشعور المستمر بعدم الراحة والاشمئزاز من المكان.",
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
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <h4 className="font-bold text-slate-800">مناعة الأطوار (العذراء)</h4>
                <p className="text-sm text-slate-500 mt-2">بعض مراحل نموها مقاومة جداً للمبيدات العادية، مما يفشل المكافحة التقليدية.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faPaw} />
                </div>
                <h4 className="font-bold text-slate-800">التكاثر السريع</h4>
                <p className="text-sm text-slate-500 mt-2">تضع الأنثى مئات البيوض التي تنتشر في السجاد وتفقس لأجيال جديدة بسرعة.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من البراغيث بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يُعد التخلص من البراغيث معقداً بسبب دورة حياتها المتعددة المراحل (بيض، يرقات، عذارى، حشرة بالغة). كما يمكنها البقاء لفترات طويلة جداً دون تغذية، منتظرة أي عائل يمر بالقرب منها.
              </p>
              <p>
                أي إهمال أو استخدام مبيدات ضعيفة سيجعل المشكلة تعود مجدداً وبشكل أشرس. لذلك، الاعتماد على <strong>الشركة الألمانية لإبادة البراغيث (مصر سيرفيس)</strong> يضمن استخدام مبيدات تقطع دورة الحياة بالكامل.
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
                كيف تقضي الشركة الألمانية على البراغيث؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على البراغيث يحتاج إلى أساليب علمية حديثة ومبيدات تخترق أماكن اختبائها. إليك خطة عمل <strong>مصر سيرفيس</strong>:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الشامل لمناطق التكاثر",
                desc: "تحديد دقيق لأماكن انتشارها سواء في غرف النوم، السجاد، الأثاث، أو حول أماكن نوم الحيوانات الأليفة.",
              },
              {
                icon: faPumpMedical,
                title: "2. رش المبيدات الألمانية المركزة",
                desc: "استخدام مبيدات ألمانية عالية الجودة تقضي على الحشرة في جميع مراحل حياتها (البيض، اليرقة، الحشرة البالغة) بأمان تام.",
              },
              {
                icon: faVialCircleCheck,
                title: "3. التعقيم العميق والشامل",
                desc: "إجراء عملية تعقيم شاملة للمكان (المفروشات، الأسطح الخشبية، الزوايا المظلمة) لضمان عدم ترك أي أثر ضار أو رائحة مزعجة.",
              },
              {
                icon: faHouseCircleXmark,
                title: "4. تقديم التوجيهات الوقائية والضمان",
                desc: "إعطاء العميل ضمان لمدة 5 سنوات، مع إرشادات هامة كغسل أغطية الفراش بالماء الساخن لضمان عدم العودة.",
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
              الأسئلة الشائعة عن مكافحة البراغيث
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "كيف يمكنني التفرقة بين لدغات البراغيث ولدغات حشرات الفراش الأخرى؟",
              "كيف أعرف أن منزلي مصاب بالبراغيث وما هي العلامات الأولية؟",
              "هل المبيدات المستخدمة تؤثر على صحة قطتي أو كلبي الأليف في المنزل؟",
              "ما هي المدة اللازمة للشركة الألمانية للقضاء على البراغيث نهائياً؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة البراغيث" />
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