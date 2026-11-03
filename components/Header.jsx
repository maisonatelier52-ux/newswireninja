"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef, useMemo } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { LuInstagram } from "react-icons/lu";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import categoryData from "../public/data/articles.json";

const NAVY = "#0a1a3a";
const BLUE = "#2563eb";

const topLinks = [
  { name: "About", href: "/about-newswireninja" },
  { name: "Contact", href: "/contact" },
];

const moreLinks = [
  { name: "Our Writers", href: "/authors" },
  { name: "Advertise", href: "/advertising-policy" },
  { name: "Editorial Policy", href: "/editorial-policy" },
  { name: "Corrections Policy", href: "/corrections-policy" },
  { name: "Source Methodology", href: "/source-methodology" },
  { name: "Ownership & Funding", href: "/ownership-funding" },
  { name: "Right of Reply", href: "/right-of-reply" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/newswireninja_26/",
    Icon: LuInstagram,
  },
  { name: "X", href: "https://x.com/NNews80653", Icon: FaXTwitter },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/Newswire_Ninja_news/",
    Icon: FaRedditAlien,
  },
  {
    name: "Substack",
    href: "https://substack.com/@newswireninja",
    Icon: BsSubstack,
  },
  {
    name: "Medium",
    href: "https://medium.com/@newswireninja26",
    Icon: SiMedium,
  },
];

function SearchResults({ query, results, onPick, limit = 6 }) {
  if (!query.trim()) {
    return (
      <p className="px-4 py-6 text-center text-sm text-slate-500">
        Start typing to search headlines…
      </p>
    );
  }
  if (results.length === 0) {
    return (
      <p className="px-4 py-6 text-center text-sm text-slate-500">
        No results found
      </p>
    );
  }
  return (
    <ul>
      {results.slice(0, limit).map((article) => (
        <li key={`${article.category}-${article.slug}`}>
          <Link
            href={`/${article.category}/${article.slug}`}
            onClick={onPick}
            title={article.title}
            className="block border-b border-slate-100 px-4 py-3 text-left last:border-0 hover:bg-slate-50"
          >
            <span className="block text-sm font-semibold leading-snug text-slate-900">
              {article.title}
            </span>
            <span className="mt-0.5 block text-xs capitalize text-slate-500">
              {article.category}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Logo({ onClick }) {
  return (
    <Link
      href="/"
      title="Visit newswire ninja homepage"
      onClick={onClick}
      className="flex items-center gap-2.5 sm:gap-3"
    >
      <Image
        src="/newswireninja-logo.webp"
        alt="Newswire Ninja logo"
        width={169}
        height={147}
        priority
        className="h-6 w-auto shrink-0 sm:h-8"
      />
      <span
        style={{ color: NAVY }}
        className="whitespace-nowrap font-serif text-xl font-bold leading-none tracking-tight min-[400px]:text-2xl"
      >
        NEWSWIRE<span style={{ color: BLUE }}>NINJA</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchWrapRef = useRef(null);
  const searchInputRef = useRef(null);

  const categories = Object.keys(categoryData);

  const allArticles = useMemo(
    () =>
      Object.entries(categoryData).flatMap(([category, articles]) =>
        articles.map((article) => ({ ...article, category }))
      ),
    []
  );

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allArticles.filter((a) => a.title.toLowerCase().includes(q));
  }, [allArticles, searchQuery]);

  // Close search on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock page scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function resetSearch() {
    setSearchQuery("");
    setSearchOpen(false);
    setMenuOpen(false);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    const first = filteredArticles[0];
    if (first) {
      router.push(`/${first.category}/${first.slug}`);
      resetSearch();
    }
  }

  function toggleSearch() {
    if (!searchOpen) setTimeout(() => searchInputRef.current?.focus(), 0);
    setSearchOpen(!searchOpen);
  }

  const isActive = (cat) =>
    pathname === `/${cat}` || pathname.startsWith(`/${cat}/`);

  const navLinkClass = (active) =>
    `relative block px-1 py-[22px] text-[15px] font-medium transition-colors hover:text-blue-600 ${
      active ? "text-blue-600" : "text-slate-800"
    }`;

  return (
    <>
      <header className="w-full bg-white text-slate-900">
        <p className="sr-only">Newswire Ninja – Breaking News</p>

        {/* ---------- Top utility bar ---------- */}
        <div style={{ backgroundColor: NAVY }} className="text-white">
          <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="truncate font-medium" suppressHydrationWarning>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <nav
                aria-label="Utility"
                className="hidden items-center gap-3 sm:flex"
              >
                {topLinks.map((link) => (
                  <span key={link.href} className="flex items-center gap-3">
                    <span className="h-3 w-px bg-white/40" aria-hidden="true" />
                    <Link
                      href={link.href}
                      title={`Visit newswire ninja ${link.name} page`}
                      className="transition-opacity hover:opacity-70"
                    >
                      {link.name}
                    </Link>
                  </span>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3.5 text-[15px] sm:gap-5">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  title={`Follow us on ${name}`}
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Main bar ---------- */}
        <div
          ref={searchWrapRef}
          className="relative border-b border-slate-200 bg-white"
        >
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[68px]">
            <Logo />

            {/* Desktop navigation */}
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-7 xl:gap-9">
                <li>
                  <Link
                    href="/"
                    title="Visit newswire ninja homepage"
                    className={navLinkClass(pathname === "/")}
                  >
                    Home
                    {pathname === "/" && (
                      <span
                        style={{ backgroundColor: BLUE }}
                        className="absolute inset-x-0 bottom-0 h-0.5"
                      />
                    )}
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/${cat}`}
                      title={`Visit newswire ninja ${cat} page`}
                      className={`${navLinkClass(isActive(cat))} capitalize`}
                    >
                      {cat}
                      {isActive(cat) && (
                        <span
                          style={{ backgroundColor: BLUE }}
                          className="absolute inset-x-0 bottom-0 h-0.5"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                className="flex h-10 w-10 cursor-pointer items-center justify-center text-2xl text-slate-900 transition-colors hover:text-blue-600"
              >
                {searchOpen ? <HiX /> : <LiaSearchSolid />}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 cursor-pointer items-center justify-center text-2xl text-slate-900 hover:text-blue-600 lg:hidden"
              >
                <HiMenuAlt3 />
              </button>
            </div>
          </div>

          {/* Search panel */}
          {searchOpen && (
            <div className="absolute inset-x-0 top-full z-50 border-b border-slate-200 bg-white shadow-xl">
              <div className="mx-auto w-full max-w-3xl px-4 py-4 sm:px-6">
                <form
                  onSubmit={handleSearchSubmit}
                  role="search"
                  className="flex h-12 items-stretch overflow-hidden rounded-sm border border-slate-300 focus-within:border-slate-500"
                >
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news, topics…"
                    aria-label="Search news"
                    className="min-w-0 flex-1 px-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    style={{ backgroundColor: BLUE }}
                    className="flex w-12 shrink-0 cursor-pointer items-center justify-center text-xl text-white transition-opacity hover:opacity-90"
                  >
                    <LiaSearchSolid />
                  </button>
                </form>
                {searchQuery.trim() && (
                  <div className="mt-3 max-h-80 overflow-y-auto rounded-md border border-slate-200">
                    <SearchResults
                      query={searchQuery}
                      results={filteredArticles}
                      onPick={resetSearch}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= MOBILE / TABLET DRAWER ================= */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-4">
            <Logo onClick={() => setMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="shrink-0 cursor-pointer text-2xl text-slate-900"
            >
              <HiX />
            </button>
          </div>

          <div className="border-b border-slate-200 px-4 py-4">
            <form
              onSubmit={handleSearchSubmit}
              role="search"
              className="flex h-11 items-stretch overflow-hidden rounded-sm border border-slate-300 focus-within:border-slate-500"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news, topics…"
                aria-label="Search news"
                className="min-w-0 flex-1 px-3 text-sm placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                style={{ backgroundColor: BLUE }}
                className="flex w-11 shrink-0 items-center justify-center text-xl text-white"
              >
                <LiaSearchSolid />
              </button>
            </form>
            {searchQuery.trim() && (
              <div className="mt-3 max-h-64 overflow-y-auto rounded-md border border-slate-200">
                <SearchResults
                  query={searchQuery}
                  results={filteredArticles}
                  onPick={resetSearch}
                />
              </div>
            )}
          </div>

          <nav
            aria-label="Sections"
            className="border-b border-slate-200 px-4 py-3"
          >
            <ul>
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  style={pathname === "/" ? { color: BLUE } : undefined}
                  className="block border-b border-slate-100 py-3 text-base font-semibold"
                >
                  Home
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/${cat}`}
                    title={`Visit newswire ninja ${cat} page`}
                    onClick={() => setMenuOpen(false)}
                    style={isActive(cat) ? { color: BLUE } : undefined}
                    className="block border-b border-slate-100 py-3 text-base font-semibold capitalize last:border-0"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="About" className="border-b border-slate-200 px-4 py-4">
            <ul className="grid grid-cols-2 gap-x-4">
              {[...topLinks, ...moreLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.name}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-sm text-slate-700"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto px-4 py-5">
            <div className="flex items-center gap-5 text-xl text-slate-800">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${name}`}
                  title={`Follow us on ${name}`}
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}


// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { FaFacebookF, FaYoutube, FaPinterestP, } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { LiaSearchSolid } from "react-icons/lia";
// import { HiMenuAlt2, HiX } from "react-icons/hi";
// import categoryData from "../public/data/articles.json";
// import { FaQuora } from "react-icons/fa";
// import { LuInstagram } from "react-icons/lu";
// import { BsSubstack } from "react-icons/bs";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const mobileSearchRef = useRef(null);
//   const desktopSearchRef = useRef(null);

//   // Flatten all articles + attach category
//   const allArticles = Object.entries(categoryData).flatMap(([category, articles]) =>
//     articles.map((article) => ({
//       ...article,
//       category,
//     }))
//   );

//   // Filter articles
//   const filteredArticles = allArticles.filter((article) =>
//     article.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         mobileSearchRef.current &&
//         mobileSearchRef.current.contains(event.target)
//       ) return;

//       if (
//         desktopSearchRef.current &&
//         desktopSearchRef.current.contains(event.target)
//       ) return;

//       setSearchOpen(false);
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Close on Escape
//   useEffect(() => {
//     function handleEscape(e) {
//       if (e.key === "Escape") {
//         setSearchOpen(false);
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

//         <p className="sr-only">Newswire Ninja – Breaking News</p>
//         {/* Top Bar */}
//         <div className="relative mx-auto max-w-7xl px-4 py-3 lg:py-0 text-sm">
//           {/* ===== MOBILE TOP BAR ===== */}
//           <div className="flex items-center justify-between md:hidden relative">
//             <button
//               onClick={() => setMenuOpen(true)}
//               className="text-2xl cursor-pointer"
//               aria-label="Open menu"
//             >
//               <HiMenuAlt2 />
//             </button>

//             <div className="flex flex-col items-center">
//               <Link href="/" title="Visit newswire ninja homepage">
//                 <h2 className="font-serif text-xl font-bold">NEWSWIRE NINJA</h2>
//               </Link>
//               <p className="text-xs mt-1 tracking-wide">
//                 BREAKING NEWS, SWIFTLY DELIVERED
//               </p>
//             </div>

//             {/* Mobile Search Icon + Dropdown */}
//             <div ref={mobileSearchRef} className="relative">
//               <button
//                 onClick={() => setSearchOpen(!searchOpen)}
//                 className="text-2xl cursor-pointer"
//                 aria-label="Search"
//               >
//                 <LiaSearchSolid />
//               </button>

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
//                     {/* Articles */}
//                     {filteredArticles.length > 0 && (
//                       <>
//                         <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
//                           Articles
//                         </div>
//                         {filteredArticles.slice(0, 4).map((article) => (
//                           <Link
//                             key={article.slug}
//                             href={`/${article.category.toLowerCase()}/${article.slug}`}
//                             onClick={() => {
//                               setSearchOpen(false);
//                               setSearchQuery("");
//                             }}
//                             className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm hover:bg-blue-50"
//                           >
//                             <p className="font-medium">{article.title}</p>
//                             <p className="text-xs text-gray-500 capitalize">{article.category}</p>
//                           </Link>
//                         ))}
//                       </>
//                     )}

//                     {/* States */}
//                     {searchQuery && filteredArticles.length === 0 && (
//                       <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                         No results found
//                       </p>
//                     )}
//                     {!searchQuery && (
//                       <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                         Start typing to search...
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ===== DESKTOP LEFT (search + date) ===== */}
//           <div ref={desktopSearchRef} className="absolute left-4 top-10 hidden md:flex items-center gap-4 relative">
//             <button
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="text-xl cursor-pointer hover:text-gray-600"
//               title="Search"
//             >
//               <LiaSearchSolid />
//             </button>

//             {searchOpen && (
//               <div className="absolute left-0 top-full mt-3 w-96 bg-white shadow-xl border rounded-lg z-50">
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
//                   {/* Same search result rendering logic as mobile */}
//                   {filteredArticles.length > 0 && (
//                     <>
//                       <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
//                         Articles
//                       </div>
//                       {filteredArticles.slice(0, 4).map((article) => (
//                         <Link
//                           key={article.slug}
//                           href={`/${article.category.toLowerCase()}/${article.slug}`}
//                           onClick={() => {
//                             setSearchOpen(false);
//                             setSearchQuery("");
//                           }}
//                           className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm hover:bg-blue-50"
//                         >
//                           <p className="font-medium">{article.title}</p>
//                           <p className="text-xs text-gray-500 capitalize">{article.category}</p>
//                         </Link>
//                       ))}
//                     </>
//                   )}

//                   {searchQuery && filteredArticles.length === 0 && (
//                     <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                       No results found
//                     </p>
//                   )}
//                   {!searchQuery && (
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
//                 month: "short",
//                 day: "numeric",
//               })}
//             </span>
//           </div>

//           {/* ===== DESKTOP RIGHT (social) ===== */}
//           <div className="absolute right-4 top-10 hidden md:flex items-center gap-4 text-lg">
//              <a
//               href="https://www.instagram.com/newswireninja_26/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on Instagram"
//               title="Follow us on Instagram"
//               className="cursor-pointer hover:scale-90 hover:text-red-600 transition"
//             >
//               <LuInstagram />
//             </a>

//             <a
//               href="https://x.com/NNews80653"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on X"
//               title="Follow us on X (Twitter)"
//               className="cursor-pointer hover:scale-90 hover:text-gray-800 transition"
//             >
//               <FaXTwitter />
//             </a>

//             <a
//               href="https://substack.com/@newswireninja"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on Substack"
//               title="Follow us on Substack"
//               className="cursor-pointer hover:scale-90 hover:text-red-600 transition"
//             >
//               <BsSubstack />
//             </a>
//           </div>
//         </div>

//         {/* Desktop Logo */}
//         <div className="hidden md:flex flex-col items-center pt-2 pb-6">
          
//            <div className="font-serif text-5xl font-bold tracking-wide">
//             <Link href="/" title="Visit newswire ninja homepage">
//             NEWSWIRE NINJA
//             </Link>
//             </div>
          
//           <p className="text-xs md:text-base mt-1 tracking-wide">
//             BREAKING NEWS, SWIFTLY DELIVERED
//           </p>
//         </div>

//         <div className="border-t-2 border-black"></div>
//         <div className="border-t-2 border-black mt-1"></div>

//         {/* Desktop Navigation */}
//         <nav className="mx-auto max-w-7xl hidden md:block">
//           <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
//             <Link
//               href="/"
//               className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
//               title="Visit newswire ninja homepage"
//             >
//               HOME
//             </Link>
//             {Object.keys(categoryData).map((cat) => (
//               <Link
//                 key={cat}
//                 href={`/${cat}`}
//                 className="uppercase relative cursor-pointer pl-3 hover:underline before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-black"
//                 title={`Visit newswire ninja ${cat} page`}
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
//           <div className="flex items-center justify-between px-4 py-4 border-b">
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="text-2xl cursor-pointer"
//               aria-label="Close menu"
//             >
//               <HiX />
//             </button>
//             <div className="flex flex-col items-center">
//               <Link href="/" title="Visit newswire ninja homepage">
//                 <h2 className="font-serif text-xl font-bold">NEWSWIRE NINJA</h2>
//               </Link>
//               <p className="text-xs mt-1 tracking-wide">
//                 BREAKING NEWS, SWIFTLY DELIVERED
//               </p>
//             </div>
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

//           {/* Scrollable Categories */}
//           <div className="px-6 py-4 border-b overflow-x-auto no-scrollbar">
//             <div className="flex w-max gap-6 font-medium">
//               <Link
//                 href="/"
//                 className="whitespace-nowrap"
//                 title="Visit newswire ninja homepage"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 HOME
//               </Link>
//               {Object.keys(categoryData).map((cat) => (
//                 <Link
//                   key={cat}
//                   href={`/${cat}`}
//                   className="whitespace-nowrap uppercase"
//                   title={`Visit newswire ninja ${cat} page`}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Search in Mobile Menu */}
//           <div className="px-6 py-6 relative">
//             <h3 className="font-semibold mb-3">Search</h3>
//             <input
//               type="text"
//               placeholder="Search Headlines, News..."
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />

//             {searchQuery && (
//               <div className="mt-3 bg-white border rounded-lg shadow-xl max-h-96 overflow-y-auto">
//                 {/* Same logic as header dropdown */}
//                 {filteredArticles.length > 0 && (
//                   <>
//                     <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
//                       Articles
//                     </div>
//                     {filteredArticles.slice(0, 6).map((article) => (
//                       <Link
//                         key={article.slug}
//                         href={`/${article.category.toLowerCase()}/${article.slug}`}
//                         onClick={() => {
//                           setMenuOpen(false);
//                           setSearchQuery("");
//                         }}
//                         className="block px-4 py-3 hover:bg-gray-100 border-b last:border-0 text-sm"
//                         title={article.title}
//                       >
//                         <p className="font-medium">{article.title}</p>
//                         <p className="text-xs text-gray-500 capitalize">{article.category}</p>
//                       </Link>
//                     ))}
//                   </>
//                 )}

//                 {filteredArticles.length === 0 && (
//                   <p className="px-4 py-8 text-center text-gray-500 text-sm">
//                     No results found
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Categories Grid */}
//           <div className="px-6 py-6 border-t">
//             <h3 className="font-semibold mb-4">Categories</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {Object.keys(categoryData).map((cat) => (
//                 <Link
//                   key={cat}
//                   href={`/${cat}`}
//                   onClick={() => setMenuOpen(false)}
//                   className="capitalize py-2 block"
//                   title={`Visit newswire ninja ${cat} page`}
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="px-6 py-6 border-t">
//             <div className="flex gap-6 text-xl">
//              <a
//               href="https://www.instagram.com/newswireninja_26/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on Instagram"
//               title="Follow us on Instagram"
//               className="cursor-pointer hover:scale-90 hover:text-red-600 transition"
//             >
//               <LuInstagram />
//             </a>

//             <a
//               href="https://x.com/NNews80653"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on X"
//               title="Follow us on X (Twitter)"
//               className="cursor-pointer hover:scale-90 hover:text-gray-800 transition"
//             >
//               <FaXTwitter />
//             </a>

//             <a
//               href="https://substack.com/@newswireninja"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Follow us on Substack"
//               title="Follow us on Substack"
//               className="cursor-pointer hover:scale-90 hover:text-red-600 transition"
//             >
//               <BsSubstack />
//             </a>
//             </div>
//             <p className="mt-6 text-xs text-gray-500">
//               © 2024 newswire ninja News Network. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }