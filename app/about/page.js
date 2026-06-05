import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faUserTie, faShieldVirus, faBroom, faTags, faMapLocationDot, faAward, faHeadset } from "@fortawesome/free-solid-svg-icons";
import CallButtons from "../components/CallButtons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "من نحن | مصر سيرفيس - الشركة الألمانية الأصلية لمكافحة الحشرات",
  description: "تعرف على مصر سيرفيس، الشركة الألمانية الأولى لإبادة الحشرات في مصر. نمتلك خبرة 25 عاماً وفريق متخصص لاستخدام أمصال ألمانية آمنة بضمان 5 سنوات.",
  keywords: [
    "من نحن الشركة الألمانية",
    "مصر سيرفيس",
    "الشركة الألمانية لمكافحة الحشرات",
    "تاريخ الشركة الألمانية لإبادة الحشرات",
    "أفضل شركة مكافحة حشرات في مصر",
    "مبيدات ألمانية آمنة",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      
      {/* ================= HERO SECTION (SEO Optimized) ================= */}
      <section className="bg-emerald-900 py-24 text-center border-b border-emerald-800 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block mb-4 text-sm font-bold text-emerald-900 bg-amber-500 px-4 py-1.5 rounded-full shadow-md">
            الشركة الألمانية الأصلية لإبادة الحشرات
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            عن مصر سيرفيس بيست كنترول
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            نحن في <strong>الشركة الألمانية (مصر سيرفيس)</strong> نضع على عاتقنا مسؤولية حماية أسرتك ومنشأتك من الآفات بخبرة تمتد لأكثر من 25 عاماً.
          </p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          {/* رؤيتنا ومهمتنا */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              شركة إبادة الحشرات: رؤيتنا ومهمتنا
            </h2>
            <p className="text-slate-600 leading-relaxed">
              لدينا مهمة لمساعدة الأشخاص والشركات والمنازل والمطاعم على البقاء في مأمن من الحشرات. تهدف <strong>الشركة الألمانية مصر سيرفيس</strong> إلى مساعدة العملاء وتأمينهم من الحشرات والزواحف باستخدام طرق بعيدة عن المبيدات الضارة بالصحة.
            </p>
          </div>

          {/* فريق متخصص */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              فريق متخصص وخبراء إبادة
            </h2>
            <p className="text-slate-600 leading-relaxed">
              بخبرة 25 سنة، نمتلك أفضل المهندسين المحترفين في مجال إبادة الحشرات. يضم فريق <strong>مصر الألمانية</strong> كيميائيين وفنيين ذوي دراية كاملة بخصائص كل أنواع المبيدات الحشرية لضمان فعالية الإبادة.
            </p>
          </div>

          {/* مبيدات آمنة */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
              <FontAwesomeIcon icon={faShieldVirus} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              مبيدات ألمانية آمنة 100%
            </h2>
            <p className="text-slate-600 leading-relaxed">
              جميع المواد التي نستخدمها ألمانية الصنع ومعتمدة من وزارة الصحة المصرية ومنظمة الصحة العالمية (WHO). وهي غير سامة للبشر والحيوانات الأليفة وآمنة تماماً على البيئة.
            </p>
          </div>

          {/* تنظيف فوري وجودة */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
              <FontAwesomeIcon icon={faBroom} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              تنظيف فوري وجودة مستدامة
            </h2>
            <p className="text-slate-600 leading-relaxed">
              إبادة جميع أنواع الحشرات والقوارض نهائياً بأحدث الأساليب العلمية المتبعة. ولا تكتفي <strong>الشركة الألمانية مصر سيرفيس</strong> بالتخلص من الحشرات فقط، بل تقدم نصائح للوقاية من عودتها، لتوفير حماية وراحة بال طويلة الأمد.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SANOVA (MISR SERVICE) ================= */}
      <section className="py-20 bg-emerald-50/60 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h4 className="text-amber-600 font-bold mb-2">مميزاتنا التنافسية</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
              الشركة الألمانية لمكافحة الحشرات: لماذا تختار مصر سيرفيس؟
            </h2>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white text-emerald-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md border border-emerald-50">
                <FontAwesomeIcon icon={faTags} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">أسعار مناسبة لجميع الاحتياجات</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                أفضل الأسعار التنافسية في السوق المصري. هدفنا بيئة خالية من الحشرات ولذلك نقدم للعملاء شهادة ضمان 5 سنوات بعدم ظهور الحشرات، لأننا أفضل شركة مكافحة حشرات في مصر.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white text-emerald-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md border border-emerald-50">
                <FontAwesomeIcon icon={faShieldVirus} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">الجودة والأمان</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                يتم القضاء على جميع الحشرات والقوارض خلال دقائق معدودة مع اتباع إجراءات السلامة الصارمة. نقدم المبيدات الألمانية عالية الجودة الآمنة تماماً على الصحة.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white text-emerald-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md border border-emerald-50">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">تغطية جميع أنحاء الجمهورية</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                لدينا فروع ومندوبون في جميع أنحاء مصر، بما في ذلك القاهرة، الجيزة، الإسكندرية، والبحر الأحمر. خدمات <strong>مصر الألمانية</strong> تغطي كافة المحافظات (صعيد، وجه بحري وقبلي).
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white text-emerald-700 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md border border-emerald-50">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">أكثر من 25 عام من الخبرة</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                نملك فريقاً مبدعاً وعلى قدر لا مثيل له من الاحتراف والتميز. 25 سنة من الكفاءة والخبرة بأفضل المهندسين المحترفين في مجال الإبادة المتكاملة.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <CallButtons serviceName="استفسار عن خدمات الشركة الألمانية" />
          </div>
        </div>
      </section>

      {/* ================= SUCCESS PARTNERS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-amber-600 font-bold mb-2">ثقة متبادلة</h4>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            شركاء النجاح
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
            الكثير من الأشخاص والمؤسسات الكبرى يثقون في <strong>الشركة الألمانية مصر سيرفيس</strong> ونعتز بشراكتنا وعملنا معهم لتأمين منشآتهم.
          </p>

          {/* Customer Service Note */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-right">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-3xl shrink-0">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">دعم فني متواصل</h3>
                <p className="text-slate-300 text-sm">
                  فريق خدمة العملاء المتخصص لدينا موجود دائمًا لتقديم المساعدة السريعة والمفيدة لأي أسئلة أو مخاوف قد تكون لديك.
                </p>
              </div>
            </div>
            <Link 
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3 rounded-lg transition shrink-0 whitespace-nowrap"
            >
              تواصل مع الدعم الفني
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}