import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Ownership & Funding | NewsWireNinja",
  description:
    "Learn about NewsWireNinja ownership, funding sources, editorial independence, and how commercial relationships are kept separate from our journalism.",
  keywords: [
    "newswireninja ownership",
    "newswireninja funding",
    "media ownership disclosure",
    "news funding transparency",
    "editorial independence",
    "newsroom funding sources",
    "commercial relationships",
    "journalism funding",
  ],
  alternates: {
    canonical: `${SITE_URL}/ownership-funding`,
  },
  openGraph: {
    title: "Ownership & Funding | NewsWireNinja",
    description:
      "Transparency about who owns and funds NewsWireNinja and how that affects editorial decisions.",
    url: `${SITE_URL}/ownership-funding`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Ownership & Funding - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ownership & Funding | NewsWireNinja",
    description:
      "Transparency about who owns and funds NewsWireNinja.",
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
  "@id": `${SITE_URL}/ownership-funding#webpage`,
  name: "Ownership & Funding | NewsWireNinja",
  url: `${SITE_URL}/ownership-funding`,
  description:
    "Disclosure of NewsWireNinja's ownership structure, funding sources, and commercial relationships.",
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
  "@id": `${SITE_URL}/ownership-funding#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ownership & Funding",
      item: `${SITE_URL}/ownership-funding`,
    },
  ],
};

export default function OwnershipFunding() {
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
        <h1>NewsWireNinja Ownership and Funding</h1>
        <p>
          This page explains who controls editorial decisions at NewsWireNinja,
          how the platform is funded, and how commercial relationships are kept
          separate from newsroom operations.
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
                    <li className="text-gray-800 font-medium">Ownership &amp; Funding</li>
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
              <span className="italic font-normal">Ownership &amp; Funding</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>NEWSWIRENINJA</strong> believes readers have a right to
              know who owns the publications they read, how those publications
              make money, and whether commercial interests shape editorial
              decisions. This page answers those questions directly.
            </p>
          </div>

          {/* Section 1 — Who owns us */}
          <section className="mb-14" aria-labelledby="who-owns-us">
            <h2
              id="who-owns-us"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Who Operates NewsWireNinja
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA is an independent digital news platform founded in
              2025 and operated by a distributed editorial team based in the
              United States. It is not owned by a media conglomerate, political
              organisation, or government entity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Editorial control rests entirely with the newsroom. No external
              investor, owner, or commercial partner has authority over
              coverage decisions, publication timing, or editorial framing.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <p className="text-blue-900 font-medium text-sm leading-relaxed">
                If NEWSWIRENINJA undergoes a material change in ownership,
                control, or strategic direction that a reasonable reader would
                consider relevant to editorial independence, this page will be
                updated within 30 days of that change taking effect.
              </p>
            </div>
          </section>

          {/* Section 2 — How we're funded */}
          <section className="mb-14" aria-labelledby="how-funded">
            <h2
              id="how-funded"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              How NewsWireNinja Is Funded
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              NEWSWIRENINJA may generate revenue through some or all of the
              following channels. None of these revenue streams give commercial
              partners influence over editorial decisions:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  title: "Display Advertising",
                  body: "Standard display ads served programmatically or through direct sales. Advertisers do not review, approve, or influence editorial content.",
                },
                {
                  title: "Sponsored Content",
                  body: "Clearly labelled commercial content produced in partnership with brands. Always visually and editorially distinct from independent journalism.",
                },
                {
                  title: "Affiliate Links",
                  body: "Where we link to products or services and earn a referral fee. All affiliate relationships are disclosed in or near the content where they appear.",
                },
                {
                  title: "Newsletter or Subscription Revenue",
                  body: "Where applicable, revenue from reader subscriptions or premium newsletter access. Subscriber status does not affect what we cover.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              For a full explanation of how we label commercial content, see
              our{" "}
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

          {/* Section 3 — Editorial firewall */}
          <section className="mb-14" aria-labelledby="editorial-firewall">
            <h2
              id="editorial-firewall"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              The Editorial Firewall
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              The separation between our commercial operations and our newsroom
              is non-negotiable. Here is what that means in practice:
            </p>
            <div className="space-y-4">
              {[
                {
                  yes: true,
                  text: "Advertisers may purchase ad space on the platform.",
                },
                {
                  yes: false,
                  text: "Advertisers may NOT purchase editorial coverage, positive reviews, or story placement.",
                },
                {
                  yes: true,
                  text: "Commercial partners may sponsor clearly labelled content sections.",
                },
                {
                  yes: false,
                  text: "Commercial partners may NOT veto, alter, or delay independent editorial content.",
                },
                {
                  yes: true,
                  text: "Revenue information is available to senior editorial staff.",
                },
                {
                  yes: false,
                  text: "Revenue considerations may NOT factor into whether or how a story is covered.",
                },
              ].map(({ yes, text }) => (
                <div
                  key={text}
                  className={`flex items-start gap-4 px-5 py-4 rounded-lg ${
                    yes ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                  }`}
                >
                  <span className={`font-bold text-lg ${yes ? "text-green-600" : "text-red-500"}`}>
                    {yes ? "✓" : "✕"}
                  </span>
                  <p className="text-gray-800 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Conflicts */}
          <section className="mb-14" aria-labelledby="conflicts-interest">
            <h2
              id="conflicts-interest"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Conflicts of Interest
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              All journalists and editors at NEWSWIRENINJA are required to
              disclose personal, financial, or professional relationships that
              could reasonably affect their impartiality on any assignment.
              Disclosure is reviewed by an editor, and recusal decisions are
              made case by case.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA does not treat undisclosed conflicts as an internal
              HR matter when they affect reader trust. If an undisclosed
              conflict materially affected published content, the disclosure
              and any required correction will be made publicly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Staff members may not accept gifts, free travel, event access, or
              other consideration of value from sources, companies, or
              organisations they cover.
            </p>
          </section>

          {/* Section 5 — Political independence */}
          <section className="mb-14" aria-labelledby="political-independence">
            <h2
              id="political-independence"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Political Independence
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              NEWSWIRENINJA is not affiliated with any political party,
              candidate, government body, or advocacy organisation. No political
              entity has funded, invested in, or made a donation to
              NEWSWIRENINJA. Political advertising, where accepted, is clearly
              labelled and kept separate from news content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our journalists do not publicly endorse political candidates or
              parties. Individual opinions expressed in clearly labelled opinion
              columns are those of the author and do not reflect the editorial
              position of the newsroom.
            </p>
          </section>

          {/* Section 6 — Disclosure updates */}
          <section className="mb-14" aria-labelledby="disclosure-updates">
            <h2
              id="disclosure-updates"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Reporting a Missing Disclosure
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              If you believe NEWSWIRENINJA has a commercial, financial, or
              personal relationship relevant to a piece of coverage that has not
              been disclosed, you can contact us directly. We will review the
              concern and respond transparently.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Editorial",
                  email: "editorial@newswireninja.com",
                },
                {
                  label: "Corrections",
                  email: "corrections@newswireninja.com",
                },
              ].map(({ label, email }) => (
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
                    className="text-blue-600 hover:underline font-medium text-sm"
                  >
                    {email}
                  </a>
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
                { label: "Advertising Policy", href: "/advertising-policy" },
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