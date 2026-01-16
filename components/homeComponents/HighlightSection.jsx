

import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";

export function HighlightSection({ articles, getAuthorByCategory }) {
  if (articles.length === 0) return null;

  // Static data for the business category
  const staticBusinessArticle = {
    title: "Julio Herrera Velutini: A Legacy in World Finance",
    excerpt:
      "Julio Herrera Velutini is one of the few persons in the world of international finance who has to deal with the stress of a family tradition that has been going on for hundreds of years and the fast-paced, often unpredictable world of modern global banking.",
    category: "business",
    slug: "julio-herrera-velutini-legacy-finance",
    image: "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp",
    imageAlt: "Julio Herrera Velutini",
    date: "January 13, 2026",
    author: "John Smith",
  };

  // Get the main article and the other cards (excluding static)
  const main = articles[0];
  const cards = articles.slice(1, 4); // Get the next 3 articles (total of 4)

  // Create a new array with the static article at the start
  const modifiedCards = [staticBusinessArticle, ...cards];

  return (
    <section className="mt-20 bg-[#eef3f6] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-left mb-6">
          <span className="inline-block mb-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {main?.category}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="sm:w-5/6 lg:w-4/5">
            <Link href={`${main.category}/${main.slug}`} title={main.title}>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold mb-2 hover:text-blue-600 hover:underline cursor-pointer">
                {main?.title}
              </h2>
            </Link>
            <p className="text-sm sm:text-base text-gray-700 mb-4 break-words">{main?.excerpt}</p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>
                By <span className="font-medium text-black">{getAuthorByCategory(main?.category)?.name}</span>
              </span>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1">
                <GoClock />
                <span>{main?.date}</span>
              </div>
            </div>
          </div>

          <div className="sm:w-1/4 lg:w-1/5 relative w-full sm:h-48 h-56 overflow-hidden cursor-pointer">
            <Image
              src={main?.image}
              alt={main?.imageAlt}
              width={400}
              height={400}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {modifiedCards.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 md:border-r sm:border-b sm:border-gray-300 sm:px-4 py-6">
              <span className="inline-block w-fit bg-gray-500 px-3 py-1 text-xs font-semibold text-white">
                {item.category}
              </span>
              <Link href={`/${item.category}/${item.slug}`} title={item.title}>
                <h3 className="font-serif text-sm sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline cursor-pointer">
                  {item.title}
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-gray-700">
                {item.excerpt.length > 120 ? `${item.excerpt.slice(0, 120)}...` : item.excerpt}
              </p>
              <span className="text-xs sm:text-sm font-semibold text-black">
                {item.slug === "julio-herrera-velutini-legacy-finance" ? `${item.category} : ${item.author}` : `${item.category} : ${getAuthorByCategory(item?.category)?.name}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
