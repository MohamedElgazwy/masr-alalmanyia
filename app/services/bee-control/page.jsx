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
  faPumpMedical
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة النحل | إزالة الخلايا بضمان مصر سيرفيس",
  description: "تخلص من خلايا النحل بأمان مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة النحل. نستخدم أحدث التقنيات والمعدات الوقائية لضمان إزالة آمنة بدون فوضى.",
  keywords: [
    "الشركة الألمانية لمكافحة النحل",
    "رقم الألمانية لإبادة النحل",
    "مصر سيرفيس",
    "إبادة النحل",
    "شركة مكافحة النحل",
    "شركات التخلص من النحل",
    "مصر الألمانية الأصلية",
  ],
};

export default function BeeControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bee.jpg" /* صورة مخصصة لخدمة مكافحة النحل */
            alt="الشركة الألمانية لمكافحة النحل - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إزالة وإبادة خلايا النحل
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة النحل <br />
              <span className="text-emerald-400">إزالة آمنة بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة النحل</strong>؟ توفر <strong>مصر الألمانية</strong> تدخلاً فورياً وآمناً على مدار 24 ساعة للتعامل مع خلايا النحل بحرفية عالية وبدون إحداث أي فوضى في المكان.
            </p>
            <CallButtons serviceName="معاينة إبادة النحل" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة نحل في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع خلية نحل بالقرب من منزلك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                وجود خلايا النحل بالقرب من البشر قد يبدو أمرًا بسيطًا في البداية، لكنه قد يتحول إلى مصدر إزعاج وخطر حقيقي، خصوصاً عندما يبدأ ببناء خلاياه في الأسقف، الجدران، أو الحدائق.
              </p>
              <p>
                التعامل مع النحل يحتاج إلى مختصين. في <strong>مصر سيرفيس (الشركة الألمانية)</strong>، نستخدم أساليب آمنة ومعتمدة لإزالة خلايا النحل دون الإضرار بالبيئة المحيطة أو التسبب في أذى للمتواجدين، معتمدين على أحدث المعدات والمبيدات الألمانية.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 shadow-inner">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-600" />
                مخاطر وجود النحل
              </h3>
              <ul className="space-y-4">
                {[
                  "التعرض للسعات خطيرة قد تكون مميتة لمن يعانون من حساسية مفرطة.",
                  "أضرار هيكلية نتيجة تراكم الشمع والعسل داخل الجدران والأسقف.",
                  "جذب أنواع أخرى من الحشرات مثل النمل والصراصير لبقايا العسل.",
                  "حالة الذعر والخوف المستمر للأطفال وكبار السن.",
                  "مخاطر الهجوم الجماعي إذا تم استفزاز الخلية بطرق عشوائية.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faBug} className="text-amber-500 mt-1" />
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
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">النظام الدفاعي المعقد</h3>
              <p className="text-slate-600 leading-relaxed">
                النحل لا يعيش بشكل فردي، بل في مستعمرات ضخمة لها نظام دفاعي قوي يحمي الملكة. عندما يشعر النحل بالخطر، يصبح عدوانياً ويهاجم بشكل جماعي، مما يجعل التعامل معه بطرق عشوائية أمراً في غاية الخطورة.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">لماذا تحتاج للخبراء؟</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من النحل بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                غالبًا ما يبني النحل خلاياه في أماكن يصعب الوصول إليها. استخدام مبيدات غير مناسبة يؤدي إلى تفريق النحل مؤقتاً ليعود لاحقاً لبناء خلية جديدة.
              </p>
              <p>
                يُنصح دائماً بالاعتماد على <strong>الشركة الألمانية المتخصصة (مصر سيرفيس)</strong>. نحن نمتلك البدلات الواقية، المعدات المتطورة، والأمصال الألمانية التي تضمن تهدئة النحل وإزالته بفاعلية وأمان.
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
                كيف تقضي الشركة الألمانية على النحل؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على النحل يحتاج إلى خبرة دقيقة تضمن إزالة الخطر دون الإضرار بالبيئة. هكذا يعمل فريق <strong>مصر سيرفيس</strong>:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. فحص وتحديد موقع الخلية",
                desc: "تحديد الموقع الدقيق سواء داخل الجدران أو الأسقف أو بين الأشجار لضمان الوصول الآمن للخلية.",
              },
              {
                icon: faShieldHalved,
                title: "2. ارتداء البدلات الواقية",
                desc: "استخدام أدوات الحماية الشخصية الكاملة لفريق مصر الألمانية لمنع أي أخطار أو لسعات محتملة.",
              },
              {
                icon: faPumpMedical,
                title: "3. استخدام تقنيات وأمصال ألمانية",
                desc: "رش مبيدات معتمدة دولياً تعمل على تهدئة النحل والقضاء عليه تدريجياً دون الإضرار بالأسطح المحيطة.",
              },
              {
                icon: faVialCircleCheck,
                title: "4. إزالة البقايا والتعقيم الكامل",
                desc: "إزالة بقايا الخلية والشمع بالكامل، ثم تعقيم المنطقة بمطهرات تمنع جذب أي حشرات أخرى أو نحل جديد.",
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
              الأسئلة الشائعة عن مكافحة النحل
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "كيف يمكنني التأكد من وجود خلية نحل مخفية داخل جدران المنزل؟",
              "هل من الآمن محاولة سد الفتحة التي يدخل منها النحل بنفسي؟",
              "هل ينجذب النحل للروائح العطرية أو الأطعمة المكشوفة بالمنزل؟",
              "هل تقدم الشركة الألمانية (مصر سيرفيس) خدمة طوارئ فورية لإزالة الخلايا الخطرة؟",
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
              <CallButtons serviceName="طلب إزالة خلية نحل فوراً" />
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