import { FiExternalLink, FiBookOpen } from "react-icons/fi";

/**
 * One source URL per ROW, on both regular and custom article pages.
 * Never generates a substitute/citation when editorial verification is pending.
 * Add links only after checking that the destination supports the article's claims.
 */
export default function ArticleSourcesCard({ sources = [] }) {
  const safeSources = (Array.isArray(sources) ? sources : []).filter(
    (source) =>
      source &&
      typeof source.label === "string" &&
      typeof source.url === "string" &&
      /^https:\/\//i.test(source.url)
  );

  return (
    <section
      aria-labelledby="article-sources-title"
      className="mt-10 mb-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <header className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <FiBookOpen aria-hidden="true" className="text-blue-700" />
        <h2 id="article-sources-title" className="m-0 text-lg font-semibold text-slate-900">
          Sources &amp; references
        </h2>
      </header>
      {safeSources.length ? (
        <ol className="m-0 list-none divide-y divide-slate-100 p-0">
          {safeSources.map((source, index) => (
            <li key={`${source.url}-${index}`} className="m-0 p-0">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm text-blue-800 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600 sm:px-6"
                aria-label={`Open source ${index + 1}: ${source.label} (new tab)`}
              >
                <span className="min-w-0 break-words leading-relaxed">
                  <span className="mr-2 text-xs font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                  {source.label}
                </span>
                <FiExternalLink aria-hidden="true" className="shrink-0 text-blue-600" />
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="m-0 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6">
          Specific external references are pending editorial verification. We do not list unverified links as sources.
        </p>
      )}
    </section>
  );
}
