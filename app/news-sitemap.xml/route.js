import articlesData from "../../public/data/articles.json";

const SITE_URL = "https://www.newswireninja.com";
const TWO_DAYS_MS = 48 * 60 * 60 * 1000;

// Existing news records use DD/MM/YYYY; treat date-only values as midnight UTC.
// New articles should use full ISO-8601 publication timestamps with time zones.
function parsePublicationDate(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  const dateOnly = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  const parsed = dateOnly
    ? new Date(Date.UTC(Number(dateOnly[3]), Number(dateOnly[2]) - 1, Number(dateOnly[1])))
    : new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function xmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = Date.now();
  const cutoff = now - TWO_DAYS_MS;
  const items = Object.entries(articlesData)
    .flatMap(([category, posts]) =>
      (posts || []).map((post) => ({
        url: `${SITE_URL}/${category}/${post.slug}`,
        title: post.title,
        date: parsePublicationDate(post.datePublished || post.date),
      }))
    )
    .filter(({ date }) => date && date.getTime() <= now && date.getTime() >= cutoff)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 1000);

  const xmlItems = items.map(({ url, title, date }) => `
  <url>
    <loc>${xmlEscape(url)}</loc>
    <news:news>
      <news:publication>
        <news:name>Newswireninja</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${date.toISOString()}</news:publication_date>
      <news:title>${xmlEscape(title)}</news:title>
    </news:news>
  </url>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${xmlItems}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800, stale-while-revalidate=900",
    },
  });
}
