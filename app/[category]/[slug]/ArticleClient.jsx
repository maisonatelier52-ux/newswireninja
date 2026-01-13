// "use client";

// import Image from "next/image";
// import { GoClock } from "react-icons/go";
// import { FiShare2 } from "react-icons/fi";
// import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
// import { FaShareSquare } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
// import { SiMedium } from "react-icons/si";
// import articleData from "../../../public/data/articles.json";

// export default function ArticleDetailsPage() {

  
//   return (
//     <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
//       {/* CATEGORY */}
//       <div className="mb-4">
//         <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase">
//           World
//         </span>
//       </div>

//       {/* TITLE */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
//         Why UK Energy Prices Are Rising Much Faster Than in Europe
//       </h1>

//       {/* SUBTITLE */}
//       <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl">
//         Politics is the art of looking for trouble, finding it everywhere,
//         diagnosing it incorrectly and applying the wrong remedies
//       </p>

//       {/* AUTHOR + SHARE */}
//       <div className="mb-8 space-y-6">
//         {/* Author Info */}
//         <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//           <Image
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt="Lauren - Senior Editor"
//             width={56}
//             height={56}
//             className="rounded-full object-cover flex-shrink-0"
//           />

//           <div>
//             <p className="font-semibold text-sm">
//               Lauren{" "}
//               <span className="text-gray-500 font-normal">
//                 – Senior Editor
//               </span>
//             </p>

//             <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//               <GoClock />
//               <span>Last updated: August 21, 2022</span>
//             </div>
//           </div>
//         </div>

//         {/* Share Section (UNDER AUTHOR) */}
//         <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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

//       {/* FEATURE IMAGE */}
//       <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-10 rounded-lg overflow-hidden">
//         <Image
//           src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//           alt="UK energy prices discussion"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* ARTICLE CONTENT */}
//       <article className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto">
//         <p
//           className="
//             first-letter:text-5xl sm:first-letter:text-6xl
//             first-letter:font-bold
//             first-letter:mr-3
//             first-letter:float-left
//             first-letter:leading-none
//             first-letter:text-black
//           "
//         >
//           Good web design has visual weight, is optimized for various devices, and
//           has content that is prioritized for the medium. The most important
//           elements of a web page should have more visual weight to naturally attract
//           a visitor’s attention.
//         </p>

//         <p className="mt-5">
//           Optimization for various types of devices and resolutions plays a fundamental role in modern website design. Web page layouts should be genuinely responsive and not rely on any fixed-size elements. Web designers using fluid grids and flexible images will guarantee that a web page will render well on a variety of devices, windows, and screen sizes.
//         </p>

//         {/* QUOTE SECTION */}
//         <blockquote className="mt-12 sm:mt-20 text-center text-xl sm:text-2xl italic px-4 sm:px-20">
//           <div className="relative">
//             {/* Centered opening quote */}
//             <span className="absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl text-blue-600 font-bold">“</span>
//             <p className="px-6 font-medium">
//               Good design is making something intelligible and memorable. Great design
//               is making something memorable and meaningful.
//             </p>
//             <footer className="mt-4 text-sm text-gray-600">— Dieter Rams</footer>
//           </div>
//         </blockquote>

//         <p className="mt-5">
//           Most users search for something interesting (or useful) and clickable; as soon as some promising candidates are found, users click. If the new page doesn’t meet users’ expectations, the back button is clicked and the search process is continued.
//         </p>

//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold mt-8">A good website should be easy to navigate</h2>

//           <p className="mt-5">Not all websites are made equal. Some websites are simple, logical, and easy to use. Others are a messy hodgepodge of pages and links.</p>

//           <div className="mt-8 flex justify-center">
//             <Image
//               src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//               alt="Beautiful City View"
//               width={800}
//               height={500}
//               className="object-cover rounded-lg w-full h-auto"
//             />
//           </div>

//           <p className="mt-5">Without website navigation, your visitors can’t figure out how to find your blog, your email signup page, your product listings, pricing, contact information, or help docs.</p>
//         </div>

//         {/* TWO COLUMNS SECTION */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* LEFT COLUMN */}
//           <div className="space-y-5">
//             <p className="font-bold">
//               Quick and easy access to the content they’re after is more important for your website users than a… visually-stunning design.
//             </p>
//             <p>
//               Website navigation allows visitors to flow from one page to another without frustration. If you’ve done your job well, visitors leave your site with the intention to return and might even buy something from you or sign up for your email list.
//             </p>
//             <p className="italic">
//               Bad navigation is an especially common problem. We’ve all struggled to find things on disorganized websites without any logical structure. It feels hopeless.
//             </p>
//           </div>

//           {/* RIGHT COLUMN - MORE READ CARD */}
//           <div className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//               More Read
//             </h2>

//             <div className="flex items-center mt-4 gap-4 p-5">
//               <div className="w-1/3">
//                 <Image
//                   src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//                   alt="Article Image"
//                   width={100}
//                   height={50}
//                   className="object-cover rounded-md w-full h-auto"
//                 />
//               </div>
//               <div className="w-2/3">
//                 <h3 className="text-sm font-semibold text-gray-900">
//                   Coronavirus Resurgence Could Cause Major Problems for Presidential Election
//                 </h3>
//               </div>
//             </div>

//             <hr className="my-6 border-t border-gray-300" />

//             <div className="space-y-6">
//               {[1, 2, 3, 4].map((item, index) => (
//                 <div key={index} className="flex items-center border-b border-gray-300 gap-3 py-1">
//                   <FaPlus className="text-gray-500 flex-shrink-0" />
//                   <h4 className="text-sm text-gray-700">
//                     Example Heading for Item {item}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Repeated sections with responsive images */}
//         <p className="mt-8">
//           Using “complex large pictures”. Because a carousel generally carries a lot of picture messages, complex large pictures result in low performance and “slow loading rate” of the sites, especially those whose first homepages are occupied by high-resolution carousels.
//         </p>

//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold mt-8">Creating visual rhythms in your layouts</h2>
//           <p className="mt-5">In design, rhythm is created by simply repeating elements in predictable patterns. This repetition is a natural thing that occurs everywhere in our world. As people, we are driven everyday by predictable, timed events.</p>

//           <p className="mt-5">One of the best ways to use repetition and rhythm in web design is in the site’s navigation menu. A consistent, easy-to-follow pattern—in color, layout, etc. Gives users an intuitive roadmap to everything you want to share on your site.</p>
//           <p className="mt-5">Rhythm also factors into the layout of content. For example, you “might have” blog articles, press releases, and events each follow their own certain layout pattern.</p>
//         </div>

//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold mt-8">Creating visual rhythms in your layouts</h2>
//           <p className="mt-5">In design, rhythm is created by simply repeating elements in predictable patterns. This repetition is a natural thing that occurs everywhere in our world. As people, we are driven everyday by predictable, timed events.</p>
//           <p className="mt-5">The size and position of elements in a composition will determine its balance. An unbalanced design generates tension, which may be the goal in many design projects, but for web apps that demand repeated comfortable use, tension is not a desirable trait.</p>
//         </div>

//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold mt-8">Ensure that interactive elements are easy to identify</h2>
//           <p className="mt-5">Good design guides the user by communicating purpose and priority. For that reason, every part of the design should be based on an “informed decision” rather than an arbitrary result of personal taste or the current trend.</p>

//           <div className="mt-8 flex justify-center">
//             <Image
//               src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//               alt="Beautiful City View"
//               width={800}
//               height={500}
//               className="object-cover rounded-lg w-full h-auto"
//             />
//           </div>

//           <p className="mt-5">Provide distinct styles for interactive elements, such as links and buttons, to make them easy to identify. For example, “change the appearance of links” on mouse hover, “keyboard focus”, and “touch-screen activation”.</p>
//         </div>

//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold mt-8">Breaking down the barriers</h2>
//           <p className="mt-5"><span className="font-bold">Design is not the end-all solution to all of the worlds problems</span> — but with the right thinking and application, it can definitely be a good beginning to start tackling them.</p>
//         </div>

//         {/* BOTTOM SHARE SECTION */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-300" />
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
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
//           <hr className="border-t-2 border-dotted border-gray-300" />
//           <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-6">
//             <div className="flex items-center gap-4">
//               <Image
//                 src="https://randomuser.me/api/portraits/men/45.jpg"
//                 alt="Lauren - Senior Editor"
//                 width={56}
//                 height={56}
//                 className="rounded-full object-cover flex-shrink-0"
//               />
//               <div>
//                 <p className="font-semibold text-sm">Lauren</p>
//                 <p className="text-gray-500 text-xs">Senior Editor</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               <span className="text-sm text-gray-600">Follow:</span>
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
//             A senior editor for The Mars that left the company to join the team of Foxiz as a news editor and content creator. An artist...
//           </p>
//         </div>

//         {/* PREVIOUS / NEXT ARTICLES */}
//         <div className="mt-10">
//           <hr className="border-t-2 border-dotted border-gray-300" />
//           <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Previous Article */}
//             <div className="flex flex-col items-start gap-4">
//               <span className="text-sm text-gray-600">Previous Article</span>
//               <div className="flex flex-col sm:flex-row items-start gap-4 hover:text-blue-600 cursor-pointer transition">
//                 <Image
//                   src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//                   alt="Previous Article Image"
//                   width={100}
//                   height={100}
//                   className="object-cover rounded-lg flex-shrink-0"
//                 />
//                 <h3 className="text-sm font-semibold">White House Reminds Lawmakers not to Travel to Afghanistan</h3>
//               </div>
//             </div>

//             {/* Next Article */}
//             <div className="flex flex-col items-end gap-4 text-right">
//               <span className="text-sm text-gray-600">Next Article</span>
//               <div className="flex flex-col sm:flex-row-reverse items-start gap-4 hover:text-blue-600 cursor-pointer transition">
//                 <Image
//                   src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
//                   alt="Next Article Image"
//                   width={100}
//                   height={100}
//                   className="object-cover rounded-lg flex-shrink-0"
//                 />
//                 <h3 className="text-sm font-semibold">Garmin Venu Review: Solid Fitness Tracker with Smartwatch Finesse</h3>
//               </div>
//             </div>
//           </div>

//           <hr className="border-t-2 border-dotted border-gray-300 mt-10" />
//         </div>
//       </article>
//     </main>
//   );
// }



"use client";

import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import articleData from "../../../public/data/articles.json";
import Link from "next/link";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";

export default function ArticleClient({ category, slug }) {

  const categoryPosts = articleData[category] || [];
   const article = categoryPosts.find((item) => item.slug === slug);
   
    const authorData =
       authorsPageData.categories.find(
         (item) => item.category.toLowerCase() === category.toLowerCase()
       )?.author;

       const rawQuote = article.quote || "";

// Split on the em dash (—)
  const [quoteText, quoteAuthor] = rawQuote.split(" — ");
   

     if (!article) {
    return (
      <div className="p-10 text-center text-xl">
        ❌ Article not found: {category}/{slug}
      </div>
    );
  }

  

   const currentIndex = categoryPosts.findIndex(p => p.slug === slug);

const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
const nextPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;

 
  return (
    <main className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif">
      {/* CATEGORY */}
      <div className="mb-4">
        <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase">
          {category}
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
        {article.title}
      </h1>

      {/* SUBTITLE */}
      <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl">
       {article.excerpt}
      </p>

      {/* AUTHOR + SHARE */}
      <div className="mb-8 space-y-6">
        {/* Author Info */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt="Lauren - Senior Editor"
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
          />

          <div>
            <p className="font-semibold text-sm">
              <Link  href={`/authors/${slugify(authorData.name)}`} title={authorData.name}>
              <span className="hover:text-blue-600 hover:underline transition cursor-pointer">{authorData.name}</span>
              </Link>
              {" "}
              <span className="text-gray-500 font-normal">
                – {authorData.role}
              </span>
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock />
              <span>Last updated: {article.date}</span>
            </div>
          </div>
        </div>

        {/* Share Section (UNDER AUTHOR) */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
          {/* Share Label */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare />
            <span>Share</span>
          </div>

          {/* Social Icons */}
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
                  rounded-full border border-gray-400
                  text-gray-600
                  transition
                  hover:text-white hover:bg-black hover:border-black
                  cursor-pointer
                "
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE IMAGE */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-10 rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ARTICLE CONTENT */}
      <article className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto">
        <p
          className="
            first-letter:text-5xl sm:first-letter:text-6xl
            first-letter:font-bold
            first-letter:mr-3
            first-letter:float-left
            first-letter:leading-none
            first-letter:text-black
            text-justify
          "
        >
          {article.heropara.para1}
        </p>

        <p className="mt-5 text-justify">
           {article.heropara.para2}
        </p>

        {/* QUOTE SECTION */}
        <blockquote className="mt-12 sm:mt-20 text-center text-xl sm:text-2xl italic px-4 sm:px-20">
          <div className="relative">
            {/* Opening quote */}
            <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl text-blue-600 font-bold">
              “
            </span>

            {/* Quote text */}
            <p className="px-6 font-medium">
              {quoteText?.replace(/"/g, "")}
            </p>

            {/* Author */}
            {quoteAuthor && (
              <footer className="mt-4 text-sm text-gray-600">
                — {quoteAuthor}
              </footer>
            )}
          </div>
        </blockquote>

        <p className="mt-5 text-justify">
          {article.heropara.para3}
        </p>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle1.title}</h2>

          <p className="mt-5">{article.subtitles.subtitle1.content[0]}</p>

          <div className="mt-8 flex justify-center">
            <Image
              src={article.deatilImage}
              alt={article.deatilImageAlt}
              width={800}        // unchanged
              height={400}       // logical height
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              className="object-fit rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
            />
          </div>

          <p className="mt-5 text-justify">{article.subtitles.subtitle1.content[1]}</p>
        </div>

        {/* TWO COLUMNS SECTION */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <p className="font-bold text-justify">
              {article.subtitles.subtitle1.content[2]}
            </p>
            <p className="text-justify">
             {article.subtitles.subtitle1.content[3]}
            </p>
            <p className="italic text-justify">
             {article.subtitles.subtitle1.content[4]}
            </p>
          </div>

          {/* RIGHT COLUMN - MORE READ CARD */}
          <div className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              More Read
            </h2>

            {/* Related Articles */}
            <div className="space-y-6 mt-4">
              {categoryPosts
                .filter((item) => item.slug !== slug) // Exclude the current article
                .slice(0, 5) // Take the first 5 items
                .map((relatedPost, index) => (
                  <div key={relatedPost.slug} className="flex items-center border-b border-gray-300 gap-3 py-1">
                    {/* Show Image Only for the First Related Post */}
                    {index === 0 && (
                      <div className="w-1/3">
                        <Image
                          src={relatedPost.image} // Image of the related post
                          alt={relatedPost.imageAlt}
                          width={100}
                          height={50}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      
                    )}
                    

                    {/* Title for All Related Posts */}
                    <div className={index === 0 ? "w-2/3" : "w-full"}>
                      <Link href={`/${category}/${relatedPost.slug}`} title={relatedPost.title}>
                        <h3 className={`text-sm font-semibold ${index === 0 ? "text-gray-900 hover:text-blue-600" : "text-gray-700 hover:text-blue-600"}`}>
                          {relatedPost.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>

        {/* Repeated sections with responsive images */}
        <p className="mt-8">
           {article.subtitles.subtitle1.content[5]}
        </p>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8"> {article.subtitles.subtitle2.title}</h2>
          
           {article.subtitles.subtitle2.content.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">{paragraph}</p>
            ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle3.title}</h2>
           {article.subtitles.subtitle3.content.map((paragraph, index) => (
              <p key={index} className="mt-5 text-justify">{paragraph}</p>
            ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle4.title}</h2>
          <p className="mt-5 text-justify">{article.subtitles.subtitle3.content[0]}</p>

          <div className="mt-8 flex justify-center">
            <Image
              src={article.inlineImage}
              alt={article.inlineImageAlt}
              width={800}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              className="object-cover rounded-lg w-full h-56 sm:h-64 md:h-72 lg:h-96"
            />
          </div>

          {article.subtitles.subtitle3.content.slice(1).map((paragraph, index) => (
            <p key={index} className="mt-5 text-justify">{paragraph}</p>
          ))}
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mt-8">{article.subtitles.subtitle5.title}</h2>
           {article.subtitles.subtitle5.content.map((paragraph, index) => (
            <p key={index} className="mt-5 text-justify">
              <span className={index === 0 ? "font-bold" : ""}>{paragraph}</span>
            </p>
          ))}
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

        {/* PREVIOUS / NEXT ARTICLES */}
      <div className="mt-10">
  <hr className="border-t-2 border-dotted border-gray-400" />
  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Previous Article */}
    <div className="flex flex-col items-start gap-4">
      <span className="text-sm text-gray-600">Previous Article</span>
      <div className="flex items-center gap-4 hover:text-blue-600 cursor-pointer transition">
        {prevPost ? (
          <Link href={`/${category}/${prevPost.slug}`} title={prevPost.title}>
            <div className="flex items-center gap-4">
              <Image
                src={prevPost.image}
                alt={prevPost.imageAlt}
                width={100}
                height={100}
                className="object-cover rounded-lg flex-shrink-0"
              />
              <h3 className="text-sm font-semibold">{prevPost.title}</h3>
            </div>
          </Link>
        ) : (
          <p className="text-sm text-gray-500">No Preview post</p>
        )}
      </div>
    </div>

    <hr className="my-6 border-t border-gray-300 lg:hidden" />

    {/* Next Article */}
    <div className="flex flex-col items-end gap-4 text-right">
      <span className="text-sm text-gray-600">Next Article</span>
      <div className="flex items-center gap-4 sm:flex-row-reverse hover:text-blue-600 cursor-pointer transition">
        {nextPost ? (
          <Link href={`/${category}/${nextPost.slug}`} title={nextPost.title}>
            <div className="flex items-center gap-4">
              <Image
                src={nextPost.image}
                alt={nextPost.imageAlt}
                width={100}
                height={100}
                className="object-cover rounded-lg flex-shrink-0"
              />
              <h3 className="text-sm font-semibold">{nextPost.title}</h3>
            </div>
          </Link>
        ) : (
          <p className="text-sm text-gray-500">No next post</p>
        )}
      </div>
    </div>
  </div>

  <hr className="border-t-2 border-dotted border-gray-400 mt-10" />
</div>

      </article>
    </main>
  );
}