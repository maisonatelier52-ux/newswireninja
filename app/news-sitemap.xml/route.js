import articlesData from "../../public/data/articles.json";

const SITE_URL = "https://www.newswireninja.com";

export async function GET() {
  const now = new Date();
  const twoDaysAgo = new Date(now);
  twoDaysAgo.setDate(now.getDate() - 2);

  const articles = Object.entries(articlesData).flatMap(([category, posts]) =>
    posts
      .filter((post) => new Date(post.date) >= twoDaysAgo)
      .map((post) => ({
        url: `${SITE_URL}/${category}/${post.slug}`,
        title: post.title,
        date: new Date(post.date).toISOString(),
      }))
  );

  const newsItems = articles
    .map(
      (article) => `
  <url>
    <loc>${article.url}</loc>
    <news:news>
      <news:publication>
        <news:name>Newswireninja</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title><![CDATA[${article.title}]]></news:title>
    </news:news>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}