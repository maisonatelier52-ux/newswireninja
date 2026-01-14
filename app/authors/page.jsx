
import Image from "next/image";
import Link from "next/link";
import authorsData from "../../public/data/authors.json";
import articlesData from "../../public/data/articles.json";
import { slugify } from "../../utils/slugify";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import pillarContent from "../../public/data/pillarContent.json"

export default function AuthorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 min-h-screen bg-gradient-to-b from-white to-gray-50 font-serif">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Authors
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert voices bringing you insightful stories across politics,
          business, sports, travel, and more.
        </p>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {authorsData.categories.map(({ category, author }) => {
          
          const categoryKey = category.toLowerCase();
          const authorArticles = articlesData[categoryKey] || [];
          
          // Check if the category is 'Marketing & Branding' and count related pillar content articles
          let pillarContentCount = 0;
          if (category === "Marketing & Branding") {
            pillarContentCount = pillarContent.filter((content) => {
              // Here you need a way to check if the content belongs to 'Marketing & Branding'.
              // Assuming there's a 'category' field or relevant check for 'Marketing & Branding'.
              return content.category.toLowerCase().includes("marketing") || content.category.toLowerCase().includes("branding");
            }).length;
          }

          return (
            <div
              key={author.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Clickable Author Header */}
              <Link
                href={`/authors/${slugify(author.name)}`}
                className="block"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={author.profileImage}
                    alt={author.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    priority={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-1">
                      {author.name}
                    </h2>
                    <p className="text-sm opacity-90">
                      {author.role}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Bio & Social Links */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {author.bio}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {category === "Marketing & Branding" ? pillarContentCount + 1 : authorArticles.length} Articles
                  </span>

                  <div className="flex gap-4">
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      <FaXTwitter />
                    </a>

                    <a
                      href={author.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-gray-700 hover:text-blue-700 transition-colors"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href={author.social.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Medium"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      <SiMedium />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

