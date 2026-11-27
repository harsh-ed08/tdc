/** @returns {import('vite').Plugin} */
export function embeddedPreview() {
  return {
    name: "decimal:embedded-preview",
    apply: "serve",
    enforce: "post",
    configureServer(server) {
      // Astro prepends its fetch-metadata guard in a post hook. Run after it
      // and normalize only embedded document requests, before that guard.
      return () => {
        server.middlewares.stack.unshift({
          route: "",
          handle: normalizeEmbeddedNavigation,
        });
      };
    },
  };
}

/**
 * Embedded webviews can label iframe navigations as no-cors. Astro accepts
 * navigations but otherwise rejects cross-site no-cors requests in development.
 * Keep scripts, fetches, images, and mutation requests subject to that guard.
 * @param {import('node:http').IncomingMessage} req
 * @param {import('node:http').ServerResponse} _res
 * @param {() => void} next
 */
export function normalizeEmbeddedNavigation(req, _res, next) {
  if (
    (req.method === "GET" || req.method === "HEAD") &&
    req.headers["sec-fetch-site"] === "cross-site" &&
    req.headers["sec-fetch-mode"] === "no-cors" &&
    (req.headers["sec-fetch-dest"] === "iframe" ||
      req.headers["sec-fetch-dest"] === "frame")
  ) {
    req.headers["sec-fetch-mode"] = "nested-navigate";
  }
  next();
}
