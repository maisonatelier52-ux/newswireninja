// pages/authors/[slug].js
import Image from "next/image";
import Link from "next/link";

import { GoClock } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";

import authorsData from "../../../public/data/authors.json"; 
import articlesData from "../../../public/data/articles.json"; 
import { slugify } from "../../../utils/slugify";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";


export default async function AuthorProfile({ params }) {

    const { slug } = await params;

  // Find the author by slugified name
  const authorEntry = authorsData.categories.find(
    (item) => slugify(item.author.name) === slug
  );

  if (!authorEntry) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Author not found</h1>
      </div>
    );
  }

  const { author, category } = authorEntry;

  // Get all articles from this author's category (since each category has one main author)
  const categoryKey = category.toLowerCase();
  const authorArticles = articlesData[categoryKey] || [];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 font-serif">
      {/* Hero Section */}
      <div className="mb-12 lg:mb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16 
                        bg-gradient-to-br from-blue-50 to-blue-100 
                        rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xl">
          
          {/* Circular Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 
                            mx-auto lg:mx-0">
              <Image
                src={author.profileImage}
                alt={author.name}
                fill
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
                className="object-cover rounded-full border-8 border-white shadow-2xl 
                          transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1 text-center lg:text-left order-2">
            {/* Category Badge */}
            <span className="inline-block bg-blue-600 text-white px-4 py-2 text-xs sm:text-sm font-bold 
                            rounded-full mb-4 sm:mb-6 uppercase tracking-wider">
              {category}
            </span>

            {/* Name */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 
                          mb-3 sm:mb-4 leading-tight">
              {author.name}
            </h1>

            {/* Role */}
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 opacity-90">
              {author.role}
            </p>

            {/* Bio - Responsive */}
            <div className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto lg:mx-0">
              {/* Full bio on lg+ screens */}
              <p className="hidden lg:block text-sm">{author.bio}</p>
              
              {/* Truncated on smaller screens */}
              <p className="block lg:hidden text-sm">
                {author.bio.length > 150 
                  ? `${author.bio.slice(0, 150).trim()}...` 
                  : author.bio}
              </p>
            </div>

            {/* Social Links */}
           <div className="mt-8 sm:mt-10 flex gap-5 sm:gap-6 justify-center lg:justify-start">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black hover:scale-90 transition-all duration-300 text-lg sm:text-xl"
                  aria-label={`${author.name} on Twitter`}
                >
                  <FaXTwitter />
                </a>
              )}
              {author.social.facebook && (
                <a
                  href={author.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 hover:scale-90 transition-all duration-300 text-lg sm:text-xl"
                  aria-label={`${author.name} on Facebook`}
                >
                  <FaFacebookF />
                </a>
              )}
              {author.social.linkedIn && (
                <a
                  href={author.social.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 hover:scale-90 transition-all duration-300 text-lg sm:text-xl"
                  aria-label={`${author.name} on LinkedIn`}
                >
                  <FaLinkedin />
                </a>
              )}
              {author.social.medium && (
                <a
                  href={author.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black hover:scale-90 transition-all duration-300 text-lg sm:text-xl"
                  aria-label={`${author.name} on Medium`}
                >
                  <SiMedium />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Articles by this Author */}
      <section>
        <h2 className="text-3xl font-bold mb-10">
          Articles by {author.name} ({authorArticles.length})
        </h2>

        {authorArticles.length === 0 ? (
          <p className="text-gray-600 text-center py-10">
            No articles published yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {authorArticles.map((article) => (
              <Link
                key={article.id}
                href={`/${article.category.toLowerCase()}/${article.slug}`} // Assuming you have /articles/[slug].js
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-36">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <GoClock className="text-gray-400" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuAlarmClock className="text-gray-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}