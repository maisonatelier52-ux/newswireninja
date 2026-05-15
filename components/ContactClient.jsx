"use client";

import { useState } from "react";
import Link from "next/link";

const SITE_URL = "https://www.newswireninja.com";

const contactReasons = [
  {
    id: "tip",
    label: "Story Tip",
    email: "tips@newswireninja.com",
    desc: "Have information about a story we should investigate or cover? We protect sources.",
    icon: "📰",
  },
  {
    id: "press",
    label: "Press & Media",
    email: "press@newswireninja.com",
    desc: "Media inquiries, interview requests, and official statements for journalists.",
    icon: "🎙️",
  },
  {
    id: "editorial",
    label: "Editorial",
    email: "editorial@newswireninja.com",
    desc: "Feedback on our coverage, corrections, or questions about editorial decisions.",
    icon: "✏️",
  },
  {
    id: "general",
    label: "General",
    email: "contact@newswireninja.com",
    desc: "Everything else — partnerships, feedback, and general questions.",
    icon: "✉️",
  },
];

export default function ContactClient() {
  const [selectedReason, setSelectedReason] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Valid email required";
    if (!formData.subject.trim()) e.subject = "Subject required";
    if (!formData.message.trim() || formData.message.trim().length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const target = selectedReason
      ? contactReasons.find((r) => r.id === selectedReason)?.email
      : "contact@newswireninja.com";
    const mailto = `mailto:${target}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSelectedReason(null);
    setErrors({});
  };

  const activeEmail = selectedReason
    ? contactReasons.find((r) => r.id === selectedReason)?.email
    : "contact@newswireninja.com";

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" title="Home" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">Contact</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto">
        {/* Header — single visible H1 on this page */}
        <div className="border-b-2 border-black pb-8 mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
            Newswireninja
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-none tracking-tight">
            GET IN
            <br />
            <span className="italic font-normal">TOUCH.</span>
          </h1>
          <p className="mt-6 text-base text-gray-600 max-w-xl leading-relaxed">
            Every message is read. Story tips are taken seriously and
            confidential sources are always protected.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* LEFT — Contact Reasons + Info */}
          <aside className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                What&apos;s this about?
              </h2>
              <div className="space-y-2">
                {contactReasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() =>
                      setSelectedReason(
                        selectedReason === reason.id ? null : reason.id
                      )
                    }
                    className={`w-full text-left px-4 py-4 border-l-2 transition-all duration-150 ${
                      selectedReason === reason.id
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-gray-50 hover:border-gray-700 hover:bg-gray-100 text-black"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl leading-none mt-0.5">
                        {reason.icon}
                      </span>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            selectedReason === reason.id
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {reason.label}
                        </p>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${
                            selectedReason === reason.id
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                        >
                          {reason.desc}
                        </p>
                        <p
                          className={`text-xs mt-1 font-mono ${
                            selectedReason === reason.id
                              ? "text-gray-200"
                              : "text-gray-400"
                          }`}
                        >
                          {reason.email}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200" />

            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                  Response Time
                </p>
                <p>
                  Editorial replies within 2–3 business days. Story tips
                  reviewed within 24 hours.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                  Source Protection
                </p>
                <p>
                  We take confidentiality seriously. If you have sensitive
                  information, use our encrypted email or{" "}
                  {/* FIXED: Added title attribute to SecureDrop link */}
                  <a
                    href="https://securedrop.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit SecureDrop — secure whistleblower submission system"
                    className="underline hover:text-black transition"
                  >
                    SecureDrop
                  </a>
                  .
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                  Social
                </p>
                <div className="flex gap-4 mt-1">
                  <a
                    href="https://x.com/NNews80653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black transition text-xs"
                    title="Follow Newswireninja on X (Twitter)"
                  >
                    X / Twitter
                  </a>
                  <a
                    href="https://www.instagram.com/newswireninja_26/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black transition text-xs"
                    title="Follow Newswireninja on Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://substack.com/@newswireninja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black transition text-xs"
                    title="Follow Newswireninja on Substack"
                  >
                    Substack
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-80 text-center py-16 border-2 border-black">
                <div className="text-5xl mb-6">✓</div>
                <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
                <p className="text-gray-600 max-w-sm leading-relaxed mb-8 text-sm">
                  Your email client should have opened. If not, email us
                  directly at{" "}
                  <span className="font-mono text-black">{activeEmail}</span>.
                </p>
                <button
                  onClick={handleReset}
                  className="border-2 border-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-150"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
                  Your Message
                  {selectedReason && (
                    <span className="ml-2 normal-case text-black">
                      →{" "}
                      {
                        contactReasons.find((r) => r.id === selectedReason)
                          ?.label
                      }
                    </span>
                  )}
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Full Name <span className="text-black">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleChange("name")}
                      placeholder="Jane Smith"
                      className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
                        errors.name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                      Email <span className="text-black">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="jane@example.com"
                      className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Subject <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={handleChange("subject")}
                    placeholder="Story tip: City council vote irregularities"
                    className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    Message <span className="text-black">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange("message")}
                    rows={7}
                    placeholder="Tell us what's on your mind. Include all relevant details — who, what, when, where, and why it matters."
                    className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors resize-none placeholder-gray-300 ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                  />
                  <div className="flex justify-between items-start mt-1">
                    {errors.message ? (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {formData.message.length} chars
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 active:scale-95 transition-all duration-150"
                  >
                    Send Message →
                  </button>
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    Opens your email client. Your message is sent securely.
                  </p>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed pt-2 border-t border-gray-100">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-black transition"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </Link>
                  . We never share your contact information with third parties.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-20 border-t-2 border-black pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
              Headquarters
            </p>
            <p className="text-sm text-gray-700">
              NEWSWIRENINJA · Boston, Massachusetts, USA
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/about"
              className="underline hover:text-gray-600 transition text-gray-700"
              title="About Newswireninja"
            >
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="underline hover:text-gray-600 transition text-gray-700"
              title="Privacy Policy"
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="underline hover:text-gray-600 transition text-gray-700"
              title="Terms"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const SITE_URL = "https://www.newswireninja.com";

// const contactReasons = [
//   {
//     id: "tip",
//     label: "Story Tip",
//     email: "tips@newswireninja.com",
//     desc: "Have information about a story we should investigate or cover? We protect sources.",
//     icon: "📰",
//   },
//   {
//     id: "press",
//     label: "Press & Media",
//     email: "press@newswireninja.com",
//     desc: "Media inquiries, interview requests, and official statements for journalists.",
//     icon: "🎙️",
//   },
//   {
//     id: "editorial",
//     label: "Editorial",
//     email: "editorial@newswireninja.com",
//     desc: "Feedback on our coverage, corrections, or questions about editorial decisions.",
//     icon: "✏️",
//   },
//   {
//     id: "general",
//     label: "General",
//     email: "contact@newswireninja.com",
//     desc: "Everything else — partnerships, feedback, and general questions.",
//     icon: "✉️",
//   },
// ];

// export default function ContactClient() {
//   const [selectedReason, setSelectedReason] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const e = {};
//     if (!formData.name.trim()) e.name = "Name required";
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
//       e.email = "Valid email required";
//     if (!formData.subject.trim()) e.subject = "Subject required";
//     if (!formData.message.trim() || formData.message.trim().length < 20)
//       e.message = "Message must be at least 20 characters";
//     return e;
//   };

//   const handleChange = (field) => (e) => {
//     setFormData((prev) => ({ ...prev, [field]: e.target.value }));
//     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const handleSubmit = () => {
//     const errs = validate();
//     if (Object.keys(errs).length > 0) {
//       setErrors(errs);
//       return;
//     }
//     const target = selectedReason
//       ? contactReasons.find((r) => r.id === selectedReason)?.email
//       : "contact@newswireninja.com";
//     const mailto = `mailto:${target}?subject=${encodeURIComponent(
//       formData.subject
//     )}&body=${encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
//     )}`;
//     window.location.href = mailto;
//     setSubmitted(true);
//   };

//   const handleReset = () => {
//     setSubmitted(false);
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setSelectedReason(null);
//     setErrors({});
//   };

//   const activeEmail = selectedReason
//     ? contactReasons.find((r) => r.id === selectedReason)?.email
//     : "contact@newswireninja.com";

//   return (
//     <main className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 font-serif bg-white min-h-screen">
//       {/* Breadcrumb */}
//       <nav aria-label="Breadcrumb" className="mb-8">
//         <ol className="flex items-center gap-2 text-sm text-gray-500">
//           <li>
//             <Link href="/" title="Home" className="hover:text-black transition">
//               Home
//             </Link>
//           </li>
//           <li>/</li>
//           <li className="text-gray-800 font-medium">Contact</li>
//         </ol>
//       </nav>

//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="border-b-2 border-black pb-8 mb-14">
//           <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
//             Newswireninja
//           </p>
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-none tracking-tight">
//             GET IN
//             <br />
//             <span className="italic font-normal">TOUCH.</span>
//           </h1>
//           <p className="mt-6 text-base text-gray-600 max-w-xl leading-relaxed">
//             Every message is read. Story tips are taken seriously and
//             confidential sources are always protected.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-16">
//           {/* LEFT — Contact Reasons + Info */}
//           <aside className="lg:col-span-2 space-y-10">
//             <div>
//               <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
//                 What&apos;s this about?
//               </h2>
//               <div className="space-y-2">
//                 {contactReasons.map((reason) => (
//                   <button
//                     key={reason.id}
//                     onClick={() =>
//                       setSelectedReason(
//                         selectedReason === reason.id ? null : reason.id
//                       )
//                     }
//                     className={`w-full text-left px-4 py-4 border-l-2 transition-all duration-150 ${
//                       selectedReason === reason.id
//                         ? "border-black bg-black text-white"
//                         : "border-gray-200 bg-gray-50 hover:border-gray-700 hover:bg-gray-100 text-black"
//                     }`}
//                   >
//                     <div className="flex items-start gap-3">
//                       <span className="text-xl leading-none mt-0.5">
//                         {reason.icon}
//                       </span>
//                       <div>
//                         <p
//                           className={`text-sm font-bold ${
//                             selectedReason === reason.id
//                               ? "text-white"
//                               : "text-black"
//                           }`}
//                         >
//                           {reason.label}
//                         </p>
//                         <p
//                           className={`text-xs mt-1 leading-relaxed ${
//                             selectedReason === reason.id
//                               ? "text-gray-300"
//                               : "text-gray-500"
//                           }`}
//                         >
//                           {reason.desc}
//                         </p>
//                         <p
//                           className={`text-xs mt-1 font-mono ${
//                             selectedReason === reason.id
//                               ? "text-gray-200"
//                               : "text-gray-400"
//                           }`}
//                         >
//                           {reason.email}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="border-t border-gray-200" />

//             <div className="space-y-4 text-sm text-gray-600">
//               <div>
//                 <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
//                   Response Time
//                 </p>
//                 <p>
//                   Editorial replies within 2–3 business days. Story tips
//                   reviewed within 24 hours.
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
//                   Source Protection
//                 </p>
//                 <p>
//                   We take confidentiality seriously. If you have sensitive
//                   information, use our encrypted email or{" "}
//                   <a
//                     href="https://securedrop.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-black transition"
//                   >
//                     SecureDrop
//                   </a>
//                   .
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
//                   Social
//                 </p>
//                 <div className="flex gap-4 mt-1">
//                   <a
//                     href="https://x.com/NNews80653"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-black transition text-xs"
//                     title="Follow on X"
//                   >
//                     X / Twitter
//                   </a>
//                   <a
//                     href="https://www.instagram.com/newswireninja_26/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-black transition text-xs"
//                     title="Follow on Instagram"
//                   >
//                     Instagram
//                   </a>
//                   <a
//                     href="https://substack.com/@newswireninja"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-black transition text-xs"
//                     title="Follow on Substack"
//                   >
//                     Substack
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* RIGHT — Form */}
//           <div className="lg:col-span-3">
//             {submitted ? (
//               /* Success State */
//               <div className="flex flex-col items-center justify-center h-full min-h-80 text-center py-16 border-2 border-black">
//                 <div className="text-5xl mb-6">✓</div>
//                 <h2 className="text-3xl font-bold mb-4">Message Sent</h2>
//                 <p className="text-gray-600 max-w-sm leading-relaxed mb-8 text-sm">
//                   Your email client should have opened. If not, email us
//                   directly at{" "}
//                   <span className="font-mono text-black">{activeEmail}</span>.
//                 </p>
//                 <button
//                   onClick={handleReset}
//                   className="border-2 border-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-150"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               /* Form */
//               <div className="space-y-6">
//                 <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
//                   Your Message
//                   {selectedReason && (
//                     <span className="ml-2 normal-case text-black">
//                       →{" "}
//                       {
//                         contactReasons.find((r) => r.id === selectedReason)
//                           ?.label
//                       }
//                     </span>
//                   )}
//                 </h2>

//                 {/* Name + Email */}
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
//                       Full Name <span className="text-black">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.name}
//                       onChange={handleChange("name")}
//                       placeholder="Jane Smith"
//                       className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
//                         errors.name
//                           ? "border-red-500"
//                           : "border-gray-300 focus:border-black"
//                       }`}
//                     />
//                     {errors.name && (
//                       <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
//                       Email <span className="text-black">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange("email")}
//                       placeholder="jane@example.com"
//                       className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
//                         errors.email
//                           ? "border-red-500"
//                           : "border-gray-300 focus:border-black"
//                       }`}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-xs mt-1">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
//                     Subject <span className="text-black">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.subject}
//                     onChange={handleChange("subject")}
//                     placeholder="Story tip: City council vote irregularities"
//                     className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors placeholder-gray-300 ${
//                       errors.subject
//                         ? "border-red-500"
//                         : "border-gray-300 focus:border-black"
//                     }`}
//                   />
//                   {errors.subject && (
//                     <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
//                   )}
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
//                     Message <span className="text-black">*</span>
//                   </label>
//                   <textarea
//                     value={formData.message}
//                     onChange={handleChange("message")}
//                     rows={7}
//                     placeholder="Tell us what's on your mind. Include all relevant details — who, what, when, where, and why it matters."
//                     className={`w-full border-b-2 py-3 text-sm bg-transparent focus:outline-none transition-colors resize-none placeholder-gray-300 ${
//                       errors.message
//                         ? "border-red-500"
//                         : "border-gray-300 focus:border-black"
//                     }`}
//                   />
//                   <div className="flex justify-between items-start mt-1">
//                     {errors.message ? (
//                       <p className="text-red-500 text-xs">{errors.message}</p>
//                     ) : (
//                       <span />
//                     )}
//                     <span className="text-xs text-gray-400 ml-auto">
//                       {formData.message.length} chars
//                     </span>
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <div className="pt-4 flex items-center gap-6">
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 active:scale-95 transition-all duration-150"
//                   >
//                     Send Message →
//                   </button>
//                   <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
//                     Opens your email client. Your message is sent securely.
//                   </p>
//                 </div>

//                 {/* Fine print */}
//                 <p className="text-xs text-gray-400 leading-relaxed pt-2 border-t border-gray-100">
//                   By submitting, you agree to our{" "}
//                   <Link
//                     href="/privacy-policy"
//                     className="underline hover:text-black transition"
//                     title="Privacy Policy"
//                   >
//                     Privacy Policy
//                   </Link>
//                   . We never share your contact information with third parties.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom Strip */}
//         <div className="mt-20 border-t-2 border-black pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
//               Headquarters
//             </p>
//             <p className="text-sm text-gray-700">
//               NEWSWIRENINJA · Boston, Massachusetts, USA
//             </p>
//           </div>
//           <div className="flex gap-6 text-sm">
//             <Link
//               href="/about"
//               className="underline hover:text-gray-600 transition text-gray-700"
//               title="About Newswireninja"
//             >
//               About
//             </Link>
//             <Link
//               href="/privacy-policy"
//               className="underline hover:text-gray-600 transition text-gray-700"
//               title="Privacy Policy"
//             >
//               Privacy
//             </Link>
//             <Link
//               href="/terms-and-conditions"
//               className="underline hover:text-gray-600 transition text-gray-700"
//               title="Terms"
//             >
//               Terms
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }