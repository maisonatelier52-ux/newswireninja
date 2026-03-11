

// export default function robots() {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//       disallow: ['/api/', '/_next/'],
//     },
//     sitemap: 'https://www.newswireninja.com/sitemap.xml',
//   };
// }


const SITE_URL = "https://www.newswireninja.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/news-sitemap.xml`,
    ],
    host: SITE_URL,
  };
}

// export default function robots() {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: ["/api/", "/_next/"],
//     },
//     sitemap: [
//       "https://www.newswireninja.com/sitemap.xml",
//       "https://www.newswireninja.com/news-sitemap.xml"
//     ],
//   };
// }