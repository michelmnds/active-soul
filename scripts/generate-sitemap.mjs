import { writeFile } from "node:fs/promises";
import { arts } from "../src/content/arts.js";
import { classes } from "../src/content/classes.js";
import { dances } from "../src/content/dances.js";
import { news } from "../src/content/news.js";
import { services } from "../src/content/services.js";

const siteUrl = "https://active-soul.com";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(dances.length === 7, "Expected 7 dances");
assert(classes.length === 7, "Expected 7 classes");
assert(arts.length === 3, "Expected 3 arts");
assert(services.length === 4, "Expected 4 services");
assert(news.length === 81, "Expected 81 events");
assert(new Set(news.map(({ id }) => id)).size === news.length, "Event IDs must be unique");
assert(news.every(({ date }) => /^\d{4}-\d{2}-\d{2}$/.test(date) && new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) === date), "Event dates must be valid ISO dates");
assert(news.flatMap(({ images = [] }) => images).length === 77, "Expected 77 gallery images");
const staticRoutes = ["", "dancas", "aulas", "artes", "eventos", "servicos", "equipa", "sobre"];
const detailRoutes = [
  ...dances.map(({ id }) => `danca/${id}`),
  ...classes.map(({ id }) => `aula/${id}`),
  ...arts.map(({ id }) => `arte/${id}`),
  ...news.map(({ id }) => `evento/${id}`),
  ...services.map(({ id }) => `servico/${id}`),
];

const urls = [...staticRoutes, ...detailRoutes];
assert(urls.length === 110, "Expected 110 sitemap URLs");
assert(new Set(urls).size === urls.length, "Sitemap URLs must be unique");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((route) => `  <url><loc>${siteUrl}/${route}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile(new URL("../public/sitemap.xml", import.meta.url), sitemap, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs`);
