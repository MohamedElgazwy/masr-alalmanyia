"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function FloatingContactButtons({
  serviceName = "الخدمات الطبية المنزلية",
}) {
  const phoneNumber = "201024193594";

  const whatsappMessage = `مرحباً، أود الاستفسار عن خدمة ${serviceName}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const callLink = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        aria-label="WhatsApp"
        className="
          w-14 h-14 rounded-full
          bg-[#25D366]
          hover:bg-[#1ebe5d]
          flex items-center justify-center
          text-white
          shadow-2xl
          transition-all duration-300
          hover:scale-110
        "
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>

      {/* Call */}
      <a
        href={callLink}
        aria-label="Call"
        className="
          w-14 h-14 rounded-full
          bg-orange-500
          hover:bg-orange-600
          flex items-center justify-center
          text-white
          shadow-2xl
          transition-all duration-300
          hover:scale-110
        "
      >
        <FontAwesomeIcon icon={faPhone} className="text-xl" />
      </a>
    </div>
  );
}
