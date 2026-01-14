import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";

export function HeroSection({ latestArticles, getAuthorByCategory }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {/* Main Feature */}
      <section className="lg:col-span-2">
        {latestArticles[0] && (
          <>
            <div className="relative h-[240px] sm:h-[320px] lg:h-[420px] w-full">
              <Image src={latestArticles[0].image} alt={latestArticles[0].imageAlt} fill priority className="object-cover" />
              <span className="absolute bottom-3 left-3 bg-blue-600 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white">
                {latestArticles[0].category.toUpperCase()}
              </span>
            </div>

            <div className="mt-5">
              <Link href={`${latestArticles[0].category}/${latestArticles[0].slug}`} title={`Read the latest article: ${latestArticles[0].title}`}>
                <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold leading-tight hover:text-blue-600 hover:underline">
                  {latestArticles[0].title}
                </h1>
              </Link>
              <p className="mt-3 text-sm sm:text-base text-gray-700">{latestArticles[0].excerpt}</p>

              <div className="mt-5 flex items-center text-xs sm:text-sm text-gray-500">
                <div className="hidden md:flex items-center gap-2 pr-3 border-r border-gray-300">
                  <div className="relative h-7 w-7 overflow-hidden rounded-full">
                    <Image src={getAuthorByCategory(latestArticles[0].category).profileImage} alt="Author" fill className="object-cover" />
                  </div>
                  <span className="font-medium text-black">{getAuthorByCategory(latestArticles[0].category).name}</span>
                </div>

                <div className="flex md:hidden items-center pr-3 border-r border-gray-300">
                  <span className="font-medium text-black">By {getAuthorByCategory(latestArticles[0].category).name}</span>
                </div>

                <div className="flex items-center gap-1 px-3 border-r border-gray-300">
                  <GoClock />
                  <span>{latestArticles[0].date}</span>
                </div>

                <div className="hidden md:flex items-center gap-1 px-3">
                  <LuAlarmClock />
                  <span>{latestArticles[0].readTime}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Sidebar */}
      <aside className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Large sidebar article */}
        {latestArticles[1] && (
            <article className="space-y-3">
              {/* ===== DESKTOP IMAGE ===== */}
              <div className="relative h-44 sm:h-56 lg:h-72 w-full hidden sm:block">
                <Image
                  src={latestArticles[1].image}
                  alt={latestArticles[1].imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ===== MOBILE LAYOUT ===== */}
              <div className="flex items-start gap-4 sm:hidden">
                <div className="flex-1">
                    <Link href={`${latestArticles[1].category}/${latestArticles[1].slug}`} title={latestArticles[1].title}>
                  <h3 className="font-serif text-base font-semibold leading-snug hover:text-blue-600 hover:underline">
                    {latestArticles[1].title}
                  </h3>
                    </Link>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <GoClock />
                    <span>{latestArticles[1].readTime}</span>
                  </div>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={latestArticles[1].image}
                    alt={latestArticles[1].imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* ===== DESKTOP CONTENT ===== */}
              <div className="hidden sm:block">
                 <Link href={`${latestArticles[1].category}/${latestArticles[1].slug}`} title={latestArticles[1].title}>
                <h3 className="font-serif text-lg sm:text-2xl font-semibold leading-snug hover:text-blue-600 hover:underline">
                  {
                    latestArticles[1].title.length>30 ?
                    `${latestArticles[1].title.slice(0,30)}...` : latestArticles[1].title
                  }
                </h3>
                 </Link>
                <p className="text-sm sm:text-base text-gray-700">
                  {latestArticles[1].excerpt}
                 
                </p>
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <GoClock />
                    <span>{latestArticles[1].readTime}</span>
                  </div>
                  {/* <span className="cursor-pointer">🔖</span> */}
                </div>
              </div>
            </article>
         )}

        {/* Right column with two smaller cards */}
        <div className="space-y-6 lg:border-l lg:border-gray-300 lg:pl-6">
          {latestArticles[2] && (
            <article>
                {/* Mobile */}
                <div className="flex items-start gap-4 sm:hidden">
                  <div className="flex-1">
                     <Link href={`${latestArticles[2].category}/${latestArticles[2].slug}`} title={latestArticles[2].title}>
                    <h4 className="font-serif text-sm font-semibold leading-snug hover:text-blue-600 hover:underline">
                         {latestArticles[2].title}
                    </h4>
                    </Link>
                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <GoClock />
                      <span>{latestArticles[2].readTime}</span>
                    </div>
                  </div>

                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={latestArticles[2].image}
                      alt={latestArticles[2].imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden sm:block space-y-2">
                  <div className="relative h-32 sm:h-28 w-full">
                    <Image
                      src={latestArticles[2].image}
                      alt={latestArticles[2].imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                   <Link href={`${latestArticles[2].category}/${latestArticles[2].slug}`} title={latestArticles[2].title}>
                  <h4 className="font-serif text-sm sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline">
                      {latestArticles[2].title}
                  </h4>
                  </Link>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <GoClock />
                      <span>{latestArticles[2].readTime}</span>
                    </div>
                    {/* <span className="cursor-pointer">🔖</span> */}
                  </div>
                </div>
              </article>
          )}
          {latestArticles[3] && (
             <article>
                {/* Mobile */}
                <div className="flex items-start gap-4 sm:hidden">
                  <div className="flex-1">
                     <Link href={`${latestArticles[3].category}/${latestArticles[3].slug}`} title={latestArticles[3].title}>
                    <h4 className="font-serif text-base font-semibold leading-snug hover:text-blue-600 hover:underline">
                       {latestArticles[3].title}
                    </h4>
                    </Link>
                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <GoClock />
                      <span>{latestArticles[3].readTime}</span>
                    </div>
                  </div>

                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={latestArticles[3].image}
                      alt={latestArticles[3].imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden sm:block space-y-2">
                  <div className="relative h-32 sm:h-28 w-full">
                    <Image
                      src={latestArticles[3].image}
                      alt={latestArticles[3].imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                   <Link href={`${latestArticles[3].category}/${latestArticles[3].slug}`} title={latestArticles[3].title}>
                  <h4 className="font-serif text-base sm:text-lg font-semibold leading-snug hover:text-blue-600 hover:underline">
                      {latestArticles[3].title}
                  </h4>
                  </Link>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <GoClock />
                      <span>{latestArticles[3].readTime}</span>
                    </div>
                    {/* <span className="cursor-pointer">🔖</span> */}
                  </div>
                </div>
              </article>
          )}
        </div>
      </aside>
    </div>
  );
}