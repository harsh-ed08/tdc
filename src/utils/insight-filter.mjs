/**
 * @template {{category: string, title: string, postType?: string, business?: string, description?: string | null, spotlight?: boolean}} T
 * @param {T[]} articles Newest first.
 * @param {string[]} categories An empty selection includes every category.
 * @param {string} search
 * @param {number} limit Visible regular posts, excluding the fixed spotlight.
 * @param {string[]} businesses
 */
export function selectInsights(articles, categories = [], search = "", limit = 6, businesses = []) {
  const query = search.trim().toLocaleLowerCase();
  const spotlight = articles.find((article) => article.spotlight) ?? articles[0];
  const matches = articles.filter((article) =>
    article !== spotlight &&
    (!categories.length || categories.includes(article.postType ?? article.category)) &&
    (!businesses.length || businesses.includes(article.business ?? "")) &&
    (!query || `${article.title} ${article.description ?? ""} ${article.category} ${article.postType ?? ""} ${article.business ?? ""}`.toLocaleLowerCase().includes(query))
  );
  return { spotlight, cards: matches.slice(0, Math.max(0, limit)), total: matches.length, hasMore: matches.length > limit };
}
