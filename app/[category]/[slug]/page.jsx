import { notFound } from "next/navigation";
import Image from "next/image";
import categorypagedata from "../../../public/data/articles.json";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import { GoClock } from "react-icons/go";
import { FaShareSquare } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import { FaRedditAlien } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";

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
  const params = [];
  Object.keys(categorypagedata).forEach((category) => {
    const articles = categorypagedata[category] || [];
    articles.forEach((article) => {
      params.push({ category, slug: article.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found | Newswireninja",
      description: "The requested article could not be found.",
      robots: { index: false },
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords?.join(", "),
    authors: [{ name: SITE_NAME + " Editorial Team" }],
    alternates: {
      canonical: `${SITE_URL}/${category}/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/${category}/${slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        },
      ],
      type: "article",
      publishedTime: toISOString(article.date),
      modifiedTime: toISOString(article.date),
      section: category,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.image}`],
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

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const categoryPosts = categorypagedata[category] || [];
  const article = categoryPosts.find((item) => item.slug === slug);

  if (!article) notFound();

  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )?.author;

  if (!authorData) notFound();

  const rawQuote = article.quote || "";
  const [quoteText, quoteAuthor] = rawQuote.split(" — ");

  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < categoryPosts.length - 1
      ? categoryPosts[currentIndex + 1]
      : null;

  const shareUrl = `${SITE_URL}/${category}/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.title);

  // JSON-LD: NewsArticle
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/${category}/${slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}${article.image}`,
        width: 1200,
        height: 630,
      },
    ],
    datePublished: toISOString(article.date),
    dateModified: toISOString(article.date),
    author: {
      "@type": "Person",
      name: authorData.name,
      url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${category}/${slug}`,
    },
    articleSection: category,
    keywords: Array.isArray(article.keywords)
      ? article.keywords.join(", ")
      : article.keywords || "",
    url: `${SITE_URL}/${category}/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/${category}/${slug}#breadcrumb`,
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
        name: category.charAt(0).toUpperCase() + category.slice(1),
        item: `${SITE_URL}/${category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/${category}/${slug}`,
      },
    ],
  };

  return (
    <main
      className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hidden microdata for SEO testers */}
      <meta itemProp="headline" content={article.title} />
      <meta itemProp="description" content={article.excerpt} />
      <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
      <meta itemProp="datePublished" content={toISOString(article.date)} />
      <meta itemProp="dateModified" content={toISOString(article.date)} />
      <meta itemProp="articleSection" content={category} />
      <meta
        itemProp="keywords"
        content={
          Array.isArray(article.keywords)
            ? article.keywords.join(", ")
            : article.keywords || ""
        }
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link href="/" title="Home page" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/${category}`}
              className="hover:text-blue-600 capitalize"
              title={`${category} page`}
            >
              {category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600 line-clamp-1">{article.title}</li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span
          className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase"
          itemProp="articleSection"
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6"
        itemProp="headline"
      >
        {article.title}
      </h1>

      {/* Description */}
      <p
        className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl"
        itemProp="description"
      >
        {article.excerpt}
      </p>

      {/* Author + Share */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt={`${authorData.name} - ${authorData.role}`}
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-sm">
              <Link
                href={`/authors/${slugify(authorData.name)}`}
                title={authorData.name}
              >
                <span
                  className="hover:text-blue-600 hover:underline transition cursor-pointer"
                  itemProp="author"
                >
                  {authorData.name}
                </span>
              </Link>{" "}
              <span className="text-gray-500 font-normal">
                – {authorData.role}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock />
              <time itemProp="datePublished" dateTime={toISOString(article.date)}>
                Last updated: {formatDate(article.date)}
              </time>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="flex flex-row items-center gap-4 mt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              title="Share on X"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              title="Share on Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`https://medium.com/new-story?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Medium"
              title="Share on Medium"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
            >
              <SiMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-10 rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          itemProp="image"
        />
      </div>

      {/* Article Content */}
      <article
        className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto"
        itemProp="articleBody"
      >
        <p itemProp="text">{article.heropara?.para1}</p>
        <p className="mt-5 text-justify" itemProp="text">
          {article.heropara?.para2}
        </p>

        {/* Quote — UPDATED: left-border style for better visual hierarchy */}
        {rawQuote && (
          <blockquote
            className="my-12 border-l-4 border-blue-600 pl-6 italic text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg"
            itemProp="text"
          >
            <p>{quoteText?.replace(/"/g, "")}</p>
            {quoteAuthor && (
              <footer className="mt-3 text-right text-base font-medium not-italic">
                — {quoteAuthor}
              </footer>
            )}
          </blockquote>
        )}

        <p className="mt-5 text-justify">{article.heropara?.para3}</p>

        {/* Subtitle 1 */}
        {article.subtitles?.subtitle1 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-8">
              {article.subtitles.subtitle1.title}
            </h2>
            <p className="mt-5">{article.subtitles.subtitle1.content?.[0]}</p>

            {article.deatilImage && (
              <div className="mt-8 flex justify-center">
                <Image
                  src={article.deatilImage}
                  alt={article.deatilImageAlt || "Article image"}
                  width={800}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  className="object-fit rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
                  loading="lazy"
                />
              </div>
            )}

            <p className="mt-5 text-justify">
              {article.subtitles.subtitle1.content?.[1]}
            </p>

            {/* Two columns */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <p className="font-bold text-justify">
                  {article.subtitles.subtitle1.content?.[2]}
                </p>
                <p className="text-justify">
                  {article.subtitles.subtitle1.content?.[3]}
                </p>
                <p className="italic text-justify">
                  {article.subtitles.subtitle1.content?.[4]}
                </p>
              </div>

              {/* More Read Card */}
              <div className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  More Read
                </h2>
                <div className="space-y-6 mt-4">
                  {categoryPosts
                    .filter((item) => item.slug !== slug)
                    .slice(0, category === "business" ? 4 : 5)
                    .map((relatedPost, index) => (
                      <div
                        key={relatedPost.slug}
                        className="flex items-center border-b border-gray-300 gap-3 py-1"
                      >
                        {index === 0 && (
                          <div className="w-1/3">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.imageAlt}
                              width={100}
                              height={50}
                              className="object-cover rounded-md w-full h-auto"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className={index === 0 ? "w-2/3" : "w-full"}>
                          <Link
                            href={`/${category}/${relatedPost.slug}`}
                            title={relatedPost.title}
                          >
                            <h3
                              className={`text-sm font-semibold ${
                                index === 0
                                  ? "text-gray-900 hover:text-blue-600"
                                  : "text-gray-700 hover:text-blue-600"
                              }`}
                            >
                              {relatedPost.title}
                            </h3>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>

                {category === "business" && (
                  <div className="w-full mt-5">
                    <Link
                      href="/business/julio-herrera-velutini-legacy-finance"
                      title="Julio Herrera Velutini: A Legacy in the World of Money"
                    >
                      <h3 className="text-sm font-semibold text-gray-700 hover:text-blue-600">
                        Julio Herrera Velutini: A Legacy in the World of Money
                      </h3>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-8">{article.subtitles.subtitle1.content?.[5]}</p>
          </div>
        )}

        {/* Subtitle 2 */}
        {article.subtitles?.subtitle2 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-8">
              {article.subtitles.subtitle2.title}
            </h2>
            {article.subtitles.subtitle2.content?.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Subtitle 3 */}
        {article.subtitles?.subtitle3 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-8">
              {article.subtitles.subtitle3.title}
            </h2>
            {article.subtitles.subtitle3.content?.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Subtitle 4 */}
        {article.subtitles?.subtitle4 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-8">
              {article.subtitles.subtitle4.title}
            </h2>
            <p className="mt-5 text-justify">
              {article.subtitles.subtitle4.content?.[0]}
            </p>

            {article.inlineImage && (
              <div className="mt-8 flex justify-center">
                <Image
                  src={article.inlineImage}
                  alt={article.inlineImageAlt || "Article image"}
                  width={800}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                  className="object-cover rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
                  loading="lazy"
                />
              </div>
            )}

            {article.subtitles.subtitle4.content?.slice(1).map(
              (paragraph, index) => (
                <p key={index} className="mt-5 text-justify">
                  {paragraph}
                </p>
              )
            )}
          </div>
        )}

        {/* Subtitle 5 */}
        {article.subtitles?.subtitle5 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-8">
              {article.subtitles.subtitle5.title}
            </h2>
            {article.subtitles.subtitle5.content?.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">
                <span className={index === 0 ? "font-bold" : ""}>
                  {paragraph}
                </span>
              </p>
            ))}
          </div>
        )}

        {/* Internal CTA link — UPDATED: drives readers deeper into the site */}
        <p className="mt-8 font-medium text-blue-700">
          Read more in our{" "}
          <Link
            href={`/${category}`}
            className="underline hover:text-blue-900"
            title={`More ${category} news`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} section
          </Link>{" "}
          for similar stories and expert analysis.
        </p>

        {/* Bottom Share */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <FaShareSquare />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                aria-label="Share on X"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
              >
                <FaXTwitter />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                aria-label="Share on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://medium.com/new-story?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Medium"
                aria-label="Share on Medium"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
              >
                <SiMedium />
              </a>
            </div>
          </div>
        </div>

        {/* Author Profile */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={authorData.profileImage}
                alt={`${authorData.name} - ${authorData.role}`}
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <Link
                  href={`/authors/${slugify(authorData.name)}`}
                  title={authorData.name}
                >
                  <p
                    className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer"
                    itemProp="author"
                  >
                    {authorData.name}
                  </p>
                </Link>
                <p className="text-gray-500 text-xs">{authorData.role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                Follow:
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaQuora />, label: "Quora", url: authorData?.social?.quora },
                  { icon: <FaRedditAlien />, label: "Reddit", url: authorData?.social?.reddit },
                  { icon: <FaXTwitter />, label: "Twitter", url: authorData?.social?.twitter },
                  { icon: <SiMedium />, label: "Medium", url: authorData?.social?.medium },
                ]
                  .filter((item) => item.url)
                  .map((item, index) => (
                    <div key={index} className="relative group">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${item.label}`}
                        title={`Follow on ${item.label}`}
                        className="flex items-center justify-center hover:text-gray-400 cursor-pointer transition"
                      >
                        {item.icon}
                      </a>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md whitespace-nowrap">
                        {item.label}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">{authorData.bio}</p>
        </div>

        {/* Prev / Next */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-start gap-4">
              <span className="text-sm text-gray-600">Previous Article</span>
              {prevPost ? (
                <Link
                  href={`/${category}/${prevPost.slug}`}
                  title={prevPost.title}
                >
                  <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
                    <Image
                      src={prevPost.image}
                      alt={prevPost.imageAlt}
                      width={100}
                      height={100}
                      className="object-cover rounded-lg flex-shrink-0"
                      loading="lazy"
                    />
                    <h3 className="text-sm font-semibold">{prevPost.title}</h3>
                  </div>
                </Link>
              ) : (
                <p className="text-sm text-gray-500">No previous article</p>
              )}
            </div>

            <hr className="my-6 border-t border-gray-300 lg:hidden" />

            <div className="flex flex-col items-end gap-4 text-right">
              <span className="text-sm text-gray-600">Next Article</span>
              {nextPost ? (
                <Link
                  href={`/${category}/${nextPost.slug}`}
                  title={nextPost.title}
                >
                  <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
                    <Image
                      src={nextPost.image}
                      alt={nextPost.imageAlt}
                      width={100}
                      height={100}
                      className="object-cover rounded-lg flex-shrink-0"
                      loading="lazy"
                    />
                    <h3 className="text-sm font-semibold">{nextPost.title}</h3>
                  </div>
                </Link>
              ) : (
                <p className="text-sm text-gray-500">No next article</p>
              )}
            </div>
          </div>

          <hr className="border-t-2 border-dotted border-gray-400 mt-10" />
        </div>
      </article>
    </main>
  );
}

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import categorypagedata from "../../../public/data/articles.json";
// import authorsPageData from "../../../public/data/authors.json";
// import { slugify } from "../../../utils/slugify";
// import { GoClock } from "react-icons/go";
// import { FaShareSquare } from "react-icons/fa";
// import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
// import { SiMedium } from "react-icons/si";
// import Link from "next/link";
// import { FaRedditAlien } from "react-icons/fa";
// import { FaQuora } from "react-icons/fa";

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
//   const params = [];
//   Object.keys(categorypagedata).forEach((category) => {
//     const articles = categorypagedata[category] || [];
//     articles.forEach((article) => {
//       params.push({ category, slug: article.slug });
//     });
//   });
//   return params;
// }

// export async function generateMetadata({ params }) {
//   const { category, slug } = await params;
//   const article = categorypagedata[category]?.find((item) => item.slug === slug);

//   if (!article) {
//     return {
//       title: "Article not found | Newswireninja",
//       description: "The requested article could not be found.",
//       robots: { index: false },
//     };
//   }

//   return {
//     title: article.metaTitle,
//     description: article.metaDescription,
//     keywords: article.keywords?.join(", "),
//     authors: [{ name: SITE_NAME + " Editorial Team" }],
//     alternates: {
//       canonical: `${SITE_URL}/${category}/${slug}`,
//     },
//     openGraph: {
//       title: article.metaTitle,
//       description: article.metaDescription,
//       url: `${SITE_URL}/${category}/${slug}`,
//       siteName: SITE_NAME,
//       images: [
//         {
//           url: `${SITE_URL}${article.image}`,
//           width: 1200,
//           height: 630,
//           alt: article.imageAlt || article.title,
//         },
//       ],
//       type: "article",
//       publishedTime: toISOString(article.date),
//       modifiedTime: toISOString(article.date),
//       section: category,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.metaTitle,
//       description: article.metaDescription,
//       images: [`${SITE_URL}${article.image}`],
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

// export default async function ArticlePage({ params }) {
//   const { category, slug } = await params;

//   const categoryPosts = categorypagedata[category] || [];
//   const article = categoryPosts.find((item) => item.slug === slug);

//   if (!article) notFound();

//   const authorData = authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === category.toLowerCase()
//   )?.author;

//   if (!authorData) notFound();

//   const rawQuote = article.quote || "";
//   const [quoteText, quoteAuthor] = rawQuote.split(" — ");

//   const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
//   const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
//   const nextPost =
//     currentIndex < categoryPosts.length - 1
//       ? categoryPosts[currentIndex + 1]
//       : null;

//   const shareUrl = `${SITE_URL}/${category}/${slug}`;
//   const encodedUrl = encodeURIComponent(shareUrl);
//   const shareTitle = encodeURIComponent(article.title);

//   // JSON-LD: NewsArticle
//   const articleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     "@id": `${SITE_URL}/${category}/${slug}#article`,
//     headline: article.title,
//     description: article.excerpt,
//     image: [
//       {
//         "@type": "ImageObject",
//         url: `${SITE_URL}${article.image}`,
//         width: 1200,
//         height: 630,
//       },
//     ],
//     datePublished: toISOString(article.date),
//     dateModified: toISOString(article.date),
//     author: {
//       "@type": "Person",
//       name: authorData.name,
//       url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
//     },
//     publisher: {
//       "@type": "NewsMediaOrganization",
//       "@id": `${SITE_URL}/#organization`,
//       name: SITE_NAME,
//       url: SITE_URL,
//       logo: {
//         "@type": "ImageObject",
//         url: `${SITE_URL}/images/newswireninja-logo.webp`,
//         width: 600,
//         height: 60,
//       },
//     },
//     mainEntityOfPage: {
//       "@type": "WebPage",
//       "@id": `${SITE_URL}/${category}/${slug}`,
//     },
//     articleSection: category,
//     keywords: Array.isArray(article.keywords)
//       ? article.keywords.join(", ")
//       : article.keywords || "",
//     url: `${SITE_URL}/${category}/${slug}`,
//     isPartOf: {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       name: SITE_NAME,
//       url: SITE_URL,
//     },
//   };

//   // JSON-LD: BreadcrumbList
//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/${category}/${slug}#breadcrumb`,
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
//         name: category.charAt(0).toUpperCase() + category.slice(1),
//         item: `${SITE_URL}/${category}`,
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: article.title,
//         item: `${SITE_URL}/${category}/${slug}`,
//       },
//     ],
//   };

//   return (
//     <main
//       className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif"
//       itemScope
//       itemType="https://schema.org/NewsArticle"
//     >
//       {/* JSON-LD */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       {/* Hidden microdata for SEO testers */}
//       <meta itemProp="headline" content={article.title} />
//       <meta itemProp="description" content={article.excerpt} />
//       <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
//       <meta itemProp="datePublished" content={toISOString(article.date)} />
//       <meta itemProp="dateModified" content={toISOString(article.date)} />
//       <meta itemProp="articleSection" content={category} />
//       <meta
//         itemProp="keywords"
//         content={
//           Array.isArray(article.keywords)
//             ? article.keywords.join(", ")
//             : article.keywords || ""
//         }
//       />

//       {/* Breadcrumb */}
//       <nav aria-label="Breadcrumb" className="mb-6">
//         <ol className="flex items-center gap-2 text-sm flex-wrap">
//           <li>
//             <Link href="/" title="Home page" className="hover:text-blue-600">
//               Home
//             </Link>
//           </li>
//           <li>/</li>
//           <li>
//             <Link
//               href={`/${category}`}
//               className="hover:text-blue-600 capitalize"
//               title={`${category} page`}
//             >
//               {category}
//             </Link>
//           </li>
//           <li>/</li>
//           <li className="text-gray-600 line-clamp-1">{article.title}</li>
//         </ol>
//       </nav>

//       {/* Category badge */}
//       <div className="mb-4">
//         <span
//           className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase"
//           itemProp="articleSection"
//         >
//           {category}
//         </span>
//       </div>

//       {/* Title */}
//       <h1
//         className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6"
//         itemProp="headline"
//       >
//         {article.title}
//       </h1>

//       {/* Description */}
//       <p
//         className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl"
//         itemProp="description"
//       >
//         {article.excerpt}
//       </p>

//       {/* Author + Share */}
//       <div className="mb-8 space-y-6">
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4">
//           <Image
//             src={authorData.profileImage}
//             alt={`${authorData.name} - ${authorData.role}`}
//             width={56}
//             height={56}
//             className="rounded-full object-cover flex-shrink-0"
//           />
//           <div>
//             <p className="font-semibold text-sm">
//               <Link
//                 href={`/authors/${slugify(authorData.name)}`}
//                 title={authorData.name}
//               >
//                 <span
//                   className="hover:text-blue-600 hover:underline transition cursor-pointer"
//                   itemProp="author"
//                 >
//                   {authorData.name}
//                 </span>
//               </Link>{" "}
//               <span className="text-gray-500 font-normal">
//                 – {authorData.role}
//               </span>
//             </p>
//             <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//               <GoClock />
//               <time itemProp="datePublished" dateTime={toISOString(article.date)}>
//                 Last updated: {formatDate(article.date)}
//               </time>
//             </div>
//           </div>
//         </div>

//         {/* Share Section */}
//         <div className="flex flex-row items-center gap-4 mt-5">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <FaShareSquare />
//             <span>Share</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <a
//               href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Share on X"
//               title="Share on X"
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
//             >
//               <FaXTwitter />
//             </a>
//             <a
//               href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Share on Facebook"
//               title="Share on Facebook"
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Share on LinkedIn"
//               title="Share on LinkedIn"
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href={`https://medium.com/new-story?url=${encodedUrl}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Share on Medium"
//               title="Share on Medium"
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
//             >
//               <SiMedium />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Feature Image */}
//       <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-10 rounded-lg overflow-hidden">
//         <Image
//           src={article.image}
//           alt={article.imageAlt}
//           fill
//           priority
//           fetchPriority="high"
//           className="object-cover"
//           itemProp="image"
//         />
//       </div>

//       {/* Article Content */}
//       <article
//         className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto"
//         itemProp="articleBody"
//       >
//         <p itemProp="text">{article.heropara?.para1}</p>
//         <p className="mt-5 text-justify" itemProp="text">
//           {article.heropara?.para2}
//         </p>

//         {/* Quote */}
//         {rawQuote && (
//           <blockquote
//             className="mt-12 sm:mt-20 text-center text-xl sm:text-2xl italic px-4 sm:px-20"
//             itemProp="text"
//           >
//             <div className="relative">
//               <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl text-blue-600 font-bold">
//                 &quot;
//               </span>
//               <p className="px-6 font-medium">
//                 {quoteText?.replace(/"/g, "")}
//               </p>
//               {quoteAuthor && (
//                 <footer className="mt-4 text-sm text-gray-600">
//                   — {quoteAuthor}
//                 </footer>
//               )}
//             </div>
//           </blockquote>
//         )}

//         <p className="mt-5 text-justify">{article.heropara?.para3}</p>

//         {/* Subtitle 1 */}
//         {article.subtitles?.subtitle1 && (
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold mt-8">
//               {article.subtitles.subtitle1.title}
//             </h2>
//             <p className="mt-5">{article.subtitles.subtitle1.content?.[0]}</p>

//             {article.deatilImage && (
//               <div className="mt-8 flex justify-center">
//                 <Image
//                   src={article.deatilImage}
//                   alt={article.deatilImageAlt || "Article image"}
//                   width={800}
//                   height={400}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
//                   className="object-fit rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
//                   loading="lazy"
//                 />
//               </div>
//             )}

//             <p className="mt-5 text-justify">
//               {article.subtitles.subtitle1.content?.[1]}
//             </p>

//             {/* Two columns */}
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-5">
//                 <p className="font-bold text-justify">
//                   {article.subtitles.subtitle1.content?.[2]}
//                 </p>
//                 <p className="text-justify">
//                   {article.subtitles.subtitle1.content?.[3]}
//                 </p>
//                 <p className="italic text-justify">
//                   {article.subtitles.subtitle1.content?.[4]}
//                 </p>
//               </div>

//               {/* More Read Card */}
//               <div className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6">
//                 <h2 className="text-lg font-semibold flex items-center gap-2">
//                   <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                   More Read
//                 </h2>
//                 <div className="space-y-6 mt-4">
//                   {categoryPosts
//                     .filter((item) => item.slug !== slug)
//                     .slice(0, category === "business" ? 4 : 5)
//                     .map((relatedPost, index) => (
//                       <div
//                         key={relatedPost.slug}
//                         className="flex items-center border-b border-gray-300 gap-3 py-1"
//                       >
//                         {index === 0 && (
//                           <div className="w-1/3">
//                             <Image
//                               src={relatedPost.image}
//                               alt={relatedPost.imageAlt}
//                               width={100}
//                               height={50}
//                               className="object-cover rounded-md w-full h-auto"
//                               loading="lazy"
//                             />
//                           </div>
//                         )}
//                         <div className={index === 0 ? "w-2/3" : "w-full"}>
//                           <Link
//                             href={`/${category}/${relatedPost.slug}`}
//                             title={relatedPost.title}
//                           >
//                             <h3
//                               className={`text-sm font-semibold ${
//                                 index === 0
//                                   ? "text-gray-900 hover:text-blue-600"
//                                   : "text-gray-700 hover:text-blue-600"
//                               }`}
//                             >
//                               {relatedPost.title}
//                             </h3>
//                           </Link>
//                         </div>
//                       </div>
//                     ))}
//                 </div>

//                 {category === "business" && (
//                   <div className="w-full mt-5">
//                     <Link
//                       href="/business/julio-herrera-velutini-legacy-finance"
//                       title="Julio Herrera Velutini: A Legacy in the World of Money"
//                     >
//                       <h3 className="text-sm font-semibold text-gray-700 hover:text-blue-600">
//                         Julio Herrera Velutini: A Legacy in the World of Money
//                       </h3>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <p className="mt-8">{article.subtitles.subtitle1.content?.[5]}</p>
//           </div>
//         )}

//         {/* Subtitle 2 */}
//         {article.subtitles?.subtitle2 && (
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold mt-8">
//               {article.subtitles.subtitle2.title}
//             </h2>
//             {article.subtitles.subtitle2.content?.map((paragraph, index) => (
//               <p key={index} className="mt-5 text-justify">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         )}

//         {/* Subtitle 3 */}
//         {article.subtitles?.subtitle3 && (
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold mt-8">
//               {article.subtitles.subtitle3.title}
//             </h2>
//             {article.subtitles.subtitle3.content?.map((paragraph, index) => (
//               <p key={index} className="mt-5 text-justify">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         )}

//         {/* Subtitle 4 */}
//         {article.subtitles?.subtitle4 && (
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold mt-8">
//               {article.subtitles.subtitle4.title}
//             </h2>
//             <p className="mt-5 text-justify">
//               {article.subtitles.subtitle4.content?.[0]}
//             </p>

//             {article.inlineImage && (
//               <div className="mt-8 flex justify-center">
//                 <Image
//                   src={article.inlineImage}
//                   alt={article.inlineImageAlt || "Article image"}
//                   width={800}
//                   height={400}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
//                   className="object-cover rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
//                   loading="lazy"
//                 />
//               </div>
//             )}

//             {article.subtitles.subtitle4.content?.slice(1).map(
//               (paragraph, index) => (
//                 <p key={index} className="mt-5 text-justify">
//                   {paragraph}
//                 </p>
//               )
//             )}
//           </div>
//         )}

//         {/* Subtitle 5 */}
//         {article.subtitles?.subtitle5 && (
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold mt-8">
//               {article.subtitles.subtitle5.title}
//             </h2>
//             {article.subtitles.subtitle5.content?.map((paragraph, index) => (
//               <p key={index} className="mt-5 text-justify">
//                 <span className={index === 0 ? "font-bold" : ""}>
//                   {paragraph}
//                 </span>
//               </p>
//             ))}
//           </div>
//         )}

//         {/* Bottom Share */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-400" />
//           <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
//             <div className="flex items-center gap-2">
//               <FaShareSquare />
//               <span>Share</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <a
//                 href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Share on X"
//                 aria-label="Share on X"
//                 className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
//               >
//                 <FaXTwitter />
//               </a>
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Share on Facebook"
//                 aria-label="Share on Facebook"
//                 className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Share on LinkedIn"
//                 aria-label="Share on LinkedIn"
//                 className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
//               >
//                 <FaLinkedinIn />
//               </a>
//               <a
//                 href={`https://medium.com/new-story?url=${encodedUrl}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Share on Medium"
//                 aria-label="Share on Medium"
//                 className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
//               >
//                 <SiMedium />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Author Profile */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-400" />
//           <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
//             <div className="flex items-center gap-4">
//               <Image
//                 src={authorData.profileImage}
//                 alt={`${authorData.name} - ${authorData.role}`}
//                 width={56}
//                 height={56}
//                 className="rounded-full object-cover flex-shrink-0"
//                 loading="lazy"
//               />
//               <div>
//                 <Link
//                   href={`/authors/${slugify(authorData.name)}`}
//                   title={authorData.name}
//                 >
//                   <p
//                     className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer"
//                     itemProp="author"
//                   >
//                     {authorData.name}
//                   </p>
//                 </Link>
//                 <p className="text-gray-500 text-xs">{authorData.role}</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
//               <span className="text-sm text-gray-600 hidden sm:block">
//                 Follow:
//               </span>
//               <div className="flex items-center gap-3">
//                 {[
//                   { icon: <FaQuora />, label: "Quora", url: authorData?.social?.quora },
//                   { icon: <FaRedditAlien />, label: "Reddit", url: authorData?.social?.reddit },
//                   { icon: <FaXTwitter />, label: "Twitter", url: authorData?.social?.twitter },
//                   { icon: <SiMedium />, label: "Medium", url: authorData?.social?.medium },
//                 ]
//                   .filter((item) => item.url)
//                   .map((item, index) => (
//                     <div key={index} className="relative group">
//                       <a
//                         href={item.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={`Follow on ${item.label}`}
//                         title={`Follow on ${item.label}`}
//                         className="flex items-center justify-center hover:text-gray-400 cursor-pointer transition"
//                       >
//                         {item.icon}
//                       </a>
//                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md whitespace-nowrap">
//                         {item.label}
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>

//           <p className="mt-6 text-sm text-gray-600">{authorData.bio}</p>
//         </div>

//         {/* Prev / Next */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-400" />
//           <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="flex flex-col items-start gap-4">
//               <span className="text-sm text-gray-600">Previous Article</span>
//               {prevPost ? (
//                 <Link
//                   href={`/${category}/${prevPost.slug}`}
//                   title={prevPost.title}
//                 >
//                   <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
//                     <Image
//                       src={prevPost.image}
//                       alt={prevPost.imageAlt}
//                       width={100}
//                       height={100}
//                       className="object-cover rounded-lg flex-shrink-0"
//                       loading="lazy"
//                     />
//                     <h3 className="text-sm font-semibold">{prevPost.title}</h3>
//                   </div>
//                 </Link>
//               ) : (
//                 <p className="text-sm text-gray-500">No previous article</p>
//               )}
//             </div>

//             <hr className="my-6 border-t border-gray-300 lg:hidden" />

//             <div className="flex flex-col items-end gap-4 text-right">
//               <span className="text-sm text-gray-600">Next Article</span>
//               {nextPost ? (
//                 <Link
//                   href={`/${category}/${nextPost.slug}`}
//                   title={nextPost.title}
//                 >
//                   <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
//                     <Image
//                       src={nextPost.image}
//                       alt={nextPost.imageAlt}
//                       width={100}
//                       height={100}
//                       className="object-cover rounded-lg flex-shrink-0"
//                       loading="lazy"
//                     />
//                     <h3 className="text-sm font-semibold">{nextPost.title}</h3>
//                   </div>
//                 </Link>
//               ) : (
//                 <p className="text-sm text-gray-500">No next article</p>
//               )}
//             </div>
//           </div>

//           <hr className="border-t-2 border-dotted border-gray-400 mt-10" />
//         </div>
//       </article>
//     </main>
//   );
// }
