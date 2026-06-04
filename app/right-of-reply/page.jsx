import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Right of Reply | NewsWireNinja",
  description:
    "Learn how NewsWireNinja handles reply requests, disputed factual claims, and response opportunities for individuals and organisations featured in our reporting.",
  keywords: [
    "right of reply newswireninja",
    "response request",
    "disputed claims journalism",
    "fairness in reporting",
    "reply policy news",
    "editorial fairness",
    "subject response policy",
    "pre-publication contact",
  ],
  alternates: {
    canonical: `${SITE_URL}/right-of-reply`,
  },
  openGraph: {
    title: "Right of Reply | NewsWireNinja",
    description:
      "How NewsWireNinja handles reply requests and response opportunities for those featured in our reporting.",
    url: `${SITE_URL}/right-of-reply`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Right of Reply - NewsWireNinja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right of Reply | NewsWireNinja",
    description:
      "How NewsWireNinja handles reply requests for individuals and organisations in our reporting.",
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
  "@id": `${SITE_URL}/right-of-reply#webpage`,
  name: "Right of Reply | NewsWireNinja",
  url: `${SITE_URL}/right-of-reply`,
  description:
    "NewsWireNinja's right of reply policy for individuals and organisations featured in its reporting.",
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
  "@id": `${SITE_URL}/right-of-reply#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Right of Reply",
      item: `${SITE_URL}/right-of-reply`,
    },
  ],
};

export default function RightOfReply() {
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
        <h1>NewsWireNinja Right of Reply Policy</h1>
        <p>
          How NewsWireNinja gives individuals and organisations a fair
          opportunity to respond to criticism, allegations, or disputed claims
          before or after publication.
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
                    <li className="text-gray-800 font-medium">Right of Reply</li>
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
              <span className="italic font-normal">Right of Reply</span>
            </h2>
            <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-14">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>NEWSWIRENINJA</strong> believes that people and
              organisations named in critical or adverse coverage deserve a fair
              opportunity to respond. This policy explains when and how we seek
              responses before publication, and how we handle reply requests
              after a story is published.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14" aria-labelledby="pre-publication">
            <h2
              id="pre-publication"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Pre-Publication Outreach
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Before publishing a story that contains criticism, serious
              allegations, or materially adverse claims about an identifiable
              person or organisation, NEWSWIRENINJA journalists aim to:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: "01",
                  title: "Contact the subject directly",
                  body: "Using publicly available contact details, official representatives, or legal counsel where appropriate. We document all outreach attempts with timestamps.",
                },
                {
                  step: "02",
                  title: "State the specific claims clearly",
                  body: "We tell subjects what we intend to report and what questions we are putting to them — not vague summaries. Subjects should know exactly what they are responding to.",
                },
                {
                  step: "03",
                  title: "Allow a reasonable response window",
                  body: "The deadline for response depends on the urgency of the story. Breaking news may require a shorter window. Investigations provide longer lead time where the story timeline allows.",
                },
                {
                  step: "04",
                  title: "Include the response in the article",
                  body: "Where a response is received, it is included in the article fairly and in full, or summarised accurately where length requires. If no response is received, that is also noted in the article.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-5 items-start">
                  <span className="text-3xl font-black text-blue-100 w-10 flex-shrink-0 leading-none mt-1">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-14" aria-labelledby="when-outreach-not-required">
            <h2
              id="when-outreach-not-required"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              When Pre-Publication Outreach May Not Be Possible
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              There are circumstances where pre-publication outreach is not
              required or is not practical:
            </p>
            <div className="space-y-3 mb-4">
              {[
                "Breaking news where publication delay would cause material public harm or allow destruction of evidence",
                "Situations where alerting a subject could compromise an ongoing investigation",
                "Cases where the subject has already made their position publicly known through official statements",
                "Articles drawing on publicly available records or statements that do not contain new adverse allegations",
                "Situations where a subject has previously been given multiple opportunities to respond and declined",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 px-5 py-4 rounded-lg"
                >
                  <span className="text-blue-600 font-bold text-sm mt-0.5">—</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Where outreach was not possible before publication, the article
              notes this and the subject is informed after publication with an
              invitation to respond.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14" aria-labelledby="post-publication">
            <h2
              id="post-publication"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Post-Publication Responses
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              If a person or organisation contacts NEWSWIRENINJA after
              publication to dispute factual claims or provide context that was
              not available at the time, we will:
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 space-y-4">
              {[
                "Review the material factual basis of the dispute promptly and without prejudice",
                "Assess whether the new information or context warrants an update, clarification, correction, or follow-up article",
                "Add a response to the original article where the subject's position was not previously represented and is materially relevant",
                "Issue a correction if the original article contained a factual error — see our Corrections Policy",
                "Decline to alter accurate, verified reporting based on pressure or legal threat alone",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-blue-600 text-lg mt-0.5">◎</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-14" aria-labelledby="what-reply-right-does-not-mean">
            <h2
              id="what-reply-right-does-not-mean"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              What a Right of Reply Does Not Guarantee
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              A right of reply at NEWSWIRENINJA is not a veto. A reply request
              does not automatically result in:
            </p>
            <div className="space-y-3">
              {[
                "Removal of accurate, verified reporting",
                "Advance sight or approval of any article before publication",
                "The newsroom agreeing to hold a story indefinitely pending a response",
                "Publication of a full statement without editorial review for factual accuracy",
                "A guarantee that every reply request will result in a change to published content",
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
            <p className="text-gray-700 leading-relaxed mt-6">
              The purpose of this policy is to ensure fairness and accuracy in
              reporting — not to give subjects editorial control over coverage
              that is supported by evidence.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-14" aria-labelledby="how-to-submit-reply">
            <h2
              id="how-to-submit-reply"
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              How to Submit a Reply Request
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-6">
              To submit a reply request, contact us at the address below.
              Include the following to help us process your request efficiently:
            </p>
            <div className="space-y-3 mb-8">
              {[
                "The article URL or headline",
                "The specific claim, statement, or passage you are responding to or disputing",
                "Your response, correction, or context — as clearly and factually as possible",
                "Any supporting documentation, records, or evidence",
                "Your contact details and the capacity in which you are writing (personal, representative, legal)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 px-5 py-4 rounded-lg"
                >
                  <span className="text-blue-600 font-bold text-sm mt-0.5">→</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Editorial",
                  email: "editorial@newswireninja.com",
                  desc: "For reply requests and response submissions.",
                },
                {
                  label: "Corrections",
                  email: "corrections@newswireninja.com",
                  desc: "Where you believe a factual error has occurred.",
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