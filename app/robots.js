export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // تم التحديث ليرتبط بخريطة الموقع على الدومين الجديد
    sitemap: "https://misr-service.com/sitemap.xml",
  };
}