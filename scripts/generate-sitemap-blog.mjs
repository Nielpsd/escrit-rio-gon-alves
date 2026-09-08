// Gera dist/client/sitemap-blog.xml como arquivo estático no build,
// já que na Hostinger (hospedagem estática, sem Node) não existe api/sitemap-blog.js rodando.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(__dirname, "../dist/client/sitemap-blog.xml");
const SITE_URL = process.env.SITE_URL || "https://escritoriogoncalves.com";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

let posts = [];

if (supabaseUrl && supabaseKey) {
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/posts?select=slug,published_at&published=eq.true&order=published_at.desc`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );
    if (response.ok) {
      posts = await response.json();
    }
  } catch {
    // Se Supabase falhar, gera sitemap vazio mas válido
  }
} else {
  console.warn("[sitemap-blog] VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY ausentes — gerando sitemap vazio.");
}

const urls = posts
  .filter((p) => p.slug)
  .map(
    (p) => `
  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.published_at ? p.published_at.split("T")[0] : new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, xml, "utf-8");
console.log(`[sitemap-blog] gerado com ${posts.length} posts em ${OUT_FILE}`);
