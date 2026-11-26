import articlesData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";
import topics from "../public/data/topics.json";
import { slugify } from "../utils/slugify";

const SITE_URL = "https://www.newswireninja.com";

// Helper: parse DD/MM/YYYY → Date object
function parseDate(dateStr) {
  if (!dateStr) return new Date();
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
}

export default function sitemap() {
  // Do not stamp every static URL as modified on every deployment.
  // Article lastModified values come from editorial record dates.

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: SITE_URL,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-newswireninja`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
     {
      url: `${SITE_URL}/advertising-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/corrections-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/editorial-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/legal`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/ownership-funding`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/right-of-reply`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/source-methodology`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/authors`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];


  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.keys(articlesData).map((category) => ({
    url: `${SITE_URL}/${category}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  const articlePages = Object.entries(articlesData).flatMap(
    ([category, articles]) =>
      articles.map((article) => ({
        url: `${SITE_URL}/${category}/${article.slug}`,
        lastModified: parseDate(article.modified || article.date),
        changeFrequency: "weekly",
        priority: 0.9,
      }))
  );



  /* ---------------- AUTHOR DETAIL PAGES ---------------- */
  const authorDetailPages = authorData.categories.map((cat) => ({
    url: `${SITE_URL}/authors/${slugify(cat.author.name)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /* ---------------- TOPIC HUB PAGES ---------------- */
  const topicPages = Object.keys(topics).map((slug) => ({
    url: `${SITE_URL}/topics/${slug}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...topicPages,
    ...articlePages,
    ...authorDetailPages,
  ];
}

// import articlesData from "../public/data/articles.json";
// import pillarContent from "../public/data/pillarContent.json";
// import authorData from "../public/data/authors.json";
// import { slugify } from "../utils/slugify";

// const SITE_URL = "https://www.newswireninja.com";

// export default function sitemap() {
//   const now = new Date();

//   /* ---------------- STATIC PAGES ---------------- */
//   const staticPages = [
//     {
//       url: SITE_URL,
//   //       changeFrequency: "daily",
//       priority: 1.0,
//     },
//     {
//       url: `${SITE_URL}/about-newswireninja`,
//   //       changeFrequency: "monthly",
//       priority: 0.6,
//     },
//     {
//       url: `${SITE_URL}/privacy-policy`,
//   //       changeFrequency: "yearly",
//       priority: 0.3,
//     },
//     {
//       url: `${SITE_URL}/terms-and-conditions`,
//   //       changeFrequency: "yearly",
//       priority: 0.3,
//     },
//     {
//       url: `${SITE_URL}/authors`,
//   //       changeFrequency: "weekly",
//       priority: 0.6,
//     },
//   ];

//   /* ---------------- STATIC DETAIL PAGES ---------------- */
//   const staticDetailPages = [
//     {
//       url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
//   //       changeFrequency: "monthly",
//       priority: 0.9,
//     },
//   ];

//   /* ---------------- CATEGORY PAGES ---------------- */
//   const categoryPages = Object.keys(articlesData).map(category => ({
//     url: `${SITE_URL}/${category}`,
// //     changeFrequency: "daily",
//     priority: 0.8,
//   }));


//   /* ---------------- ARTICLE DETAIL PAGES ---------------- */
//   const articlePages = Object.entries(articlesData).flatMap(
//     ([category, articles]) =>
//       articles.map(article => ({
//         url: `${SITE_URL}/${category}/${article.slug}`,
//         lastModified: article.date
//           ? new Date(Date.parse(article.date))
//           : now,
//         changeFrequency: "weekly",
//         priority: 0.9,
//       }))
//   );

//   /* ---------------- PILLAR CONTENT PAGES ---------------- */
// //   const pillarPages = pillarContent.map(item => ({
// //     url: `${SITE_URL}/julio-herrera-velutini/${item.slug}`,
// //     lastModified: item.lastUpdated
// //       ? new Date(item.lastUpdated)
// //       : now,
// //     changeFrequency: "monthly",
// //     priority: 0.7,
// //   }));

//   /* ---------------- AUTHOR DETAIL PAGES ---------------- */
//   const authorDetailPages = authorData.categories.map(cat => {
//     const author = cat.author;
//     return {
//       url: `${SITE_URL}/authors/${slugify(author.name)}`,
//   //       changeFrequency: "monthly",
//       priority: 0.6,
//     };
//   });

//   return [
//     ...staticPages,
//     ...staticDetailPages,
//     ...categoryPages,
//     ...articlePages,
//     ...authorDetailPages,
//   ];
// }
