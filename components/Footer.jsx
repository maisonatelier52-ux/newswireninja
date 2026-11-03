"use client";

import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import categoryData from "../public/data/articles.json";

const NAVY = "#0a1a3a";

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

const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-and-conditions" },
  { name: "Contact", href: "/contact" },
];

const policyLinks = [
  { name: "About Us", href: "/about-newswireninja" },
  { name: "Our Writers", href: "/authors" },
  { name: "Advertise", href: "/advertising-policy" },
  { name: "Editorial Policy", href: "/editorial-policy" },
  { name: "Corrections Policy", href: "/corrections-policy" },
  { name: "Source Methodology", href: "/source-methodology" },
  { name: "Ownership & Funding", href: "/ownership-funding" },
  { name: "Right of Reply", href: "/right-of-reply" },
  { name: "Legal", href: "/legal" },
];

// Article dates are stored as dd/mm/yyyy
function parseDate(str) {
  if (!str) return new Date(0);
  if (str.includes("/")) {
    const [day, month, year] = str.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(str);
}

function formatDate(str) {
  const d = parseDate(str);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Footer() {
  const categories = Object.keys(categoryData);
  const year = new Date().getFullYear();

  const latest = Object.entries(categoryData)
    .flatMap(([category, articles]) =>
      articles.map((a) => ({ ...a, category }))
    )
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 2);

  const linkClass = "text-sm text-slate-200 transition-colors hover:text-white";

  return (
    <footer className="mt-16 w-full text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div style={{ backgroundColor: NAVY }}>
        <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-10 sm:px-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.4fr] lg:gap-x-10">
            {/* ---------- Brand ---------- */}
            <div className="col-span-2 lg:col-span-1">
              <Link
                href="/"
                title="newswireninja home page"
                className="flex items-center gap-3"
              >
                <Image
                  src="/newswireninja-logo-white.webp"
                  alt="Newswire Ninja logo"
                  width={169}
                  height={147}
                  className="h-7 w-auto shrink-0 sm:h-8"
                />
                <span className="whitespace-nowrap font-serif text-xl font-bold leading-none tracking-tight min-[400px]:text-2xl">
                  NEWSWIRE<span style={{ color: "#4f86f7" }}>NINJA</span>
                </span>
              </Link>
              <p className="mt-4 font-serif text-base font-bold">
                Trusted News. Real Stories.
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-200">
                Delivering the latest news and insights from around the world.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Follow us on ${name}`}
                    aria-label={`Follow us on ${name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg transition-opacity hover:opacity-80"
                    style={{ color: NAVY }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* ---------- Quick Links ---------- */}
            <nav aria-label="Quick links">
              <h3 className="font-serif text-base font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/" title="Newswire Ninja home" className={linkClass}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-newswireninja" title="About Us" className={linkClass}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/authors" title="Our Writers" className={linkClass}>
                    Our Writers
                  </Link>
                </li>
                <li>
                  <Link href="/advertising-policy" title="Advertise" className={linkClass}>
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="/contact" title="Contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ---------- Categories ---------- */}
            <nav aria-label="Categories">
              <h3 className="font-serif text-base font-bold">Categories</h3>
              <ul className="mt-4 space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/${cat}`}
                      title={`Visit newswire ninja ${cat} page`}
                      className={`${linkClass} capitalize`}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ---------- Latest News ---------- */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-serif text-base font-bold">Latest News</h3>
              <ul className="mt-4 space-y-5">
                {latest.map((post) => (
                  <li key={`${post.category}-${post.slug}`} className="flex gap-3">
                    <Link
                      href={`/${post.category}/${post.slug}`}
                      title={post.title}
                      className="relative block h-[60px] w-[66px] shrink-0 overflow-hidden rounded-sm bg-white/10"
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="66px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="min-w-0">
                      <Link
                        href={`/${post.category}/${post.slug}`}
                        title={post.title}
                        className="line-clamp-3 text-[13px] font-medium leading-snug text-white transition-colors hover:text-blue-300"
                      >
                        {post.title}
                      </Link>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                        <FiClock aria-hidden="true" />
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Policy links (editorial transparency) ---------- */}
          <nav
            aria-label="Policies"
            className="mt-10 border-t border-white/10 pt-5"
          >
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.name}
                    className="text-xs text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row sm:px-6">
            <p className="text-center text-slate-200 sm:text-left">
              © {year} NewsWire Ninja. All rights reserved.
            </p>
            <ul className="flex items-center">
              {bottomLinks.map((link, i) => (
                <li key={link.href} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2 text-slate-500" aria-hidden="true">
                      |
                    </span>
                  )}
                  <Link
                    href={link.href}
                    title={link.name}
                    className="text-slate-200 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaPinterestP,
//   FaInstagram,
// } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
// import articleData from "../public/data/articles.json";
// import { SiMedium } from "react-icons/si";
// import { FaRedditAlien } from "react-icons/fa";
// import { FaQuora } from "react-icons/fa";
// import { BsSubstack } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";
// import { LuInstagram } from "react-icons/lu";
// import React from "react";

// const topLinks = [
//   { name: "About Us", href: "/about" },
//   { name: "Our Team", href: "/authors" },
//   { name: "Contact Us", href: "/contact" },
//   { name: "Editorial Policy", href: "/editorial-policy" },
//   { name: "Corrections Policy", href: "/corrections-policy" },
//   { name: "Source Methodology", href: "/source-methodology" },
// ];

// const bottomLinks = [
//   { name: "Ownership & Funding", href: "/ownership-funding" },
//   { name: "Advertising Policy", href: "/advertising-policy" },
//   { name: "Right of Reply", href: "/right-of-reply" },
//   { name: "Legal", href: "/legal" },
//   { name: "Privacy Policy", href: "/privacy-policy" },
//   { name: "Terms & Conditions", href: "/terms-and-conditions" },
// ];

// export default function Footer() {

//   // 1️⃣ Get all articles
//   const allArticles = Object.values(articleData).flat();

//   // 2️⃣ Recent Posts → latest by date
//   const recentPosts = [...allArticles]
//     .sort((a, b) => new Date(b.date) - new Date(a.date))
//     .slice(0, 3);

//   // 3️⃣ Popular Posts → different categories, excluding recent
//   const excludedSlugs = new Set(recentPosts.map(a => a.slug));

//   const popularByCategory = {};
//   allArticles.forEach(article => {
//     if (!excludedSlugs.has(article.slug)) {
//       if (!popularByCategory[article.category]) {
//         popularByCategory[article.category] = [];
//       }
//       popularByCategory[article.category].push(article);
//     }
//   });

//   const popularPosts = [];
//   Object.keys(popularByCategory).forEach(cat => {
//     if (popularPosts.length < 3 && popularByCategory[cat].length > 0) {
//       popularPosts.push(popularByCategory[cat][0]);
//     }
//   });

//   return (
//     <footer className="bg-black text-white mt-20 relative">
//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 lg:py-16">

//         {/* ================= MAIN GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

//           {/* ================= COLUMN 1 ================= */}
//           <div>
//             {/* Heading */}
//             <div className="text-2xl font-bold mb-4">
//               <Link href={'/'} title="newswireninja home page">Newswire Ninja</Link>
//             </div>

//             {/* Description */}
//             <p className="text-gray-400 text-sm leading-10 max-w-md text-justify">
//               NEWSWIRENINJA is powered by a network of experienced journalists, analysts, and subject-matter experts
//               who are obsessed with getting the story right.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4 text-lg mt-6">
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/newswireninja_26/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Follow us on Instagram"
//                 aria-label="Follow us on Instagram"
//                 className="h-8 w-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <LuInstagram />
//               </a>

//               {/* Twitter / X */}
//               <a
//                 href="https://x.com/NNews80653"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Follow us on X (Twitter)"
//                 aria-label="Follow us on X"
//                 className="h-8 w-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <FaXTwitter />
//               </a>

//               {/* Reddit */}
//               <a
//                 href="https://www.reddit.com/user/Newswire_Ninja_news/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Follow us on Reddit"
//                 aria-label="Follow us on Reddit"
//                 className="h-8 w-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <FaRedditAlien />
//               </a>

//               {/* Substack */}
//               <a
//                 href="https://substack.com/@newswireninja"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Follow us on Substack"
//                 aria-label="Follow us on Substack"
//                 className="h-8 w-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <BsSubstack />
//               </a>

//               {/* Medium */}
//               <a
//                 href="https://medium.com/@newswireninja26"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title="Follow us on Medium"
//                 aria-label="Follow us on Medium"
//                 className="h-8 w-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-white hover:text-black transition"
//               >
//                 <SiMedium />
//               </a>
//             </div>
//           </div>

//           {/* ================= COLUMN 2 ================= */}
//           <div>
//             <h3 className="text-md font-bold tracking-[4px] uppercase mb-8">
//               RECENT POSTS
//             </h3>

//             <ul className="space-y-6">
//               {recentPosts.map(post => (
//                 <li key={post.slug} className="flex gap-3 items-start">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     width={80}
//                     height={55}
//                     className="object-cover rounded flex-shrink-0"
//                   />
//                   <Link
//                     href={`/${post.category}/${post.slug}`}
//                     className="text-[13px] leading-5 hover:text-red-500 transition-colors duration-300"
//                     title={post.title}
//                   >
//                     {post.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= COLUMN 3 ================= */}
//           <div>
//             <h3 className="text-md font-bold tracking-[4px] uppercase mb-8">
//               POPULAR POSTS
//             </h3>

//             <ul className="space-y-6">
//               {popularPosts.map(post => (
//                 <li key={post.slug} className="flex gap-3 items-start">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     width={80}
//                     height={55}
//                     className="object-cover rounded flex-shrink-0"
//                   />
//                   <Link
//                     href={`/${post.category}/${post.slug}`}
//                     className="text-[13px] leading-5 hover:text-red-500 transition-colors duration-300"
//                     title={post.title}
//                   >
//                     {post.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* ================= FOOTER NAVIGATION SECTION ================= */}
//         <div className="border-t border-gray-700 mt-16 pt-3">
//           <nav aria-label="Footer Navigation" className="mx-auto mt-8">
            
//             {/* DESKTOP LAYOUT - Two rows with separators */}
//             <div className="hidden md:block text-center text-[14px] text-gray-400">
//               {/* First Row */}
//               <div className="flex justify-center items-center flex-wrap">
//                 {topLinks.map((link, index) => (
//                   <React.Fragment key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="hover:text-white transition-colors duration-200"
//                       title={link.name}
//                     >
//                       {link.name}
//                     </Link>
//                     {index !== topLinks.length - 1 && (
//                       <span className="mx-4 text-gray-600">|</span>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>

//               {/* Second Row */}
//               <div className="flex justify-center items-center flex-wrap mt-3">
//                 {bottomLinks.map((link, index) => (
//                   <React.Fragment key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="hover:text-white transition-colors duration-200"
//                        title={link.name}
//                     >
//                       {link.name}
//                     </Link>
//                     {index !== bottomLinks.length - 1 && (
//                       <span className="mx-4 text-gray-600">|</span>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>

//             {/* MOBILE LAYOUT - Single centered column */}
//             <div className="md:hidden flex flex-col items-center gap-3 text-[13px] text-gray-400">
//               {[...topLinks, ...bottomLinks].map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="hover:text-white transition-colors duration-200"
//                    title={link.name}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         </div>

//         {/* ================= COPYRIGHT ================= */}
//         <div className="border-t border-gray-700 mt-8 pt-6">
//           <div className="text-center text-xs text-gray-500">
//             © Newswire Ninja News Network. All Rights Reserved.
//           </div>
//         </div>
//       </div>

//       {/* ================= SCROLL TO TOP ================= */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center bg-gray-300 text-black hover:bg-gray-200 transition cursor-pointer rounded-lg"
//         aria-label="Scroll to top"
//       >
//         <FaArrowUp />
//       </button>
//     </footer>
//   );
// }