import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const METAS_DIR = path.join(__dirname, "../dist/client/metas");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};

export default function handler(req, res) {
  const url = new URL(req.url, "http://localhost");
  let filePath = url.pathname.replace(/^\/metas/, "") || "/index.html";
  if (filePath === "/" || filePath === "") filePath = "/index.html";

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || "application/octet-stream";
  const fullPath = path.join(METAS_DIR, filePath);

  try {
    const content = fs.readFileSync(fullPath);
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-cache");
    res.end(content);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
}
