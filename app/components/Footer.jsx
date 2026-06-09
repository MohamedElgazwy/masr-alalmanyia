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
import Link from "next/link";

export default function Footer() {
  // مصفوفة الخدمات مع المسارات الصحيحة لكل خدمة
  const services = [
    "إبادة الفئران",
    "إبادة الناموس",
    "إبادة النمل",
    "إبادة النحل",
    "إبادة الصراصير",
    "إبادة بق الفراش",
    "إبادة العقارب",
    "إبادة الإبراص",
    "إبادة البراغيث",
    "إبادة الثعابين",
    "إبادة السوس",
    "إبادة القراد",
    "إبادة السمكة الفضية",
  ];

  const serviceHref = (name) => {
    const map = {
      "إبادة النمل": "/services/ant-control",
      "إبادة بق الفراش": "/services/bedbug-control",
      "إبادة النحل": "/services/bee-control",
      "إبادة الصراصير": "/services/cockroach-control",
      "إبادة البراغيث": "/services/flea-control",
      "إبادة الإبراص": "/services/gecko-control",
      "إبادة الفئران": "/services/rodent-control",
      "إبادة الناموس": "/services/mosquito-control",
      "إبادة العقارب": "/services/scorpion-control",
      "إبادة الثعابين": "/services/snake-control",
      "إبادة السوس": "/services/weevil-control",
      "إبادة القراد": "/services/tick-control",
      "إبادة السمكة الفضية": "/services/silverfish-control",
    };
    return map[name] || "/services";
  };

  return (
    // تم تعديل الخلفية لتصبح فاتحة ومطابقة للّون العشبي الهادئ الموضح في الصورة
    <footer className="bg-[#e2edd3] text-slate-800 pt-16 pb-8 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start text-right">
        
        {/* العمود الأول: روابط سريعة */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-400/30 pb-2">روابط سريعة</h3>
          <ul className="space-y-4 text-base font-bold">
            {[
              { label: "الرئيسية", href: "/" },
              { label: "من نحن", href: "/about" },
              { label: "خدماتنا", href: "/services" },
              { label: "مقالات أفضل خبراء اباده الحشرات", href: "/articles" },
              { label: "اتصل بنا", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 block ${
                    link.label === "خدماتنا" ? "text-emerald-600 font-extrabold" : "hover:text-emerald-700 text-slate-750"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثاني: خدمات سنوفا (قائمة الخدمات الطويلة) */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-400/30 pb-2">خدمات سنوفا</h3>
          <ul className="space-y-3 text-base font-bold">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href={serviceHref(service)}
                  className={`transition-colors duration-200 block ${
                    service === "إبادة الإبراص" ? "text-emerald-600 font-extrabold" : "hover:text-emerald-700 text-slate-700"
                  }`}
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: العناوين وأزرار الأرقام الخضراء المحسنة */}
        <div className="space-y-8">
          {/* فرع 1 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">العنوان 1 :</h3>
            <p className="text-slate-700 font-medium leading-relaxed">
              22 شارع جامعه الدول العربيه - المهندسين - الجيزة
            </p>
          </div>

          {/* فرع 2 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">العنوان 2 :</h3>
            <p className="text-slate-700 font-medium leading-relaxed">
              103 شارع الحجاز - مصر الجديده
            </p>
          </div>

          {/* أزرار الاتصال والواتساب المطابقة تماماً للصورة */}
          <div className="flex flex-col gap-3 max-w-xs pt-2">
            <a 
              href="tel:01111104638" 
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-full shadow-sm transition dir-ltr"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span>01111104638</span>
            </a>

            <a 
              href="tel:01111104638" 
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-full shadow-sm transition dir-ltr"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span>01111104638</span>
            </a>

          <a
  href="https://wa.me/201111104638"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-full shadow-sm transition dir-ltr"
>
  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
  <span>01111104638</span>
</a>
          </div>

          {/* البريد الإلكتروني المنسق أسفل الأزرار */}
          <div className="pt-2">
            <a 
              href="mailto:misr-service@gmail.com" 
              className="text-slate-700 font-bold hover:text-emerald-700 transition underline tracking-wide text-sm block dir-ltr"
            >
              misr-service@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* شريط الحقوق السفلي المنسق */}
      <div className="text-center text-xs text-slate-500 border-t border-slate-300/60 pt-6 mt-8">
        جميع الحقوق محفوظة © {new Date().getFullYear()} – شركة مصر سيرفيس لإبادة الحشرات والقوارض
      </div>
    </footer>
  );
}