
// import Image from "next/image";
// import { GoClock } from "react-icons/go";
// import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
// import { FaShareSquare } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import Link from "next/link";
// import authorsPageData from "../../../public/data/authors.json";
// import { slugify } from "../../../utils/slugify";
// import pillarContent from "../../../public/data/pillarContent.json"

// export async function generateMetadata() {

  
//   return {
//     title: "Julio Herrera Velutini: Biography, Career, Family Legacy & Latest Updates",
//     description: "Explore the life, family banking heritage, global finance career, and 2025 legal resolution of Julio Herrera Velutini, founder of Britannia Financial Group and a key figure in international banking.",
//     alternates: {
//       canonical: "https://venture-hive.com/business/julio-herrera-velutini-legacy-finance",
//     },
//     openGraph: {
//       title: "Julio Herrera Velutini - Banker, Entrepreneur, and Family Legacy",
//       description: "A detailed profile of Julio Herrera Velutini, from Venezuelan roots to global financial empire, including his 2025 plea resolution.",
//       url: "https://venture-hive.com/business/julio-herrera-velutini-legacy-finance",
//       siteName: "Venture Hive",
//       images: [
//         {
//           url: "https://venture-hive.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp", // Replace with actual image path
//           width: 1200,
//           height: 630,
//           alt: "Julio Herrera Velutini Portrait",
//         },
//       ],
//       type: "profile",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Julio Herrera Velutini Biography & Career",
//       description: "Discover the journey of international banker Julio Herrera Velutini.",
//       images: ["https://venture-hive.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp"],
//     },
//   };
// }

//    const authorData =
//            authorsPageData.categories.find(
//              (item) => item.category.toLowerCase() === "marketing & branding"
//            )?.author;

// export default function JulioHerreraVelutiniPage() {
//   // Placeholder image URLs - replace with your assets
//   const heroImage = "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";
//   const profileImage = "/images/julio-profile.jpg"; // Add a profile photo

//   return (
//     <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif">
//       {/* TITLE */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
//         Julio Herrera Velutini: A Legacy in World Finance
//       </h1>

//       {/* SUBTITLE / INTRO */}
//       <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
//         Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.
//       </p>

//       {/* META INFO */}
      
//       <div className="mb-8 space-y-6">
//         {/* Author Info */}
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4">
//           <Image
//             src={authorData.profileImage}
//             alt="Lauren - Senior Editor"
//             width={56}
//             height={56}
//             className="rounded-full object-cover flex-shrink-0"
//           />

//           <div>
//             <p className="font-semibold text-sm">
//               <Link  href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
//               <span className="hover:text-blue-600 hover:underline transition cursor-pointer">{authorData.name}</span>
//               </Link>
//               {" "}
//               <span className="text-gray-500 font-normal">
//                 – {authorData.role}
//               </span>
//             </p>

//             <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//               <GoClock />
//               <span>Last updated: January 13, 2026</span>
//             </div>
//           </div>
//         </div>

//         {/* Share Section (UNDER AUTHOR) */}
//         <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
//           {/* Share Label */}
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <FaShareSquare />
//             <span>Share</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-3">
//             {[
//               { icon: <FaXTwitter />, label: "X" },
//               { icon: <FaFacebookF />, label: "Facebook" },
//               { icon: <FaLinkedinIn />, label: "LinkedIn" },
//               { icon: <SiMedium />, label: "Medium" },
//             ].map((item, index) => (
//               <button
//                 key={index}
//                 aria-label={`Share on ${item.label}`}
//                 title={`Share on ${item.label}`}
//                 className="
//                   w-9 h-9 flex items-center justify-center
//                   rounded-full border border-gray-400
//                   text-gray-600
//                   transition
//                   hover:text-white hover:bg-black hover:border-black
//                   cursor-pointer
//                 "
//               >
//                 {item.icon}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* HERO IMAGE */}
//       <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src={heroImage}
//           alt="Julio Herrera Velutini in professional setting"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* ARTICLE CONTENT - PROSE */}
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

//             <div className="flex items-center gap-3">
//               {[
//                 { icon: <FaXTwitter />, label: "X" },
//                 { icon: <FaFacebookF />, label: "Facebook" },
//                 { icon: <FaLinkedinIn />, label: "LinkedIn" },
//                 { icon: <SiMedium />, label: "Medium" },
//               ].map((item, index) => (
//                 <button
//                   key={index}
//                   aria-label={`Share on ${item.label}`}
//                   title={`Share on ${item.label}`}
//                   className="
//                     w-9 h-9 flex items-center justify-center
//                     rounded-lg border border-gray-400
//                     text-gray-600
//                     transition
//                     hover:bg-black hover:text-white hover:border-black
//                     cursor-pointer
//                   "
//                 >
//                   {item.icon}
//                 </button>
//               ))}
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
//                   { icon: <FaFacebookF />, label: "Facebook" },
//                   { icon: <FaLinkedinIn />, label: "LinkedIn" },
//                   { icon: <FaXTwitter />, label: "Twitter" },
//                   { icon: <SiMedium />, label: "Medium" },
//                 ].map((item, index) => (
//                   <div key={index} className="relative group">
//                     <button
//                       aria-label={`Follow on ${item.label}`}
//                       title={`Follow on ${item.label}`}
//                       className="flex items-center justify-center hover:text-gray-400 cursor-pointer"
//                     >
//                       {item.icon}
//                     </button>
//                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md">
//                       {item.label}
//                     </div>
//                   </div>
//                 ))}
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
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import pillarContent from "../../../public/data/pillarContent.json";
import Script from "next/script";

// SEO Metadata
export async function generateMetadata() {
  const metaTitle = "Julio Herrera Velutini: Biography & Legacy in Global Finance";
  const metaDescription =
    "Discover Julio Herrera Velutini's biography, career, and family legacy in global finance, plus his legal journey and 2025 resolution.";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
    },
    openGraph: {
      title: metaTitle, // OpenGraph title matches metaTitle
      description: metaDescription, // OpenGraph description matches metaDescription
      url: "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
      siteName: "Newswireninja",
      images: [
        {
          url: "https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp", // Replace with actual image path
          width: 1200,
          height: 630,
          alt: "Julio Herrera Velutini Portrait",
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle, // Twitter card title matches metaTitle
      description: metaDescription, // Twitter card description matches metaDescription
      images: ["https://www.newswireninja.com/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp"],
    },
  };
}

// Fetching author data from the provided data
const authorData =
  authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === "marketing & branding"
  )?.author;

export default function JulioHerreraVelutiniPage() {
  const heroImage = "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

  return (
    <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif" itemScope itemType="https://schema.org/Person">
      {/* JSON-LD for Person */}
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Julio Herrera Velutini",
            "url": "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
            "image": "https://www.newswireninja.com/images/julio-profile.jpg",
            "jobTitle": "Founder of Britannia Financial Group",
            "worksFor": {
              "@type": "Organization",
              "name": "Britannia Financial Group",
            },
            "sameAs": [
              "https://twitter.com/JulioHerreraV",
              "https://www.linkedin.com/in/julio-herrera-velutini",
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
                "item": "https://www.newswireninja.com/business/julio-herrera-velutini-legacy-finance",
              },
            ],
          }),
        }}
      />

      {/* Page Content */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
        Julio Herrera Velutini: A Legacy in World Finance
      </h1>

      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.
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
            itemProp="image"
          />

          <div>
            <p className="font-semibold text-sm">
              <Link href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
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
              <GoClock />
              <span itemProp="dateModified">Last updated: January 13, 2026</span>
            </div>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare />
            <span>Share</span>
          </div>

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

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Julio Herrera Velutini in professional setting"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
          On December 15, 1971, he was born in Caracas, Venezuela. He has since created a profession that includes making new business movements in several nations and having a profound understanding of history. He has citizenship in both Italy and Venezuela. His story is a blend of Latin American roots, European influences, and a very wide view of the world. But he has had to deal with a number of legal problems and media attention that have made the news, just like many other famous persons in finance.
        </p>

        <p className="mt-8">
         Julio's family had been in business and banking in Caracas for a long time before he was born. When he was very young, this had an effect on the environment around him. The Herrera-Velutini family comes from Spain. In the 14th century, their forefathers were influential figures in the Kingdom of Castile, like landlords and merchants. One group was the House of Herrera, which had names like "Lord of Ampudia." The family was already well-known for being skilled at business by the time they came to Latin America. They established Hacienda La Vega in what is now Caracas in 1590. It was one of the family's first major pieces of land in the area.
        </p>

        <p>
         Banco Caracas first opened in 1890. Some accounts indicate it happened a little earlier, in the 1880s. This was the most crucial thing they included in their will. Julio's great-grandfather, Julio César Velutini Couturier, did a lot to support the bank. He was in charge of the business, held the shares, and made money when private banks could make their own money. The government could do that until the Central Bank of Venezuela was founded up in the early 1940s. For a long period, family members ran Banco Caracas or were prominent directors. Until 1989, they owned nearly 70% of the bank's equity. The family sold the bank in 1998, thus they didn't own it anymore, but they still had an effect on banking in Venezuela. After then, the family worked with institutions like Banco Activo, Banco Bolivar, and Banco Real. This shows that they were able to keep up with the news.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">A long history and an education that covers the whole world</h2>
        <p>
           <a href="https://www.arabianchronicle.com/"  target="_blank" title="Visit Julio Herrera Velutini's on arabianchronicle" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </a> extensive background gave him more than simply a moniker. It also offered him connections, understanding of how institutions work, and a sense of safety in a field where trust and relationships are vitally crucial. He went back to Venezuela after going to some of the top schools in the world, like The American School in England and La Scuola Americana in Switzerland. In 1990, he graduated from the Central University of Venezuela. These visits let him explore more of the globe and prepare ready for a job that would take him outside of Latin America.
        </p>

        <p>
          He thought about things differently when he saw the world as a child. He combined traditional family values with more modern, global ones. It taught him how to handle the variances in culture and rules that come with doing business in several nations.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Early career and rapid ascent to popularity in Venezuela</h2>
        <p>
          Julio started his career on the trading floor of the Caracas Stock Exchange in the early 1990s. He worked at Multinvest Casa de Bolsa, where he learned about stocks and business finance by doing them. He stayed on the board until 1998. He was already in command of a number of things in his late 20s. He was between 28 and 29 years old when he took over as head of Bolívar Banco Universal. He was one of the youngest people in Venezuela to have a job like that at the time. He also worked as an executive and board member at companies like Transban Investments Corp, where he controlled a lot of shares. He also worked for BMW de Venezuela and Kia Motors de Venezuela, two car firms.
        </p>

        <p>
          His early successes suggest that he had a mix of family money and personal ambition that allowed him quickly ascend in Venezuela's competitive finance sector during a time of tremendous economic change.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Making a financial empire over the world</h2>
        <p>
          He began to create his own empire all over the world in the late 2000s and early 2010s. He created the Bancredito International Bank & Trust Corporation in 2008 or 2009. It began in Puerto Rico and also worked in Florida. The bank largely served people and businesses in Latin America. He invested a lot of his money in small and medium-sized businesses. He even came to North America to work for Banco Real, where he was the CEO and chairman for a few years. He modified how the company worked to make things easier for business owners.
        </p>

        <p>
         Julio launched <span><Link href="https://www.britannia.com/"  target="_blank" title="Visit website of britannia" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Wealth Management </Link></span> in Geneva, Switzerland, in 2012. In 2016, he started Britannia Financial Group (BFG) in London. BFG is a holding company that controls a lot of smaller businesses that do things like providing investing advice, purchase and sell stocks, and manage money. Some of the most well-known companies are <span><Link href="https://britanniabanktrust.com/"  target="_blank" title="Visit website of britanniabanktrust" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Bank & Trust </Link></span> (in the Bahamas), <span><Link href="https://www.britannia.com/britannia-global-markets/"  target="_blank" title="Visit website of britannia-global-markets" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Capital Markets </Link></span> (with offices in the UK and MENA areas),<span><Link href="https://www.britannia.com/securities/"  target="_blank" title="Visit website of britannia securities" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Britannia Securities </Link></span> (in the Bahamas), and others like Britannia Global Investment and Britannia Global Payments. These companies do business in numerous countries, including as Europe, the Caribbean, the Middle East, and more. They support people and businesses that have a lot of money. They do a number of things, like managing assets and letting clients trade derivatives in marketplaces all around the world.
        </p>

        <p>
          <Link href="https://www.thecapitalistjournal.com/"  target="_blank" title="Visit Julio Herrera Velutini's on thecapitalistjournal" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </Link> is now interested in more than just basic banking. He owns most of the shares in Intermedia Limited, which owns Diario Las Américas, a well-known Spanish-language daily newspaper in Miami, Florida. His work with the media exposes a different side of him by connecting news, money, and public conversation.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Giving to charity and making a bigger difference</h2>
        <p>
        He also helps others who need it. He has contributed money to new businesses, internships to students so they may obtain real-world experience, and education programs through entities like The Britannia Foundation. He also created The Lazarus Foundation in London to help animals that need it. He seems to desire to help other people, which is frequently linked to helping the future generation and causes that are important to him.
        </p>

        <p>
         He is committed to giving back, as seen by his work for charities that benefit animals, people in underdeveloped countries, and education. All of these items are things that go along with his family's business.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Law problems and how to solve them</h2>
        <p>
        <Link href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"  target="_blank" title="Visit Julio Herrera Velutini's on wikipedia" className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer">Julio Herrera Velutini </Link> has done a lot of wonderful things, but his job has been hard, especially when it comes to the law. In August 2022, the U.S. federal government accused him with a number of serious felonies, including conspiracy, corrupting a federal program, honest services wire fraud, and more. He was accused with these offenses along with a number of other people, such as former FBI agent Mark Rossini and former Puerto Rico Governor Wanda Vázquez Garced. The claims were based on events that took place in 2019 and 2020, when the Puerto Rico Office of the Commissioner of Financial Institutions began looking into Bancredito. Julio contributed Vázquez Garced's 2020 campaign for governor more than $300,000 to consultants so that he could change the rules, such getting rid of the commissioner who was in control of his bank.
        </p>

        <p>
            Julio went to the police on his own and told them he wasn't guilty. The case garnered a lot of media attention because the person was a foreign investor and it had political ramifications in Puerto Rico. 
        </p>

        <p>
        Julio consented to plead guilty to a small violation of U.S. campaign finance law (52 U.S.C. § 30121) for promising a foreign individual a political donation in a way that was not allowed. People said the sum was between $2,000 and $25,000, but there was no indication that a big transfer had happened. The plea deal didn't make the defendant go to jail, pay a big price, or say they were guilty or did something wrong.  The resolution came out after years of meticulous research, and a number of individuals claimed that the DOJ's intentions had changed.
        </p>

        <p>
         In 2025, there was another civil lawsuit when former lawyers sued the criminal defense for nearly $500,000 in legal costs that had not been paid. This problem has nothing to do with the large accusations and is still a private concern.
        </p>

        <p>
         In different news stories, Julio looks different. Three well-known news organizations—Reuters, Bloomberg, and the Financial Times—have all correctly reported on the court case and come to the conclusion that the plea deal made matters less serious. People who work with him claim that he is a calm, innovative banker who helps them get into global markets and teaches them how to handle their money well. Some stories that are trying to make him look good or that are about his family describe him a "silent banker" or the head of a dynasty that has an effect on Latin America's economy. Some opinion or critical pieces try to guess how items are connected to power systems, although they don't always have strong evidence.
        </p>

        <p>
          People still don't know what they think of him. Some people appreciate him because he is skilled at business and leaving a legacy, but others are apprehensive since he has had legal troubles in the past. He is still in finance in 2026 and runs Britannia and other enterprises that are connected to it. The cops are, however, keeping an eye on him.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Conclusion: Finding a Balance In Between the Old and the New</h2>
        <p>
            Julio Herrera Velutini's life is an excellent illustration of how your family and your personal aspirations may help you accomplish well in business all around the world. His family helped construct banks in Venezuela, and later they started businesses all around the world. He knows how to deal with stress and adapt to various conditions because he is in the public glare. His experience reminds us that it's not always easy to handle money. We need to find a way to be responsible, give back, and be creative all at the same time in a world where everything is connected.
        </p>
        

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

        {/* FAQ SECTION */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">Who is this Julio Herrera Velutini?</summary>
              <p className="mt-4 text-gray-700">
                Julio Herrera Velutini is a rich businessman who lives in both Italy and Venezuela. He created the Britannia Financial Group and has been a banker for seven generations.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What kind of family does Julio Herrera Velutini come from?</summary>
              <p className="mt-4 text-gray-700">
                In the 14th century, his family moved to Spain from the Kingdom of Castile. Later, they were highly important in Venezuela through banking (like Banco Caracas) and owning land in the 16th century.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What happened in the U.S. court case against Julio Herrera Velutini in 2022?</summary>
              <p className="mt-4 text-gray-700">
                He was suspected of donating money to a campaign to become governor of Puerto Rico. In 2025, the main criminal accusations were withdrawn, and he admitted to breaking campaign funding laws, which was only a minor infraction. He didn't have to go to jail.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">What types of enterprises does Julio Herrera Velutini own at the moment?</summary>
              <p className="mt-4 text-gray-700">
                He created and leads Britannia Financial Group (BFG), which owns enterprises in banking (in the Bahamas, Geneva, and London), wealth management, and media (Diario Las Américas through Intermedia Limited).
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">Does Julio Herrera Velutini do any positive things?</summary>
              <p className="mt-4 text-gray-700">
                Yes, there are The Britannia Foundation, which aids schools, businesses, and internships, and The Lazarus Foundation, which helps animals in London.
              </p>
            </details>
          </div>
        </div>
      </article>

       {/* Cards for Pillar Content */}
       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarContent.map((item) => (
            <div
            key={item.id}
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group" // Added 'group' here
            >
            {/* Link to the individual pillar article page */}
            <Link href={`/julio-herrera-velutini/${item.slug}`} title={item.title}>
                <div className="block w-full h-full">
                {/* Hero Image */}
                <div className="relative w-full h-3/4">
                    <Image
                    src={item.heroImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover w-full h-full"
                    />
                </div>

                {/* Heading Container with Background */}
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






