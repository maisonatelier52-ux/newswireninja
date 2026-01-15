export function generateHeroContext(title) {
  if (!title) return "";

  // Clean punctuation & lowercase
  const clean = title
    .replace(/[^\w\s]/g, "")
    .toLowerCase();

  // Remove stop words
  const stopWords = new Set([
    "the","in","on","at","of","to","for","and","or","with","a","an","as","by"
  ]);

  const words = clean.split(" ").filter(w => w.length > 3 && !stopWords.has(w));

  // Deduplicate
  const unique = [...new Set(words)];

  // Take top keywords (max 5)
  const keywords = unique.slice(0, 5);

  if (!keywords.length) return "";

  return `Coverage continues as ${keywords.join(", ")} remain central to this developing story.`;
}
