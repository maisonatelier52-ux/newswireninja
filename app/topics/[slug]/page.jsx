import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import articlesData from "../../../public/data/articles.json";
import topics from "../../../public/data/topics.json";

const SITE_URL = "https://www.newswireninja.com";

const parseDate = (d) => {
  if (!d) return new Date(0);
  if (d.includes("/")) {
    const [day, month, year] = d.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(d);
};

function getTopicArticles(topic) {
  const wanted = topic.tags.map((t) => t.toLowerCase());
  return Object.entries(articlesData)
    .flatMap(([category, posts]) => posts.map((p) => ({ ...p, category })))
    .filter((p) => (p.tags || []).some((t) => wanted.includes(t.toLowerCase())))
    .sort((a, b) => parseDate(b.modified || b.date) - parseDate(a.modified || a.date));
}

export async function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = topics[slug];
  if (!topic) return { title: "Topic not found", robots: { index: false } };
  return {
    title: { absolute: `${topic.metaTitle} | Newswireninja` },
    description: topic.metaDescription,
    alternates: { canonical: `${SITE_URL}/topics/${slug}` },
    openGraph: {
      title: topic.metaTitle,
      description: topic.metaDescription,
      url: `${SITE_URL}/topics/${slug}`,
      siteName: "Newswireninja",
      type: "website",
    },
  };
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const topic = topics[slug];
  if (!topic) notFound();
  const items = getTopicArticles(topic);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: topic.title,
    url: `${SITE_URL}/topics/${slug}`,
    description: topic.metaDescription,
    about: { "@type": "Person", name: topic.name },
    hasPart: items.map((a) => ({
      "@type": "NewsArticle",
      headline: a.title,
      url: `${SITE_URL}/${a.category}/${a.slug}`,
    })),
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm mb-6">
        <Link href="/" className="hover:underline">Home</Link> / {topic.name}
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{topic.title}</h1>
      <p className="text-gray-700 mb-10 max-w-3xl">{topic.intro}</p>

      <ul className="space-y-8">
        {items.map((a) => (
          <li key={a.slug} className="flex gap-4 items-start">
            <Image
              src={a.image}
              alt={a.imageAlt}
              width={160}
              height={90}
              className="rounded-md object-cover flex-shrink-0"
            />
            <div>
              <Link href={`/${a.category}/${a.slug}`}>
                <h2 className="text-lg font-semibold hover:underline">{a.title}</h2>
              </Link>
              <p className="text-sm text-gray-600 mt-1">{a.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
