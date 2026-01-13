import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";

export function CategoryGrid({ businessArticles }) {
  return (
    <section className="mt-16">
      <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">BUSINESS</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {businessArticles.map((item, index) => (
          <Link key={index} href={`${item.category}/${item.slug}`} title={item.title}>
            <article className="space-y-4 group relative cursor-pointer">
              <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden">
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white">
                  {item.category.toUpperCase()}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                {item.excerpt.length > 100 ? `${item.excerpt.slice(0, 100)}...` : item.excerpt}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500">
                <div className="flex items-center gap-1"><GoClock /><span>{item.date}</span></div>
                <div className="flex items-center gap-2"><LuAlarmClock /><span>{item.readTime}</span></div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}