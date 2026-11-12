"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import { FaRegFileAlt, FaUser, FaQuoteLeft, FaInfoCircle } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import {
  FiSearch,
  FiLink,
  FiExternalLink,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiTag,
} from "react-icons/fi";

// Playfair Display is a variable font (400-900), so no weight list is needed.
// (A weight array breaks the Turbopack build on Vercel.)
const playfair = Playfair_Display({
  subsets: ["latin"],
});
// Source Serif 4 is a variable font, so no weight list is needed.
// (A weight array + two styles breaks the Turbopack build on Vercel.)
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const NAVY = "#0f1f3d";
const GOLD = "#e8a33d";
const BLUE = "#1d4f9c";

// NYT spotlight card (image goes in /public/images/nyt-alina-habba.webp)
const NYT_CARD = {
  image: "/images/nyt-alina-habba.webp",
  width: 1625,
  height: 2160,
  alt: "The New York Times report on Alina Habba losing a $50 million contract",
  text:
    "The New York Times reports that Alina Habba has lost a $50 million contract tied to a family company, weeks before a presidential pardon for the family’s patriarch.",
  href: "https://www.nytimes.com/2026/11/10/us/politics/alina-habba-fired-pardon.html",
};

const GLANCE_ICONS = {
  document: FaRegFileAlt,
  person: FaUser,
  search: FiSearch,
};

// DD/MM/YYYY → "Oct 29, 2026"
const shortDate = (dateStr) => {
  if (!dateStr) return "";
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return dateStr;
};

function GoldRule({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[3px] w-14 ${className}`}
      style={{ backgroundColor: GOLD }}
    />
  );
}

// "In the News" spotlight card: navy header, image, short text, Read more
function NytCard() {
  return (
    <section
      aria-label="In the news: The New York Times"
      className="overflow-hidden rounded-sm bg-white"
      style={{
        border: "1px solid #c9d8ee",
        boxShadow: "0 4px 14px rgba(15, 31, 61, 0.12)",
      }}
    >
      {/* Header strip */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ backgroundColor: NAVY }}
      >
        <h2 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white">
          In the News
        </h2>
        <span
          aria-hidden="true"
          className="block h-[3px] w-8"
          style={{ backgroundColor: GOLD }}
        />
      </div>

      {/* Image */}
      <a
        href={NYT_CARD.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read the New York Times article on Alina Habba"
        className="block"
      >
        <Image
          src={NYT_CARD.image}
          alt={NYT_CARD.alt}
          width={NYT_CARD.width}
          height={NYT_CARD.height}
          sizes="300px"
          className="block h-auto w-full"
        />
      </a>

      {/* Text + Read more */}
      <div className="px-4 pb-4 pt-3.5" style={{ borderTop: `3px solid ${GOLD}` }}>
        <p className="text-[13px] leading-relaxed text-gray-700">
          {NYT_CARD.text}
        </p>

        <a
          href={NYT_CARD.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3.5 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide text-white transition hover:opacity-90"
          style={{ backgroundColor: BLUE }}
        >
          Read more
          <FiArrowUpRight
            className="text-[15px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}

export default function ClientArticlePage({
  article,
  related = [],
  more = [],
  shareUrl = "",
}) {
  const scroller = useRef(null);
  const sidebarRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [stickyTop, setStickyTop] = useState(16);

  // Sidebar scrolls with the page until its bottom reaches the bottom of the
  // viewport, then it sticks there until the main column ends.
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    const GAP = 16;
    const update = () => {
      const h = el.offsetHeight;
      // Tall sidebar -> negative top (scrolls first, then sticks at its bottom).
      // Short sidebar -> sticks at the top right away.
      setStickyTop(Math.min(GAP, window.innerHeight - h - GAP));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const author = article.author || {};
  const sections = article.sections || [];
  const intro = article.intro || [];
  const tags = article.tags || [];
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(article.title);

  const scrollMore = (dir) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: ignore */
    }
  };

  const sourcesLine = (
    <p className="mt-6 text-[1rem]">
      <strong className="font-semibold">Sources:</strong>{" "}
      {(article.sources || []).map((s, i) => (
        <span key={s.url}>
          {i > 0 && " • "}
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline"
            style={{ color: BLUE }}
          >
            {s.label}
          </a>
        </span>
      ))}
    </p>
  );

  return (
    <article
      className={`${sourceSerif.className} bg-white`}
      style={{ color: "#1f2937" }}
    >
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #e9f0fb 0%, #eef3fb 45%, #f4f7fc 100%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-8 lg:pt-4 lg:pb-7 lg:min-h-[340px]">
          <nav aria-label="Breadcrumb" className="text-xs mb-7 lg:mb-4">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:underline" style={{ color: BLUE }}>
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href={`/${article.category}`}
                  className="hover:underline capitalize"
                  style={{ color: BLUE }}
                >
                  {article.category}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">{article.title}</li>
            </ol>
          </nav>

          <div className="lg:w-[46%]">
            <span
              className="inline-block text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5"
              style={{ backgroundColor: "#12306b" }}
            >
              {article.label}
            </span>

            <h1
              className={`${playfair.className} mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[2.2rem] leading-[1.1] font-bold`}
              style={{ color: NAVY }}
            >
              {article.title}
            </h1>
            <GoldRule className="mt-5 lg:mt-4" />

            <p className="mt-5 lg:mt-4 text-base sm:text-[1.05rem] lg:text-[0.95rem] italic text-gray-600 leading-relaxed max-w-md">
              {article.deck}
            </p>

            <div className="mt-6 lg:mt-5 flex items-center gap-4">
              <div className="flex items-center gap-3">
                {author.image && (
                  <Image
                    src={author.image}
                    alt={author.name || "Author"}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold" style={{ color: NAVY }}>
                    {author.name}
                  </p>
                  <p className="text-[11px] text-gray-500">{author.role}</p>
                </div>
              </div>
              <span className="h-8 w-px bg-gray-300" aria-hidden="true" />
              <p className="text-xs text-gray-500">Updated {article.updated}</p>
            </div>
          </div>
        </div>

        {/* Artwork */}
        {article.heroImageDesktop ? (
          <>
            {/* Mobile / tablet: current image, below the text */}
            <div className="relative z-0 w-full aspect-[16/10] sm:aspect-[2/1] lg:hidden">
              <Image
                src={article.heroImage || article.image}
                alt={article.imageAlt || ""}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[85%_center]"
              />
            </div>

            {/* Laptop / desktop: full-width banner, empty left side sits behind the text */}
            <div className="relative z-0 hidden lg:block lg:absolute lg:inset-0">
              <Image
                src={article.heroImageDesktop}
                alt={article.imageAlt || ""}
                fill
                sizes="100vw"
                className="object-cover object-[center_25%]"
              />
            </div>
          </>
        ) : (
          /* Artwork: mobile = below the text, desktop = right side fading into the left */
          <div className="relative z-0 w-full aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
            <Image
              src={article.heroImage || article.image}
              alt={article.imageAlt || ""}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="hero-art-mask object-cover object-[85%_center] lg:object-center"
            />
          </div>
        )}
      </section>

      {/* ================= BODY ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-10">
        {/* ---------- MAIN COLUMN ---------- */}
        <div className="min-w-0">
          {/* At a glance */}
          <section
            aria-label="At a glance"
            className="rounded-sm px-5 py-5"
            style={{ backgroundColor: "#eaf1fb" }}
          >
            <h2
              className="text-[11px] font-bold tracking-[0.18em] uppercase mb-4"
              style={{ color: "#12306b" }}
            >
              At a glance
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[#c9d8ee]">
              {(article.atAGlance || []).map((g, i) => {
                const Icon = GLANCE_ICONS[g.icon] || FaRegFileAlt;
                return (
                  <li
                    key={i}
                    className="flex items-center gap-3 sm:px-4 first:sm:pl-0 last:sm:pr-0"
                  >
                    <Icon
                      className="shrink-0 text-[26px]"
                      style={{ color: BLUE }}
                      aria-hidden="true"
                    />
                    <span className="text-[13px] leading-snug text-gray-600">
                      {g.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Intro with drop cap */}
          <div className="mt-7 text-[1.02rem] leading-[1.65]">
            {intro.map((p, i) =>
              i === 0 ? (
                <p key={i} className="mb-4 overflow-hidden">
                  <span
                    className={`${playfair.className} float-left mr-3 mt-1 text-[4.2rem] leading-[0.8] font-bold`}
                    style={{ color: NAVY }}
                    aria-hidden="true"
                  >
                    {p.charAt(0)}
                  </span>
                  <span className="sr-only">{p.charAt(0)}</span>
                  {p.slice(1)}
                </p>
              ) : (
                <p key={i} className="mb-4">
                  {p}
                </p>
              )
            )}
          </div>

          {/* Sections */}
          {sections.map((s) => (
            <section key={s.heading} className="mt-9">
              <h2
                className={`${playfair.className} text-[1.7rem] font-bold leading-tight`}
                style={{ color: NAVY }}
              >
                {s.heading}
              </h2>
              <GoldRule className="mt-3 mb-5" />

              <div className="text-[1.02rem] leading-[1.65]">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {s.pullQuote && (
                <blockquote
                  className="my-8 flex items-start gap-5 rounded-sm px-6 py-6"
                  style={{ backgroundColor: "#eaf1fb" }}
                >
                  <FaQuoteLeft
                    className="shrink-0 text-3xl mt-1"
                    style={{ color: BLUE }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="italic text-[1.1rem] leading-relaxed"
                      style={{ color: "#1e3a6e" }}
                    >
                      {s.pullQuote}
                    </p>
                    <span
                      aria-hidden="true"
                      className="block mt-3 h-[2px] w-10"
                      style={{ backgroundColor: GOLD }}
                    />
                  </div>
                </blockquote>
              )}
            </section>
          ))}

          {/* ---------- TAGS CARD ---------- */}
          {tags.length > 0 && (
            <section
              aria-label="Article tags"
              className="mt-10 rounded-sm border border-[#c9d8ee] bg-white px-5 py-5"
              style={{ borderTop: `3px solid ${GOLD}` }}
            >
              <h2
                className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase mb-4"
                style={{ color: "#12306b" }}
              >
                <FiTag style={{ color: BLUE }} aria-hidden="true" />
                Tags
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <li key={tag}>
                    <span
                      className="inline-block rounded-full px-3.5 py-1.5 text-[12.5px] font-medium leading-none"
                      style={{
                        backgroundColor: "#eaf1fb",
                        color: "#12306b",
                        border: "1px solid #c9d8ee",
                      }}
                    >
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {sourcesLine}

          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-[13px] font-semibold" style={{ color: NAVY }}>
              Share Article
            </span>
            <div className="flex items-center gap-2.5">
              {[
                {
                  label: "Share on X",
                  href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                  Icon: FaXTwitter,
                },
                {
                  label: "Share on Facebook",
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                  Icon: FaFacebookF,
                },
                {
                  label: "Share on LinkedIn",
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                  Icon: FaLinkedinIn,
                },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
                >
                  <Icon className="text-[15px]" />
                </a>
              ))}
              <button
                type="button"
                onClick={copyLink}
                aria-label="Copy link"
                title="Copy link"
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 hover:bg-gray-100 transition cursor-pointer"
              >
                {copied ? <FiCheck className="text-[15px]" /> : <FiLink className="text-[15px]" />}
              </button>
            </div>
            <span className="hidden sm:block flex-1 h-px bg-gray-200" aria-hidden="true" />
          </div>
        </div>

        {/* ---------- SIDEBAR ---------- */}
        <aside className="min-w-0">
          <div
            ref={sidebarRef}
            className="space-y-6 lg:sticky"
            style={{ top: stickyTop }}
          >
            {/* Key takeaways */}
            <section
              className="px-5 py-5 rounded-sm"
              style={{ backgroundColor: "#fbf3e4" }}
            >
              <h2
                className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "#12306b" }}
              >
                Key Takeaways
              </h2>
              <ul className="relative space-y-5">
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-2 bottom-2 w-px"
                  style={{ backgroundColor: "#d9c49b" }}
                />
                {(article.keyTakeaways || []).map((t, i) => (
                  <li key={i} className="relative pl-6 text-[13px] leading-snug text-gray-700">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-[#fbf3e4]"
                      style={{ backgroundColor: "#3a2f1a" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            {/* NYT spotlight card (above Sources) */}
            <NytCard />

            {/* Sources */}
            <section
              className="px-5 py-5 rounded-sm"
              style={{ backgroundColor: "#eaf1fb" }}
            >
              <h2
                className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase mb-4"
                style={{ color: "#12306b" }}
              >
                <span
                  aria-hidden="true"
                  className="w-3.5 h-3.5 rounded-full inline-block"
                  style={{ backgroundColor: BLUE }}
                />
                Sources
              </h2>
              <ul className="space-y-3">
                {(article.sources || []).map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-start justify-between gap-2 text-[13px] underline leading-snug"
                      style={{ color: BLUE }}
                    >
                      <span>{s.label}</span>
                      <FiExternalLink className="shrink-0 mt-0.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related coverage */}
            {related.length > 0 && (
              <section>
                <h2
                  className="px-4 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase rounded-sm"
                  style={{ backgroundColor: "#eaf1fb", color: "#12306b" }}
                >
                  Related Coverage
                </h2>
                <ul className="divide-y divide-gray-200">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/${r.category}/${r.slug}`}
                        title={r.title}
                        className="group flex gap-3 py-4"
                      >
                        <Image
                          src={r.image}
                          alt={r.imageAlt || r.title}
                          width={80}
                          height={56}
                          className="w-20 h-14 object-cover rounded-sm shrink-0"
                        />
                        <div className="min-w-0">
                          <p
                            className={`${playfair.className} text-[13px] font-semibold leading-snug group-hover:underline`}
                            style={{ color: NAVY }}
                          >
                            {r.title}
                          </p>
                          <p className="mt-1 text-[11px] text-gray-500">
                            {shortDate(r.date)}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Editor's note */}
            <section
              className="px-5 py-5 rounded-sm"
              style={{ backgroundColor: "#eaf1fb" }}
            >
              <h2
                className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase mb-3"
                style={{ color: "#12306b" }}
              >
                <FaInfoCircle style={{ color: NAVY }} aria-hidden="true" />
                Editor&apos;s Note
              </h2>
              <p className="italic text-[13px] leading-relaxed text-gray-600">
                {article.editorNote}
              </p>
            </section>
          </div>
        </aside>
      </div>

      {/* ================= AUTHOR BIO ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          aria-label="About the author"
          className="py-7 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-4 sm:w-[300px] shrink-0">
            {author.image && (
              <Image
                src={author.image}
                alt={author.name || "Author"}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
            )}
            <div className="leading-tight">
              <p className="text-[13px] font-semibold" style={{ color: NAVY }}>
                {author.name}
              </p>
              <p className="text-xs text-gray-500">{author.role}</p>
            </div>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed max-w-3xl">
            {author.bio}
          </p>
        </section>
      </div>

      {/* ================= MORE FROM ================= */}
      {more.length > 0 && (
        <section
          aria-label="More from Newswire Ninja"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h2
              className={`${playfair.className} text-[1.35rem] font-bold`}
              style={{ color: NAVY }}
            >
              More from Newswire Ninja
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollMore(-1)}
                aria-label="Previous stories"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => scrollMore(1)}
                aria-label="Next stories"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div
            ref={scroller}
            className="no-scrollbar grid grid-flow-col auto-cols-[85%] sm:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] gap-6 overflow-x-auto snap-x snap-mandatory"
          >
            {more.map((m) => (
              <Link
                key={`${m.category}-${m.slug}`}
                href={`/${m.category}/${m.slug}`}
                title={m.title}
                className="group snap-start"
              >
                <Image
                  src={m.image}
                  alt={m.imageAlt || m.title}
                  width={500}
                  height={200}
                  className="w-full h-36 sm:h-40 object-cover rounded-sm"
                />
                <p className="mt-3 text-[11px] font-semibold tracking-wider uppercase text-gray-500">
                  {m.category}
                </p>
                <h3
                  className={`${playfair.className} mt-1 text-[1.05rem] font-bold leading-snug group-hover:underline`}
                  style={{ color: NAVY }}
                >
                  {m.title}
                </h3>
                <p className="mt-1.5 text-xs text-gray-500">{shortDate(m.date)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}