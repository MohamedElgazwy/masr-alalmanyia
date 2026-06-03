import CallButtons from "../components/CallButtons";

export const metadata = {
  title: "تواصل معنا | شركة الدرع لإبادة الحشرات",
  description: "تواصل مع شركة الدرع لطلب معاينة أو الاستفسار عن خدمات مكافحة الحشرات",
};

export default function ContactPage() {
  const phone = "01111104638"; // رقم الهاتف الرئيسي لشركة الدرع

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* HERO */}
      <section className="bg-emerald-50/60 py-20 text-center border-b border-emerald-100">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">
          تواصل معنا
        </h1>

        <p className="text-slate-700 text-lg max-w-2xl mx-auto px-4">
          فريق المهندسين في شركة الدرع جاهز للرد على جميع استفساراتك وتحديد موعد لمعاينة المكان والبدء في عملية الإبادة الفورية.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          
          <div className="text-slate-700 text-lg flex items-center justify-center gap-2">
            <span>📞 رقم الهاتف:</span>
            <span className="font-bold text-emerald-700 dir-ltr">
              +{phone}
            </span>
          </div>

          <div className="text-slate-700 text-lg flex items-center justify-center gap-2">
            <span>📧 البريد الإلكتروني:</span>
            <span className="font-bold text-emerald-700">
              info@eldaraapest.com
            </span>
          </div>

          {/* CTA BUTTONS */}
          <div className="pt-10 flex justify-center">
            <CallButtons serviceName="طلب معاينة مكافحة حشرات" />
          </div>
        </div>
      </section>
    </main>
  );
}