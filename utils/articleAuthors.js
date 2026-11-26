import { slugify } from "./slugify";

/** Resolve the byline consistently for visible copy, metadata and JSON-LD. */
export function resolveArticleAuthor(article, fallback) {
  const author = article?.author;
  if (author && typeof author === "object" && typeof author.name === "string" && author.name.trim()) {
    return { ...fallback, ...author };
  }
  if (typeof author === "string" && author.trim()) {
    return { ...fallback, name: author.trim() };
  }
  return fallback || { name: "Newswireninja Editorial Team", role: "Editorial Staff" };
}

export function authorStructuredData(author, authorCategories = [], siteUrl = "https://www.newswireninja.com") {
  const name = author?.name || "Newswireninja Editorial Team";
  const categoryAuthor = authorCategories.find((entry) => entry.author?.name === name);
  const data = { "@type": name === "Newswireninja Editorial Team" ? "Organization" : "Person", name };
  if (categoryAuthor && data["@type"] === "Person") {
    data.url = `${siteUrl}/authors/${slugify(name)}`;
  } else if (data["@type"] === "Organization") {
    data.url = siteUrl;
  }
  return data;
}
