import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBed, 
  faTriangleExclamation, 
  faFireFlameCurved, 
  faMagnifyingGlassLocation, 
  faShieldHalved, 
  faVialCircleCheck,
  faBan
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة بق الفراش | إبادة بالحرارة - مصر سيرفيس",
  description: "تخلص من بق الفراش نهائياً مع مصر سيرفيس (الشركة الألمانية الأصلية). إبادة تامة بالتبخير الحراري والمبيدات الألمانية الآمنة بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة بق الفراش",
    "رقم الشركة الألمانية لإبادة البق",
    "مصر سيرفيس",
    "إبادة بق الفراش",
    "شركة مكافحة البق",
    "التخلص من البق",
    "مصر الألمانية الأصلية",
  ],
};

export default function BedbugControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image4.jpg" /* تأكد من توفر صورة مناسبة في هذا المسار */
            alt="الشركة الألمانية لمكافحة بق الفراش - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة بق الفراش والعتة
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة بق الفراش <br />
              <span className="text-emerald-400">إبادة تامة بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة البق</strong>؟ شركة <strong>مصر سيرفيس</strong> توفر لك الحل النهائي للقضاء على البق وبيضه باستخدام التكنولوجيا الحرارية والمبيدات الألمانية الآمنة.
            </p>
            <CallButtons serviceName="معاينة إبادة بق الفراش" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركة مكافحة بق في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع البق في المنزل أو الفندق؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يُعد بق الفراش من أكثر المشكلات إزعاجاً، فهو يختبئ في الفراش والأثاث ويخرج ليلاً ليتغذى على دم الإنسان، مسبباً حكة شديدة وأرقاً مستمراً.
              </p>
              <p>
                الاعتماد على الطرق المنزلية لا يجدي نفعاً لأن بيض البق يقاوم المبيدات العادية. هنا يأتي دور <strong>الشركة الألمانية (مصر سيرفيس)</strong>؛ فنحن نستخدم خطة معالجة متكاملة تقضي على الحشرة والبيض معاً في وقت قياسي وبأمان تام على المفروشات.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر انتشار بق الفراش
              </h3>
              <ul className="space-y-4">
                {[
                  "لدغات متكررة تسبب بقعاً حمراء متورمة وحكة شديدة.",
                  "التهابات جلدية وعدوى بكتيرية نتيجة الحك المتواصل.",
                  "أضرار نفسية بالغة تشمل الأرق، التوتر، وضعف التركيز.",
                  "الانتشار السريع في جميع الغرف وصعوبة السيطرة عليه.",
                  "الإحراج الشديد أمام الزوار وفي الفنادق والأماكن السياحية.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 font-medium">
                    <FontAwesomeIcon icon={faBan} className="text-red-500 mt-1" />
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
                <FontAwesomeIcon icon={faBed} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">اختباء ذكي ومقاومة عالية</h3>
              <p className="text-slate-600 leading-relaxed">
                يختبئ البق في أضيق الشقوق وأطراف المراتب وداخل المقابس الكهربائية. والأسوأ من ذلك أن بيوضه تقاوم المبيدات التجارية العادية، ويمكن للبق البالغ أن يعيش لأشهر طويلة دون أن يتغذى على الدم.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من البق بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                لا يرتبط انتشار البق بمستوى النظافة، بل ينتقل بسهولة عبر الملابس والأمتعة. التخلص منه يتطلب تدمير دورة حياته بالكامل (البيض والحشرة).
              </p>
              <p>
                لذلك، الاعتماد على <strong>الشركة الألمانية لإبادة بق الفراش (مصر سيرفيس)</strong> هو الحل الوحيد. نمتلك أجهزة التعقيم الحراري والمبيدات الألمانية القادرة على اختراق الأنسجة العميقة وتدمير البيض نهائياً.
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
                كيف تقضي الشركة الألمانية على البق؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على البق يتطلب دمجاً بين الكيمياء الحديثة والتقنيات الحرارية. إليك خطة <strong>مصر سيرفيس</strong> المعتمدة:
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الدقيق والشامل",
                desc: "تحديد أماكن الإصابة بدقة في المراتب، الأثاث، شقوق الجدران، وخلف اللوحات والسجاد لوضع خطة تشمل كل بؤر الانتشار.",
              },
              {
                icon: faFireFlameCurved,
                title: "2. أجهزة التعقيم الحراري",
                desc: "استخدام البخار والحرارة العالية لاختراق الأنسجة العميقة للمراتب والمفروشات، مما يضمن تدمير بيض البق الذي يقاوم الكيماويات.",
              },
              {
                icon: faVialCircleCheck,
                title: "3. الرش الجزيئي (ULV) بالأمصال الألمانية",
                desc: "تطبيق مبيدات ألمانية عالية الجودة تقضي على الحشرات البالغة المتخفية في الزوايا دون ترك آثار جانبية أو روائح مزعجة.",
              },
              {
                icon: faShieldHalved,
                title: "4. المتابعة الوقائية والضمان",
                desc: "إعطاء العميل ضماناً معتمداً لمدة 5 سنوات، مع نصائح للحفاظ على نظافة المكان وغسل المفروشات بالماء الساخن لمنع عودة الحشرة.",
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
              الأسئلة الشائعة عن مكافحة بق الفراش
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "ما هي أسباب ظهور البق في المنزل وهل يرتبط بقلة النظافة؟",
              "هل الغسيل العادي بالماء والصابون يقتل البق وبيضه؟",
              "كم تستغرق عملية القضاء على البق نهائياً بواسطة الشركة الألمانية؟",
              "هل الخدمة مناسبة للفنادق، الشقق المفروشة، ومناطق سكن العمال؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة بق الفراش" />
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