"use client";

export default function CallButtons({ serviceName }) {
  // الرقم بدون الصفر الأول وبدون كود الدولة (صيغة نظيفة للروابط)
  const cleanPhone = "1111104638"; 
  const companyName = "مصر سيرفيس";

  const message = encodeURIComponent(
    `مرحبًا ${companyName} 👋  
أود الاستفسار وحجز خدمة: *${serviceName}*.  
برجاء تزويدي بالتفاصيل، المواعيد المتاحة وتكلفة الرش والضمان.`
  );

  // الرابط الصحيح للواتساب (20 هي كود مصر + الرقم بدون الصفر الأول)
  const whatsappUrl = `https://wa.me/20${cleanPhone}?text=${message}`;
  
  // إذا كنت تريد إضافة زر اتصال هاتفي عادي، ستستخدم هذا الرابط بأمان:
  const phoneCallUrl = `tel:+20${cleanPhone}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* زر الواتساب المعالج والمضمون */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
      >
        احجز عبر واتساب الآن
      </a>

      {/* زر اتصال هاتفي مباشر (اختياري لحل مشكلة الصورة تماماً) */}
      <a
        href={phoneCallUrl}
        className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
      >
        اتصل بنا هاتفياً
      </a>
    </div>
  );
}