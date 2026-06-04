import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Legal | NewsWireNinja",
  description:
    "Legal policies covering copyright, content reuse, reader complaints, permissions, formal notices, and how to contact NewsWireNinja for legal matters.",
  keywords: [
    "newswireninja legal",
    "copyright policy",
    "content reuse",
    "formal notice",
    "permissions",
    "legal contact",
    "news copyright",
    "content complaints",
  ],
  alternates: {
    canonical: `${SITE_URL}/legal`,
  },
  openGraph: {
    title: "Legal | NewsWireNinja",
    description:
      "Copyright, content reuse, permissions, complaints, and formal legal notice information for NewsWireNinja.",
    url: `${SITE_URL}/legal`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Legal - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | NewsWireNinja",
    description:
      "Copyright, reuse, permissions, complaints, and formal legal notice information.",
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
  "@id": `${SITE_URL}/legal#webpage`,
  name: "Legal | NewsWireNinja",
  url: `${SITE_URL}/legal`,
  description:
    "Legal information for NewsWireNinja covering copyright, reuse, permissions, complaints, and formal notices.",
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
  "@id": `${SITE_URL}/legal#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Legal",
      item: `${SITE_URL}/legal`,
    },
  ],
};

export default function Legal() {
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
        <h1>NewsWireNinja Legal Information</h1>
        <p>
          Legal information for NewsWireNinja covering copyright, content
          reuse, reader complaints, permissions requests, and formal legal
          notices.
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
                    <li className="text-gray-800 font-medium">Legal</li>
                </ol>
                </nav>
            </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b-2 border-black pb-8 mb-14">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Legal
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              NEWSWIRENINJA
              <br />
              <span className="italic font-normal">Legal Information</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              This page provides a plain-language overview of the legal
              frameworks that apply to <strong>NEWSWIRENINJA</strong> and its
              readers — covering copyright, content reuse, complaints about
              accuracy or rights, how to request permissions, and how to send
              formal legal notices to the newsroom.
            </p>
          </div>

          {/* Section 1 — Informational use */}
          <section className="mb-14" aria-labelledby="informational-use">
            <h2
              id="informational-use"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Informational Use of NewsWireNinja Content
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA publishes journalism, analysis, and explanatory
              reporting for informational purposes. Our articles are edited to
              newsroom standards and reflect reporting at the time of
              publication.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Content published on NEWSWIRENINJA should not be treated as
              professional legal, financial, medical, or investment advice. For
              stories touching on those areas, we aim to use precise language,
              cite primary sources, and indicate clearly when professional
              advice should be sought.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where a story covers fast-moving situations — regulatory changes,
              legal proceedings, market events — NEWSWIRENINJA aims to update
              or timestamp articles to reflect material changes in the record.
              Readers relying on time-sensitive professional information should
              verify it against primary sources.
            </p>
          </section>

          {/* Section 2 — Copyright */}
          <section className="mb-14" aria-labelledby="copyright">
            <h2
              id="copyright"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Copyright, Quotation, and Reuse
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              All original content on NEWSWIRENINJA — including articles,
              headlines, analysis, photographs, graphics, and data
              visualisations — is protected by copyright law and owned by
              NEWSWIRENINJA or its contributors and licensors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Readers may link to NEWSWIRENINJA articles and may quote brief
              excerpts with clear attribution to NEWSWIRENINJA and a link to
              the original article, where applicable law permits.
            </p>
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-4">
              <h3 className="font-bold mb-3 text-sm uppercase tracking-widest text-gray-400">
                The following require prior written permission:
              </h3>
              <ul className="space-y-2">
                {[
                  "Republishing full articles or substantial portions in any medium",
                  "Commercial reuse, licensing, or syndication of our content",
                  "Systematic scraping, copying, or archiving of the platform's content",
                  "Derivative works based on our original reporting or data",
                  "Use of our branding, logos, or visual assets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-blue-400 mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To request reuse permissions or syndication licences, contact us
              at{" "}
              <a
                href="mailto:editorial@newswireninja.com"
                title="Contact NewsWireNinja for permissions"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                editorial@newswireninja.com
              </a>
              .
            </p>
          </section>

          {/* Section 3 — Complaints */}
          <section className="mb-14" aria-labelledby="complaints">
            <h2
              id="complaints"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Complaints About Accuracy, Rights, or Fairness
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe a NEWSWIRENINJA article contains a material
              factual error, misrepresents your position, infringes your
              rights, or raises a serious legal concern, contact the newsroom
              directly with:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "The URL or headline of the article",
                "The specific claim, passage, or image you are challenging",
                "A clear statement of the factual or legal basis for your concern",
                "Supporting documentation where available",
                "Your contact details and the capacity in which you are writing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 px-5 py-4 rounded-lg"
                >
                  <span className="text-blue-600 font-bold text-sm mt-0.5">✱</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Factual disputes are reviewed under our{" "}
              <Link
                href="/corrections-policy"
                title="Corrections Policy"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Corrections Policy
              </Link>
              . Fairness complaints may be handled under our{" "}
              <Link
                href="/right-of-reply"
                title="Right of Reply Policy"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                Right of Reply Policy
              </Link>
              . Rights complaints — copyright, defamation, privacy — are
              reviewed separately and directed to the appropriate senior staff.
            </p>
          </section>

          {/* Section 4 — Formal requests */}
          <section className="mb-14" aria-labelledby="formal-requests">
            <h2
              id="formal-requests"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Removal, Restriction, and Formal Requests
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA reviews substantive requests for correction,
              clarification, update, removal, or restricted display of
              published content. Submission of a formal request does not by
              itself guarantee removal or immediate depublication.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our standard is to evaluate requests against the public record,
              editorial standards, applicable law, and the public interest. In
              some cases the appropriate response is a correction, clarification
              note, update, or follow-up coverage rather than removal of
              accurate journalism.
            </p>
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Note:</strong> Legal threats alone do not constitute a
                basis for removing verified, accurate reporting.
                NEWSWIRENINJA does not respond to pressure by altering
                editorial content. If you have a legitimate legal concern,
                contact our editorial team at the address below and describe
                the specific legal basis for your request.
              </p>
            </div>
          </section>

          {/* Section 5 — Third-party links */}
          <section className="mb-14" aria-labelledby="third-party-links">
            <h2
              id="third-party-links"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Links to Third-Party Material
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA links to third-party sources — official records,
              government databases, company filings, academic research, and
              other media — for sourcing and reader context. Those properties
              are governed by their own terms, policies, and accuracy
              standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A link to a third-party source does not mean NEWSWIRENINJA
              endorses every statement or policy on that site. We link to
              primary sources to give readers access to the underlying record,
              not to validate everything that site publishes.
            </p>
          </section>

          {/* Section 6 — Formal notices */}
          <section className="mb-14" aria-labelledby="formal-notices">
            <h2
              id="formal-notices"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Formal Notices and Legal Contact
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              For legal notices, DMCA takedown requests, rights complaints,
              formal permissions requests, and other legal correspondence,
              contact the newsroom directly so the request can be routed to
              the appropriate reviewer:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "General Legal Contact",
                    email: "editorial@newswireninja.com",
                    desc: "For permissions, formal notices, and legal correspondence.",
                  },
                  {
                    label: "Corrections and Factual Concerns",
                    email: "corrections@newswireninja.com",
                    desc: "For factual disputes, accuracy complaints, and correction requests.",
                  },
                  {
                    label: "Story Tips and Confidential Information",
                    email: "tips@newswireninja.com",
                    desc: "For confidential tips and protected source contact.",
                  },
                  {
                    label: "General Editorial",
                    email: "editorial@newswireninja.com",
                    desc: "For editorial questions, reply requests, and general enquiries.",
                  },
                ].map(({ label, email, desc }) => (
                  <div key={label}>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {label}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      title={`Contact NewsWireNinja — ${label}`}
                      className="text-blue-600 hover:underline font-medium text-sm block mb-1"
                    >
                      {email}
                    </a>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                ))}
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
                { label: "Editorial Policy", href: "/editorial-policy" },
                { label: "Corrections Policy", href: "/corrections-policy" },
                { label: "Source Methodology", href: "/source-methodology" },
                { label: "Ownership & Funding", href: "/ownership-funding" },
                { label: "Advertising Policy", href: "/advertising-policy" },
                { label: "Right of Reply", href: "/right-of-reply" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
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