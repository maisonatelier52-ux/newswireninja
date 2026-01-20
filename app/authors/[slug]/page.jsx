
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import authorsData from "../../../public/data/authors.json";
import articlesData from "../../../public/data/articles.json";
import pillarContent from "../../../public/data/pillarContent.json";

import { slugify } from "../../../utils/slugify";

import { GoClock } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaRedditAlien } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";

const SITE_URL = "https://www.newswireninja.com";

/* ─────────────────────────────────────────────
   METADATA (APP ROUTER – REQUIRED NAME)
───────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const authorEntry = authorsData.categories.find(
    (item) => slugify(item.author.name) === slug
  );

  if (!authorEntry) {
    return {
      title: "Author not found | NewsWireNinja",
      description: "The requested author profile could not be found.",
      robots: "noindex",
    };
  }

  const { author } = authorEntry;

  return {
    title: `${author.name} – Journalist & Author | NewsWireNinja`,
    description: `Read articles and expert insights by ${author.name}, journalist at NewsWireNinja.`,

    alternates: {
      canonical: `${SITE_URL}/authors/${slug}`,
    },

    openGraph: {
      title: `${author.name} – Journalist & Author | NewsWireNinja`,
      description: `Read articles and analysis by ${author.name} at NewsWireNinja.`,
      url: `${SITE_URL}/authors/${slug}`,
      siteName: "NewsWireNinja",
      images: [
        {
          url: `${SITE_URL}${author.profileImage}`,
          width: 1200,
          height: 630,
          alt: author.name,
        },
      ],
      type: "profile",
    },

    twitter: {
      card: "summary_large_image",
      title: `${author.name} – Journalist | NewsWireNinja`,
      description: `Articles and reporting by ${author.name}.`,
      images: [`${SITE_URL}${author.profileImage}`],
    },
  };
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default async function AuthorProfile({ params }) {
  const { slug } = await params;

  const authorEntry = authorsData.categories.find(
    (item) => slugify(item.author.name) === slug
  );

  if (!authorEntry) notFound();

  const { author, category } = authorEntry;

  let authorArticles = articlesData[category.toLowerCase()] || [];

  if (category.toLowerCase() === "marketing & branding") {
    authorArticles = pillarContent.filter(
      (a) => a.category.toLowerCase() === "marketing & branding"
    );
  }

  /* ─────────────────────────────────────────────
     JSON-LD (VALID TYPES ONLY)
  ───────────────────────────────────────────── */
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: `${SITE_URL}/authors/${slug}`,
    image: `${SITE_URL}${author.profileImage}`,
    jobTitle: author.role,
    description: author.bio,
    sameAs: [
      author.social?.twitter,
      author.social?.facebook,
      author.social?.linkedIn,
      author.social?.medium,
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Authors",
        item: `${SITE_URL}/authors`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: author.name,
        item: `${SITE_URL}/authors/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="author-person-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Script
        id="author-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 py-16 font-serif"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-48 h-48">
            <Image
              src={author.profileImage}
              alt={author.name}
              fill
              priority
              className="rounded-full object-cover border-8 border-white"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold" itemProp="name">
              {author.name}
            </h1>

            <p className="sr-only">
              {author.name} is a journalist and author at NewsWireNinja.
            </p>

            <p className="text-lg text-gray-700 mt-2">{author.role}</p>

            <p className="mt-4 max-w-2xl text-gray-600">{author.bio}</p>

            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              {author.social?.twitter && (
                <a
                  href={author.social.twitter}
                  title={`${author.name} on X`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-90 transition"
                >
                  <FaXTwitter />
                </a>
              )}
              {author.social?.quora && (
                <a
                  href={author.social.quora}
                  title={`${author.name} on Quora`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-90 transition"
                >
                  <FaQuora />
                </a>
              )}
              {author.social?.reddit && (
                <a
                  href={author.social.reddit}
                  title={`${author.name} on Reddit`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-90 transition"
                >
                  <FaRedditAlien />
                </a>
              )}
              {author.social?.medium && (
                <a
                  href={author.social.medium}
                  title={`${author.name} on Medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-90 transition"
                >
                  <SiMedium />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ARTICLES */}
        {/* Articles by this Author */}
        {category.toLowerCase() === "marketing & branding" ? (
          // Render articles for "Marketing & Branding" category
          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-10">
              Articles by {author.name} ({authorArticles.length + 1})
            </h2>

            {authorArticles.length === 0 ? (
              <p className="text-gray-600 text-center py-10">
                No articles published yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Static Card for Julio Herrera Velutini */}
                <Link
                  href="/business/julio-herrera-velutini-legacy-finance"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                   title="julio herrera velutini legacy finance"
                >
                  <div className="relative h-36">
                    <Image
                      src="/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp"
                      alt="Julio Herrera Velutini: A Legacy in World Finance"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Business
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      Julio Herrera Velutini: A Legacy in World Finance
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                       Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <GoClock className="text-gray-400" />
                        <span>January 13, 2026</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Dynamic Cards for Author's Articles */}
                {authorArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/julio-herrera-velutini/${article.slug}`} // Custom URL structure for Marketing & Branding
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                     title={article.title}
                  >
                    <div className="relative h-36">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {article.subtitle}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <GoClock className="text-gray-400" />
                          <span>{article.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        ) : (
          // Render articles for other categories
          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-10">
              Articles by {author.name} ({authorArticles.length})
            </h2>

            {authorArticles.length === 0 ? (
              <p className="text-gray-600 text-center py-10">
                No articles published yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {authorArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/${article.category.toLowerCase()}/${article.slug}`}
                  title={article.title}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-36">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <GoClock className="text-gray-400" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuAlarmClock className="text-gray-400" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}
