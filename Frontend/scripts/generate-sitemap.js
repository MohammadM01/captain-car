import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://captaincarstudio.in";

const routes = [
  "/",
  "/services",
  "/products",
  "/why-us",
  "/guides",
  "/guides/ppf-vs-ceramic-coating",
  "/guides/how-to-fix-android-player-lag",
  "/guides/legal-sun-films",
  "/contact",
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  const publicPath = path.resolve(__dirname, "../public/sitemap.xml");
  fs.writeFileSync(publicPath, sitemap);
  console.log(`✅ Sitemap successfully generated at ${publicPath}`);
};

generateSitemap();
