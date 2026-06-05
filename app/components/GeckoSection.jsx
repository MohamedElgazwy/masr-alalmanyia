"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

const textBlocks = [
  {
    title: "لماذا يصعب التخلص من الإبراص؟",
    content: "يُعد التخلص من الأبراص من المهام الصعبة التي تواجه الكثير من أصحاب المنازل والمنشآت، ويرجع ذلك إلى طبيعة هذه الكائنات وسلوكها الذي يجعلها من أكثر الزواحف قدرة على التكيف والاختباء. الأبراص تمتلك جسدًا مرنًا يسمح لها بالدخول إلى أضيق الفتحات والشقوق في الجدران والأسقف والنوافذ.",
  },
  {
    title: "مخاطر وجود الإبراص",
    content: "وجود الأبراص يُعد مصدر خطر حقيقي على الصحة العامة. فهي قد تنقل البكتيريا والجراثيم أثناء حركتها داخل المنزل، خاصة عندما تمر على أدوات المطبخ أو الأطعمة المكشوفة. كما أن فضلاتها تحتوي على ميكروبات تسبب التهابات أو حساسية جلدية، فضلاً عن الخوف والقلق النفسي الذي تسببه للأطفال.",
  },
  {
    title: "كيفية القضاء على الإبراص؟",
    content: "تبدأ عملية الإبادة لدينا بالفحص الميداني الدقيق لتحديد أماكن تواجدها ومسارات دخولها. نستخدم مبيدات ألمانية الصنع معتمدة دوليًا مصممة خصيصًا لمكافحة الزواحف، وهي آمنة تمامًا على الإنسان والحيوانات الأليفة، وتقضي على الأبراص فور ملامستها مع طردها ومنع عودتها.",
  },
  {
    title: "حلول احترافية ونتائج مضمونة",
    content: "نحن في شركة الدرع نقدم حلولاً متكاملة مع ضمان متابعة للتأكد من عدم عودتها. نضع خطة معالجة مخصصة تتناسب مع طبيعة المكان، مع تقديم نصائح وقائية مخصصة لغلق الفتحات والشقوق. تواصل معنا اليوم لضمان بيئة نظيفة وآمنة.",
  },
];

export default function GeckoSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const bugY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            خدمة إبادة الإبراص
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            هل تواجه مشكلة مع الإبراص في المنزل أو مكان العمل؟ اكتشف كيف نقضي عليها نهائياً وبطرق آمنة.
          </p>
        </div>

        <div className="relative">
          
          {/* الخط المركزي */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-200/50 rounded-full hidden md:block"></div>

          {/* الحشرة المتحركة */}
          <motion.div
            style={{ top: bugY }}
            className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-emerald-500 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
              className="text-emerald-600 text-2xl rotate-180"
            >
              <FontAwesomeIcon icon={faBug} />
            </motion.div>
          </motion.div>

          <div className="space-y-12 md:space-y-0">
            {textBlocks.map((block, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-5/12"></div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-5/12 bg-white p-8 rounded-2xl shadow-sm border border-emerald-50 hover:shadow-md transition-shadow relative"
                >
                  <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white border-t border-l border-emerald-50 transform rotate-45 ${
                    index % 2 === 0 ? "-left-2 border-b-0 border-r-0" : "-right-2 border-t-0 border-l-0 border-b border-r"
                  }`}></div>

                  <h3 className="text-xl font-bold text-emerald-700 mb-4">
                    {block.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                    {block.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}