

import { HeroSection } from "../components/homeComponents/HeroSection";
import { BannerSection } from "../components/homeComponents/BannerSection";
import { CategoryGrid } from "../components/homeComponents/CategoryGrid";
import { FeaturedWriters } from "../components/homeComponents/FeaturedWriters";
import { SplitFeatured } from "../components/homeComponents/SplitFeatured";
import { MixedGrid } from "../components/homeComponents/MixedGrid";
import { HighlightSection } from "../components/homeComponents/HighlightSection";
import { TrendingStories } from "../components/homeComponents/TrendingStories";
import { PoliticsGrid } from "../components/homeComponents/PoliticsGrid";

import articleData from "../public/data/articles.json";
import authorsPageData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";
import { PINNED_ARTICLE } from "../utils/pinnedArticle";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: { absolute: "Newswireninja — Independent U.S. News, Business & Investigations" },
  description:
    "Newswire Ninja delivers breaking U.S. news, in-depth reporting, and business analysis with trusted headlines. Stay informed with our latest updates.",
  keywords: [
    "breaking news",
    "latest news",
    "world news",
    "politics",
    "business news",
    "investigations",
    "news headlines",
    "current events",
    "journalism",
  ],
  authors: [{ name: "Newswireninja Editorial Team" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Newswireninja — Latest U.S. News & Investigations",
    description:
      "Newswire Ninja delivers fast, factual U.S. news, business reporting, and in-depth investigations with breaking headlines you can trust.",
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 256,
        height: 219,
        alt: "Newswireninja U.S. News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newswireninja — Latest U.S. News",
    description:
      "Fast, factual U.S. news with in-depth reporting and investigations.",
    images: [`${SITE_URL}/images/newswireninja-logo.webp`],
    creator: "@newswireninja",
    site: "@newswireninja",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Helper: parse date in DD/MM/YYYY format
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  // Handle DD/MM/YYYY format
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
}

export default function Home() {
  const getAllLatestArticles = () => {
    return Object.entries(articleData)
      .flatMap(([category, articles]) =>
        (articles || []).map((a) => ({ ...a, category }))
      )
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  };

  // The fourth Politics card always links to this exact, existing article.
  // Its original data and detail page are not modified.
  const permanentPoliticsArticle = (articleData[PINNED_ARTICLE.category] || []).find(
    (article) => article.slug === PINNED_ARTICLE.slug
  );

  // Exclude the permanent article from all other homepage sections.
  // Deduplicate article slugs defensively as the dataset grows.
  const seenSlugs = new Set();
  const allArticlesSorted = getAllLatestArticles().filter((article) => {
    if (!article.slug || article.slug === PINNED_ARTICLE.slug || seenSlugs.has(article.slug)) {
      return false;
    }
    seenSlugs.add(article.slug);
    return true;
  });

  // Latest news remains genuinely date-sorted, without the permanent card.
  const latestArticles = allArticlesSorted.slice(0, 4);

  // Three newest Politics stories not already visible in Latest News.
  // The Alina Habba article occupies a separate, fixed fourth card.
  const latestSlugs = new Set(latestArticles.map((article) => article.slug));
  const politicsArticles = allArticlesSorted
    .filter((article) => article.category === "politics" && !latestSlugs.has(article.slug))
    .slice(0, 3);
  const politicsSlugs = new Set(politicsArticles.map((article) => article.slug));

  const businessArticles = allArticlesSorted
    .filter(
      (article) =>
        article.category === "business" &&
        !latestArticles.some((a) => a.slug === article.slug)
    )
    .slice(0, 4);

  const getArticlesByCategory = (category) => {
    const key = category.toLowerCase();
    return articleData[key] || [];
  };

  const getAuthorByCategory = (category) => {
    const author = authorsPageData.categories.find(
      (cat) => cat.category.toLowerCase() === category.toLowerCase()
    )?.author;
    return author || {};
  };

  const articlesInLatestOrder = allArticlesSorted;

  const featuredStoryData = articlesInLatestOrder.filter(
    (article) =>
      !latestSlugs.has(article.slug) &&
      !politicsSlugs.has(article.slug) &&
      !businessArticles.some((a) => a.slug === article.slug)
  );

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

  const excludedForMixed = [
    ...latestArticles,
    ...politicsArticles,
    ...businessArticles,
    ...selectedArticles,
  ];
  const filteredForMixed = allArticlesSorted.filter(
    (a) => !excludedForMixed.some((e) => e.slug === a.slug)
  );

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

  const excludedForHighlight = [
    ...latestArticles,
    ...politicsArticles,
    ...businessArticles,
    ...selectedArticles,
    ...selectedForMixed,
  ];
  const filteredForHighlight = allArticlesSorted.filter(
    (a) => !excludedForHighlight.some((e) => e.slug === a.slug)
  );

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

  const excludedForTrending = [...excludedForHighlight, ...selectedForHighlight];
  const filteredForTrending = allArticlesSorted.filter(
    (a) => !excludedForTrending.some((e) => e.slug === a.slug)
  );

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

  const remainingTrending = filteredForTrending
    .filter((a) => !selectedForTrending.some((s) => s.slug === a.slug))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const allTrendingArticles = [...selectedForTrending, ...remainingTrending];

  // Latest 10 articles for JSON-LD
  const latestForSchema = allArticlesSorted.slice(0, 10);

  /* ---------- JSON-LD ---------- */
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Newswire Ninja",
    url: SITE_URL,
    description:
      "Breaking U.S. news, in-depth reporting, business analysis, and investigations.",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
      width: 256,
      height: 219,
    },
    description:
      "Independent news platform delivering breaking U.S. news, business analysis, and in-depth investigations.",
    foundingDate: "2025",
    sameAs: [
      "https://www.facebook.com/newswireninja",
      "https://www.twitter.com/newswireninja",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@newswireninja.com",
    },
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/#collectionpage`,
    name: "Latest News Articles",
    description:
      "Browse the latest breaking news, politics, business, and world event coverage",
    url: SITE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: latestForSchema.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${article.category}/${article.slug}`,
        name: article.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 min-h-screen bg-white font-serif">
      {/* JSON-LD Structured Data */}
      <script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        id="collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />


      <h1 className="mb-5 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Latest News</h1>
      <HeroSection latestArticles={latestArticles} getAuthorByCategory={getAuthorByCategory} />

      <BannerSection />
      <PoliticsGrid
        politicsArticles={politicsArticles}
        permanentArticle={permanentPoliticsArticle}
      />
      <CategoryGrid businessArticles={businessArticles} />
      <FeaturedWriters
        authorsPageData={authorsPageData}
        getArticlesByCategory={getArticlesByCategory}
        slugify={slugify}
      />
      <SplitFeatured selectedArticles={selectedArticles} getAuthorByCategory={getAuthorByCategory} />
      <MixedGrid articles={selectedForMixed} />
      <HighlightSection articles={selectedForHighlight} getAuthorByCategory={getAuthorByCategory} />
      <TrendingStories articles={allTrendingArticles} />
    </main>
  );
}
