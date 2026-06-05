"use client";

import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  // تم توحيد الرقم مع باقي صفحات الموقع، يمكنك تعديله لأي رقم آخر
  const phone = "01111104638"; // رقم الهاتف الرئيسي لشركة الدرع، تأكد من تحديثه إذا تغير في المستقبل
  const message = "مرحبًا الشركة الألمانية، أريد الاستفسار عن خدمات إبادة الحشرات ومكافحة الآفات المتاحة والضمان.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button 
      asChild 
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-6 rounded-full shadow-xl transition-all hover:scale-105 z-50"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        واتساب
      </a>
    </Button>
  );
}