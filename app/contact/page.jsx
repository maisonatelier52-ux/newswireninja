
import ContactClient from "@/components/ContactClient";

const SITE_URL = "https://www.newswireninja.com";
const SITE_NAME = "Newswireninja";

export const metadata = {
  title: "Contact Us — NEWSWIRENINJA",
  description:
    "Get in touch with the NEWSWIRENINJA editorial team. Submit story tips, press inquiries, corrections, or general feedback.",
  keywords: [
    "contact newswireninja",
    "news tip",
    "press inquiry",
    "editorial contact",
    "story submission",
    "feedback",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact NEWSWIRENINJA — Get in Touch",
    description:
      "Reach the NEWSWIRENINJA editorial team for story tips, press inquiries, corrections, and general questions.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/newswireninja-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Contact NEWSWIRENINJA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NEWSWIRENINJA",
    description:
      "Reach the NEWSWIRENINJA editorial team for story tips, press inquiries, and feedback.",
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

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  name: "Contact NEWSWIRENINJA",
  url: `${SITE_URL}/contact`,
  description:
    "Contact the NEWSWIRENINJA editorial team for story tips, press inquiries, corrections, or general feedback.",
  publisher: {
    "@type": "NewsMediaOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/contact#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* FIXED: Use <p> instead of <h1> in sr-only to avoid duplicate H1.
          The visible H1 "GET IN TOUCH." inside ContactClient is the page's real H1. */}
      <p className="sr-only">
        Contact NEWSWIRENINJA — Editorial Team. Reach out to the NEWSWIRENINJA
        editorial team for story tips, press inquiries, corrections, and general
        feedback. We take every message seriously and protect confidential sources.
      </p>

      <ContactClient />
    </>
  );
}
// import ContactClient from "@/components/ContactClient";


// const SITE_URL = "https://www.newswireninja.com";
// const SITE_NAME = "Newswireninja";

// export const metadata = {
//   title: "Contact Us — NEWSWIRENINJA",
//   description:
//     "Get in touch with the NEWSWIRENINJA editorial team. Submit story tips, press inquiries, corrections, or general feedback through our contact page.",
//   keywords: [
//     "contact newswireninja",
//     "news tip",
//     "press inquiry",
//     "editorial contact",
//     "story submission",
//     "feedback",
//   ],
//   alternates: {
//     canonical: `${SITE_URL}/contact`,
//   },
//   openGraph: {
//     title: "Contact NEWSWIRENINJA — Get in Touch",
//     description:
//       "Reach the NEWSWIRENINJA editorial team for story tips, press inquiries, corrections, and general questions.",
//     url: `${SITE_URL}/contact`,
//     type: "website",
//     siteName: SITE_NAME,
//     images: [
//       {
//         url: `${SITE_URL}/images/newswireninja-logo.webp`,
//         width: 1200,
//         height: 630,
//         alt: "Contact NEWSWIRENINJA",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Contact NEWSWIRENINJA",
//     description:
//       "Reach the NEWSWIRENINJA editorial team for story tips, press inquiries, and feedback.",
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

// const contactPageJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "ContactPage",
//   "@id": `${SITE_URL}/contact#contactpage`,
//   name: "Contact NEWSWIRENINJA",
//   url: `${SITE_URL}/contact`,
//   description:
//     "Contact the NEWSWIRENINJA editorial team for story tips, press inquiries, corrections, or general feedback.",
//   publisher: {
//     "@type": "NewsMediaOrganization",
//     "@id": `${SITE_URL}/#organization`,
//     name: SITE_NAME,
//   },
// };

// const breadcrumbJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   "@id": `${SITE_URL}/contact#breadcrumb`,
//   itemListElement: [
//     { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Contact",
//       item: `${SITE_URL}/contact`,
//     },
//   ],
// };

// export default function ContactPage() {
//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       <section className="sr-only">
//         <h1>Contact NEWSWIRENINJA — Editorial Team</h1>
//         <p>
//           Reach out to the NEWSWIRENINJA editorial team for story tips, press
//           inquiries, corrections, and general feedback. We take every message
//           seriously and protect confidential sources.
//         </p>
//       </section>

//      <ContactClient/>
//     </>
//   );
// }