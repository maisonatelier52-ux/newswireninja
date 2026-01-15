
// import { notFound } from "next/navigation";
// import categorypagedata from "../../../public/data/articles.json";
// import ArticleClient from "./ArticleClient";

// export async function generateMetadata({ params }) {
//   const { category, slug } = await params;

//   const article =
//     categorypagedata[category]?.find((item) => item.slug === slug);

//   if (!article) return {};

//   return {
//     title: article.metaTitle,
//     description: article.metaDescription,
//     alternates: {
//       canonical: `https://www.newswireninja.com/${category}/${slug}`,
//     },
//     openGraph: {
//       title: article.metaTitle,
//       description: article.metaDescription,
//       url: `https://www.newswireninja.com/${category}/${slug}`,
//       siteName: "Newswireninja",
//       images: [
//         {
//           url: `https://www.newswireninja.com${article.image}`,
//           width: 1200,
//           height: 630,
//           alt: article.alt,
//         },
//       ],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.metaTitle,
//       description: article.metaDescription,
//       images: [`https://www.newswireninja.com${article.image}`],
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { category, slug } = await params;

//   const article =
//     categorypagedata[category]?.find((item) => item.slug === slug);

//   if (!article) notFound();

//   // ✅ pass params explicitly
//   return <ArticleClient category={category} slug={slug} />;
// }



import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import categorypagedata from "../../../public/data/articles.json";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import { GoClock } from "react-icons/go";
import { FaShareSquare } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article not found | NewsWireNinja",
      description: "The requested article could not be found.",
      robots: "noindex",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${category}/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/${category}/${slug}`,
      siteName: "Newswireninja",
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.alt || article.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.image}`],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { category, slug } =await params;

  const categoryPosts = categorypagedata[category] || [];
  const article = categoryPosts.find((item) => item.slug === slug);

  if (!article) notFound();

  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )?.author;

  const rawQuote = article.quote || "";
  const [quoteText, quoteAuthor] = rawQuote.split(" — ");

  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;

  // ────────────────────────────────────────────────
  // JSON-LD: NewsArticle (recommended for news/blog)
  // ────────────────────────────────────────────────
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}${article.image}`],
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(), // update if you have real modified date
    author: {
      "@type": "Person",
      name: authorData?.name || "NewsWireNinja Staff",
      url: authorData ? `${SITE_URL}/authors/${slugify(authorData.name)}` : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "Newswireninja",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`, // ← add your real logo path
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${category}/${slug}`,
    },
    articleSection: category,
    keywords: article.keywords || "", // add if you have keywords field
  };

  // ────────────────────────────────────────────────
  // JSON-LD: BreadcrumbList
  // ────────────────────────────────────────────────
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
    <>
      {/* JSON-LD Scripts – safe escaping for < characters */}
      <Script
        id="article-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

       <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif" itemScope itemType="https://schema.org/Article">
        {/* CATEGORY */}
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase" itemProp="articleSection">
            {category}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6" itemProp="headline">
          {article.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl" itemProp="description">
          {article.excerpt}
        </p>

        {/* AUTHOR + SHARE */}
        <div className="mb-8 space-y-6">
          {/* Author Info */}
          <div className="flex flex-row sm:flex-row sm:items-center gap-4">
            <Image
              src={authorData.profileImage}
              alt="Lauren - Senior Editor"
              width={56}
              height={56}
              className="rounded-full object-cover flex-shrink-0"
              itemProp="image"
            />

            <div>
              <p className="font-semibold text-sm" itemProp="author">
                <Link  href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                  <span className="hover:text-blue-600 hover:underline transition cursor-pointer">{authorData.name}</span>
                </Link>
                {" "}
                <span className="text-gray-500 font-normal">
                  – {authorData.role}
                </span>
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <GoClock />
                <span>Last updated: {article.date}</span>
              </div>
            </div>
          </div>

          {/* Share Section (UNDER AUTHOR) */}
          <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
            {/* Share Label */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaShareSquare />
              <span>Share</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[{ icon: <FaXTwitter />, label: "X" }, { icon: <FaFacebookF />, label: "Facebook" }, { icon: <FaLinkedinIn />, label: "LinkedIn" }, { icon: <SiMedium />, label: "Medium" }].map((item, index) => (
                <button
                  key={index}
                  aria-label={`Share on ${item.label}`}
                  title={`Share on ${item.label}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 transition hover:text-white hover:bg-black hover:border-black cursor-pointer"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURE IMAGE */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-10 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover"
            itemProp="image"
          />
        </div>

        {/* ARTICLE CONTENT */}
        <article className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto" itemProp="articleBody">
          <p itemProp="text">{article.heropara.para1}</p>
          <p className="mt-5 text-justify" itemProp="text">{article.heropara.para2}</p>

          {/* QUOTE */}
          <blockquote className="mt-12 sm:mt-20 text-center text-xl sm:text-2xl italic px-4 sm:px-20" itemProp="text">
            <div className="relative">
              <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl text-blue-600 font-bold">“</span>
              <p className="px-6 font-medium">{quoteText?.replace(/"/g, "")}</p>
              {quoteAuthor && <footer className="mt-4 text-sm text-gray-600">— {quoteAuthor}</footer>}
            </div>
          </blockquote>

          <p className="mt-5 text-justify">{article.heropara.para3}</p>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle1.title}</h2>

          <p className="mt-5">{article.subtitles.subtitle1.content[0]}</p>

          <div className="mt-8 flex justify-center">
            <Image
              src={article.deatilImage}
              alt={article.deatilImageAlt}
              width={800}        // unchanged
              height={400}       // logical height
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              className="object-fit rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
            />
          </div>

          <p className="mt-5 text-justify">{article.subtitles.subtitle1.content[1]}</p>
        </div>

        {/* TWO COLUMNS SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <p className="font-bold text-justify">
              {article.subtitles.subtitle1.content[2]}
            </p>
            <p className="text-justify">
             {article.subtitles.subtitle1.content[3]}
            </p>
            <p className="italic text-justify">
             {article.subtitles.subtitle1.content[4]}
            </p>
          </div>

          {/* RIGHT COLUMN - MORE READ CARD */}
          <div className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              More Read
            </h2>

            {/* Related Articles */}
            <div className="space-y-6 mt-4">
              {categoryPosts
                .filter((item) => item.slug !== slug) // Exclude the current article
                .slice(0, 5) // Take the first 5 items
                .map((relatedPost, index) => (
                  <div key={relatedPost.slug} className="flex items-center border-b border-gray-300 gap-3 py-1">
                    {/* Show Image Only for the First Related Post */}
                    {index === 0 && (
                      <div className="w-1/3">
                        <Image
                          src={relatedPost.image} // Image of the related post
                          alt={relatedPost.imageAlt}
                          width={100}
                          height={50}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      
                    )}
                    

                    {/* Title for All Related Posts */}
                    <div className={index === 0 ? "w-2/3" : "w-full"}>
                      <Link href={`/${category}/${relatedPost.slug}`} title={relatedPost.title}>
                        <h3 className={`text-sm font-semibold ${index === 0 ? "text-gray-900 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
                          {relatedPost.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>

        {/* Repeated sections with responsive images */}
        <p className="mt-8">
           {article.subtitles.subtitle1.content[5]}
        </p>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8"> {article.subtitles.subtitle2.title}</h2>
          
           {article.subtitles.subtitle2.content.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">{paragraph}</p>
            ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle3.title}</h2>
           {article.subtitles.subtitle3.content.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">{paragraph}</p>
            ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle4.title}</h2>
          <p className="mt-5 text-justify">{article.subtitles.subtitle3.content[0]}</p>

          <div className="mt-8 flex justify-center">
            <Image
              src={article.inlineImage}
              alt={article.inlineImageAlt}
              width={800}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              className="object-cover rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
            />
          </div>

          {article.subtitles.subtitle3.content.slice(1).map((paragraph, index) => (
            <p key={index} className="mt-5 text-justify">{paragraph}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle5.title}</h2>
           {article.subtitles.subtitle5.content.map((paragraph, index) => (
            <p key={index} className="mt-5 text-justify">
              <span className={index === 0 ? "font-bold" : ""}>{paragraph}</span>
            </p>
          ))}
        </div>

        {/* BOTTOM SHARE SECTION */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <FaShareSquare />
              <span>Share</span>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: <FaXTwitter />, label: "X" },
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <SiMedium />, label: "Medium" },
              ].map((item, index) => (
                <button
                  key={index}
                  aria-label={`Share on ${item.label}`}
                  title={`Share on ${item.label}`}
                  className="
                    w-9 h-9 flex items-center justify-center
                    rounded-lg border border-gray-400
                    text-gray-600
                    transition
                    hover:bg-black hover:text-white hover:border-black
                    cursor-pointer
                  "
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AUTHOR PROFILE & FOLLOW */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={authorData.profileImage}
                alt="Lauren - Senior Editor"
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                itemProp="image"
              />
              <div>
               <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer" itemProp="author">{authorData.name}</p>
                </Link>
                <p className="text-gray-500 text-xs">{authorData.role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
              <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaFacebookF />, label: "Facebook" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn" },
                  { icon: <FaXTwitter />, label: "Twitter" },
                  { icon: <SiMedium />, label: "Medium" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <button
                      aria-label={`Follow on ${item.label}`}
                      title={`Follow on ${item.label}`}
                      className="flex items-center justify-center hover:text-gray-400 cursor-pointer"
                    >
                      {item.icon}
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
           {authorData.bio}
          </p>
        </div>

        {/* PREVIOUS / NEXT ARTICLES */}
      <div className="mt-10">
  <hr className="border-t-2 border-dotted border-gray-400" />
  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Previous Article */}
    <div className="flex flex-col items-start gap-4">
      <span className="text-sm text-gray-600">Previous Article</span>
      <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
        {prevPost ? (
          <Link href={`/${category}/${prevPost.slug}`} title={prevPost.title}>
            <div className="flex items-center gap-4">
              <Image
                src={prevPost.image}
                alt={prevPost.imageAlt}
                width={100}
                height={100}
                className="object-cover rounded-lg flex-shrink-0"
              />
              <h3 className="text-sm font-semibold">{prevPost.title}</h3>
            </div>
          </Link>
        ) : (
          <p className="text-sm text-gray-500">No Preview post</p>
        )}
      </div>
    </div>

    <hr className="my-6 border-t border-gray-300 lg:hidden" />

    {/* Next Article */}
    <div className="flex flex-col items-end gap-4 text-right">
      <span className="text-sm text-gray-600">Next Article</span>
      <div className="flex items-center gap-4 sm:flex-row-reverse hover:text-blue-600 cursor-pointer transition">
        {nextPost ? (
          <Link href={`/${category}/${nextPost.slug}`} title={nextPost.title}>
            <div className="flex items-center gap-4">
              <Image
                src={nextPost.image}
                alt={nextPost.imageAlt}
                width={100}
                height={100}
                className="object-cover rounded-lg flex-shrink-0"
              />
              <h3 className="text-sm font-semibold">{nextPost.title}</h3>
            </div>
          </Link>
        ) : (
          <p className="text-sm text-gray-500">No next post</p>
        )}
      </div>
    </div>
  </div>

  <hr className="border-t-2 border-dotted border-gray-400 mt-10" />
</div>

      </article>
    </main>
    </>
  );
}