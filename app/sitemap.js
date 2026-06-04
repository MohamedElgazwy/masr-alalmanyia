import { servicesData } from "./data/services";
import { articlesData } from "./data/articles";

export default function sitemap() {
  const base = "https://eldaraapest.com";

  const urls = [
    { url: base, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
  ];

  Object.keys(servicesData).forEach((slug) => {
    urls.push({ url: `${base}/services/${slug}`, lastModified: new Date() });
  });

  Object.keys(articlesData).forEach((slug) => {
    const date = articlesData[slug].date
      ? new Date(articlesData[slug].date)
      : new Date();
    urls.push({ url: `${base}/articles/${slug}`, lastModified: date });
  });

  return urls;
}
