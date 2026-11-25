import { sanityClient } from "sanity:client";

export interface Insight {
  _id: string;
  title: string;
  slug: string;
  category: string;
  postType: string;
  business: string;
  author: string | null;
  description: string | null;
  publishedAt: string | null;
  spotlight: boolean;
  image: string | null;
  imageAlt: string | null;
  body: string | null;
}

export async function getInsights() {
  return sanityClient.withConfig({ maxRetries: 1 }).fetch<Insight[]>(`
    *[_type == "insight" && defined(slug.current)]
    | order(publishedAt desc, _createdAt desc) {
      _id, title, "slug": slug.current,
      "category": coalesce(category, "Uncategorized"),
      "postType": coalesce(postType, select(category in ["Blog", "Article", "Report"] => category), "Article"),
      "business": coalesce(business, select(!(category in ["Blog", "Article", "Report"]) => category), ""),
      author, description, publishedAt,
      "spotlight": coalesce(spotlight, false),
      "image": featuredImage.asset->url,
      "imageAlt": featuredImage.alt,
      "body": pt::text(content)
    }
  `, {}, { perspective: "published", timeout: 15000 });
}

export function insightDate(value: string | null) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "short", year: "2-digit", timeZone: "UTC",
  }).format(date);
}
