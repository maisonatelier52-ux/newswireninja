import Image from "next/image";
import Link from "next/link";
import { LuAlarmClock } from "react-icons/lu";

export function SplitFeatured({ selectedArticles, getAuthorByCategory }) {
  if (selectedArticles.length < 2) return null;

  return (
    <section className="mt-20 border-b border-gray-300 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
          {/* Left */}
          <Link href={`${selectedArticles[0].category}/${selectedArticles[0].slug}`} title={selectedArticles[0].title}>
            <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
              <div className="relative h-64 sm:h-80 md:h-130 w-full overflow-hidden">
                <Image src={selectedArticles[0].image} alt={selectedArticles[0].imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-block w-fit bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {selectedArticles[0].category.toUpperCase()}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight group-hover:text-blue-400 group-hover:underline group-hover:underline-offset-4">
                  {selectedArticles[0].title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-700">{selectedArticles[0].excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span>By <span className="font-medium text-black">{getAuthorByCategory(selectedArticles[0].category)?.name}</span></span>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1"><LuAlarmClock /><span>{selectedArticles[0].readTime}</span></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Right */}
          <Link href={`${selectedArticles[1].category}/${selectedArticles[1].slug}`} title={selectedArticles[1].title}>
            <div className="group relative lg:border-l lg:border-gray-300 lg:pl-8 cursor-pointer">
              <div className="space-y-4">
                <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
                  <Image src={selectedArticles[1].image} alt={selectedArticles[1].imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 bg-blue-600 px-3 py-1 text-xs font-semibold text-white z-10">
                    {selectedArticles[1].category.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold leading-snug group-hover:text-blue-400 group-hover:underline group-hover:underline-offset-4">
                  {selectedArticles[1].title}
                </h3>
                <p className="text-sm text-gray-700">{selectedArticles[1].excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <LuAlarmClock /><span>{selectedArticles[1].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}