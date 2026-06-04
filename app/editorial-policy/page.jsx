import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Editorial Policy | NewsWireNinja",
  description:
    "Learn about NewsWireNinja's editorial standards, fact-checking process, transparency, and newsroom ethics that guide every story we publish.",
  keywords: [
    "newswireninja editorial policy",
    "editorial standards",
    "journalism ethics",
    "fact-checking policy",
    "newsroom transparency",
    "editorial independence",
    "reporting standards",
    "verified journalism",
  ],
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
  openGraph: {
    title: "Editorial Policy | NewsWireNinja",
    description:
      "Learn about NewsWireNinja's editorial standards, fact-checking process, transparency, and newsroom ethics.",
    url: `${SITE_URL}/editorial-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Editorial Policy - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | NewsWireNinja",
    description:
      "NewsWireNinja's editorial standards, fact-checking process, and commitment to independent journalism.",
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
  "@id": `${SITE_URL}/editorial-policy#webpage`,
  name: "Editorial Policy | NewsWireNinja",
  url: `${SITE_URL}/editorial-policy`,
  description:
    "NewsWireNinja's editorial policy covering accuracy, independence, transparency, and journalistic ethics.",
  publisher: {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
    },
    ethicsPolicy: `${SITE_URL}/editorial-policy`,
    publishingPrinciples: `${SITE_URL}/editorial-policy`,
  },
  dateModified: "2026-06-01",
  inLanguage: "en-US",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/editorial-policy#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Editorial Policy",
      item: `${SITE_URL}/editorial-policy`,
    },
  ],
};

export default function EditorialPolicy() {
  const lastUpdated = "June 2026";

  const standards = [
    {
      title: "✓ No Paid Editorial Influence",
      desc: "No advertiser, sponsor, investor, or commercial partner has any say over what we cover, how we frame it, or whether it gets published. Revenue relationships are handled entirely outside our newsroom.",
    },
    {
      title: "✓ Multi-Source Verification",
      desc: "Before any claim goes live, our journalists verify it through at least two independent sources, official documents, or on-the-record statements. We do not publish single-source stories unless the source is official and on the record.",
    },
    {
      title: "✓ Clear Attribution",
      desc: "Every article clearly attributes who reported it, who the sources are, and — where relevant — what documents or data the reporting is based on. Readers should always know where our information comes from.",
    },
    {
      title: "✓ Opinion is Labelled",
      desc: "Analysis pieces, editorials, and opinion columns are always clearly labelled. We do not embed opinion into straight news reporting without disclosure.",
    },
    {
      title: "✓ We Correct Mistakes Publicly",
      desc: "When we get something wrong, we fix it openly and immediately. Corrections appear in the original article with a timestamp. We do not silently rewrite or delete inaccurate content. See our Corrections Policy.",
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

      {/* Hidden SEO Content */}
      <section className="sr-only">
        <h1>NewsWireNinja Editorial Policy</h1>
        <p>
          NewsWireNinja's editorial policy defines the standards, ethics, and
          processes that govern every article we publish — from verification and
          sourcing to corrections and editorial independence.
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
                <li className="text-gray-800 font-medium">Editorial Policy</li>
            </ol>
            </nav>
            </div>

        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="border-b-2 border-black pb-8 mb-14">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Standards
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              NEWSWIRENINJA
              <br />
              <span className="italic font-normal">Editorial Policy</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>NEWSWIRENINJA</strong> was built on the premise that
              readers deserve reporting that is fast, sharp, and above all —
              honest. This editorial policy explains how we make decisions,
              verify information, and maintain our independence from commercial
              and political pressure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every journalist who publishes on this platform is expected to
              follow these standards without exception. No story, regardless of
              its source, urgency, or commercial significance, bypasses the
              process below.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14" aria-labelledby="editorial-independence">
            <h2
              id="editorial-independence"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Editorial Independence
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA operates with full editorial independence. Our
              founders, investors, and commercial partners have no authority
              over editorial decisions. Coverage is determined entirely by
              journalistic merit — newsworthiness, public interest, and
              factual substance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not accept payment, gifts, travel, or any form of
              consideration in exchange for favorable coverage. If a journalist
              has a personal or financial connection to a story, they are
              recused from covering it.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-14" aria-labelledby="accuracy-verification">
            <h2
              id="accuracy-verification"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Accuracy and Verification
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Speed is a value at NEWSWIRENINJA — but never at the cost of
              truth. Every factual claim in a published article must be verified
              through primary documentation, direct sourcing, or independent
              corroboration before publication. When verification is incomplete,
              that uncertainty is stated explicitly in the article.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not publish claims based on social media posts, anonymous
              online accounts, or unverifiable secondary sources without
              additional confirmation from a primary source or official record.
            </p>
          </section>

          {/* Section 3 — Standards Block */}
          <section className="mb-14" aria-labelledby="our-standards">
            <h2
              id="our-standards"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Our Editorial Standards
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-10 space-y-6">
              {standards.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-14" aria-labelledby="fairness-balance">
            <h2
              id="fairness-balance"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Fairness and Balance
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              We seek relevant perspectives on every major story. Where
              criticism or allegations are made against an individual or
              organisation, we give them a reasonable opportunity to respond
              before publication. We document those outreach attempts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Balance does not mean false equivalence. We do not give equal
              platform to claims that are not supported by evidence simply for
              the sake of appearing neutral. Our editorial judgment is guided by
              what the facts support — not by what keeps any side comfortable.
              See our{" "}
              <Link
                href="/right-of-reply"
                title="Right of Reply Policy"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Right of Reply Policy
              </Link>{" "}
              for how we handle response requests.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-14" aria-labelledby="transparency-labelling">
            <h2
              id="transparency-labelling"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Transparency and Labelling
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Readers should never have to guess what kind of content they are
              reading. NEWSWIRENINJA clearly distinguishes between:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                "News reporting — fact-based, independently verified articles",
                "Analysis — reporting with context and interpretation, clearly labelled",
                "Opinion — viewpoints by named contributors, clearly labelled as opinion",
                "Sponsored content — commercial or partner-funded material, always labelled",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For how we handle commercial content and advertising, see our{" "}
              <Link
                href="/advertising-policy"
                title="Advertising Policy"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Advertising Policy
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-14" aria-labelledby="ethical-conduct">
            <h2
              id="ethical-conduct"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Ethical Conduct
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Conflicts of Interest",
                  body: "Journalists disclose any personal, financial, or professional relationships that could be perceived as a conflict before taking on an assignment. Editors decide on recusal.",
                },
                {
                  title: "Protection of Vulnerable Subjects",
                  body: "Stories involving minors, victims of crime, or individuals in mental health crisis are handled with elevated care and editorial review before publication.",
                },
                {
                  title: "Privacy and Proportionality",
                  body: "We publish private information about individuals only when it is directly relevant to a matter of clear public interest and is proportionate to the public benefit.",
                },
                {
                  title: "Source Protection",
                  body: "We protect the identity of confidential sources and explain to readers, in general terms, why anonymity was granted without exposing the source.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-14" aria-labelledby="reader-accountability">
            <h2
              id="reader-accountability"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Reader Accountability
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              We read every editorial message we receive. If you believe we
              have made an error, violated our own standards, or left an
              important perspective out of a story — tell us. Our editorial
              team reviews all substantive feedback and responds where
              appropriate.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-2xl">✉</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Editorial Contact
                </p>
                <a
                  href="mailto:editorial@newswireninja.com"
                  title="Contact the NewsWireNinja editorial team"
                  className="text-blue-600 hover:underline font-medium"
                >
                  editorial@newswireninja.com
                </a>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <div className="border-t border-gray-200 pt-10 mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Related Policies
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "Corrections Policy", href: "/corrections-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Right of Reply", href: "/right-of-reply" },
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