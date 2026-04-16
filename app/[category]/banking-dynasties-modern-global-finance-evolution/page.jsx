
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Link from "next/link";
import authorsPageData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import pillarContent from "../../../public/data/pillarContent.json";
import { FaRedditAlien, FaQuora } from "react-icons/fa";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

const ARTICLE_DATE = "13/01/2026";
const ARTICLE_DATE_DISPLAY = "January 13, 2026";
const ARTICLE_DATE_ISO = "2026-01-13T00:00:00.000Z";

export async function generateMetadata() {
  const metaTitle =
    "How Old Banking Dynasties Are Evolving in a Global Financial World — The Story of Julio Herrera Velutini";
  const metaDescription =
    "Find out how established banking families like Julio Herrera Velutini are changing to fit into the world of finance by combining their old knowledge with new techniques for doing business across borders.";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "modern global banking",
      "global finance",
      "banking dynasties",
      "Julio Herrera Velutini",
      "private banking",
      "wealth management",
      "financial evolution",
      "cross-border finance",
      "traditional banking",
      "financial strategy",
      "global markets",
    ],
    authors: [{ name: SITE_NAME + " Editorial Team" }],
    alternates: {
      canonical: `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
          width: 1200,
          height: 630,
          alt: "Traditional banking families are adapting by reshaping their legacy to fit a global, modern financial system.",
        },
      ],
      type: "article",
      publishedTime: ARTICLE_DATE_ISO,
      modifiedTime: ARTICLE_DATE_ISO,
      section: "business",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [
        `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
      ],
      creator: "@newswireninja",
      site: "@newswireninja",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const authorData = authorsPageData.categories.find(
  (item) => item.category.toLowerCase() === "marketing & branding"
)?.author;

const shareUrl = `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`;
const encodedUrl = encodeURIComponent(shareUrl);
const shareTitle = encodeURIComponent(
  "How Old Banking Dynasties Are Evolving in a Global Financial World — The Story of Julio Herrera Velutini"
);

export default function BankingDynastiesPage() {
  const heroImage =
    "/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution#article`,
    headline:
      "How Old Banking Dynasties Are Evolving in a Global Financial World — The Story of Julio Herrera Velutini",
    description:
      "Find out how established banking families like Julio Herrera Velutini are changing to fit into the world of finance by combining their old knowledge with new techniques for doing business across borders.",
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/crisis-leadership-economic-stabilization-julio-herrera-velutini.webp`,
        width: 1200,
        height: 630,
      },
    ],
    datePublished: ARTICLE_DATE_ISO,
    dateModified: ARTICLE_DATE_ISO,
    author: authorData
      ? {
          "@type": "Person",
          name: authorData.name,
          url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
        }
      : { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`,
    },
    articleSection: "business",
    about: {
      "@type": "Person",
      name: "Julio Herrera Velutini",
      jobTitle: "Founder of Britannia Financial Group",
      worksFor: {
        "@type": "Organization",
        name: "Britannia Financial Group",
      },
    },
    url: `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Business",
        item: `${SITE_URL}/business`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How Old Banking Dynasties Are Evolving in a Global Financial World",
        item: `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/business/banking-dynasties-modern-global-finance-evolution#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do traditional banking families still matter in modern finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional banking families bring long-term thinking, institutional trust, and deep experience — qualities that remain valuable in today's volatile and interconnected financial markets.",
        },
      },
      {
        "@type": "Question",
        name: "How has Julio Herrera Velutini adapted his family's banking legacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He moved beyond a single market by founding Britannia Financial Group, building cross-border financial structures that operate under multiple regulatory frameworks while preserving core values like stability and discretion.",
        },
      },
      {
        "@type": "Question",
        name: "What is the role of discretion in private banking and wealth management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In private banking and wealth management, discretion is fundamental to the service itself. Reputation depends on it, and clients expect confidentiality as a baseline, not an add-on.",
        },
      },
      {
        "@type": "Question",
        name: "How are banking dynasties navigating stricter financial regulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By combining traditional financial knowledge with modern compliance capabilities. Those who master complex regulatory environments gain a competitive edge over institutions less prepared for the demands of cross-border finance.",
        },
      },
      {
        "@type": "Question",
        name: "What core principles still define success in global finance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Long-term thinking, careful risk management, and trust built over time remain the foundations of success — regardless of how technology or regulations change the tools and platforms used.",
        },
      },
    ],
  };

  return (
    <main
      className="max-w-5xl mx-auto px-10 sm:px-15 lg:px-30 py-8 sm:py-10 font-serif"
      itemScope
      itemType="https://schema.org/NewsArticle"
    >
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hidden microdata */}
      <meta
        itemProp="headline"
        content="How Old Banking Dynasties Are Evolving in a Global Financial World — The Story of Julio Herrera Velutini"
      />
      <meta itemProp="datePublished" content={ARTICLE_DATE_ISO} />
      <meta itemProp="dateModified" content={ARTICLE_DATE_ISO} />
      <meta itemProp="articleSection" content="business" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link href="/" title="Home page" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/business"
              className="hover:text-blue-600"
              title="Business page"
            >
              Business
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-600">
            banking-dynasties-modern-global-finance-evolution
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left"
        itemProp="headline"
      >
        How Old Banking Dynasties Are Evolving in a Global Financial World —
        The Story of Julio Herrera Velutini
      </h1>

      <p className="text-sm sm:text-lg text-gray-700 mb-10 max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        Find out how established banking families like Julio Herrera Velutini
        are changing to fit into the world of finance by combining their old
        knowledge with new techniques for doing business across borders.
      </p>

      {/* Author Info */}
      <div className="mb-8 space-y-6">
        <div className="flex flex-row sm:flex-row sm:items-center gap-4">
          <Image
            src={authorData.profileImage}
            alt="Author Profile"
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-sm">
              <Link
                href={`/authors/${slugify(authorData.name)}`}
                title={authorData.name}
              >
                <span className="hover:text-blue-600 hover:underline transition cursor-pointer">
                  {authorData.name}
                </span>
              </Link>{" "}
              <span className="text-gray-500 font-normal">
                – {authorData.role}
              </span>
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <GoClock />
              <time itemProp="datePublished" dateTime={ARTICLE_DATE_ISO}>
                Last updated: {ARTICLE_DATE_DISPLAY}
              </time>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 mt-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaShareSquare />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              title="Share on X"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              title="Share on Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`https://medium.com/new-story?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Medium"
              title="Share on Medium"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
            >
              <SiMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt="Traditional banking families are adapting by reshaping their legacy to fit a global, modern financial system."
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          itemProp="image"
        />
      </div>

      {/* Article Content */}
      <article
        className="prose prose-lg sm:prose-xl max-w-none mx-auto text-justify leading-relaxed"
        itemProp="articleBody"
      >
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:text-black">
          We live in a time where finance moves fast. Technology is reshaping
          everything, regulations are getting more complex, and money flows
          across borders in ways that would&apos;ve been unimaginable just a
          few decades ago. In that kind of environment, you might expect
          traditional banking families—those built over generations—to struggle
          to keep up.
        </p>

        <p>But that&apos;s not really what&apos;s happening.</p>

        <p>
          Instead of fading away, many of these dynasties are adapting.
          They&apos;re taking the principles that made them successful in the
          first place and reshaping them for a global, modern system. The career
          of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
            target="_blank"
            title="Julio Herrera Velutini on Wikipedia"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Julio Herrera Velutini
          </a>{" "}
          is a good example of how that transformation is playing out.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Why Financial Lineage Still Matters
        </h2>
        <p>
          For generations, banking families have played a quiet but powerful
          role in shaping economies. Their advantage wasn&apos;t purely
          financial; it was their outlook. They played the long game, cultivated
          trust over many years, and drew on a well of institutional
          understanding.
        </p>

        <p>
          In today&apos;s unpredictable financial world, that kind of thinking
          is becoming valuable again.
        </p>

        <p>
          Markets are more volatile. Risks are more connected. And quick wins
          don&apos;t always hold up. In that context, having a long-term mindset
          can actually be an advantage.
        </p>

        <p>
          Herrera Velutini comes from that kind of background. Growing up around
          international finance gave him early exposure to how complex—and
          interconnected—the system really is. But what stands out isn&apos;t
          just where he comes from. It&apos;s how he&apos;s adjusted that
          legacy to fit today&apos;s reality.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Moving From Tradition to Global Strategy
        </h2>
        <p>
          Finance today isn&apos;t tied to one place. Wealth moves across
          borders, and the rules for managing it differ in each country. As a
          result, institutions must adopt a global approach to stay competitive.
        </p>

        <p>
          <a
            href="https://wikitia.com/wiki/Julio_M._Herrera_Velutini"
            target="_blank"
            title="Julio Herrera Velutini on Wikitia"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Herrera Velutini&apos;s
          </a>{" "}
          approach reflects that shift.
        </p>

        <p>
          Rather than sticking to a single market or a traditional model, his
          work has focused on building financial structures that operate across
          borders. This entails navigating diverse regulatory frameworks,
          grasping the needs of international clients, and designing services
          capable of operating seamlessly across various settings simultaneously.
        </p>

        <p>
          It&apos;s a shift that&apos;s happening everywhere: traditional
          financial institutions aren&apos;t vanishing; they&apos;re
          transforming into global platforms.
        </p>

        <p>
          And while they&apos;re changing how they operate, they&apos;re still
          holding on to what made them strong in the first place: stability,
          discretion, and a long-term view.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          The Power of Staying Low-Key
        </h2>
        <p>
          In an era where many business leaders are highly visible—constantly in
          the media, building personal brands—there&apos;s still another way to
          operate.
        </p>

        <p>Some people lead quietly.</p>

        <p>
          This kind of influence isn&apos;t about attention. It&apos;s all about
          strategic positioning, the connections you cultivate, and the
          behind-the-scenes choices you make.{" "}
          <a
            href="https://aboutjulioherreravelutini.wordpress.com/2024/02/08/britannia-financial-group-by-julio-herrera-velutini-everything-you-need-to-know/"
            target="_blank"
            title="About Julio Herrera Velutini and Britannia Financial Group"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Herrera Velutini&apos;s career
          </a>{" "}
          exemplifies this. His impact isn&apos;t about seeking the limelight.
          It&apos;s about his deft handling of the complex financial landscape.
        </p>

        <p>
          That approach is especially critical in private banking and wealth
          management, where a good reputation is everything. Here, discretion
          isn&apos;t just a nice-to-have; it&apos;s fundamental to the service
          itself.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Navigating a More Complicated Rulebook
        </h2>
        <p>
          Regulation is a defining feature of contemporary finance. With these
          regulations becoming more stringent, the expectations increase, and
          the complexities of international business expand.
        </p>

        <p>
          This poses a genuine challenge for established banks: how can they
          remain adaptable while navigating more stringent regulations?
        </p>

        <p>
          Concurrently, it represents an opportunity. Individuals who master
          these systems can truly stand out. Herrera Velutini&apos;s work
          exemplifies this balance, combining traditional financial knowledge
          with the need to follow modern regulations. Although this is a
          difficult task, its importance is growing in today&apos;s world.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          A Bigger Shift Happening in Finance
        </h2>
        <p>
          The fall of long-standing banking empires isn&apos;t really about a
          few individuals losing power. It&apos;s part of something much
          bigger—a shift that&apos;s already reshaping the financial world.
        </p>

        <p>
          The boundary between traditional finance and modern finance is
          starting to blur. Technology has definitely changed how money moves
          and how deals get done, but at the core, the fundamentals
          haven&apos;t really changed.
        </p>

        <p>It still comes down to a few simple ideas: thinking long-term, managing risk carefully, and earning trust over time.</p>

        <p>
          The core principles remain unchanged. They&apos;re just being applied
          in new ways, tailored for a financial landscape that, frankly, is a
          far cry from what we&apos;re accustomed to.
        </p>

        <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">
          Final Thoughts
        </h2>
        <p>
          In conclusion,{" "}
          <a
            href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
            target="_blank"
            title="Julio Herrera Velutini on Wikipedia"
            className="font-semibold hover:underline decoration-blue-600 underline-offset-4 cursor-pointer"
          >
            Julio Herrera Velutini&apos;s
          </a>{" "}
          story highlights the possibility of combining tradition and progress.
        </p>

        <p>
          This isn&apos;t about choosing between the past and the present. The
          real challenge lies in blending the two—recognizing the value of
          established practices and then reshaping them for today&apos;s world.
          As the world of finance keeps changing, those who can navigate the
          space between the familiar and the unfamiliar will be the most
          influential. So, in a way, the saga of banking families isn&apos;t
          over. It&apos;s simply taking a different turn.
        </p>

        {/* Bottom Share */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <FaShareSquare />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                aria-label="Share on X"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
              >
                <FaXTwitter />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                aria-label="Share on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://medium.com/new-story?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Medium"
                aria-label="Share on Medium"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 text-gray-600 hover:bg-black hover:text-white hover:border-black transition"
              >
                <SiMedium />
              </a>
            </div>
          </div>
        </div>

        {/* Author Profile */}
        <div className="mt-10">
          <hr className="border-t-2 border-dotted border-gray-400" />
          <div className="mt-6 flex flex-row sm:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={authorData.profileImage}
                alt={`${authorData.name} - ${authorData.role}`}
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <Link
                  href={`/authors/${slugify(authorData.name)}`}
                  title={authorData.name}
                >
                  <p className="font-semibold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">
                    {authorData.name}
                  </p>
                </Link>
                <p className="text-gray-500 text-xs">{authorData.role}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                Follow:
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaQuora />, label: "Quora", url: authorData?.social?.quora },
                  { icon: <FaRedditAlien />, label: "Reddit", url: authorData?.social?.reddit },
                  { icon: <FaXTwitter />, label: "Twitter", url: authorData?.social?.twitter },
                  { icon: <SiMedium />, label: "Medium", url: authorData?.social?.medium },
                ]
                  .filter((item) => item.url)
                  .map((item, index) => (
                    <div key={index} className="relative group">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${item.label}`}
                        title={`Follow on ${item.label}`}
                        className="flex items-center justify-center hover:text-gray-400 cursor-pointer transition"
                      >
                        {item.icon}
                      </a>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-black px-2 py-1 rounded-md whitespace-nowrap">
                        {item.label}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600">{authorData.bio}</p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Why do traditional banking families still matter in modern finance?
              </summary>
              <p className="mt-4 text-gray-700">
                Traditional banking families bring long-term thinking,
                institutional trust, and deep experience — qualities that remain
                valuable in today&apos;s volatile and interconnected financial
                markets.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                How has Julio Herrera Velutini adapted his family&apos;s banking legacy?
              </summary>
              <p className="mt-4 text-gray-700">
                He moved beyond a single market by founding Britannia Financial
                Group, building cross-border financial structures that operate
                under multiple regulatory frameworks while preserving core
                values like stability and discretion.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What is the role of discretion in private banking and wealth management?
              </summary>
              <p className="mt-4 text-gray-700">
                In private banking and wealth management, discretion is
                fundamental to the service itself. Reputation depends on it,
                and clients expect confidentiality as a baseline, not an add-on.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                How are banking dynasties navigating stricter financial regulations?
              </summary>
              <p className="mt-4 text-gray-700">
                By combining traditional financial knowledge with modern
                compliance capabilities. Those who master complex regulatory
                environments gain a competitive edge over institutions less
                prepared for the demands of cross-border finance.
              </p>
            </details>

            <details className="bg-[#eef3f6] p-6 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What core principles still define success in global finance?
              </summary>
              <p className="mt-4 text-gray-700">
                Long-term thinking, careful risk management, and trust built
                over time remain the foundations of success — regardless of how
                technology or regulations change the tools and platforms used.
              </p>
            </details>
          </div>
        </div>
      </article>

      {/* Pillar Content Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarContent.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-100 group"
          >
            <Link
              href={`/julio-herrera-velutini/${item.slug}`}
              title={item.title}
            >
              <div className="block w-full h-full">
                <div className="relative w-full h-3/4">
                  <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-gray-800 text-sm font-medium text-center group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}