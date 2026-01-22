
// import Image from "next/image";
// import { GoClock } from "react-icons/go";
// import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
// import { FaShareSquare } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import Link from "next/link";
// import authorsPageData from "../../../public/data/authors.json";
// import { slugify } from "../../../utils/slugify";
// import pillarContent from "../../../public/data/pillarContent.json";
// import Script from "next/script";
// import { FaRedditAlien } from "react-icons/fa";
// import { FaQuora } from "react-icons/fa";

// // SEO Metadata
// export async function generateMetadata() {
//   const metaTitle = "Julio Herrera Velutini: Biography & Legacy in Global Finance";
//   const metaDescription =
//     "Discover Julio Herrera Velutini's biography, career, and family legacy in global finance, plus his legal journey and 2025 resolution.";

//   return {
//     title: metaTitle,
//     description: metaDescription,
//     alternates: {
//       canonical: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
//     },
//     openGraph: {
//       title: metaTitle, // OpenGraph title matches metaTitle
//       description: metaDescription, // OpenGraph description matches metaDescription
//       url: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
//       siteName: "Newswireninja",
//       images: [
//         {
//           url: "https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp", // Replace with actual image path
//           width: 1200,
//           height: 630,
//           alt: "Julio Herrera Velutini Portrait",
//         },
//       ],
//       type: "profile",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: metaTitle, // Twitter card title matches metaTitle
//       description: metaDescription, // Twitter card description matches metaDescription
//       images: ["https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp"],
//     },
//   };
// }

// // Fetching author data from the provided data
// const authorData =
//   authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === "marketing & branding"
//   )?.author;

//    const shareUrl = 'https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance';
//     const encodedUrl = encodeURIComponent(shareUrl);
//     const shareTitle = encodeURIComponent("Julio Herrera Velutini: A Legacy in World Finance");

// export default function JulioHerreraVelutiniPage() {
//   const heroImage = "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

//   return (
//     <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif" itemScope itemType="https://schema.org/Person">
//       {/* JSON-LD for Person */}
//       <Script
//         id="json-ld-person"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Person",
//             "name": "Julio Herrera Velutini",
//             "url": "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
//             "image": "https://www.newswireninja.com/images/julio-profile.jpg",
//             "jobTitle": "Founder of Britannia Financial Group",
//             "worksFor": {
//               "@type": "Organization",
//               "name": "Britannia Financial Group",
//             },
//             "sameAs": [
//               "https://twitter.com/JulioHerreraV",
//               "https://www.linkedin.com/in/julio-herrera-velutini",
//             ],
//           }),
//         }}
//       />

//       {/* JSON-LD for Breadcrumbs */}
//       <Script
//         id="breadcrumb-json-ld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             "itemListElement": [
//               {
//                 "@type": "ListItem",
//                 "position": 1,
//                 "name": "Home",
//                 "item": "https://www.newswireninja.com",
//               },
//               {
//                 "@type": "ListItem",
//                 "position": 2,
//                 "name": "Business",
//                 "item": "https://www.newswireninja.com/business",
//               },
//               {
//                 "@type": "ListItem",
//                 "position": 3,
//                 "name": "Julio Herrera Velutini: Legacy in Global Finance",
//                 "item": "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* Page Content */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
//         Julio Herrera Velutini: A Legacy in World Finance
//       </h1>

//       <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
//         Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.
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
//             itemProp="image"
//           />

//           <div>
//             <p className="font-semibold text-sm">
//               <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
//                 <span itemProp="name" className="hover:text-blue-600 hover:underline transition cursor-pointer">
//                   {authorData.name}
//                 </span>
//               </Link>
//               {" "}
//               <span className="text-gray-500 font-normal" itemProp="jobTitle">
//                 – {authorData.role}
//               </span>
//             </p>

//             <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//               <GoClock />
//               <span itemProp="dateModified">Last updated: January 13, 2026</span>
//             </div>
//           </div>
//         </div>

//         {/* Social Share Section */}
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <FaShareSquare />
//             <span>Share</span>
//           </div>

//          <div className="flex items-center gap-3">
//             {/* X / Twitter */}
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

//             {/* Facebook */}
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

//             {/* LinkedIn */}
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

//             {/* Medium */}
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
//           className="object-cover"
//         />
//       </div>

//       {/* Article Content */}
//       <article className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed">
//         <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
//           On December 15, 1971, he was born in Caracas, Venezuela. He has since created a profession that includes making new business movements in several nations and having a profound understanding of history. He has citizenship in both Italy and Venezuela. His story is a blend of Latin American roots, European influences, and a very wide view of the world. But he has had to deal with a number of legal problems and media attention that have made the news, just like many other famous persons in finance.
//         </p>

//         <p className="mt-8">
//          Julio's family had been in business and banking in Caracas for a long time before he was born. When he was very young, this had an effect on the environment around him. The Herrera-Velutini family comes from Spain. In the 14th century, their forefathers were influential figures in the Kingdom of Castile, like landlords and merchants. One group was the House of Herrera, which had names like "Lord of Ampudia." The family was already well-known for being skilled at business by the time they came to Latin America. They established Hacienda La Vega in what is now Caracas in 1590. It was one of the family's first major pieces of land in the area.
//         </p>

//         <p>
//          Banco Caracas first opened in 1890. Some accounts indicate it happened a little earlier, in the 1880s. This was the most crucial thing they included in their will. Julio's great-grandfather, Julio César Velutini Couturier, did a lot to support the bank. He was in charge of the business, held the shares, and made money when private banks could make their own money. The government could do that until the Central Bank of Venezuela was founded up in the early 1940s. For a long period, family members ran Banco Caracas or were prominent directors. Until 1989, they owned nearly 70% of the bank's equity. The family sold the bank in 1998, thus they didn't own it anymore, but they still had an effect on banking in Venezuela. After then, the family worked with institutions like Banco Activo, Banco Bolivar, and Banco Real. This shows that they were able to keep up with the news.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">A long history and an education that covers the whole world</h2>
//         <p>
//            <a href="https://www.arabianchronicle.com/"  target="_blank" title="Visit Julio Herrera Velutini's on arabianchronicle" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </a> extensive background gave him more than simply a moniker. It also offered him connections, understanding of how institutions work, and a sense of safety in a field where trust and relationships are vitally crucial. He went back to Venezuela after going to some of the top schools in the world, like The American School in England and La Scuola Americana in Switzerland. In 1990, he graduated from the Central University of Venezuela. These visits let him explore more of the globe and prepare ready for a job that would take him outside of Latin America.
//         </p>

//         <p>
//           He thought about things differently when he saw the world as a child. He combined traditional family values with more modern, global ones. It taught him how to handle the variances in culture and rules that come with doing business in several nations.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Early career and rapid ascent to popularity in Venezuela</h2>
//         <p>
//           Julio started his career on the trading floor of the Caracas Stock Exchange in the early 1990s. He worked at Multinvest Casa de Bolsa, where he learned about stocks and business finance by doing them. He stayed on the board until 1998. He was already in command of a number of things in his late 20s. He was between 28 and 29 years old when he took over as head of Bolívar Banco Universal. He was one of the youngest people in Venezuela to have a job like that at the time. He also worked as an executive and board member at companies like Transban Investments Corp, where he controlled a lot of shares. He also worked for BMW de Venezuela and Kia Motors de Venezuela, two car firms.
//         </p>

//         <p>
//           His early successes suggest that he had a mix of family money and personal ambition that allowed him quickly ascend in Venezuela's competitive finance sector during a time of tremendous economic change.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Making a financial empire over the world</h2>
//         <p>
//           He began to create his own empire all over the world in the late 2000s and early 2010s. He created the Bancredito International Bank & Trust Corporation in 2008 or 2009. It began in Puerto Rico and also worked in Florida. The bank largely served people and businesses in Latin America. He invested a lot of his money in small and medium-sized businesses. He even came to North America to work for Banco Real, where he was the CEO and chairman for a few years. He modified how the company worked to make things easier for business owners.
//         </p>

//         <p>
//          Julio launched <span><Link href="https://www.britannia.com/"  target="_blank" title="Visit website of britannia" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Wealth Management </Link></span> in Geneva, Switzerland, in 2012. In 2016, he started Britannia Financial Group (BFG) in London. BFG is a holding company that controls a lot of smaller businesses that do things like providing investing advice, purchase and sell stocks, and manage money. Some of the most well-known companies are <span><Link href="https://britanniabanktrust.com/"  target="_blank" title="Visit website of britanniabanktrust" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Bank & Trust </Link></span> (in the Bahamas), <span><Link href="https://www.britannia.com/britannia-global-markets/"  target="_blank" title="Visit website of britannia-global-markets" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Capital Markets </Link></span> (with offices in the UK and MENA areas),<span><Link href="https://www.britannia.com/securities/"  target="_blank" title="Visit website of britannia securities" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Securities </Link></span> (in the Bahamas), and others like Britannia Global Investment and Britannia Global Payments. These companies do business in numerous countries, including as Europe, the Caribbean, the Middle East, and more. They support people and businesses that have a lot of money. They do a number of things, like managing assets and letting clients trade derivatives in marketplaces all around the world.
//         </p>

//         <p>
//           <Link href="https://www.thecapitalistjournal.com/"  target="_blank" title="Visit Julio Herrera Velutini's on thecapitalistjournal" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </Link> is now interested in more than just basic banking. He owns most of the shares in Intermedia Limited, which owns Diario Las Américas, a well-known Spanish-language daily newspaper in Miami, Florida. His work with the media exposes a different side of him by connecting news, money, and public conversation.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Giving to charity and making a bigger difference</h2>
//         <p>
//         He also helps others who need it. He has contributed money to new businesses, internships to students so they may obtain real-world experience, and education programs through entities like The Britannia Foundation. He also created The Lazarus Foundation in London to help animals that need it. He seems to desire to help other people, which is frequently linked to helping the future generation and causes that are important to him.
//         </p>

//         <p>
//          He is committed to giving back, as seen by his work for charities that benefit animals, people in underdeveloped countries, and education. All of these items are things that go along with his family's business.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Law problems and how to solve them</h2>
//         <p>
//         <Link href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"  target="_blank" title="Visit Julio Herrera Velutini's on wikipedia" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </Link> has done a lot of wonderful things, but his job has been hard, especially when it comes to the law. In August 2022, the U.S. federal government accused him with a number of serious felonies, including conspiracy, corrupting a federal program, honest services wire fraud, and more. He was accused with these offenses along with a number of other people, such as former FBI agent Mark Rossini and former Puerto Rico Governor Wanda Vázquez Garced. The claims were based on events that took place in 2019 and 2020, when the Puerto Rico Office of the Commissioner of Financial Institutions began looking into Bancredito. Julio contributed Vázquez Garced's 2020 campaign for governor more than $300,000 to consultants so that he could change the rules, such getting rid of the commissioner who was in control of his bank.
//         </p>

//         <p>
//             Julio went to the police on his own and told them he wasn't guilty. The case garnered a lot of media attention because the person was a foreign investor and it had political ramifications in Puerto Rico. 
//         </p>

//         <p>
//         Julio consented to plead guilty to a small violation of U.S. campaign finance law (52 U.S.C. § 30121) for promising a foreign individual a political donation in a way that was not allowed. People said the sum was between $2,000 and $25,000, but there was no indication that a big transfer had happened. The plea deal didn't make the defendant go to jail, pay a big price, or say they were guilty or did something wrong.  The resolution came out after years of meticulous research, and a number of individuals claimed that the DOJ's intentions had changed.
//         </p>

//         <p>
//          In 2025, there was another civil lawsuit when former lawyers sued the criminal defense for nearly $500,000 in legal costs that had not been paid. This problem has nothing to do with the large accusations and is still a private concern.
//         </p>

//         <p>
//          In different news stories, Julio looks different. Three well-known news organizations—Reuters, Bloomberg, and the Financial Times—have all correctly reported on the court case and come to the conclusion that the plea deal made matters less serious. People who work with him claim that he is a calm, innovative banker who helps them get into global markets and teaches them how to handle their money well. Some stories that are trying to make him look good or that are about his family describe him a "silent banker" or the head of a dynasty that has an effect on Latin America's economy. Some opinion or critical pieces try to guess how items are connected to power systems, although they don't always have strong evidence.
//         </p>

//         <p>
//           People still don't know what they think of him. Some people appreciate him because he is skilled at business and leaving a legacy, but others are apprehensive since he has had legal troubles in the past. He is still in finance in 2026 and runs Britannia and other enterprises that are connected to it. The cops are, however, keeping an eye on him.
//         </p>

//         <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Conclusion: Finding a Balance In Between the Old and the New</h2>
//         <p>
//             Julio Herrera Velutini's life is an excellent illustration of how your family and your personal aspirations may help you accomplish well in business all around the world. His family helped construct banks in Venezuela, and later they started businesses all around the world. He knows how to deal with stress and adapt to various conditions because he is in the public glare. His experience reminds us that it's not always easy to handle money. We need to find a way to be responsible, give back, and be creative all at the same time in a world where everything is connected.
//         </p>
        

//           {/* BOTTOM SHARE SECTION */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-400" />
//           <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
//             <div className="flex items-center gap-2">
//               <FaShareSquare />
//               <span>Share</span>
//             </div>

//               <div className="flex items-center gap-3">
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

//         {/* AUTHOR PROFILE & FOLLOW */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-400" />
//           <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
//             <div className="flex items-center gap-4">
//               <Image
//                 src={authorData.profileImage}
//                 alt="Lauren - Senior Editor"
//                 width={56}
//                 height={56}
//                 className="rounded-full object-cover flex-shrink-0"
//               />
//               <div>
//                <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
//                 <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">{authorData.name}</p>
//                 </Link>
//                 <p className="text-gray-500 text-xs">{authorData.role}</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
//               <span className="text-sm text-gray-600 hidden sm:block">Follow:</span>

//               <div className="flex items-center gap-3">
//                 {[
//                   {
//                     icon: <FaQuora />,
//                     label: "Quora",
//                     url: authorData?.social?.quora,
//                   },
//                   {
//                     icon: <FaRedditAlien />,
//                     label: "Reddit",
//                     url: authorData?.social?.reddit,
//                   },
//                   {
//                     icon: <FaXTwitter />,
//                     label: "Twitter",
//                     url: authorData?.social?.twitter,
//                   },
//                   {
//                     icon: <SiMedium />,
//                     label: "Medium",
//                     url: authorData?.social?.medium,
//                   },
//                 ]
//                   .filter(item => item.url) // only show icons that actually have links
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

//                       {/* Tooltip */}
//                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md whitespace-nowrap">
//                         {item.label}
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>

//           </div>

//           <p className="mt-6 text-sm text-gray-600">
//            {authorData.bio}
//           </p>
//         </div>

//         {/* FAQ SECTION */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
//           <div className="space-y-8">
//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">Who is this Julio Herrera Velutini?</summary>
//               <p className="mt-4 text-gray-700">
//                 Julio Herrera Velutini is a rich businessman who lives in both Italy and Venezuela. He created the Britannia Financial Group and has been a banker for seven generations.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">What kind of family does Julio Herrera Velutini come from?</summary>
//               <p className="mt-4 text-gray-700">
//                 In the 14th century, his family moved to Spain from the Kingdom of Castile. Later, they were highly important in Venezuela through banking (like Banco Caracas) and owning land in the 16th century.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">What happened in the U.S. court case against Julio Herrera Velutini in 2022?</summary>
//               <p className="mt-4 text-gray-700">
//                 He was suspected of donating money to a campaign to become governor of Puerto Rico. In 2025, the main criminal accusations were withdrawn, and he admitted to breaking campaign funding laws, which was only a minor infraction. He didn't have to go to jail.
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">What types of enterprises does Julio Herrera Velutini own at the moment?</summary>
//               <p className="mt-4 text-gray-700">
//                 He created and leads Britannia Financial Group (BFG), which owns enterprises in banking (in the Bahamas, Geneva, and London), wealth management, and media (Diario Las Américas through Intermedia Limited).
//               </p>
//             </details>

//             <details className="bg-[#eef3f6] p-6 rounded-lg">
//               <summary className="font-semibold text-lg cursor-pointer">Does Julio Herrera Velutini do any positive things?</summary>
//               <p className="mt-4 text-gray-700">
//                 Yes, there are The Britannia Foundation, which aids schools, businesses, and internships, and The Lazarus Foundation, which helps animals in London.
//               </p>
//             </details>
//           </div>
//         </div>
//       </article>

//        {/* Cards for Pillar Content */}
//        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {pillarContent.map((item) => (
//             <div
//             key={item.id}
//             className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group" // Added 'group' here
//             >
//             {/* Link to the individual pillar article page */}
//             <Link href={`/julio-herrera-velutini/${item.slug}`} title={item.title}>
//                 <div className="block w-full h-full">
//                 {/* Hero Image */}
//                 <div className="relative w-full h-3/4">
//                     <Image
//                     src={item.heroImage}
//                     alt={item.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="object-cover w-full h-full"
//                     />
//                 </div>

//                 {/* Heading Container with Background */}
//                 <div className="bg-white p-4">
//                     <h3 className="text-gray-800 text-sm font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
//                     {item.title}
//                     </h3>
//                 </div>
//                 </div>
//             </Link>
//             </div>
//         ))}
//         </div>

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
import Script from "next/script";
import { FaRedditAlien, FaQuora } from "react-icons/fa";

// SEO Metadata - OPTIMIZED
export async function generateMetadata() {
  const metaTitle = "Julio Herrera Velutini: Biography, Career & Legal Resolution 2025 | Banking Legacy";
  const metaDescription =
    "Complete biography of Julio Herrera Velutini, founder of Britannia Financial Group. Explore his 7-generation Venezuelan banking legacy, global finance career, 2022 legal challenges, and 2025 resolution. Updated January 2026 with latest developments.";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "Julio Herrera Velutini",
      "Britannia Financial Group",
      "Venezuelan banker",
      "banking dynasty",
      "Julio Herrera Velutini biography",
      "Banco Caracas",
      "global finance",
      "wealth management",
      "legal resolution 2025"
    ],
    authors: [{ name: "Lauren Mitchell" }],
    alternates: {
      canonical: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
      siteName: "Newswireninja",
      images: [
        {
          url: "https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
          width: 1200,
          height: 630,
          alt: "Julio Herrera Velutini - Founder of Britannia Financial Group and seventh-generation banking heir",
        },
      ],
      type: "article",
      publishedTime: "2026-01-13T00:00:00Z",
      modifiedTime: "2026-01-13T00:00:00Z",
      section: "Business & Finance",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp"],
      creator: "@newswireninja",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const authorData =
  authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === "marketing & branding"
  )?.author;

const shareUrl = 'https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance';
const encodedUrl = encodeURIComponent(shareUrl);
const shareTitle = encodeURIComponent("Julio Herrera Velutini: A Legacy in World Finance");

export default function JulioHerreraVelutiniPage() {
  const heroImage = "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

  return (
    <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif" itemScope itemType="https://schema.org/Article">
      {/* Enhanced JSON-LD for Article */}
      <Script
        id="json-ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Julio Herrera Velutini: A Legacy in World Finance",
            "description": "Complete biography of Julio Herrera Velutini, founder of Britannia Financial Group and seventh-generation banking heir from Venezuela.",
            "image": "https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
            "datePublished": "2026-01-13T00:00:00Z",
            "dateModified": "2026-01-13T00:00:00Z",
            "author": {
              "@type": "Person",
              "name": authorData?.name || "Lauren Mitchell",
              "jobTitle": authorData?.role || "Senior Editor",
              "url": `https://www.newswireninja.com/authors/${slugify(authorData?.name || "lauren-mitchell")}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Newswireninja",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.newswireninja.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            },
            "about": {
              "@type": "Person",
              "name": "Julio Herrera Velutini",
              "jobTitle": "Founder and Chairman",
              "worksFor": {
                "@type": "Organization",
                "name": "Britannia Financial Group"
              }
            },
            "keywords": "Julio Herrera Velutini, Britannia Financial Group, Venezuelan banking, global finance, banking dynasty, Banco Caracas"
          }),
        }}
      />

      {/* JSON-LD for Person */}
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Julio Herrera Velutini",
            "url": shareUrl,
            "image": "https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
            "birthDate": "1971-12-15",
            "birthPlace": {
              "@type": "Place",
              "name": "Caracas, Venezuela"
            },
            "nationality": ["Venezuelan", "Italian"],
            "jobTitle": "Founder and Chairman of Britannia Financial Group",
            "worksFor": {
              "@type": "Organization",
              "name": "Britannia Financial Group",
              "url": "https://www.britannia.com"
            },
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Central University of Venezuela"
              },
              {
                "@type": "EducationalOrganization",
                "name": "The American School in England"
              }
            ],
            "sameAs": [
              "https://twitter.com/JulioHerreraV",
              "https://www.linkedin.com/in/julio-herrera-velutini",
              "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
            ],
          }),
        }}
      />

      {/* JSON-LD for Breadcrumbs */}
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.newswireninja.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Business",
                "item": "https://www.newswireninja.com/business",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Julio Herrera Velutini: Legacy in Global Finance",
                "item": shareUrl,
              },
            ],
          }),
        }}
      />

      {/* JSON-LD for FAQPage */}
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Julio Herrera Velutini?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Julio Herrera Velutini is a Venezuelan-Italian financier and founder of Britannia Financial Group. Born on December 15, 1971, in Caracas, Venezuela, he represents the seventh generation of a prominent banking dynasty that established Banco Caracas in 1890."
                }
              },
              {
                "@type": "Question",
                "name": "What is Julio Herrera Velutini's family background?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Herrera-Velutini family traces its roots to 14th-century Spain, specifically the Kingdom of Castile. They arrived in Latin America in the 16th century, establishing Hacienda La Vega in Caracas in 1590. The family founded Banco Caracas in 1890, maintaining significant influence in Venezuelan banking for over a century."
                }
              },
              {
                "@type": "Question",
                "name": "What happened in the 2022 U.S. legal case against Julio Herrera Velutini?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In August 2022, Julio Herrera Velutini was indicted on federal charges related to campaign finance violations in Puerto Rico. In 2025, the case was resolved when he pleaded guilty to a minor campaign finance violation (52 U.S.C. § 30121), involving a promise of $2,000-$25,000. The resolution did not result in imprisonment or substantial penalties."
                }
              },
              {
                "@type": "Question",
                "name": "What companies does Julio Herrera Velutini currently own?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Julio Herrera Velutini founded and leads Britannia Financial Group (BFG), established in London in 2016. The group includes Britannia Bank & Trust (Bahamas), Britannia Capital Markets (UK and MENA), Britannia Securities (Bahamas), Britannia Wealth Management (Geneva), and other subsidiaries. He also owns majority shares in Intermedia Limited, which publishes Diario Las Américas in Miami."
                }
              },
              {
                "@type": "Question",
                "name": "What philanthropic work does Julio Herrera Velutini support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Julio Herrera Velutini supports philanthropy through The Britannia Foundation, which provides funding for education programs, entrepreneurship initiatives, and student internships. He also founded The Lazarus Foundation in London, dedicated to animal welfare causes."
                }
              }
            ]
          }),
        }}
      />

      {/* Breadcrumbs Navigation */}
      <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-blue-600">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
            <span className="mx-2">/</span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/business" itemProp="item" className="hover:text-blue-600">
              <span itemProp="name">Business</span>
            </Link>
            <meta itemProp="position" content="2" />
            <span className="mx-2">/</span>
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-gray-900">Julio Herrera Velutini</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left" itemProp="headline">
        Julio Herrera Velutini: A Legacy in Global Finance
      </h1>

      {/* Subheading for better SEO */}
      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left" itemProp="description">
         Explore the remarkable journey of Julio Herrera Velutini, a seventh-generation banking heir who transformed his Venezuelan family legacy into a global financial empire through Britannia Financial Group, while navigating legal challenges and maintaining a commitment to philanthropy.
      </p>

      {/* Author Info */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt={`${authorData.name} - ${authorData.role}`}
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
            itemProp="image"
          />

          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <p className="font-semibold text-sm">
              <Link href={`/authors/${slugify(authorData.name)}`} title={`View ${authorData.name}'s profile`}>
                <span itemProp="name" className="hover:text-blue-600 hover:underline transition cursor-pointer">
                  {authorData.name}
                </span>
              </Link>
              {" "}
              <span className="text-gray-500 font-normal" itemProp="jobTitle">
                – {authorData.role}
              </span>
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock aria-hidden="true" />
              <time itemProp="dateModified" dateTime="2026-01-13">Last updated: January 13, 2026</time>
            </div>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare aria-hidden="true" />
            <span>Share</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X (Twitter)"
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

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200" aria-label="Table of Contents">
        <h2 className="font-bold text-lg mb-4 text-gray-900">Table of Contents</h2>
        <ol className="space-y-2 text-sm list-decimal list-inside text-gray-700">
          <li><a href="#early-life" className="hover:text-blue-600 hover:underline">Early Life and Family Heritage</a></li>
          <li><a href="#education" className="hover:text-blue-600 hover:underline">Education and Global Perspective</a></li>
          <li><a href="#career" className="hover:text-blue-600 hover:underline">Early Career in Venezuela</a></li>
          <li><a href="#global-expansion" className="hover:text-blue-600 hover:underline">Building a Global Financial Empire</a></li>
          <li><a href="#philanthropy" className="hover:text-blue-600 hover:underline">Philanthropic Initiatives</a></li>
          <li><a href="#legal-challenges" className="hover:text-blue-600 hover:underline">Legal Challenges and Resolution</a></li>
          <li><a href="#current-status" className="hover:text-blue-600 hover:underline">Current Status and Legacy</a></li>
          <li><a href="#faq" className="hover:text-blue-600 hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* Hero Image */}
      <figure className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Julio Herrera Velutini, founder of Britannia Financial Group and seventh-generation banking heir from Venezuela"
          fill
          priority
          className="object-cover"
          itemProp="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <figcaption className="sr-only">Julio Herrera Velutini in a professional setting</figcaption>
      </figure>

      {/* Article Content - REWRITTEN FOR BETTER QUALITY */}
       <article className="prose prose-lg sm:prose-xl max-w-none mx-auto leading-relaxed">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black text-justify">
          Julio Herrera Velutini was born in Caracas, Venezuela, on December 15, 1971. He is the fifth person in his family to work for one of Latin America's most prominent banks. His journey from the trading floors of Caracas to the boardrooms of London demonstrates a peculiar blend of family money and commercial savvy. He created Britannia Financial Group, which is today a multinational financial services corporation that covers the Caribbean, Europe, and the Middle East. To do this, he turned long-standing family rituals into a company.
        </p>

        <section id="early-life">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">The Start of the Herrera-Velutini Banking Family</h2>
          <p className="text-justify">
            The Herrera-Velutini family comes from Spain. Their forefathers were "Lord of Ampudia" in the Kingdom of Castile in the 14th century. These early ancestors were wealthy landowners and merchants who were known for being good with money for hundreds of years and across continents. The family had crossed the Atlantic and founded Hacienda La Vega in what is now Caracas by 1590. This was one of their first significant chunks of land in the Americas.
          </p>

          <p className="text-justify">
            The family launched Banco Caracas and went into the banking business around 1890. Some historical stories indicate it originated in the 1880s, a little bit earlier. Julio's great-grandfather, Julio César Velutini Couturier, was a big part of the bank's expansion during a time when private banks in Venezuela could make their own money. This privilege ended in the early 1940s when the Central Bank of Venezuela was created.
          </p>

          <p className="text-justify">
            For almost 100 years, the Herrera-Velutini family owned much of Banco Caracas. Family members were in charge of crucial roles as directors and executives. The family owned more than 70% of the bank's shares by 1989. The sale of Banco Caracas in 1998 signaled the end of an era, although the family's influence on Venezuelan banking persisted through their work with Banco Activo, Banco Bolivar, and Banco Real.
          </p>
        </section>

        <section id="education">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">A Global Perspective and Learning</h2>
          <p className="text-justify">
            <a href="https://www.arabianchronicle.com/" target="_blank" rel="noopener noreferrer" title="Visit Julio Herrera Velutini's on arabianchronicle" className="font-semibold hover:underline hover:text-blue-600 decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini</a> education demonstrates that people all across the world will one day know his work. He went to two well-known schools: the American School in England and La Scuola Americana in Switzerland. His last school was the Central University of Venezuela, where he graduated in 1990. Studying overseas taught him how to work in several cultural and legal environments, which are vital abilities for developing a genuinely global financial services organization.
          </p>

          <p className="text-justify">
            During these key years, he lived in another country and came up with a plan that stretched beyond the bounds of his own region. He mixed traditional Latin American family traditions with modern European corporate procedures. Later, this blend would be a key part of how he handled money from other countries.
          </p>
        </section>

        <section id="career">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Early career and quick ascension in Venezuela</h2>
          <p className="text-justify">
            In the early 1990s, Julio Herrera Velutini started his career on the trading floor of the Caracas Stock Exchange. He learned how to buy and sell stocks and handle a company's money while working at Multinvest Casa de Bolsa. He learnt about the market and how to make smart investments while he was there, which lasted until 1998.
          </p>

          <p className="text-justify">
            He went up quite swiftly. At the age of 28 or 29, he was the president of Bolívar Banco Universal. At the time, he was one of the youngest persons in command of money in Venezuela. He was also an executive and board member for a number of firms, including Transban Investments Corp, where he had a lot of power over the company's shares. He also worked with Kia Motors de Venezuela and BMW de Venezuela, which helped him get additional expertise.
          </p>

          <p className="text-justify">
            During this period, he was able to use his family's connections to help him and build a name for himself. A lot of heirs have trouble finding this balance. He was a terrific manager and thinker since he did well in Venezuela's shaky economy in the 1990s.
          </p>
        </section>

        <section id="global-expansion">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Creating a Global Financial Empire</h2>
          <p className="text-justify">
            In the late 2000s, Julio Herrera Velutini transitioned from being a regional bank executive to a global financial entrepreneur. In 2008–2009, he created the Bancredito International Bank & Trust Corporation. It works in both Puerto Rico and Florida. The bank's major purpose was to aid people and small to medium-sized enterprises in Latin America, a market that bigger global banks don't normally do a good job of supporting.
          </p>

          <p className="text-justify">
            His later ventures revealed that he was getting more ambitious and going to more places. He started <a href="https://www.britannia.com/" target="_blank" rel="noopener noreferrer" title="Visit website of britannia" className="font-semibold hover:underline  hover:text-blue:600 decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Wealth Management</a> in Geneva, Switzerland, in 2012. Geneva is a safe area to do business and has access to Europe's most advanced capital markets, so this was a reasonable decision. In 2016, four years later, he launched Britannia Financial Group (BFG) in London as a holding company to bring together all of his increasing network of financial services enterprises.
          </p>

          <p className="text-justify">
            Britannia Financial Group today has a variety of specialized companies:
          </p>

          <ul className="list-disc pl-8 space-y-2 text-justify">
            <li><a href="https://britanniabanktrust.com/" target="_blank" rel="noopener noreferrer" title="Visit website of britanniabanktrust" className="font-semibold hover:underline hover:text-blue:600 decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Bank & Trust</a> (Bahamas) offers private banking and trust services.</li>
            <li><a href="https://www.britannia.com/britannia-global-markets/" target="_blank" rel="noopener noreferrer" title="Visit website of britannia-global-markets" className="font-semibold hover:underline hover:text-blue:600 decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Capital Markets</a> helps companies get to the capital and trade markets in the UK and MENA areas.</li>
            <li><a href="https://www.britannia.com/securities/" target="_blank" rel="noopener noreferrer" title="Visit website of britannia securities" className="font-semibold hover:underline hover:text-blue:600 decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Securities</a> (Bahamas) keeps people's money safe while they buy and sell stocks and bonds.</li>
            <li>Britannia Global financial is a company that helps people manage their money and gives them financial advice.</li>
            <li>Britannia Global Payments is a company that sends and processes payments between different nations.</li>
          </ul>

          <p className="text-justify mt-4">
            These corporations work together to benefit wealthy people and companies in Europe, the Caribbean, the Middle East, and other regions. They do anything from trading futures to taking care of money.
          </p>

          <p className="text-justify">
            Julio Herrera Velutini went above and beyond what most banks do by investing money in the news. He controls most of Intermedia Limited, which publishes Diario Las Américas, a popular Spanish-language daily in Miami, Florida. This project indicates that he worries about how money, media, and public conversation all mix together in Latin American communities all across the world.
          </p>
        </section>

        <section id="philanthropy">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Things that help people and make the planet a better place</h2>
          <p className="text-justify">
            <a href="https://www.thecapitalistjournal.com/" target="_blank" rel="noopener noreferrer" title="Visit Julio Herrera Velutini's on thecapitalistjournal" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini</a> is the owner of a business and two important charities. The Britannia Foundation helps young people learn about money and business in the real world by giving them internships, training programs, and chances to work for firms that are expanding. This emphasis on developing human capital shows that you wish to help the next group of corporate executives do well.
          </p>

          <p className="text-justify">
            He also started the Lazarus Foundation in London, which supports animals. The family provides money to a lot of various causes, such as animal rights, business, and education. This shows that they care about more than just getting money. It also aligns with the family's long history of being active in their community.
          </p>
        </section>

        <section id="legal-challenges">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Issues with the law and a repair in 2025</h2>
          <p className="text-justify">
            <a href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini" target="_blank" rel="noopener noreferrer" title="Visit Julio Herrera Velutini's on wikipedia" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini</a> has experienced some trouble in his job. In August 2022, U.S. federal prosecutors charged him and a number of other people, such as former FBI agent Mark Rossini and former Puerto Rico Governor Wanda Vázquez Garced, with conspiracy, program bribery, honest services wire fraud, and other crimes.
          </p>

          <p className="text-justify">
            The claims were regarding events from 2019 and 2020, when the Office of the Commissioner of Financial Institutions in Puerto Rico started looking into how Bancredito operated. Julio Herrera Velutini gave Governor Vázquez Garced's campaign for reelection in 2020 more than $300,000 through consultants, according to prosecutors. He did this so that the regulators would be nicer to him and so that he could fire the financial commissioner who was in charge of his bank.
          </p>

          <p className="text-justify">
            Julio Herrera Velutini told the authorities that he was not guilty of any of the crimes. A well-known foreign investor was involved in the case, which attracted a lot of media attention since it affects how Puerto Rico is handled politically.
          </p>

          <p className="text-justify">
            In 2025, the issue was resolved when Julio Herrera Velutini decided to plead guilty to a minor violation of U.S. campaign finance law (52 U.S.C. § 30121)—specifically, guaranteeing a political payment from a foreign person in a way that was not allowed. Some people indicated that the sum in question was between $2,000 and $25,000, although there was no confirmation that a big transfer took place. The plea deal was essential since it meant that the person didn't have to go to jail, pay big penalties, or acknowledge guilt for the more serious accusations.
          </p>

          <p className="text-justify">
            This option was taken after years of difficult legal fights. A lot of people thought that the Department of Justice would deal with cases in a totally different way. The judge simply threw out the most serious allegations and ended the case by confessing to a tiny mistake.
          </p>

          <p className="text-justify">
            The ex-lawyer sued for more than $500,000 in unpaid legal costs for the criminal defense in 2025. This is still a struggle between two companies that has nothing to do with the serious criminal charges.
          </p>
        </section>

        <section id="current-status">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">What people think about what's happening right now</h2>
          <p className="text-justify">
            The story makes it look like Julio Herrera Velutini is a tough person to deal with. Some of the most well-known financial news sites that have written about both his corporate triumphs and his legal difficulties include Reuters, Bloomberg, and the Financial Times. They usually do it in a calm and honest way, talking about both the positive and terrible things that have happened to him. Most of the time, they made it sound like the 2025 plea deal was a major step down from the original indictment.
          </p>

          <p className="text-justify">
            People in business and his peers often comment that he is a clever, calm banker who helps customers get into global markets and also offers high-end asset management services. Some accounts regarding his family history say that he is a "discreet banker" who heads a prominent dynasty in Latin America that has been there for many generations.
          </p>

          <p className="text-justify">
            A lot of opinion pieces have questioned the links between political power and financial power, but most of these allegations are based on guessing rather than concrete facts. The legal process has impacted how people feel about the case. This is a tough story that talks about how well a corporation is doing and how much the government needs to watch it.
          </p>

          <p className="text-justify">
            As of 2026, Julio Herrera Velutini is still extremely involved in international finance. He is still in control of Britannia Financial Group and all of its operations. Even if the legal issues are over, they are still on his public record and will still alter how different groups evaluate his career and what he has done for global banking.
          </p>
        </section>

        <section id="conclusion">
          <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Conclusion: Striking a Balance Between the Old and the New</h2>
          <p className="text-justify">
            Julio Herrera Velutini's life shows how family values and personal objectives may function together in a global economy. He has proved that he can be receptive to new ideas while yet respecting the past. For instance, he built global financial organizations that do business on many continents. His family worked in banking in Venezuela.
          </p>

          <p className="text-justify">
            His experience indicates that modern banking is more than just understanding how to utilize computers. It also needs to know the rules, be able to tolerate criticism, and be committed to both making money and doing good. His legal issues highlight how hard it is for foreign investors to obey the regulations, as even slight missteps can have major consequences.
          </p>

          <p className="text-justify">
            Britannia Financial Group works with people all across the world, but Julio Herrera Velutini's tale is one of change. He took a family banking tradition that had been around for hundreds of years and made it operate in a linked financial system in the 21st century. His work shows us the problems and chances that modern international finance has, whether we look at it from the point of view of corporate success, family legacy, or legal issues.
          </p>
        </section>

         

        {/* FAQ SECTION */}
        <div className="mt-16" id="faq">
          <h2 className="text-2xl font-bold mb-8">A lot of individuals want to know the answers to these questions.</h2>
          <div className="space-y-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">Who is Julio Herrera Velutini?</summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini, a banker from Venezuela and Italy, was the founder of Britannia Financial Group. He was born in Caracas, Venezuela, on December 15, 1971. He is the seventh generation of a famous banking family that started Banco Caracas in 1890.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What kind of family does Velutini hail from?</summary>
              <p className="mt-4 text-gray-700">
                The Herrera-Velutini family lived in the Kingdom of Castile in Spain in the 14th century. They moved to Latin America in the 1500s and opened Hacienda La Vega in Caracas around 1590. The family created Banco Caracas in 1890 and had a lot of power in Venezuelan banking until they sold it in 1998, more than 100 years later.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What happened in the U.S. court case against Julio Herrera Velutini in 2022?</summary>
              <p className="mt-4 text-gray-700">
                In August 2022, Julio Herrera Velutini was accused with federal charges for allegedly breaking Puerto Rico's guidelines about how to pay for campaigns. He admitted to a modest violation of campaign finance law (52 U.S.C. § 30121) in 2025. The crime was making a promise of money between $2,000 and $25,000. The outcome didn't entail jail time or hefty penalties, and most of the more serious allegations were withdrawn.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What companies does Julio Herrera Velutini own right now?</summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini launched Britannia Financial Group (BFG) in London in 2016 and is still in charge. Britannia Bank & Trust (Bahamas), Britannia Capital Markets (UK and MENA), Britannia Securities (Bahamas), Britannia Wealth Management (Geneva), and other companies that help customers manage their money, assets, and investments are all part of the group. He also controls most of the shares in Intermedia Limited, the firm that puts out Diario Las Américas in Miami.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What kinds of things does Julio Herrera Velutini do for free?</summary>
              <p className="mt-4 text-gray-700">
                The Britannia Foundation is one method that Julio Herrera Velutini aids organizations. This group distributes money to internships, educational programs, and business ventures for teens and young adults to assist them learn about business in the real world. He also created the Lazarus Foundation in London, which supports animals.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What school did Julio Herrera Velutini go to?</summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini went to well-known schools in different countries, such as The American School in England and La Scuola Americana in Switzerland. He went to school at the Central University of Venezuela and got his degree in 1990. After that, he began working in finance.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What does the Britannia Financial Group do?</summary>
              <p className="mt-4 text-gray-700">
                Britannia Financial Group (BFG) is a holding company that has been in business since 2016 and is situated in London. It owns a number of financial services companies that do business in the Caribbean, Europe, and the Middle East. The group aids wealthy people and corporations all across the world with things like private banking, managing their money, trading stocks, managing their assets, and processing payments.
              </p>
            </details>
          </div>
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

                  <hr className="border-t-2 border-dotted border-gray-400 mt-5" />
                </div>
      </article>

      {/* Cards for Pillar Content */}
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
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full h-full"
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

