"use client";

export default function CallButtons({ serviceName }) {
  const phone = "01024193594";

  const message = encodeURIComponent(
    `مرحبًا 👋  
أرغب في حجز خدمة *${serviceName}* من Nabd Alhayaat.  
من فضلكم أحتاج معرفة التفاصيل المتاحة والتكلفة.`
  );

  const whatsappUrl = `https://wa.me/2${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
    >
      تواصل عبر واتساب
    </a>
  );
}
