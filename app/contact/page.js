import Link from "next/link";
import CallButtons from "../components/CallButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faClock, 
  faPaperPlane, 
  faHeadset 
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// ================= METADATA FOR SEO =================
export const metadata = {
  title: "رقم الشركة الألمانية لمكافحة الحشرات | اتصل بـ مصر سيرفيس",
  description: "تواصل مع مصر سيرفيس (الشركة الألمانية الأصلية لإبادة الحشرات). أرقام خدمة العملاء، العناوين، وحجز معاينة فورية لجميع المحافظات. خدمة 24 ساعة.",
  keywords: [
    "رقم الشركة الألمانية لمكافحة الحشرات",
    "اتصل بنا الشركة الألمانية",
    "رقم شركة مصر سيرفيس",
    "تواصل مع خبراء الإبادة",
    "أرقام شركات إبادة الحشرات",
    "مصر الألمانية الأصلية",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      
      {/* ================= HERO SECTION (SEO Optimized) ================= */}
      <section className="bg-emerald-900 py-24 text-center border-b border-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="inline-block mb-4 text-sm font-bold text-emerald-900 bg-amber-500 px-5 py-2 rounded-full shadow-md">
            تواصل مع الشركة الألمانية الأصلية
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            اتصل بـ مصر سيرفيس الآن
          </h1>
          <p className="text-emerald-50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            هل تبحث عن <strong>رقم الشركة الألمانية لإبادة الحشرات</strong>؟ فريق خدمة عملاء <strong>مصر الألمانية</strong> جاهز للرد على استفساراتك وتحديد موعد للزيارة الفورية. سلامتك وسلامة أسرتك هي مسؤوليتنا الأولى.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phone Numbers */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">أرقام التواصل</h3>
              <div className="space-y-2 text-slate-600 font-bold dir-ltr">
                <a href="tel:01035095011" className="block hover:text-emerald-700 transition">010 3509 5011</a>
                <a href="tel:01035099013" className="block hover:text-emerald-700 transition">010 3509 9013</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">خدمة واتساب</h3>
              <div className="space-y-2 text-slate-600 font-bold dir-ltr">
                <a href="https://wa.me/201108526070" target="_blank" rel="noopener noreferrer" className="block hover:text-green-600 transition">
                  011 0852 6070
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-3">متاح استقبال الصور والاستفسارات</p>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">البريد الإلكتروني</h3>
              <a href="mailto:sales@sunova-pestcontrol.com" className="text-slate-600 font-medium hover:text-amber-600 transition break-words">
                sales@sunova-pestcontrol.com
              </a>
              <p className="text-sm text-slate-500 mt-3">لطلبات الشركات والمصانع</p>
            </div>

            {/* Working Hours */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">ساعات العمل</h3>
              <p className="text-slate-600 font-bold text-lg">
                خدمة 24 ساعة
              </p>
              <p className="text-sm text-slate-500 mt-2">طوال أيام الأسبوع (حتى في العطلات الرسمية)</p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ADDRESSES & QUICK FORM ================= */}
      <section className="py-20 bg-emerald-50/60 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          
          {/* Addresses */}
          <div>
            <h4 className="text-amber-600 font-bold mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} /> فروع مصر الألمانية
            </h4>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              مقرات الشركة الرئيسية
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="text-emerald-600 text-2xl mt-1">⚑</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">فرع الجيزة (المهندسين)</h3>
                  <p className="text-slate-600">22 شارع جامعة الدول العربية - المهندسين - الجيزة.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="text-emerald-600 text-2xl mt-1">⚑</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">فرع القاهرة (مصر الجديدة)</h3>
                  <p className="text-slate-600">103 شارع الحجاز - مصر الجديدة.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-900 p-6 rounded-xl text-white flex items-center gap-4">
              <div className="text-amber-500 text-3xl">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                لا تتردد في الاتصال بنا. مندوبو <strong>الشركة الألمانية مصر سيرفيس</strong> متواجدون في كافة المحافظات للوصول إليك في أسرع وقت.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-emerald-800 mb-2">أرسل لنا رقمك لنتصل بك</h3>
              <p className="text-slate-500 text-sm">سيقوم أحد خبراء الدعم الفني بالاتصال بك فوراً لمعرفة تفاصيل المشكلة.</p>
            </div>

            {/* تم إزالة onSubmit من الـ form لتفادي الخطأ */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الكريم</label>
                <input 
                  type="text" 
                  placeholder="اكتب اسمك هنا..." 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">رقم الهاتف</label>
                <input 
                  type="tel" 
                  placeholder="رقم الموبايل للتواصل..." 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-right dir-ltr"
                />
              </div>

              <button 
                type="button"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-lg py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>طلب اتصال مجاني</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}