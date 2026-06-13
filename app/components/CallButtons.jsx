"use client";

export default function CallButtons({ serviceName }) {
  const phone = "20111104638"; // من الأفضل كتابة رمز الدولة مباشرة بدون الاعتماد على الدمج اليدوي
  const companyName = "مصر سيرفيس";

  // صياغة الرسالة في سطر واحد واستخدام \n للسطر الجديد لتفادي مشاكل الـ Parsing
  const messageText = `مرحبًا ${companyName} 👋\nأود الاستفسار وحجز خدمة: *${serviceName}*.\nبرجاء تزويدي بالتفاصيل، المواعيد المتاحة وتكلفة الرش والضمان.`;
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer" // إضافة لحماية الأداء والأمان عند فتح روابط خارجية
      className="inline-block bg-emerald-500 mb-1.5 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
    >
      احجز عبر واتساب الآن
    </a>
  );
}