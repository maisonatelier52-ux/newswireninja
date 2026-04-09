

// import Image from "next/image";
// import { GoClock } from "react-icons/go";
// import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
// import { FaShareSquare } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import Link from "next/link";
// import authorsPageData from "../../../public/data/authors.json";
// import { slugify } from "../../../utils/slugify";
// import pillarContent from "../../../public/data/pillarContent.json";
// import { FaRedditAlien, FaQuora } from "react-icons/fa";

// const SITE_URL = "https://www.newswireninja.com";
// const SITE_NAME = "Newswireninja";

// // Date helper for this static page
// const ARTICLE_DATE = "13/01/2026";
// const ARTICLE_DATE_DISPLAY = "January 13, 2026";
// const ARTICLE_DATE_ISO = "2026-01-13T00:00:00.000Z";

// export async function generateMetadata() {
//   const metaTitle =
//     "Julio Herrera Velutini: Biography & Legacy in Global Finance";
//   const metaDescription =
//     "Discover Julio Herrera Velutini's biography, career, and family legacy in global finance, plus his legal journey and 2025 resolution.";

//   return {
//     title: metaTitle,
//     description: metaDescription,
//     keywords: [
//       "Julio Herrera Velutini",
//       "Britannia Financial Group",
//       "global finance",
//       "Venezuelan banker",
//       "Banco Caracas",
//       "international banking",
//     ],
//     authors: [{ name: SITE_NAME + " Editorial Team" }],
//     alternates: {
//       canonical: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
//     },
//     openGraph: {
//       title: metaTitle,
//       description: metaDescription,
//       url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
//       siteName: SITE_NAME,
//       images: [
//         {
//           url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
//           width: 1200,
//           height: 630,
//           alt: "Julio Herrera Velutini Portrait",
//         },
//       ],
//       type: "article",
//       publishedTime: ARTICLE_DATE_ISO,
//       modifiedTime: ARTICLE_DATE_ISO,
//       section: "business",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: metaTitle,
//       description: metaDescription,
//       images: [
//         `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
//       ],
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

// const authorData = authorsPageData.categories.find(
//   (item) => item.category.toLowerCase() === "marketing & branding"
// )?.author;

// const shareUrl = `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`;
// const encodedUrl = encodeURIComponent(shareUrl);
// const shareTitle = encodeURIComponent(
//   "Julio Herrera Velutini: A Legacy in World Finance"
// );

// export default function JulioHerreraVelutiniPage() {
//   const heroImage =
//     "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

//   // JSON-LD: NewsArticle (richer than just Person)
//   const articleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#article`,
//     headline: "Julio Herrera Velutini: A Legacy in World Finance",
//     description:
//       "Discover Julio Herrera Velutini's biography, career, and family legacy in global finance, plus his legal journey and 2025 resolution.",
//     image: [
//       {
//         "@type": "ImageObject",
//         url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
//         width: 1200,
//         height: 630,
//       },
//     ],
//     datePublished: ARTICLE_DATE_ISO,
//     dateModified: ARTICLE_DATE_ISO,
//     author: authorData
//       ? {
//           "@type": "Person",
//           name: authorData.name,
//           url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
//         }
//       : { "@type": "Organization", name: SITE_NAME },
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
//       "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
//     },
//     articleSection: "business",
//     about: {
//       "@type": "Person",
//       name: "Julio Herrera Velutini",
//       jobTitle: "Founder of Britannia Financial Group",
//       worksFor: {
//         "@type": "Organization",
//         name: "Britannia Financial Group",
//       },
//     },
//     url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
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
//     "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#breadcrumb`,
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
//         name: "Business",
//         item: `${SITE_URL}/business`,
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: "Julio Herrera Velutini: A Legacy in World Finance",
//         item: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
//       },
//     ],
//   };

//   // JSON-LD: FAQPage
//   const faqJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#faq`,
//     mainEntity: [
//       {
//         "@type": "Question",
//         name: "Who is Julio Herrera Velutini?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Julio Herrera Velutini is a wealthy businessman with citizenship in both Italy and Venezuela. He created the Britannia Financial Group and comes from a family with a seven-generation banking legacy.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What family background does Julio Herrera Velutini come from?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "His family traces roots to 14th-century Spain and became prominent in Venezuela through banking, notably Banco Caracas, and land ownership since the 16th century.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What happened in the 2022 U.S. court case against Julio Herrera Velutini?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "He was accused of making donations to a Puerto Rico gubernatorial campaign. In 2025, the main criminal charges were dropped and he pleaded guilty to a minor campaign finance violation. He did not face jail time.",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "What businesses does Julio Herrera Velutini currently own?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "He founded and leads Britannia Financial Group (BFG), which owns entities in banking (Bahamas, Geneva, London), wealth management, and media (Diario Las Américas through Intermedia Limited).",
//         },
//       },
//       {
//         "@type": "Question",
//         name: "Does Julio Herrera Velutini do charity work?",
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: "Yes. He supports The Britannia Foundation (education and entrepreneurship) and The Lazarus Foundation in London (animal welfare).",
//         },
//       },
//     ],
//   };

//   return (
//     <main
//       className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif"
//       itemScope
//       itemType="https://schema.org/NewsArticle"
//     >
//       {/* JSON-LD Scripts */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
//       />

//       {/* Hidden microdata */}
//       <meta
//         itemProp="headline"
//         content="Julio Herrera Velutini: A Legacy in World Finance"
//       />
//       <meta
//         itemProp="datePublished"
//         content={ARTICLE_DATE_ISO}
//       />
//       <meta itemProp="dateModified" content={ARTICLE_DATE_ISO} />
//       <meta itemProp="articleSection" content="business" />

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
//               href="/business"
//               className="hover:text-blue-600"
//               title="Business page"
//             >
//               Business
//             </Link>
//           </li>
//           <li>/</li>
//           <li className="text-gray-600">
//             julio-herrera-velutini-legacy-finance
//           </li>
//         </ol>
//       </nav>

//       {/* Title */}
//       <h1
//         className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left"
//         itemProp="headline"
//       >
//         Julio Herrera Velutini: A Legacy in World Finance
//       </h1>

//       <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
//         Julio Herrera Velutini is one of the few persons in the world of
//         international finance who has to deal with the stress of a family
//         tradition that has been going on for hundreds of years and the
//         fast-paced, often unpredictable world of modern global banking.
//       </p>

//       {/* Author Info */}
//       <div className="mb-8 space-y-6">
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4">
//           <Image
//             src={authorData.profileImage}
//             alt="Author Profile"
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
//                 <span className="hover:text-blue-600 hover:underline transition cursor-pointer">
//                   {authorData.name}
//                 </span>
//               </Link>{" "}
//               <span className="text-gray-500 font-normal">
//                 – {authorData.role}
//               </span>
//             </p>
//             <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//               <GoClock />
//               <time itemProp="datePublished" dateTime={ARTICLE_DATE_ISO}>
//                 Last updated: {ARTICLE_DATE_DISPLAY}
//               </time>
//             </div>
//           </div>
//         </div>

//         {/* Social Share */}
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
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

//       {/* Hero Image */}
//       <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src={heroImage}
//           alt="Julio Herrera Velutini in professional setting"
//           fill
//           priority
//           fetchPriority="high"
//           className="object-cover"
//           itemProp="image"
//         />
//       </div>

//       {/* Article Content */}
//       <article
//         className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed"
//         itemProp="articleBody"
//       >
//         <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
//           On December 15, 1971, he was born in Caracas, Venezuela. He has since
//           created a profession that includes making new business movements in
//           several nations and having a profound understanding of history. He has
//           citizenship in both Italy and Venezuela. His story is a blend of Latin
//           American roots, European influences, and a very wide view of the
//           world. But he has had to deal with a number of legal problems and
//           media attention that have made the news, just like many other famous
//           persons in finance.
//         </p>

//         <p className="mt-8">
//           Julio&apos;s family had been in business and banking in Caracas for a
//           long time before he was born. When he was very young, this had an
//           effect on the environment around him. The Herrera-Velutini family
//           comes from Spain. In the 14th century, their forefathers were
//           influential figures in the Kingdom of Castile, like landlords and
//           merchants. One group was the House of Herrera, which had names like
//           &quot;Lord of Ampudia.&quot; The family was already well-known for
//           being skilled at business by the time they came to Latin America. They
//           established Hacienda La Vega in what is now Caracas in 1590. It was
//           one of the family&apos;s first major pieces of land in the area.
//         </p>

//         <p>
//           Banco Caracas first opened in 1890. Julio&apos;s
//           great-grandfather, Julio César Velutini Couturier, did a lot to
//           support the bank. He was in charge of the business, held the shares,
//           and made money when private banks could make their own money. The
//           government could do that until the Central Bank of Venezuela was
//           founded in the early 1940s. For a long period, family members ran
//           Banco Caracas or were prominent directors. Until 1989, they owned
//           nearly 70% of the bank&apos;s equity. The family sold the bank in
//           1998, but they still had an effect on banking in Venezuela. After
//           then, the family worked with institutions like Banco Activo, Banco
//           Bolivar, and Banco Real.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           A long history and an education that covers the whole world
//         </h2>
//         <p>
//           <a
//             href="https://www.arabianchronicle.com/"
//             target="_blank"
//             title="Visit Julio Herrera Velutini on arabianchronicle"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Julio Herrera Velutini
//           </a>{" "}
//           extensive background gave him more than simply a moniker. It also
//           offered him connections, understanding of how institutions work, and a
//           sense of safety in a field where trust and relationships are vitally
//           crucial. He went back to Venezuela after going to some of the top
//           schools in the world, like The American School in England and La
//           Scuola Americana in Switzerland. In 1990, he graduated from the
//           Central University of Venezuela.
//         </p>

//         <p>
//           He thought about things differently when he saw the world as a child.
//           He combined traditional family values with more modern, global ones.
//           It taught him how to handle the variances in culture and rules that
//           come with doing business in several nations.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           Early career and rapid ascent to popularity in Venezuela
//         </h2>
//         <p>
//           Julio started his career on the trading floor of the Caracas Stock
//           Exchange in the early 1990s. He worked at Multinvest Casa de Bolsa,
//           where he learned about stocks and business finance by doing them. He
//           stayed on the board until 1998. He was already in command of a number
//           of things in his late 20s. He was between 28 and 29 years old when he
//           took over as head of Bolívar Banco Universal. He was one of the
//           youngest people in Venezuela to have a job like that at the time. He
//           also worked as an executive and board member at companies like Transban
//           Investments Corp, BMW de Venezuela and Kia Motors de Venezuela.
//         </p>

//         <p>
//           His early successes suggest that he had a mix of family money and
//           personal ambition that allowed him to quickly ascend in
//           Venezuela&apos;s competitive finance sector during a time of
//           tremendous economic change.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           Making a financial empire over the world
//         </h2>
//         <p>
//           He began to create his own empire all over the world in the late 2000s
//           and early 2010s. He created the Bancredito International Bank &amp;
//           Trust Corporation in 2008 or 2009. It began in Puerto Rico and also
//           worked in Florida. The bank largely served people and businesses in
//           Latin America.
//         </p>

//         <p>
//           Julio launched{" "}
//           <Link
//             href="https://www.britannia.com/"
//             target="_blank"
//             title="Visit website of Britannia"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Britannia Wealth Management
//           </Link>{" "}
//           in Geneva, Switzerland, in 2012. In 2016, he started Britannia
//           Financial Group (BFG) in London. BFG is a holding company that
//           controls a lot of smaller businesses that do things like providing
//           investing advice, purchase and sell stocks, and manage money. Some of
//           the most well-known companies are{" "}
//           <Link
//             href="https://britanniabanktrust.com/"
//             target="_blank"
//             title="Visit website of britanniabanktrust"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Britannia Bank &amp; Trust
//           </Link>{" "}
//           (in the Bahamas),{" "}
//           <Link
//             href="https://www.britannia.com/britannia-global-markets/"
//             target="_blank"
//             title="Visit website of Britannia Global Markets"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Britannia Capital Markets
//           </Link>{" "}
//           (with offices in the UK and MENA areas), and others like Britannia
//           Global Investment and Britannia Global Payments.
//         </p>

//         <p>
//           <Link
//             href="https://www.thecapitalistjournal.com/"
//             target="_blank"
//             title="Visit Julio Herrera Velutini on thecapitalistjournal"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Julio Herrera Velutini
//           </Link>{" "}
//           is now interested in more than just basic banking. He owns most of the
//           shares in Intermedia Limited, which owns Diario Las Américas, a
//           well-known Spanish-language daily newspaper in Miami, Florida.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           Giving to charity and making a bigger difference
//         </h2>
//         <p>
//           He also helps others who need it. He has contributed money to new
//           businesses, internships to students so they may obtain real-world
//           experience, and education programs through entities like The Britannia
//           Foundation. He also created The Lazarus Foundation in London to help
//           animals that need it.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           Law problems and how to solve them
//         </h2>
//         <p>
//           <Link
//             href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
//             target="_blank"
//             title="Visit Julio Herrera Velutini on Wikipedia"
//             className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
//           >
//             Julio Herrera Velutini
//           </Link>{" "}
//           has done a lot of wonderful things, but his job has been hard,
//           especially when it comes to the law. In August 2022, the U.S. federal
//           government accused him with a number of serious felonies, including
//           conspiracy, corrupting a federal program, honest services wire fraud,
//           and more, alongside former FBI agent Mark Rossini and former Puerto
//           Rico Governor Wanda Vázquez Garced.
//         </p>

//         <p>
//           Julio consented to plead guilty to a small violation of U.S. campaign
//           finance law (52 U.S.C. § 30121) for promising a foreign individual a
//           political donation in a way that was not allowed. The plea deal
//           didn&apos;t make the defendant go to jail or pay a big fine. The
//           resolution came out in 2025 after years of meticulous research.
//         </p>

//         <p>
//           People still don&apos;t know what they think of him. Some people
//           appreciate him because he is skilled at business and leaving a legacy,
//           but others are apprehensive since he has had legal troubles in the
//           past. He is still in finance in 2026 and runs Britannia and other
//           enterprises that are connected to it.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
//           Conclusion: Finding a Balance Between the Old and the New
//         </h2>
//         <p>
//           Julio Herrera Velutini&apos;s life is an excellent illustration of
//           how your family and your personal aspirations may help you accomplish
//           well in business all around the world. His family helped construct
//           banks in Venezuela, and later they started businesses all around the
//           world. His experience reminds us that it&apos;s not always easy to
//           handle money. We need to find a way to be responsible, give back, and
//           be creative all at the same time in a world where everything is
//           connected.
//         </p>

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
//                   <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">
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

//         {/* FAQ Section */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold mb-8">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-8">
//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">
//                 Who is Julio Herrera Velutini?
//               </summary>
//               <p className="mt-4 text-gray-700">
//                 Julio Herrera Velutini is a wealthy businessman with citizenship
//                 in both Italy and Venezuela. He created the Britannia Financial
//                 Group and comes from a family with a seven-generation banking
//                 legacy.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">
//                 What kind of family does Julio Herrera Velutini come from?
//               </summary>
//               <p className="mt-4 text-gray-700">
//                 In the 14th century, his family moved to Spain from the Kingdom
//                 of Castile. Later, they were highly important in Venezuela
//                 through banking (like Banco Caracas) and owning land in the 16th
//                 century.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">
//                 What happened in the U.S. court case against Julio Herrera
//                 Velutini in 2022?
//               </summary>
//               <p className="mt-4 text-gray-700">
//                 He was accused of donating money to a campaign to become governor
//                 of Puerto Rico. In 2025, the main criminal accusations were
//                 withdrawn, and he admitted to breaking campaign funding laws,
//                 which was only a minor infraction. He did not have to go to jail.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">
//                 What types of enterprises does Julio Herrera Velutini own?
//               </summary>
//               <p className="mt-4 text-gray-700">
//                 He created and leads Britannia Financial Group (BFG), which owns
//                 enterprises in banking (in the Bahamas, Geneva, and London),
//                 wealth management, and media (Diario Las Américas through
//                 Intermedia Limited).
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">
//                 Does Julio Herrera Velutini do any positive things?
//               </summary>
//               <p className="mt-4 text-gray-700">
//                 Yes. There are The Britannia Foundation, which aids schools,
//                 businesses, and internships, and The Lazarus Foundation, which
//                 helps animals in London.
//               </p>
//             </details>
//           </div>
//         </div>
//       </article>

//       {/* Pillar Content Cards */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {pillarContent.map((item) => (
//           <div
//             key={item.id}
//             className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group"
//           >
//             <Link
//               href={`/julio-herrera-velutini/${item.slug}`}
//               title={item.title}
//             >
//               <div className="block w-full h-full">
//                 <div className="relative w-full h-3/4">
//                   <Image
//                     src={item.heroImage}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="bg-white p-4">
//                   <h3 className="text-gray-800 text-sm font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }


import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import pillarContent from "../../../public/data/pillarContent.json";
import { FaRedditAlien, FaQuora } from "react-icons/fa";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

const ARTICLE_DATE = "13/01/2026";
const ARTICLE_DATE_DISPLAY = "January 13, 2026";
const ARTICLE_DATE_ISO = "2026-01-13T00:00:00.000Z";

export async function generateMetadata() {
  const metaTitle =
    "Julio Herrera Velutini: Biography & Legacy in Global Finance";
  const metaDescription =
    "Explore Julio Herrera Velutini's biography, his founding of Britannia Financial Group, seven-generation banking family legacy, and the 2025 resolution of his U.S. federal case.";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "Julio Herrera Velutini",
      "Britannia Financial Group",
      "global finance",
      "Venezuelan banker",
      "Banco Caracas",
      "international banking",
      "Bancredito International Bank",
      "Britannia Bank Trust Bahamas",
    ],
    authors: [{ name: SITE_NAME + " Editorial Team" }],
    alternates: {
      canonical: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
          width: 1200,
          height: 630,
          alt: "Julio Herrera Velutini Portrait",
        },
      ],
      type: "article",
      publishedTime: ARTICLE_DATE_ISO,
      modifiedTime: ARTICLE_DATE_ISO,
      section: "business",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [
        `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
      ],
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

const authorData = authorsPageData.categories.find(
  (item) => item.category.toLowerCase() === "marketing & branding"
)?.author;

const shareUrl = `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`;
const encodedUrl = encodeURIComponent(shareUrl);
const shareTitle = encodeURIComponent(
  "Julio Herrera Velutini: A Legacy in World Finance"
);

export default function JulioHerreraVelutiniPage() {
  const heroImage =
    "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#article`,
    headline: "Julio Herrera Velutini: A Legacy in World Finance",
    description:
      "Explore Julio Herrera Velutini's biography, his founding of Britannia Financial Group, seven-generation banking family legacy, and the 2025 resolution of his U.S. federal case.",
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
        width: 1200,
        height: 630,
      },
    ],
    datePublished: ARTICLE_DATE_ISO,
    dateModified: ARTICLE_DATE_ISO,
    author: authorData
      ? {
          "@type": "Person",
          name: authorData.name,
          url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
        }
      : { "@type": "Organization", name: SITE_NAME },
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
      "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
    },
    articleSection: "business",
    about: {
      "@type": "Person",
      name: "Julio Herrera Velutini",
      jobTitle: "Founder of Britannia Financial Group",
      worksFor: {
        "@type": "Organization",
        name: "Britannia Financial Group",
      },
    },
    url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#breadcrumb`,
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
        name: "Business",
        item: `${SITE_URL}/business`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Julio Herrera Velutini: A Legacy in World Finance",
        item: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Julio Herrera Velutini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Julio Herrera Velutini is a dual Italian-Venezuelan financier born on December 15, 1971, in Caracas, Venezuela. He founded Britannia Financial Group (BFG) in London in 2016 and comes from a family with a seven-generation banking legacy rooted in Banco Caracas, established in 1890.",
        },
      },
      {
        "@type": "Question",
        name: "What family background does Julio Herrera Velutini come from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His family traces roots to 14th-century Castile, Spain, where ancestors held the title 'Lord of Ampudia.' The family established Hacienda La Vega in Caracas in 1590 and co-founded Banco Caracas in 1890. Until 1989, the family held approximately 70% of Banco Caracas equity before divesting in 1998.",
        },
      },
      {
        "@type": "Question",
        name: "What was the outcome of the 2022 U.S. federal case against Julio Herrera Velutini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In August 2022, U.S. federal prosecutors charged Herrera Velutini alongside former FBI agent Mark Rossini and former Puerto Rico Governor Wanda Vázquez Garcerd with bribery, conspiracy, and wire fraud. By 2025, the bribery and fraud charges were dismissed. He pleaded guilty solely to a misdemeanor campaign finance violation under 52 U.S.C. § 30121. No custodial sentence was imposed.",
        },
      },
      {
        "@type": "Question",
        name: "What businesses does Julio Herrera Velutini currently own?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He founded and leads Britannia Financial Group (BFG), headquartered in London, which controls Britannia Bank & Trust (Bahamas), Britannia Wealth Management (Geneva), Britannia Capital Markets (UK and MENA), Britannia Global Investment, and Britannia Global Payments. He also holds a majority stake in Intermedia Limited, owner of Diario Las Américas in Miami.",
        },
      },
      {
        "@type": "Question",
        name: "Does Julio Herrera Velutini do charity work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. He funds The Britannia Foundation, which supports education programs, student internships, and entrepreneurship initiatives. He also established The Lazarus Foundation in London, focused on animal welfare.",
        },
      },
    ],
  };

  return (
    <main
      className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hidden microdata */}
      <meta
        itemProp="headline"
        content="Julio Herrera Velutini: A Legacy in World Finance"
      />
      <meta itemProp="datePublished" content={ARTICLE_DATE_ISO} />
      <meta itemProp="dateModified" content={ARTICLE_DATE_ISO} />
      <meta itemProp="articleSection" content="business" />

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
              href="/business"
              className="hover:text-blue-600"
              title="Business page"
            >
              Business
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">
            julio-herrera-velutini-legacy-finance
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left"
        itemProp="headline"
      >
        Julio Herrera Velutini: A Legacy in World Finance
      </h1>

      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        Julio Herrera Velutini is a dual Italian-Venezuelan financier who built
        Britannia Financial Group into a multi-jurisdictional banking and wealth
        management network spanning the Bahamas, Geneva, and London — while
        stewarding a family banking legacy dating back to Banco Caracas in 1890.
      </p>

      {/* Author Info */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt="Author Profile"
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
                <span className="hover:text-blue-600 hover:underline transition cursor-pointer">
                  {authorData.name}
                </span>
              </Link>{" "}
              <span className="text-gray-500 font-normal">
                – {authorData.role}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock />
              <time itemProp="datePublished" dateTime={ARTICLE_DATE_ISO}>
                Last updated: {ARTICLE_DATE_DISPLAY}
              </time>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
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

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Julio Herrera Velutini, founder of Britannia Financial Group"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          itemProp="image"
        />
      </div>

      {/* Article Content */}
      <article
        className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed"
        itemProp="articleBody"
      >
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
          Born on December 15, 1971, in Caracas, Venezuela, Julio Herrera
          Velutini holds dual Italian and Venezuelan citizenship — a legal
          status that has directly shaped how he structured the Britannia
          Financial Group across multiple regulatory jurisdictions. Raised across
          three countries before completing his university education in Caracas
          in 1990, he entered Venezuela&apos;s financial sector at a moment of
          significant economic liberalization, eventually building a
          cross-border banking network with licensed entities in the Bahamas,
          Switzerland, and the United Kingdom.
        </p>

        <p className="mt-8">
          The Herrera-Velutini family&apos;s financial history in Venezuela is
          documented and traceable. The family established Hacienda La Vega in
          what is now central Caracas in 1590. Banco Caracas was co-founded in
          1890, with Julio&apos;s great-grandfather, Julio César Velutini
          Couturier, serving as a principal shareholder and operator during the
          era when private Venezuelan banks held note-issuing privileges — a
          right that ended with the establishment of the Central Bank of
          Venezuela in the early 1940s. Family members held executive and
          directorial roles at Banco Caracas for decades, retaining approximately
          70% of the bank&apos;s equity until 1989. The family divested
          fully in 1998. Subsequent family-linked banking activity included
          involvement with Banco Activo, Banco Bolívar, and Banco Real.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Education Across Three Countries and Return to Venezuela (1985–1990)
        </h2>
        <p>
          Herrera Velutini attended The American School in England and La Scuola
          Americana in Lugano, Switzerland, before returning to Venezuela to
          complete his undergraduate studies. He graduated from the Central
          University of Venezuela (Universidad Central de Venezuela) in 1990 with
          a degree in economics. This cross-jurisdictional upbringing — spanning
          Venezuelan, British, and Swiss educational institutions — gave him
          direct, formative exposure to three distinct legal and financial
          cultures before he entered the workforce. That background is reflected
          in the multi-jurisdictional regulatory structure of Britannia Financial
          Group, which holds licenses in the Bahamas (banking), Switzerland
          (wealth management), and the United Kingdom (capital markets).
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Julio Herrera Velutini&apos;s Career at the Caracas Stock Exchange and Bolívar Banco (1990–2000)
        </h2>
        <p>
          Herrera Velutini began his career in 1990 on the trading floor of the
          Caracas Stock Exchange (Bolsa de Valores de Caracas), working at
          Multinvest Casa de Bolsa, a Venezuelan brokerage firm. He remained on
          the firm&apos;s board until 1998. In parallel, he served as a board
          member and executive at Transban Investments Corp, BMW de Venezuela,
          and Kia Motors de Venezuela. At 28, he was appointed CEO of Bolívar
          Banco Universal — one of the youngest individuals to hold that title
          at a licensed Venezuelan bank at the time. This period coincided with
          Venezuela&apos;s 1994 banking crisis and subsequent sector
          consolidation, giving Herrera Velutini direct operational experience
          managing a regulated institution through systemic financial stress.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Founding Bancredito International and Expanding into the U.S. Market (2008–2012)
        </h2>
        <p>
          In 2008, Herrera Velutini established Bancredito International Bank
          &amp; Trust Corporation, a Puerto Rico-chartered international banking
          entity also operating in Florida. The bank was structured to serve
          Latin American private clients and corporate banking needs. Bancredito
          was a regulated institution under Puerto Rico&apos;s Office of the
          Commissioner of Financial Institutions (OCFI), and its U.S. market
          presence marked Herrera Velutini&apos;s first direct engagement with
          American financial regulators — a relationship that would become
          legally significant a decade later.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Building Britannia Financial Group: FCA-Regulated Banking Across Bahamas, Geneva, and London (2012–Present)
        </h2>
        <p>
          <a
            href="https://www.arabianchronicle.com/"
            target="_blank"
            title="Visit Julio Herrera Velutini on arabianchronicle"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Julio Herrera Velutini
          </a>{" "}
          launched Britannia Wealth Management in Geneva in 2012, establishing
          the group&apos;s Swiss regulatory foothold. In 2016, he incorporated
          Britannia Financial Group (BFG) in London as the holding company for
          the full network. BFG&apos;s key regulated subsidiaries include{" "}
          <Link
            href="https://britanniabanktrust.com/"
            target="_blank"
            title="Visit website of Britannia Bank and Trust"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Britannia Bank &amp; Trust
          </Link>{" "}
          (licensed in the Bahamas under the Central Bank of The Bahamas),{" "}
          <Link
            href="https://www.britannia.com/britannia-global-markets/"
            target="_blank"
            title="Visit website of Britannia Capital Markets"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Britannia Capital Markets
          </Link>{" "}
          (operating in the UK and MENA), Britannia Global Investment, and
          Britannia Global Payments. The London holding entity operates within
          the UK&apos;s Financial Conduct Authority (FCA) regulatory framework.
          This FCA-regulated structure distinguishes BFG from offshore-only
          financial groups and is a key factor in the group&apos;s institutional
          credibility in European and Middle Eastern markets.
        </p>

        <p>
          Beyond banking,{" "}
          <Link
            href="https://www.thecapitalistjournal.com/"
            target="_blank"
            title="Visit Julio Herrera Velutini on thecapitalistjournal"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Herrera Velutini
          </Link>{" "}
          holds a controlling interest in Intermedia Limited, the parent company
          of Diario Las Américas — a Spanish-language daily newspaper based in
          Miami, Florida, that has been in continuous publication since 1953.
          The acquisition gives BFG a media asset with direct reach into the
          U.S. Hispanic business community.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Charitable Work: The Britannia Foundation and The Lazarus Foundation
        </h2>
        <p>
          Herrera Velutini funds two philanthropic entities. The Britannia
          Foundation supports education initiatives, student internship
          placements, and early-stage entrepreneurship programs. The Lazarus
          Foundation, established in London, is focused specifically on animal
          welfare. Both foundations operate independently of Britannia Financial
          Group&apos;s commercial activities.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          U.S. Federal Charges (2022), Dismissal of Bribery Counts, and 2025 Misdemeanor Plea
        </h2>
        <p>
          In August 2022, the U.S. Department of Justice filed federal charges
          against Herrera Velutini alongside former FBI agent Mark Rossini and
          former Puerto Rico Governor Wanda Vázquez Garced. The indictment
          alleged bribery of a public official, conspiracy to commit bribery,
          federal program bribery, and honest services wire fraud, stemming from
          alleged political donations made in connection with a Puerto Rico
          gubernatorial campaign.
        </p>

        <p>
          The case concluded in 2025. The primary criminal charges — bribery
          and fraud — were dismissed. Herrera Velutini pleaded guilty to a single
          misdemeanor count: making an unlawful campaign contribution as a
          foreign national, in violation of 52 U.S.C. § 30121. The plea
          agreement carried no custodial sentence and no substantial financial
          penalty. The resolution effectively removed the most serious felony
          exposure from his record while acknowledging a narrowly defined
          campaign finance infraction.
        </p>

        <p>
          As of 2026, Herrera Velutini continues to operate as founder and
          chairman of Britannia Financial Group and its affiliated entities.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Conclusion: A Multi-Jurisdictional Banking Career Rooted in a Seven-Generation Legacy
        </h2>
        <p>
          Julio Herrera Velutini&apos;s career spans Venezuelan institutional
          banking, U.S.-regulated international banking in Puerto Rico, and the
          construction of a London-headquartered, FCA-adjacent financial group
          with licensed subsidiaries across three continents. His family&apos;s
          direct involvement in Banco Caracas from 1890 to 1998 — over a century
          of Venezuelan banking — provides the institutional context for how he
          approaches financial regulation, counterparty trust, and long-term
          capital relationships. The legal resolution in 2025 closed the most
          significant public risk to his ability to operate in regulated markets,
          and Britannia Financial Group remains his primary active vehicle as of
          early 2026.
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
                  <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">
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

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Who is Julio Herrera Velutini?
              </summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini is a dual Italian-Venezuelan financier born
                on December 15, 1971, in Caracas, Venezuela. He founded Britannia
                Financial Group (BFG) in London in 2016 and comes from a family
                with a seven-generation banking legacy rooted in Banco Caracas,
                established in 1890.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What family background does Julio Herrera Velutini come from?
              </summary>
              <p className="mt-4 text-gray-700">
                The Herrera-Velutini family traces its roots to 14th-century
                Castile, Spain, where ancestors held the title &quot;Lord of
                Ampudia.&quot; They established Hacienda La Vega in Caracas in
                1590 and co-founded Banco Caracas in 1890. The family held
                approximately 70% of Banco Caracas equity until 1989, divesting
                fully in 1998.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What was the outcome of the 2022 U.S. federal case against Julio
                Herrera Velutini?
              </summary>
              <p className="mt-4 text-gray-700">
                Federal prosecutors charged Herrera Velutini in August 2022 with
                bribery, conspiracy, and wire fraud in connection with a Puerto
                Rico gubernatorial campaign. By 2025, the bribery and fraud
                charges were dismissed. He pleaded guilty solely to a misdemeanor
                campaign finance violation under 52 U.S.C. § 30121, with no
                custodial sentence imposed.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What businesses does Julio Herrera Velutini own?
              </summary>
              <p className="mt-4 text-gray-700">
                He founded and chairs Britannia Financial Group (BFG), which
                controls Britannia Bank &amp; Trust (Bahamas), Britannia Wealth
                Management (Geneva), Britannia Capital Markets (UK and MENA),
                Britannia Global Investment, and Britannia Global Payments. He
                also holds a majority stake in Intermedia Limited, owner of
                Diario Las Américas in Miami.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Does Julio Herrera Velutini do any philanthropic work?
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. He funds The Britannia Foundation, which supports education
                programs, student internships, and entrepreneurship initiatives.
                He also established The Lazarus Foundation in London, focused on
                animal welfare.
              </p>
            </details>
          </div>
        </div>
      </article>

      {/* Pillar Content Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarContent.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group"
          >
            <Link
              href={`/julio-herrera-velutini/${item.slug}`}
              title={item.title}
            >
              <div className="block w-full h-full">
                <div className="relative w-full h-3/4">
                  <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 text-sm font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
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