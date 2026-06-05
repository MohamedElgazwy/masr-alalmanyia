import Image from "next/image";
import CallButtons from "../../components/CallButtons";
import Reveal from "../../components/Reveal";
import WhyChooseUs from "../../components/WhyChooseUs";
import CounterNumbers from "../../components/CounterNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBug, 
  faTriangleExclamation, 
  faShieldHalved, 
  faVialVirus, 
  faHouseCircleXmark, 
  faMagnifyingGlassLocation,
  faPumpMedical,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الصراصير | إبادة فورية بضمان مصر سيرفيس",
  description: "تخلص من الصراصير نهائياً مع مصر سيرفيس، الشركة الألمانية الأصلية لإبادة الصراصير. نستخدم الجل الألماني وأحدث تقنيات الرش الآمن بضمان 5 سنوات.",
  keywords: [
    "الشركة الألمانية لمكافحة الصراصير",
    "رقم الشركة الألمانية لإبادة الصراصير",
    "مصر سيرفيس",
    "إبادة الصراصير",
    "شركة مكافحة الصراصير",
    "شركات رش الصراصير",
    "مصر الألمانية الأصلية",
  ],
};

export default function CockroachControlPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image3.jpg" /* تأكد من توفر صورة مناسبة في هذا المسار */
            alt="الشركة الألمانية لمكافحة الصراصير - مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" /> 
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          <Reveal>
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
              خدمة إبادة الصراصير المنزلية والأمريكية والألمانية
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              الشركة الألمانية لمكافحة الصراصير <br />
              <span className="text-emerald-400">إبادة جذرية بضمان مصر سيرفيس</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              هل تبحث عن <strong>رقم الشركة الألمانية لإبادة الصراصير</strong>؟ شركة <strong>مصر سيرفيس</strong> تضع بين يديك حلولاً متكاملة للقضاء على الصراصير بدون مغادرة المنزل وبدون رائحة باستخدام أقوى الأمصال الألمانية.
            </p>
            <CallButtons serviceName="معاينة إبادة الصراصير" />
          </Reveal>
        </div>
      </section>

      {/* ================= INTRODUCTION & RISKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h4 className="text-amber-600 font-bold mb-2">أفضل شركات رش الصراصير في مصر</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              هل تواجه مشكلة مع الصراصير في المنزل أو العمل؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                تُعد الصراصير من أكثر أنواع الحشرات التي تسبب القلق والإزعاج، فهي تنتشر بسرعة كبيرة وتتكاثر في أماكن يصعب الوصول إليها كخلف الثلاجات وتحت الأحواض، مما يجعل التخلص منها بالطرق التقليدية أمراً مستحيلاً.
              </p>
              <p>
                تحرص <strong>الشركة الألمانية لمكافحة الصراصير (مصر سيرفيس)</strong> على تقديم حلول فعالة وآمنة للقضاء على الصراصير نهائياً. نعتمد على مبيدات ألمانية الصنع معتمدة من وزارة الصحة، لا تسبب أي أضرار على صحة أسرتك والحيوانات الأليفة.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-inner">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                مخاطر انتشار الصراصير
              </h3>
              <ul className="space-y-4">
                {[
                  "نقل البكتيريا والفيروسات المسببة لأمراض خطيرة كالتسمم الغذائي والإسهال.",
                  "تلوث الأطعمة المكشوفة وأدوات الطهي أثناء مرورها عليها ليلاً.",
                  "فضلاتها وبقايا جلودها تسبب الحساسية والربو خاصة لدى الأطفال.",
                  "إفراز روائح كريهة تلتصق بالأثاث والملابس وتؤثر على جودة الهواء.",
                  "الإضرار بسمعة المطاعم والفنادق والتسبب في أعطال للأجهزة الكهربائية.",
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-6">
                <FontAwesomeIcon icon={faBug} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">التكاثر والمناعة القوية</h3>
              <p className="text-slate-600 leading-relaxed">
                تضع أنثى الصرصور مئات البيض خلال فترة قصيرة. وتتميز الصراصير بقدرتها على البقاء لفترات طويلة دون طعام أو ماء، كما طورت مناعة قوية ضد المبيدات التجارية العادية، مما يجعل الحلول المنزلية غير مجدية.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="text-amber-600 font-bold mb-2">تحديات الإبادة</h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              لماذا يصعب التخلص من الصراصير بمفردك؟
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                يُعتبر التخلص من الصراصير تحدياً كبيراً لأنها تختبئ داخل الجدران، وخلف الأثاث، وفي شبكات الصرف الصحي، مما يجعل الوصول للمستعمرة العميقة أمراً معقداً.
              </p>
              <p>
                لهذه الأسباب، التدخل المهني من <strong>الشركة الألمانية مصر سيرفيس</strong> هو الحل الوحيد. نحن نستخدم تقنية "الجل الطعمي" والرش الموجه الذي يقضي على المستعمرة بالكامل من الداخل.
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
                كيف تقضي الشركة الألمانية على الصراصير؟
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
                القضاء على الصراصير يحتاج إلى خبرة علمية ومهارة ميدانية. تعتمد <strong>مصر سيرفيس</strong> على أحدث التقنيات الألمانية لضمان بيئة نظيفة ومريحة.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              {
                icon: faMagnifyingGlassLocation,
                title: "1. الفحص الميداني الدقيق",
                desc: "تحديد بؤر الإصابة والمسارات التي تسلكها الصراصير خلف الأجهزة وداخل الشقوق وأنابيب الصرف لوضع خطة مكافحة مخصصة.",
              },
              {
                icon: faPumpMedical,
                title: "2. أجهزة الرش وأنظمة الضباب",
                desc: "استخدام أجهزة رش متطورة تضمن وصول المادة الفعالة إلى أعمق الأماكن التي يصعب الوصول إليها بالطرق التقليدية.",
              },
              {
                icon: faUtensils,
                title: "3. تقنية الجل الطُعمي (Gel Bait)",
                desc: "تطبيق جل ألماني مخصص في نقاط استراتيجية داخل المطابخ لضمان القضاء على المستعمرة بأكملها بطريقة العدوى، دون إزالة الأواني.",
              },
              {
                icon: faHouseCircleXmark,
                title: "4. المتابعة الوقائية والضمان",
                desc: "إصدار ضمان لمدة 5 سنوات مع تقديم زيارات متابعة دورية للتأكد من عدم عودة الصراصير، وإرشاد العميل لطرق سد الفتحات.",
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
              الأسئلة الشائعة عن مكافحة الصراصير
            </h2>
          </Reveal>
          
          <div className="text-right space-y-4">
            {[
              "هل يترك الرش أي روائح كريهة في المنزل أو المطعم؟",
              "هل أحتاج لمغادرة المنزل أو إفراغ خزائن المطبخ قبل عملية المكافحة؟",
              "هل المبيدات والأمصال الألمانية المستخدمة آمنة على الأطفال والحيوانات؟",
              "ما هي المدة التي يستغرقها الجل للقضاء على المستعمرة بالكامل؟",
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
              <CallButtons serviceName="طلب إجابات ومعاينة لمكافحة الصراصير" />
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