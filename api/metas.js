import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_FILE = path.join(__dirname, "../dist/client/metas/index.html");

export default function handler(req, res) {
  try {
    const content = fs.readFileSync(HTML_FILE, "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.end(content);
  } catch {
    res.statusCode = 500;
    res.end("Erro ao carregar o sistema de metas.");
  }
}
