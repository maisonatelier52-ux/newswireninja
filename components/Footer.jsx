

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


