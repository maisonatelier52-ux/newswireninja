// import Link from "next/link";

// const SITE_URL = "https://www.newswireninja.com";
// const SITE_NAME = "Newswireninja";

// export const metadata = {
//   title: "About Newswireninja — Independent News Platform",
//   description:
//     "Learn about Newswireninja, an independent platform delivering unfiltered and fast news on business, politics, technology, and global affairs.",
//   keywords: [
//     "about Newswireninja",
//     "independent journalism",
//     "factual reporting",
//     "digital news platform",
//     "truthful reporting",
//     "news publication",
//     "editorial values",
//   ],
//   authors: [{ name: SITE_NAME + " Editorial Team" }],
//   alternates: {
//     canonical: `${SITE_URL}/about-newswireninja`,
//   },
//   openGraph: {
//     title: "About Newswireninja — Independent News Platform",
//     description:
//       "Discover the mission and vision behind Newswireninja — an independent news platform delivering cutting-edge news.",
//     url: `${SITE_URL}/about-newswireninja`,
//     type: "website",
//     siteName: SITE_NAME,
//     images: [
//       {
//         url: `${SITE_URL}/images/newswireninja-logo.webp`,
//         width: 1200,
//         height: 630,
//         alt: "About Newswireninja — Independent News Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About Newswireninja",
//     description:
//       "Learn about the values and mission that drive Newswireninja to deliver unfiltered and fast news.",
//     images: [`${SITE_URL}/images/newswireninja-logo.webp`],
//     creator: "@newswireninja",
//     site: "@newswireninja",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function About() {
//   // JSON-LD: AboutPage
//   const aboutPageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "AboutPage",
//     "@id": `${SITE_URL}/about-newswireninja#aboutpage`,
//     name: "About Newswireninja",
//     url: `${SITE_URL}/about-newswireninja`,
//     description:
//       "Learn about Newswireninja — an independent digital news platform delivering factual, unbiased news coverage.",
//     mainEntity: {
//       "@type": "NewsMediaOrganization",
//       "@id": `${SITE_URL}/#organization`,
//       name: SITE_NAME,
//       url: SITE_URL,
//       description:
//         "Independent digital news platform delivering high-quality journalism across politics, business, sports, technology, crime, investigation, travel, and world events.",
//       foundingDate: "2025",
//       logo: {
//         "@type": "ImageObject",
//         url: `${SITE_URL}/images/newswireninja-logo.webp`,
//       },
//       sameAs: [
//         "https://www.facebook.com/newswireninja",
//         "https://www.twitter.com/newswireninja",
//       ],
//       contactPoint: {
//         "@type": "ContactPoint",
//         contactType: "Editorial",
//         email: "editorial@newswireninja.com",
//       },
//       ethicsPolicy: `${SITE_URL}/about-newswireninja`,
//       publishingPrinciples: `${SITE_URL}/about-newswireninja`,
//     },
//   };

//   // JSON-LD: WebPage
//   const webPageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "@id": `${SITE_URL}/about-newswireninja#webpage`,
//     url: `${SITE_URL}/about-newswireninja`,
//     name: "About Newswireninja",
//     description: metadata.description,
//     isPartOf: {
//       "@type": "WebSite",
//       "@id": `${SITE_URL}/#website`,
//       name: SITE_NAME,
//       url: SITE_URL,
//     },
//     about: {
//       "@type": "NewsMediaOrganization",
//       "@id": `${SITE_URL}/#organization`,
//       name: SITE_NAME,
//     },
//     breadcrumb: {
//       "@id": `${SITE_URL}/about-newswireninja#breadcrumb`,
//     },
//     primaryImageOfPage: {
//       "@type": "ImageObject",
//       url: `${SITE_URL}/images/newswireninja-logo.webp`,
//     },
//   };

//   // JSON-LD: BreadcrumbList
//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/about-newswireninja#breadcrumb`,
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: SITE_URL,
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "About",
//         item: `${SITE_URL}/about-newswireninja`,
//       },
//     ],
//   };

//   // JSON-LD: Organization
//   const organizationJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsMediaOrganization",
//     "@id": `${SITE_URL}/#organization`,
//     name: SITE_NAME,
//     alternateName: "Newswire Ninja",
//     url: SITE_URL,
//     logo: {
//       "@type": "ImageObject",
//       url: `${SITE_URL}/images/newswireninja-logo.webp`,
//       width: 600,
//       height: 60,
//     },
//     description:
//       "Independent digital news platform delivering comprehensive coverage of politics, business, sports, technology, crime, investigation, travel, and world events.",
//     foundingDate: "2025",
//     sameAs: [
//       "https://www.facebook.com/newswireninja",
//       "https://www.twitter.com/newswireninja",
//     ],
//     address: {
//       "@type": "PostalAddress",
//       addressCountry: "US",
//     },
//     contactPoint: {
//       "@type": "ContactPoint",
//       contactType: "Editorial",
//       email: "editorial@newswireninja.com",
//     },
//   };

//   return (
//     <>
//       {/* JSON-LD Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
//       />

//       {/* SEO Hidden Content */}
//       <section className="sr-only">
//         <h1>About Newswireninja — Independent News Platform</h1>
//         <p>
//           Newswireninja is an independent digital news platform founded in 2025,
//           committed to delivering high-quality journalism across politics,
//           business, sports, technology, crime, investigation, travel, and world
//           events. Our mission is to provide accurate, unbiased news coverage and
//           thoughtful analysis to readers worldwide.
//         </p>
//         <h2>About Our Independent News Platform</h2>
//         <p>
//           Discover how Newswireninja delivers independent news and factual
//           reporting. Our digital platform brings you breaking news, in-depth
//           analysis, and expert commentary across all major categories.
//         </p>
//       </section>

//       <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
//         {/* Breadcrumb */}
//         <nav aria-label="Breadcrumb" className="mb-6">
//           <ol className="flex items-center gap-2 text-sm">
//             <li>
//               <Link href="/" title="Home page" className="hover:text-blue-600">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li className="text-gray-600">About</li>
//           </ol>
//         </nav>

//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <span className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full mb-6">
//               ABOUT US
//             </span>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               NEWSWIRENINJA
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Sharp. Fearless. Unfiltered.
//             </p>
//           </div>

//           {/* Introduction */}
//           <div className="prose prose-lg prose-blue max-w-none mb-16">
//             <p>
//               Welcome to <strong>NEWSWIRENINJA</strong> — your independent
//               source of news that cuts through the noise.
//             </p>
//             <p>
//               Launched in 2025, we exist because too many stories are filtered,
//               softened, or simply ignored. Our mission is simple: deliver the
//               truth — fast, clear, and without corporate spin.
//             </p>
//             <p>
//               Whether it&apos;s breaking business news, political developments,
//               technology revolutions, global conflicts, or the stories no one
//               else wants to touch — we report it first and we report it
//               straight.
//             </p>
//           </div>

//           {/* What We Stand For */}
//           <div className="grid md:grid-cols-3 gap-10 mb-20">
//             {[
//               {
//                 title: "Independence",
//                 desc: "No billionaire owners. No political affiliations. Our only loyalty is to the facts and our readers.",
//               },
//               {
//                 title: "Speed with Accuracy",
//                 desc: "We move fast — but never at the cost of verification. Every story is checked before it goes live.",
//               },
//               {
//                 title: "Transparency",
//                 desc: "We show our sources. We correct mistakes openly. We believe readers deserve to know how we know what we know.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
//               >
//                 <h2 className="text-xl font-bold text-gray-900 mb-4">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Coverage Areas */}
//           <div className="mb-20">
//             <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//               What We Cover
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Politics",
//                   desc: "Comprehensive political coverage including elections, policy debates, government affairs, and political analysis.",
//                 },
//                 {
//                   title: "Business",
//                   desc: "Market analysis, corporate news, economic trends, financial insights, and business developments.",
//                 },
//                 {
//                   title: "Technology",
//                   desc: "Tech industry news, innovation, startups, digital trends, AI, cybersecurity, and technological breakthroughs.",
//                 },
//                 {
//                   title: "World News",
//                   desc: "Global news coverage featuring international affairs, diplomacy, conflicts, and major events worldwide.",
//                 },
//                 {
//                   title: "Investigation",
//                   desc: "In-depth investigative journalism uncovering important stories and holding power accountable.",
//                 },
//                 {
//                   title: "Sports",
//                   desc: "Complete sports coverage with scores, highlights, analysis, and updates from all major sports worldwide.",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//                 >
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Team & Writers */}
//           <div className="mb-20">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               Our Writers
//             </h2>
//             <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
//               NEWSWIRENINJA is powered by a network of experienced journalists,
//               analysts, and subject-matter experts who are obsessed with getting
//               the story right.
//             </p>
//             <div className="text-center">
//               <Link
//                 href="/authors"
//                 className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
//                 title="Meet our authors"
//               >
//                 Meet Our Writers →
//               </Link>
//             </div>
//           </div>

//           {/* Final Statement */}
//           <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 md:p-16 text-center">
//             <h2 className="text-3xl font-bold mb-6">
//               Why NEWSWIRENINJA?
//             </h2>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Because the world is complicated. Because truth still matters.
//               Because someone needs to say it like it is — no matter who it
//               offends.
//             </p>
//             <p className="mt-8 text-xl font-semibold text-blue-700">
//               We are NEWSWIRENINJA.
//               <br />
//               And we don&apos;t blink.
//             </p>
//           </div>

//           {/* Contact CTA */}
//           <div className="mt-16 text-center">
//             <h2 className="text-3xl font-bold mb-4 text-gray-900">
//               Get in Touch
//             </h2>
//             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//               Have a story tip? Questions about our coverage? We&apos;d love to
//               hear from you.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a
//                 href="mailto:editorial@newswireninja.com"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-full transition-colors"
//                 title="Contact Newswireninja Editorial Team"
//               >
//                 Contact Editorial
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import authorsData from "../../public/data/authors.json";
import { slugify } from "../../utils/slugify";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "About Newswireninja — Independent News Platform",
  description:
    "Learn about Newswireninja, an independent platform delivering unfiltered and fast news on business, politics, technology, and global affairs. Our journalists are committed to accuracy, transparency, and editorial independence.",
  keywords: [
    "about Newswireninja",
    "independent journalism",
    "factual reporting",
    "digital news platform",
    "truthful reporting",
    "news publication",
    "editorial values",
    "editorial standards",
    "verified journalism",
    "original reporting",
  ],
  authors: [{ name: SITE_NAME + " Editorial Team" }],
  alternates: {
    canonical: `${SITE_URL}/about-newswireninja`,
  },
  openGraph: {
    title: "About Newswireninja — Independent News Platform",
    description:
      "Discover the mission, editorial standards, and team behind Newswireninja — an independent news platform delivering cutting-edge, verified journalism.",
    url: `${SITE_URL}/about-newswireninja`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "About Newswireninja — Independent News Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Newswireninja",
    description:
      "Learn about the values, editorial standards, and mission that drive Newswireninja to deliver unfiltered and fast news.",
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

export default function About() {
  // JSON-LD: AboutPage
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-newswireninja#aboutpage`,
    name: "About Newswireninja",
    url: `${SITE_URL}/about-newswireninja`,
    description:
      "Learn about Newswireninja — an independent digital news platform delivering factual, unbiased news coverage with transparent sourcing and verified journalism.",
    mainEntity: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Independent digital news platform delivering high-quality journalism across politics, business, sports, technology, crime, investigation, travel, and world events.",
      foundingDate: "2025",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
      },
      sameAs: [
        "https://www.facebook.com/newswireninja",
        "https://www.twitter.com/newswireninja",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Editorial",
        email: "editorial@newswireninja.com",
      },
      ethicsPolicy: `${SITE_URL}/about-newswireninja`,
      publishingPrinciples: `${SITE_URL}/about-newswireninja`,
    },
  };

  // JSON-LD: WebPage
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/about-newswireninja#webpage`,
    url: `${SITE_URL}/about-newswireninja`,
    name: "About Newswireninja",
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    breadcrumb: {
      "@id": `${SITE_URL}/about-newswireninja#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
    },
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/about-newswireninja#breadcrumb`,
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
        name: "About",
        item: `${SITE_URL}/about-newswireninja`,
      },
    ],
  };

  // JSON-LD: Organization (full)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Newswire Ninja",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/newswireninja-logo.webp`,
      width: 600,
      height: 60,
    },
    description:
      "Independent digital news platform delivering comprehensive coverage of politics, business, sports, technology, crime, investigation, travel, and world events.",
    foundingDate: "2025",
    sameAs: [
      "https://www.facebook.com/newswireninja",
      "https://www.twitter.com/newswireninja",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: "editorial@newswireninja.com",
    },
    ethicsPolicy: `${SITE_URL}/about-newswireninja`,
    publishingPrinciples: `${SITE_URL}/about-newswireninja`,
    masthead: `${SITE_URL}/about-newswireninja`,
  };

  // Pull up to 4 authors to display as named contributors
  const featuredAuthors = authorsData.categories.slice(0, 4);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* SEO Hidden Content */}
      <section className="sr-only">
        <h1>About Newswireninja — Independent News Platform</h1>
        <p>
          Newswireninja is an independent digital news platform founded in 2025,
          committed to delivering high-quality, verified journalism across
          politics, business, sports, technology, crime, investigation, travel,
          and world events. Our editorial standards require fact-checking, source
          transparency, and original reporting on every story.
        </p>
        <h2>Our Editorial Standards and Publishing Principles</h2>
        <p>
          Every article published on Newswireninja is verified before
          publication, sourced transparently, and written by experienced
          journalists. We correct mistakes openly and do not accept advertiser
          influence over editorial decisions.
        </p>
      </section>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" title="Home page" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-600">About</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              NEWSWIRENINJA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharp. Fearless. Unfiltered.
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg prose-blue max-w-none mb-16">
            <p>
              Welcome to <strong>NEWSWIRENINJA</strong> — your independent
              source of news that cuts through the noise.
            </p>
            <p>
              Launched in 2025, we exist because too many stories are filtered,
              softened, or simply ignored. Our mission is simple: deliver the
              truth — fast, clear, and without corporate spin.
            </p>
            <p>
              Whether it&apos;s breaking business news, political developments,
              technology revolutions, global conflicts, or the stories no one
              else wants to touch — we report it first and we report it
              straight.
            </p>
          </div>

          {/* What We Stand For */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Independence",
                desc: "No billionaire owners. No political affiliations. Our only loyalty is to the facts and our readers.",
              },
              {
                title: "Speed with Accuracy",
                desc: "We move fast — but never at the cost of verification. Every story is checked before it goes live.",
              },
              {
                title: "Transparency",
                desc: "We show our sources. We correct mistakes openly. We believe readers deserve to know how we know what we know.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* UPDATED: Editorial Standards Section — key E-E-A-T signal */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Editorial Standards
            </h2>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 space-y-6">
              {[
                {
                  title: "✓ Fact-Checking Before Publication",
                  desc: "Every article published on Newswireninja is reviewed for factual accuracy before it goes live. We do not publish unverified claims, and we cite primary sources wherever possible.",
                },
                {
                  title: "✓ Source Transparency",
                  desc: "We identify our sources whenever it does not put them at risk. When sources must remain anonymous, we explain the reason clearly. Readers deserve to understand how we know what we report.",
                },
                {
                  title: "✓ Corrections Policy",
                  desc: "When we make mistakes — and everyone does — we correct them promptly and openly. Corrections are noted directly in the relevant article with a timestamp, never silently edited.",
                },
                {
                  title: "✓ Editorial Independence",
                  desc: "Newswireninja accepts no advertiser influence over editorial decisions. Our reporting reflects journalist judgment, not commercial relationships. No story is sponsored, placed, or altered for business reasons.",
                },
                {
                  title: "✓ Original Reporting",
                  desc: "We do not simply aggregate or republish wire stories. Our team conducts original research, reaches out to sources, and adds editorial context and analysis that you will not find elsewhere.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What We Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Politics",
                  desc: "Comprehensive political coverage including elections, policy debates, government affairs, and political analysis.",
                },
                {
                  title: "Business",
                  desc: "Market analysis, corporate news, economic trends, financial insights, and business developments.",
                },
                {
                  title: "Technology",
                  desc: "Tech industry news, innovation, startups, digital trends, AI, cybersecurity, and technological breakthroughs.",
                },
                {
                  title: "World News",
                  desc: "Global news coverage featuring international affairs, diplomacy, conflicts, and major events worldwide.",
                },
                {
                  title: "Investigation",
                  desc: "In-depth investigative journalism uncovering important stories and holding power accountable.",
                },
                {
                  title: "Sports",
                  desc: "Complete sports coverage with scores, highlights, analysis, and updates from all major sports worldwide.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* UPDATED: Named Contributors with mini-bios — strong E-E-A-T signal */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Journalists
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm">
              NEWSWIRENINJA is powered by a network of experienced journalists
              and subject-matter experts committed to getting the story right.
              Each contributor brings verified expertise in their coverage area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {featuredAuthors.map((entry) => (
                <div
                  key={entry.author.id}
                  className="flex gap-4 items-start bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <Image
                    src={entry.author.profileImage}
                    alt={`${entry.author.name} — ${entry.author.role} at Newswireninja`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover flex-shrink-0 w-16 h-16"
                  />
                  <div>
                    <Link
                      href={`/authors/${slugify(entry.author.name)}`}
                      title={`${entry.author.name} — journalist profile`}
                    >
                      <p className="font-bold text-sm hover:text-blue-600 hover:underline transition cursor-pointer">
                        {entry.author.name}
                      </p>
                    </Link>
                    <p className="text-xs text-blue-600 font-medium mb-1">
                      {entry.author.role}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {entry.author.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/authors"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
                title="Meet all Newswireninja authors"
              >
                Meet All Our Writers →
              </Link>
            </div>
          </div>

          {/* Final Statement */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why NEWSWIRENINJA?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Because the world is complicated. Because truth still matters.
              Because someone needs to say it like it is — no matter who it
              offends.
            </p>
            <p className="mt-8 text-xl font-semibold text-blue-700">
              We are NEWSWIRENINJA.
              <br />
              And we don&apos;t blink.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have a story tip? Questions about our coverage or editorial
              standards? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:editorial@newswireninja.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-full transition-colors"
                title="Contact Newswireninja Editorial Team"
              >
                Contact Editorial
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
