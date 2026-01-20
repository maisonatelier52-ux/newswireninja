

// app/julio-herrera-velutini/[slug]/page.jsx

import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import authorsPageData from "../../../public/data/authors.json";
import contentData from "../../../public/data/pillarContent.json"; 
import { slugify } from "../../../utils/slugify";
import pillarContent from "../../../public/data/pillarContent.json"
import { notFound } from "next/navigation";
import { FaRedditAlien } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";

// Finding the author from authorsPageData (static)
const authorData = authorsPageData.categories
  .find((item) => item.category.toLowerCase() === "marketing & branding")
  ?.author;

  const SITE_URL = "https://www.newswireninja.com";
  



  export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Find the content based on the slug
  const content = contentData.find((item) => item.slug === slug);

  if (!content) {
    return {
      title: "Content not found",
      description: "This content does not exist.",
      robots: "noindex",
    };
  }

  const { title, subtitle, heroImage, metaTitle, metaDescription } = content;
  const imageUrl = `${SITE_URL}${heroImage}`;
   

  // Breadcrumbs data
  const breadcrumbs = [
    {
      position: 1,
      name: "Home",
      url: SITE_URL,
    },
    {
      position: 2,
      name: "Julio Herrera Velutini",
      url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
    },
    {
      position: 3,
      name: title,
      url: `${SITE_URL}/julio-herrera-velutini/${slug}`,
    },
  ];

   return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
          canonical: `${SITE_URL}/julio-herrera-velutini/${slug}`,
        },
        openGraph: {
          title: metaTitle,
          description: metaDescription,
          url: `${SITE_URL}/julio-herrera-velutini/${slug}`,
          type: "article",
          siteName: "YourSite",
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: metaTitle,
          description: metaDescription,
          images: [imageUrl],
        },
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": subtitle,
          "image": [imageUrl],
          "author": {
            "@type": "Person",
            "name": authorData.name,
            "url": `${SITE_URL}/authors/${slugify(authorData.name)}`,
          },
          "publisher": {
            "@type": "Organization",
            "name": "YourSite",
            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` },
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE_URL}/julio-herrera-velutini/${slug}`,
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          // BreadcrumbList for structured data
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb) => ({
              "@type": "ListItem",
              "position": breadcrumb.position,
              "name": breadcrumb.name,
              "item": breadcrumb.url,
            })),
          },
        },
      };
}

export default async function JulioHerreraVelutiniPillarPage({ params }) {
  const { slug } = await params; // Get the `slug` from params

  // Find the content based on the slug

    const content = contentData.find((item) => item.slug === slug);

  if (!content) {
    notFound();  // Handle the case when content is not found
  }

  const { title, subtitle, heroImage, lastUpdated, content: articleContent } = content;

  const shareUrl = `${SITE_URL}/julio-herrera-velutini/${slug}`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const shareTitle = encodeURIComponent(title);

  return (
    <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif" itemScope itemType="https://schema.org/Article">
      {/* Add JSON-LD Metadata */}
      <script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: (() => {
            const metadata = generateMetadata({ params });
            return metadata.jsonLd
              ? JSON.stringify(metadata.jsonLd).replace(/</g, "\\u003c")  // Safely checking if jsonLd exists
              : "{}";  // If jsonLd is undefined, use an empty object
          })(),
        }}
      />
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left" itemProp="headline">
        {title}
      </h1>

      {/* SUBTITLE */}
      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left" itemProp="description">
        {subtitle}
      </p>

      {/* META INFO */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt={`${authorData.name} - ${authorData.role}`}
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
            itemProp="author"
            loading="lazy"
          />
          <div>
            <p className="font-semibold text-sm">
              <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                <span className="hover:text-blue-600 hover:underline transition cursor-pointer" itemProp="author">
                  {authorData.name}
                </span>
              </Link>{" "}
              <span className="text-gray-500 font-normal">– {authorData.role}</span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>

         <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare />
            <span>Share</span>
          </div>

          <div className="flex items-center gap-3">
            {/* X / Twitter */}
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

            {/* Facebook */}
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

            {/* LinkedIn */}
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

            {/* Medium */}
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

      {/* HERO IMAGE */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Julio Herrera Velutini in professional setting"
          fill
          priority
          className="object-cover"
          itemProp="image"
        />
      </div>

      {/* DYNAMIC ARTICLE CONTENT */}
      <article className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed">
        {articleContent.map((block, index) => {
          if (block.type === "heading") {
            const HeadingTag = `h${block.level}`; // Dynamically create the heading tag
            return (
              <HeadingTag
                key={index}
                className="text-xl md:text-2xl font-bold mt-12 mb-6"
              >
                {block.text}
              </HeadingTag>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className={block.dropCap ? "first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black" : ""}
              >
                {block.content}
              </p>
            );
          }

          return null;
        })}

        {/* BOTTOM SHARE SECTION */}
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

        {/* AUTHOR PROFILE & FOLLOW */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={authorData.profileImage}
                alt={`${authorData?.name || 'Author'} - ${authorData?.role || 'Role'}`}
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                 itemProp="author"
                 loading="lazy"
              />
              <div>
                <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                  <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">{authorData.name}</p>
                </Link>
                <p className="text-gray-500 text-xs">{authorData.role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
              <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>

              <div className="flex items-center gap-3">
                {[
                  {
                    icon: <FaQuora />,
                    label: "Quora",
                    url: authorData?.social?.quora,
                  },
                  {
                    icon: <FaRedditAlien />,
                    label: "Reddit",
                    url: authorData?.social?.reddit,
                  },
                  {
                    icon: <FaXTwitter />,
                    label: "Twitter",
                    url: authorData?.social?.twitter,
                  },
                  {
                    icon: <SiMedium />,
                    label: "Medium",
                    url: authorData?.social?.medium,
                  },
                ]
                  .filter(item => item.url) // only show icons that actually have links
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

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md whitespace-nowrap">
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
      </article>
      {/* Cards for Pillar Content */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {pillarContent
    .filter((item) => item.slug !== slug) // Filter out the current slug
    .map((item) => (
      <div
        key={item.id}
        className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-100 group" // Reduced height to h-64
      >
        {/* Link to the individual pillar article page */}
        <Link href={`/julio-herrera-velutini/${item.slug}`} title={item.title}>
          <div className="block w-full h-full">
            {/* Hero Image */}
            <div className="relative w-full h-3/4 md:h-3/6">
              <Image
                src={item.heroImage}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>

            {/* Heading Container with Background */}
            <div className="bg-white p-4">
              <h3 className="text-gray-800 text-sm font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
                {item.title.slice(0,80)}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    ))}
</div>

    </main>
  );
}
