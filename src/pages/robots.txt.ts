import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  // Crawlers must be able to read the global noindex metadata and HTTP header.
  const lines = ["User-agent: *", "Allow: /"];

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
