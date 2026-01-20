

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
import { SiMedium } from "react-icons/si";
import { FaRedditAlien } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";

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
            <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
              NEWSWIRENINJA is powered by a network of experienced journalists, analysts, and subject-matter experts
              who are obsessed with getting the story right.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              {/* Quora */}
              <a
                href="https://www.quora.com/profile/Newswire-Ninja-1"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Quora"
                aria-label="Follow us on Quora"
                className="hover:text-red-500 transition"
              >
                <FaQuora />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/NewswireN29245"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on X (Twitter)"
                aria-label="Follow us on X"
                className="hover:text-red-500 transition"
              >
                <FaTwitter />
              </a>

              {/* Reddit */}
              <a
                href="https://www.reddit.com/user/Newswire_Ninja/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Reddit"
                aria-label="Follow us on Reddit"
                className="hover:text-red-500 transition"
              >
                <FaRedditAlien />
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/newswireninja/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Pinterest"
                aria-label="Follow us on Pinterest"
                className="hover:text-red-500 transition"
              >
                <FaPinterestP />
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@newswireninja_97993"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Medium"
                aria-label="Follow us on Medium"
                className="hover:text-red-500 transition"
              >
                <SiMedium />
              </a>
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
            <h3 className="text-sm font-semibold tracking-widest mb-6">
              POPULAR POSTS
            </h3>

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


