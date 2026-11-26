# Newswire Ninja project update — 26 November 2026

## Changes implemented

- Based on latest 4-card Politics homepage: permanent Alina Habba card #4, with duplicate-prevention across the rest of the homepage; Business section remains below it.
- SearchAction removed from homepage WebSite JSON-LD because `/search` route does not exist.
- Only one visible homepage H1 and one visible H1 per category page; redundant hidden SEO stuffing and duplicate site name from category titles removed.
- Author metadata and article structured data use the actual named reporter, with fallback to existing category authors; publication dates and modified dates are labeled correctly (no invented update).
- News article JSON-LD publisher logo dimensions now use original image dimensions 256×219; responsive `sizes` added for main article and selected homepage images.
- A shared `ArticleSourcesCard.jsx` renders a sources/reference card on standard article pages and the custom Alina Habba article detail page. **Each source is one separate horizontal row, stacking links vertically**. 106 out of 106 articles have one or more public event-specific external reference URLs recorded in `public/data/articles.json` (116 links in total). Full index in `SOURCES_AUDIT_ALL_ARTICLES.csv`.
- Alina Habba article's complete original record (including its existing source links) and its narrative are unchanged from the input ZIP.
- Main sitemap article modified timestamps come from actual dataset dates; no synthetic today-last-modified dates on unchanged pages; contact URL included.
- `robots.txt` no longer disallows `/_next/` JavaScript and CSS. Google News sitemap now includes only the most recent 48 hours, as Google's news-specific standard requires.
- Kept the existing `/about` → `/about-newswireninja` redirect. Google Search Console’s old 404 paths need case-by-case review; no broad, potentially looping or unrelated redirects were added. Uppercase `/Sports/...` URLs should be corrected at their linking sources and, if still required, handled with an exact-case redirect after testing.

## Accuracy and content review

Source links support the reported events or specific components, but **they do not mean every sentence, figure, allegation, or quoted statement in each article has been independently fact-checked**. Use `SOURCES_AUDIT_ALL_ARTICLES.csv` to review references and article claims before publication, especially claims about people and court proceedings. Some official references were published after their article and provide retrospective evidence, not contemporaneous attribution. The Alina Habba article was left unchanged at the user's request.

## Tests / deployment

1. `npm ci` and `npm run build` on a machine with package registry access.
2. Confirm `/robots.txt` does not block `/_next/` and `/news-sitemap.xml` includes only 48-hour-old or newer posts.
3. Check article links and source cards, article metadata in View Source, mobile image layout.
4. Review old 404 URLs in Search Console before adding any more redirects.
5. Google indexing and ranking are not guaranteed solely by code changes or references.
