

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

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: [
      "https://www.newswireninja.com/sitemap.xml",
      "https://www.newswireninja.com/news-sitemap.xml"
    ],
  };
}