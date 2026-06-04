import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Source Methodology | NewsWireNinja",
  description:
    "Learn how NewsWireNinja sources, verifies, and reviews information before publication — including how we treat anonymous sources, documents, and data.",
  keywords: [
    "newswireninja source methodology",
    "news sourcing",
    "journalism verification",
    "anonymous sources",
    "fact checking process",
    "reporting methodology",
    "source transparency",
    "news verification standards",
  ],
  alternates: {
    canonical: `${SITE_URL}/source-methodology`,
  },
  openGraph: {
    title: "Source Methodology | NewsWireNinja",
    description:
      "How NewsWireNinja sources, verifies, and reviews information before publishing.",
    url: `${SITE_URL}/source-methodology`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Source Methodology - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Source Methodology | NewsWireNinja",
    description:
      "How NewsWireNinja sources and verifies information before publication.",
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
  "@id": `${SITE_URL}/source-methodology#webpage`,
  name: "Source Methodology | NewsWireNinja",
  url: `${SITE_URL}/source-methodology`,
  description:
    "NewsWireNinja's sourcing standards, verification methodology, and approach to anonymous sources and data journalism.",
  publisher: {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
    },
  },
  dateModified: "2026-06-01",
  inLanguage: "en-US",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/source-methodology#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Source Methodology",
      item: `${SITE_URL}/source-methodology`,
    },
  ],
};

export default function SourceMethodology() {
  const lastUpdated = "June 2026";

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
        <h1>NewsWireNinja Source Methodology</h1>
        <p>
          How NewsWireNinja builds its reporting — what is sourced directly,
          what comes from documents and records, what remains unverified, and
          where interpretation begins.
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
                    <li className="text-gray-800 font-medium">Source Methodology</li>
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
              <span className="italic font-normal">Source Methodology</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              At <strong>NEWSWIRENINJA</strong>, readers deserve to know not
              just what we reported — but how we know it. This page explains
              the sourcing standards and verification process behind every story
              we publish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not republish press releases, social media posts, or wire
              copy without independent verification. Our reporters build stories
              from the ground up using primary sources and documentary evidence.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14" aria-labelledby="source-hierarchy">
            <h2
              id="source-hierarchy"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Source Hierarchy
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all sources carry equal weight. NEWSWIRENINJA applies a
              tiered approach to sourcing that prioritises primary and
              independently verifiable evidence:
            </p>
            <div className="space-y-4">
              {[
                {
                  tier: "Tier 1 — Primary",
                  color: "bg-blue-600",
                  items: [
                    "Official government documents, filings, and records",
                    "Court transcripts and legal filings",
                    "First-hand witness accounts given on the record",
                    "Original data from official or institutional datasets",
                  ],
                },
                {
                  tier: "Tier 2 — Secondary",
                  color: "bg-blue-400",
                  items: [
                    "Reports from established news organisations citing primary sources",
                    "Expert analysis supported by documented research",
                    "Company statements and official press releases (verified against context)",
                  ],
                },
                {
                  tier: "Tier 3 — Tertiary (used with caution)",
                  color: "bg-gray-400",
                  items: [
                    "Aggregated news reports without identified primary sources",
                    "Social media posts (used for leads only, not as standalone sources)",
                    "Unverified tips or anonymous tips awaiting corroboration",
                  ],
                },
              ].map(({ tier, color, items }) => (
                <div key={tier} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className={`${color} text-white px-5 py-3`}>
                    <h3 className="font-bold text-sm">{tier}</h3>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-blue-500 mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-14" aria-labelledby="verification-process">
            <h2
              id="verification-process"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Verification Process
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Before a factual claim is published, reporters are expected to
              verify it through at least one of the following methods:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Review of a primary document or official record",
                "On-the-record confirmation from a direct participant",
                "Independent corroboration from a second unconnected source",
                "Cross-referencing against data from an official institution",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3"
                >
                  <span className="text-blue-600 font-bold text-sm">✓</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Where verification is incomplete or only partially confirmed,
              that uncertainty is stated explicitly in the article. We use
              language like "could not be independently verified", "according
              to a single source", or "the claim has not been confirmed" rather
              than presenting uncertain information as fact.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14" aria-labelledby="anonymous-sources">
            <h2
              id="anonymous-sources"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Anonymous Sources
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Anonymity is a last resort at NEWSWIRENINJA — not a default.
              Before granting anonymity to a source, editors assess:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Whether the source has direct, firsthand knowledge of the events described",
                "Whether the information is in the public interest and cannot be obtained on the record",
                "Whether the source's identity and potential bias are known to the editor",
                "Whether a second source or documentary corroboration exists",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">—</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When anonymity is granted, articles describe the source in terms
              that give readers enough context to assess their relevance and
              potential bias — without exposing their identity. We avoid
              references to "sources close to the matter" without any further
              meaningful description.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-14" aria-labelledby="documents-data">
            <h2
              id="documents-data"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Documents, Data, and Media
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Documents, screenshots, video, audio, and data files submitted to
              or obtained by NEWSWIRENINJA are assessed for:
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  label: "Provenance",
                  body: "Where did this come from? How was it obtained? Is the chain of custody documented?",
                },
                {
                  label: "Authenticity",
                  body: "Is this document or file what it claims to be? We cross-reference metadata, style, and content against known authentic examples.",
                },
                {
                  label: "Context",
                  body: "Does this clip, screenshot, or excerpt accurately represent the full situation? We do not publish material that is deliberately decontextualised.",
                },
                {
                  label: "Completeness",
                  body: "A document's existence does not prove the broadest possible claim. We describe what a record shows, what it does not show, and where interpretation begins.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="border-l-4 border-blue-200 pl-5 py-2">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-14" aria-labelledby="uncertainty-change">
            <h2
              id="uncertainty-change"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              How We Handle Uncertainty and Change
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-4">
              {[
                "We do not convert uncertainty into certainty for the sake of a stronger headline.",
                "We clearly distinguish between what we know, what we believe, and what we cannot confirm.",
                "If new information contradicts what we published, we update the article with a timestamped note rather than deleting the original.",
                "Stories described as 'developing' are monitored and updated as new facts emerge.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-blue-600 text-lg mt-0.5">◎</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Contact */}
          <section className="mb-14" aria-labelledby="source-contact">
            <h2
              id="source-contact"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Questions About Our Sources
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have a question about how a specific story was sourced, or
              want to submit documents or information to our newsroom, reach
              out below. We protect all confidential source identities.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Editorial",
                  email: "editorial@newswireninja.com",
                  desc: "For questions about sourcing decisions in specific articles.",
                },
                {
                  label: "Secure Tips",
                  email: "tips@newswireninja.com",
                  desc: "For confidential document submissions and source protection.",
                },
              ].map(({ label, email, desc }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                    {label}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    title={`Contact NewsWireNinja — ${label}`}
                    className="text-blue-600 hover:underline font-medium text-sm block mb-2"
                  >
                    {email}
                  </a>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <div className="border-t border-gray-200 pt-10 mt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Related Policies
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Corrections Policy", href: "/corrections-policy" },
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