import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMosquito, // يتطلب استيراد أيقونة مناسبة، استخدمنا بدائل قوية من solid
  faBug,
  faDroplet, 
  faShieldHeart, 
  faWind, 
  faVialCircleCheck,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الناموس | إبادة البعوض بضمان مصر سيرفيس",
  description: "تخلص من الناموس والبعوض نهائياً مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة الحشرات الطائرة. نستخدم أجهزة الضباب الحراري وأمصال ألمانية آمنة 100%.",
  keywords: [
    "الشركة الألمانية لمكافحة الناموس",
    "رقم الشركة الألمانية لإبادة الناموس",
    "مصر سيرفيس",
    "إبادة الناموس",
    "شركة مكافحة البعوض",
    "التخلص من الناموس",
    "مصر الألمانية الأصلية",
  ],
};

export default function MosquitoControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mosq.jpg" /* صورة مخصصة لخدمة مكافحة الناموس */
            alt="الشركة الألمانية لمكافحة الناموس - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة الناموس والبعوض
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة الناموس <br />
              <span className="text-emerald-400">إبادة فورية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لمكافحة الناموس</strong>؟ نحن نقدم لك الحل الجذري للتخلص من الحشرات الطائرة باستخدام أجهزة الضباب وأمصال ألمانية آمنة تماماً على صحة أسرتك.
            </p>
            <CallButtons serviceName="معاينة إبادة الناموس" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">مصر الألمانية لإبادة الحشرات الطائرة</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع الناموس في المنزل أو مكان العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                انتشار الناموس يُعد من أكثر المشكلات إزعاجاً، فهو لا يسبب القلق بلسعاته وصوته المستمر فحسب، بل يمثل خطراً صحياً حقيقياً بصفته ناقلاً رئيسياً للأمراض الخطيرة.
              </p>
              <p>
                إذا كنت تعاني من هذه المشكلة، فالحل مع <strong>شركة مصر سيرفيس (الشركة الألمانية)</strong>. نقدم خدمة متخصصة في مكافحة الناموس باستخدام مبيدات ألمانية عالية الجودة تقضي على الحشرات في جميع مراحل نموها، وتصل إلى أماكن اختبائها وتوالدها بدقة متناهية.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleExclamation} className="text-red-600" />
                مخاطر وجود الناموس
              </h3>
              <ul className="space-y-4">
                {[
                  "نقل أمراض خطيرة ومميتة مثل (الملاريا، حمى الضنك، وفيروس زيكا).",
                  "التسبب في حساسية والتهابات جلدية مزعجة للأطفال وكبار السن.",
                  "إفساد جودة الحياة ومنع الاستمتاع بنوم هادئ وبيئة مريحة.",
                  "سرعة التكاثر المهولة في المياه الراكدة وأماكن التخزين الرطبة.",
                ].map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
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
                <h4 className="font-bold text-slate-800">يتكاثر في المياه</h4>
                <p className="text-sm text-slate-500 mt-2">يحتاج لكميات مياه قليلة جداً لتكوين يرقاته.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 text-center mt-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  <FontAwesomeIcon icon={faWind} />
                </div>
                <h4 className="font-bold text-slate-800">سريع الطيران والانتشار</h4>
                <p className="text-sm text-slate-500 mt-2">يدخل بسهولة من النوافذ والفتحات الصغيرة.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات المكافحة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من الناموس بالطرق العادية؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                قد يبدو القضاء على الناموس بسيطاً، لكن سرعة دورة حياته تجعل اليرقة تتحول لحشرة بالغة خلال أيام. البخور والأجهزة المنزلية توفر حماية مؤقتة فقط وتطرد الناموس دون القضاء عليه من الجذور.
              </p>
              <p>
                كما أن بعض الأنواع طورت مقاومة ضد المبيدات التجارية العشوائية. لذلك، الحل الأمثل هو الاعتماد على <strong>الشركة الألمانية المعتمدة (مصر سيرفيس)</strong> التي تمتلك تقنيات الضباب الحراري وأمصال مخصصة لقطع دورة التكاثر بالكامل.
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
                كيفية القضاء على الناموس نهائياً
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                تعتمد <strong>مصر سيرفيس</strong> على أحدث الأساليب العلمية والمبيدات الألمانية الآمنة لتحقيق نتائج فعالة ودائمة.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                title: "المعاينة وتحديد بؤر التوالد",
                desc: "تحديد مصادر المياه الراكدة وأحواض النباتات والمناطق الرطبة التي يعتمد عليها الناموس لوضع بيضه.",
              },
              {
                title: "تقنية الضباب الحراري والرذاذ",
                desc: "استخدام أجهزة حديثة توزع المبيد الألماني في جميع أرجاء المكان، ليقضي على الحشرات البالغة واليرقات معاً.",
              },
              {
                title: "تأمين بيئي ومبيدات آمنة",
                desc: "تطبيق خطة مكافحة لا تترك أي روائح أو تأثير ضار على صحة أسرتك والحيوانات الأليفة والنباتات.",
              },
              {
                title: "نصائح وقائية ومتابعة دورية",
                desc: "يقدم خبراؤنا استشارات وقائية لتغطية الخزانات وتجفيف المناور، مع ضمان متابعة للتأكد من عدم عودة الناموس.",
              },
            ].map((step, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-emerald-800/50 p-6 rounded-xl border border-emerald-700/50 flex gap-4 backdrop-blur-sm">
                  <div className="text-amber-400 text-2xl mt-1">
                    <FontAwesomeIcon icon={faVialCircleCheck} />
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
              الأسئلة الشائعة عن مكافحة الناموس
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "ما هي الأسباب الرئيسية لانتشار الناموس في الفلل والمنازل؟",
              "ما هو أفضل وقت لإجراء عمليات الرش والضباب الحراري؟",
              "هل تقنية الضباب الحراري آمنة على الأشجار والحدائق؟",
              "هل تقدم الشركة الألمانية خدمات رش دورية خارجية (للكومباوندات والمصانع)؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة الناموس" />
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