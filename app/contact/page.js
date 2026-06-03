import CallButtons from "@/app/components/CallButtons";

export const metadata = {
  title: "تواصل معنا | Nabd Alhayaat",
  description: "تواصل مع نبض الحياة للرعاية الصحية المنزلية",
};

export default function ContactPage() {
  const phone = "201024193594";

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-blue-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          تواصل معنا
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          فريق Nabd Alhayaat جاهز للرد على جميع استفساراتك
          ومساعدتك في اختيار الخدمة المناسبة لحالتك.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          
          <div className="text-gray-700 text-lg">
            📞 رقم الهاتف:
            <span className="font-semibold mx-2">
              {phone}
            </span>
          </div>

          <div className="text-gray-700 text-lg">
            📧 البريد الإلكتروني:
            <span className="font-semibold mx-2">
              nabdalhayaat123@gmail.com
            </span>
          </div>

          {/* CTA BUTTONS */}
          <div className="pt-10 flex justify-center">
            <CallButtons serviceName="الاستفسار عن خدمات Nabd Alhayaat" />
          </div>
        </div>
      </section>
    </main>
  );
}
