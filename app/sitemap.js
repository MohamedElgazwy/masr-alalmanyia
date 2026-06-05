import { articlesData } from "./data/articles";
import { servicesData } from "./data/services";


export default function sitemap() {
  // تم التحديث إلى الدومين الرسمي الجديد لشركة مصر سيرفيس
  const base = "https://misr-service.com";

  const urls = [
    { url: base, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/articles`, lastModified: new Date() }, // أضفنا صفحة المقالات الرئيسية للخريطة
  ];

  // توليد روابط الخدمات ديناميكياً بناءً على الـ slugs الجديدة المتطابقة مع الفولدرات
  Object.keys(servicesData).forEach((slug) => {
    urls.push({ url: `${base}/services/${slug}`, lastModified: new Date() });
  });

  // توليد روابط المقالات ديناميكياً بناءً على تاريخ تعديلها
  Object.keys(articlesData).forEach((slug) => {
    const date = articlesData[slug].date
      ? new Date(articlesData[slug].date)
      : new Date();
    urls.push({ url: `${base}/articles/${slug}`, lastModified: date });
  });

  return urls;
}