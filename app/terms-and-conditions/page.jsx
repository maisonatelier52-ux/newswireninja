import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";

export const metadata = {
  title: "Terms and Conditions | NEWSWIRENINJA",
  description:
    "Official Terms and Conditions for using NEWSWIRENINJA, including content use, rights, disclaimers, and liability limits.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
  openGraph: {
    title: "Terms and Conditions | NEWSWIRENINJA",
    description:
      "Review the official Terms and Conditions governing use of the NEWSWIRENINJA website and services.",
    url: `${SITE_URL}/terms-and-conditions`,
    type: "website",
    siteName: "Newswireninja",
    images: [
      {
        url: `${SITE_URL}/newswireninja-about-image.jpg`, // Reuse or update with a suitable image
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - NEWSWIRENINJA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWSWIRENINJA Terms and Conditions",
    description:
      "The legal terms that apply when accessing or using content from NEWSWIRENINJA.",
    images: [`${SITE_URL}/newswireninja-about-image.jpg`],
  },
};

export default function TermsAndConditions() {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": `${SITE_URL}/terms-and-conditions`,
            "description":
              "Terms and Conditions for using the NEWSWIRENINJA independent news platform.",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "name": "NEWSWIRENINJA",
              "url": SITE_URL,
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        id="terms-breadcrumb-jsonld"
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
                "name": "Terms and Conditions",
                "item": `${SITE_URL}/terms-and-conditions`,
              },
            ],
          }),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 12, 2026
            </p>
          </div>

          <p>
            Welcome to <strong>NEWSWIRENINJA</strong>. These Terms and Conditions ("Terms") govern your access to and use of our website located at {SITE_URL} and any related services (collectively, the "Service").
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must not use the Service.
          </p>

          <h2 className="font-semibold py-3 text-lg">1. Use of the Service</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Infringe the rights of others, including intellectual property rights</li>
            <li>Transmit viruses, malware, or any other harmful code</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Use any automated means (scraping, bots, etc.) to access or collect content without permission</li>
            <li>Harass, threaten, or impersonate others</li>
          </ul>

          <h2 className="font-semibold py-3 text-lg">2. Intellectual Property</h2>
          <p>
            All content on the Service — including articles, headlines, images, graphics, and design — is owned by NEWSWIRENINJA or its licensors and protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may view and print content for personal, non-commercial use only. Any other use (republication, redistribution, commercial exploitation, derivative works) requires our prior written permission.
          </p>

          <h2 className="font-semibold py-3 text-lg">3. User-Generated Content</h2>
          <p>
            If we enable comments, submissions, or other user contributions in the future, you retain ownership of your content but grant us a worldwide, non-exclusive, royalty-free, perpetual license to use, reproduce, modify, adapt, publish, translate, distribute, and display it in any media.
          </p>
          <p>
            You agree that your submissions will not violate any law or third-party rights and will not contain unlawful, defamatory, obscene, or abusive material. We may remove or refuse to publish any content at our sole discretion.
          </p>

          <h2 className="font-semibold py-3 text-lg">4. Accuracy and Reliability of Information</h2>
          <p>
            NEWSWIRENINJA strives for accuracy and timeliness, but we do not warrant that all information is complete, correct, or up-to-date. The Service is provided for informational purposes only — not as professional advice (legal, financial, medical, etc.).
          </p>
          <p>
            You rely on the content at your own risk.
          </p>

          <h2 className="font-semibold py-3 text-lg">5. Third-Party Links and Services</h2>
          <p>
            The Service may contain links to third-party websites or services. We are not responsible for their content, privacy practices, or availability. Your use of third-party sites is at your own risk.
          </p>

          <h2 className="font-semibold py-3 text-lg">6. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h2 className="font-semibold py-3 text-lg">7. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, NEWSWIRENINJA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>

          <h2 className="font-semibold py-3 text-lg">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold NEWSWIRENINJA harmless from any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your use of the Service.
          </p>

          <h2 className="font-semibold py-3 text-lg">9. Changes to the Terms</h2>
          <p>
            We may revise these Terms at any time. The updated version will be posted here with a revised "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-semibold py-3 text-lg">10. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of Massachusetts, United States, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the state or federal courts located in Boston, Massachusetts.
          </p>

          <h2 className="font-semibold py-3 text-lg">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="font-medium">
            legal@newswireninja.com
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} NEWSWIRENINJA. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}