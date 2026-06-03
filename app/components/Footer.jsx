import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-emerald-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-slate-300">

        {/* Column 1: Contact */}
        <div>
          <h3 className="text-lg font-bold text-emerald-400 mb-4">
            تواصل معنا للرش والفحص
          </h3>

          <p className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-amber-500" />
            <span className="dir-ltr">+01111104638</span>
          </p>

          <p className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-emerald-500" />
            <a
              href="mailto:misralalmanyia@gmail.com"
              className="hover:text-white transition"
            >
              misralalmanyia@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Column 2: Main Office */}
        <div>
          <h3 className="text-lg font-bold text-emerald-400 mb-4">
            المقر الرئيسي
          </h3>

          <p className="flex items-start gap-3 mb-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-amber-500 mt-1"
            />
            <span>
              الدور السادس – 1 ميدان روكسي  
              <br />
              مصر الجديدة – القاهرة
            </span>
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-white text-sm transition underline underline-offset-4"
          >
            عرض الموقع على الخريطة
          </a>
        </div>

        {/* Column 3: Branches */}
        <div>
          <h3 className="text-lg font-bold text-emerald-400 mb-4">
            الفروع ومراكز الانطلاق
          </h3>

          <div className="mb-6">
            <p className="font-semibold text-emerald-100 mb-1">فرع مدينة نصر</p>
            <p className="text-sm leading-relaxed mb-2 text-slate-400">
              1 مصطفى النحاس – تقاطع عباس العقاد  
              <br />
              الدور السابع شقة 16
            </p>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 text-sm transition"
            >
              عرض على الخريطة
            </a>
          </div>

          <div>
            <p className="font-semibold text-emerald-100 mb-1">فرع التجمع الخامس</p>
            <p className="text-sm leading-relaxed mb-2 text-slate-400">
              مكتب 208 – بلس مول  
              <br />
              المستثمرين الجنوبية – الدور الثاني
            </p>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 text-sm transition"
            >
              عرض على الخريطة
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-slate-500 bg-slate-950 py-4">
        جميع الحقوق محفوظة © 2026 – مصر الألمانية لإبادة الحشرات ومكافحة الآفات
      </div>
    </footer>
  );
}