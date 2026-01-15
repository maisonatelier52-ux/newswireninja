

// "use client";

// import Link from "next/link";
// import { FiMonitor, FiSmartphone } from "react-icons/fi";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { MdFastfood } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";
// import categoryData from "../public/data/articles.json";
// import authorsData from "../public/data/authors.json";
// import { slugify } from "../utils/slugify";

// export default function Footer() {
//   return (
//     <footer className="mt-20 bg-white relative mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="border-t border-gray-800"></div>
//          <div className="border-t-4 border-black mt-1"></div>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">

//         {/* ================= TOP HEADING ================= */}
//         <Link href={'/'} title="newswireninja home page">
//         <h2 className="font-serif text-3xl font-bold mb-12">
//          NEWSWIRE NINJA
//         </h2>
//         </Link>

//         {/* ================= FOOTER GRID ================= */}
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

//           {/* NEWS */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">News</h4>
//             <ul className="space-y-3 text-sm">
//                {Object.keys(categoryData).map((cat) => (
//                   <li key={cat} className="py-2 hover:underline">
//                     <Link href={`/${cat}`}>{cat}</Link>
//                   </li>
//                 ))}
//             </ul>
//           </div>

//           {/* TECHNOLOGY */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">Technology</h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link href="#">Innovate</Link></li>
//               <li><Link href="#">Gadget</Link></li>
//               <li><Link href="#">PC Hardware</Link></li>
//               <li><Link href="#">Review</Link></li>
//               <li><Link href="#">Software</Link></li>
//             </ul>
//           </div>

//           {/* HEALTH */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">Health</h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link href="#">Medicine</Link></li>
//               <li><Link href="#">Children</Link></li>
//               <li><Link href="#">Coronavirus</Link></li>
//               <li><Link href="#">Nutrition</Link></li>
//               <li><Link href="#">Disease</Link></li>
//             </ul>
//           </div>

          

//           {/* AUTHORS */}
//          <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">Our Authors</h4>
//             <ul className="space-y-3 text-sm">
//               {authorsData.categories.map(({ category, author }) => (
//                 <li key={author.name} className="py-2 hover:underline">
//                   <Link
//                     href={`/authors/${slugify(author.name)}`}
//                     title={author.name}
//                   >
//                     {author.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//             {/* COMAPNY */}
//            <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">Company</h4>
//             <ul className="space-y-3 text-sm">
//               <Link href="/about"><li className="hover:underline py-2">About US</li></Link>
//               <Link href="/privacy-policy"><li className="hover:underline py-2">Privacy Policy</li></Link>
             
//             </ul>
//           </div>
          

//           {/* SUBSCRIBE */}
//           <div className="lg:border-l lg:border-gray-200 lg:pl-6">
//             <h4 className="mb-4 text-gray-500 font-semibold">Subscribe</h4>

//             <ul className="space-y-4 text-sm font-medium">
//               <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
//                 <FiMonitor className="text-lg" />
//                 Home Delivery
//               </li>

//               <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
//                 <FiSmartphone className="text-lg" />
//                 Digital Subscription
//               </li>

//               <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
//                 <IoGameControllerOutline className="text-lg" />
//                 Games
//               </li>

//               <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
//                 <MdFastfood className="text-lg" />
//                 Cooking
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* ================= COPYRIGHT ================= */}
//         <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
//           © Newswire ninja News Network. Ruby Design Company. All Rights Reserved.
//         </div>
//       </div>

//       {/* ================= SCROLL TO TOP ================= */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center bg-black text-white hover:bg-gray-800 transition"
//         aria-label="Scroll to top"
//       >
//         <FaArrowUp />
//       </button>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import articleData from "../public/data/articles.json";

export default function Footer() {

   // 1️⃣ Get all articles
  const allArticles = Object.values(articleData).flat();

  // 2️⃣ Recent Posts → latest by date
  const recentPosts = [...allArticles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // 3️⃣ Popular Posts → different categories, excluding recent
  const excludedSlugs = new Set(recentPosts.map(a => a.slug));

  const popularByCategory = {};
  allArticles.forEach(article => {
    if (!excludedSlugs.has(article.slug)) {
      if (!popularByCategory[article.category]) {
        popularByCategory[article.category] = [];
      }
      popularByCategory[article.category].push(article);
    }
  });

  const popularPosts = [];
  Object.keys(popularByCategory).forEach(cat => {
    if (popularPosts.length < 3 && popularByCategory[cat].length > 0) {
      popularPosts.push(popularByCategory[cat][0]);
    }
  });
  return (
    <footer className="bg-black text-white mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ================= COLUMN 1 ================= */}
          <div>
            {/* Heading */}
            <div className="text-2xl font-bold mb-4">Newswire Ninja</div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
              aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <Link href="#" className="hover:text-red-500" title="Follow us on Facebook"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-red-500" title="Follow us on Twitter"><FaTwitter /></Link>
              <Link href="#" className="hover:text-red-500" title="Follow us on Youtube"><FaYoutube /></Link>
              <Link href="#" className="hover:text-red-500" title="Follow us on Pinterest"><FaPinterestP /></Link>
              <Link href="#" className="hover:text-red-500" title="Follow us on Instagram"><FaInstagram /></Link>
            </div>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div>
           <h3 className="text-sm font-semibold tracking-widest mb-6">
              RECENT POSTS
            </h3>

          <ul className="space-y-6">
              {recentPosts.map(post => (
                <li key={post.slug} className="flex gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={40}
                    className="object-cover"
                  />
                  <Link
                    href={`/${post.category}/${post.slug}`}
                    className="text-xs leading-snug hover:text-red-500"
                    title={post.title}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6">
              POPULAR POSTS
            </h4>

            <ul className="space-y-6">
              {popularPosts.map(post => (
                <li key={post.slug} className="flex gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={60}
                    height={40}
                    className="object-cover"
                  />
                  <Link
                    href={`/${post.category}/${post.slug}`}
                    className="text-xs leading-snug hover:text-red-500"
                    title={post.title}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-gray-800 mt-16 pt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
            <li>
              <Link href="/about" className="hover:text-white" title="Visit newswire ninja about page">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white" title="Visit newswire ninja privacy-policy page">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white" title="Visit newswire ninja terms & conditions page">
                Terms & Conditions
              </Link>
            </li>
          </ul>

          {/* ================= COPYRIGHT ================= */}
          <div className="text-center text-sm text-gray-500">
            © Newswire Ninja News Network. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center bg-white text-black hover:bg-gray-200 transition cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}


