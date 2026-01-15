
import { notFound } from "next/navigation";
import categorypagedata from "../../../public/data/articles.json";
import ArticleClient from "./ArticleClient";

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const article =
    categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://www.newswireninja.com/${category}/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://www.newswireninja.com/${category}/${slug}`,
      siteName: "Newswireninja",
      images: [
        {
          url: `https://www.newswireninja.com${article.image}`,
          width: 1200,
          height: 630,
          alt: article.alt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`https://www.newswireninja.com${article.image}`],
    },
  };
}

export default async function Page({ params }) {
  const { category, slug } = await params;

  const article =
    categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) notFound();

  // ✅ pass params explicitly
  return <ArticleClient category={category} slug={slug} />;
}
