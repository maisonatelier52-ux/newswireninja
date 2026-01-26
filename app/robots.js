export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.newswireninja.com/sitemap.xml",
    host: "https://www.newswireninja.com",
  };
}