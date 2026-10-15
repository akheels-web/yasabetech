import { createServer } from "node:http";
import { stat, readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

// A dependency-free local preview for the static export. No Cloudflare access.
const root = fileURLToPath(new URL("../out/", import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("No static export found. Run npm run build first.");
  process.exit(1);
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let target = resolve(root, `.${pathname}`);
    if (
      !target.startsWith(root.endsWith(sep) ? root : root + sep) &&
      target !== resolve(root)
    ) {
      response.writeHead(403);
      response.end();
      return;
    }
    let status = 200;
    try {
      if ((await stat(target)).isDirectory())
        target = resolve(target, "index.html");
      await stat(target);
    } catch {
      target = resolve(root, "404.html");
      status = 404;
    }
    const data = await readFile(target);
    response.writeHead(status, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Static preview: http://localhost:${port}`),
);
process.on("SIGINT", () => server.close());
