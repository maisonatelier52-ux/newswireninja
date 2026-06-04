import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Corrections Policy | NewsWireNinja",
  description:
    "Learn how NewsWireNinja handles corrections, updates, clarifications, and factual errors to maintain reader trust and journalistic accuracy.",
  keywords: [
    "newswireninja corrections policy",
    "news corrections",
    "error correction",
    "factual errors",
    "journalism transparency",
    "editorial corrections",
    "news accuracy",
    "correction process",
  ],
  alternates: {
    canonical: `${SITE_URL}/corrections-policy`,
  },
  openGraph: {
    title: "Corrections Policy | NewsWireNinja",
    description:
      "How NewsWireNinja handles corrections, updates, clarifications, and factual errors.",
    url: `${SITE_URL}/corrections-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Corrections Policy - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | NewsWireNinja",
    description:
      "How NewsWireNinja handles corrections, updates, and factual errors in published reporting.",
    images: [`${SITE_URL}/images/newswireninja-logo.webp`],
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

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/corrections-policy#webpage`,
  name: "Corrections Policy | NewsWireNinja",
  url: `${SITE_URL}/corrections-policy`,
  description:
    "NewsWireNinja's corrections policy for handling factual errors and maintaining journalistic integrity.",
  publisher: {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
    },
    correctionsPolicy: `${SITE_URL}/corrections-policy`,
  },
  dateModified: "2026-06-01",
  inLanguage: "en-US",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/corrections-policy#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Corrections Policy",
      item: `${SITE_URL}/corrections-policy`,
    },
  ],
};

export default function CorrectionsPolicy() {
  const lastUpdated = "June 2026";

  const errorTypes = [
    {
      icon: "✎",
      title: "Typographical & Minor Errors",
      body: "Spelling mistakes, grammatical issues, and punctuation errors that do not alter factual meaning are fixed immediately without a formal correction note. These are treated as routine maintenance.",
    },
    {
      icon: "◎",
      title: "Factual Errors",
      body: "Wrong names, incorrect dates, misquoted figures, or inaccurate descriptions of events are corrected directly in the article. A clearly labelled correction note is added at the bottom, stating what was wrong and what the correct information is.",
    },
    {
      icon: "◉",
      title: "Contextual Errors",
      body: "Where context was missing, misleading, or incomplete in a way that materially changed the meaning of a story, we issue a clarification note that adds the missing information without erasing the original text.",
    },
    {
      icon: "△",
      title: "Developing Story Updates",
      body: "As situations evolve, articles on live events are updated with a timestamped update note at the top of the article. Readers can see when new information was added and what changed.",
    },
    {
      icon: "⊘",
      title: "Significant Errors Requiring Review",
      body: "Where an error materially misrepresents a person, event, or situation, the article is escalated to a senior editor. The subject of the error is notified where appropriate. A full correction or, in rare cases, a retraction is issued.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="sr-only">
        <h1>NewsWireNinja Corrections Policy</h1>
        <p>
          How NewsWireNinja identifies, reviews, and publicly corrects errors
          in published news articles, with a commitment to transparency and
          reader trust.
        </p>
      </section>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
        {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" title="Home" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Corrections Policy</li>
          </ol>
        </nav>
      </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b-2 border-black pb-8 mb-14">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Standards
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              NEWSWIRENINJA
              <br />
              <span className="italic font-normal">Corrections Policy</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>NEWSWIRENINJA</strong> publishes fast. But publishing
              fast does not mean publishing carelessly. When we get something
              wrong, we own it — publicly, promptly, and without burying the
              correction where no one will find it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This page explains how we classify errors, how corrections are
              issued, and how readers can submit correction requests to our
              team.
            </p>
          </div>

          {/* Section 1 — Error types */}
          <section className="mb-14" aria-labelledby="error-types">
            <h2
              id="error-types"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              How We Classify Errors
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-2" />
            <p className="text-gray-500 text-sm mb-8">
              Not all errors are equal. Here is how NEWSWIRENINJA categorises and responds to different types:
            </p>
            <div className="space-y-6">
              {errorTypes.map(({ icon, title, body }) => (
                <div key={title} className="flex gap-5 items-start">
                  <span className="text-2xl text-gray-400 mt-0.5 w-7 flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 — Where corrections appear */}
          <section className="mb-14" aria-labelledby="where-corrections-appear">
            <h2
              id="where-corrections-appear"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Where Corrections Appear
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Every correction is published in the original article — not on a
              separate corrections page that most readers will never find. We
              do not silently delete inaccurate content and rewrite it as if
              the error never happened.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Correction notes appear at the bottom of the article with the
              date the correction was issued. Update notes for developing
              stories appear at the top of the article with a timestamp.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In cases of significant factual errors that affect the headline
              or central premise of a story, the corrected headline and a
              clear editor's note are placed at the top of the article.
            </p>
          </section>

          {/* Section 3 — Request guide */}
          <section className="mb-14" aria-labelledby="how-to-submit">
            <h2
              id="how-to-submit"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              How to Submit a Correction Request
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe NEWSWIRENINJA has published inaccurate
              information, send us a message. To help us review your request
              quickly, include:
            </p>
            <div className="space-y-3 mb-8">
              {[
                "The URL or headline of the article in question",
                "The specific sentence, figure, quote, or claim you believe is incorrect",
                "What the correct information is, and how you know it",
                "Any supporting documents, links, or official sources",
                "Your contact details if you are willing to be reached for follow-up",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 px-5 py-4 rounded-lg"
                >
                  <span className="text-blue-600 font-bold text-sm mt-0.5">
                    →
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-2xl">✉</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Corrections Contact
                </p>
                <a
                  href="mailto:corrections@newswireninja.com"
                  title="Submit a correction to NewsWireNinja"
                  className="text-blue-600 hover:underline font-medium"
                >
                  corrections@newswireninja.com
                </a>
              </div>
            </div>
          </section>

          {/* Section 4 — Transparency commitment */}
          <section className="mb-14" aria-labelledby="our-commitment">
            <h2
              id="our-commitment"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Our Commitment to Transparency
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10 space-y-5">
              {[
                "We never remove errors without acknowledgment — every change to published content is documented.",
                "We do not punish or ignore readers who point out mistakes. Every substantive correction request is read and reviewed.",
                "Our corrections are not buried in fine print. They appear where readers can see them.",
                "We do not favour any party in correction decisions — if the information is wrong, we correct it regardless of who it affects.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-blue-600 text-lg mt-0.5">◎</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Why it matters */}
          <section className="mb-14" aria-labelledby="why-it-matters">
            <h2
              id="why-it-matters"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Why This Matters
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="border-l-4 border-black pl-8 py-2">
              <p className="text-xl text-gray-800 leading-relaxed italic">
                "A newsroom that won't correct its mistakes isn't a newsroom —
                it's a propaganda operation. At NEWSWIRENINJA, we don't blink
                at errors. We fix them and we tell you about it."
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              Corrections are not a sign of weakness. They are proof that a
              newsroom takes accuracy seriously enough to admit when it fell
              short. We treat our readers as partners in getting the story
              right.
            </p>
          </section>

          {/* Related Links */}
          <div className="border-t border-gray-200 pt-10 mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Related Policies
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Right of Reply", href: "/right-of-reply" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Legal", href: "/legal" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  title={label}
                  className="border border-gray-300 px-4 py-2 text-gray-700 hover:border-black hover:text-black transition-all"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 text-right mt-8">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </main>
    </>
  );
}