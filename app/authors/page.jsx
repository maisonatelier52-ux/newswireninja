
// import Image from "next/image";
// import Link from "next/link";
// import authorsData from "../../public/data/authors.json";
// import articlesData from "../../public/data/articles.json";
// import { slugify } from "../../utils/slugify";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiMedium } from "react-icons/si";
// import pillarContent from "../../public/data/pillarContent.json"

// export default function AuthorsPage() {
//   return (
//     <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 min-h-screen bg-gradient-to-b from-white to-gray-50 font-serif">
//       {/* Page Title */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//           Meet Our Authors
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Expert voices bringing you insightful stories across politics,
//           business, sports, travel, and more.
//         </p>
//       </div>

//       {/* Authors Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {authorsData.categories.map(({ category, author }) => {
          
//           const categoryKey = category.toLowerCase();
//           const authorArticles = articlesData[categoryKey] || [];
          
//           // Check if the category is 'Marketing & Branding' and count related pillar content articles
//           let pillarContentCount = 0;
//           if (category === "Marketing & Branding") {
//             pillarContentCount = pillarContent.filter((content) => {
//               // Here you need a way to check if the content belongs to 'Marketing & Branding'.
//               // Assuming there's a 'category' field or relevant check for 'Marketing & Branding'.
//               return content.category.toLowerCase().includes("marketing") || content.category.toLowerCase().includes("branding");
//             }).length;
//           }

//           return (
//             <div
//               key={author.id}
//               className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//             >
//               {/* Clickable Author Header */}
//               <Link
//                 href={`/authors/${slugify(author.name)}`}
//                 className="block"
//               >
//                 <div className="relative h-60 overflow-hidden">
//                   <Image
//                     src={author.profileImage}
//                     alt={author.name}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 25vw"
//                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                     priority={false}
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <h2 className="text-2xl font-bold mb-1">
//                       {author.name}
//                     </h2>
//                     <p className="text-sm opacity-90">
//                       {author.role}
//                     </p>
//                   </div>
//                 </div>
//               </Link>

//               {/* Bio & Social Links */}
//               <div className="p-6">
//                 <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
//                   {author.bio}
//                 </p>

//                 <div className="mt-5 flex items-center justify-between text-sm">
//                   <span className="text-gray-500">
//                     {category === "Marketing & Branding" ? pillarContentCount + 1 : authorArticles.length} Articles
//                   </span>

//                   <div className="flex gap-4">
//                     <a
//                       href={author.social.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="Twitter"
//                       className="text-gray-700 hover:text-black transition-colors"
//                     >
//                       <FaXTwitter />
//                     </a>

//                     <a
//                       href={author.social.facebook}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="Facebook"
//                       className="text-gray-700 hover:text-blue-700 transition-colors"
//                     >
//                       <FaFacebookF />
//                     </a>

//                     <a
//                       href={author.social.medium}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="Medium"
//                       className="text-gray-700 hover:text-black transition-colors"
//                     >
//                       <SiMedium />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import authorsData from "../../public/data/authors.json";
import articlesData from "../../public/data/articles.json";
import pillarContent from "../../public/data/pillarContent.json";
import { slugify } from "../../utils/slugify";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const SITE_URL = "https://www.newswireninja.com";

/* ─────────────────────────────────────────────
   METADATA (TITLE, DESCRIPTION, OG, TWITTER)
───────────────────────────────────────────── */
export async function generateMetadata() {
  return {
    title: "Meet Our Authors | NewsWireNinja",
    description:
      "Meet the expert authors and journalists behind NewsWireNinja, covering business, politics, health, sports, travel, and more.",
    alternates: {
      canonical: `${SITE_URL}/authors`,
    },
    openGraph: {
      title: "Meet Our Authors | NewsWireNinja",
      description:
        "Discover the expert writers and journalists behind NewsWireNinja’s trusted news coverage.",
      url: `${SITE_URL}/authors`,
      siteName: "NewsWireNinja",
      images: [
        {
          url: `${SITE_URL}/images/authors-cover.webp`,
          width: 1200,
          height: 630,
          alt: "Meet Our Authors at NewsWireNinja",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Meet Our Authors | NewsWireNinja",
      description:
        "Discover the expert writers and journalists behind NewsWireNinja.",
      images: [`${SITE_URL}/images/authors-cover.webp`],
    },
  };
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function AuthorsPage() {
  /* ─────────────────────────────────────────────
     JSON-LD: Breadcrumbs
  ───────────────────────────────────────────── */
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
        name: "Authors",
        item: `${SITE_URL}/authors`,
      },
    ],
  };

  /* ─────────────────────────────────────────────
     JSON-LD: ItemList of Authors (BEST PRACTICE)
  ───────────────────────────────────────────── */
  const authorsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: authorsData.categories.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: item.author.name,
        url: `${SITE_URL}/authors/${slugify(item.author.name)}`,
        image: `${SITE_URL}${item.author.profileImage}`,
        jobTitle: item.author.role,
        description: item.author.bio,
        sameAs: [
          item.author.social?.twitter,
          item.author.social?.facebook,
          item.author.social?.medium,
        ].filter(Boolean),
      },
    })),
  };

  return (
    <>
      {/* JSON-LD ONLY (Correct Usage) */}
      <Script
        id="authors-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Script
        id="authors-list-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorsJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 font-serif">
        {/* PAGE TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Authors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the expert authors and journalists at <strong>NewsWireNinja</strong>,
            delivering trusted news and insights across business, politics, health,
            sports, travel, and more.
          </p>
        </div>

        {/* AUTHORS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"  itemScope itemType="https://schema.org/ItemList">
         {authorsData.categories.map(({ category, author }, index) => {
            const categoryKey = category.toLowerCase();
            const authorArticles = articlesData[categoryKey] || [];

            let pillarCount = 0;
            if (category === "Marketing & Branding") {
              pillarCount = pillarContent.filter(
                (c) =>
                  c.category.toLowerCase().includes("marketing") ||
                  c.category.toLowerCase().includes("branding")
              ).length;
            }

            return (
              <div
                key={author.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* REQUIRED POSITION */}
                <meta itemProp="position" content={index + 1} />

                {/* PERSON MICRODATA */}
                <div itemProp="item" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content={author.name} />
                  <meta
                    itemProp="url"
                    content={`${SITE_URL}/authors/${slugify(author.name)}`}
                  />
                  <meta
                    itemProp="image"
                    content={`${SITE_URL}${author.profileImage}`}
                  />
                  <meta itemProp="jobTitle" content={author.role} />

                  {/* AUTHOR CARD UI */}
                  <Link
                    href={`/authors/${slugify(author.name)}`}
                    title={`View articles by ${author.name}`}
                  >
                    <div className="relative h-60">
                      <Image
                        src={author.profileImage}
                        alt={author.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
                      <div className="absolute bottom-0 p-6 text-white">
                        <h2 className="text-2xl font-bold">{author.name}</h2>
                        <p className="text-sm">{author.role}</p>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {author.bio}
                    </p>

                    <div className="mt-5 flex justify-between items-center text-sm">
                      <span className="text-gray-500">
                        {category === "Marketing & Branding"
                          ? pillarCount + 1
                          : authorArticles.length}{" "}
                        Articles
                      </span>

                      <div className="flex gap-4">
                        {author.social?.twitter && (
                          <a
                            href={author.social.twitter}
                            title={`Follow ${author.name} on X`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaXTwitter />
                          </a>
                        )}
                        {author.social?.facebook && (
                          <a
                            href={author.social.facebook}
                            title={`Follow ${author.name} on Facebook`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF />
                          </a>
                        )}
                        {author.social?.medium && (
                          <a
                            href={author.social.medium}
                            title={`Read ${author.name} on Medium`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SiMedium />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </main>
    </>
  );
}