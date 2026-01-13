// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { GoClock } from "react-icons/go";
// import { LuAlarmClock } from "react-icons/lu";
// import articleData from "../public/data/articles.json";
// import authorsPageData from "../public/data/authors.json";
// import { slugify } from "../utils/slugify";
// import { useState } from "react";

// export default function Home() {

//     const [visibleArticlesCount, setVisibleArticlesCount] = useState(4);

//      const handleShowMore = () => {
//     setVisibleArticlesCount(visibleArticlesCount + 2); // Increase the visible articles by 2
//   };

//   const getAllLatestArticles = (articleData) => {
//     const getAllLatestArticle = Object.values(articleData).flat();
//     return getAllLatestArticle
//     .sort((a, b) => new Date(b.date) - new Date(a.date))
//   }

// const getLatestArticles = (articleData) => {
//   // Collect all articles from all categories
//   const allArticles = Object.values(articleData).flat(); // Flatten all categories into a single array

//   return allArticles
//     .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
//     .slice(0, 4); // Get the top 3 latest articles
// };

// const getAuthorByCategory = (category) => {
//   const author = authorsPageData.categories.find((cat) => cat.category.toLowerCase() === category.toLowerCase())?.author;
//   return author || {}; // Return an empty object if no author is found
// };

// const articlesInlatestorder = getAllLatestArticles(articleData)
// const latestArticles = getLatestArticles(articleData);

// const businessArticles = Object.values(articleData)
//   .flat()  // Flatten the articles into a single array
//   .filter((article) => article.category === "business" && !latestArticles.includes(article))
//   .sort((a, b) => new Date(b.date) - new Date(a.date))  // Sort articles by date in descending order (latest first)
//   .slice(0, 4);
  
//    const getArticlesByCategory = (category) => {
//     const categoryKey = category.toLowerCase();
//     return articleData[categoryKey] || [];
//   };

//   const featuredStoryData = articlesInlatestorder.filter(
//   (article) =>
//     !latestArticles.some((a) => a.slug === article.slug) && 
//     !businessArticles.some((a) => a.slug === article.slug)
// );

// // Create a map to store articles by category
// const articlesByCategory = {};

// // Group the filtered articles by category
// featuredStoryData.forEach((article) => {
//   if (!articlesByCategory[article.category]) {
//     articlesByCategory[article.category] = [];
//   }
//   articlesByCategory[article.category].push(article);
// });

// // Now, select one article from two different categories
// const selectedArticles = [];
// let categories = Object.keys(articlesByCategory);

// for (let i = 0; i < categories.length && selectedArticles.length < 2; i++) {
//   const category = categories[i];
//   const articlesInCategory = articlesByCategory[category];
  
//   if (articlesInCategory.length > 0) {
//     selectedArticles.push(articlesInCategory[0]); // Pick the first article in this category
//   }
// }


// // Filter out the articles that are already included in latestArticles, businessArticles, or selectedArticles
// const excludedArticles = [
//   ...latestArticles,
//   ...businessArticles,
//   ...selectedArticles
// ];

// // Filter the articles to exclude the ones already included
// const filteredArticles = Object.values(articleData).flat().filter(article => {
//   return !excludedArticles.some(a => a.slug === article.slug);
// });

// // Group filtered articles by category (use a different name here)
// const filteredArticlesByCategory = {};

// filteredArticles.forEach(article => {
//   if (!filteredArticlesByCategory[article.category]) {
//     filteredArticlesByCategory[article.category] = [];
//   }
//   filteredArticlesByCategory[article.category].push(article);
// });

// // Select one article from each of the first 3 categories
// const selectedArticlesForDisplay = [];
// let filteredCategories = Object.keys(filteredArticlesByCategory);  // Renamed variable

// for (let i = 0; i < filteredCategories.length && selectedArticlesForDisplay.length < 3; i++) {
//   const category = filteredCategories[i];  // Use the renamed variable

//   const articlesInCategory = filteredArticlesByCategory[category];

//   if (articlesInCategory.length > 0) {
//     selectedArticlesForDisplay.push(articlesInCategory[0]); // Pick the first article in this category
//   }
// }

//   const excludedArticlesForHighlightSection = [
//     ...latestArticles,
//     ...businessArticles,
//     ...selectedArticles,
//     ...selectedArticlesForDisplay,
//   ];

//   const filteredArticlesForHighlightSection = Object.values(articleData).flat().filter(article => {
//     return !excludedArticlesForHighlightSection.some(a => a.slug === article.slug);
//   });

//   const filteredArticlesByCategoryForHighlightSection = {};

//   filteredArticlesForHighlightSection.forEach(article => {
//     if (!filteredArticlesByCategoryForHighlightSection[article.category]) {
//       filteredArticlesByCategoryForHighlightSection[article.category] = [];
//     }
//     filteredArticlesByCategoryForHighlightSection[article.category].push(article);
//   });

//   const selectedArticlesForDisplayForHighlightSection = [];
//   let filteredCategoriesForHighlightSection = Object.keys(filteredArticlesByCategoryForHighlightSection);

//   for (let i = 0; i < filteredCategoriesForHighlightSection.length && selectedArticlesForDisplayForHighlightSection.length < 5; i++) {
//     const category = filteredCategoriesForHighlightSection[i];
//     const articlesInCategory = filteredArticlesByCategoryForHighlightSection[category];

//     if (articlesInCategory.length > 0) {
//       selectedArticlesForDisplayForHighlightSection.push(articlesInCategory[0]); // Pick the first article in this category
//     }
//   }


//     const excludedArticlesForTrendingSection = [
//     ...latestArticles,
//     ...businessArticles,
//     ...selectedArticles,
//     ...selectedArticlesForDisplay,
//     ...selectedArticlesForDisplayForHighlightSection
//   ];

//   const filteredArticlesForTrendingSection = Object.values(articleData).flat().filter(article => {
//     return !excludedArticlesForTrendingSection.some(a => a.slug === article.slug);
//   });

//   const filteredArticlesByCategoryForTrendingSection = {};

//   filteredArticlesForTrendingSection.forEach(article => {
//     if (!filteredArticlesByCategoryForTrendingSection[article.category]) {
//       filteredArticlesByCategoryForTrendingSection[article.category] = [];
//     }
//     filteredArticlesByCategoryForTrendingSection[article.category].push(article);
//   });

//   const selectedArticlesForDisplayForTrendingSection = [];
//   let filteredCategoriesForTrendingSection = Object.keys(filteredArticlesByCategoryForTrendingSection);

//   for (let i = 0; i < filteredCategoriesForTrendingSection.length && selectedArticlesForDisplayForTrendingSection.length < 6; i++) {
//     const category = filteredCategoriesForTrendingSection[i];
//     const articlesInCategory = filteredArticlesByCategoryForTrendingSection[category];

//     if (articlesInCategory.length > 0) {
//       selectedArticlesForDisplayForTrendingSection.push(articlesInCategory[0]); // Pick the first article in this category
//     }
//   }


//   return (
    
//     <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 min-h-screen bg-white font-serif">
//            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
//         {/* ================= FEATURE ARTICLE ================= */}
//         <section className="lg:col-span-2">
//           {/* Image */}
//           {latestArticles[0] && (
//             <div className="relative h-[240px] sm:h-[320px] lg:h-[420px] w-full">
//               <Image
//                 src={latestArticles[0].image}
//                 alt={latestArticles[0].imageAlt}
//                 fill
//                 priority
//                 className="object-cover"
//               />
//               <span className="absolute bottom-3 left-3 bg-blue-600 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white">
//                 {latestArticles[0].category.toUpperCase()}
//               </span>
//             </div>
//           )}

//           {/* Content */}
//           {latestArticles[0] && (
//             <div className="mt-5">
//                 <Link href={`${latestArticles[0].category}/${latestArticles[0].slug}`} title={latestArticles[0].title}>
//               <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold leading-tight hover:text-blue-600 hover:underline">
//                 {latestArticles[0].title}
//               </h1>
//                  </Link>
//               <p className="mt-3 text-sm sm:text-base text-gray-700">
//                 {latestArticles[0].excerpt}
//               </p>

//               {/* ================= META ================= */}
//               <div className="mt-5 flex items-center text-xs sm:text-sm text-gray-500">
//                 {/* Author (Desktop) */}
//                 <div className="hidden md:flex items-center gap-2 pr-3 border-r border-gray-300">
//                   <div className="relative h-7 w-7 overflow-hidden rounded-full">
//                     <Image
//                       src={getAuthorByCategory(latestArticles[0].category).profileImage}
//                       alt="Author"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <span className="font-medium text-black">
//                     {getAuthorByCategory(latestArticles[0].category).name}
//                   </span>
//                 </div>

//                 {/* Author (Mobile) */}
//                 <div className="flex md:hidden items-center pr-3 border-r border-gray-300">
//                   <span className="font-medium text-black">
//                     By {getAuthorByCategory(latestArticles[0].category).name}
//                   </span>
//                 </div>

//                 {/* Date (Mobile + Desktop) */}
//                 <div className="flex items-center gap-1 px-3 border-r border-gray-300">
//                   <GoClock />
//                   <span>{latestArticles[0].date}</span>
//                 </div>

//                 {/* Read Time (Desktop only) */}
//                 <div className="hidden md:flex items-center gap-1 px-3">
//                   <LuAlarmClock />
//                   <span>{latestArticles[0].readTime}</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </section>

//         {/* ================= SIDEBAR ================= */}
//         <aside className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//           {/* ================= FEATURED SIDEBAR ARTICLE ================= */}
//           {latestArticles[1] && (
//             <article className="space-y-3">
//               {/* ===== DESKTOP IMAGE ===== */}
//               <div className="relative h-44 sm:h-56 lg:h-72 w-full hidden sm:block">
//                 <Image
//                   src={latestArticles[1].image}
//                   alt={latestArticles[1].imageAlt}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* ===== MOBILE LAYOUT ===== */}
//               <div className="flex items-start gap-4 sm:hidden">
//                 <div className="flex-1">
//                     <Link href={`${latestArticles[1].category}/${latestArticles[1].slug}`} title={latestArticles[1].title}>
//                   <h3 className="font-serif text-base font-semibold leading-snug hover:text-blue-600 hover:underline">
//                     {latestArticles[1].title}
//                   </h3>
//                     </Link>
//                   <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
//                     <GoClock />
//                     <span>{latestArticles[1].readTime}</span>
//                   </div>
//                 </div>
//                 <div className="relative h-20 w-20 flex-shrink-0">
//                   <Image
//                     src={latestArticles[1].image}
//                     alt={latestArticles[1].imageAlt}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {/* ===== DESKTOP CONTENT ===== */}
//               <div className="hidden sm:block">
//                  <Link href={`${latestArticles[1].category}/${latestArticles[1].slug}`} title={latestArticles[1].title}>
//                 <h3 className="font-serif text-lg sm:text-2xl font-semibold leading-snug hover:text-blue-600 hover:underline">
//                   {
//                     latestArticles[1].title.length>30 ?
//                     `${latestArticles[1].title.slice(0,30)}...` : latestArticles[1].title
//                   }
//                 </h3>
//                  </Link>
//                 <p className="text-sm sm:text-base text-gray-700">
//                   {latestArticles[1].excerpt}
                 
//                 </p>
//                 <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
//                   <div className="flex items-center gap-1">
//                     <GoClock />
//                     <span>{latestArticles[1].readTime}</span>
//                   </div>
//                   <span className="cursor-pointer">🔖</span>
//                 </div>
//               </div>
//             </article>
//           )}

//           {/* ================= RIGHT COLUMN ================= */}
//           <div className="space-y-6 lg:border-l lg:border-gray-300 lg:pl-6">
//             {/* Card 1 */}
//             {latestArticles[2] && (
//               <article>
//                 {/* Mobile */}
//                 <div className="flex items-start gap-4 sm:hidden">
//                   <div className="flex-1">
//                      <Link href={`${latestArticles[2].category}/${latestArticles[2].slug}`} title={latestArticles[2].title}>
//                     <h4 className="font-serif text-base font-semibold leading-snug hover:text-blue-600 hover:underline">
//                          {latestArticles[2].title}
//                     </h4>
//                     </Link>
//                     <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
//                       <GoClock />
//                       <span>{latestArticles[2].readTime}</span>
//                     </div>
//                   </div>

//                   <div className="relative h-20 w-20 flex-shrink-0">
//                     <Image
//                       src={latestArticles[2].image}
//                       alt={latestArticles[2].imageAlt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Desktop */}
//                 <div className="hidden sm:block space-y-2">
//                   <div className="relative h-32 sm:h-40 w-full">
//                     <Image
//                       src={latestArticles[2].image}
//                       alt={latestArticles[2].imageAlt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                    <Link href={`${latestArticles[2].category}/${latestArticles[2].slug}`} title={latestArticles[2].title}>
//                   <h4 className="font-serif text-base sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline">
//                       {latestArticles[2].title}
//                   </h4>
//                   </Link>

//                   <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <GoClock />
//                       <span>{latestArticles[2].readTime}</span>
//                     </div>
//                     <span className="cursor-pointer">🔖</span>
//                   </div>
//                 </div>
//               </article>
//             )}

//             {/* Card 2 */}
//             {latestArticles[3] && (
//               <article>
//                 {/* Mobile */}
//                 <div className="flex items-start gap-4 sm:hidden">
//                   <div className="flex-1">
//                      <Link href={`${latestArticles[3].category}/${latestArticles[3].slug}`} title={latestArticles[3].title}>
//                     <h4 className="font-serif text-base font-semibold leading-snug hover:text-blue-600 hover:underline">
//                        {latestArticles[3].title}
//                     </h4>
//                     </Link>
//                     <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
//                       <GoClock />
//                       <span>{latestArticles[3].readTime}</span>
//                     </div>
//                   </div>

//                   <div className="relative h-20 w-20 flex-shrink-0">
//                     <Image
//                       src={latestArticles[3].image}
//                       alt={latestArticles[3].imageAlt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Desktop */}
//                 <div className="hidden sm:block space-y-2">
//                   <div className="relative h-32 sm:h-40 w-full">
//                     <Image
//                       src={latestArticles[3].image}
//                       alt={latestArticles[3].imageAlt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                    <Link href={`${latestArticles[3].category}/${latestArticles[3].slug}`} title={latestArticles[3].title}>
//                   <h4 className="font-serif text-base sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline">
//                       {latestArticles[3].title}
//                   </h4>
//                   </Link>

//                   <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <GoClock />
//                       <span>{latestArticles[3].readTime}</span>
//                     </div>
//                     <span className="cursor-pointer">🔖</span>
//                   </div>
//                 </div>
//               </article>
//             )}
//           </div>
//         </aside>
//       </div>

//       {/* ================= FULL WIDTH RESPONSIVE BANNER ================= */}
//       <section className="mt-12">
//         <div className="relative w-full overflow-hidden rounded-md h-[70px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[260px]">
//           <Image
//             src="/images/thatscapitalism.webp"
//             alt="That's Capitalism"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>
//       </section>

//       {/* ================= BUSINESS SECTION ================= */}
//      <section className="mt-16">
//         <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
//           BUSINESS
//         </h2>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {businessArticles.map((item, index) => (
//             <Link href={`${item.category}/${item.slug}`} title={item.title}>
//              <article key={index} className="space-y-4 group relative cursor-pointer">
//               {/* Image with hover effect */}
//               <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.imageAlt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
                
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

//                 {/* Category badge */}
//                 <span className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white">
//                   {item.category.toUpperCase()}
//                 </span>
//               </div>

//               {/* Title with hover effect */}
//               <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-xs sm:text-sm text-gray-700">
//                 {item.excerpt.length > 100 ? `${item.excerpt.slice(0, 100)}...` : item.excerpt}
//               </p>

//               {/* Meta info */}
//               <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500">
//                 <div className="flex items-center gap-1">
//                   <GoClock />
//                   <span>{item.date}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <LuAlarmClock />
//                   <span>{item.readTime}</span>
//                 </div>
//               </div>
//             </article>
//             </Link>
           
//           ))}
//         </div>

//       </section>
//     {/* ================= FEATURED WRITERS ================= */}
//    <section className="mt-20 bg-[#eef3f6] py-16">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">

//             {/* Heading */}
//             <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-12">
//               Featured Writers
//             </h2>

//             {/* Writers Grid */}
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {authorsPageData.categories.slice(0, 4).map(({ category, author }, index) => {
//                 // Get the articles count for this category
//                 const authorArticles = getArticlesByCategory(category);
//                 const articleCount = authorArticles.length;

//                 return (
                
//                     <div className="flex flex-col items-center border border-gray-300 bg-[#eef3f6] px-6 py-10 text-center">
//                       {/* Avatar */}
//                       <div className="relative h-24 w-24 overflow-hidden rounded-full mb-4">
//                         <Image
//                           src={author.profileImage}
//                           alt={author.name}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>

//                       {/* Role */}
//                       <p className="text-sm text-gray-500">
//                         {author.role} / {articleCount} Articles
//                       </p>

//                       {/* Name */}
//                        <Link key={index} href={`/authors/${slugify(author.name)}`} title={author.name}>
//                       <h3 className="mt-2 font-serif text-lg font-semibold cursor-pointer hover:text-blue-600 hover:underline">
                       
//                           {author.name}
//                       </h3>
//                        </Link>

//                       {/* Description */}
//                       <p className="mt-4 text-sm leading-relaxed text-gray-700">
//                         {author.bio}
//                       </p>
//                     </div>
//                 );
//               })}
//             </div>

//             {/* View All Authors Button */}
//             <div className="text-center mt-8">
//               <Link href="/authors" title="view all authors">
//                 <button className="bg-trasparent text-black py-2 px-8 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
//                   View All Authors
//                 </button>
//               </Link>
//             </div>

//           </div>
//     </section>


//     {/* ================= FEATURED STORY SPLIT SECTION ================= */}
//    <section className="mt-20 border-b border-gray-300 pb-16">
//     <div className="mx-auto max-w-7xl">
//       <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
//         {/* ================= LEFT 75% ================= */}
//         <Link href={`${selectedArticles[0].category}/${selectedArticles[0].slug}`} title={selectedArticles[0].title}>
//          <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
//           {/* Image */}
//           <div className="relative h-64 sm:h-80 md:h-full w-full overflow-hidden">
//             <Image
//               src={selectedArticles[0]?.image}
//               alt={selectedArticles[0]?.imageAlt}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-105"
//             />
            
//             {/* Hover overlay */}
//             <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//           </div>

//           {/* Content */}
//           <div className="flex flex-col justify-center">
//             <span className="mb-3 inline-block w-fit bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
//               {selectedArticles[0]?.category.toUpperCase()}
//             </span>

//             <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight
//               group-hover:text-blue-400 group-hover:underline group-hover:underline-offset-4">
//               {selectedArticles[0]?.title}
//             </h2>

//             <p className="mt-4 text-sm sm:text-base text-gray-700">
//               {selectedArticles[0]?.excerpt}
//             </p>

//             <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
//               <span>
//                 By <span className="font-medium text-black">{getAuthorByCategory(selectedArticles[0]?.category)?.name}</span>
//               </span>

//               <span className="text-gray-300">|</span>

//               <div className="flex items-center gap-1">
//                 <LuAlarmClock />
//                 <span>{selectedArticles[0]?.readTime}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         </Link>
       

//         {/* ================= RIGHT 25% ================= */}
//          <Link href={`${selectedArticles[1].category}/${selectedArticles[1].slug}`} title={selectedArticles[0].title}>
//           <div className="group relative lg:border-l lg:border-gray-300 lg:pl-8 cursor-pointer">
//           <div className="space-y-4">
//             {/* Image */}
//             <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
//               <Image
//                 src={selectedArticles[1]?.image}
//                 alt={selectedArticles[1]?.imageAlt}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//               {/* Overlay badge */}
//               <span className="absolute bottom-3 left-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white z-10">
//                 {selectedArticles[1]?.category.toUpperCase()}
//               </span>
//             </div>

//             {/* Title */}
//             <h3 className="font-serif text-lg font-semibold leading-snug
//               group-hover:text-blue-400 group-hover:underline group-hover:underline-offset-4">
//               {selectedArticles[1]?.title}
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-700">
//               {selectedArticles[1]?.excerpt}
//             </p>

//             {/* Meta */}
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <LuAlarmClock />
//               <span>{selectedArticles[1]?.readTime}</span>
//             </div>
//           </div>
//         </div>
//          </Link>
       
//       </div>
//     </div>
//   </section>


//     <section className="mt-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
//           {selectedArticlesForDisplay.map((item, index) => (
//             <Link href={`${item.category}/${item.slug}`} title={item.title}>
//             <article key={index} className={`flex flex-col sm:flex-row gap-4 sm:border-b sm:border-gray-300 lg:border-b-0 ${index < 2 ? 'sm:border-r sm:border-gray-300' : ''} mb-4 sm:mb-6 pe-8 cursor-pointer group`}>
//               {/* First Column - Content */}
//               <div className="sm:w-2/3">
//                 <span className="inline-block mb-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
//                   {item.category}
//                 </span>

//                 <h3 className="font-serif text-sm sm:text-md font-semibold leading-snug hover:text-blue-600 hover:underline">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-gray-700 mt-2">
//                   {item.excerpt.slice(0, 55)}...
//                 </p>

//                 <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-4">
//                   <GoClock />
//                   <span>{item.date}</span>
//                 </div>
//               </div>

//               {/* Second Column - Image */}
//               <div className="sm:w-1/3 relative w-full sm:w-32 sm:h-32 h-40 sm:h-40 overflow-hidden rounded-lg">
//                 <Image
//                   src={item.image}
//                   alt={item.imageAlt}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                 />
//                 {/* Gray Overlay */}
//                 <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//               </div>
//             </article></Link>
            
//           ))}
//         </div>
//       </div>
//     </section>


//  <section className="mt-20 bg-[#eef3f6] py-12">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <div className="text-left mb-6">
//             <span className="inline-block mb-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
//              {selectedArticlesForDisplayForHighlightSection[0]?.category}
//             </span>
//           </div>

//           {/* Main Content with Image on the right */}
//           <div className="flex flex-col sm:flex-row gap-8 items-center">
//             {/* Left Column (Content) */}
//             <div className="sm:w-5/6 lg:w-4/5">
//             <Link href={`${selectedArticlesForDisplayForHighlightSection[0].category}/${selectedArticlesForDisplayForHighlightSection[0].slug}`} title={selectedArticlesForDisplayForHighlightSection[0].title}>
//             <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
//                 {selectedArticlesForDisplayForHighlightSection[0]?.title}
//               </h2>
//             </Link>

//               <p className="text-sm sm:text-base text-gray-700 mb-4 break-words">
//                 {selectedArticlesForDisplayForHighlightSection[0]?.excerpt}
//               </p>

//               <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
//                 <span>
//                   By <span className="font-medium text-black">{getAuthorByCategory(selectedArticlesForDisplayForHighlightSection[0]?.category)?.name}</span>
//                 </span>

//                 <span className="text-gray-300">|</span>

//                 <div className="flex items-center gap-1">
//                   <GoClock />
//                   <span>{selectedArticlesForDisplayForHighlightSection[0]?.date}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column (Image) */}
//             <div className="sm:w-1/4 lg:w-1/5 relative w-full sm:h-48 h-56 overflow-hidden cursor-pointer">
//               <Image
//                 src={selectedArticlesForDisplayForHighlightSection[0]?.image}
//                 alt={selectedArticlesForDisplayForHighlightSection[0]?.imageAlt}
//                 layout="responsive"
//                 width={400} // Adjust width as needed
//                 height={400} // Adjust height to keep it square
//                 objectFit="cover"
//                 className="transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </div>

//           {/* Cards Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
//             {selectedArticlesForDisplayForHighlightSection.slice(1).map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col gap-4 md:border-r sm:border-b sm:border-gray-300 sm:px-4 py-6"
//               >
//                 {/* Category */}
//                 <span className="inline-block w-fit bg-gray-500 px-3 py-1 text-xs font-semibold text-white">
//                   {item.category}
//                 </span>

//                 {/* Title */}
//                 <Link href={`${item.category}/${item.slug}`} title={item.title}>
//                  <h3 className="font-serif text-sm sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline cursor-pointer">
//                   {item.title}
//                 </h3>
//                 </Link>
               

//                 {/* Content */}
//                 <p className="text-xs sm:text-sm text-gray-700">
//                   {item.excerpt.length>120 ? 
//                   `${item.excerpt.slice(0,120)}...` :
//                   item.excerpt}
//                 </p>

//                 {/* Author */}
//                 <span className="text-xs sm:text-sm font-semibold tetx-black">{item.category} : {getAuthorByCategory(item?.category)?.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

// {/* Trending Stories Section */}
//         <section className="mt-20">
//           <div className="mx-auto max-w-7xl">
//             {/* Heading */}
//             <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-10">
//               Trending Stories
//             </h2>

//             {/* Items Wrapper */}
//             <div className="flex flex-wrap gap-y-10">
//               {selectedArticlesForDisplayForTrendingSection
//                 .slice(0, visibleArticlesCount) // Show only the visible number of articles
//                 .map((item, index) => (
                  
//                   <article
//                     key={index}
//                     className="group flex w-full flex-col sm:flex-row gap-6 sm:w-1/2 px-2"
//                   >
//                     {/* Image Column */}
//                     <div className="relative h-56 sm:h-52 lg:h-60 w-full sm:w-1/2 overflow-hidden">
//                       <Image
//                         src={item.image}
//                         alt={item.imageAlt}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                       />

//                       {/* Gray Overlay */}
//                       <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                     </div>

//                     {/* Content Column */}
//                     <div className="flex flex-col justify-center sm:w-1/2">
//                       {/* Category */}
//                       <span className="inline-block w-fit bg-blue-600 px-3 py-1 text-xs font-semibold text-white mb-2">
//                         {item.category}
//                       </span>

//                       {/* Title */}
//                          <Link href={`${item.category}/${item.slug}`} title={item.title}>
//                          <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-blue-600 group-hover:underline">
//                         {item.title}
//                       </h3>
//                          </Link>

//                       {/* Content */}
//                       <p className="mt-2 text-sm text-gray-700">{item.excerpt}</p>

//                       {/* Meta */}
//                       <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
//                         <GoClock />
//                         <span>{item.date}</span>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//             </div>

//             {/* Show More Button */}
//             {visibleArticlesCount < selectedArticlesForDisplayForTrendingSection.length && (
//               <div className="mt-12 flex justify-center">
//                 <button
//                   onClick={handleShowMore}
//                   className="bg-gray-600 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none cursor-pointer"
//                 >
//                   Show More
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>


//     </main>
//   );
// }



import { HeroSection } from "../components/homeComponents/HeroSection";
import { BannerSection } from "../components/homeComponents/BannerSection";
import { CategoryGrid } from "../components/homeComponents/CategoryGrid";
import { FeaturedWriters } from "../components/homeComponents/FeaturedWriters";
import { SplitFeatured } from "../components/homeComponents/SplitFeatured";
import { MixedGrid } from "../components/homeComponents/MixedGrid";
import { HighlightSection } from "../components/homeComponents/HighlightSection";
import { TrendingStories } from "../components/homeComponents/TrendingStories";

import articleData from "../public/data/articles.json";
import authorsPageData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

export default function Home() {
  // All data processing stays here (server-side)
  const getAllLatestArticles = () => {
    return Object.values(articleData)
      .flat()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const latestArticles = getAllLatestArticles().slice(0, 4);

  const businessArticles = Object.values(articleData)
    .flat()
    .filter((article) => article.category === "business" && !latestArticles.includes(article))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const getArticlesByCategory = (category) => {  // Removed TypeScript type annotation
    const key = category.toLowerCase();
    return articleData[key] || [];
  };

  const getAuthorByCategory = (category) => {  // Removed TypeScript type annotation
    const author = authorsPageData.categories.find(
      (cat) => cat.category.toLowerCase() === category.toLowerCase()
    )?.author;
    return author || {};
  };

  const articlesInLatestOrder = getAllLatestArticles();

  const featuredStoryData = articlesInLatestOrder.filter(
    (article) =>
      !latestArticles.some((a) => a.slug === article.slug) &&
      !businessArticles.some((a) => a.slug === article.slug)
  );

  // Group and select 2 articles from different categories for SplitFeatured
  const articlesByCategory = {};
  featuredStoryData.forEach((article) => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  const selectedArticles = [];
  const categories = Object.keys(articlesByCategory);
  for (let i = 0; i < categories.length && selectedArticles.length < 2; i++) {
    const catArticles = articlesByCategory[categories[i]];
    if (catArticles.length > 0) selectedArticles.push(catArticles[0]);
  }

  // MixedGrid (3 articles)
  const excludedForMixed = [...latestArticles, ...businessArticles, ...selectedArticles];
  const filteredForMixed = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForMixed.some((e) => e.slug === a.slug));

  const mixedByCategory = {};
  filteredForMixed.forEach((a) => {
    if (!mixedByCategory[a.category]) mixedByCategory[a.category] = [];
    mixedByCategory[a.category].push(a);
  });

  const selectedForMixed = [];
  const mixedCats = Object.keys(mixedByCategory);
  for (let i = 0; i < mixedCats.length && selectedForMixed.length < 3; i++) {
    const arts = mixedByCategory[mixedCats[i]];
    if (arts.length > 0) selectedForMixed.push(arts[0]);
  }

  // HighlightSection (5 articles)
  const excludedForHighlight = [...latestArticles, ...businessArticles, ...selectedArticles, ...selectedForMixed];
  const filteredForHighlight = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForHighlight.some((e) => e.slug === a.slug));

  const highlightByCategory = {};
  filteredForHighlight.forEach((a) => {
    if (!highlightByCategory[a.category]) highlightByCategory[a.category] = [];
    highlightByCategory[a.category].push(a);
  });

  const selectedForHighlight = [];
  const highlightCats = Object.keys(highlightByCategory);
  for (let i = 0; i < highlightCats.length && selectedForHighlight.length < 5; i++) {
    const arts = highlightByCategory[highlightCats[i]];
    if (arts.length > 0) selectedForHighlight.push(arts[0]);
  }

  // TrendingStories (remaining articles)
  const excludedForTrending = [...excludedForHighlight, ...selectedForHighlight];
  const filteredForTrending = Object.values(articleData)
    .flat()
    .filter((a) => !excludedForTrending.some((e) => e.slug === a.slug));

  const trendingByCategory = {};
  filteredForTrending.forEach((a) => {
    if (!trendingByCategory[a.category]) trendingByCategory[a.category] = [];
    trendingByCategory[a.category].push(a);
  });

  const selectedForTrending = [];
  const trendingCats = Object.keys(trendingByCategory);
  for (let i = 0; i < trendingCats.length && selectedForTrending.length < 6; i++) {
    const arts = trendingByCategory[trendingCats[i]];
    if (arts.length > 0) selectedForTrending.push(arts[0]);
  }
  // Keep more if needed for "Show More"

  const remainingTrending = filteredForTrending.filter(
    (a) => !selectedForTrending.some((s) => s.slug === a.slug)
  );

  const allTrendingArticles = [...selectedForTrending, ...remainingTrending.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 min-h-screen bg-white font-serif">
      <HeroSection latestArticles={latestArticles} getAuthorByCategory={getAuthorByCategory} />

      <BannerSection />

      <CategoryGrid businessArticles={businessArticles} />

      <FeaturedWriters authorsPageData={authorsPageData} getArticlesByCategory={getArticlesByCategory} slugify={slugify} />

      <SplitFeatured selectedArticles={selectedArticles} getAuthorByCategory={getAuthorByCategory} />

      <MixedGrid articles={selectedForMixed} />

      <HighlightSection articles={selectedForHighlight} getAuthorByCategory={getAuthorByCategory} />

      <TrendingStories articles={allTrendingArticles} />
    </main>
  );
}
