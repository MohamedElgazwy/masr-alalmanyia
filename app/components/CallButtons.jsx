"use client";

export default function CallButtons({ serviceName }) {
  const phone = "01111104638"; // رقم الهاتف الرئيسي (احتفظ بالصيغة المحلية)
  const companyName = "مصر سيرفيس";

  const message = encodeURIComponent(
    `مرحبًا ${companyName} 👋  
أود الاستفسار وحجز خدمة: *${serviceName}*.  
برجاء تزويدي بالتفاصيل، المواعيد المتاحة وتكلفة الرش والضمان.`
  );

  const whatsappUrl = `https://wa.me/2${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
    >
      احجز عبر واتساب الآن
    </a>
  );
}