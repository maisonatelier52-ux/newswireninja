import Image from "next/image";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";

/**
 * Four-card politics row directly above Business on the homepage.
 * The first three are dynamic; the fourth is the permanently featured
 * Alina Habba article, using the original articles.json entry unchanged.
 */
export function PoliticsGrid({ politicsArticles, permanentArticle }) {
  const articles = [
    ...politicsArticles,
    ...(permanentArticle ? [permanentArticle] : []),
  ];

  if (articles.length === 0) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.includes("/")) {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return dateStr;
  };

  const shorten = (value, length) => {
    const text = value || "";
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  return (
    <section className="mt-16" aria-labelledby="home-politics-title">
      <h2
        id="home-politics-title"
        className="text-center font-serif text-2xl sm:text-3xl font-bold mb-8 sm:mb-10"
      >
        POLITICS
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((item) => (
          <Link
            key={item.slug}
            href={`/politics/${item.slug}`}
            title={item.title}
            className="group relative cursor-pointer"
          >
            <article className="space-y-4">
              <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-2 left-2 bg-blue-600 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white">
                  POLITICS
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug group-hover:text-blue-600 group-hover:underline group-hover:underline-offset-4">
                {shorten(item.title, 50)}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                {shorten(item.excerpt, 100)}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <GoClock />
                  <span>{formatDate(item.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuAlarmClock />
                  <span>{item.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
