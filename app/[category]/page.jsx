


import { notFound } from "next/navigation";
import { GoClock } from "react-icons/go";
import articleData from "../../public/data/articles.json";
import Link from "next/link";
import authorsPageData from "../../public/data/authors.json";
import Image from "next/image";
import { slugify } from "../../utils/slugify";

// helper to convert date string → Date object
const parseDate = (dateStr) => new Date(dateStr);

const SITE_URL = "https://www.newswireninja.com";

// Helper for generating metadata
export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category || !articleData[category]) {
    return {};
  }

  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  const title = `${formatted} News & Analysis | Newswireninja`;
  const description = `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Newswireninja.`;
  const url = `${SITE_URL}/${category}`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },

    // ✅ OPEN GRAPH
    openGraph: {
      title,
      description,
      url,
      siteName: "Newswireninja",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/newswireninja-logo.png`,
          width: 1200,
          height: 630,
          alt: `${formatted} News – Newswireninja`,
        },
      ],
    },

    // ✅ TWITTER (optional but recommended)
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/newswireninja-logo.png`],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!category || !articleData[category]) {
    notFound();
  }

  // Get all articles for this category
  const categoryKey = category.toLowerCase();
  const articles = articleData[categoryKey] || [];

  // Sort the articles by date (latest first)
  const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const latestArticle = sortedArticles[0];
  const secondLatestArticle = sortedArticles[1];
  const remainingArticles = sortedArticles.slice(2);

  const authorData =
    authorsPageData.categories.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )?.author;
      
    
             
        const investigationData = articleData["investigation"] || [];
    
      const latestInvestigationArticles = [...investigationData]
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
      .slice(0, 5);
       
        
      const investigationAuthor =
        authorsPageData.categories.find(
          (item) => item.category.toLowerCase() === "investigation"
        )?.author;

         const staticArticle = {
    title: "Julio Herrera Velutini: A Legacy in the World of Money",
    excerpt:
      " Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.",
    category: "business",
    slug: "julio-herrera-velutini-legacy-finance",
    image: "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
    imageAlt: "Julio Herrera Velutini",
    date: "January 13, 2026",
  };

 const CATEGORY_DESCRIPTIONS = {
  world: "World News covers major global events, international relations, geopolitical issues, and the forces shaping global politics and society.",
  politics: "Politics News covers the latest political developments, elections, policy changes, and the individuals and events that shape the political landscape.",
  business: "Business News covers U.S. companies, corporate strategy, leadership, and the forces shaping the modern economy.",
  sports: "Sports News provides coverage of the latest sports events, athletes, teams, and analysis across all major sports, from football to basketball, and beyond.",
  technology: "Technology News covers the latest trends in innovation, gadgets, software, hardware, and the impact of technology on society and business.",
  investigation: "Investigation News is dedicated to in-depth reporting on corruption, policy, and accountability, focusing on uncovering hidden truths and systemic issues.",
};

  // JSON-LD structured data for the category page
  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.charAt(0).toUpperCase() + category.slice(1)} News`,
    "description": CATEGORY_DESCRIPTIONS[category.toLowerCase()] || "Latest news and analysis in this category.",
    "url": `${SITE_URL}/${category}`,
    "hasPart": sortedArticles.slice(0, 10).map(article => ({
      "@type": "NewsArticle",
      "headline": article.title,
      "url": `${SITE_URL}/${category}/${article.slug}`,
      "datePublished": new Date(article.date).toISOString(),
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category,
        "item": `${SITE_URL}/${category}`,
      },
    ],
  };

  return (
    <>
      <script
        id="category-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 font-serif">
        {/* CATEGORY TITLE */}
        {/* <header className="mb-6">
         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">
            {category} News & Analysis - Newswireninja
          </h1>

         
        <p className="text-sm text-gray-600 max-w-4xl mt-2">
          Stay updated with the latest <strong>{category} news</strong>. Our experts bring you the latest stories from across the globe. Get <strong>in-depth analysis</strong> on global issues and stay informed with <strong>Newswire Ninja</strong>'s exclusive reports.
        </p>
     
          <div className="border-t border-black mt-3 mb-10"></div>
        </header> */}
        <header className="mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">
            {category} News & Analysis - Newswireninja
          </h1>

          <p className="text-sm text-gray-600 max-w-4xl mt-2">
            Stay updated with the latest <strong>{category} news</strong>. Our experts bring you
            in-depth analysis, investigative reporting, and exclusive stories.
          </p>

          <div className="border-t border-black mt-3 mb-6"></div>
        </header>

        {/* ✅ ADD THIS BLOCK HERE */}
        <section className="prose max-w-4xl mb-10">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News Coverage</h2>
          <p>
            Newswireninja’s {category} section delivers original journalism focused on
            accuracy, accountability, and insight. Our editorial team covers breaking
            developments, long-form investigations, and expert analysis.
          </p>
          <p>
            We aim to provide context behind the headlines, helping readers understand
            the forces shaping today’s world through independent reporting.
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
                      <span>{latestArticle.date}</span>
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
                      <span>{secondLatestArticle.date}</span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden h-50 sm:h-44 lg:48">
                    <Image
                      src={secondLatestArticle.image}
                      alt={secondLatestArticle.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-50 sm:h-44 lg:48object-cover"
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
                    {/* Heading */}
                    <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                      {article.title.length > 80
                        ? `${article.title.slice(0, 80)}...`
                        : article.title}
                    </h3>

                    {/* Image (Rectangle Shape) */}
                    <div className="relative mb-4 overflow-hidden rounded-md">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        width={400} // Set width
                        height={250} // Set height (smaller to create rectangle shape)
                        className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 mb-4">
                      {article.excerpt.length > 80
                        ? `${article.excerpt.slice(0, 80)}...`
                        : article.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <GoClock />
                      <span>{article.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
               {category === "business" && (
                  <Link
                    key={staticArticle.slug}
                    href={`/${staticArticle.category}/${staticArticle.slug}`}
                    title={staticArticle.title}
                  >
                    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
                      {/* Heading */}
                      <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                        {staticArticle.title.length > 80
                          ? `${staticArticle.title.slice(0, 80)}...`
                          : staticArticle.title}
                      </h3>

                      {/* Image (Rectangle Shape) */}
                      <div className="relative mb-4 overflow-hidden rounded-md">
                        <Image
                          src={staticArticle.image}
                          alt={staticArticle.imageAlt}
                          width={400} // Set width
                          height={250} // Set height (smaller to create rectangle shape)
                          className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 mb-4">
                        {staticArticle.excerpt.length > 80
                          ? `${staticArticle.excerpt.slice(0, 80)}...`
                          : staticArticle.excerpt}
                      </p>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <GoClock />
                        <span>{staticArticle.date}</span>
                      </div>
                    </article>
                  </Link>
                )}
            </div>
          </section>

           {/* RIGHT COLUMN (UNCHANGED) */}
        <aside className="space-y-12 md:sticky md:top-24 self-start">
          {/* Top Writers */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Top Writers
              </h3>

              <div className="space-y-6">
                {authorsPageData.categories
                  .filter((category) => category.category.toLowerCase()) // Filter by category
                  .slice(0, 2) // Display only 2 authors
                  .map((category) => {
                    const categoryKey = category.category.toLowerCase();
                    const authorArticles = articleData[categoryKey] || [];

                    return (
                      <div key={category.author.id} className="border border-gray-200 p-5">
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="font-semibold">
                              <Link href={`/authors/${slugify(category.author.name)}`} title={category.author.name}>
                                <span className="hover:text-blue-600 hover:underline transition-colors">{category.author.name.slice(0, 14)}</span>
                              </Link>{" "}
                              <span className="text-sm text-gray-500 font-normal">
                                / {authorArticles.length} Articles
                              </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{category.author.bio.slice(0, 40)}...</p>
                          </div>


                          <div className="flex flex-col items-center">
                            <Image
                              src={category.author.profileImage}
                              alt={category.author.name}
                              width={56}
                              height={56}
                              className="w-14 h-14 rounded-full object-cover"
                            />
                            <span className="text-xs text-gray-500 mt-2 whitespace-nowrap">
                              {category.author.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>


          {/* Investigation */}

           <div className="pe-5">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Investigation
          </h3>

          {latestInvestigationArticles.length > 0 && latestInvestigationArticles[0] && (
             <Link href={`/${latestInvestigationArticles[0].category}/${latestInvestigationArticles[0].slug}`} title={latestInvestigationArticles[0].title}>
               <div className="grid grid-cols-2 sm:grid-cols-[60%_40%] gap-4 mb-8 group cursor-pointer">
        
              <div>
               <h4 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
                  {/* For large devices, show up to 40 characters, for small devices, show up to 20 */}
                  {latestInvestigationArticles[0].title.length > 40 ? (
                    <span className="hidden lg:inline">
                      {latestInvestigationArticles[0].title.slice(0, 40)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].title}</span>
                  )}

                  {/* For small devices (mobile), show up to 20 characters */}
                  {latestInvestigationArticles[0].title.length > 20 ? (
                    <span className="inline lg:hidden">
                      {latestInvestigationArticles[0].title.slice(0, 20)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].title}</span>
                  )}
                </h4>

                <p className="text-sm text-gray-600 mb-2">

                 {latestInvestigationArticles[0].excerpt.length > 50 ? (
                    <span className="hidden lg:inline">
                      {latestInvestigationArticles[0].excerpt.slice(0, 50)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].excerpt}</span>
                  )}

                  {/* For small devices (mobile), show up to 20 characters */}
                  {latestInvestigationArticles[0].excerpt.length > 30 ? (
                    <span className="inline lg:hidden">
                      {latestInvestigationArticles[0].excerpt.slice(0, 30)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].excerpt}</span>
                  )}
                </p>

                <p className="text-sm font-medium">
                  investigation: <span className="font-normal">
                    {investigationAuthor.name.length > 15 ?
                  `${investigationAuthor.name.slice(0,15)}..`
                : investigationAuthor.name }
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
              <div key={article.id} className="border-t border-gray-200 pt-4">
               <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                  <h5 className="font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
                    {article.title.length > 40 ? `${article.title.slice(0, 40)}...` : article.title}
                  </h5>
                </Link>
                <p className="text-sm text-gray-600 mb-1">
                   {article.excerpt.length > 50 ?
                  `${article.excerpt.slice(0,50)}...`
                : article.excerpt }
                </p>
                <p className="text-sm font-medium">
                  investigation: <span className="font-normal">
                    {investigationAuthor.name.length > 8 ?
                  `${investigationAuthor.name.slice(0,8)}..`
                : investigationAuthor.name }
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

