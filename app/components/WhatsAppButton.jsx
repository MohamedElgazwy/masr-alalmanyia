import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const phone = "201024193594";
  const message = "مرحبا، أريد الاستفسار عن الخدمات الطبية المنزلية";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button asChild className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-6 rounded-full shadow-xl transition">
    <a
      href={link}
      target="_blank"
      

    >
      واتساب
    </a>

    </Button>


    
    
  );
}
