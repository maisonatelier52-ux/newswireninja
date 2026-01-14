import Image from "next/image";
import Link from "next/link";

export function FeaturedWriters({ authorsPageData, getArticlesByCategory, slugify }) {
  return (
    <section className="mt-20 bg-[#eef3f6] py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-2xl sm:text-3xl font-bold mb-12">Featured Writers</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {authorsPageData.categories.slice(0, 4).map(({ category, author }, index) => {
            const articleCount = getArticlesByCategory(category).length;
            return (
              <div key={index} className="flex flex-col items-center border border-gray-300 bg-[#eef3f6] px-6 py-10 text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full mb-4">
                  <Image src={author.profileImage} alt={author.name} fill className="object-cover" />
                </div>
                <p className="text-sm text-gray-500">{author.role} / {articleCount} Articles</p>
                <Link href={`/authors/${slugify(author.name)}`} title={author.name}>
                  <h3 className="mt-2 font-serif text-lg font-semibold cursor-pointer hover:text-blue-600 hover:underline">
                    {author.name}
                  </h3>
                </Link>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">{author.bio.slice(0,90)}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/authors" title="view all authors">
            <button className="bg-transparent text-black py-2 px-8 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer border border-gray-400">
              View All Authors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}