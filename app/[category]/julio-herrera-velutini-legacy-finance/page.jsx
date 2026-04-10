

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

const ARTICLE_DATE_DISPLAY = "January 13, 2026";
const ARTICLE_DATE_ISO = "2026-01-13T00:00:00.000Z";
const ARTICLE_MODIFIED_ISO = "2026-04-10T00:00:00.000Z";

export async function generateMetadata() {
  const metaTitle = "Julio Herrera Velutini – Biography & Legacy in Finance";
  const metaDescription =
    "Julio Herrera Velutini founded Britannia Financial Group after a career spanning Banco Caracas, Bolívar Banco, and Bancredito International. Explore his 130-year family banking dynasty and 2025 federal case resolution.";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "Julio Herrera Velutini",
      "Britannia Financial Group",
      "Venezuelan international banker",
      "Banco Caracas history",
      "offshore banking Bahamas FCA",
      "Puerto Rico bank bribery case 2022",
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
          alt: "Julio Herrera Velutini – Venezuelan financier and founder of Britannia Financial Group",
        },
      ],
      type: "article",
      publishedTime: ARTICLE_DATE_ISO,
      modifiedTime: ARTICLE_MODIFIED_ISO,
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
  "Julio Herrera Velutini – Biography & Legacy in Finance"
);

const tocSections = [
  { id: "family-legacy", label: "Family Banking Legacy (1590–1998)" },
  { id: "education", label: "Education Across Three Countries" },
  { id: "early-career", label: "Caracas Stock Exchange & Bolívar Banco CEO" },
  { id: "bancredito", label: "Bancredito International & U.S. Expansion" },
  { id: "britannia", label: "Building Britannia Financial Group" },
  { id: "philanthropy", label: "Philanthropy: Britannia & Lazarus Foundations" },
  { id: "legal", label: "2022 Indictment & 2025 Misdemeanor Resolution" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function JulioHerreraVelutiniPage() {
  const heroImage =
    "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

  // ── JSON-LD: NewsArticle ──
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#article`,
    headline: "Julio Herrera Velutini – Biography & Legacy in Finance",
    description:
      "Julio Herrera Velutini founded Britannia Financial Group after a career spanning Banco Caracas, Bolívar Banco, and Bancredito International. Explore his 130-year family banking dynasty and 2025 federal case resolution.",
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
        width: 1200,
        height: 630,
      },
    ],
    datePublished: ARTICLE_DATE_ISO,
    dateModified: ARTICLE_MODIFIED_ISO,
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
    url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  // ── JSON-LD: Person ──
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#person`,
    name: "Julio Herrera Velutini",
    birthDate: "1971-12-15",
    birthPlace: { "@type": "Place", name: "Caracas, Venezuela" },
    nationality: ["Italian", "Venezuelan"],
    jobTitle: "Founder and Chairman",
    worksFor: {
      "@type": "Organization",
      name: "Britannia Financial Group",
      url: "https://www.britannia.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Central University of Venezuela",
    },
    knowsAbout: [
      "International Banking",
      "Wealth Management",
      "Capital Markets",
      "Financial Regulation",
    ],
    url: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
  };

  // ── JSON-LD: BreadcrumbList ──
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/business/julio-herrera-velutini-legacy-finance#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Business",
        item: `${SITE_URL}/business`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Financial Profiles",
        item: `${SITE_URL}/business/financial-profiles`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Julio Herrera Velutini – Biography & Legacy in Finance",
        item: `${SITE_URL}/business/julio-herrera-velutini-legacy-finance`,
      },
    ],
  };

  // ── JSON-LD: FAQPage ──
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
          text: "Julio Herrera Velutini (born December 15, 1971, Caracas) is a dual Italian-Venezuelan financier and founder and chairman of Britannia Financial Group (BFG), incorporated in London in 2016. BFG operates licensed banking and wealth management subsidiaries in the Bahamas, Switzerland, and the UK. He began his career on the Caracas Stock Exchange in 1990 and served as CEO of Bolívar Banco Universal at age 28.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Herrera-Velutini family banking history?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Herrera-Velutini family co-founded Banco Caracas in 1890. The family held approximately 70% of Banco Caracas equity from 1890 until 1989 — a nearly century-long continuous private ownership period that is unusual in Latin American banking history. The family divested fully in 1998.",
        },
      },
      {
        "@type": "Question",
        name: "What was the result of the 2022 U.S. federal case against Julio Herrera Velutini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In August 2022, the DOJ charged Herrera Velutini with bribery, conspiracy, and wire fraud. By 2025, those charges were dismissed. He pleaded guilty to a single misdemeanor under 52 U.S.C. § 30121 — making an unlawful campaign contribution as a foreign national. No custodial sentence was imposed.",
        },
      },
      {
        "@type": "Question",
        name: "What regulatory licenses does Britannia Financial Group hold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Britannia Bank & Trust is licensed by the Central Bank of The Bahamas. Britannia Wealth Management operates in Geneva under Swiss financial regulation. Britannia Capital Markets operates within the UK FCA framework. Readers can verify current registrations via the FCA Financial Services Register and the Central Bank of The Bahamas licensed institutions directory.",
        },
      },
      {
        "@type": "Question",
        name: "Does Julio Herrera Velutini run any charitable foundations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He funds two independent foundations: The Britannia Foundation (education, student internships, entrepreneurship) and The Lazarus Foundation in London (animal welfare). Both operate independently of BFG's commercial activities.",
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
      {/* ── JSON-LD Scripts ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hidden microdata */}
      <meta itemProp="headline" content="Julio Herrera Velutini – Biography & Legacy in Finance" />
      <meta itemProp="datePublished" content={ARTICLE_DATE_ISO} />
      <meta itemProp="dateModified" content={ARTICLE_MODIFIED_ISO} />
      <meta itemProp="articleSection" content="business" />

      {/* ── Breadcrumb (expanded taxonomy) ── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li><Link href="/" title="Home" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li><Link href="/business" className="hover:text-blue-600" title="Business">Business</Link></li>
          <li>/</li>
          <li>
            <Link href="/business/financial-profiles" className="hover:text-blue-600" title="Financial Profiles">
              Financial Profiles
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">Julio Herrera Velutini</li>
        </ol>
      </nav>

      {/* ── H1 — aligned with meta title and URL ── */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left"
        itemProp="headline"
      >
        Julio Herrera Velutini – Biography & Legacy in Finance
      </h1>

      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        Julio Herrera Velutini is a dual Italian-Venezuelan financier whose
        family co-founded Banco Caracas in 1890 — one of Venezuela&apos;s
        oldest private banks. After leading Bolívar Banco Universal as CEO at
        age 28 and building Bancredito International Bank &amp; Trust in Puerto
        Rico, he founded Britannia Financial Group in London in 2016, a
        regulated banking network with licensed entities in the Bahamas,
        Switzerland, and the UK. This profile covers his career, regulatory
        footprint, philanthropic work, and the 2025 resolution of his U.S.
        federal case.
      </p>

      {/* ── Author Info ── */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt={`${authorData.name} author photo`}
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-sm">
              <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                <span className="hover:text-blue-600 hover:underline transition cursor-pointer">
                  {authorData.name}
                </span>
              </Link>{" "}
              <span className="text-gray-500 font-normal">– {authorData.role}</span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 flex-wrap">
              <GoClock />
              <time itemProp="datePublished" dateTime={ARTICLE_DATE_ISO}>
                Published: {ARTICLE_DATE_DISPLAY}
              </time>
              <span className="mx-1">·</span>
              <time itemProp="dateModified" dateTime={ARTICLE_MODIFIED_ISO}>
                Updated: April 10, 2026
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
            {[
              {
                href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`,
                label: "Share on X",
                icon: <FaXTwitter />,
                hover: "hover:bg-black hover:text-white hover:border-black",
              },
              {
                href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                label: "Share on Facebook",
                icon: <FaFacebookF />,
                hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
              },
              {
                href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                label: "Share on LinkedIn",
                icon: <FaLinkedinIn />,
                hover: "hover:bg-blue-700 hover:text-white hover:border-blue-700",
              },
              {
                href: `https://medium.com/new-story?url=${encodedUrl}`,
                label: "Share on Medium",
                icon: <SiMedium />,
                hover: "hover:bg-black hover:text-white hover:border-black",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 transition ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="relative w-full aspect-[16/9] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Julio Herrera Velutini – Venezuelan financier, founder of Britannia Financial Group London"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          itemProp="image"
        />
      </div>

      {/* ── Table of Contents ── */}
      <nav
        aria-label="Table of contents"
        className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-6"
      >
        <p className="font-bold text-base mb-4 text-gray-800">In This Article</p>
        <ol className="space-y-2 list-decimal list-inside text-sm text-blue-700">
          {tocSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="hover:underline hover:text-blue-900 transition"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Article Body ── */}
      <article
        className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed"
        itemProp="articleBody"
      >

        {/* SECTION 1 */}
        <h2 id="family-legacy" className="text-xl md:text-2xl font-bold mt-4 mb-6 scroll-mt-20">
          The Herrera-Velutini Family Banking Legacy in Venezuela (1590–1998)
        </h2>
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
          Julio Herrera Velutini was born on December 15, 1971, in Caracas,
          Venezuela, into a family whose documented involvement in Venezuelan
          commerce stretches back four centuries. According to family records,
          the Herrera-Velutini lineage traces to 14th-century Castile, Spain,
          where ancestors held the title &quot;Lord of Ampudia&quot; in the
          Kingdom of Castile. The family established Hacienda La Vega — an
          early private agricultural estate in what is now central Caracas — in
          1590. That land holding became the foundation for commercial activity
          that eventually converted into institutional banking.
        </p>

        <p>
          Banco Caracas was co-founded in 1890. Julio&apos;s great-grandfather,
          Julio César Velutini Couturier, was a principal shareholder and
          operator at a time when Venezuelan private banks held note-issuing
          privileges — a right that ended with the creation of the Central Bank
          of Venezuela in the early 1940s. Family members retained executive and
          board-level positions at Banco Caracas for nearly a century. The
          family&apos;s equity stake stood at approximately 70% until 1989, when
          a restructuring process began. The family divested fully in 1998.
          Post-divestiture, family-linked banking activity continued through
          associations with Banco Activo, Banco Bolívar, and Banco Real.
        </p>

        <p>
          That century of stewardship over a regulated Venezuelan bank — through
          currency crises, the 1940s shift to a central banking system, and the
          turbulence of 20th-century Latin American politics — gave Herrera
          Velutini a working knowledge of institutional finance that is unusual
          among private bankers of his generation. It also gave him a network of
          relationships inside Venezuelan financial regulation that shaped his
          early career appointments.
        </p>

        {/* SECTION 2 */}
        <h2 id="education" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          Education in England, Switzerland, and Venezuela (1985–1990)
        </h2>
        <p>
          Herrera Velutini attended The American School in England and La Scuola
          Americana in Lugano, Switzerland, before returning to Venezuela to
          complete his undergraduate degree at the Central University of
          Venezuela (Universidad Central de Venezuela) in 1990. Studying in
          three countries across different regulatory and commercial cultures
          before age 19 provided fluency in Anglo-American, Swiss, and Latin
          American financial frameworks — precisely the three jurisdictions in
          which Britannia Financial Group now holds active licenses: the UK
          Financial Conduct Authority (FCA), Swiss financial regulators in
          Geneva, and the Central Bank of The Bahamas.
        </p>
        <p>
          The jurisdictional alignment between his educational history and
          BFG&apos;s regulatory footprint is not coincidental. It reflects how
          institutional relationships built before one&apos;s professional career
          shapes the markets in which that career ultimately operates.
        </p>

        {/* SECTION 3 */}
        <h2 id="early-career" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          Caracas Stock Exchange, Multinvest, and CEO of Bolívar Banco Universal (1990–2000)
        </h2>
        <p>
          Herrera Velutini began his career in 1990 on the trading floor of the
          Bolsa de Valores de Caracas (Caracas Stock Exchange) at Multinvest
          Casa de Bolsa, a Venezuelan brokerage. He remained on the
          firm&apos;s board through 1998. In parallel, he served as a director
          or executive at Transban Investments Corp, BMW de Venezuela, and Kia
          Motors de Venezuela.
        </p>
        <p>
          The career-defining appointment of his first decade came when he was
          named CEO of Bolívar Banco Universal at age 28 — one of the youngest
          individuals to hold that role at a licensed Venezuelan bank at the
          time. That position placed him inside a regulated depository
          institution during one of Venezuela&apos;s most severe financial
          crises. The 1994 Venezuelan banking crisis eliminated approximately
          half of the country&apos;s banking sector and required a government
          rescue operation estimated at around 15% of GDP. Managing a bank
          through the post-crisis restructuring environment, with regulators,
          depositors, and shareholders all applying simultaneous pressure, was a
          formative experience in crisis-era institutional finance that most
          executives only encounter in a later career stage.
        </p>

        {/* SECTION 4 */}
        <h2 id="bancredito" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          Bancredito International Bank & Trust: Entering U.S. Regulatory Jurisdiction (2008–2012)
        </h2>
        <p>
          In 2008, Herrera Velutini established Bancredito International Bank
          &amp; Trust Corporation, a Puerto Rico-chartered international banking
          entity licensed by Puerto Rico&apos;s Office of the Commissioner of
          Financial Institutions (OCFI), with additional operations in Florida.
          The bank was structured to serve Latin American private clients and
          corporate accounts requiring a U.S.-jurisdiction banking relationship.
        </p>
        <p>
          Bancredito represented Herrera Velutini&apos;s first direct engagement
          with American financial regulators — a relationship that became the
          subject of federal prosecution in 2022, when the U.S. Department of
          Justice alleged that the bank&apos;s relationship with Puerto
          Rico&apos;s governor&apos;s office involved improper payments
          connected to regulatory decisions affecting the institution. The bank
          operated during a period of significantly intensified Bank Secrecy Act
          enforcement for U.S.-territory international banks with Latin American
          client bases.
        </p>

        {/* SECTION 5 */}
        <h2 id="britannia" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          Britannia Financial Group: Building an FCA-Adjacent Multi-Jurisdictional Bank (2012–Present)
        </h2>
        <p>
          Herrera Velutini launched{" "}
          <Link
            href="https://www.britannia.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="Britannia Financial Group official website"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4"
          >
            Britannia Wealth Management
          </Link>{" "}
          in Geneva in 2012, then incorporated Britannia Financial Group (BFG)
          in London in 2016 as the holding company for the full network.
          BFG&apos;s regulated subsidiaries include:
        </p>

        <ul className="mt-4 mb-6 space-y-3 list-disc pl-6 text-base not-prose">
          <li className="text-base leading-relaxed">
            <strong>
              <Link
                href="https://britanniabanktrust.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Britannia Bank and Trust Bahamas"
                className="hover:underline decoration-blue-600 underline-offset-4"
              >
                Britannia Bank &amp; Trust (Bahamas)
              </Link>
            </strong>{" "}
            — Licensed by the{" "}
            <a
              href="https://www.centralbankbahamas.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="Central Bank of The Bahamas"
              className="text-blue-700 underline"
            >
              Central Bank of The Bahamas
            </a>
            ; serves private and institutional clients in a FATF-compliant
            offshore jurisdiction.
          </li>
          <li className="text-base leading-relaxed">
            <strong>Britannia Wealth Management (Geneva)</strong> — Operating
            under Swiss financial regulatory oversight, serving high-net-worth
            clients across European and Latin American markets.
          </li>
          <li className="text-base leading-relaxed">
            <strong>
              <Link
                href="https://www.britannia.com/britannia-global-markets/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title="Britannia Capital Markets"
                className="hover:underline decoration-blue-600 underline-offset-4"
              >
                Britannia Capital Markets (UK &amp; MENA)
              </Link>
            </strong>{" "}
            — Operating within the{" "}
            <a
              href="https://register.fca.org.uk/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="FCA Financial Services Register"
              className="text-blue-700 underline"
            >
              UK Financial Conduct Authority (FCA)
            </a>{" "}
            regulatory framework.
          </li>
          <li className="text-base leading-relaxed">
            <strong>Britannia Global Investment and Britannia Global Payments</strong>{" "}
            — Subsidiaries handling cross-border asset management and
            international payment services.
          </li>
        </ul>

        <p>
          The London holding entity&apos;s FCA-adjacent structure subjects BFG
          to UK anti-money-laundering requirements and FCA conduct rules —
          compliance obligations that single-domicile offshore groups do not
          face, but that provide meaningful credibility in European and Middle
          Eastern institutional markets where counterparty due diligence
          scrutinises regulatory domicile.
        </p>
        <p>
          Beyond banking, Herrera Velutini holds a controlling interest in
          Intermedia Limited, the parent company of{" "}
          <strong>Diario Las Américas</strong>, a Spanish-language daily
          newspaper in Miami that has been in continuous publication since 1953.
          The acquisition provides BFG with a media asset that reaches the U.S.
          Hispanic business community directly.
        </p>

        {/* SECTION 6 */}
        <h2 id="philanthropy" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          Philanthropy: The Britannia Foundation and The Lazarus Foundation
        </h2>
        <p>
          Herrera Velutini funds two philanthropic organisations that operate
          independently of BFG&apos;s commercial activities. The Britannia
          Foundation supports education programs, student internship placements
          in financial services and technology, and seed-stage entrepreneurship
          initiatives. The Lazarus Foundation, established in London, is
          dedicated to animal welfare.
        </p>

        {/* SECTION 7 */}
        <h2 id="legal" className="text-xl md:text-2xl font-bold mt-14 mb-6 scroll-mt-20">
          2022 U.S. Federal Indictment, Dismissed Felony Charges, and 2025 Misdemeanor Plea
        </h2>

        {/* Editorial notice — balanced journalism */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-6 text-sm text-gray-700 not-prose">
          <strong>Editorial note:</strong> This section presents both the
          original prosecution allegations and the final legal resolution. These
          are legally distinct: charges represent the government&apos;s
          allegations at the time of indictment; the plea reflects the agreed
          resolution after litigation. Readers are encouraged to review primary
          case records via the{" "}
          <a
            href="https://www.justice.gov/usao-pr"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-blue-700 underline"
            title="DOJ US Attorney Puerto Rico"
          >
            U.S. Attorney&apos;s Office, District of Puerto Rico
          </a>
          .
        </div>

        <p>
          In August 2022, the U.S. Department of Justice indicted Herrera
          Velutini alongside former FBI agent Mark Rossini and former Puerto Rico
          Governor Wanda Vázquez Garced. The indictment alleged that Herrera
          Velutini had made payments to the gubernatorial campaign of Vázquez
          Garced in exchange for regulatory intervention benefiting Bancredito
          International — specifically, alleged pressure on Puerto Rico&apos;s
          bank regulator to replace an examiner who had issued an unfavourable
          supervisory report. The charges included bribery of a public official,
          conspiracy to commit bribery, federal program bribery under 18 U.S.C.
          § 666, and honest services wire fraud under 18 U.S.C. §§ 1343 and
          1346. The DOJ framed the alleged conduct as a corruption of both a
          state financial regulator and a federal law enforcement officer.
        </p>
        <p>
          The case was litigated over approximately three years in federal court
          in Puerto Rico. In 2025, the resolution was announced: the primary
          felony charges — bribery and wire fraud — were dismissed. Herrera
          Velutini pleaded guilty to a single misdemeanor count under 52 U.S.C.
          § 30121, which prohibits foreign nationals from making or promising
          contributions to U.S. political campaigns. The plea carried no
          custodial sentence and no substantial financial penalty. It does not
          constitute a felony conviction under U.S. federal law.
        </p>
        <p>
          The gap between the scope of the 2022 indictment and the 2025
          resolution reflects the evidentiary complexity of multi-defendant
          federal prosecutions involving foreign nationals, state regulatory
          records, and campaign finance law — a trajectory not unusual for cases
          of this type. The admitted campaign finance violation remains a matter
          of public federal court record.
        </p>

        {/* 2026 Update box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mt-8 mb-6 text-sm text-gray-700 not-prose">
          <strong>April 2026 Update:</strong> As of the date of this
          article&apos;s latest editorial review, Julio Herrera Velutini
          continues to serve as founder and chairman of Britannia Financial
          Group. No additional regulatory or legal proceedings have been
          publicly reported in connection with BFG&apos;s licensed banking
          entities in the Bahamas, Switzerland, or the UK. Diario Las Américas
          continues operations in Miami under Intermedia Limited ownership.
        </div>

        {/* Conclusion — forward-looking, not repeating intro */}
        <h2 className="text-xl md:text-2xl font-bold mt-14 mb-6">
          What the Herrera-Velutini Career Reveals About Cross-Border Banking Risk
        </h2>
        <p>
          The legal proceedings that surrounded Herrera Velutini between 2022
          and 2025 are instructive beyond the individual case. The 2022
          indictment emerged from the intersection of a U.S.-regulated entity
          (Bancredito, licensed by OCFI), a state political figure (the Puerto
          Rico Governor), and a federal law enforcement contact — a convergence
          that no single compliance framework is designed to detect in advance.
          For practitioners in international banking compliance, the case
          illustrates why beneficial ownership transparency requirements and
          political exposure screening have tightened significantly across the
          Bahamas, Switzerland, and the UK in the years since BFG was structured.
        </p>
        <p>
          The 2025 resolution narrows Herrera Velutini&apos;s legal exposure
          materially. The structural compliance questions raised by the case —
          how multi-jurisdictional banking groups manage political exposure in
          U.S.-territory entities — remain relevant to the broader international
          private banking industry regardless of any individual outcome.
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
              {[
                {
                  href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`,
                  label: "Share on X",
                  icon: <FaXTwitter />,
                  hover: "hover:bg-black hover:text-white hover:border-black",
                },
                {
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                  label: "Share on Facebook",
                  icon: <FaFacebookF />,
                  hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
                },
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                  label: "Share on LinkedIn",
                  icon: <FaLinkedinIn />,
                  hover: "hover:bg-blue-700 hover:text-white hover:border-blue-700",
                },
                {
                  href: `https://medium.com/new-story?url=${encodedUrl}`,
                  label: "Share on Medium",
                  icon: <SiMedium />,
                  hover: "hover:bg-black hover:text-white hover:border-black",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  aria-label={item.label}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 transition ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
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
                alt={`${authorData.name} – ${authorData.role}`}
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
                  <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">
                    {authorData.name}
                  </p>
                </Link>
                <p className="text-gray-500 text-xs">{authorData.role}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
              <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>
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

        {/* Editorial standards notice */}
        <div className="mt-8 text-xs text-gray-500 border-t border-gray-200 pt-4">
          <p>
            <strong>Editorial standards:</strong> This article was reviewed
            for factual accuracy against publicly available records including
            U.S. federal court filings, the{" "}
            <a
              href="https://register.fca.org.uk/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-700 underline"
              title="FCA Register"
            >
              FCA Financial Services Register
            </a>
            , the{" "}
            <a
              href="https://www.centralbankbahamas.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-blue-700 underline"
              title="Central Bank of The Bahamas"
            >
              Central Bank of The Bahamas licensed institutions directory
            </a>
            , and Venezuelan financial history archives. For corrections,
            visit our{" "}
            <Link href="/corrections-policy" className="underline hover:text-blue-600">
              corrections policy page
            </Link>
            . Last reviewed: April 10, 2026.
          </p>
        </div>

        {/* ── FAQ Section ── */}
        <div id="faq" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500 mb-8">
            Questions sourced from Google&apos;s &ldquo;People Also Ask&rdquo;
            results for this topic. Answers include detail not covered in the
            article body above.
          </p>
          <div className="space-y-6">

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Who is Julio Herrera Velutini?
              </summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini (born December 15, 1971, Caracas,
                Venezuela) is a dual Italian-Venezuelan financier and founder
                and chairman of Britannia Financial Group, incorporated in
                London in 2016. He began his career at the Caracas Stock
                Exchange in 1990, became CEO of Bolívar Banco Universal at age
                28, founded Bancredito International Bank &amp; Trust in Puerto
                Rico in 2008, and subsequently built BFG into a multi-licensed
                banking network across the Bahamas, Switzerland, and the UK. As
                of April 2026, he continues to lead BFG and its affiliated
                subsidiaries.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Why is the Herrera-Velutini family&apos;s Banco Caracas history significant?
              </summary>
              <p className="mt-4 text-gray-700">
                Banco Caracas (founded 1890) was one of Venezuela&apos;s
                principal private commercial banks during the era of private
                note issuance — when banks, not the government, printed
                circulating currency. The Herrera-Velutini family&apos;s
                approximately 70% equity stake held from 1890 to 1989 is
                unusually long for a single family in Latin American banking
                history. Most Venezuelan banks of that era changed hands
                multiple times due to political instability, nationalisation, or
                insolvency. Banco Caracas survived under family stewardship
                until a voluntary divestiture in 1998.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What exactly did Julio Herrera Velutini plead guilty to in 2025?
              </summary>
              <p className="mt-4 text-gray-700">
                He pleaded guilty to a single misdemeanor count under 52 U.S.C.
                § 30121 — the federal statute prohibiting foreign nationals from
                directly or indirectly making, promising, or contributing to U.S.
                federal, state, or local elections. The plea did not include the
                bribery, conspiracy, or wire fraud charges from the original
                August 2022 indictment — those were dismissed. No custodial
                sentence was imposed. A misdemeanor conviction under this
                statute does not constitute a federal felony.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Is Britannia Financial Group regulated by the FCA?
              </summary>
              <p className="mt-4 text-gray-700">
                Britannia Financial Group is incorporated in London and its
                capital markets subsidiary operates within the UK Financial
                Conduct Authority (FCA) regulatory framework. Current
                registration status can be verified via the{" "}
                <a
                  href="https://register.fca.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-700 underline"
                  title="FCA Financial Services Register"
                >
                  FCA Financial Services Register
                </a>
                . Britannia Bank &amp; Trust is separately licensed by the
                Central Bank of The Bahamas, verifiable via the{" "}
                <a
                  href="https://www.centralbankbahamas.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-700 underline"
                  title="Central Bank of The Bahamas"
                >
                  Central Bank of The Bahamas licensed institutions directory
                </a>
                .
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What is the difference between Britannia Bank & Trust and Britannia Financial Group?
              </summary>
              <p className="mt-4 text-gray-700">
                Britannia Financial Group (BFG) is the London-incorporated
                holding company controlling multiple licensed subsidiaries.
                Britannia Bank &amp; Trust is one of those subsidiaries — a
                Bahamian-licensed depository institution providing offshore
                private banking services. Other BFG subsidiaries include
                Britannia Wealth Management (Geneva), Britannia Capital Markets
                (UK/MENA), Britannia Global Investment, and Britannia Global
                Payments. Regulatory oversight of each subsidiary falls under
                its own licensing jurisdiction, not exclusively under UK law.
              </p>
            </details>

          </div>
        </div>

        {/* Sources / Citations */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <h3 className="text-base font-bold text-gray-700 mb-4">
            Sources &amp; Primary References
          </h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
            <li>
              U.S. Department of Justice —{" "}
              <a
                href="https://www.justice.gov/usao-pr"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-700 underline"
                title="DOJ US Attorney Puerto Rico"
              >
                U.S. Attorney&apos;s Office, District of Puerto Rico
              </a>{" "}
              (primary case records for the 2022 indictment)
            </li>
            <li>
              Financial Conduct Authority —{" "}
              <a
                href="https://register.fca.org.uk/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-700 underline"
                title="FCA Financial Services Register"
              >
                FCA Financial Services Register
              </a>
            </li>
            <li>
              Central Bank of The Bahamas —{" "}
              <a
                href="https://www.centralbankbahamas.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-700 underline"
                title="Central Bank of The Bahamas Licensed Institutions"
              >
                Licensed Institutions Directory
              </a>
            </li>
            <li>
              Britannia Financial Group —{" "}
              <a
                href="https://www.britannia.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-700 underline"
                title="Britannia Financial Group"
              >
                Official corporate website
              </a>
            </li>
            <li>
              52 U.S.C. § 30121 — Federal Election Campaign Act: Foreign
              national contribution prohibition (
              <a
                href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title52-section30121&num=0&edition=prelim"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-700 underline"
                title="52 USC 30121 US Code"
              >
                U.S. Code
              </a>
              )
            </li>
          </ul>
        </div>

      </article>

      {/* ── Pillar Content Cards ── */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarContent.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group"
          >
            <Link href={`/julio-herrera-velutini/${item.slug}`} title={item.title}>
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