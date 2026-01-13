

// "use client";
// import { LuAlarmClock } from "react-icons/lu";
// import { GoClock } from "react-icons/go";
// import articleData from "../../public/data/articles.json";

// export default async function CategoryPage({ params }) {
//   const { category } = await params;
  

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6">
//       {/* Category Title */}
//       <div className="mb-6">
//         <span className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
//           {category}
//         </span>
//         <div className="border-t border-black mt-3 mb-10"></div>
//       </div>

//       {/* MAIN GRID (FIXED BREAKPOINT) */}
//       <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3 border-b pb-10">
//         {/* LEFT COLUMN */}
//         <div className="md:border-r md:pr-8 border-gray-300">
//           {/* Featured Article */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
//             <div>
//                 <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase mb-3">
//                 {category}
//                 </span>

//                 <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 transition group-hover:text-blue-600 group-hover:underline">
//                 The Best Wireless Gaming Headsets in This Year
//                 </h1>

//                 <p className="text-gray-600 mb-4">
//                 As for quality, the HS80's provided clear-cut sound with adequate
//                 bass and a slight emphasis on the mid-range.
//                 </p>

//                 <div className="flex items-center text-sm text-gray-500 gap-3">
//                 <span className="font-medium text-black">By Lauren</span>
//                 <span className="h-4 w-px bg-gray-300"></span>
//                 <GoClock />
//                 <span>June 16, 2024</span>
//                 </div>
//             </div>

//             <div className="relative overflow-hidden">
//                 <img
//                 src="https://images.unsplash.com/photo-1487014679447-9f8336841d58"
//                 alt="Featured"
//                 className="w-full h-64 sm:h-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>
//             </div>
//             </div>


//           <div className="border-b border-gray-200 mt-10"></div>

//           {/* Article Row */}
//           <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 py-8 group cursor-pointer">
//             <div>
//               <h2 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 group-hover:underline transition">
//                 How to Mark Yourself ‘Safe’ on Socials Media
//               </h2>

//               <p className="text-gray-600 mb-4">
//                 Modern technology has become a total phenomenon for civilization.
//               </p>

//               <div className="flex items-center text-sm text-gray-500 gap-3">
//                 <span className="font-medium text-black">By Sophia</span>
//                 <span className="h-4 w-px bg-gray-300"></span>
//                 <GoClock />
//                 {/* <span>6 Min Read</span> */}
//                  <span>June 16, 2024</span>
//               </div>
//             </div>

//             <div className="relative overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//                 alt="Article"
//                 className="w-full h-40 object-cover"
//               />

//               <div className="absolute inset-0 bg-gray-500/40 group-hover:bg-transparent transition"></div>

//               <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 uppercase">
//                 {category}
//               </span>
//             </div>
//           </div>

//           {/* 4 Items Row */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[1, 2, 3, 4,5,6,7,8].map((item) => (
//               <div key={item} className="group cursor-pointer">
//                 <h3 className="font-semibold text-sm sm:text-base mb-3 group-hover:text-blue-600 group-hover:underline transition">
//                   How to Stay Safe Online in 2024
//                 </h3>

//                 <div className="relative mb-3 overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
//                     alt="Card"
//                     className="w-full h-36 object-cover"
//                   />

//                 <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>
                 

//                   <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 uppercase">
//                    {category}
//                   </span>
//                 </div>

//                 <p className="text-sm text-gray-600 mb-3">
//                   Modern technology has become a defining force of a new social order.
//                 </p>

//                 <div className="flex items-center text-sm text-gray-500 gap-2">
//                   <GoClock />
//                   <span>June 16, 2024</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT COLUMN (STAYS ON RIGHT FROM md+) */}
//         <aside className="space-y-12 md:sticky md:top-24 self-start">
//           {/* Top Writers */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//               Top Writers
//             </h3>

//             <div className="space-y-6">
//               {[1, 2].map((writer) => (
//                 <div key={writer} className="border border-gray-200 p-5">
//                   <div className="flex justify-between gap-4">
//                     <div>
//                       <p className="font-semibold">
//                         Lauren{" "}
//                         <span className="text-sm text-gray-500 font-normal">
//                           / 40 Articles
//                         </span>
//                       </p>
//                       <p className="text-sm text-gray-600 mt-2">
//                         A senior editor for The Mars that left the company...
//                       </p>
//                     </div>

//                     <div className="flex flex-col items-center">
//                       <img
//                         src="https://i.pravatar.cc/100"
//                         alt="Writer"
//                         className="w-14 h-14 rounded-full object-cover"
//                       />
//                       <span className="text-xs text-gray-500 mt-2 whitespace-nowrap">
//                         Senior Editor
//                         </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Opinion */}
//           <div className="pe-5">
//             <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//               Opinion
//             </h3>

//          <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] gap-4 mb-8 group cursor-pointer">
//             {/* Text */}
//             <div>
//                 <h4 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
//                 The FDA is Helping Millions of Americans Hear Better, Finally
//                 </h4>

//                 <p className="text-sm text-gray-600 mb-2">
//                 Music expresses feeling and thought, without language.
//                 </p>

//                 <p className="text-sm font-medium">
//                 Opinion: <span className="font-normal">Tony Hunter</span>
//                 </p>
//             </div>

//             {/* Image */}
//             <div className="overflow-hidden">
//                 <img
//                 src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
//                 alt="Opinion"
//                 className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//             </div>
//             </div>


//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 "Meet 5 People Who Think They Know What Will Happen This Year",
//                 "9 Successful Young Women Entrepreneurs Share Their Best Business",
//                 "Every Dollar Spent on This Climate Technology Is a Waste",
//                 "Yes, Crypto Is Crashing Again. Blockchain Will Survive",
//               ].map((title, index) => (
//                 <div key={index} className="border-t border-gray-200 pt-4">
//                   <h5 className="font-semibold mb-2">{title}</h5>
//                   <p className="text-sm text-gray-600 mb-1">
//                     Music expresses feeling and thought, without...
//                   </p>
//                   <p className="text-sm font-medium">
//                     Opinion:{" "}
//                     <span className="font-normal">
//                       {["James", "William", "Christopher", "William"][index]}
//                     </span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* The Latest */}
// <div className="mt-14">
//   {/* Section Title */}
//   <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
//     <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//     The Latest
//   </h2>

//   {/* Cards Wrapper */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//     {[1, 2, 3, 4, 5, 6, 7, 8].slice(0, 5).map((item) => (
//     <div
//         key={item}
//         className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group"
//         >
//         {/* Image */}
//         <div className="relative mb-4 overflow-hidden rounded-md">
//             <img
//             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
//             alt="Latest"
//             className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
//             />

//             {/* Gray Overlay */}
//             <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>

//             {/* Category */}
//             <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 uppercase z-10">
//             {category}
//             </span>
//         </div>

//         {/* Title */}
//         <h3 className="font-semibold text-base mb-3 leading-snug transition group-hover:text-blue-600 group-hover:underline">
//             Protecting Yourself Against Excessive Blue Light
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-4">
//             Modern technology has become a defining force of a new social order...
//         </p>

//         {/* Read Time */}
//         <div className="flex items-center gap-2 text-sm text-gray-500">
//             <GoClock />
//              <span>June 16, 2024</span>
//         </div>
//         </div>

//     ))}
//   </div>
// </div>

//     </main>
//   );
// }




"use client";

import { GoClock } from "react-icons/go";
import articleData from "../../public/data/articles.json";
import Link from "next/link";
import authorsPageData from "../../public/data/authors.json";
import Image from "next/image";
import { slugify } from "../../utils/slugify";

// helper to convert date string → Date object
const parseDate = (dateStr) => new Date(dateStr);

export default function CategoryClient({ category }) {
  const categoryKey = category?.toLowerCase();
  const articles = articleData[categoryKey] || [];

  // SORT ARTICLES BY DATE (LATEST FIRST)
  const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const latestArticle = sortedArticles[0];
  const secondLatestArticle = sortedArticles[1];
  const remainingArticles = sortedArticles.slice(2);

  const authorData =
    authorsPageData.categories.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )?.author;

         
    const investigationData = articleData["investigation"] || [];

  const latestInvestigationArticles = [...investigationData]
  .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  .slice(0, 5);
   
    
  const investigationAuthor =
    authorsPageData.categories.find(
      (item) => item.category.toLowerCase() === "investigation"
    )?.author;
   
    

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 font-serif">
      {/* CATEGORY TITLE */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
          {category}
        </h1>
        <div className="border-t border-black mt-3 mb-10"></div>
      </header>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 pb-10">
        {/* LEFT COLUMN */}
        <section className="md:border-r md:pr-8 border-gray-300">
          {/* LATEST ARTICLE (FEATURED) */}
          {latestArticle && (
            <Link
              href={`/${category}/${latestArticle.slug}`}
              title={latestArticle.title}
            >
              <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 group cursor-pointer">
                <div>
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase mb-3">
                    Latest
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition group-hover:text-blue-600 group-hover:underline">
                    {latestArticle.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {latestArticle.excerpt.length > 150
                      ? `${latestArticle.excerpt.slice(0, 150)}...`
                      : latestArticle.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 gap-3">
                    <span className="font-medium text-gray-600">
                      By{" "}
                      <span className="text-black font-medium">
                        {authorData?.name}
                      </span>
                    </span>
                    <span className="h-4 w-px bg-gray-300"></span>
                    <GoClock />
                    <span>{latestArticle.date}</span>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <Image
                    src={latestArticle.image}
                    alt={latestArticle.title}
                    width={800}
                    height={600}
                    className="w-full h-64 sm:h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              </article>
            </Link>
          )}

          <div className="border-b border-gray-300 mt-10"></div>

          {/* SECOND LATEST ARTICLE */}
          {secondLatestArticle && (
            <Link
              href={`/${category}/${secondLatestArticle.slug}`}
              title={secondLatestArticle.title}
            >
              <article className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 py-8 group cursor-pointer">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
                    {secondLatestArticle.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {secondLatestArticle.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 gap-3">
                    <span className="font-medium text-black">
                      By {authorData?.name}
                    </span>
                    <span className="h-4 w-px bg-gray-300"></span>
                    <GoClock />
                    <span>{secondLatestArticle.date}</span>
                  </div>
                </div>

                <div className="relative overflow-hidden h-50 sm:h-44 lg:48">
                  <Image
                    src={secondLatestArticle.image}
                    alt={secondLatestArticle.title}
                    width={600}
                    height={400}
                    className="w-full h-50 sm:h-44 lg:48object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-500/40 group-hover:bg-transparent transition"></div>
                </div>
              </article>
            </Link>
          )}
           <div className="border-b border-gray-500 mt-10"></div>

          {/* REMAINING ARTICLES GRID */}
          {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${category}/${article.slug}`}
                title={article.title}
              >
                <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
                  <div className="relative mb-4 overflow-hidden rounded-md">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-40 sm:h-44 lg:48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>

                    <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 uppercase z-10">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                    {article.title.length > 80
                      ? `${article.title.slice(0, 80)}...`
                      : article.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {article.excerpt.length > 80
                      ? `${article.excerpt.slice(0, 80)}...`
                      : article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <GoClock />
                    <span>{article.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div> */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${category}/${article.slug}`}
                title={article.title}
              >
                <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group">
                  {/* Heading */}
                  <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                    {article.title.length > 80
                      ? `${article.title.slice(0, 80)}...`
                      : article.title}
                  </h3>

                  {/* Image (Rectangle Shape) */}
                  <div className="relative mb-4 overflow-hidden rounded-md">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400} // Set width
                      height={250} // Set height (smaller to create rectangle shape)
                      className="w-full h-36 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-300/40 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4">
                    {article.excerpt.length > 80
                      ? `${article.excerpt.slice(0, 80)}...`
                      : article.excerpt}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <GoClock />
                    <span>{article.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          
        </section>

        {/* RIGHT COLUMN (UNCHANGED) */}
        <aside className="space-y-12 md:sticky md:top-24 self-start">
          {/* Top Writers */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Top Writers
              </h3>

              <div className="space-y-6">
                {authorsPageData.categories
                  .filter((category) => category.category.toLowerCase()) // Filter by category
                  .slice(0, 2) // Display only 2 authors
                  .map((category) => {
                    const categoryKey = category.category.toLowerCase();
                    const authorArticles = articleData[categoryKey] || [];

                    return (
                      <div key={category.author.id} className="border border-gray-200 p-5">
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="font-semibold">
                              <Link href={`/authors/${slugify(category.author.name)}`} title={category.author.name}>
                                <span className="hover:text-blue-600 hover:underline transition-colors">{category.author.name.slice(0, 14)}</span>
                              </Link>{" "}
                              <span className="text-sm text-gray-500 font-normal">
                                / {authorArticles.length} Articles
                              </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{category.author.bio.slice(0, 40)}...</p>
                          </div>


                          <div className="flex flex-col items-center">
                            <Image
                              src={category.author.profileImage}
                              alt={category.author.name}
                              width={56}
                              height={56}
                              className="w-14 h-14 rounded-full object-cover"
                            />
                            <span className="text-xs text-gray-500 mt-2 whitespace-nowrap">
                              {category.author.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>


          {/* Investigation */}

           <div className="pe-5">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Investigation
          </h3>

          {latestInvestigationArticles.length > 0 && latestInvestigationArticles[0] && (
             <Link href={`/${latestInvestigationArticles[0].category}/${latestInvestigationArticles[0].slug}`}>
               <div className="grid grid-cols-2 sm:grid-cols-[60%_40%] gap-4 mb-8 group cursor-pointer">
        
              <div>
               <h4 className="text-lg font-semibold mb-2 transition group-hover:text-blue-600 group-hover:underline">
                  {/* For large devices, show up to 40 characters, for small devices, show up to 20 */}
                  {latestInvestigationArticles[0].title.length > 40 ? (
                    <span className="hidden lg:inline">
                      {latestInvestigationArticles[0].title.slice(0, 40)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].title}</span>
                  )}

                  {/* For small devices (mobile), show up to 20 characters */}
                  {latestInvestigationArticles[0].title.length > 20 ? (
                    <span className="inline lg:hidden">
                      {latestInvestigationArticles[0].title.slice(0, 20)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].title}</span>
                  )}
                </h4>

                <p className="text-sm text-gray-600 mb-2">

                 {latestInvestigationArticles[0].excerpt.length > 50 ? (
                    <span className="hidden lg:inline">
                      {latestInvestigationArticles[0].excerpt.slice(0, 50)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].excerpt}</span>
                  )}

                  {/* For small devices (mobile), show up to 20 characters */}
                  {latestInvestigationArticles[0].excerpt.length > 30 ? (
                    <span className="inline lg:hidden">
                      {latestInvestigationArticles[0].excerpt.slice(0, 30)}...
                    </span>
                  ) : (
                    <span>{latestInvestigationArticles[0].excerpt}</span>
                  )}
                </p>

                <p className="text-sm font-medium">
                  investigation: <span className="font-normal">
                    {investigationAuthor.name.length > 15 ?
                  `${investigationAuthor.name.slice(0,15)}..`
                : investigationAuthor.name }
                    </span>
                </p>
              </div>

             
              <div className="overflow-hidden">
                 <Image
                  src={latestInvestigationArticles[0].image}
                  alt={latestInvestigationArticles[0].title}
                  width={400}
                  height={300}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
             </Link>
          )}

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestInvestigationArticles.slice(1).map((article) => (
              <div key={article.id} className="border-t border-gray-200 pt-4">
               <Link href={`/${article.category}/${article.slug}`}>
                  <h5 className="font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
                    {article.title.length > 40 ? `${article.title.slice(0, 40)}...` : article.title}
                  </h5>
                </Link>
                <p className="text-sm text-gray-600 mb-1">
                   {article.excerpt.length > 50 ?
                  `${article.excerpt.slice(0,50)}...`
                : article.excerpt }
                </p>
                <p className="text-sm font-medium">
                  investigation: <span className="font-normal">
                    {investigationAuthor.name.length > 8 ?
                  `${investigationAuthor.name.slice(0,8)}..`
                : investigationAuthor.name }
                    </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        </aside>
      </div>
    </main>
  );
}

