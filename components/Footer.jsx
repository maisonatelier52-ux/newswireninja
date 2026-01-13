// "use client";

// import Link from "next/link";
// import { FiMonitor, FiSmartphone } from "react-icons/fi";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { MdFastfood } from "react-icons/md";
// import { FaArrowUp } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="mt-20 bg-white relative mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="border-t border-gray-800"></div>
//          <div className="border-t-4 border-black mt-1"></div>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">

//         {/* ================= TOP HEADING ================= */}
//         <Link href={'/'} title="newswireninja home page">
//         <h2 className="font-serif text-3xl font-bold mb-12">
//          NEWSWIRENINJA
//         </h2>
//         </Link>

//         {/* ================= FOOTER GRID ================= */}
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

//           {/* NEWS */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">News</h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link href="#">Home Page</Link></li>
//               <li><Link href="#">World</Link></li>
//               <li><Link href="#">Advertise</Link></li>
//               <li><Link href="#">Complaint</Link></li>
//               <li><Link href="#">Contact</Link></li>
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

//           {/* CULTURE */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">Culture</h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link href="#">Stars</Link></li>
//               <li><Link href="#">Screen</Link></li>
//               <li><Link href="#">Culture</Link></li>
//               <li><Link href="#">Media</Link></li>
//               <li><Link href="#">Videos</Link></li>
//             </ul>
//           </div>

//           {/* MORE */}
//           <div>
//             <h4 className="mb-4 text-gray-500 font-semibold">More</h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link href="#">Fashion</Link></li>
//               <li><Link href="#">Travel</Link></li>
//               <li><Link href="#">Opinion</Link></li>
//               <li><Link href="#">Science</Link></li>
//               <li><Link href="#">Health</Link></li>
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
//           © Newswireninja News Network. Ruby Design Company. All Rights Reserved.
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
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import categoryData from "../public/data/articles.json";
import authorsData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

export default function Footer() {
  return (
    <footer className="mt-20 bg-white relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="border-t border-gray-800"></div>
         <div className="border-t-4 border-black mt-1"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">

        {/* ================= TOP HEADING ================= */}
        <Link href={'/'} title="newswireninja home page">
        <h2 className="font-serif text-3xl font-bold mb-12">
         NEWSWIRENINJA
        </h2>
        </Link>

        {/* ================= FOOTER GRID ================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

          {/* NEWS */}
          <div>
            <h4 className="mb-4 text-gray-500 font-semibold">News</h4>
            <ul className="space-y-3 text-sm">
               {Object.keys(categoryData).map((cat) => (
                  <li key={cat} className="py-2 hover:underline">
                    <Link href={`/${cat}`}>{cat}</Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* TECHNOLOGY */}
          <div>
            <h4 className="mb-4 text-gray-500 font-semibold">Technology</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Innovate</Link></li>
              <li><Link href="#">Gadget</Link></li>
              <li><Link href="#">PC Hardware</Link></li>
              <li><Link href="#">Review</Link></li>
              <li><Link href="#">Software</Link></li>
            </ul>
          </div>

          {/* HEALTH */}
          <div>
            <h4 className="mb-4 text-gray-500 font-semibold">Health</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#">Medicine</Link></li>
              <li><Link href="#">Children</Link></li>
              <li><Link href="#">Coronavirus</Link></li>
              <li><Link href="#">Nutrition</Link></li>
              <li><Link href="#">Disease</Link></li>
            </ul>
          </div>

          

          {/* AUTHORS */}
         <div>
            <h4 className="mb-4 text-gray-500 font-semibold">Our Authors</h4>
            <ul className="space-y-3 text-sm">
              {authorsData.categories.map(({ category, author }) => (
                <li key={author.name} className="py-2 hover:underline">
                  <Link
                    href={`/authors/${slugify(author.name)}`}
                    title={author.name}
                  >
                    {author.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* COMAPNY */}
           <div>
            <h4 className="mb-4 text-gray-500 font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <Link href="/about"><li className="hover:underline py-2">About US</li></Link>
              <Link href="/privacy-policy"><li className="hover:underline py-2">Privacy Policy</li></Link>
             
            </ul>
          </div>
          

          {/* SUBSCRIBE */}
          <div className="lg:border-l lg:border-gray-200 lg:pl-6">
            <h4 className="mb-4 text-gray-500 font-semibold">Subscribe</h4>

            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <FiMonitor className="text-lg" />
                Home Delivery
              </li>

              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <FiSmartphone className="text-lg" />
                Digital Subscription
              </li>

              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <IoGameControllerOutline className="text-lg" />
                Games
              </li>

              <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
                <MdFastfood className="text-lg" />
                Cooking
              </li>
            </ul>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © Newswireninja News Network. Ruby Design Company. All Rights Reserved.
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center bg-black text-white hover:bg-gray-800 transition"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

