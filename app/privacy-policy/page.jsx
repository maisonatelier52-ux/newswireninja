
const SITE_URL = "https://www.newswireninja.com";

export const metadata = {
  title: "Privacy Policy — NEWSWIRENINJA",
  description:
    "Read NEWSWIRENINJA's Privacy Policy to understand how we collect, use, protect, and handle your information while you browse our independent news platform.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "NEWSWIRENINJA Privacy Policy",
    description:
      "Learn how NEWSWIRENINJA protects your privacy and manages information including cookies, analytics, and data usage.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: "Newswireninja",
    images: [
      {
        url: `${SITE_URL}/newswireninja-about-image.jpg`, // Update with your image path
        width: 1200,
        height: 630,
        alt: "Privacy Policy - NEWSWIRENINJA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWSWIRENINJA Privacy Policy",
    description:
      "Understand how NEWSWIRENINJA collects, uses, and safeguards user information across our platform.",
    images: [`${SITE_URL}/newswireninja-about-image.jpg`], // Update with your image path
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "NEWSWIRENINJA Privacy Policy",
            "url": `${SITE_URL}/privacy-policy`,
            "publisher": {
              "@type": "Organization",
              "name": "NEWSWIRENINJA",
              "url": SITE_URL,
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        id="privacy-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL,
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": `${SITE_URL}/privacy-policy`,
              },
            ],
          }),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 9, 2026
            </p>
          </div>

          <p>
            At <strong>NEWSWIRENINJA</strong>, we take your privacy seriously. 
            This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
          </p>

          <h2 className="font-semibold py-3 text-lg">1. Information We Collect</h2>
          <ul>
            <li><strong>Automatically Collected:</strong> IP address, browser type, device information, pages visited, time spent, referring site</li>
            <li><strong>Cookies & Similar Technologies:</strong> We use cookies for analytics, site performance, and personalized experience (you can manage them in your browser)</li>
            <li><strong>Voluntarily Provided:</strong> Email address (if you subscribe to newsletter), comments (if enabled in future)</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg">2. How We Use Your Information</h2>
          <ul>
            <li>To operate, maintain, and improve our website</li>
            <li>To understand how visitors use our content</li>
            <li>To detect and prevent technical issues or malicious activity</li>
            <li>To send occasional newsletters (only if you explicitly subscribe)</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg">3. Sharing of Information</h2>
          <p>
            We do <strong>NOT</strong> sell your personal information. 
            We may share anonymized data with:
          </p>
          <ul>
            <li>Analytics providers (Google Analytics, etc.)</li>
            <li>Hosting and infrastructure providers</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg">4. Third-Party Services</h2>
          <p>
            We use third-party services including (but not limited to):
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Cloudflare (for security & performance)</li>
            <li>Newsletter service (if you subscribe)</li>
          </ul>
          <p>Each of these services has its own privacy policy.</p>

          <h2 className="font-semibold py-3 text-lg">5. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request deletion of your data (where applicable)</li>
            <li>Opt-out of cookies via your browser settings</li>
            <li>Unsubscribe from newsletters at any time</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data. 
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="font-semibold py-3 text-lg">7. Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. 
            We do not knowingly collect personal information from children.
          </p>

          <h2 className="font-semibold py-3 text-lg">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. 
            The date at the top of the page indicates when it was last revised.
          </p>

          <h2 className="font-semibold py-3 text-lg">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-medium">
            privacy@newswireninja.com
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} NEWSWIRENINJA. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
