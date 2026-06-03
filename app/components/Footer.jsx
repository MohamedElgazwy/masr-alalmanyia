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
    <footer className="bg-slate-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-gray-700">

        {/* Column 1: Contact */}
        <div>
          <h3 className="text-lg font-bold text-blue-700 mb-4">
            تواصل معنا
          </h3>

          <p className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-green-600" />
            <span>201024193594</span>
          </p>

          <p className="flex items-center gap-3 mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
            <a
              href="mailto:nabdalhayaat123@gmail.com"
              className="hover:text-blue-700 transition"
            >
              nabdalhayaat123@gmail.com
            </a>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/NabdAlhayaat1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>

            <a
              href="https://www.instagram.com/nabdalhayaathomecare1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:opacity-80 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Column 2: Main Office */}
        <div>
          <h3 className="text-lg font-bold text-blue-700 mb-4">
            المكتب الرئيسي
          </h3>

          <p className="flex items-start gap-3 mb-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-green-600 mt-1"
            />
            <span>
              الدور السادس – 1 ميدان روكسي  
              <br />
              مصر الجديدة – القاهرة
            </span>
          </p>

          <a
            href="https://maps.app.goo.gl/eALsGgQtjssSBVpf7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            عرض الموقع على الخريطة
          </a>
        </div>

        {/* Column 3: Branches */}
        <div>
          <h3 className="text-lg font-bold text-blue-700 mb-4">
            الفروع
          </h3>

          <div className="mb-6">
            <p className="font-semibold mb-1">فرع مدينة نصر</p>
            <p className="text-sm leading-relaxed mb-2">
              1 مصطفى النحاس – تقاطع عباس العقاد  
              <br />
              الدور السابع شقة 16
            </p>

            <a
              href="https://maps.app.goo.gl/srFcdm4KPF7qhJPx8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline text-sm"
            >
              عرض على الخريطة
            </a>
          </div>

          <div>
            <p className="font-semibold mb-1">فرع التجمع الخامس</p>
            <p className="text-sm leading-relaxed mb-2">
              مكتب 208 – بلس مول  
              <br />
              المستثمرين الجنوبية – الدور الثاني
            </p>

            <a
              href="https://maps.app.goo.gl/3JtBLoVGRNN2czFk6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline text-sm"
            >
              عرض على الخريطة
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 border-t py-4">
        جميع الحقوق محفوظة © 2026 – Nabd Alhayaat للرعاية الصحية المنزلية
      </div>
    </footer>
  );
}
