"use client";

import { Button } from "@/components/ui/button";

export default function ServiceCTA({
  serviceName,
  phone = "201024193594",
}) {
  const message = `مرحبًا،
كيف يمكنني حجز ${serviceName}؟

الاسم:
رقم التواصل:
العنوان:
التاريخ الطبي الموجز:`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const callLink = `tel:+${phone}`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      {/* Call Button */}
      <Button
        asChild
        className="bg-blue-700 hover:bg-blue-800 text-white"
      >
        <a href={callLink}>📞 اتصال الآن</a>
      </Button>

      {/* WhatsApp Button */}
      <Button
        asChild
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        <a href={whatsappLink} target="_blank">
          💬 تواصل عبر واتساب
        </a>
      </Button>
    </div>
  );
}
