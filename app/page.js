import Image from "next/image";
import Link from "next/link";
import CallButtons from "./components/CallButtons";
import WhyChooseUs from "./components/WhyChooseUs";
import CounterNumbers from "./components/CounterNumbers";
import { servicesData } from "./data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faClock, faLeaf, faHouseCircleCheck, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "الشركة الألمانية لمكافحة الحشرات | مصر سيرفيس لإبادة الآفات",
  description: "مصر سيرفيس هي الشركة الألمانية الأصلية لمكافحة الحشرات في مصر. أفضل شركة إبادة حشرات وقوارض بضمان 5 سنوات وأمصال ألمانية آمنة 100%. اتصل برقم الشركة الألمانية الآن.",
  keywords: [
    "الشركة الألمانية لمكافحة الحشرات",
    "مصر الألمانية",
    "رقم الشركة الألمانية لإبادة الحشرات",
    "شركة مصر سيرفيس",
    "الشركة الألمانية الأصلية",
    "أفضل شركة مكافحة حشرات في مصر",
    "إبادة الصراصير",
    "مكافحة الفئران",
  ],
};

// بيانات شريط الثقة
const trustFeatures = [
  { id: 1, icon: faShieldHalved, title: "ضمان 5 سنوات", desc: "متابعات مجانية دورية" },
  { id: 2, icon: faHouseCircleCheck, title: "بدون مغادرة المكان", desc: "آمن تماماً على أسرتك" },
  { id: 3, icon: faLeaf, title: "أمصال ألمانية 100%", desc: "مصرحة من وزارة الصحة" },
  { id: 4, icon: faClock, title: "خدمة 24 ساعة", desc: "تغطية لجميع محافظات مصر" },
];

// بيانات آراء العملاء (Testimonials)
const testimonials = [
  {
    name: "دينا طارق",
    review: "الحمد لله شكرا جدا ليكم مش عارفة اقول اية انا اولادي كانو بيعانو من البق والله بس الحمد لله اني تعاملت معاكم لانكم فعلا شركة محترفة وخلصتوني من حشرات بق الفراش بفضل تقنيات مصر الألمانية.",
  },
  {
    name: "يوسف كامل",
    review: "بصراحه شركة مصر سيرفيس محترمة جدا وناس مهنيين فعلاً. شكرا على الخدمة الصادقة والنتائج المبهرة والأمصال الألمانية اللي جابت من الآخر بدون أي ريحة.",
  },
];

export default function Home() {
  const services = Object.entries(servicesData).slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* ================= HERO SECTION (SEO Optimized) ================= */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image1.jpg" 
            alt="الشركة الألمانية لمكافحة الحشرات مصر سيرفيس"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75" /> 
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center mt-12">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-amber-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm md:text-base mb-6 shadow-lg">
              الشركة الألمانية الأصلية | مصر سيرفيس
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              أفضل شركة لإبادة الحشرات في مصر <br />
              <span className="text-emerald-400">بتقنيات مصر الألمانية المعتمدة</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-medium">
              هل تبحث عن رقم الشركة الألمانية لإبادة الحشرات؟ "مصر سيرفيس" تقدم لك إبادة فورية وجذرية لجميع أنواع الآفات والصراصير والقوارض. نستخدم مبيدات ألمانية آمنة بدون رائحة وبدون مغادرة المنزل بضمان 5 سنوات.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CallButtons serviceName="طلب معاينة الشركة الألمانية" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-x-reverse divide-slate-100">
            {trustFeatures.map((feature) => (
              <div key={feature.id} className="text-center px-2">
                <div className="text-emerald-600 text-3xl mb-3 flex justify-center">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT US (SEO HEAVY SECTION) ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-amber-600 font-bold mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-500 rounded-full inline-block"></span>
              مصر سيرفيس - الشركة الألمانية
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              لماذا نعتبر الشركة الألمانية الأولى لإبادة الحشرات؟
            </h2>
            <div className="text-slate-600 text-lg mb-6 leading-relaxed space-y-4">
              <p>
                إذا كنت تبحث عن <strong>الشركة الألمانية لمكافحة الحشرات</strong> أو ترغب في الوصول إلى رقم الشركة الألمانية لإبادة الحشرات للحصول على خدمة سريعة وفعالة، فأنت في المكان الصحيح. نحن في <strong>مصر سيرفيس</strong> نقدم حلولًا متكاملة للتخلص من جميع أنواع الحشرات باستخدام أحدث التقنيات العالمية.
              </p>
              <p>
                نُعد في <strong>مصر الألمانية</strong> أفضل شركات مكافحة حشرات حيث نوفر خدمات احترافية تناسب المنازل والشركات. نعمل بخبرة تتجاوز 25 عاماً وفريق يضم أفضل الفنيين المدربين على استخدام أحدث المبيدات الألمانية الآمنة والمعتمدة من وزارة الصحة المصرية ومنظمة الصحة العالمية (WHO).
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "تغطية جميع أنحاء الجمهورية (القاهرة، الجيزة، الإسكندرية، وكل المحافظات).",
                "إبادة جذرية تضمن القضاء التام على الحشرات ومنع عودتها.",
                "القضاء على الحشرات والقوارض خلال دقائق معدودة بأمان تام.",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-800 font-semibold bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <span className="text-emerald-600 ml-3 text-lg">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <CallButtons serviceName="استشارة مجانية من مصر الألمانية" />
          </div>
          
          <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <Image
              src="/images/image2.jpg" 
              alt="خبراء مصر الألمانية لمكافحة الحشرات - مصر سيرفيس"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Badge overlay */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="text-emerald-700 text-4xl font-black">+25</div>
              <div className="text-sm font-bold text-slate-800 leading-tight">
                عام من الخبرة <br /> <span className="text-amber-600">في مصر الألمانية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h4 className="text-amber-600 font-bold mb-2">خدمات مصر الألمانية المعتمدة</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              تخلص من الحشرات نهائيًا بأحدث التقنيات
            </h2>
            <p className="text-slate-600 text-lg">
              تقدم <strong>مصر سيرفيس (الشركة الألمانية)</strong> مجموعة متكاملة من الخدمات المتخصصة التي تشمل إبادة الصراصير، النمل، بق الفراش، الفئران، والأبراص باستخدام أحدث الأجهزة.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(([slug, service]) => (
              <div
                key={slug}
                className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 transition-all duration-300 group"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`خدمات مصر الألمانية - ${service.title}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 right-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[44px] line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${slug}`}
                    className="flex items-center justify-between w-full bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white font-bold px-4 py-3 rounded-lg transition-colors"
                  >
                    <span>تفاصيل الإبادة</span>
                    <span className="text-lg">←</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-block bg-slate-900 hover:bg-emerald-800 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-xl text-lg"
            >
              عرض جميع خدمات مصر الألمانية
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (آراء العملاء) ================= */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-950 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-amber-500 font-bold mb-2">شهادات العملاء</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              آراء عملاء مصر الألمانية (مصر سيرفيس)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testi, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl relative">
                <FontAwesomeIcon icon={faQuoteRight} className="absolute top-6 left-6 text-4xl text-emerald-500/30" />
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[1,2,3,4,5].map(star => <FontAwesomeIcon key={star} icon={faStar} className="text-sm" />)}
                </div>
                <p className="text-emerald-50 text-lg leading-relaxed mb-6 italic">
                  "{testi.review}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testi.name}</h4>
                    <span className="text-sm text-emerald-300">عميل مصر سيرفيس</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COUNTERS & WHY CHOOSE US ================= */}
      <CounterNumbers />
      <WhyChooseUs />
      
    </main>
  );
}