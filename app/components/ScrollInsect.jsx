"use client";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";

export default function ScrollInsect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;
      
      const totalHeight = scrollHeight - clientHeight;

      if (totalHeight > 0) {
        // حساب النسبة بدقة وحصرها بين 0 و 100
        const percentage = Math.min(Math.max((scrollTop / totalHeight) * 100, 0), 100);
        
        // حساب زاوية اهتزاز خفيفة للزحف
        const rotation = (scrollTop % 12) - 6;

        // تحديث قيم الـ CSS مباشرة في المتصفح بدون إعادة رندر الـ State (سرعة البرق!)
        containerRef.current.style.setProperty("--scroll-percent", `${percentage}%`);
        containerRef.current.style.setProperty("--bug-rotation", `${rotation}deg`);
      }
    };

    // تفعيل الحركة مع السكرول
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    // تشغيل مبدئي فور تحميل الصفحة
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // ربط الحاوية بالـ useRef وتطبيق كلاسات تحديد الموضع وثبات العنصر
    <div 
      ref={containerRef}
      className="fixed top-1/3 left-6 z-50 flex flex-col items-center select-none pointer-events-none"
      style={{
        // قيم افتراضية للمتغيرات قبل بدء السكرول
        "--scroll-percent": "0%",
        "--bug-rotation": "0deg"
      }}
    >
      
      {/* البار الطولي */}
      <div className="relative w-2 h-[200px] bg-slate-200/60 backdrop-blur-xs rounded-full border border-slate-300/40 shadow-inner">
        
        {/* فقاعة الكلام (الحقني!) */}
        <div 
          className="absolute left-7 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap z-10"
          style={{
            top: "var(--scroll-percent)",
            transform: "translateY(-50%)",
            // إضافة خاصية transition هنا تجعل انتقال الحركة ناعم جداً وانسيابي
            transition: "top 0.2s cubic-bezier(0.25, 1, 0.5, 1)"
          }}
        >
          الحقني!
          <div className="absolute left-[-3px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-r-[4px] border-r-red-500"></div>
        </div>

        {/* الحشرة */}
        <div
          className="absolute text-xl text-amber-950 filter drop-shadow-sm"
          style={{
            top: "var(--scroll-percent)",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(var(--bug-rotation))",
            // السر في السلاسة: الترانزيشن يعمل هيدروليك ناعم للحشرة أثناء النزول والصعود
            transition: "top 0.2s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s linear"
          }}
        >
          <FontAwesomeIcon icon={faBug} />
        </div>

      </div>
    </div>
  );
}