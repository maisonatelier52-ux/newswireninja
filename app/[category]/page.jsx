import { notFound } from "next/navigation";
import { GoClock } from "react-icons/go";
import articleData from "../../public/data/articles.json";
import Link from "next/link";
import authorsPageData from "../../public/data/authors.json";
import Image from "next/image";
import { slugify } from "../../utils/slugify";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

// Helper: parse date in DD/MM/YYYY format
const parseDate = (dateStr) => {
  if (!dateStr) return new Date(0);
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
};

// Helper: format DD/MM/YYYY → "January 1, 2026"
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return dateStr;
};

// Helper: parse to ISO string for schema
const toISOString = (dateStr) => {
  if (!dateStr) return new Date().toISOString();
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day).toISOString();
  }
  return new Date(dateStr).toISOString();
};

export async function generateStaticParams() {
  return Object.keys(articleData).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category || !articleData[category]) {
    return {};
  }

  const formatted = category.charAt(0).toUpperCase() + category.slice(1);

  const CATEGORY_DESCRIPTIONS = {
    world:
      "World News covers major global events, international relations, geopolitical issues, and the forces shaping global politics and society.",
    politics:
      "Politics News covers the latest political developments, elections, policy changes, and the individuals and events that shape the political landscape.",
    business:
      "Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",
    sports:
      "Sports News provides coverage of the latest sports events, athletes, teams, and analysis across all major sports.",
    technology:
      "Technology News covers the latest trends in innovation, gadgets, software, hardware, and the impact of technology on society.",
    investigation:
      "Investigation News is dedicated to in-depth reporting on corruption, policy, and accountability.",
  };

  const description =
    CATEGORY_DESCRIPTIONS[category.toLowerCase()] ||
    `Latest ${formatted.toLowerCase()} news, original analysis, exclusive angles, and investigative journalism from Newswireninja — independent reporting you can trust.`;

  const title = `${formatted} News & Analysis | Newswireninja`;
  const url = `${SITE_URL}/${category}`;

  return {
    title,
    description,
    keywords: [
      `${formatted.toLowerCase()} news`,
      `latest ${formatted.toLowerCase()}`,
      `${formatted.toLowerCase()} headlines`,
      `${formatted.toLowerCase()} updates`,
      "breaking news",
      "news analysis",
      "expert coverage",
      "independent journalism",
      "original reporting",
    ],
    authors: [{ name: "Newswireninja Editorial Team" }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/images/newswireninja-logo.webp`,
          width: 1200,
          height: 630,
          alt: `${formatted} News – Newswireninja`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!category || !articleData[category]) {
    notFound();
  }

  const categoryKey = category.toLowerCase();
  const articles = articleData[categoryKey] || [];

  const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const latestArticle = sortedArticles[0];
  const secondLatestArticle = sortedArticles[1];
  const remainingArticles = sortedArticles.slice(2);

  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

  const investigationData = articleData["investigation"] || [];
  const latestInvestigationArticles = [...investigationData]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 5);

  const investigationAuthor = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === "investigation"
  )?.author;

  const staticArticle = {
    title: "Julio Herrera Velutini: A Legacy in the World of Money",
    excerpt:
      "Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.",
    category: "business",
    slug: "julio-herrera-velutini-legacy-finance",
    image:
      "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
    imageAlt: "Julio Herrera Velutini",
    date: "13/01/2026",
  };

  const CATEGORY_DESCRIPTIONS = {
    world:
      "World News covers major global events, international relations, geopolitical issues, and the forces shaping global politics and society.",
    politics:
      "Politics News covers the latest political developments, elections, policy changes, and the individuals and events that shape the political landscape.",
    business:
      "Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",
    sports:
      "Sports News provides coverage of the latest sports events, athletes, teams, and analysis across all major sports.",
    technology:
      "Technology News covers the latest trends in innovation, gadgets, software, hardware, and the impact of technology on society.",
    investigation:
      "Investigation News is dedicated to in-depth reporting on corruption, policy, and accountability.",
  };

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // JSON-LD: CollectionPage
  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/${categoryKey}#collectionpage`,
    name: `${formattedCategory} News`,
    description:
      CATEGORY_DESCRIPTIONS[categoryKey] ||
      `Latest ${formattedCategory.toLowerCase()} news and analysis.`,
    url: `${SITE_URL}/${categoryKey}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: sortedArticles.length,
      itemListElement: sortedArticles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${categoryKey}/${article.slug}`,
        item: {
          "@type": "NewsArticle",
          headline: article.title,
          description: article.excerpt,
          datePublished: toISOString(article.date),
          dateModified: toISOString(article.date),
          image: article.image
            ? `${SITE_URL}${article.image}`
            : `${SITE_URL}/images/newswireninja-logo.webp`,
          url: `${SITE_URL}/${categoryKey}/${article.slug}`,
          author: authorData
            ? {
                "@type": "Person",
                name: authorData.name,
                url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
              }
            : {
                "@type": "Organization",
                name: SITE_NAME,
              },
          publisher: {
            "@type": "NewsMediaOrganization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/images/newswireninja-logo.webp`,
            },
          },
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${formattedCategory} News`,
        item: `${SITE_URL}/${categoryKey}`,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${categoryKey}#webpage`,
    url: `${SITE_URL}/${categoryKey}`,
    name: `${formattedCategory} News & Analysis — Newswireninja`,
    description:
      CATEGORY_DESCRIPTIONS[categoryKey] ||
      `Latest ${formattedCategory.toLowerCase()} news and analysis.`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
    },
    about: {
      "@type": "Thing",
      name: formattedCategory,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
    },
  };

  return (
    <>
      <script
        id="category-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 font-serif">
        {/* SEO hidden content */}
        <section className="sr-only">
          <h1>
            {formattedCategory} News & Analysis — Breaking Headlines &amp; Expert
            Reporting
          </h1>
          <p>
            Welcome to Newswireninja&apos;s {formattedCategory.toLowerCase()} section,
            your trusted source for breaking {formattedCategory.toLowerCase()} news,
            in-depth analysis, and expert commentary. Browse our collection of{" "}
            {sortedArticles.length} {formattedCategory.toLowerCase()} articles written
            by experienced journalists committed to accuracy and independence.
          </p>
        </section>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" title="Home page">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-600 capitalize">{category}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">
            {category} News &amp; Analysis — Newswireninja
          </h1>
          <p className="text-sm text-gray-600 max-w-4xl mt-2">
            Stay updated with the latest <strong>{category} news</strong>. Our
            experts bring you in-depth analysis, investigative reporting, and
            exclusive stories you won&apos;t find aggregated elsewhere.
          </p>
          <div className="border-t border-black mt-3 mb-6"></div>
        </header>

        {/* Category description prose — UPDATED for stronger E-E-A-T signals */}
        <section className="prose max-w-4xl mb-10">
          <h2>{formattedCategory} News Coverage</h2>
          <p>
            Newswireninja&apos;s {category} section is built on original journalism
            with a commitment to accuracy, independence, and depth. Our editorial
            team delivers breaking developments, long-form investigations, expert
            commentary, and exclusive perspectives you won&apos;t find aggregated
            elsewhere.
          </p>
          <p>
            We go beyond headlines — providing historical context, future
            implications, data-driven insights, and balanced analysis to help
            readers understand the real forces shaping{" "}
            {category.toLowerCase()} today.
          </p>
          <p className="font-medium text-blue-700">
            Every story is verified, sourced transparently, and written by
            experienced journalists who stand behind their reporting.
          </p>
        </section>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 pb-10">
          {/* LEFT COLUMN */}
          <section className="md:border-r md:pr-8 border-gray-300">
            {/* LATEST ARTICLE (FEATURED) */}
            {latestArticle && (
              <Link
                href={`/${category}/${latestArticle.slug}`}
                title={latestArticle.title}
              >
                <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
                  <div>
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase mb-3">
                      Latest
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition group-hover:text-blue-600 group-hover:underline">
                      {latestArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {latestArticle.excerpt.length > 150
                        ? `${latestArticle.excerpt.slice(0, 150)}...`
                        : latestArticle.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <span className="font-medium text-gray-600">
                        By{" "}
                        <span className="text-black font-medium">
                          {authorData?.name}
                        </span>
                      </span>
                      <span className="h-4 w-px bg-gray-300"></span>
                      <GoClock />
                      <time dateTime={toISOString(latestArticle.date)}>
                        {formatDate(latestArticle.date)}
                      </time>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Image
                      src={latestArticle.image}
                      alt={latestArticle.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-64 sm:h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                </article>
              </Link>
            )}

            <div className="border-b border-gray-300 mt-10"></div>

            {/* SECOND LATEST ARTICLE */}
            {secondLatestArticle && (
              <Link
                href={`/${category}/${secondLatestArticle.slug}`}
                title={secondLatestArticle.title}
              >
                <article className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 py-8 group cursor-pointer">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
                      {secondLatestArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {secondLatestArticle.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <span className="font-medium text-black">
                        By {authorData?.name}
                      </span>
                      <span className="h-4 w-px bg-gray-300"></span>
                      <GoClock />
                      <time dateTime={toISOString(secondLatestArticle.date)}>
                        {formatDate(secondLatestArticle.date)}
                      </time>
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-50 sm:h-44 lg:h-48">
                    <Image
                      src={secondLatestArticle.image}
                      alt={secondLatestArticle.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-500/40 group-hover:bg-transparent transition"></div>
                  </div>
                </article>
              </Link>
            )}

            {/* Remaining Articles Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${category}/${article.slug}`}
                  title={article.title}
                >
                  <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
                    <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                      {article.title.length > 80
                        ? `${article.title.slice(0, 80)}...`
                        : article.title}
                    </h3>
                    <div className="relative mb-4 overflow-hidden rounded-md">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        width={400}
                        height={250}
                        className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.excerpt.length > 80
                        ? `${article.excerpt.slice(0, 80)}...`
                        : article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <GoClock />
                      <time dateTime={toISOString(article.date)}>
                        {formatDate(article.date)}
                      </time>
                    </div>
                  </article>
                </Link>
              ))}

              {/* Static card for business category */}
              {category === "business" && (
                <Link
                  href={`/business/${staticArticle.slug}`}
                  title={staticArticle.title}
                >
                  <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
                    <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                      {staticArticle.title.length > 80
                        ? `${staticArticle.title.slice(0, 80)}...`
                        : staticArticle.title}
                    </h3>
                    <div className="relative mb-4 overflow-hidden rounded-md">
                      <Image
                        src={staticArticle.image}
                        alt={staticArticle.imageAlt}
                        width={400}
                        height={250}
                        className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {staticArticle.excerpt.length > 80
                        ? `${staticArticle.excerpt.slice(0, 80)}...`
                        : staticArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <GoClock />
                      <time dateTime={toISOString(staticArticle.date)}>
                        {formatDate(staticArticle.date)}
                      </time>
                    </div>
                  </article>
                </Link>
              )}
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-12 md:sticky md:top-24 self-start">
            {/* Top Writers */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Top Writers
              </h3>
              <div className="space-y-6">
                {authorsPageData.categories
                  .filter((cat) => cat.category.toLowerCase())
                  .slice(0, 2)
                  .map((cat) => {
                    const catKey = cat.category.toLowerCase();
                    const authorArticles = articleData[catKey] || [];
                    return (
                      <div
                        key={cat.author.id}
                        className="border border-gray-200 p-5"
                      >
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="font-semibold">
                              <Link
                                href={`/authors/${slugify(cat.author.name)}`}
                                title={cat.author.name}
                              >
                                <span className="hover:text-blue-600 hover:underline transition-colors">
                                  {cat.author.name.slice(0, 14)}
                                </span>
                              </Link>{" "}
                              <span className="text-sm text-gray-500 font-normal">
                                / {authorArticles.length} Articles
                              </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                              {cat.author.bio.slice(0, 40)}...
                            </p>
                          </div>
                          <div className="flex flex-col items-center">
                            <Image
                              src={cat.author.profileImage}
                              alt={cat.author.name}
                              width={56}
                              height={56}
                              className="w-14 h-14 rounded-full object-cover"
                            />
                            <span className="text-xs text-gray-500 mt-2 whitespace-nowrap">
                              {cat.author.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Investigation Sidebar */}
            <div className="pe-5">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Investigation
              </h3>

              {latestInvestigationArticles.length > 0 &&
                latestInvestigationArticles[0] && (
                  <Link
                    href={`/${latestInvestigationArticles[0].category}/${latestInvestigationArticles[0].slug}`}
                    title={latestInvestigationArticles[0].title}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-[60%_40%] gap-4 mb-8 group cursor-pointer">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
                          <span className="hidden lg:inline">
                            {latestInvestigationArticles[0].title.length > 40
                              ? `${latestInvestigationArticles[0].title.slice(0, 40)}...`
                              : latestInvestigationArticles[0].title}
                          </span>
                          <span className="inline lg:hidden">
                            {latestInvestigationArticles[0].title.length > 20
                              ? `${latestInvestigationArticles[0].title.slice(0, 20)}...`
                              : latestInvestigationArticles[0].title}
                          </span>
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="hidden lg:inline">
                            {latestInvestigationArticles[0].excerpt.length > 50
                              ? `${latestInvestigationArticles[0].excerpt.slice(0, 50)}...`
                              : latestInvestigationArticles[0].excerpt}
                          </span>
                          <span className="inline lg:hidden">
                            {latestInvestigationArticles[0].excerpt.length > 30
                              ? `${latestInvestigationArticles[0].excerpt.slice(0, 30)}...`
                              : latestInvestigationArticles[0].excerpt}
                          </span>
                        </p>
                        <p className="text-sm font-medium">
                          investigation:{" "}
                          <span className="font-normal">
                            {investigationAuthor?.name?.length > 15
                              ? `${investigationAuthor.name.slice(0, 15)}..`
                              : investigationAuthor?.name}
                          </span>
                        </p>
                      </div>
                      <div className="overflow-hidden">
                        <Image
                          src={latestInvestigationArticles[0].image}
                          alt={latestInvestigationArticles[0].imageAlt}
                          width={400}
                          height={300}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>
                )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestInvestigationArticles.slice(1).map((article) => (
                  <div
                    key={article.id}
                    className="border-t border-gray-200 pt-4"
                  >
                    <Link
                      href={`/${article.category}/${article.slug}`}
                      title={article.title}
                    >
                      <h5 className="font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
                        {article.title.length > 40
                          ? `${article.title.slice(0, 40)}...`
                          : article.title}
                      </h5>
                    </Link>
                    <p className="text-sm text-gray-600 mb-1">
                      {article.excerpt.length > 50
                        ? `${article.excerpt.slice(0, 50)}...`
                        : article.excerpt}
                    </p>
                    <p className="text-sm font-medium">
                      investigation:{" "}
                      <span className="font-normal">
                        {investigationAuthor?.name?.length > 8
                          ? `${investigationAuthor.name.slice(0, 8)}..`
                          : investigationAuthor?.name}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
// import { notFound } from "next/navigation";
// import { GoClock } from "react-icons/go";
// import articleData from "../../public/data/articles.json";
// import Link from "next/link";
// import authorsPageData from "../../public/data/authors.json";
// import Image from "next/image";
// import { slugify } from "../../utils/slugify";

// const SITE_URL = "https://www.newswireninja.com";
// const SITE_NAME = "Newswireninja";

// // Helper: parse date in DD/MM/YYYY format
// const parseDate = (dateStr) => {
//   if (!dateStr) return new Date(0);
//   if (dateStr.includes("/")) {
//     const [day, month, year] = dateStr.split("/");
//     return new Date(year, month - 1, day);
//   }
//   return new Date(dateStr);
// };

// // Helper: format DD/MM/YYYY → "January 1, 2026"
// const formatDate = (dateStr) => {
//   if (!dateStr) return "";
//   if (dateStr.includes("/")) {
//     const [day, month, year] = dateStr.split("/");
//     const date = new Date(year, month - 1, day);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   }
//   return dateStr;
// };

// // Helper: parse to ISO string for schema
// const toISOString = (dateStr) => {
//   if (!dateStr) return new Date().toISOString();
//   if (dateStr.includes("/")) {
//     const [day, month, year] = dateStr.split("/");
//     return new Date(year, month - 1, day).toISOString();
//   }
//   return new Date(dateStr).toISOString();
// };

// export async function generateStaticParams() {
//   return Object.keys(articleData).map((category) => ({ category }));
// }

// export async function generateMetadata({ params }) {
//   const { category } = await params;

//   if (!category || !articleData[category]) {
//     return {};
//   }

//   const formatted = category.charAt(0).toUpperCase() + category.slice(1);

//   const CATEGORY_DESCRIPTIONS = {
//     world:
//       "World News covers major global events, international relations, geopolitical issues, and the forces shaping global politics and society.",
//     politics:
//       "Politics News covers the latest political developments, elections, policy changes, and the individuals and events that shape the political landscape.",
//     business:
//       "Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",
//     sports:
//       "Sports News provides coverage of the latest sports events, athletes, teams, and analysis across all major sports.",
//     technology:
//       "Technology News covers the latest trends in innovation, gadgets, software, hardware, and the impact of technology on society.",
//     investigation:
//       "Investigation News is dedicated to in-depth reporting on corruption, policy, and accountability.",
//   };

//   const description =
//     CATEGORY_DESCRIPTIONS[category.toLowerCase()] ||
//     `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Newswireninja.`;

//   const title = `${formatted} News & Analysis | Newswireninja`;
//   const url = `${SITE_URL}/${category}`;

//   return {
//     title,
//     description,
//     keywords: [
//       `${formatted.toLowerCase()} news`,
//       `latest ${formatted.toLowerCase()}`,
//       `${formatted.toLowerCase()} headlines`,
//       `${formatted.toLowerCase()} updates`,
//       "breaking news",
//       "news analysis",
//       "expert coverage",
//     ],
//     authors: [{ name: "Newswireninja Editorial Team" }],
//     creator: SITE_NAME,
//     publisher: SITE_NAME,
//     alternates: {
//       canonical: url,
//     },
//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: SITE_NAME,
//       type: "website",
//       locale: "en_US",
//       images: [
//         {
//           url: `${SITE_URL}/images/newswireninja-logo.webp`,
//           width: 1200,
//           height: 630,
//           alt: `${formatted} News – Newswireninja`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [`${SITE_URL}/images/newswireninja-logo.webp`],
//       creator: "@newswireninja",
//       site: "@newswireninja",
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//   };
// }

// export default async function CategoryPage({ params }) {
//   const { category } = await params;

//   if (!category || !articleData[category]) {
//     notFound();
//   }

//   const categoryKey = category.toLowerCase();
//   const articles = articleData[categoryKey] || [];

//   const sortedArticles = [...articles].sort(
//     (a, b) => parseDate(b.date) - parseDate(a.date)
//   );

//   const latestArticle = sortedArticles[0];
//   const secondLatestArticle = sortedArticles[1];
//   const remainingArticles = sortedArticles.slice(2);

//   const authorData = authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === categoryKey
//   )?.author;

//   const investigationData = articleData["investigation"] || [];
//   const latestInvestigationArticles = [...investigationData]
//     .sort((a, b) => parseDate(b.date) - parseDate(a.date))
//     .slice(0, 5);

//   const investigationAuthor = authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === "investigation"
//   )?.author;

//   const staticArticle = {
//     title: "Julio Herrera Velutini: A Legacy in the World of Money",
//     excerpt:
//       "Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.",
//     category: "business",
//     slug: "julio-herrera-velutini-legacy-finance",
//     image:
//       "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
//     imageAlt: "Julio Herrera Velutini",
//     date: "13/01/2026",
//   };

//   const CATEGORY_DESCRIPTIONS = {
//     world:
//       "World News covers major global events, international relations, geopolitical issues, and the forces shaping global politics and society.",
//     politics:
//       "Politics News covers the latest political developments, elections, policy changes, and the individuals and events that shape the political landscape.",
//     business:
//       "Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",
//     sports:
//       "Sports News provides coverage of the latest sports events, athletes, teams, and analysis across all major sports.",
//     technology:
//       "Technology News covers the latest trends in innovation, gadgets, software, hardware, and the impact of technology on society.",
//     investigation:
//       "Investigation News is dedicated to in-depth reporting on corruption, policy, and accountability.",
//   };

//   const formattedCategory =
//     category.charAt(0).toUpperCase() + category.slice(1);

//   // JSON-LD: CollectionPage
//   const categoryJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     "@id": `${SITE_URL}/${categoryKey}#collectionpage`,
//     name: `${formattedCategory} News`,
//     description:
//       CATEGORY_DESCRIPTIONS[categoryKey] ||
//       `Latest ${formattedCategory.toLowerCase()} news and analysis.`,
//     url: `${SITE_URL}/${categoryKey}`,
//     isPartOf: {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       name: SITE_NAME,
//       url: SITE_URL,
//     },
//     publisher: {
//       "@type": "NewsMediaOrganization",
//       "@id": `${SITE_URL}/#organization`,
//       name: SITE_NAME,
//       url: SITE_URL,
//       logo: {
//         "@type": "ImageObject",
//         url: `${SITE_URL}/images/newswireninja-logo.webp`,
//       },
//     },
//     mainEntity: {
//       "@type": "ItemList",
//       itemListOrder: "https://schema.org/ItemListOrderDescending",
//       numberOfItems: sortedArticles.length,
//       itemListElement: sortedArticles.slice(0, 10).map((article, index) => ({
//         "@type": "ListItem",
//         position: index + 1,
//         url: `${SITE_URL}/${categoryKey}/${article.slug}`,
//         item: {
//           "@type": "NewsArticle",
//           headline: article.title,
//           description: article.excerpt,
//           datePublished: toISOString(article.date),
//           dateModified: toISOString(article.date),
//           image: article.image
//             ? `${SITE_URL}${article.image}`
//             : `${SITE_URL}/images/newswireninja-logo.webp`,
//           url: `${SITE_URL}/${categoryKey}/${article.slug}`,
//           author: authorData
//             ? {
//                 "@type": "Person",
//                 name: authorData.name,
//                 url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
//               }
//             : {
//                 "@type": "Organization",
//                 name: SITE_NAME,
//               },
//           publisher: {
//             "@type": "NewsMediaOrganization",
//             name: SITE_NAME,
//             url: SITE_URL,
//             logo: {
//               "@type": "ImageObject",
//               url: `${SITE_URL}/images/newswireninja-logo.webp`,
//             },
//           },
//         },
//       })),
//     },
//   };

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: SITE_URL,
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: `${formattedCategory} News`,
//         item: `${SITE_URL}/${categoryKey}`,
//       },
//     ],
//   };

//   const webPageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": `${SITE_URL}/${categoryKey}#webpage`,
//     url: `${SITE_URL}/${categoryKey}`,
//     name: `${formattedCategory} News & Analysis — Newswireninja`,
//     description:
//       CATEGORY_DESCRIPTIONS[categoryKey] ||
//       `Latest ${formattedCategory.toLowerCase()} news and analysis.`,
//     isPartOf: {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       name: SITE_NAME,
//       url: SITE_URL,
//     },
//     breadcrumb: {
//       "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
//     },
//     about: {
//       "@type": "Thing",
//       name: formattedCategory,
//     },
//     primaryImageOfPage: {
//       "@type": "ImageObject",
//       url: `${SITE_URL}/images/newswireninja-logo.webp`,
//     },
//   };

//   return (
//     <>
//       <script
//         id="category-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
//       />
//       <script
//         id="breadcrumb-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />
//       <script
//         id="webpage-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
//       />

//       <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 font-serif">
//         {/* SEO hidden content */}
//         <section className="sr-only">
//           <h1>
//             {formattedCategory} News & Analysis — Breaking Headlines &amp; Expert
//             Reporting
//           </h1>
//           <p>
//             Welcome to Newswireninja&apos;s {formattedCategory.toLowerCase()} section,
//             your trusted source for breaking {formattedCategory.toLowerCase()} news,
//             in-depth analysis, and expert commentary. Browse our collection of{" "}
//             {sortedArticles.length} {formattedCategory.toLowerCase()} articles.
//           </p>
//         </section>

//         {/* Breadcrumb */}
//         <nav aria-label="Breadcrumb" className="mb-6">
//           <ol className="flex items-center gap-2 text-sm">
//             <li>
//               <Link href="/" title="Home page">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li className="text-gray-600 capitalize">{category}</li>
//           </ol>
//         </nav>

//         {/* Header */}
//         <header className="mb-6">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">
//             {category} News &amp; Analysis — Newswireninja
//           </h1>
//           <p className="text-sm text-gray-600 max-w-4xl mt-2">
//             Stay updated with the latest <strong>{category} news</strong>. Our
//             experts bring you in-depth analysis, investigative reporting, and
//             exclusive stories.
//           </p>
//           <div className="border-t border-black mt-3 mb-6"></div>
//         </header>

//         {/* Category description prose */}
//         <section className="prose max-w-4xl mb-10">
//           <h2>
//             {formattedCategory} News Coverage
//           </h2>
//           <p>
//             Newswireninja&apos;s {category} section delivers original journalism
//             focused on accuracy, accountability, and insight. Our editorial team
//             covers breaking developments, long-form investigations, and expert
//             analysis.
//           </p>
//           <p>
//             We aim to provide context behind the headlines, helping readers
//             understand the forces shaping today&apos;s world through independent
//             reporting.
//           </p>
//         </section>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 pb-10">
//           {/* LEFT COLUMN */}
//           <section className="md:border-r md:pr-8 border-gray-300">
//             {/* LATEST ARTICLE (FEATURED) */}
//             {latestArticle && (
//               <Link
//                 href={`/${category}/${latestArticle.slug}`}
//                 title={latestArticle.title}
//               >
//                 <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
//                   <div>
//                     <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase mb-3">
//                       Latest
//                     </span>
//                     <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition group-hover:text-blue-600 group-hover:underline">
//                       {latestArticle.title}
//                     </h2>
//                     <p className="text-gray-600 mb-4">
//                       {latestArticle.excerpt.length > 150
//                         ? `${latestArticle.excerpt.slice(0, 150)}...`
//                         : latestArticle.excerpt}
//                     </p>
//                     <div className="flex items-center text-sm text-gray-500 gap-3">
//                       <span className="font-medium text-gray-600">
//                         By{" "}
//                         <span className="text-black font-medium">
//                           {authorData?.name}
//                         </span>
//                       </span>
//                       <span className="h-4 w-px bg-gray-300"></span>
//                       <GoClock />
//                       <time dateTime={toISOString(latestArticle.date)}>
//                         {formatDate(latestArticle.date)}
//                       </time>
//                     </div>
//                   </div>
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={latestArticle.image}
//                       alt={latestArticle.imageAlt}
//                       width={800}
//                       height={600}
//                       className="w-full h-64 sm:h-full object-cover"
//                       priority
//                     />
//                     <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>
//                   </div>
//                 </article>
//               </Link>
//             )}

//             <div className="border-b border-gray-300 mt-10"></div>

//             {/* SECOND LATEST ARTICLE */}
//             {secondLatestArticle && (
//               <Link
//                 href={`/${category}/${secondLatestArticle.slug}`}
//                 title={secondLatestArticle.title}
//               >
//                 <article className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 py-8 group cursor-pointer">
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
//                       {secondLatestArticle.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4">
//                       {secondLatestArticle.excerpt}
//                     </p>
//                     <div className="flex items-center text-sm text-gray-500 gap-3">
//                       <span className="font-medium text-black">
//                         By {authorData?.name}
//                       </span>
//                       <span className="h-4 w-px bg-gray-300"></span>
//                       <GoClock />
//                       <time dateTime={toISOString(secondLatestArticle.date)}>
//                         {formatDate(secondLatestArticle.date)}
//                       </time>
//                     </div>
//                   </div>
//                   <div className="relative overflow-hidden h-50 sm:h-44 lg:h-48">
//                     <Image
//                       src={secondLatestArticle.image}
//                       alt={secondLatestArticle.imageAlt}
//                       width={600}
//                       height={400}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gray-500/40 group-hover:bg-transparent transition"></div>
//                   </div>
//                 </article>
//               </Link>
//             )}

//             {/* Remaining Articles Grid */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {remainingArticles.map((article) => (
//                 <Link
//                   key={article.slug}
//                   href={`/${category}/${article.slug}`}
//                   title={article.title}
//                 >
//                   <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
//                     <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
//                       {article.title.length > 80
//                         ? `${article.title.slice(0, 80)}...`
//                         : article.title}
//                     </h3>
//                     <div className="relative mb-4 overflow-hidden rounded-md">
//                       <Image
//                         src={article.image}
//                         alt={article.imageAlt}
//                         width={400}
//                         height={250}
//                         className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">
//                       {article.excerpt.length > 80
//                         ? `${article.excerpt.slice(0, 80)}...`
//                         : article.excerpt}
//                     </p>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <GoClock />
//                       <time dateTime={toISOString(article.date)}>
//                         {formatDate(article.date)}
//                       </time>
//                     </div>
//                   </article>
//                 </Link>
//               ))}

//               {/* Static card for business category */}
//               {category === "business" && (
//                 <Link
//                   href={`/business/${staticArticle.slug}`}
//                   title={staticArticle.title}
//                 >
//                   <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
//                     <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
//                       {staticArticle.title.length > 80
//                         ? `${staticArticle.title.slice(0, 80)}...`
//                         : staticArticle.title}
//                     </h3>
//                     <div className="relative mb-4 overflow-hidden rounded-md">
//                       <Image
//                         src={staticArticle.image}
//                         alt={staticArticle.imageAlt}
//                         width={400}
//                         height={250}
//                         className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">
//                       {staticArticle.excerpt.length > 80
//                         ? `${staticArticle.excerpt.slice(0, 80)}...`
//                         : staticArticle.excerpt}
//                     </p>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <GoClock />
//                       <time dateTime={toISOString(staticArticle.date)}>
//                         {formatDate(staticArticle.date)}
//                       </time>
//                     </div>
//                   </article>
//                 </Link>
//               )}
//             </div>
//           </section>

//           {/* RIGHT COLUMN */}
//           <aside className="space-y-12 md:sticky md:top-24 self-start">
//             {/* Top Writers */}
//             <div>
//               <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                 Top Writers
//               </h3>
//               <div className="space-y-6">
//                 {authorsPageData.categories
//                   .filter((cat) => cat.category.toLowerCase())
//                   .slice(0, 2)
//                   .map((cat) => {
//                     const catKey = cat.category.toLowerCase();
//                     const authorArticles = articleData[catKey] || [];
//                     return (
//                       <div
//                         key={cat.author.id}
//                         className="border border-gray-200 p-5"
//                       >
//                         <div className="flex justify-between gap-4">
//                           <div>
//                             <p className="font-semibold">
//                               <Link
//                                 href={`/authors/${slugify(cat.author.name)}`}
//                                 title={cat.author.name}
//                               >
//                                 <span className="hover:text-blue-600 hover:underline transition-colors">
//                                   {cat.author.name.slice(0, 14)}
//                                 </span>
//                               </Link>{" "}
//                               <span className="text-sm text-gray-500 font-normal">
//                                 / {authorArticles.length} Articles
//                               </span>
//                             </p>
//                             <p className="text-sm text-gray-600 mt-2">
//                               {cat.author.bio.slice(0, 40)}...
//                             </p>
//                           </div>
//                           <div className="flex flex-col items-center">
//                             <Image
//                               src={cat.author.profileImage}
//                               alt={cat.author.name}
//                               width={56}
//                               height={56}
//                               className="w-14 h-14 rounded-full object-cover"
//                             />
//                             <span className="text-xs text-gray-500 mt-2 whitespace-nowrap">
//                               {cat.author.role}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>

//             {/* Investigation Sidebar */}
//             <div className="pe-5">
//               <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                 Investigation
//               </h3>

//               {latestInvestigationArticles.length > 0 &&
//                 latestInvestigationArticles[0] && (
//                   <Link
//                     href={`/${latestInvestigationArticles[0].category}/${latestInvestigationArticles[0].slug}`}
//                     title={latestInvestigationArticles[0].title}
//                   >
//                     <div className="grid grid-cols-2 sm:grid-cols-[60%_40%] gap-4 mb-8 group cursor-pointer">
//                       <div>
//                         <h4 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
//                           <span className="hidden lg:inline">
//                             {latestInvestigationArticles[0].title.length > 40
//                               ? `${latestInvestigationArticles[0].title.slice(0, 40)}...`
//                               : latestInvestigationArticles[0].title}
//                           </span>
//                           <span className="inline lg:hidden">
//                             {latestInvestigationArticles[0].title.length > 20
//                               ? `${latestInvestigationArticles[0].title.slice(0, 20)}...`
//                               : latestInvestigationArticles[0].title}
//                           </span>
//                         </h4>
//                         <p className="text-sm text-gray-600 mb-2">
//                           <span className="hidden lg:inline">
//                             {latestInvestigationArticles[0].excerpt.length > 50
//                               ? `${latestInvestigationArticles[0].excerpt.slice(0, 50)}...`
//                               : latestInvestigationArticles[0].excerpt}
//                           </span>
//                           <span className="inline lg:hidden">
//                             {latestInvestigationArticles[0].excerpt.length > 30
//                               ? `${latestInvestigationArticles[0].excerpt.slice(0, 30)}...`
//                               : latestInvestigationArticles[0].excerpt}
//                           </span>
//                         </p>
//                         <p className="text-sm font-medium">
//                           investigation:{" "}
//                           <span className="font-normal">
//                             {investigationAuthor?.name?.length > 15
//                               ? `${investigationAuthor.name.slice(0, 15)}..`
//                               : investigationAuthor?.name}
//                           </span>
//                         </p>
//                       </div>
//                       <div className="overflow-hidden">
//                         <Image
//                           src={latestInvestigationArticles[0].image}
//                           alt={latestInvestigationArticles[0].imageAlt}
//                           width={400}
//                           height={300}
//                           className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
//                         />
//                       </div>
//                     </div>
//                   </Link>
//                 )}

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {latestInvestigationArticles.slice(1).map((article) => (
//                   <div
//                     key={article.id}
//                     className="border-t border-gray-200 pt-4"
//                   >
//                     <Link
//                       href={`/${article.category}/${article.slug}`}
//                       title={article.title}
//                     >
//                       <h5 className="font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
//                         {article.title.length > 40
//                           ? `${article.title.slice(0, 40)}...`
//                           : article.title}
//                       </h5>
//                     </Link>
//                     <p className="text-sm text-gray-600 mb-1">
//                       {article.excerpt.length > 50
//                         ? `${article.excerpt.slice(0, 50)}...`
//                         : article.excerpt}
//                     </p>
//                     <p className="text-sm font-medium">
//                       investigation:{" "}
//                       <span className="font-normal">
//                         {investigationAuthor?.name?.length > 8
//                           ? `${investigationAuthor.name.slice(0, 8)}..`
//                           : investigationAuthor?.name}
//                       </span>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>
//     </>
//   );
// }

