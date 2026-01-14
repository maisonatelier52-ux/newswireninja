"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";

export function TrendingStories({ articles }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => setVisibleCount(prev => prev + 2);

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-10">Trending Stories</h2>
        <div className="flex flex-wrap gap-y-10">
          {visibleArticles.map((item, index) => (
            <article key={index} className="group flex w-full flex-col sm:flex-row gap-6 sm:w-1/2 px-2">
              <div className="relative h-56 sm:h-52 lg:h-60 w-full sm:w-1/2 overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col justify-center sm:w-1/2">
                <span className="inline-block w-fit bg-blue-600 px-3 py-1 text-xs font-semibold text-white mb-2">{item.category}</span>
                <Link href={`${item.category}/${item.slug}`} title={item.title}>
                  <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-blue-600 group-hover:underline">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-gray-700">{item.excerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-500"><GoClock /><span>{item.date}</span></div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < articles.length && (
          <div className="mt-12 flex justify-center">
            <button onClick={handleShowMore} className="bg-gray-600 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none cursor-pointer"  aria-label="Show more trending stories on newswire ninja">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}