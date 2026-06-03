"use client";

import { Button } from "@/components/ui/button";


export default function ServiceCTA({
  serviceName,
  phone = "01111104638", // رقم الهاتف الرئيسي لشركة الدرع، تأكد من تحديثه إذا تغير في المستقبل
}) {
  const message = `مرحبًا شركة الدرع، 👋
أود حجز خدمة: *${serviceName}*

الاسم:
رقم التواصل:
العنوان بالتفصيل:
نوع الآفة / الحشرات المنتشرة:
الموعد المفضل للمعاينة والرش:`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const callLink = `tel:+${phone}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      {/* Call Button */}
      <Button
        asChild
        className="bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-6 py-2.5 transition-colors"
      >
        <a href={callLink}>📞 اتصال الآن</a>
      </Button>

      {/* WhatsApp Button */}
      <Button
        asChild
        className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2.5 transition-colors"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          💬 تواصل عبر واتساب
        </a>
      </Button>
    </div>
  );
}