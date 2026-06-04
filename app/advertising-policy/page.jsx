import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Advertising Policy | NewsWireNinja",
  description:
    "Learn how NewsWireNinja labels sponsored content, advertising, and affiliate relationships to keep commercial material clearly separate from independent journalism.",
  keywords: [
    "newswireninja advertising policy",
    "sponsored content policy",
    "native advertising disclosure",
    "affiliate links disclosure",
    "paid content labeling",
    "commercial relationships news",
    "advertising standards",
    "editorial separation advertising",
  ],
  alternates: {
    canonical: `${SITE_URL}/advertising-policy`,
  },
  openGraph: {
    title: "Advertising Policy | NewsWireNinja",
    description:
      "How NewsWireNinja labels advertising and separates commercial material from independent journalism.",
    url: `${SITE_URL}/advertising-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Advertising Policy - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Policy | NewsWireNinja",
    description:
      "How NewsWireNinja labels advertising and keeps it separate from independent reporting.",
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
  "@id": `${SITE_URL}/advertising-policy#webpage`,
  name: "Advertising Policy | NewsWireNinja",
  url: `${SITE_URL}/advertising-policy`,
  description:
    "NewsWireNinja's advertising and sponsored content policy for reader transparency.",
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
  "@id": `${SITE_URL}/advertising-policy#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Advertising Policy",
      item: `${SITE_URL}/advertising-policy`,
    },
  ],
};

export default function AdvertisingPolicy() {
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
        <h1>NewsWireNinja Advertising Policy</h1>
        <p>
          How NewsWireNinja separates advertising and commercial content from
          independent editorial reporting, and how all paid relationships are
          labelled for readers.
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
                <li className="text-gray-800 font-medium">Advertising Policy</li>
                </ol>
            </nav>
            </div>
        

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b-2 border-black pb-8 mb-14">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Transparency
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              NEWSWIRENINJA
              <br />
              <span className="italic font-normal">Advertising Policy</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>NEWSWIRENINJA</strong> runs advertising to sustain its
              operations. This policy explains precisely how advertising and
              commercial content are separated from our editorial work, and how
              every paid relationship is labelled so readers always know what
              they are looking at.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The guiding principle is simple: a reader should never have to
              guess whether they are reading journalism or commercial content.
            </p>
          </div>

          {/* Section 1 — The core rule */}
          <section className="mb-14" aria-labelledby="core-rule">
            <h2
              id="core-rule"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              The Core Rule: Advertising Does Not Buy Journalism
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Purchasing advertising space on NEWSWIRENINJA does not give any
              brand, company, or individual the right to:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Determine what stories we cover or how we frame them",
                "Request that negative or critical coverage be removed or softened",
                "Receive editorial content favourable to their products or services",
                "Gain advance sight of stories that mention or affect them",
                "Influence the editorial positioning of any article on the platform",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-red-50 border border-red-200 px-5 py-4 rounded-lg"
                >
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              If an advertiser or partner attempts to exert editorial influence,
              the relationship is terminated.
            </p>
          </section>

          {/* Section 2 — Types of commercial content */}
          <section className="mb-14" aria-labelledby="content-types">
            <h2
              id="content-types"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Types of Commercial Content and How They Are Labelled
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="space-y-6">
              {[
                {
                  title: "Display Advertising",
                  label: "Labelled: Advertisement",
                  body: "Standard banner, sidebar, and interstitial ads served programmatically or through direct placement. Clearly marked as 'Advertisement' and visually distinct from editorial content at all times.",
                },
                {
                  title: "Sponsored Content / Branded Content",
                  label: "Labelled: Sponsored / Paid Partnership",
                  body: "Articles, videos, or features produced in collaboration with a commercial partner. These are always identified with a clear 'Sponsored by' or 'Paid Partnership' label at the top of the content. They use a different visual template to editorial articles.",
                },
                {
                  title: "Affiliate Links",
                  label: "Labelled: Affiliate Link / We may earn a commission",
                  body: "Where NEWSWIRENINJA includes links to products or services that generate a referral fee, this is disclosed clearly in or directly adjacent to the content containing the link. The presence of an affiliate link does not influence the editorial assessment of the linked product.",
                },
                {
                  title: "Newsletter Sponsorships",
                  label: "Labelled: Presented by / Sponsored",
                  body: "Sponsor mentions within email newsletters are labelled at the point of placement. Sponsor content in newsletters is distinct from editorial recommendations.",
                },
              ].map(({ title, label, body }) => (
                <div key={title} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-900 text-white px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="font-bold text-sm">{title}</h3>
                    <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">{label}</span>
                  </div>
                  <p className="px-5 py-4 text-gray-700 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Political advertising */}
          <section className="mb-14" aria-labelledby="political-advertising">
            <h2
              id="political-advertising"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Political and Advocacy Advertising
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA does not accept advertising that could reasonably
              be mistaken for news reporting — including political
              advertisements styled to look like editorial content. Where
              political advertising is accepted, it is:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Clearly labelled as political advertising",
                "Visually distinct from all editorial content",
                "Not presented as an endorsement by NEWSWIRENINJA",
                "Independently verified to meet basic factual standards before acceptance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 mt-1">—</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Acceptance of political advertising does not constitute
              endorsement of any candidate, party, policy position, or
              campaign claim.
            </p>
          </section>

          {/* Section 4 — What we don't do */}
          <section className="mb-14" aria-labelledby="what-we-dont-do">
            <h2
              id="what-we-dont-do"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Practices NewsWireNinja Does Not Engage In
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-4">
              {[
                "Publishing editorial content in exchange for advertising spend",
                "Embedding undisclosed affiliate links in news articles",
                "Allowing an advertising relationship to determine what topics or companies we cover",
                "Using editorial headlines and article templates for sponsored content without clear labelling",
                "Removing or altering negative coverage of an advertiser on their request",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-red-500 text-lg mt-0.5">✕</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Complaints */}
          <section className="mb-14" aria-labelledby="ad-complaints">
            <h2
              id="ad-complaints"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Complaints About Commercial Content
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe commercial content on NEWSWIRENINJA is not
              properly labelled, or that an advertising relationship has
              influenced editorial content in a way that is not disclosed,
              contact us. We take these concerns seriously and will investigate
              and respond.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Advertising & Partnerships",
                  email: "editorial@newswireninja.com",
                  desc: "For advertiser questions and sponsorship enquiries.",
                },
                {
                  label: "Reader Complaints",
                  email: "corrections@newswireninja.com",
                  desc: "For reporting mislabelled or undisclosed commercial content.",
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
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Right of Reply", href: "/right-of-reply" },
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