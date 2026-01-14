// import Image from "next/image";
// import Link from "next/link";
// import { GoClock } from "react-icons/go";

// export function MixedGrid({ articles }) {
//   return (
//     <section className="mt-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
//           {articles.map((item, index) => (
//             <Link key={index} href={`${item.category}/${item.slug}`} title={item.title}>
//               <article className={`flex flex-col sm:flex-row gap-4 sm:border-b sm:border-gray-300 lg:border-b-0 ${index < 2 ? 'sm:border-r sm:border-gray-300' : ''} mb-4 sm:mb-6 pe-8 cursor-pointer group`}>
//                 <div className="sm:w-2/3">
//                   <span className="inline-block mb-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{item.category}</span>
//                   <h3 className="font-serif text-sm sm:text-md font-semibold leading-snug hover:text-blue-600 hover:underline">{item.title}</h3>
//                   <p className="text-sm text-gray-700 mt-2">{item.excerpt.slice(0, 55)}...</p>
//                   <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-4"><GoClock /><span>{item.date}</span></div>
//                 </div>
//                 <div className="sm:w-1/3 relative w-full sm:w-32 sm:h-32 h-40 sm:h-40 overflow-hidden rounded-lg">
//                   <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
//                   <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";

export function MixedGrid({ articles }) {
  // Static data for the 3rd item
  const staticArticle = {
    title: "Julio Herrera Velutini: A Legacy in World Finance",
    excerpt:
      "Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.",
    category: "business",
    slug: "julio-herrera-velutini-legacy-finance",
    image: "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
    imageAlt: "Julio Herrera Velutini",
    date: "January 13, 2026",
  };

  // Get the first 2 items from the articles
  const displayedArticles = articles.slice(0, 2);

  // Add the static article as the 3rd item
  const mixedArticles = [...displayedArticles, staticArticle];

  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {mixedArticles.map((item, index) => (
            <Link key={index} href={`/${item.category}/${item.slug}`} title={item.title}>
              <article className={`flex flex-col sm:flex-row gap-4 sm:border-b sm:border-gray-300 lg:border-b-0 ${index < 2 ? 'sm:border-r sm:border-gray-300' : ''} mb-4 sm:mb-6 pe-8 cursor-pointer group`}>
                <div className="sm:w-2/3">
                  <span className="inline-block mb-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white">{item.category}</span>
                  <h3 className="font-serif text-sm sm:text-md font-semibold leading-snug hover:text-blue-600 hover:underline">{item.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{item.excerpt.slice(0, 55)}...</p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-4"><GoClock /><span>{item.date}</span></div>
                </div>
                <div className="sm:w-1/3 relative w-full sm:w-32 sm:h-32 h-40 sm:h-40 overflow-hidden rounded-lg">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
