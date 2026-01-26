import articlesData from "../public/data/articles.json";
import pillarContent from "../public/data/pillarContent.json";
import authorData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

const SITE_URL = "https://www.newswireninja.com";

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-newswireninja`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/authors`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  /* ---------------- STATIC DETAIL PAGES ---------------- */
  const staticDetailPages = [
    {
      url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.keys(articlesData).map(category => ({
    url: `${SITE_URL}/${slugify(category)}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));


  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  const articlePages = Object.entries(articlesData).flatMap(
    ([category, articles]) =>
      articles.map(article => ({
        url: `${SITE_URL}/${slugify(category)}/${article.slug}`,
        lastModified: article.date
          ? new Date(article.date)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      }))
  );

  /* ---------------- PILLAR CONTENT PAGES ---------------- */
//   const pillarPages = pillarContent.map(item => ({
//     url: `${SITE_URL}/julio-herrera-velutini/${item.slug}`,
//     lastModified: item.lastUpdated
//       ? new Date(item.lastUpdated)
//       : now,
//     changeFrequency: "monthly",
//     priority: 0.7,
//   }));

  /* ---------------- AUTHOR DETAIL PAGES ---------------- */
  const authorDetailPages = authorData.categories.map(cat => {
    const author = cat.author;
    return {
      url: `${SITE_URL}/authors/${slugify(author.name)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [
    ...staticPages,
    ...staticDetailPages,
    ...categoryPages,
    ...articlePages,
    ...authorDetailPages,
  ];
}
