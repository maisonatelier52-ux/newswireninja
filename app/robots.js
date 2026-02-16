// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//     ],
//     sitemap: "https://www.newswireninja.com/sitemap.xml",
//     host: "https://www.newswireninja.com",
//   };
// }

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://www.newswireninja.com/sitemap.xml',
  };
}