// import { GoClock } from "react-icons/go";
// import Image from "next/image";
// import categoryData from '../public/data/articles.json'

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-serif">
//       {/* Heading and Image Section */}
//       <div className="text-center px-5 lg:px-70 lg:mt-5">
//         {/* Image centered with appropriate styling */}
//         <Image
//           src="/images/not-found-image.webp"
//           alt="Astronaut illustration"
//           width={800}
//           height={600}
//           className="mx-auto mb-8 w-full sm:w-80 md:w-96 lg:w-1/2"
//           priority
//         />
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//           Something's wrong here...
//         </h1>
//         <p className="text-gray-600 mb-6 text-sm sm:text-base">
//           It looks like nothing was found at this location. The page you were looking for does not exist or was loading incorrectly.
//         </p>
//         <a
//           href="/"
//           className="hover:text-blue-800 hover:underline bg-gray-200 p-3 rounded-lg"
//         >
//           Go back to Home
//         </a>
//       </div>

//       {/* Latest News Section */}
//       <div className="text-center mt-20">
//         <div className="flex items-center justify-center gap-2 mb-6">
//           <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Latest News</h1>
//           <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="w-full px-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((article, index) => (
//             <article
//               key={index}
//               className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group"
//             >
//               <div className="relative mb-4 overflow-hidden rounded-md">
//                <Image
//                   src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
//                   alt="Article thumbnail"
//                   width={400}
//                   height={128}
//                   className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>

//                 <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 uppercase z-10">
//                   Category
//                 </span>
//               </div>

//               <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
//                 Article Title
//               </h3>

//               <p className="text-sm text-gray-600 mb-4">
//                 Article Excerpt goes here.
//               </p>

//               <div className="flex items-center gap-2 text-sm text-gray-500">
//                 <GoClock />
//                 <span>Article Date</span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { GoClock } from "react-icons/go";
import Image from "next/image";
import categoryData from '../public/data/articles.json';
import Link from "next/link";

export default function NotFound() {
  // 1️⃣ Get all articles from categoryData and flatten them
  const allArticles = Object.values(categoryData).flat();

  // 2️⃣ Sort articles by date (most recent first)
  const sortedArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 3️⃣ Pick the latest article from each category
  const latestArticlesByCategory = {};
  sortedArticles.forEach((article) => {
    if (!latestArticlesByCategory[article.category]) {
      latestArticlesByCategory[article.category] = article;
    }
  });

  // 4️⃣ Get the first 4 latest articles from different categories
  const latestArticles = Object.values(latestArticlesByCategory).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-serif">
      {/* Heading and Image Section */}
      <div className="text-center px-5 lg:px-70 lg:mt-5">
        {/* Image centered with appropriate styling */}
        <Image
          src="/images/not-found-image.webp"
          alt="Astronaut illustration"
          width={800}
          height={600}
          className="mx-auto mb-8 w-full sm:w-80 md:w-96 lg:w-1/2"
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Something's wrong here...
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          It looks like nothing was found at this location. The page you were looking for does not exist or was loading incorrectly.
        </p>
        <a
          href="/"
          className="hover:text-blue-800 hover:underline bg-gray-200 p-3 rounded-lg"
        >
          Go back to Home
        </a>
      </div>

      {/* Latest News Section */}
      <div className="text-center mt-20">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Latest News</h1>
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestArticles.map((article, index) => (
           <Link href={`/${article.category}/${article.slug}`} title={article.title}  key={article.slug}>
            <article
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer group"
            >
              <div className="relative mb-4 overflow-hidden rounded-md">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={400}
                  height={128}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-500/40 opacity-0 group-hover:opacity-100 transition"></div>

                <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 uppercase z-10">
                  {article.category}
                </span>
              </div>

              <h3 className="font-semibold text-sm mb-3 transition group-hover:text-blue-600 group-hover:underline">
                 {article.title.length > 70 ? `${article.title.slice(0, 70)}...` : article.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {article.excerpt.length > 100 ? `${article.excerpt.slice(0, 100)}...` : article.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <GoClock />
                <span>{article.date}</span>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

