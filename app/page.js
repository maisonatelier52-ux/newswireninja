
import { HeroSection } from "../components/homeComponents/HeroSection";
import { BannerSection } from "../components/homeComponents/BannerSection";
import { CategoryGrid } from "../components/homeComponents/CategoryGrid";
import { FeaturedWriters } from "../components/homeComponents/FeaturedWriters";
import { SplitFeatured } from "../components/homeComponents/SplitFeatured";
import { MixedGrid } from "../components/homeComponents/MixedGrid";
import { HighlightSection } from "../components/homeComponents/HighlightSection";
import { TrendingStories } from "../components/homeComponents/TrendingStories";

import articleData from "../public/data/articles.json";
import authorsPageData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

const SITE_URL = "https://www.newswireninja.com";

export const metadata = {
  title: "Newswireninja — Independent U.S. News, Business & Investigations",
  description: 
    "Newswire Ninja delivers breaking U.S. news, in-depth reporting, and business analysis with trusted headlines. Stay informed with our latest updates.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Newswireninja — Latest U.S. News & Investigations",
    description: 
      "Newswire Ninja delivers fast, factual U.S. news, business reporting, and in-depth investigations with breaking headlines you can trust.",
    url: SITE_URL,
    type: "website",
    siteName: "Newswireninja",
    images: [
      {
        url: `${SITE_URL}/newswireninja.webp`,
        width: 1200,
        height: 630,
        alt: "Newswireninja U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newswireninja — Latest U.S. News",
    description: 
      "Fast, factual U.S. news with in-depth reporting and investigations.",
    images: [`${SITE_URL}/newswireninja.webp`],
  },
};


export default function Home() {
  // All data processing stays here (server-side)
  const getAllLatestArticles = () => {
    return Object.values(articleData)
      .flat()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const latestArticles = getAllLatestArticles().slice(0, 4);

  const businessArticles = Object.values(articleData)
    .flat()
    .filter((article) => article.category === "business" && !latestArticles.includes(article))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const getArticlesByCategory = (category) => {  // Removed TypeScript type annotation
    const key = category.toLowerCase();
    return articleData[key] || [];
  };

  const getAuthorByCategory = (category) => {  // Removed TypeScript type annotation
    const author = authorsPageData.categories.find(
      (cat) => cat.category.toLowerCase() === category.toLowerCase()
    )?.author;
    return author || {};
  };

  const articlesInLatestOrder = getAllLatestArticles();

  const featuredStoryData = articlesInLatestOrder.filter(
    (article) =>
      !latestArticles.some((a) => a.slug === article.slug) &&
      !businessArticles.some((a) => a.slug === article.slug)
  );

  // Group and select 2 articles from different categories for SplitFeatured
  const articlesByCategory = {};
  featuredStoryData.forEach((article) => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  const selectedArticles = [];
  const categories = Object.keys(articlesByCategory);
  for (let i = 0; i < categories.length && selectedArticles.length < 2; i++) {
    const catArticles = articlesByCategory[categories[i]];
    if (catArticles.length > 0) selectedArticles.push(catArticles[0]);
  }

  // MixedGrid (3 articles)
  const excludedForMixed = [...latestArticles, ...businessArticles, ...selectedArticles];
  const filteredForMixed = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForMixed.some((e) => e.slug === a.slug));

  const mixedByCategory = {};
  filteredForMixed.forEach((a) => {
    if (!mixedByCategory[a.category]) mixedByCategory[a.category] = [];
    mixedByCategory[a.category].push(a);
  });

  const selectedForMixed = [];
  const mixedCats = Object.keys(mixedByCategory);
  for (let i = 0; i < mixedCats.length && selectedForMixed.length < 3; i++) {
    const arts = mixedByCategory[mixedCats[i]];
    if (arts.length > 0) selectedForMixed.push(arts[0]);
  }

  // HighlightSection (5 articles)
  const excludedForHighlight = [...latestArticles, ...businessArticles, ...selectedArticles, ...selectedForMixed];
  const filteredForHighlight = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForHighlight.some((e) => e.slug === a.slug));

  const highlightByCategory = {};
  filteredForHighlight.forEach((a) => {
    if (!highlightByCategory[a.category]) highlightByCategory[a.category] = [];
    highlightByCategory[a.category].push(a);
  });

  const selectedForHighlight = [];
  const highlightCats = Object.keys(highlightByCategory);
  for (let i = 0; i < highlightCats.length && selectedForHighlight.length < 5; i++) {
    const arts = highlightByCategory[highlightCats[i]];
    if (arts.length > 0) selectedForHighlight.push(arts[0]);
  }

  // TrendingStories (remaining articles)
  const excludedForTrending = [...excludedForHighlight, ...selectedForHighlight];
  const filteredForTrending = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForTrending.some((e) => e.slug === a.slug));

  const trendingByCategory = {};
  filteredForTrending.forEach((a) => {
    if (!trendingByCategory[a.category]) trendingByCategory[a.category] = [];
    trendingByCategory[a.category].push(a);
  });

  const selectedForTrending = [];
  const trendingCats = Object.keys(trendingByCategory);
  for (let i = 0; i < trendingCats.length && selectedForTrending.length < 6; i++) {
    const arts = trendingByCategory[trendingCats[i]];
    if (arts.length > 0) selectedForTrending.push(arts[0]);
  }
  // Keep more if needed for "Show More"

  const remainingTrending = filteredForTrending.filter(
    (a) => !selectedForTrending.some((s) => s.slug === a.slug)
  );

  const allTrendingArticles = [...selectedForTrending, ...remainingTrending.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())];



  /* ---------- JSON-LD (Homepage) ---------- */

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Newswireninja",
  "url": SITE_URL,
  "publisher": {
    "@type": "Organization",  
    "name": "Newswireninja",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.png`, 
    },
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
  "datePublished": "2026-01-14", 
  "author": {
    "@type": "Person",
    "name": "Newswireninja Team",
  },
};


  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 min-h-screen bg-white font-serif">

      <script
        id="website-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      
      <HeroSection latestArticles={latestArticles} getAuthorByCategory={getAuthorByCategory} />
      <p className="sr-only">
        Newswire Ninja delivers breaking U.S. and global news, in-depth investigations,
        business reporting, politics, technology, and world affairs.
      </p>
      
      

      <BannerSection />

      <CategoryGrid businessArticles={businessArticles} />

      <FeaturedWriters authorsPageData={authorsPageData} getArticlesByCategory={getArticlesByCategory} slugify={slugify} />

      <SplitFeatured selectedArticles={selectedArticles} getAuthorByCategory={getAuthorByCategory} />

      <MixedGrid articles={selectedForMixed} />

      <HighlightSection articles={selectedForHighlight} getAuthorByCategory={getAuthorByCategory} />

      <TrendingStories articles={allTrendingArticles} />
    </main>
  );
}
