

// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { FaFacebookF, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { LiaSearchSolid } from "react-icons/lia";
// import { HiMenuAlt2, HiX } from "react-icons/hi";
// import categoryData from "../public/data/articles.json";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const searchRef = useRef(null);

//   // Flatten all articles for search
//   const allArticles = Object.values(categoryData).flat();

//   // Filter articles based on query
//   const filteredArticles = allArticles.filter((article) =>
//     article.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Close search when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setSearchOpen(false);
//         setSearchQuery("");
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Close on Escape key
//   useEffect(() => {
//     function handleEscape(e) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
//         setSearchQuery("");
//       }
//     }
//     if (searchOpen) {
//       document.addEventListener("keydown", handleEscape);
//     }
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [searchOpen]);

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="w-full bg-white text-black mx-auto max-w-7xl px-4 sm:px-6">
//         {/* Top Bar */}
//         <div className="relative mx-auto max-w-7xl px-4 py-3 text-sm">
//           {/* ===== MOBILE TOP BAR ===== */}
//           <div className="flex items-center justify-between md:hidden relative">
//             {/* Hamburger */}
//             <button
//               onClick={() => setMenuOpen(true)}
//               className="text-2xl cursor-pointer"
//               aria-label="Open menu"
//             >
//               <HiMenuAlt2 />
//             </button>

//             {/* Title */}
//             <h2 className="font-serif text-2xl font-bold">FOXIZ</h2>

//             {/* Mobile Search */}
//             <div ref={searchRef} className="relative">
//               <button
//                 onClick={() => setSearchOpen(!searchOpen)}
//                 className="text-2xl cursor-pointer"
//                 aria-label="Search"
//               >
//                 <LiaSearchSolid />
//               </button>

//               {/* Mobile Search Dropdown */}
//               {searchOpen && (
//                 <div className="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-lg border z-50">
//                   <div className="p-4 border-b">
//                     <input
//                       type="text"
//                       placeholder="Search headlines, news..."
//                       className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       autoFocus
//                     />
//                   </div>
//                   <div className="max-h-96 overflow-y-auto">
//                     {filteredArticles.length > 0 ? (
//                       filteredArticles.slice(0, 4).map((article) => (
//                         <Link
//                           key={article.slug}
//                           href={`/${article.category.toLowerCase()}/${article.slug}`}
//                           onClick={() => {
//                             setSearchOpen(false);
//                             setSearchQuery("");
//                           }}
//                           className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm"
//                         >
//                           {article.title}
//                         </Link>
//                       ))
//                     ) : searchQuery ? (
//                       <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                         No results found
//                       </p>
//                     ) : (
//                       <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                         Start typing to search...
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ===== DESKTOP LEFT ===== */}
//           <div ref={searchRef} className="absolute left-4 top-10 hidden md:flex items-center gap-4 relative">
//             {/* Desktop Search */}
//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="text-xl cursor-pointer hover:text-gray-600"
//               title="Search"
//             >
//               <LiaSearchSolid />
//             </button>

//             {/* Desktop Search Dropdown */}
//             {searchOpen && (
//               <div className="absolute left-0 top-full mt-3 w-80 bg-white shadow-xl border rounded-lg z-50">
//                 <div className="p-4 border-b">
//                   <input
//                     type="text"
//                     placeholder="Search headlines, news..."
//                     className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     autoFocus
//                   />
//                 </div>
//                 <div className="max-h-96 overflow-y-auto">
//                   {filteredArticles.length > 0 ? (
//                     filteredArticles.slice(0, 4).map((article) => (
//                       <Link
//                         key={article.slug}
//                         href={`/${article.category.toLowerCase()}/${article.slug}`}
//                         onClick={() => {
//                           setSearchOpen(false);
//                           setSearchQuery("");
//                         }}
//                         className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm"
//                       >
//                         {article.title}
//                       </Link>
//                     ))
//                   ) : searchQuery ? (
//                     <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                       No results found
//                     </p>
//                   ) : (
//                     <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                       Start typing to search...
//                     </p>
//                   )}
//                 </div>
//               </div>
//             )}

//             <div className="border-l border-gray-500 h-6 mx-4"></div>

//             <span className="text-sm text-gray-900 font-medium">
//               {new Date().toLocaleDateString("en-US", {
//                 weekday: "long",
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//           </div>

//           {/* ===== DESKTOP CENTER LINKS ===== */}
//           <div className="hidden md:flex justify-center gap-4 font-medium">
//             <Link href="#">U.S.</Link>
//             <Link href="#">International</Link>
//             <Link href="#">Canada</Link>
//             <Link href="#">Español</Link>
//           </div>

//           {/* ===== DESKTOP RIGHT ===== */}
//           <div className="absolute right-4 top-10 hidden md:flex items-center gap-4 text-lg">
//             <FaFacebookF />
//             <FaXTwitter />
//             <FaYoutube />
//           </div>
//         </div>

//         {/* Desktop Logo */}
//         <div className="hidden md:flex justify-center py-6">
//           <h1 className="font-serif text-5xl font-bold tracking-wide">
//             THE FOXIZ TIMES
//           </h1>
//         </div>

//         <div className="border-t-2 border-black"></div>
//         <div className="border-t-2 border-black mt-1"></div>

//         {/* Desktop Navigation */}
//         <nav className="mx-auto max-w-7xl hidden md:block">
//           <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
//             <Link
//               href="/"
//               title="home page"
//               className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
//             >
//               HOME
//             </Link>

//             {Object.keys(categoryData).map((cat) => (
//               <Link
//                 key={cat}
//                 href={`/${cat}`}
//                 title={`${cat} news and analysis on`}
//                 className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
//               >
//                 {cat}
//               </Link>
//             ))}
//           </ul>
//         </nav>

//         <div className="border-t border-black"></div>
//       </header>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-white text-black overflow-y-auto">
//           {/* Mobile Header */}
//          <div className="flex items-center justify-between px-4 py-4 border-b">
//             {/* Close Button */}
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="text-2xl cursor-pointer"
//               aria-label="Close menu"
//             >
//               <HiX />
//             </button>

//             {/* Title */}
//             <h2 className="font-serif text-2xl font-bold">FOXIZ</h2>

//             {/* Date and Day */}
//             <div className="text-center">
//               <span className="block text-xs text-gray-900 font-medium">
//                 {new Date().toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "short",
//                   day: "numeric",
//                 })}
//               </span>
//               <span className="block text-xs text-gray-600 font-medium">
//                 {new Date().toLocaleDateString("en-US", { weekday: "short" })}
//               </span>
//             </div>
//           </div>


//           {/* ===== MOBILE SCROLLABLE CATEGORIES ===== */}
//           <div className="px-6 py-4 border-b overflow-x-auto no-scrollbar">
//             <div className="flex w-max gap-6 font-medium">
//               <Link
//                 href="/"
//                 title="home page"
//                 className="whitespace-nowrap"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 HOME
//               </Link>
//               {Object.keys(categoryData).map((cat) => (
//                 <Link
//                   key={cat}
//                   href={`/${cat}`}
//                   title={`${cat} news and analysis on`}
//                   className="whitespace-nowrap uppercase"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Search */}
//           <div className="px-6 py-6">
//             <h3 className="font-semibold mb-3">Search</h3>
//             <input
//               type="text"
//               placeholder="Search Headlines, News..."
//               className="w-full border px-4 py-2"
//             />
//           </div>

//           {/* Categories */}
//           <div className="px-6 py-6 border-t">
//             <h3 className="font-semibold mb-4">Categories</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.keys(categoryData).map((cat) => (
//                 <Link
//                   key={cat}
//                   href={`/${cat}`}
//                   title={`${cat} news and analysis on`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="px-6 py-6 border-t">
//             <div className="flex gap-6 text-xl">
//               <FaFacebookF />
//               <FaXTwitter />
//               <FaYoutube />
//             </div>

//             <p className="mt-6 text-xs text-gray-500">
//               © 2024 Foxiz News Network. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import categoryData from "../public/data/articles.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);

  // Flatten all articles and add category info for proper routing
  const allArticles = Object.entries(categoryData).flatMap(([category, articles]) =>
    articles.map((article) => ({
      ...article,
      category, // Attach category name to each article
    }))
  );

  // Filter articles based on query
  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close header search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        // Don't clear query here — mobile menu search uses the same state
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white text-black mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Bar */}
        <div className="relative mx-auto max-w-7xl px-4 py-3 lg:py-0 text-sm">
          {/* ===== MOBILE TOP BAR ===== */}
          <div className="flex items-center justify-between md:hidden relative">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl cursor-pointer"
              aria-label="Open menu"
            >
              <HiMenuAlt2 />
            </button>

            <div className="flex flex-col items-center">
              <Link href={'/'} title="newswireninja home page">
              <h2 className="font-serif text-xl font-bold">NEWSWIRENINJA</h2>
              </Link>
              
              <p className="text-xs mt-1 tracking-wide">
                BREAKING NEWS, SWIFTLY DELIVERED
              </p>
            </div>

            {/* Mobile Header Search Icon */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-2xl cursor-pointer"
                aria-label="Search"
              >
                <LiaSearchSolid />
              </button>

              {/* Header Search Dropdown (Mobile) */}
              {searchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-lg border z-50">
                  <div className="p-4 border-b">
                    <input
                      type="text"
                      placeholder="Search headlines, news..."
                      className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {filteredArticles.length > 0 ? (
                      filteredArticles.slice(0, 4).map((article) => (
                        <Link
                          key={article.slug}
                          href={`/${article.category.toLowerCase()}/${article.slug}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm hover:bg-blue-300"
                        >
                          <p className="font-medium">{article.title}</p>
                          <p className="text-xs text-gray-500 capitalize">
                            {article.category}
                          </p>
                        </Link>
                      ))
                    ) : searchQuery ? (
                      <p className="px-4 py-8 text-center text-gray-500 text-sm">
                        No results found
                      </p>
                    ) : (
                      <p className="px-4 py-8 text-center text-gray-500 text-sm">
                        Start typing to search...
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== DESKTOP LEFT ===== */}
          <div ref={searchRef} className="absolute left-4 top-10 hidden md:flex items-center gap-4 relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-xl cursor-pointer hover:text-gray-600"
              title="Search"
            >
              <LiaSearchSolid />
            </button>

            {/* Desktop Header Search Dropdown */}
            {searchOpen && (
              <div className="absolute left-0 top-full mt-3 w-80 bg-white shadow-xl border rounded-lg z-50">
                <div className="p-4 border-b">
                  <input
                    type="text"
                    placeholder="Search headlines, news..."
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.slice(0, 4).map((article) => (
                      <Link
                        key={article.slug}
                        href={`/${article.category.toLowerCase()}/${article.slug}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm"
                      >
                        <p className="font-medium">{article.title}</p>
                        <p className="text-xs text-gray-500 capitalize">
                          {article.category}
                        </p>
                      </Link>
                    ))
                  ) : searchQuery ? (
                    <p className="px-4 py-8 text-center text-gray-500 text-sm">
                      No results found
                    </p>
                  ) : (
                    <p className="px-4 py-8 text-center text-gray-500 text-sm">
                      Start typing to search...
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="border-l border-gray-500 h-6 mx-4"></div>

            <span className="text-sm text-gray-900 font-medium">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

        
         

          {/* ===== DESKTOP RIGHT ===== */}
          <div className="absolute right-4 top-10 hidden md:flex items-center gap-4 text-lg">
           <FaFacebookF className="cursor-pointer hover:scale-90 hover:text-blue-600" />
            <FaXTwitter className="cursor-pointer hover:scale-90 hover:text-gray-800" />
            <FaYoutube className="cursor-pointer hover:scale-90 hover:text-red-600" />
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex flex-col items-center pt-2 pb-6">
          <Link href={'/'} title="newswireninja home page">
           <h1 className="font-serif text-5xl font-bold tracking-wide">
           NEWSWIRENINJA
          </h1>
          </Link>
          <p className="text-xs md:text-base mt-1 tracking-wide">
            BREAKING NEWS, SWIFTLY DELIVERED
          
          </p>
        </div>

        <div className="border-t-2 border-black"></div>
        <div className="border-t-2 border-black mt-1"></div>

        {/* Desktop Navigation */}
        <nav className="mx-auto max-w-7xl hidden md:block">
          <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
            <Link
              href="/"
              className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
            >
              HOME
            </Link>
            {Object.keys(categoryData).map((cat) => (
              <Link
                key={cat}
                href={`/${cat}`}
                className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
              >
                {cat}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="border-t border-black"></div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-black overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl cursor-pointer"
              aria-label="Close menu"
            >
              <HiX />
            </button>
           <div className="flex flex-col items-center">
             <Link href={'/'} title="newswireninja home page">
              <h2 className="font-serif text-xl font-bold">NEWSWIRENINJA</h2>
             </Link>
              <p className="text-xs mt-1 tracking-wide">
                BREAKING NEWS, SWIFTLY DELIVERED
              </p>
            </div>
            <div className="text-center">
              <span className="block text-xs text-gray-900 font-medium">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="block text-xs text-gray-600 font-medium">
                {new Date().toLocaleDateString("en-US", { weekday: "short" })}
              </span>
            </div>
          </div>

          {/* Scrollable Categories */}
          <div className="px-6 py-4 border-b overflow-x-auto no-scrollbar">
            <div className="flex w-max gap-6 font-medium">
              <Link
                href="/"
                className="whitespace-nowrap"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
              {Object.keys(categoryData).map((cat) => (
                <Link
                  key={cat}
                  href={`/${cat}`}
                  className="whitespace-nowrap uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Search with Dropdown in Mobile Menu */}
          <div className="px-6 py-6 relative">
            <h3 className="font-semibold mb-3">Search</h3>
            <input
              type="text"
              placeholder="Search Headlines, News..."
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Dropdown Results */}
            {searchQuery && (
              <div className="absolute left-6 right-6 top-full mt-2 bg-white border rounded-lg shadow-xl z-10 max-h-96 overflow-y-auto">
                {filteredArticles.length > 0 ? (
                  filteredArticles.slice(0, 8).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/${article.category.toLowerCase()}/${article.slug}`}
                      onClick={() => {
                        setMenuOpen(false);
                        setSearchQuery("");
                      }}
                      className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm"
                    >
                      <p className="font-medium text-gray-900">{article.title}</p>
                      <p className="text-xs text-gray-500 capitalize">
                        {article.category}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-8 text-center text-gray-500 text-sm">
                    No results found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Categories Grid */}
          <div className="px-6 py-6 border-t">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(categoryData).map((cat) => (
                <Link
                  key={cat}
                  href={`/${cat}`}
                  onClick={() => setMenuOpen(false)}
                  className="capitalize"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-6 border-t">
            <div className="flex gap-6 text-xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
            </div>
            <p className="mt-6 text-xs text-gray-500">
              © 2024 Foxiz News Network. All Rights Reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

