import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faLocationDot, 
  faPhone, 
  faClock 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faInstagram, 
  faWhatsapp,
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-emerald-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-bold text-emerald-400 mb-6">مصر سيرفيس</h3>
          <p className="text-sm leading-relaxed mb-6">
            الشركة الألمانية الأصلية لإبادة الحشرات والقوارض في مصر. خبرة 25 عاماً في تقديم حلول إبادة آمنة وفعالة مع ضمان 5 سنوات.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">روابط سريعة</h3>
          <ul className="space-y-3 text-sm">
            {["الرئيسية", "من نحن", "الخدمات", "المقالات", "اتصل بنا"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-emerald-400 transition flex items-center gap-2">
                  <span className="text-emerald-700">▶</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">اتصل بنا</h3>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-emerald-500" />
              <span className="dir-ltr">01111104638</span>
            </p>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-500" />
              <span className="dir-ltr">01111104638</span>
            </p>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-emerald-500" />
              sales@misrservice.com
            </p>
            <p className="flex items-center gap-3">
              <FontAwesomeIcon icon={faClock} className="text-emerald-500" />
              خدمة 24 ساعة طوال الأسبوع
            </p>
          </div>
        </div>

        {/* Column 4: Addresses */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">فروعنا</h3>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-emerald-500 mt-1" />
              22 شارع جامعة الدول العربية - المهندسين - الجيزة
            </p>
            <p className="flex items-start gap-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-emerald-500 mt-1" />
              103 شارع الحجاز - مصر الجديدة - القاهرة
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-slate-500 border-t border-slate-900 pt-6">
        جميع الحقوق محفوظة © {new Date().getFullYear()} – شركة مصر سيرفيس (مصر الألمانية) لإبادة الحشرات والقوارض
      </div>
    </footer>
  );
}